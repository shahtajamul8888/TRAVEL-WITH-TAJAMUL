:root{
  --bg:#0F4C5C;       /* Deep Teal */
  --card:#123840;     /* Darker teal for panels */
  --acc:#F4BF4F;      /* Warm Gold */
  --acc-2:#4FB3F6;    /* Sky Blue */
  --txt:#F5E6CA;      /* Soft Sand */
  --muted:#BFD8D2;    /* Muted teal-gray */
  --border:#1f2a44;
  --danger:#ef476f;
}
*{box-sizing:border-box}
html,body{
  margin:0;padding:0;
  background:linear-gradient(180deg,#0a1020 0%,var(--bg) 100%);
  color:var(--txt);
  font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,"Helvetica Neue",Arial,sans-serif
}
a{color:inherit;text-decoration:none}
.container{max-width:1100px;margin:0 auto;padding:16px}
header{display:flex;align-items:center;justify-content:space-between;padding:12px 0}
.brand{display:flex;align-items:center;gap:12px}
.logo{
  width:36px;height:36px;border-radius:8px;display:grid;place-items:center;
  background:conic-gradient(from 220deg at 50% 50%, var(--acc), var(--acc-2), var(--acc));
  box-shadow:0 10px 30px rgba(244,191,79,.25);
}
.brand h1{font-size:18px;margin:0;font-weight:700;letter-spacing:.3px}
.cta{display:flex;gap:10px}
.btn{
  padding:10px 14px;border:1px solid var(--border);background:transparent;color:var(--txt);
  border-radius:10px;font-weight:600;cursor:pointer;transition:.2s;
}
.btn:hover{border-color:var(--acc);box-shadow:0 6px 18px rgba(244,191,79,.18)}
.btn-primary{background:var(--acc);border-color:transparent;color:#031316}
.hero{
  display:grid;grid-template-columns:1.2fr .8fr;gap:22px;align-items:center;margin:18px 0 24px;
}
.hero-copy h2{font-size:36px;line-height:1.1;margin:0 0 10px}
.hero-copy p{color:var(--muted);margin:0 0 16px}
.badge{display:inline-flex;align-items:center;gap:8px;background:#0f1b30;border:1px solid var(--border);color:var(--muted);padding:8px 12px;border-radius:999px}
.glow{color:var(--acc);font-weight:700}
.panel{
  background:rgba(18,56,64,.85);backdrop-filter:blur(8px);border:1px solid var(--border);
  border-radius:16px;padding:14px;
  box-shadow:0 12px 40px rgba(3,10,28,.45), inset 0 1px 0 rgba(255,255,255,.03);
}
.tabs{display:flex;gap:10px;margin-bottom:10px;flex-wrap:wrap}
.tab{
  padding:8px 12px;border:1px solid var(--border);border-radius:999px;color:var(--muted);cursor:pointer;background:#0f1b30;transition:.2s
}
.tab.active{border-color:var(--acc);color:#0b1320;background:linear-gradient(180deg,var(--acc-2),var(--acc))}
.form{
  display:grid;grid-template-columns:repeat(6,1fr);gap:10px;align-items:end
}
.field{display:flex;flex-direction:column;gap:6px}
label{font-size:12px;color:var(--muted)}
input,select,button{
  height:42px;border-radius:10px;border:1px solid var(--border);background:#0f1b30;color:var(--txt);
  padding:10px 12px;font-size:14px;outline:0;transition:.2s
}
input:focus,select:focus{border-color:var(--acc);box-shadow:0 0 0 3px rgba(244,191,79,.2)}
.swap{