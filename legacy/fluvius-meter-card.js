/*
 * Fluvius Meter Card – custom Lovelace card for the Belgian digital meter
 * ---------------------------------------------------------------------
 * Install:
 *   1. Copy this file to  /config/www/fluvius-meter-card.js
 *   2. Settings → Dashboards → ⋮ → Resources → Add resource
 *        URL:  /local/fluvius-meter-card.js     Type: JavaScript module
 *   3. Hard-refresh the browser, then add the card via "Add card → Fluvius Meter Card".
 *      Everything (entities, fuse, language, …) is configurable in the visual editor.
 *
 * Follows the active Home Assistant theme, incl. the energy colours
 * (--energy-grid-consumption-color = blue, --energy-grid-return-color = purple).
 */

const DEFAULT_ENTITIES = {
  power_consumption: "sensor.electricity_meter_power_consumption",
  power_production: "sensor.electricity_meter_power_production",
  active_tariff: "sensor.electricity_meter_active_tariff",
  current_average_demand: "sensor.electricity_meter_current_average_demand",
  maximum_demand: "sensor.electricity_meter_maximum_demand_current_month",
  peak_average: "",
  peak_today: "",
  consumption_day: "sensor.electricity_meter_energy_consumption_tariff_1",
  consumption_night: "sensor.electricity_meter_energy_consumption_tariff_2",
  production_day: "sensor.electricity_meter_energy_production_tariff_1",
  production_night: "sensor.electricity_meter_energy_production_tariff_2",
  gas: "sensor.gas_meter_gas_consumption",
  water: "",
  voltage_l1: "sensor.electricity_meter_voltage_phase_l1",
  voltage_l2: "sensor.electricity_meter_voltage_phase_l2",
  voltage_l3: "sensor.electricity_meter_voltage_phase_l3",
  current_l1: "sensor.electricity_meter_current_phase_l1",
  current_l2: "sensor.electricity_meter_current_phase_l2",
  current_l3: "sensor.electricity_meter_current_phase_l3",
  power_l1: "sensor.electricity_meter_power_consumption_phase_l1",
  power_l2: "sensor.electricity_meter_power_consumption_phase_l2",
  power_l3: "sensor.electricity_meter_power_consumption_phase_l3",
  power_prod_l1: "sensor.electricity_meter_power_production_phase_l1",
  power_prod_l2: "sensor.electricity_meter_power_production_phase_l2",
  power_prod_l3: "sensor.electricity_meter_power_production_phase_l3",
};

const DEFAULT_OPTIONS = {
  title: "", language: "nl", fuse_amps: 25, amp_warn: 0.8,
  max_power: 10, capacity_min: 2.5, history_hours: 2,
};

const I18N = {
  nl: {
    locale: "nl-BE", title: "Digitale meter", day_tariff: "Dagtarief", night_tariff: "Nachttarief",
    importing: "Afname van het net", exporting: "Injectie op het net", idle: "In balans met het net",
    capacity: "Capaciteitstarief", quarter: "Kwartier nu", peak: "Maandpiek", avg13: "Gem. 13 maanden",
    new_peak: "Je zet een nieuwe maandpiek!", margin: "Nog {x} kW marge tot je piek",
    min_billed: "Gefactureerd aan minimum {x} kW", today: "Vandaag",
    forecast: "Verwacht einde kwartier", peak_today: "Piek vandaag", q_time: "{m} / 15′",
    fc_over: "Verwacht nieuwe piek – blijf onder {x} kW tot het einde van dit kwartier",
    fc_room: "Nog tot {x} kW mogelijk de rest van dit kwartier", fc_min: "Onder minimum {x} kW – geen impact",
    last2h: "{h} u", last: "Laatste {h} u",
    day: "Dag", night: "Nacht", gas: "Gas", water: "Water", grid: "Net", fuse: "zekering {x} A",
    totals: "Meterstanden", cons: "Afname", prod: "Injectie",
  },
  en: {
    locale: "en-GB", title: "Digital meter", day_tariff: "Day tariff", night_tariff: "Night tariff",
    importing: "Importing from grid", exporting: "Exporting to grid", idle: "Balanced with grid",
    capacity: "Capacity tariff", quarter: "This quarter", peak: "Month peak", avg13: "13-month avg",
    new_peak: "You're setting a new monthly peak!", margin: "{x} kW headroom to your peak",
    min_billed: "Billed at minimum {x} kW", today: "Today",
    forecast: "Forecast end of quarter", peak_today: "Peak today", q_time: "{m} / 15′",
    fc_over: "New peak expected – stay below {x} kW for the rest of this quarter",
    fc_room: "Up to {x} kW possible for the rest of this quarter", fc_min: "Below minimum {x} kW – no impact",
    last2h: "{h} h", last: "Last {h} h",
    day: "Day", night: "Night", gas: "Gas", water: "Water", grid: "Grid", fuse: "fuse {x} A",
    totals: "Meter readings", cons: "Import", prod: "Export",
  },
};

const ICONS = {
  tower: '<path d="M12 2 7 22M12 2l5 20M6 8h12M7.5 14h9M9 8l6 6M15 8l-6 6"/>',
  home: '<path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20.5 13.5A8.5 8.5 0 1 1 10.5 3.5a6.5 6.5 0 0 0 10 10z"/>',
  flame: '<path d="M12 22c4 0 7-3 7-7 0-4.5-3.5-6.5-4.5-10-1 2-2 3-3 3 0-2-1-4-3-6 0 4.5-3.5 6.5-3.5 13 0 4 3 7 7 7z"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  down: '<path d="M12 5v14M6 13l6 6 6-6"/>',
  up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
};
const icon = (n, cls = "") =>
  `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[n]}</svg>`;

/* ═══════════════════════════════ CARD ═══════════════════════════════ */

class FluviusMeterCard extends HTMLElement {
  static getConfigElement() { return document.createElement("fluvius-meter-card-editor"); }
  static getStubConfig() { return {}; }

  setConfig(config) {
    if (!config) throw new Error("Invalid configuration");
    this._config = {
      ...DEFAULT_OPTIONS, ...config,
      entities: { ...DEFAULT_ENTITIES, ...(config.entities || {}) },
    };
    this._t = I18N[this._config.language] || I18N.nl;
    this._built = false;
    this._hist = { c: [], p: [] };
    this._today = {};
    this._statsAt = 0;
    this._histLoaded = false;
    if (this._hass) this.hass = this._hass;
  }

  set hass(hass) {
    this._hass = hass;
    if (!this._config) return;
    if (!this._built) this._build();
    this._update();
    if (!this._histLoaded) { this._histLoaded = true; this._fetchHistory(); }
    if (Date.now() - this._statsAt > 5 * 60e3) { this._statsAt = Date.now(); this._fetchStats(); }
  }

  connectedCallback() {
    this._tick = setInterval(() => { if (this._built && this._hass) this._update(); }, 5000);
  }
  disconnectedCallback() { clearInterval(this._tick); }

  getCardSize() { return 11; }
  getGridOptions() { return { columns: 12, min_columns: 6, rows: "auto" }; }

  /* ── helpers ─────────────────────────────────────────── */
  _e(key) { return this._config.entities[key]; }
  _has(key) { return !!(this._hass && this._e(key) && this._hass.states[this._e(key)]); }
  _num(key) {
    if (!this._has(key)) return null;
    const v = parseFloat(this._hass.states[this._e(key)].state);
    return isNaN(v) ? null : v;
  }
  _unit(key) { return this._has(key) ? this._hass.states[this._e(key)].attributes.unit_of_measurement : null; }
  _kw(key) {
    const v = this._num(key);
    return v == null ? null : this._unit(key) === "W" ? v / 1000 : v;
  }
  _fmt(v, d = 2) {
    if (v == null || isNaN(v)) return "—";
    return v.toLocaleString(this._t.locale, { minimumFractionDigits: d, maximumFractionDigits: d });
  }
  _$(id) { return this.shadowRoot.getElementById(id); }
  _show(id, on) { const el = this._$(id); if (el) el.style.display = on ? "" : "none"; }
  _more(key) {
    if (!this._has(key)) return;
    const ev = new Event("hass-more-info", { bubbles: true, composed: true });
    ev.detail = { entityId: this._e(key) };
    this.dispatchEvent(ev);
  }

  /* ── DOM ─────────────────────────────────────────────── */
  _build() {
    if (!this.shadowRoot) this.attachShadow({ mode: "open" });
    const t = this._t, cfg = this._config;
    const valueTile = (k, ic) => `
      <div class="tile" id="tile-${k}">
        <div class="tile-h">${icon(ic, "c-" + k)}<span>${t[k]}</span></div>
        <div class="tv-row"><div class="tv" data-k="${k}"><b><span id="td-${k}">—</span><i id="u-${k}">m³</i></b></div></div>
        <div class="mini" data-k="${k}">
          <svg viewBox="0 0 120 28" preserveAspectRatio="none" id="mini-${k}"></svg>
          <div class="mini-meta"><span>${t.last2h.replace("{h}", cfg.history_hours)}</span><span id="mini-sum-${k}"></span></div>
        </div>
      </div>`;
    const tariffTile = (p, ic) => `
      <div class="tile">
        <div class="tile-h">${icon(ic, "c-" + p)}<span>${t[p]}</span></div>
        <div class="tv-row">
          <div class="tv" data-k="consumption_${p}"><b class="imp"><span id="td-c-${p}">—</span><i>kWh</i></b><small>${icon("down")}${t.cons}</small></div>
          <div class="tv" data-k="production_${p}" id="tv-p-${p}"><b class="exp"><span id="td-p-${p}">—</span><i>kWh</i></b><small>${icon("up")}${t.prod}</small></div>
        </div>
      </div>`;

    this.shadowRoot.innerHTML = `
      <style>${STYLES}</style>
      <ha-card id="card">
        <div class="head">
          <div class="title">${cfg.title || t.title}</div>
          <div class="pill" id="tariff" data-k="active_tariff"></div>
        </div>

        <div class="hero">
          <div class="big" id="hero-num"><span id="net">—</span><span class="unit">kW</span></div>
          <div class="sub" id="dir"></div>
          <div class="chips">
            <span class="chip imp" data-k="power_consumption" id="chip-c">${icon("down")}<span>${t.cons}</span><b id="pc">—</b></span>
            <span class="chip exp" data-k="power_production" id="chip-p">${icon("up")}<span>${t.prod}</span><b id="pp">—</b></span>
          </div>
        </div>

        <div class="flow">
          ${icon("tower")}
          <svg class="line" viewBox="0 0 100 10" preserveAspectRatio="none"><line id="flowline" x1="2" y1="5" x2="98" y2="5"/></svg>
          ${icon("home")}
        </div>

        <div class="spark-wrap" data-k="power_consumption">
          <svg class="spark" viewBox="0 0 300 64" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--fm-import)" stop-opacity=".35"/><stop offset="1" stop-color="var(--fm-import)" stop-opacity="0"/></linearGradient>
              <linearGradient id="gp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--fm-export)" stop-opacity=".35"/><stop offset="1" stop-color="var(--fm-export)" stop-opacity="0"/></linearGradient>
            </defs>
            <path id="sp-ca" fill="url(#gc)"/><path id="sp-cl" class="l imp"/>
            <path id="sp-pa" fill="url(#gp)"/><path id="sp-pl" class="l exp"/>
          </svg>
          <div class="spark-meta"><span>${t.last.replace("{h}", cfg.history_hours)}</span><span id="sp-max"></span></div>
        </div>

        <div class="cap" id="cap">
          <div class="ring-col" data-k="current_average_demand">
            <div class="ring">
              <svg viewBox="0 0 80 80">
                <circle class="qtrack" cx="40" cy="40" r="38"/>
                <circle id="ring-q" class="qbar" cx="40" cy="40" r="38"/>
                <circle class="track" cx="40" cy="40" r="30"/>
                <circle id="ring-fc" class="bar fc" cx="40" cy="40" r="30"/>
                <circle id="ring" class="bar" cx="40" cy="40" r="30"/>
              </svg>
              <div class="ring-txt"><b id="cap-pct">—</b><small>%</small></div>
            </div>
            <div class="ring-q" id="cap-q"></div>
          </div>
          <div class="cap-info">
            <div class="label">${t.capacity}</div>
            <div class="cap-row" data-k="current_average_demand"><span>${t.quarter}</span><b id="cap-now">—</b></div>
            <div class="cap-row fc-row" data-k="power_consumption"><span>${t.forecast}</span><b id="cap-fc">—</b></div>
            <div class="cap-row" id="cap-today-row"><span>${t.peak_today}</span><b id="cap-today">—</b></div>
            <div class="cap-row" data-k="maximum_demand"><span>${t.peak}</span><b id="cap-peak">—</b></div>
            <div class="cap-row" data-k="peak_average" id="cap-avg-row"><span>${t.avg13}</span><b id="cap-avg">—</b></div>
            <div class="hint" id="cap-hint"></div>
          </div>
        </div>

        <div class="label">${t.today}</div>
        <div class="tiles">
          ${tariffTile("day", "sun")}
          ${tariffTile("night", "moon")}
          ${valueTile("gas", "flame")}
          ${valueTile("water", "drop")}
        </div>

        <div id="phases-wrap">
          <div class="label">${t.grid} · ${t.fuse.replace("{x}", cfg.fuse_amps)}</div>
          <div class="phases" id="phases"></div>
        </div>

        <div class="label">${t.totals}</div>
        <div class="totals">
          <div data-k="consumption_day"><span>${t.cons} 1.8.1</span><b id="tot-consumption_day">—</b></div>
          <div data-k="consumption_night"><span>${t.cons} 1.8.2</span><b id="tot-consumption_night">—</b></div>
          <div data-k="production_day" id="tot-production_day-w"><span>${t.prod} 2.8.1</span><b id="tot-production_day">—</b></div>
          <div data-k="production_night" id="tot-production_night-w"><span>${t.prod} 2.8.2</span><b id="tot-production_night">—</b></div>
          <div data-k="gas" id="tot-gas-w"><span>${t.gas}</span><b id="tot-gas">—</b></div>
          <div data-k="water" id="tot-water-w"><span>${t.water}</span><b id="tot-water">—</b></div>
        </div>
      </ha-card>`;

    // One delegated listener: the innermost element with data-k opens its more-info dialog
    this.shadowRoot.addEventListener("click", (ev) => {
      const el = ev.composedPath().find((n) => n.dataset && n.dataset.k);
      if (el) { ev.stopPropagation(); this._more(el.dataset.k); }
    });
    this._built = true;
  }

  /* ── live update ─────────────────────────────────────── */
  _update() {
    const t = this._t, cfg = this._config;
    const card = this._$("card");

    // Tariff (Belgium: 1 = day, 2 = night)
    const tr = this._has("active_tariff") ? parseInt(this._hass.states[this._e("active_tariff")].state, 10) : null;
    const pill = this._$("tariff");
    pill.style.display = tr ? "" : "none";
    pill.className = "pill " + (tr === 2 ? "night" : "day");
    const pillHtml = tr === 2 ? `${icon("moon")}${t.night_tariff}` : `${icon("sun")}${t.day_tariff}`;
    if (pill._h !== pillHtml) { pill.innerHTML = pillHtml; pill._h = pillHtml; }

    // Net power + flow
    const c = this._kw("power_consumption") || 0;
    const p = this._kw("power_production") || 0;
    const net = c - p;
    const mode = Math.abs(net) < 0.01 ? "idle" : net > 0 ? "import" : "export";
    card.classList.remove("import", "export", "idle");
    card.classList.add(mode);
    this._$("net").textContent = this._fmt(Math.abs(net), 2);
    this._$("hero-num").dataset.k = mode === "export" ? "power_production" : "power_consumption";
    this._$("dir").textContent = t[mode === "import" ? "importing" : mode === "export" ? "exporting" : "idle"];
    this._$("pc").textContent = `${this._fmt(c, 2)} kW`;
    this._$("pp").textContent = `${this._fmt(p, 2)} kW`;
    this._show("chip-p", this._has("power_production"));
    const speed = Math.max(0.35, 2.4 - (Math.abs(net) / cfg.max_power) * 2.2);
    this._$("flowline").style.animationDuration = speed + "s";

    // Sparkline buffer
    const now = Date.now();
    if (this._lastC !== c || this._lastP !== p) {
      this._hist.c.push([now, c]); this._hist.p.push([now, p]);
      this._lastC = c; this._lastP = p;
    }
    this._drawSpark();

    // Capacity tariff
    const cur = this._kw("current_average_demand");
    const peak = this._kw("maximum_demand");
    const ref = Math.max(peak || 0, cfg.capacity_min);
    // Quarter-hour forecast: the meter value is energy-so-far / 15 min, so the
    // end value = current value + (recent import power × remaining fraction).
    const q = 15 * 60e3;
    const elapsed = (now % q) / q;                       // quarters are aligned to :00/:15/:30/:45
    const remaining = 1 - elapsed;
    const pRecent = this._recentAvg(this._hist.c, 60e3, c); // 60 s time-weighted import power
    const fc = cur != null ? cur + pRecent * remaining : null;
    const pct = cur != null ? cur / ref : 0;
    const pctFc = fc != null ? fc / ref : 0;
    const C = 2 * Math.PI * 30, Cq = 2 * Math.PI * 38;
    this._$("ring").style.strokeDasharray = `${Math.min(pct, 1) * C} ${C}`;
    this._$("ring-fc").style.strokeDasharray = `${Math.min(pctFc, 1) * C} ${C}`;
    this._$("ring-q").style.strokeDasharray = `${elapsed * Cq} ${Cq}`;
    const mm = Math.floor(elapsed * 15), ss = Math.floor((elapsed * 15 - mm) * 60);
    this._$("cap-q").textContent = t.q_time.replace("{m}", `${mm}:${String(ss).padStart(2, "0")}`);
    const cap = this._$("cap");
    cap.classList.remove("ok", "warn", "over");
    cap.classList.add(pctFc >= 1 ? "over" : pctFc >= 0.8 ? "warn" : "ok");
    this._$("cap-pct").textContent = fc != null ? Math.round(pctFc * 100) : "—";
    this._$("cap-now").textContent = `${this._fmt(cur, 2)} kW`;
    this._$("cap-fc").textContent = `${this._fmt(fc, 2)} kW`;

    // Peak today (own sensor if configured, otherwise derived from statistics + live value)
    const dayKey = new Date().toDateString();
    if (this._peakDay !== dayKey) { this._peakDay = dayKey; this._peakToday = null; }
    if (cur != null) this._peakToday = Math.max(this._peakToday || 0, cur);
    const pToday = this._has("peak_today") ? this._kw("peak_today") : this._peakToday;
    const todayRow = this._$("cap-today-row");
    todayRow.dataset.k = this._has("peak_today") ? "peak_today" : "current_average_demand";
    this._$("cap-today").textContent = `${this._fmt(pToday, 2)} kW`;
    this._$("cap-peak").textContent = `${this._fmt(peak, 2)} kW`;
    this._$("cap-avg").textContent = `${this._fmt(this._kw("peak_average"), 2)} kW`;
    this._show("cap-avg-row", this._has("peak_average"));
    let hint = "";
    if (cur != null) {
      // max. average import power for the rest of the quarter to end exactly at the reference peak
      const allowed = remaining > 0.01 ? Math.max(0, (ref - cur) / remaining) : 0;
      if (pct >= 1 && cur > cfg.capacity_min) hint = t.new_peak;
      else if (pctFc >= 1) hint = t.fc_over.replace("{x}", this._fmt(allowed, 2));
      else if (fc < cfg.capacity_min && (peak || 0) < cfg.capacity_min) hint = t.fc_min.replace("{x}", this._fmt(cfg.capacity_min, 1));
      else hint = t.fc_room.replace("{x}", this._fmt(allowed, 2));
    }
    this._$("cap-hint").textContent = hint;
    this._show("cap", this._has("current_average_demand") || this._has("maximum_demand"));

    // Today – day / night tiles with import + export
    const td = this._today;
    for (const per of ["day", "night"]) {
      this._$(`td-c-${per}`).textContent = this._fmt(td[`consumption_${per}`], 1);
      this._$(`td-p-${per}`).textContent = this._fmt(td[`production_${per}`], 1);
      this._show(`tv-p-${per}`, this._has(`production_${per}`));
    }
    // Gas / water (optional)
    const hasGas = this._has("gas"), hasWater = this._has("water");
    for (const k of ["gas", "water"]) {
      const u = this._unit(k) || "m³";
      const dec = u === "L" ? 0 : 2;
      this._$(`td-${k}`).textContent = this._fmt(td[k], dec);
      this._$(`u-${k}`).textContent = u;
      this._$(`tot-${k}`).textContent = `${this._fmt(this._num(k), dec)} ${u}`;
      this._show(`tile-${k}`, this._has(k));
      this._drawMini(k, dec);
      this._show(`tot-${k}-w`, this._has(k));
    }
    this._$("tile-gas").style.gridColumn = hasGas && !hasWater ? "span 2" : "";
    this._$("tile-water").style.gridColumn = hasWater && !hasGas ? "span 2" : "";
    this._$("tot-gas-w").style.gridColumn = hasGas && !hasWater ? "span 2" : "";
    this._$("tot-water-w").style.gridColumn = hasWater && !hasGas ? "span 2" : "";

    // Phases: voltage marker + current bar (vs. fuse) + kW
    const phases = [1, 2, 3].filter((n) => this._has(`voltage_l${n}`) || this._has(`current_l${n}`));
    const ph = this._$("phases");
    const key = phases.join(",") + "|" + cfg.amp_warn;
    if (ph._key !== key) {
      ph._key = key;
      const w = cfg.amp_warn * 100;
      const grad = `linear-gradient(90deg, var(--fm-ok) 0%, var(--fm-ok) ${Math.max(0, w - 25)}%, var(--fm-warn) ${w}%, var(--fm-bad) ${Math.min(100, w + 15)}%, var(--fm-bad) 100%)`;
      ph.innerHTML = phases.map((n) => `
        <div class="ph">
          <span class="ph-n">L${n}</span>
          <div class="ph-bar v" data-k="voltage_l${n}"><i id="pv${n}"></i></div>
          <b class="ph-val" id="vv${n}" data-k="voltage_l${n}">—</b><span></span>
          <span></span>
          <div class="ph-bar a" data-k="current_l${n}"><div class="fill" id="pa${n}" style="background:${grad}"></div></div>
          <b class="ph-val" id="av${n}" data-k="current_l${n}">—</b><span class="ph-kw" id="kw${n}">—</span>
        </div>`).join("");
    }
    for (const n of phases) {
      const v = this._num(`voltage_l${n}`);
      const a = this._num(`current_l${n}`);
      const mk = this._$(`pv${n}`);
      mk.style.left = v == null ? "50%" : Math.min(100, Math.max(0, ((v - 207) / 46) * 100)) + "%";
      mk.classList.toggle("bad", v != null && (v < 212 || v > 248));
      this._$(`vv${n}`).textContent = `${this._fmt(v, 0)} V`;
      const pctA = a == null ? 0 : Math.min(1, a / cfg.fuse_amps);
      this._$(`pa${n}`).style.clipPath = `inset(0 ${100 - pctA * 100}% 0 0 round 4px)`;
      const av = this._$(`av${n}`);
      av.textContent = `${this._fmt(a, 1)} A`;
      av.className = "ph-val " + (pctA >= 0.95 ? "over" : pctA >= cfg.amp_warn ? "warn" : "");
      let kw = null, kwKey = `current_l${n}`;
      if (this._has(`power_l${n}`)) {
        const pc = this._kw(`power_l${n}`) || 0, pp = this._kw(`power_prod_l${n}`) || 0;
        kw = pc - pp;
        kwKey = pp > pc && this._has(`power_prod_l${n}`) ? `power_prod_l${n}` : `power_l${n}`;
      } else if (v != null && a != null) kw = (v * a) / 1000;
      const kwEl = this._$(`kw${n}`);
      kwEl.textContent = `${this._fmt(kw, 2)} kW`;
      kwEl.dataset.k = kwKey;
      kwEl.classList.toggle("exp", kw != null && kw < 0);
      kwEl.classList.toggle("imp", kw != null && kw > 0);
    }
    this._show("phases-wrap", phases.length);

    // Totals
    for (const k of ["consumption_day", "consumption_night", "production_day", "production_night"]) {
      this._$(`tot-${k}`).textContent = `${this._fmt(this._num(k), 1)} kWh`;
    }
    this._show("tot-production_day-w", this._has("production_day"));
    this._show("tot-production_night-w", this._has("production_night"));
  }

  /* time-weighted average of a step series over the last `win` ms */
  _recentAvg(pts, win, fallback) {
    const now = Date.now(), from = now - win;
    let sum = 0, t = null, v = null;
    for (const [ts, val] of pts) {
      if (ts <= from) { v = val; t = from; continue; }
      if (v != null) sum += v * (ts - t);
      t = ts; v = val;
    }
    if (v == null) return fallback || 0;
    sum += v * (now - t);
    const start = pts[0][0] > from ? pts[0][0] : from;
    return now - start > 0 ? sum / (now - start) : v;
  }

  _drawMini(k, dec) {
    const svg = this._$(`mini-${k}`);
    const bars = this._mini && this._mini[k];
    if (!bars || !bars.length) { svg.innerHTML = ""; this._$(`mini-sum-${k}`).textContent = ""; return; }
    const key = bars.join(",");
    if (svg._key === key) return;
    svg._key = key;
    const n = bars.length, W = 120, H = 28, gap = 1.2;
    const bw = W / n - gap;
    const max = Math.max(...bars) || 1;
    svg.innerHTML = bars.map((v, i) => {
      const h = v > 0 ? Math.max(2, (v / max) * (H - 1)) : 1;
      return `<rect x="${(i * W) / n + gap / 2}" y="${H - h}" width="${bw}" height="${h}" rx="1" class="${v > 0 ? "on" : "off"}"/>`;
    }).join("");
    const total = bars.reduce((a, b) => a + b, 0);
    this._$(`mini-sum-${k}`).textContent = `${this._fmt(total, dec)} ${this._unit(k) || "m³"}`;
  }

  _drawSpark() {
    const W = 300, H = 64, pad = 3;
    const now = Date.now();
    const t0 = now - this._config.history_hours * 3600e3;
    for (const k of ["c", "p"]) this._hist[k] = this._hist[k].filter(([ts]) => ts >= t0 - 60e3);
    const all = [...this._hist.c, ...this._hist.p].map((x) => x[1]);
    const max = Math.max(0.5, ...all) * 1.1;
    const x = (ts) => Math.max(0, ((ts - t0) / (now - t0)) * W);
    const y = (v) => H - pad - (v / max) * (H - pad * 2);
    const build = (pts) => {
      if (!pts.length) return ["", ""];
      let d = `M${x(pts[0][0])},${y(pts[0][1])}`;
      for (let i = 1; i < pts.length; i++) d += `H${x(pts[i][0])}V${y(pts[i][1])}`;
      d += `H${W}`;
      return [d, `${d}V${H}H${x(pts[0][0])}Z`];
    };
    const [cl, ca] = build(this._hist.c);
    const [pl, pa] = build(this._hist.p);
    this._$("sp-cl").setAttribute("d", cl); this._$("sp-ca").setAttribute("d", ca);
    this._$("sp-pl").setAttribute("d", pl); this._$("sp-pa").setAttribute("d", pa);
    this._$("sp-max").textContent = `max ${this._fmt(Math.max(0, ...this._hist.c.map((v) => v[1])), 2)} kW`;
  }

  /* ── data fetching ───────────────────────────────────── */
  async _fetchHistory() {
    const keys = { c: "power_consumption", p: "power_production" };
    const ids = Object.values(keys).filter((k) => this._has(k)).map((k) => this._e(k));
    if (!ids.length) return;
    try {
      const res = await this._hass.callWS({
        type: "history/history_during_period",
        start_time: new Date(Date.now() - this._config.history_hours * 3600e3).toISOString(),
        entity_ids: ids, minimal_response: true, no_attributes: true, significant_changes_only: false,
      });
      for (const [k, key] of Object.entries(keys)) {
        const id = this._e(key);
        if (!res || !res[id]) continue;
        const f = this._unit(key) === "W" ? 1 / 1000 : 1;
        const pts = res[id]
          .map((s) => [s.lu ? s.lu * 1000 : Date.parse(s.last_updated || s.last_changed), parseFloat(s.s ?? s.state) * f])
          .filter(([ts, v]) => !isNaN(ts) && !isNaN(v));
        this._hist[k] = [...pts, ...this._hist[k]].sort((a, b) => a[0] - b[0]);
      }
      this._drawSpark();
    } catch (e) { console.warn("fluvius-meter-card: history unavailable", e); }
  }

  async _fetchStats() {
    const keys = ["consumption_day", "consumption_night", "production_day", "production_night", "gas", "water"];
    await Promise.all(keys.filter((k) => this._has(k)).map(async (k) => {
      try {
        const r = await this._hass.callWS({
          type: "recorder/statistic_during_period",
          statistic_id: this._e(k), calendar: { period: "day" }, types: ["change"],
        });
        this._today[k] = r && r.change != null ? r.change : null;
      } catch (e) { this._today[k] = null; }
    }));
    await Promise.all([this._fetchPeakToday(), this._fetchMini()]);
    if (this._built) this._update();
  }

  async _fetchPeakToday() {
    if (this._has("peak_today") || !this._has("current_average_demand")) return;
    const id = this._e("current_average_demand");
    const mid = new Date(); mid.setHours(0, 0, 0, 0);
    const f = this._unit("current_average_demand") === "W" ? 1 / 1000 : 1;
    try {
      const r = await this._hass.callWS({
        type: "recorder/statistics_during_period", start_time: mid.toISOString(),
        statistic_ids: [id], period: "5minute", types: ["max"],
      });
      const rows = (r && r[id]) || [];
      const m = Math.max(0, ...rows.map((x) => x.max).filter((v) => v != null)) * f;
      if (rows.length) this._peakToday = Math.max(this._peakToday || 0, m);
    } catch (e) { /* no statistics – live tracking only */ }
  }

  async _fetchMini() {
    const keys = ["gas", "water"].filter((k) => this._has(k));
    if (!keys.length) return;
    const step = 5 * 60e3;
    const end = Math.floor(Date.now() / step) * step;
    const start = end - this._config.history_hours * 3600e3;
    const n = Math.round((end - start) / step);
    this._mini = this._mini || {};
    try {
      const ids = keys.map((k) => this._e(k));
      const r = await this._hass.callWS({
        type: "recorder/statistics_during_period", start_time: new Date(start).toISOString(),
        statistic_ids: ids, period: "5minute", types: ["change"],
      });
      for (const k of keys) {
        const bars = new Array(n).fill(0);
        for (const row of (r && r[this._e(k)]) || []) {
          const ts = typeof row.start === "number" ? row.start : Date.parse(row.start);
          const i = Math.floor((ts - start) / step);
          if (i >= 0 && i < n && row.change > 0) bars[i] += row.change;
        }
        this._mini[k] = bars;
      }
    } catch (e) { console.warn("fluvius-meter-card: statistics unavailable", e); }
  }
}

/* ═══════════════════════════════ STYLES ═════════════════════════════ */
/* Everything maps onto Home Assistant theme variables, with sane fallbacks. */

const STYLES = `
  :host {
    --fm-import: var(--energy-grid-consumption-color, #488fc2);
    --fm-export: var(--energy-grid-return-color, #8353d1);
    --fm-gas:    var(--energy-gas-color, #8e021b);
    --fm-water:  var(--energy-water-color, #00bcd4);
    --fm-ok:     var(--success-color, #43a047);
    --fm-warn:   var(--warning-color, #ffa600);
    --fm-bad:    var(--error-color, #db4437);
    --fm-day:    var(--fluvius-day-color, var(--warning-color, #ffa600));
    --fm-night:  var(--fluvius-night-color, var(--state-icon-color, #44739e));
    --fm-text:   var(--primary-text-color, #212121);
    --fm-muted:  var(--secondary-text-color, #727272);
    --fm-line:   var(--divider-color, rgba(127,127,127,.2));
    --fm-soft:   color-mix(in srgb, var(--fm-text) 5%, transparent);
    --fm-hover:  color-mix(in srgb, var(--fm-text) 9%, transparent);
    --fm-radius: var(--ha-card-border-radius, 12px);
  }
  ha-card { display:block; padding:16px; color:var(--fm-text); }
  /* only used outside Home Assistant (preview), real ha-card styles itself from the theme */
  ha-card:not(:defined) {
    background:var(--ha-card-background, var(--card-background-color, #fff));
    border-radius:var(--fm-radius); border:var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--fm-line));
    box-shadow:var(--ha-card-box-shadow, none);
  }
  b { font-weight:500; font-variant-numeric:tabular-nums; }
  [data-k] { cursor:pointer; border-radius:8px; transition:background .15s; }
  .ico { width:16px; height:16px; flex:none; }
  .imp { color:var(--fm-import); } .exp { color:var(--fm-export); }

  .head { display:flex; justify-content:space-between; align-items:center; gap:8px; }
  .title { font-size:var(--ha-card-header-font-size, 16px); font-weight:500; }
  .pill { font-size:12px; font-weight:500; padding:4px 10px 4px 8px; border-radius:999px; display:flex; gap:5px; align-items:center; }
  .pill .ico { width:14px; height:14px; }
  .pill.day { background:color-mix(in srgb,var(--fm-day) 16%,transparent); color:var(--fm-day); }
  .pill.night { background:color-mix(in srgb,var(--fm-night) 16%,transparent); color:var(--fm-night); }

  .hero { margin-top:14px; }
  .big { display:inline-block; font-size:44px; font-weight:500; line-height:1; letter-spacing:-1px; font-variant-numeric:tabular-nums; padding:2px 4px; margin-left:-4px; }
  .big .unit { font-size:18px; letter-spacing:0; color:var(--fm-muted); margin-left:6px; }
  .import #net { color:var(--fm-import); } .export #net { color:var(--fm-export); }
  .sub { font-size:13px; color:var(--fm-muted); margin-top:4px; }
  .chips { display:flex; gap:6px; margin-top:10px; flex-wrap:wrap; }
  .chip { display:inline-flex; align-items:center; gap:5px; font-size:12px; padding:5px 10px 5px 7px; border-radius:999px;
    background:color-mix(in srgb,currentColor 12%,transparent); }
  .chip span { color:var(--fm-muted); } .chip b { color:var(--fm-text); }
  .chip .ico { width:14px; height:14px; }

  .flow { display:flex; align-items:center; gap:10px; margin:14px 0 6px; color:var(--fm-muted); }
  .flow .ico { width:22px; height:22px; }
  .flow svg.line { flex:1; height:10px; overflow:visible; }
  #flowline { stroke:var(--fm-line); stroke-width:3; stroke-linecap:round; stroke-dasharray:1 7;
    animation:flow 1.5s linear infinite; vector-effect:non-scaling-stroke; }
  .import #flowline { stroke:var(--fm-import); }
  .export #flowline { stroke:var(--fm-export); animation-direction:reverse; }
  .idle #flowline { animation:none; }
  @keyframes flow { to { stroke-dashoffset:-16; } }

  .spark-wrap { margin:6px 0 4px; padding:4px; margin-inline:-4px; }
  .spark { width:100%; height:64px; display:block; }
  .spark .l { fill:none; stroke-width:1.6; vector-effect:non-scaling-stroke; stroke-linejoin:round; }
  .spark .imp { stroke:var(--fm-import); } .spark .exp { stroke:var(--fm-export); }
  .spark-meta { display:flex; justify-content:space-between; font-size:11px; color:var(--fm-muted); margin-top:4px; }

  .label { font-size:11px; font-weight:500; text-transform:uppercase; letter-spacing:.8px; color:var(--fm-muted); margin:18px 0 8px; }

  .cap { display:flex; gap:14px; align-items:center; margin-top:14px; padding:12px; border-radius:var(--fm-radius); background:var(--fm-soft); }
  .cap .label { margin:0 0 4px; }
  .ring-col { display:flex; flex-direction:column; align-items:center; gap:4px; flex:none; padding:4px; }
  .ring { position:relative; width:84px; height:84px; }
  .ring svg { width:100%; height:100%; transform:rotate(-90deg); }
  .ring circle { fill:none; stroke-width:7; }
  .ring .track { stroke:var(--fm-line); }
  .ring .bar { stroke-linecap:round; transition:stroke-dasharray .6s ease, stroke .4s; }
  .ring .bar.fc { opacity:.3; }
  .ring .qtrack { fill:none; stroke:var(--fm-line); stroke-width:2.5; }
  .ring .qbar { fill:none; stroke:var(--fm-muted); stroke-width:2.5; stroke-linecap:round; transition:stroke-dasharray 1s linear; }
  .cap.ok .bar { stroke:var(--fm-ok); } .cap.warn .bar { stroke:var(--fm-warn); } .cap.over .bar { stroke:var(--fm-bad); }
  .ring-txt { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-size:20px; }
  .ring-q { font-size:11px; color:var(--fm-muted); font-variant-numeric:tabular-nums; }
  .ring-txt small { font-size:11px; color:var(--fm-muted); margin-left:1px; }
  .cap-info { flex:1; min-width:0; }
  .cap-row { display:flex; justify-content:space-between; font-size:13px; padding:3px 6px; margin:0 -6px; }
  .cap-row span { color:var(--fm-muted); }
  .cap.ok .fc-row b { color:var(--fm-ok); } .cap.warn .fc-row b { color:var(--fm-warn); } .cap.over .fc-row b { color:var(--fm-bad); }
  .hint { font-size:12px; margin-top:6px; }
  .cap.ok .hint { color:var(--fm-ok); } .cap.warn .hint { color:var(--fm-warn); } .cap.over .hint { color:var(--fm-bad); font-weight:500; }

  .tiles { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
  .tile { background:var(--fm-soft); border-radius:var(--fm-radius); padding:10px; display:flex; flex-direction:column; gap:6px; min-width:0; }
  .tile-h { display:flex; align-items:center; gap:6px; font-size:13px; color:var(--fm-muted); }
  .tile-h .ico { width:18px; height:18px; }
  .tv-row { display:flex; gap:4px; }
  .tv { flex:1; display:flex; flex-direction:column; gap:2px; padding:4px 6px; margin:0 -2px; min-width:0; }
  .tv b { font-size:18px; white-space:nowrap; }
  .tv b i { font-style:normal; font-size:11px; color:var(--fm-muted); margin-left:3px; font-weight:400; }
  .tv small { font-size:11px; color:var(--fm-muted); display:flex; align-items:center; gap:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .tv small .ico { width:11px; height:11px; }
  .mini { margin:0 -4px; padding:2px 4px; }
  .mini svg { width:100%; height:28px; display:block; }
  .mini rect.on { opacity:.85; } .mini rect.off { opacity:.2; }
  #mini-gas rect { fill:var(--fm-gas); } #mini-water rect { fill:var(--fm-water); }
  .mini-meta { display:flex; justify-content:space-between; font-size:10px; color:var(--fm-muted); margin-top:3px; font-variant-numeric:tabular-nums; }
  .c-day { color:var(--fm-day); } .c-night { color:var(--fm-night); } .c-gas { color:var(--fm-gas); } .c-water { color:var(--fm-water); }

  .phases { display:flex; flex-direction:column; gap:6px; }
  .ph { display:grid; grid-template-columns:22px 1fr 54px 64px; align-items:center; column-gap:8px; row-gap:5px;
    font-size:13px; padding:8px 10px; border-radius:var(--fm-radius); background:var(--fm-soft); }
  .ph-n { color:var(--fm-muted); font-weight:500; font-size:12px; }
  .ph-bar { position:relative; border-radius:4px; padding:5px 0; background-clip:content-box; }
  .ph-bar.v { height:6px; background-image:linear-gradient(90deg,
      color-mix(in srgb,var(--fm-bad) 40%,transparent) 0%, color-mix(in srgb,var(--fm-ok) 40%,transparent) 11%,
      color-mix(in srgb,var(--fm-ok) 40%,transparent) 89%, color-mix(in srgb,var(--fm-bad) 40%,transparent) 100%); }
  .ph-bar.v i { position:absolute; top:2px; width:4px; height:12px; margin-left:-2px; border-radius:2px; background:var(--fm-text); transition:left .5s; }
  .ph-bar.v i.bad { background:var(--fm-bad); }
  .ph-bar.a { height:8px; }
  .ph-bar.a::before { content:""; position:absolute; left:0; right:0; top:5px; height:8px; border-radius:4px; background:var(--fm-line); }
  .ph-bar.a .fill { position:absolute; left:0; right:0; top:5px; height:8px; transition:clip-path .6s ease; }
  .ph-val { text-align:right; font-size:13px; padding:2px 4px; }
  .ph-val.warn { color:var(--fm-warn); } .ph-val.over { color:var(--fm-bad); }
  .ph-kw { text-align:right; font-size:12px; color:var(--fm-muted); font-variant-numeric:tabular-nums; padding:2px 4px; }
  .ph-kw.imp { color:var(--fm-import); } .ph-kw.exp { color:var(--fm-export); }

  .totals { display:grid; grid-template-columns:1fr 1fr; gap:6px; }
  .totals > div { display:flex; flex-direction:column; gap:2px; padding:8px 10px; border-radius:var(--fm-radius); background:var(--fm-soft); }
  .totals span { font-size:11px; color:var(--fm-muted); }
  .totals b { font-size:14px; }

  @media (hover:hover) {
    [data-k]:not(.ph-bar):not(.chip):not(.ring):hover { background-color:var(--fm-hover); }
    .chip:hover { filter:brightness(1.15); }
    .tile .tv:hover, .cap-row:hover, .ring-col:hover { background:var(--fm-hover); }
  }
`;

/* ═══════════════════════════════ EDITOR ═════════════════════════════ */

const ED_LABELS = {
  nl: {
    title: "Titel", language: "Taal", fuse_amps: "Zekering per fase (A)", amp_warn: "Stroombalk oranje vanaf (fractie van zekering)",
    max_power: "Max. vermogen voor animatie (kW)", capacity_min: "Minimum capaciteitstarief (kW)", history_hours: "Grafiekvenster (uur)",
    power_consumption: "Vermogen afname", power_production: "Vermogen injectie", active_tariff: "Actief tarief",
    current_average_demand: "Kwartiergemiddelde (huidig)", maximum_demand: "Maandpiek", peak_average: "Gemiddelde piek 13 maanden (optioneel)",
    peak_today: "Piek vandaag (optioneel, anders berekend)",
    consumption_day: "Afname dag (1.8.1)", consumption_night: "Afname nacht (1.8.2)",
    production_day: "Injectie dag (2.8.1)", production_night: "Injectie nacht (2.8.2)",
    gas: "Gas (optioneel)", water: "Water (optioneel)",
    s_general: "Algemeen", s_power: "Live vermogen", s_capacity: "Capaciteitstarief", s_energy: "Energie (meterstanden)",
    s_utilities: "Gas & water", s_phase: "Fase", voltage: "Spanning", current: "Stroom", power: "Vermogen afname", power_prod: "Vermogen injectie",
  },
  en: {
    title: "Title", language: "Language", fuse_amps: "Fuse per phase (A)", amp_warn: "Current bar orange from (fraction of fuse)",
    max_power: "Max. power for animation (kW)", capacity_min: "Minimum capacity tariff (kW)", history_hours: "Chart window (hours)",
    power_consumption: "Power import", power_production: "Power export", active_tariff: "Active tariff",
    current_average_demand: "Quarter-hour average (current)", maximum_demand: "Month peak", peak_average: "13-month average peak (optional)",
    peak_today: "Peak today (optional, otherwise calculated)",
    consumption_day: "Import day (1.8.1)", consumption_night: "Import night (1.8.2)",
    production_day: "Export day (2.8.1)", production_night: "Export night (2.8.2)",
    gas: "Gas (optional)", water: "Water (optional)",
    s_general: "General", s_power: "Live power", s_capacity: "Capacity tariff", s_energy: "Energy (meter readings)",
    s_utilities: "Gas & water", s_phase: "Phase", voltage: "Voltage", current: "Current", power: "Power import", power_prod: "Power export",
  },
};

class FluviusMeterCardEditor extends HTMLElement {
  setConfig(config) {
    this._config = config || {};
    this._render();
  }
  set hass(hass) {
    this._hass = hass;
    if (this._form) this._form.hass = hass; else this._render();
  }

  get _L() {
    const lang = (this._config.language || (this._hass && this._hass.locale && this._hass.locale.language) || "nl").slice(0, 2);
    return ED_LABELS[lang] || ED_LABELS.nl;
  }

  _schema() {
    const L = this._L;
    const ent = (name) => ({ name, selector: { entity: { domain: "sensor" } } });
    const num = (name, min, max, step, unit, mode = "box") =>
      ({ name, selector: { number: { min, max, step, mode, ...(unit ? { unit_of_measurement: unit } : {}) } } });
    const phase = (n) => ({
      type: "expandable", flatten: true, title: `${L.s_phase} L${n}`, icon: "mdi:sine-wave",
      schema: [ent(`voltage_l${n}`), ent(`current_l${n}`), ent(`power_l${n}`), ent(`power_prod_l${n}`)],
    });
    return [
      {
        type: "expandable", flatten: true, expanded: true, title: L.s_general, icon: "mdi:cog",
        schema: [
          { name: "title", selector: { text: {} } },
          { name: "language", selector: { select: { mode: "dropdown", options: [
            { value: "nl", label: "Nederlands" }, { value: "en", label: "English" }] } } },
          { type: "grid", name: "", schema: [
            num("fuse_amps", 6, 100, 1, "A"),
            num("amp_warn", 0.5, 1, 0.05, null, "slider"),
            num("capacity_min", 0, 20, 0.1, "kW"),
            num("max_power", 1, 50, 0.5, "kW"),
            num("history_hours", 1, 24, 1, "h"),
          ] },
        ],
      },
      { type: "expandable", flatten: true, title: L.s_power, icon: "mdi:flash",
        schema: [ent("power_consumption"), ent("power_production"), ent("active_tariff")] },
      { type: "expandable", flatten: true, title: L.s_capacity, icon: "mdi:chart-bell-curve",
        schema: [ent("current_average_demand"), ent("maximum_demand"), ent("peak_today"), ent("peak_average")] },
      { type: "expandable", flatten: true, title: L.s_energy, icon: "mdi:counter",
        schema: [ent("consumption_day"), ent("consumption_night"), ent("production_day"), ent("production_night")] },
      { type: "expandable", flatten: true, title: L.s_utilities, icon: "mdi:water",
        schema: [ent("gas"), ent("water")] },
      phase(1), phase(2), phase(3),
    ];
  }

  _label(s) {
    const L = this._L;
    if (L[s.name]) return L[s.name];
    const m = /^(voltage|current|power_prod|power)_l(\d)$/.exec(s.name || "");
    return m ? `${L[m[1]]} L${m[2]}` : s.name;
  }

  _data() {
    const { entities, type, ...opts } = this._config;
    return { ...DEFAULT_OPTIONS, ...opts, ...DEFAULT_ENTITIES, ...(entities || {}) };
  }

  _render() {
    if (!this._hass || !this._config) return;
    if (!this._form) {
      this._form = document.createElement("ha-form");
      this._form.computeLabel = (s) => this._label(s);
      this._form.addEventListener("value-changed", (ev) => this._changed(ev));
      this.appendChild(this._form);
    }
    this._form.hass = this._hass;
    this._form.schema = this._schema();
    this._form.data = this._data();
  }

  _changed(ev) {
    ev.stopPropagation();
    const v = ev.detail.value || {};
    const cfg = { type: this._config.type || "custom:fluvius-meter-card" };
    for (const [k, def] of Object.entries(DEFAULT_OPTIONS)) {
      if (v[k] !== undefined && v[k] !== "" && v[k] !== def) cfg[k] = v[k];
    }
    const entities = {};
    for (const [k, def] of Object.entries(DEFAULT_ENTITIES)) {
      const val = v[k] || "";          // cleared field → "" (= disabled)
      if (val !== def) entities[k] = val;
    }
    if (Object.keys(entities).length) cfg.entities = entities;
    this._config = cfg;
    this._form.data = this._data();
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: cfg }, bubbles: true, composed: true }));
  }
}

/* ═══════════════════════════════ REGISTER ═══════════════════════════ */

if (!customElements.get("fluvius-meter-card")) customElements.define("fluvius-meter-card", FluviusMeterCard);
if (!customElements.get("fluvius-meter-card-editor")) customElements.define("fluvius-meter-card-editor", FluviusMeterCardEditor);
window.customCards = window.customCards || [];
if (!window.customCards.some((c) => c.type === "fluvius-meter-card")) {
  window.customCards.push({
    type: "fluvius-meter-card",
    name: "Fluvius Meter Card",
    description: "Live vermogen, capaciteitstarief, dagverbruik, gas/water en fasen voor de Belgische digitale meter.",
    preview: true,
  });
}
