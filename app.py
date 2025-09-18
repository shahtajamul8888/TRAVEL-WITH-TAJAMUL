import os
from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("FLASK_SECRET", "change_this_secret")
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite3')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ----- Models -----
class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(150))
    phone = db.Column(db.String(80), nullable=False)
    package = db.Column(db.String(200))
    dates = db.Column(db.String(100))
    notes = db.Column(db.Text)
    amount = db.Column(db.Integer, default=0)  # in smallest currency unit or rupees depending on integration
    paid = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<Booking {self.id} {self.name}>"

# initialize DB
with app.app_context():
    db.create_all()

# ----- Helpers -----
ADMIN_USER = os.getenv("ADMIN_USER", "admin")
ADMIN_PASS = os.getenv("ADMIN_PASS", "admin123")  # change in production!


# ----- Routes -----
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/book', methods=['POST'])
def book():
    # receive booking from frontend
    name = request.form.get('bname') or request.json.get('bname')
    phone = request.form.get('bphone') or request.json.get('bphone')
    dates = request.form.get('bdates') or request.json.get('bdates')
    notes = request.form.get('bnotes') or request.json.get('bnotes')
    package = request.form.get('bpackage') or request.json.get('bpackage', 'Custom Kashmir Trip')
    email = request.form.get('bemail') or request.json.get('bemail')

    if not name or not phone:
        flash("Please provide name and phone", "error")
        return redirect(url_for('index'))

    booking = Booking(
        name=name,
        email=email,
        phone=phone,
        package=package,
        dates=dates,
        notes=notes,
        amount=0,
        paid=False
    )
    db.session.add(booking)
    db.session.commit()

    # TODO: Integrate payment gateway here.
    # For now we show a success page with booking id and instructions.
    return render_template('booking_success.html', booking=booking)

# API endpoint to create booking via JS (returns JSON)
@app.route('/api/book', methods=['POST'])
def api_book():
    data = request.json or {}
    name = data.get('name')
    phone = data.get('phone')
    dates = data.get('dates')
    notes = data.get('notes')
    package = data.get('package', 'Custom Kashmir Trip')
    email = data.get('email')

    if not name or not phone:
        return jsonify({'error': 'name and phone required'}), 400

    booking = Booking(
        name=name, phone=phone, dates=dates, notes=notes, package=package, email=email
    )
    db.session.add(booking)
    db.session.commit()

    # Payment integration placeholder:
    # You can create a payment order here using Razorpay/Cashfree/Stripe SDK
    # and return the payment link / order id to frontend to complete payment.
    payment_placeholder = url_for('index', _external=True) + "#payment-not-implemented"

    return jsonify({
        'success': True,
        'booking_id': booking.id,
        'payment_url': payment_placeholder,
        'message': 'Booking created (payment not integrated in this demo).'
    })

# Admin login page
@app.route('/admin/login', methods=['GET', 'POST'])
def admin_login():
    if request.method == 'POST':
        user = request.form.get('username')
        pwd = request.form.get('password')
        if user == ADMIN_USER and pwd == ADMIN_PASS:
            # very simple auth: set session cookie (not secure for production)
            # We'll store a flag in session
            from flask import session
            session['admin_logged_in'] = True
            return redirect(url_for('admin_dashboard'))
        else:
            flash('Invalid credentials', 'error')
            return redirect(url_for('admin_login'))
    return render_template('admin_login.html')

# Admin dashboard - list bookings
@app.route('/admin')
def admin_dashboard():
    from flask import session
    if not session.get('admin_logged_in'):
        return redirect(url_for('admin_login'))
    bookings = Booking.query.order_by(Booking.created_at.desc()).all()
    return render_template('admin_dashboard.html', bookings=bookings)

# Mark booking as paid (admin action)
@app.route('/admin/mark_paid/<int:booking_id>', methods=['POST'])
def mark_paid(booking_id):
    from flask import session
    if not session.get('admin_logged_in'):
        return redirect(url_for('admin_login'))
    b = Booking.query.get_or_404(booking_id)
    b.paid = True
    db.session.commit()
    flash('Marked as paid', 'success')
    return redirect(url_for('admin_dashboard'))

# Admin logout
@app.route('/admin/logout')
def admin_logout():
    from flask import session
    session.pop('admin_logged_in', None)
    flash('Logged out', 'info')
    return redirect(url_for('admin_login'))

# Webhook endpoint placeholder for payment gateway
@app.route('/payment/webhook', methods=['POST'])
def payment_webhook():
    # Payment gateway will call this endpoint to inform about payment status.
    # Validate signature here (gateway-specific), then update booking record.
    payload = request.json or {}
    # Example:
    # booking_id = payload.get('booking_id')
    # payment_status = payload.get('status')
    # if payment_status == 'SUCCESS': set Booking.paid = True
    return jsonify({'status': 'received'})

if __name__ == '__main__':
    app.run(debug=True)
