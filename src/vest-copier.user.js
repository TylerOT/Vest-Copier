// ==UserScript==
// @name         Vest Copier
// @namespace    vestcopier
// @version      0.38.0
// @description  Copies a master Vest account's trades to your other Vest accounts, live, and adds a points-based order panel.
// @author       xAmped
// @license      STRATUH Copier License — free to use, no selling; see LICENSE
// @homepageURL  https://github.com/xAmped/Vest-Copier
// @supportURL   https://github.com/xAmped/Vest-Copier/issues
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAHwklEQVR4Aexab2wUVRCfWVojiMp9QCFSqEFjjCHRRBNNRHbFWkSNNRFRKVoTo3zQpDXSI7bCAS3hikmbyAckJlYpCmJCCX+kFNytmGiCCSTEECIqUAggHw7kn7HtPn/zdreU2j1YKAdsu9nfmzfzZt7M+73Xvb1LDRrg1yABA/wA0OAJCDsBU6aUmFOnlqQCFBc/t+Dpp5+tmTSpKD19+oyVb7/9niOorKxOXSnmzKk2w+q42vbQE2AYJEXNIyIf/JFSqgp6ZX7+Ta8lEiMmCZh53pXCdUly0bW4Qgnouxju23wDWyMSoIhjxkFEApiUuoG3u4/SIxIQs9WDkIgExOz8RydADT4DBswzYNOm5hTAAVpa1nNr60Zua2vlpqbPOZ1e2G+oq6tJ4TRekzviM+Ca1HhVkw44AnqzGUpAOl1fXldXvz9AbW3dgfnzFx1MJqsOrVu3MXPo0OFOQSZzYn8m5zhZ3nshl6uHEoAJRxDxOAEefCLHQhYAd+Xl5Y0YPnz4EAEzj8s1iAi1Ub9cxqXPEr+PQFl7BALIfw2O18tQJAJYr10JcbFBBALi90VIdvGSCAh23pMSFh9cEgF48usVe1L/HWg9Dk02AnbhJ7AvBFgoJK+AXAl8c/bs2e3t7Yd+F4AUjFFOQcS7qJ+uUAKSyYpmoCxAdfXs11OpD0vx3j592rQXn5gw4YF7BInE7WW5x23N/bT+wZ/FQ0/ArPpRhe/WjzIDzFpy55Pv1N45eebcO4qTTWNLl2y7r3yJfV/5ivaHTcHX7Y+agjVHHjc9mObaI4KnzPVHgOOCKeZ3xwXPma3HfWRKTFvjJXN7RvAK5CvmT6dKNXZA7jhVZgp2nnrL3HnOw+5zs0zBnnPvmns6BOXmbx2CD8w/O3yoOWY7cETNKQw7MaEEGK5RppRha7iQXca2LmVsVZ20+eZb8leMHD+0ftT44fWkyB5Cho3XJNswxM+1WbFtKNfGryc2U5etDLLJZdgU5iObWdkuQ8KfXWUT/PEhaytmxLiYh2zldtlMZLskNmXjE8imIcom+BvIp0jZBvxdds/ng7/Oh/nJ4O58LhllkQnoGaBEQTVIKj0NZpSsFMFMSiy+Tj0kYVx0keLnuaEHO1odF0gZU7BrKQ3mkTjpCpj9fJBiD+KYPbv4aEAXKeMiBa40ITBC7BeY9WRYJRN7dghdLJLBrK2iM2MAHsyQ/mKkWIIufhiCip6vw8sjAToG4CYWIt1KvNjJu2R+6YlkxqKhBH7MugcLbj9O/KDpO9sis43pYGlQMklV3ScABmYkRTK03YsIkmKYui/fL9CZEdFXHOxBvPaFrknRChEz4oi0FD/RdB7YRSdcgS5xcCSR4tf/J0CSySIkOfqSRCeDriVs+vZ1XYw2SE0oE3a0JHFSvEgdB7vvJo5E0MWPcImf1pFXS9gkTuzM0iPSrYyTf8Eu8dl2OduYPwtqkR5m7z4B0JlxDJEMZn0CyNd7SlmU6CLFD2FQ0esRB+3CeDhJ0XBEYt3TkhmeEhdI34/ZqwOqd0OXDrxFaPTjCdDzEWH2gHkpESrWqIhZehgWiWJJLpHQlfSB/8XBpqPgx6x7pFvo5OsiJQ6umixmLBpK4Mese7Dg9uOCfLBQtl3ONiaxGnoy5NBSLOgwowgkg/l8UdD9YREe4Ad2vD5a5j7iYO+5SFFF7x0ndp0PebTUBm8+6aIsuiDO97usE+AabiOzawkMA9JwJ+exeorzaMo/ZzpmHt13tuLYH2cqFJOFz2ULLFjYJYtdtoiV5bJhERFsiFWwucoyGJKUpciwWJFFhmG5XYQcYmMLu4F5YDMINtdS8HfhT4h3Ec/wV5KPh2BuxtzK0vng7yIfSIHNtRj+eF+w8F5iEfzzyG1ELX3eyNmnnZZVHN2/tOKoE2DZ7GPff1p1bNuKBX+1pEsPNiUn722Ybe1tmFnwi/Nqwc/dmFbwozNttMBxXhzt4fnRWx3BMyM3Ox42OEUjgUQzZLNjQVqJb52JGqucibeuch7TaIJsch65tVHjoaGfOYIJQ5c5Ae4futS5P1/Q4Nyb7+Hu/I8dQQEvdgSjefH+vldJFEpAWEDc7KEEpNP1JUBjgJqaJV+mUouaKiurV69Zs/aH3bt/3SfIZE425g5/l/T3BoQSgEQPMvMbAvQh1UxmmoHPpJeHDRs2saBgzHgBbBijnAC5H0Qt/XpnI6BXInna9jLFQI1AgCLsdgyWfOESIhCAA6gkmKWJDSIR4J0AzcJAJGAAPwOCnfdkbDZfLyTbn8AJ/NUfEOAVF5IOot8OEg53dnaeOH36dJdAxnIFVIya0Ga5ow6FEoCfwxsqKysKBcnk+4VVVZXj5s2rGptO14554YVnE2PG3JUnSCRGFOYOtzdEXeDF/EMJuFhgXMYHCQjbSf/f5BWkRnHx86qoaKoyzSJVWvqmSiY/umzg+0QqLG+u7RFPQPw+CiMSEK+XIDltEQlgiYkVIhKgYveFKCIBg8+AWB1/WUzkEyBBcUIoAa5LDhHNPw+1EN8DaqHXdXT8+1Umc6JNgO8B86PCMEjmpuvhCiVg8+ZmZ5P3L/Pyb/OplpYNc7ds2Vjd1taaXL165Yzlyz8xBXV1NamoWLy45von4HrYnVzUEHoCcpH8eshxwxNwpST+BwAA//8h3IihAAAABklEQVQDADro88wjRs5WAAAAAElFTkSuQmCC
// @updateURL    https://raw.githubusercontent.com/xAmped/Vest-Copier/main/src/vest-copier.user.js
// @downloadURL  https://github.com/xAmped/Vest-Copier/releases/latest/download/vest-copier.user.js
// @match        https://next.vestmarkets.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

// STRATUH Copier (formerly Vest Copier) — Copyright (c) 2026 xAmped. Free to use for your own trading and to share unmodified; not for sale.
// Full terms: LICENSE (https://github.com/xAmped/Vest-Copier/blob/main/LICENSE). Not affiliated with Vest Markets.

(() => {
  'use strict';
  if (window.__vestCopier) return;
  window.__vestCopier = true;
  // How the script started, for the diagnostics: the page's load state (a late start can miss Vest's first requests) and
  // whether this is a frame (Vest's chart is one) rather than the page.
  const BOOT_STATE = {
    readyState: document.readyState,
    ms: Math.round(performance.now()),
    frame: (() => {
      try {
        return window.top !== window;
      } catch {
        return true;
      }
    })(),
  };

  const VERSION = '0.38.0';
  const API = 'https://api-gateway.hz.vestmarkets.com';
  const _fetch = window.fetch.bind(window);
  // Console echo of the activity log, for troubleshooting: localStorage.setItem('vc-debug', '1') and reload.
  const DEBUG = (() => {
    try {
      return localStorage.getItem('vc-debug') === '1';
    } catch {
      return false;
    }
  })();
  const LOG = (...a) => {
    if (DEBUG) console.log('%c[VC]', 'color:#35c48a;font-weight:bold', ...a);
  };

  // ── Tunables
  const DEFAULT_SYMBOL = 'NDX-USD-PERP';
  const DEFAULT_LEVERAGE = '50'; // close-order leverage when an account's own isn't known (Vest requires the field)
  const CAP_BUFFER = 0.95; // cap-to-fit: 5% headroom under a smaller follower's proportional size
  const EPS = 1e-9; // float slack when counting whole size steps
  const PRICE_EPS = 1e-6; // two trigger prices closer than this are the same price
  const NEAR_MARKET = 0.01; // a fill or entry used to place legs must be within 1% of the market...
  const NEAR_MARKET_LOOSE = 0.1; // ...or 10% for an entry that may be hours old (a held position, a saved plan)
  const EXEC_WINDOW_S = 900; // /executions lookup window either side of now
  const FILL_FIRST_LOOK_MS = 800; // let a fill reach /executions before the first look
  const FILL_TRIES = 3,
    FILL_RETRY_MS = 1500;
  const POLL_MS = 700; // re-reading a position after an order (re-anchor, add)
  const LEG_SYNC_DELAY_MS = 800; // re-read leg ids after a leg is added
  const RESYNC_AFTER_REDUCE_MS = 2000; // re-read sizes after a reduce
  const EXIT_RETRY_MS = 400; // one retry of a follower close/reduce on 429/5xx
  const BALANCE_AFTER_TRADE_MS = 1500;
  const BALANCE_POLL_MS = 20000; // full re-read of every account while Vest's live feed is down
  const FEED_BACKSTOP_MS = 60000; // ...and while it is up: the feed carries every change, this catches anything missed
  const FEED_QUIET_MS = 75000; // Vest pings its feed every 30 s: this long without a message means it's down
  const FEED_FILL_WAIT_MS = 1500; // a fill check waits this long for the live feed before asking Vest's fill history
  const VEST_CLOSE_GRACE_MS = 2500; // after Vest closes the master, a follower still open this long is an orphan
  const OUR_EXIT_MS = 15000; // a close or reduce sent from this tab this recently explains a position closing
  const BALANCES_LIMIT = 500; // accounts per balances read, as Vest's own page asks (failed accounts are left out)
  const TRADE_DRAW_MS = 100; // the Trade tab redraws at most this often on price ticks
  const LIVE_RENDER_MS = 400; // the Accounts and P&L lists redraw at most this often on live numbers
  const FLATTEN_WAIT_MS = 5000,
    FLATTEN_RECHECK_MS = 1500;
  const TOKEN_REFRESH_MARGIN_MS = 60000; // mint a new account token this long before the old one expires
  const LOG_MAX = 500,
    DIAG_MAX = 2000,
    DIAG_MAX_BYTES = 1500000;
  const MIN_LEG_USD = 1; // Vest's minimum notional for a sized stop/target leg

  // ───────────────────────── state ─────────────────────────
  const S = {
    groups: [], // [{size,type,rows:[row]}]
    byId: {}, // id -> row
    master: null, // accountId
    followers: new Set(), // accountIds
    armed: false,
    log: [], // [{t,level,msg}]
    // masterPositionId -> { master, side, symbol, masterOrderId, qty, adopted?, queue (promise: actions run in order),
    //   legs: [{ id, kind:'tp'|'sl', price, qty }], followers: { accountId: { positionId, orderId, qty, legs } } }
    posMap: {},
    rate: { remaining: null, limit: null }, // last seen x-ratelimit-* headers (Vest allows 200 per window)
    ack: false, // user has read & agreed to the rules
    rulesOpen: false, // rules view is showing
    summaryOpen: false, // P&L summary view is showing
    levCache: {}, // "accountId|symbol" -> leverage known to be set (skip redundant PUT)
    fast: false, // fast mode: fire follower OPENS at master-send (before the master confirms)
    autoFlatten: false, // auto-close orphan followers if the master open is rejected
    orphan: null, // { list: [{ accountId, positionId, symbol, leverage }] } follower positions without the master
    arming: false, // an arm is in progress
    update: null, // { state, latest, dismissed } from the GitHub version check
    checkUpdates: true, // look for new versions on GitHub
    supportOffer: false, // the one-time "support with code AMPED" question is showing
    supportCurrent: null, // the code the account already uses, named in that question
    ackThenArm: false, // ARM was clicked before the terms were accepted
    supportOpen: false, // the Support tab is showing
    placing: false, // a trade-panel order is in flight
    flattening: false, // a flatten-all sweep is in progress
    capFit: false, // cap-to-fit: scale a follower's size down to what its margin can hold
    settingsOpen: false, // settings view is showing
    diag: [], // structured diagnostics (expected vs actual, margins, errors), downloadable as JSON
    siteOpen: false, // site-check view is showing
    site: null, // last site check: { fp, running, results:[{name,status,detail}] }
    tradeOpen: false, // trade panel view is showing
    trade: {
      // trade-panel settings (persisted, except live price)
      symbol: DEFAULT_SYMBOL,
      sizeMode: 'qty',
      qty: 1,
      risk: 50,
      stopPts: 20,
      targets: [20, 40, 60],
      scale: 'even',
      beMode: 'tp1',
      beTrigger: 15,
      beOffset: 0,
      orderType: 'market', // market, or limit (the price picked on the chart)
      unit: null, // NQ / ES / RTY: 'units' | 'micro' | 'mini' (null: Vest's own choice)
    },
    price: {}, // symbol -> { px, at } live price
  };
  // Per-symbol order rules, refreshed from /v3/exchangeInfo at load (NDX-USD-PERP: tick 0.25, 4 size decimals).
  // Contracts are linear (notional = price × quantity), so P&L is $1 per point per contract.
  const SYMBOLS = { [DEFAULT_SYMBOL]: { label: 'NQ', tick: 0.25, step: 0.0001, pointValue: 1 } };
  // Vest's minis and micros: how many units one micro is ($ per point), from its bundle's map (2026-10-10:
  // new Map([["SPX-USD-PERP",5n],["NDX-USD-PERP",2n],["RTY-USD-PERP",5n]])). A mini is 10 micros. Orders still send units.
  const MICRO_UNITS = { 'NDX-USD-PERP': 2, 'SPX-USD-PERP': 5, 'RTY-USD-PERP': 5 };

  // ───────────────────────── jwt / token capture ─────────────────────────
  // The page's own tokens are read from its requests; nothing is stored. A user token (no accountId claim) lists
  // accounts and mints short-lived account tokens; an account token identifies which account an order is for.
  const decodeJwt = (t) => {
    try {
      let p = t.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      p += '='.repeat((4 - (p.length % 4)) % 4);
      return JSON.parse(atob(p));
    } catch {
      return {};
    }
  };
  const bearer = (auth) =>
    String(auth)
      .replace(/^Bearer\s+/i, '')
      .trim();
  let userToken = null;
  const offerUser = (auth) => {
    if (!auth || !/^Bearer\s+/i.test(auth)) return;
    const t = bearer(auth),
      c = decodeJwt(t);
    if (c.userId && !c.accountId && c.exp) userToken = t;
  };
  const acctIdFromAuth = (auth) => (auth ? decodeJwt(bearer(auth)).accountId || null : null);
  const userTokenOk = () => userToken && decodeJwt(userToken).exp * 1000 > Date.now() + 5000;

  // ───────────────────────── request hooks (token capture + master detection) ─────────────────────────
  const ORDER_RE = /\/v3\/positions\/(open|append|reduce|close|cancel-order|stop-loss|take-profit)(\?|$)/;

  // Live guard against Vest site updates: on every master order, confirm the request still carries the fields the
  // copier reads (`need`). Missing fields are flagged at once; new ones (not in `known`, so not forwarded to followers)
  // are flagged once per session. Both are recorded in diagnostics.
  const SHAPES = {
    open: {
      need: ['side', 'symbol', 'quantity', 'leverage', 'orderType'],
      known: [
        'orderType',
        'leverage',
        'side',
        'symbol',
        'quantity',
        'timeInForce',
        'takeProfits',
        'stopLosses',
        'price',
        'expirationTime', // sent when Vest moves a limit (its chart drag re-places it, keeping the old order's expiry)
      ],
    },
    // add to an open position: Vest's ticket sends this, not /open, when you already hold the same direction
    append: {
      need: ['positionId', 'symbol', 'quantity', 'isBuy'],
      known: ['symbol', 'positionId', 'orderType', 'quantity', 'leverage', 'isBuy', 'timeInForce', 'price'],
    },
    reduce: {
      need: ['positionId', 'quantity', 'symbol'],
      known: ['positionId', 'orderType', 'leverage', 'quantity', 'timeInForce', 'reduceOnly', 'symbol'],
    },
    close: { need: ['positionId', 'symbol'], known: ['symbol', 'positionId', 'orderType', 'leverage'] },
    'stop-loss': {
      need: ['positionId', 'triggerPrice', 'stopLossId'],
      known: ['positionId', 'executionType', 'triggerPrice', 'stopLossId', 'quantity', 'limitPrice'],
    },
    'take-profit': {
      need: ['positionId', 'triggerPrice', 'takeProfitId'],
      known: ['positionId', 'executionType', 'triggerPrice', 'takeProfitId', 'quantity', 'limitPrice'],
    },
    // POST adds a stop/target to an open position; DELETE removes one
    'stop-loss:POST': {
      need: ['positionId', 'triggerPrice'],
      known: ['positionId', 'executionType', 'triggerPrice', 'quantity', 'limitPrice'],
    },
    'take-profit:POST': {
      need: ['positionId', 'triggerPrice'],
      known: ['positionId', 'executionType', 'triggerPrice', 'quantity', 'limitPrice'],
    },
    'stop-loss:DELETE': { need: ['positionId'], known: ['positionId', 'stopLossId', 'takeProfitId', 'orderId', 'id'] },
    'take-profit:DELETE': {
      need: ['positionId'],
      known: ['positionId', 'stopLossId', 'takeProfitId', 'orderId', 'id'],
    },
    'cancel-order': { need: ['orderId'], known: ['orderId'] },
  };
  const _seenNewFields = new Set();
  function checkShape(action, req, method = 'POST') {
    const s = SHAPES[`${action}:${method}`] || SHAPES[action];
    if (!s || !req || typeof req !== 'object') return;
    const missing = s.need.filter((k) => !(k in req));
    const extra = Object.keys(req).filter((k) => !s.known.includes(k));
    if (missing.length)
      logEvent(
        'warn',
        `Vest's ${action} order has changed — missing ${missing.join(', ')}. Copies may be wrong: stop copying, run the site check (the status dot), send Diag.`,
      );
    const fresh = extra.filter((k) => !_seenNewFields.has(action + '|' + k));
    fresh.forEach((k) => _seenNewFields.add(action + '|' + k));
    if (fresh.length)
      logEvent(
        'warn',
        `Vest's ${action} order has new field(s): ${fresh.join(', ')} — not copied to followers. Send Diag if copies look off.`,
      );
    if (missing.length || extra.length) diag('payload_drift', { action, missing, extra, keys: Object.keys(req) });
  }

  const parseJson = (v, fallback) => {
    if (v && typeof v === 'object') return v;
    try {
      return typeof v === 'string' ? JSON.parse(v) : fallback;
    } catch {
      return fallback;
    }
  };
  const orderAction = (url) => (String(url).match(ORDER_RE) || [])[1] || null;

  // A completed request made by the page. Picks up the user's session token, and when armed, mirrors the master's
  // order requests. Requests Vest refused (non-2xx) are never copied.
  const onRequest = (url, reqBody, resBody, auth, method, status) => {
    const action = orderAction(url);
    if (action && status >= 200 && status < 300) refreshSoon(); // any order on any account: balances catch up at once
    if (!S.armed || !action) return;
    const res = parseJson(resBody, {}) || {};
    const acct = acctIdFromAuth(auth) || res.accountId || null;
    if (!acct || acct !== S.master) return; // only the master is mirrored
    const req = parseJson(reqBody, {}) || {};
    method = String(method || 'POST').toUpperCase();
    if (S.flattening) {
      // Flatten All is closing everything on every account, this order included: copying it would only open followers
      // that the sweep then closes
      logEvent('info', `MASTER ${action} during Flatten All — not copied.`);
      diag('master', { action, method, outcome: 'skipped', reason: 'flatten all in progress' });
      return;
    }
    if (!(status >= 200 && status < 300)) {
      // Vest's own reason ({ code, msg } or { message }), and where the market was, so the diag shows why
      const why = String(res.msg || res.message || res.error || (typeof resBody === 'string' ? resBody : '') || '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 200);
      const sym =
        req.symbol ||
        (S.posMap[req.positionId] && S.posMap[req.positionId].symbol) ||
        ((S.acctState[S.master] && S.acctState[S.master].positions.find((p) => p.id === req.positionId)) || {})
          .symbol ||
        S.trade.symbol;
      const pr = S.price[sym] || {};
      logEvent(
        'info',
        `MASTER ${action} refused by Vest (HTTP ${status || 'no response'}${why ? ': ' + why : ''}) — not copied.`,
      );
      diag('master_refused', {
        action,
        method,
        status,
        reason: why || null,
        code: res.code != null ? res.code : null,
        positionId: req.positionId || null,
        symbol: sym,
        triggerPrice: req.triggerPrice,
        qty: req.quantity,
        market: {
          price: priceOf(sym),
          bid: recentAt(pr.bookAt) ? pr.bid : null,
          ask: recentAt(pr.bookAt) ? pr.ask : null,
          last: recentAt(pr.lastAt) ? pr.last : null,
          mark: recentAt(pr.at) ? pr.px : null,
        },
      });
      return;
    }
    checkShape(action, req, method);
    mirror(action, req, res, method);
  };

  // fetch
  window.fetch = function (input, init) {
    const url = typeof input === 'string' ? input : (input && input.url) || '';
    let auth = null;
    try {
      auth = new Headers((init && init.headers) || (input && input.headers) || {}).get('authorization');
    } catch {
      /* best effort: nothing to do if this fails */
    }
    const method = ((init && init.method) || (input && input.method) || 'GET').toUpperCase();
    const body = init && init.body;
    let pending = null;
    try {
      if (method === 'POST') pending = maybeFastOpen(url, body, auth);
    } catch {
      /* best effort: nothing to do if this fails */
    }
    try {
      offerUser(auth);
      if (method !== 'GET') notePageRequest(url, method, body);
    } catch {
      /* best effort: nothing to do if this fails */
    }
    const p = _fetch.apply(this, arguments);
    // Only order requests are read back (never other responses, which may be long-lived streams).
    if (pending || (auth && orderAction(url))) {
      p.then(
        (r) =>
          r
            .clone()
            .text()
            .then(
              (t) => (pending ? reconcileFast(pending, t, r.status) : onRequest(url, body, t, auth, method, r.status)),
              () => pending && reconcileFast(pending, null, r.status, true),
            ),
        () => pending && reconcileFast(pending, null, 0), // network failure: Vest may or may not have the order
      );
    }
    return p;
  };
  // XHR
  const _open = XMLHttpRequest.prototype.open,
    _send = XMLHttpRequest.prototype.send,
    _setH = XMLHttpRequest.prototype.setRequestHeader;
  XMLHttpRequest.prototype.open = function (m, u) {
    this.__vc = { url: u, method: String(m || 'GET').toUpperCase() };
    return _open.apply(this, arguments);
  };
  XMLHttpRequest.prototype.setRequestHeader = function (k, v) {
    if (/^authorization$/i.test(k)) {
      if (this.__vc) this.__vc.auth = v;
      offerUser(v);
    }
    return _setH.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function (b) {
    const vc = this.__vc;
    if (vc) {
      let pending = null;
      try {
        pending = vc.method === 'POST' ? maybeFastOpen(vc.url, b, vc.auth) : null;
        if (vc.method !== 'GET') notePageRequest(vc.url, vc.method, b);
      } catch {
        /* best effort: nothing to do if this fails */
      }
      this.addEventListener(
        'loadend',
        () => {
          // once per request; also fires on error/abort/timeout
          let r = '';
          try {
            r = this.responseText;
          } catch {
            /* best effort: nothing to do if this fails */
          }
          if (pending) reconcileFast(pending, r, this.status);
          else onRequest(vc.url, b, r, vc.auth, vc.method, this.status);
        },
        { once: true },
      );
    }
    return _send.apply(this, arguments);
  };

  const waitForUserToken = (timeoutMs = 20000) =>
    new Promise((resolve, reject) => {
      if (userTokenOk()) return resolve(userToken);
      const t0 = Date.now();
      const iv = setInterval(() => {
        if (userTokenOk()) {
          clearInterval(iv);
          resolve(userToken);
        } else if (Date.now() - t0 > timeoutMs) {
          clearInterval(iv);
          reject(new Error('no user token yet'));
        }
      }, 300);
    });

  // What the page sends that the copier needs to know before Vest answers: a close or reduce (so the position closing on
  // the live feed isn't mistaken for one Vest made), the account Vest's screen switches to, and a leverage change.
  const _exits = {}; // positionId -> when this tab last sent a close or reduce for it
  const noteExit = (positionId) => positionId && (_exits[positionId] = Date.now());
  const ourExit = (positionId) => Date.now() - (_exits[positionId] || 0) < OUR_EXIT_MS;
  function notePageRequest(url, method, body) {
    const action = orderAction(url);
    if (action === 'close' || action === 'reduce') {
      const req = parseJson(body, null);
      if (req) noteExit(req.positionId);
    } else if (method === 'PATCH' && /\/v3\/user-state\/preferences/.test(url)) {
      const req = parseJson(body, null);
      if (req && req.lastUsedAccountId) setScreen(req.lastUsedAccountId);
    } else if (/\/v3\/user-state\/accounts\/[^/]+\/leverages\//.test(url))
      setTimeout(() => S.tradeOpen && refreshTradeState(), BALANCE_AFTER_TRADE_MS);
  }

  // ───────────────────────── Vest's live account feed (read-only) ─────────────────────────
  // Vest's page keeps a private socket open that pushes every change on every one of the user's accounts within about
  // 50 ms: orders placed and filled, positions opened, added to, reduced and closed, stops and targets, the new balance
  // (`account_state`); an account failing or changing its limits (`capital_account`); an order Vest refused after
  // accepting it (`command_events`); and profit claims (`profit_withdrawal`). The copier never opens it or sends on it:
  // it finds Vest's own socket the moment Vest creates it (the constructor is wrapped at document-start; Vest never
  // sends a subscription, only a ping every 30 s), or failing that on that first ping, and listens. Balances, positions,
  // fills and failed accounts then update as they happen; the polled reads become a backstop.
  const _feed = { ws: null, last: 0, attached: 0, stateAt: 0, missing: [] };
  const FEED_FIELDS = ['account_id', 'account_seq', 'positions', 'final_balance']; // in every account_state event
  const _feedAt = {}; // accountId -> when its last feed event landed (a slower REST read must not overwrite it)
  const _seq = {}; // accountId -> the last account_seq applied (Vest drops older and repeated events the same way)
  const feedLive = () => !!_feed.ws && _feed.ws.readyState === 1 && Date.now() - _feed.last < FEED_QUIET_MS;
  if (typeof WebSocket === 'function' && typeof Proxy === 'function')
    try {
      // a Proxy keeps everything else about WebSocket as it was (prototype, constants, instanceof, subclasses)
      window.WebSocket = new Proxy(WebSocket, {
        construct(target, args, newTarget) {
          const ws = Reflect.construct(target, args, newTarget);
          try {
            if (/\/ws\/private/.test(String(args[0] || ''))) attachFeed(ws);
          } catch {
            /* best effort: nothing to do if this fails */
          }
          return ws;
        },
      });
    } catch {
      /* best effort: the ping below still finds it */
    }
  if (typeof WebSocket === 'function' && WebSocket.prototype && WebSocket.prototype.send) {
    const _wsSend = WebSocket.prototype.send;
    WebSocket.prototype.send = function () {
      try {
        if (this !== _feed.ws && /\/ws\/private/.test(this.url || '')) attachFeed(this);
      } catch {
        /* best effort: nothing to do if this fails */
      }
      return _wsSend.apply(this, arguments);
    };
  }
  function attachFeed(ws) {
    const again = _feed.attached > 0; // Vest reconnected: anything said while it was down is read in full once
    _feed.ws = ws;
    _feed.last = Date.now();
    _feed.attached++;
    ws.addEventListener('message', (e) => {
      if (ws !== _feed.ws) return;
      _feed.last = Date.now();
      onFeedMessage(e.data);
    });
    ws.addEventListener('close', () => {
      if (ws !== _feed.ws) return;
      _feed.ws = null;
      diag('feed', { outcome: 'closed' });
    });
    diag('feed', { outcome: again ? 'reattached' : 'attached' });
    if (again) refreshBalances();
  }
  function onFeedMessage(raw) {
    if (typeof raw !== 'string' || raw.charCodeAt(0) !== 123) return; // '{'
    const m = parseJson(raw, null);
    if (!m || typeof m.channel !== 'string' || !m.data || typeof m.data !== 'object') return;
    if (m.channel === 'account_state') {
      // for the site check: does Vest's update still carry what the copier reads?
      _feed.stateAt = Date.now();
      _feed.missing = FEED_FIELDS.filter((k) => !(k in m.data));
    }
    try {
      if (m.channel === 'account_state') onAccountState(m.data);
      else if (m.channel === 'capital_account') onCapitalAccount(m.data);
      else if (m.channel === 'command_events') onCommandEvent(m.data);
      else if (m.channel === 'profit_withdrawal') onClaimEvent(m.data);
    } catch (e) {
      diag('feed', { outcome: 'error', channel: m.channel, error: e.message });
    }
  }

  // Fills, as the feed reports them: orderId -> { price, at } once filled, or { missing, why } when Vest says it didn't
  // execute (a refused command, or an order cancelled with nothing filled). A fill check waits on this first.
  S.feedFills = {};
  const _fillWaiters = {};
  function setFeedFill(orderId, v) {
    const had = S.feedFills[orderId];
    if (had && !had.missing) return; // a fill is final
    S.feedFills[orderId] = { ...v, seen: Date.now() };
    for (const done of _fillWaiters[orderId] || []) done(S.feedFills[orderId]);
    delete _fillWaiters[orderId];
    const ids = Object.keys(S.feedFills);
    if (ids.length > 2000) ids.slice(0, 1000).forEach((k) => delete S.feedFills[k]);
  }
  function feedFill(orderId, ms) {
    const have = orderId && S.feedFills[orderId];
    if (have || !orderId || !(ms > 0) || !feedLive()) return Promise.resolve(have || undefined);
    return new Promise((resolve) => {
      const done = (v) => {
        clearTimeout(timer);
        resolve(v);
      };
      const timer = setTimeout(() => {
        _fillWaiters[orderId] = (_fillWaiters[orderId] || []).filter((x) => x !== done);
        resolve(undefined);
      }, ms);
      (_fillWaiters[orderId] = _fillWaiters[orderId] || []).push(done);
    });
  }

  function onAccountState(d) {
    const id = d.account_id;
    if (!id) return;
    const seq = parseInt(d.account_seq, 10);
    if (seq >= 0) {
      if (_seq[id] != null && seq <= _seq[id]) return;
      _seq[id] = seq;
    }
    for (const o of d.orders || []) {
      const done = num(o.executed_quantity) > 0;
      if (done && num(o.execution_price) > 0 && (o.status === 'filled' || /FILLED$/.test(o.event_type || '')))
        setFeedFill(o.order_id, { price: num(o.execution_price), at: o.execution_time });
      else if (!done && (o.status === 'rejected' || o.status === 'cancelled'))
        setFeedFill(o.order_id, { missing: true, why: o.status });
    }
    if (!S.byId[id]) return; // not an account the copier lists (the Primary Account, say)
    _feedAt[id] = Date.now();
    const ch = applyFeedState(id, d);
    onFeedPositions(id, d, ch);
    revalue(id);
    liveRender();
    drawTradeSoon();
  }
  // An account's positions, stops, targets and cash from one feed event, the way a REST read would leave them.
  function applyFeedState(id, d) {
    const r = S.byId[id];
    const st = (S.acctState[id] = S.acctState[id] || { positions: [], ordersCollateral: 0, marks: {}, at: 0 });
    const ch = { closed: [], reduced: [], opened: [] };
    for (const p of d.positions || []) {
      const pid = p.position_id;
      if (!pid) continue;
      const i = st.positions.findIndex((x) => x.id === pid);
      const prev = i >= 0 ? st.positions[i] : null,
        qty = num(p.quantity);
      if (p.status === 'closed' || /CLOSED$/.test(p.event_type || '')) {
        if (prev) st.positions.splice(i, 1);
        ch.closed.push(p);
      } else if (p.status === 'opened' && qty > 0) {
        const next = {
          id: pid,
          symbol: p.symbol,
          side: p.side,
          qty,
          openPrice: num(p.open_price),
          collateral: num(p.collateral) || 0,
          triggers: prev ? prev.triggers : [],
        };
        if (prev) st.positions[i] = next;
        else st.positions.push(next);
        if (!prev) ch.opened.push(p);
        else if (qty < prev.qty) ch.reduced.push(p);
      }
    }
    for (const it of d.order_intents || []) {
      const pos = st.positions.find((x) => x.id === it.position_id),
        kind = it.kind === 'stop_loss' ? 'sl' : it.kind === 'take_profit' ? 'tp' : null;
      if (!pos || !kind) continue;
      pos.triggers = pos.triggers.filter((t) => t.id !== it.id);
      if (it.state === 'active') pos.triggers.push({ id: it.id, kind, price: num(it.trigger_price) });
    }
    if (d.orders_collateral != null && num(d.orders_collateral) >= 0) st.ordersCollateral = num(d.orders_collateral);
    const fb = d.final_balance;
    if (fb && num(fb.amount) >= 0) {
      const v = parseInt(fb.balance_version, 10);
      if (!(v < (r.balVer || 0))) {
        r.free = num(fb.amount);
        if (v >= 0) r.balVer = v;
      }
    }
    if (r.free >= 0) st.cash = r.free + st.positions.reduce((a, p) => a + p.collateral, 0) + (st.ordersCollateral || 0);
    st.at = Date.now();
    for (const p of ch.opened) watchPrice(p.symbol); // its open P&L follows the price from now on
    return ch;
  }

  // Positions Vest closed or reduced by itself: a stop or target filling, a failed account, or a close from somewhere
  // other than this tab. The trade's bookkeeping follows, the log says what happened, and when the master is out of a
  // copied trade, followers still in it after a moment are offered to flatten (they normally close on their own stops).
  S.failing = {}; // accountId -> when Vest reported it failed (its forced close follows)
  function onFeedPositions(id, d, ch) {
    const legHit = {};
    for (const it of d.order_intents || [])
      if (/TRIGGERED|COMPLETED/.test(it.event || '') && it.position_id)
        legHit[it.position_id] = it.kind === 'stop_loss' ? 'sl' : 'tp';
    const cause = (pid) =>
      ourExit(pid) ? 'ours' : legHit[pid] || (Date.now() - (S.failing[id] || 0) < 60000 ? 'breach' : 'vest');
    for (const p of [...ch.closed, ...ch.reduced]) {
      const pid = p.position_id,
        closed = ch.closed.includes(p),
        why = cause(pid);
      if (closed && S.plans[pid]) endPlan(S.plans[pid], 'Breakeven: trade closed — stopped watching.');
      if (why === 'ours') continue; // this tab sent it: the copier already copied it
      noteVestClose({ id, symbol: p.symbol, why, closed, pnl: num(p.pnl), qty: num(p.quantity) });
      const entry = S.posMap[pid];
      if (entry && closed) masterClosedByVest(pid, entry, why);
      else if (entry) entry.qty = fmtQty(num(p.quantity), entry.symbol); // a sized target filled: the copy keeps its share
      for (const e of Object.values(S.posMap)) {
        const fp = e.followers[id];
        if (!fp || fp.positionId !== pid) continue;
        if (closed)
          delete e.followers[id]; // out of the trade: nothing left to copy to it
        else fp.qty = fmtQty(num(p.quantity), e.symbol);
      }
    }
  }
  function masterClosedByVest(pid, entry, why) {
    delete S.posMap[pid];
    const followers = Object.entries(entry.followers);
    if (!followers.length) return;
    setTimeout(async () => {
      const left = [];
      for (const [f, fp] of followers) {
        let open;
        if (feedLive() && S.acctState[f]) open = S.acctState[f].positions.some((x) => x.id === fp.positionId);
        else open = !!(await tryOpenPosition(f, entry.symbol, fp.positionId));
        if (open) left.push({ accountId: f, positionId: fp.positionId });
      }
      const what = {
        sl: "the master's stop filled",
        tp: "the master's target filled",
        breach: 'Vest closed the master (the account failed)',
        vest: "the master's position was closed outside this tab",
      }[why];
      if (left.length) raiseOrphans(entry.symbol, left, what, entry.master);
    }, VEST_CLOSE_GRACE_MS);
  }
  // One log line per kind of close, for every account it happened on at about the same moment.
  let _vestCloses = [],
    _vestCloseTimer = null;
  function noteVestClose(n) {
    _vestCloses.push(n);
    diag('vest_close', { ...who(n.id), symbol: n.symbol, cause: n.why, closed: n.closed, pnl: n.pnl, qty: n.qty });
    if (!_vestCloseTimer) _vestCloseTimer = setTimeout(flushVestCloses, 600);
  }
  function flushVestCloses() {
    _vestCloseTimer = null;
    const notes = _vestCloses;
    _vestCloses = [];
    const groups = {};
    for (const n of notes)
      (groups[n.why + (n.closed ? '' : '+part')] = groups[n.why + (n.closed ? '' : '+part')] || []).push(n);
    for (const [k, list] of Object.entries(groups)) {
      const [why, part] = k.split('+');
      const what = {
        sl: part ? 'Stop filled part of the position' : 'Stop filled',
        tp: part ? 'Target filled' : 'Target filled, position closed',
        breach: 'Closed by Vest (account failed)',
        vest: part ? 'Reduced outside this tab' : 'Closed outside this tab',
      }[why];
      const usd = (v) => (v >= 0 ? '+' : '−') + money(Math.abs(v));
      const each = list.map((n) => `${accLabel(n.id)}${n.pnl === 0 || isNaN(n.pnl) ? '' : ' ' + usd(n.pnl)}`);
      logEvent(why === 'tp' ? 'ok' : 'warn', `${what} (${symLabel(list[0].symbol)}): ${each.join(', ')}.`);
    }
  }

  // An account Vest closed (failed) or changed: its limits apply at once; a failed or new account updates the list.
  function onCapitalAccount(d) {
    const id = d.account_id,
      r = id && S.byId[id];
    if (!id) return;
    if (r && d.status === 2) {
      setLimits(r, d); // a daily reset moves the daily floor
      revalue(id);
      liveRender();
      return;
    }
    if (r) S.failing[id] = Date.now();
    if (r || d.status === 2) syncAccountsSoon();
  }
  // Vest accepted an order (HTTP 200) and then refused to run it: the fill check learns it at once, with Vest's code.
  function onCommandEvent(d) {
    if (String(d.status).toUpperCase() !== 'REJECTED' || !d.order_id) return;
    setFeedFill(d.order_id, {
      missing: true,
      why: 'refused' + (d.error_code != null ? ` (code ${d.error_code})` : ''),
    });
    diag('order_refused', {
      ...(d.account_id ? who(d.account_id) : {}),
      orderId: d.order_id,
      errorCode: d.error_code,
      event: d.event_type,
    });
  }
  function onClaimEvent(d) {
    const st = String(d.status || '').toUpperCase(),
      amt = num(d.trader_amount != null ? d.trader_amount : d.amount),
      from = d.account_id && S.byId[d.account_id] ? ` from ${accLabel(d.account_id)}` : '';
    diag('claim_event', { status: st, ...(d.account_id ? who(d.account_id) : {}), amount: isNaN(amt) ? null : amt });
    if (st === 'EXECUTED') logEvent('ok', `Vest paid a profit claim${from}${amt > 0 ? `: ${money(amt)}` : ''}.`);
    else if (st === 'REFUNDED' || st === 'FAILED')
      logEvent(
        'warn',
        `Vest returned a profit claim${from}${amt > 0 ? ` (${money(amt)})` : ''}: it's back on the account.`,
      );
  }

  // The account Vest's own screen is on (its order ticket trades it): from Vest's saved choice at load, then from each
  // switch. Armed, the panel warns when it isn't the master, since orders placed there aren't copied.
  S.screen = null;
  function setScreen(id) {
    if (S.screen === id) return;
    S.screen = id;
    renderLog();
  }
  function readScreen() {
    try {
      const uid = userToken && decodeJwt(userToken).userId;
      const id =
        uid &&
        (sessionStorage.getItem('vest-active-account:' + uid) || localStorage.getItem('vest-active-account:' + uid));
      if (id && /^[\w-]{8,64}$/.test(id)) setScreen(id);
    } catch {
      /* best effort: nothing to do if this fails */
    }
  }

  // ───────────────────────── api ─────────────────────────
  // Vest REST call. Errors read "<path> -> <status>" (errCode() parses the status back out).
  const READ_TIMEOUT_MS = 15000;
  const api = async (path, token = userToken, opts = {}) => {
    if (!token) throw new Error('no Vest session yet — click around Vest, then retry');
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
      ...(opts.headers || {}),
    };
    // reads time out (a hung request would freeze the balance poll); orders don't, since a cut-off order is ambiguous
    const read = !opts.method || opts.method === 'GET';
    const ctl = read && typeof AbortController === 'function' ? new AbortController() : null;
    const timer = ctl ? setTimeout(() => ctl.abort(), READ_TIMEOUT_MS) : null;
    let r;
    try {
      r = await _fetch(API + path, { ...opts, headers, ...(ctl ? { signal: ctl.signal } : {}) });
    } finally {
      if (timer) clearTimeout(timer);
    }
    try {
      const rem = r.headers.get('x-ratelimit-remaining');
      if (rem != null) {
        S.rate = { remaining: +rem, limit: +r.headers.get('x-ratelimit-limit') || S.rate.limit };
        renderRate();
      }
    } catch {
      /* best effort: nothing to do if this fails */
    }
    const text = await r.text();
    // an account token Vest revoked early (log out / in elsewhere): drop it and retry once with a fresh one. A 401
    // means nothing ran, so the retry (same Idempotency-Key) is safe.
    if (r.status === 401 && tokenOwner[token] && !opts._retried) {
      const id = tokenOwner[token];
      delete tokenOwner[token];
      if (acctTokens[id] && acctTokens[id].token === token) delete acctTokens[id];
      const fresh = await mintAccountToken(id);
      return api(path, fresh.token, { ...opts, _retried: true });
    }
    if (!r.ok) throw new Error(`${path} -> ${r.status}`);
    return parseJson(text, text);
  };
  // Account tokens last ~15 minutes. Cached, and concurrent requests for the same account share one mint.
  const acctTokens = {},
    minting = {},
    tokenOwner = {}; // account token -> account id, to renew a revoked one
  const mintAccountToken = (id) => {
    const c = acctTokens[id];
    if (c && c.exp - TOKEN_REFRESH_MARGIN_MS > Date.now()) return Promise.resolve(c);
    return (minting[id] =
      minting[id] ||
      (async () => {
        try {
          const r = await api('/v3/auth/account-token', userToken, {
            method: 'POST',
            body: JSON.stringify({ accountId: id }),
          });
          const tok = r.apiKey || r.accessToken,
            cl = decodeJwt(tok);
          tokenOwner[tok] = id;
          if (S.byId[id]) S.byId[id].canTrade = !!cl.canTrade; // a breached or closed account can't trade
          return (acctTokens[id] = { token: tok, exp: r.accessExpiresAtMs || cl.exp * 1000, canTrade: !!cl.canTrade });
        } finally {
          delete minting[id];
        }
      })());
  };

  // ───────────────────────── registry ─────────────────────────
  const num = (v) => (v == null || v === '' ? NaN : parseFloat(v));
  const typeName = (t, p) =>
    t === 2 ? 'Evaluation' : t === 3 ? (p === 'instant_funded' ? 'Instant Funded' : 'Funded') : 'Other';
  const shortType = (t, p) => (t === 2 ? 'Eval' : t === 3 ? (p === 'instant_funded' ? 'Instant' : 'Funded') : 'Other');
  const label = (a) => a.name || 'Account ' + String((a.attempt_index ?? 0) + 1).padStart(2, '0');

  // True equity per account (balance + unrealized PnL) from the performance series — what Vest measures
  // drawdown against — and the unrealized PnL in it. /v3/accounts `amount` is only FREE collateral (under-reports while a
  // position is open), which is what Vest's trading power is built on.
  // → { accountId: { equity, upnl } }
  async function fetchEquities() {
    try {
      // the last half hour at one point a minute: the freshest the series gets (a 2-day window gave ~6-minute points)
      const now = Date.now();
      const r = await api(`/v3/trading-performance/series?from=${now - 30 * 60000}&to=${now}&points=30`);
      const latestTs = {},
        out = {};
      for (const it of r.items || []) {
        const id = it.account_id,
          ts = it.ts || 0;
        if (latestTs[id] == null || ts > latestTs[id]) {
          latestTs[id] = ts;
          out[id] = { equity: num(it.equity_value), upnl: num(it.total_unrealized_pnl) || 0 };
        }
      }
      return out;
    } catch {
      return {};
    }
  }

  // Free cash of every account (and the Primary Account's id), asked for the way Vest's own page asks: active accounts
  // only, up to BALANCES_LIMIT. Without `active`, every failed account a user ever had is listed too, and a user with many
  // could have a live account fall off the page (seen: "couldn't read its balance", equity stuck at the start).
  async function fetchBalances() {
    const res = await api(`/v3/accounts?active=true&limit=${BALANCES_LIMIT}`);
    const free = {},
      ver = {};
    let primary = null;
    for (const a of (res && res.accounts) || []) {
      free[a.account_id] = num(a.amount);
      ver[a.account_id] = parseInt(a.balance_version, 10);
      if (a.account_type === 1) primary = a.account_id;
    }
    return { free, ver, primary };
  }

  async function buildRegistry() {
    const [active, bals, eq] = await Promise.all([
      api('/v3/capital/accounts/active'),
      fetchBalances().catch(() => ({ free: {}, ver: {} })),
      fetchEquities(),
    ]);
    const balById = bals.free;
    const rows = (active.accounts || []).map((a) => {
      const initial = num(a.initial_capital),
        floor = num(a.max_drawdown_limit);
      const eqv = eq[a.id] && eq[a.id].equity;
      // unknown until a balance is read: shown as "—", never as the starting balance (a believable $0.00 P&L)
      const equity = eqv != null && !isNaN(eqv) ? eqv : (balById[a.id] ?? NaN),
        maxDD = initial - floor;
      const r = {
        id: a.id,
        label: label(a),
        type: typeName(a.account_type, a.plan_product_type),
        chip: shortType(a.account_type, a.plan_product_type),
        size: initial,
        floor,
        equity,
        free: balById[a.id] ?? NaN,
        balVer: bals.ver[a.id] >= 0 ? bals.ver[a.id] : 0,
        upnl: (eq[a.id] && eq[a.id].upnl) || 0,
        usedPct: maxDD > 0 ? Math.min(1, Math.max(0, (initial - equity) / maxDD)) : 0,
        leverage: num(a.max_leverage),
        accountType: a.account_type,
        planId: a.plan_id || null,
        groupKey: initial + '|' + typeName(a.account_type, a.plan_product_type),
        canTrade: null,
        order: a.attempt_index ?? 0,
      };
      setLimits(r, a);
      r.room = r.equity - floorOf(r);
      return r;
    });
    await Promise.all(
      rows.map(async (r) => {
        try {
          r.canTrade = (await mintAccountToken(r.id)).canTrade;
        } catch {
          r.canTrade = null;
        }
      }),
    );
    const before = S.byId;
    S.byId = Object.fromEntries(rows.map((r) => [r.id, r]));
    // An account that failed or closed is no longer in the active list: let go of it everywhere (a selected one too)
    for (const id of Object.keys(before)) if (!S.byId[id]) forgetAccount(id, before[id].label);
    if (S.master && !S.byId[S.master]) forgetAccount(S.master, null);
    [...S.followers].forEach((f) => !S.byId[f] && forgetAccount(f, null));
    regroup();
    return S.groups;
  }
  function regroup() {
    const groups = {};
    for (const r of Object.values(S.byId))
      (groups[r.groupKey] = groups[r.groupKey] || { size: r.size, type: r.type, key: r.groupKey, rows: [] }).rows.push(
        r,
      );
    const gl = Object.values(groups);
    gl.forEach((g) => g.rows.sort((a, b) => a.order - b.order)); // lowest account number first
    S.groups = gl.sort((a, b) => b.size - a.size || a.type.localeCompare(b.type));
  }

  // An account that is no longer active (failed, closed). A follower is dropped from the copy and the copier stays armed
  // for the others; the master failing disarms, since there's nothing left to copy. Vest has already closed its
  // positions, so it leaves every trade and the orphan list too.
  function forgetAccount(id, label) {
    const name = label || accLabel(id),
      wasMaster = S.master === id,
      wasFollower = S.followers.has(id);
    delete S.byId[id];
    delete S.acctState[id];
    for (const e of Object.values(S.posMap)) delete e.followers[id];
    if (S.orphan) {
      const list = S.orphan.list.filter((o) => o.accountId !== id);
      S.orphan = list.length ? { list } : null;
    }
    if (S.arming && (wasMaster || wasFollower)) _armEpoch++; // the arm in progress was for a selection that's gone
    if (wasFollower) S.followers.delete(id);
    if (wasMaster) S.master = null;
    breachReason(id).then((why) => why && logEvent('warn', `${name}: ${why}.`));
    if (!wasMaster && !wasFollower) return logEvent('info', `${name} is no longer active: removed from the list.`);
    const role = wasMaster ? 'the master' : 'a follower';
    if (S.armed && (wasMaster || !S.followers.size)) {
      disarm();
      logEvent(
        'warn',
        `${name} (${role}) is no longer active — copying stopped${wasMaster ? '' : ': no followers left'}.`,
      );
    } else
      logEvent(
        'warn',
        `${name} (${role}) is no longer active — removed${S.armed ? '; still copying to the other followers' : ''}.`,
      );
    diag('account_gone', { account: id, label: name, role, armed: S.armed });
  }
  // Vest's own record of why an account failed, in words; null when it can't be read.
  async function breachReason(id) {
    try {
      const b = await api(`/v3/capital/accounts/${encodeURIComponent(id)}/breach`);
      const eq = num(b && b.equity),
        dd = num(b.max_drawdown_limit),
        daily = num(b.daily_loss_limit);
      if (!(eq > 0) || !(dd > 0 || daily > 0)) return null;
      const isDaily = daily > 0 && !(dd >= daily);
      return `equity ${money(eq)} reached its ${isDaily ? 'daily loss floor' : 'drawdown floor'} of ${money(isDaily ? daily : dd)}`;
    } catch {
      return null;
    }
  }

  const accLabel = (id) => (S.byId[id] && S.byId[id].label) || id.slice(0, 8);

  // An account's limits from /v3/capital/accounts/active. On plans with a daily loss limit, Vest also closes the account
  // at the daily floor (reset each day at 20:00 ET), so the floor that applies is whichever of the two is higher. The
  // target (an evaluation's pass line) is above the starting size only while there is a goal to reach.
  function setLimits(r, a) {
    r.floor = num(a.max_drawdown_limit);
    const daily = num(a.daily_loss_floor);
    r.dailyFloor = num(a.max_daily_loss_pct) > 0 && daily > 0 ? daily : null;
    const target = num(a.target_equity);
    r.target = target > r.size ? target : null;
    r.split = num(a.max_profit_split_pct) || 0; // your share of claimed profit, e.g. 0.8
  }
  const floorOf = (r) => Math.max(r.floor || 0, r.dailyFloor || 0);
  // What an account pays you if its profit is claimed now: profit × its split (Vest applies the split flat at each claim,
  // with no other deductions). Only funded accounts (live and Instant) pay out: an evaluation's profit doesn't, and claims
  // are per account, so one in a loss pays nothing rather than taking from the others.
  const isFunded = (r) => r.accountType === 3;
  // Vest pays each claim cut down to the cent ($122.97 at 80% pays $98.37), so the shares are too.
  const centsDown = (n) => Math.floor(n * 100 + 1e-6) / 100;
  const keepOf = (r) =>
    isFunded(r) && r.split > 0 && r.equity > r.size ? centsDown((r.equity - r.size) * r.split) : 0;

  // keep balances / room fresh
  let _balTimer = null;
  // Each account's open positions and resting orders (also what the Trade tab reads for the master).
  async function readOpenState(id) {
    const { token } = await mintAccountToken(id);
    const [pos, ord] = await Promise.all([
      api('/v3/positions/opened', token),
      api('/v3/positions/opened-orders', token),
    ]);
    return {
      positions: ((pos && pos.positions) || [])
        .map((p) => ({
          id: posIdOf(p),
          symbol: p.symbol,
          side: p.side,
          qty: num(p.quantity),
          openPrice: num(p.openPrice),
          collateral: num(p.collateral) || 0,
          triggers: posLegs(p).map((l) => ({ id: l.id, kind: l.kind, price: l.price })),
        }))
        .filter((p) => p.qty > 0),
      ordersCollateral: ((ord && ord.orders) || []).reduce(
        (sum, o) => (o.reduceOnly || o.reduce_only ? sum : sum + (num(o.collateral) || 0)),
        0,
      ),
      at: Date.now(),
    };
  }
  // Mark prices for these symbols: the live feed when it's fresh, else one public ticker read.
  async function markPrices(syms) {
    const out = {},
      need = [];
    for (const sym of syms) priceOf(sym) ? (out[sym] = priceOf(sym)) : need.push(sym);
    if (need.length) {
      try {
        const r = await (
          await _fetch(`${API}/v3/ticker/latest?symbols=${need.map(encodeURIComponent).join(',')}`)
        ).json();
        for (const t of r.tickers || []) if (parseFloat(t.markPrice) > 0) out[t.symbol] = parseFloat(t.markPrice);
      } catch {
        /* best effort: nothing to do if this fails */
      }
    }
    return out;
  }

  // Equity the way Vest's Account Value computes it, live: free cash + the collateral held by open positions and resting
  // orders + their open PnL at the mark price. A flat account's equity is exactly its free cash, current the moment a
  // trade closes. The performance series (minute points, a minute or more behind) is only the fallback when an
  // account's positions can't be read.
  let _balBusy = false,
    _balAgain = false,
    _soonTimer = null;
  // A read soon after an order (any account, any page): positions and cash change on a fill, not with the price.
  function refreshSoon() {
    if (feedLive()) return; // the live feed has already carried what the order changed
    clearTimeout(_soonTimer);
    _soonTimer = setTimeout(refreshBalances, BALANCE_AFTER_TRADE_MS);
  }
  // A full read of every account: the active list (an account that failed or a new one), balances, positions and orders.
  // With the live feed up it runs every FEED_BACKSTOP_MS, else every BALANCE_POLL_MS. An account the feed has spoken
  // about since this read began keeps the feed's newer state.
  let _lastFullRead = 0;
  async function refreshBalances() {
    if (!userTokenOk()) return;
    if (!Object.keys(S.byId).length) return loadFirstAccounts();
    if (_balBusy) {
      _balAgain = true; // one more read right after this one, so a fill during a read isn't missed
      return;
    }
    _balBusy = true;
    const t0 = Date.now();
    try {
      const [bals, eq, active] = await Promise.all([
        fetchBalances().catch(() => ({ free: {}, ver: {} })),
        fetchEquities(),
        api('/v3/capital/accounts/active').catch(() => null), // failed or new accounts; the daily floor moves daily
      ]);
      if (active && Array.isArray(active.accounts)) await syncAccountSet(active.accounts);
      for (const a of (active && active.accounts) || []) if (S.byId[a.id]) setLimits(S.byId[a.id], a);
      const bal = bals.free;
      const ids = Object.keys(S.byId);
      const states = await Promise.all(ids.map((id) => readOpenState(id).catch(() => null)));
      const marks = await markPrices([
        ...new Set(states.flatMap((st) => (st ? st.positions.map((p) => p.symbol) : []))),
      ]);
      const live = {};
      ids.forEach((id, i) => {
        const st = states[i],
          r = S.byId[id],
          free = bal[id];
        if (!r || (_feedAt[id] || 0) >= t0) return; // the feed said something newer meanwhile
        if (free >= 0 && !(bals.ver[id] < (r.balVer || 0))) {
          r.free = free;
          if (bals.ver[id] >= 0) r.balVer = bals.ver[id];
        }
        if (!st || !(r.free >= 0)) return;
        st.cash = r.free + st.positions.reduce((a, p) => a + p.collateral, 0) + st.ordersCollateral;
        st.marks = marks;
        S.acctState[id] = st;
        if (st.positions.some((p) => !(priceOf(p.symbol) || marks[p.symbol] > 0))) return; // a price is missing
        live[id] = true;
      });
      for (const sym of heldSymbols()) watchPrice(sym); // open P&L then follows every price tick
      unwatchUnused();
      for (const id in S.byId) {
        if (live[id] && revalue(id)) continue;
        if ((_feedAt[id] || 0) >= t0) continue;
        const r = S.byId[id],
          src = eq[id]; // the performance series: only when positions or a price couldn't be read
        if (src) r.upnl = src.upnl;
        const e = src && !isNaN(src.equity) ? src.equity : bal[id];
        if (e == null || isNaN(e)) continue;
        setEquity(r, e);
      }
      _lastFullRead = Date.now();
      if (S.tradeOpen) refreshTradeState();
      render();
    } catch {
      /* best effort: nothing to do if this fails */
    } finally {
      _balBusy = false;
      if (_balAgain) {
        _balAgain = false;
        setTimeout(refreshBalances, 0);
      }
    }
  }
  // No accounts yet (all failed, or none bought): look again, and load them as soon as Vest lists one.
  async function loadFirstAccounts() {
    if (!_root || S.arming) return;
    try {
      const r = await api('/v3/capital/accounts/active');
      if (!((r && r.accounts) || []).length || Object.keys(S.byId).length) return;
      await refresh();
    } catch {
      /* best effort: nothing to do if this fails */
    }
  }
  // The active list changed: let go of accounts that failed or closed, and load new ones. True when anything changed.
  async function syncAccountSet(list) {
    const ids = new Set(list.map((a) => a.id));
    const gone = Object.keys(S.byId).filter((id) => !ids.has(id)),
      added = list.filter((a) => !S.byId[a.id]);
    gone.forEach((id) => forgetAccount(id, null));
    if (added.length) {
      await buildRegistry();
      const names = added.map((a) => accLabel(a.id));
      logEvent('info', `New account${names.length > 1 ? 's' : ''} loaded: ${names.join(', ')}.`);
    }
    if (!gone.length && !added.length) return false;
    regroup();
    dropClaimReview(); // it named the accounts as they were
    render();
    return true;
  }
  // Vest reported an account failing or appearing: read the active list now, and once more shortly after in case the
  // first read was a moment ahead of Vest's own update.
  let _syncTimer = null;
  function syncAccountsSoon() {
    if (_syncTimer) return;
    _syncTimer = setTimeout(() => {
      _syncTimer = null;
      refreshBalances();
      setTimeout(refreshBalances, 3000);
    }, 200);
  }
  // State this old is only trusted while the live feed is up (it would have told us about any change since).
  const stateFresh = (st) => !!st && (feedLive() || Date.now() - st.at < LIVE_STALE_MS);
  function setEquity(r, equity) {
    r.equity = equity;
    r.room = r.equity - floorOf(r);
    const maxDD = r.size - r.floor;
    r.usedPct = maxDD > 0 ? Math.min(1, Math.max(0, (r.size - r.equity) / maxDD)) : 0;
  }
  // An account's equity from its cash and open positions at the latest price (Vest's mid when its book is live). False
  // when it can't be worked out (no state, or no price for one of its markets): the last figure stays.
  function revalue(id) {
    const st = S.acctState[id],
      r = S.byId[id];
    if (!r || !st || !(st.cash >= 0) || !stateFresh(st)) return false;
    let upnl = 0;
    for (const p of st.positions) {
      const px = priceOf(p.symbol) || (st.marks && st.marks[p.symbol]);
      if (!(px > 0)) return false;
      upnl += (p.side === 'long' ? 1 : -1) * p.qty * (px - p.openPrice);
    }
    r.upnl = upnl;
    setEquity(r, st.cash + upnl);
    return true;
  }

  // ── Live P&L between reads. Cash and positions only change when something fills, so each price tick just re-prices the
  // open positions from the last read: equity = cash + open PnL at the latest price, as Vest's own Account Value moves.
  // When the price crosses one of a position's own stops or targets, Vest is about to fill it: read again right away.
  const heldSymbols = () => [
    ...new Set(Object.values(S.acctState || {}).flatMap((st) => (st ? st.positions.map((p) => p.symbol) : []))),
  ];
  let _liveRenderAt = 0,
    _liveRenderTimer = null,
    _pointerDown = false;
  // A stop or target the price sits past without Vest filling it (stops and targets trigger on the mid, not the mark) would ask
  // for a read on every new state: at most one per account per CROSSED_COOLDOWN_MS. State older than LIVE_STALE_MS
  // (reads failing) isn't re-priced: its positions may be gone.
  const CROSSED_COOLDOWN_MS = 15000,
    LIVE_STALE_MS = 60000,
    _crossedAt = {};
  function tickEquity(sym) {
    let changed = false;
    for (const id in S.acctState) {
      const st = S.acctState[id];
      if (!S.byId[id] || !st || !st.positions.some((p) => p.symbol === sym) || !stateFresh(st)) continue;
      // Without the live feed: when the price crosses one of a position's own stops or targets, Vest is about to fill
      // it, so read again soon (once, not on every tick).
      const px = priceOf(sym);
      if (!feedLive() && px > 0 && !st.crossed)
        for (const p of st.positions) {
          const dir = p.side === 'long' ? 1 : -1;
          if (
            p.symbol === sym &&
            (p.triggers || []).some((t) => (t.kind === 'sl' ? dir * (px - t.price) <= 0 : dir * (px - t.price) >= 0))
          ) {
            st.crossed = true;
            if (!(Date.now() - (_crossedAt[id] || 0) < CROSSED_COOLDOWN_MS)) {
              _crossedAt[id] = Date.now();
              refreshSoon();
            }
            break;
          }
        }
      if (revalue(id)) changed = true;
    }
    if (changed) liveRender();
  }
  // Redraw the Accounts or P&L list with the live numbers, at most every LIVE_RENDER_MS, and never between a press and its
  // release (the redraw would swallow the click). The Trade tab updates itself on every tick already.
  function liveRender() {
    const view = currentView();
    if (view !== 'accounts' && view !== 'summary') return;
    const wait = LIVE_RENDER_MS - (Date.now() - _liveRenderAt);
    if (_pointerDown || wait > 0) {
      if (!_liveRenderTimer)
        _liveRenderTimer = setTimeout(() => ((_liveRenderTimer = null), liveRender()), Math.max(wait, 200));
      return;
    }
    _liveRenderAt = Date.now();
    render();
  }
  function startBalancePoll() {
    if (_balTimer) clearInterval(_balTimer);
    _balTimer = setInterval(() => {
      if (feedLive() && Date.now() - _lastFullRead < FEED_BACKSTOP_MS) return; // the feed is carrying every change
      refreshBalances();
    }, BALANCE_POLL_MS);
  }

  // Every account's saved per-symbol leverage, in one call (GET /v3/user-state, user token). null if it can't be read.
  async function fetchLeverages() {
    try {
      const r = await api('/v3/user-state');
      const out = {};
      for (const a of r.accounts || []) {
        out[a.accountId] = {};
        for (const l of a.leverages || []) out[a.accountId][l.symbol] = l.leverage;
      }
      return out;
    } catch {
      return null;
    }
  }
  const levFor = (levs, id, sym) => (levs && levs[id] && levs[id][sym] != null ? +levs[id][sym] : null);

  // ───────────────────────── executor ─────────────────────────
  // Follower orders use each follower's own account token, with an Idempotency-Key on every order.
  const idem = () => ({
    'Idempotency-Key': crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random(),
  });
  async function acctSend(method, id, path, body, key) {
    const { token } = await mintAccountToken(id);
    return api(path, token, { method, body: JSON.stringify(body), headers: key ? { 'Idempotency-Key': key } : idem() });
  }
  const acctPost = (id, path, body) => acctSend('POST', id, path, body);
  const acctPut = (id, path, body) => acctSend('PUT', id, path, body);
  const acctDelete = (id, path, body) => acctSend('DELETE', id, path, body);
  async function setFollowerLeverage(id, sym, lev) {
    const { token } = await mintAccountToken(id);
    const path = `/v3/user-state/accounts/${id}/leverages/${encodeURIComponent(sym)}`;
    return api(path, token, { method: 'PUT', body: JSON.stringify({ leverage: String(lev) }) });
  }
  // Vest requires a leverage on close orders: the request's, else the one synced for this account and market, else a
  // default.
  const closeBody = (symbol, positionId, leverage, accountId) => ({
    symbol,
    positionId,
    orderType: 'market',
    leverage: String(leverage || S.levCache[accountId + '|' + symbol] || DEFAULT_LEVERAGE),
  });
  // Market / IOC orders execute at once, so their fills can be checked; a resting limit order has nothing to find yet.
  const isImmediate = (req) => !req || req.orderType === 'market' || req.timeInForce === 'IOC';
  const who = (id) => ({ account: id, label: accLabel(id) }); // the account fields every diag record carries
  const msSince = (t0) => Math.round(performance.now() - t0);
  const entryByOrderId = (oid) => Object.values(S.posMap).find((e) => e.masterOrderId === oid);
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const EXEC_PAGE = 200;
  // Fill price/time for one order, matched by order id in /v3/executions.
  // Returns { price, at } when filled, null when Vest's history has no such fill, or undefined when the lookup itself
  // failed: a failed lookup must never be read as "did not fill".
  // The live feed answers first (within FEED_FILL_WAIT_MS): a fill, or Vest saying it didn't run the order. Only then is
  // Vest's fill history asked.
  async function fillInfo(accountId, symbol, orderId, feedWait = FEED_FILL_WAIT_MS) {
    const ff = await feedFill(orderId, feedWait);
    if (ff) return ff.missing ? null : { price: ff.price, at: ff.at };
    try {
      const { token } = await mintAccountToken(accountId);
      const nowS = Math.floor(Date.now() / 1000),
        win = EXEC_WINDOW_S;
      const q = `account_id=${encodeURIComponent(accountId)}&symbol=${encodeURIComponent(symbol)}&from=${nowS - win}&to=${nowS + win}&limit=${EXEC_PAGE}`;
      const r = await api(`/v3/executions?${q}`, token);
      if (!r || !Array.isArray(r.items)) return undefined; // a changed response shape is not "no fill"
      const it = r.items.find((x) => x.id === orderId);
      if (it) return { price: parseFloat(it.price), at: it.executedAt };
      return r.items.length >= EXEC_PAGE ? undefined : null; // a full page may have pushed it out: unknown
    } catch {
      return undefined;
    }
  }

  // Confirm that every order actually filled. Vest can accept an order (HTTP 200, ids returned) and still not execute
  // it, so each one is looked up in /v3/executions, with retries for propagation lag. Only immediate (market) orders
  // are checked; a resting limit order has nothing to find yet.
  //   master = { accountId, orderId, qty, undo? }   placed = [{ accountId, orderId, label, qty, diag, undo?, positionId }]
  //   kind   = 'entry' | 'add' | 'close'
  // A follower that misses an entry is dropped from the trade; one that misses an add has its size rolled back (`undo`)
  // and the trade's sizes are re-read; one that misses a close is still open, and says so. If the master's own entry
  // didn't fill, its trade is forgotten and any follower that did fill is raised as an orphan. When Vest's history
  // can't be read, nothing is changed: the trader is told the fills couldn't be confirmed.
  const NO_FILL_WHY = 'Vest accepted the order but did not execute it (usually not enough margin for that size)';
  async function confirmFills(symbol, master, placed, entry, kind = 'entry') {
    if (!placed.length && !master.orderId) return;
    if (!feedLive()) await sleep(FILL_FIRST_LOOK_MS); // with the feed, each check waits on it instead
    // → { fill } when filled, { missing: true } when confirmed absent, {} when it couldn't be checked
    const tryFill = async (acct, oid) => {
      let failed = false;
      for (let i = 0; i < FILL_TRIES; i++) {
        const f = await fillInfo(acct, symbol, oid, i ? 0 : FEED_FILL_WAIT_MS); // the feed is waited on once
        if (f) return { fill: f };
        if (f === undefined) failed = true;
        if (i < FILL_TRIES - 1) await sleep(FILL_RETRY_MS);
      }
      return failed ? {} : { missing: true };
    };
    const m = master.orderId ? await tryFill(master.accountId, master.orderId) : {};
    const mp = m.fill || null;
    const masterMissed = !!m.missing;
    if (masterMissed) {
      logEvent('warn', `MASTER ${accLabel(master.accountId)} did NOT fill — ${NO_FILL_WHY}.`);
      diag('master_no_fill', { ...who(master.accountId), symbol, kind, orderId: master.orderId, qty: master.qty });
      if (master.undo) master.undo();
      if (kind === 'entry' && entry) {
        const key = Object.keys(S.posMap).find((k) => S.posMap[k] === entry);
        if (key) delete S.posMap[key];
      }
    }
    const pv = (SYMBOLS[symbol] && SYMBOLS[symbol].pointValue) || 1;
    const noFill = [],
      unknown = [],
      unknownPlaced = [],
      filledWithoutMaster = [];
    let filled = 0,
      undone = false,
      slipSum = 0,
      slipMax = 0,
      slipN = 0;
    await Promise.all(
      placed.map(async (p) => {
        const r = await tryFill(p.accountId, p.orderId);
        if (!r.fill && !r.missing) {
          unknown.push(p.label);
          unknownPlaced.push(p);
          return;
        }
        if (r.missing) {
          const msg =
            kind === 'close'
              ? `${p.label}'s close did NOT fill — it is still OPEN. Close it on Vest.`
              : kind === 'add'
                ? `${p.label} did NOT fill the add — its original position is unchanged.`
                : `${p.label} did NOT fill — not in this trade.`;
          logEvent('warn', msg);
          if (p.undo) {
            p.undo();
            undone = true;
          } else if (kind === 'entry' && entry) delete entry.followers[p.accountId];
          if (p.diag) {
            Object.assign(p.diag, { filled: false, met: false, reason: NO_FILL_WHY });
            persistDiagSoon();
          }
          noFill.push(p.label);
          return;
        }
        const fp = r.fill;
        filled++;
        if (masterMissed) filledWithoutMaster.push(p);
        const qty = parseFloat(p.qty) || parseFloat(master.qty) || 0;
        const d = mp ? +(fp.price - mp.price).toFixed(4) : null;
        if (d != null) {
          slipSum += Math.abs(d);
          slipMax = Math.max(slipMax, Math.abs(d));
          slipN++;
        }
        if (p.diag) {
          const o = {
            filled: true,
            fillPrice: fp.price,
            masterFillPrice: mp ? mp.price : null,
            slipPts: d,
            slipUsd: d != null ? +(Math.abs(d) * qty * pv).toFixed(4) : null,
            met: true,
          };
          const lev = parseFloat(p.diag.leverage),
            fEq = +p.diag.fEq;
          if (lev > 0 && qty > 0) {
            // margin used vs. the account's equity
            const mu = (fp.price * qty * pv) / lev;
            o.marginUsed = +mu.toFixed(2);
            if (fEq > 0) {
              o.marginCap = +fEq.toFixed(2);
              o.marginUtilPct = +((mu / fEq) * 100).toFixed(1);
            }
          }
          Object.assign(p.diag, o);
          persistDiagSoon();
        }
      }),
    );
    if ((undone || (master.undo && masterMissed)) && entry) enqueue(entry, () => syncLegs(entry)); // re-read true sizes
    // the master didn't fill: a follower whose fill couldn't be checked may be holding alone, so read its position
    if (masterMissed && kind === 'entry')
      for (const p of unknownPlaced)
        try {
          if (await openPosition(p.accountId, symbol)) filledWithoutMaster.push(p);
        } catch {
          filledWithoutMaster.push(p); // unreadable: offer it rather than lose track (Flatten / Keep decides)
        }
    if (filledWithoutMaster.length && kind === 'entry') {
      const list = filledWithoutMaster.map((p) => ({
        accountId: p.accountId,
        positionId: p.positionId,
        leverage: p.diag && p.diag.leverage,
      }));
      raiseOrphans(symbol, list, 'the master entry did not fill', master.accountId);
    } else if (filledWithoutMaster.length && kind === 'add') {
      const names = filledWithoutMaster.map((p) => p.label).join(', ');
      logEvent(
        'warn',
        `${names} added but the master didn't — they now hold more than the master. Reduce them on Vest.`,
      );
    }
    if (m.fill === undefined && master.orderId && !masterMissed)
      unknown.unshift(accLabel(master.accountId) + ' (master)');
    if (unknown.length)
      logEvent(
        'warn',
        `Couldn't confirm fills for ${unknown.join(', ')} — Vest's fill history didn't answer. Check them on Vest.`,
      );
    if (!placed.length) return;
    const n = placed.length - unknown.length;
    if (noFill.length) logEvent('warn', `Fills ${filled}/${n} — not filled: ${noFill.join(', ')}.`);
    else if (slipN)
      logEvent(
        'ok',
        `Fills ${filled}/${n} confirmed · avg slip ${(slipSum / slipN).toFixed(2)} pt · max ${slipMax.toFixed(2)} pt`,
      );
    else if (filled) logEvent('ok', `Fills ${filled}/${n} confirmed`);
  }

  // ── Sizing. Size step of a symbol (0.0001 for NQ) and numbers written the way Vest's own client writes them:
  // fixed decimals with trailing zeros stripped ("0.5", "31241.25", "31241").
  const sizeStepOf = (sym) => (SYMBOLS[sym] || SYMBOLS[DEFAULT_SYMBOL]).step;
  const fmtNum = (n, dec) => {
    const s = (+n).toFixed(dec);
    return s.includes('.') ? s.replace(/0+$/, '').replace(/\.$/, '') : s;
  };
  const fmtQty = (n, sym) => fmtNum(n, decimalsOf(sizeStepOf(sym)));

  // Cap-to-fit. Vest's initial margin is notional ÷ leverage. With leverage synced across accounts and the same market,
  // a follower's affordable size reduces to an equity ratio: no price lookup and no network call, so no added latency.
  // The proportional size gives the follower the same margin use, and so the same % risk, as the master. A follower with
  // equal or more equity sends the master's exact size; a smaller one is scaled down with a small buffer for fees and
  // equity that is up to one poll old. Returns the size to send, whether it was scaled, and whether to skip the account.
  const CAP_SAME_SIZE = 0.005; // cap-to-fit: within 0.5% of the master's equity counts as the same size
  function capQty(followerId, masterQtyStr, sym) {
    const mQ = parseFloat(masterQtyStr);
    const mEq = (S.byId[S.master] || {}).equity,
      fEq = (S.byId[followerId] || {}).equity;
    const calc = { mEq, fEq }; // recorded in diagnostics
    if (!S.capFit) return { qty: masterQtyStr, scaled: false, skip: false, calc };
    if (!(mQ > 0) || !(mEq > 0) || !(fEq > 0))
      // cap-to-fit can't size it: skip rather than send the master's full size to an account that may be much smaller
      return { qty: '0', scaled: false, skip: true, calc: { ...calc, reason: 'missing-equity' } };
    const prop = mQ * (fEq / mEq);
    calc.proportionalQty = +prop.toFixed(6);
    // Equal-size accounts a few cents apart (seen live: $499.988 vs $499.987) copy 1:1; the buffer is for real
    // differences in size.
    if (prop >= mQ || fEq >= mEq * (1 - CAP_SAME_SIZE)) return { qty: masterQtyStr, scaled: false, skip: false, calc };
    const buffered = prop * CAP_BUFFER;
    Object.assign(calc, { bufferedQty: +buffered.toFixed(6), buffer: CAP_BUFFER });
    const q = floorStep(buffered, sizeStepOf(sym)); // the symbol's step, not the master string's decimals
    if (!(q > 0)) return { qty: '0', scaled: false, skip: true, calc };
    return { qty: fmtQty(q, sym), scaled: true, skip: false, calc };
  }

  // Scale a master quantity (a reduce or an add) to a follower holding a different size, keeping the same fraction.
  function scaleToFollower(reqQtyStr, followerQtyStr, masterQtyStr, sym) {
    const rq = parseFloat(reqQtyStr),
      fq = parseFloat(followerQtyStr),
      mq = parseFloat(masterQtyStr);
    if (!(fq > 0) || !(mq > 0) || fq === mq) return reqQtyStr;
    const q = floorStep(rq * (fq / mq), sizeStepOf(sym));
    return q > 0 ? fmtQty(q, sym) : '0';
  }

  // Scale sized stop/target legs to a follower's size. Legs without a quantity cover the whole position and pass through.
  // Sized legs keep their proportions in whole size steps (largest remainder, so they add up exactly); a leg that rounds
  // to nothing is dropped.
  function scaleLegs(legs, masterQtyStr, followerQtyStr, sym) {
    if (!Array.isArray(legs) || !legs.length) return legs;
    const mq = parseFloat(masterQtyStr),
      fq = parseFloat(followerQtyStr);
    if (!(mq > 0) || !(fq > 0) || fq === mq || !legs.some((l) => l && l.quantity != null)) return legs;
    const step = sizeStepOf(sym),
      ratio = fq / mq;
    const sized = legs.map((l, i) => ({ l, i })).filter((x) => x.l && x.l.quantity != null);
    const units = sized.map((x) => (parseFloat(x.l.quantity) * ratio) / step);
    const base = units.map((u) => Math.floor(u + EPS));
    const left = Math.floor(units.reduce((a, b) => a + b, 0) + EPS) - base.reduce((a, b) => a + b, 0);
    const order = units.map((u, k) => [u - Math.floor(u + EPS), k]).sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    for (let k = 0; k < left; k++) base[order[k % order.length][1]]++;
    const out = legs.slice();
    sized.forEach((x, k) => {
      out[x.i] = base[k] > 0 ? { ...x.l, quantity: fmtQty(base[k] * step, sym) } : null;
    });
    return out.filter(Boolean);
  }

  // ── Bracket legs. Every stop and target is tracked as { id, kind:'tp'|'sl', price, qty } on the master entry and on
  // each follower, so a move / add / remove on the master hits the matching follower leg. Master and follower legs are
  // paired by kind and trigger price (and by order when two share a price), never by array position alone.
  const legsFrom = (reqLegs, ids, kind) =>
    (reqLegs || [])
      .map((l, i) => ({
        id: (ids || [])[i] || null,
        kind,
        price: parseFloat(l.triggerPrice),
        qty: l.quantity != null ? String(l.quantity) : null,
      }))
      .filter((l) => l.id);
  const legsOf = (req, res) => [
    ...legsFrom(req && req.takeProfits, res && res.takeProfitIds, 'tp'),
    ...legsFrom(req && req.stopLosses, res && res.stopLossIds, 'sl'),
  ];
  const legOf = (kind) => (b) => ({
    id: b.id || null,
    kind,
    price: parseFloat(b.triggerPrice),
    qty: b.quantity != null ? String(b.quantity) : null,
  });
  const posLegs = (p) =>
    [...(p.takeProfits || []).map(legOf('tp')), ...(p.stopLosses || []).map(legOf('sl'))].filter((l) => l.id);
  const posIdOf = (p) => p.positionId || p.position_id;
  function matchLeg(masterLegs, followerLegs, masterLegId) {
    const m = (masterLegs || []).find((l) => l.id === masterLegId);
    if (!m) return null;
    const same = (arr) => (arr || []).filter((l) => l.kind === m.kind && Math.abs(l.price - m.price) < PRICE_EPS);
    return same(followerLegs)[same(masterLegs).indexOf(m)] || null;
  }
  // Re-read the master and follower positions so leg ids, prices and sizes are exact (after an add or a reduce, after
  // an order that didn't fill, or when a leg is unknown).
  async function syncLegs(entry) {
    const read = async (acct, positionId) => {
      try {
        const r = await api('/v3/positions/opened', (await mintAccountToken(acct)).token);
        const p = ((r && r.positions) || []).find((x) => posIdOf(x) === positionId);
        return p ? { legs: posLegs(p), qty: String(p.quantity) } : null;
      } catch {
        return null;
      }
    };
    const masterPid = Object.keys(S.posMap).find((k) => S.posMap[k] === entry);
    const pairs = Object.entries(entry.followers); // fixed pairs: a follower dropped meanwhile can't shift them
    const [ml, ...fls] = await Promise.all([
      read(entry.master, masterPid),
      ...pairs.map(([f, fp]) => read(f, fp.positionId)),
    ]);
    if (ml) Object.assign(entry, ml);
    pairs.forEach(([, fp], i) => {
      if (fls[i]) Object.assign(fp, fls[i]);
    });
  }

  // Every follower action on one trade runs in order. An exit never overtakes the entry or an add still in flight, and
  // two quick edits of the same leg land in the order they were made. Entries themselves never wait.
  function enqueue(entry, task) {
    const run = (entry.queue || Promise.resolve()).then(task);
    entry.queue = run.catch(() => {});
    return run;
  }

  // Copy a master add / move / remove of one stop or target to every follower.
  async function mirrorLeg(op, kind, req, entry, followers, lat, t0) {
    const KIND = kind === 'sl' ? 'SL' : 'TP';
    const path = kind === 'sl' ? '/v3/positions/stop-loss' : '/v3/positions/take-profit';
    const idKey = kind === 'sl' ? 'stopLossId' : 'takeProfitId';
    const masterLegId = req[idKey] || req.orderId || req.id;
    // Re-read only when the leg is unknown (e.g. added later). Reading after the master's move would show the master leg
    // at its new price while the follower's is still at the old one, and pairing needs the pre-move prices.
    if (op !== 'add' && !(entry.legs || []).some((l) => l.id === masterLegId)) await syncLegs(entry);
    // One sized leg scaled to a follower: nearest size step (flooring each leg alone leaves an uncovered sliver), capped
    // so this kind's sized legs never add up past the follower's position. null when it rounds to nothing.
    const scaleOne = (qty, fp, skip) => {
      const step = sizeStepOf(entry.symbol),
        mq = parseFloat(entry.qty),
        fq = parseFloat(fp.qty);
      if (!(mq > 0) || !(fq > 0) || fq === mq) return String(qty);
      const others = (fp.legs || [])
        .filter((l) => l !== skip && l.kind === kind && l.qty != null)
        .reduce((a, l) => a + parseFloat(l.qty), 0);
      const q = Math.min(Math.round((parseFloat(qty) * fq) / mq / step) * step, floorStep(fq - others, step));
      return q > 0 ? fmtQty(q, entry.symbol) : null;
    };
    await Promise.all(
      followers.map(async (f) => {
        const fp = entry.followers[f];
        const d = { ...who(f), kind: KIND, op, triggerPrice: req.triggerPrice };
        if (!fp) {
          logEvent('warn', `↳ ${accLabel(f)} isn't in this trade — ${KIND} change skipped`);
          diag('bracket', { ...d, outcome: 'skipped', reason: 'not tracked', met: false });
          return;
        }
        try {
          if (op === 'add') {
            const body = { ...req, positionId: fp.positionId };
            if (req.quantity != null) {
              const q = scaleOne(req.quantity, fp, null);
              if (!q) {
                logEvent('info', `↳ ${accLabel(f)} ${KIND} size rounds to 0 — skipped`);
                diag('bracket', { ...d, outcome: 'skipped', reason: 'size rounds to 0', met: true });
                return;
              }
              body.quantity = q;
            }
            await acctPost(f, path, body);
            logEvent(
              'ok',
              `↳ added ${KIND} ${req.triggerPrice}${body.quantity ? ' × ' + body.quantity : ''} on ${accLabel(f)} (${lat()})`,
            );
          } else {
            let fl = matchLeg(entry.legs, fp.legs, masterLegId);
            if (!fl) {
              await syncLegs(entry);
              fl = matchLeg(entry.legs, fp.legs, masterLegId);
            }
            if (!fl) {
              logEvent('warn', `↳ ${accLabel(f)} has no matching ${KIND} — skipped`);
              diag('bracket', { ...d, outcome: 'skipped', reason: 'no matching leg', met: false });
              return;
            }
            const body = { ...req, positionId: fp.positionId };
            for (const k of ['stopLossId', 'takeProfitId', 'orderId', 'id'])
              if (body[k] === masterLegId) body[k] = fl.id;
            if (op === 'move') {
              if (req.quantity != null) {
                // a resized leg: scale it to this follower
                const q = scaleOne(req.quantity, fp, fl);
                if (q) body.quantity = q;
                else delete body.quantity;
              }
              await acctPut(f, path, body);
              fl.price = parseFloat(req.triggerPrice);
              if (body.quantity != null) fl.qty = body.quantity;
              logEvent('ok', `↳ moved ${KIND} → ${req.triggerPrice} on ${accLabel(f)} (${lat()})`);
            } else {
              await acctDelete(f, path, body);
              fp.legs = fp.legs.filter((l) => l !== fl);
              logEvent('ok', `↳ removed ${KIND} on ${accLabel(f)} (${lat()})`);
            }
          }
          diag('bracket', {
            ...d,
            outcome: { add: 'added', move: 'moved', remove: 'removed' }[op],
            met: true,
            ms: msSince(t0),
          });
        } catch (e) {
          logEvent('warn', `↳ ${accLabel(f)} ${KIND} ${op} failed: ${e.message}`);
          diag('bracket', { ...d, outcome: 'rejected', error: e.message, errorCode: errCode(e), met: false });
        }
      }),
    );
    if (op === 'move') {
      const ml = (entry.legs || []).find((l) => l.id === masterLegId);
      if (ml) {
        ml.price = parseFloat(req.triggerPrice);
        if (req.quantity != null) ml.qty = String(req.quantity);
      }
    }
    if (op === 'remove') entry.legs = (entry.legs || []).filter((l) => l.id !== masterLegId);
    if (op === 'add') setTimeout(() => enqueue(entry, () => syncLegs(entry)), LEG_SYNC_DELAY_MS); // learn the new leg ids
  }

  // Canonical leverage key (2 dp), so "50", "50.0" and an effective "50.001027" compare equal and skip a redundant PUT.
  const levKey = (lev) => String(Math.round(parseFloat(lev) * 100) / 100);

  // Open ONE follower: sized (cap-to-fit), leverage synced if needed, stop and targets attached. Writes the follower's
  // record into `followersMap` (shared by the normal and fast paths) and returns a `placed` record, or null.
  async function openFollower(f, o, followersMap, lat, fast) {
    const t0 = performance.now();
    const cq = capQty(f, o.qty, o.sym);
    const base = {
      ...who(f),
      symbol: o.sym,
      side: o.side,
      leverage: o.lev,
      fast,
      capFit: S.capFit,
      masterQty: o.qty,
      intendedQty: cq.qty,
      scaled: !!cq.scaled,
      ...cq.calc,
    };
    if (cq.skip) {
      logEvent(
        'warn',
        cq.calc && cq.calc.reason === 'missing-equity'
          ? `↳ ${accLabel(f)} skipped — its balance couldn't be read, so cap-to-fit can't size it.`
          : `↳ ${accLabel(f)} skipped — equity too small to hold any size (cap-to-fit).`,
      );
      diag('open', { ...base, outcome: 'skipped', expected: 'skip-too-small', met: true });
      return null;
    }
    if (cq.scaled) logEvent('info', `↳ ${accLabel(f)} scaled ${o.qty} → ${cq.qty} (margin cap)`);
    try {
      const key = f + '|' + o.sym;
      if (S.levCache[key] !== levKey(o.lev)) {
        try {
          await setFollowerLeverage(f, o.sym, o.lev);
          S.levCache[key] = levKey(o.lev);
        } catch (le) {
          diag('leverage', { ...who(f), symbol: o.sym, set: o.lev, error: le.message });
        }
      }
      const payload = {
        orderType: o.req.orderType,
        leverage: o.lev,
        side: o.side,
        symbol: o.sym,
        quantity: cq.qty,
        timeInForce: o.req.timeInForce,
        takeProfits: scaleLegs(o.req.takeProfits, o.qty, cq.qty, o.sym),
        stopLosses: scaleLegs(o.req.stopLosses, o.qty, cq.qty, o.sym),
      };
      if (o.req.price != null) payload.price = o.req.price;
      if (o.req.expirationTime != null) payload.expirationTime = o.req.expirationTime; // a moved limit keeps its expiry
      const r = await acctPost(f, '/v3/positions/open', payload);
      const rec = { positionId: r.positionId, orderId: r.orderId, legs: legsOf(payload, r), qty: cq.qty };
      if (followersMap) followersMap[f] = rec;
      logEvent('ok', `↳ OPENED ${cq.qty} ${o.sym} ${o.side} on ${accLabel(f)} (${lat()})`);
      // the diag record stays open here; confirmFills fills in filled / slippage / margin / met
      const d = diag('open', {
        ...base,
        outcome: 'accepted',
        positionId: r.positionId,
        orderId: r.orderId,
        delayedOrderStatus: r.delayedOrderStatus || null,
        sendMs: msSince(t0),
        expected: isImmediate(o.req) ? 'fill' : 'rest', // a resting limit fills later, if at all
        met: null,
      });
      return { accountId: f, orderId: r.orderId, positionId: r.positionId, label: accLabel(f), qty: cq.qty, diag: d };
    } catch (e) {
      logEvent('warn', `↳ ${accLabel(f)} OPEN failed: ${e.message}`);
      diag('open', {
        ...base,
        outcome: 'rejected',
        error: e.message,
        errorCode: errCode(e),
        sendMs: msSince(t0),
        expected: 'fill',
        met: false,
      });
      return null;
    }
  }

  // Close / reduce one follower, retrying once on a rate limit or server error: an exit that silently fails leaves that
  // follower in a trade the master has left.
  // The retry keeps the same Idempotency-Key: if Vest ran the first one (a 504 or a dropped connection after it executed),
  // it won't run the reduce twice.
  async function sendExit(f, path, body) {
    const key = idem()['Idempotency-Key'];
    noteExit(body && body.positionId); // the feed will report it closing: this tab did that
    try {
      return await acctSend('POST', f, path, body, key);
    } catch (e) {
      const code = errCode(e);
      if (code != null && code < 429) throw e;
      await sleep(EXIT_RETRY_MS);
      return acctSend('POST', f, path, body, key);
    }
  }

  // Mirror a MASTER action to every follower. Quantities are 1:1 unless cap-to-fit is on. Followers use the master's
  // leverage for each order (pre-synced at arm, so the leverage PUT is normally skipped).
  function mirror(action, req, res, method = 'POST') {
    const followers = [...S.followers];
    if (!followers.length) return;
    const t0 = performance.now();
    const lat = () => '+' + msSince(t0) + 'ms';
    diag('master', {
      action,
      symbol: req.symbol,
      side: req.side,
      qty: req.quantity,
      leverage: req.leverage,
      positionId: req.positionId || res.positionId || null,
      orderId: res.orderId || null,
      triggerPrice: req.triggerPrice,
      followers: followers.length,
      fast: false,
    });
    const entry = req.positionId ? S.posMap[req.positionId] : null;
    const untracked = (what) => {
      logEvent(
        'warn',
        `↳ that position isn't tracked (opened while not copying, and not adopted) — the ${what} was NOT copied.`,
      );
      diag(action, {
        symbol: req.symbol,
        positionId: req.positionId || null,
        outcome: 'skipped',
        reason: 'master position not tracked',
        met: false,
      });
    };

    if (action === 'open') {
      const { side, symbol: sym, quantity: qty, leverage: lev } = req,
        masterPos = res.positionId;
      logEvent('info', `MASTER opened ${side} ${qty} ${sym} (${lev}x) on ${accLabel(S.master)}`);
      if (!masterPos) {
        // nothing to link followers to: don't open them
        logEvent('warn', 'Vest returned no position for the master order — not copied.');
        diag('open', { symbol: sym, outcome: 'skipped', reason: 'no master positionId', met: false });
        return;
      }
      if (S.posMap[masterPos]) {
        // Vest handed back a position that is already tracked: never re-open followers or drop their links
        logEvent('warn', 'That order joined a position the copier already tracks — not copied as a new entry.');
        diag('open', {
          symbol: sym,
          positionId: masterPos,
          outcome: 'skipped',
          reason: 'position already tracked',
          met: false,
        });
        return;
      }
      const e = (S.posMap[masterPos] = {
        master: S.master,
        side,
        symbol: sym,
        masterOrderId: res.orderId,
        resting: !isImmediate(req), // a limit entry: followers' orders may still be resting
        qty,
        legs: legsOf(req, res),
        followers: {},
      });
      const jobs = followers.map((f) => openFollower(f, { side, sym, qty, lev, req }, e.followers, lat, false));
      e.queue = Promise.all(jobs).catch(() => {}); // later actions wait for the entries; entries never wait
      if (isImmediate(req)) {
        Promise.all(jobs).then((placed) =>
          confirmFills(sym, { accountId: S.master, orderId: res.orderId, qty }, placed.filter(Boolean), e, 'entry'),
        );
      }
    } else if (action === 'append') {
      // Add to the open position. Each follower adds to its own position, scaled like a reduce (same fraction of its size).
      const sym = req.symbol;
      logEvent(
        'info',
        `MASTER added ${req.quantity} ${sym} to its ${req.isBuy ? 'long' : 'short'} on ${accLabel(S.master)}`,
      );
      if (!entry) return untracked('add');
      const added = (a, b) => fmtQty(parseFloat(a) + parseFloat(b), sym);
      const resting = !isImmediate(req) && res.orderId;
      if (resting) (entry.restingAdds = entry.restingAdds || {})[res.orderId] = { qty: req.quantity, followers: {} };
      const run = enqueue(entry, async () => {
        const mBefore = entry.qty;
        entry.qty = added(mBefore, req.quantity);
        const placed = await Promise.all(
          followers.map(async (f) => {
            const fp = entry.followers[f],
              d = { ...who(f), symbol: sym, masterQty: req.quantity };
            if (!fp) {
              logEvent('warn', `↳ ${accLabel(f)} isn't in this trade — add skipped`);
              diag('append', { ...d, outcome: 'skipped', reason: 'not tracked', met: false });
              return null;
            }
            const q = scaleToFollower(req.quantity, fp.qty, mBefore, sym);
            if (!(parseFloat(q) > 0)) {
              logEvent('info', `↳ ${accLabel(f)} add rounds to 0 — skipped`);
              diag('append', {
                ...d,
                followerQty: fp.qty,
                scaledQty: q,
                outcome: 'skipped',
                reason: 'rounds to 0',
                met: true,
              });
              return null;
            }
            const body = {
              symbol: sym,
              positionId: fp.positionId,
              orderType: req.orderType,
              quantity: q,
              leverage: req.leverage,
              isBuy: req.isBuy,
              timeInForce: req.timeInForce,
            };
            if (req.price != null) body.price = req.price;
            try {
              const r = await acctPost(f, '/v3/positions/append', body);
              const was = fp.qty;
              fp.qty = added(was, q);
              if (resting && entry.restingAdds && entry.restingAdds[res.orderId])
                entry.restingAdds[res.orderId].followers[f] = { orderId: r.orderId, qty: q };
              logEvent('ok', `↳ ADDED ${q} on ${accLabel(f)} (${lat()})`);
              const dd = diag('append', {
                ...d,
                followerQty: was,
                scaledQty: q,
                outcome: 'accepted',
                orderId: r.orderId,
                expected: 'fill',
                met: null,
                ms: msSince(t0),
              });
              return {
                accountId: f,
                orderId: r.orderId,
                label: accLabel(f),
                qty: q,
                diag: dd,
                undo: () => {
                  fp.qty = added(fp.qty, -q);
                },
              };
            } catch (e) {
              logEvent('warn', `↳ ${accLabel(f)} ADD failed: ${e.message}`);
              diag('append', {
                ...d,
                scaledQty: q,
                outcome: 'rejected',
                error: e.message,
                errorCode: errCode(e),
                met: false,
              });
              return null;
            }
          }),
        );
        return placed.filter(Boolean);
      });
      run.then(
        (placed) =>
          isImmediate(req) &&
          confirmFills(
            sym,
            {
              accountId: S.master,
              orderId: res.orderId,
              qty: req.quantity,
              undo: () => {
                entry.qty = added(entry.qty, -req.quantity);
              },
            },
            placed,
            entry,
            'add',
          ),
      );
    } else if (action === 'reduce') {
      logEvent('info', `MASTER reduced ${req.quantity} ${req.symbol} on ${accLabel(S.master)}`);
      if (!entry) return untracked('reduce');
      if (req.orderType && req.orderType !== 'market') {
        logEvent(
          'warn',
          `The master's reduce is a ${req.orderType} order: not copied (followers would exit at market now). Reduce them on Vest when it fills.`,
        );
        diag('reduce', { outcome: 'skipped', reason: 'non-market reduce', orderType: req.orderType });
        return;
      }
      enqueue(entry, async () => {
        const mBefore = entry.qty;
        entry.qty = fmtQty(Math.max(0, parseFloat(mBefore) - parseFloat(req.quantity)), req.symbol);
        await Promise.all(
          followers.map(async (f) => {
            const fp = entry.followers[f],
              d = { ...who(f), symbol: req.symbol, masterQty: req.quantity };
            if (!fp) {
              logEvent('warn', `↳ ${accLabel(f)} isn't in this trade — reduce skipped`);
              diag('reduce', { ...d, outcome: 'skipped', reason: 'not tracked', met: false });
              return;
            }
            const rq = scaleToFollower(req.quantity, fp.qty, mBefore, req.symbol);
            if (!(parseFloat(rq) > 0)) {
              logEvent('info', `↳ ${accLabel(f)} reduce rounds to 0 — skipped`);
              diag('reduce', {
                ...d,
                followerQty: fp.qty,
                scaledQty: rq,
                outcome: 'skipped',
                reason: 'rounds to 0',
                met: true,
              });
              return;
            }
            try {
              await sendExit(f, '/v3/positions/reduce', {
                positionId: fp.positionId,
                orderType: 'market',
                leverage: req.leverage,
                quantity: rq,
                timeInForce: 'IOC',
                reduceOnly: true,
                symbol: req.symbol,
              });
              logEvent('ok', `↳ REDUCED ${rq} on ${accLabel(f)} (${lat()})`);
              diag('reduce', {
                ...d,
                followerQty: fp.qty,
                scaledQty: rq,
                outcome: 'accepted',
                met: true,
                ms: msSince(t0),
              });
              fp.qty = fmtQty(Math.max(0, parseFloat(fp.qty) - parseFloat(rq)), req.symbol);
            } catch (e) {
              logEvent('warn', `↳ ${accLabel(f)} REDUCE failed: ${e.message} — it still holds its full size.`);
              diag('reduce', {
                ...d,
                scaledQty: rq,
                outcome: 'rejected',
                error: e.message,
                errorCode: errCode(e),
                met: false,
              });
            }
          }),
        );
        // an IOC reduce can fill partly or not at all: re-read the true sizes shortly after
        setTimeout(() => enqueue(entry, () => syncLegs(entry)), RESYNC_AFTER_REDUCE_MS);
      });
    } else if (action === 'close') {
      logEvent('info', `MASTER closed ${req.symbol} on ${accLabel(S.master)}`);
      if (!entry) return untracked('close');
      delete S.posMap[req.positionId];
      enqueue(entry, async () => {
        const placed = await Promise.all(
          followers.map(async (f) => {
            const fp = entry.followers[f],
              d = { ...who(f), symbol: req.symbol };
            if (!fp) return null; // never in this trade: nothing to close
            if (entry.resting && fp.orderId)
              try {
                await acctPost(f, '/v3/positions/cancel-order', { orderId: fp.orderId });
              } catch {
                /* best effort: it filled or is gone, and the close below handles a position */
              }
            try {
              const r = await sendExit(f, '/v3/positions/close', closeBody(req.symbol, fp.positionId, req.leverage, f));
              logEvent('ok', `↳ CLOSED on ${accLabel(f)} (${lat()})`);
              const dd = diag('close', {
                ...d,
                followerQty: fp.qty,
                outcome: 'accepted',
                orderId: r.orderId,
                expected: 'fill',
                met: null,
                ms: msSince(t0),
              });
              return { accountId: f, orderId: r.orderId, label: accLabel(f), qty: fp.qty, diag: dd };
            } catch (e) {
              logEvent('warn', `↳ ${accLabel(f)} CLOSE failed: ${e.message} — it is still OPEN. Close it on Vest.`);
              diag('close', { ...d, outcome: 'rejected', error: e.message, errorCode: errCode(e), met: false });
              return null;
            }
          }),
        );
        confirmFills(
          req.symbol,
          { accountId: S.master, orderId: res.orderId, qty: entry.qty || '0' },
          placed.filter(Boolean),
          null,
          'close',
        );
      });
    } else if (action === 'stop-loss' || action === 'take-profit') {
      // PUT moves an existing stop/target, POST adds one to the open position, DELETE removes one.
      const kind = action === 'stop-loss' ? 'sl' : 'tp',
        KIND = kind === 'sl' ? 'SL' : 'TP';
      const op = method === 'POST' ? 'add' : method === 'DELETE' ? 'remove' : 'move';
      logEvent(
        'info',
        op === 'add'
          ? `MASTER added ${KIND} ${req.triggerPrice}${req.quantity != null ? ' × ' + req.quantity : ''} on ${accLabel(S.master)}`
          : op === 'remove'
            ? `MASTER removed a ${KIND} on ${accLabel(S.master)}`
            : `MASTER moved ${KIND} → ${req.triggerPrice} on ${accLabel(S.master)}`,
      );
      if (!entry) return untracked(`${KIND} change`);
      enqueue(entry, () => mirrorLeg(op, kind, req, entry, followers, lat, t0));
    } else if (action === 'cancel-order') {
      logEvent('info', `MASTER cancelled a resting order on ${accLabel(S.master)}`);
      // a resting limit add (the entry is already open): cancel each follower's add and take its size back off
      const addEntry = Object.values(S.posMap).find((x) => x.restingAdds && x.restingAdds[req.orderId]);
      if (addEntry) {
        const ra = addEntry.restingAdds[req.orderId];
        delete addEntry.restingAdds[req.orderId];
        addEntry.qty = fmtQty(Math.max(0, parseFloat(addEntry.qty) - parseFloat(ra.qty)), addEntry.symbol);
        enqueue(addEntry, () =>
          Promise.all(
            Object.entries(ra.followers).map(async ([f, o]) => {
              try {
                await acctPost(f, '/v3/positions/cancel-order', { orderId: o.orderId });
                const fp = addEntry.followers[f];
                if (fp) fp.qty = fmtQty(Math.max(0, parseFloat(fp.qty) - parseFloat(o.qty)), addEntry.symbol);
                logEvent('ok', `↳ cancelled the resting add on ${accLabel(f)} (${lat()})`);
                diag('cancel', { ...who(f), orderId: o.orderId, kind: 'add', outcome: 'cancelled', met: true });
              } catch (err) {
                logEvent(
                  'warn',
                  `↳ ${accLabel(f)} cancel failed: ${err.message} — its add may still be resting. Check it on Vest.`,
                );
                diag('cancel', { ...who(f), kind: 'add', outcome: 'rejected', error: err.message, met: false });
              }
            }),
          ).then(() => setTimeout(() => enqueue(addEntry, () => syncLegs(addEntry)), RESYNC_AFTER_REDUCE_MS)),
        );
        return;
      }
      const e = entryByOrderId(req.orderId);
      if (!e) return untracked('cancel');
      const key = Object.keys(S.posMap).find((k) => S.posMap[k] === e);
      if (key) delete S.posMap[key];
      enqueue(e, () =>
        Promise.all(
          followers.map(async (f) => {
            const fp = e.followers[f];
            if (!fp || !fp.orderId) return;
            try {
              await acctPost(f, '/v3/positions/cancel-order', { orderId: fp.orderId });
              logEvent('ok', `↳ cancelled order on ${accLabel(f)} (${lat()})`);
              diag('cancel', { ...who(f), orderId: fp.orderId, outcome: 'cancelled', met: true, ms: msSince(t0) });
            } catch (err) {
              // it may have filled already: then the follower holds a position the master doesn't
              let holding = null;
              try {
                holding = await openPosition(f, e.symbol);
              } catch {
                /* unreadable: say so below */
              }
              if (holding && parseFloat(holding.quantity) > 0) {
                raiseOrphans(
                  e.symbol,
                  [{ accountId: f, positionId: posIdOf(holding) }],
                  "a follower's limit filled before the master's was cancelled",
                  S.master,
                );
                return;
              }
              logEvent(
                'warn',
                `↳ ${accLabel(f)} cancel failed: ${err.message} — its order may still be resting. Check it on Vest.`,
              );
              diag('cancel', {
                ...who(f),
                outcome: 'rejected',
                error: err.message,
                errorCode: errCode(err),
                met: false,
              });
            }
          }),
        ),
      );
    }
  }

  // ───────────────────────── fast mode (fire follower opens at master-send) ─────────────────────────
  // Returns a `pending` descriptor if it fired follower opens for a master OPEN; otherwise null.
  function maybeFastOpen(url, reqBody, auth) {
    if (!S.armed || !S.fast || S.flattening || orderAction(url) !== 'open') return null;
    if (acctIdFromAuth(auth) !== S.master) return null;
    const req = parseJson(reqBody, null);
    if (!req) return null;
    checkShape('open', req);
    const followers = [...S.followers];
    if (!followers.length) return null;
    const { side, symbol: sym, quantity: qty, leverage: lev } = req,
      t0 = performance.now();
    const pending = { side, sym, qty, lev, req, byId: {}, placed: [], jobs: [] };
    logEvent('info', `MASTER opening ${side} ${qty} ${sym} (${lev}x) — fast-firing followers…`);
    diag('master', { action: 'open', symbol: sym, side, qty, leverage: lev, followers: followers.length, fast: true });
    const lat = () => '+' + msSince(t0) + 'ms, fast';
    pending.jobs = followers.map((f) =>
      openFollower(f, { side, sym, qty, lev, req }, pending.byId, lat, true).then((rec) => {
        if (rec) pending.placed.push(rec);
        return rec;
      }),
    );
    return pending;
  }
  // Reconcile a fast open with the master's response: link the followers to the master position, or raise them as
  // orphans if the master was refused or the request failed (status 0).
  // `unreadable`: the request succeeded but its response couldn't be read, so the outcome is unknown.
  function reconcileFast(pending, resBody, status, unreadable = false) {
    if (pending.done) return;
    pending.done = true;
    setTimeout(refreshBalances, BALANCE_AFTER_TRADE_MS);
    const res = parseJson(resBody, {}) || {};
    if (S.flattening) return; // Flatten All is closing everything, these copies included
    if (!S.armed && status >= 200 && status < 300) {
      // disarmed while the copies were in flight: they're not tracked, so offer them as orphans
      Promise.all(pending.jobs).then(() => {
        const list = Object.entries(pending.byId).map(([accountId, v]) => ({
          accountId,
          positionId: v.positionId,
          orderId: v.orderId,
          resting: !isImmediate(pending.req),
          leverage: pending.lev,
        }));
        raiseOrphans(pending.sym, list, 'copying was stopped while they were being opened', S.master);
      });
      return;
    }
    if (status >= 200 && status < 300 && res.positionId && !S.posMap[res.positionId]) {
      // posMap.followers is the SAME object as pending.byId, so follower opens still in flight are linked too
      const e = (S.posMap[res.positionId] = {
        master: S.master,
        side: pending.side,
        symbol: pending.sym,
        masterOrderId: res.orderId,
        resting: !isImmediate(pending.req),
        qty: pending.qty,
        legs: legsOf(pending.req, res),
        followers: pending.byId,
      });
      e.queue = Promise.all(pending.jobs).catch(() => {});
      if (!isImmediate(pending.req)) return;
      Promise.all(pending.jobs).then(() =>
        confirmFills(
          pending.sym,
          { accountId: S.master, orderId: res.orderId, qty: pending.qty },
          pending.placed,
          e,
          'entry',
        ),
      );
      return;
    }
    Promise.all(pending.jobs).then(() => {
      const list = Object.entries(pending.byId).map(([accountId, v]) => ({
        accountId,
        positionId: v.positionId,
        orderId: v.orderId,
        resting: !isImmediate(pending.req),
        leverage: pending.lev,
      }));
      const refused = status >= 400 && !unreadable;
      const why = refused
        ? `the master entry was refused (HTTP ${status})`
        : "the master's response was lost, so its entry can't be linked";
      raiseOrphans(pending.sym, list, why, refused ? null : S.master);
    });
  }

  // Followers holding a position the master doesn't (fast-mode entry refused, or an entry the master didn't fill).
  // Auto-flatten closes them; otherwise the panel asks Flatten / Keep. New orphans join any already waiting.
  // `checkMaster`: when the master's outcome is uncertain, auto-flatten only if the master is confirmed to hold nothing
  // on that market; otherwise the trader decides.
  async function raiseOrphans(sym, list, why, checkMaster = null) {
    if (!list.length) return;
    let masterIn = false;
    if (checkMaster) {
      try {
        masterIn = !!(await openPosition(checkMaster, sym));
      } catch {
        masterIn = true; // unreadable: assume it may be in
      }
    }
    const n = list.length;
    logEvent('warn', `${n} follower position${n !== 1 ? 's' : ''} without the master — ${why}.`);
    if (masterIn)
      logEvent('warn', `The master may hold ${symLabel(sym)} itself — check it before flattening the followers.`);
    diag('orphan', { symbol: sym, followersOpened: n, why, autoFlatten: S.autoFlatten, masterMayBeIn: masterIn });
    const items = list.map((o) => ({ ...o, symbol: sym, hold: masterIn, why }));
    S.orphan = { list: [...((S.orphan && S.orphan.list) || []), ...items] };
    if (S.autoFlatten && !masterIn) flattenOrphans(true);
    else {
      // the Flatten / Keep prompt is hidden in a minimised panel: open it
      if (_root && _root.querySelector('.panel.collapsed')) setOpen(true);
      render();
    }
  }
  // `autoOnly`: auto-flatten closes only the batches raised with the master confirmed out; one held for the user's
  // Flatten / Keep (the master may be in) stays waiting.
  async function flattenOrphans(autoOnly = false) {
    const o = S.orphan;
    if (!o) return;
    const go = autoOnly ? o.list.filter((v) => !v.hold) : o.list,
      wait = autoOnly ? o.list.filter((v) => v.hold) : [];
    S.orphan = wait.length ? { list: wait } : null;
    logEvent('warn', `Flattening ${go.length} orphan follower position(s)…`);
    for (const v of go) {
      const lev = v.leverage || (S.byId[v.accountId] && S.byId[v.accountId].leverage) || DEFAULT_LEVERAGE;
      if (v.resting && v.orderId)
        try {
          // a limit entry may still be resting: cancel it, or it could fill after the close
          await acctPost(v.accountId, '/v3/positions/cancel-order', { orderId: v.orderId });
        } catch {
          /* best effort: already filled or gone */
        }
      try {
        await sendExit(v.accountId, '/v3/positions/close', closeBody(v.symbol, v.positionId, lev));
        logEvent('ok', `↳ flattened ${accLabel(v.accountId)}`);
      } catch (e) {
        logEvent('warn', `↳ ${accLabel(v.accountId)} flatten failed: ${e.message} — close it on Vest.`);
      }
    }
    setTimeout(refreshBalances, BALANCE_AFTER_TRADE_MS);
    render();
  }
  function keepOrphans() {
    S.orphan = null;
    logEvent('warn', 'Kept the orphan follower positions — manage them on Vest.');
    render();
  }

  // ───────────────────────── flatten-all ─────────────────────────
  // Close every open position and cancel every resting order on ALL loaded accounts, whatever is selected, in one click:
  // an emergency button, and a quick way out of a trade across many accounts. The copier stays armed (or disarmed) as it
  // was, ready for the next trade. While the sweep runs nothing new is copied, an arm in progress is cancelled, follower
  // orders still in flight are waited for, and a second sweep catches anything that landed during the first.
  async function flattenAccount(id) {
    const { token } = await mintAccountToken(id);
    const [posR, ordR] = await Promise.all([
      api('/v3/positions/opened', token),
      api('/v3/positions/opened-orders', token),
    ]);
    const positions = (posR && posR.positions) || [],
      orders = (ordR && ordR.orders) || [];
    for (const o of orders) {
      // resting orders first
      const oid = o.orderId || o.order_id || o.id;
      if (!oid) continue;
      try {
        await acctPost(id, '/v3/positions/cancel-order', { orderId: oid });
        logEvent('ok', `↳ cancelled a resting order on ${accLabel(id)}`);
      } catch (e) {
        logEvent('warn', `↳ ${accLabel(id)} cancel failed: ${e.message}`);
      }
    }
    for (const p of positions) {
      const pid = posIdOf(p),
        sym = p.symbol;
      if (!pid || !sym) continue;
      const lev = p.leverage || (S.byId[id] && S.byId[id].leverage) || DEFAULT_LEVERAGE;
      try {
        await sendExit(id, '/v3/positions/close', closeBody(sym, pid, lev));
        logEvent('ok', `↳ closed ${sym} on ${accLabel(id)}`);
      } catch (e) {
        logEvent('warn', `↳ ${accLabel(id)} close failed: ${e.message}`);
      }
    }
    return positions.length + orders.length;
  }
  async function flattenAll() {
    if (S.flattening) return;
    const ids = Object.keys(S.byId);
    if (!ids.length) {
      logEvent('warn', 'Flatten All: no accounts loaded.');
      return render();
    }
    S.flattening = true;
    _armEpoch++; // an arm in progress would adopt positions that are being closed
    S.orphan = null;
    Object.values(S.plans).forEach((p) => endPlan(p, null)); // nothing left for breakeven to manage
    render();
    logEvent(
      'warn',
      `FLATTEN ALL — closing every position and cancelling every order on ${ids.length} account(s).${S.armed ? ' Copying keeps running for your next trade.' : ''}`,
    );
    diag('flatten_all', { accounts: ids.length, armed: S.armed });
    try {
      await flattenSweep(ids);
    } finally {
      S.flattening = false; // never left set: master orders would be skipped as "during Flatten All" while ARMED shows
      setTimeout(refreshBalances, BALANCE_AFTER_TRADE_MS);
      render();
    }
  }
  async function flattenSweep(ids) {
    const inFlight = Object.values(S.posMap)
      .map((e) => e.queue)
      .filter(Boolean);
    await Promise.race([Promise.all(inFlight), sleep(FLATTEN_WAIT_MS)]);
    S.posMap = {};
    const sweep = () =>
      Promise.all(
        ids.map((id) =>
          flattenAccount(id).catch((e) => {
            logEvent('warn', `↳ ${accLabel(id)} couldn't be read: ${e.message}`);
            return 1;
          }),
        ),
      );
    await sweep();
    await sleep(FLATTEN_RECHECK_MS);
    const left = (await sweep()).reduce((a, b) => a + b, 0);
    if (left)
      logEvent('warn', 'Flatten All: some positions or orders needed a second pass — check every account on Vest.');
    else logEvent('ok', 'Flatten All complete — every account is flat.');
  }

  // ───────────────────────── trade panel: order math (pure) ─────────────────────────
  // Everything here is a pure function of its inputs — no network, no state — so it's unit-tested.
  const decimalsOf = (step) => {
    const s = String(step);
    const e = s.match(/^[\d.]+e-(\d+)$/i); // 1e-7 and the like
    if (e) return (s.split('e')[0].split('.')[1] || '').length + +e[1];
    return s.includes('.') ? s.split('.')[1].length : 0;
  };
  /** Round a price to the symbol's tick (e.g. 0.25 for NDX). */
  const roundTick = (price, tick) => +(Math.round(price / tick) * tick).toFixed(decimalsOf(tick));
  /** Floor a size to the symbol's size step (e.g. 0.0001). */
  // the tolerance grows with the count, so a float a hair under a whole number of steps isn't floored a step too low
  const floorStep = (qty, step) => {
    const u = qty / step;
    return +(Math.floor(u + 1e-9 + Math.abs(u) * 1e-12) * step).toFixed(decimalsOf(step));
  };

  /**
   * Split a total size across N targets.
   *   even  — equal slices
   *   start — heaviest first (weights N … 1): bank most at the first target
   *   end   — heaviest last  (weights 1 … N): let most of it run to the last target
   * Works in whole size-steps (largest-remainder method): each slice is floored, then the leftover steps go to
   * the slices that were rounded down the most — so the total is exact and slices stay as even as possible
   * (1.0 over 3, start → 0.5000 / 0.3333 / 0.1667). Returns { qtys } or { error } if a slice would be empty.
   */
  function splitQty(total, n, mode, step) {
    if (!(total > 0) || !(n >= 1)) return { error: 'Size must be above zero' };
    const w = Array.from({ length: n }, (_, i) => (mode === 'start' ? n - i : mode === 'end' ? i + 1 : 1));
    const wsum = w.reduce((a, b) => a + b, 0);
    const units = Math.floor(total / step + 1e-9); // total, in size steps
    const raw = w.map((x) => (units * x) / wsum);
    const base = raw.map((r) => Math.floor(r + 1e-9));
    const left = units - base.reduce((a, b) => a + b, 0);
    const order = raw
      .map((r, i) => [r - Math.floor(r + 1e-9), w[i], i])
      .sort((a, b) => b[0] - a[0] || b[1] - a[1] || a[2] - b[2]);
    for (let k = 0; k < left; k++) base[order[k % n][2]]++;
    if (base.some((u) => u < 1))
      return { error: `${total} is too small to split into ${n} targets — use fewer targets or a bigger size` };
    const dec = decimalsOf(step);
    return { qtys: base.map((u) => +(u * step).toFixed(dec)) };
  }

  /**
   * Turn point distances into trigger prices from an entry price.
   * long: stop below, targets above · short: stop above, targets below. Targets must be increasing distances.
   */
  function planPrices({ side, entry, stopPts, targetPts, tick }) {
    if (!(entry > 0)) return { error: 'No live price yet' };
    if (!(stopPts > 0)) return { error: 'Stop must be above zero points' };
    if (!targetPts.length) return { error: 'Add at least one target' };
    for (let i = 0; i < targetPts.length; i++) {
      if (!(targetPts[i] > 0)) return { error: `Target ${i + 1} must be above zero points` };
      if (i && !(targetPts[i] > targetPts[i - 1])) return { error: `Target ${i + 1} must be further than target ${i}` };
    }
    const dir = side === 'long' ? 1 : -1;
    const stop = roundTick(entry - dir * stopPts, tick),
      targets = targetPts.map((p) => roundTick(entry + dir * p, tick));
    if (!(stop > 0)) return { error: 'The stop would be at or below zero: use fewer points' };
    const bad = targets.findIndex((x) => !(x > 0));
    if (bad >= 0) return { error: `Target ${bad + 1} would be at or below zero: use fewer points` };
    return { stop, targets };
  }

  /** Size from a dollar risk: qty = risk ÷ (stop points × $ per point per unit), floored to the size step. */
  const riskQty = (riskUsd, stopPts, pointValue, step) =>
    riskUsd > 0 && stopPts > 0 && pointValue > 0 ? floorStep(riskUsd / (stopPts * pointValue), step) : 0;

  /** Breakeven stop price: entry plus an offset in your favour (e.g. +1 pt covers fees), tick-rounded. */
  // Entry (an average can sit between ticks) plus the offset, rounded to the tick on the profit side: never a loss.
  // A negative offset would put the stop on the losing side of the entry: it counts as 0.
  const breakevenPrice = ({ side, entry, offsetPts, tick }) => {
    const n = (entry + (side === 'long' ? 1 : -1) * Math.max(0, offsetPts || 0)) / tick;
    return +((side === 'long' ? Math.ceil(n - 1e-9) : Math.floor(n + 1e-9)) * tick).toFixed(decimalsOf(tick));
  };
  /**
   * Should the stop move to breakeven now?  mode: 'off' | 'tp1' (after the first target fills) | 'points'
   * (price has moved `triggerPts` in your favour). Never fires twice.
   */
  function breakevenDue({ mode, side, entry, price, triggerPts, tp1Filled, alreadyMoved }) {
    if (alreadyMoved || mode === 'off' || !mode) return false;
    if (mode === 'tp1') return !!tp1Filled;
    if (mode === 'points')
      return triggerPts > 0 && price > 0 && (side === 'long' ? price - entry : entry - price) >= triggerPts;
    return false;
  }

  /**
   * Vest's "Trading Power", the order value its own ticket allows at 100%: free cash (less any open loss) times leverage,
   * less room for the opening fee and a 0.1% allowance for the spread.
   */
  const TRADING_POWER_SPREAD = 0.001;
  const tradingPower = ({ free, upnl, leverage, takerFee }) =>
    leverage > 0 && free > 0
      ? (Math.max(0, free + Math.min(0, upnl || 0)) * leverage) /
        (1 + leverage * (takerFee || 0)) /
        (1 + TRADING_POWER_SPREAD)
      : 0;
  /** The largest size that power buys at `price` (Vest prices margin at the margin mark price), floored to the step. */
  const maxQtyFor = (power, price, step) => (power > 0 && price > 0 ? floorStep(power / price, step) : 0);

  /**
   * Where a position of `qty` (the whole position after this order) fails or passes, measured from the price now.
   * `equity` is the account's equity at that price; the opening fee comes straight out of it. Fail: equity reaches the
   * floor (drawdown, or the daily-loss floor when higher). Pass: equity reaches the target (evaluations only).
   */
  function failPassPrices({ side, qty, price, equity, openFee, floor, target }) {
    if (!(qty > 0) || !(price > 0) || !Number.isFinite(equity)) return { fail: null, pass: null };
    const dir = side === 'long' ? 1 : -1,
      e = equity - (openFee || 0);
    const fail = floor > 0 && e > floor ? price - (dir * (e - floor)) / qty : null;
    const pass = target > 0 && target > e ? price + (dir * (target - e)) / qty : null;
    return { fail: fail > 0 ? fail : null, pass: pass > 0 ? pass : null };
  }
  /**
   * The allowed range, so the panel can say where the stop may go and how much can be risked. Size = risk ÷ stop, the
   * size is capped by Vest's max, and a stop-out (plus both fees) must stay under the room left to the floor.
   *   minStopFor:    the smallest stop (whole ticks) at which `risk` fits in the max size
   *   maxRiskAt:     the most that can be risked (whole dollars) at this stop with the max size
   *   maxRiskForRoom: the most that can be risked at this stop before a stop-out, fees included, reaches the floor
   *   maxStopForRoom: the widest stop (whole ticks) for `qty` before a stop-out, fees included, reaches the floor
   */
  const minStopFor = (risk, maxQty, tick) =>
    risk > 0 && maxQty > 0 ? +(Math.ceil(risk / maxQty / tick - 1e-9) * tick).toFixed(decimalsOf(tick)) : null;
  const maxRiskAt = (maxQty, stopPts) => (maxQty > 0 && stopPts > 0 ? Math.floor(maxQty * stopPts + 1e-9) : null);
  const maxRiskForRoom = ({ room, price, stopPts, takerFee }) =>
    room > 0 && price > 0 && stopPts > 0
      ? Math.max(0, Math.floor(room / (1 + ((2 * price - stopPts) * (takerFee || 0)) / stopPts) - 0.01))
      : null;
  const maxStopForRoom = ({ room, qty, price, takerFee, tick }) => {
    if (!(room > 0) || !(qty > 0) || !(price > 0)) return null;
    const f = takerFee || 0,
      pts = (room - 0.01 - 2 * qty * price * f) / (qty * (1 - f));
    return pts > 0 ? +(Math.floor(pts / tick + 1e-9) * tick).toFixed(decimalsOf(tick)) : 0;
  };
  /**
   * The size step for the unit the Trade tab sizes in. Vest sizes NQ, ES and RTY in whole minis or micros as well as
   * units: `micro` is how many units one micro is on this market (a mini is 10). Units keep the market's own step.
   */
  const unitStep = (step, micro, unit) =>
    micro > 0 && unit === 'micro' ? micro : micro > 0 && unit === 'mini' ? micro * 10 : step;
  /** What a stop-out costs from the price now: the move to the stop on the whole position, plus both fees. */
  const stopOutLoss = ({ side, qty, price, stopPrice, openFee, takerFee }) =>
    (side === 'long' ? 1 : -1) * qty * (price - stopPrice) + (openFee || 0) + qty * stopPrice * (takerFee || 0);

  if (window.__VC_TEST__)
    window.__vcMath = {
      roundTick,
      floorStep,
      splitQty,
      planPrices,
      riskQty,
      breakevenPrice,
      breakevenDue,
      tradingPower,
      maxQtyFor,
      failPassPrices,
      stopOutLoss,
      minStopFor,
      maxRiskAt,
      maxRiskForRoom,
      maxStopForRoom,
      unitStep,
    };

  // ───────────────────────── live price (public market data, read-only) ─────────────────────────
  // Vest's public socket streams, per market: `@ticker` (mark and margin mark price, about every 750 ms), `@depth_<tick>`
  // (the order book: best bid and ask on every change) and `@trades` (every trade as it prints). The price the copier uses
  // is Vest's own reference: the book's mid (open P&L, fail prices and targets are all measured on it), else the last
  // trade, else the mark. Stops trigger on the mid (Vest, 2026-10-10; before: the bid or ask); breakeven is checked against
  // the bid (longs) or ask (shorts), a little stricter than the mid, so Vest never refuses the stop. This is
  // the copier's own read-only connection, open only while something needs a price (the Trade tab, breakeven, an open
  // position's P&L). A socket that goes quiet is closed and reopened, with backoff.
  const WS_URL = 'wss://ws.hz.vestmarkets.com/ws?version=1.0';
  const WS_CONNECTING = 0,
    WS_OPEN = 1;
  const PRICE_STALE_MS = 5000,
    WS_PING_MS = 25000,
    WS_RETRY_MIN_MS = 1000,
    WS_RETRY_MAX_MS = 30000;
  const _wsSyms = new Set();
  let _ws = null,
    _wsPing = null,
    _wsDog = null,
    _wsRetryTimer = null,
    _wsRetry = WS_RETRY_MIN_MS,
    _wsLastMsg = 0,
    _feedWarned = false;
  const recentAt = (at) => at > 0 && Date.now() - at < PRICE_STALE_MS;
  const priceOf = (sym) => {
    const p = S.price[sym];
    if (!p) return null;
    if (recentAt(p.bookAt)) return (p.bid + p.ask) / 2;
    if (recentAt(p.lastAt)) return p.last;
    return recentAt(p.at) ? p.px : null;
  };
  // The side of the book a breakeven stop is checked against: the best bid for a long, the best ask for a short (null
  // without a live book). Vest triggers stops on the mid since 2026-10-10; the bid / ask is the stricter, safe check.
  const stopRefOf = (sym, side) => {
    const p = S.price[sym];
    return p && recentAt(p.bookAt) ? (side === 'long' ? p.bid : p.ask) : null;
  };
  // The price Vest values a new market order's margin at (its ticker's margin mark price), else the mark price.
  const marginPriceOf = (sym) => {
    const px = priceOf(sym);
    return px && S.price[sym].mpx > 0 && recentAt(S.price[sym].at) ? S.price[sym].mpx : px;
  };
  function watchPrice(sym) {
    if (_wsSyms.has(sym)) return;
    _wsSyms.add(sym);
    connectPrices();
    fetchPriceOnce(sym);
  }
  // Stop streaming symbols nothing needs any more, and close the socket when none are left.
  function unwatchUnused() {
    const need = new Set(Object.values(S.plans || {}).map((p) => p.symbol));
    if (S.tradeOpen) need.add(S.trade.symbol);
    for (const sym of heldSymbols()) need.add(sym); // live P&L of every open position
    for (const sym of [..._wsSyms]) if (!need.has(sym)) _wsSyms.delete(sym);
    if (_wsSyms.size) return;
    clearTimeout(_wsRetryTimer);
    _wsRetryTimer = null;
    stopWsTimers();
    const ws = _ws;
    _ws = null;
    if (ws)
      try {
        ws.close();
      } catch {
        /* best effort: nothing to do if this fails */
      }
  }
  function stopWsTimers() {
    clearInterval(_wsPing);
    clearInterval(_wsDog);
    _wsPing = _wsDog = null;
  }
  function scheduleReconnect() {
    if (!_wsSyms.size || _wsRetryTimer) return;
    _wsRetryTimer = setTimeout(() => {
      _wsRetryTimer = null;
      connectPrices();
    }, _wsRetry);
    _wsRetry = Math.min(_wsRetry * 2, WS_RETRY_MAX_MS);
  }
  function connectPrices() {
    if (!_wsSyms.size || _wsRetryTimer) return;
    if (_ws && _ws.readyState === WS_OPEN) return subscribePrices();
    if (_ws && _ws.readyState === WS_CONNECTING) return;
    let ws;
    try {
      ws = _ws = new WebSocket(WS_URL);
    } catch {
      return scheduleReconnect();
    }
    ws.onopen = () => {
      if (ws !== _ws) return;
      _wsLastMsg = Date.now();
      subscribePrices();
      stopWsTimers();
      _wsPing = setInterval(() => {
        try {
          ws.send(JSON.stringify({ method: 'PING', params: [], id: Date.now() }));
        } catch {
          /* best effort: nothing to do if this fails */
        }
      }, WS_PING_MS);
      _wsDog = setInterval(() => {
        // quiet for 3× the staleness limit: reconnect
        if (Date.now() - _wsLastMsg < 3 * PRICE_STALE_MS) return;
        if (Object.keys(S.plans || {}).length && !_feedWarned) {
          _feedWarned = true;
          logEvent('warn', 'Live price feed lost — breakeven is paused until it reconnects.');
        }
        try {
          ws.close();
        } catch {
          /* best effort: nothing to do if this fails */
        }
        if (ws === _ws) {
          _ws = null;
          stopWsTimers();
          scheduleReconnect();
        }
      }, PRICE_STALE_MS);
    };
    ws.onmessage = (e) => {
      if (ws !== _ws) return;
      _wsLastMsg = Date.now();
      _wsRetry = WS_RETRY_MIN_MS; // the backoff resets only once the feed actually delivers
      const m = parseJson(e.data, null);
      if (!m || typeof m.channel !== 'string' || !m.data) return;
      const [sym, kind = ''] = m.channel.split('@');
      if (kind === 'ticker') {
        const px = parseFloat(m.data.markPrice);
        if (!(px > 0)) return;
        if (_feedWarned) {
          _feedWarned = false;
          logEvent('info', 'Live price feed back.');
        }
        const p = (S.price[m.data.symbol || sym] = S.price[m.data.symbol || sym] || {});
        const mpx = parseFloat(m.data.marginMarkPrice);
        Object.assign(p, { px, mpx: mpx > 0 ? mpx : null, at: Date.now() });
        onPrice(m.data.symbol || sym);
      } else if (kind.startsWith('depth')) {
        const b = (m.data.bids || [])[0],
          a = (m.data.asks || [])[0];
        const bid = b ? parseFloat(b[0]) : NaN,
          ask = a ? parseFloat(a[0]) : NaN;
        if (!(bid > 0 && ask >= bid)) return; // a one-sided or crossed book is no reference
        Object.assign((S.price[sym] = S.price[sym] || {}), { bid, ask, bookAt: Date.now() });
        onPrice(sym);
      } else if (kind === 'trades') {
        const list = Array.isArray(m.data) ? m.data : [m.data];
        const t = list.reduce((x, y) => (y && (!x || +y.time >= +x.time) ? y : x), null);
        const px = t ? parseFloat(t.price) : NaN;
        if (!(px > 0)) return;
        Object.assign((S.price[sym] = S.price[sym] || {}), { last: px, lastAt: Date.now() });
        onPrice(sym);
      }
    };
    ws.onclose = () => {
      if (ws !== _ws) return;
      _ws = null;
      stopWsTimers();
      scheduleReconnect();
    };
  }
  function subscribePrices() {
    try {
      const params = [..._wsSyms].flatMap((s) => [`${s}@ticker`, `${s}@depth_${depthTickOf(s)}`, `${s}@trades`]);
      _ws.send(JSON.stringify({ method: 'SUBSCRIBE', params, id: Date.now() }));
    } catch {
      /* best effort: nothing to do if this fails */
    }
  }
  async function fetchPriceOnce(sym) {
    // REST fallback so the tab has a price immediately
    try {
      const r = await (await _fetch(`${API}/v3/ticker/latest?symbols=${encodeURIComponent(sym)}`)).json();
      const t = (r.tickers || []).find((x) => x.symbol === sym);
      const px = t ? parseFloat(t.markPrice) : NaN,
        mpx = t ? parseFloat(t.marginMarkPrice) : NaN;
      if (px > 0 && !priceOf(sym)) {
        Object.assign((S.price[sym] = S.price[sym] || {}), { px, mpx: mpx > 0 ? mpx : null, at: Date.now() });
        onPrice(sym);
      }
    } catch {
      /* best effort: nothing to do if this fails */
    }
  }
  // Tick, size step and margin ratios from exchangeInfo. A market's `capitalInitMarginRatio` that is absent means "not
  // listed, use the funded ratio"; present but null means "no capital-account ratio". Vest's leverage rule depends on
  // that difference, so `undefined` is kept rather than normalised to null (see maxLeverageFor).
  // Every market's rules, loaded once at startup (one public call). The copier needs each market's size step: scaled
  // follower sizes (cap-to-fit, proportional reduces/adds, sized legs) are rounded to it, and 16 of Vest's markets trade
  // in coarser sizes than NQ (whole units, or 2–3 decimals).
  async function loadAllSymbolRules() {
    try {
      const r = await (await _fetch(`${API}/v3/exchangeInfo`)).json();
      (r.symbols || []).forEach(applySymbolRules);
      diag('market_rules', { outcome: 'loaded', markets: Object.keys(SYMBOLS).length });
    } catch (e) {
      diag('market_rules', { outcome: 'error', error: e.message }); // sizes fall back to NQ's step until a reload
    }
  }
  async function loadSymbolRules(sym) {
    try {
      const r = await (await _fetch(`${API}/v3/exchangeInfo?symbols=${encodeURIComponent(sym)}`)).json();
      const x = (r.symbols || []).find((s) => s.symbol === sym);
      if (x) applySymbolRules(x);
    } catch {
      /* best effort: nothing to do if this fails */
    }
  }
  function applySymbolRules(x) {
    try {
      const sym = x && x.symbol;
      if (!sym) return;
      const tick = parseFloat(x.minTickSize || x.defaultTickSize),
        step = Math.pow(10, -+x.sizeDecimals);
      if (!(tick > 0 && step > 0)) return;
      const ratio = (v) => (v == null || v === '' ? null : parseFloat(v));
      const margin = {
        initMarginRatio: ratio(x.initMarginRatio),
        capitalInitMarginRatio: x.capitalInitMarginRatio === undefined ? undefined : ratio(x.capitalInitMarginRatio),
        fundedInitMarginRatio: ratio(x.fundedInitMarginRatio),
        capitalPlans: (x.capitalPlans || []).map((c) => ({
          accountType: c.accountType,
          planId: c.planId,
          initMarginRatio: ratio(c.initMarginRatio),
        })),
      };
      const label = (x.displaySymbol || sym).replace(/-PERP$/, '');
      // pointValue: Vest's perps are linear (notional = price × quantity), so one point is $1 per contract
      SYMBOLS[sym] = {
        ...(SYMBOLS[sym] || {}),
        depthTick: Array.isArray(x.tickSizes) && x.tickSizes.length ? String(x.tickSizes[0]) : String(x.minTickSize),
        tick,
        step: +step.toFixed(+x.sizeDecimals),
        label,
        pointValue: 1,
        takerFee: parseFloat(x.takerFee) || 0, // fraction of notional per fill (NQ 0.000025)
        margin,
      };
    } catch {
      /* best effort: nothing to do if this fails */
    }
  }
  // The unit the Trade tab sizes in on this market: the trader's pick, else Vest's own order-form choice (its
  // localStorage "vest-trade" sizeUnit: USD, token, mini or micro), else units. Only NQ, ES and RTY have minis and micros.
  function vestSizeUnit() {
    try {
      const v = JSON.parse(localStorage.getItem('vest-trade') || 'null');
      const u = v && v.state && v.state.sizeUnit;
      return u === 'mini' || u === 'micro' ? u : 'units';
    } catch {
      return 'units';
    }
  }
  const tradeUnit = (sym = S.trade.symbol) =>
    MICRO_UNITS[sym] ? (sym === S.trade.symbol && S.trade.unit) || vestSizeUnit() : 'units';
  const unitSize = (sym = S.trade.symbol) => unitStep((SYMBOLS[sym] || {}).step, MICRO_UNITS[sym], tradeUnit(sym));
  // A size in the chosen unit: "3 micros", "1 mini", or the units as they are ("2.5").
  function fmtUnits(q, sym = S.trade.symbol, words = true) {
    const u = tradeUnit(sym);
    if (u === 'units') return fmtQty(q, sym);
    const n = q / unitSize(sym),
      whole = Math.abs(n - Math.round(n)) < 1e-6;
    const txt = whole ? String(Math.round(n)) : '≈' + +n.toFixed(2);
    return words ? `${txt} ${u}${whole && Math.round(n) === 1 ? '' : 's'}` : txt;
  }
  // Following Vest's own micros / minis choice with a size saved in units smaller than one of them: one whole one (as
  // picking Micros or Minis here does), so the tab never opens at a size it can't send. When the tab opens and when the
  // market changes, never while typing.
  function fitQtyToUnit() {
    if (S.trade.sizeMode === 'qty' && !S.trade.unit && tradeUnit() !== 'units' && +S.trade.qty < unitSize())
      S.trade.qty = unitSize();
  }
  const symLabel = (sym) => (SYMBOLS[sym] && SYMBOLS[sym].label) || String(sym).replace(/-USD-PERP$|-PERP$/, '');

  // ── The Trade tab trades the market Vest is showing: the page address is /trade/<display name> ("ES-PERP"), which Vest
  // also keeps as "last-market". Display names map to symbols (ES-PERP → SPX-USD-PERP) through Vest's exchange info,
  // read once (it also loads every market's tick, size step, fees and margin). Each market keeps its own size, stop and
  // targets: points mean different money on ES and NQ.
  const MARKETS_KEY = 'vc-trade-markets';
  let _displayMap = null,
    _displayMapAt = 0;
  async function loadDisplayMap() {
    if (_displayMap || Date.now() - _displayMapAt < 30000) return _displayMap;
    _displayMapAt = Date.now();
    try {
      const r = await (await _fetch(`${API}/v3/exchangeInfo`)).json();
      const m = {};
      for (const x of r.symbols || [])
        if (x && x.symbol) {
          m[String(x.displaySymbol || x.symbol).toUpperCase()] = x.symbol;
          m[x.symbol.toUpperCase()] = x.symbol;
          applySymbolRules(x);
        }
      if (Object.keys(m).length) _displayMap = m;
    } catch {
      /* best effort: nothing to do if this fails */
    }
    return _displayMap;
  }
  function vestMarketName() {
    const m = location.pathname.match(/^\/trade\/([^/?#]+)/);
    if (m) return decodeURIComponent(m[1]).toUpperCase();
    try {
      const l = localStorage.getItem('last-market');
      return l ? l.toUpperCase() : null;
    } catch {
      return null;
    }
  }
  let _following = false;
  async function followVestMarket() {
    if (_following || !S.tradeOpen) return;
    _following = true;
    try {
      const name = vestMarketName();
      const map = name && (await loadDisplayMap());
      const sym = map && map[name];
      if (sym && sym !== S.trade.symbol && SYMBOLS[sym] && !S.placing && !S.adjusting) switchMarket(sym);
    } finally {
      _following = false;
    }
  }
  setInterval(followVestMarket, 1000);
  // A market's saved settings, keeping only well-formed values (storage can hold anything).
  function cleanMarket(m) {
    if (!m || typeof m !== 'object') return null;
    const out = {},
      ok = (v) => typeof v === 'number' && Number.isFinite(v) && v >= 0;
    for (const k of ['qty', 'risk', 'stopPts', 'beTrigger', 'beOffset']) if (ok(m[k])) out[k] = m[k];
    if (['qty', 'risk', 'max'].includes(m.sizeMode)) out.sizeMode = m.sizeMode;
    if (['even', 'start', 'end'].includes(m.scale)) out.scale = m.scale;
    if (['units', 'micro', 'mini'].includes(m.unit)) out.unit = m.unit;
    if (Array.isArray(m.targets) && m.targets.length && m.targets.every((x) => ok(+x) && +x > 0))
      out.targets = m.targets.map(Number);
    return out;
  }
  function switchMarket(sym) {
    const prev = S.trade.symbol,
      all = store.get(MARKETS_KEY, {}) || {};
    const t = S.trade;
    all[prev] = {
      sizeMode: t.sizeMode,
      qty: t.qty,
      risk: t.risk,
      stopPts: t.stopPts,
      targets: [...t.targets],
      scale: t.scale,
      beTrigger: t.beTrigger,
      beOffset: t.beOffset,
      unit: t.unit,
    };
    const saved = cleanMarket(all[sym]);
    t.unit = null; // a market without a saved unit follows Vest's own choice
    stopPick(true);
    S.addPick = null;
    t.symbol = sym;
    if (saved) Object.assign(t, saved);
    store.set(MARKETS_KEY, all);
    saveTrade();
    logEvent(
      saved ? 'info' : 'warn',
      `Trade tab: now ${symLabel(sym)}, the market Vest is showing.${saved ? '' : ` Its stop and targets are in ${symLabel(sym)} points, carried over from ${symLabel(prev)}: check them before trading.`}`,
    );
    diag('trade_panel', { outcome: 'market', from: prev, to: sym, saved: !!saved });
    const body = _root && _root.querySelector('.body');
    if (body && body.dataset.view === 'trade') {
      body.dataset.view = ''; // rebuild: the inputs and the number of targets may differ
      renderTrade(body);
    }
    unwatchUnused();
  }
  // The book's price grouping a depth subscription names (Vest's first tick size for the market, e.g. "0.25").
  const depthTickOf = (sym) => (SYMBOLS[sym] && (SYMBOLS[sym].depthTick || String(SYMBOLS[sym].tick))) || '0.25';
  function onPrice(sym) {
    const px = priceOf(sym);
    if (!(px > 0)) return;
    try {
      checkPlans(sym, px);
    } catch (e) {
      diag('breakeven', { outcome: 'error', error: e.message });
    }
    try {
      tickEquity(sym);
    } catch {
      /* best effort: nothing to do if this fails */
    }
    drawTradeSoon();
  }
  // The book and trades can move many times a second: the Trade tab redraws at most every TRADE_DRAW_MS.
  let _tradeDrawAt = 0,
    _tradeDrawTimer = null;
  function drawTradeSoon() {
    if (!S.tradeOpen || _tradeDrawTimer) return;
    const wait = TRADE_DRAW_MS - (Date.now() - _tradeDrawAt);
    const draw = () => {
      _tradeDrawTimer = null;
      _tradeDrawAt = Date.now();
      updateTrade();
    };
    if (wait <= 0) draw();
    else _tradeDrawTimer = setTimeout(draw, wait);
  }

  // ───────────────────────── arming ─────────────────────────
  // An account's open positions and resting orders. Throws if Vest can't be read: an unreadable account is never
  // assumed to be flat.
  async function openState(id) {
    const { token } = await mintAccountToken(id);
    const [pos, ord] = await Promise.all([
      api('/v3/positions/opened', token),
      api('/v3/positions/opened-orders', token),
    ]);
    const positions = ((pos && pos.positions) || []).map((p) => ({
      positionId: posIdOf(p),
      symbol: p.symbol,
      side: p.side,
      qty: String(p.quantity),
      legs: posLegs(p),
    }));
    return { positions, orders: (ord && ord.orders) || [] };
  }

  // Arm when flat, or adopt an open trade: if the master already holds positions, link each follower's matching position
  // (same symbol and side) so exits and stop/target changes copy to it. Never opens anything for a flat follower; it
  // joins from the next trade. Returns { adopted, notes, openSymbols } or { error }.
  async function planArm(master, followers) {
    const sel = [master, ...followers];
    const state = {};
    try {
      await Promise.all(
        sel.map(async (id) => {
          state[id] = await openState(id);
        }),
      );
    } catch (e) {
      return { error: `couldn't read open positions (${e.message}) — try again` };
    }

    const resting = sel.filter((id) => state[id].orders.length);
    if (resting.length)
      return { error: 'resting orders on ' + resting.map(accLabel).join(', ') + ' — cancel them first' };

    const mPos = state[master].positions;
    const key = (p) => p.symbol + '|' + p.side;
    if (new Set(mPos.map(key)).size !== mPos.length)
      return { error: "the master has two positions on the same symbol and side — can't tell them apart" };

    const adopted = {},
      notes = [];
    for (const p of mPos)
      adopted[p.positionId] = {
        master,
        side: p.side,
        symbol: p.symbol,
        masterOrderId: null,
        qty: p.qty,
        legs: p.legs,
        adopted: true,
        followers: {},
      };
    for (const f of followers) {
      const fPos = state[f].positions;
      if (new Set(fPos.map(key)).size !== fPos.length)
        return { error: `${accLabel(f)} has two positions on the same symbol and side` };
      for (const fp of fPos) {
        const m = mPos.find((p) => key(p) === key(fp));
        if (!m) {
          const opp = mPos.find((p) => p.symbol === fp.symbol);
          return {
            error: opp
              ? `${accLabel(f)} is ${fp.side} ${fp.symbol} but the master is ${opp.side} — opposite direction`
              : `${accLabel(f)} holds ${fp.side} ${fp.symbol} but the master doesn't — close it first`,
          };
        }
        adopted[m.positionId].followers[f] = { positionId: fp.positionId, orderId: null, legs: fp.legs, qty: fp.qty };
        const unmatched = m.legs.filter((l) => !matchLeg(m.legs, fp.legs, l.id));
        if (unmatched.length) {
          const which = unmatched.map((l) => `${l.kind === 'sl' ? 'stop' : 'target'} at ${l.price}`).join(', ');
          notes.push(
            `${accLabel(f)} has no matching ${which} — changes to ${unmatched.length > 1 ? 'those' : 'that one'} won't copy to it.`,
          );
        }
      }
      if (mPos.length && !fPos.length) notes.push(`${accLabel(f)} is flat — it joins from the next trade.`);
    }
    return {
      adopted,
      notes: [...new Set(notes)],
      openSymbols: new Set(sel.flatMap((id) => state[id].positions.map((p) => p.symbol))),
    };
  }

  // Set each follower's leverage to the master's, per symbol the master has configured. Leverage is left alone under an
  // open position. Returns the per-follower record for diagnostics.
  async function syncLeverage(master, followers, openSymbols) {
    const levs = await fetchLeverages();
    if (!levs) {
      logEvent('warn', "Couldn't read leverage — each follower's leverage will be set on its first copied trade.");
      return [];
    }
    const mlevs = levs[master] || {},
      syms = Object.keys(mlevs),
      out = [];
    if (!syms.length) {
      logEvent('info', 'The master uses default leverage on every market — followers will be matched per trade.');
      return out;
    }
    const show = (k) => (k === 'NaN' ? 'default' : k + 'x');
    for (const f of followers) {
      for (const sym of syms) {
        const want = levKey(mlevs[sym]),
          had = levKey(levFor(levs, f, sym)),
          cacheKey = f + '|' + sym;
        const rec = { ...who(f), symbol: sym, want, had };
        if (had === want) {
          S.levCache[cacheKey] = want;
          out.push({ ...rec, action: 'already-set' });
        } else if (openSymbols.has(sym)) {
          logEvent(
            'info',
            `Left ${accLabel(f)} ${symLabel(sym)} leverage at ${show(had)} (position open) — stop and start copying when flat to sync.`,
          );
          out.push({ ...rec, action: 'skipped-open-position' });
        } else {
          try {
            await setFollowerLeverage(f, sym, want);
            S.levCache[cacheKey] = want;
            out.push({ ...rec, action: 'set' });
          } catch (e) {
            logEvent('warn', `Couldn't set ${accLabel(f)} ${symLabel(sym)} leverage: ${e.message}`);
            out.push({ ...rec, action: 'error', error: e.message });
          }
        }
      }
    }
    const failed = out.filter((r) => r.action === 'error').length;
    const summary = syms.map((s) => show(levKey(mlevs[s])) + ' ' + symLabel(s)).join(', ');
    logEvent(
      failed ? 'warn' : 'info',
      failed ? `Leverage sync: ${failed} failed (target ${summary}).` : `Leverage synced (${summary}).`,
    );
    return out;
  }

  // Bumped by disarm and Flatten All, so an arm still in flight is cancelled: it would switch the copier back on after a
  // disarm, or adopt positions that Flatten All is closing.
  let _armEpoch = 0;
  // Other Vest tabs running the copier: each says when it arms or disarms, and answers a new tab's hello. A tab that
  // closes says bye; one that crashes is forgotten after TAB_STALE_MS without news.
  const TAB_ID = Math.random().toString(36).slice(2),
    TAB_STALE_MS = 5 * 60 * 1000,
    _peers = {};
  let _tabs = null;
  try {
    _tabs = new BroadcastChannel('vc-tabs');
    _tabs.onmessage = (e) => {
      const m = e.data || {};
      if (!m.id || m.id === TAB_ID) return;
      if (m.type === 'hello') tabSay('state');
      if (m.type === 'bye') return delete _peers[m.id];
      if (!_peers[m.id]) logEvent('warn', 'The copier is open in another Vest tab too. Copy from one tab only.');
      _peers[m.id] = { armed: !!m.armed, at: Date.now() };
    };
    window.addEventListener('pagehide', () => tabSay('bye'));
  } catch {
    _tabs = null; // no BroadcastChannel: nothing to coordinate
  }
  function tabSay(type) {
    try {
      if (_tabs) _tabs.postMessage({ type, id: TAB_ID, armed: !!S.armed });
    } catch {
      /* best effort: nothing to do if this fails */
    }
  }
  const armedElsewhere = () => Object.values(_peers).some((p) => p.armed && Date.now() - p.at < TAB_STALE_MS);
  // Remembered for this tab only: a reload while armed comes back disarmed, and says so.
  const WAS_ARMED_KEY = 'vc-was-armed';
  function noteArmed(on) {
    tabSay('state');
    try {
      on ? sessionStorage.setItem(WAS_ARMED_KEY, '1') : sessionStorage.removeItem(WAS_ARMED_KEY);
    } catch {
      /* best effort: nothing to do if this fails */
    }
  }
  function checkWasArmed() {
    tabSay('hello');
    try {
      if (sessionStorage.getItem(WAS_ARMED_KEY) !== '1') return;
      sessionStorage.removeItem(WAS_ARMED_KEY);
      logEvent('warn', 'The page reloaded while copying, so copying stopped. Press Start copying to continue.');
    } catch {
      /* best effort: nothing to do if this fails */
    }
  }
  async function arm() {
    if (S.arming) return;
    if (S.flattening) return toast('Wait for Flatten All to finish.');
    if (!S.ack) {
      S.ackThenArm = true; // arm right after the terms are accepted
      S.rulesOpen = true;
      render();
      return;
    } // the one-time agreement comes first
    if (!S.master) return toast('Pick a master account first.');
    if (!S.followers.size) return toast('Pick at least one follower.');
    if (S.placing || S.adjusting || claimBusy()) return toast('Wait for the current order or claim to finish.');
    if (armedElsewhere())
      return toast('The copier is copying in another Vest tab. Stop it there first: two would copy every trade twice.');
    if (healthState().changed) {
      // Vest shipped an update the site check hasn't passed (it runs by itself)
      logEvent(
        'warn',
        siteGate() === 'failed'
          ? 'Not started — Vest changed something the copier relies on. Copying is off until a copier update.'
          : 'Not started — Vest updated its site and the check is still running.',
      );
      return render();
    }
    const epoch = ++_armEpoch;
    const master = S.master,
      followers = [...S.followers];
    const unchanged = () =>
      S.master === master && S.followers.size === followers.length && followers.every((f) => S.followers.has(f));
    S.arming = true;
    render();
    try {
      logEvent('info', 'Checking open positions…');
      const plan = await planArm(master, followers);
      if (plan.error) {
        logEvent('warn', 'Not started — ' + plan.error + '.');
        diag('arm', { outcome: 'blocked', reason: plan.error });
        return;
      }
      logEvent('info', 'Syncing follower leverage to the master…');
      const levSync = await syncLeverage(master, followers, plan.openSymbols);
      if (S.capFit) {
        logEvent('info', 'Refreshing equity for cap-to-fit…');
        await refreshBalances();
      }
      if (epoch !== _armEpoch) {
        logEvent('warn', 'Not started — stopped or flattened while starting.');
        return;
      }
      if (!unchanged()) {
        logEvent('warn', 'Not started — the accounts changed while starting. Press Start copying again.');
        return;
      }

      S.posMap = plan.adopted; // {} when flat; adopted trades otherwise
      S.armed = true;
      noteArmed(true);
      dropClaimReview();
      const trades = Object.values(plan.adopted);
      logEvent(
        'ok',
        `Started copying ${accLabel(master)} to ${followers.map(accLabel).join(', ')}${S.capFit ? ' (cap-to-fit)' : ''}.`,
      );
      for (const t of trades) {
        const inIt = Object.keys(t.followers).map(accLabel);
        const whoText = inIt.length ? ' + ' + inIt.join(', ') : ' (no followers in it)';
        logEvent(
          'ok',
          `Adopted open trade: ${t.side} ${t.qty} ${t.symbol} — master ${accLabel(master)}${whoText}. Exits and stop/target changes will copy.`,
        );
      }
      plan.notes.forEach((n) => logEvent('info', n));
      const acct = (id) => ({ id, label: accLabel(id), equity: (S.byId[id] || {}).equity });
      const adopted = trades.map((t) => ({
        symbol: t.symbol,
        side: t.side,
        masterQty: t.qty,
        legs: t.legs,
        followers: Object.entries(t.followers).map(([f, v]) => ({
          label: accLabel(f),
          qty: v.qty,
          positionId: v.positionId,
          legs: v.legs,
        })),
      }));
      diag('arm', {
        outcome: 'armed',
        capFit: S.capFit,
        fast: S.fast,
        autoFlatten: S.autoFlatten,
        master: acct(master),
        followers: followers.map((f) => ({ ...acct(f), group: (S.byId[f] || {}).groupKey })),
        adopted,
        notes: plan.notes,
        leverageSync: levSync,
      });
    } finally {
      S.arming = false;
      render();
    }
  }
  function disarm() {
    _armEpoch++;
    const open = (S.orphan && S.orphan.list.length) || 0;
    S.armed = false;
    S.posMap = {};
    S.orphan = null;
    noteArmed(false);
    logEvent('info', 'Stopped copying.');
    if (open)
      logEvent(
        'warn',
        `${open} follower position${open > 1 ? 's' : ''} without the master ${open > 1 ? 'are' : 'is'} still open — close ${open > 1 ? 'them' : 'it'} on Vest or with Flatten All.`,
      );
    diag('disarm', {});
    render();
  }

  // ───────────────────────── selection ─────────────────────────
  const LOCKED_MSG = 'Stop copying first to change the master, followers or Cap-to-fit.';
  function setMaster(id) {
    if (S.arming) return toast('Wait for copying to start.');
    if (S.armed) return toast(LOCKED_MSG);
    S.master = S.master === id ? null : id;
    S.followers.delete(id);
    // the same-size rule applies only in strict 1:1; with cap-to-fit, followers may be any size (scaled by equity)
    if (S.master && !S.capFit) {
      const g = S.byId[S.master].groupKey;
      [...S.followers].forEach((f) => {
        if (S.byId[f].groupKey !== g) S.followers.delete(f);
      });
    }
    S.armed = false;
    render();
  }
  function toggleFollower(id) {
    if (S.arming) return toast('Wait for copying to start.');
    if (S.armed) return toast(LOCKED_MSG);
    if (!S.master || !S.byId[S.master] || !S.byId[id]) return toast('Pick a master first.');
    if (!S.capFit && S.byId[id].groupKey !== S.byId[S.master].groupKey) {
      return toast('A different-size follower needs Cap-to-fit (Settings). Strict 1:1 needs the same size and type.');
    }
    if (S.followers.has(id)) S.followers.delete(id);
    else S.followers.add(id);
    S.armed = false;
    render();
  }

  // ───────────────────────── settings and activity log ─────────────────────────
  // Everything is kept in this site's localStorage, wrapped in try/catch: a private window or full storage just means
  // nothing is remembered.
  const LOG_KEY = 'vc-activity-log',
    ACK_KEY = 'vc-ack',
    SIZE_KEY = 'vc-size',
    OPTS_KEY = 'vc-opts',
    TRADE_KEY = 'vc-trade';
  const store = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem(key);
        return v == null ? fallback : JSON.parse(v);
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch {
        return false;
      }
    },
  };
  function persistLog() {
    store.set(
      LOG_KEY,
      S.log.map((e) => ({ t: e.t.toISOString(), level: e.level, msg: e.msg })),
    );
  }
  function loadLog() {
    const l = store.get(LOG_KEY, []);
    S.log = Array.isArray(l)
      ? l
          .filter((e) => e && typeof e.msg === 'string' && !isNaN(new Date(e.t)))
          .map((e) => ({ t: new Date(e.t), level: String(e.level || 'info'), msg: e.msg }))
      : [];
  }
  // The risk acknowledgement is versioned: raising TERMS_VERSION asks everyone to accept the new terms once.
  const TERMS_VERSION = 2;
  function loadAck() {
    const a = store.get(ACK_KEY, null);
    S.ack = !!(a && typeof a === 'object' && a.v >= TERMS_VERSION);
  }
  function saveAck() {
    store.set(ACK_KEY, { v: TERMS_VERSION, at: new Date().toISOString() });
  }
  function loadOpts() {
    const o = store.get(OPTS_KEY, {}) || {};
    S.fast = !!o.fast;
    S.autoFlatten = !!o.autoFlatten;
    S.capFit = !!o.capFit;
    S.checkUpdates = o.checkUpdates !== false; // on by default
    S.hideMarks = o.hideMarks !== false; // on by default: Vest's buy/sell marks come back on every load otherwise
    S.tradeOnly = o.tradeOnly !== false; // the panel shows on Vest's Trade page only (it runs on every page)
    S.hideSessions = o.hideSessions !== false; // Vest's pre-market / after-hours / overnight bands on the chart
    S.theme = o.theme !== false; // STRATUH colours for Vest's own page and chart (on by default; introduced once)
    S.themeDown = o.themeDown === 'red' ? 'red' : 'mono'; // shorts and losses on Vest's page: grey (DeepCharts) or red
  }
  function saveOpts() {
    const o = {
      fast: S.fast,
      autoFlatten: S.autoFlatten,
      capFit: S.capFit,
      checkUpdates: S.checkUpdates,
      hideMarks: S.hideMarks,
      hideSessions: S.hideSessions,
      tradeOnly: S.tradeOnly,
      theme: S.theme,
      themeDown: S.themeDown,
    };
    diag('settings', o);
    store.set(OPTS_KEY, o);
  }
  function loadTrade() {
    const t = store.get(TRADE_KEY, null);
    if (!t || typeof t !== 'object') return;
    // only well-formed values come back (storage can hold anything); "anchor" (removed in v0.31.0) is dropped this way too
    Object.assign(S.trade, cleanMarket(t), {
      symbol: SYMBOLS[t.symbol] ? t.symbol : S.trade.symbol, // another market comes back via followVestMarket
      ...(['off', 'tp1', 'points'].includes(t.beMode) ? { beMode: t.beMode } : {}),
      ...(['market', 'limit'].includes(t.orderType) ? { orderType: t.orderType } : {}),
    });
  }
  function saveTrade() {
    store.set(TRADE_KEY, S.trade);
  }
  function toggleFast() {
    S.fast = !S.fast;
    saveOpts();
    logEvent('info', S.fast ? 'Fast mode on — follower entries fire the instant the master sends.' : 'Fast mode off.');
    render();
  }
  function toggleAutoFlatten() {
    S.autoFlatten = !S.autoFlatten;
    saveOpts();
    logEvent('info', S.autoFlatten ? 'Auto-flatten on.' : 'Auto-flatten off (you will be asked).');
    render();
  }
  function toggleCapFit() {
    if (S.armed || S.arming) return toast(LOCKED_MSG);
    S.capFit = !S.capFit;
    saveOpts();
    if (!S.capFit && S.master) {
      // strict 1:1 can't hold different-size followers
      const g = S.byId[S.master].groupKey;
      let pruned = 0;
      [...S.followers].forEach((f) => {
        if (S.byId[f].groupKey !== g) {
          S.followers.delete(f);
          pruned++;
        }
      });
      if (pruned) {
        S.armed = false;
        logEvent(
          'info',
          `Cap-to-fit off — removed ${pruned} different-size follower(s); strict 1:1 needs the same size.`,
        );
      }
    }
    logEvent(
      'info',
      S.capFit
        ? 'Cap-to-fit on — each follower is sized to its own equity; different-size followers allowed.'
        : 'Cap-to-fit off — strict 1:1 size, same-size followers only.',
    );
    render();
  }
  function logEvent(level, msg) {
    S.log.unshift({ t: new Date(), level, msg });
    S.log = S.log.slice(0, LOG_MAX);
    LOG(msg);
    persistLog();
    renderLog();
  }
  function clearLog() {
    S.log = [];
    persistLog();
    renderLog();
  }
  const stamp = () => new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-');
  function saveFile(name, mime, text) {
    const url = URL.createObjectURL(new Blob([text], { type: mime }));
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function downloadLog() {
    const rows = [...S.log].reverse();
    const csv =
      `time,level,message\n${new Date().toISOString()},info,"Exported from STRATUH Copier v${VERSION} (Vest build ${fingerprint() || 'unknown'})"\n` +
      rows.map((e) => `${e.t.toISOString()},${e.level},"${String(e.msg).replace(/"/g, '""')}"`).join('\n');
    saveFile(`vest-copier-log-${stamp()}.csv`, 'text/csv', csv);
  }
  let _toast = '';
  function toast(m) {
    _toast = m;
    renderLog();
    setTimeout(() => {
      if (_toast === m) {
        _toast = '';
        renderLog();
      }
    }, 3500);
  }

  // ───────────────────────── diagnostics ─────────────────────────
  // A structured record of every event, kept out of the activity log: intended vs. actual size, the cap-to-fit math,
  // fill prices and slippage, margin used, HTTP error codes, and whether the expected outcome happened. It holds account
  // ids, labels and equity, but no tokens. Exported as JSON from the Diag button for troubleshooting.
  const DIAG_KEY = 'vc-diag';
  let _diagTimer = null;
  const errCode = (e) => {
    const m = String((e && e.message) || e).match(/->\s*(\d{3})/);
    return m ? +m[1] : null;
  };
  function loadDiag() {
    const d = store.get(DIAG_KEY, []);
    S.diag = Array.isArray(d) ? d : [];
  }
  // Kept under a size budget: this page's storage is shared with Vest's own site, which must never run out of room.
  function persistDiag() {
    let json = JSON.stringify(S.diag);
    while (json.length > DIAG_MAX_BYTES && S.diag.length > 10) {
      S.diag.splice(0, Math.ceil(S.diag.length / 10));
      json = JSON.stringify(S.diag);
    }
    try {
      localStorage.setItem(DIAG_KEY, json);
    } catch {
      /* best effort: nothing to do if this fails */
    }
  }
  function persistDiagSoon() {
    if (_diagTimer) return;
    _diagTimer = setTimeout(() => {
      _diagTimer = null;
      persistDiag();
    }, 1200);
  }
  function diag(type, data) {
    const rec = { t: new Date().toISOString(), type, ...data };
    S.diag.push(rec);
    if (S.diag.length > DIAG_MAX) S.diag.splice(0, S.diag.length - DIAG_MAX);
    persistDiagSoon();
    return rec;
  }
  function downloadDiag() {
    persistDiag();
    const payload = {
      exportedAt: new Date().toISOString(),
      version: VERSION,
      build: fingerprint() || null,
      records: S.diag.length,
      diagnostics: S.diag,
    };
    saveFile(`vest-copier-diagnostics-${stamp()}.json`, 'application/json', JSON.stringify(payload, null, 2));
    logEvent('info', `Diagnostics exported (${S.diag.length} records).`);
  }

  // ───────────────────────── health ─────────────────────────
  // A short id for the Vest web app build that is loaded. When it changes, Vest has shipped an update and arming waits
  // for a site check. An unidentifiable build also needs one check per session.
  const fnv = (s) => {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0).toString(16).padStart(8, '0');
  };
  const fingerprint = () => {
    try {
      const b = window.__NEXT_DATA__ && window.__NEXT_DATA__.buildId;
      if (b) return b.slice(0, 10);
    } catch {
      /* best effort: nothing to do if this fails */
    }
    try {
      for (const s of document.scripts) {
        const m = (s.src || '').match(/\/index-([A-Za-z0-9_-]{6,})\.js(?:$|\?)/);
        if (m) return m[1];
      }
    } catch {
      /* best effort: nothing to do if this fails */
    }
    try {
      for (const s of document.scripts) {
        const d = (s.src || '').match(/[?&]dpl=(?:dpl_)?([A-Za-z0-9]{6,})/);
        if (d) return d[1].slice(0, 12);
      }
    } catch {
      /* best effort: nothing to do if this fails */
    }
    try {
      const sameHost = (s) => {
        try {
          const u = new URL(s);
          return u.host === location.host && /\/(index|runtime|main|app|framework|vendor)[-.]/.test(u.pathname);
        } catch {
          return false;
        }
      };
      const a = [...document.scripts]
        .map((s) => s.src)
        .filter(Boolean)
        .filter(sameHost)
        .map((s) => new URL(s).pathname)
        .sort();
      if (a.length) return 'b:' + fnv(a.join('|'));
    } catch {
      /* best effort: nothing to do if this fails */
    }
    return null;
  };
  const BUILD_KEY = 'vc-known-build-v3';
  let _unknownBuildChecked = false;
  // First run on this browser: trust the build that is loaded now.
  function initBuild() {
    const fp = fingerprint();
    try {
      if (fp && !localStorage.getItem(BUILD_KEY)) localStorage.setItem(BUILD_KEY, fp);
    } catch {
      /* best effort: nothing to do if this fails */
    }
  }
  const healthState = () => {
    const fp = fingerprint();
    let last = null;
    try {
      last = localStorage.getItem(BUILD_KEY);
    } catch {
      /* best effort: nothing to do if this fails */
    }
    if (!fp)
      return _unknownBuildChecked
        ? { level: 'amber', text: 'build unknown (checked)', changed: false }
        : { level: 'amber', text: 'Unknown Vest build — checking…', changed: true };
    if (last && last !== fp) return { level: 'amber', text: 'Vest updated — checking…', changed: true };
    return { level: 'green', text: fp, changed: false };
  };

  // ───────────────────────── updates ─────────────────────────
  // On every load (and on Check now), compare this script's version with the one published on GitHub. The page allows
  // the request and GitHub serves it cross-origin; nothing else is sent. A bar under the status line shows the result:
  // "Checking…", then "Update available" with Install (opening the .user.js link makes Tampermonkey show its own update
  // page, where one click installs it — a script can't replace itself), or "Up to date", which fades after a moment.
  const REPO_URL = 'https://github.com/xAmped/Vest-Copier';
  const DISCORD_URL = 'https://discord.gg/Aa69y9KnM3';
  const SCRIPT_URL = 'https://raw.githubusercontent.com/xAmped/Vest-Copier/main/src/vest-copier.user.js';
  // GitHub's raw file server caches `main` for up to 5 minutes after a push. The API names the newest commit (cached
  // about a minute), and a file fetched by commit id is never stale, so check (and install) from that commit.
  // New versions are published as GitHub releases with the script attached. The panel reads the latest release and
  // installs that release's file, which GitHub counts as a download (the only usage number there is: the copier itself
  // reports nothing). If the API is unavailable (60 requests an hour per IP), it falls back to the raw file on `main`.
  const LATEST_RELEASE_API = 'https://api.github.com/repos/xAmped/Vest-Copier/releases/latest';
  const releaseAsset = (tag) => `https://github.com/xAmped/Vest-Copier/releases/download/${tag}/vest-copier.user.js`;
  const UPDATE_KEY = 'vc-update'; // remembers only which version "Later" was clicked for
  const UPDATE_NOTE_MS = 4000; // how long "Up to date" / "Couldn't check" stays up
  // Numeric compare of dotted versions: 1 if a > b, -1 if a < b, 0 if equal.
  const cmpVersion = (a, b) => {
    const pa = String(a).split('.').map(Number),
      pb = String(b).split('.').map(Number);
    for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
      const d = (pa[i] || 0) - (pb[i] || 0);
      if (d) return d > 0 ? 1 : -1;
    }
    return 0;
  };
  // S.update = { state: 'checking' | 'available' | 'current' | 'error' | null, latest, dismissed }
  function loadUpdate() {
    const u = store.get(UPDATE_KEY, {}) || {};
    S.update = { state: null, latest: null, installUrl: null, dismissed: u.dismissed || null };
  }
  const updateAvailable = () => !!(S.update && S.update.latest && cmpVersion(S.update.latest, VERSION) > 0);
  let _updateNoteTimer = null;
  async function checkForUpdate(manual = false) {
    if (!S.checkUpdates && !manual) return;
    clearTimeout(_updateNoteTimer);
    S.update.manual = manual; // "Checking…" and "Up to date" show only for Check now
    S.update.state = 'checking';
    renderUpdate();
    try {
      let latest = null;
      try {
        const rel = await _fetch(LATEST_RELEASE_API, { cache: 'no-store' });
        const j = rel.ok ? await rel.json() : null;
        const asset = j && (j.assets || []).find((a) => a.name === 'vest-copier.user.js');
        if (j && /^v?\d+(\.\d+)*$/.test(j.tag_name || '') && asset) {
          latest = j.tag_name.replace(/^v/, '');
          S.update.installUrl = asset.browser_download_url || releaseAsset(j.tag_name);
        }
      } catch {
        /* best effort: nothing to do if this fails */
      } // API unavailable or rate-limited: fall back to the raw file
      if (!latest) {
        const r = await _fetch(SCRIPT_URL, { cache: 'no-store' });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const m = (await r.text()).match(/^\/\/ @version\s+(\S+)/m);
        if (!m) throw new Error('no version in the published script');
        latest = m[1];
        S.update.installUrl = SCRIPT_URL;
      }
      S.update.latest = latest;
      diag('update_check', { outcome: 'ok', latest, from: S.update.installUrl === SCRIPT_URL ? 'raw' : 'release' });
      S.update.state = updateAvailable() ? 'available' : 'current';
      if (manual && S.update.state === 'available') S.update.dismissed = null; // Check now always shows it
    } catch (e) {
      S.update.state = 'error';
      diag('update_check', { outcome: 'error', error: e.message });
    }
    if (S.update.state !== 'available') {
      _updateNoteTimer = setTimeout(() => {
        S.update.state = null;
        renderUpdate();
      }, UPDATE_NOTE_MS);
    }
    render();
  }
  function dismissUpdate() {
    S.update.dismissed = S.update.latest;
    store.set(UPDATE_KEY, { dismissed: S.update.dismissed });
    renderUpdate();
  }
  function renderUpdate() {
    const bar = _root && _root.querySelector('.update');
    if (!bar || !S.update) return;
    const { state, latest, dismissed, manual } = S.update;
    let html = '';
    if (state === 'checking' && manual) html = '<span class="utext">Checking for updates…</span>';
    else if (state === 'current' && manual) html = `<span class="utext">Up to date · v${VERSION}</span>`;
    else if (state === 'error' && manual)
      html = '<span class="utext">Couldn\'t check for updates. Try Check now again later.</span>';
    else if (state === 'installing')
      html = S.armed
        ? `<span class="utext">After updating in Tampermonkey, reload Vest to run v${esc(latest)}. Reloading stops copying;
            start again afterwards (an open trade is adopted).</span>
          <button class="ubtn" data-act="update-reload">Reload now</button>`
        : '<span class="utext">Click <b>Update</b> in Tampermonkey, then come back: Vest reloads by itself.</span>';
    else if (state === 'available' && dismissed !== latest) {
      html = `<span class="utext"><b>v${esc(latest)}</b> ready${S.armed ? ' · install when flat' : ` · you have v${VERSION}`}</span>
      <a class="ubtn" href="${esc(S.update.installUrl || SCRIPT_URL)}" target="_blank" rel="noopener" title="Opens Tampermonkey's update page; then reload Vest">Install</a>
      <a class="ubtn ghost" href="${REPO_URL}/blob/main/CHANGELOG.md" target="_blank" rel="noopener">What's new</a>
      <button class="ubtn ghost" data-act="update-later" aria-label="Hide until the next version">Later</button>`;
    }
    bar.hidden = !html;
    bar.classList.toggle('muted', state !== 'available' && state !== 'installing');
    if (bar.dataset.html === html) return;
    bar.dataset.html = html;
    bar.innerHTML = html;
    const later = bar.querySelector('[data-act="update-later"]');
    if (later) later.onclick = dismissUpdate;
    const install = bar.querySelector('a.ubtn');
    if (install && state === 'available') install.onclick = startInstall;
    const reload = bar.querySelector('[data-act="update-reload"]');
    if (reload) reload.onclick = reloadWhenIdle;
  }
  // Reload for an update only once nothing is in flight (an order, a stop move, a claim, Flatten All, arming).
  const busyNow = () =>
    !!(S.placing || S.adjusting || S.flattening || S.arming || claimBusy()) ||
    Object.values(S.plans).some((p) => p.busy);
  function reloadWhenIdle() {
    if (busyNow()) return setTimeout(reloadWhenIdle, 500);
    location.reload();
  }
  // Tampermonkey doesn't tell the page when it updates a script, so: after Install, reload Vest when the user comes back
  // to this tab (Tampermonkey's page opens in another tab). Armed, it asks instead, since reloading disarms.
  let _leftForInstall = false;
  function startInstall() {
    S.update.state = 'installing';
    _leftForInstall = false;
    renderUpdate();
  }
  document.addEventListener('visibilitychange', () => {
    if (!S.update || S.update.state !== 'installing') return;
    if (document.hidden) {
      _leftForInstall = true;
      return;
    }
    if (!_leftForInstall) return;
    if (S.armed)
      renderUpdate(); // shows Reload now
    else reloadWhenIdle();
  });

  // ───────────────────────── support (optional referral code) ─────────────────────────
  // Asked once, after the terms are accepted: "Support the free copier with code AMPED?" If the account already uses
  // another code, the question names it, so switching is the user's informed choice. Yes tries Vest's own referral-join
  // call (the one behind Vest's "Have a Referral Code?" dialog); if Vest won't link it, the user is told to enter the
  // code once in the purchase window's discount box (and it's put on the clipboard). No records the answer and it is
  // never asked again. Nothing changes without the click; an account already using AMPED is never asked.
  const SUPPORT_CODE = 'AMPED';
  const SUPPORT_DEBUG = false; // test builds: log each step of the purchase-window switch in the activity log
  const supportStep = (msg) => SUPPORT_DEBUG && logEvent('info', '[code test] ' + msg);
  const SUPPORT_KEY = 'vc-support'; // { answered: 'yes' | 'manual' | 'no' | 'had-code', at, apply? }
  // 'had-code' (already using a code) isn't a real answer: re-check it, so only accounts on AMPED stay unasked.
  const supportAnswer = () => {
    const a = (store.get(SUPPORT_KEY, null) || {}).answered || null;
    return a === 'had-code' ? null : a;
  };
  const saveSupport = (answered) => store.set(SUPPORT_KEY, { answered, at: new Date().toISOString() });
  // The account's attached referral code, '' when none, or null when it can't be read (then nothing is offered).
  async function attachedRefCode() {
    try {
      const r = await _fetch(location.origin + '/api/v2/referrals/rewards', {
        headers: { Accept: 'application/json', Authorization: 'Bearer ' + userToken },
      });
      if (!r.ok) return null;
      const d = await r.json();
      return (d && d.signup_ref_discount && d.signup_ref_discount.code) || '';
    } catch {
      return null;
    }
  }
  async function maybeOfferSupport() {
    if (!S.ack || supportAnswer() || !userTokenOk()) return;
    const code = await attachedRefCode(); // null when it can't be read: ask without naming a current code
    if (code && code.toUpperCase() === SUPPORT_CODE) {
      saveSupport('had-code'); // already supporting
      const link = _root && _root.querySelector('[data-act="code"]');
      if (link) link.hidden = true;
      return;
    }
    S.supportCurrent = code || null;
    S.supportOffer = true;
    renderSupport();
  }
  // Put the code on the clipboard (the click that triggered this counts as the user gesture browsers ask for).
  const copySupportCode = () =>
    navigator.clipboard.writeText(SUPPORT_CODE).then(
      () => true,
      () => false,
    );
  async function acceptSupport() {
    S.supportOffer = false;
    saveSupport('yes');
    renderSupport();
    logEvent(
      'ok',
      `Thank you! ${SUPPORT_CODE} will be used in Vest's purchase window from now on (Settings → Support to turn off).`,
    );
    // Also try Vest's referral link, which only some accounts accept; the purchase window covers everyone else.
    try {
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + userToken,
      };
      const r = await _fetch(API + '/v2/referrals/join', {
        method: 'POST',
        headers,
        body: JSON.stringify({ refCode: SUPPORT_CODE }),
      });
      const reply = (await r.text()).slice(0, 300);
      diag('support', { outcome: r.ok ? 'joined' : 'join-refused', status: r.status, reply });
      supportStep(`referral link: HTTP ${r.status} ${reply}`);
    } catch (e) {
      diag('support', { outcome: 'join-error', error: e.message });
      supportStep(`referral link failed: ${e.message}`);
    }
  }

  // ── Using the code in Vest's purchase window, for users who said Yes. Each time the window's discount box appears,
  // its code is switched to AMPED the way a person would do it: clear the applied code (✕), type AMPED, press Enter.
  // Vest validates and applies it. If Vest refuses it (for example on the code owner's own account), the previous
  // code is put back. It acts once per opening, so a code the user picks by hand afterwards is left alone, and every
  // switch is announced in the activity log.
  // Vest has more than one discount box. The purchase window's is an editable field (styled to show its code in
  // capitals) holding the applied code: type another code + Enter, and on success Vest redraws the box with it. The
  // account-builder screen's shows "CODE 5%" read-only with a ✕ to clear it first.
  const isDiscountBox = (el) =>
    el instanceof HTMLInputElement &&
    // purchase window ("pl-3! not-placeholder-shown:uppercase") or the account-builder side panel (the "!" variant).
    // Deliberately NOT the bare-class box inside Vest's "Do You Have a Discount Code?" form, which shares the placeholder
    // text: Enter there would submit that form. So boxes are matched by their styling, never by placeholder.
    ((/(^|\s)pl-3!(\s|$)/.test(el.className) && /not-placeholder-shown:uppercase(\s|$)/.test(el.className)) ||
      /not-placeholder-shown:uppercase!/.test(el.className) ||
      (el.getAttribute('role') === 'combobox' &&
        /\brounded-full\b/.test(el.className) &&
        /\bw-32\b/.test(el.className)));
  const supportApplies = () => {
    const v = store.get(SUPPORT_KEY, null) || {};
    return (v.answered === 'yes' || v.answered === 'manual') && v.apply !== false;
  };
  function setSupportApply(on) {
    const v = store.get(SUPPORT_KEY, null) || {};
    store.set(SUPPORT_KEY, { ...v, apply: on });
  }
  const _seenBoxes = new WeakSet();
  let _boxScan = null;
  function watchPurchaseWindow() {
    new MutationObserver(() => {
      if (_boxScan || !supportApplies()) return;
      _boxScan = setTimeout(() => {
        // the page changes constantly (prices); look at most a few times a second
        _boxScan = null;
        for (const el of document.querySelectorAll('input[placeholder], input[role="combobox"]')) {
          if (SUPPORT_DEBUG && !_seenBoxes.has(el) && el.closest('[role="dialog"]')) {
            _seenBoxes.add(el); // test builds: report every input in a dialog, to see what the purchase window holds
            supportStep(
              `dialog input: placeholder="${el.placeholder}" role=${el.getAttribute('role')} value="${el.value}" match=${isDiscountBox(el)}`,
            );
            if (!isDiscountBox(el)) continue;
            useSupportCode(el).catch((e) => supportStep('error: ' + e.message));
            continue;
          }
          if (!isDiscountBox(el) || _seenBoxes.has(el)) continue;
          _seenBoxes.add(el);
          useSupportCode(el).catch((e) => diag('support', { outcome: 'apply-error', error: e.message }));
        }
      }, 250);
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
  const waitFor = async (cond, ms) => {
    for (let t = 0; t < ms; t += 100) {
      if (cond()) return true;
      await sleep(100);
    }
    return cond();
  };
  // React-controlled input: set the value through the native setter so the page's own handlers see the change.
  function typeInto(input, text) {
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set.call(input, text);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }
  const pressEnter = (input) =>
    input.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, bubbles: true, cancelable: true }),
    );
  async function useSupportCode(input) {
    await sleep(300); // let the window finish opening
    if (!input.isConnected) return;
    if (input.readOnly) return useSupportCodeReadOnly(input);
    const before = input.value.trim().toUpperCase();
    supportStep(`discount box found: current code "${before || '(none)'}"`);
    if (before === SUPPORT_CODE) return;
    // Applied = Vest redrew the box (the old field is gone) and the new one holds the code without an error flag.
    const applied = () =>
      !input.isConnected &&
      [...document.querySelectorAll('input')].some(
        (el) =>
          isDiscountBox(el) &&
          el.value.trim().toUpperCase() === SUPPORT_CODE &&
          el.getAttribute('aria-invalid') !== 'true',
      );
    const refused = () => input.isConnected && input.getAttribute('aria-invalid') === 'true';
    typeInto(input, SUPPORT_CODE);
    supportStep(`typed ${SUPPORT_CODE}: box now "${input.value}"`);
    pressEnter(input);
    let ok = await waitFor(() => applied() || refused(), 3000);
    if (!applied() && !refused() && input.isConnected) {
      // Enter didn't take: click the box's Use button instead
      const group = input.closest('[data-slot="input-group"]') || input.parentElement;
      const use = [...group.querySelectorAll('button')].find((b) => /^\s*use\s*$/i.test(b.textContent));
      supportStep(use ? 'Enter did nothing; clicking Use' : 'Enter did nothing and no Use button was found');
      if (use) use.click();
      ok = await waitFor(() => applied() || refused(), 5000);
    }
    if (applied()) {
      logEvent('ok', `Purchase window: discount code set to ${SUPPORT_CODE}${before ? ` (was ${before})` : ''}.`);
      diag('support', { outcome: 'applied', replaced: before || null });
      return;
    }
    // Refused (or no answer): Vest kept the previous code applied; show it in the box again.
    supportStep(
      `not applied: aria-invalid=${input.getAttribute('aria-invalid')} connected=${input.isConnected} answered=${ok}`,
    );
    if (input.isConnected) typeInto(input, before);
    logEvent(
      'info',
      `Purchase window: Vest didn't accept ${SUPPORT_CODE} here${before ? `, so ${before} stays` : ''}.`,
    );
    diag('support', { outcome: 'apply-refused', kept: before || null });
  }
  // The account-builder screen's box: "CODE 5%" read-only, with a ✕ to clear it before typing another code.
  async function useSupportCodeReadOnly(input) {
    const codeOf = () => (input.value.trim().split(/\s+/)[0] || '').toUpperCase();
    const applied = () => input.readOnly && !!codeOf();
    const before = applied() ? codeOf() : '';
    supportStep(`read-only discount box found: current code "${before || '(none)'}"`);
    if (before === SUPPORT_CODE) return;
    const clearApplied = async () => {
      const x = (input.closest('[data-slot="input-group"]') || input.parentElement).querySelector('button');
      supportStep(x ? 'clicking ✕ to remove the applied code' : 'no ✕ button found next to the box');
      if (x) x.click();
      return waitFor(() => !input.readOnly, 1500);
    };
    const enter = async (code) => {
      typeInto(input, code);
      pressEnter(input);
      const ok = await waitFor(() => applied() && codeOf() === code, 5000);
      supportStep(`entered ${code}: ${ok ? 'applied' : 'not applied'}`);
      return ok;
    };
    if (before && !(await clearApplied())) return supportStep('stopped: the applied code could not be removed');
    if (await enter(SUPPORT_CODE)) {
      logEvent('ok', `Purchase window: discount code set to ${SUPPORT_CODE}${before ? ` (was ${before})` : ''}.`);
      diag('support', { outcome: 'applied', replaced: before || null });
      return;
    }
    if (before) {
      if (input.readOnly) await clearApplied();
      await enter(before);
    }
    logEvent(
      'info',
      `Purchase window: Vest didn't accept ${SUPPORT_CODE} here${before ? `, so ${before} was put back` : ''}.`,
    );
    diag('support', { outcome: 'apply-refused', restored: before || null });
  }

  function declineSupport() {
    S.supportOffer = false;
    saveSupport('no');
    renderSupport();
  }
  // ── The STRATUH theme, introduced once: what changed on Vest's page and chart, Keep or Back to Vest's colours, and
  // where to change it later. Shown once the terms (and the one-time support question) are out of the way, and only
  // with Vest in dark mode, where the theme applies.
  const THEME_INTRO_KEY = 'vc-theme-intro';
  function renderThemeIntro() {
    const bar = _root && _root.querySelector('.themeintro');
    if (!bar) return;
    const due =
      S.ack &&
      S.theme &&
      !S.supportOffer &&
      !store.get(THEME_INTRO_KEY, null) &&
      document.documentElement.classList.contains('dark');
    bar.hidden = !due;
    if (!due || bar.dataset.ready) return;
    bar.dataset.ready = '1';
    bar.innerHTML = `<span class="utext"><b>Vest is now in STRATUH colours.</b> Onyx and lime, grey shorts, losses and
        candles, square corners. The chart's buy/sell marks, session bands and the Volume indicator Vest adds are hidden
        too. Change any of it in Settings → Chart.</span>
      <button class="ubtn" data-act="theme-keep">Keep it</button>
      <button class="ubtn ghost" data-act="theme-revert">Back to Vest's colours</button>`;
    const answer = (keep) => {
      store.set(THEME_INTRO_KEY, { answered: keep ? 'keep' : 'revert', at: new Date().toISOString() });
      if (!keep) {
        S.theme = false;
        saveOpts();
        applyTheme();
        logEvent(
          'info',
          "STRATUH theme off: Vest's own colours are back (the chart after a refresh). Settings → Chart turns it on.",
        );
      }
      bar.hidden = true;
      render();
    };
    bar.querySelector('[data-act="theme-keep"]').onclick = () => answer(true);
    bar.querySelector('[data-act="theme-revert"]').onclick = () => answer(false);
  }

  function renderSupport() {
    const bar = _root && _root.querySelector('.support');
    if (!bar) return;
    bar.hidden = !S.supportOffer;
    if (!S.supportOffer || bar.dataset.ready) return;
    bar.dataset.ready = '1';
    const cur = S.supportCurrent ? esc(S.supportCurrent) : null;
    const ask = cur
      ? `You currently use code <b>${cur}</b>. Switch to <b>${SUPPORT_CODE}</b>?`
      : `Use code <b>${SUPPORT_CODE}</b>?`;
    bar.innerHTML = `<span class="utext"><b>STRATUH Copier is free.</b> ${ask} It takes <b>5% off</b> your Vest purchases
        (the highest discount available) and helps keep the copier maintained until Vest releases its own. Yes sets
        AMPED in Vest's purchase window from now on (Settings → Support turns it off). Asked only this once.</span>
      <button class="ubtn" data-act="support-yes">${cur ? 'Yes, switch to' : 'Yes, use'} ${SUPPORT_CODE}</button>
      <button class="ubtn ghost" data-act="support-no">${cur ? `Keep ${cur}` : 'No thanks'}</button>`;
    bar.querySelector('[data-act="support-yes"]').onclick = acceptSupport;
    bar.querySelector('[data-act="support-no"]').onclick = declineSupport;
  }

  // ───────────────────────── site check (run after Vest ships an update) ─────────────────────────
  // When Vest's build changes, the copier checks by itself that everything it relies on still looks the way it expects
  // and accepts the build once every required check passes. Until then the panel shows only the check, and if a
  // required check fails, copying, Trade-tab orders, automatic breakeven and claims stay off until a copier update
  // (Flatten All still works). Read-only: it reads endpoints the copier uses and scans Vest's loaded code; nothing is
  // sent to an account. The extras (live feed, prices, chart, claims) only warn: without them the copier is slower or a
  // feature is off, never wrong.
  // Order endpoints and payload fields the copier sends, looked for in Vest's own code (Vest joins "stop-loss" and
  // "take-profit" into their path at runtime, so the bare words are looked for).
  const SCAN_TERMS = [
    '/v3/positions/open',
    '/v3/positions/append',
    '/v3/positions/reduce',
    '/v3/positions/close',
    '/v3/positions/cancel-order',
    'stop-loss',
    'take-profit',
    '/v3/auth/account-token',
    '/v3/positions/opened-orders',
    '/v3/executions',
    '/v3/user-state',
    'takeProfits',
    'stopLosses',
    'reduceOnly',
    'timeInForce',
    'triggerPrice',
    'positionId',
    'isBuy',
    'orderType',
    'quantity',
    'leverage',
  ];
  const FEED_TERMS = ['account_state', 'capital_account', 'final_balance', 'balance_version']; // Vest's private socket
  const CLAIM_TERMS = ['/v3/capital/withdraw'];
  // A whole term: "/v3/positions/open" must not be satisfied by "/v3/positions/opened".
  const hasTerm = (code, term) => new RegExp(term.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&') + '(?![\\w-])').test(code);
  // [key, name, tier]: a failed 'must' keeps copying off; an 'extra' only warns.
  const SITE_CHECKS = [
    ['accounts', 'Accounts and balances', 'must'],
    ['token', 'Account access', 'must'],
    ['leverage', 'Leverage', 'must'],
    ['positions', 'Positions and orders', 'must'],
    ['fills', 'Fill history', 'must'],
    ['market', 'Market rules', 'must'],
    ['code', "Vest's order code", 'must'],
    ['feed', 'Live account feed', 'extra'],
    ['prices', 'Live prices', 'extra'],
    ['chart', 'Chart tools', 'extra'],
    ['claims', 'Profit claims', 'extra'],
  ];
  const SITE_WAIT_MS = 6000, // how long the extras wait for Vest's feed, a price and the chart
    SITE_RETRY_MS = 20000, // a failed check runs once more by itself (a passing hiccup rather than Vest)
    SITE_EMPTY_MS = 15000, // Vest listed no active account: asked again after this long
    SITE_SETTLE_MS = 8000, // after a page load, the session and accounts get this long before "waiting" shows
    ALL_CLEAR_MS = 2500, // the "All clear" screen, before the panel comes back
    SITE_PACE_MS = 450; // the rows tick off one at a time, this far apart, so the check can be followed
  // Test builds: localStorage 'vc-sim-site' = any of fail, warn, wait, slow (comma-separated) to see each screen.
  const SITE_SIM = false;
  const simSite = () => {
    if (!SITE_SIM) return new Set();
    try {
      return new Set(
        String(localStorage.getItem('vc-sim-site') || '')
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean),
      );
    } catch {
      return new Set();
    }
  };
  // The first truthy value of fn() (errors count as "not yet"), or null after ms.
  async function waitUntil(fn, ms) {
    const end = Date.now() + ms;
    for (;;) {
      let v = null;
      try {
        v = fn();
      } catch {
        /* not there yet */
      }
      if (v) return v;
      if (Date.now() > end) return null;
      await sleep(200);
    }
  }
  // Vest's own scripts (same host; never this copier), as one text to scan.
  async function readVestCode() {
    const urls = new Set();
    for (const s of document.scripts) if (s.src) urls.add(s.src);
    for (const e of performance.getEntriesByType('resource')) if (e.initiatorType === 'script') urls.add(e.name);
    const own = [...urls].filter((u) => {
      try {
        const x = new URL(u);
        return x.host === location.host && !/vest-copier/.test(x.pathname);
      } catch {
        return false;
      }
    });
    let code = '';
    for (const u of own.slice(0, 60)) {
      try {
        code += await (await _fetch(u)).text();
      } catch {
        /* best effort: nothing to do if this fails */
      }
    }
    return code;
  }

  let _siteRun = 0;
  async function runSiteCheck(retry = false) {
    const fp = fingerprint(),
      sim = simSite();
    if (!userTokenOk()) {
      S.site = { fp, phase: 'waiting', wait: 'session', results: [], at: Date.now() };
      return render();
    }
    const run = ++_siteRun;
    const site = (S.site = {
      fp,
      phase: 'checking',
      running: true,
      retried: retry,
      at: Date.now(),
      results: SITE_CHECKS.map(([key, name, tier]) => ({ key, name, tier, status: 'pending', detail: '' })),
      shown: 0, // rows revealed so far (results arrive faster than they're shown)
    });
    render();
    const live = () => run === _siteRun && site.phase === 'checking';
    const pacer = setInterval(() => {
      const r = site.results[site.shown];
      if (!live() || !r) return clearInterval(pacer);
      if (r.status === 'pending') return;
      site.shown++;
      render();
    }, SITE_PACE_MS);
    const set = (key, status, detail) => {
      if (!live()) return;
      if (status === 'wait') {
        // Vest lists no active account: nothing to read from yet
        Object.assign(site, { phase: 'waiting', wait: 'accounts', empty: true, running: false, at: Date.now() });
        return render();
      }
      if (sim.has('fail') && key === 'code') [status, detail] = ['fail', 'No longer found: positionId (simulated)'];
      if (sim.has('warn') && (key === 'feed' || key === 'prices'))
        [status, detail] = ['warn', 'Not connected (simulated): copying works, a little slower'];
      Object.assign(
        site.results.find((r) => r.key === key),
        { status, detail },
      );
      render();
    };
    const probe = async (key, fn) => {
      if (!live()) return;
      if (sim.has('slow')) await sleep(700);
      const must = SITE_CHECKS.find((c) => c[0] === key)[2] === 'must';
      try {
        const [status, detail] = await fn();
        set(key, status, detail);
      } catch (e) {
        set(key, must ? 'fail' : 'warn', e.message);
      }
    };
    const missing = (o, keys) => keys.filter((k) => !o || typeof o !== 'object' || !(k in o));
    const fields = (o, keys, ok) => {
      const m = missing(o, keys);
      return m.length ? ['fail', 'Missing fields: ' + m.join(', ')] : ['pass', ok];
    };
    const sym = S.trade.symbol || 'NDX-USD-PERP';
    const codeP = readVestCode();

    const required = (async () => {
      let active = [],
        tok = null;
      await probe('accounts', async () => {
        const [a, b] = await Promise.all([
          api('/v3/capital/accounts/active'),
          api(`/v3/accounts?active=true&limit=${BALANCES_LIMIT}`),
        ]);
        if (!Array.isArray(a.accounts)) return ['fail', "The account list is gone from Vest's answer"];
        active = a.accounts;
        if (!active.length || sim.has('wait')) return ['wait'];
        if (!Array.isArray(b.accounts) || !b.accounts.length) return ['fail', 'No balances returned'];
        const m = [
          ...missing(active[0], ['id', 'initial_capital', 'max_drawdown_limit', 'account_type']),
          ...missing(b.accounts[0], ['account_id', 'amount']),
        ];
        return m.length
          ? ['fail', 'Missing fields: ' + m.join(', ')]
          : ['pass', `${active.length} active account(s), balances readable`];
      });
      if (!live()) return;
      const testId = (S.master && S.byId[S.master] ? S.master : null) || (active[0] && active[0].id);
      await probe('token', async () => {
        if (!testId) return ['fail', 'Not checked: no account to test with'];
        const r = await api('/v3/auth/account-token', userToken, {
          method: 'POST',
          body: JSON.stringify({ accountId: testId }),
        });
        tok = r.apiKey || r.accessToken;
        if (!tok) return ['fail', "No token in Vest's answer"];
        const c = decodeJwt(tok);
        if (c.accountId !== testId)
          return ['fail', 'The token no longer names its account (how the master is told apart)'];
        return [
          'pass',
          'canTrade' in c
            ? 'Account token issued'
            : 'Account token issued (its trading-status flag is gone: shown as unknown)',
        ];
      });
      await probe('leverage', async () => {
        const r = await api('/v3/user-state');
        if (!Array.isArray(r.accounts)) return ['fail', 'No accounts list in user-state'];
        if (!r.accounts.length) return ['fail', 'No accounts in user-state'];
        return fields(r.accounts[0], ['accountId', 'leverages'], 'Leverage per market readable');
      });
      await probe('positions', async () => {
        if (!tok) return ['fail', 'Not checked: no account token'];
        const [p, o] = await Promise.all([api('/v3/positions/opened', tok), api('/v3/positions/opened-orders', tok)]);
        const m = [...missing(p, ['positions']), ...missing(o, ['orders'])];
        return m.length ? ['fail', 'Missing: ' + m.join(', ')] : ['pass', 'Open positions and orders readable'];
      });
      await probe('fills', async () => {
        if (!tok) return ['fail', 'Not checked: no account token'];
        const now = Math.floor(Date.now() / 1000);
        const q = `account_id=${encodeURIComponent(testId)}&symbol=${encodeURIComponent(sym)}&from=${now - 86400}&to=${now}&limit=5`;
        const r = await api(`/v3/executions?${q}`, tok);
        if (!Array.isArray(r.items)) return ['fail', 'No items list'];
        if (!r.items.length) return ['pass', 'Readable (no recent fills to inspect)'];
        return fields(r.items[0], ['id', 'price'], 'Fill prices readable');
      });
      await probe('market', async () => {
        const r = await (await _fetch(`${API}/v3/exchangeInfo?symbols=${encodeURIComponent(sym)}`)).json();
        const x = (r.symbols || []).find((s) => s && s.symbol === sym);
        if (!x) return ['fail', `${symLabel(sym)} is missing from Vest's market list`];
        return fields(
          x,
          ['sizeDecimals', 'minTickSize', 'initMarginRatio'],
          `${symLabel(sym)}: tick, size step and margin readable`,
        );
      });
      await probe('code', async () => {
        const code = await codeP;
        if (!code) return ['fail', "Couldn't read Vest's code"];
        const lost = SCAN_TERMS.filter((t) => !hasTerm(code, t));
        return lost.length
          ? ['fail', 'No longer found: ' + lost.join(', ')]
          : ['pass', `All ${SCAN_TERMS.length} order endpoints and fields present`];
      });
    })();

    const extras = Promise.all([
      probe('feed', async () => {
        const code = await codeP;
        const lost = code ? FEED_TERMS.filter((t) => !hasTerm(code, t)) : [];
        const up = await waitUntil(() => _feed.ws && _feed.ws.readyState === 1, SITE_WAIT_MS);
        if (!up) return ['warn', 'Not connected: copying works, balances and closes are read every 20 s instead'];
        const gone = [...new Set([...lost, ...(_feed.missing || [])])];
        return gone.length
          ? ['warn', `Vest changed its live updates (${gone.join(', ')}): copying works, balances may lag a minute`]
          : ['pass', _feed.stateAt ? 'Connected, updates read' : 'Connected'];
      }),
      probe('prices', async () => {
        watchPrice(sym);
        const got = await waitUntil(() => priceOf(sym) != null, SITE_WAIT_MS);
        const p = S.price[sym] || {};
        const book = recentAt(p.bookAt);
        unwatchUnused();
        if (!got)
          return [
            'warn',
            `No live ${symLabel(sym)} price: breakeven and Max sizing wait for one, copying is unaffected`,
          ];
        return [
          'pass',
          book ? `${symLabel(sym)} order book streaming` : `${symLabel(sym)} price streaming (no order book yet)`,
        ];
      }),
      probe('chart', async () => {
        if (!/^\/trade(\/|$)/.test(location.pathname)) return ['skip', 'Checked on a trade page'];
        const f = await waitUntil(() => {
          const x = chartFrame();
          return x && x.contentWindow.tradingViewApi.activeChart() && x;
        }, SITE_WAIT_MS);
        const off = 'picking a limit on the chart, hiding marks and the theme may not work; copying is unaffected';
        if (!f) return ['warn', `Vest's chart wasn't found: ${off}`];
        const w = f.contentWindow,
          c = w.tradingViewApi.activeChart();
        const ok =
          typeof c.getCheckableActionState === 'function' &&
          typeof c.getAllStudies === 'function' &&
          typeof w.applyOverrides === 'function';
        return ok ? ['pass', 'TradingView tools reachable'] : ['warn', `Vest's chart changed: ${off}`];
      }),
      probe('claims', async () => {
        const code = await codeP;
        if (!code) return ['warn', "Couldn't read Vest's code"];
        return CLAIM_TERMS.every((t) => hasTerm(code, t))
          ? ['pass', 'Claim endpoint present']
          : ['warn', "Vest's claim endpoint is gone: claim on Vest's own page"];
      }),
    ]);

    await Promise.all([required, extras]);
    await waitUntil(() => !live() || site.shown >= site.results.length, SITE_PACE_MS * (site.results.length + 2));
    clearInterval(pacer);
    if (!live()) return;
    site.shown = site.results.length;
    site.running = false;
    finishSiteCheck(site);
  }
  const countStatus = (site, status) => site.results.filter((r) => r.status === status).length;
  function finishSiteCheck(site) {
    const fails = site.results.filter((r) => r.status === 'fail'),
      warns = site.results.filter((r) => r.status === 'warn');
    site.doneAt = Date.now();
    diag('site_check', {
      fp: site.fp,
      pass: countStatus(site, 'pass'),
      warn: warns.length,
      fail: fails.length,
      results: site.results.map(({ key, status, detail }) => ({ key, status, detail })),
    });
    const gated = healthState().changed;
    if (fails.length) {
      site.phase = 'failed';
      const names = fails.map((r) => r.name).join(', ');
      logEvent(
        'warn',
        gated
          ? `Vest updated its site and the copier no longer matches it (${names}). Copying is off until a copier update.`
          : `Site check: ${names} failed. Diag has the details.`,
      );
    } else {
      const must = SITE_CHECKS.filter((c) => c[2] === 'must').length;
      logEvent('info', `Site check: all ${must} required checks passed.`);
      for (const r of warns) logEvent('warn', `${r.name}: ${r.detail}`);
      if (gated) acceptBuild(site);
      else site.phase = 'done';
    }
    render();
  }
  // Every required check passed on this build: remember it, show "All clear" for a moment.
  function acceptBuild(site) {
    const fp = fingerprint();
    if (site.fp !== fp) {
      site.phase = 'done'; // the page changed build during the check: the next round checks that one
      return;
    }
    if (fp) {
      try {
        localStorage.setItem(BUILD_KEY, fp);
      } catch {
        /* best effort: nothing to do if this fails */
      }
    } else _unknownBuildChecked = true;
    site.phase = 'accepted';
    site.acceptedAt = Date.now();
    logEvent('info', `Vest build ${fp || '(unknown)'} checked and accepted.`);
    diag('build_accepted', { fp, auto: true });
    setTimeout(render, ALL_CLEAR_MS + 50);
  }
  // What the panel shows in place of its tabs: 'checking' | 'waiting' | 'failed' while Vest's build isn't accepted,
  // 'clear' for a moment once it is; null = the normal panel. An armed copier is never taken over.
  function siteGate() {
    const s = S.site;
    if (s && s.phase === 'accepted' && Date.now() - s.acceptedAt < ALL_CLEAR_MS) return 'clear';
    if (S.armed || !healthState().changed) return null;
    return s && s.fp === fingerprint() && s.phase !== 'done' ? s.phase : 'checking';
  }
  // Why an order from the panel (or automatic breakeven) has to wait, or null.
  const siteBlocks = () => {
    const g = siteGate();
    if (!g || g === 'clear') return null;
    return g === 'failed'
      ? "Vest changed something the copier relies on: use Vest's own panel until a copier update."
      : 'Vest updated its site: wait a moment for the check to finish.';
  };
  // Every second: start (or restart) the check whenever Vest's build isn't accepted and it can run.
  function autoSiteCheck() {
    if (S.armed || !healthState().changed) return;
    const fp = fingerprint(),
      s = S.site && S.site.fp === fp ? S.site : null;
    if (s && (s.running || s.phase === 'accepted')) return;
    if (s && s.phase === 'failed') {
      if (!s.retried && Date.now() - s.doneAt > SITE_RETRY_MS) runSiteCheck(true);
      return;
    }
    if (s && s.phase === 'waiting' && s.empty && Date.now() - s.at < SITE_EMPTY_MS) return;
    const wait = !userTokenOk() ? 'session' : !S.groups.length ? 'accounts' : null;
    if (!wait) return runSiteCheck();
    if (Date.now() - _bootAt < SITE_SETTLE_MS) return; // still loading: shown as "checking" until then
    if (!s || s.phase !== 'waiting' || s.wait !== wait) {
      S.site = { fp, phase: 'waiting', wait, results: [], at: Date.now() };
      render();
    }
  }
  // The site check view from the status bar (a fresh check unless this build's results are already in).
  function openSiteCheck() {
    if (siteGate()) return render();
    S.siteOpen = true;
    S.rulesOpen = false;
    S.supportOpen = false;
    S.summaryOpen = false;
    S.settingsOpen = false;
    S.tradeOpen = false;
    const have = S.site && S.site.fp === fingerprint() && S.site.results.length;
    if (!have && !(S.site && S.site.running)) runSiteCheck();
    else render();
  }

  // ───────────────────────── UI ─────────────────────────
  let _root = null; // the panel's shadow root
  const money = (n) =>
    isNaN(n) ? '—' : '$' + n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const pct = (n) => (isNaN(n) ? '—' : (n * 100).toFixed(0) + '%');
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const acctNum = (label) => (String(label).match(/(\d+)\s*$/) || ['', '--'])[1]; // "Account 07" → "07"

  const CSS = `
    :host {
      all: initial;
    }
    * {
      box-sizing: border-box;
      font-family: inherit;
    }
    .panel {
      font-family: var(--sans);
      --bg: #0c0c0d;
      --elev: #141416;
      --elev2: #1a1a1d;
      --s1: #121214;
      --s2: #18181b;
      --s3: #202024;
      --sunk: #080809;
      --hair: rgba(255, 255, 255, 0.06);
      --line: rgba(255, 255, 255, 0.09);
      --line2: rgba(255, 255, 255, 0.16);
      --text: #f0f0f1;
      --dim: #a1a1a8;
      --faint: #6b6b73;
      --accent: #c8f542;
      --ink: #0c0c0d;
      --accent-dim: rgba(200, 245, 66, 0.1);
      --accent-line: rgba(200, 245, 66, 0.4);
      --danger: #ff5a4f;
      --danger-dim: rgba(255, 90, 79, 0.1);
      --danger-line: rgba(255, 90, 79, 0.42);
      --warn: #f5b942;
      --warn-dim: rgba(245, 185, 66, 0.1);
      --warn-line: rgba(245, 185, 66, 0.4);
      --sans: 'Geist', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
      --mono: 'JetBrains Mono', ui-monospace, 'SF Mono', 'Cascadia Mono', Consolas, Menlo, monospace;
      position: fixed;
      top: 16px;
      right: 16px;
      width: 340px;
      max-height: calc(100vh - 32px);
      /* above the chart and Vest's page (its header is 40), below every Vest menu, dropdown and dialog (50) */
      z-index: 45;
      transition: opacity 0.12s;
      display: flex;
      flex-direction: column;
      background: var(--bg);
      color: var(--text);
      border: 1px solid var(--line2);
      box-shadow: 0 24px 70px rgba(0, 0, 0, 0.6);
      font-size: 13px;
      line-height: 1.4;
      -webkit-font-smoothing: antialiased;
      overflow: hidden;
    }
    button {
      font-family: inherit;
    }
    /* Small section labels: mono capitals, like stratuh.com. Everything else is sentence case. */
    .eyebrow,
    .set-h,
    .tr-lbl,
    .tr-pxl,
    .title {
      font-family: var(--mono);
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--faint);
    }
    .hint {
      font-size: 11.5px;
      line-height: 1.45;
      color: var(--faint);
    }
    .amber {
      color: var(--warn);
    }
    .lnk {
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
      font-size: 12px;
      color: var(--dim);
      text-decoration: underline;
      text-decoration-color: var(--line2);
      text-underline-offset: 3px;
    }
    .lnk:hover {
      color: var(--text);
    }
    .hdr {
      display: flex;
      align-items: center;
      gap: 8px;
      height: 44px;
      padding: 0 6px 0 12px;
      cursor: move;
      border-bottom: 1px solid var(--hair);
      flex: none;
      touch-action: none;
      user-select: none;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 5px;
      flex: none;
    }
    .brand svg {
      display: block;
    }
    .sep {
      width: 1px;
      height: 14px;
      background: var(--line2);
      flex: none;
    }
    .title {
      letter-spacing: 0.2em;
      white-space: nowrap;
    }
    .spacer {
      flex: 1;
    }
    /* the state, top right: lime copying, grey not copying, amber needs you, red check failed */
    .pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 22px;
      padding: 0 8px;
      background: var(--s2);
      color: var(--dim);
      font-size: 11.5px;
      font-weight: 500;
      white-space: nowrap;
      flex: none;
    }
    .pdot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--faint);
    }
    .pill.live {
      background: var(--accent-dim);
      color: var(--accent);
    }
    .pill.warn {
      background: var(--warn-dim);
      color: var(--warn);
    }
    .pill.bad {
      background: var(--danger-dim);
      color: var(--danger);
    }
    .pill.live .pdot {
      background: var(--accent);
    }
    .pill.warn .pdot {
      background: var(--warn);
    }
    .pill.bad .pdot {
      background: var(--danger);
    }
    .pillv,
    .pillbtn {
      display: none;
    }
    .iconbtn {
      cursor: pointer;
      color: var(--dim);
      background: none;
      border: 1px solid transparent;
      font-family: var(--mono);
      font-size: 11px;
      font-weight: 500;
      line-height: 1;
      padding: 5px 7px;
      transition: 0.12s;
    }
    .iconbtn:hover {
      color: var(--text);
      background: var(--s2);
    }
    .hdr .iconbtn {
      display: inline-grid;
      place-items: center;
      width: 28px;
      height: 28px;
      padding: 0;
      flex: none;
    }
    .hdr .iconbtn svg {
      display: block;
    }
    /* a sheet (Settings, Help, the site check, Share): back arrow and its title in place of the logo and state */
    .panel:not(.sheet) .hdr .back,
    .sheett {
      display: none;
    }
    .sheet .hdr .back {
      display: inline-grid;
      margin-left: -6px;
    }
    .sheet .sheett {
      display: block;
      font-size: 14px;
      font-weight: 500;
    }
    .sheet .hdr .brand,
    .sheet .hdr .sep,
    .sheet .hdr .title,
    .sheet .hdr .pill,
    .sheet .status,
    .sheet .tabs,
    .first .tabs,
    .first .ctl {
      display: none !important;
    }
    /* the ⋯ menu */
    .menu {
      position: absolute;
      top: 40px;
      right: 8px;
      z-index: 4;
      width: 214px;
      padding: 4px;
      display: grid;
      background: var(--s2);
      border: 1px solid var(--line2);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    }
    .menu[hidden] {
      display: none;
    }
    .mi {
      display: flex;
      align-items: center;
      gap: 10px;
      height: 32px;
      padding: 0 10px;
      background: none;
      border: none;
      color: var(--text);
      font-size: 13px;
      text-align: left;
      cursor: pointer;
    }
    .mi:hover {
      background: var(--s3);
    }
    .mi svg {
      color: var(--faint);
      flex: none;
    }
    .mi .mt {
      flex: 1;
    }
    .mi .mk {
      display: none;
      color: var(--accent);
    }
    .mi.on .mk {
      display: block;
    }
    .mi .mk svg {
      color: var(--accent);
    }
    .mhr {
      height: 1px;
      margin: 4px 6px;
      background: var(--hair);
    }
    /* the status block: one sentence, what last happened, Start / Stop copying and Flatten all */
    .status {
      padding: 13px 14px 12px;
      display: grid;
      gap: 10px;
      flex: none;
    }
    .say {
      font-size: 15.5px;
      font-weight: 500;
      line-height: 1.3;
      letter-spacing: -0.005em;
    }
    .say em {
      font-style: normal;
      color: var(--accent);
    }
    .ssub {
      font-size: 12px;
      color: var(--faint);
      margin-top: -6px;
    }
    .ssub:empty {
      display: none;
    }
    .tabs {
      padding: 0 14px 12px;
      border-bottom: 1px solid var(--hair);
      flex: none;
    }
    .tabseg {
      display: flex;
      gap: 2px;
      padding: 2px;
      background: var(--s1);
      border: 1px solid var(--hair);
    }
    .tab {
      flex: 1;
      cursor: pointer;
      background: none;
      border: none;
      color: var(--dim);
      font-size: 12.5px;
      font-weight: 500;
      padding: 6px 4px;
    }
    .tab:hover {
      color: var(--text);
    }
    .tab.on {
      background: var(--s3);
      color: var(--text);
    }
    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      flex: none;
      display: inline-block;
    }
    .green {
      background: var(--accent);
    }
    .amber.dot,
    .dot.amber {
      background: var(--warn);
    }
    .red {
      background: var(--danger);
    }
    .gray {
      background: #4a4a50;
    }
    .body {
      flex: 1 1 auto;
      overflow: auto;
      min-height: 96px; /* a short panel squeezes the open log first, then this; the footer always shows */
    }
    .body::-webkit-scrollbar,
    .log::-webkit-scrollbar {
      width: 6px;
    }
    .body::-webkit-scrollbar-thumb,
    .log::-webkit-scrollbar-thumb {
      background: #2a2a2e;
    }
    /* one-time and only-when-it-applies bars: an update, the support question, the theme intro */
    .alertzone {
      flex: none;
    }
    .update {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      margin: 0 14px 10px;
      padding: 9px 10px 9px 12px;
      background: var(--s1);
      color: var(--dim);
      font-size: 12px;
      line-height: 1.45;
      max-height: 40vh;
      overflow: auto;
    }
    .update b {
      color: var(--text);
      font-weight: 500;
    }
    .utext {
      flex: 1 1 180px;
    }
    .update.muted {
      color: var(--faint);
      font-size: 11.5px;
    }
    .update[hidden] {
      display: none;
    }
    .alertzone > .update:first-child:not([hidden]),
    .alertzone > .update:not([hidden]) {
      margin-top: 10px;
    }
    .alertzone > .update:not([hidden]) ~ .update:not([hidden]) {
      margin-top: 0;
    }
    .ubtn {
      cursor: pointer;
      font-size: 12px;
      font-weight: 600;
      padding: 6px 10px;
      border: 1px solid var(--accent);
      background: var(--accent);
      color: var(--ink);
      text-decoration: none;
      white-space: nowrap;
    }
    .ubtn.ghost {
      border-color: var(--line2);
      background: none;
      color: var(--text);
      font-weight: 500;
    }
    .ubtn:hover {
      filter: brightness(1.1);
    }

    /* Copier tab: one line per account (number, name, room to the floor, a dot), and Edit */
    .cop {
      padding: 12px 14px 14px;
      display: grid;
      gap: 10px;
      align-content: start;
    }
    .sech {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      min-height: 18px;
    }
    .sech .h {
      font-size: 14px;
      font-weight: 500;
    }
    .sech + .accts,
    .acct.head + .accts {
      margin-top: -6px;
    }
    .accts {
      display: grid;
    }
    .acct {
      display: grid;
      grid-template-columns: 24px minmax(0, 1fr) 96px 8px;
      column-gap: 10px;
      align-items: center;
      min-height: 38px;
      border-bottom: 1px solid var(--hair);
    }
    .acct:last-child {
      border-bottom: 0;
    }
    .tile {
      width: 24px;
      height: 24px;
      display: inline-grid;
      place-items: center;
      font-family: var(--mono);
      font-size: 10.5px;
      font-weight: 600;
      background: var(--s3);
      color: var(--dim);
      flex: none;
    }
    .tile.m {
      background: var(--accent);
      color: var(--ink);
    }
    .nm {
      font-size: 13px;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 6px;
      white-space: nowrap;
      overflow: hidden;
      min-width: 0;
    }
    .nm small,
    .chip {
      font-family: var(--mono);
      font-size: 9.5px;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--dim);
      border: 1px solid var(--line);
      padding: 2px 4px;
      line-height: 1;
    }
    .room {
      display: grid;
      gap: 4px;
      justify-items: end;
    }
    .room > span:first-child {
      font-family: var(--mono);
      font-size: 12px;
      font-weight: 500;
    }
    .meter {
      width: 100%;
      height: 3px;
      background: var(--s3);
      overflow: hidden;
      display: block;
    }
    .meter i {
      display: block;
      height: 100%;
      background: var(--dim);
    }
    .meter i.warn {
      background: var(--warn);
    }
    .acct.off .nm,
    .acct.off .room > span:first-child {
      color: var(--faint);
    }
    .acct .note {
      grid-column: 2 / -1;
      font-size: 11.5px;
      color: var(--warn);
      margin: -6px 0 8px;
    }
    .acct .note.dim {
      color: var(--faint);
    }
    .sdot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--faint);
      display: inline-block;
      flex: none;
    }
    .sdot.live {
      background: var(--accent);
      box-shadow: 0 0 0 3px var(--accent-dim);
    }
    .sdot.bad {
      background: var(--danger);
    }
    .sdot.hollow {
      background: transparent;
      border: 1px solid var(--faint);
    }
    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: 6px 14px;
      font-size: 11px;
      color: var(--faint);
      align-items: center;
    }
    .legend span {
      display: inline-flex;
      gap: 6px;
      align-items: center;
    }
    .legend .sdot {
      width: 6px;
      height: 6px;
      box-shadow: none;
    }
    /* Edit: radio = master, box = follower */
    .acct.ed {
      grid-template-columns: 24px minmax(0, 1fr) 44px 36px;
    }
    .acct.ed.head {
      min-height: 22px;
      border-bottom: 0;
    }
    .acct.ed.head .eyebrow:nth-child(n + 3) {
      text-align: center;
      letter-spacing: 0.08em;
    }
    .rd,
    .ck {
      justify-self: center;
      width: 16px;
      height: 16px;
      padding: 0;
      display: grid;
      place-items: center;
      border: 1px solid var(--line2);
      background: none;
      color: var(--ink);
      cursor: pointer;
    }
    .rd {
      border-radius: 50%;
    }
    .rd.on::after {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--accent);
    }
    .ck svg {
      width: 11px;
      height: 11px;
      stroke-width: 2.6;
      visibility: hidden;
    }
    .ck.on {
      background: var(--accent);
      border-color: var(--accent);
    }
    .ck.on svg {
      visibility: visible;
    }
    .rd:disabled,
    .ck:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
    .ck.on:disabled,
    .rd.on:disabled {
      opacity: 1;
    }
    .ckm {
      justify-self: center;
      color: var(--faint);
      font-family: var(--mono);
    }

    /* Start / Stop copying and Flatten all */
    .ctl {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 8px;
    }
    .armbtn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      height: 34px;
      padding: 0 14px;
      border: 1px solid var(--accent);
      background: var(--accent);
      color: var(--ink);
      transition: 0.12s;
      white-space: nowrap;
    }
    .armbtn:hover:not(:disabled) {
      filter: brightness(1.08);
    }
    /* stopping is routine, not danger: neutral */
    .armbtn.armed {
      background: var(--s2);
      border-color: var(--line2);
      color: var(--text);
      font-weight: 500;
    }
    .armbtn.armed:hover:not(:disabled) {
      background: var(--s3);
      filter: none;
    }
    .armbtn:disabled {
      background: var(--s2);
      border-color: var(--line);
      color: var(--faint);
      cursor: not-allowed;
    }
    .armbtn.sm {
      height: 28px;
      padding: 0 12px;
      font-size: 12px;
    }
    .dangerbtn {
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      height: 34px;
      padding: 0 14px;
      border: 1px solid var(--danger-line);
      background: none;
      color: var(--danger);
      white-space: nowrap;
      transition: 0.12s;
    }
    .dangerbtn:hover:not(:disabled) {
      background: var(--danger-dim);
      border-color: var(--danger);
    }
    .dangerbtn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .ghostbtn {
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      height: 28px;
      padding: 0 10px;
      border: 1px solid var(--line2);
      background: var(--s2);
      color: var(--text);
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .ghostbtn:hover {
      background: var(--s3);
    }
    a.ghostbtn {
      text-decoration: none;
    }

    /* Settings: one line per option, the full text behind ? */
    .settings {
      padding: 4px 14px 14px;
    }
    .set-h {
      padding: 14px 0 2px;
    }
    .opt {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 9px 0;
      border-bottom: 1px solid var(--hair);
    }
    .opt:last-child {
      border-bottom: none;
    }
    .opt.dep-off {
      opacity: 0.45;
    }
    .opt[hidden] {
      display: none;
    }
    .opt-txt {
      flex: 1;
      min-width: 0;
    }
    .opt-name {
      font-weight: 500;
      font-size: 13px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .opt-short {
      color: var(--faint);
      font-size: 11.5px;
      line-height: 1.35;
      margin-top: 2px;
    }
    .opt-desc {
      display: none;
      color: var(--dim);
      font-size: 11.5px;
      line-height: 1.5;
      margin-top: 6px;
    }
    .opt.open .opt-desc {
      display: block;
    }
    .opt-desc b {
      color: var(--text);
      font-weight: 500;
    }
    .qm {
      cursor: pointer;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 1px solid var(--line2);
      background: none;
      color: var(--faint);
      font-family: var(--mono);
      font-size: 9px;
      line-height: 1;
      padding: 0;
      display: inline-grid;
      place-items: center;
    }
    .qm:hover,
    .opt.open .qm {
      color: var(--text);
      border-color: var(--text);
    }
    .switch {
      flex: none;
      position: relative;
      width: 30px;
      height: 17px;
      border: 1px solid var(--line);
      background: var(--s3);
      cursor: pointer;
      padding: 0;
      transition: 0.15s;
    }
    .switch .knob {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 11px;
      height: 11px;
      background: var(--faint);
      transition: 0.15s;
    }
    .switch.on {
      border-color: var(--accent-line);
      background: var(--accent-dim);
    }
    .switch.on .knob {
      transform: translateX(13px);
      background: var(--accent);
    }
    .set-row {
      display: flex;
      gap: 8px;
      padding: 8px 0 4px;
    }

    /* Alerts (only when they apply): the orphan prompt, notices, toasts. Then the footer: the latest log line (it opens into
       the log) and the status dot (it opens the status card). */
    .alerts:empty {
      display: none;
    }
    .alerts {
      padding: 0 14px 10px;
      display: grid;
      gap: 8px;
      flex: none;
    }
    .alerts:first-child,
    .update[hidden] + .update[hidden] + .update[hidden] + .alerts {
      padding-top: 10px;
    }
    .orphan {
      padding: 11px 12px;
      display: grid;
      gap: 10px;
      background: var(--warn-dim);
      border: 1px solid var(--warn-line);
      font-size: 12.5px;
      line-height: 1.45;
    }
    .orphan b {
      font-weight: 600;
    }
    .obtns {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .obtns .lnk {
      margin-left: auto;
    }
    .obtn {
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      height: 28px;
      padding: 0 10px;
      border: 1px solid var(--danger-line);
      background: none;
      color: var(--danger);
    }
    .obtn:hover {
      background: var(--danger-dim);
    }
    .obtn.keep {
      border-color: var(--line2);
      background: var(--s2);
      color: var(--text);
    }
    .toast {
      padding: 9px 12px;
      background: var(--warn-dim);
      border: 1px solid var(--warn-line);
      color: var(--warn);
      font-size: 12px;
      line-height: 1.45;
    }
    .logwrap {
      border-top: 1px solid var(--hair);
      flex: 0 10 auto; /* gives up its height before the body does, down to its one line */
      min-height: 34px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .logh {
      flex: none;
      display: flex;
      align-items: center;
      gap: 8px;
      height: 34px;
      padding: 0 8px 0 12px;
      font-family: var(--mono);
      font-size: 11px;
      color: var(--dim);
      cursor: pointer;
      user-select: none;
    }
    .caret {
      display: grid;
      color: var(--faint);
      flex: none;
    }
    .logt {
      display: none;
      font-size: 10px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--faint);
      flex: 1;
    }
    .loglast {
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: center;
      gap: 6px;
      white-space: nowrap;
    }
    .loglast .ts {
      color: var(--faint);
      flex: none;
    }
    .loglast .lm {
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }
    .loglast.ok .lm {
      color: var(--accent);
    }
    .loglast.warn .lm {
      color: var(--warn);
    }
    .loglast .lnk {
      flex: none;
      font-family: var(--sans);
      font-size: 11.5px;
    }
    .logh:hover .lm {
      color: var(--text);
    }
    .logwrap.open .loglast {
      display: none;
    }
    .logwrap.open .logt {
      display: block;
    }
    .loghbtns {
      display: none;
      gap: 2px;
    }
    .logwrap.open .loghbtns {
      display: flex;
    }
    .iconbtn.sm {
      font-family: var(--sans);
      font-size: 11.5px;
      padding: 4px 6px;
    }
    /* the bottom bar: the code on the left; Vest's build · version · API budget on the right (click = status card) */
    .reportbar {
      display: flex;
      align-items: center;
      gap: 10px;
      height: 30px;
      padding: 0 18px 0 12px; /* clear of the resize grip in the corner */
      background: var(--sunk);
      border-top: 1px solid var(--hair);
      flex: none;
      white-space: nowrap;
    }
    .codebtn {
      cursor: pointer;
      background: none;
      border: none;
      padding: 0;
      font-size: 11px;
      color: var(--dim);
      display: inline-flex;
      align-items: center;
      gap: 5px;
      flex: none;
    }
    .codebtn b {
      background: var(--accent);
      color: var(--ink);
      font-family: var(--mono);
      font-weight: 700;
      letter-spacing: 0.06em;
      padding: 1px 5px;
      font-size: 10.5px;
    }
    .codebtn:hover b {
      filter: brightness(1.1);
    }
    .codebtn[hidden],
    .reportbar.alert .codebtn {
      display: none;
    }
    .health {
      margin-left: auto;
      display: flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;
      font-family: var(--mono);
      font-size: 10px;
      color: var(--faint);
    }
    .reportbar.alert .health {
      margin-left: 0;
    }
    .hsum {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .health:hover .hsum {
      color: var(--text);
    }
    .reportbar.alert .hsum {
      color: var(--warn);
    }
    .health .dot.green {
      opacity: 0.85;
    }
    .log {
      max-height: calc(6 * (1.5em + 4px) + 8px); /* six lines; the rest scrolls (CSV / Diag export it all) */
      min-height: 0;
      overflow: auto;
      padding: 0 12px 8px;
      font-size: 11px;
      line-height: 1.5;
      font-family: var(--mono);
    }
    .logwrap:not(.open) .log {
      max-height: 0;
      padding: 0;
      overflow: hidden;
    }
    .le {
      display: grid;
      grid-template-columns: 58px 1fr;
      gap: 8px;
      padding: 2px 0;
      color: var(--dim);
    }
    .le .ts {
      color: var(--faint);
    }
    .le.ok {
      color: var(--accent);
    }
    .le.warn {
      color: var(--warn);
    }
    /* the status card: Vest's build, this version, the API budget, the site check */
    .scard {
      position: absolute;
      right: 8px;
      bottom: 34px;
      z-index: 4;
      width: 262px;
      padding: 12px;
      display: grid;
      gap: 8px;
      background: var(--s2);
      border: 1px solid var(--line2);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    }
    .scard[hidden] {
      display: none;
    }
    .kv {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
      font-size: 12px;
    }
    .kv > span:first-child {
      color: var(--dim);
    }
    .kv > span:last-child {
      font-family: var(--mono);
      text-align: right;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .scard .ghostbtn {
      justify-self: start;
      margin-top: 4px;
    }
    .r-amber {
      color: var(--warn);
    }
    .r-red {
      color: var(--danger);
    }
    .linkbtn {
      cursor: pointer;
      background: none;
      border: none;
      padding: 2px 0;
      color: var(--dim);
      font-size: 11.5px;
      text-decoration: underline;
      text-underline-offset: 2px;
    }
    .linkbtn:hover {
      color: var(--text);
    }
    .grip {
      position: absolute;
      right: 2px;
      bottom: 2px;
      width: 12px;
      height: 12px;
      cursor: nwse-resize;
      z-index: 3;
      touch-action: none;
      background: linear-gradient(
        135deg,
        transparent 45%,
        var(--faint) 45%,
        var(--faint) 52%,
        transparent 52%,
        transparent 68%,
        var(--faint) 68%,
        var(--faint) 75%,
        transparent 75%
      );
    }
    .empty {
      padding: 26px 14px;
      color: var(--dim);
      text-align: center;
      line-height: 1.5;
    }

    /* Rules (first run), Help, the site check */
    .rules,
    .help {
      padding: 14px;
      display: grid;
      gap: 12px;
      align-content: start;
    }
    .rules-h {
      font-weight: 500;
      font-size: 13.5px;
    }
    .rules-h.big {
      font-size: 15px;
    }
    .rules-list {
      margin: 0;
      padding-left: 16px;
      color: var(--dim);
      font-size: 12px;
      line-height: 1.55;
    }
    .rules-list li {
      margin-bottom: 7px;
    }
    .rules-list li::marker {
      color: var(--faint);
    }
    .rules-list b {
      color: var(--text);
      font-weight: 500;
    }
    .rules-accept {
      display: flex;
      gap: 9px;
      align-items: flex-start;
      padding: 10px 12px;
      background: var(--s1);
      border: 1px solid var(--line);
      font-size: 12px;
      line-height: 1.5;
      color: var(--text);
      cursor: pointer;
    }
    .rules-accept input {
      margin-top: 2px;
      accent-color: var(--accent);
    }
    .rules-terms {
      font-size: 11.5px;
      color: var(--faint);
    }
    .rules-terms a,
    .sc-sub a {
      color: var(--dim);
      text-underline-offset: 3px;
    }
    .rules-btns {
      display: flex;
      gap: 8px;
    }
    .help .grp {
      display: grid;
      gap: 8px;
    }
    .links {
      font-size: 12px;
      color: var(--faint);
      line-height: 1.6;
    }
    .lrow {
      display: flex;
      align-items: center;
      gap: 10px;
      height: 36px;
      padding: 0;
      background: none;
      border: none;
      border-bottom: 1px solid var(--hair);
      color: var(--text);
      font-size: 13px;
      text-align: left;
      text-decoration: none;
      cursor: pointer;
    }
    .lrow:last-child {
      border-bottom: 0;
    }
    .lrow .hint {
      margin-left: auto;
    }
    .lrow svg {
      color: var(--faint);
      flex: none;
    }
    .lrow:hover > span:first-child {
      text-decoration: underline;
      text-underline-offset: 3px;
    }
    .code {
      font-family: var(--mono);
      font-weight: 500;
      color: var(--accent);
    }
    .help .ghostbtn {
      justify-self: start;
    }
    .sc-sub {
      font-size: 12px;
      color: var(--dim);
      line-height: 1.5;
    }
    .sc-list {
      display: flex;
      flex-direction: column;
    }
    .sc-row {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 10px;
      align-items: start;
      padding: 8px 0;
      border-bottom: 1px solid var(--hair);
    }
    .sc-row:last-child {
      border-bottom: 0;
    }
    .sc-row .dot {
      margin-top: 5px;
    }
    .sc-name {
      font-weight: 500;
      font-size: 12.5px;
    }
    .sc-detail {
      font-family: var(--mono);
      font-size: 10.5px;
      color: var(--dim);
      margin-top: 2px;
      line-height: 1.45;
    }
    .sc-note {
      font-size: 11.5px;
      color: var(--dim);
      line-height: 1.5;
    }
    .sc-h {
      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--faint);
    }
    .dot.pending {
      animation: vc-blink 1s ease-in-out infinite;
    }
    @keyframes vc-blink {
      50% {
        opacity: 0.25;
      }
    }
    /* Vest updated: the site check takes the body (the status block, alerts and the footer stay) */
    .panel.gated .tabs,
    .panel.gated .support,
    .panel.gated .themeintro {
      display: none !important;
    }
    .gate {
      margin: 12px 14px;
      background: var(--s1);
      border: 1px solid var(--line);
    }
    .gate .rules {
      padding: 12px;
    }
    .gate-failed {
      background: var(--danger-dim);
      border-color: var(--danger-line);
    }
    .gate-h {
      font-weight: 600;
      font-size: 13.5px;
      color: var(--warn);
    }
    .gate-failed .gate-h {
      color: var(--danger);
    }
    .gate-clear .gate-h {
      color: var(--accent);
    }
    .report-note {
      width: 100%;
      background: var(--sunk);
      border: 1px solid var(--line);
      color: var(--text);
      font: inherit;
      font-size: 12px;
      padding: 8px 10px;
      resize: vertical;
      outline: none;
    }
    .report-note:focus {
      border-color: var(--accent-line);
    }

    /* Trade */
    .trade {
      padding: 12px 14px 14px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    /* Buy / Sell stay in view while the form scrolls */
    .tr-action {
      position: sticky;
      bottom: -14px;
      z-index: 2;
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin: 0 -14px;
      padding: 10px 14px 14px;
      background: var(--bg);
      border-top: 1px solid var(--line2);
    }
    .tr-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px;
    }
    .tr-sym {
      font-weight: 700;
      font-size: 20px;
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .tr-acct {
      font-family: var(--mono);
      font-size: 10px;
      color: var(--faint);
      margin-top: 4px;
    }
    .tr-pxw {
      text-align: right;
    }
    .tr-px {
      font-family: var(--mono);
      font-size: 18px;
      font-weight: 600;
    }
    .tr-pxl {
      font-size: 9px;
      color: var(--faint);
      letter-spacing: 0.1em;
      margin-top: 2px;
    }
    .tr-sec {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .tr-sec > .seg {
      align-self: flex-start;
    }
    .tr-lbl {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 9.5px;
      font-weight: 500;
      letter-spacing: 0.1em;
      color: var(--faint);
    }
    .tr-row {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11px;
      color: var(--dim);
    }
    .tr-in {
      width: 74px;
      background: var(--sunk);
      border: 1px solid var(--line2);
      color: var(--text);
      padding: 6px 8px;
      font-family: var(--mono);
      font-size: 12px;
      outline: none;
    }
    .tr-in:focus {
      border-color: var(--accent);
    }
    .tr-in.sm {
      width: 48px;
      padding: 4px 6px;
    }
    .tr-u {
      font-family: var(--mono);
      font-size: 10px;
      color: var(--faint);
    }
    .tr-calc {
      font-size: 10.5px;
      color: var(--dim);
      font-family: var(--mono);
    }
    .tr-right {
      margin-left: auto;
      color: var(--danger);
    }
    /* segmented controls: the picked one is lifted, not lime (lime means live / buy / gain) */
    .seg {
      display: inline-flex;
      gap: 2px;
      padding: 2px;
      background: var(--s1);
      border: 1px solid var(--hair);
      flex: none;
    }
    .seg button {
      background: none;
      border: none;
      color: var(--dim);
      font-size: 12px;
      font-weight: 500;
      padding: 5px 9px;
      cursor: pointer;
      white-space: nowrap;
    }
    .seg button:hover {
      color: var(--text);
    }
    .seg button.on {
      background: var(--s3);
      color: var(--text);
    }
    .tr-lh .seg button {
      padding: 2px 7px;
      font-size: 11px;
    }
    /* label + control rows */
    .tr-f {
      display: grid;
      grid-template-columns: 62px 1fr;
      align-items: center;
      gap: 8px;
    }
    .tr-k {
      font-family: var(--mono);
      font-size: 9.5px;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--faint);
    }
    .tr-f .tr-add {
      margin-left: auto;
    }
    .tr-ind {
      margin: -6px 0 0 70px;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .tr-ind:empty,
    .tr-ind:not(:has(:not(:empty))) {
      display: none;
    }
    .tr-row.tr-ind {
      flex-direction: row;
      margin-top: -4px;
    }
    /* margin and risk bars */
    .tr-lims {
      border: 1px solid var(--line2);
      background: var(--sunk);
      padding: 9px 10px 8px;
    }
    .tr-lb {
      display: grid;
      grid-template-columns: 50px 1fr;
      align-items: center;
      column-gap: 8px;
      margin-bottom: 6px;
    }
    .tr-lk {
      font-family: var(--mono);
      font-size: 9px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--faint);
    }
    .tr-track {
      position: relative;
      height: 6px;
      background: rgba(255, 255, 255, 0.07);
      overflow: hidden;
    }
    .tr-track i {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 0;
      background: var(--accent);
      transition: width 0.2s;
    }
    .tr-track i.pv {
      background: repeating-linear-gradient(135deg, rgba(200, 245, 66, 0.85) 0 3px, rgba(200, 245, 66, 0.25) 3px 6px);
    }
    .tr-track i.warn {
      background: var(--warn);
    }
    .tr-track i.pv.warn {
      background: repeating-linear-gradient(135deg, rgba(245, 185, 66, 0.9) 0 3px, rgba(245, 185, 66, 0.25) 3px 6px);
    }
    .tr-track i.hot {
      background: var(--danger);
    }
    .tr-track i.pv.hot {
      background: repeating-linear-gradient(135deg, rgba(255, 90, 79, 0.9) 0 3px, rgba(255, 90, 79, 0.25) 3px 6px);
    }
    .tr-lt {
      grid-column: 2;
      display: flex;
      justify-content: space-between;
      gap: 8px;
      font-family: var(--mono);
      font-size: 9.5px;
      color: var(--faint);
      margin-top: 4px;
      white-space: nowrap;
    }
    .tr-lt b {
      color: var(--text);
      font-weight: 600;
    }
    .tr-lt .ok {
      color: var(--accent);
    }
    .tr-lt .warn {
      color: var(--warn);
    }
    .tr-lt .hot {
      color: var(--danger);
    }
    .tr-tight {
      font-family: var(--mono);
      font-size: 9px;
      color: var(--faint);
      padding-left: 58px;
    }
    .tr-tight:empty {
      display: none;
    }
    /* the price ladder */
    .tr-lad {
      border: 1px solid var(--line2);
    }
    .tr-lh,
    .tr-lr {
      display: grid;
      grid-template-columns: 66px minmax(0, 1fr) 66px;
      align-items: center;
      padding: 4px 7px;
      font-family: var(--mono);
      font-size: 10.5px;
    }
    .tr-lh {
      font-size: 8.5px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--faint);
      background: var(--sunk);
      border-bottom: 1px solid var(--line2);
      padding: 5px 7px;
    }
    .tr-lh span:nth-child(2) {
      text-align: center;
      text-transform: none;
      letter-spacing: 0.04em;
    }
    .tr-lr {
      border-bottom: 1px dashed var(--line);
    }
    .tr-lr:last-child {
      border-bottom: none;
    }
    .tr-lr[hidden] {
      display: none;
    }
    .tr-sp,
    .tr-bp {
      color: var(--dim);
      white-space: nowrap;
    }
    .tr-bp,
    .tr-lh span:last-child {
      text-align: right;
    }
    .tr-mid {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      min-width: 0;
    }
    .tr-n {
      font-weight: 700;
      font-size: 10px;
      color: var(--accent);
      width: 30px;
    }
    .tr-n.sl {
      color: var(--danger);
    }
    .tr-in.tr-pt {
      width: 38px;
      padding: 3px 4px;
      font-size: 11px;
      text-align: right;
    }
    .tr-q {
      color: var(--faint);
      font-size: 9.5px;
      width: 34px;
      text-align: right;
      white-space: nowrap;
    }
    .tr-g {
      color: var(--accent);
      font-size: 10px;
      text-align: right;
      min-width: 50px;
      white-space: nowrap;
    }
    .tr-g.dn {
      color: var(--danger);
    }
    .tr-xs {
      width: 10px;
      flex: none;
    }
    .tr-en {
      background: rgba(255, 255, 255, 0.035);
    }
    .tr-lad.one .tr-lh,
    .tr-lad.one .tr-lr {
      grid-template-columns: 0 minmax(0, 1fr) 70px;
    }
    .tr-lad.one .tr-sp {
      visibility: hidden;
      overflow: hidden;
    }
    .tr-mk {
      background: var(--accent-dim);
    }
    .tr-mk .tr-mid,
    .tr-mk .tr-bp {
      color: var(--accent);
      font-weight: 600;
    }
    .tr-mk .tr-mid {
      font-size: 9.5px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .tr-en .tr-mid {
      color: var(--text);
      font-weight: 600;
      font-size: 9.5px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .tr-en .tr-sp,
    .tr-en .tr-bp {
      color: var(--text);
    }
    .tr-fl .tr-mid,
    .tr-ps .tr-mid {
      font-size: 9px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--faint);
    }
    .tr-fl .tr-sp,
    .tr-fl .tr-bp {
      color: var(--danger);
    }
    .tr-ps .tr-sp,
    .tr-ps .tr-bp {
      color: var(--accent);
    }
    .tr-x {
      background: none;
      border: none;
      color: var(--faint);
      cursor: pointer;
      width: 10px;
      font-size: 13px;
      line-height: 1;
      padding: 0;
    }
    .tr-x:hover {
      color: var(--danger);
    }
    .tr-x:disabled {
      opacity: 0.25;
      cursor: default;
    }
    .tr-add {
      align-self: flex-start;
      background: none;
      border: 1px dashed var(--line2);
      color: var(--dim);
      padding: 5px 10px;
      font-family: var(--mono);
      font-size: 10px;
      cursor: pointer;
    }
    .tr-add:hover {
      color: var(--text);
      border-color: var(--text);
    }
    .tr-be {
      margin-top: 2px;
    }
    .tr-sum {
      font-family: var(--mono);
      font-size: 10.5px;
      color: var(--dim);
      padding-top: 10px;
      border-top: 1px dashed var(--line);
    }
    .tr-sum b {
      color: var(--text);
      font-family: var(--mono);
      font-weight: 600;
    }
    .tr-err {
      font-size: 10.5px;
      color: var(--warn);
    }
    .tr-err:empty {
      display: none;
    }
    .tr-who {
      font-size: 10px;
      color: var(--faint);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .tr-who:empty {
      display: none;
    }
    .tr-warn {
      font-size: 10.5px;
      line-height: 1.5;
      color: var(--warn);
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    .tr-warn:empty {
      display: none;
    }
    .tr-lim {
      font-size: 10.5px;
      color: var(--faint);
      line-height: 1.45;
    }
    .tr-lim:empty {
      display: none;
    }
    .tr-lim.bad {
      color: var(--warn);
    }
    .tr-block {
      color: var(--danger);
      background: var(--danger-dim);
      border: 1px solid var(--danger-line);
      padding: 7px 9px;
    }
    .tr-fixes {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 6px;
    }
    .tr-block .tr-usemax {
      margin-left: 0;
    }
    .tr-usemax {
      cursor: pointer;
      font-family: var(--mono);
      font-size: 10px;
      font-weight: 600;
      padding: 2px 7px;
      margin-left: 4px;
      border: 1px solid var(--warn-line);
      background: var(--warn-dim);
      color: var(--warn);
    }
    .tr-preview b.tr-fail {
      color: var(--danger);
    }
    .tr-preview b.tr-pass {
      color: var(--accent);
    }
    .tr-note {
      font-family: var(--sans);
      margin-top: 2px;
    }
    .tr-go {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }
    .tr-buy,
    .tr-sell {
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      height: 42px;
      padding: 0 12px;
      color: var(--ink);
      transition: 0.12s;
      white-space: nowrap;
    }
    .tr-buy {
      border: 1px solid var(--accent);
      background: var(--accent);
    }
    .tr-sell {
      border: 1px solid var(--danger);
      background: var(--danger);
    }
    .tr-buy:hover:not(:disabled),
    .tr-sell:hover:not(:disabled) {
      filter: brightness(1.08);
    }
    .tr-buy:disabled,
    .tr-sell:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
    .tr-go:has(> [hidden]) {
      grid-template-columns: 1fr;
    }
    .tr-go[hidden] {
      display: none;
    }
    .tr-lbuy,
    .tr-lsell {
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      font-family: var(--mono);
      font-weight: 700;
      font-size: 11px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      padding: 8px;
      background: none;
      transition: 0.12s;
    }
    .tr-lbuy {
      border: 1px solid var(--accent);
      color: var(--accent);
    }
    .tr-lsell {
      border: 1px solid var(--danger);
      color: var(--danger);
    }
    .tr-lbuy:hover:not(:disabled) {
      background: var(--accent-dim);
    }
    .tr-lsell:hover:not(:disabled) {
      background: var(--danger-dim);
    }
    .tr-lbuy:disabled,
    .tr-lsell:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
    .tr-pick {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .tr-pick[hidden] {
      display: none;
    }
    .tr-pickbar {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 7px 9px;
      border: 1px dashed var(--accent);
      background: var(--accent-dim);
      color: var(--accent);
      font-family: var(--mono);
      font-size: 10px;
    }
    .tr-pickbar .bad {
      color: var(--warn);
    }
    .tr-esc {
      margin-left: auto;
      color: var(--faint);
    }
    .tr-pickrow {
      display: grid;
      grid-template-columns: 84px 1fr auto;
      gap: 6px;
    }
    .tr-pickrow .tr-in {
      width: auto;
    }
    .tr-place,
    .tr-pcancel {
      cursor: pointer;
      font-family: var(--mono);
      font-weight: 700;
      font-size: 10.5px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      padding: 8px 10px;
      white-space: nowrap;
    }
    .tr-place {
      border: 1px solid var(--accent);
      background: var(--accent);
      color: var(--ink);
    }
    .tr-place.short {
      border-color: var(--danger);
      background: var(--danger);
    }
    .tr-place:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }
    .tr-pcancel {
      border: 1px solid var(--line2);
      background: none;
      color: var(--dim);
    }
    .tr-pcancel:hover {
      color: var(--text);
      border-color: var(--text);
    }
    /* in a trade: the position, with Breakeven and Close, right above the add button */
    .tr-pos {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .tr-pos[hidden] {
      display: none;
    }
    .tr-posbar {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 7px 9px;
      border: 1px solid var(--line2);
      border-left: 2px solid var(--accent);
      background: var(--elev);
      font-family: var(--mono);
      font-size: 10.5px;
      white-space: nowrap;
      overflow: hidden;
    }
    .tr-side {
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 2px 5px;
      color: var(--ink);
      background: var(--accent);
    }
    .tr-side.short {
      background: var(--danger);
    }
    .tr-pq {
      font-weight: 600;
      color: var(--text);
    }
    .tr-pa {
      color: var(--faint);
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .tr-ppl {
      margin-left: auto;
      font-weight: 700;
      font-size: 12px;
    }
    .tr-ppl.pos {
      color: var(--accent);
    }
    .tr-ppl.neg {
      color: var(--danger);
    }
    .tr-addh {
      display: flex;
      justify-content: space-between;
      font-family: var(--mono);
      font-size: 9px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--faint);
      margin-top: 2px;
    }
    .tr-addh span + span {
      text-transform: none;
      letter-spacing: 0;
    }
    .tr-chips {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 5px;
    }
    .tr-chips:empty {
      display: none;
    }
    .tr-chip {
      cursor: pointer;
      border: 1px solid var(--line2);
      background: none;
      padding: 4px 0 3px;
      font-family: var(--mono);
      line-height: 1.25;
      color: var(--text);
    }
    .tr-chip b {
      display: block;
      font-size: 11px;
    }
    .tr-chip span {
      font-size: 9px;
      color: var(--faint);
      white-space: nowrap;
    }
    .tr-chip:hover:not(:disabled) {
      border-color: var(--accent);
    }
    .tr-chip.on {
      background: var(--accent);
      border-color: var(--accent);
      color: var(--ink);
    }
    .tr-chip.on span {
      color: var(--ink);
    }
    .tr-chip.no {
      border-style: dashed;
      opacity: 0.55;
      cursor: not-allowed;
    }
    .tr-chip.no b {
      color: var(--faint);
      text-decoration: line-through;
    }
    .tr-chip.no span {
      color: var(--danger);
    }
    .tr-addpv {
      font-family: var(--mono);
      font-size: 9.5px;
      color: var(--dim);
      border-left: 2px solid var(--accent);
      padding: 2px 0 2px 7px;
      line-height: 1.45;
    }
    .tr-redbtn {
      cursor: pointer;
      font-weight: 500;
      font-size: 13px;
      height: 36px;
      padding: 0 12px;
      border: 1px solid var(--line2);
      background: var(--elev);
      color: var(--text);
      transition: 0.12s;
    }
    .tr-redbtn:hover:not(:disabled) {
      border-color: var(--text);
    }
    .tr-redbtn:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
    .tr-bebtn,
    .tr-close {
      cursor: pointer;
      font-weight: 500;
      font-size: 13px;
      height: 36px;
      padding: 0 10px;
      transition: 0.12s;
      white-space: nowrap;
    }
    .tr-bebtn {
      border: 1px solid var(--line2);
      background: var(--s2);
      color: var(--text);
    }
    .tr-close {
      border: 1px solid var(--danger);
      background: var(--danger);
      color: var(--ink);
    }
    .tr-bebtn:hover:not(:disabled),
    .tr-close:hover:not(:disabled) {
      filter: brightness(1.08);
    }
    .tr-bebtn:disabled,
    .tr-close:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
    .tr-plans {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .tr-plans:empty {
      display: none;
    }
    .tr-plan {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      font-size: 10.5px;
      color: var(--dim);
      padding: 7px 9px;
      border: 1px solid var(--line2);
      border-left: 2px solid var(--accent);
      background: var(--elev);
    }
    .tr-plan b {
      color: var(--text);
    }
    .tr-preview {
      font-size: 10.5px;
      color: var(--faint);
      line-height: 1.5;
    }
    .tr-preview b {
      color: var(--dim);
      font-weight: 500;
    }
    .tr-pl {
      display: inline-block;
      width: 30px;
      color: var(--dim);
    }

    /* P&L: today on top, what you keep, each account (today, then equity and total since start), claims */
    .summary {
      padding: 14px;
      display: grid;
      gap: 12px;
      align-content: start;
    }
    .mono {
      font-family: var(--mono);
    }
    .sum-hero {
      position: relative;
    }
    .sum-share {
      position: absolute;
      right: 0;
      top: 2px;
    }
    .sum-total {
      font-size: 38px;
      font-weight: 600;
      line-height: 1;
      letter-spacing: -0.03em;
      font-stretch: condensed;
      padding-right: 84px;
    }
    .sum-total.pos {
      color: var(--accent);
    }
    .sum-total.neg {
      color: var(--danger);
    }
    .sum-day {
      font-size: 12px;
      color: var(--dim);
      margin-top: 8px;
      line-height: 1.5;
    }
    .sum-day .mono,
    .sum-sub .mono {
      color: var(--text);
    }
    .sum-sub {
      font-size: 11.5px;
      color: var(--faint);
      margin-top: -4px;
    }
    .sum-keep {
      background: var(--s1);
      padding: 10px 12px;
      font-size: 12px;
      color: var(--dim);
    }
    .sum-keep-v {
      font-family: var(--mono);
      font-weight: 600;
      color: var(--text);
    }
    .sum-list {
      display: flex;
      flex-direction: column;
    }
    .sum-row {
      display: grid;
      grid-template-columns: 24px minmax(0, 1fr) auto;
      gap: 10px;
      align-items: center;
      padding: 7px 0;
      border-bottom: 1px solid var(--hair);
    }
    .sum-row:last-child {
      border-bottom: 0;
    }
    .sum-left,
    .sum-right {
      display: flex;
      flex-direction: column;
      min-width: 0;
      gap: 2px;
    }
    .sum-right {
      align-items: flex-end;
    }
    .sum-name {
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .sum-k {
      font-size: 11px;
      color: var(--faint);
      font-family: var(--mono);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .sum-td {
      font-family: var(--mono);
      font-weight: 600;
      font-size: 13px;
    }
    .sum-td:empty {
      display: none;
    }
    .sum-tot {
      font-family: var(--mono);
      font-size: 10.5px;
      color: var(--faint);
      white-space: nowrap;
    }
    .sum-pnl {
      font-weight: 500;
    }
    .sum-row .pos,
    .sum-td.pos {
      color: var(--accent);
    }
    .sum-row .neg,
    .sum-td.neg {
      color: var(--danger);
    }
    .sum-tot .sum-pnl.pos,
    .sum-tot .sum-pnl.neg {
      color: var(--dim);
    }
    .sum-note {
      font-size: 11.5px;
      color: var(--faint);
      line-height: 1.5;
    }
    .claim {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 12px;
    }
    .claim-go {
      align-self: stretch;
      justify-content: center;
      height: 34px;
      font-size: 13px;
    }
    .claim-go:disabled {
      color: var(--faint);
      cursor: not-allowed;
    }
    .claim-h {
      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--faint);
    }
    .claim-row {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      padding: 5px 0;
      border-bottom: 1px solid var(--hair);
      font-family: var(--mono);
      font-size: 11px;
    }
    .claim-row .pos,
    .claim .pos {
      color: var(--accent);
    }
    .claim-row .neg,
    .claim .neg {
      color: var(--danger);
    }
    .claim-row .dim {
      color: var(--faint);
      text-align: right;
    }
    .claim-btns {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    button:focus-visible,
    .tr-in:focus-visible,
    .health:focus-visible,
    .logh:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 1px;
    }
    /* ── Trade tab, compact (v0.32.1) ── */
    .tr-top {
      align-items: center;
    }
    .tr-sym .chip {
      font-size: 9px;
      margin-left: 2px;
    }
    .tr-px {
      font-size: 18px;
    }
    .tr-lims {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      padding: 7px 9px 8px;
    }
    .tr-lims[hidden],
    .tr-pacts[hidden],
    .tr-setup[hidden],
    .tr-poscard[hidden] {
      display: none;
    }
    .tr-lims .tr-lb {
      display: block;
      margin: 0;
      min-width: 0;
    }
    .tr-ln {
      display: flex;
      align-items: baseline;
      gap: 6px;
      margin-bottom: 5px;
      white-space: nowrap;
    }
    .tr-ln .tr-lt {
      display: block;
      margin: 0 0 0 auto;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 9.5px;
    }
    .tr-lt b.warn {
      color: var(--warn);
    }
    .tr-lt b.hot {
      color: var(--danger);
    }
    .tr-tight,
    .tr-sum {
      display: none;
    }
    .tr-setup {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .tr-sizeq {
      margin-left: auto;
      font-family: var(--mono);
      font-size: 10.5px;
      color: var(--text);
      white-space: nowrap;
    }
    .tr-ind:has(.tr-calc:empty):has(.tr-lim.quiet),
    .tr-ind:has(.tr-calc:empty):has(.tr-lim:empty) {
      display: none;
    }
    .tr-lim.quiet {
      display: none;
    }
    .tr-be {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      margin-left: auto;
      font-family: var(--mono);
      font-size: 10px;
      color: var(--faint);
      white-space: nowrap;
    }
    .tr-be .tr-in.sm {
      width: 38px;
      padding: 3px 5px;
    }
    #tr-lhm {
      white-space: nowrap;
    }
    /* in a trade: the position card */
    .tr-poscard {
      border: 1px solid var(--line2);
      border-left: 2px solid var(--accent);
      background: var(--elev);
      padding: 10px 11px;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .tr-poscard .tr-posbar {
      border: none;
      background: none;
      padding: 0;
    }
    .tr-poscard .tr-pq {
      font-size: 14px;
      font-family: var(--sans);
    }
    .tr-poscard .tr-ppl {
      font-size: 19px;
    }
    .tr-pmeta {
      display: flex;
      justify-content: space-between;
      font-family: var(--mono);
      font-size: 10px;
      color: var(--faint);
    }
    .tr-lvls {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 7px;
    }
    .tr-lv {
      font-family: var(--mono);
      font-size: 9.5px;
      border: 1px solid var(--line2);
      padding: 2px 5px;
      white-space: nowrap;
    }
    .tr-lv b {
      font-weight: 600;
    }
    .tr-lv i {
      font-style: normal;
      color: var(--faint);
      margin-left: 4px;
    }
    .tr-lv.sl {
      color: var(--danger);
      border-color: var(--danger-line);
    }
    .tr-lv.tp {
      color: var(--accent);
      border-color: var(--accent-line);
    }
    .tr-lv.none {
      color: var(--warn);
    }
    .tr-prisk {
      margin-top: 8px;
    }
    .tr-pn {
      display: flex;
      justify-content: space-between;
      font-family: var(--mono);
      font-size: 9.5px;
      color: var(--faint);
      margin-bottom: 4px;
    }
    .tr-pn > span:first-child {
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    .tr-pn b {
      color: var(--text);
    }
    .tr-pn .ok {
      color: var(--accent);
    }
    .tr-pn .warn {
      color: var(--warn);
    }
    .tr-pacts {
      display: flex;
      flex-direction: column;
      gap: 7px;
    }
    .tr-addrow {
      display: grid;
      grid-template-columns: 34px 1fr;
      align-items: center;
      gap: 6px;
    }
    .tr-addrow .tr-chips {
      gap: 4px;
    }
    .tr-addpv {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      border-left: none;
      padding: 0;
      font-size: 10px;
      height: 15px;
      white-space: nowrap;
    }
    .tr-addpv span {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .tr-addpv .warn {
      color: var(--warn);
    }
    .tr-addpv .hot {
      color: var(--danger);
    }
    .tr-addpv b {
      color: var(--text);
    }
    /* ── Trade tab, Focus (v0.38): order switch, units, one-sided ladder, folds, the position card's bracket ── */
    .tr-f {
      grid-template-columns: 52px 1fr;
    }
    .tr-k {
      font-size: 10px;
      letter-spacing: 0.12em;
    }
    .tr-in {
      height: 30px;
      font-size: 12.5px;
    }
    .tr-in.tr-pt,
    .tr-in.sm {
      height: auto;
    }
    .tr-u {
      font-size: 10.5px;
      white-space: nowrap;
    }
    .tr-lad {
      border-color: var(--hair);
    }
    .tr-lh {
      background: var(--s1);
      border-bottom-color: var(--hair);
      padding: 3px 7px;
    }
    .tr-lad.side-long:not(.one) .tr-lr,
    .tr-lad.side-long:not(.one) .tr-lh,
    .tr-lad.side-short:not(.one) .tr-lr,
    .tr-lad.side-short:not(.one) .tr-lh {
      grid-template-columns: minmax(0, 1fr) 78px;
    }
    .tr-lad.side-long:not(.one) .tr-sp,
    .tr-lad.side-short:not(.one) .tr-bp {
      display: none;
    }
    .tr-lad.side-short:not(.one) .tr-sp {
      order: 3;
      text-align: right;
    }
    .tr-lad:not(.one) .tr-lh .tr-flip {
      order: 0;
      text-transform: none;
      letter-spacing: 0;
      font-family: var(--sans);
      font-size: 11.5px;
      font-weight: 500;
    }
    .tr-flip.long {
      color: var(--accent);
    }
    .tr-flip.short {
      color: var(--danger);
    }
    .tr-lad:not(.one) .tr-lh {
      grid-template-columns: auto minmax(0, 1fr) 78px !important;
      column-gap: 8px;
    }
    .tr-lad:not(.one) #tr-lhm {
      text-align: center;
    }
    .tr-lr {
      border-bottom-color: var(--hair);
      border-bottom-style: solid;
    }
    .tr-en {
      background: var(--s1);
    }
    .tr-fold {
      display: flex;
      align-items: center;
      gap: 10px;
      min-height: 30px;
      font-size: 12px;
      color: var(--dim);
      border-bottom: 1px solid var(--hair);
    }
    .tr-fold > span:first-child {
      flex: 1;
      min-width: 0;
    }
    .tr-foldbox {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
    .tr-foldbox[hidden] {
      display: none;
    }
    .tr-foldbox .tr-row {
      flex-wrap: wrap;
    }
    .tr-disc {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 34px;
      padding: 0;
      background: none;
      border: none;
      border-top: 1px solid var(--hair);
      border-bottom: 1px solid var(--hair);
      color: var(--dim);
      font-size: 12.5px;
      cursor: pointer;
    }
    .tr-disc:hover {
      color: var(--text);
    }
    .tr-disc svg {
      transition: transform 0.12s;
    }
    .tr-disc.open svg {
      transform: rotate(90deg);
    }
    .tr-addbox {
      display: flex;
      flex-direction: column;
      gap: 7px;
    }
    .tr-addbox[hidden] {
      display: none;
    }
    .tr-copies {
      font-size: 11.5px;
      color: var(--faint);
      text-align: center;
    }
    .tr-copies:empty {
      display: none;
    }
    .tr-who {
      text-align: center;
      font-size: 11.5px;
    }
    .tr-poscard {
      border: none;
      border-left: none;
      background: var(--s1);
      padding: 12px;
      gap: 6px;
    }
    .tr-lvls {
      display: none;
    }
    .tr-side {
      font-size: 10px;
      padding: 3px 6px;
    }
    .tr-poscard .tr-pq {
      font-size: 15px;
      font-weight: 600;
    }
    .tr-poscard .tr-ppl {
      font-size: 20px;
    }
    .tr-pmeta {
      font-size: 11px;
      color: var(--dim);
      gap: 10px;
      flex-wrap: wrap;
    }
    /* the bracket bar */
    .bk {
      position: relative;
      height: 46px;
      margin: 6px 4px 0;
    }
    .bk-tr,
    .bk-r,
    .bk-g,
    .bk-l {
      position: absolute;
      top: 12px;
      height: 4px;
    }
    .bk-tr {
      left: 0;
      right: 0;
      background: var(--s3);
    }
    .bk-r {
      background: var(--danger);
      opacity: 0.45;
    }
    .bk-g {
      background: var(--accent);
    }
    .bk-l {
      background: var(--danger);
    }
    .bk-t {
      position: absolute;
      top: 6px;
      width: 2px;
      height: 16px;
      margin-left: -1px;
      background: var(--dim);
    }
    .bk-t.bad {
      background: var(--danger);
    }
    .bk-t.up {
      background: var(--accent);
      opacity: 0.7;
    }
    .bk-now {
      position: absolute;
      top: 9px;
      width: 9px;
      height: 9px;
      margin-left: -4.5px;
      transform: rotate(45deg);
      background: var(--text);
      border: 2px solid var(--s1);
    }
    .bk-lb {
      position: absolute;
      top: 26px;
      transform: translateX(-50%);
      font-family: var(--mono);
      font-size: 9.5px;
      line-height: 1.25;
      color: var(--faint);
      text-align: center;
      white-space: nowrap;
    }
    .bk-lb b {
      display: block;
      font-weight: 600;
      color: var(--dim);
      letter-spacing: 0.06em;
    }
    .bk-lb b.bad {
      color: var(--danger);
    }
    .bk-lb b.up {
      color: var(--accent);
    }
    .bk-lb.l {
      transform: none;
      text-align: left;
    }
    .bk-lb.r {
      transform: translateX(-100%);
      text-align: right;
    }

    /* Share */
    .share {
      padding: 12px 14px 14px;
      display: grid;
      gap: 12px;
      align-content: start;
    }
    .prev {
      box-shadow: 0 0 0 1px var(--line);
      background: #0c0c0d;
      line-height: 0;
    }
    .prev canvas {
      display: block;
      width: 100%;
      height: auto;
    }
    .sh-name {
      width: 116px;
      flex: none;
    }
    .sh-btns {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 8px;
    }
    .sh-btns .ghostbtn {
      height: 34px;
    }
    .share .tabseg .tab {
      padding: 5px 4px;
    }
    .share .tabseg[hidden] {
      display: none;
    }
    #sh-sort {
      margin-top: -4px;
    }
    #sh-sort .tab {
      font-size: 12px;
      padding: 4px;
    }
    .sh-list {
      max-height: 210px;
      overflow: auto;
      display: grid;
      border: 1px solid var(--hair);
    }
    .sh-list[hidden] {
      display: none;
    }
    .sh-list .hint {
      padding: 10px;
    }
    .sh-tr {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr) auto auto;
      gap: 8px;
      align-items: center;
      min-height: 34px;
      padding: 0 10px;
      background: none;
      border: none;
      border-bottom: 1px solid var(--hair);
      color: var(--text);
      font-size: 12px;
      text-align: left;
      cursor: pointer;
    }
    .sh-tr:hover {
      background: var(--s1);
    }
    .sh-tr.on {
      background: var(--s3);
    }
    .sh-side {
      font-family: var(--mono);
      font-size: 9.5px;
      font-weight: 700;
      letter-spacing: 0.08em;
      padding: 2px 5px;
      color: var(--ink);
      background: var(--text);
    }
    .sh-side.long {
      background: var(--accent);
    }
    .sh-what {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .sh-what small {
      margin-left: 6px;
      font-family: var(--mono);
      color: var(--faint);
    }
    .sh-when {
      font-family: var(--mono);
      font-size: 11px;
      color: var(--faint);
      white-space: nowrap;
    }
    .sh-pnl {
      font-family: var(--mono);
      font-weight: 600;
      color: var(--accent);
      white-space: nowrap;
    }
    .armbtn.done {
      background: var(--accent-dim);
      border-color: var(--accent-line);
      color: var(--accent);
    }
    .collapsed .body,
    .collapsed .tabs,
    .collapsed .status,
    .collapsed .alertzone,
    .collapsed .logwrap,
    .collapsed .reportbar,
    .collapsed .grip,
    .collapsed .menu,
    .collapsed .scard,
    .collapsed .spacer,
    .collapsed .hdr .iconbtn,
    .collapsed .hdr .sep,
    .collapsed .hdr .title,
    .collapsed .brand svg + svg {
      display: none !important;
    }
    .panel.narrow .hdr .title,
    .panel.narrow .hdr .sep,
    .panel.narrow .codebtn .off {
      display: none;
    }
    /* a chart menu or dialog (drawn inside the chart's frame, which can't rise above the panel) is open over it */
    .panel.aside {
      opacity: 0;
      pointer-events: none;
    }
    /* minimised: the pill. The mark, the state, one number and one button; press and move drags it, a click opens it. */
    .panel.collapsed {
      width: auto;
      max-height: none;
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
    }
    .collapsed .hdr {
      height: 40px;
      gap: 10px;
      padding: 0 6px 0 12px;
      border-bottom: none;
      cursor: pointer;
    }
    .collapsed .pill {
      background: none;
      padding: 0;
      font-size: 13px;
      color: var(--text);
    }
    .collapsed .pill.warn {
      color: var(--warn);
    }
    .collapsed .pill.bad {
      color: var(--danger);
    }
    .collapsed .pillv:not(:empty) {
      display: block;
      font-family: var(--mono);
      font-size: 13px;
      font-weight: 600;
    }
    .pillv.pos {
      color: var(--accent);
    }
    .pillv.neg {
      color: var(--danger);
    }
    .collapsed .pillbtn:not([hidden]) {
      display: block;
      cursor: pointer;
      height: 28px;
      padding: 0 10px;
      font-size: 12px;
      font-weight: 500;
      border: 1px solid var(--line2);
      background: var(--s2);
      color: var(--text);
    }
    .collapsed .pillbtn:not([hidden]):hover {
      background: var(--s3);
    }
    .collapsed .pillbtn.flatten {
      background: none;
      border-color: var(--danger-line);
      color: var(--danger);
    }
    .collapsed .pillbtn.start {
      background: var(--accent);
      border-color: var(--accent);
      color: var(--ink);
      font-weight: 600;
    }
    .collapsed .hdr:focus-visible {
      outline: 1px solid var(--accent);
      outline-offset: -1px;
    }
    .panel.collapsed.attn-red {
      border-color: var(--danger-line);
    }
    .panel.collapsed.attn-amber {
      border-color: var(--warn-line);
    }
  `;

  // STRATUH logo (brand pack, 2026-10-09): the five-bar profile mark, each bar over a muted echo of itself with a soft
  // shadow where they overlap (lime gradient on the point of control), and the STRATUH wordmark (Instrument Sans 700,
  // width 75) outlined as one path by tools/wordmark.mjs, so nothing is downloaded. `h` is the mark's height in px.
  const LOG_OPEN_KEY = 'vc-log-open';
  const MARK_BARS = [
    [8, '#77777d', '#4a4a50'],
    [12.8, '#f0f0f1', '#8a8a90'],
    [17.6, 'poc', '#6b8e1a'],
    [12, '#f0f0f1', '#8a8a90'],
    [6.4, '#77777d', '#4a4a50'],
  ];
  const markSvg = (h, id = 'vc-poc') =>
    `<svg width="${+((h * 22.4) / 24).toFixed(2)}" height="${h}" viewBox="-2.8 0 22.4 24" aria-hidden="true"><defs>` +
    `<linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="#9fe02f"/><stop offset="1" stop-color="#e4ff7a"/></linearGradient>` +
    `<linearGradient id="${id}-s" x1="0" x2="1"><stop offset="0" stop-color="#000" stop-opacity="0"/><stop offset=".55" stop-color="#000" stop-opacity=".073"/><stop offset="1" stop-color="#000" stop-opacity=".22"/></linearGradient></defs>` +
    MARK_BARS.map(([w, fill, echo], i) => {
      const y = +(1 + i * 4.65).toFixed(2);
      return `<rect x="-1.8" y="${y}" width="3.8" height="3.4" fill="${echo}"/><rect x="-0.7" y="${y}" width="1.7" height="3.4" fill="url(#${id}-s)"/><rect x="1" y="${y}" width="${w}" height="3.4" fill="${fill === 'poc' ? `url(#${id})` : fill}"/>`;
    }).join('') +
    '</svg>';
  const WORDMARK_D =
    'M232 10Q129 10 76.5 -53.5Q24 -117 24 -230L157 -230Q157 -166 179 -133Q201 -100 238 -100Q265 -100 282 -117.5Q299 -135 299 -167Q299 -196 283 -224Q267 -252 231 -279L157 -335Q100 -379 74 -429.5Q48 -480 48 -541Q48 -601 70.5 -643.5Q93 -686 135.5 -708Q178 -730 237 -730Q329 -730 377 -675Q425 -620 425 -514L295 -514Q295 -570 279 -595Q263 -620 234 -620Q210 -620 195 -604.5Q180 -589 180 -557Q180 -526 196.5 -501Q213 -476 246 -450L319 -394Q381 -347 406 -294Q431 -241 431 -181Q431 -90 377.5 -40Q324 10 232 10ZM574 0L574 -610L440 -610L440 -720L850 -720L850 -610L716 -610L716 0ZM897 0L897 -720L1078 -720Q1140 -720 1186.5 -693Q1233 -666 1259 -618.5Q1285 -571 1285 -508Q1285 -446 1259.5 -399Q1234 -352 1187.5 -325.5Q1141 -299 1078 -299L1007 -299L1007 -401L1071 -401Q1106 -401 1126.5 -429Q1147 -457 1147 -506Q1147 -555 1126.5 -582.5Q1106 -610 1071 -610L1039 -610L1039 0ZM1159 0L1019 -374L1154 -374L1313 0ZM1317 0L1458 -720L1563 -720L1450 0ZM1640 0L1527 -720L1642 -720L1783 0ZM1415 -265L1685 -265L1685 -155L1415 -155ZM1883 0L1883 -610L1749 -610L1749 -720L2159 -720L2159 -610L2025 -610L2025 0ZM2406 10Q2306 10 2254.5 -48.5Q2203 -107 2203 -207L2203 -720L2345 -720L2345 -174Q2345 -138 2361.5 -120Q2378 -102 2406 -102Q2435 -102 2451 -120Q2467 -138 2467 -174L2467 -720L2609 -720L2609 -207Q2609 -107 2557.5 -48.5Q2506 10 2406 10ZM2695 0L2695 -720L2837 -720L2837 0ZM2967 0L2967 -720L3109 -720L3109 0ZM2767 -430L3037 -430L3037 -320L2767 -320Z';
  // `cap` is the capitals' height in px; the box takes the S's overshoot above and below
  const wordmarkSvg = (cap) =>
    `<svg width="${+((cap * 3159) / 720).toFixed(2)}" height="${+((cap * 755) / 720).toFixed(2)}" viewBox="0 -740 3159 755" aria-hidden="true"><path fill="#f0f0f1" d="${WORDMARK_D}"/></svg>`;
  // In a lockup the mark's bars stand 1.2 × the capitals (bars fill 22 of the mark's 24 units), centred on them
  const BRAND_CAP = 11;
  const BRAND_SVG = markSvg(+((BRAND_CAP * 1.2 * 24) / 22).toFixed(2)) + wordmarkSvg(BRAND_CAP);

  // Line icons (14 px, the text colour), drawn inline like the logo.
  const ico = (d, w = 14) =>
    `<svg width="${w}" height="${w}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  const ICON = {
    more: ico(
      '<circle cx="5" cy="12" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/><circle cx="19" cy="12" r="1.3" fill="currentColor"/>',
    ),
    min: ico('<path d="M6 12h12"/>'),
    left: ico('<path d="M15 5l-7 7 7 7"/>'),
    right: ico('<path d="M9 5l7 7-7 7"/>', 12),
    down: ico('<path d="M5 9l7 7 7-7"/>', 12),
    check: ico('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    dock: ico('<rect x="3" y="4" width="18" height="16"/><path d="M3 9h18"/>'),
    refresh: ico('<path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/>'),
    gear: ico('<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>'),
    help: ico(
      '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .8-1 1.5v.7M12 17h.01"/>',
    ),
    alert: ico('<path d="M12 3l9.5 17h-19z"/><path d="M12 10v4M12 17h.01"/>'),
    play: ico('<path d="M7 5l12 7-12 7z"/>', 12),
    pause: ico('<path d="M8 5v14M16 5v14"/>', 12),
    share: ico('<path d="M12 15V3M7 8l5-5 5 5"/><path d="M5 13v7h14v-7"/>', 13),
    ext: ico('<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v6H4V6h6"/>', 12),
    copy: ico('<rect x="8" y="8" width="12" height="12"/><path d="M16 8V4H4v12h4"/>', 13),
    save: ico('<path d="M12 4v11M7 10l5 5 5-5"/><path d="M5 20h14"/>', 13),
  };

  function buildPanel() {
    const host = document.createElement('div');
    host.id = 'vc-host';
    (document.body || document.documentElement).appendChild(host);
    const root = host.attachShadow({ mode: 'open' });
    root.innerHTML = `<style>${CSS}</style>
      <div class="panel">
        <div class="hdr">
          <button class="iconbtn back" data-act="back" title="Back" aria-label="Back">${ICON.left}</button><span class="sheett" id="sheett"></span>
          <span class="brand" role="img" aria-label="STRATUH">${BRAND_SVG}</span><span class="sep"></span><span class="title">Copier</span>
          <span class="spacer"></span>
          <span class="pill" id="armtag"><i class="pdot"></i><span class="ptext">Not copying</span></span>
          <span class="pillv" id="pillv"></span>
          <button class="pillbtn" data-act="pillgo" hidden></button>
          <button class="iconbtn" data-act="menu" title="More" aria-label="More" aria-haspopup="menu" aria-expanded="false">${ICON.more}</button>
          <button class="iconbtn" data-act="collapse" title="Minimise" aria-label="Minimise" aria-expanded="true">${ICON.min}</button>
        </div>
        <div class="menu" role="menu" hidden>
          <button class="mi" role="menuitemcheckbox" data-act="dock" aria-checked="true">${ICON.dock}<span class="mt">Docked on chart</span><span class="mk">${ICON.check}</span></button>
          <button class="mi" role="menuitem" data-act="refresh">${ICON.refresh}<span class="mt">Reload accounts</span></button>
          <div class="mhr"></div>
          <button class="mi" role="menuitem" data-tab="settings">${ICON.gear}<span class="mt">Settings</span></button>
          <button class="mi" role="menuitem" data-tab="support">${ICON.help}<span class="mt">Help and rules</span></button>
          <button class="mi" role="menuitem" data-act="report">${ICON.alert}<span class="mt">Report a problem</span></button>
        </div>
        <div class="status">
          <div class="say" id="st-say">Loading your accounts…</div>
          <div class="ssub" id="st-sub"></div>
          <div class="ctl">
            <button class="armbtn" data-act="arm" disabled>Start copying</button>
            <button class="dangerbtn" data-act="flatall" title="Instantly closes every position and cancels every order on every account. No confirmation. Copying keeps running.">Flatten all</button>
          </div>
        </div>
        <div class="tabs" role="tablist"><div class="tabseg">
          <button class="tab" role="tab" data-tab="accounts">Copier</button>
          <button class="tab" role="tab" data-tab="trade" title="Order panel: stop &amp; targets in points">Trade</button>
          <button class="tab" role="tab" data-tab="summary" title="Profit and loss per account">P&amp;L</button>
        </div></div>
        <div class="body"><div class="empty">Waiting for your Vest session…</div></div>
        <div class="alertzone">
          <div class="update" hidden></div>
          <div class="support update" hidden></div>
          <div class="themeintro update" hidden></div>
          <div class="alerts"></div>
        </div>
        <div class="logwrap">
          <div class="logh" role="button" tabindex="0" aria-expanded="false" title="Show or hide the activity log">
            <span class="caret">${ICON.right}</span><span class="logt">Activity</span><span class="loglast"></span><span class="loghbtns">
            <button class="iconbtn sm" data-act="dldiag" title="Download diagnostics (JSON) for troubleshooting">Diag</button>
            <button class="iconbtn sm" data-act="dllog" title="Download the activity log (CSV)">CSV</button>
            <button class="iconbtn sm" data-act="clearlog" title="Clear the activity log">Clear</button>
          </span></div>
          <div class="log" aria-live="polite"></div>
        </div>
        <div class="reportbar">
          <button class="codebtn" data-act="code" title="Click to copy the code" hidden>Use code <b>${SUPPORT_CODE}</b><span class="off"> · 5% off</span></button>
          <button class="health" data-act="health" title="Vest's build, this version and the API budget. Click for the status card and the site check." aria-label="Status" aria-expanded="false"><span class="dot gray"></span><span class="hsum">Starting…</span></button>
        </div>
        <div class="scard" hidden>
          <div class="kv"><span>Vest build</span><span class="htext">Starting…</span></div>
          <div class="kv"><span>Copier</span><span class="ver">v${VERSION}</span></div>
          <div class="kv" title="Vest allows 200 requests a second; this is what's left this second"><span>API this second</span><span class="rate" id="rate">—</span></div>
          <div class="kv" title="How long Vest took to answer a follower order (it leaves with the master's own order in fast mode)"><span>Vest's answer, slowest today</span><span id="slowest">—</span></div>
          <button class="ghostbtn" data-act="sitecheck">Run site check</button>
        </div>
        <div class="grip" title="Drag to resize"></div>
      </div>`;
    const panel = root.querySelector('.panel');
    const hdr = root.querySelector('.hdr');
    panel.addEventListener('pointerdown', () => (_pointerDown = true), true);
    window.addEventListener('pointerup', () => (_pointerDown = false), true);
    // Move by the header (or the whole pill when minimised): a press that moves DRAG_PX or more drags, kept inside the
    // chart when docked (else the window); a press that doesn't move on the pill opens it. Pointer capture keeps the drag
    // even when the cursor passes over the chart's frame.
    let drag = null;
    hdr.addEventListener('pointerdown', (e) => {
      if (
        e.button !== 0 ||
        e.target.closest('.pillbtn') ||
        (e.target.closest('.iconbtn') && !panel.classList.contains('collapsed'))
      )
        return;
      const r = panel.getBoundingClientRect();
      drag = { sx: e.clientX, sy: e.clientY, ox: r.left, oy: r.top, moved: false };
      try {
        hdr.setPointerCapture(e.pointerId);
      } catch {
        /* best effort: nothing to do if this fails */
      }
      e.preventDefault();
    });
    hdr.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const dx = e.clientX - drag.sx,
        dy = e.clientY - drag.sy;
      if (!drag.moved && Math.hypot(dx, dy) < DRAG_PX) return;
      drag.moved = _dragging = true;
      const B = placeBounds(),
        r = panel.getBoundingClientRect();
      panel.style.left = clampPx(drag.ox + dx, B.l, B.r - r.width) + 'px';
      panel.style.top = clampPx(drag.oy + dy, B.t, B.b - r.height) + 'px';
    });
    const endDrag = (e) => {
      if (!drag) return;
      const was = drag;
      drag = null;
      _dragging = false;
      if (was.moved) return rememberSpot();
      if (e.type === 'pointerup' && panel.classList.contains('collapsed')) setOpen(true); // a click on the pill
    };
    hdr.addEventListener('pointerup', endDrag);
    hdr.addEventListener('pointercancel', endDrag);
    hdr.addEventListener('keydown', (e) => {
      if (panel.classList.contains('collapsed') && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        setOpen(true);
      }
    });

    // Resize from the corner grip, inside the same bounds; the size is remembered.
    const grip = root.querySelector('.grip');
    let rs = null;
    grip.addEventListener('pointerdown', (e) => {
      const r = panel.getBoundingClientRect();
      rs = { w: r.width, h: r.height, sx: e.clientX, sy: e.clientY, left: r.left, top: r.top };
      try {
        grip.setPointerCapture(e.pointerId);
      } catch {
        /* best effort: nothing to do if this fails */
      }
      e.preventDefault();
      e.stopPropagation();
    });
    grip.addEventListener('pointermove', (e) => {
      if (!rs) return;
      const B = placeBounds();
      panel.style.width = clampPx(rs.w + e.clientX - rs.sx, PANEL_MIN_W, Math.min(PANEL_MAX_W, B.r - rs.left)) + 'px';
      panel.style.maxHeight = clampPx(rs.h + e.clientY - rs.sy, PANEL_MIN_H, B.b - rs.top) + 'px';
    });
    const endResize = () => {
      if (!rs) return;
      rs = null;
      store.set(SIZE_KEY, { w: panel.offsetWidth, h: parseInt(panel.style.maxHeight, 10) || 0 });
      place();
    };
    grip.addEventListener('pointerup', endResize);
    grip.addEventListener('pointercancel', endResize);

    const on = (sel, fn) => {
      root.querySelector(sel).onclick = fn;
    };
    // The ⋯ menu: docked / floating, reload, Settings, Help, Report a problem. Closes on a pick, Escape or a click elsewhere.
    const menu = root.querySelector('.menu'),
      menuBtn = root.querySelector('[data-act="menu"]');
    const setMenu = (open) => {
      menu.hidden = !open;
      menuBtn.setAttribute('aria-expanded', String(open));
    };
    menuBtn.onclick = () => setMenu(menu.hidden);
    menu.addEventListener('click', (e) => e.target.closest('.mi') && setMenu(false));
    root.addEventListener('pointerdown', (e) => {
      if (!menu.hidden && !e.target.closest('.menu, [data-act="menu"]')) setMenu(false);
      if (!scard.hidden && !e.target.closest('.scard, .health')) setCard(false);
    });
    root.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      setMenu(false);
      setCard(false);
    });
    on('[data-act="collapse"]', () => setOpen(false));
    on('[data-act="dock"]', () => toggleDock());
    on('[data-act="refresh"]', () => refresh());
    on('[data-act="report"]', () => openReport());
    on('[data-act="back"]', () => closeSheet());
    on('[data-act="pillgo"]', () => pillAction());
    root.querySelectorAll('[data-tab]').forEach((b) => (b.onclick = () => setView(b.dataset.tab)));
    // The status card (the dot at the end of the footer): Vest's build, this version, the API budget, and the site check.
    const scard = root.querySelector('.scard'),
      health = root.querySelector('.health');
    const setCard = (open) => {
      scard.hidden = !open;
      health.setAttribute('aria-expanded', String(open));
    };
    health.onclick = (e) => {
      e.stopPropagation(); // not a click on the log line
      setCard(scard.hidden);
    };
    on('[data-act="sitecheck"]', () => {
      setCard(false);
      if (siteGate()) return; // the check already fills the panel
      openSiteCheck();
    });
    on('[data-act="arm"]', () => (S.armed ? disarm() : arm()));
    on('[data-act="flatall"]', () => flattenAll()); // acts at once, no confirmation
    // The activity log folds to one line (the latest event); open or closed is remembered.
    const logwrap = root.querySelector('.logwrap'),
      logh = root.querySelector('.logh');
    const setLogOpen = (open) => {
      logwrap.classList.toggle('open', open);
      logh.setAttribute('aria-expanded', String(open));
      logh.querySelector('.caret').innerHTML = open ? ICON.down : ICON.right;
      store.set(LOG_OPEN_KEY, open);
    };
    setLogOpen(store.get(LOG_OPEN_KEY, false) === true);
    logh.onclick = (e) => !e.target.closest('button') && setLogOpen(!logwrap.classList.contains('open'));
    logh.onkeydown = (e) => {
      if (e.target === logh && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        setLogOpen(!logwrap.classList.contains('open'));
      }
    };
    on('[data-act="dldiag"]', () => downloadDiag());
    on('[data-act="dllog"]', () => downloadLog());
    on('[data-act="clearlog"]', () => clearLog());
    on('[data-act="code"]', () =>
      copySupportCode().then((ok) =>
        toast(ok ? `Code ${SUPPORT_CODE} copied: 5% off at Vest's checkout.` : `Code: ${SUPPORT_CODE}`),
      ),
    );
    // shown unless this account already uses the code
    root.querySelector('[data-act="code"]').hidden = (store.get(SUPPORT_KEY, null) || {}).answered === 'had-code';
    return root;
  }

  function renderHealth() {
    if (!_root) return;
    const h = healthState(),
      g = siteGate();
    const level = g === 'failed' ? 'red' : h.level;
    _root.querySelector('.health .dot').className = 'dot ' + level;
    _root.querySelector('.health').title =
      level === 'green'
        ? 'Status: all good. Click for the details and the site check.'
        : 'Status: Vest updated its site';
    _root.querySelector('.htext').textContent =
      g === 'failed' ? 'Vest changed — copying off' : g === 'waiting' ? 'Vest updated — check waiting' : h.text;
    _root.querySelector('.reportbar').classList.toggle('alert', level !== 'green');
    renderRate();
    renderHealthSum();
    renderUpdate();
    renderSupport();
    renderThemeIntro();
  }
  // The bottom bar's right side: this version · the API budget, or what Vest's update means for copying.
  function renderHealthSum() {
    const el = _root && _root.querySelector('.hsum');
    if (!el) return;
    const h = healthState(),
      g = siteGate(),
      { remaining, limit } = S.rate;
    const api = remaining == null ? '' : ` · API ${remaining}${limit ? '/' + limit : ''}`;
    el.textContent =
      g === 'failed'
        ? 'Vest changed — copying off'
        : g === 'waiting'
          ? 'Vest updated — check waiting'
          : h.changed
            ? h.text
            : `v${VERSION}${api}`; // Vest's build is on the status card
  }
  function renderRate() {
    if (!_root) return;
    const el = _root.querySelector('#rate');
    if (!el) return;
    const { remaining, limit } = S.rate;
    if (remaining == null) {
      el.textContent = '—';
      return;
    }
    el.textContent = `${remaining}${limit ? ' / ' + limit : ''}`;
    const frac = limit ? remaining / limit : 1;
    el.className = 'rate ' + (frac < 0.05 ? 'r-red' : frac < 0.2 ? 'r-amber' : 'r-ok');
    renderHealthSum();
  }

  // One view at a time. Tabs: accounts (Copier) · trade · summary (P&L). Sheets over the card, with a back arrow:
  // settings · support (Help) · site (the site check, from the status card) · share. Rules = the first-run terms.
  const currentView = () =>
    S.siteOpen
      ? 'site'
      : S.shareOpen
        ? 'share'
        : S.supportOpen
          ? 'support'
          : S.tradeOpen
            ? 'trade'
            : S.summaryOpen
              ? 'summary'
              : S.settingsOpen
                ? 'settings'
                : S.rulesOpen
                  ? 'rules'
                  : 'accounts';
  const SHEETS = { settings: 'Settings', support: 'Help', site: 'Site check', share: 'Share' };
  // ── Placement. Docked (the default), the panel lives on Vest's chart: just right of the chart's drawing toolbar and
  // below its top toolbar, kept inside the chart whatever resizes (the window, Vest's order book or positions area), its
  // spot remembered relative to the chart. Detached (the pin), it floats anywhere in the window. Minimised, it's a pill:
  // logo, COPIER and the state, with a dot when something needs you. On a page with no chart, it floats.
  // On the Trade tab it grows to the bottom of its bounds, so the whole order form fits without resizing by hand.
  const DOCK_KEY = 'vc-dock'; // { docked, open, at: {x,y} from the chart's corner, free: {x,y} in the window }
  const PANEL_MIN_W = 300,
    PANEL_MAX_W = 700,
    PANEL_MIN_H = 350; // header, the status block, tabs, an account row and the footer
  const HDR_FULL_W = 350; // narrower than this, the header leaves out the "COPIER" label
  const DOCK_INSET = 6, // px kept between the panel and the chart's edges (and the window's)
    DRAG_PX = 4, // a press on the pill that moves less than this is a click
    CHART_MIN_W = 400, // a frame smaller than this isn't Vest's chart
    CHART_MIN_H = 300,
    DOCK_MIN_W = 520, // a chart area narrower or shorter than this (Vest's stacked layout in a small window) can't hold
    DOCK_MIN_H = 440; // the panel without squashing it: it floats until the chart is big enough, then docks back
  let _dragging = false,
    _placeKey = '';
  const clampPx = (v, lo, hi) => Math.max(lo, Math.min(hi, v)) || lo;
  function loadDock() {
    const d = store.get(DOCK_KEY, {}) || {};
    const pt = (o) => (o && Number.isFinite(o.x) && Number.isFinite(o.y) ? { x: o.x, y: o.y } : null);
    S.dock = { docked: d.docked !== false, open: d.open !== false, at: pt(d.at), free: pt(d.free) };
  }
  const saveDock = () => store.set(DOCK_KEY, S.dock);
  // Vest's chart: the TradingView frame (found by its API, not by Vest's styling).
  let _chartEl = null;
  function chartFrame() {
    if (_chartEl && _chartEl.isConnected) return _chartEl;
    _chartEl = null;
    for (const f of document.querySelectorAll('iframe'))
      try {
        if (f.contentWindow && f.contentWindow.tradingViewApi) return (_chartEl = f);
      } catch {
        /* another site's frame: not the chart */
      }
    return null;
  }
  // The chart's drawing area in the window (right of its drawing toolbar, below its top toolbar), or null.
  function chartZone() {
    const f = chartFrame();
    if (!f) return null;
    const r = f.getBoundingClientRect();
    if (r.width < CHART_MIN_W || r.height < CHART_MIN_H) return null;
    let left = 52,
      top = 38; // TradingView's usual toolbar sizes, if they can't be measured
    try {
      const doc = f.contentDocument,
        l = doc && doc.querySelector('.layout__area--left'),
        t = doc && doc.querySelector('.layout__area--top');
      if (l) left = l.getBoundingClientRect().width;
      if (t) top = t.getBoundingClientRect().height;
    } catch {
      /* best effort: the usual sizes */
    }
    return { left: r.left + left, top: r.top + top, right: r.right, bottom: r.bottom };
  }
  // The chart area to dock into: none when floating, when there's no chart, or when the chart is too small to hold the
  // panel (then it floats on its own until the chart is big enough: `_autoFloat`).
  let _autoFloat = false;
  function dockZone() {
    const z = S.dock && S.dock.docked ? chartZone() : null;
    const small = !!z && (z.right - z.left < DOCK_MIN_W || z.bottom - z.top < DOCK_MIN_H);
    if (small !== _autoFloat) {
      _autoFloat = small;
      setTimeout(renderDock, 0);
    }
    return small ? null : z;
  }
  // Where the panel may be: inside the chart when docked on a page with one, else inside the window.
  function placeBounds() {
    const z = dockZone();
    const box = z || { left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight, window: true };
    return {
      l: box.left + DOCK_INSET,
      t: box.top + DOCK_INSET,
      r: box.right - DOCK_INSET,
      b: box.bottom - DOCK_INSET,
      zone: z,
    };
  }
  function place() {
    const panel = _root && _root.querySelector('.panel');
    if (!panel || !S.dock || _dragging) return;
    const B = placeBounds(),
      d = S.dock,
      open = !panel.classList.contains('collapsed');
    panel.classList.toggle('v-trade', !!S.tradeOpen);
    panel.classList.toggle('docked', !!B.zone);
    const saved = store.get(SIZE_KEY, null) || {};
    const w = open ? clampPx(saved.w || 368, PANEL_MIN_W, Math.min(PANEL_MAX_W, Math.max(PANEL_MIN_W, B.r - B.l))) : 0;
    panel.style.width = open ? w + 'px' : '';
    panel.classList.toggle('narrow', open && w < HDR_FULL_W); // the header drops "COPIER" so its buttons still fit
    const width = open ? w : panel.offsetWidth;
    // its spot: from the chart's corner when docked, else in the window (the first time: top right, as before)
    const want = B.zone
      ? { x: B.zone.left + (d.at ? d.at.x : DOCK_INSET), y: B.zone.top + (d.at ? d.at.y : DOCK_INSET) }
      : d.free || (_autoFloat ? { x: DOCK_INSET, y: DOCK_INSET } : { x: window.innerWidth - width - 16, y: 16 });
    const x = clampPx(want.x, B.l, B.r - width);
    let y;
    if (!open) {
      panel.style.maxHeight = '';
      y = clampPx(want.y, B.t, B.b - panel.offsetHeight);
    } else if (S.tradeOpen) {
      y = clampPx(want.y, B.t, B.b - Math.min(320, B.b - B.t));
      panel.style.maxHeight = Math.max(PANEL_MIN_H, B.b - y) + 'px';
    } else {
      panel.style.maxHeight = Math.max(PANEL_MIN_H, Math.min(saved.h || Infinity, B.b - B.t)) + 'px';
      y = clampPx(want.y, B.t, B.b - panel.offsetHeight);
    }
    Object.assign(panel.style, { left: x + 'px', top: y + 'px', right: 'auto' });
  }
  // After a drag: remember the spot, from the chart's corner when docked on it, else in the window.
  function rememberSpot() {
    const panel = _root && _root.querySelector('.panel');
    if (!panel) return;
    const r = panel.getBoundingClientRect(),
      z = dockZone();
    if (z) S.dock.at = { x: Math.round(r.left - z.left), y: Math.round(r.top - z.top) };
    else S.dock.free = { x: Math.round(r.left), y: Math.round(r.top) };
    saveDock();
    place();
  }
  function setOpen(open) {
    const panel = _root && _root.querySelector('.panel');
    if (!panel) return;
    panel.classList.toggle('collapsed', !open);
    S.dock.open = open;
    saveDock();
    const b = _root.querySelector('[data-act="collapse"]');
    b.setAttribute('aria-expanded', String(open));
    const hdr = _root.querySelector('.hdr');
    if (open) {
      hdr.removeAttribute('tabindex');
      hdr.removeAttribute('role');
    } else {
      hdr.setAttribute('tabindex', '0'); // the pill opens from the keyboard too
      hdr.setAttribute('role', 'button');
    }
    renderDock();
    place();
  }
  // The pin: docked on the chart, or floating anywhere. Undocking leaves the panel where it is; docking puts it back at
  // its spot on the chart.
  function toggleDock() {
    const panel = _root && _root.querySelector('.panel');
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    S.dock.docked = !S.dock.docked;
    if (!S.dock.docked) S.dock.free = { x: Math.round(r.left), y: Math.round(r.top) };
    saveDock();
    renderDock();
    place();
  }
  // The ⋯ menu's dock item, and the minimised pill: its state, one number (the open P&L while copying) and one button.
  // Red border when followers wait on Flatten / Keep, Vest changed something the copier needs or, copying, Vest's live
  // feed is lost; amber when Vest updated its site (the check runs by itself).
  const _bootAt = Date.now();
  function renderDock() {
    if (!_root || !S.dock) return;
    const pin = _root.querySelector('[data-act="dock"]');
    pin.setAttribute('aria-checked', String(S.dock.docked));
    pin.classList.toggle('on', S.dock.docked);
    pin.classList.toggle('auto', S.dock.docked && _autoFloat); // docked, but floating for now: the chart is too small
    pin.querySelector('.mt').textContent = !S.dock.docked
      ? 'Dock on the chart'
      : _autoFloat
        ? 'Docked (floating: chart too small)'
        : 'Docked on chart';
    pin.title = !S.dock.docked
      ? 'Floating anywhere: click to dock it on the chart'
      : _autoFloat
        ? 'The chart is too small to hold the panel, so it floats until the chart is bigger. Click to float it for good.'
        : 'Docked on the chart: click to float it anywhere';
    const orphans = !!(S.orphan && S.orphan.list.length),
      siteOff = siteGate() === 'failed';
    const red = orphans || siteOff || (S.armed && !feedLive() && Date.now() - _bootAt > FEED_QUIET_MS / 5);
    const amber = !red && healthState().changed;
    const panel = _root.querySelector('.panel');
    panel.classList.toggle('attn-red', red);
    panel.classList.toggle('attn-amber', amber);
    const collapsed = panel.classList.contains('collapsed');
    const p = pillState();
    // minimised: an orphan names the account; copying shows the open P&L across the accounts in the trade
    const tag = _root.querySelector('#armtag .ptext');
    if (collapsed && orphans) {
      const o = S.orphan.list[0];
      tag.textContent =
        S.orphan.list.length > 1
          ? `${S.orphan.list.length} followers need you`
          : `${o.label || accLabel(o.accountId)} needs you`;
    }
    let pnl = null;
    if (S.armed)
      for (const id of [S.master, ...S.followers]) {
        const r = S.byId[id];
        if (r && inTrade(id) && Number.isFinite(r.upnl)) pnl = (pnl || 0) + r.upnl;
      }
    const v = _root.querySelector('#pillv');
    v.textContent = collapsed && pnl !== null ? (pnl >= 0 ? '+' : '−') + money(Math.abs(pnl)) : '';
    v.className = 'pillv ' + (pnl === null ? '' : pnl >= 0 ? 'pos' : 'neg');
    const btn = _root.querySelector('[data-act="pillgo"]');
    btn.hidden = !collapsed || !p.act;
    btn.textContent = p.label || '';
    btn.className = 'pillbtn ' + (p.act || '');
    const hdr = _root.querySelector('.hdr');
    hdr.setAttribute('aria-label', collapsed ? `Open STRATUH Copier (${tag.textContent})` : '');
  }
  // Keep the panel in place as the page changes: the window resizing at once, and Vest's own layout (the chart, the
  // order book, the positions area, a page with no chart) checked a few times a second.
  // Vest's buy/sell marks on the chart: TradingView's "Hide marks on bars" (its `hideAllMarks` action), which Vest's
  // chart forgets on every load. With the setting on, it's switched on once per chart load; showing the marks again from
  // the chart's menu is respected until the next load.
  let _marksDone = null; // the chart frame the marks were handled for
  function hideChartMarks(f) {
    if (!S.hideMarks || !f || _marksDone === f) return;
    try {
      const chart = f.contentWindow.tradingViewApi.activeChart();
      if (typeof chart.getCheckableActionState !== 'function') return;
      const hidden = chart.getCheckableActionState('hideAllMarks');
      if (hidden == null) return; // not ready yet: tried again on the next check
      if (!hidden) chart.executeActionById('hideAllMarks');
      _marksDone = f;
    } catch {
      /* the chart isn't ready yet: tried again on the next check */
    }
  }
  // ── STRATUH theme for Vest (optional). Vest colours its whole page from CSS variables on its dark theme (`.dark`):
  // the copier sets them to STRATUH's tokens with one stylesheet, scoped to a class on <html>, so switching it off is
  // instant. Vest paints the chart separately, through TradingView: the copier applies STRATUH's chart colours the same
  // way (the chart frame's applyOverrides plus its --tv-color variables), once per chart load and after Vest re-applies
  // its own (it does on load and on a theme change). Only colours change; nothing is sent to Vest.
  const STRATUH = {
    bg: '#0c0c0d',
    raised: '#141416',
    raised2: '#1a1a1d',
    hover: '#1e1e22',
    active: '#26262b',
    line: 'rgba(255, 255, 255, 0.09)',
    line2: 'rgba(255, 255, 255, 0.18)',
    text: '#f0f0f1',
    muted: '#a1a1a8',
    dim: '#66666e',
    lime: '#c8f542',
    limeHi: '#e4ff7a',
    red: '#ff5a4f',
    amber: '#f5b942',
    blue: '#7ab8ff',
    grey: '#8a8a94',
  };
  function themeCss(down) {
    const T = STRATUH,
      red = down === 'red';
    const short = red ? T.red : T.grey,
      shortMuted = red ? 'rgba(255, 90, 79, 0.14)' : 'rgba(138, 138, 148, 0.16)';
    return `html.vc-stratuh.dark, html.vc-stratuh .dark {
      --primary: ${T.lime}; --primary-foreground: ${T.bg}; --primary-light: rgba(200, 245, 66, 0.1);
      --background: ${T.bg}; --foreground: ${T.text}; --foreground-secondary: ${T.muted}; --contrast: #ffffff;
      --secondary: ${T.raised2}; --secondary-foreground: ${T.text};
      --muted: ${T.raised2}; --muted-foreground: ${T.muted};
      --accent: ${T.raised2}; --accent-foreground: ${T.text};
      --card: ${T.raised}; --card-foreground: ${T.text}; --card-elevated: ${T.raised2};
      --popover: ${T.raised}; --popover-foreground: ${T.text};
      --destructive: ${T.red}; --destructive-foreground: ${T.bg};
      --input: ${T.raised}; --ring: ${T.lime}; --border: ${T.line}; --border-muted: rgba(255, 255, 255, 0.06);
      --long: ${T.lime}; --long-foreground: ${T.bg}; --long-muted: rgba(200, 245, 66, 0.14);
      --short: ${short}; --short-foreground: ${T.bg}; --short-muted: ${shortMuted};
      --warning: ${T.amber}; --info: ${T.blue}; --highlight: ${T.limeHi}; --yellow: ${T.limeHi};
      --surface: ${T.raised2}; --surface-foreground: ${T.text}; --surface-muted: ${T.dim}; --surface-hover: ${T.hover};
      --surface-active: ${T.active}; --surface-elevated: ${T.raised}; --surface-overlay: ${T.text};
      --chart-1: ${T.text}; --chart-2: ${T.lime}; --chart-3: ${T.grey}; --chart-4: ${T.limeHi}; --chart-5: ${T.dim};
      --radius: 0px; --radius-xs: 0px; --radius-sm: 0px; --radius-md: 0px; --radius-lg: 0px; --radius-xl: 0px;
      --radius-2xl: 0px; --radius-3xl: 0px;
    }
    html.vc-stratuh.dark ::selection { background: rgba(200, 245, 66, 0.25); }`;
  }
  // The chart: STRATUH's DeepCharts look, whatever the shorts colour: light and dark grey candles, onyx pane, faint grid.
  const THEME_UP = '#b4b4ba',
    THEME_DOWN = '#55555c',
    THEME_VOL_UP = '#4a4a52',
    THEME_VOL_DOWN = '#2c2c31';
  function themeChartOverrides() {
    const T = STRATUH,
      up = THEME_UP,
      dn = THEME_DOWN;
    const o = {
      'paneProperties.backgroundType': 'solid',
      'paneProperties.background': T.bg,
      'paneProperties.backgroundGradientStartColor': T.bg,
      'paneProperties.backgroundGradientEndColor': T.bg,
      'paneProperties.vertGridProperties.color': '#17171a',
      'paneProperties.horzGridProperties.color': '#17171a',
      'scalesProperties.lineColor': T.active,
      'scalesProperties.textColor': T.muted,
      'mainSeriesProperties.lineStyle.color': T.text,
      'mainSeriesProperties.areaStyle.linecolor': T.lime,
      'mainSeriesProperties.areaStyle.color1': 'rgba(200, 245, 66, 0.28)',
      'mainSeriesProperties.areaStyle.color2': 'rgba(200, 245, 66, 0)',
    };
    for (const k of ['candleStyle', 'hollowCandleStyle', 'haStyle']) {
      Object.assign(o, {
        [`mainSeriesProperties.${k}.upColor`]: up,
        [`mainSeriesProperties.${k}.downColor`]: dn,
        [`mainSeriesProperties.${k}.borderUpColor`]: up,
        [`mainSeriesProperties.${k}.borderDownColor`]: dn,
        [`mainSeriesProperties.${k}.wickUpColor`]: up,
        [`mainSeriesProperties.${k}.wickDownColor`]: dn,
      });
    }
    o['mainSeriesProperties.barStyle.upColor'] = up;
    o['mainSeriesProperties.barStyle.downColor'] = dn;
    return o;
  }
  // Vest's own dark chart colours, put back when the theme is switched off.
  const VEST_CHART = {
    'paneProperties.background': '#0F0F0F',
    'paneProperties.backgroundGradientStartColor': '#0F0F0F',
    'paneProperties.backgroundGradientEndColor': '#0F0F0F',
    'paneProperties.vertGridProperties.color': '#292929',
    'paneProperties.horzGridProperties.color': '#292929',
    'scalesProperties.lineColor': '#292929',
    'scalesProperties.textColor': '#F2F2F2',
    'mainSeriesProperties.candleStyle.upColor': '#00D98E',
    'mainSeriesProperties.candleStyle.downColor': '#E03737',
    'mainSeriesProperties.candleStyle.borderUpColor': '#00D98E',
    'mainSeriesProperties.candleStyle.borderDownColor': '#E03737',
    'mainSeriesProperties.candleStyle.wickUpColor': '#00D98E',
    'mainSeriesProperties.candleStyle.wickDownColor': '#E03737',
  };
  const themeTvCss = () => {
    const T = STRATUH;
    const vars = {
      '--tv-color-platform-background': T.bg,
      '--tv-color-pane-background': T.bg,
      '--tv-color-popup-background': T.raised,
      '--tv-color-popup-element-background-active': T.active,
      '--themed-color-drawer-backdrop': T.bg,
      '--themed-color-pane-bg': T.bg,
      '--themed-color-selection-bg': T.bg,
      '--themed-color-text': T.text,
      '--themed-color-background': T.raised,
    };
    return `:root, body { ${Object.entries(vars)
      .map(([k, v]) => `${k}: ${v} !important;`)
      .join(' ')} }`;
  };
  function applyTheme() {
    try {
      const html = document.documentElement;
      let st = document.getElementById('vc-theme');
      if (S.theme) {
        if (!st) {
          st = document.createElement('style');
          st.id = 'vc-theme';
          (document.head || html).appendChild(st);
        }
        const css = themeCss(S.themeDown);
        if (st.textContent !== css) st.textContent = css;
      }
      html.classList.toggle('vc-stratuh', !!S.theme);
    } catch {
      /* best effort: nothing to do if this fails */
    }
  }
  let _chartThemeTimers = []; // the chart follows on the next check after any change
  // The volume bars (Vest adds TradingView's Volume indicator): grey with the theme, Vest's green and red without.
  function themeVolume(f, on) {
    const colors = on ? [THEME_VOL_DOWN, THEME_VOL_UP] : ['#E03737', '#00D98E'];
    try {
      const chart = f.contentWindow.tradingViewApi.activeChart();
      for (const st of chart.getAllStudies() || [])
        if (st && st.name === 'Volume')
          chart.getStudyById(st.id).applyOverrides({ 'volume.color.0': colors[0], 'volume.color.1': colors[1] });
    } catch {
      /* best effort: nothing to do if this fails */
    }
  }
  function themeChart(f) {
    if (!f) return;
    const dark =
      document.documentElement.classList.contains('dark') || !!document.querySelector('body.dark, #root.dark');
    const key = [S.theme ? 'on' : 'off', dark].join('|'); // the shorts colour doesn't touch the chart
    if (f.__vcThemeKey === key) return;
    let ready = false;
    try {
      const chart = f.contentWindow.tradingViewApi.activeChart();
      ready =
        typeof chart.getCheckableActionState === 'function' && chart.getCheckableActionState('hideAllMarks') != null;
    } catch {
      /* not ready yet */
    }
    if (!ready || typeof f.contentWindow.applyOverrides !== 'function') return; // tried again on the next check
    if (!S.theme && !f.__vcThemeKey) {
      f.__vcThemeKey = key; // never themed: Vest's colours are already there
      return;
    }
    f.__vcThemeKey = key;
    const paint = () => {
      try {
        const doc = f.contentDocument;
        let st = doc.getElementById('vc-theme');
        if (S.theme && dark) {
          if (!st) {
            st = doc.createElement('style');
            st.id = 'vc-theme';
            (doc.head || doc.documentElement).appendChild(st);
          }
          st.textContent = themeTvCss();
          f.contentWindow.applyOverrides(themeChartOverrides());
          themeVolume(f, true);
        } else {
          if (st) st.remove();
          if (dark) {
            f.contentWindow.applyOverrides(VEST_CHART);
            themeVolume(f, false);
          }
        }
      } catch {
        /* best effort: nothing to do if this fails */
      }
    };
    // now, and again shortly after: Vest applies its own colours when the chart becomes ready and on a theme change
    _chartThemeTimers.forEach(clearTimeout);
    paint();
    _chartThemeTimers = [setTimeout(paint, 1500), setTimeout(paint, 4000)];
  }
  // Vest's session shading (pre-market, after-hours, overnight bands) is a chart indicator it adds named "Market
  // Sessions" (on load and when its own setting changes). With the setting on, it's removed whenever it shows up.
  const SESSIONS_STUDY = 'Market Sessions';
  function hideSessionShading(f) {
    if (!S.hideSessions || !f) return;
    try {
      const chart = f.contentWindow.tradingViewApi.activeChart();
      if (typeof chart.getAllStudies !== 'function') return;
      for (const st of chart.getAllStudies() || []) if (st && st.name === SESSIONS_STUDY) chart.removeEntity(st.id);
    } catch {
      /* the chart isn't ready yet: tried again on the next check */
    }
  }
  // TradingView draws its own menus and dialogs (timeframe, chart settings, indicators, symbol search) inside the chart's
  // frame, and nothing inside a frame can rise above the panel sitting over it. So while one of them overlaps the panel,
  // the panel steps aside (fades out, ignores the mouse) and comes back as soon as it closes.
  const TV_POPUPS =
    '[role="menu"], [role="dialog"], [role="listbox"], [data-name="popup-menu-container"], [data-name="menu-inner"]';
  function chartPopupOver(pr) {
    const f = chartFrame();
    let doc = null;
    try {
      doc = f && f.contentDocument;
    } catch {
      return false;
    }
    if (!doc || !doc.body) return false;
    const fr = f.getBoundingClientRect();
    for (const el of doc.querySelectorAll(TV_POPUPS)) {
      const r = el.getBoundingClientRect();
      if (r.width < 8 || r.height < 8) continue;
      const l = fr.left + r.left,
        t = fr.top + r.top;
      if (l < pr.right && l + r.width > pr.left && t < pr.bottom && t + r.height > pr.top) return true;
    }
    return false;
  }
  setInterval(() => {
    const panel = _root && _root.querySelector('.panel');
    if (!panel || _dragging) return;
    panel.classList.toggle('aside', chartPopupOver(panel.getBoundingClientRect())); // fading doesn't move it
  }, 200);
  // With the theme on: the Volume indicator Vest adds by itself when the chart loads (only on a chart with no other
  // indicators) is removed, once per chart load. One the trader adds afterwards from Indicators stays.
  const AUTO_VOLUME_MS = 20000; // Vest adds it as the chart becomes ready: looked for this long after the chart appears
  function removeAutoVolume(f) {
    if (!S.theme || !f || f.__vcVolumeDone) return;
    f.__vcSeenAt = f.__vcSeenAt || Date.now();
    try {
      const chart = f.contentWindow.tradingViewApi.activeChart();
      if (typeof chart.getAllStudies !== 'function') return;
      const vols = (chart.getAllStudies() || []).filter((st) => st && st.name === 'Volume');
      if (vols.length) {
        vols.forEach((st) => chart.removeEntity(st.id));
        f.__vcVolumeDone = true;
      } else if (Date.now() - f.__vcSeenAt > AUTO_VOLUME_MS) f.__vcVolumeDone = true; // Vest didn't add one
    } catch {
      /* the chart isn't ready yet: tried again on the next check */
    }
  }
  // The panel shows on Vest's Trade page only (with the setting on); the copier keeps running on every page. It shows
  // anywhere when something needs the trader: followers waiting on Flatten / Keep, or the first-run risk terms.
  const onTradePage = () => /^\/(trade(\/|$)|$)/.test(location.pathname); // Vest's root opens the Trade page
  function showOnThisPage() {
    const host = _root && _root.host;
    if (!host) return;
    const show = !S.tradeOnly || onTradePage() || !S.ack || !!(S.orphan && S.orphan.list.length);
    if ((host.style.display !== 'none') === show) return;
    host.style.display = show ? '' : 'none';
    if (show) place();
  }
  window.addEventListener('popstate', showOnThisPage);
  window.addEventListener('resize', () => place());
  setInterval(() => {
    if (!_root) return;
    showOnThisPage();
    if (_dragging) return;
    removeAutoVolume(chartFrame());
    hideChartMarks(chartFrame());
    hideSessionShading(chartFrame());
    themeChart(chartFrame());
    const f = chartFrame(),
      r = f && f.getBoundingClientRect();
    const key = r ? [r.left, r.top, r.width, r.height].map(Math.round).join() : 'none';
    if (key !== _placeKey) {
      _placeKey = key;
      place();
    }
  }, 400);

  function setView(v) {
    if (v !== 'trade') stopPick(true);
    if (['accounts', 'trade', 'summary'].includes(v)) S.lastTab = v;
    S.tradeOpen = v === 'trade';
    S.summaryOpen = v === 'summary';
    S.settingsOpen = v === 'settings';
    S.rulesOpen = v === 'rules';
    S.supportOpen = v === 'support';
    S.shareOpen = v === 'share';
    S.siteOpen = false;
    if (!S.tradeOpen) unwatchUnused(); // the price feed is only needed by the Trade tab and breakeven
    render();
  }
  // Back from a sheet (Settings, Help, the site check, Share) to the tab it was opened from.
  function closeSheet() {
    setView(S.lastTab || 'accounts');
  }
  // ⋯ › Report a problem: Help, scrolled to the report box.
  function openReport() {
    setView('support');
    const note = _root && _root.querySelector('#rp-note');
    if (!note) return;
    note.scrollIntoView({ block: 'center' });
    note.focus();
  }
  // The minimised pill's button: Flatten while copying, Open when something needs you, Start when ready.
  function pillAction() {
    const a = pillState().act;
    if (a === 'flatten') flattenAll();
    else if (a === 'start') arm();
    else setOpen(true);
  }

  // ── The status block: one sentence saying who copies to whom, a line saying what last happened, and the two buttons.
  // Vest's trading day starts at 20:00 ET (its daily loss resets then): "today" is since then.
  const ET_TZ = 'America/New_York';
  let _etFmt = null;
  function etOffset(d) {
    // ET's offset from UTC at the instant d, in ms (negative: behind UTC)
    _etFmt =
      _etFmt ||
      new Intl.DateTimeFormat('en-US', {
        timeZone: ET_TZ,
        hourCycle: 'h23',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      });
    const p = {};
    for (const x of _etFmt.formatToParts(d)) p[x.type] = +x.value;
    return Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second) - Math.floor(d.getTime() / 1000) * 1000;
  }
  function vestDayStart(now = Date.now()) {
    const off = etOffset(new Date(now)),
      et = new Date(now + off); // ET wall time, read with the UTC getters
    let wall = Date.UTC(et.getUTCFullYear(), et.getUTCMonth(), et.getUTCDate(), 20);
    if (et.getUTCHours() < 20) wall -= 86400000;
    return wall - etOffset(new Date(wall - off));
  }
  // Follower actions today (from the diagnostics record): done, missed, and the latest batch. `complete` is false when the
  // record no longer reaches back to the day's start (it keeps the latest 2,000 events), so the counts would be short.
  const COPY_TYPES = {
    open: 'filled',
    append: 'added',
    reduce: 'reduced',
    close: 'closed',
    cancel: 'cancelled',
    bracket: 'moved',
  };
  function dayStats() {
    const start = vestDayStart(),
      recs = S.diag.filter((d) => COPY_TYPES[d.type] && d.outcome !== 'skipped' && Date.parse(d.t) >= start);
    const oldest = S.diag.length ? Date.parse(S.diag[0].t) : 0;
    const out = {
      copies: recs.filter((d) => d.met === true).length,
      missed: recs.filter((d) => d.met === false).length,
      complete: S.diag.length < DIAG_MAX || oldest < start,
      last: null,
      slowest: Math.max(0, ...recs.map((d) => +(d.sendMs || d.ms) || 0)),
    };
    const lastRec = recs[recs.length - 1];
    if (lastRec) {
      const at = Date.parse(lastRec.t);
      const batch = recs.filter((d) => d.type === lastRec.type && Math.abs(Date.parse(d.t) - at) < 3000);
      out.last = {
        at,
        verb: lastRec.type === 'open' && lastRec.expected === 'rest' ? 'placed' : COPY_TYPES[lastRec.type],
        done: batch.filter((d) => d.met === true).length,
        of: batch.length,
        pending: batch.some((d) => d.met == null),
      };
    }
    return out;
  }
  const hhmm = (t) => new Date(t).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  // The header pill (and the minimised pill's button): what state the copier is in, and the one thing to do from the pill.
  function pillState() {
    const gate = siteGate(),
      orphans = !!(S.orphan && S.orphan.list.length);
    if (gate === 'failed') return { cls: 'bad', text: 'Check failed', act: 'open', label: 'Open' };
    if (orphans) return { cls: 'warn', text: 'Needs you', act: 'open', label: 'Open' };
    if (S.armed) return { cls: 'live', text: 'Copying', act: 'flatten', label: 'Flatten' };
    if (gate && gate !== 'clear') return { cls: '', text: 'Checking Vest', act: 'open', label: 'Open' };
    if (S.arming) return { cls: '', text: 'Starting…', act: null };
    const ready = S.ack && S.master && S.followers.size && !S.flattening;
    return { cls: '', text: 'Not copying', act: ready ? 'start' : 'open', label: ready ? 'Start' : 'Open' };
  }
  function renderStatus(gate) {
    const say = _root.querySelector('#st-say'),
      sub = _root.querySelector('#st-sub');
    const m = S.master && S.byId[S.master],
      nf = S.followers.size;
    const who = m ? `<em>${esc(m.label)}</em> to ${nf} follower${nf === 1 ? '' : 's'}` : '';
    const st = dayStats(),
      opts = [S.fast && 'fast mode', S.capFit && 'cap-to-fit'].filter(Boolean);
    let sayHtml, subTxt;
    if (gate === 'failed') {
      sayHtml = "Copying is off until Vest's site passes the check.";
      subTxt = 'Your accounts and positions are untouched';
    } else if (gate && gate !== 'clear') {
      sayHtml = "Checking Vest's update…";
      subTxt = 'Copying waits until the check passes';
    } else if (!Object.keys(S.byId).length) {
      sayHtml = 'Loading your accounts…';
      subTxt = '';
    } else if (S.armed || S.arming) {
      sayHtml = `${S.arming ? 'Starting to copy' : 'Copying'} ${who}`;
      const l = st.last;
      subTxt = l
        ? `Last copy ${l.pending ? 'sending…' : `${l.done} of ${l.of} ${l.verb}`} · ${hhmm(l.at)}`
        : "Waiting for the master's next order";
    } else if (m && nf) {
      sayHtml = `Ready to copy ${who}`;
      subTxt =
        st.copies || st.missed
          ? `${st.copies}${st.complete ? '' : '+'} copies today, ${st.missed} missed`
          : 'Nothing copied yet today';
    } else if (m) {
      sayHtml = `Pick followers for <em>${esc(m.label)}</em>`;
      subTxt = 'Tick the accounts that copy it';
    } else {
      sayHtml = 'Pick a master and followers';
      subTxt = 'The master is the account you trade on';
    }
    if (subTxt && opts.length) subTxt += ' · ' + opts.join(' · ');
    if (say.dataset.html !== sayHtml) say.innerHTML = say.dataset.html = sayHtml;
    if (sub.textContent !== subTxt) sub.textContent = subTxt;
    const armBtn = _root.querySelector('[data-act="arm"]');
    // Stop copying is never blocked; Start needs a master, a follower and no gate (from any view).
    armBtn.disabled = S.armed ? false : S.arming || !!gate || !(S.master && S.followers.size);
    const label = S.armed ? 'Stop copying' : S.arming ? 'Starting…' : 'Start copying';
    if (armBtn.dataset.label !== label) {
      armBtn.dataset.label = label;
      armBtn.innerHTML = `${S.armed ? ICON.pause : ICON.play}<span>${label}</span>`;
    }
    armBtn.classList.toggle('armed', S.armed);
    const flat = _root.querySelector('[data-act="flatall"]');
    flat.disabled = S.flattening;
    flat.textContent = S.flattening ? 'Flattening…' : 'Flatten all';
    const p = pillState(),
      tag = _root.querySelector('#armtag');
    tag.className = 'pill ' + p.cls;
    tag.querySelector('.ptext').textContent = p.text;
    const slow = _root.querySelector('#slowest');
    if (slow) slow.textContent = st.slowest ? `${st.slowest} ms` : '—';
  }

  // The Copier tab: the master, its followers and the accounts left out, one line each (room to the floor and a dot);
  // the picks change in Edit, only while not copying. With nothing picked yet, it opens in Edit.
  const NEAR_FLOOR = 0.3; // less than 30% of an account's drawdown allowance left: flagged (it still copies)
  const roomFrac = (r) => {
    const allow = r.size - r.floor;
    return allow > 0 && !isNaN(r.room) ? Math.max(0, Math.min(1, r.room / allow)) : NaN;
  };
  const inTrade = (id) => {
    const st = S.acctState[id];
    return !!(st && st.positions && st.positions.length);
  };
  // Whole dollars from $1,000 up (rounded down, so room is never overstated); cents below, where they matter.
  const moneyShort = (n) =>
    isNaN(n)
      ? '—'
      : Math.abs(n) >= 1000
        ? (n < 0 ? '−' : '') + '$' + Math.floor(Math.abs(n)).toLocaleString('en-US')
        : money(n);
  // An account row's tooltip: balance, the floor that applies (the daily one when it's higher) and the room to it.
  const acctTip = (r) =>
    `Balance ${money(r.equity)} · ${r.dailyFloor > r.floor ? 'daily floor' : 'floor'} ${money(floorOf(r))} · ${money(r.room)} to go` +
    (r.canTrade === false ? ' · trading disabled' : '');
  function renderCopier(body) {
    const rows = Object.values(S.byId);
    if (!rows.length) {
      body.innerHTML = `<div class="empty">No active accounts found.</div>`;
      return;
    }
    if (S.armed || S.arming) S.editing = false;
    else if (!S.master || !S.followers.size) S.editing = true; // nothing to copy yet: pick first
    if (S.editing) return renderEdit(body);
    const m = S.byId[S.master];
    const row = (r, kind, note = '') => {
      const f = roomFrac(r),
        near = f < NEAR_FLOOR;
      const live = S.armed && kind !== 'out' && inTrade(r.id);
      const dot = r.canTrade === false ? 'bad' : kind === 'out' ? 'hollow' : live ? 'live' : '';
      const dotTip =
        r.canTrade === false ? 'Trading disabled' : kind === 'out' ? 'Not copied' : live ? 'In a trade' : 'Flat';
      const tag = r.chip === 'Funded' ? '' : `<small>${esc(r.chip)}</small>`;
      const warn = near && kind !== 'out' && !note ? `Only ${moneyShort(r.room)} to its floor.` : note;
      return `<div class="acct${kind === 'm' ? ' master' : ''}${kind === 'out' ? ' off' : ''}" title="${esc(acctTip(r))}">
          <span class="tile${kind === 'm' ? ' m' : ''}">${esc(acctNum(r.label))}</span><span class="nm">${esc(r.label)}${tag}</span>
          <span class="room"><span class="${near ? 'amber' : ''}">${moneyShort(r.room)}</span><span class="meter"><i class="${near ? 'warn' : ''}" style="width:${isNaN(f) ? 0 : Math.round(f * 100)}%"></i></span></span>
          <i class="sdot ${dot}" title="${dotTip}"></i>${warn ? `<span class="note${kind === 'out' ? ' dim' : ''}">${esc(warn)}</span>` : ''}</div>`;
    };
    const fl = rows.filter((r) => S.followers.has(r.id)).sort((a, b) => a.order - b.order);
    const out = rows.filter((r) => r.id !== S.master && !S.followers.has(r.id)).sort((a, b) => a.order - b.order);
    const why = (r) =>
      r.canTrade === false
        ? 'Trading is disabled on this account.'
        : !S.capFit && m && r.groupKey !== m.groupKey
          ? 'A different size: copying it needs Cap-to-fit.'
          : 'Not picked.';
    const locked = S.armed || S.arming;
    body.innerHTML = `<div class="cop">
        <div class="sech"><span class="eyebrow">Master</span><span class="eyebrow">Room to floor</span></div>
        <div class="accts">${row(m, 'm')}</div>
        <div class="sech"><span class="eyebrow">Followers · ${fl.length} ${S.armed ? 'copying' : 'ready'}</span>${
          locked
            ? '<span class="hint">Edit when not copying</span>'
            : '<button class="lnk" data-act="edit">Edit</button>'
        }</div>
        <div class="accts">${fl.map((r) => row(r, 'f')).join('')}</div>
        ${out.length ? `<div class="sech"><span class="eyebrow">Left out · ${out.length}</span></div><div class="accts">${out.map((r) => row(r, 'out', why(r))).join('')}</div>` : ''}
        <div class="legend"><span><i class="sdot live"></i>in a trade</span><span><i class="sdot"></i>flat</span><span><i class="sdot hollow"></i>not copied</span></div>
      </div>`;
    const ed = body.querySelector('[data-act="edit"]');
    if (ed)
      ed.onclick = () => {
        S.editing = true;
        render();
      };
  }
  // Edit: a radio for the master and a box per follower, by account size, plus the sizing switch. Only while not copying.
  function renderEdit(body) {
    const m = S.master && S.byId[S.master];
    const groups = m ? [...S.groups].sort((a, b) => (b.key === m.groupKey) - (a.key === m.groupKey)) : S.groups;
    const n = Object.keys(S.byId).length;
    const row = (r, masterGroup) => {
      const isM = S.master === r.id,
        isF = S.followers.has(r.id);
      const fDisabled = !S.master || isM || (!S.capFit && !masterGroup) || r.canTrade === false || S.armed;
      const label = esc(r.label),
        id = esc(r.id),
        f = roomFrac(r);
      const note =
        r.canTrade === false
          ? 'Trading is disabled on this account.'
          : !isM && f < NEAR_FLOOR
            ? `Only ${moneyShort(r.room)} to its floor.${isF ? '' : ' Tick to copy it anyway.'}`
            : '';
      return `<div class="acct ed${isM ? ' master' : ''}" title="${esc(acctTip(r))}">
          <span class="tile${isM ? ' m' : ''}">${esc(acctNum(r.label))}</span><span class="nm">${label}${r.chip === 'Funded' ? '' : `<small>${esc(r.chip)}</small>`}</span>
          <button class="rd${isM ? ' on' : ''}" data-m="${id}" role="radio" aria-checked="${isM}" aria-label="Make ${label} the master"
            title="Make ${label} the master" ${r.canTrade === false || S.armed ? 'disabled' : ''}></button>
          ${
            isM
              ? '<span class="ckm">—</span>'
              : `<button class="ck${isF ? ' on' : ''}" data-f="${id}" role="checkbox" aria-checked="${isF}" aria-label="Copy the master to ${label}"
            title="${!S.master ? 'Pick a master first' : !S.capFit && !masterGroup ? 'A different size: needs Cap-to-fit' : `Copy the master to ${label}`}" ${fDisabled ? 'disabled' : ''}>${ICON.check}</button>`
          }${note ? `<span class="note">${esc(note)}</span>` : ''}</div>`;
    };
    body.innerHTML = `<div class="cop">
        <div class="sech"><span class="h">Choose accounts</span>${
          S.master && S.followers.size ? '<button class="armbtn sm" data-act="edit-done">Done</button>' : ''
        }</div>
        <div class="acct ed head"><span></span><span class="eyebrow">${n} account${n === 1 ? '' : 's'}</span><span class="eyebrow">Master</span><span class="eyebrow">Copy</span></div>
        ${groups
          .map((g) => {
            const masterGroup = !!m && m.groupKey === g.key;
            return `${S.groups.length > 1 ? `<div class="sech"><span class="eyebrow">${moneyShort(g.size)} · ${esc(g.type)}</span></div>` : ''}<div class="accts">${g.rows.map((r) => row(r, masterGroup)).join('')}</div>`;
          })
          .join('')}
        <div class="sech"><span class="eyebrow">Sizing</span><div class="seg" data-sizing><button data-v="1" class="${S.capFit ? '' : 'on'}">1:1</button><button data-v="cap" class="${S.capFit ? 'on' : ''}">Cap-to-fit</button></div></div>
        <div class="hint">${
          S.capFit
            ? 'Cap-to-fit: each follower is sized to its own equity, so different sizes can copy.'
            : '1:1: followers copy the exact size, so they must be the same size and type as the master.'
        } Followers are set to the master's leverage when you start.</div>
      </div>`;
    body.querySelectorAll('[data-m]').forEach((b) => (b.onclick = () => setMaster(b.getAttribute('data-m'))));
    body.querySelectorAll('[data-f]').forEach((b) => (b.onclick = () => toggleFollower(b.getAttribute('data-f'))));
    body
      .querySelectorAll('[data-sizing] button')
      .forEach((b) => (b.onclick = () => (b.dataset.v === 'cap') !== S.capFit && toggleCapFit()));
    const done = body.querySelector('[data-act="edit-done"]');
    if (done)
      done.onclick = () => {
        S.editing = false;
        render();
      };
  }

  function render() {
    if (!_root) return;
    renderHealth();
    const panel = _root.querySelector('.panel'),
      body = _root.querySelector('.body');
    const gate = siteGate(); // Vest updated: the check takes the body
    panel.classList.toggle('gated', !!gate);
    const view = currentView(),
      sheet = !gate && SHEETS[view] ? view : null;
    panel.classList.toggle('sheet', !!sheet);
    panel.classList.toggle('first', !gate && view === 'rules' && !S.ack);
    _root.querySelector('#sheett').textContent = sheet ? SHEETS[sheet] : '';
    // the Trade, Share, Help and first-run views keep their DOM between renders (typing, a ticked box)
    const keeps = !gate && (S.tradeOpen || S.supportOpen || S.shareOpen || (S.rulesOpen && !S.settingsOpen && !S.ack));
    if (!keeps || S.siteOpen) body.dataset.view = '';
    if (!gate && !S.siteOpen) delete body.dataset.check;
    if (gate) renderGate(body, gate);
    else if (S.siteOpen) renderSiteCheck(body);
    else if (S.shareOpen) renderShare(body);
    else if (S.supportOpen) renderSupportTab(body);
    else if (S.tradeOpen) renderTrade(body);
    else if (S.settingsOpen) renderSettings(body);
    else if (S.rulesOpen) renderRules(body);
    else if (S.summaryOpen) renderSummary(body);
    else renderCopier(body);
    renderStatus(gate);
    _root.querySelectorAll('.tab[data-tab]').forEach((b) => {
      b.classList.toggle('on', b.dataset.tab === view);
      b.setAttribute('aria-selected', String(b.dataset.tab === view));
    });
    renderLog();
    place();
    renderDock();
    showOnThisPage();
  }

  // The check list: required checks, then the extras (which never block copying).
  function siteRows(site) {
    const rows =
      site && site.results.length
        ? site.results
        : SITE_CHECKS.map(([key, name, tier]) => ({ key, name, tier, status: 'pending', detail: '' }));
    const shown = site && site.shown != null ? site.shown : rows.length; // rows not revealed yet still wait
    const dot = { pass: 'green', warn: 'amber', fail: 'red', skip: 'gray', pending: 'gray' };
    const row = (r) => {
      const i = rows.indexOf(r),
        active = i === shown && site && site.running,
        status = i < shown ? r.status : 'pending',
        detail = i < shown ? r.detail : active ? 'Checking…' : '';
      return `
          <div class="sc-row${active ? ' active' : ''}"><span class="dot ${dot[status]}${active ? ' pending' : ''}"></span>
            <div><div class="sc-name">${esc(r.name)}</div><div class="sc-detail">${esc(detail || '')}</div></div></div>`;
    };
    return `<div class="sc-list">${rows
      .filter((r) => r.tier === 'must')
      .map(row)
      .join('')}</div>
        <div class="sc-h">Extras · never block copying</div>
        <div class="sc-list">${rows
          .filter((r) => r.tier !== 'must')
          .map(row)
          .join('')}</div>`;
  }
  // While the check runs, keep the row being checked in view; on a new screen (the verdict), back to the top.
  function followCheck(body, top, screen) {
    if (body.dataset.check !== screen) {
      body.dataset.check = screen;
      body.scrollTop = 0;
      return;
    }
    body.scrollTop = top; // the list was just redrawn: stay where it was
    const el = body.querySelector('.sc-row.active');
    if (!el) return;
    const r = el.getBoundingClientRect(),
      b = body.getBoundingClientRect();
    if (r.bottom > b.bottom - 8) body.scrollTop += r.bottom - b.bottom + 24;
    else if (r.top < b.top) body.scrollTop -= b.top - r.top + 8;
  }
  // The site check from the status bar, on an accepted build: the latest results, Re-run and Close.
  function renderSiteCheck(body) {
    const site = S.site,
      top = body.scrollTop;
    body.innerHTML = `
      <div class="rules">
        <div class="sc-sub">Vest build ${esc(fingerprint() || 'unknown')}. Runs by itself whenever Vest updates its site. Read-only: nothing is sent to your accounts.</div>
        ${siteRows(site)}
        <div class="rules-btns">
          <button class="ghostbtn" id="sc-run" ${site && site.running ? 'disabled' : ''}>Re-run</button>
          <button class="ghostbtn" id="sc-close">Close</button>
        </div>
      </div>`;
    followCheck(body, top, site && site.running ? 'site-run' : 'site');
    body.querySelector('#sc-run').onclick = () => runSiteCheck();
    body.querySelector('#sc-close').onclick = () => {
      S.siteOpen = false;
      render();
    };
  }
  // In place of the tabs while Vest's update isn't accepted (siteGate): checking, waiting, failed, then "All clear".
  function renderGate(body, g) {
    const s = S.site,
      top = body.scrollTop;
    const [title, sub] = {
      checking: [
        'Vest updated its site',
        'Checking that the copier still works with it. Takes a few seconds. Read-only: nothing is sent to your accounts.',
      ],
      waiting: [
        'Vest updated its site',
        s && s.wait === 'session'
          ? 'Log in to Vest: the check runs by itself once your session loads.'
          : 'The check runs by itself once Vest lists an active account to read from.',
      ],
      failed: [
        'Copying is off',
        "Vest changed something the copier relies on (in red below). Copying, Trade-tab orders, automatic breakeven and claims stay off until a copier update fixes it: trade from Vest's own panel meanwhile. Flatten all still works.",
      ],
      clear: ['All clear', "The copier works with Vest's update."],
    }[g];
    body.innerHTML = `
      <div class="gate gate-${g}">
        <div class="rules">
          <div class="gate-h">${esc(title)}</div>
          <div class="sc-sub">${esc(sub)}</div>
          ${g === 'waiting' ? '' : siteRows(s)}
          ${
            g === 'failed'
              ? `<div class="rules-btns">
            <button class="ghostbtn" id="sc-run">Check again</button>
            <button class="ghostbtn" id="sc-diag">Diag file</button>
            <button class="lnk" id="sc-help">Get help</button>
          </div>
          <div class="sc-note">Send the Diag file on Discord or GitHub. The fix arrives as a copier update.</div>`
              : ''
          }
        </div>
      </div>`;
    followCheck(body, top, 'gate-' + g);
    if (g !== 'failed') return;
    body.querySelector('#sc-run').onclick = () => runSiteCheck();
    body.querySelector('#sc-diag').onclick = () => downloadDiag();
    body.querySelector('#sc-help').onclick = () => openReport();
  }

  // ───────────────────────── trade panel UI ─────────────────────────
  // Built once, then only the computed numbers update, so the balance poll never wipes what you're typing. Keystrokes
  // are kept from reaching Vest's own keyboard shortcuts.
  const fmtPx = (n, tick) =>
    n > 0
      ? n.toLocaleString('en-US', { minimumFractionDigits: decimalsOf(tick), maximumFractionDigits: decimalsOf(tick) })
      : '—';
  const fmtUsd = (n) => money(Math.abs(n) || 0);

  // ── What the account can do: the master's open positions and resting orders and every account's saved leverage, read
  // while the Trade tab is open (when it opens, with each balance poll, and after each order). The max size, the fail and
  // pass prices and the warnings are worked out from them, the way Vest's own ticket does.
  S.acctState = {}; // accountId -> { positions: [{ symbol, side, qty, openPrice, collateral }], ordersCollateral, at }
  S.levs = null; // saved leverage by account and symbol (GET /v3/user-state)
  let _tradeStateBusy = false;
  async function refreshTradeState() {
    const master = S.master;
    if (!master || _tradeStateBusy || !userTokenOk()) return;
    _tradeStateBusy = true;
    const t0 = Date.now();
    try {
      const [levs, st, bals] = await Promise.all([
        fetchLeverages(),
        readOpenState(master),
        fetchBalances().catch(() => null), // free cash read with the positions, so the two match after a fill
      ]);
      if (levs) S.levs = levs;
      if ((_feedAt[master] || 0) >= t0) return; // the live feed already has newer positions and cash
      const r0 = S.byId[master],
        free = bals && bals.free[master];
      if (r0 && free >= 0 && !(bals.ver[master] < (r0.balVer || 0))) {
        r0.free = free;
        if (bals.ver[master] >= 0) r0.balVer = bals.ver[master];
      }
      // keep what the live P&L ticks from (cash and the last marks), as refreshBalances sets it: without cash the P&L
      // tab stopped moving the master's open profit until the next balance read
      const prev = S.acctState[master],
        r = S.byId[master];
      if (r && r.free >= 0) st.cash = r.free + st.positions.reduce((a, p) => a + p.collateral, 0) + st.ordersCollateral;
      st.marks = (prev && prev.marks) || {};
      S.acctState[master] = st;
    } catch {
      /* best effort: nothing to do if this fails */
    } finally {
      _tradeStateBusy = false;
    }
    updateTrade();
  }
  // An account's equity and open PnL with `sym` at `px`, live where possible: cash (free + the collateral held by its
  // positions and orders) plus each position's PnL. Positions on other markets keep the last performance-series figure.
  // Without fresh positions it falls back to the polled equity.
  function liveAccount(id, sym, px) {
    const r = S.byId[id],
      st = S.acctState[id];
    if (!r) return { equity: NaN, upnl: 0 };
    if (!stateFresh(st) || !(r.free >= 0) || !(px > 0)) return { equity: r.equity, upnl: r.upnl || 0 };
    const here = st.positions.filter((p) => p.symbol === sym);
    const upHere = here.reduce((a, p) => a + (p.side === 'long' ? 1 : -1) * p.qty * (px - p.openPrice), 0);
    const upnl = upHere + (st.positions.length > here.length ? (r.upnl || 0) - upHere : 0);
    const cash = r.free + st.positions.reduce((a, p) => a + p.collateral, 0) + st.ordersCollateral;
    return { equity: cash + upnl, upnl };
  }

  /** Everything the panel shows / would send, from the current settings + live price. Pure apart from reading state. */
  function tradeCalc() {
    const t = S.trade,
      sym = t.symbol,
      meta = SYMBOLS[sym],
      price = priceOf(sym),
      fee = meta.takerFee || 0,
      master = S.master && S.byId[S.master] ? S.master : null,
      step = unitSize(sym); // whole minis or micros when sizing in them, else the market's step
    const st = master && S.acctState[master];
    const held = (stateFresh(st) && st.positions.find((p) => p.symbol === sym)) || null;
    const live = master ? liveAccount(master, sym, price) : null;

    // Max size: Vest's 100% for the master and, in strict 1:1 while armed, for every follower too (they copy the same
    // size), so the smallest of them. Followers copy at the master's leverage. Cap-to-fit scales followers to fit.
    const lev = master ? orderLeverage(levFor(S.levs, master, sym), maxLeverageFor(sym, master)) : null;
    const mpx = marginPriceOf(sym);
    let maxQty = null,
      limitedBy = null;
    if (master && lev > 0 && mpx > 0) {
      for (const id of [master, ...(S.armed && !S.capFit ? [...S.followers] : [])]) {
        const r = S.byId[id];
        if (!r || !(r.free >= 0)) {
          maxQty = limitedBy = null; // a balance couldn't be read: no max rather than a wrong one
          break;
        }
        const upnl = id === master ? live.upnl : r.upnl;
        const q = maxQtyFor(tradingPower({ free: r.free, upnl, leverage: lev, takerFee: fee }), mpx, step);
        if (maxQty === null || q < maxQty) [maxQty, limitedBy] = [q, id];
      }
    }

    // Room before the floor on the tightest account that copies the same size: the master, plus followers in strict
    // 1:1 while armed (their live equity from the balance poll).
    const rm = master && S.byId[master];
    let riskRoom = rm && live ? live.equity - floorOf(rm) : null,
      riskBy = master;
    if (master && S.armed && !S.capFit)
      for (const id of S.followers) {
        const f = S.byId[id];
        if (f && f.equity > 0 && riskRoom !== null && f.equity - floorOf(f) < riskRoom)
          [riskRoom, riskBy] = [f.equity - floorOf(f), id];
      }

    // In a trade: the Scale chips size both buttons from the open position: 25%, 50%, 100% of it, or MAX (adds only:
    // the largest add that fits both Vest's buying power and a stop-out above the floor, fees counted). An add or a
    // reduce changes the size only: the stop and targets stay where they are (the trader moves them on the chart), so a
    // stop-out after an add is measured at the stop as it is. Without a stop, only the margin limits an add.
    const heldSl = held && (held.triggers || []).find((x) => x.kind === 'sl');
    const addStop = () => (heldSl ? heldSl.price : null);
    let chips = null,
      pick = null;
    if (held && price > 0) {
      const lossFor = (a) =>
        heldSl
          ? stopOutLoss({
              side: held.side,
              qty: held.qty + a,
              price,
              stopPrice: heldSl.price,
              openFee: a * price * fee,
              takerFee: fee,
            })
          : null;
      const fits = (a) => riskRoom === null || !heldSl || lossFor(a) < riskRoom;
      const chip = (key, label, a) => ({
        key,
        label,
        qty: a,
        // why an ADD of this size can't go (a reduce of it still can)
        why: !(a > 0)
          ? key === 'max'
            ? 'no room'
            : 'too small'
          : maxQty !== null && a > maxQty + meta.step / 2
            ? 'over margin'
            : !fits(a)
              ? 'past floor'
              : null,
      });
      let best = maxQty !== null && maxQty > 0 ? maxQty : 0;
      if (best > 0 && heldSl && riskRoom !== null) {
        let lo = 0,
          hi = best;
        for (let i = 0; i < 40; i++) {
          const mid = (lo + hi) / 2;
          fits(mid) ? (lo = mid) : (hi = mid);
        }
        best = lo;
      }
      chips = [
        chip('25', '25', floorStep(held.qty * 0.25, step)),
        chip('50', '50', floorStep(held.qty * 0.5, step)),
        chip('100', '100', floorStep(held.qty, step)),
        chip('max', 'MAX', floorStep(best, step)),
      ];
      pick = chips.find((x) => x.key === (S.addPick || '25')) || chips[0];
    }
    const qty = pick
      ? pick.qty
      : t.sizeMode === 'max'
        ? maxQty || 0
        : t.sizeMode === 'risk'
          ? riskQty(+t.risk, +t.stopPts, meta.pointValue, step)
          : floorStep(+t.qty || 0, step);
    const split = splitQty(qty, t.targets.length, t.scale, step);
    const long = planPrices({
      side: 'long',
      entry: price,
      stopPts: +t.stopPts,
      targetPts: t.targets.map(Number),
      tick: meta.tick,
    });
    const short = planPrices({
      side: 'short',
      entry: price,
      stopPts: +t.stopPts,
      targetPts: t.targets.map(Number),
      tick: meta.tick,
    });
    const qtys = split.qtys || [];
    const risk = qty * (+t.stopPts || 0) * meta.pointValue;
    const reward = qtys.reduce((sum, q, i) => sum + q * (+t.targets[i] || 0) * meta.pointValue, 0);
    const openFee = price > 0 ? qty * price * fee : 0;
    const fees = price > 0 ? openFee + qty * Math.max(0, price - (+t.stopPts || 0)) * fee : 0; // in and out at the stop

    // Fail / pass prices and the stop-out cost per side, for the whole position after this order (an add is measured
    // from the new average entry, as the ladder is rebuilt).
    const r = master && S.byId[master];
    const floor = r ? floorOf(r) : 0;
    const outcome = (side) => {
      if (!r || !(price > 0) || !(qty > 0) || (held && held.side !== side)) return null;
      const total = (held ? held.qty : 0) + qty,
        dir = side === 'long' ? 1 : -1;
      const avg = held ? (held.qty * held.openPrice + qty * price) / total : price;
      const fp = failPassPrices({ side, qty: total, price, equity: live.equity, openFee, floor, target: r.target });
      const loss = stopOutLoss({
        side,
        qty: total,
        price,
        stopPrice: held ? addStop() : avg - dir * (+t.stopPts || 0), // an add leaves the stop where it is
        openFee,
        takerFee: fee,
      });
      return { ...fp, loss, room: live.equity - floor };
    };
    const sides = { long: outcome('long'), short: outcome('short') };

    let error = null;
    // In a trade the setup (size mode, stop, targets, Auto BE) is for the next new trade: an add is held to its size,
    // the price and the margin only (it leaves the stop and targets as they are).
    const fresh = !held;
    if (!master) error = 'Pick a master account (M) first.';
    else if (fresh && t.sizeMode === 'max' && maxQty === null)
      error = price > 0 ? 'Working out the max size…' : 'Waiting for a live price…';
    else if (fresh && t.sizeMode === 'max' && !(maxQty > 0))
      error = `No trading power left on ${accLabel(limitedBy)} for ${meta.label} at ${lev}x.`;
    else if (!(qty > 0))
      error = held
        ? 'Too small to add.'
        : t.sizeMode === 'risk'
          ? 'Risk and stop must be above zero.'
          : 'Size must be above zero.';
    else if (fresh && split.error) error = split.error;
    else if (!(price > 0)) error = 'Waiting for a live price…';
    else if (fresh && long.error) error = long.error;
    else if (fresh && t.beMode === 'points' && !(+t.beTrigger > 0))
      error = 'Breakeven trigger must be above zero points.';
    if (master && pick && pick.why) error = `Add ${pick.label}%: ${pick.why}.`;

    // The allowed range for this account now: where the stop may go and how much can be risked (new positions; an add
    // is held to Vest's max only, since its room depends on the position already open).
    const stopPts = +t.stopPts || 0,
      room = r && live ? live.equity - floor : null;
    const limits = {
      minStop: t.sizeMode === 'risk' ? minStopFor(+t.risk, maxQty, meta.tick) : null,
      maxRiskAtStop: maxRiskAt(maxQty, stopPts),
      maxRiskRoom: held ? null : maxRiskForRoom({ room, price, stopPts, takerFee: fee }),
      maxStop:
        held || t.sizeMode === 'risk' ? null : maxStopForRoom({ room, qty, price, takerFee: fee, tick: meta.tick }),
    };

    // Over Vest's max, the order is accepted but never filled: Buy and Sell are blocked, with one-click fixes.
    let blocked = null;
    const fixes = [];
    if (!error && maxQty !== null && t.sizeMode !== 'max' && qty > maxQty + meta.step / 2) {
      blocked = `${fmtQty(qty, sym)} is more than ${accLabel(limitedBy)} can open at ${lev}x (max ${fmtQty(maxQty, sym)}), so Vest wouldn't fill it.`;
      if (t.sizeMode === 'risk') {
        if (limits.minStop)
          fixes.push({ act: 'stop', value: limits.minStop, label: `Set stop to ${limits.minStop} pts` });
        if (limits.maxRiskAtStop > 0)
          fixes.push({
            act: 'risk',
            value: limits.maxRiskAtStop,
            label: `Risk ${money(limits.maxRiskAtStop)} instead`,
          });
      } else fixes.push({ act: 'max', label: `Use max (${fmtQty(maxQty, sym)})` });
    }

    // The Trade tab's two bars. Margin: how much of Vest's buying power the open position uses now and with this order
    // (the max above is what's left, on the tightest account). Risk: what the stop would lose, fees included, now and with
    // this order (an add rebuilds the stop from the new average), against the room left before the floor on the tightest
    // account that copies the same size (the master, plus followers in strict 1:1 while armed).
    const heldQty = held ? held.qty : 0;
    const margin =
      maxQty === null
        ? null
        : {
            now: heldQty / (heldQty + maxQty || 1),
            after: (heldQty + (qty > 0 ? qty : 0)) / (heldQty + maxQty || 1),
            left: maxQty - (qty > 0 ? qty : 0),
          };
    const heldStop = held && (held.triggers || []).find((x) => x.kind === 'sl');
    const risk2 = {
      room: riskRoom,
      by: riskBy,
      now: !held
        ? 0
        : heldStop && price > 0
          ? stopOutLoss({ side: held.side, qty: held.qty, price, stopPrice: heldStop.price, openFee: 0, takerFee: fee })
          : null, // an open position without a stop
      after: (held ? sides[held.side] : sides.long) ? (held ? sides[held.side] : sides.long).loss : null,
    };

    // Warnings: the order can go, but it's probably not what you want.
    const warnings = [];
    const risky = held ? sides[held.side] : sides.long; // a new position's stop-out costs the same either way
    if (!error && risky && risky.room > 0 && risky.loss >= risky.room)
      warnings.push({
        kind: 'fail',
        text: `A stop-out would lose about ${fmtUsd(risky.loss)} with fees, more than the ${fmtUsd(risky.room)} left to the ${
          r.dailyFloor > r.floor ? 'daily ' : ''
        }floor: the account fails before the stop fills. Use a smaller size or a closer stop.`,
      });
    return {
      t,
      meta,
      price,
      pick,
      qty,
      qtys,
      long,
      short,
      risk,
      reward,
      fees,
      lev,
      maxQty,
      limitedBy,
      held,
      sides,
      limits,
      blocked,
      fixes,
      warnings,
      error,
      margin,
      risk2,
      chips,
      pick,
    };
  }

  function renderTrade(body) {
    if (body.dataset.view === 'trade' && body.querySelector('.trade')) return updateTrade();
    body.dataset.view = 'trade';
    const t = S.trade;
    const seg = (key, opts) =>
      `<div class="seg" data-seg="${key}">${opts.map(([v, l]) => `<button data-v="${v}">${l}</button>`).join('')}</div>`;
    body.innerHTML = `
      <div class="trade">
        <div class="tr-top">
          <div class="tr-sym" id="tr-sym"></div>
          <div class="tr-px" id="tr-px">—</div>
        </div>
        <div class="tr-poscard" id="tr-pos" hidden>
          <div class="tr-posbar"><span class="tr-side" id="tr-pside"></span><span class="tr-pq" id="tr-pqty"></span><span class="tr-ppl" id="tr-ppl"></span></div>
          <div class="tr-pmeta"><span id="tr-pavg"></span><span id="tr-ppts"></span></div>
          <div class="tr-brk" id="tr-brk"></div>
          <div class="tr-lvls" id="tr-lvls"></div>
          <div class="tr-prisk" title="What the stop would lose from here, fees included, against the room left before the floor (tightest account)">
            <div class="tr-pn"><span>Risk</span><span id="tr-prisk"></span></div><div class="tr-track"><i id="tr-prnow"></i></div></div>
        </div>
        <div class="tr-pacts" id="tr-pacts" hidden>
          <div class="tr-go"><button class="tr-bebtn" id="tr-be">Breakeven</button><button class="tr-close" id="tr-close">Close</button></div>
          <button class="tr-disc" id="tr-addfold" aria-expanded="false"><span>Add or reduce</span>${ICON.right}</button>
          <div class="tr-addbox" id="tr-addbox" hidden>
            <div class="tr-chips" id="tr-chips"></div>
            <div class="tr-go tr-scale"><button class="tr-buy" id="tr-addbtn">Add</button><button class="tr-redbtn" id="tr-reduce">Reduce</button></div>
            <div class="tr-addpv" id="tr-addpv"></div>
          </div>
          <div class="tr-copies" id="tr-copies"></div>
        </div>
        <div class="tr-lims" id="tr-lims">
          <div class="tr-lb"><div class="tr-ln"><span class="tr-lk">Margin</span><span class="tr-lt" id="tr-mtxt"></span></div>
            <div class="tr-track"><i class="pv" id="tr-mpv"></i><i id="tr-mnow"></i></div></div>
          <div class="tr-lb"><div class="tr-ln"><span class="tr-lk">Risk</span><span class="tr-lt" id="tr-rtxt"></span></div>
            <div class="tr-track"><i class="pv" id="tr-rpv"></i><i id="tr-rnow"></i></div></div>
          <div class="tr-tight" id="tr-tight"></div>
        </div>
        <div class="tr-setup" id="tr-setup">
          <div class="tr-f"><span class="tr-k">Order</span><div class="tr-row">${seg('orderType', [
            ['market', 'Market'],
            ['limit', 'Limit'],
          ])}</div></div>
          <div class="tr-f"><span class="tr-k">Size</span><div class="tr-row">${seg('sizeMode', [
            ['qty', 'Qty'],
            ['risk', 'Risk $'],
            ['max', 'Max'],
          ])}<input class="tr-in" id="tr-size" inputmode="decimal" aria-label="Size"><span class="tr-sizeq" id="tr-sizeq"></span></div></div>
          <div class="tr-f" id="tr-unitrow" hidden><span class="tr-k">In</span><div class="tr-row">${seg('unit', [
            ['units', 'Units'],
            ['micro', 'Micros'],
            ['mini', 'Minis'],
          ])}<span class="tr-u" id="tr-unitnote"></span></div></div>
          <div class="tr-ind">
            <div class="tr-calc" id="tr-sizecalc"></div>
            <div class="tr-lim" id="tr-sizelim"></div>
          </div>
          <div class="tr-lad side-long" role="table" aria-label="Stop, entry and targets">
            <div class="tr-lh"><span class="tr-flip" id="tr-lhs">If you buy</span><span id="tr-lhm">pts · qty · $</span><span id="tr-lhb">Buy at</span></div>
            <div class="tr-lr tr-ps" id="tr-passrow"><span class="tr-sp" id="ls-pass"></span><span class="tr-mid">Pass</span><span class="tr-bp" id="lb-pass"></span></div>
            <div id="tr-targets"></div>
            <div class="tr-lr tr-mk" id="tr-mkrow" hidden><span class="tr-sp"></span><span class="tr-mid" id="tr-mk">Price</span><span class="tr-bp" id="lb-mk"></span></div>
            <div class="tr-lr tr-en"><span class="tr-sp" id="ls-entry"></span><span class="tr-mid" id="tr-entry">Entry</span><span class="tr-bp" id="lb-entry"></span></div>
            <div class="tr-lr tr-slr"><span class="tr-sp" id="ls-stop"></span><span class="tr-mid"><span class="tr-n sl">STOP</span>
              <input class="tr-in tr-pt" id="tr-stop" inputmode="decimal" aria-label="Stop, in points" value="${esc(t.stopPts)}">
              <span class="tr-q" id="tr-stopq"></span><span class="tr-g dn" id="tr-stopcalc"></span><span class="tr-xs"></span></span><span class="tr-bp" id="lb-stop"></span></div>
            <div class="tr-lr tr-fl" id="tr-failrow"><span class="tr-sp" id="ls-fail"></span><span class="tr-mid">Fail</span><span class="tr-bp" id="lb-fail"></span></div>
          </div>
          <div class="tr-lim" id="tr-stoplim"></div>
          <div class="tr-fold"><span id="tr-splittxt"></span><button class="lnk" data-fold="split">Change</button><button class="lnk" id="tr-add" title="Add a target">+ target</button></div>
          <div class="tr-foldbox" data-foldbox="split" hidden><span class="tr-k">Split</span>${seg('scale', [
            ['start', 'Start'],
            ['even', 'Even'],
            ['end', 'End'],
          ])}</div>
          <div class="tr-fold"><span id="tr-betxt"></span><button class="lnk" data-fold="be">Change</button></div>
          <div class="tr-foldbox" data-foldbox="be" hidden><span class="tr-k">Auto BE</span><div class="tr-row">${seg(
            'beMode',
            [
              ['off', 'Off'],
              ['tp1', 'After TP1'],
              ['points', '+pts'],
            ],
          )}<span class="tr-be">
            <span id="tr-betrigw">at <input class="tr-in sm" id="tr-betrig" inputmode="decimal" aria-label="Breakeven trigger, in points" value="${esc(t.beTrigger)}"></span>
            lock <input class="tr-in sm" id="tr-beoff" inputmode="decimal" aria-label="Profit to lock, in points" title="Points of profit beyond the entry (0 = exact breakeven)" value="${esc(t.beOffset)}"></span></div></div>
          <div class="tr-sum" id="tr-sum"></div>
        </div>
        <div class="tr-warn" id="tr-warn"></div>
        <div class="tr-action">
          <div class="tr-err" id="tr-err"></div>
          <div class="tr-go" id="tr-mgo"><button class="tr-buy" id="tr-buy">Buy</button><button class="tr-sell" id="tr-sell">Sell</button></div>
          <div class="tr-go tr-lgo" id="tr-lgo" hidden>
            <button class="tr-lbuy" id="tr-lbuy">Buy limit</button><button class="tr-lsell" id="tr-lsell">Sell limit</button></div>
          <div class="tr-pick" id="tr-pick" hidden>
            <div class="tr-pickbar"><span id="tr-picktxt"></span><span class="tr-esc">Esc to cancel</span></div>
            <div class="tr-pickrow"><input class="tr-in" id="tr-lpx" inputmode="decimal" aria-label="Limit price" placeholder="price">
              <button class="tr-place" id="tr-place">Place</button><button class="tr-pcancel" id="tr-pcancel">Cancel</button></div>
          </div>
          <div class="tr-who" id="tr-who"></div>
        </div>
        <div class="tr-preview" id="tr-preview" hidden></div>
        <div class="tr-plans" id="tr-plans"></div>
      </div>`;
    const wrap = body.querySelector('.trade');
    ['keydown', 'keyup', 'keypress'].forEach((ev) => wrap.addEventListener(ev, (e) => e.stopPropagation()));
    // A field that isn't a number is kept as '' (shown as an error), never as NaN.
    const parse = (el) => {
      const v = el.value.trim();
      return v !== '' && Number.isFinite(+v) ? +v : '';
    };
    const num = (el, key) =>
      el.addEventListener('input', () => {
        S.trade[key] = parse(el);
        saveTrade();
        updateTrade();
      });
    // The size box: dollars at risk, or the size in the chosen unit (kept in units: a micro of NQ is 2)
    const sizeEl = body.querySelector('#tr-size');
    fitQtyToUnit();
    const showSize = () =>
      (sizeEl.value =
        S.trade.sizeMode === 'risk'
          ? S.trade.risk
          : tradeUnit() === 'units'
            ? S.trade.qty
            : +((+S.trade.qty || 0) / unitSize()).toFixed(4));
    showSize();
    sizeEl.addEventListener('input', () => {
      const v = parse(sizeEl) || 0;
      if (S.trade.sizeMode === 'risk') S.trade.risk = v;
      else S.trade.qty = tradeUnit() === 'units' ? v : +(v * unitSize()).toFixed(8);
      saveTrade();
      updateTrade();
    });
    num(body.querySelector('#tr-stop'), 'stopPts');
    num(body.querySelector('#tr-betrig'), 'beTrigger');
    num(body.querySelector('#tr-beoff'), 'beOffset');
    body.querySelectorAll('[data-seg]').forEach((g) =>
      g.querySelectorAll('button').forEach(
        (b) =>
          (b.onclick = () => {
            S.trade[g.dataset.seg] = b.dataset.v;
            if (g.dataset.seg === 'unit') {
              // the same size, in whole micros or minis (at least one)
              const u = unitSize();
              S.trade.qty = Math.max(u, floorStep(+S.trade.qty || 0, u));
            }
            if (g.dataset.seg === 'orderType' && b.dataset.v === 'market') stopPick(true);
            saveTrade();
            if (g.dataset.seg === 'sizeMode' || g.dataset.seg === 'unit') showSize();
            updateTrade();
          }),
      ),
    );
    // The ladder shows one side's prices (the stop, targets and fail price differ for a buy and a sell): the side of the
    // button the pointer is on, or that has the keyboard, else the side last traded.
    const showSide = (side) => {
      if (S.ladSide === side) return;
      S.ladSide = side;
      updateTrade();
    };
    for (const [id, side] of [
      ['#tr-buy', 'long'],
      ['#tr-sell', 'short'],
    ]) {
      const b = body.querySelector(id);
      b.addEventListener('pointerenter', () => showSide(side));
      b.addEventListener('focus', () => showSide(side));
    }
    // the split and Auto BE fold to one line each; Change opens the controls
    body.querySelectorAll('[data-fold]').forEach(
      (b) =>
        (b.onclick = () => {
          const box = body.querySelector(`[data-foldbox="${b.dataset.fold}"]`);
          box.hidden = !box.hidden;
          b.textContent = box.hidden ? 'Change' : 'Done';
        }),
    );
    body.querySelector('#tr-addfold').onclick = () => {
      S.addOpen = !S.addOpen;
      updateTrade();
    };
    body.querySelector('#tr-add').onclick = () => {
      const last = +S.trade.targets[S.trade.targets.length - 1] || 0;
      S.trade.targets.push(last ? last + (+S.trade.targets[0] || DEFAULT_TARGET_PTS) : DEFAULT_TARGET_PTS);
      saveTrade();
      renderTargets(body);
      updateTrade();
    };
    // Buy / Sell: a market order, or with Limit picked, the price is picked on the chart (or typed)
    const go = (side) => {
      S.ladSide = side; // the ladder shows the side last traded
      return S.trade.orderType === 'limit' ? startPick(side) : placeTrade(side);
    };
    body.querySelector('#tr-buy').onclick = () => go('long');
    body.querySelector('#tr-sell').onclick = () => go('short');
    body.querySelector('#tr-be').onclick = () => breakevenNow();
    body.querySelector('#tr-lbuy').onclick = () => startPick('long');
    body.querySelector('#tr-lsell').onclick = () => startPick('short');
    body.querySelector('#tr-place').onclick = () => placePick();
    body.querySelector('#tr-pcancel').onclick = () => stopPick();
    const lpx = body.querySelector('#tr-lpx');
    lpx.addEventListener('input', () => setPickPrice(parse(lpx), false));
    body.querySelector('#tr-close').onclick = () => closeNow();
    body.querySelector('#tr-addbtn').onclick = () => {
      const h = tradeCalc().held;
      if (h) placeTrade(h.side); // same direction while holding: an add
    };
    body.querySelector('#tr-reduce').onclick = () => reduceNow();
    renderTargets(body);
    followVestMarket();
    watchPrice(t.symbol);
    loadSymbolRules(t.symbol).then(updateTrade);
    refreshTradeState();
    updateTrade();
  }

  // ── Sending. The same order shape Vest's own ticket uses: market IOC, the stop as a full-position leg, and targets as
  // legs (one target covers the whole position with no quantity; several targets are sized legs adding up to the
  // order). Orders go through the page's hooked fetch, so an armed copier sees them as master orders and copies them
  // exactly like an order placed on Vest's ticket.
  const send = async (method, path, accountId, body) => {
    const { token } = await mintAccountToken(accountId);
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
      ...idem(),
    };
    const r = await window.fetch(API + path, { method, headers, body: JSON.stringify(body) });
    const res = parseJson(await r.text(), {}) || {};
    if (!r.ok) {
      const why = res.message || res.error;
      throw new Error(`Vest rejected the request (HTTP ${r.status}${why ? ': ' + why : ''})`);
    }
    return res;
  };

  // Vest's leverage rule, as its own ticket applies it. Max leverage for an account on a market: the plan-specific margin
  // ratio if the market lists one for this plan, else the market's capital-account ratio (falling back to the funded
  // ratio), else the account's max leverage capped by the market (5x if unknown). Leverage = floor(1 / ratio).
  // An order uses the saved leverage when 0 < saved ≤ max, otherwise the max.
  const FALLBACK_MAX_LEVERAGE = 5;
  function maxLeverageFor(sym, accountId) {
    const m = SYMBOLS[sym] && SYMBOLS[sym].margin,
      a = S.byId[accountId];
    if (!m) return null;
    const fromRatio = (r) => (r > 0 ? Math.floor(1 / r + EPS) : null);
    const marketMax = fromRatio(m.initMarginRatio);
    if (!a) return marketMax;
    const plan = (m.capitalPlans || []).find((c) => c.accountType === a.accountType && c.planId === a.planId);
    if (plan) return fromRatio(plan.initMarginRatio);
    const r = m.capitalInitMarginRatio === undefined ? m.fundedInitMarginRatio : m.capitalInitMarginRatio;
    if (r !== null && r !== undefined) return fromRatio(r);
    const acctMax = a.leverage > 0 ? a.leverage : FALLBACK_MAX_LEVERAGE;
    return marketMax ? Math.min(acctMax, marketMax) : acctMax;
  }
  const orderLeverage = (saved, max) => (saved > 0 && max > 0 && saved <= max ? saved : max || null);
  if (window.__VC_TEST__) window.__vcLev = { maxLeverageFor, orderLeverage };

  // Stop/target work that runs after an order (re-anchor, rebuilding the ladder after an add). Buy and Sell stay disabled
  // until it finishes, so two of these never work on the same legs at once.
  function adjust(job) {
    S.adjusting = (S.adjusting || 0) + 1;
    updateTrade();
    return job()
      .catch((e) => {
        logEvent('warn', `Couldn't finish adjusting stop & targets (${e.message}) — check them on Vest.`);
        diag('adjust', { outcome: 'error', error: e.message });
      })
      .finally(() => {
        S.adjusting--;
        updateTrade();
      });
  }

  // `limitPx`: a GTC limit order at that price (a new trade only), with the stop and targets measured from it; without
  // it, a market order. Returns true once Vest has accepted the order.
  async function placeTrade(side, limitPx = null) {
    if (S.placing || S.adjusting) return;
    if (S.flattening) return toast('Wait for Flatten All to finish.');
    if (S.arming || claimBusy()) return toast('Wait for copying to start or the claim to finish.');
    const siteHeld = siteBlocks(); // Vest's update not checked yet, or the check failed
    if (siteHeld) return toast(siteHeld);
    if (!S.ack) {
      S.rulesOpen = true;
      S.tradeOpen = false;
      render();
      return toast('Read and accept the terms first.');
    }
    const c = tradeCalc();
    if (c.error) return toast(c.error);
    if (c.blocked) return toast(c.blocked);
    const t = { ...c.t, targets: c.t.targets.map(Number) }; // edits made while this order is in flight don't apply to it
    // how the size was chosen, for diagnostics: the mode, Vest's max and who limits it, and any warning shown
    const sizing = {
      mode: t.sizeMode,
      qty: c.qty,
      maxQty: c.maxQty,
      limitedBy: c.limitedBy ? accLabel(c.limitedBy) : null,
      leverage: c.lev,
      fail: c.sides.long && c.sides.long.fail,
      warnings: c.warnings.map((w) => w.kind),
    };
    const stopPts = +t.stopPts,
      sym = t.symbol,
      meta = c.meta,
      pDec = decimalsOf(meta.tick),
      master = S.master;
    if (limitPx) {
      // a typed price between ticks: a buy rounds down, a sell up (never a worse price than asked)
      const n = limitPx / meta.tick;
      limitPx = +((side === 'long' ? Math.floor(n + 1e-9) : Math.ceil(n - 1e-9)) * meta.tick).toFixed(pDec);
    }
    S.placing = true;
    updateTrade();
    let placed = false;
    try {
      const px = priceOf(sym); // the price at the moment of the click
      if (limitPx) {
        const lp = fmtNum(limitPx, pDec);
        if (!nearMarket(limitPx, px, NEAR_MARKET_LOOSE))
          throw new Error(`a limit at ${lp} is nowhere near the market (${fmtNum(px, pDec)})`);
        if (side === 'long' ? limitPx >= px : limitPx <= px)
          throw new Error(
            `a ${side === 'long' ? 'buy' : 'sell'} limit must be ${side === 'long' ? 'below' : 'above'} the mark (${fmtNum(px, pDec)}): there it would fill at once — use ${side === 'long' ? 'Buy' : 'Sell'} for a market order`,
          );
      }
      const plan = planPrices({ side, entry: limitPx || px, stopPts, targetPts: t.targets, tick: meta.tick });
      if (plan.error) throw new Error(plan.error);
      if (!(SYMBOLS[sym] && SYMBOLS[sym].margin)) await loadSymbolRules(sym);
      const lev = orderLeverage(levFor(await fetchLeverages(), master, sym), maxLeverageFor(sym, master));
      if (!(lev > 0))
        throw new Error(
          `couldn't work out ${meta.label} leverage for ${accLabel(master)} — open Vest's ticket for ${meta.label} once, then retry`,
        );
      // Already in this market? Vest ignores a second open on the same symbol (accepted, never filled), so do what its own
      // ticket does: same direction adds to the position; the opposite direction is refused here.
      const held = await openPosition(master, sym);
      // The size and ladder on screen were worked out for what the panel showed: a position that opened, closed or changed
      // size since then would turn this click into something else (a new trade into an add, say).
      const shown = c.held;
      if (
        held &&
        parseFloat(held.quantity) > 0 &&
        (!shown || shown.side !== held.side || Math.abs(shown.qty - parseFloat(held.quantity)) >= meta.step / 2)
      ) {
        refreshTradeState();
        throw new Error(
          `the position on ${meta.label} changed since the panel last updated — check it and click again`,
        );
      }
      if (!held && shown) {
        refreshTradeState();
        throw new Error(`the position on ${meta.label} is closed now — check the panel and click again`);
      }
      if (held && !(parseFloat(held.quantity) > 0))
        throw new Error(
          `an order is already waiting on ${meta.label} for ${accLabel(master)} — cancel it in Vest first (Vest allows one per market)`,
        );
      if (held && limitPx)
        throw new Error(
          `${accLabel(master)} is already in ${meta.label}: a limit from the panel opens a new trade only`,
        );
      if (held && held.side !== side) {
        throw new Error(
          `${accLabel(master)} is ${held.side} ${held.quantity} ${meta.label} — close or reduce it first (the panel only adds in the same direction)`,
        );
      }
      if (held) return await addToTrade({ t, qty: c.qty, meta, side, held, lev, sizing });
      const many = c.qtys.length > 1;
      const takeProfits = plan.targets.map((tp, i) => ({
        executionType: 'market',
        triggerPrice: fmtNum(tp, pDec),
        ...(many ? { quantity: fmtQty(c.qtys[i], sym) } : {}),
      }));
      takeProfits.forEach((l, i) => {
        if (many && parseFloat(l.quantity) * parseFloat(l.triggerPrice) < MIN_LEG_USD)
          throw new Error(`TP${i + 1} is below Vest's $1 minimum`);
      });
      const stopLosses = [{ executionType: 'market', triggerPrice: fmtNum(plan.stop, pDec) }];
      const body = {
        orderType: limitPx ? 'limit' : 'market',
        leverage: fmtNum(lev, 2),
        side,
        symbol: sym,
        quantity: fmtQty(c.qty, sym),
        timeInForce: limitPx ? 'GTC' : 'IOC',
        takeProfits,
        stopLosses,
        ...(limitPx ? { price: fmtNum(limitPx, pDec) } : {}),
      };
      const res = await send('POST', '/v3/positions/open', master, body);
      if (!res.positionId) throw new Error('Vest returned no position');
      const tps = takeProfits
        .map((l, i) => `TP${i + 1} ${l.triggerPrice}${l.quantity ? ' × ' + l.quantity : ''}`)
        .join(' · ');
      logEvent(
        'ok',
        `Trade panel: ${side === 'long' ? 'BUY' : 'SELL'}${limitPx ? ' LIMIT' : ''} ${body.quantity} ${meta.label}${limitPx ? ` @ ${body.price}` : ''} · stop ${stopLosses[0].triggerPrice} · ${tps}`,
      );
      placed = true;
      diag('trade_panel', {
        outcome: 'placed',
        side,
        sizing,
        body,
        positionId: res.positionId,
        orderId: res.orderId,
        takeProfitIds: res.takeProfitIds,
        stopLossIds: res.stopLossIds,
      });
      // A market order's stop and targets are re-placed exactly from the real fill. A limit's are already measured from its
      // price (it fills there or better) and it may rest for a long time, so it isn't re-anchored or watched for
      // breakeven: Breakeven by hand does that once it fills.
      const reanchorOn = !limitPx;
      if (limitPx && t.beMode !== 'off')
        logEvent('info', 'Auto breakeven watches market orders only: once this limit fills, use Breakeven.');
      let bePlan = null;
      if (t.beMode !== 'off' && !limitPx) {
        bePlan = {
          positionId: res.positionId,
          orderId: res.orderId,
          master,
          symbol: sym,
          side,
          stopLegId: (res.stopLossIds || [])[0] || null,
          tp1: plan.targets[0],
          beMode: t.beMode,
          beTrigger: +t.beTrigger || 0,
          beOffset: +t.beOffset || 0,
          entry: null,
          triggered: false,
          moved: false,
          reanchoring: reanchorOn,
          at: Date.now(),
        };
        addPlan(bePlan);
      }
      if (reanchorOn) {
        adjust(() =>
          reanchor({
            master,
            sym,
            side,
            positionId: res.positionId,
            orderId: res.orderId,
            ref: px,
            stopPts,
            targetPts: t.targets,
            sentStop: plan.stop,
            sentTargets: plan.targets,
            bePlan,
          }),
        );
      }
    } catch (e) {
      logEvent('warn', `Trade panel: order NOT placed — ${e.message}.`);
      diag('trade_panel', { outcome: 'not-placed', side, sizing, error: e.message, errorCode: errCode(e) });
    } finally {
      S.placing = false;
      updateTrade();
      refreshTradeState(); // the position (or the add) shows right away, not with the next balance read
      setTimeout(refreshBalances, BALANCE_AFTER_TRADE_MS); // the next max size and fail price start from the new balance
    }
    return placed;
  }

  // Vest's position `openPrice` can be wrong for a moment right after a fill (seen live: 290.25 for a 31,148 fill), so
  // fills come from /executions by order id, and any price that legs are measured from must be near the market.
  const nearMarket = (px, ref, tol = NEAR_MARKET) => px > 0 && ref > 0 && Math.abs(px - ref) <= ref * tol;
  async function orderFill(accountId, sym, orderId, ref) {
    for (let i = 0; orderId && i < 4; i++) {
      if (i) await sleep(POLL_MS);
      const f = await fillInfo(accountId, sym, orderId, i ? 0 : FEED_FILL_WAIT_MS);
      if (f && nearMarket(f.price, ref)) return f.price;
    }
    return null;
  }

  // An account's open position on a symbol (or by id), or null when flat. Throws if positions can't be read: never
  // guess "flat".
  async function openPosition(accountId, sym, positionId) {
    const r = await api('/v3/positions/opened', (await mintAccountToken(accountId)).token);
    return ((r && r.positions) || []).find((x) => (positionId ? posIdOf(x) === positionId : x.symbol === sym)) || null;
  }
  const tryOpenPosition = async (...a) => {
    try {
      return await openPosition(...a);
    } catch {
      return null;
    }
  };

  // ── Add to an open trade from the panel: Vest's /append (the shape its own ticket sends), then ONE ladder for the whole
  // position — the stop and targets re-placed from the new average entry at the panel's points, with the full size split
  // across the targets by the chosen scale. The add and every leg change go through the hooked fetch, so an armed
  // copier adds to each follower (scaled) and moves/resizes their legs to match.
  async function addToTrade({ t, qty, meta, side, held, lev, sizing }) {
    // Vest's own "add to position" order: the position grows, the stop and targets stay where they are (a stop covers
    // the whole position, so it covers the add too). Armed, the copier adds to each follower, scaled.
    const sym = t.symbol,
      master = S.master,
      prevQty = parseFloat(held.quantity);
    const body = {
      symbol: sym,
      positionId: posIdOf(held),
      orderType: 'market',
      quantity: fmtQty(qty, sym),
      leverage: fmtNum(lev, 2),
      isBuy: side === 'long',
      timeInForce: 'IOC',
    };
    const res = await send('POST', '/v3/positions/append', master, body);
    logEvent(
      'ok',
      `Trade panel: ADD ${body.quantity} ${meta.label} to the ${side} (${fmtQty(prevQty, sym)} → ${fmtQty(prevQty + qty, sym)}). Stop and targets unchanged.`,
    );
    diag('trade_panel', { outcome: 'added', side, sizing, body, orderId: res.orderId, prevQty });
  }

  // ── Re-anchor after fill (always). The order's stop and targets are computed from the live price at the click.
  // Once filled, read the fill price and the position's leg ids, and move any leg that is off by a tick or more so it
  // sits exactly N points from the fill. Legs are found by the price they were sent at. The moves go through the hooked
  // fetch, so an armed copier moves the followers' matching legs too. Breakeven waits until this is done.
  async function reanchor(args) {
    try {
      return await reanchorSteps(args);
    } finally {
      const p = args.bePlan;
      if (p && p.reanchoring) {
        p.reanchoring = false;
        savePlans();
        if (!(p.entry > 0)) fillEntry(p);
      }
    }
  }
  async function reanchorSteps({
    master,
    sym,
    side,
    positionId,
    orderId,
    ref,
    stopPts,
    targetPts,
    sentStop,
    sentTargets,
    bePlan,
  }) {
    const tick = SYMBOLS[sym].tick,
      fmt = (n) => fmtNum(n, decimalsOf(tick));
    const done = () => {
      if (!bePlan) return;
      bePlan.reanchoring = false;
      savePlans();
      if (!(bePlan.entry > 0)) fillEntry(bePlan);
    };
    let fill = await orderFill(master, sym, orderId, ref),
      pos = null;
    for (let i = 0; i < 6 && !pos; i++) {
      // the position, for its leg ids
      if (i) await sleep(POLL_MS);
      pos = await tryOpenPosition(master, sym, positionId);
    }
    if (!fill && pos && nearMarket(parseFloat(pos.openPrice), ref)) fill = parseFloat(pos.openPrice);
    if (!pos || !fill) {
      logEvent(
        'warn',
        `Re-anchor: couldn't get a believable fill price${pos && pos.openPrice ? ` (Vest showed ${pos.openPrice})` : ''} — stop and targets left where they were placed.`,
      );
      diag('reanchor', { positionId, outcome: 'no-fill-price', openPrice: pos ? pos.openPrice : null, ref });
      return done();
    }
    const exact = planPrices({ side, entry: fill, stopPts, targetPts, tick });
    if (exact.error) return done();
    if (bePlan) {
      bePlan.entry = fill;
      bePlan.tp1 = exact.targets[0];
    }
    const legs = posLegs(pos).map((l) => ({ ...l, used: false }));
    const moves = [];
    const planMove = (kind, sent, to) => {
      const l = legs.find((x) => !x.used && x.kind === kind && Math.abs(x.price - sent) < tick / 2);
      if (!l) return;
      l.used = true;
      if (Math.abs(l.price - to) >= tick / 2) moves.push({ kind, id: l.id, from: l.price, to });
    };
    if (!(bePlan && bePlan.moved)) planMove('sl', sentStop, exact.stop);
    sentTargets.forEach((p, i) => planMove('tp', p, exact.targets[i]));
    if (!moves.length) {
      logEvent('info', `Filled at ${fmt(fill)} — stop and targets already exact.`);
      diag('reanchor', { positionId, fill, moves: [] });
      return done();
    }
    let failed = 0;
    for (const m of moves) {
      const isStop = m.kind === 'sl';
      try {
        await send('PUT', isStop ? '/v3/positions/stop-loss' : '/v3/positions/take-profit', master, {
          positionId,
          executionType: 'market',
          triggerPrice: fmt(m.to),
          [isStop ? 'stopLossId' : 'takeProfitId']: m.id,
        });
      } catch (e) {
        failed++;
        logEvent(
          'warn',
          `Re-anchor: couldn't move the ${isStop ? 'stop' : 'target'} at ${fmt(m.from)} (${e.message}) — left as placed.`,
        );
      }
    }
    if (failed < moves.length)
      logEvent(
        'ok',
        `Filled at ${fmt(fill)} — stop & targets re-placed exactly ${stopPts} / ${targetPts.join(' / ')} pts from the fill.`,
      );
    diag('reanchor', { positionId, fill, moves: moves.map((m) => ({ kind: m.kind, from: m.from, to: m.to })), failed });
    done();
  }

  // ── A limit price from a click on Vest's chart. The chart is TradingView in a same-origin frame, whose API Vest itself
  // uses for its own ticket's Limit: the crosshair's price at a click (the mouse moving at most 3 px between down and
  // up), rounded to the tick. The panel listens only while picking, draws the pending order as a line, and sends
  // nothing until Place. Typing the price works too, with or without the chart.
  const PICK_CLICK_PX = 3;
  S.pick = null; // { side, price, chart } while picking a limit price
  let _pickOff = null,
    _pickLine = null,
    _pickLineKey = '';
  function chartApi() {
    for (const f of document.querySelectorAll('iframe')) {
      try {
        const w = f.contentWindow,
          api = w && w.tradingViewApi;
        if (api && typeof api.activeChart === 'function' && typeof api.subscribe === 'function') return { api, win: w };
      } catch {
        /* best effort: nothing to do if this fails */
      }
    }
    return null;
  }
  const onPickKey = (e) => {
    if (e.key === 'Escape' && S.pick) {
      e.preventDefault();
      stopPick();
    }
  };
  function startPick(side) {
    if (S.placing || S.adjusting || S.flattening) return;
    stopPick(true);
    S.pick = { side, price: null, chart: false };
    window.addEventListener('keydown', onPickKey, true);
    const tv = chartApi();
    if (tv)
      try {
        const chart = tv.api.activeChart();
        let last = null,
          down = null;
        const move = (d) => (last = d && Number.isFinite(d.price) && d.price > 0 ? d.price : null);
        const dn = (d) => (down = d ? { x: d.clientX, y: d.clientY } : null);
        const up = (d) => {
          const click =
            down && d && Math.abs(d.clientX - down.x) <= PICK_CLICK_PX && Math.abs(d.clientY - down.y) <= PICK_CLICK_PX;
          down = null;
          if (click && last !== null && S.pick) setPickPrice(roundTick(last, SYMBOLS[S.trade.symbol].tick), true);
        };
        chart.crossHairMoved().subscribe(null, move);
        tv.api.subscribe('mouse_down', dn);
        tv.api.subscribe('mouse_up', up);
        tv.win.addEventListener('keydown', onPickKey, true);
        S.pick.chart = chart;
        _pickOff = () => {
          try {
            chart.crossHairMoved().unsubscribe(null, move);
            tv.api.unsubscribe('mouse_down', dn);
            tv.api.unsubscribe('mouse_up', up);
            tv.win.removeEventListener('keydown', onPickKey, true);
          } catch {
            /* best effort: nothing to do if this fails */
          }
        };
      } catch {
        S.pick.chart = false;
      }
    diag('trade_panel', { outcome: 'pick-start', side, chart: !!S.pick.chart });
    updateTrade();
    const el = _root && _root.querySelector('#tr-lpx');
    if (el) {
      el.value = '';
      if (!S.pick.chart) el.focus();
    }
  }
  function setPickPrice(p, fromChart) {
    if (!S.pick) return;
    const tick = SYMBOLS[S.trade.symbol].tick,
      n = p / tick;
    // between ticks: a buy rounds down, a sell up, as it will be sent
    if (p > 0)
      p = +((S.pick.side === 'long' ? Math.floor(n + 1e-9) : Math.ceil(n - 1e-9)) * tick).toFixed(decimalsOf(tick));
    S.pick.price = p > 0 ? p : null;
    const el = _root && _root.querySelector('#tr-lpx');
    if (fromChart && el) el.value = S.pick.price ? fmtNum(p, decimalsOf(SYMBOLS[S.trade.symbol].tick)) : '';
    updateTrade();
  }
  // The pending order on Vest's chart, as a line (TradingView's order line), kept in step with the price and size.
  function drawPickLine(qty) {
    const chart = S.pick && S.pick.chart;
    const key = chart && S.pick.price ? `${S.pick.side}|${S.pick.price}|${qty}` : '';
    if (key === _pickLineKey) return;
    _pickLineKey = key;
    try {
      if (!key) {
        if (_pickLine) _pickLine.remove();
        _pickLine = null;
        return;
      }
      const col = S.pick.side === 'long' ? '#c8f542' : '#ff5a4f';
      if (!_pickLine) _pickLine = chart.createOrderLine();
      _pickLine
        .setPrice(S.pick.price)
        .setText(`${S.pick.side === 'long' ? 'BUY' : 'SELL'} LMT · STRATUH Copier`)
        .setQuantity(qty > 0 ? fmtQty(qty, S.trade.symbol) : '')
        .setLineColor(col)
        .setBodyBorderColor(col)
        .setBodyTextColor('#0c0c0d')
        .setBodyBackgroundColor(col)
        .setQuantityBorderColor(col)
        .setQuantityBackgroundColor('#0c0c0d')
        .setQuantityTextColor(col)
        .setLineStyle(2);
    } catch {
      // the line is a convenience: the panel shows the price either way
    }
  }
  function stopPick(quiet) {
    if (_pickOff) _pickOff();
    _pickOff = null;
    if (_pickLine)
      try {
        _pickLine.remove();
      } catch {
        /* best effort: nothing to do if this fails */
      }
    _pickLine = null;
    _pickLineKey = '';
    window.removeEventListener('keydown', onPickKey, true);
    if (!S.pick) return;
    S.pick = null;
    if (!quiet) updateTrade();
  }
  async function placePick() {
    if (!S.pick || !(S.pick.price > 0)) return;
    const { side, price } = S.pick;
    if (await placeTrade(side, price)) stopPick();
  }

  // ── Breakeven and Close by hand, for the master's open position in this market. Both go through the hooked fetch, so
  // an armed copier moves each follower's stop / closes each follower like the master. Breakeven = entry + the Auto BE
  // "lock" points, only once price is past it (a stop must stay on the losing side) and only if it tightens the stop.
  // Vest refuses a stop the price has already passed (seen live: HTTP 400 with the mark a fraction above it). It triggers
  // stops on the mid since 2026-10-10 (the bid / ask before); the check stays on the bid (longs) / ask (shorts), which is
  // never more lenient than the mid: with Vest's book live, the bid (ask) must be BE_BOOK_CLEAR_TICKS clear of
  // breakeven; without it, the mid or mark must be BE_CLEAR_TICKS clear (about a spread more).
  const BE_CLEAR_TICKS = 4,
    BE_BOOK_CLEAR_TICKS = 2;
  // The price a breakeven stop is checked against and how far clear it must be: { px, clear }.
  const beRef = (sym, side, px, tick) => {
    const ref = stopRefOf(sym, side);
    return ref > 0 ? { px: ref, clear: BE_BOOK_CLEAR_TICKS * tick } : { px, clear: BE_CLEAR_TICKS * tick };
  };
  function breakevenPlan(h, price, tick) {
    const be = breakevenPrice({ side: h.side, entry: h.openPrice, offsetPts: 0, tick }); // breakeven: the average entry
    const { px, clear } = beRef(h.symbol, h.side, price, tick);
    const sl = (h.triggers || []).find((x) => x.kind === 'sl');
    const long = h.side === 'long';
    const why = !sl
      ? 'This position has no stop to move.'
      : !(px > 0)
        ? 'Waiting for a live price…'
        : long
          ? sl.price >= be
            ? 'The stop is already at or past breakeven.'
            : px <= be + clear
              ? `Price needs to be above ${fmtPx(be + clear, tick)} first, so Vest accepts the stop.`
              : null
          : sl.price <= be
            ? 'The stop is already at or past breakeven.'
            : px >= be - clear
              ? `Price needs to be below ${fmtPx(be - clear, tick)} first, so Vest accepts the stop.`
              : null;
    return { price: be, sl, why };
  }
  async function breakevenNow() {
    if (S.placing || S.adjusting || S.flattening || S.arming) return;
    const siteHeld = siteBlocks();
    if (siteHeld) return toast(siteHeld);
    const master = S.master,
      sym = S.trade.symbol,
      meta = SYMBOLS[sym],
      tick = meta.tick,
      fmt = (n) => fmtNum(n, decimalsOf(tick));
    if (!master) return;
    S.placing = true;
    updateTrade();
    try {
      // read the position fresh: its entry and stop as Vest has them now
      const pos = await openPosition(master, sym);
      if (!pos) throw new Error(`${accLabel(master)} has no open ${meta.label} position`);
      const px = priceOf(sym),
        entry = parseFloat(pos.openPrice);
      if (!nearMarket(entry, px, NEAR_MARKET_LOOSE))
        throw new Error(`Vest shows an entry of ${pos.openPrice}, nowhere near the market — move the stop yourself`);
      const h = { symbol: sym, side: pos.side, openPrice: entry, triggers: posLegs(pos) };
      const be = breakevenPlan(h, px, tick);
      if (be.why) throw new Error(be.why.replace(/\.$/, ''));
      await send('PUT', '/v3/positions/stop-loss', master, {
        positionId: posIdOf(pos),
        executionType: 'market',
        triggerPrice: fmt(be.price),
        stopLossId: be.sl.id,
      });
      const plan = S.plans[posIdOf(pos)];
      if (plan) {
        plan.moved = true;
        endPlan(plan, null);
      }
      logEvent('ok', `Breakeven: stop moved to ${fmt(be.price)} (entry ${fmt(entry)}, by hand).`);
      diag('breakeven', { outcome: 'moved-manual', positionId: posIdOf(pos), entry, stop: fmt(be.price), price: px });
    } catch (e) {
      const why =
        /HTTP 400/.test(e.message) && !e.message.includes('Price needs')
          ? `Vest refused the stop (price was too close to breakeven)`
          : e.message;
      logEvent('warn', `Breakeven: not moved — ${why}.`);
      diag('breakeven', {
        outcome: 'manual-refused',
        error: e.message,
        errorCode: errCode(e),
        price: priceOf(sym),
      });
    } finally {
      S.placing = false;
      updateTrade();
      refreshTradeState();
    }
  }
  async function closeNow() {
    if (S.placing || S.adjusting || S.flattening || S.arming) return;
    const master = S.master,
      sym = S.trade.symbol,
      meta = SYMBOLS[sym];
    if (!master) return;
    S.placing = true;
    updateTrade();
    try {
      const pos = await openPosition(master, sym);
      if (!pos) throw new Error(`${accLabel(master)} has no open ${meta.label} position`);
      const lev = orderLeverage(levFor(await fetchLeverages(), master, sym), maxLeverageFor(sym, master));
      await send('POST', '/v3/positions/close', master, closeBody(sym, posIdOf(pos), lev, master));
      logEvent(
        'ok',
        `Trade panel: CLOSE ${pos.quantity} ${meta.label} on ${accLabel(master)}${S.armed ? ' — the copier closes the followers' : ''}.`,
      );
      diag('trade_panel', { outcome: 'closed', positionId: posIdOf(pos), quantity: pos.quantity });
    } catch (e) {
      logEvent('warn', `Close: not sent — ${e.message}.`);
      diag('trade_panel', { outcome: 'close-failed', error: e.message, errorCode: errCode(e) });
    } finally {
      S.placing = false;
      updateTrade();
      refreshTradeState();
    }
  }

  // Scale out: take the picked share (25 or 50%) off the master's position at market, with Vest's own reduce order (the
  // body its close window sends). 100% is a close. The stop and targets stay where they are. It goes through the hooked
  // fetch, so an armed copier reduces each follower by the same share of its own position.
  async function reduceNow() {
    if (S.placing || S.adjusting || S.flattening || S.arming) return;
    const key = S.addPick || '25';
    if (key === 'max') return;
    if (key === '100') return closeNow(); // a close is never held back
    const siteHeld = siteBlocks();
    if (siteHeld) return toast(siteHeld);
    const master = S.master,
      sym = S.trade.symbol,
      meta = SYMBOLS[sym];
    if (!master) return;
    S.placing = true;
    updateTrade();
    try {
      const pos = await openPosition(master, sym);
      if (!pos) throw new Error(`${accLabel(master)} has no open ${meta.label} position`);
      const have = parseFloat(pos.quantity),
        q = floorStep(have * (key === '50' ? 0.5 : 0.25), meta.step);
      if (!(q > 0)) throw new Error(`${key}% of ${fmtQty(have, sym)} rounds to nothing at ${meta.label}'s size step`);
      const lev = orderLeverage(levFor(await fetchLeverages(), master, sym), maxLeverageFor(sym, master));
      const body = {
        positionId: posIdOf(pos),
        orderType: 'market',
        leverage: fmtNum(lev, 2),
        quantity: fmtQty(q, sym),
        timeInForce: 'IOC',
        reduceOnly: true,
        symbol: sym,
      };
      await send('POST', '/v3/positions/reduce', master, body);
      logEvent(
        'ok',
        `Trade panel: REDUCE ${body.quantity} ${meta.label} (${fmtQty(have, sym)} → ${fmtQty(have - q, sym)})${S.armed ? ' — the copier reduces the followers' : ''}. Stop and targets unchanged.`,
      );
      diag('trade_panel', { outcome: 'reduced', positionId: body.positionId, quantity: body.quantity, prevQty: have });
    } catch (e) {
      logEvent('warn', `Reduce: not sent — ${e.message}.`);
      diag('trade_panel', { outcome: 'reduce-failed', error: e.message, errorCode: errCode(e) });
    } finally {
      S.placing = false;
      updateTrade();
      refreshTradeState();
    }
  }

  // ── Breakeven engine. One plan per trade placed from the panel, saved so a page reload keeps watching. It watches the
  // live mark price; once due (TP1 crossed, or +X pts in favour) it moves the master's stop to entry + offset. That move
  // goes through the hooked fetch too, so an armed copier moves the followers' stops with it.
  const PLANS_KEY = 'vc-plans';
  const PLAN_NO_ENTRY_MS = 60000,
    PLAN_WATCH_MS = 5000,
    BE_RETRY_MS = 3000,
    BE_MAX_FAILURES = 5;
  S.plans = {};
  let _planTimer = null;
  function savePlans() {
    store.set(PLANS_KEY, S.plans);
  }
  function loadPlans() {
    const saved = store.get(PLANS_KEY, {});
    S.plans = {};
    // only plans that can be acted on: a position id, a known side and a market name
    if (saved && typeof saved === 'object')
      for (const [k, p] of Object.entries(saved))
        if (
          p &&
          typeof p === 'object' &&
          p.positionId === k &&
          typeof p.symbol === 'string' &&
          /^(long|short)$/.test(p.side)
        )
          S.plans[k] = p;
    const list = Object.values(S.plans);
    list.forEach((p) => {
      p.busy = false; // nothing is in flight after a reload
      p.reanchoring = false;
      watchPrice(p.symbol);
      if (!(p.entry > 0)) fillEntry(p); // reloaded before its entry was known
    });
    if (list.length) startPlanWatch();
  }
  function addPlan(p) {
    S.plans[p.positionId] = p;
    savePlans();
    watchPrice(p.symbol);
    startPlanWatch();
    if (!p.reanchoring && !(p.entry > 0)) fillEntry(p); // re-anchor supplies the entry when it runs
    updateTrade();
  }
  function endPlan(p, why) {
    if (S.plans[p.positionId] !== p) return; // already replaced (an add rebuilt it) or ended
    delete S.plans[p.positionId];
    savePlans();
    if (why) logEvent('info', why);
    unwatchUnused();
    updateTrade();
  }
  async function fillEntry(p) {
    // the real fill price: breakeven is measured from it
    for (let i = 0; i < 4 && !(p.entry > 0); i++) {
      if (i) await sleep(1200);
      const f = await fillInfo(p.master, p.symbol, p.orderId, i ? 0 : FEED_FILL_WAIT_MS);
      if (f && f.price > 0) p.entry = f.price;
    }
    if (!(p.entry > 0)) {
      try {
        const pos = await openPosition(p.master, p.symbol, p.positionId);
        const open = pos ? parseFloat(pos.openPrice) : NaN;
        if (pos && nearMarket(open, priceOf(p.symbol) || open, NEAR_MARKET_LOOSE)) p.entry = open;
        else return endPlan(p, "Breakeven: the trade didn't open, nothing to watch.");
      } catch {
        /* best effort: nothing to do if this fails */
      }
    }
    savePlans();
    updateTrade();
  }
  function checkPlans(sym, px) {
    if (siteBlocks()) return; // paused while Vest's update is unchecked or failed the check
    for (const p of Object.values(S.plans)) {
      if (
        p.symbol !== sym ||
        p.moved ||
        p.busy ||
        p.reanchoring ||
        !(p.entry > 0) ||
        (p.retryAt && Date.now() < p.retryAt)
      )
        continue;
      if (!nearMarket(p.entry, px, NEAR_MARKET_LOOSE)) {
        // an implausible entry is never acted on
        endPlan(
          p,
          `Breakeven: stopped watching — its entry (${p.entry}) is nowhere near the market. Manage this stop yourself.`,
        );
        diag('breakeven', {
          outcome: 'dropped-bad-entry',
          positionId: p.positionId,
          entry: p.entry,
          tp1: p.tp1,
          price: px,
        });
        continue;
      }
      if (!p.triggered) {
        // sticky: once TP1 / +X is reached, it stays due
        const tp1Hit = p.side === 'long' ? px >= p.tp1 : px <= p.tp1;
        p.triggered = breakevenDue({
          mode: p.beMode,
          side: p.side,
          entry: p.entry,
          price: px,
          triggerPts: p.beTrigger,
          tp1Filled: tp1Hit,
          alreadyMoved: false,
        });
        if (!p.triggered) continue;
        savePlans();
      }
      moveToBreakeven(p, px);
    }
  }
  // Price must be clear of breakeven by BE_CLEAR_TICKS (Vest refuses a stop the price has passed). Before moving, the
  // position is re-read: the stop is measured from the worse of the plan's entry and Vest's average (never locks in a
  // loss), and a stop already at or past breakeven (moved by hand, say) is left alone.
  const BE_WAIT_MS = 2000;
  async function moveToBreakeven(p, price) {
    const tick = (SYMBOLS[p.symbol] || SYMBOLS[DEFAULT_SYMBOL]).tick,
      long = p.side === 'long';
    const { px, clear } = beRef(p.symbol, p.side, price, tick);
    const beAt = (entry) => breakevenPrice({ side: p.side, entry, offsetPts: p.beOffset, tick });
    const tooClose = (be) => (long ? px <= be + clear : px >= be - clear);
    if (tooClose(beAt(p.entry))) return; // a stop must stay clear of price on the losing side: wait
    if (!nearMarket(beAt(p.entry), px, NEAR_MARKET_LOOSE))
      return endPlan(p, `Breakeven: computed stop ${beAt(p.entry)} is nowhere near the market — not moved.`);
    p.busy = true;
    try {
      let pos;
      try {
        pos = await openPosition(p.master, p.symbol, p.positionId);
      } catch {
        p.retryAt = Date.now() + BE_WAIT_MS; // couldn't read it: try again shortly
        return;
      }
      if (!pos) return endPlan(p, 'Breakeven: trade closed — stopped watching.');
      const avg = parseFloat(pos.openPrice);
      const entry =
        avg > 0 && nearMarket(avg, px, NEAR_MARKET_LOOSE)
          ? long
            ? Math.max(p.entry, avg)
            : Math.min(p.entry, avg)
          : p.entry;
      const be = beAt(entry);
      if (tooClose(be)) {
        p.retryAt = Date.now() + BE_WAIT_MS; // Vest's average is worse than the plan's entry: wait for price
        return;
      }
      const sls = posLegs(pos).filter((l) => l.kind === 'sl');
      const sl = sls.find((l) => l.id === p.stopLegId) || sls[0];
      if (!sl) return endPlan(p, 'Breakeven: no stop on this trade to move.');
      if (long ? sl.price >= be - tick / 2 : sl.price <= be + tick / 2)
        return endPlan(p, `Breakeven: the stop (${sl.price}) is already at or past breakeven — left as it is.`);
      p.stopLegId = sl.id;
      const body = {
        positionId: p.positionId,
        executionType: 'market',
        triggerPrice: fmtNum(be, decimalsOf(tick)),
        stopLossId: p.stopLegId,
      };
      await send('PUT', '/v3/positions/stop-loss', p.master, body);
      p.moved = true;
      const why = p.beMode === 'tp1' ? 'TP1 reached' : `+${p.beTrigger} pts reached`;
      logEvent(
        'ok',
        `Breakeven: stop moved to ${body.triggerPrice} (${why}, entry ${fmtNum(entry, decimalsOf(tick))}).`,
      );
      diag('breakeven', {
        outcome: 'moved',
        positionId: p.positionId,
        entry,
        planEntry: p.entry,
        vestAvg: avg,
        stop: body.triggerPrice,
        mode: p.beMode,
        price: px,
      });
      endPlan(p, null);
    } catch (e) {
      p.failures = (p.failures || 0) + 1;
      diag('breakeven', {
        outcome: 'failed',
        positionId: p.positionId,
        error: e.message,
        errorCode: errCode(e),
        attempt: p.failures,
      });
      if (p.failures >= BE_MAX_FAILURES) {
        endPlan(
          p,
          `Breakeven: Vest refused the stop move ${p.failures} times (${e.message}) — move your stop yourself.`,
        );
      } else {
        p.retryAt = Date.now() + BE_RETRY_MS;
        logEvent('warn', `Breakeven: stop move failed (${e.message}) — retrying.`);
      }
    } finally {
      p.busy = false;
      savePlans();
    }
  }
  function startPlanWatch() {
    // end plans whose trade has closed (stop, target, manual)
    if (_planTimer) return;
    _planTimer = setInterval(async () => {
      const list = Object.values(S.plans);
      if (!list.length) {
        clearInterval(_planTimer);
        _planTimer = null;
        return;
      }
      if (feedLive() && !list.some((p) => !(p.entry > 0))) return; // the live feed ends a plan the moment its trade closes
      for (const master of [...new Set(list.map((p) => p.master))]) {
        try {
          const r = await api('/v3/positions/opened', (await mintAccountToken(master)).token);
          const open = new Set(((r && r.positions) || []).map(posIdOf));
          list
            .filter((p) => p.master === master && p.entry > 0 && !open.has(p.positionId))
            .forEach((p) => endPlan(p, 'Breakeven: trade closed — stopped watching.'));
          list
            .filter(
              (p) => p.master === master && !(p.entry > 0) && !p.reanchoring && Date.now() - p.at > PLAN_NO_ENTRY_MS,
            )
            .forEach((p) =>
              endPlan(p, "Breakeven: couldn't find this trade's entry — stopped watching. Manage the stop yourself."),
            );
        } catch {
          /* best effort: nothing to do if this fails */
        }
      }
    }, PLAN_WATCH_MS);
  }
  if (window.__VC_TEST__) window.__vcPlans = () => S.plans;
  if (window.__VC_TEST__) window.__vcState = () => S;
  if (window.__VC_TEST__) window.__vcRender = () => render();

  const DEFAULT_TARGET_PTS = 20;
  // The position's bracket on one line, to scale: the stop on the left, the targets to the right, the entry and the price
  // now between them (in the trade's favour to the right, long or short). Labels that would collide are left out.
  function bracketHtml(h, sls, tps, price, tick) {
    if (!sls.length && !tps.length) return '<div class="hint">No stop or targets on this position.</div>';
    const dir = h.side === 'long' ? 1 : -1,
      x = (v) => dir * (v - h.openPrice);
    const marks = [
      ...sls.map((l) => ({ k: 'SL', v: l.price, cls: 'bad' })),
      { k: 'IN', v: h.openPrice, cls: '' },
      ...tps.map((l, i) => ({ k: 'TP' + (i + 1), v: l.price, cls: 'up' })),
    ];
    const xs = marks.map((m) => x(m.v)).concat(price > 0 ? [x(price)] : []);
    const lo = Math.min(...xs),
      span = Math.max(...xs) - lo || 1;
    const pos = (v) => Math.max(0, Math.min(100, ((x(v) - lo) / span) * 100));
    // the last digits are enough on a small bar: 31,162.50 → 162.50
    const short = (v) => {
      const t = fmtPx(v, tick),
        i = t.lastIndexOf(',');
      return i >= 0 ? t.slice(i + 1) : t;
    };
    const e = pos(h.openPrice),
      sl = sls.length ? pos(sls[0].price) : null,
      now = price > 0 ? pos(price) : null;
    let html = '<span class="bk-tr"></span>';
    if (sl !== null) html += `<span class="bk-r" style="left:${Math.min(sl, e)}%;width:${Math.abs(e - sl)}%"></span>`;
    if (now !== null)
      html += `<span class="bk-${now >= e ? 'g' : 'l'}" style="left:${Math.min(now, e)}%;width:${Math.abs(now - e)}%"></span>`;
    html += marks.map((m) => `<span class="bk-t ${m.cls}" style="left:${pos(m.v)}%"></span>`).join('');
    if (now !== null)
      html += `<span class="bk-now" style="left:${now}%" title="Price now ${fmtPx(price, tick)}"></span>`;
    let lastAt = -100;
    for (const m of [...marks].sort((a, b) => pos(a.v) - pos(b.v))) {
      const p = pos(m.v);
      if (p - lastAt < 13) continue;
      lastAt = p;
      const al = p < 8 ? ' l' : p > 92 ? ' r' : '';
      html += `<span class="bk-lb${al}" style="left:${p}%"><b class="${m.cls}">${m.k}</b>${esc(short(m.v))}</span>`;
    }
    return `<div class="bk">${html}</div>`;
  }
  function renderTargets(body) {
    const box = body.querySelector('#tr-targets');
    // ladder rows, farthest target on top (Buy prices rise up the right column, Sell prices fall down the left)
    box.innerHTML = S.trade.targets
      .map(
        (p, i) => `
      <div class="tr-lr tr-tgt"><span class="tr-sp" id="ls-t${i}"></span><span class="tr-mid"><span class="tr-n">TP${i + 1}</span>
        <input class="tr-in tr-pt" data-t="${i}" inputmode="decimal" aria-label="Target ${i + 1}, in points" value="${esc(p)}">
        <span class="tr-q" id="tq${i}"></span><span class="tr-g" id="tg${i}"></span>
        <button class="tr-x" data-del="${i}" title="Remove target ${i + 1}" aria-label="Remove target ${i + 1}"
          ${S.trade.targets.length < 2 ? 'disabled' : ''}>×</button></span><span class="tr-bp" id="lb-t${i}"></span></div>`,
      )
      .reverse()
      .join('');
    box.querySelectorAll('[data-t]').forEach((el) =>
      el.addEventListener('input', () => {
        const v = el.value.trim();
        S.trade.targets[+el.dataset.t] = v !== '' && Number.isFinite(+v) ? +v : '';
        saveTrade();
        updateTrade();
      }),
    );
    box.querySelectorAll('[data-del]').forEach(
      (b) =>
        (b.onclick = () => {
          S.trade.targets.splice(+b.dataset.del, 1);
          saveTrade();
          renderTargets(body);
          updateTrade();
        }),
    );
  }

  function updateTrade() {
    const body = _root && _root.querySelector('.body');
    if (!body || body.dataset.view !== 'trade' || !body.querySelector('.trade')) return;
    const c = tradeCalc(),
      $ = (id) => body.querySelector('#' + id);
    const set = (id, v) => {
      const el = $(id);
      if (el && el.textContent !== v) el.textContent = v;
    };
    const symHtml = `${esc(c.meta.label)}${c.lev ? ` <span class="chip" title="Leverage on ${esc(c.t.symbol)}">${c.lev}x</span>` : ''}`;
    if ($('tr-sym').dataset.html !== symHtml) $('tr-sym').innerHTML = $('tr-sym').dataset.html = symHtml;
    $('tr-px').textContent = fmtPx(c.price, c.meta.tick);
    const pr = S.price[c.t.symbol] || {},
      fp = (n) => fmtPx(n, c.meta.tick);
    $('tr-px').title =
      [
        recentAt(pr.bookAt) && `Mid of the book (bid ${fp(pr.bid)} · ask ${fp(pr.ask)})`,
        recentAt(pr.lastAt) && `last trade ${fp(pr.last)}`,
        recentAt(pr.at) && `mark ${fp(pr.px)}`,
      ]
        .filter(Boolean)
        .join(' · ') || 'Waiting for a live price';
    body
      .querySelectorAll('[data-seg]')
      .forEach((g) =>
        g.querySelectorAll('button').forEach((b) => b.classList.toggle('on', S.trade[g.dataset.seg] === b.dataset.v)),
      );
    $('tr-size').style.display = c.t.sizeMode === 'max' ? 'none' : '';
    // minis and micros (NQ, ES, RTY): which unit the size is in
    const unit = tradeUnit(),
      hasUnits = !!MICRO_UNITS[c.t.symbol];
    $('tr-unitrow').hidden = !hasUnits || !!c.held;
    body.querySelectorAll('[data-seg="unit"] button').forEach((b) => b.classList.toggle('on', b.dataset.v === unit));
    set(
      'tr-unitnote',
      hasUnits && unit !== 'units'
        ? `1 ${unit} = ${unitSize()} units`
        : hasUnits
          ? `micro = ${MICRO_UNITS[c.t.symbol]} units`
          : '',
    );
    const uq = (q) => fmtUnits(q, c.t.symbol); // a size in the chosen unit, with its word
    const uqn = (q) => fmtUnits(q, c.t.symbol, false); // just the number
    const maxNote =
      c.maxQty === null
        ? ''
        : `Vest's 100% at ${c.lev}x${c.limitedBy && c.limitedBy !== S.master ? `, limited by ${accLabel(c.limitedBy)}` : ''}`;
    set(
      'tr-sizecalc',
      c.pick
        ? `Add uses ${c.pick.label} (${fmtQty(c.qty, c.t.symbol)}): click it again for this size`
        : c.t.sizeMode === 'max' && c.qty > 0
          ? `= ${unit === 'units' ? fmtQty(c.qty, c.t.symbol) + ' contracts' : uq(c.qty)} · ${maxNote}`
          : '',
    );
    set(
      'tr-sizeq',
      c.qty > 0 && c.t.sizeMode !== 'max'
        ? c.t.sizeMode === 'risk'
          ? `= ${unit === 'units' ? fmtQty(c.qty, c.t.symbol) + ' ct' : uq(c.qty)}`
          : +c.t.stopPts > 0
            ? `${fmtUsd(c.risk)} at stop`
            : ''
        : '',
    );
    $('tr-stopcalc').textContent = c.qty > 0 && +c.t.stopPts > 0 ? `−${fmtUsd(c.risk)}` : '';
    // The allowed range, live: how much can be risked and where the stop may go on this account right now
    const L = c.limits,
      stopNow = +c.t.stopPts || 0,
      room = L.maxRiskRoom !== null ? ` · ${money(L.maxRiskRoom)} max before the floor` : '';
    let sizeLim = '',
      stopLim = '',
      stopBad = false;
    if (c.t.sizeMode === 'risk') {
      if (L.maxRiskAtStop !== null && stopNow > 0)
        sizeLim = `Can risk up to ${money(L.maxRiskAtStop)} at ${stopNow} pts${room}`;
      if (L.minStop !== null && +c.t.risk > 0) {
        stopBad = stopNow > 0 && stopNow < L.minStop;
        stopLim = `Stop must be at least ${L.minStop} pts to risk ${money(+c.t.risk)}`;
      }
    } else if (c.maxQty !== null && c.t.sizeMode === 'qty') {
      sizeLim = `Up to ${fmtQty(c.maxQty, c.t.symbol)} contracts at ${c.lev}x${room}`;
    }
    if (c.t.sizeMode !== 'risk' && L.maxStop !== null && c.qty > 0) {
      stopBad = stopNow >= L.maxStop;
      stopLim = `Stop must be under ${L.maxStop} pts at ${fmtQty(c.qty, c.t.symbol)} contracts, or the account fails first`;
    }
    set('tr-sizelim', sizeLim);
    set('tr-stoplim', stopLim);
    $('tr-stoplim').classList.toggle('bad', stopBad);
    // these lines only show when the limit bites, or nearly does (within 20%)
    const NEAR = 0.8;
    const sizeNear =
      !!c.blocked ||
      (c.t.sizeMode === 'risk'
        ? (L.maxRiskAtStop !== null && +c.t.risk > L.maxRiskAtStop * NEAR) ||
          (L.maxRiskRoom !== null && +c.t.risk > L.maxRiskRoom * NEAR)
        : c.t.sizeMode === 'qty' && c.maxQty !== null && c.qty > c.maxQty * NEAR);
    const stopNear =
      stopBad ||
      (c.t.sizeMode === 'risk'
        ? L.minStop !== null && stopNow < L.minStop / NEAR
        : L.maxStop !== null && stopNow > L.maxStop * NEAR);
    $('tr-sizelim').classList.toggle('quiet', !sizeNear);
    $('tr-stoplim').classList.toggle('quiet', !stopNear);
    c.t.targets.forEach((p, i) => {
      const q = c.qtys[i],
        qe = $('tq' + i),
        ge = $('tg' + i);
      if (qe) qe.textContent = q ? uqn(q) : '—';
      if (ge) ge.textContent = q ? '+' + fmtUsd(q * (+p || 0) * c.meta.pointValue) : '';
    });
    $('tr-betrigw').style.display = c.t.beMode === 'points' ? '' : 'none';
    body.querySelector('.tr-be').style.display = c.t.beMode === 'off' ? 'none' : '';
    // the folded lines: how the targets split, and when the stop moves to breakeven
    set(
      'tr-splittxt',
      `Split ${c.t.scale === 'start' ? 'front-loaded' : c.t.scale === 'end' ? 'back-loaded' : 'even'}${
        c.qtys.length > 1 ? ' · ' + c.qtys.map(uqn).join(' / ') : ''
      }`,
    );
    set(
      'tr-betxt',
      c.t.beMode === 'off'
        ? 'Auto breakeven off'
        : `Breakeven ${c.t.beMode === 'tp1' ? 'after TP1' : `at +${c.t.beTrigger || 0} pts`}${+c.t.beOffset > 0 ? `, locks ${c.t.beOffset} pts` : ''}`,
    );
    // in a trade the setup (size, stop, targets, Auto BE for a new trade) is put away: Scale and the trade's own
    // stop and targets apply
    const held = !!c.held;
    $('tr-setup').hidden = held;
    $('tr-lims').hidden = held;
    $('tr-pacts').hidden = !held;
    $('tr-sum').innerHTML =
      c.qty > 0 && c.qtys.length
        ? `${c.held ? 'This add · ' : ''}Risk <b>${fmtUsd(c.risk)}</b>${c.fees > 0 ? ` + ${fmtUsd(c.fees)} fees` : ''} · Reward <b>${fmtUsd(c.reward)}</b> · <b>${c.risk > 0 ? (c.reward / c.risk).toFixed(2) : '—'}R</b>`
        : '';
    set(
      'tr-lhm',
      !c.held && c.qty > 0 && c.qtys.length && c.risk > 0
        ? `risk ${fmtUsd(c.risk)} · ${(c.reward / c.risk).toFixed(2)}R`
        : 'pts · qty · $',
    );
    $('tr-lhm').title = $('tr-sum').textContent;
    const fixHtml = c.fixes
      .map(
        (f, i) =>
          `<button class="tr-usemax" data-fix="${i}" data-act="${f.act === 'max' ? 'usemax' : 'fix-' + f.act}">${esc(f.label)}</button>`,
      )
      .join(' ');
    // In a trade, warnings and errors about the next add go on the status line under the add buttons instead (below).
    const warnHtml = c.held
      ? ''
      : (c.blocked
          ? `<div class="tr-block">${esc(c.blocked)}${fixHtml ? `<div class="tr-fixes">${fixHtml}</div>` : ''}</div>`
          : '') + c.warnings.map((w) => `<div>${esc(w.text)}</div>`).join('');
    const warnBox = $('tr-warn');
    if (warnBox.dataset.html !== warnHtml) {
      // rewrite only on change, so a click on a fix isn't lost to a price tick
      warnBox.dataset.html = warnHtml;
      warnBox.innerHTML = warnHtml;
      warnBox.querySelectorAll('[data-fix]').forEach((b) => {
        const f = c.fixes[+b.dataset.fix];
        b.onclick = () => {
          if (f.act === 'max') S.trade.sizeMode = 'max';
          else if (f.act === 'stop') {
            S.trade.stopPts = f.value;
            $('tr-stop').value = f.value;
          } else if (f.act === 'risk') {
            S.trade.risk = f.value;
            $('tr-size').value = f.value;
          }
          saveTrade();
          updateTrade();
        };
      });
    }
    $('tr-err').textContent = c.held
      ? ''
      : c.error ||
        (c.blocked ? 'Over what the account can open: use a fix above, or change the size or stop.' : '') ||
        (S.adjusting ? 'Adjusting stop & targets…' : '');
    const q = c.qty > 0 ? fmtQty(c.qty, c.t.symbol) : '';
    const h = c.held,
      busy = !!S.placing || !!S.adjusting || !!S.flattening || !!S.arming;
    const nf = S.armed ? S.followers.size : 0;
    $('tr-who').hidden = !!c.held; // in a trade, the position card says it
    $('tr-who').textContent = S.master
      ? `On ${accLabel(S.master)}${nf ? ` · copies to ${nf} follower${nf > 1 ? 's' : ''}` : ' · not copied (copying is off)'}`
      : '';
    const lim = c.t.orderType === 'limit' && !h,
      qw = c.qty > 0 ? (unit === 'units' ? q : uq(c.qty)) : '';
    $('tr-buy').textContent = h && h.side === 'long' ? `Add ${qw}` : `Buy${lim ? ' limit' : ''} ${qw}`.trim();
    $('tr-sell').textContent = h && h.side === 'short' ? `Add ${qw}` : `Sell${lim ? ' limit' : ''} ${qw}`.trim();
    $('tr-buy').hidden = !!h && h.side !== 'long';
    $('tr-sell').hidden = !!h && h.side !== 'short';
    $('tr-buy').disabled = $('tr-sell').disabled = !!c.error || !!c.blocked || busy;
    $('tr-pos').hidden = !h;
    // limits: a new trade only, so the limit row shows when flat; while picking, the pick replaces both rows
    if (h && S.pick) stopPick(true);
    const pk = S.pick;
    $('tr-mgo').hidden = !!pk || !!h; // in a trade, ADD and REDUCE sit under the Scale chips
    $('tr-lgo').hidden = true; // Limit is the Order switch now; these stay for the chart pick's own code
    $('tr-lbuy').disabled = $('tr-lsell').disabled = !!c.error || !!c.blocked || busy;
    $('tr-pick').hidden = !pk;
    if (pk) {
      const lp = pk.price,
        wrongSide = lp > 0 && c.price > 0 && (pk.side === 'long' ? lp >= c.price : lp <= c.price);
      set(
        'tr-picktxt',
        wrongSide
          ? `A ${pk.side === 'long' ? 'buy' : 'sell'} limit goes ${pk.side === 'long' ? 'below' : 'above'} the mark`
          : pk.chart
            ? "Click Vest's chart to set the price"
            : 'Type the limit price',
      );
      $('tr-picktxt').className = wrongSide ? 'bad' : '';
      $('tr-place').textContent =
        lp > 0
          ? `Place ${pk.side === 'long' ? 'Buy' : 'Sell'} LMT ${q} @ ${fmtPx(lp, c.meta.tick)}`
          : `Place ${pk.side === 'long' ? 'Buy' : 'Sell'} LMT`;
      $('tr-place').className = 'tr-place ' + pk.side;
      $('tr-place').disabled = !(lp > 0) || wrongSide || !!c.error || !!c.blocked || busy;
      drawPickLine(c.qty);
    }
    if (h) {
      const tick = c.meta.tick,
        dir = h.side === 'long' ? 1 : -1;
      const pnl = c.price > 0 ? dir * h.qty * (c.price - h.openPrice) * c.meta.pointValue : null;
      const entry = [...Object.values(S.posMap)].find((e) => e.symbol === h.symbol && e.master === S.master);
      const accts = S.armed && entry ? 1 + Object.keys(entry.followers || {}).length : 1;
      set('tr-pside', h.side === 'long' ? 'Long' : 'Short');
      $('tr-pside').className = 'tr-side ' + h.side;
      set('tr-pqty', `${fmtQty(h.qty, h.symbol)} ${c.meta.label}${unit !== 'units' ? ` · ${uq(h.qty)}` : ''}`);
      set(
        'tr-pavg',
        `avg ${fmtPx(h.openPrice, tick)} · ${accts} account${accts === 1 ? '' : 's'}${
          accts > 1 && pnl !== null && !S.capFit ? ` · ${pnl >= 0 ? '+' : '−'}${fmtUsd(pnl * accts)} total` : ''
        }`,
      );
      const ptsNow = c.price > 0 ? dir * (c.price - h.openPrice) : null;
      set(
        'tr-ppts',
        ptsNow === null ? '' : `${ptsNow >= 0 ? '+' : '−'}${fmtNum(Math.abs(ptsNow), decimalsOf(tick))} pts`,
      );
      // where the stop and targets sit on Vest now (the stop with what it makes or loses from the average)
      const legs = (h.triggers || []).slice().sort((a, b) => dir * (a.price - b.price));
      const sls = legs.filter((l) => l.kind === 'sl'),
        tps = legs.filter((l) => l.kind === 'tp');
      const lvHtml =
        sls
          .map((l) => {
            const v = dir * (l.price - h.openPrice) * h.qty * c.meta.pointValue;
            return `<span class="tr-lv sl">SL <b>${fmtPx(l.price, tick)}</b><i>${v >= 0 ? '+' : '−'}${fmtUsd(v)}</i></span>`;
          })
          .join('') +
          tps.map((l, i) => `<span class="tr-lv tp">TP${i + 1} <b>${fmtPx(l.price, tick)}</b></span>`).join('') ||
        '<span class="tr-lv none">No stop or targets on this position</span>';
      const lvBox = $('tr-lvls');
      if (lvBox.dataset.html !== lvHtml) lvBox.innerHTML = lvBox.dataset.html = lvHtml;
      // The bracket, drawn to scale: stop on the left, targets to the right, the entry and the price now between
      const brk = $('tr-brk'),
        brkHtml = bracketHtml(h, sls, tps, c.price, tick);
      if (brk.dataset.html !== brkHtml) brk.innerHTML = brk.dataset.html = brkHtml;
      const K2 = c.risk2,
        usd2 = (n) => '$' + Math.round(Math.abs(n)).toLocaleString('en-US');
      const frac = K2.room > 0 && K2.now !== null ? K2.now / K2.room : 0;
      $('tr-prnow').style.width = Math.max(0, Math.min(100, frac * 100)).toFixed(1) + '%';
      $('tr-prnow').className = frac >= 1 ? 'hot' : frac >= 0.8 ? 'warn' : '';
      $('tr-prisk').innerHTML =
        K2.now === null
          ? '<span class="warn">no stop on this position</span>'
          : K2.room > 0
            ? `<b>${usd2(K2.now)}</b> of ${usd2(K2.room)} · <span class="${frac >= 0.8 ? 'warn' : 'ok'}">${usd2(K2.room - K2.now)} left</span>`
            : '';
      set('tr-ppl', pnl === null ? '' : (pnl >= 0 ? '+' : '−') + fmtUsd(pnl));
      $('tr-ppl').className = 'tr-ppl ' + (pnl === null ? '' : pnl >= 0 ? 'pos' : 'neg');
      const be = breakevenPlan(h, c.price, tick);
      $('tr-be').textContent = be.price > 0 ? `Breakeven ${fmtPx(be.price, tick)}` : 'Breakeven';
      $('tr-be').disabled = busy || !!be.why;
      $('tr-be').title = be.why || `Move the stop to ${fmtPx(be.price, tick)}, your average entry`;
      $('tr-close').textContent = `Close ${fmtQty(h.qty, h.symbol)}`;
      $('tr-close').disabled = busy;
      // Scale chips: a share of the position (or MAX, adds only) that sizes both ADD and REDUCE; one is always picked
      const key = (c.pick && c.pick.key) || '25',
        step = c.meta.step;
      const redQ = key === '100' ? h.qty : key === 'max' ? 0 : floorStep(h.qty * (key === '50' ? 0.5 : 0.25), step);
      const chipsHtml = (c.chips || [])
        .map((x) => {
          const off = x.key === 'max' ? 'adds only' : `reduce ${fmtQty(x.key === '100' ? h.qty : x.qty, h.symbol)}`;
          const tip = `${x.label === 'MAX' ? 'MAX' : x.label + '%'}: add ${fmtQty(x.qty, h.symbol)}${x.why ? ` (${x.why})` : ''} · ${off}`;
          return `<button class="tr-chip${key === x.key ? ' on' : ''}${x.why ? ' no' : ''}" data-add="${x.key}" ${busy ? 'disabled' : ''}
              title="${esc(tip)}"><b>${x.label}</b><span>${esc(x.why || fmtQty(x.qty, h.symbol))}</span></button>`;
        })
        .join('');
      const box = $('tr-chips');
      if (box.dataset.html !== chipsHtml) {
        box.dataset.html = chipsHtml;
        box.innerHTML = chipsHtml;
        box.querySelectorAll('[data-add]').forEach(
          (b) =>
            (b.onclick = () => {
              S.addPick = b.dataset.add;
              updateTrade();
            }),
        );
      }
      const addBtn = $('tr-addbtn'),
        redBtn = $('tr-reduce');
      addBtn.className = h.side === 'long' ? 'tr-buy' : 'tr-sell';
      addBtn.textContent = c.qty > 0 ? `Add ${fmtQty(c.qty, h.symbol)}` : 'Add';
      addBtn.disabled = busy || !!c.error || !!c.blocked || !(c.qty > 0);
      addBtn.title =
        c.pick && c.pick.why
          ? `Add: ${c.pick.why}`
          : `Add ${fmtQty(c.qty, h.symbol)} to the ${h.side}${S.armed ? ' (the copier adds to each follower, scaled)' : ''}. The stop and targets stay where they are.`;
      redBtn.textContent = key === '100' ? 'Reduce all' : redQ > 0 ? `Reduce ${fmtQty(redQ, h.symbol)}` : 'Reduce';
      redBtn.disabled = busy || key === 'max' || !(redQ > 0);
      redBtn.title =
        key === 'max'
          ? 'MAX is for adds: pick 25, 50 or 100 to reduce'
          : key === '100'
            ? `Close the whole ${fmtQty(h.qty, h.symbol)}${S.armed ? ' (the copier closes the followers)' : ''}`
            : `Take ${fmtQty(redQ, h.symbol)} off at market${S.armed ? ' (the copier reduces each follower by the same share)' : ''}. The stop and targets stay where they are.`;
      $('tr-addbox').hidden = !S.addOpen;
      $('tr-addfold').setAttribute('aria-expanded', String(!!S.addOpen));
      $('tr-addfold').classList.toggle('open', !!S.addOpen);
      set(
        'tr-copies',
        S.armed && S.followers.size
          ? `Every change copies to ${S.followers.size} follower${S.followers.size === 1 ? '' : 's'}`
          : '',
      );
      const addQ = c.qty > 0 ? c.qty : 0,
        tot = h.qty + addQ;
      const avgA = tot > 0 ? (h.qty * h.openPrice + addQ * c.price) / tot : 0;
      const o = c.sides[h.side];
      // One status line under the add buttons that is always there and never wraps, so nothing moves as the open P&L
      // swings a warning on and off: what the add would do, or the most important reason it can't or shouldn't go
      // (the full sentence is the tooltip).
      const addTxt = fmtQty(addQ, h.symbol);
      let pvHtml = '',
        pvTitle = '';
      if (c.error) [pvHtml, pvTitle] = [`<span class="warn">${esc(c.error)}</span>`, c.error];
      else if (c.blocked) {
        const max = fmtQty(c.maxQty, c.t.symbol);
        pvHtml = `<span class="hot">Add ${esc(addTxt)}: over ${esc(accLabel(c.limitedBy))}'s max (${esc(max)})</span>`;
        pvTitle = `Add ${addTxt}: more than ${accLabel(c.limitedBy)} can open (max ${max}). Pick a smaller add.`;
      } else if (c.warnings.length && o && o.loss > 0) {
        pvHtml = `<span class="warn">Add ${esc(addTxt)}: stop-out ${fmtUsd(o.loss)}, ${fmtUsd(o.room)} left</span>`;
        pvTitle = `Add ${addTxt}: a stop-out after it would lose about ${fmtUsd(o.loss)} with fees, more than the ${fmtUsd(o.room)} left to the floor.`;
      } else if (addQ > 0 && c.price > 0) {
        pvHtml = `<span>→ <b>${fmtQty(tot, h.symbol)}</b> · avg <b>${fmtPx(avgA, tick)}</b></span>${o && o.loss > 0 ? `<span>stop-out <b>${fmtUsd(o.loss)}</b></span>` : ''}`;
        pvTitle =
          'After this add: the new size and average, and what a stop-out would then cost. The stop and targets stay where they are.';
      }
      if ($('tr-addpv').dataset.html !== pvHtml) $('tr-addpv').innerHTML = $('tr-addpv').dataset.html = pvHtml;
      $('tr-addpv').title = pvTitle;
    } else if (S.addPick) S.addPick = null; // flat again: chips reset
    // The ladder: Buy prices on the right, Sell prices on the left, from the live mark (re-placed from the fill).
    const ok = !c.error && c.price > 0;
    const px = (n) => (ok && n > 0 ? fmtPx(roundTick(n, c.meta.tick), c.meta.tick) : '—');
    const h2 = c.held,
      lad = body.querySelector('.tr-lad');
    const pk2 = !h2 && S.pick && S.pick.price > 0 ? S.pick : null;
    lad.classList.toggle('one', !!h2 || !!pk2);
    // one side at a time: the side of the Buy or Sell button you're pointing at (else the side last traded)
    const lside = S.ladSide || 'long';
    lad.classList.toggle('side-long', lside === 'long');
    lad.classList.toggle('side-short', lside === 'short');
    $('tr-lhs').hidden = !!(h2 || pk2);
    set('tr-lhs', lside === 'long' ? 'If you buy' : 'If you sell');
    $('tr-lhs').className = 'tr-flip ' + lside;
    set('tr-lhb', h2 ? 'Price' : pk2 ? (pk2.side === 'long' ? 'Buy at' : 'Sell at') : 'Price');
    $('tr-mkrow').hidden = !(h2 || pk2) || !ok;
    if (pk2) {
      // a limit: its stop and targets measured from the limit price (it fills there or better)
      const lv = planPrices({
        side: pk2.side,
        entry: pk2.price,
        stopPts: +c.t.stopPts,
        targetPts: c.t.targets.map(Number),
        tick: c.meta.tick,
      });
      c.t.targets.forEach((_, i) => set('lb-t' + i, px(lv.targets && lv.targets[i])));
      set('lb-stop', px(lv.stop));
      set('lb-entry', px(pk2.price));
      set('tr-entry', c.qty > 0 ? `Limit · ${fmtQty(c.qty, c.t.symbol)}` : 'Limit');
      set('tr-stopq', c.qty > 0 ? fmtQty(c.qty, c.t.symbol) : '');
      const away = Math.abs(c.price - pk2.price);
      set('tr-mk', `Price · ${fmtNum(away, decimalsOf(c.meta.tick))} pts away`);
      set('lb-mk', px(c.price));
      $('tr-failrow').hidden = $('tr-passrow').hidden = true; // measured from the mark: not for a resting limit
    } else if (h2) {
      // in a trade the ladder (part of the setup for a new trade) is put away: the trade keeps its own stop and targets
    } else {
      c.t.targets.forEach((_, i) => {
        set('lb-t' + i, px(c.long.targets && c.long.targets[i]));
        set('ls-t' + i, px(c.short.targets && c.short.targets[i]));
      });
      set('lb-stop', px(c.long.stop));
      set('ls-stop', px(c.short.stop));
      set('lb-entry', px(c.price));
      set('ls-entry', px(c.price));
      set('tr-entry', c.qty > 0 ? `Entry · ${fmtQty(c.qty, c.t.symbol)}` : 'Entry');
      set('tr-stopq', c.qty > 0 ? fmtQty(c.qty, c.t.symbol) : '');
      const sl = c.sides.long,
        ss = c.sides.short;
      set('lb-fail', px(sl && sl.fail));
      set('ls-fail', px(ss && ss.fail));
      set('lb-pass', px(sl && sl.pass));
      set('ls-pass', px(ss && ss.pass));
      $('tr-failrow').hidden = !ok || !((sl && sl.fail) || (ss && ss.fail));
      $('tr-passrow').hidden = !ok || !((sl && sl.pass) || (ss && ss.pass));
    }
    const note =
      "Prices are from the market now (the mid of Vest's order book); stop and targets are re-placed your exact points from your fill. Adding to an " +
      'open trade rebuilds them from the new average.' +
      (!$('tr-failrow').hidden
        ? " Fail and pass: where your equity reaches the floor or the target, opening fee counted. Estimates, like Vest's own."
        : '');
    set('tr-preview', note);
    body.querySelector('.tr-lad').title = note;

    // Margin and risk bars
    const pct100 = (f) => Math.max(0, Math.min(100, f * 100)).toFixed(1) + '%';
    const M = c.margin,
      K = c.risk2,
      mnow = $('tr-mnow'),
      mpv = $('tr-mpv'),
      rnow = $('tr-rnow'),
      rpv = $('tr-rpv');
    const heat = (f) => (f >= 1 ? ' hot' : f >= 0.8 ? ' warn' : '');
    if (M) {
      mnow.style.width = pct100(M.now);
      mpv.style.width = pct100(M.after);
      mpv.className = 'pv' + heat(M.after);
      mnow.className = heat(M.now).trim();
      const used = (f) => Math.round(f * 100) + '%';
      // contracts left, to sensible precision (25.5, 3.75, 0.43)
      const short = (n) =>
        String(+(Math.floor(n * (n >= 100 ? 1 : n >= 10 ? 10 : 100)) / (n >= 100 ? 1 : n >= 10 ? 10 : 100)));
      $('tr-mtxt').innerHTML =
        M.left >= 0
          ? `<b>${used(c.qty > 0 ? M.after : M.now)}</b> · ${short(M.left)} left`
          : `<span class="hot">over by ${esc(fmtQty(-M.left, c.t.symbol))}</span>`;
      $('tr-mtxt').title = c.qty > 0 ? `${used(M.now)} used now, ${used(M.after)} with this order` : '';
    } else {
      mnow.style.width = mpv.style.width = '0%';
      $('tr-mtxt').innerHTML = `<span>${S.master ? 'working out…' : 'pick a master (M)'}</span>`;
    }
    if (K.room > 0) {
      const after = K.after === null ? K.now : K.after;
      rnow.style.width = K.now === null ? '0%' : pct100(K.now / K.room);
      rpv.style.width = after === null ? '0%' : pct100(after / K.room);
      rpv.className = 'pv' + heat(after === null ? 0 : after / K.room);
      rnow.className = heat(K.now === null ? 0 : K.now / K.room).trim();
      const left = after === null ? null : K.room - after;
      const usd = (n) => '$' + Math.round(Math.abs(n)).toLocaleString('en-US');
      $('tr-rtxt').innerHTML =
        K.now === null
          ? '<span class="warn">no stop</span>'
          : left !== null && left <= 0
            ? `<b>${usd(after)}</b> · <span class="hot">past the floor</span>`
            : `<b class="${heat(after / K.room).trim()}">${usd(after || 0)}</b> of ${usd(K.room)}`;
      $('tr-rtxt').title = left !== null && left > 0 ? `${usd(left)} left before the floor after this order` : '';
    } else {
      rnow.style.width = rpv.style.width = '0%';
      $('tr-rtxt').innerHTML = `<span>${S.master ? 'working out…' : ''}</span>`;
    }
    const by = [
      M && c.limitedBy && `margin: ${accLabel(c.limitedBy)}`,
      K.room > 0 && K.by && `risk: ${accLabel(K.by)}`,
    ].filter(Boolean);
    const tight =
      by.length === 2 && c.limitedBy === K.by
        ? `tightest: ${accLabel(K.by)}`
        : by.length
          ? 'tightest · ' + by.join(' · ')
          : '';
    set('tr-tight', tight);
    $('tr-lims').title =
      "Margin: how much of Vest's buying power (its 100%) this order uses, and what's left. Risk: what the stop would lose, " +
      'fees included, against the room left before the floor.' +
      (tight ? ` (${tight})` : '');
    const plans = Object.values(S.plans);
    const plansHtml = plans.length
      ? `<div class="tr-lbl">Breakeven watch</div>` +
        plans
          .map((p) => {
            const tick = (SYMBOLS[p.symbol] || c.meta).tick;
            const when = p.beMode === 'tp1' ? `after TP1 (${fmtPx(p.tp1, tick)})` : `at +${p.beTrigger} pts`;
            const state = !(p.entry > 0)
              ? 'waiting for fill…'
              : p.triggered
                ? 'moving stop…'
                : `stop → ${fmtPx(breakevenPrice({ side: p.side, entry: p.entry, offsetPts: p.beOffset, tick }), tick)} ${when}`;
            const what = `<b>${p.side === 'long' ? 'Long' : 'Short'}</b> ${esc(symLabel(p.symbol))}${p.entry > 0 ? ' @ ' + fmtPx(p.entry, tick) : ''} · ${esc(state)}`;
            return `<div class="tr-plan"><span>${what}</span><button class="tr-x" data-unplan="${esc(p.positionId)}" title="Stop watching" aria-label="Stop watching">×</button></div>`;
          })
          .join('')
      : '';
    const box = $('tr-plans');
    if (box.dataset.html !== plansHtml) {
      // rewrite only on change, so a click on × isn't lost to a tick
      box.dataset.html = plansHtml;
      box.innerHTML = plansHtml;
      box.querySelectorAll('[data-unplan]').forEach(
        (b) =>
          (b.onclick = () => {
            const p = S.plans[b.dataset.unplan];
            if (p) endPlan(p, 'Breakeven: stopped watching (you cancelled it).');
          }),
      );
    }
  }

  // Settings: every option with one line under its name; the ? opens the full explanation in place.
  function renderSettings(body) {
    const open = new Set([...body.querySelectorAll('.opt.open[data-o]')].map((e) => e.dataset.o));
    const option = (key, on, name, short, long, dim = false) => `
        <div class="opt ${dim ? 'dep-off' : ''} ${open.has(key) ? 'open' : ''}" data-o="${key}">
          <div class="opt-txt"><div class="opt-name">${name}${long ? `<button class="qm" data-q="${key}" aria-label="More about ${name}" title="More about this">?</button>` : ''}</div>
            <div class="opt-short">${short}</div>${long ? `<div class="opt-desc">${long}</div>` : ''}</div>
          <button class="switch ${on ? 'on' : ''}" data-opt="${key}" role="switch" aria-checked="${on}" aria-label="${name}"><span class="knob"></span></button>
        </div>`;
    body.innerHTML = `
      <div class="settings">
        <div class="set-h">Copying</div>
        ${option(
          'fast',
          S.fast,
          'Fast mode',
          'Followers enter as soon as the master sends.',
          "Fire follower entries the instant the master sends, for the most simultaneous fills. They open before the master's order is confirmed.",
        )}
        ${option(
          'autoflat',
          S.autoFlatten,
          'Auto-flatten orphans',
          "Close followers left in a trade the master isn't in.",
          "If followers end up in a trade the master isn't in (its entry was refused or didn't fill, or Vest closed the master), close them automatically instead of asking. Never used when the master might be in the trade.",
        )}
        ${option(
          'capfit',
          S.capFit,
          'Cap-to-fit size',
          'Size each follower to its own equity, not 1:1.',
          'Every account takes the same % risk with the same stop distance, and <b>different-size followers</b> are allowed (e.g. a 25k master with 5k accounts). Off: strict 1:1, same-size accounts only.',
        )}
        <div class="set-h">Chart</div>
        ${option(
          'hidemarks',
          S.hideMarks,
          'Hide marks on bars',
          "Hide Vest's buy and sell marks each load.",
          "The chart's right-click Hide marks on bars, which Vest forgets on every refresh. Show them again from that menu any time.",
        )}
        ${option(
          'tradeonly',
          S.tradeOnly,
          'Only on the Trade page',
          'Hidden elsewhere; it keeps copying.',
          "Hide the panel on Vest's other pages (Portfolio, Markets, Affiliate…). It keeps running and copying there, and shows on any page when something needs you.",
        )}
        ${option(
          'hidesessions',
          S.hideSessions,
          'Hide session shading',
          "Remove Vest's pre-market and overnight bands.",
          'Removes the pre-market, after-hours and overnight bands Vest draws on the chart (its Market Sessions indicator), every time it adds them.',
        )}
        ${option(
          'theme',
          S.theme,
          'STRATUH theme',
          "Onyx and lime for Vest's page and chart.",
          "Recolours Vest's own page and chart in STRATUH's colours: onyx, lime and greys, square corners, and drops the Volume indicator Vest adds to the chart by itself. Dark mode only; turn it off to go back to Vest's colours (the chart on the next refresh).",
        )}
        <div class="opt ${S.theme ? '' : 'dep-off'}">
          <div class="opt-txt"><div class="opt-name">Shorts and losses</div>
            <div class="opt-short">Candles stay grey either way.</div></div>
          <div class="seg" data-theme-down><button data-v="mono" class="${S.themeDown === 'mono' ? 'on' : ''}">Grey</button><button data-v="red" class="${S.themeDown === 'red' ? 'on' : ''}">Red</button></div>
        </div>
        <div class="set-h">Updates</div>
        ${option(
          'updates',
          S.checkUpdates,
          'Check for updates',
          `You have v${VERSION} · checked when Vest loads.`,
          'Each time Vest loads, check GitHub for a newer version and offer a one-click install' +
            (S.update && S.update.latest ? `. The latest published is v${esc(S.update.latest)}.` : '.'),
        )}
        <div class="set-row"><button class="ghostbtn" data-act="check-now">Check now</button>
          <a class="ghostbtn" href="${REPO_URL}" target="_blank" rel="noopener">GitHub ${ICON.ext}</a></div>
        <div class="set-h">Support the copier</div>
        ${option(
          'supportapply',
          supportApplies(),
          `Enter code ${SUPPORT_CODE} at checkout`,
          '5% off Vest purchases. Keeps the copier free.',
          `Switches the discount code in Vest's purchase window to <b>${SUPPORT_CODE}</b> (5% off) each time it opens. Thank you for supporting the free copier.`,
        )}
        <div class="set-row"><button class="ghostbtn" data-act="copy-code">${ICON.copy} Copy code ${SUPPORT_CODE}</button></div>
      </div>`;
    body.querySelectorAll('[data-q]').forEach((b) => (b.onclick = () => b.closest('.opt').classList.toggle('open')));
    body.querySelectorAll('[data-opt]').forEach(
      (b) =>
        (b.onclick = () => {
          const o = b.getAttribute('data-opt');
          if (o === 'fast') toggleFast();
          else if (o === 'autoflat') toggleAutoFlatten();
          else if (o === 'capfit') toggleCapFit();
          else if (o === 'supportapply') {
            const on = !supportApplies();
            if (on && !['yes', 'manual'].includes((store.get(SUPPORT_KEY, null) || {}).answered)) saveSupport('yes');
            setSupportApply(on);
            render();
          } else if (o === 'updates') {
            S.checkUpdates = !S.checkUpdates;
            saveOpts();
            render();
          } else if (o === 'tradeonly') {
            S.tradeOnly = !S.tradeOnly;
            saveOpts();
            showOnThisPage();
            render();
          } else if (o === 'hidesessions') {
            S.hideSessions = !S.hideSessions;
            saveOpts();
            render();
          } else if (o === 'theme') {
            S.theme = !S.theme;
            saveOpts();
            applyTheme();
            render();
          } else if (o === 'hidemarks') {
            S.hideMarks = !S.hideMarks;
            saveOpts();
            _marksDone = null; // switched on: hide them now
            render();
          }
        }),
    );
    body.querySelectorAll('[data-theme-down] button').forEach(
      (b) =>
        (b.onclick = () => {
          S.themeDown = b.dataset.v;
          saveOpts();
          applyTheme();
          render();
        }),
    );
    body.querySelector('[data-act="check-now"]').onclick = () => checkForUpdate(true);
    body.querySelector('[data-act="copy-code"]').onclick = () =>
      copySupportCode().then((ok) => toast(ok ? `Code ${SUPPORT_CODE} copied.` : `Code: ${SUPPORT_CODE}`));
  }

  // How it works and the risk terms: the first-run acknowledgement (required before copying or trading) and Help.
  function rulesHtml() {
    const how = `
        <ul class="rules-list">
          <li><b>Live copying.</b> Start copying sends your <b>master</b> account's orders to the selected
            <b>followers</b> as <b>real orders</b> on live accounts.</li>
          <li><b>Leverage is matched.</b> When you start, followers are set to the master's leverage. If you change
            leverage or switch markets, <b>stop and start copying again</b>.</li>
          <li><b>Flat, or already in the same trade.</b> Start when everyone is flat, or when the master and followers
            hold the same position (same market and side): starting <b>adopts</b> it, so exits and stop/target changes
            copy. It never opens a trade for a follower that isn't already in it.</li>
          <li><b>Only your orders are copied.</b> When Vest closes the master itself (a stop or target filling, a
            drawdown breach), nothing is copied: the log says what Vest did, and a follower still in the trade a few
            seconds later is offered to flatten.</li>
          <li><b>An account that fails drops out.</b> A follower is removed and the others keep copying; if the master
            fails, copying stops.</li>
          <li><b>Sizing.</b> Strict 1:1 copies the exact size (same-size accounts only). <b>Cap-to-fit</b> (Edit)
            sizes each follower to its own equity: same % risk, same stop distance, smaller size.</li>
          <li><b>Shared risk.</b> One bad trade hits <b>every</b> linked account at once. Size so a simultaneous loss
            is survivable.</li>
        </ul>`;
    const risk = `
        <div class="rules-h">Your risk</div>
        <ul class="rules-list">
          <li>STRATUH Copier <b>places real orders on live accounts</b>, automatically, using your logged-in Vest session.</li>
          <li>Copies can be late, fail, fill at a different price or size, or be missed entirely, for example when Vest
            changes its site, rejects an order or is slow. <b>Watch your accounts</b> while it runs.</li>
          <li><b>You alone are responsible</b> for every order it sends and every trade on your accounts, including any
            loss, drawdown breach or failed evaluation.</li>
          <li>It is provided free and <b>as is, with no warranty</b>. Its author accepts <b>no responsibility or liability</b>
            for anything that happens while you use it.</li>
          <li>It is not affiliated with or endorsed by Vest Markets. Whether your prop program allows a trade copier is
            yours to check. Nothing here is financial advice.</li>
        </ul>
        <div class="rules-terms">Full terms: <a href="${REPO_URL}/blob/main/DISCLAIMER.md" target="_blank" rel="noopener">Disclaimer</a>
          · <a href="${REPO_URL}/blob/main/LICENSE" target="_blank" rel="noopener">License</a></div>`;
    return { how, risk };
  }
  function renderRules(body) {
    if (S.ack) return setView('support'); // accepted: the rules live in Help
    if (body.dataset.view === 'rules-first') return; // a re-render would untick the box
    body.dataset.view = 'rules-first';
    const { how, risk } = rulesHtml();
    body.innerHTML = `
      <div class="rules">
        <div class="rules-h big">Before you use STRATUH Copier</div>
        ${risk}
        <div class="rules-h">How it works</div>
        ${how}
        <label class="rules-accept"><input type="checkbox" id="rl-check">
          I have read this. I use STRATUH Copier entirely at my own risk, and its author is not responsible for any loss.</label>
        <div class="rules-btns"><button class="armbtn" id="rl-agree" disabled>Accept and continue</button></div>
      </div>`;
    const check = body.querySelector('#rl-check'),
      agree = body.querySelector('#rl-agree');
    check.onchange = () => (agree.disabled = !check.checked);
    agree.onclick = () => {
      if (!check.checked) return;
      S.ack = true;
      saveAck();
      diag('terms_accepted', { version: TERMS_VERSION });
      logEvent('info', 'Terms accepted.');
      S.rulesOpen = false;
      render();
      if (S.ackThenArm) arm();
      S.ackThenArm = false;
      maybeOfferSupport();
    };
  }

  // Account P&L summary — profit = equity − starting capital, per account and summed. Auto-updates with the balance poll.
  // ── Report a problem. One file with everything needed to debug (activity log, diagnostics, version, Vest build,
  // settings, accounts with balances), saved locally, plus a GitHub issue pre-filled with the version and the user's
  // description, ready for the file to be dragged in. Account ids are replaced by their labels ("Account 07") so the
  // file is safer to post publicly; nothing is sent anywhere by the copier.
  const ISSUE_FORM = 'bug_report.yml';
  function buildReport(note) {
    // Every account id becomes a name: active accounts by their label, closed ones by the label recorded next to the
    // id in the diagnostics, anything else by a placeholder. Position and order ids are Vest's random ids for single
    // orders (useless without a login) and stay, since they tie related events together.
    const ACCOUNT_KEYS = new Set(['account', 'accountId', 'master', 'followers', 'id']);
    const isUuid = (v) =>
      typeof v === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v);
    const alias = {};
    for (const id in S.byId) alias[id] = S.byId[id].label;
    const learn = (o) => {
      if (Array.isArray(o)) return o.forEach(learn);
      if (!o || typeof o !== 'object') return;
      const id = isUuid(o.account) ? o.account : isUuid(o.id) && o.label ? o.id : null;
      if (id && o.label && !alias[id]) alias[id] = o.label;
      Object.values(o).forEach(learn);
    };
    learn(S.diag);
    let unknown = 0;
    const nameFor = (id) => alias[id] || (alias[id] = `account-${++unknown}`);
    const scrub = (v) =>
      JSON.parse(JSON.stringify(v), function (k, val) {
        if (Array.isArray(val) && ACCOUNT_KEYS.has(k)) return val.map((x) => (isUuid(x) ? nameFor(x) : x));
        if (typeof val !== 'string') return val;
        if (alias[val]) return alias[val];
        if (isUuid(val) && ACCOUNT_KEYS.has(k) && (k !== 'id' || 'label' in this)) return nameFor(val);
        // account ids inside longer text, e.g. an error message holding an API path with the id in it
        return val.replace(/[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}/gi, (m) => alias[m] || m);
      });
    const accounts = Object.values(S.byId).map((r) => ({
      label: r.label,
      type: r.type,
      size: r.size,
      equity: r.equity,
      floor: r.floor,
      dailyFloor: r.dailyFloor,
      target: r.target,
      free: r.free,
      canTrade: r.canTrade,
      role: r.id === S.master ? 'master' : S.followers.has(r.id) ? 'follower' : null,
    }));
    return scrub({
      kind: 'vest-copier-report',
      version: VERSION,
      build: fingerprint() || null,
      exportedAt: new Date().toISOString(),
      browser: navigator.userAgent,
      description: note,
      state: {
        armed: S.armed,
        master: S.master,
        followers: [...S.followers],
        openTrades: Object.keys(S.posMap).length,
        liveFeed: feedLive(),
      },
      settings: {
        fast: S.fast,
        autoFlatten: S.autoFlatten,
        capFit: S.capFit,
        checkUpdates: S.checkUpdates,
        hideMarks: S.hideMarks,
        trade: S.trade,
      },
      accounts,
      log: [...S.log].reverse().map((e) => ({ t: e.t.toISOString(), level: e.level, msg: e.msg })),
      diagnostics: S.diag,
    });
  }
  function sendReport(note) {
    const name = `vest-copier-report-${stamp()}.json`;
    persistDiag();
    saveFile(name, 'application/json', JSON.stringify(buildReport(note), null, 2));
    const first = (note.split('\n').find((l) => l.trim()) || '').trim().slice(0, 80);
    const params = new URLSearchParams({
      template: ISSUE_FORM,
      title: `Problem: ${first || 'describe it here'}`,
      version: VERSION,
    });
    if (note) params.set('what-happened', note.slice(0, 4000));
    window.open(`${REPO_URL}/issues/new?${params}`, '_blank', 'noopener');
    logEvent('info', `Report saved as ${name}. Drag it into the GitHub issue that just opened.`);
    diag('report', { file: name, hasNote: !!note });
  }
  // Support tab: report a problem (one report file + a pre-filled GitHub issue), share ideas, quick links, and the
  // project's support code. Built once, so a description being typed survives the panel's regular refreshes.
  function shareIdea() {
    const params = new URLSearchParams({ template: 'feature_request.yml', title: 'Idea: ', version: VERSION });
    window.open(`${REPO_URL}/issues/new?${params}`, '_blank', 'noopener');
  }
  // Help: report a problem (one report file + a pre-filled GitHub issue), Discord, ideas, the support code, and the rules.
  // Built once, so a description being typed survives the panel's regular refreshes.
  function renderSupportTab(body) {
    if (body.dataset.view === 'support' && body.querySelector('.support-tab')) return;
    body.dataset.view = 'support';
    const link = (href, text) => `<a class="lnk" href="${href}" target="_blank" rel="noopener">${text}</a>`;
    const { how, risk } = rulesHtml();
    body.innerHTML = `
      <div class="help support-tab">
        <div class="links">STRATUH Copier v${VERSION} · ${link(`${REPO_URL}/blob/main/CHANGELOG.md`, "What's new")} ·
          ${link(`${REPO_URL}/blob/main/docs/USER-GUIDE.md`, 'Guide')} · ${link('https://xamped.github.io/Vest-Copier/tutorial/', 'Tutorial')}</div>
        <div class="grp"><span class="eyebrow">Report a problem</span>
          <textarea class="report-note" id="rp-note" rows="4" aria-label="What happened"
            placeholder="What happened, and what did you expect? Which accounts, roughly when?"></textarea>
          <div class="hint">Saves a report file and opens a GitHub issue with your description filled in: drag the file
            into it and submit (a free GitHub account). The file holds the log, settings and balances, with account ids
            replaced by their names. Never passwords or tokens.</div>
          <button class="ghostbtn" id="rp-send">Save report &amp; open issue ${ICON.ext}</button></div>
        <div class="grp">
          <a class="lrow" href="${DISCORD_URL}" target="_blank" rel="noopener"><span>Join the Discord</span><span class="hint">questions, setup help</span>${ICON.ext}</a>
          <button class="lrow" id="sp-idea"><span>Share an idea</span><span class="hint">on GitHub</span>${ICON.ext}</button>
          <button class="lrow" id="sp-copy"><span>Support code <b class="code">${SUPPORT_CODE}</b></span><span class="hint">5% off at Vest · Copy</span>${ICON.copy}</button>
        </div>
        <div class="grp"><span class="eyebrow">Before you start</span>${how}</div>
        <div class="grp">${risk}</div>
      </div>`;
    const note = body.querySelector('#rp-note');
    ['keydown', 'keyup', 'keypress'].forEach((ev) => note.addEventListener(ev, (e) => e.stopPropagation())); // not Vest's shortcuts
    body.querySelector('#rp-send').onclick = () => sendReport(note.value.trim());
    body.querySelector('#sp-idea').onclick = shareIdea;
    body.querySelector('#sp-copy').onclick = () =>
      copySupportCode().then((ok) => toast(ok ? `Code ${SUPPORT_CODE} copied.` : `Code: ${SUPPORT_CODE}`));
  }

  // ── Trade history: every account's closed positions (active accounts and finished ones: a passed evaluation, a
  // closed or failed funded account), from Vest's own position history, the same one its Position History tab reads:
  // GET /v3/positions?account_id=…&limit&offset → { positions, total }, each with its side, size, open / close price,
  // P&L (as Vest reports it), times and close reason. Finished accounts come from /v3/capital/accounts/history. Positions
  // on the same market and side, opened within seconds and closed within a minute or two of each other on different
  // accounts, are one copied trade. Read only when Share needs it, cached for a few minutes. Read-only.
  const HIST_DAYS = 30, // how far back the trade list goes
    HIST_PAGE = 50,
    HIST_PAGES = 4, // per account: up to 200 positions
    HIST_ACCTS = 40, // finished accounts read, newest first
    HIST_TTL_MS = 5 * 60000,
    GROUP_OPEN_MS = 10000, // copies open within this of each other…
    GROUP_CLOSE_MS = 90000; // …and close within this
  S.hist = null; // { at, trades: [group], error }
  let _histBusy = null;
  const msOf = (v) => {
    if (v == null || v === '') return null;
    const n = typeof v === 'number' ? v : /^\d+(\.\d+)?$/.test(String(v)) ? +v : Date.parse(v);
    return Number.isFinite(n) && n > 0 ? (n < 1e12 ? n * 1000 : n) : null;
  };
  // One closed position, in the shape the cards use (null for anything that isn't a closed position)
  function normPos(x, acct) {
    if (!x || typeof x !== 'object') return null;
    const id = x.positionId || x.position_id || x.id,
      symbol = x.symbol,
      closedAt = msOf(x.closeDate ?? x.close_date ?? x.closedAt);
    if (!id || !symbol || !closedAt) return null;
    const open = num(x.openPrice ?? x.open_price),
      close = num(x.closePrice ?? x.close_price),
      pnl = num(x.pnl);
    const side = String(x.side || '')
        .toLowerCase()
        .startsWith('s')
        ? 'short'
        : 'long',
      dir = side === 'long' ? 1 : -1;
    let qty = Math.abs(num(x.quantity));
    // a closed position can report 0: the size follows from its P&L and prices ($1 a point per unit)
    if (!(qty > 0) && open > 0 && close > 0 && close !== open && Number.isFinite(pnl))
      qty = Math.abs(pnl / (dir * (close - open)));
    return {
      acct,
      id,
      symbol,
      side,
      qty: qty > 0 ? qty : NaN,
      open,
      close,
      pnl: Number.isFinite(pnl) ? pnl : 0,
      openedAt: msOf(x.openDate ?? x.open_date ?? x.openedAt ?? x.createdAt) || closedAt,
      closedAt,
      reason: x.closeReason ?? x.close_reason ?? null,
    };
  }
  // A position list read with the user's session, else with the account's own token (Vest reads it per account)
  async function readAs(path, acct) {
    try {
      return await api(path);
    } catch (e) {
      const { token } = await mintAccountToken(acct);
      return api(path, token);
    }
  }
  async function accountPositions(acct, since) {
    const out = [];
    let offset = 0;
    for (let page = 0; page < HIST_PAGES; page++) {
      const r = await readAs(
        `/v3/positions?account_id=${encodeURIComponent(acct)}&limit=${HIST_PAGE}&offset=${offset}`,
        acct,
      );
      const ps = (r && Array.isArray(r.positions) && r.positions) || [];
      for (const x of ps) {
        const n = normPos(x, acct);
        if (n) out.push(n);
      }
      offset += ps.length;
      if (ps.length < HIST_PAGE || (r.total > 0 && offset >= r.total)) break;
      if (out.length && Math.min(...out.map((o) => o.closedAt)) < since) break; // newest first: far enough back
    }
    return out.filter((o) => o.closedAt >= since);
  }
  // Positions → trades: the same trade copied across accounts is one entry, with every account in it.
  function groupTrades(ps) {
    const groups = [];
    for (const p of [...ps].sort((a, b) => a.openedAt - b.openedAt)) {
      const g = groups.find(
        (g) =>
          g.symbol === p.symbol &&
          g.side === p.side &&
          !g.accts.has(p.acct) &&
          Math.abs(g.openedAt - p.openedAt) <= GROUP_OPEN_MS &&
          Math.abs(g.closedAt - p.closedAt) <= GROUP_CLOSE_MS,
      );
      if (g) {
        g.items.push(p);
        g.accts.add(p.acct);
        g.pnl += p.pnl;
        g.closedAt = Math.max(g.closedAt, p.closedAt);
      } else
        groups.push({
          key: p.acct + ':' + p.id,
          symbol: p.symbol,
          side: p.side,
          openedAt: p.openedAt,
          closedAt: p.closedAt,
          pnl: p.pnl,
          items: [p],
          accts: new Set([p.acct]),
        });
    }
    for (const g of groups) {
      // the lead: the master when it's in the trade, else the first account in it
      g.lead = g.items.find((p) => p.acct === S.master) || g.items[0];
      g.copied = g.items.length > 1;
    }
    return groups.sort((a, b) => b.closedAt - a.closedAt);
  }
  // Every account the user has: the active ones and the finished ones (newest first, up to HIST_ACCTS)
  async function historyAccounts() {
    const list = Object.values(S.byId).map((r) => ({ id: r.id, label: r.label, active: true }));
    const seen = new Set(list.map((a) => a.id));
    let cursor = null;
    try {
      for (let page = 0; page < 5 && list.length < HIST_ACCTS + seen.size; page++) {
        const r = await api(
          `/v3/capital/accounts/history?limit=20${cursor ? `&cursor=${encodeURIComponent(cursor)}` : ''}`,
        );
        for (const a of (r && r.accounts) || []) {
          const id = a.id || a.account_id;
          if (!id || seen.has(id)) continue;
          seen.add(id);
          list.push({ id, label: label(a), active: false });
        }
        cursor = r && r.next;
        if (!cursor) break;
      }
    } catch {
      /* finished accounts unreadable: the active ones still count */
    }
    return list;
  }
  const histLabels = {}; // account id → its label, for finished accounts too
  function loadHistory(force = false) {
    if (_histBusy) return _histBusy;
    if (!force && S.hist && !S.hist.error && Date.now() - S.hist.at < HIST_TTL_MS) return Promise.resolve(S.hist);
    _histBusy = (async () => {
      try {
        const accts = await historyAccounts();
        accts.forEach((a) => (histLabels[a.id] = a.label));
        const since = Date.now() - HIST_DAYS * 86400000,
          all = [];
        let failed = 0;
        // a few accounts at a time (each is one or more reads)
        const queue = [...accts];
        await Promise.all(
          Array.from({ length: 4 }, async () => {
            for (let a = queue.shift(); a; a = queue.shift())
              try {
                all.push(...(await accountPositions(a.id, since)));
              } catch {
                failed++;
              }
          }),
        );
        S.hist = { at: Date.now(), trades: groupTrades(all), accounts: accts.length, failed };
        diag('history', {
          accounts: accts.length,
          finished: accts.filter((a) => !a.active).length,
          positions: all.length,
          trades: S.hist.trades.length,
          failed,
        });
      } catch (e) {
        S.hist = { at: Date.now(), trades: [], error: e.message };
        diag('history', { outcome: 'error', error: e.message });
      } finally {
        _histBusy = null;
      }
      if (S.shareOpen) render();
      return S.hist;
    })();
    return _histBusy;
  }
  const acctName = (id) => (S.byId[id] && S.byId[id].label) || histLabels[id] || 'An account';
  // A trade's own story, from Vest's position details (its orders and the stop / target history): the entry and adds,
  // each exit with its price and why (TP1, TP2, stop, breakeven, closed), and the stop moves. Cached per position.
  const _details = {};
  async function tradeDetails(g) {
    const p = g.lead,
      key = p.acct + ':' + p.id;
    if (_details[key]) return _details[key];
    const { token } = await mintAccountToken(p.acct);
    const r = await api(`/v3/positions/${encodeURIComponent(p.id)}/details`, token);
    const pos = (r && (r.position || r)) || {};
    const tick = (SYMBOLS[p.symbol] || {}).tick || 0.25,
      dir = p.side === 'long' ? 1 : -1;
    const orders = (pos.orders || [])
      .map((o) => ({
        buy: o.isBuy ?? String(o.side || '').toLowerCase() === 'buy',
        qty: num(o.executedQuantity ?? o.executed_quantity),
        price: num(o.executionPrice ?? o.execution_price) || num(o.price),
        at: msOf(o.executionTime ?? o.execution_time ?? o.updatedAt ?? o.updated_at),
        reason: o.closeReason ?? o.close_reason ?? null,
        reduce: !!(o.reduceOnly ?? o.reduce_only),
      }))
      .filter((o) => o.qty > 0 && o.price > 0 && o.at)
      .sort((a, b) => a.at - b.at);
    const entries = orders.filter((o) => !o.reduce && o.buy === (p.side === 'long'));
    const exits = orders.filter((o) => o.reduce || o.buy !== (p.side === 'long'));
    const entry =
      p.open ||
      (entries.length ? entries.reduce((a, o) => a + o.price * o.qty, 0) / entries.reduce((a, o) => a + o.qty, 0) : 0);
    let tpN = 0;
    const exitRows = exits.map((o) => {
      const pts = dir * (o.price - entry);
      const kind = /take/i.test(o.reason || '')
        ? `TP${++tpN}`
        : /stop/i.test(o.reason || '')
          ? Math.abs(pts) <= 2 * tick
            ? 'BE'
            : 'SL'
          : /liquid/i.test(o.reason || '')
            ? pts > 0
              ? 'VEST' // Vest closed it in profit: an evaluation reaching its target, not a liquidation
              : 'LIQ'
            : 'Close';
      return { kind, qty: o.qty, price: o.price, pts, usd: pts * o.qty, at: o.at };
    });
    // the stop's moves: each new trigger price in the stop-loss history (not its first placement)
    const slHist = (pos.stopLossHistory || pos.stop_loss_history || [])
      .map((x) => ({
        px: num(x.triggerPrice ?? x.trigger_price),
        at: msOf(x.updatedAt ?? x.updated_at ?? x.createdAt),
      }))
      .filter((x) => x.px > 0 && x.at)
      .sort((a, b) => a.at - b.at);
    const moves = slHist.filter((x, i) => i > 0 && x.px !== slHist[i - 1].px);
    const events = [];
    const n = g.items.length;
    entries.forEach((o, i) =>
      events.push({
        at: o.at,
        text:
          i === 0
            ? `${p.side === 'long' ? 'Bought' : 'Sold'} ${fmtQty(o.qty, p.symbol)}${n > 1 ? `, copied to ${n - 1}` : ''}`
            : `Added ${fmtQty(o.qty, p.symbol)}`,
        hot: false,
      }),
    );
    moves.forEach((m) =>
      events.push({
        at: m.at,
        text: Math.abs(m.px - entry) <= 2 * tick ? 'Stop to breakeven' : `Stop to ${fmtPx(m.px, tick)}`,
        hot: false,
      }),
    );
    exitRows.forEach((x, i) =>
      events.push({
        at: x.at,
        text: x.kind.startsWith('TP')
          ? `${x.kind} filled`
          : x.kind === 'BE'
            ? i === exitRows.length - 1 && exitRows.length > 1
              ? 'Rest out at breakeven'
              : 'Out at breakeven'
            : x.kind === 'SL'
              ? 'Stopped out'
              : x.kind === 'LIQ'
                ? 'Liquidated'
                : x.kind === 'VEST'
                  ? 'Profit target hit'
                  : 'Closed',
        hot: x.kind.startsWith('TP') || x.kind === 'VEST',
      }),
    );
    events.sort((a, b) => a.at - b.at);
    return (_details[key] = { entry, exits: exitRows, events });
  }

  // ── Share: today's P&L as a picture to paste anywhere (X, Discord, a group chat). Drawn on a canvas in the page, copied
  // to the clipboard as a PNG (or saved). Shows account numbers and P&L only: never balances, ids, emails or logins.
  // Amounts hidden: % change on the day's starting equity, no $ anywhere. The only network use is the three fonts, from
  // jsDelivr, loaded the first time Share opens (the card still draws with system fonts without them).
  const SHARE_NAME_KEY = 'vc-share-name',
    SHARE_OPTS_KEY = 'vc-share-opts'; // { hide, nums, code }: the Share sheet's switches, remembered
  const CARD_W = 1200,
    CARD_H = 675,
    CARD_SCALE = 2;
  const CARD_FONTS = [
    [
      'STRATUH Card Display',
      'instrument-sans@5.2.8/files/instrument-sans-latin-standard-normal.woff2',
      { stretch: '75% 100%', weight: '400 700' },
    ],
    ['STRATUH Card Sans', 'geist@5.2.8/files/geist-latin-wght-normal.woff2', { weight: '100 900' }],
    ['STRATUH Card Mono', 'jetbrains-mono@5.2.8/files/jetbrains-mono-latin-wght-normal.woff2', { weight: '100 800' }],
  ];
  let _cardFonts = null; // a promise: resolves once loaded (or failed)
  function loadCardFonts() {
    if (_cardFonts) return _cardFonts;
    _cardFonts = Promise.all(
      CARD_FONTS.map(([family, file, desc]) =>
        new FontFace(family, `url(https://cdn.jsdelivr.net/npm/@fontsource-variable/${file})`, desc)
          .load()
          .then((f) => document.fonts.add(f))
          .catch(() => null),
      ),
    ).then(() => document.fonts.ready);
    return _cardFonts;
  }
  const CF = {
    display: "'STRATUH Card Display', 'Arial Narrow', sans-serif",
    sans: "'STRATUH Card Sans', 'Inter', 'Segoe UI', system-ui, sans-serif",
    mono: "'STRATUH Card Mono', ui-monospace, Consolas, monospace",
  };
  // Everything the card shows, from what the panel already knows. Missing parts are left off, never guessed.
  function cardData() {
    const d = dayTotals(),
      hasDay = d.known > 0;
    const rows = Object.values(S.byId).filter((r) => !isNaN(todayOf(r)) || !hasDay);
    const startEq = hasDay ? rows.reduce((a, r) => a + (S.day.startEq[r.id] || 0), 0) : 0;
    const st = dayStats();
    const start = vestDayStart();
    const fills = S.diag.filter(
      (x) => ['open', 'append', 'close'].includes(x.type) && x.slipPts != null && Date.parse(x.t) >= start,
    );
    const slip = fills.length ? fills.reduce((a, x) => a + Math.abs(+x.slipPts || 0), 0) / fills.length : null;
    const order = (r) => (r.id === S.master ? -1 : S.followers.has(r.id) ? 0 : 1);
    const accts = [...rows].sort((a, b) => order(a) - order(b) || a.order - b.order);
    const name = String(store.get(SHARE_NAME_KEY, '') || '')
      .replace(/[^\p{L}\p{N}@._ -]/gu, '')
      .slice(0, 24);
    // the curve: Vest's series for the day, ending at the equity now
    let curve = null;
    if (hasDay && S.day.curve.length) {
      const now = S.day.ids.reduce(
        (a, id) => a + (S.byId[id] && !isNaN(S.byId[id].equity) ? S.byId[id].equity : NaN),
        0,
      );
      curve = [...S.day.curve];
      if (Number.isFinite(now) && Date.now() > curve[curve.length - 1][0]) curve.push([Date.now(), now]);
      if (curve.length < 2) curve = null;
    }
    return {
      hasDay,
      chips: dayChips(),
      followers: accts.filter((r) => r.id !== S.master).length,
      total: hasDay
        ? d.today
        : Object.values(S.byId).reduce((a, r) => a + (isNaN(r.equity) ? 0 : r.equity - r.size), 0),
      pct: hasDay && startEq > 0 ? d.today / startEq : null,
      accounts: accts.map((r) => ({ n: acctNum(r.label), master: r.id === S.master })),
      copies: st.copies,
      missed: st.missed,
      complete: st.complete,
      slip,
      curve,
      name,
      code: S.share ? S.share.code : true,
      nums: !(S.share && S.share.nums), // false: the tiles carry no account numbers
      at: Date.now(),
    };
  }
  // The day's trades as chips: closed ones on the active accounts since the day began (a copied trade is one chip, its P&L
  // summed), and the position open now. More than three: the three most profitable. Three or fewer: all of them.
  function dayChips() {
    const start = vestDayStart(),
      active = (id) => !!S.byId[id];
    const out = [];
    for (const g of (S.hist && S.hist.trades) || []) {
      const items = g.items.filter((p) => active(p.acct) && p.closedAt >= start);
      if (!items.length) continue;
      const lead = items.find((p) => p.acct === S.master) || items[0];
      out.push({
        side: g.side,
        qty: lead.qty,
        symbol: g.symbol,
        pnl: items.reduce((a, p) => a + p.pnl, 0),
        open: false,
        at: g.closedAt,
      });
    }
    // open now: the master's position (and the followers in it)
    const st = S.master && S.acctState[S.master];
    for (const h of (stateFresh(st) && st.positions) || []) {
      let pnl = 0;
      for (const id of [S.master, ...S.followers]) {
        const r = S.byId[id];
        if (r && inTrade(id)) pnl += r.upnl || 0;
      }
      out.push({ side: h.side, qty: h.qty, symbol: h.symbol, pnl, open: true, at: Date.now() });
    }
    const list = out.length > 3 ? [...out].sort((a, b) => b.pnl - a.pnl).slice(0, 3) : out;
    return list.sort((a, b) => a.at - b.at);
  }
  // The day's date and time in ET, as on the card: "SAT 10 OCT 2026 · 20:41 ET"
  function etStamp(t) {
    const p = {};
    for (const x of new Intl.DateTimeFormat('en-GB', {
      timeZone: ET_TZ,
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    }).formatToParts(new Date(t)))
      p[x.type] = x.value;
    return `${p.weekday} ${p.day} ${p.month} ${p.year} · ${p.hour}:${p.minute} ET`.toUpperCase();
  }
  // The STRATUH mark and wordmark on the canvas, from the same geometry as the panel's logo. `h` = the mark's height.
  function drawLockup(ctx, x, y, h) {
    const u = h / 24; // one mark unit
    ctx.save();
    ctx.translate(x + 2.8 * u, y);
    MARK_BARS.forEach(([w, fill, echo], i) => {
      const by = (1 + i * 4.65) * u,
        bh = 3.4 * u;
      ctx.fillStyle = echo;
      ctx.fillRect(-1.8 * u, by, 3.8 * u, bh);
      const sh = ctx.createLinearGradient(-0.7 * u, 0, 1 * u, 0);
      sh.addColorStop(0, 'rgba(0,0,0,0)');
      sh.addColorStop(0.55, 'rgba(0,0,0,0.073)');
      sh.addColorStop(1, 'rgba(0,0,0,0.22)');
      ctx.fillStyle = sh;
      ctx.fillRect(-0.7 * u, by, 1.7 * u, bh);
      if (fill === 'poc') {
        const g = ctx.createLinearGradient(1 * u, 0, (1 + w) * u, 0);
        g.addColorStop(0, '#9fe02f');
        g.addColorStop(1, '#e4ff7a');
        ctx.fillStyle = g;
      } else ctx.fillStyle = fill;
      ctx.fillRect(1 * u, by, w * u, bh);
    });
    ctx.restore();
    // the wordmark: caps 1 / 1.2 of the bars (22 units), centred on them, half a cap height after the point of control
    const cap = (22 * u) / 1.2,
      s = cap / 720,
      wx = x + 22.4 * u + cap / 2,
      base = y + 12 * u + cap / 2;
    ctx.save();
    ctx.translate(wx, base);
    ctx.scale(s, s);
    ctx.fillStyle = '#f0f0f1';
    ctx.fill(new Path2D(WORDMARK_D));
    ctx.restore();
    return wx + 3159 * s; // where the wordmark ends
  }
  // A seeded ASCII texture, the strata on stratuh.com (same generator as the mockups).
  function drawAscii(ctx, x, y, cols, rows) {
    const chars = ' .:-=+*#%@';
    let seed = 7;
    const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
    ctx.save();
    ctx.font = `400 10px ${CF.mono}`;
    ctx.fillStyle = 'rgba(200, 245, 66, 0.06)';
    ctx.textBaseline = 'top';
    for (let r = 0; r < rows; r++) {
      const band = Math.sin(r * 0.55) * 0.5 + 0.5;
      let line = '';
      for (let c = 0; c < cols; c++)
        line += chars[Math.min(9, Math.floor(rnd() * 10 * band * (0.6 + 0.4 * Math.sin(c * 0.07 + r))))] || ' ';
      ctx.fillText(line, x, y + r * 12);
    }
    ctx.restore();
  }
  // Text in runs of colours: [[text, colour, font?], …] from x on one baseline; returns the end x.
  function runs(ctx, x, y, parts) {
    for (const [t, color, font] of parts) {
      if (font) ctx.font = font;
      ctx.fillStyle = color;
      ctx.fillText(t, x, y);
      x += ctx.measureText(t).width;
    }
    return x;
  }
  function drawCard(cv, d, hide) {
    const ctx = cv.getContext('2d');
    cv.width = CARD_W * CARD_SCALE;
    cv.height = CARD_H * CARD_SCALE;
    ctx.setTransform(CARD_SCALE, 0, 0, CARD_SCALE, 0, 0);
    const T = {
      bg: '#0c0c0d',
      text: '#f0f0f1',
      muted: '#a1a1a8',
      dim: '#6b6b73',
      lime: '#c8f542',
      red: '#ff5a4f',
      ink: '#0c0c0d',
    };
    ctx.fillStyle = T.bg;
    ctx.fillRect(0, 0, CARD_W, CARD_H);
    const glow = ctx.createRadialGradient(180, 300, 0, 180, 300, 320);
    glow.addColorStop(0, 'rgba(200, 245, 66, 0.09)');
    glow.addColorStop(1, 'rgba(200, 245, 66, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, CARD_W, CARD_H);
    drawAscii(ctx, 650, -6, 56, 27);
    const L = 52,
      R = CARD_W - 52;
    // the day's curve (combined equity from the day's start), bottom right
    if (d.curve) {
      const pts = d.curve.map(([t, v]) => [t, v - d.curve[0][1]]);
      const t0 = pts[0][0],
        t1 = pts[pts.length - 1][0] || t0 + 1;
      const vals = pts.map((p) => p[1]),
        lo = Math.min(0, ...vals),
        hi = Math.max(0, ...vals) || 1;
      const x0 = 720,
        x1 = R,
        top = 378,
        bot = 538;
      const X = (t) => x0 + ((t - t0) / (t1 - t0 || 1)) * (x1 - x0),
        Y = (v) => top + (1 - (v - lo) / (hi - lo || 1)) * (bot - top);
      const up = vals[vals.length - 1] >= 0,
        col = up ? T.lime : T.red;
      ctx.save();
      ctx.setLineDash([3, 5]);
      ctx.strokeStyle = 'rgba(255,255,255,0.12)';
      ctx.beginPath();
      ctx.moveTo(x0, Y(0));
      ctx.lineTo(x1, Y(0));
      ctx.stroke();
      ctx.restore();
      const path = new Path2D();
      pts.forEach(([t, v], i) => (i ? path.lineTo(X(t), Y(v)) : path.moveTo(X(t), Y(v))));
      if (!hide) {
        const area = new Path2D(path);
        area.lineTo(x1, bot);
        area.lineTo(x0, bot);
        area.closePath();
        const fade = ctx.createLinearGradient(0, top, 0, bot);
        fade.addColorStop(0, up ? 'rgba(200,245,66,0.18)' : 'rgba(255,90,79,0.16)');
        fade.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = fade;
        ctx.fill(area);
      }
      ctx.save();
      ctx.strokeStyle = col;
      ctx.lineWidth = 2.5;
      ctx.lineJoin = 'round';
      ctx.shadowColor = up ? 'rgba(200,245,66,0.5)' : 'rgba(255,90,79,0.45)';
      ctx.shadowBlur = 8;
      ctx.stroke(path);
      ctx.restore();
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.arc(X(t1), Y(vals[vals.length - 1]), 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = `400 12px ${CF.mono}`;
      ctx.fillStyle = T.dim;
      ctx.textAlign = 'left';
      ctx.fillText(etStamp(t0 < 1e12 ? t0 * 1000 : t0).slice(-8, -3), x0, bot + 18);
      ctx.textAlign = 'right';
      ctx.fillText(etStamp(d.at).slice(-8, -3), x1, bot + 18);
      ctx.textAlign = 'left';
    }
    // top: the lockup, then the date and source on the right
    ctx.textBaseline = 'alphabetic';
    const wEnd = drawLockup(ctx, L, 40, 28);
    ctx.fillStyle = 'rgba(255,255,255,0.16)';
    ctx.fillRect(wEnd + 14, 44, 1, 20);
    ctx.font = `500 13px ${CF.mono}`;
    ctx.fillStyle = T.dim;
    ctx.letterSpacing = '2.3px';
    ctx.fillText('COPIER', wEnd + 28, 59);
    ctx.letterSpacing = '0px';
    ctx.textAlign = 'right';
    ctx.font = `500 14px ${CF.mono}`;
    ctx.fillStyle = T.muted;
    ctx.fillText(etStamp(d.at), R, 52);
    ctx.fillText('from Vest', R, 71);
    const fw = ctx.measureText('from Vest').width;
    ctx.fillStyle = T.lime;
    ctx.fillText('✓', R - fw - 8, 71);
    ctx.textAlign = 'left';
    // the tag, the number and the line under it
    const tag = d.hasDay ? (hide ? '[Today · amounts hidden' : "[Today's P&L") : '[Total P&L';
    ctx.font = `500 16px ${CF.mono}`;
    ctx.fillStyle = T.lime;
    ctx.fillText(`${tag}${d.name ? ' · @' + d.name.replace(/^@/, '') : ''}]`, L, 146);
    const neg = hide ? d.pct < 0 : d.total < 0;
    const big = hide
      ? d.pct == null
        ? '—'
        : `${d.pct < 0 ? '−' : '+'}${Math.abs(d.pct * 100).toFixed(2)}%`
      : sp(d.total);
    const zero = hide ? !d.pct : Math.abs(d.total) < 0.005;
    ctx.fillStyle = zero ? T.text : neg ? T.red : T.lime;
    let size = 168;
    const bigFont = () => `500 condensed ${size}px ${CF.display}`; // Instrument Sans at width 75, as the wordmark
    ctx.font = bigFont();
    while (ctx.measureText(big).width > 640 && size > 90) {
      size -= 6;
      ctx.font = bigFont();
    }
    ctx.fillText(big, L - 4, 146 + 16 + size * 0.92);
    const n = d.accounts.length;
    const sans = (w) => `${w} 22px ${CF.sans}`;
    const parts = [
      ['across ', T.muted, sans(400)],
      [`${n} account${n === 1 ? '' : 's'}`, T.text, sans(500)],
    ];
    if (d.copies || d.missed) {
      parts.push(
        [' · ', T.muted, sans(400)],
        [`${d.copies}${d.complete ? '' : '+'} copies, ${d.missed} missed`, T.muted, sans(400)],
      );
    }
    if (d.slip != null) {
      parts.push(
        [' · fills ', T.muted, sans(400)],
        [`avg ${d.slip.toFixed(2)} pts`, T.text, sans(500)],
        [' from the master', T.muted, sans(400)],
      );
    }
    runs(ctx, L, 146 + 16 + size * 0.92 + 44, parts);
    // bottom left: the day's trades as chips; with none, the accounts as tiles (the master in lime), unless numbers are
    // hidden. Bottom right: the code and the site.
    if (d.chips.length) {
      let x = L;
      const y = CARD_H - 40 - 66,
        h = 66;
      for (const c of d.chips) {
        const side = c.side === 'long' ? 'LONG' : 'SHORT',
          size = c.qty > 0 ? `${fmtQty(c.qty, c.symbol)} ${symLabel(c.symbol)}` : symLabel(c.symbol),
          val = hide ? '' : sp(c.pnl);
        ctx.font = `700 11px ${CF.mono}`;
        const sw = ctx.measureText(side).width + 14;
        ctx.font = `400 16px ${CF.sans}`;
        const zw = ctx.measureText(size).width;
        ctx.font = `500 15px ${CF.mono}`;
        const vw = val ? ctx.measureText(val).width : 0,
          ow = c.open ? ctx.measureText(' open').width : 0;
        const w = 14 + sw + 10 + zw + (val ? 12 + vw : 0) + ow + 14;
        if (x + w > 920) break; // room for the code box
        ctx.fillStyle = 'rgba(255,255,255,0.05)';
        ctx.fillRect(x, y, w, h);
        ctx.strokeStyle = 'rgba(255,255,255,0.07)';
        ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
        let cx = x + 14;
        ctx.fillStyle = c.side === 'long' ? T.lime : T.text;
        ctx.fillRect(cx, y + h / 2 - 11, sw, 22);
        ctx.font = `700 11px ${CF.mono}`;
        ctx.fillStyle = T.ink;
        ctx.fillText(side, cx + 7, y + h / 2 + 4);
        cx += sw + 10;
        ctx.font = `400 16px ${CF.sans}`;
        ctx.fillStyle = T.text;
        ctx.fillText(size, cx, y + h / 2 + 6);
        cx += zw + 12;
        if (val) {
          ctx.font = `500 15px ${CF.mono}`;
          ctx.fillStyle = Math.abs(c.pnl) < 0.005 ? T.text : c.pnl > 0 ? T.lime : T.red;
          ctx.fillText(val, cx, y + h / 2 + 5);
          cx += vw;
        }
        if (c.open) {
          ctx.fillStyle = T.dim;
          ctx.fillText(' open', cx, y + h / 2 + 5);
        }
        x += w + 12;
      }
    } else if (d.nums) {
      const tilesY = CARD_H - 40 - 50;
      ctx.font = `500 13px ${CF.mono}`;
      ctx.fillStyle = T.dim;
      ctx.letterSpacing = '1.8px';
      const n = d.accounts.length;
      ctx.fillText(
        d.followers > 0 && d.accounts.some((a) => a.master)
          ? `MASTER + ${d.followers} FOLLOWER${d.followers === 1 ? '' : 'S'}`
          : `${n} ACCOUNT${n === 1 ? '' : 'S'}`,
        L,
        tilesY - 14,
      );
      ctx.letterSpacing = '0px';
      d.accounts.slice(0, 10).forEach((a, i) => {
        const x = L + i * 72;
        ctx.fillStyle = a.master ? T.lime : 'rgba(255,255,255,0.06)';
        ctx.fillRect(x, tilesY, 64, 50);
        if (!a.master) {
          ctx.strokeStyle = 'rgba(255,255,255,0.08)';
          ctx.strokeRect(x + 0.5, tilesY + 0.5, 63, 49);
        }
        ctx.font = `600 15px ${CF.mono}`;
        ctx.fillStyle = a.master ? T.ink : T.muted;
        ctx.textAlign = 'center';
        ctx.fillText(a.n, x + 32, tilesY + 31);
        ctx.textAlign = 'left';
      });
    }
    ctx.textAlign = 'right';
    ctx.font = `500 14px ${CF.mono}`;
    ctx.fillStyle = T.dim;
    ctx.fillText('Free copier · stratuh.com', R, CARD_H - 40);
    if (d.code) {
      ctx.font = `700 15px ${CF.mono}`;
      ctx.letterSpacing = '2.4px';
      const cw = ctx.measureText(SUPPORT_CODE).width + 28;
      ctx.font = `500 12px ${CF.mono}`;
      ctx.letterSpacing = '1px';
      const lw = ctx.measureText('VEST CODE').width + 24;
      const bx = R - cw - lw,
        by = CARD_H - 40 - 22 - 34;
      ctx.strokeStyle = 'rgba(200,245,66,0.45)';
      ctx.strokeRect(bx + 0.5, by + 0.5, cw + lw - 1, 33);
      ctx.fillStyle = T.lime;
      ctx.fillRect(bx + lw, by, cw, 34);
      ctx.textAlign = 'left';
      ctx.fillStyle = T.dim;
      ctx.fillText('VEST CODE', bx + 12, by + 22);
      ctx.font = `700 15px ${CF.mono}`;
      ctx.letterSpacing = '2.4px';
      ctx.fillStyle = T.ink;
      ctx.fillText(SUPPORT_CODE, bx + lw + 14, by + 23);
      ctx.letterSpacing = '0px';
    }
    ctx.textAlign = 'left';
  }
  // ── The One trade card (1080 × 1080, drawn at 2×): side, size and entry; the total and how many accounts were in it;
  // each exit with its price and points; the trade's timeline. Amounts hidden: points instead of dollars.
  const TRADE_W = 1080;
  function drawTradeCard(cv, g, det, o) {
    const ctx = cv.getContext('2d');
    cv.width = cv.height = TRADE_W * CARD_SCALE;
    ctx.setTransform(CARD_SCALE, 0, 0, CARD_SCALE, 0, 0);
    const T = {
      bg: '#0c0c0d',
      text: '#f0f0f1',
      muted: '#a1a1a8',
      dim: '#6b6b73',
      lime: '#c8f542',
      red: '#ff5a4f',
      ink: '#0c0c0d',
    };
    const W = TRADE_W,
      L = 60,
      R = W - 60,
      p = g.lead,
      tick = (SYMBOLS[p.symbol] || {}).tick || 0.25,
      n = g.items.length;
    ctx.fillStyle = T.bg;
    ctx.fillRect(0, 0, W, W);
    const glow = ctx.createRadialGradient(W - 160, 300, 0, W - 160, 300, 420);
    glow.addColorStop(0, 'rgba(200, 245, 66, 0.07)');
    glow.addColorStop(1, 'rgba(200, 245, 66, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, W);
    drawAscii(ctx, -10, 760, 110, 26);
    ctx.textBaseline = 'alphabetic';
    // top: the lockup; the date, the trade's open and close times, and the source
    const wEnd = drawLockup(ctx, L, 58, 28);
    ctx.fillStyle = 'rgba(255,255,255,0.16)';
    ctx.fillRect(wEnd + 14, 62, 1, 20);
    ctx.font = `500 13px ${CF.mono}`;
    ctx.fillStyle = T.dim;
    ctx.letterSpacing = '2.3px';
    ctx.fillText('COPIER', wEnd + 28, 77);
    ctx.letterSpacing = '0px';
    const day = etStamp(g.openedAt).replace(/ · .*$/, ''),
      t0 = etStamp(g.openedAt).slice(-8, -3),
      t1 = etStamp(g.closedAt).slice(-8, -3);
    ctx.textAlign = 'right';
    ctx.font = `500 14px ${CF.mono}`;
    ctx.fillStyle = T.muted;
    ctx.fillText(`${day} · ${t0}${t1 !== t0 ? ' – ' + t1 : ''} ET`, R, 70);
    ctx.fillText('from Vest', R, 90);
    const fw = ctx.measureText('from Vest').width;
    ctx.fillStyle = T.lime;
    ctx.fillText('✓', R - fw - 8, 90);
    ctx.textAlign = 'left';
    // the tag, the side, size and entry
    ctx.font = `500 16px ${CF.mono}`;
    ctx.fillStyle = T.lime;
    ctx.fillText(`[One trade${o.name ? ' · @' + o.name.replace(/^@/, '') : ''}]`, L, 172);
    const side = p.side === 'long' ? 'LONG' : 'SHORT';
    ctx.font = `700 19px ${CF.mono}`;
    ctx.letterSpacing = '1.5px';
    const pw = ctx.measureText(side).width + 30;
    ctx.fillStyle = p.side === 'long' ? T.lime : T.text;
    ctx.fillRect(L, 198, pw, 40);
    ctx.fillStyle = T.ink;
    ctx.fillText(side, L + 15, 225);
    ctx.letterSpacing = '0px';
    const entry = (det && det.entry) || p.open;
    ctx.font = `400 30px ${CF.mono}`;
    ctx.fillStyle = T.text;
    ctx.fillText(
      `${p.qty > 0 ? fmtQty(p.qty, p.symbol) + ' ' : ''}${symLabel(p.symbol)}${entry > 0 ? ' @ ' + fmtPx(entry, tick) : ''}`,
      L + pw + 18,
      229,
    );
    // the total and how many accounts; amounts hidden: the points instead
    const dir = p.side === 'long' ? 1 : -1;
    const pts = p.close > 0 && entry > 0 ? dir * (p.close - entry) : null;
    const big = o.hide
      ? pts == null
        ? '—'
        : `${pts < 0 ? '−' : '+'}${fmtNum(Math.abs(pts), decimalsOf(tick))} pts`
      : sp(g.pnl);
    const val = o.hide ? pts || 0 : g.pnl;
    let size = 132;
    const font = () => `500 condensed ${size}px ${CF.display}`;
    ctx.font = font();
    while (ctx.measureText(big).width > R - L && size > 70) {
      size -= 6;
      ctx.font = font();
    }
    ctx.fillStyle = Math.abs(val) < 0.005 ? T.text : val > 0 ? T.lime : T.red;
    ctx.fillText(big, L - 4, 250 + size * 0.95);
    ctx.font = `500 condensed 120px ${CF.display}`;
    ctx.fillStyle = T.text;
    ctx.fillText(`on ${n} account${n === 1 ? '' : 's'}.`, L - 4, 250 + size * 0.95 + 112);
    // the line under it: what each account made (when they match), and the copy
    const base = 250 + size * 0.95 + 112 + 62;
    const pnls = g.items.map((x) => x.pnl),
      lo = Math.min(...pnls),
      hi = Math.max(...pnls);
    const parts = [];
    if (!o.hide && n > 1)
      parts.push(
        hi - lo <= Math.max(1, Math.abs(hi) * 0.01)
          ? [
              [sp(p.pnl), T.text, 500],
              [' each', T.muted, 400],
            ]
          : [
              [`${sp(lo)} to ${sp(hi)}`, T.text, 500],
              [' per account', T.muted, 400],
            ],
      );
    if (n > 1) parts.push([[`copied to ${n - 1} follower${n - 1 === 1 ? '' : 's'}`, T.muted, 400]]);
    let lx = L;
    parts.forEach((pp, i) => {
      if (i) lx = runs(ctx, lx, base, [[' · ', T.muted, `400 22px ${CF.sans}`]]);
      lx = runs(
        ctx,
        lx,
        base,
        pp.map(([t, c, w]) => [t, c, `${w} 22px ${CF.sans}`]),
      );
    });
    // the exits: each with its price, points (a bar) and what one account made
    const exits = ((det && det.exits) || []).slice(0, 4);
    let y = base + 60;
    if (exits.length) {
      ctx.font = `500 12px ${CF.mono}`;
      ctx.fillStyle = T.dim;
      ctx.letterSpacing = '1.8px';
      ctx.fillText('EXIT', L, y);
      ctx.fillText('PRICE', L + 170, y);
      ctx.fillText('POINTS', L + 355, y);
      ctx.textAlign = 'right';
      if (!o.hide) ctx.fillText(n > 1 && hi - lo > Math.max(1, Math.abs(hi) * 0.01) ? 'MASTER' : 'EACH', R, y);
      ctx.textAlign = 'left';
      ctx.letterSpacing = '0px';
      const maxPts = Math.max(...exits.map((x) => Math.abs(x.pts)), tick);
      y += 40;
      for (const x of exits) {
        const col =
          x.kind.startsWith('TP') || x.kind === 'VEST' ? T.lime : x.kind === 'SL' || x.kind === 'LIQ' ? T.red : T.muted;
        ctx.font = `600 16px ${CF.mono}`;
        ctx.fillStyle = col;
        ctx.fillText(`${x.kind === 'VEST' ? 'TARGET' : x.kind} · ${fmtQty(x.qty, p.symbol)}`, L, y);
        ctx.font = `400 18px ${CF.mono}`;
        ctx.fillStyle = T.muted;
        ctx.fillText(fmtPx(x.price, tick), L + 170, y);
        const bx = L + 355,
          bw = o.hide ? R - 120 - bx : R - 260 - bx;
        ctx.fillStyle = 'rgba(255,255,255,0.06)';
        ctx.fillRect(bx, y - 12, bw, 10);
        ctx.fillStyle = x.pts >= 0 ? T.lime : T.red;
        ctx.fillRect(bx, y - 12, Math.max(0, (Math.abs(x.pts) / maxPts) * bw), 10);
        ctx.textAlign = 'right';
        ctx.font = `500 18px ${CF.mono}`;
        ctx.fillStyle = T.text;
        ctx.fillText(
          `${x.pts > 0 ? '+' : x.pts < 0 ? '−' : ''}${fmtNum(Math.abs(x.pts), decimalsOf(tick))}`,
          o.hide ? R : R - 140,
          y,
        );
        if (!o.hide) {
          ctx.fillStyle = Math.abs(x.usd) < 0.005 ? T.text : x.usd > 0 ? T.lime : T.red;
          ctx.fillText(Math.abs(x.usd) < 0.005 ? '$0' : sp(x.usd), R, y);
        }
        ctx.textAlign = 'left';
        ctx.fillStyle = 'rgba(255,255,255,0.06)';
        ctx.fillRect(L, y + 18, R - L, 1);
        y += 50;
      }
    }
    // the timeline: up to five moments, first and last always
    let ev = (det && det.events) || [];
    if (ev.length > 5)
      ev = [
        ev[0],
        ...ev
          .slice(1, -1)
          .filter((e) => e.hot)
          .slice(0, 3),
        ev[ev.length - 1],
      ].slice(0, 5);
    if (ev.length > 1) {
      const ty = Math.max(y + 30, 840),
        step = (R - L - 120) / (ev.length - 1);
      ctx.fillStyle = 'rgba(255,255,255,0.12)';
      ctx.fillRect(L + 8, ty, step * (ev.length - 1), 2);
      ev.forEach((e, i) => {
        const x = L + 8 + i * step;
        ctx.beginPath();
        ctx.arc(x, ty + 1, 8, 0, Math.PI * 2);
        ctx.fillStyle = T.bg;
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = e.hot ? T.lime : T.muted;
        ctx.stroke();
        ctx.font = `600 16px ${CF.mono}`;
        ctx.fillStyle = T.text;
        ctx.fillText(new Date(e.at).toLocaleTimeString('en-GB', { timeZone: ET_TZ, hour12: false }), x - 8, ty + 38);
        ctx.font = `400 16px ${CF.sans}`;
        ctx.fillStyle = T.muted;
        // short lines, kept inside the card
        const words = e.text.split(' '),
          maxW = Math.min(step - 12, ev.length <= 3 ? 320 : 170, R - (x - 8));
        let line = '',
          ly = ty + 62;
        for (const w of words) {
          const tryLine = line ? line + ' ' + w : w;
          if (ctx.measureText(tryLine).width > maxW && line) {
            ctx.fillText(line, x - 8, ly);
            line = w;
            ly += 20;
          } else line = tryLine;
        }
        if (line) ctx.fillText(line, x - 8, ly);
      });
    }
    // bottom: the site and the code
    ctx.font = `500 15px ${CF.mono}`;
    ctx.fillStyle = T.dim;
    ctx.fillText(g.copied ? 'Copied on Vest · free at stratuh.com' : 'Traded on Vest · stratuh.com', L, W - 56);
    if (o.code) {
      ctx.font = `700 15px ${CF.mono}`;
      ctx.letterSpacing = '2.4px';
      const cw = ctx.measureText(SUPPORT_CODE).width + 28;
      ctx.font = `500 12px ${CF.mono}`;
      ctx.letterSpacing = '1px';
      const lw = ctx.measureText('VEST CODE').width + 24;
      const bx = R - cw - lw,
        by = W - 56 - 22;
      ctx.strokeStyle = 'rgba(200,245,66,0.45)';
      ctx.strokeRect(bx + 0.5, by + 0.5, cw + lw - 1, 33);
      ctx.fillStyle = T.lime;
      ctx.fillRect(bx + lw, by, cw, 34);
      ctx.fillStyle = T.dim;
      ctx.fillText('VEST CODE', bx + 12, by + 22);
      ctx.font = `700 15px ${CF.mono}`;
      ctx.letterSpacing = '2.4px';
      ctx.fillStyle = T.ink;
      ctx.fillText(SUPPORT_CODE, bx + lw + 14, by + 23);
      ctx.letterSpacing = '0px';
    }
  }
  const ymd = (t) => new Date(t).toISOString().slice(0, 10);
  const cardFile = () => {
    const g = S.share && S.share.kind === 'trade' && shareTrade();
    return g
      ? `stratuh-trade-${ymd(g.closedAt)}-${new Date(g.closedAt).toTimeString().slice(0, 5).replace(':', '')}.png`
      : `stratuh-today-${ymd(Date.now())}.png`;
  };
  function saveCard(cv) {
    const name = cardFile();
    cv.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob),
        a = document.createElement('a');
      a.href = url;
      a.download = name;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }, 'image/png');
  }
  // The trades the One trade list offers: profitable ones, newest first (a copied trade once, its P&L summed)
  // (Latest: newest first; Most profitable: the biggest total first)
  const shareTrades = () => {
    const list = ((S.hist && S.hist.trades) || []).filter((g) => g.pnl > 0);
    return S.share && S.share.sort === 'best'
      ? [...list].sort((a, b) => b.pnl - a.pnl || b.closedAt - a.closedAt)
      : list;
  };
  const shareTrade = () => {
    const list = shareTrades();
    return list.find((g) => g.key === S.share.trade) || list[0] || null;
  };
  // The Share sheet: Today or One trade, the picture as it will be copied, its options, Copy image and Save PNG. Built
  // once (the name being typed survives the panel's refreshes); the picture is redrawn when its data or an option
  // changes. One trade lists the profitable trades of the last 30 days from Vest's position history.
  function renderShare(body) {
    if (!S.share) {
      const o = store.get(SHARE_OPTS_KEY, {}) || {};
      S.share = {
        hide: o.hide === true,
        nums: o.nums === true,
        code: o.code !== false,
        sort: o.sort === 'best' ? 'best' : 'latest',
        kind: 'day',
        trade: null,
      };
    }
    ensureDay();
    loadHistory(); // the day's trades (chips) and the One trade list
    if (!(body.dataset.view === 'share' && body.querySelector('.share'))) {
      body.dataset.view = 'share';
      const opt = (key, name, short, on) =>
        `<div class="opt" data-shopt="${key}"><div class="opt-txt"><div class="opt-name">${name}</div><div class="opt-short">${short}</div></div>
          <button class="switch ${on ? 'on' : ''}" data-sh="${key}" role="switch" aria-checked="${on}" aria-label="${name}"><span class="knob"></span></button></div>`;
      body.innerHTML = `
        <div class="share">
          <div class="tabseg" role="tablist"><button class="tab" role="tab" data-kind="day">Today</button><button class="tab" role="tab" data-kind="trade">One trade</button></div>
          <div class="tabseg" id="sh-sort" role="tablist" aria-label="Order" hidden><button class="tab" role="tab" data-sort="latest">Latest</button><button class="tab" role="tab" data-sort="best">Most profitable</button></div>
          <div class="sh-list" id="sh-list" hidden></div>
          <div class="prev"><canvas id="sh-cv" width="${CARD_W}" height="${CARD_H}" aria-label="The picture to share"></canvas></div>
          <div>
            ${opt('hide', 'Hide amounts', 'Shows % gain (or points) instead of dollars.', S.share.hide)}
            ${opt('nums', 'Hide account numbers', 'Leaves the account tiles off.', S.share.nums)}
            <div class="opt"><div class="opt-txt"><div class="opt-name">Name on the card</div><div class="opt-short">Optional. Leave it empty to post without one.</div></div>
              <input class="tr-in sh-name" id="sh-name" maxlength="24" placeholder="@name" aria-label="Name on the card"></div>
            ${opt('code', `Add code ${SUPPORT_CODE}`, '5% off Vest for whoever sees it.', S.share.code)}
          </div>
          <div class="sh-btns"><button class="armbtn" id="sh-copy">${ICON.copy}<span>Copy image</span></button><button class="ghostbtn" id="sh-save">${ICON.save} Save PNG</button></div>
          <div class="hint">Shows P&amp;L, sizes and prices only. Never balances, account ids or logins.</div>
        </div>`;
      const nm = body.querySelector('#sh-name');
      nm.value = store.get(SHARE_NAME_KEY, '') || '';
      ['keydown', 'keyup', 'keypress'].forEach((ev) => nm.addEventListener(ev, (e) => e.stopPropagation()));
      nm.addEventListener('input', () => {
        store.set(SHARE_NAME_KEY, nm.value.trim());
        drawShare(body, true);
      });
      body.querySelectorAll('[data-sh]').forEach(
        (b) =>
          (b.onclick = () => {
            S.share[b.dataset.sh] = !S.share[b.dataset.sh];
            saveShareOpts();
            b.classList.toggle('on', S.share[b.dataset.sh]);
            b.setAttribute('aria-checked', String(S.share[b.dataset.sh]));
            drawShare(body, true);
          }),
      );
      body.querySelectorAll('[data-sort]').forEach(
        (b) =>
          (b.onclick = () => {
            if (!S.share.trade) S.share.trade = (shareTrade() || {}).key || null; // the picked trade stays picked
            S.share.sort = b.dataset.sort;
            saveShareOpts();
            renderShare(body);
          }),
      );
      body.querySelectorAll('[data-kind]').forEach(
        (b) =>
          (b.onclick = () => {
            S.share.kind = b.dataset.kind;
            if (S.share.kind === 'trade') loadHistory();
            renderShare(body);
          }),
      );
      const cv = body.querySelector('#sh-cv');
      body.querySelector('#sh-save').onclick = () => saveCard(cv);
      body.querySelector('#sh-copy').onclick = () => copyCard(body, cv);
      loadCardFonts().then(() => drawShare(body, true));
    }
    const trade = S.share.kind === 'trade';
    body.querySelectorAll('[data-kind]').forEach((b) => {
      b.classList.toggle('on', b.dataset.kind === S.share.kind);
      b.setAttribute('aria-selected', String(b.dataset.kind === S.share.kind));
    });
    body.querySelector('[data-shopt="nums"]').hidden = trade; // the trade card names no accounts
    body.querySelector('#sh-sort').hidden = !trade;
    body.querySelectorAll('[data-sort]').forEach((b) => {
      b.classList.toggle('on', b.dataset.sort === S.share.sort);
      b.setAttribute('aria-selected', String(b.dataset.sort === S.share.sort));
    });
    renderShareList(body);
    drawShare(body, false);
  }
  // One trade: the list to pick from (the chosen one lifted). Rewritten only when it changes, so a click isn't lost.
  function renderShareList(body) {
    const box = body.querySelector('#sh-list'),
      trade = S.share.kind === 'trade';
    box.hidden = !trade;
    if (!trade) return;
    const list = shareTrades(),
      cur = shareTrade();
    const html = !S.hist
      ? '<div class="hint">Reading your trade history from Vest…</div>'
      : S.hist.error
        ? `<div class="hint">Couldn't read your trade history (${esc(S.hist.error)}).</div>`
        : !list.length
          ? `<div class="hint">No profitable trades in the last ${HIST_DAYS} days.</div>`
          : list
              .slice(0, 100)
              .map((g) => {
                const p = g.lead,
                  when = new Date(g.closedAt);
                // ET, like the cards
                const date = when.toLocaleDateString('en-US', { timeZone: ET_TZ, month: 'short', day: 'numeric' }),
                  time = when.toLocaleTimeString('en-GB', {
                    timeZone: ET_TZ,
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                  });
                return `<button class="sh-tr${cur && g.key === cur.key ? ' on' : ''}" data-trade="${esc(g.key)}">
                  <span class="sh-side ${g.side}">${g.side === 'long' ? 'LONG' : 'SHORT'}</span>
                  <span class="sh-what">${p.qty > 0 ? esc(fmtQty(p.qty, p.symbol)) + ' ' : ''}${esc(symLabel(g.symbol))}${g.copied ? `<small>× ${g.items.length}</small>` : ''}</span>
                  <span class="sh-when">${esc(date)} ${esc(time)}</span><span class="sh-pnl">${esc(sp(g.pnl))}</span></button>`;
              })
              .join('');
    if (box.dataset.html === html) return;
    box.dataset.html = html;
    box.innerHTML = html;
    box.querySelectorAll('[data-trade]').forEach(
      (b) =>
        (b.onclick = () => {
          S.share.trade = b.dataset.trade;
          renderShareList(body);
          drawShare(body, true);
        }),
    );
  }
  function drawShare(body, force) {
    const cv = body.querySelector('#sh-cv');
    if (!cv) return;
    if (S.share.kind === 'trade') {
      const g = shareTrade();
      if (!g) {
        cv.dataset.key = '';
        cv.width = cv.height = 0;
        return;
      }
      const det = _details[g.lead.acct + ':' + g.lead.id] || null;
      const o = { hide: S.share.hide, code: S.share.code, name: shareName() };
      const key = JSON.stringify({ k: g.key, det: !!det, ...o });
      if (!force && cv.dataset.key === key) return;
      cv.dataset.key = key;
      drawTradeCard(cv, g, det, o);
      if (!det)
        tradeDetails(g)
          .then(() => S.shareOpen && S.share.kind === 'trade' && shareTrade() === g && drawShare(body, true))
          .catch(() => null); // without the details the card still shows the trade and its total
      return;
    }
    const d = cardData();
    const key = JSON.stringify({ ...d, at: Math.floor(d.at / 60000), hide: S.share.hide });
    if (!force && cv.dataset.key === key) return;
    cv.dataset.key = key;
    drawCard(cv, d, S.share.hide);
  }
  if (window.__VC_TEST__) window.__vcShare = { dayChips, groupTrades, details: () => _details };
  const saveShareOpts = () =>
    store.set(SHARE_OPTS_KEY, { hide: S.share.hide, nums: S.share.nums, code: S.share.code, sort: S.share.sort });
  const shareName = () =>
    String(store.get(SHARE_NAME_KEY, '') || '')
      .replace(/[^\p{L}\p{N}@._ -]/gu, '')
      .slice(0, 24);
  // Copy needs the click's user gesture: the PNG goes to the clipboard as a promise, so the gesture still counts.
  // Where the browser refuses, the PNG is saved instead.
  function copyCard(body, cv) {
    const btn = body.querySelector('#sh-copy');
    const blob = new Promise((res, rej) => cv.toBlob((b) => (b ? res(b) : rej(new Error('no image'))), 'image/png'));
    let p;
    try {
      p = navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
    } catch (e) {
      p = Promise.reject(e);
    }
    p.then(() => {
      btn.classList.add('done');
      btn.querySelector('span').textContent = 'Copied';
      toast('Image copied. Paste it into X, Discord or a group chat.');
      diag('share', { outcome: 'copied', kind: S.share.kind, hidden: !!S.share.hide });
      setTimeout(() => {
        btn.classList.remove('done');
        btn.querySelector('span').textContent = 'Copy image';
      }, 2000);
    }).catch(() => {
      const name = cardFile();
      saveCard(cv);
      toast(`The browser blocked the clipboard, so the picture was saved to Downloads as ${name}.`);
      diag('share', { outcome: 'saved', kind: S.share.kind, hidden: !!S.share.hide });
    });
  }

  // ───────────────────────── claim profit ─────────────────────────
  // "Claim all profit": moves each live funded account's claimable profit to the Primary Account, exactly as Vest's own
  // Claim Profit window does: POST /v3/capital/withdraw with that account's login, { account_id, amount, target_account_id,
  // idempotency_key }; Vest pays the account's split and credits it within 24 hours. Claimable = free balance − starting
  // balance (open positions and orders block a claim; unrealized PnL isn't claimable); Vest's minimum is $1. Like Vest's
  // window, it claims the exact amount (to the micro-dollar, "105.27086"); the balance drops as soon as a claim is
  // submitted, so a claim still processing doesn't block or double the next one (seen live, 2026-10-06).
  // A claim can't be reversed, so: nothing is sent before a preview the trader confirms; every account is re-read just
  // before its own claim (balance, positions, orders); accounts go one at a time, a few
  // seconds apart; each claim has one idempotency key, reused on its single retry, so it can never be paid twice; and the
  // run can be stopped between accounts. Moving money from the Primary Account to a wallet stays a manual step on Vest.
  const CLAIM_MIN_USD = 1;
  const CLAIM_GAP_MS = 1000; // between two accounts' claims: one at a time (a claim answers in ~0.3 s)
  const CLAIM_RETRY_MS = 3000;
  const claimGap = () => (typeof window.__VC_CLAIM_GAP_MS === 'number' ? window.__VC_CLAIM_GAP_MS : CLAIM_GAP_MS);
  S.claim = null; // { phase: 'checking' | 'review' | 'running' | 'done', primary, items: [...], stop, error }
  const claimBusy = () => S.claim && (S.claim.phase === 'checking' || S.claim.phase === 'running');
  // A preview or a result is a snapshot: it goes when the copier arms or the accounts reload, and a preview after
  // CLAIM_REVIEW_MS (the balances move; a claim re-checks every account anyway). A claim in progress always stays.
  const CLAIM_REVIEW_MS = 120000;
  function dropClaimReview() {
    if (!S.claim || claimBusy()) return false;
    S.claim = null;
    return true;
  }

  // One account, read fresh: what it could claim right now, or why it can't. `free` is its free balance from /v3/accounts.
  async function claimCheck(id, free) {
    const r = S.byId[id];
    const item = { id, label: accLabel(id), claimable: 0, net: 0, split: (r && r.split) || 0, reason: null };
    if (!r) return { ...item, reason: 'no longer active' };
    if (!isFunded(r)) return { ...item, reason: 'evaluation: profit pays out once funded' };
    try {
      const { token } = await mintAccountToken(id);
      const [pos, ord] = await Promise.all([
        api('/v3/positions/opened', token),
        api('/v3/positions/opened-orders', token),
      ]);
      if (((pos && pos.positions) || []).length) return { ...item, reason: 'has an open position: close it to claim' };
      if (((ord && ord.orders) || []).length) return { ...item, reason: 'has open orders: cancel them to claim' };
    } catch (e) {
      return { ...item, reason: `couldn't be checked (${e.message})` };
    }
    if (!(free >= 0)) return { ...item, reason: "couldn't read its balance" };
    const claimable = Math.floor((free - r.size) * 1e6 + 1e-6) / 1e6; // all of it, to the micro-dollar, as Vest claims
    if (!(claimable > 0)) return { ...item, reason: 'no profit to claim' };
    if (claimable < CLAIM_MIN_USD) return { ...item, reason: `${money(claimable)} is under Vest's $1 minimum` };
    return { ...item, claimable, net: claimable * item.split };
  }
  // Free balances of every account, and the Primary Account's id (account_type 1), in one read.
  const claimBalances = () => fetchBalances();

  async function claimPreview() {
    if (claimBusy()) return;
    if (S.flattening || S.placing || S.adjusting || S.arming)
      return toast('Wait for the current order, Flatten all or starting to finish.');
    // a trade copied mid-claim would change what each account can claim
    if (S.armed) return toast('Stop copying before claiming profit.');
    if (healthState().changed)
      return toast(
        siteGate() === 'failed'
          ? "Vest changed something the copier relies on: claim on Vest's own page until a copier update."
          : 'Vest updated its site: wait a moment for the check to finish.',
      );
    S.claim = { phase: 'checking', items: [] };
    render();
    try {
      const { free, primary } = await claimBalances();
      if (!primary) throw new Error("couldn't find your Primary Account");
      const ids = Object.values(S.byId)
        .sort((a, b) => a.order - b.order)
        .map((r) => r.id);
      const items = await Promise.all(ids.map((id) => claimCheck(id, free[id])));
      const review = (S.claim = { phase: 'review', primary, items });
      const ttl = typeof window.__VC_CLAIM_REVIEW_MS === 'number' ? window.__VC_CLAIM_REVIEW_MS : CLAIM_REVIEW_MS;
      setTimeout(() => S.claim === review && dropClaimReview() && render(), ttl);
    } catch (e) {
      S.claim = { phase: 'done', items: [], error: `Couldn't prepare the claim: ${e.message}` };
    }
    render();
  }

  // Send one claim with the account's own login; Vest's error text is kept so the log can say why.
  async function sendClaim(id, body) {
    const { token } = await mintAccountToken(id);
    const r = await _fetch(API + '/v3/capital/withdraw', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: JSON.stringify(body),
    });
    const res = parseJson(await r.text(), {}) || {};
    if (!r.ok) {
      const err = new Error(res.message || res.msg || res.error || `HTTP ${r.status}`);
      err.status = r.status;
      throw err;
    }
    return res;
  }

  async function claimRun() {
    const c = S.claim;
    if (!c || c.phase !== 'review') return;
    const todo = c.items.filter((i) => i.claimable > 0);
    if (!todo.length) return;
    if (S.armed || S.arming || S.placing || S.adjusting || S.flattening)
      return toast('Stop copying and let orders finish before claiming profit.');
    c.phase = 'running';
    c.stop = false;
    const total = todo.reduce((a, i) => a + i.claimable, 0);
    logEvent(
      'warn',
      `Claim profit: claiming from ${todo.length} account(s), one every ${Math.round(claimGap() / 1000)} s.`,
    );
    diag('claim', { outcome: 'started', accounts: todo.map((i) => ({ ...who(i.id), claimable: i.claimable })), total });
    render();
    for (let k = 0; k < todo.length; k++) {
      const item = todo[k];
      if (c.stop) {
        item.status = 'stopped';
        continue;
      }
      if (k) {
        item.status = 'waiting';
        render();
        for (let w = 0; w < claimGap() && !c.stop; w += 250) await sleep(Math.min(250, claimGap() - w));
        if (c.stop) {
          item.status = 'stopped';
          continue;
        }
      }
      item.status = 'claiming';
      render();
      // re-read this account right before claiming: a trade, a deposit or another claim may have changed it
      let fresh;
      try {
        const { free } = await claimBalances();
        fresh = await claimCheck(item.id, free[item.id]);
      } catch (e) {
        fresh = { ...item, claimable: 0, reason: `couldn't be re-checked (${e.message})` };
      }
      if (!(fresh.claimable > 0)) {
        Object.assign(item, { status: 'skipped', reason: fresh.reason });
        logEvent('warn', `Claim profit: ${item.label} skipped: ${fresh.reason}.`);
        diag('claim', { ...who(item.id), outcome: 'skipped', reason: fresh.reason });
        continue;
      }
      Object.assign(item, { claimable: fresh.claimable, net: fresh.net });
      const body = {
        account_id: item.id,
        amount: fmtNum(fresh.claimable, 6), // as Vest's window sends it: "105.27086"
        target_account_id: c.primary,
        idempotency_key: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random(),
      };
      try {
        let res;
        try {
          res = await sendClaim(item.id, body);
        } catch (e) {
          if (e.status && e.status < 500 && e.status !== 429) throw e; // refused: not retried
          await sleep(CLAIM_RETRY_MS); // network or server trouble: once more, same key, so it can't pay twice
          res = await sendClaim(item.id, body);
        }
        const got = parseFloat(res.trader_amount);
        Object.assign(item, { status: 'claimed', net: got > 0 ? got : item.net });
        logEvent(
          'ok',
          `Claim profit: ${item.label} claimed ${money(item.claimable)}: ${money(item.net)} to your Primary Account within 24 hours.`,
        );
        diag('claim', { ...who(item.id), outcome: 'claimed', amount: body.amount, net: item.net, reply: res });
      } catch (e) {
        Object.assign(item, { status: 'failed', reason: e.message });
        logEvent('warn', `Claim profit: ${item.label} NOT claimed: ${e.message}.`);
        diag('claim', {
          ...who(item.id),
          outcome: 'failed',
          amount: body.amount,
          error: e.message,
          status: e.status || null,
        });
      }
      render();
    }
    const done = todo.filter((i) => i.status === 'claimed');
    const sum = (f) => centsDown(done.reduce((a, i) => a + i[f], 0));
    c.phase = 'done';
    logEvent(
      done.length === todo.length ? 'ok' : 'warn',
      `Claim profit: ${done.length}/${todo.length} claimed, ${money(sum('claimable'))} gross → ${money(sum('net'))} to your Primary Account within 24 hours.`,
    );
    diag('claim', {
      outcome: 'finished',
      claimed: done.length,
      of: todo.length,
      gross: sum('claimable'),
      net: sum('net'),
    });
    setTimeout(refreshBalances, BALANCE_AFTER_TRADE_MS);
    render();
  }

  // The claim card under the P&L list: a button, then the preview to confirm, then progress and the result.
  function claimHtml() {
    const c = S.claim;
    if (!c && S.armed)
      return `<div class="claim"><button class="ghostbtn claim-go" data-claim="preview" disabled>Claim all profit…</button>
        <div class="sum-note">Stop copying to claim profit: a trade copied mid-claim would change what each account
        can claim.</div></div>`;
    if (!c)
      return `<div class="claim"><button class="ghostbtn claim-go" data-claim="preview">Claim all profit…</button>
        <div class="sum-note">Moves each funded account's profit to your Primary Account, one account at a time. Shows a
        preview first; nothing is sent until you confirm.</div></div>`;
    if (c.phase === 'checking') return `<div class="claim"><div class="sum-note">Checking every account…</div></div>`;
    const line = (i) => {
      const st = i.status;
      const right =
        st === 'claimed'
          ? `<span class="pos">claimed · ${money(i.net)} to you</span>`
          : st === 'failed'
            ? `<span class="neg">not claimed: ${esc(i.reason)}</span>`
            : st === 'skipped'
              ? `<span class="dim">skipped: ${esc(i.reason)}</span>`
              : st === 'stopped'
                ? `<span class="dim">stopped</span>`
                : st === 'claiming'
                  ? `<span>claiming…</span>`
                  : i.claimable > 0
                    ? `<span>${money(i.claimable)} → <b class="pos">${money(i.net)}</b> (${Math.round(i.split * 100)}%)</span>`
                    : `<span class="dim">${esc(i.reason)}</span>`;
      return `<div class="claim-row"><span>${esc(i.label)}</span>${right}</div>`;
    };
    const rows = c.items.map(line).join('');
    const todo = c.items.filter((i) => i.claimable > 0);
    const gross = centsDown(todo.reduce((a, i) => a + i.claimable, 0)),
      net = centsDown(todo.reduce((a, i) => a + i.net, 0));
    if (c.phase === 'review')
      return `<div class="claim"><div class="claim-h">Claim profit: review</div>${rows}
        ${
          todo.length
            ? `<div class="sum-note">Claims go to your Primary Account and arrive within 24 hours. They can't be reversed.
                Accounts are claimed one at a time, ${Math.round(claimGap() / 1000)} s apart, each re-checked first.</div>
              <div class="claim-btns"><button class="armbtn sm" data-claim="run">Claim ${money(gross)} → you get ${money(net)}</button>
                <button class="ghostbtn" data-claim="close">Cancel</button></div>`
            : `<div class="sum-note">Nothing to claim right now.</div><div class="claim-btns"><button class="ghostbtn" data-claim="close">Close</button></div>`
        }</div>`;
    if (c.phase === 'running')
      return `<div class="claim"><div class="claim-h">Claiming…</div>${rows}
        <div class="claim-btns"><button class="ghostbtn" data-claim="stop" ${c.stop ? 'disabled' : ''}>${c.stop ? 'Stopping…' : 'Stop after this account'}</button></div></div>`;
    return `<div class="claim"><div class="claim-h">Claim profit: done</div>${c.error ? `<div class="neg">${esc(c.error)}</div>` : rows}
      <div class="claim-btns"><button class="ghostbtn" data-claim="close">Done</button></div></div>`;
  }
  function wireClaim(body) {
    body.querySelectorAll('[data-claim]').forEach(
      (b) =>
        (b.onclick = () => {
          const a = b.dataset.claim;
          if (a === 'preview') claimPreview();
          else if (a === 'run') claimRun();
          else if (a === 'stop' && S.claim) {
            S.claim.stop = true;
            render();
          } else if (a === 'close' && !claimBusy()) {
            S.claim = null;
            render();
          }
        }),
    );
  }

  // ── Today: each account's equity at the start of Vest's trading day (20:00 ET) and the day's combined equity curve, from
  // Vest's own performance series (what its portfolio chart draws), so it's right even for hours the panel was closed.
  // Read when the P&L tab or Share is open, at most once a minute. Today = equity now − equity at the day's start.
  const DAY_REFRESH_MS = 60000,
    DAY_POINTS = 200;
  S.day = null; // { start, at, startEq: {id: equity}, startUpnl: {id: upnl}, curve: [[ts, combined equity]] }
  let _dayBusy = false;
  async function ensureDay(force = false) {
    const start = vestDayStart();
    if (_dayBusy || !userTokenOk()) return;
    if (!force && S.day && S.day.start === start && Date.now() - S.day.at < DAY_REFRESH_MS) return;
    _dayBusy = true;
    try {
      const r = await api(`/v3/trading-performance/series?from=${start}&to=${Date.now()}&points=${DAY_POINTS}`);
      const byAcct = {};
      for (const it of (r && r.items) || []) {
        const v = num(it.equity_value);
        if (!it.account_id || !Number.isFinite(v)) continue;
        (byAcct[it.account_id] = byAcct[it.account_id] || []).push({
          ts: msOf(it.ts) || 0,
          eq: v,
          upnl: num(it.total_unrealized_pnl) || 0,
        });
      }
      const startEq = {},
        startUpnl = {};
      for (const [id, pts] of Object.entries(byAcct)) {
        pts.sort((x, y) => x.ts - y.ts);
        startEq[id] = pts[0].eq;
        startUpnl[id] = pts[0].upnl;
      }
      // the combined curve: every account's last known equity at each point in time (no guesses before its first)
      const ids = Object.keys(byAcct).filter((id) => S.byId[id]);
      const times = [...new Set(ids.flatMap((id) => byAcct[id].map((p) => p.ts)))].sort((x, y) => x - y);
      const last = {},
        idx = {};
      const curve = [];
      for (const t of times) {
        for (const id of ids) {
          const pts = byAcct[id];
          let i = idx[id] || 0;
          while (i < pts.length && pts[i].ts <= t) last[id] = pts[i++].eq;
          idx[id] = i;
        }
        // a point from before the day began (Vest buckets the series) counts as the day's opening value
        if (ids.every((id) => last[id] != null))
          curve.push([Math.max(t, start), ids.reduce((a, id) => a + last[id], 0)]);
      }
      const dedup = curve.filter((c, i) => i === curve.length - 1 || curve[i + 1][0] !== c[0]);
      S.day = { start, at: Date.now(), startEq, startUpnl, curve: dedup, ids };
    } catch {
      S.day = S.day && S.day.start === start ? { ...S.day, at: Date.now() } : null; // try again in a minute
    } finally {
      _dayBusy = false;
    }
    if (S.summaryOpen || S.shareOpen) render();
  }
  // Today's P&L for an account (NaN until the day's start is known or while its balance is unread).
  const todayOf = (r) =>
    S.day && S.day.startEq[r.id] != null && !isNaN(r.equity) ? r.equity - S.day.startEq[r.id] : NaN;
  const sp = (n) =>
    isNaN(n)
      ? '—'
      : (n >= 0 ? '+' : '−') +
        '$' +
        Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  function dayTotals() {
    const rows = Object.values(S.byId);
    const known = rows.filter((r) => !isNaN(todayOf(r)));
    const today = known.reduce((a, r) => a + todayOf(r), 0);
    const open = known.reduce((a, r) => a + (r.upnl || 0), 0);
    const openAtStart = known.reduce((a, r) => a + ((S.day && S.day.startUpnl[r.id]) || 0), 0);
    return { known: known.length, rows: rows.length, today, open, openAtStart, closed: today - (open - openAtStart) };
  }

  // P&L: today on top (with Share), what you keep after splits, then each account: today, and its equity and total
  // since it started. Claim profit underneath.
  function renderSummary(body) {
    ensureDay();
    const rows = Object.values(S.byId).sort((a, b) => a.size - b.size || a.order - b.order);
    if (!rows.length) {
      body.innerHTML = `<div class="empty">No accounts loaded.</div>`;
      return;
    }
    const sum = (arr) => arr.reduce((s, x) => s + (isNaN(x) ? 0 : x), 0);
    // an account whose balance couldn't be read counts in neither total (its start without its equity would read as a loss)
    const known = rows.filter((r) => !isNaN(r.equity) && !isNaN(r.size));
    const totalEq = sum(known.map((r) => r.equity)),
      totalInit = sum(known.map((r) => r.size)),
      totalPnl = totalEq - totalInit;
    const pnlOf = (r) => r.equity - r.size; // NaN while the balance is unknown
    // What you'd take home if every funded account's profit were claimed now, after each account's own split
    const funded = rows.filter(isFunded);
    const keep = sum(funded.map(keepOf));
    const openTrades = rows.some((r) => r.upnl);
    const evalsUp = rows.some((r) => !isFunded(r) && pnlOf(r) > 0),
      fundedDown = funded.some((r) => pnlOf(r) < 0);
    const notCounted = [
      evalsUp && "evaluations (their profit doesn't pay out)",
      fundedDown && 'accounts in a loss (claims are per account, so they pay $0 and take nothing from the others)',
    ].filter(Boolean);
    const d = dayTotals(),
      hasDay = d.known > 0;
    const hero = hasDay ? d.today : totalPnl;
    const daySub = hasDay
      ? `Today on ${d.known} account${d.known === 1 ? '' : 's'}${
          Math.abs(d.openAtStart) < 0.005 && (d.open || d.closed)
            ? `<br>Closed <span class="mono">${sp(d.closed)}</span> · open <span class="mono">${sp(d.open)}</span>`
            : ''
        }`
      : S.day === null
        ? 'Since start · today loads in a moment'
        : 'Since start';
    const keepHtml = funded.length
      ? `<div class="sum-keep" title="Each funded account's profit × its profit split, added up. Accounts in a loss count as $0.">
          <span class="sum-keep-v">${money(keep)}</span> <span class="sum-keep-l">you keep after splits${openTrades ? ', if closed now' : ''}</span></div>`
      : '';
    body.innerHTML = `
      <div class="summary">
        <div class="sum-hero">
          <button class="ghostbtn sum-share" data-act="share" title="A picture of today's P&amp;L to paste anywhere">${ICON.share} Share</button>
          <div class="sum-total ${hero >= 0 ? 'pos' : 'neg'}" title="${hasDay ? "Since Vest's trading day began (20:00 ET)" : 'Equity − starting balance, all accounts'}">${sp(hero)}</div>
          <div class="sum-day">${daySub}</div>
        </div>
        <div class="sum-sub">${hasDay ? `Since start <span class="mono">${sp(totalPnl)}</span> · ` : ''}equity <span class="mono">${money(totalEq)}</span> of <span class="mono">${money(totalInit)}</span></div>
        ${keepHtml}
        <div class="sum-list">
          ${rows
            .map((r) => {
              const pnl = pnlOf(r),
                k = keepOf(r),
                td = todayOf(r);
              const side =
                k > 0
                  ? `keeps ${money(k)}`
                  : r.target && !isNaN(r.equity) && r.equity < r.target
                    ? `${money(r.target - r.equity)} to pass`
                    : '';
              return `<div class="sum-row${r.id === S.master ? ' m' : ''}"><span class="tile${r.id === S.master ? ' m' : ''}">${esc(acctNum(r.label))}</span>
              <span class="sum-left"><span class="sum-name">${esc(r.label)}</span><span class="sum-k" title="${k > 0 ? `Keeps ${money(k)} after its ${Math.round(r.split * 100)}% split` : ''}">${esc(r.chip)}${side ? ' · ' + side : ''}</span></span>
              <span class="sum-right"><span class="sum-td ${isNaN(td) ? '' : td >= 0 ? 'pos' : 'neg'}" title="Today">${hasDay ? sp(td) : ''}</span>
                <span class="sum-tot"><span class="sum-eq">${money(r.equity)}</span> <span class="sum-pnl ${isNaN(pnl) ? '' : pnl >= 0 ? 'pos' : 'neg'}" title="Since start">${isNaN(pnl) ? '—' : sp(pnl)}</span></span></span></div>`;
            })
            .join('')}
        </div>
        ${notCounted.length ? `<div class="sum-note">Not counted in what you keep: ${notCounted.join('; ')}.</div>` : ''}
        ${funded.length ? claimHtml() : ''}
      </div>`;
    body.querySelector('[data-act="share"]').onclick = () => setView('share');
    wireClaim(body);
  }

  // A warning that something went wrong (not a routine notice): the footer offers Get help next to it.
  const PROBLEM_RE =
    /fail|refus|reject|couldn't|could not|didn't|not filled|not copied|error|lost|wrong|missing|garbled/i;
  function renderLog() {
    if (!_root) return;
    const el = _root.querySelector('.log');
    if (!el) return;
    // Followers in a trade without the master: name them and why, then Flatten / Keep (and help).
    const ol = S.orphan ? S.orphan.list : [];
    let orphanHtml = '';
    if (ol.length) {
      const names = [...new Set(ol.map((o) => accLabel(o.accountId)))];
      const syms = [...new Set(ol.map((o) => symLabel(o.symbol)))].join(', ');
      const why = ol[ol.length - 1].why;
      orphanHtml = `<div class="orphan"><div><b>${esc(names.length === 1 ? names[0] + ' is' : names.join(', ') + ' are')} still in ${esc(syms)}</b>, but the master isn't${why ? `: ${esc(why)}` : ''}.</div>
          <div class="obtns"><button class="obtn" id="vc-flatten">Flatten ${esc(names.length === 1 ? names[0] : names.length + ' followers')}</button><button class="obtn keep" id="vc-keep">Keep it</button><button class="lnk" data-act="help">Get help</button></div></div>`;
    }
    const toastHtml = _toast ? `<div class="toast">${esc(_toast)}</div>` : '';
    // copying, and Vest's own screen is on another of the user's accounts: orders placed on Vest's ticket there aren't copied
    const screenHtml =
      S.armed && S.master && S.screen && S.screen !== S.master && S.byId[S.screen]
        ? `<div class="toast" data-warn="screen">Vest is showing ${esc(accLabel(S.screen))}, not your master ${esc(accLabel(S.master))}: orders placed there aren't copied.</div>`
        : '';
    // The orphan prompt and notices sit above the log, so they show even while it's folded.
    const alerts = _root.querySelector('.alerts');
    const html = orphanHtml + screenHtml + toastHtml;
    if (alerts.dataset.html !== html) {
      alerts.innerHTML = alerts.dataset.html = html; // a redraw would eat a click
      const fb = alerts.querySelector('#vc-flatten'),
        kb = alerts.querySelector('#vc-keep'),
        hb = alerts.querySelector('[data-act="help"]');
      if (fb) fb.onclick = () => flattenOrphans();
      if (kb) kb.onclick = () => keepOrphans();
      if (hb) hb.onclick = () => openReport();
    }
    el.innerHTML = S.log
      .map(
        (e) =>
          `<div class="le ${e.level}"><span class="ts">${e.t.toLocaleTimeString([], { hour12: false })}</span><span>${esc(e.msg)}</span></div>`,
      )
      .join('');
    // folded, the footer is the latest line; a warning there offers help
    const last = _root.querySelector('.loglast'),
      e0 = S.log[0];
    const trouble = e0 && e0.level === 'warn' && PROBLEM_RE.test(e0.msg);
    const lastHtml = e0
      ? `<span class="ts">${e0.t.toLocaleTimeString([], { hour12: false })}</span><span class="lm">${esc(e0.msg)}</span>${
          trouble ? '<button class="lnk" data-act="loghelp">Get help</button>' : ''
        }`
      : '';
    if (last.dataset.html !== lastHtml) {
      last.innerHTML = last.dataset.html = lastHtml;
      const lh = last.querySelector('[data-act="loghelp"]');
      if (lh) lh.onclick = () => openReport();
    }
    last.className = 'loglast ' + (e0 ? e0.level : '');
  }

  async function refresh() {
    renderHealth();
    const body = _root.querySelector('.body');
    const show = (html) => {
      body.dataset.view = '';
      body.innerHTML = html;
    };
    try {
      await waitForUserToken();
    } catch {
      return show(
        `<div class="empty">Couldn't capture your Vest session.<br>Click around the site, then click Reload accounts (↻).</div>`,
      );
    }
    show(`<div class="empty">Loading accounts…</div>`);
    readScreen();
    try {
      await buildRegistry();
      dropClaimReview(); // it named the accounts as they were
      render();
      logEvent('info', `Loaded ${Object.keys(S.byId).length} active accounts.`);
      diag('accounts', {
        count: Object.keys(S.byId).length,
        list: Object.values(S.byId).map((r) => ({
          ...who(r.id),
          type: r.type,
          size: r.size,
          equity: r.equity,
          floor: r.floor,
          dailyFloor: r.dailyFloor,
          target: r.target,
          free: r.free,
          canTrade: r.canTrade,
        })),
      });
      startBalancePoll();
      refreshBalances(); // live equity now, rather than the series' last point
      if (!S.ack) {
        S.rulesOpen = true; // first use: the risk acknowledgement comes first
        S.tradeOpen = S.summaryOpen = S.settingsOpen = false;
        render();
      } else maybeOfferSupport();
    } catch (e) {
      show(`<div class="empty">Failed to load accounts: ${esc(e.message)}</div>`);
    }
  }

  // A copy of the script that passed through a tool using a legacy code page (e.g. Windows clip.exe) has every
  // non-ASCII character mangled: this one-character dash arrives as three ("ΓÇô"). Say so, and point at a clean install.
  const ENCODING_PROBE = '–';
  function checkEncoding() {
    if (ENCODING_PROBE.length === 1) return;
    logEvent(
      'warn',
      'This copy of STRATUH Copier was garbled when it was copied (symbols look wrong). Reinstall it from ' +
        SCRIPT_URL,
    );
    diag('encoding', { probeLength: ENCODING_PROBE.length });
  }

  // The userscript manager, for the diagnostics (Tampermonkey's GM_info, available even with @grant none). No secrets in it.
  function scriptManager() {
    try {
      // eslint-disable-next-line no-undef
      const g = typeof GM_info !== 'undefined' ? GM_info : null;
      if (!g) return null;
      return {
        name: g.scriptHandler || null,
        version: g.version || null,
        injectInto: g.injectInto || null,
        sandbox: g.sandboxMode || null,
        incognito: !!g.isIncognito,
        updateURL: (g.script && g.script.updateURL) || null,
        downloadURL: (g.script && g.script.downloadURL) || null,
      };
    } catch {
      return null;
    }
  }

  // ───────────────────────── boot ─────────────────────────
  const boot = () => {
    loadLog();
    loadDiag();
    loadAck();
    loadOpts();
    loadTrade();
    loadUpdate();
    initBuild();
    setInterval(autoSiteCheck, 1000); // Vest updated: the site check runs by itself
    loadAllSymbolRules();
    diag('session', {
      version: VERSION,
      build: fingerprint() || null,
      browser: navigator.userAgent,
      settings: {
        fast: S.fast,
        autoFlatten: S.autoFlatten,
        capFit: S.capFit,
        checkUpdates: S.checkUpdates,
        hideMarks: S.hideMarks,
      },
      termsAccepted: S.ack,
      openPlans: Object.keys(store.get('vc-plans', {}) || {}).length,
      start: BOOT_STATE,
      vestSizeUnit: vestSizeUnit(),
      manager: scriptManager(),
    });
    // The copier's own crashes (not Vest's): Tampermonkey runs it from a "userscript" source.
    const ours = (stack) => /userscript|vest-copier/i.test(String(stack || ''));
    window.addEventListener('error', (e) => {
      if (ours(e.filename) || ours(e.error && e.error.stack))
        diag('script_error', {
          message: e.message,
          at: `${e.lineno}:${e.colno}`,
          stack: String((e.error && e.error.stack) || '').slice(0, 800),
        });
    });
    window.addEventListener('unhandledrejection', (e) => {
      const r = e.reason;
      if (ours(r && r.stack))
        diag('script_error', {
          message: String((r && r.message) || r),
          stack: String(r.stack).slice(0, 800),
          unhandled: true,
        });
    });
    loadDock();
    applyTheme();
    _root = buildPanel();
    setOpen(S.dock.open || !S.ack); // a first run opens fully, for the risk terms
    loadPlans();
    renderHealth();
    renderLog();
    refresh();
    checkForUpdate();
    checkEncoding();
    checkWasArmed();
    watchPurchaseWindow();
    LOG(`v${VERSION} loaded.`);
  };
  if (document.readyState === 'loading') window.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
