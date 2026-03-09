// ============================================================
//  app.js  —  UI controller
//  All Zoho API calls go through the backend proxy at:
//  POST http://localhost:3001/proxy
//  (no CORS errors because it's server-to-server)
// ============================================================

const PROXY_URL = "http://localhost:3001/proxy";

// ── Helpers ───────────────────────────────────────────────────
const $ = id => document.getElementById(id);
let currentApp = null;

// ── Proxy health check ────────────────────────────────────────
async function checkProxy() {
  const pill  = $("proxy-pill");
  const label = $("proxy-label");
  try {
    const res = await fetch("http://localhost:3001/health", { signal: AbortSignal.timeout(3000) });
    if (res.ok) {
      pill.className  = "ok";
      label.textContent = "Proxy online";
    } else throw new Error();
  } catch {
    pill.className  = "err";
    label.textContent = "Proxy offline — start backend!";
  }
}
checkProxy();
setInterval(checkProxy, 15_000);

// ── Sidebar: app selection ─────────────────────────────────────
$("app-list").addEventListener("click", e => {
  const item = e.target.closest(".app-item");
  if (!item) return;
  document.querySelectorAll(".app-item").forEach(el => el.classList.remove("active"));
  item.classList.add("active");
  currentApp = item.dataset.app;
  loadEndpoints(currentApp);
  const name = item.textContent.trim();
  $("active-app-badge").textContent = name;
  $("active-app-badge").style.display = "inline-flex";
  $("status-app").textContent = "Zoho " + name;
});

// ── Sidebar: search filter ─────────────────────────────────────
$("search-input").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  document.querySelectorAll(".app-item").forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(q) ? "" : "none";
  });
  document.querySelectorAll(".category-header").forEach(cat => {
    let next = cat.nextElementSibling, anyVisible = false;
    while (next && !next.classList.contains("category-header")) {
      if (next.style.display !== "none") anyVisible = true;
      next = next.nextElementSibling;
    }
    cat.style.display = anyVisible ? "" : "none";
  });
});

// ── Load endpoints into dropdown ──────────────────────────────
function loadEndpoints(app) {
  const select = $("api-samples");
  select.innerHTML = "";
  Object.keys(zohoApiSamples[app]).forEach(key => {
    const opt = document.createElement("option");
    opt.value = opt.textContent = key;
    select.appendChild(opt);
  });
  select.dispatchEvent(new Event("change"));
}

// ── Endpoint → fill fields ─────────────────────────────────────
$("api-samples").addEventListener("change", () => {
  if (!currentApp) return;
  const sample = zohoApiSamples[currentApp][$("api-samples").value];
  if (!sample) return;

  const badge = $("method-badge");
  badge.textContent = sample.method;
  badge.className   = "method-badge " + sample.method;

  $("url").value          = sample.url;
  $("params-input").value = JSON.stringify(sample.params  ?? {}, null, 2);
  $("headers-input").value= JSON.stringify(sample.headers ?? {}, null, 2);
  $("body-input").value   = sample.body ? JSON.stringify(sample.body, null, 2) : "";
  $("scope-display").textContent = sample.scope || "—";
  $("status-method").textContent = sample.method + " · " + sample.url.replace("https://", "").split("/")[0];
});

// ── Panel tabs ────────────────────────────────────────────────
document.querySelectorAll("[data-pane]").forEach(btn => {
  btn.addEventListener("click", () => {
    const panelEl = btn.closest(".panel");
    panelEl.querySelectorAll(".panel-tab").forEach(t => t.classList.remove("active"));
    btn.classList.add("active");
    panelEl.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
    const pane = document.getElementById("pane-" + btn.dataset.pane);
    if (pane) pane.classList.add("active");
  });
});

// ── Copy buttons ──────────────────────────────────────────────
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const el   = $(btn.dataset.target);
    const text = el.tagName === "PRE" ? el.textContent : el.value;
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = "copied ✓";
      btn.classList.add("copied");
      setTimeout(() => { btn.textContent = "copy"; btn.classList.remove("copied"); }, 1500);
    });
  });
});

// ── JSON syntax highlighter ───────────────────────────────────
function highlight(json) {
  if (typeof json !== "string") json = JSON.stringify(json, null, 2);
  return json
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/("(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, match => {
      let cls = "json-num";
      if (/^"/.test(match)) cls = /:$/.test(match) ? "json-key" : "json-str";
      else if (/true|false/.test(match)) cls = "json-bool";
      else if (/null/.test(match)) cls = "json-null";
      return `<span class="${cls}">${match}</span>`;
    });
}

// ── SEND via proxy ────────────────────────────────────────────
$("send-btn").addEventListener("click", async () => {
  const method = $("method-badge").textContent.trim();
  const url    = $("url").value.trim();
  let params = {}, headers = {}, body = null;

  try {
    params  = JSON.parse($("params-input").value  || "{}");
    headers = JSON.parse($("headers-input").value || "{}");
    body    = $("body-input").value ? JSON.parse($("body-input").value) : null;
  } catch {
    alert("Invalid JSON in Params / Headers / Body");
    return;
  }

  // UI: loading
  $("global-spinner").classList.add("active");
  $("send-btn").textContent = "SENDING…";
  $("send-btn").disabled    = true;
  $("response-placeholder").style.display = "none";
  $("response-output").style.display      = "none";
  $("response-meta").style.display        = "none";

  try {
    // ★ Send to backend proxy, not directly to Zoho ★
    const proxyRes = await fetch(PROXY_URL, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, method, headers, params, body }),
    });

    if (!proxyRes.ok) {
      const err = await proxyRes.json().catch(() => ({ message: "Unknown proxy error" }));
      throw new Error(err.message || "Proxy error " + proxyRes.status);
    }

    // Proxy returns: { status, statusText, headers, body, elapsed_ms, size_bytes }
    const data = await proxyRes.json();

    const statusEl = $("status-chip");
    statusEl.textContent = data.status + " " + (data.statusText || "");
    statusEl.className   = "status-chip status-" + (data.status < 300 ? "2xx" : data.status < 500 ? "4xx" : "5xx");
    $("time-chip").textContent = "⏱ " + data.elapsed_ms + " ms";
    $("size-chip").textContent = "⬇ " + (data.size_bytes / 1024).toFixed(1) + " KB";
    $("response-meta").style.display = "flex";

    const out = $("response-output");
    out.style.display = "block";
    out.innerHTML = typeof data.body === "object"
      ? highlight(JSON.stringify(data.body, null, 2))
      : String(data.body);

    $("response-headers-output").innerHTML = highlight(JSON.stringify(data.headers ?? {}, null, 2));

  } catch (err) {
    $("response-placeholder").style.display = "flex";
    $("response-placeholder").innerHTML = `
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="16" stroke="#ff4e6a" stroke-width="1.5"/>
        <path d="M20 12v10M20 27v2" stroke="#ff4e6a" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <p style="color:var(--red)">Error: ${err.message}</p>
      <p style="font-size:11px;margin-top:4px;">Is the backend running?  →  <code style="color:var(--accent)">cd backend && npm start</code></p>`;
  } finally {
    $("global-spinner").classList.remove("active");
    $("send-btn").textContent = "SEND ▶";
    $("send-btn").disabled    = false;
  }
});

// ── Panel resizer ─────────────────────────────────────────────
const resizer   = $("resizer");
const leftPanel = $("left-panel");
const panels    = $("panels");
let isResizing  = false;

resizer.addEventListener("mousedown", () => {
  isResizing = true;
  document.body.style.cursor     = "col-resize";
  document.body.style.userSelect = "none";
});
document.addEventListener("mousemove", e => {
  if (!isResizing) return;
  const rect = panels.getBoundingClientRect();
  const newW = Math.min(Math.max(e.clientX - rect.left, 260), rect.width - 260);
  leftPanel.style.flex  = "none";
  leftPanel.style.width = newW + "px";
});
document.addEventListener("mouseup", () => {
  isResizing = false;
  document.body.style.cursor     = "";
  document.body.style.userSelect = "";
});

// ── Auto-select CRM on load ───────────────────────────────────
document.querySelector(".app-item[data-app='crm']")?.click();