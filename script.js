// Tabs
const tabs = document.querySelectorAll('.tab');
let activeTab = 'flights';
tabs.forEach(t => t.addEventListener('click', () => {
  tabs.forEach(x => {
    x.classList.remove('active');
    x.setAttribute('aria-selected', 'false');
  });
  t.classList.add('active');
  t.setAttribute('aria-selected', 'true');
  activeTab = t.dataset.tab;
  document.getElementById('trav').placeholder =
    activeTab === 'hotels' ? '2 Guests • 1 Room' :
    activeTab === 'packages' ? '2 Travellers' :
    '1 Adult • Economy';
}));

// Swap locations
document.getElementById('swapBtn').addEventListener('click', () => {
  const a = document.getElementById('from');
  const b = document.getElementById('to');
  [a.value, b.value] = [b.value, a.value];
  a.focus();
});

// Presets click + keyboard access
function setWeekend() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun..6=Sat
  const toSat = (6 - day + 7) % 7 || 7;
  const toSun = (7 - day + 7) % 7 || 8;
  const sat = new Date(); sat.setDate(now.getDate() + toSat);
  const sun = new Date(); sun.setDate(now.getDate() + toSun);
  document.getElementById('depart').value = sat.toISOString().slice(0,10);
  document.getElementById('return').value = sun.toISOString().slice(0,10);
}
function setMonth() {
  const d = new Date();
  d.setDate(1);
  const start = d.toISOString().slice(0,10);
  const e = new Date(d); e.setMonth(e.getMonth()+1); e.setDate(0);
  const end = e.toISOString().slice(0,10);
  document.getElementById('depart').value = start;
  document.getElementById('return').value = end;
}
function toggleNonstop(el) {
  el.classList.toggle('active');
  el.style.borderColor = el.classList.contains('active') ? 'var(--acc)' : 'var(--border)';
}

document.querySelectorAll('.pill').forEach(p => {
  p.addEventListener('click', () => {
    if (p.dataset.preset === 'weekend') setWeekend();
    if (p.dataset.preset === 'month') setMonth();
    if (p.dataset.preset === 'nonstop') toggleNonstop(p);
  });
  p.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      p.click();
    }
  });
});

// Date guards: no past dates
const departInput = document.getElementById('depart');
const returnInput = document.getElementById('return');
const today = new Date(); today.setHours(0,0,0,0);
const todayISO = today.toISOString().slice(0,10);
departInput.min = todayISO;
returnInput.min = todayISO;

departInput.addEventListener('change', () => {
  if (returnInput.value && returnInput.value < departInput.value) {
    returnInput.value = departInput.value;
  }
  returnInput.min = departInput.value || todayISO;
});

// Search submit
document.getElementById('searchForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const q = {
    tab: activeTab,
    from: document.getElementById('from').value.trim(),
    to: document.getElementById('to').value.trim(),
    depart: departInput.value,
    ret: returnInput.value,
    trav: document.getElementById('trav').value.trim(),
    nonstop: !!document.querySelector('.pill[data-preset="nonstop"].active')
  };

  // Basic validation
  if (!q.from || !q.to) {
    alert('Please enter both origin and destination.');
    return;
  }
  if (!q.depart) {
    alert('Please select a departure date.');
    return;
  }

  const params = new URLSearchParams(q).toString();
  // Placeholder: navigate to results page when ready
  alert('Searching: ' + params);
  // window.location.href = '/results?' + params;
});