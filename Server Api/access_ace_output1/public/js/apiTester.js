// ============================================================
//  ACCESS ACE — Zoho API Tester
//  Auto-fills URL, params, headers, body with dummy data
//  when an endpoint is selected from the list
// ============================================================

const PROXY = '/api-proxy';
let currentApp  = null;
let lastResText = '';

// ── Boot ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    populateAppSelect();
    wireTabBars();
    document.getElementById('endpoint-search').addEventListener('input', e => {
        if (!currentApp) return;
        const scopeVal = document.getElementById('scope-select').value;
        renderEndpoints(currentApp, scopeVal, e.target.value);
    });
});

// ── App selector ─────────────────────────────────────────────
function populateAppSelect() {
    const sel = document.getElementById('app-select');
    ZOHO_API_DATA.apps.forEach(({ key, label }) => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = label;
        sel.appendChild(opt);
    });

    sel.addEventListener('change', () => {
        const key = sel.value;
        clearRequestPanel();
        document.getElementById('endpoint-list').innerHTML = '<div class="ep-empty">Select an app above to see endpoints</div>';

        if (!key) {
            currentApp = null;
            document.getElementById('scope-group').style.display = 'none';
            return;
        }
        currentApp = key;
        populateScopeSelect(key);
        renderEndpoints(key, '', '');
    });
}

// ── Scope selector ────────────────────────────────────────────
function populateScopeSelect(appKey) {
    const appData  = ZOHO_API_DATA.data[appKey];
    const scopeSel = document.getElementById('scope-select');
    const grp      = document.getElementById('scope-group');

    scopeSel.innerHTML = '<option value="">— All Scopes —</option>';

    if (appData && appData.scopes && appData.scopes.length) {
        appData.scopes.forEach(scope => {
            const opt = document.createElement('option');
            opt.value = scope;
            opt.textContent = scope;
            scopeSel.appendChild(opt);
        });
        grp.style.display = 'flex';
    } else {
        grp.style.display = 'none';
    }

    scopeSel.onchange = () => {
        const search = document.getElementById('endpoint-search').value;
        renderEndpoints(appKey, scopeSel.value, search);
        // Auto-clear selection when scope changes
        document.querySelectorAll('.ep-item').forEach(i => i.classList.remove('selected'));
    };
}

// ── Endpoint list ─────────────────────────────────────────────
function renderEndpoints(appKey, scopeFilter, textFilter) {
    const appData = ZOHO_API_DATA.data[appKey];
    const list    = document.getElementById('endpoint-list');
    list.innerHTML = '';

    if (!appData || !appData.endpoints) {
        list.innerHTML = '<div class="ep-empty">No endpoints available.</div>';
        return;
    }

    const entries = Object.entries(appData.endpoints).filter(([name, ep]) => {
        const matchScope = !scopeFilter || ep.scope === scopeFilter;
        const matchText  = !textFilter  || name.toLowerCase().includes(textFilter.toLowerCase());
        return matchScope && matchText;
    });

    if (!entries.length) {
        list.innerHTML = '<div class="ep-empty">No matching endpoints.</div>';
        return;
    }

    entries.forEach(([name, ep]) => {
        const item = document.createElement('div');
        item.className = 'ep-item';
        item.innerHTML = `
            <span class="ep-method ep-${(ep.method||'GET').toLowerCase()}">${ep.method||'GET'}</span>
            <span class="ep-name">${name}</span>
        `;
        item.addEventListener('click', () => loadEndpoint(name, ep, item));
        list.appendChild(item);
    });
}

// ── Load endpoint — auto-fill all dummy data ──────────────────
function loadEndpoint(name, ep, itemEl) {
    document.querySelectorAll('.ep-item').forEach(i => i.classList.remove('selected'));
    itemEl.classList.add('selected');

    // Method & URL
    document.getElementById('req-method').value = ep.method || 'GET';
    document.getElementById('req-url').value     = ep.url    || '';

    // Scope badge
    const badge = document.getElementById('scope-badge');
    if (ep.scope) {
        badge.textContent   = ep.scope;
        badge.style.display = 'inline-block';
    } else {
        badge.style.display = 'none';
    }

    // ── PARAMS ──
    const params = ep.params && Object.keys(ep.params).length ? ep.params : null;
    document.getElementById('req-params').value = params
        ? JSON.stringify(params, null, 2)
        : '';

    // ── HEADERS (strip auth - user pastes token separately) ──
    const headers = ep.headers && Object.keys(ep.headers).length ? ep.headers : null;
    document.getElementById('req-headers').value = headers
        ? JSON.stringify(headers, null, 2)
        : '';

    // ── BODY ──
    document.getElementById('req-body').value = ep.body
        ? JSON.stringify(ep.body, null, 2)
        : '';

    // Auto-switch to the relevant tab
    if (ep.body && ep.method !== 'GET' && ep.method !== 'DELETE') {
        activateTab('req-tab-bar', 'body');
    } else if (params) {
        activateTab('req-tab-bar', 'params');
    } else {
        activateTab('req-tab-bar', 'params');
    }
}

function clearRequestPanel() {
    document.getElementById('req-method').value = 'GET';
    document.getElementById('req-url').value     = '';
    document.getElementById('req-params').value  = '';
    document.getElementById('req-headers').value = '';
    document.getElementById('req-body').value    = '';
    document.getElementById('scope-badge').style.display = 'none';
}

// ── Tab bars ──────────────────────────────────────────────────
function wireTabBars() {
    ['req-tab-bar', 'res-tab-bar'].forEach(barId => {
        const bar = document.getElementById(barId);
        if (!bar) return;
        bar.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                activateTab(barId, btn.dataset.tab);
            });
        });
    });
}

function activateTab(barId, tabKey) {
    const bar = document.getElementById(barId);
    if (!bar) return;
    bar.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.tab === tabKey);
    });
    const prefix = barId === 'req-tab-bar' ? 'req-tab-' : 'res-tab-';
    const parent = bar.closest('.tester-panel');
    parent.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(prefix + tabKey);
    if (target) target.classList.add('active');
}

// ── Send Request ──────────────────────────────────────────────
async function sendRequest() {
    const url = document.getElementById('req-url').value.trim();
    if (!url) { alert('Please select an endpoint or enter a URL first.'); return; }

    const method = document.getElementById('req-method').value;
    const token  = document.getElementById('req-token').value.trim();

    let params = {};
    try { params = JSON.parse(document.getElementById('req-params').value || '{}'); } catch {}

    let headers = {};
    try { headers = JSON.parse(document.getElementById('req-headers').value || '{}'); } catch {}
    if (token) headers['Authorization'] = 'Zoho-oauthtoken ' + token;
    if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';

    let body = null;
    if (method !== 'GET' && method !== 'DELETE') {
        const raw = document.getElementById('req-body').value.trim();
        if (raw) body = raw;
    }

    const spinner = document.getElementById('send-spinner');
    const sendBtn = document.getElementById('send-btn');
    spinner.style.display = 'inline';
    sendBtn.disabled = true;

    document.getElementById('res-body-wrap').innerHTML = '<div class="res-loading">⟳ Sending…</div>';
    document.getElementById('res-meta').style.display = 'none';
    document.getElementById('copy-res-btn').style.display = 'none';

    try {
        const proxyRes = await fetch(PROXY, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url, method, headers, params, body })
        });
        if (!proxyRes.ok) {
            const err = await proxyRes.json().catch(() => ({ error: proxyRes.statusText }));
            throw new Error(err.error || 'Proxy returned ' + proxyRes.status);
        }
        const data = await proxyRes.json();
        renderResponse(data);
    } catch (err) {
        document.getElementById('res-body-wrap').innerHTML =
            '<div class="res-error"><strong>⚠ Request Failed</strong><br><br>' + escHtml(err.message) + '</div>';
    } finally {
        spinner.style.display = 'none';
        sendBtn.disabled = false;
    }
}

// ── Render Response ───────────────────────────────────────────
function renderResponse(data) {
    const metaEl   = document.getElementById('res-meta');
    const statusEl = document.getElementById('res-status');
    const timeEl   = document.getElementById('res-time');
    const sizeEl   = document.getElementById('res-size');
    metaEl.style.display = 'flex';

    const ok        = data.status >= 200 && data.status < 300;
    const clientErr = data.status >= 400 && data.status < 500;
    statusEl.textContent = data.status + ' ' + data.statusText;
    statusEl.className   = 'res-status-badge ' + (ok ? 'status-2xx' : clientErr ? 'status-4xx' : 'status-5xx');
    timeEl.textContent   = data.elapsed_ms + ' ms';
    sizeEl.textContent   = fmtBytes(data.size_bytes);

    const bodyWrap = document.getElementById('res-body-wrap');
    try {
        const parsed = typeof data.body === 'string' ? JSON.parse(data.body) : data.body;
        lastResText  = JSON.stringify(parsed, null, 2);
        bodyWrap.innerHTML = '<pre class="json-view">' + jsonHL(lastResText) + '</pre>';
    } catch {
        lastResText = String(data.body);
        bodyWrap.innerHTML = '<pre class="json-view">' + escHtml(lastResText) + '</pre>';
    }
    document.getElementById('copy-res-btn').style.display = 'inline-block';

    const hdrsWrap = document.getElementById('res-hdrs-wrap');
    if (data.headers && Object.keys(data.headers).length) {
        hdrsWrap.innerHTML = '<pre class="json-view">' + jsonHL(JSON.stringify(data.headers, null, 2)) + '</pre>';
    } else {
        hdrsWrap.innerHTML = '<div class="res-empty-state">No headers returned.</div>';
    }
}

// ── Helpers ───────────────────────────────────────────────────
function jsonHL(json) {
    return json.replace(
        /("(?:\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(?:true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        m => {
            let c = 'jn';
            if (/^"/.test(m)) c = /:$/.test(m) ? 'jk' : 'js';
            else if (/true|false/.test(m)) c = 'jb';
            else if (/null/.test(m))       c = 'jnl';
            return '<span class="' + c + '">' + m + '</span>';
        }
    );
}
function escHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function fmtBytes(b) {
    if (!b) return '0 B';
    return b < 1024 ? b + ' B' : (b/1024).toFixed(1) + ' KB';
}
function copyField(id) {
    const el = document.getElementById(id);
    navigator.clipboard.writeText(el.value).catch(() => { el.select(); document.execCommand('copy'); });
}
function copyResBody() {
    navigator.clipboard.writeText(lastResText).catch(() => {});
}
