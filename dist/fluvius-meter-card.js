const $e = "fluvius-meter-card", Os = "fluvius-meter-card-editor", Vs = {
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
  power_prod_l3: "sensor.electricity_meter_power_production_phase_l3"
}, Bs = {
  title: "",
  language: "nl",
  fuse_amps: 25,
  amp_warn: 0.8,
  max_power: 10,
  capacity_min: 2.5,
  history_hours: 2
}, yi = 5 * 6e4, xi = 5e3;
function wi(t) {
  return {
    ...Bs,
    ...t,
    entities: { ...Vs, ...t.entities ?? {} }
  };
}
/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ks(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const s of t.split(",")) e[s] = 1;
  return (s) => s in e;
}
const Q = {}, se = [], re = () => {
}, sr = () => !1, ss = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), ns = (t) => t.startsWith("onUpdate:"), nt = Object.assign, nr = (t, e) => {
  const s = t.indexOf(e);
  s > -1 && t.splice(s, 1);
}, bi = Object.prototype.hasOwnProperty, B = (t, e) => bi.call(t, e), F = Array.isArray, Jt = (t) => De(t) === "[object Map]", Ge = (t) => De(t) === "[object Set]", yn = (t) => De(t) === "[object Date]", G = (t) => typeof t == "function", Z = (t) => typeof t == "string", Rt = (t) => typeof t == "symbol", J = (t) => t !== null && typeof t == "object", rr = (t) => (J(t) || G(t)) && G(t.then) && G(t.catch), ir = Object.prototype.toString, De = (t) => ir.call(t), ki = (t) => De(t).slice(8, -1), rs = (t) => De(t) === "[object Object]", Us = (t) => Z(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, we = /* @__PURE__ */ Ks(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), is = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((s) => e[s] || (e[s] = t(s)));
}, Si = /-\w/g, dt = /* @__PURE__ */ is((t) => t.replace(Si, (e) => e.slice(1).toUpperCase())), Ci = /\B([A-Z])/g, mt = /* @__PURE__ */ is(
  (t) => t.replace(Ci, "-$1").toLowerCase()
), or = /* @__PURE__ */ is((t) => t.charAt(0).toUpperCase() + t.slice(1)), gs = /* @__PURE__ */ is((t) => t ? `on${or(t)}` : ""), Pt = (t, e) => !Object.is(t, e), vs = (t, ...e) => {
  for (let s = 0; s < t.length; s++)
    t[s](...e);
}, lr = (t, e, s, n = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: s
  });
}, Ti = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
}, xn = (t) => {
  const e = Z(t) ? Number(t) : NaN;
  return isNaN(e) ? t : e;
};
let wn;
const os = () => wn || (wn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Bt(t) {
  if (F(t)) {
    const e = {};
    for (let s = 0; s < t.length; s++) {
      const n = t[s], r = Z(n) ? Ei(n) : Bt(n);
      if (r)
        for (const i in r)
          e[i] = r[i];
    }
    return e;
  } else if (Z(t) || J(t))
    return t;
}
const Mi = /;(?![^(]*\))/g, Ai = /:([^]+)/, $i = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Ei(t) {
  const e = {};
  return t.replace($i, (s) => s.startsWith("/*") ? "" : s).split(Mi).forEach((s) => {
    if (s) {
      const n = s.split(Ai);
      n.length > 1 && (e[n[0].trim()] = n[1].trim());
    }
  }), e;
}
function ft(t) {
  let e = "";
  if (Z(t))
    e = t;
  else if (F(t))
    for (let s = 0; s < t.length; s++) {
      const n = ft(t[s]);
      n && (e += n + " ");
    }
  else if (J(t))
    for (const s in t)
      t[s] && (e += s + " ");
  return e.trim();
}
const Pi = "itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly", Oi = /* @__PURE__ */ Ks(Pi);
function ar(t) {
  return !!t || t === "";
}
function Ri(t, e, s) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = ls(t[r], e[r], s);
  return n;
}
function bn(t, e, s) {
  if (t.size !== e.size) return !1;
  const n = Array.from(e), r = new Uint8Array(n.length);
  for (const i of t) {
    let o = -1;
    for (let l = 0; l < n.length; l++)
      if (!r[l] && ls(i, n[l], s)) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    r[o] = 1;
  }
  return !0;
}
function Ii(t, e, s) {
  let n = Jt(t), r = Jt(e);
  if (n || r || (n = Ge(t), r = Ge(e), n || r))
    return n && r ? bn(t, e, s) : !1;
  const i = Object.keys(t).length, o = Object.keys(e).length;
  if (i !== o)
    return !1;
  for (const l in t) {
    const a = t.hasOwnProperty(l), f = e.hasOwnProperty(l);
    if (a && !f || !a && f || !ls(t[l], e[l], s))
      return !1;
  }
  return String(t) === String(e);
}
function kn(t, e, s, n) {
  s || (s = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [r, i] = s;
  if (r.has(t) || i.has(e))
    return r.get(t) === e && i.get(e) === t;
  r.set(t, e), i.set(e, t);
  const o = n(t, e, s);
  return r.delete(t), i.delete(e), o;
}
function ls(t, e, s) {
  if (t === e) return !0;
  let n = yn(t), r = yn(e);
  return n || r ? n && r ? t.getTime() === e.getTime() : !1 : (n = Rt(t), r = Rt(e), n || r ? t === e : (n = F(t), r = F(e), n || r ? n && r ? kn(t, e, s, Ri) : !1 : (n = J(t), r = J(e), n || r ? !n || !r ? !1 : kn(t, e, s, Ii) : String(t) === String(e))));
}
const cr = (t) => !!(t && t.__v_isRef === !0), I = (t) => Z(t) ? t : t == null ? "" : F(t) || J(t) && (t.toString === ir || !G(t.toString)) ? cr(t) ? I(t.value) : JSON.stringify(t, fr, 2) : String(t), fr = (t, e) => cr(e) ? fr(t, e.value) : Jt(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (s, [n, r], i) => (s[ys(n, i) + " =>"] = r, s),
    {}
  )
} : Ge(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((s) => ys(s))
} : Rt(e) ? ys(e) : J(e) && !F(e) && !rs(e) ? String(e) : e, ys = (t, e = "") => {
  var s;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Rt(t) ? `Symbol(${(s = t.description) != null ? s : e})` : t
  );
};
/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let et;
class Ni {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && et && (et.active ? (this.parent = et, this.index = (et.scopes || (et.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, s;
      if (this.scopes) {
        const n = this.scopes.slice();
        for (e = 0, s = n.length; e < s; e++)
          n[e].pause();
      }
      for (e = 0, s = this.effects.length; e < s; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, s;
      if (this.scopes) {
        const r = this.scopes.slice();
        for (e = 0, s = r.length; e < s; e++)
          r[e].resume();
      }
      const n = this.effects.slice();
      for (e = 0, s = n.length; e < s; e++)
        n[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const s = et;
      try {
        return et = this, e();
      } finally {
        et = s;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = et, et = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (et === this)
        et = this.prevScope;
      else {
        let e = et;
        for (; e; ) {
          if (e.prevScope === this) {
            e.prevScope = this.prevScope;
            break;
          }
          e = e.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let s, n;
      for (s = 0, n = this.effects.length; s < n; s++)
        this.effects[s].stop();
      for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
        this.cleanups[s]();
      if (this.cleanups.length = 0, this.scopes) {
        const r = this.scopes.slice();
        for (s = 0, n = r.length; s < n; s++)
          r[s].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Fi() {
  return et;
}
let Y;
const xs = /* @__PURE__ */ new WeakSet();
class ur {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, et && (et.active ? et.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, xs.has(this) && (xs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || pr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Sn(this), hr(this);
    const e = Y, s = wt;
    Y = this, wt = !0;
    try {
      return this.fn();
    } finally {
      _r(this), Y = e, wt = s, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        Gs(e);
      this.deps = this.depsTail = void 0, Sn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? xs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Rs(this) && this.run();
  }
  get dirty() {
    return Rs(this);
  }
}
let dr = 0, be, ke;
function pr(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = ke, ke = t;
    return;
  }
  t.next = be, be = t;
}
function zs() {
  dr++;
}
function qs() {
  if (--dr > 0)
    return;
  if (ke) {
    let e = ke;
    for (ke = void 0; e; ) {
      const s = e.next;
      e.next = void 0, e.flags &= -9, e = s;
    }
  }
  let t;
  for (; be; ) {
    let e = be;
    for (be = void 0; e; ) {
      const s = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (n) {
          t || (t = n);
        }
      e = s;
    }
  }
  if (t) throw t;
}
function hr(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function _r(t) {
  let e, s = t.depsTail, n = s;
  for (; n; ) {
    const r = n.prevDep;
    n.version === -1 ? (n === s && (s = r), Gs(n), Di(n)) : e = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
  }
  t.deps = e, t.depsTail = s;
}
function Rs(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (mr(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function mr(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Ee) || (t.globalVersion = Ee, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Rs(t))))
    return;
  t.flags |= 2;
  const e = t.dep, s = Y, n = wt;
  Y = t, wt = !0;
  try {
    hr(t);
    const r = t.fn(t._value);
    (e.version === 0 || Pt(r, t._value)) && (t.flags |= 128, t._value = r, e.version++);
  } catch (r) {
    throw e.version++, r;
  } finally {
    Y = s, wt = n, _r(t), t.flags &= -3;
  }
}
function Gs(t, e = !1) {
  const { dep: s, prevSub: n, nextSub: r } = t;
  if (n && (n.nextSub = r, t.prevSub = void 0), r && (r.prevSub = n, t.nextSub = void 0), s.subs === t && (s.subs = n, !n && s.computed)) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep)
      Gs(i, !0);
  }
  !e && !--s.sc && s.map && s.map.delete(s.key);
}
function Di(t) {
  const { prevDep: e, nextDep: s } = t;
  e && (e.nextDep = s, t.prevDep = void 0), s && (s.prevDep = e, t.nextDep = void 0);
}
let wt = !0;
const gr = [];
function Ut() {
  gr.push(wt), wt = !1;
}
function zt() {
  const t = gr.pop();
  wt = t === void 0 ? !0 : t;
}
function Sn(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const s = Y;
    Y = void 0;
    try {
      e();
    } finally {
      Y = s;
    }
  }
}
let Ee = 0;
class ji {
  constructor(e, s) {
    this.sub = e, this.dep = s, this.version = s.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ys {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!Y || !wt || Y === this.computed)
      return;
    let s = this.activeLink;
    if (s === void 0 || s.sub !== Y)
      s = this.activeLink = new ji(Y, this), Y.deps ? (s.prevDep = Y.depsTail, Y.depsTail.nextDep = s, Y.depsTail = s) : Y.deps = Y.depsTail = s, vr(s);
    else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
      const n = s.nextDep;
      n.prevDep = s.prevDep, s.prevDep && (s.prevDep.nextDep = n), s.prevDep = Y.depsTail, s.nextDep = void 0, Y.depsTail.nextDep = s, Y.depsTail = s, Y.deps === s && (Y.deps = n);
    }
    return s;
  }
  trigger(e) {
    this.version++, Ee++, this.notify(e);
  }
  notify(e) {
    zs();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      qs();
    }
  }
}
function vr(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let n = e.deps; n; n = n.nextDep)
        vr(n);
    }
    const s = t.dep.subs;
    s !== t && (t.prevSub = s, s && (s.nextSub = t)), t.dep.subs = t;
  }
}
const Is = /* @__PURE__ */ new WeakMap(), ie = /* @__PURE__ */ Symbol(
  ""
), Ns = /* @__PURE__ */ Symbol(
  ""
), Pe = /* @__PURE__ */ Symbol(
  ""
);
function it(t, e, s) {
  if (wt && Y) {
    let n = Is.get(t);
    n || Is.set(t, n = /* @__PURE__ */ new Map());
    let r = n.get(s);
    r || (n.set(s, r = new Ys()), r.map = n, r.key = s), r.track();
  }
}
function Vt(t, e, s, n, r, i) {
  const o = Is.get(t);
  if (!o) {
    Ee++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (zs(), e === "clear")
    o.forEach(l);
  else {
    const a = F(t), f = a && Us(s);
    if (a && s === "length") {
      const u = Number(n);
      o.forEach((p, v) => {
        (v === "length" || v === Pe || !Rt(v) && v >= u) && l(p);
      });
    } else
      switch ((s !== void 0 || o.has(void 0)) && l(o.get(s)), f && l(o.get(Pe)), e) {
        case "add":
          a ? f && l(o.get("length")) : (l(o.get(ie)), Jt(t) && l(o.get(Ns)));
          break;
        case "delete":
          a || (l(o.get(ie)), Jt(t) && l(o.get(Ns)));
          break;
        case "set":
          Jt(t) && l(o.get(ie));
          break;
      }
  }
  qs();
}
function fe(t) {
  const e = /* @__PURE__ */ V(t);
  return e === t || (it(e, "iterate", Pe), /* @__PURE__ */ gt(t)) ? e : /* @__PURE__ */ It(t) ? /* @__PURE__ */ Qt(t) ? e.map((s) => Zt(vt(s))) : e.map(Zt) : e.map(vt);
}
function as(t) {
  return it(t = /* @__PURE__ */ V(t), "iterate", Pe), t;
}
function At(t, e) {
  return /* @__PURE__ */ It(t) ? Zt(/* @__PURE__ */ Qt(t) ? vt(e) : e) : vt(e);
}
const Hi = {
  __proto__: null,
  [Symbol.iterator]() {
    return ws(this, Symbol.iterator, (t) => At(this, t));
  },
  concat(...t) {
    return fe(this).concat(
      ...t.map((e) => F(e) ? fe(e) : e)
    );
  },
  entries() {
    return ws(this, "entries", (t) => (t[1] = At(this, t[1]), t));
  },
  every(t, e) {
    return Ht(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return Ht(
      this,
      "filter",
      t,
      e,
      (s) => s.map((n) => At(this, n)),
      arguments
    );
  },
  find(t, e) {
    return Ht(
      this,
      "find",
      t,
      e,
      (s) => At(this, s),
      arguments
    );
  },
  findIndex(t, e) {
    return Ht(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return Ht(
      this,
      "findLast",
      t,
      e,
      (s) => At(this, s),
      arguments
    );
  },
  findLastIndex(t, e) {
    return Ht(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return Ht(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return bs(this, "includes", t);
  },
  indexOf(...t) {
    return bs(this, "indexOf", t);
  },
  join(t) {
    return fe(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return bs(this, "lastIndexOf", t);
  },
  map(t, e) {
    return Ht(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return ge(this, "pop");
  },
  push(...t) {
    return ge(this, "push", t);
  },
  reduce(t, ...e) {
    return Tn(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Tn(this, "reduceRight", t, e);
  },
  shift() {
    return ge(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return Ht(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return ge(this, "splice", t);
  },
  toReversed() {
    return fe(this).toReversed();
  },
  toSorted(t) {
    return fe(this).toSorted(t);
  },
  toSpliced(...t) {
    return fe(this).toSpliced(...t);
  },
  unshift(...t) {
    return ge(this, "unshift", t);
  },
  values() {
    return ws(this, "values", (t) => At(this, t));
  }
};
function ws(t, e, s) {
  const n = as(t), r = n[e], i = r.call(n);
  if (n !== t && !/* @__PURE__ */ gt(t)) {
    if (i[Symbol.toStringTag] === "Array Iterator") {
      const o = Object.create(Object.getPrototypeOf(i));
      return o.next = () => Cn(i.next(), s), r !== yr[e] && Object.defineProperties(o, {
        return: {
          get() {
            const l = i.return;
            return typeof l == "function" ? l.bind(i) : l;
          }
        },
        throw: {
          get() {
            const l = i.throw;
            return typeof l == "function" ? l.bind(i) : l;
          }
        }
      }), o;
    }
    i._next = i.next, i.next = () => Cn(i._next(), s);
  }
  return i;
}
function Cn(t, e) {
  return t.done || (t.value = e(t.value)), t;
}
const yr = Array.prototype;
function Ht(t, e, s, n, r, i) {
  const o = as(t), l = o !== t && !/* @__PURE__ */ gt(t), a = o[e];
  if (a !== yr[e]) {
    const p = a.apply(t, i);
    return l ? vt(p) : p;
  }
  let f = s;
  o !== t && (l ? f = function(p, v) {
    return s.call(this, At(t, p), v, t);
  } : s.length > 2 && (f = function(p, v) {
    return s.call(this, p, v, t);
  }));
  const u = a.call(o, f, n);
  return l && r ? r(u) : u;
}
function Tn(t, e, s, n) {
  const r = as(t), i = r !== t && !/* @__PURE__ */ gt(t);
  let o = s, l = !1;
  r !== t && (i ? (l = n.length === 0, o = function(f, u, p) {
    return l && (l = !1, f = At(t, f)), s.call(this, f, At(t, u), p, t);
  }) : s.length > 3 && (o = function(f, u, p) {
    return s.call(this, f, u, p, t);
  }));
  const a = r[e](o, ...n);
  return l ? At(t, a) : a;
}
function bs(t, e, s) {
  const n = /* @__PURE__ */ V(t);
  it(n, "iterate", Pe);
  const r = n[e](...s);
  return (r === -1 || r === !1) && /* @__PURE__ */ Zs(s[0]) ? (s[0] = /* @__PURE__ */ V(s[0]), n[e](...s)) : r;
}
function ge(t, e, s = []) {
  Ut(), zs();
  const n = (/* @__PURE__ */ V(t))[e].apply(t, s);
  return qs(), zt(), n;
}
const Li = /* @__PURE__ */ Ks("__proto__,__v_isRef,__isVue"), xr = /* @__PURE__ */ new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Rt)
);
function Wi(t) {
  Rt(t) || (t = String(t));
  const e = /* @__PURE__ */ V(this);
  return it(e, "has", t), e.hasOwnProperty(t);
}
class wr {
  constructor(e = !1, s = !1) {
    this._isReadonly = e, this._isShallow = s;
  }
  get(e, s, n) {
    if (s === "__v_skip") return e.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (s === "__v_isReactive")
      return !r;
    if (s === "__v_isReadonly")
      return r;
    if (s === "__v_isShallow")
      return i;
    if (s === "__v_raw")
      return n === (r ? i ? Qi : Cr : i ? Sr : kr).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
    const o = F(e);
    if (!r) {
      let a;
      if (o && (a = Hi[s]))
        return a;
      if (s === "hasOwnProperty")
        return Wi;
    }
    const l = Reflect.get(
      e,
      s,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ut(e) ? e : n
    );
    if ((Rt(s) ? xr.has(s) : Li(s)) || (r || it(e, "get", s), i))
      return l;
    if (/* @__PURE__ */ ut(l)) {
      const a = o && Us(s) ? l : l.value;
      return r && J(a) ? /* @__PURE__ */ Ds(a) : a;
    }
    return J(l) ? r ? /* @__PURE__ */ Ds(l) : /* @__PURE__ */ Ye(l) : l;
  }
}
class br extends wr {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, s, n, r) {
    let i = e[s];
    const o = F(e) && Us(s);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ It(i);
      if (!/* @__PURE__ */ gt(n) && !/* @__PURE__ */ It(n) && (i = /* @__PURE__ */ V(i), n = /* @__PURE__ */ V(n)), !o && /* @__PURE__ */ ut(i) && !/* @__PURE__ */ ut(n))
        return f || (i.value = n), !0;
    }
    const l = o ? Number(s) < e.length : B(e, s), a = Reflect.set(
      e,
      s,
      n,
      /* @__PURE__ */ ut(e) ? e : r
    );
    return e === /* @__PURE__ */ V(r) && a && (l ? Pt(n, i) && Vt(e, "set", s, n) : Vt(e, "add", s, n)), a;
  }
  deleteProperty(e, s) {
    const n = B(e, s);
    e[s];
    const r = Reflect.deleteProperty(e, s);
    return r && n && Vt(e, "delete", s, void 0), r;
  }
  has(e, s) {
    const n = Reflect.has(e, s);
    return (!Rt(s) || !xr.has(s)) && it(e, "has", s), n;
  }
  ownKeys(e) {
    return it(
      e,
      "iterate",
      F(e) ? "length" : ie
    ), Reflect.ownKeys(e);
  }
}
class Vi extends wr {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, s) {
    return !0;
  }
  deleteProperty(e, s) {
    return !0;
  }
}
const Bi = /* @__PURE__ */ new br(), Ki = /* @__PURE__ */ new Vi(), Ui = /* @__PURE__ */ new br(!0);
const Fs = (t) => t, We = (t) => Reflect.getPrototypeOf(t);
function zi(t, e, s) {
  return function(...n) {
    const r = this.__v_raw, i = /* @__PURE__ */ V(r), o = Jt(i), l = t === "entries" || t === Symbol.iterator && o, a = t === "keys" && o, f = r[t](...n), u = s ? Fs : e ? Zt : vt;
    return !e && it(
      i,
      "iterate",
      a ? Ns : ie
    ), nt(
      // inheriting all iterator properties
      Object.create(f),
      {
        // iterator protocol
        next() {
          const { value: p, done: v } = f.next();
          return v ? { value: p, done: v } : {
            value: l ? [u(p[0]), u(p[1])] : u(p),
            done: v
          };
        }
      }
    );
  };
}
function Ve(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function qi(t, e) {
  const s = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ V(i), l = /* @__PURE__ */ V(r);
      t || (Pt(r, l) && it(o, "get", r), it(o, "get", l));
      const { has: a } = We(o), f = e ? Fs : t ? Zt : vt;
      if (a.call(o, r))
        return f(i.get(r));
      if (a.call(o, l))
        return f(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !t && it(/* @__PURE__ */ V(r), "iterate", ie), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ V(i), l = /* @__PURE__ */ V(r);
      return t || (Pt(r, l) && it(o, "has", r), it(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ V(l), f = e ? Fs : t ? Zt : vt;
      return !t && it(a, "iterate", ie), l.forEach((u, p) => r.call(i, f(u), f(p), o));
    }
  };
  return nt(
    s,
    t ? {
      add: Ve("add"),
      set: Ve("set"),
      delete: Ve("delete"),
      clear: Ve("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ V(this), o = We(i), l = /* @__PURE__ */ V(r), a = !e && !/* @__PURE__ */ gt(r) && !/* @__PURE__ */ It(r) ? l : r;
        return o.has.call(i, a) || Pt(r, a) && o.has.call(i, r) || Pt(l, a) && o.has.call(i, l) || (i.add(a), Vt(i, "add", a, a)), this;
      },
      set(r, i) {
        !e && !/* @__PURE__ */ gt(i) && !/* @__PURE__ */ It(i) && (i = /* @__PURE__ */ V(i));
        const o = /* @__PURE__ */ V(this), { has: l, get: a } = We(o);
        let f = l.call(o, r);
        f || (r = /* @__PURE__ */ V(r), f = l.call(o, r));
        const u = a.call(o, r);
        return o.set(r, i), f ? Pt(i, u) && Vt(o, "set", r, i) : Vt(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ V(this), { has: o, get: l } = We(i);
        let a = o.call(i, r);
        a || (r = /* @__PURE__ */ V(r), a = o.call(i, r)), l && l.call(i, r);
        const f = i.delete(r);
        return a && Vt(i, "delete", r, void 0), f;
      },
      clear() {
        const r = /* @__PURE__ */ V(this), i = r.size !== 0, o = r.clear();
        return i && Vt(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    s[r] = zi(r, t, e);
  }), s;
}
function Js(t, e) {
  const s = qi(t, e);
  return (n, r, i) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_isShallow" ? e : r === "__v_raw" ? n : Reflect.get(
    B(s, r) && r in n ? s : n,
    r,
    i
  );
}
const Gi = {
  get: /* @__PURE__ */ Js(!1, !1)
}, Yi = {
  get: /* @__PURE__ */ Js(!1, !0)
}, Ji = {
  get: /* @__PURE__ */ Js(!0, !1)
};
const kr = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap();
function Zi(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function Ye(t) {
  return /* @__PURE__ */ It(t) ? t : Qs(
    t,
    !1,
    Bi,
    Gi,
    kr
  );
}
// @__NO_SIDE_EFFECTS__
function Xi(t) {
  return Qs(
    t,
    !1,
    Ui,
    Yi,
    Sr
  );
}
// @__NO_SIDE_EFFECTS__
function Ds(t) {
  return Qs(
    t,
    !0,
    Ki,
    Ji,
    Cr
  );
}
function Qs(t, e, s, n, r) {
  if (!J(t) || t.__v_raw && !(e && t.__v_isReactive) || t.__v_skip || !Object.isExtensible(t))
    return t;
  const i = r.get(t);
  if (i)
    return i;
  const o = Zi(ki(t));
  if (o === 0)
    return t;
  const l = new Proxy(
    t,
    o === 2 ? n : s
  );
  return r.set(t, l), l;
}
// @__NO_SIDE_EFFECTS__
function Qt(t) {
  return /* @__PURE__ */ It(t) ? /* @__PURE__ */ Qt(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function It(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function gt(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Zs(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function V(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ V(e) : t;
}
function to(t) {
  return !B(t, "__v_skip") && Object.isExtensible(t) && lr(t, "__v_skip", !0), t;
}
const vt = (t) => J(t) ? /* @__PURE__ */ Ye(t) : t, Zt = (t) => J(t) ? /* @__PURE__ */ Ds(t) : t;
// @__NO_SIDE_EFFECTS__
function ut(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function cs(t) {
  return Tr(t, !1);
}
// @__NO_SIDE_EFFECTS__
function eo(t) {
  return Tr(t, !0);
}
function Tr(t, e) {
  return /* @__PURE__ */ ut(t) ? t : new so(t, e);
}
class so {
  constructor(e, s) {
    this.dep = new Ys(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = s ? e : /* @__PURE__ */ V(e), this._value = s ? e : vt(e), this.__v_isShallow = s;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const s = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ gt(e) || /* @__PURE__ */ It(e);
    e = n ? e : /* @__PURE__ */ V(e), Pt(e, s) && (this._rawValue = e, this._value = n ? e : vt(e), this.dep.trigger());
  }
}
function no(t) {
  t.dep && t.dep.trigger();
}
function T(t) {
  return /* @__PURE__ */ ut(t) ? t.value : t;
}
const ro = {
  get: (t, e, s) => e === "__v_raw" ? t : T(Reflect.get(t, e, s)),
  set: (t, e, s, n) => {
    const r = t[e];
    return /* @__PURE__ */ ut(r) && !/* @__PURE__ */ ut(s) ? (r.value = s, !0) : Reflect.set(t, e, s, n);
  }
};
function Mr(t) {
  return /* @__PURE__ */ Qt(t) ? t : new Proxy(t, ro);
}
class io {
  constructor(e, s, n) {
    this.fn = e, this.setter = s, this._value = void 0, this.dep = new Ys(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ee - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !s, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Y !== this)
      return pr(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return mr(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function oo(t, e, s = !1) {
  let n, r;
  return G(t) ? n = t : (n = t.get, r = t.set), new io(n, r, s);
}
const Be = {}, Je = /* @__PURE__ */ new WeakMap();
let ee;
function lo(t, e = !1, s = ee) {
  if (s) {
    let n = Je.get(s);
    n || Je.set(s, n = []), n.push(t);
  }
}
function ao(t, e, s = Q) {
  const { immediate: n, deep: r, once: i, scheduler: o, augmentJob: l, call: a } = s, f = (O) => r ? O : /* @__PURE__ */ gt(O) || r === !1 || r === 0 ? Yt(O, 1) : Yt(O);
  let u, p, v, y, E = !1, M = !1;
  if (/* @__PURE__ */ ut(t) ? (p = () => t.value, E = /* @__PURE__ */ gt(t)) : /* @__PURE__ */ Qt(t) ? (p = () => f(t), E = !0) : F(t) ? (M = !0, E = t.some((O) => /* @__PURE__ */ Qt(O) || /* @__PURE__ */ gt(O)), p = () => t.map((O) => {
    if (/* @__PURE__ */ ut(O))
      return O.value;
    if (/* @__PURE__ */ Qt(O))
      return f(O);
    if (G(O))
      return a ? a(O, 2) : O();
  })) : G(t) ? e ? p = a ? () => a(t, 2) : t : p = () => {
    if (v) {
      Ut();
      try {
        v();
      } finally {
        zt();
      }
    }
    const O = ee;
    ee = u;
    try {
      return a ? a(t, 3, [y]) : t(y);
    } finally {
      ee = O;
    }
  } : p = re, e && r) {
    const O = p, rt = r === !0 ? 1 / 0 : r;
    p = () => Yt(O(), rt);
  }
  const D = Fi(), N = () => {
    u.stop(), D && D.active && nr(D.effects, u);
  };
  if (i && e) {
    const O = e;
    e = (...rt) => {
      try {
        return O(...rt);
      } finally {
        N();
      }
    };
  }
  let P = M ? new Array(t.length).fill(Be) : Be;
  const K = (O) => {
    if (!(!(u.flags & 1) || !u.dirty && !O))
      if (e) {
        const rt = u.run();
        if (O || r || E || (M ? rt.some((ae, qt) => Pt(ae, P[qt])) : Pt(rt, P))) {
          const ae = ee;
          Ut();
          try {
            v && v(), ee = u;
            const qt = [
              rt,
              // pass undefined as the old value when it's changed for the first time
              P === Be ? void 0 : M && P[0] === Be ? [] : P,
              y
            ];
            P = rt, a ? a(e, 3, qt) : (
              // @ts-expect-error
              e(...qt)
            );
          } finally {
            ee = ae, zt();
          }
        }
      } else
        u.run();
  };
  return l && l(K), u = new ur(p), u.scheduler = o ? () => o(K, !1) : K, y = (O) => lo(O, !1, u), v = u.onStop = () => {
    const O = Je.get(u);
    if (O) {
      if (a)
        a(O, 4);
      else
        for (const rt of O) rt();
      Je.delete(u);
    }
  }, e ? n ? K(!0) : P = u.run() : o ? o(K.bind(null, !0), !0) : u.run(), N.pause = u.pause.bind(u), N.resume = u.resume.bind(u), N.stop = N, N;
}
function Yt(t, e = 1 / 0, s) {
  if (e <= 0 || !J(t) || t.__v_skip || (s = s || /* @__PURE__ */ new Map(), (s.get(t) || 0) >= e))
    return t;
  if (s.set(t, e), e--, /* @__PURE__ */ ut(t))
    Yt(t.value, e, s);
  else if (F(t))
    for (let n = 0; n < t.length; n++)
      Yt(t[n], e, s);
  else if (Ge(t) || Jt(t))
    t.forEach((n) => {
      Yt(n, e, s);
    });
  else if (rs(t)) {
    for (const n in t)
      Yt(t[n], e, s);
    for (const n of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, n) && Yt(t[n], e, s);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function je(t, e, s, n) {
  try {
    return n ? t(...n) : t();
  } catch (r) {
    fs(r, e, s);
  }
}
function Nt(t, e, s, n) {
  if (G(t)) {
    const r = je(t, e, s, n);
    return r && rr(r) && r.catch((i) => {
      fs(i, e, s, void 0, !0);
    }), r;
  }
  if (F(t)) {
    const r = [];
    for (let i = 0; i < t.length; i++)
      r.push(Nt(t[i], e, s, n));
    return r;
  }
}
function fs(t, e, s, n = !0, r = !1) {
  const i = e ? e.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: l } = e && e.appContext.config || Q;
  if (e) {
    let a = e.parent;
    const f = e.proxy, u = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; a; ) {
      const p = a.ec;
      if (p && !a.isUnmounted && // Async failures may outlive stopped scopes whose unmount effects
      // are deferred or discarded by Suspense.
      (!r || a.scope.active)) {
        for (let v = 0; v < p.length; v++)
          if (p[v](t, f, u) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      Ut(), je(o, null, 10, [
        t,
        f,
        u
      ]), zt();
      return;
    }
  }
  co(t, s, i, n, l);
}
function co(t, e, s, n = !0, r = !1) {
  if (r)
    throw t;
  console.error(t);
}
const ct = [];
let xt = -1;
const $t = [];
let Gt = null, ue = 0;
const Ar = /* @__PURE__ */ Promise.resolve();
let Qe = null;
function $r(t) {
  const e = Qe || Ar;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function fo(t) {
  let e = xt + 1, s = ct.length;
  for (; e < s; ) {
    const n = e + s >>> 1, r = ct[n], i = Oe(r);
    i < t || i === t && r.flags & 2 ? e = n + 1 : s = n;
  }
  return e;
}
function Xs(t) {
  if (!(t.flags & 1)) {
    const e = Oe(t), s = ct[ct.length - 1];
    !s || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Oe(s) ? ct.push(t) : ct.splice(fo(e), 0, t), t.flags |= 1, Er();
  }
}
function Er() {
  Qe || (Qe = Ar.then(Rr));
}
function uo(t) {
  if (!F(t))
    Gt && t.id === -1 ? Gt.splice(ue + 1, 0, t) : t.flags & 1 || ($t.push(t), t.flags |= 1);
  else
    for (let e = 0; e < t.length; e++)
      $t.push(t[e]);
  Er();
}
function Pr(t, e, s, n = xt + 1) {
  for (; n < ct.length; n++) {
    const r = ct[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid || e !== void 0 && !(r.id >= e))
        continue;
      ct.splice(n, 1), n = t ? n - 1 : xt, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Or(t, e, s = 0) {
  if ($t.length) {
    let n = $t, r = 0;
    if (e) {
      n = [];
      for (let o = 0; o < $t.length; o++) {
        const l = $t[o];
        (l.i !== void 0 ? !l.i || l.i.uid < s : e.has(l)) ? $t[r++] = l : n.push(l);
      }
    }
    const i = [...new Set(n)].sort((o, l) => Oe(o) - Oe(l));
    if ($t.length = r, Gt) {
      for (let o = 0; o < i.length; o++)
        Gt.push(i[o]);
      return;
    }
    for (Gt = i, ue = 0; ue < Gt.length; ue++) {
      const o = Gt[ue];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Gt = null, ue = 0;
  }
}
let ks = !1;
function po(t, e) {
  if (ks) {
    t();
    return;
  }
  const s = e === void 0 ? void 0 : new Set($t);
  t(), ks = !0;
  try {
    Pr(void 0, e), Or(void 0, s, e);
  } finally {
    ks = !1;
  }
}
const Oe = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Rr(t) {
  try {
    for (xt = 0; xt < ct.length; xt++) {
      const e = ct[xt];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), je(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; xt < ct.length; xt++) {
      const e = ct[xt];
      e && (e.flags &= -2);
    }
    xt = -1, ct.length = 0, Or(), Qe = null, (ct.length || $t.length) && Rr();
  }
}
let Ot = null, Ir = null;
function Ze(t) {
  const e = Ot;
  return Ot = t, Ir = t && t.type.__scopeId || null, e;
}
function ho(t, e = Ot, s) {
  if (!e || t._n)
    return t;
  const n = (...r) => {
    n._d && Rn(-1);
    const i = Ze(e), o = oe.length;
    let l;
    try {
      l = t(...r);
    } finally {
      for (let a = oe.length; a > o; a--) Xr();
      Ze(i), n._d && Rn(1);
    }
    return l;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Xt(t, e, s, n) {
  let r = t;
  if (n === "beforeMount")
    t._mount = t;
  else if (n === "beforeUpdate") {
    const l = e && e._mount;
    l && (l._latest = t, t._mount = l);
  } else if (n === "mounted") {
    const l = t._latest;
    t._mount = t._latest = void 0, l && (r = l, l._mount = void 0);
  }
  const i = r.dirs, o = e && e.dirs;
  for (let l = 0; l < i.length; l++) {
    let a = i[l];
    o ? a.oldValue = o[l].value : n === "mounted" && a.oldValue !== void 0 && (a = nt({}, a, { oldValue: void 0 }));
    let f = a.dir[n];
    f && (Ut(), Nt(f, s, 8, [
      t.el,
      a,
      r,
      e
    ]), zt());
  }
}
function _o(t, e) {
  if (ht) {
    let s = ht.provides;
    const n = ht.parent && ht.parent.provides;
    n === s && (s = ht.provides = Object.create(n)), s[t] = e;
  }
}
function Nr(t, e, s = !1) {
  const n = ni();
  if (n || pe) {
    let r = pe ? pe._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (r && t in r)
      return r[t];
    if (arguments.length > 1)
      return s && G(e) ? e.call(n && n.proxy) : e;
  }
}
const mo = /* @__PURE__ */ Symbol.for("v-scx"), go = () => Nr(mo);
function le(t, e, s) {
  return vo(t, e, s);
}
function vo(t, e, s = Q) {
  const { immediate: n, deep: r, flush: i, once: o } = s, l = nt({}, s), a = e && n || !e && i !== "post";
  let f;
  if (Ne) {
    if (i === "sync") {
      const y = go();
      f = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!a) {
      const y = () => {
      };
      return y.stop = re, y.resume = re, y.pause = re, y;
    }
  }
  const u = ht;
  l.call = (y, E, M) => Nt(y, u, E, M);
  let p = !1;
  i === "post" ? l.scheduler = (y) => {
    y.i = u, at(y, u && u.suspense);
  } : i !== "sync" && (p = !0, l.scheduler = (y, E) => {
    E ? y() : Xs(y);
  }), l.augmentJob = (y) => {
    e && (y.flags |= 4), p && (y.flags |= 2, u && (y.id = u.uid, y.i = u));
  };
  const v = ao(t, e, l);
  return Ne && (f ? f.push(v) : a && v()), v;
}
const yo = /* @__PURE__ */ Symbol("_vte"), us = (t) => t.__isTeleport, Ss = /* @__PURE__ */ Symbol("_leaveCb");
function xo(t) {
  let e = t[0];
  if (t.length > 1) {
    for (const s of t)
      if (s.type !== bt) {
        e = s;
        break;
      }
  }
  return e;
}
function Fr(t) {
  if (!Dr(t))
    return us(t.type) && t.children ? xo(t.children) : t;
  if (t.component)
    return t.component.subTree;
  const { shapeFlag: e, children: s } = t;
  if (s) {
    if (e & 16)
      return s[0];
    if (e & 32 && G(s.default))
      return s.default();
  }
}
function Se(t, e) {
  if (t.shapeFlag & 6 && t.component) {
    t.transition = e;
    const s = t.component.subTree;
    Se(
      us(s.type) && Fr(s) || s,
      e
    );
  } else if (t.shapeFlag & 128) {
    const s = t.suspense;
    if (s) {
      const n = s.isHydrating ? s.pendingBranch : s.activeBranch;
      n && Se(n, e.clone(n));
    } else
      t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback);
  } else if (t.transition = e, t.type === ot && F(t.children)) {
    const s = Wr(t.children, !1);
    s && Se(s, e);
  }
}
function js(t) {
  if (t.component)
    return js(t.component.subTree);
  if (t.type === ot) {
    const e = F(t.children) && Wr(t.children, !1);
    return e ? js(e) : void 0;
  }
  if (t.type !== bt)
    return t;
}
// @__NO_SIDE_EFFECTS__
function lt(t, e) {
  return G(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    nt({ name: t.name }, e, { setup: t })
  ) : t;
}
function wo(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Mn(t, e) {
  let s;
  return !!((s = Object.getOwnPropertyDescriptor(t, e)) && !s.configurable);
}
const Xe = /* @__PURE__ */ new WeakMap();
function Ce(t, e, s, n, r = !1) {
  if (F(t)) {
    t.forEach(
      (M, D) => Ce(
        M,
        e && (F(e) ? e[D] : e),
        s,
        n,
        r
      )
    );
    return;
  }
  if (Te(n) && !r) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Ce(t, e, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? ln(n.component) : n.el, o = r ? null : i, { i: l, r: a } = t, f = e && e.r, u = l.refs === Q ? l.refs = {} : l.refs, p = l.setupState, v = /* @__PURE__ */ V(p), y = p === Q ? sr : (M) => Mn(u, M) ? !1 : B(v, M), E = (M, D) => !(D && Mn(u, D));
  if (f != null && f !== a) {
    if (An(e), Z(f))
      u[f] = null, y(f) && (p[f] = null);
    else if (/* @__PURE__ */ ut(f)) {
      const M = e;
      E(f, M.k) && (f.value = null), M.k && (u[M.k] = null);
    }
  }
  if (G(a))
    je(a, l, 12, [o, u]);
  else {
    const M = Z(a), D = /* @__PURE__ */ ut(a);
    if (M || D) {
      const N = () => {
        if (t.f) {
          const P = M ? y(a) ? p[a] : u[a] : E() || !t.k ? a.value : u[t.k];
          if (r)
            F(P) && nr(P, i);
          else if (F(P))
            P.includes(i) || P.push(i);
          else if (M)
            u[a] = [i], y(a) && (p[a] = u[a]);
          else {
            const K = [i];
            E(a, t.k) && (a.value = K), t.k && (u[t.k] = K);
          }
        } else M ? (u[a] = o, y(a) && (p[a] = o)) : D && (E(a, t.k) && (a.value = o), t.k && (u[t.k] = o));
      };
      if (o) {
        const P = () => {
          N(), Xe.delete(t);
        };
        P.id = -1, Xe.set(t, P), at(P, s);
      } else
        An(t), N();
    }
  }
}
function An(t) {
  const e = Xe.get(t);
  e && (e.flags |= 8, Xe.delete(t));
}
os().requestIdleCallback;
os().cancelIdleCallback;
const Te = (t) => !!t.type.__asyncLoader, Dr = (t) => t.type.__isKeepAlive;
function bo(t, e, s = ht, n = !1) {
  if (s) {
    const r = s[t] || (s[t] = []), i = e.__weh || (e.__weh = (...o) => {
      Ut();
      const l = on(s), a = Nt(e, s, t, o);
      return l(), zt(), a;
    });
    return n ? r.unshift(i) : r.push(i), i;
  }
}
const jr = (t) => (e, s = ht) => {
  (!Ne || t === "sp") && bo(t, (...n) => e(...n), s);
}, Hr = jr("m"), ko = jr("um"), So = /* @__PURE__ */ Symbol.for("v-ndc");
function tn(t, e, s, n) {
  let r;
  const i = s, o = F(t);
  if (o || Z(t)) {
    const l = o && /* @__PURE__ */ Qt(t);
    let a = !1, f = !1;
    l && (a = !/* @__PURE__ */ gt(t), f = /* @__PURE__ */ It(t), t = as(t)), r = new Array(t.length);
    for (let u = 0, p = t.length; u < p; u++)
      r[u] = e(
        a ? f ? Zt(vt(t[u])) : vt(t[u]) : t[u],
        u,
        void 0,
        i
      );
  } else if (typeof t == "number")
    if (!Number.isInteger(t) || t < 0)
      r = [];
    else {
      r = new Array(t);
      for (let l = 0; l < t; l++)
        r[l] = e(l + 1, l, void 0, i);
    }
  else if (J(t))
    if (t[Symbol.iterator])
      r = Array.from(
        t,
        (l, a) => e(l, a, void 0, i)
      );
    else {
      const l = Object.keys(t);
      r = new Array(l.length);
      for (let a = 0, f = l.length; a < f; a++) {
        const u = l[a];
        r[a] = e(t[u], u, a, i);
      }
    }
  else
    r = [];
  return r;
}
const Hs = (t) => t ? ri(t) ? ln(t) : Hs(t.parent) : null, Me = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ nt(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Hs(t.parent),
    $root: (t) => Hs(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => t.type,
    $forceUpdate: (t) => t.f || (t.f = () => {
      Xs(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = $r.bind(t.proxy)),
    $watch: (t) => re
  })
), Cs = (t, e) => t !== Q && !t.__isScriptSetup && B(t, e), Co = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: s, setupState: n, data: r, props: i, accessCache: o, type: l, appContext: a } = t;
    if (e[0] !== "$") {
      const v = o[e];
      if (v !== void 0)
        switch (v) {
          case 1:
            return n[e];
          case 2:
            return r[e];
          case 4:
            return s[e];
          case 3:
            return i[e];
        }
      else {
        if (Cs(n, e))
          return o[e] = 1, n[e];
        if (B(i, e))
          return o[e] = 3, i[e];
        if (s !== Q && B(s, e))
          return o[e] = 4, s[e];
        o[e] = 0;
      }
    }
    const f = Me[e];
    let u, p;
    if (f)
      return e === "$attrs" && it(t.attrs, "get", ""), f(t);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[e])
    )
      return u;
    if (s !== Q && B(s, e))
      return o[e] = 4, s[e];
    if (
      // global properties
      p = a.config.globalProperties, B(p, e)
    )
      return p[e];
  },
  set({ _: t }, e, s) {
    const { data: n, setupState: r, ctx: i } = t;
    return Cs(r, e) ? (r[e] = s, !0) : B(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (i[e] = s, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: s, ctx: n, appContext: r, props: i, type: o }
  }, l) {
    let a;
    return !!(s[l] || Cs(e, l) || B(i, l) || B(n, l) || B(Me, l) || B(r.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(t, e, s) {
    return s.get != null ? t._.accessCache[e] = 0 : B(s, "value") && this.set(t, e, s.value, null), Reflect.defineProperty(t, e, s);
  }
};
function Lr() {
  return {
    app: null,
    config: {
      isNativeTag: sr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let To = 0;
function Mo(t, e) {
  return function(n, r = null) {
    G(n) || (n = nt({}, n)), r != null && !J(r) && (r = null);
    const i = Lr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = i.app = {
      _uid: To++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: il,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...p) {
        return o.has(u) || (u && G(u.install) ? (o.add(u), u.install(f, ...p)) : G(u) && (o.add(u), u(f, ...p))), f;
      },
      mixin(u) {
        return f;
      },
      component(u, p) {
        return p ? (i.components[u] = p, f) : i.components[u];
      },
      directive(u, p) {
        return p ? (i.directives[u] = p, f) : i.directives[u];
      },
      mount(u, p, v) {
        if (!a) {
          const y = f._ceVNode || L(n, r);
          return y.appContext = i, v === !0 ? v = "svg" : v === !1 && (v = void 0), t(y, u, v), a = !0, f._container = u, u.__vue_app__ = f, ln(y.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a && (Nt(
          l,
          f._instance,
          16
        ), t(null, f._container), delete f._container.__vue_app__);
      },
      provide(u, p) {
        return i.provides[u] = p, f;
      },
      runWithContext(u) {
        const p = pe;
        pe = f;
        try {
          return u();
        } finally {
          pe = p;
        }
      }
    };
    return f;
  };
}
let pe = null;
const Ao = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${dt(e)}Modifiers`] || t[`${mt(e)}Modifiers`];
function $o(t, e, ...s) {
  if (t.isUnmounted) return;
  const n = t.vnode.props || Q;
  let r = s;
  const i = e.startsWith("update:"), o = i && Ao(n, e.slice(7));
  o && (o.trim && (r = s.map((u) => Z(u) ? u.trim() : u)), o.number && (r = r.map(Ti)));
  let l, a = n[l = gs(e)] || // also try camelCase event handler (#2249)
  n[l = gs(dt(e))];
  !a && i && (a = n[l = gs(mt(e))]), a && Nt(
    a,
    t,
    6,
    r
  );
  const f = n[l + "Once"];
  if (f) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[l])
      return;
    t.emitted[l] = !0, Nt(
      f,
      t,
      6,
      r
    );
  }
}
function Eo(t, e, s = !1) {
  const n = e.emitsCache, r = n.get(t);
  if (r !== void 0)
    return r;
  const i = t.emits;
  let o = {};
  return i ? (F(i) ? i.forEach((l) => o[l] = null) : nt(o, i), J(t) && n.set(t, o), o) : (J(t) && n.set(t, null), null);
}
function ds(t, e) {
  return !t || !ss(e) ? !1 : (e = e.slice(2), e = e === "Once" ? e : e.replace(/Once$/, ""), B(t, e[0].toLowerCase() + e.slice(1)) || B(t, mt(e)) || B(t, e));
}
function $n(t) {
  const {
    type: e,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: a,
    render: f,
    renderCache: u,
    props: p,
    data: v,
    setupState: y,
    ctx: E,
    inheritAttrs: M
  } = t, D = Ze(t);
  let N, P;
  try {
    if (s.shapeFlag & 4) {
      const O = r || n, rt = O;
      N = Et(
        f.call(
          rt,
          O,
          u,
          p,
          y,
          v,
          E
        )
      ), P = l;
    } else {
      const O = e;
      N = Et(
        O.length > 1 ? O(
          p,
          { attrs: l, slots: o, emit: a }
        ) : O(
          p,
          null
        )
      ), P = e.props ? l : Po(l);
    }
  } catch (O) {
    oe.length = 0, fs(O, t, 1), N = L(bt);
  }
  let K = N;
  if (P && M !== !1) {
    const O = Object.keys(P), { shapeFlag: rt } = K;
    O.length && rt & 7 && (i && O.some(ns) && (P = Oo(
      P,
      i
    )), K = he(K, P, !1, !0));
  }
  if (s.dirs && (K = he(K, null, !1, !0), K.dirs = K.dirs ? K.dirs.concat(s.dirs) : s.dirs), s.transition) {
    const O = us(K.type) && Fr(K) || K;
    Se(O, s.transition);
  }
  return N = K, Ze(D), N;
}
function Wr(t, e = !0) {
  let s;
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (rn(r)) {
      if (r.type !== bt || r.children === "v-if") {
        if (s)
          return;
        s = r;
      }
    } else
      return;
  }
  return s;
}
const Po = (t) => {
  let e;
  for (const s in t)
    (s === "class" || s === "style" || ss(s)) && ((e || (e = {}))[s] = t[s]);
  return e;
}, Oo = (t, e) => {
  const s = {};
  for (const n in t)
    (!ns(n) || !(n.slice(9) in e)) && (s[n] = t[n]);
  return s;
};
function Ro(t, e, s) {
  const { props: n, children: r, component: i } = t, { props: o, children: l, patchFlag: a } = e, f = i.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (s && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return n ? En(n, o, f) : !!o;
    if (a & 8) {
      const u = e.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        const v = u[p];
        if (Vr(o, n, v) && !ds(f, v))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : n === o ? !1 : n ? o ? En(n, o, f) : !0 : !!o;
  return !1;
}
function En(t, e, s) {
  const n = Object.keys(e);
  if (n.length !== Object.keys(t).length)
    return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (!B(t, i) || Vr(e, t, i) && !ds(s, i))
      return !0;
  }
  return !1;
}
function Vr(t, e, s) {
  const n = t[s], r = e[s];
  return s === "style" && J(n) && J(r) ? !ls(n, r) : n !== r;
}
function Io({ vnode: t, parent: e, suspense: s }, n) {
  for (; e; ) {
    const r = e.subTree;
    if (r.suspense && r.suspense.activeBranch === t && (r.suspense.vnode.el = r.el = n, t = r), r === t)
      (t = e.vnode).el = n, e = e.parent;
    else
      break;
  }
  s && s.activeBranch === t && (s.vnode.el = n);
}
const Br = {}, Kr = () => Object.create(Br), Ur = (t) => Object.getPrototypeOf(t) === Br;
function No(t, e, s, n = !1) {
  const r = {}, i = Kr();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), zr(t, e, r, i);
  for (const o in t.propsOptions[0])
    o in r || (r[o] = void 0);
  s ? t.props = n ? r : /* @__PURE__ */ Xi(r) : t.type.props ? t.props = r : t.props = i, t.attrs = i;
}
function Fo(t, e, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = t, l = /* @__PURE__ */ V(r), [a] = t.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = t.vnode.dynamicProps;
      for (let p = 0; p < u.length; p++) {
        let v = u[p];
        if (ds(t.emitsOptions, v))
          continue;
        const y = e[v];
        if (a)
          if (B(i, v))
            y !== i[v] && (i[v] = y, f = !0);
          else {
            const E = dt(v);
            r[E] = Ls(
              a,
              l,
              E,
              y,
              t,
              !1
            );
          }
        else
          y !== i[v] && (i[v] = y, f = !0);
      }
    }
  } else {
    zr(t, e, r, i) && (f = !0);
    let u;
    for (const p in l)
      (!e || // for camelCase
      !B(e, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = mt(p)) === p || !B(e, u))) && (a ? s && // for camelCase
      (s[p] !== void 0 || // for kebab-case
      s[u] !== void 0) && (r[p] = Ls(
        a,
        l,
        p,
        void 0,
        t,
        !0
      )) : delete r[p]);
    if (i !== l)
      for (const p in i)
        (!e || !B(e, p)) && (delete i[p], f = !0);
  }
  f && Vt(t.attrs, "set", "");
}
function zr(t, e, s, n) {
  const [r, i] = t.propsOptions;
  let o = !1, l;
  if (e)
    for (let a in e) {
      if (we(a))
        continue;
      const f = e[a];
      let u;
      r && B(r, u = dt(a)) ? !i || !i.includes(u) ? s[u] = f : (l || (l = {}))[u] = f : ds(t.emitsOptions, a) || (!(a in n) || f !== n[a]) && (n[a] = f, o = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ V(s), f = l || Q;
    for (let u = 0; u < i.length; u++) {
      const p = i[u];
      s[p] = Ls(
        r,
        a,
        p,
        f[p],
        t,
        !B(f, p)
      );
    }
  }
  return o;
}
function Ls(t, e, s, n, r, i) {
  const o = t[s];
  if (o != null) {
    const l = B(o, "default");
    if (l && n === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && G(a)) {
        const { propsDefaults: f } = r;
        if (s in f)
          n = f[s];
        else {
          const u = on(r);
          n = f[s] = a.call(
            null,
            e
          ), u();
        }
      } else
        n = a;
      r.ce && r.ce._setProp(s, n);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? n = !1 : o[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === mt(s)) && (n = !0));
  }
  return n;
}
function Do(t, e, s = !1) {
  const n = e.propsCache, r = n.get(t);
  if (r)
    return r;
  const i = t.props, o = {}, l = [];
  if (!i)
    return J(t) && n.set(t, se), se;
  if (F(i))
    for (let f = 0; f < i.length; f++) {
      const u = dt(i[f]);
      Pn(u) && (o[u] = Q);
    }
  else if (i)
    for (const f in i) {
      const u = dt(f);
      if (Pn(u)) {
        const p = i[f], v = o[u] = F(p) || G(p) ? { type: p } : nt({}, p), y = v.type;
        let E = !1, M = !0;
        if (F(y))
          for (let D = 0; D < y.length; ++D) {
            const N = y[D], P = G(N) && N.name;
            if (P === "Boolean") {
              E = !0;
              break;
            } else P === "String" && (M = !1);
          }
        else
          E = G(y) && y.name === "Boolean";
        v[
          0
          /* shouldCast */
        ] = E, v[
          1
          /* shouldCastTrue */
        ] = M, (E || B(v, "default")) && l.push(u);
      }
    }
  const a = [o, l];
  return J(t) && n.set(t, a), a;
}
function Pn(t) {
  return t[0] !== "$" && !we(t);
}
const en = (t) => t === "_" || t === "_ctx" || t === "$stable", sn = (t) => F(t) ? t.map(Et) : [Et(t)], jo = (t, e, s) => {
  if (e._n)
    return e;
  const n = ho((...r) => sn(e(...r)), s);
  return n._c = !1, n;
}, qr = (t, e, s) => {
  const n = t._ctx;
  for (const r in t) {
    if (en(r)) continue;
    const i = t[r];
    if (G(i))
      e[r] = jo(r, i, n);
    else if (i != null) {
      const o = sn(i);
      e[r] = () => o;
    }
  }
}, Gr = (t, e) => {
  const s = sn(e);
  t.slots.default = () => s;
}, Yr = (t, e, s) => {
  for (const n in e)
    (s || !en(n)) && (t[n] = e[n]);
}, Ho = (t, e, s) => {
  const n = t.slots = Kr();
  if (t.vnode.shapeFlag & 32) {
    const r = e._;
    r ? (Yr(n, e, s), s && lr(n, "_", r, !0)) : qr(e, n);
  } else e && Gr(t, e);
}, Lo = (t, e, s) => {
  const { vnode: n, slots: r } = t;
  let i = !0, o = Q;
  if (n.shapeFlag & 32) {
    const l = e._;
    l ? s && l === 1 ? i = !1 : Yr(r, e, s) : (i = !e.$stable, qr(e, r)), o = e;
  } else e && (Gr(t, e), o = { default: 1 });
  if (i)
    for (const l in r)
      !en(l) && o[l] == null && delete r[l];
}, at = zo;
function Wo(t) {
  return Vo(t);
}
function Vo(t, e) {
  const s = os();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: a,
    setText: f,
    setElementText: u,
    parentNode: p,
    nextSibling: v,
    setScopeId: y = re,
    insertStaticContent: E
  } = t, M = (c, d, h, x = null, _ = null, g = null, S = void 0, k = null, b = !!d.dynamicChildren) => {
    if (c === d)
      return;
    c && !ve(c, d) && (x = Le(c), Dt(c, _, g, !0), c = null), d.patchFlag === -2 && (b = !1, d.dynamicChildren = null), d.dynamicChildren && c && c.dynamicChildren && c.dynamicChildren.hasOnce && (d.dynamicChildren === se && (d.dynamicChildren = []), d.dynamicChildren.hasOnce = !0);
    const { type: m, ref: A, shapeFlag: C } = d;
    switch (m) {
      case ps:
        D(c, d, h, x);
        break;
      case bt:
        N(c, d, h, x);
        break;
      case ze:
        c == null && P(d, h, x, S);
        break;
      case ot:
        hi(
          c,
          d,
          h,
          x,
          _,
          g,
          S,
          k,
          b
        );
        break;
      default:
        C & 1 ? rt(
          c,
          d,
          h,
          x,
          _,
          g,
          S,
          k,
          b
        ) : C & 6 ? _i(
          c,
          d,
          h,
          x,
          _,
          g,
          S,
          k,
          b
        ) : (C & 64 || C & 128) && m.process(
          c,
          d,
          h,
          x,
          _,
          g,
          S,
          k,
          b,
          me
        );
    }
    A != null && _ ? Ce(A, c && c.ref, g, d || c, !d) : A == null && c && c.ref != null && Ce(c.ref, null, g, c, !0);
  }, D = (c, d, h, x) => {
    if (c == null)
      n(
        d.el = l(d.children),
        h,
        x
      );
    else {
      const _ = d.el = c.el;
      d.children !== c.children && f(_, d.children);
    }
  }, N = (c, d, h, x) => {
    c == null ? n(
      d.el = a(d.children || ""),
      h,
      x
    ) : d.el = c.el;
  }, P = (c, d, h, x) => {
    [c.el, c.anchor] = E(
      c.children,
      d,
      h,
      x,
      c.el,
      c.anchor
    );
  }, K = ({ el: c, anchor: d }, h, x) => {
    let _;
    for (; c && c !== d; )
      _ = v(c), n(c, h, x), c = _;
    n(d, h, x);
  }, O = ({ el: c, anchor: d }) => {
    let h;
    for (; c && c !== d; )
      h = v(c), r(c), c = h;
    r(d);
  }, rt = (c, d, h, x, _, g, S, k, b) => {
    if (d.type === "svg" ? S = "svg" : d.type === "math" && (S = "mathml"), c == null)
      ae(
        d,
        h,
        x,
        _,
        g,
        S,
        k,
        b
      );
    else {
      const m = c.el && c.el._isVueCE ? c.el : null;
      try {
        m && m._beginPatch(), pi(
          c,
          d,
          _,
          g,
          S,
          k,
          b
        );
      } finally {
        m && m._endPatch();
      }
    }
  }, ae = (c, d, h, x, _, g, S, k) => {
    let b, m;
    const { props: A, shapeFlag: C, transition: $, dirs: R } = c;
    if (b = c.el = o(
      c.type,
      g,
      A && A.is,
      A
    ), C & 8 ? u(b, c.children) : C & 16 && ce(
      c.children,
      b,
      null,
      x,
      _,
      Ts(c, g),
      S,
      k
    ), R && Xt(c, null, x, "created"), qt(b, c, c.scopeId, S, x), A) {
      for (const q in A)
        q !== "value" && !we(q) && i(b, q, null, A[q], g, x);
      "value" in A && i(b, "value", null, A.value, g), (m = A.onVnodeBeforeMount) && Mt(m, x, c);
    }
    R && Xt(c, null, x, "beforeMount");
    const j = Bo(_, $);
    j ? $.beforeEnter(b) : $ && !$.persisted && (b[Uo] = !0), n(b, d, h), ((m = A && A.onVnodeMounted) || j || R) && at(() => {
      try {
        m && Mt(m, x, c), j && $.enter(b), R && Xt(c, null, x, "mounted");
      } finally {
      }
    }, _);
  }, qt = (c, d, h, x, _) => {
    if (h && y(c, h), x)
      for (let g = 0; g < x.length; g++)
        y(c, x[g]);
    if (_) {
      let g = _.subTree;
      if (d === g || Zr(g.type) && (g.ssContent === d || g.ssFallback === d)) {
        const S = _.vnode;
        qt(
          c,
          S,
          S.scopeId,
          S.slotScopeIds,
          _.parent
        );
      }
    }
  }, ce = (c, d, h, x, _, g, S, k, b = 0) => {
    for (let m = b; m < c.length; m++) {
      const A = c[m] = k ? Wt(c[m]) : Et(c[m]);
      M(
        null,
        A,
        d,
        h,
        x,
        _,
        g,
        S,
        k
      );
    }
  }, pi = (c, d, h, x, _, g, S) => {
    const k = d.el = c.el;
    let { patchFlag: b, dynamicChildren: m, dirs: A } = d;
    b |= c.patchFlag & 16;
    const C = c.props || Q, $ = d.props || Q;
    let R;
    if (h && te(h, !1), (R = $.onVnodeBeforeUpdate) && Mt(R, h, d, c), A && Xt(d, c, h, "beforeUpdate"), h && te(h, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    m && (!c.dynamicChildren || c.dynamicChildren.length !== m.length) && (b = 0, S = !1, m = null), (C.innerHTML && $.innerHTML == null || C.textContent && $.textContent == null) && u(k, ""), m ? hs(
      c.dynamicChildren,
      m,
      k,
      h,
      x,
      Ts(d, _),
      g
    ) : S || ms(
      c,
      d,
      k,
      null,
      h,
      x,
      Ts(d, _),
      g,
      !1
    ), b > 0) {
      if (b & 16)
        cn(k, C, $, h, _);
      else if (b & 2 && C.class !== $.class && i(k, "class", null, $.class, _), b & 4 && i(k, "style", C.style, $.style, _), b & 8) {
        const j = d.dynamicProps;
        for (let q = 0; q < j.length; q++) {
          const U = j[q], X = C[U], tt = $[U];
          (tt !== X || U === "value") && i(k, U, X, tt, _, h);
        }
      }
      b & 1 && c.children !== d.children && u(k, d.children);
    } else !S && m == null && cn(k, C, $, h, _);
    ((R = $.onVnodeUpdated) || A) && at(() => {
      R && Mt(R, h, d, c), A && Xt(d, c, h, "updated");
    }, x);
  }, hs = (c, d, h, x, _, g, S) => {
    for (let k = 0; k < d.length; k++) {
      const b = c[k], m = d[k], A = b.el || Ae(b), C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        A && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (b.type === ot || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ve(b, m) || // - In the case of a component, it could contain anything.
        b.shapeFlag & 198) ? p(A) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      M(
        b,
        m,
        C,
        null,
        x,
        _,
        g,
        S,
        !0
      );
    }
  }, cn = (c, d, h, x, _) => {
    if (d !== h) {
      if (d !== Q)
        for (const g in d)
          !we(g) && !(g in h) && i(
            c,
            g,
            d[g],
            null,
            _,
            x
          );
      for (const g in h) {
        if (we(g)) continue;
        const S = h[g], k = d[g];
        S !== k && g !== "value" && i(c, g, k, S, _, x);
      }
      "value" in h && i(c, "value", d.value, h.value, _);
    }
  }, hi = (c, d, h, x, _, g, S, k, b) => {
    const m = d.el = c ? c.el : l(""), A = d.anchor = c ? c.anchor : l("");
    let { patchFlag: C, dynamicChildren: $, slotScopeIds: R } = d;
    R && (k = k ? k.concat(R) : R), c == null ? (n(m, h, x), n(A, h, x), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      h,
      A,
      _,
      g,
      S,
      k,
      b
    )) : C > 0 && C & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === $.length ? (hs(
      c.dynamicChildren,
      $,
      h,
      _,
      g,
      S,
      k
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || _ && d === _.subTree) && Jr(
      c,
      d,
      !0
      /* shallow */
    )) : ms(
      c,
      d,
      h,
      A,
      _,
      g,
      S,
      k,
      b
    );
  }, _i = (c, d, h, x, _, g, S, k, b) => {
    d.slotScopeIds = k, c == null ? d.shapeFlag & 512 ? _.ctx.activate(
      d,
      h,
      x,
      S,
      b
    ) : fn(
      d,
      h,
      x,
      _,
      g,
      S,
      b
    ) : mi(c, d, b);
  }, fn = (c, d, h, x, _, g, S) => {
    const k = c.component = Xo(
      c,
      x,
      _
    );
    if (Dr(c) && (k.ctx.renderer = me), tl(k, !1, S), k.asyncDep) {
      if (_ && _.registerDep(
        k,
        un,
        S,
        g
      ), !c.el) {
        const b = k.subTree = L(bt);
        N(null, b, d, h), c.placeholder = b.el;
      }
    } else
      un(
        k,
        c,
        d,
        h,
        _,
        g,
        S
      );
  }, mi = (c, d, h) => {
    const x = d.component = c.component;
    if (Ro(c, d, h))
      if (x.asyncDep && !x.asyncResolved) {
        d.el = c.el, d.placeholder = c.placeholder, _s(x, d, h);
        return;
      } else
        x.next = d, x.update();
    else
      d.el = c.el, d.placeholder = c.placeholder, x.vnode = d;
  }, un = (c, d, h, x, _, g, S) => {
    const k = () => {
      if (c.isMounted) {
        let { next: C, bu: $, u: R, parent: j, vnode: q } = c;
        {
          const Ct = Qr(c);
          if (Ct) {
            C && (C.el = q.el, _s(c, C, S)), Ct.asyncDep.then(() => {
              const jt = () => {
                c.job.flags & 8 || (_ && _.pendingBranch ? at(jt, _) : m());
              };
              jt.flags = 48, at(jt, _);
            });
            return;
          }
        }
        let U = C, X;
        te(c, !1), C ? (C.el = q.el, _s(c, C, S)) : C = q, $ && vs($), (X = C.props && C.props.onVnodeBeforeUpdate) && Mt(X, j, C, q), te(c, !0);
        const tt = $n(c), yt = c.subTree;
        c.subTree = tt, M(
          yt,
          tt,
          // parent may have changed if it's in a teleport. a root that is a
          // pending async component only has its placeholder comment
          p(
            yt.el || Ae(yt)
          ),
          // anchor may have changed if it's in a fragment
          Le(yt),
          c,
          _,
          g
        ), C.el = tt.el, U === null && Io(c, tt.el), R && at(R, _), (X = C.props && C.props.onVnodeUpdated) && at(
          () => Mt(X, j, C, q),
          _
        );
      } else {
        let C;
        const { el: $, props: R } = d, { bm: j, m: q, parent: U, root: X, type: tt } = c, yt = Te(d);
        te(c, !1), j && vs(j), !yt && (C = R && R.onVnodeBeforeMount) && Mt(C, U, d), te(c, !0);
        {
          X.ce && X.ce._hasShadowRoot() && X.ce._injectChildStyle(
            tt,
            c.parent ? c.parent.type : void 0
          );
          const Ct = c.subTree = $n(c);
          M(
            null,
            Ct,
            h,
            x,
            c,
            _,
            g
          ), d.el = Ct.el;
        }
        if (q && at(q, _), !yt && (C = R && R.onVnodeMounted)) {
          const Ct = d;
          at(
            () => Mt(C, U, Ct),
            _
          );
        }
        (d.shapeFlag & 256 || U && Te(U.vnode) && U.vnode.shapeFlag & 256) && c.a && at(c.a, _), c.isMounted = !0, d = h = x = null;
      }
    };
    c.scope.on();
    const b = c.effect = new ur(k);
    c.scope.off();
    const m = c.update = b.run.bind(b), A = c.job = b.runIfDirty.bind(b);
    A.i = c, A.id = c.uid, b.scheduler = () => Xs(A), te(c, !0), m();
  }, _s = (c, d, h) => {
    d.component = c;
    const x = c.vnode.props;
    c.vnode = d, c.next = null, Fo(c, d.props, x, h), Lo(c, d.children, h), Ut(), Pr(c), zt();
  }, ms = (c, d, h, x, _, g, S, k, b = !1) => {
    const m = c && c.children, A = c ? c.shapeFlag : 0, C = d.children, { patchFlag: $, shapeFlag: R } = d;
    if ($ > 0) {
      if ($ & 128) {
        dn(
          m,
          C,
          h,
          x,
          _,
          g,
          S,
          k,
          b
        );
        return;
      } else if ($ & 256) {
        gi(
          m,
          C,
          h,
          x,
          _,
          g,
          S,
          k,
          b
        );
        return;
      }
    }
    R & 8 ? (A & 16 && _e(m, _, g), C !== m && u(h, C)) : A & 16 ? R & 16 ? dn(
      m,
      C,
      h,
      x,
      _,
      g,
      S,
      k,
      b
    ) : _e(m, _, g, !0) : (A & 8 && u(h, ""), R & 16 && ce(
      C,
      h,
      x,
      _,
      g,
      S,
      k,
      b
    ));
  }, gi = (c, d, h, x, _, g, S, k, b) => {
    c = c || se, d = d || se;
    const m = c.length, A = d.length, C = Math.min(m, A);
    let $;
    for ($ = 0; $ < C; $++) {
      const R = d[$] = b ? Wt(d[$]) : Et(d[$]);
      M(
        c[$],
        R,
        h,
        null,
        _,
        g,
        S,
        k,
        b
      );
    }
    m > A ? _e(
      c,
      _,
      g,
      !0,
      !1,
      C
    ) : ce(
      d,
      h,
      x,
      _,
      g,
      S,
      k,
      b,
      C
    );
  }, dn = (c, d, h, x, _, g, S, k, b) => {
    let m = 0;
    const A = d.length;
    let C = c.length - 1, $ = A - 1;
    for (; m <= C && m <= $; ) {
      const R = c[m], j = d[m] = b ? Wt(d[m]) : Et(d[m]);
      if (ve(R, j))
        M(
          R,
          j,
          h,
          null,
          _,
          g,
          S,
          k,
          b
        );
      else
        break;
      m++;
    }
    for (; m <= C && m <= $; ) {
      const R = c[C], j = d[$] = b ? Wt(d[$]) : Et(d[$]);
      if (ve(R, j))
        M(
          R,
          j,
          h,
          null,
          _,
          g,
          S,
          k,
          b
        );
      else
        break;
      C--, $--;
    }
    if (m > C) {
      if (m <= $) {
        const R = $ + 1, j = R < A ? d[R].el : x;
        for (; m <= $; )
          M(
            null,
            d[m] = b ? Wt(d[m]) : Et(d[m]),
            h,
            j,
            _,
            g,
            S,
            k,
            b
          ), m++;
      }
    } else if (m > $)
      for (; m <= C; )
        Dt(c[m], _, g, !0), m++;
    else {
      const R = m, j = m, q = /* @__PURE__ */ new Map();
      for (m = j; m <= $; m++) {
        const pt = d[m] = b ? Wt(d[m]) : Et(d[m]);
        pt.key != null && q.set(pt.key, m);
      }
      let U, X = 0;
      const tt = $ - j + 1;
      let yt = !1, Ct = 0;
      const jt = new Array(tt);
      for (m = 0; m < tt; m++) jt[m] = 0;
      for (m = R; m <= C; m++) {
        const pt = c[m];
        if (X >= tt) {
          Dt(pt, _, g, !0);
          continue;
        }
        let Tt;
        if (pt.key != null)
          Tt = q.get(pt.key);
        else
          for (U = j; U <= $; U++)
            if (jt[U - j] === 0 && ve(pt, d[U])) {
              Tt = U;
              break;
            }
        Tt === void 0 ? Dt(pt, _, g, !0) : (jt[Tt - j] = m + 1, Tt >= Ct ? Ct = Tt : yt = !0, M(
          pt,
          d[Tt],
          h,
          null,
          _,
          g,
          S,
          k,
          b
        ), X++);
      }
      const mn = yt ? Ko(jt) : se;
      for (U = mn.length - 1, m = tt - 1; m >= 0; m--) {
        const pt = j + m, Tt = d[pt], gn = d[pt + 1], vn = pt + 1 < A ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          gn.el || Ae(gn)
        ) : x;
        jt[m] === 0 ? M(
          null,
          Tt,
          h,
          vn,
          _,
          g,
          S,
          k,
          b
        ) : yt && (U < 0 || m !== mn[U] ? He(Tt, h, vn, 2) : U--);
      }
    }
  }, He = (c, d, h, x, _ = null) => {
    const { el: g, type: S, transition: k, children: b, shapeFlag: m } = c;
    if (m & 6) {
      He(c.component.subTree, d, h, x);
      return;
    }
    if (m & 128) {
      c.suspense.move(d, h, x);
      return;
    }
    if (m & 64) {
      S.move(c, d, h, me);
      return;
    }
    if (S === ot) {
      n(g, d, h);
      for (let C = 0; C < b.length; C++)
        He(b[C], d, h, x);
      n(c.anchor, d, h);
      return;
    }
    if (S === ze) {
      K(c, d, h);
      return;
    }
    if (x !== 2 && m & 1 && k)
      if (x === 0)
        k.persisted && !g[Ss] ? n(g, d, h) : (k.beforeEnter(g), n(g, d, h), at(() => k.enter(g), _));
      else {
        const { leave: C, delayLeave: $, afterLeave: R } = k, j = () => {
          c.ctx.isUnmounted ? r(g) : n(g, d, h);
        }, q = () => {
          const U = g._isLeaving || !!g[Ss];
          g._isLeaving && g[Ss](
            !0
            /* cancelled */
          ), k.persisted && !U ? j() : C(g, () => {
            j(), R && R();
          });
        };
        $ ? $(g, j, q) : q();
      }
    else
      n(g, d, h);
  }, Dt = (c, d, h, x = !1, _ = !1) => {
    const {
      type: g,
      props: S,
      ref: k,
      children: b,
      dynamicChildren: m,
      shapeFlag: A,
      patchFlag: C,
      dirs: $,
      cacheIndex: R,
      memo: j
    } = c;
    if ((C === -2 || m && m.hasOnce) && (_ = !1), k != null && (Ut(), Ce(k, null, h, c, !0), zt()), R != null && (!c.ctx || c.ctx === d) && (d.renderCache[R] = void 0), A & 256 && d.ctx.deactivate(c))
      return;
    const q = A & 1 && $, U = !Te(c);
    let X;
    if (U && (X = S && S.onVnodeBeforeUnmount) && Mt(X, d, c), A & 6)
      vi(c.component, h, x);
    else {
      if (A & 128) {
        c.suspense.unmount(h, x);
        return;
      }
      q && Xt(c, null, d, "beforeUnmount"), A & 64 ? c.type.remove(
        c,
        d,
        h,
        me,
        x
      ) : m && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !m.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (g !== ot || C > 0 && C & 64) ? _e(
        m,
        d,
        h,
        !1,
        !0
      ) : (g === ot && C & 384 || !_ && A & 16) && _e(b, d, h), x && pn(c);
    }
    const tt = j != null && R == null;
    (U && (X = S && S.onVnodeUnmounted) || q || tt) && at(() => {
      X && Mt(X, d, c), q && Xt(c, null, d, "unmounted"), tt && (c.el = null);
    }, h);
  }, pn = (c) => {
    const { type: d, el: h, anchor: x, transition: _ } = c, g = d === ot;
    if (g && !_) {
      hn(h, x);
      return;
    }
    if (d === ze) {
      O(c), _ && !_.persisted && _.afterLeave && _.afterLeave();
      return;
    }
    const S = g ? js(c) : c, k = () => {
      g ? p(h) && hn(h, x) : r(h), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (S && S.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: b, delayLeave: m } = _, A = S.el, C = () => b(A, k);
      m ? m(A, k, C) : C();
    } else
      k();
  }, hn = (c, d) => {
    let h;
    for (; c !== d; )
      h = v(c), r(c), c = h;
    r(d);
  }, vi = (c, d, h) => {
    const { bum: x, scope: _, job: g, subTree: S, um: k, m: b, a: m } = c;
    On(b), On(m), x && vs(x), _.stop(), g ? (g.flags |= 8, Dt(S, c, d, h)) : S && (S.transition = c.vnode.transition, Dt(S, c, d, h)), k && at(k, d);
    const A = () => {
      c.isUnmounted = !0;
    };
    A.flags = 16, at(A, d);
  }, _e = (c, d, h, x = !1, _ = !1, g = 0) => {
    for (let S = g; S < c.length; S++)
      Dt(c[S], d, h, x, _);
  }, Le = (c) => {
    if (c.shapeFlag & 6)
      return Le(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const d = v(c.anchor || c.el), h = d && d[yo];
    return h ? v(h) : d;
  }, _n = (c, d, h) => {
    const x = c && d._vnode ? void 0 : c && c.component ? c.component.uid : Zo();
    po(() => {
      c == null ? d._vnode && Dt(d._vnode, null, null, !0) : M(
        d._vnode || null,
        c,
        d,
        null,
        null,
        null,
        h
      ), d._vnode = c;
    }, x);
  }, me = {
    p: M,
    um: Dt,
    m: He,
    r: pn,
    mt: fn,
    mc: ce,
    pc: ms,
    pbc: hs,
    n: Le,
    o: t
  };
  return {
    render: _n,
    hydrate: void 0,
    createApp: Mo(_n)
  };
}
function Ts({ type: t, props: e }, s) {
  return s === "svg" && t === "foreignObject" || s === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : s;
}
function te({ effect: t, job: e }, s) {
  s ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function Bo(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Jr(t, e, s = !1) {
  const n = t.children, r = e.children;
  if (F(n) && F(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Wt(r[i]), l.el = o.el), !s && l.patchFlag !== -2 && Jr(o, l)), l.type === ps && (l.patchFlag === -1 && (l = r[i] = Wt(l)), l.el = o.el), l.type === bt && !l.el && (l.el = o.el);
    }
}
function Ko(t) {
  const e = t.slice(), s = [0];
  let n, r, i, o, l;
  const a = t.length;
  for (n = 0; n < a; n++) {
    const f = t[n];
    if (f !== 0) {
      if (r = s[s.length - 1], t[r] < f) {
        e[n] = r, s.push(n);
        continue;
      }
      for (i = 0, o = s.length - 1; i < o; )
        l = i + o >> 1, t[s[l]] < f ? i = l + 1 : o = l;
      f < t[s[i]] && (i > 0 && (e[n] = s[i - 1]), s[i] = n);
    }
  }
  for (i = s.length, o = s[i - 1]; i-- > 0; )
    s[i] = o, o = e[o];
  return s;
}
function Qr(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Qr(e);
}
function On(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function Ae(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  if (e)
    return Ae(e.subTree);
  const s = t.suspense;
  return s && s.activeBranch ? Ae(s.activeBranch) : null;
}
const Zr = (t) => t.__isSuspense, Uo = /* @__PURE__ */ Symbol("_deferredEnter");
function zo(t, e) {
  e && e.pendingBranch ? F(t) ? e.effects.push(...t) : e.effects.push(t) : uo(t);
}
const ot = /* @__PURE__ */ Symbol.for("v-fgt"), ps = /* @__PURE__ */ Symbol.for("v-txt"), bt = /* @__PURE__ */ Symbol.for("v-cmt"), ze = /* @__PURE__ */ Symbol.for("v-stc"), oe = [];
let _t = null;
function W(t = !1) {
  oe.push(_t = t ? null : []);
}
function Xr() {
  oe.pop(), _t = oe[oe.length - 1] || null;
}
let Re = 1;
function Rn(t, e = !1) {
  Re += t, t < 0 && _t && e && (_t.hasOnce = !0);
}
function ti(t) {
  return t.dynamicChildren = Re > 0 ? _t || se : null, Xr(), Re > 0 && _t && _t.push(t), t;
}
function z(t, e, s, n, r, i) {
  return ti(
    w(
      t,
      e,
      s,
      n,
      r,
      i,
      !0
    )
  );
}
function nn(t, e, s, n, r) {
  return ti(
    L(
      t,
      e,
      s,
      n,
      r,
      !0
    )
  );
}
function rn(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function ve(t, e) {
  return t.type === e.type && t.key === e.key;
}
const ei = ({ key: t }) => t ?? null, qe = ({
  ref: t,
  ref_key: e,
  ref_for: s
}) => (typeof t == "number" && (t = "" + t), t != null ? Z(t) || /* @__PURE__ */ ut(t) || G(t) ? { i: Ot, r: t, k: e, f: !!s } : t : null);
function w(t, e = null, s = null, n = 0, r = null, i = t === ot ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && ei(e),
    ref: e && qe(e),
    scopeId: Ir,
    slotScopeIds: null,
    children: s,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: n,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Ot
  };
  return l ? (ts(a, s), i & 128 && t.normalize(a)) : s && (a.shapeFlag |= Z(s) ? 8 : 16), Re > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  _t && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && _t.push(a), a;
}
const L = qo;
function qo(t, e = null, s = null, n = 0, r = null, i = !1) {
  if ((!t || t === So) && (t = bt), rn(t)) {
    const l = he(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return s && ts(l, s), Re > 0 && !i && _t && (l.shapeFlag & 6 ? _t[_t.indexOf(t)] = l : _t.push(l)), l.patchFlag = -2, l;
  }
  if (rl(t) && (t = t.__vccOpts), e) {
    e = Go(e);
    let { class: l, style: a } = e;
    l && !Z(l) && (e.class = ft(l)), J(a) && (/* @__PURE__ */ Zs(a) && !F(a) && (a = nt({}, a)), e.style = Bt(a));
  }
  const o = Z(t) ? 1 : Zr(t) ? 128 : us(t) ? 64 : J(t) ? 4 : G(t) ? 2 : 0;
  return w(
    t,
    e,
    s,
    n,
    r,
    o,
    i,
    !0
  );
}
function Go(t) {
  return t ? /* @__PURE__ */ Zs(t) ? nt({}, t) : Ur(t) ? nt({}, t[oi] || t) : t : null;
}
function he(t, e, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: a } = t, f = e ? Jo(r || {}, e) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: f,
    key: f && ei(f),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      s && i ? F(i) ? i.concat(qe(e)) : [i, qe(e)] : qe(e)
    ) : i,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: l,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== ot ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && he(t.ssContent),
    ssFallback: t.ssFallback && he(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce,
    cacheIndex: t.cacheIndex
  };
  return a && n && Se(
    u,
    a.clone(u)
  ), u;
}
function ne(t = " ", e = 0) {
  return L(ps, null, t, e);
}
function Yo(t, e) {
  const s = L(ze, null, t);
  return s.staticCount = e, s;
}
function Ft(t = "", e = !1) {
  return e ? (W(), nn(bt, null, t)) : L(bt, null, t);
}
function Et(t) {
  return t == null || typeof t == "boolean" ? L(bt) : F(t) ? L(
    ot,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : rn(t) ? Wt(t) : L(ps, null, String(t));
}
function Wt(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : he(t);
}
function ts(t, e) {
  let s = 0;
  const { shapeFlag: n } = t;
  if (e == null)
    e = null;
  else if (F(e))
    s = 16;
  else if (typeof e == "object")
    if (n & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), ts(t, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = e._;
      !r && !Ur(e) ? e._ctx = Ot : r === 3 && Ot && (Ot.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else if (G(e)) {
    if (n & 65) {
      ts(t, { default: e });
      return;
    }
    e = { default: e, _ctx: Ot }, s = 32;
  } else
    e = String(e), n & 64 ? (s = 16, e = [ne(e)]) : s = 8;
  t.children = e, t.shapeFlag |= s;
}
function Jo(...t) {
  const e = {};
  for (let s = 0; s < t.length; s++) {
    const n = t[s];
    for (const r in n)
      if (r === "class")
        e.class !== n.class && (e.class = ft([e.class, n.class]));
      else if (r === "style")
        e.style = Bt([e.style, n.style]);
      else if (ss(r)) {
        const i = e[r], o = n[r];
        o && i !== o && !(F(i) && i.includes(o)) ? e[r] = i ? [].concat(i, o) : o : o == null && i == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ns(r) && (e[r] = o);
      } else r !== "" && (e[r] = n[r]);
  }
  return e;
}
function Mt(t, e, s, n = null) {
  Nt(t, e, 7, [
    s,
    n
  ]);
}
const Qo = /* @__PURE__ */ Lr();
let si = 0;
function Zo() {
  return si;
}
function Xo(t, e, s) {
  const n = t.type, r = (e ? e.appContext : t.appContext) || Qo, i = {
    uid: si++,
    vnode: t,
    type: n,
    parent: e,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Ni(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(r.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Do(n, r),
    emitsOptions: Eo(n, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Q,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Q,
    data: Q,
    props: Q,
    attrs: Q,
    slots: Q,
    refs: Q,
    setupState: Q,
    setupContext: null,
    // suspense related
    suspense: s,
    suspenseId: s ? s.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = e ? e.root : i, i.emit = $o.bind(null, i), t.ce && t.ce(i), i;
}
let ht = null;
const ni = () => ht || Ot;
let es, Ie;
{
  const t = os(), e = (s, n) => {
    let r;
    return (r = t[s]) || (r = t[s] = []), r.push(n), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  es = e(
    "__VUE_INSTANCE_SETTERS__",
    (s) => ht = s
  ), Ie = e(
    "__VUE_SSR_SETTERS__",
    (s) => Ne = s
  );
}
const on = (t) => {
  const e = ht;
  return es(t), t.scope.on(), () => {
    t.scope.off(), es(e);
  };
}, In = () => {
  ht && ht.scope.off(), es(null);
};
function ri(t) {
  return t.vnode.shapeFlag & 4;
}
let Ne = !1;
function tl(t, e = !1, s = !1) {
  e && Ie(e);
  const { props: n, children: r } = t.vnode, i = ri(t);
  No(t, n, i, e), Ho(t, r, s || e);
  const o = i ? el(t, e) : void 0;
  return e && Ie(!1), o;
}
function el(t, e) {
  const s = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, Co);
  const { setup: n } = s;
  if (n) {
    Ut();
    const r = t.setupContext = n.length > 1 ? nl(t) : null, i = on(t), o = je(
      n,
      t,
      0,
      [
        t.props,
        r
      ]
    ), l = rr(o);
    if (zt(), i(), (l || t.sp) && !Te(t) && wo(t), l) {
      if (o.then(In, In), e)
        return o.then((a) => {
          Ie(!0);
          try {
            Nn(t, a, e);
          } finally {
            Ie(!1);
          }
        }).catch((a) => {
          fs(a, t, 0, void 0, !0), t.ssrRender = (f, u) => u("<!---->");
        });
      t.asyncDep = o;
    } else
      Nn(t, o);
  } else
    ii(t);
}
function Nn(t, e, s) {
  G(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : J(e) && (t.setupState = Mr(e)), ii(t);
}
function ii(t, e, s) {
  const n = t.type;
  t.render || (t.render = n.render || re);
}
const oi = /* @__PURE__ */ Symbol(), sl = {
  get(t, e) {
    return it(t, "get", ""), e === oi ? t : t[e];
  }
};
function nl(t) {
  const e = (s) => {
    t.exposed = s || {};
  };
  return {
    attrs: new Proxy(t.attrs, sl),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function ln(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Mr(to(t.exposed)), {
    get(e, s) {
      if (s in e)
        return e[s];
      if (s in Me)
        return Me[s](t);
    },
    has(e, s) {
      return s in e || s in Me;
    }
  })) : t.proxy;
}
function rl(t) {
  return G(t) && "__vccOpts" in t;
}
const H = (t, e) => /* @__PURE__ */ oo(t, e, Ne), il = "3.5.45";
/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ws;
const Fn = typeof window < "u" && window.trustedTypes;
if (Fn)
  try {
    Ws = /* @__PURE__ */ Fn.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const li = Ws ? (t) => Ws.createHTML(t) : (t) => t, ol = "http://www.w3.org/2000/svg", ll = "http://www.w3.org/1998/Math/MathML", Lt = typeof document < "u" ? document : null, Dn = Lt && /* @__PURE__ */ Lt.createElement("template"), al = {
  insert: (t, e, s) => {
    e.insertBefore(t, s || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, s, n) => {
    const r = e === "svg" ? Lt.createElementNS(ol, t) : e === "mathml" ? Lt.createElementNS(ll, t) : s ? Lt.createElement(t, { is: s }) : Lt.createElement(t);
    return t === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  },
  createText: (t) => Lt.createTextNode(t),
  createComment: (t) => Lt.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => Lt.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, s, n, r, i) {
    const o = s ? s.previousSibling : e.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; e.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Dn.innerHTML = li(
        n === "svg" ? `<svg>${t}</svg>` : n === "mathml" ? `<math>${t}</math>` : t
      );
      const l = Dn.content;
      if (n === "svg" || n === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      e.insertBefore(l, s);
    }
    return [
      // first
      o ? o.nextSibling : e.firstChild,
      // last
      s ? s.previousSibling : e.lastChild
    ];
  }
}, cl = /* @__PURE__ */ Symbol("_vtc");
function fl(t, e, s) {
  const n = t[cl];
  n && (e = (e ? [e, ...n] : [...n]).join(" ")), e == null ? t.removeAttribute("class") : s ? t.setAttribute("class", e) : t.className = e;
}
const jn = /* @__PURE__ */ Symbol("_vod"), ul = /* @__PURE__ */ Symbol("_vsh"), dl = /* @__PURE__ */ Symbol(""), pl = /(?:^|;)\s*display\s*:/;
function hl(t, e, s) {
  const n = t.style, r = Z(s);
  let i = !1;
  if (s && !r) {
    if (e)
      if (Z(e))
        for (const o of e.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && xe(n, l, "");
        }
      else
        for (const o in e)
          s[o] == null && xe(n, o, "");
    for (const o in s) {
      o === "display" && (i = !0);
      const l = s[o];
      l != null ? ml(
        t,
        o,
        !Z(e) && e ? e[o] : void 0,
        l
      ) || xe(n, o, l) : xe(n, o, "");
    }
  } else if (r) {
    if (e !== s) {
      const o = n[dl];
      o && (s += ";" + o), n.cssText = s, i = pl.test(s);
    }
  } else e && t.removeAttribute("style");
  jn in t && ((!r || e !== s) && (t[jn] = i ? n.display : ""), t[ul] && (n.display = "none"));
}
const Ke = /\s*!important$/;
function xe(t, e, s) {
  if (F(s))
    s.forEach((n) => xe(t, e, n));
  else if (s == null && (s = ""), e.startsWith("--"))
    Ke.test(s) ? t.setProperty(e, s.replace(Ke, ""), "important") : t.setProperty(e, s);
  else {
    const n = _l(t, e);
    Ke.test(s) ? t.setProperty(
      mt(n),
      s.replace(Ke, ""),
      "important"
    ) : t[n] = s;
  }
}
const Hn = ["Webkit", "Moz", "ms"], Ms = {};
function _l(t, e) {
  const s = Ms[e];
  if (s)
    return s;
  let n = dt(e);
  if (n !== "filter" && n in t)
    return Ms[e] = n;
  n = or(n);
  for (let r = 0; r < Hn.length; r++) {
    const i = Hn[r] + n;
    if (i in t)
      return Ms[e] = i;
  }
  return e;
}
function ml(t, e, s, n) {
  return t.tagName === "TEXTAREA" && (e === "width" || e === "height") && Z(n) && s === n;
}
const Ln = "http://www.w3.org/1999/xlink";
function Wn(t, e, s, n, r, i = Oi(e)) {
  n && e.startsWith("xlink:") ? s == null ? t.removeAttributeNS(Ln, e.slice(6, e.length)) : t.setAttributeNS(Ln, e, s) : s == null || i && !ar(s) ? t.removeAttribute(e) : t.setAttribute(
    e,
    i ? "" : Rt(s) ? String(s) : s
  );
}
function Vn(t, e, s, n, r) {
  if (e === "innerHTML" || e === "textContent") {
    s != null && (t[e] = e === "innerHTML" ? li(s) : s);
    return;
  }
  const i = t.tagName;
  if (e === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? t.getAttribute("value") || "" : t.value, a = s == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(s);
    (l !== a || !("_value" in t)) && (t.value = a), s == null && t.removeAttribute(e), t._value = s;
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const l = typeof t[e];
    l === "boolean" ? s = ar(s) : s == null && l === "string" ? (s = "", o = !0) : l === "number" && (s = 0, o = !0);
  }
  try {
    t[e] = s;
  } catch {
  }
  o && t.removeAttribute(r || e);
}
function gl(t, e, s, n) {
  t.addEventListener(e, s, n);
}
function vl(t, e, s, n) {
  t.removeEventListener(e, s, n);
}
const Bn = /* @__PURE__ */ Symbol("_vei");
function yl(t, e, s, n, r = null) {
  const i = t[Bn] || (t[Bn] = {}), o = i[e];
  if (n && o)
    o.value = n;
  else {
    const [l, a] = bl(e);
    if (n) {
      const f = i[e] = Cl(
        n,
        r
      );
      gl(t, l, f, a);
    } else o && (vl(t, l, o, a), i[e] = void 0);
  }
}
const xl = /(Once|Passive|Capture)$/, wl = /^on:?(?:Once|Passive|Capture)$/;
function bl(t) {
  let e, s;
  for (; (s = t.match(xl)) && !wl.test(t); )
    e || (e = {}), t = t.slice(0, t.length - s[1].length), e[s[1].toLowerCase()] = !0;
  return [t[2] === ":" ? t.slice(3) : mt(t.slice(2)), e];
}
let As = 0;
const kl = /* @__PURE__ */ Promise.resolve(), Sl = () => As || (kl.then(() => As = 0), As = Date.now());
function Cl(t, e) {
  const s = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= s.attached)
      return;
    const r = s.value;
    if (F(r)) {
      const i = n.stopImmediatePropagation;
      n.stopImmediatePropagation = () => {
        i.call(n), n._stopped = !0;
      };
      const o = r.slice(), l = [n];
      for (let a = 0; a < o.length && !n._stopped; a++) {
        const f = o[a];
        f && Nt(
          f,
          e,
          5,
          l
        );
      }
    } else
      Nt(
        r,
        e,
        5,
        [n]
      );
  };
  return s.value = t, s.attached = Sl(), s;
}
const Kn = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, Tl = (t, e, s, n, r, i) => {
  const o = r === "svg";
  e === "class" ? fl(t, n, o) : e === "style" ? hl(t, s, n) : ss(e) ? ns(e) || yl(t, e, s, n, i) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : Ml(t, e, n, o)) ? (Vn(t, e, n), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Wn(t, e, n, o, i, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Al(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !Z(n))) ? Vn(t, dt(e), n, i, e) : (e === "true-value" ? t._trueValue = n : e === "false-value" && (t._falseValue = n), Wn(t, e, n, o));
};
function Ml(t, e, s, n) {
  if (n)
    return !!(e === "innerHTML" || e === "textContent" || e in t && Kn(e) && G(s));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const r = t.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Kn(e) && Z(s) ? !1 : e in t;
}
function Al(t, e) {
  const s = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!s)
    return !1;
  const n = dt(e);
  return Array.isArray(s) ? s.some((r) => dt(r) === n) : Object.keys(s).some((r) => dt(r) === n);
}
const Un = {};
// @__NO_SIDE_EFFECTS__
function ai(t, e, s) {
  let n = /* @__PURE__ */ lt(t, e);
  rs(n) && (n = nt({}, n, e));
  class r extends an {
    constructor(o) {
      super(n, o, s);
    }
  }
  return r.def = n, r;
}
const $l = typeof HTMLElement < "u" ? HTMLElement : class {
};
class an extends $l {
  constructor(e, s = {}, n = qn) {
    super(), this._def = e, this._props = s, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n !== qn ? this._root = this.shadowRoot : e.shadowRoot !== !1 ? (this.attachShadow(
      nt({}, e.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let e = this;
    for (; e = e && // #12479 should check assignedSlot first to get correct parent
    (e.assignedSlot || e.parentNode || e.host); )
      if (e instanceof an) {
        this._parent = e;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : e && e._pendingResolve ? this._pendingResolve = e._pendingResolve.then(() => {
      if (this._pendingResolve = void 0, this.isConnected)
        return this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(e = this._parent) {
    e && (this._instance.parent = e._instance, this._inheritParentContext(e));
  }
  _inheritParentContext(e = this._parent) {
    e && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      e._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, $r(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(e) {
    for (const s of e)
      this._setAttr(s.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return this._pendingResolve;
    for (let n = 0; n < this.attributes.length; n++)
      this._setAttr(this.attributes[n].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const e = (n, r = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: i, styles: o } = n;
      let l;
      if (i && !F(i))
        for (const a in i) {
          const f = i[a];
          (f === Number || f && f.type === Number) && (a in this._props && (this._props[a] = xn(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[dt(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(n), this.shadowRoot && this._applyStyles(o), this._connected && this._mount(n);
    }, s = this._def.__asyncLoader;
    if (s)
      return this._pendingResolve = s().then((n) => {
        n.configureApp = this._def.configureApp, e(this._def = n, !0);
      }), this._pendingResolve;
    e(this._def);
  }
  _mount(e) {
    this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const s = this._instance && this._instance.exposed;
    if (s)
      for (const n in s)
        B(this, n) || Object.defineProperty(this, n, {
          // unwrap ref to be consistent with public instance behavior
          get: () => T(s[n])
        });
  }
  _resolveProps(e) {
    const { props: s } = e, n = F(s) ? s : Object.keys(s || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && n.includes(r) && this._setProp(r, this[r]);
    for (const r of n.map(dt))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(i) {
          this._setProp(r, i, !0, !this._patching);
        }
      });
  }
  _setAttr(e) {
    if (e.startsWith("data-v-")) return;
    const s = this.hasAttribute(e);
    let n = s ? this.getAttribute(e) : Un;
    const r = dt(e);
    s && this._numberProps && this._numberProps[r] && (n = xn(n)), this._setProp(r, n, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(e) {
    return this._props[e];
  }
  /**
   * @internal
   */
  _setProp(e, s, n = !0, r = !1) {
    if (s !== this._props[e] && (this._dirty = !0, s === Un ? delete this._props[e] : (this._props[e] = s, e === "key" && this._app && (this._app._ceVNode.key = s)), r && this._instance && this._update(), n)) {
      const i = this._ob;
      i && (this._processMutations(i.takeRecords()), i.disconnect()), s === !0 ? this.setAttribute(mt(e), "") : typeof s == "string" || typeof s == "number" ? this.setAttribute(mt(e), s + "") : s || this.removeAttribute(mt(e)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const e = this._createVNode();
    this._app && (e.appContext = this._app._context), Ol(e, this._root);
  }
  _createVNode() {
    const e = {};
    this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
    const s = L(this._def, nt(e, this._props));
    return this._instance || (s.ce = (n) => {
      this._instance = n, n.ce = this, n.isCE = !0;
      const r = (i, o) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            rs(o[0]) ? nt({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      n.emit = (i, ...o) => {
        r(i, o), mt(i) !== i && r(mt(i), o);
      }, this._setParent();
    }), s;
  }
  _applyStyles(e, s, n) {
    if (!e) return;
    if (s) {
      if (s === this._def || this._styleChildren.has(s))
        return;
      this._styleChildren.add(s);
    }
    const r = this._nonce, i = this.shadowRoot, o = n ? this._getStyleAnchor(n) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(i);
    let l = null;
    for (let a = e.length - 1; a >= 0; a--) {
      const f = document.createElement("style");
      r && f.setAttribute("nonce", r), f.textContent = e[a], i.insertBefore(f, l || o), l = f, a === 0 && (n || this._styleAnchors.set(this._def, f), s && this._styleAnchors.set(s, f));
    }
  }
  _getStyleAnchor(e) {
    if (!e)
      return null;
    const s = this._styleAnchors.get(e);
    return s && s.parentNode === this.shadowRoot ? s : (s && this._styleAnchors.delete(e), null);
  }
  _getRootStyleInsertionAnchor(e) {
    for (let s = 0; s < e.childNodes.length; s++) {
      const n = e.childNodes[s];
      if (!(n instanceof HTMLStyleElement))
        return n;
    }
    return null;
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const e = this._slots = {};
    let s;
    for (; s = this.firstChild; ) {
      const n = s.nodeType === 1 && s.getAttribute("slot") || "default";
      (e[n] || (e[n] = [])).push(s), this.removeChild(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const e = this._getSlots(), s = this._instance.type.__scopeId;
    for (let n = 0; n < e.length; n++) {
      const r = e[n], i = r.getAttribute("name") || "default", o = this._slots[i], l = r.parentNode;
      if (o)
        for (const a of o) {
          if (s && a.nodeType === 1) {
            const f = s + "-s", u = document.createTreeWalker(a, 1);
            a.setAttribute(f, "");
            let p;
            for (; p = u.nextNode(); )
              p.setAttribute(f, "");
          }
          l.insertBefore(a, r);
        }
      else
        for (; r.firstChild; ) l.insertBefore(r.firstChild, r);
      l.removeChild(r);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const e = [this];
    this._teleportTargets && e.push(...this._teleportTargets);
    const s = /* @__PURE__ */ new Set();
    for (const n of e) {
      const r = n.querySelectorAll("slot");
      for (let i = 0; i < r.length; i++)
        s.add(r[i]);
    }
    return Array.from(s);
  }
  /**
   * @internal
   */
  _injectChildStyle(e, s) {
    this._applyStyles(e.styles, e, s);
  }
  /**
   * @internal
   */
  _beginPatch() {
    this._patching = !0, this._dirty = !1;
  }
  /**
   * @internal
   */
  _endPatch() {
    this._patching = !1, this._dirty && this._instance && this._update();
  }
  /**
   * @internal
   */
  _hasShadowRoot() {
    return this._def.shadowRoot !== !1;
  }
  /**
   * @internal
   */
  _removeChildStyle(e) {
  }
}
function El(t) {
  const e = ni(), s = e && e.ce;
  return s || null;
}
const Pl = /* @__PURE__ */ nt({ patchProp: Tl }, al);
let zn;
function ci() {
  return zn || (zn = Wo(Pl));
}
const Ol = ((...t) => {
  ci().render(...t);
}), qn = ((...t) => {
  const e = ci().createApp(...t), { mount: s } = e;
  return e.mount = (n) => {
    const r = Il(n);
    if (!r) return;
    const i = e._component;
    !G(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = s(r, !1, Rl(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, e;
});
function Rl(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Il(t) {
  return Z(t) ? document.querySelector(t) : t;
}
const Nl = {
  locale: "nl-BE",
  title: "Digitale meter",
  day_tariff: "Dagtarief",
  night_tariff: "Nachttarief",
  importing: "Afname van het net",
  exporting: "Injectie op het net",
  idle: "In balans met het net",
  capacity: "Capaciteitstarief",
  quarter: "Kwartier nu",
  peak: "Maandpiek",
  avg13: "Gem. 13 maanden",
  new_peak: "Je zet een nieuwe maandpiek!",
  margin: "Nog {x} kW marge tot je piek",
  min_billed: "Gefactureerd aan minimum {x} kW",
  today: "Vandaag",
  forecast: "Verwacht einde kwartier",
  peak_today: "Piek vandaag",
  q_time: "{m} / 15′",
  fc_over: "Verwacht nieuwe piek – blijf onder {x} kW tot het einde van dit kwartier",
  fc_room: "Nog tot {x} kW mogelijk de rest van dit kwartier",
  fc_min: "Onder minimum {x} kW – geen impact",
  last2h: "{h} u",
  last: "Laatste {h} u",
  day: "Dag",
  night: "Nacht",
  gas: "Gas",
  water: "Water",
  grid: "Net",
  fuse: "zekering {x} A",
  totals: "Meterstanden",
  cons: "Afname",
  prod: "Injectie"
}, Fl = {
  locale: "en-GB",
  title: "Digital meter",
  day_tariff: "Day tariff",
  night_tariff: "Night tariff",
  importing: "Importing from grid",
  exporting: "Exporting to grid",
  idle: "Balanced with grid",
  capacity: "Capacity tariff",
  quarter: "This quarter",
  peak: "Month peak",
  avg13: "13-month avg",
  new_peak: "You're setting a new monthly peak!",
  margin: "{x} kW headroom to your peak",
  min_billed: "Billed at minimum {x} kW",
  today: "Today",
  forecast: "Forecast end of quarter",
  peak_today: "Peak today",
  q_time: "{m} / 15′",
  fc_over: "New peak expected – stay below {x} kW for the rest of this quarter",
  fc_room: "Up to {x} kW possible for the rest of this quarter",
  fc_min: "Below minimum {x} kW – no impact",
  last2h: "{h} h",
  last: "Last {h} h",
  day: "Day",
  night: "Night",
  gas: "Gas",
  water: "Water",
  grid: "Grid",
  fuse: "fuse {x} A",
  totals: "Meter readings",
  cons: "Import",
  prod: "Export"
}, Dl = { nl: Nl, en: Fl }, jl = {
  title: "Titel",
  language: "Taal",
  fuse_amps: "Zekering per fase (A)",
  amp_warn: "Stroombalk oranje vanaf (fractie van zekering)",
  max_power: "Max. vermogen voor animatie (kW)",
  capacity_min: "Minimum capaciteitstarief (kW)",
  history_hours: "Grafiekvenster (uur)",
  power_consumption: "Vermogen afname",
  power_production: "Vermogen injectie",
  active_tariff: "Actief tarief",
  current_average_demand: "Kwartiergemiddelde (huidig)",
  maximum_demand: "Maandpiek",
  peak_average: "Gemiddelde piek 13 maanden (optioneel)",
  peak_today: "Piek vandaag (optioneel, anders berekend)",
  consumption_day: "Afname dag (1.8.1)",
  consumption_night: "Afname nacht (1.8.2)",
  production_day: "Injectie dag (2.8.1)",
  production_night: "Injectie nacht (2.8.2)",
  gas: "Gas (optioneel)",
  water: "Water (optioneel)",
  s_general: "Algemeen",
  s_power: "Live vermogen",
  s_capacity: "Capaciteitstarief",
  s_energy: "Energie (meterstanden)",
  s_utilities: "Gas & water",
  s_phase: "Fase",
  voltage: "Spanning",
  current: "Stroom",
  power: "Vermogen afname",
  power_prod: "Vermogen injectie"
}, Hl = {
  title: "Title",
  language: "Language",
  fuse_amps: "Fuse per phase (A)",
  amp_warn: "Current bar orange from (fraction of fuse)",
  max_power: "Max. power for animation (kW)",
  capacity_min: "Minimum capacity tariff (kW)",
  history_hours: "Chart window (hours)",
  power_consumption: "Power import",
  power_production: "Power export",
  active_tariff: "Active tariff",
  current_average_demand: "Quarter-hour average (current)",
  maximum_demand: "Month peak",
  peak_average: "13-month average peak (optional)",
  peak_today: "Peak today (optional, otherwise calculated)",
  consumption_day: "Import day (1.8.1)",
  consumption_night: "Import night (1.8.2)",
  production_day: "Export day (2.8.1)",
  production_night: "Export night (2.8.2)",
  gas: "Gas (optional)",
  water: "Water (optional)",
  s_general: "General",
  s_power: "Live power",
  s_capacity: "Capacity tariff",
  s_energy: "Energy (meter readings)",
  s_utilities: "Gas & water",
  s_phase: "Phase",
  voltage: "Voltage",
  current: "Current",
  power: "Power import",
  power_prod: "Power export"
}, Ll = { nl: jl, en: Hl }, fi = (t, e) => t[(e ?? "nl").slice(0, 2)] ?? t.nl, Wl = (t) => fi(Dl, t), Vl = (t) => fi(Ll, t), Fe = (t, e) => t.replace(/\{(\w+)\}/g, (s, n) => n in e ? String(e[n]) : s), st = (t) => ({ name: t, selector: { entity: { domain: "sensor" } } }), ye = (t, e, s, n, r, i = "box") => ({ name: t, selector: { number: { min: e, max: s, step: n, mode: i, ...r ? { unit_of_measurement: r } : {} } } }), de = (t, e, s, n = !1) => ({ type: "expandable", flatten: !0, expanded: n, title: t, icon: e, schema: s }), $s = (t, e) => de(
  `${t.s_phase} L${e}`,
  "mdi:sine-wave",
  [st(`voltage_l${e}`), st(`current_l${e}`), st(`power_l${e}`), st(`power_prod_l${e}`)]
);
function Bl(t) {
  return [
    de(t.s_general, "mdi:cog", [
      { name: "title", selector: { text: {} } },
      { name: "language", selector: { select: { mode: "dropdown", options: [
        { value: "nl", label: "Nederlands" },
        { value: "en", label: "English" }
      ] } } },
      { type: "grid", name: "", schema: [
        ye("fuse_amps", 6, 100, 1, "A"),
        ye("amp_warn", 0.5, 1, 0.05, null, "slider"),
        ye("capacity_min", 0, 20, 0.1, "kW"),
        ye("max_power", 1, 50, 0.5, "kW"),
        ye("history_hours", 1, 24, 1, "h")
      ] }
    ], !0),
    de(t.s_power, "mdi:flash", [st("power_consumption"), st("power_production"), st("active_tariff")]),
    de(
      t.s_capacity,
      "mdi:chart-bell-curve",
      [st("current_average_demand"), st("maximum_demand"), st("peak_today"), st("peak_average")]
    ),
    de(
      t.s_energy,
      "mdi:counter",
      [st("consumption_day"), st("consumption_night"), st("production_day"), st("production_night")]
    ),
    de(t.s_utilities, "mdi:water", [st("gas"), st("water")]),
    $s(t, 1),
    $s(t, 2),
    $s(t, 3)
  ];
}
function Kl(t, e) {
  if (e && e in t) return t[e];
  const s = /^(voltage|current|power_prod|power)_l(\d)$/.exec(e ?? "");
  return s ? `${t[s[1]]} L${s[2]}` : e ?? "";
}
function Ul(t) {
  const { entities: e, type: s, ...n } = t;
  return { ...Bs, ...n, ...Vs, ...e ?? {} };
}
function zl(t, e) {
  const s = e, n = { type: t };
  for (const [i, o] of Object.entries(Bs))
    s[i] !== void 0 && s[i] !== "" && s[i] !== o && (n[i] = s[i]);
  const r = {};
  for (const [i, o] of Object.entries(Vs)) {
    const l = s[i] || "";
    l !== o && (r[i] = l);
  }
  return Object.keys(r).length && (n.entities = r), n;
}
const ql = [".hass", ".schema", ".data"], Gl = /* @__PURE__ */ lt({
  __name: "FluviusMeterCardEditor",
  props: {
    hass: { type: Object },
    config: { type: Object }
  },
  setup(t) {
    const e = t, s = El(), n = /* @__PURE__ */ cs(e.config ?? {});
    le(() => e.config, (f) => {
      n.value = f ?? {};
    });
    const r = H(() => Vl(n.value.language ?? e.hass?.locale?.language)), i = H(() => Bl(r.value)), o = H(() => Ul(n.value)), l = (f) => Kl(r.value, f.name);
    function a(f) {
      f.stopPropagation();
      const u = zl(n.value.type || `custom:${$e}`, f.detail.value ?? {});
      n.value = u, s?.dispatchEvent(new CustomEvent("config-changed", { detail: { config: u }, bubbles: !0, composed: !0 }));
    }
    return (f, u) => t.hass ? (W(), z("ha-form", {
      key: 0,
      ".hass": t.hass,
      ".schema": i.value,
      ".data": o.value,
      ".computeLabel": l,
      onValueChanged: a
    }, null, 40, ql)) : Ft("", !0);
  }
});
function Yl(t, e, s) {
  return t == null || isNaN(t) ? "—" : t.toLocaleString(s, { minimumFractionDigits: e, maximumFractionDigits: e });
}
const Jl = (t, e, s) => Math.min(s, Math.max(e, t));
function Ql(t) {
  const e = /* @__PURE__ */ cs(Date.now()), s = () => {
    e.value = Date.now();
  };
  let n;
  return Hr(() => {
    n = setInterval(s, t);
  }), ko(() => clearInterval(n)), { now: e, touch: s };
}
function Zl(t, e) {
  const s = (a) => e().entities[a], n = (a) => {
    const f = s(a);
    return f ? t().states[f] : void 0;
  }, r = (a) => {
    const f = n(a);
    if (!f) return null;
    const u = parseFloat(f.state);
    return isNaN(u) ? null : u;
  }, i = (a) => n(a)?.attributes.unit_of_measurement ?? null, o = (a) => i(a) === "W" ? 1e-3 : 1;
  return { id: s, state: n, has: (a) => !!n(a), num: r, unit: i, kw: (a) => {
    const f = r(a);
    return f == null ? null : f * o(a);
  }, kwFactor: o };
}
const Gn = { c: "power_consumption", p: "power_production" };
function Xl(t) {
  const { hass: e, config: s, ent: n, now: r } = t, i = /* @__PURE__ */ eo({ c: [], p: [] }), o = () => r.value - s().history_hours * 36e5 - 6e4;
  return le([t.consumption, t.production], ([l, a]) => {
    const f = Date.now();
    i.value.c.push([f, l]), i.value.p.push([f, a]), no(i);
  }, { immediate: !0 }), le(r, () => {
    const l = o(), a = i.value;
    (a.c[0]?.[0] < l || a.p[0]?.[0] < l) && (i.value = { c: a.c.filter(([f]) => f >= l), p: a.p.filter(([f]) => f >= l) });
  }), Hr(async () => {
    const l = Object.values(Gn).filter((a) => n.has(a)).map((a) => n.id(a));
    if (l.length)
      try {
        const a = await e().callWS({
          type: "history/history_during_period",
          start_time: new Date(Date.now() - s().history_hours * 36e5).toISOString(),
          entity_ids: l,
          minimal_response: !0,
          no_attributes: !0,
          significant_changes_only: !1
        }), f = { ...i.value };
        for (const [u, p] of Object.entries(Gn)) {
          const v = a?.[n.id(p)];
          if (!v) continue;
          const y = n.kwFactor(p), E = v.map((M) => [M.lu ? M.lu * 1e3 : Date.parse(M.last_updated ?? M.last_changed ?? ""), parseFloat(M.s ?? M.state ?? "") * y]).filter(([M, D]) => !isNaN(M) && !isNaN(D));
          f[u] = [...E, ...f[u]].sort((M, D) => M[0] - D[0]);
        }
        i.value = f;
      } catch (a) {
        console.warn("fluvius-meter-card: history unavailable", a);
      }
  }), i;
}
function ta(t, e, s, n = 0) {
  const r = s - e;
  let i = 0, o = null, l = null;
  for (const [f, u] of t) {
    if (f <= r) {
      l = u, o = r;
      continue;
    }
    l != null && o != null && (i += l * (f - o)), o = f, l = u;
  }
  if (l == null || o == null) return n;
  i += l * (s - o);
  const a = t[0][0] > r ? t[0][0] : r;
  return s - a > 0 ? i / (s - a) : l;
}
function Yn(t, e) {
  if (!t.length) return { line: "", area: "" };
  const s = (i) => Math.max(0, (i - e.t0) / (e.now - e.t0) * e.width), n = (i) => e.height - e.pad - i / e.max * (e.height - e.pad * 2);
  let r = `M${s(t[0][0])},${n(t[0][1])}`;
  for (let i = 1; i < t.length; i++) r += `H${s(t[i][0])}V${n(t[i][1])}`;
  return r += `H${e.width}`, { line: r, area: `${r}V${e.height}H${s(t[0][0])}Z` };
}
function ea(t, e, s, n) {
  const r = new Array(n).fill(0);
  for (const i of t) {
    const o = typeof i.start == "number" ? i.start : Date.parse(i.start), l = Math.floor((o - e) / s);
    l >= 0 && l < n && i.change != null && i.change > 0 && (r[l] += i.change);
  }
  return r;
}
const sa = ["consumption_day", "consumption_night", "production_day", "production_night", "gas", "water"], na = ["gas", "water"], Ue = 5 * 6e4;
function ra(t) {
  const { hass: e, config: s, ent: n } = t, r = /* @__PURE__ */ Ye({}), i = /* @__PURE__ */ Ye({}), o = /* @__PURE__ */ cs(null), l = (y) => {
    o.value = Math.max(o.value ?? 0, y);
  };
  let a = (/* @__PURE__ */ new Date()).toDateString();
  le([t.current, t.now], ([y]) => {
    const E = (/* @__PURE__ */ new Date()).toDateString();
    E !== a && (a = E, o.value = null), y != null && l(y);
  }, { immediate: !0 });
  async function f() {
    await Promise.all(sa.filter((y) => n.has(y)).map(async (y) => {
      try {
        const E = await e().callWS({
          type: "recorder/statistic_during_period",
          statistic_id: n.id(y),
          calendar: { period: "day" },
          types: ["change"]
        });
        r[y] = E?.change ?? null;
      } catch {
        r[y] = null;
      }
    }));
  }
  async function u() {
    const y = "current_average_demand";
    if (n.has("peak_today") || !n.has(y)) return;
    const E = n.id(y), M = /* @__PURE__ */ new Date();
    M.setHours(0, 0, 0, 0);
    try {
      const N = (await e().callWS({
        type: "recorder/statistics_during_period",
        start_time: M.toISOString(),
        statistic_ids: [E],
        period: "5minute",
        types: ["max"]
      }))?.[E] ?? [], P = Math.max(0, ...N.map((K) => K.max).filter((K) => K != null));
      N.length && l(P * n.kwFactor(y));
    } catch {
    }
  }
  async function p() {
    const y = na.filter((N) => n.has(N));
    if (!y.length) return;
    const E = Math.floor(Date.now() / Ue) * Ue, M = E - s().history_hours * 36e5, D = Math.round((E - M) / Ue);
    try {
      const N = await e().callWS({
        type: "recorder/statistics_during_period",
        start_time: new Date(M).toISOString(),
        statistic_ids: y.map((P) => n.id(P)),
        period: "5minute",
        types: ["change"]
      });
      for (const P of y) i[P] = ea(N?.[n.id(P)] ?? [], M, Ue, D);
    } catch (N) {
      console.warn("fluvius-meter-card: statistics unavailable", N);
    }
  }
  let v = 0;
  return le(e, () => {
    Date.now() - v <= yi || (v = Date.now(), Promise.all([f(), u(), p()]));
  }, { immediate: !0 }), { today: r, mini: i, peakToday: o };
}
const ui = Symbol("fluvius-meter");
function ia(t) {
  const e = () => t.hass, s = H(() => t.config), n = H(() => Wl(s.value.language)), r = Zl(e, () => s.value), i = (M, D = 2) => Yl(M, D, n.value.locale), { now: o, touch: l } = Ql(xi);
  le(e, l);
  const a = H(() => r.kw("power_consumption") || 0), f = H(() => r.kw("power_production") || 0), u = H(() => a.value - f.value), p = H(() => Math.abs(u.value) < 0.01 ? "idle" : u.value > 0 ? "import" : "export"), v = Xl({ hass: e, config: () => s.value, ent: r, now: o, consumption: a, production: f }), y = ra({
    hass: e,
    config: () => s.value,
    ent: r,
    now: o,
    current: H(() => r.kw("current_average_demand"))
  }), E = {
    config: s,
    t: n,
    ent: r,
    fmt: i,
    now: o,
    power: { consumption: a, production: f, net: u, mode: p },
    history: v,
    stats: y
  };
  return _o(ui, E), E;
}
function kt() {
  const t = Nr(ui);
  if (!t) throw new Error("useMeter() used outside of MeterCard");
  return t;
}
function oa(t, e, s) {
  e.has(s) && t.dispatchEvent(new CustomEvent("hass-more-info", {
    detail: { entityId: e.id(s) },
    bubbles: !0,
    composed: !0
  }));
}
const Jn = 15 * 6e4;
function la({ now: t, current: e, peak: s, minimum: n, recentImport: r }) {
  const i = t % Jn / Jn, o = 1 - i, l = Math.max(s ?? 0, n), a = e != null ? e + r * o : null, f = e != null ? e / l : 0, u = a != null ? a / l : 0, p = u >= 1 ? "over" : u >= 0.8 ? "warn" : "ok";
  let v = null;
  if (e != null && a != null) {
    const y = o > 0.01 ? Math.max(0, (l - e) / o) : 0;
    f >= 1 && e > n ? v = { kind: "new_peak" } : u >= 1 ? v = { kind: "fc_over", value: y } : a < n && (s ?? 0) < n ? v = { kind: "fc_min", value: n } : v = { kind: "fc_room", value: y };
  }
  return { elapsed: i, remaining: o, reference: l, forecast: a, pct: f, pctForecast: u, level: p, hint: v };
}
function aa(t) {
  const e = Math.floor(t * 15), s = Math.floor((t * 15 - e) * 60);
  return `${e}:${String(s).padStart(2, "0")}`;
}
const ca = {
  class: "ring-col",
  "data-k": "current_average_demand"
}, fa = { class: "ring" }, ua = { viewBox: "0 0 80 80" }, da = { class: "ring-txt" }, pa = { class: "ring-q" }, ha = { class: "cap-info" }, _a = { class: "label" }, ma = {
  class: "cap-row",
  "data-k": "current_average_demand"
}, ga = {
  class: "cap-row fc-row",
  "data-k": "power_consumption"
}, va = ["data-k"], ya = {
  class: "cap-row",
  "data-k": "maximum_demand"
}, xa = {
  key: 0,
  class: "cap-row",
  "data-k": "peak_average"
}, wa = { class: "hint" }, ba = /* @__PURE__ */ lt({
  __name: "CapacityPanel",
  setup(t) {
    const e = 2 * Math.PI * 30, s = 2 * Math.PI * 38, { config: n, t: r, ent: i, fmt: o, now: l, power: a, history: f, stats: u } = kt(), p = H(() => i.kw("current_average_demand")), v = H(() => i.kw("maximum_demand")), y = H(() => la({
      now: l.value,
      current: p.value,
      peak: v.value,
      minimum: n.value.capacity_min,
      // 60 s time-weighted import power
      recentImport: ta(f.value.c, 6e4, l.value, a.consumption.value)
    })), E = H(() => i.has("peak_today") ? i.kw("peak_today") : u.peakToday.value), M = H(() => {
      const N = y.value.hint;
      return N ? N.kind === "new_peak" ? r.value.new_peak : Fe(r.value[N.kind], { x: o(N.value, N.kind === "fc_min" ? 1 : 2) }) : "";
    }), D = (N, P) => `${Math.min(N, 1) * P} ${P}`;
    return (N, P) => T(i).has("current_average_demand") || T(i).has("maximum_demand") ? (W(), z("div", {
      key: 0,
      class: ft(["cap", y.value.level])
    }, [
      w("div", ca, [
        w("div", fa, [
          (W(), z("svg", ua, [
            P[0] || (P[0] = w("circle", {
              class: "qtrack",
              cx: "40",
              cy: "40",
              r: "38"
            }, null, -1)),
            w("circle", {
              class: "qbar",
              cx: "40",
              cy: "40",
              r: "38",
              style: Bt({ strokeDasharray: D(y.value.elapsed, s) })
            }, null, 4),
            P[1] || (P[1] = w("circle", {
              class: "track",
              cx: "40",
              cy: "40",
              r: "30"
            }, null, -1)),
            w("circle", {
              class: "bar fc",
              cx: "40",
              cy: "40",
              r: "30",
              style: Bt({ strokeDasharray: D(y.value.pctForecast, e) })
            }, null, 4),
            w("circle", {
              class: "bar",
              cx: "40",
              cy: "40",
              r: "30",
              style: Bt({ strokeDasharray: D(y.value.pct, e) })
            }, null, 4)
          ])),
          w("div", da, [
            w("b", null, I(y.value.forecast != null ? Math.round(y.value.pctForecast * 100) : "—"), 1),
            P[2] || (P[2] = w("small", null, "%", -1))
          ])
        ]),
        w("div", pa, I(T(Fe)(T(r).q_time, { m: T(aa)(y.value.elapsed) })), 1)
      ]),
      w("div", ha, [
        w("div", _a, I(T(r).capacity), 1),
        w("div", ma, [
          w("span", null, I(T(r).quarter), 1),
          w("b", null, I(T(o)(p.value)) + " kW", 1)
        ]),
        w("div", ga, [
          w("span", null, I(T(r).forecast), 1),
          w("b", null, I(T(o)(y.value.forecast)) + " kW", 1)
        ]),
        w("div", {
          class: "cap-row",
          "data-k": T(i).has("peak_today") ? "peak_today" : "current_average_demand"
        }, [
          w("span", null, I(T(r).peak_today), 1),
          w("b", null, I(T(o)(E.value)) + " kW", 1)
        ], 8, va),
        w("div", ya, [
          w("span", null, I(T(r).peak), 1),
          w("b", null, I(T(o)(v.value)) + " kW", 1)
        ]),
        T(i).has("peak_average") ? (W(), z("div", xa, [
          w("span", null, I(T(r).avg13), 1),
          w("b", null, I(T(o)(T(i).kw("peak_average"))) + " kW", 1)
        ])) : Ft("", !0),
        w("div", wa, I(M.value), 1)
      ])
    ], 2)) : Ft("", !0);
  }
}), ka = ".cap{display:flex;gap:14px;align-items:center;margin-top:14px;padding:12px;border-radius:var(--fm-radius);background:var(--fm-soft)}.cap .label{margin:0 0 4px}.ring-col{display:flex;flex-direction:column;align-items:center;gap:4px;flex:none;padding:4px}.ring{position:relative;width:84px;height:84px}.ring svg{width:100%;height:100%;transform:rotate(-90deg)}.ring circle{fill:none;stroke-width:7}.ring .track{stroke:var(--fm-line)}.ring .bar{stroke-linecap:round;transition:stroke-dasharray .6s ease,stroke .4s}.ring .bar.fc{opacity:.3}.ring .qtrack{fill:none;stroke:var(--fm-line);stroke-width:2.5}.ring .qbar{fill:none;stroke:var(--fm-muted);stroke-width:2.5;stroke-linecap:round;transition:stroke-dasharray 1s linear}.cap.ok .bar{stroke:var(--fm-ok)}.cap.warn .bar{stroke:var(--fm-warn)}.cap.over .bar{stroke:var(--fm-bad)}.ring-txt{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:20px}.ring-q{font-size:11px;color:var(--fm-muted);font-variant-numeric:tabular-nums}.ring-txt small{font-size:11px;color:var(--fm-muted);margin-left:1px}.cap-info{flex:1;min-width:0}.cap-row{display:flex;justify-content:space-between;font-size:13px;padding:3px 6px;margin:0 -6px}.cap-row span{color:var(--fm-muted)}.cap.ok .fc-row b{color:var(--fm-ok)}.cap.warn .fc-row b{color:var(--fm-warn)}.cap.over .fc-row b{color:var(--fm-bad)}.hint{font-size:12px;margin-top:6px}.cap.ok .hint{color:var(--fm-ok)}.cap.warn .hint{color:var(--fm-warn)}.cap.over .hint{color:var(--fm-bad);font-weight:500}@media(hover:hover){.cap-row:hover,.ring-col:hover{background:var(--fm-hover)}}", St = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, r] of e)
    s[n] = r;
  return s;
}, Sa = /* @__PURE__ */ St(ba, [["styles", [ka]]]), Ca = {
  tower: '<path d="M12 2 7 22M12 2l5 20M6 8h12M7.5 14h9M9 8l6 6M15 8l-6 6"/>',
  home: '<path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20.5 13.5A8.5 8.5 0 1 1 10.5 3.5a6.5 6.5 0 0 0 10 10z"/>',
  flame: '<path d="M12 22c4 0 7-3 7-7 0-4.5-3.5-6.5-4.5-10-1 2-2 3-3 3 0-2-1-4-3-6 0 4.5-3.5 6.5-3.5 13 0 4 3 7 7 7z"/>',
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
  down: '<path d="M12 5v14M6 13l6 6 6-6"/>',
  up: '<path d="M12 19V5M6 11l6-6 6 6"/>'
}, Ta = ["innerHTML"], Kt = /* @__PURE__ */ lt({
  __name: "AppIcon",
  props: {
    name: { type: null }
  },
  setup(t) {
    return (e, s) => (W(), z("svg", {
      class: "ico",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.8",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      innerHTML: T(Ca)[t.name]
    }, null, 8, Ta));
  }
}), Ma = { class: "head" }, Aa = { class: "title" }, $a = /* @__PURE__ */ lt({
  __name: "CardHeader",
  setup(t) {
    const { config: e, t: s, ent: n } = kt(), r = H(() => {
      const o = n.state("active_tariff");
      return o && parseInt(o.state, 10) || null;
    }), i = H(() => r.value === 2);
    return (o, l) => (W(), z("div", Ma, [
      w("div", Aa, I(T(e).title || T(s).title), 1),
      r.value ? (W(), z("div", {
        key: 0,
        class: ft(["pill", i.value ? "night" : "day"]),
        "data-k": "active_tariff"
      }, [
        L(Kt, {
          name: i.value ? "moon" : "sun"
        }, null, 8, ["name"]),
        ne(I(i.value ? T(s).night_tariff : T(s).day_tariff), 1)
      ], 2)) : Ft("", !0)
    ]));
  }
}), Ea = ".head{display:flex;justify-content:space-between;align-items:center;gap:8px}.title{font-size:var(--ha-card-header-font-size, 16px);font-weight:500}.pill{font-size:12px;font-weight:500;padding:4px 10px 4px 8px;border-radius:999px;display:flex;gap:5px;align-items:center}.pill .ico{width:14px;height:14px}.pill.day{background:color-mix(in srgb,var(--fm-day) 16%,transparent);color:var(--fm-day)}.pill.night{background:color-mix(in srgb,var(--fm-night) 16%,transparent);color:var(--fm-night)}", Pa = /* @__PURE__ */ St($a, [["styles", [Ea]]]);
function di(t, e) {
  const s = t.unit(e) || "m³";
  return { symbol: s, decimals: s === "L" ? 0 : 2 };
}
const Oa = { class: "label" }, Ra = { class: "totals" }, Ia = ["data-k"], Na = /* @__PURE__ */ lt({
  __name: "MeterTotals",
  setup(t) {
    const { t: e, ent: s, fmt: n } = kt(), r = H(() => {
      const i = (a, f) => ({ key: a, label: f, value: `${n(s.num(a), 1)} kWh` }), o = (a, f) => {
        const u = di(s, a);
        return { key: a, label: e.value[a], value: `${n(s.num(a), u.decimals)} ${u.symbol}`, wide: !s.has(f) };
      }, l = [
        i("consumption_day", `${e.value.cons} 1.8.1`),
        i("consumption_night", `${e.value.cons} 1.8.2`)
      ];
      return s.has("production_day") && l.push(i("production_day", `${e.value.prod} 2.8.1`)), s.has("production_night") && l.push(i("production_night", `${e.value.prod} 2.8.2`)), s.has("gas") && l.push(o("gas", "water")), s.has("water") && l.push(o("water", "gas")), l;
    });
    return (i, o) => (W(), z(ot, null, [
      w("div", Oa, I(T(e).totals), 1),
      w("div", Ra, [
        (W(!0), z(ot, null, tn(r.value, (l) => (W(), z("div", {
          key: l.key,
          "data-k": l.key,
          class: ft({ wide: l.wide })
        }, [
          w("span", null, I(l.label), 1),
          w("b", null, I(l.value), 1)
        ], 10, Ia))), 128))
      ])
    ], 64));
  }
}), Fa = ".totals{display:grid;grid-template-columns:1fr 1fr;gap:6px}.totals>div{display:flex;flex-direction:column;gap:2px;padding:8px 10px;border-radius:var(--fm-radius);background:var(--fm-soft)}.totals>div.wide{grid-column:span 2}.totals span{font-size:11px;color:var(--fm-muted)}.totals b{font-size:14px}", Da = /* @__PURE__ */ St(Na, [["styles", [Fa]]]), ja = { class: "ph" }, Ha = { class: "ph-n" }, La = ["data-k"], Wa = ["data-k"], Va = ["data-k"], Ba = ["data-k"], Ka = ["data-k"], Ua = 207, za = 46, qa = 212, Ga = 248, Ya = /* @__PURE__ */ lt({
  __name: "PhaseRow",
  props: {
    phase: { type: Number },
    gradient: { type: String }
  },
  setup(t) {
    const e = t, { config: s, ent: n, fmt: r } = kt(), i = e.phase, o = H(() => n.num(`voltage_l${i}`)), l = H(() => n.num(`current_l${i}`)), a = H(() => o.value == null ? "50%" : Jl((o.value - Ua) / za * 100, 0, 100) + "%"), f = H(() => o.value != null && (o.value < qa || o.value > Ga)), u = H(() => l.value == null ? 0 : Math.min(1, l.value / s.value.fuse_amps)), p = H(() => u.value >= 0.95 ? "over" : u.value >= s.value.amp_warn ? "warn" : ""), v = H(() => {
      const y = `power_l${i}`, E = `power_prod_l${i}`;
      if (n.has(y)) {
        const D = n.kw(y) || 0, N = n.kw(E) || 0;
        return { kw: D - N, key: N > D && n.has(E) ? E : y };
      }
      return { kw: o.value != null && l.value != null ? o.value * l.value / 1e3 : null, key: `current_l${i}` };
    });
    return (y, E) => (W(), z("div", ja, [
      w("span", Ha, "L" + I(T(i)), 1),
      w("div", {
        class: "ph-bar v",
        "data-k": `voltage_l${T(i)}`
      }, [
        w("i", {
          class: ft({ bad: f.value }),
          style: Bt({ left: a.value })
        }, null, 6)
      ], 8, La),
      w("b", {
        class: "ph-val",
        "data-k": `voltage_l${T(i)}`
      }, I(T(r)(o.value, 0)) + " V", 9, Wa),
      E[0] || (E[0] = w("span", null, null, -1)),
      E[1] || (E[1] = w("span", null, null, -1)),
      w("div", {
        class: "ph-bar a",
        "data-k": `current_l${T(i)}`
      }, [
        w("div", {
          class: "fill",
          style: Bt({ background: t.gradient, clipPath: `inset(0 ${100 - u.value * 100}% 0 0 round 4px)` })
        }, null, 4)
      ], 8, Va),
      w("b", {
        class: ft(["ph-val", p.value]),
        "data-k": `current_l${T(i)}`
      }, I(T(r)(l.value, 1)) + " A", 11, Ba),
      w("span", {
        class: ft(["ph-kw", { exp: v.value.kw != null && v.value.kw < 0, imp: v.value.kw != null && v.value.kw > 0 }]),
        "data-k": v.value.key
      }, I(T(r)(v.value.kw)) + " kW", 11, Ka)
    ]));
  }
}), Ja = '.ph{display:grid;grid-template-columns:22px 1fr 54px 64px;align-items:center;column-gap:8px;row-gap:5px;font-size:13px;padding:8px 10px;border-radius:var(--fm-radius);background:var(--fm-soft)}.ph-n{color:var(--fm-muted);font-weight:500;font-size:12px}.ph-bar{position:relative;border-radius:4px;padding:5px 0;background-clip:content-box}.ph-bar.v{height:6px;background-image:linear-gradient(90deg,color-mix(in srgb,var(--fm-bad) 40%,transparent),color-mix(in srgb,var(--fm-ok) 40%,transparent) 11% 89%,color-mix(in srgb,var(--fm-bad) 40%,transparent))}.ph-bar.v i{position:absolute;top:2px;width:4px;height:12px;margin-left:-2px;border-radius:2px;background:var(--fm-text);transition:left .5s}.ph-bar.v i.bad{background:var(--fm-bad)}.ph-bar.a{height:8px}.ph-bar.a:before{content:"";position:absolute;left:0;right:0;top:5px;height:8px;border-radius:4px;background:var(--fm-line)}.ph-bar.a .fill{position:absolute;left:0;right:0;top:5px;height:8px;transition:clip-path .6s ease}.ph-val{text-align:right;font-size:13px;padding:2px 4px}.ph-val.warn{color:var(--fm-warn)}.ph-val.over{color:var(--fm-bad)}.ph-kw{text-align:right;font-size:12px;color:var(--fm-muted);font-variant-numeric:tabular-nums;padding:2px 4px}.ph-kw.imp{color:var(--fm-import)}.ph-kw.exp{color:var(--fm-export)}', Qa = /* @__PURE__ */ St(Ya, [["styles", [Ja]]]), Za = { key: 0 }, Xa = { class: "label" }, tc = { class: "phases" }, ec = /* @__PURE__ */ lt({
  __name: "PhaseList",
  setup(t) {
    const { config: e, t: s, ent: n } = kt(), r = H(() => [1, 2, 3].filter((o) => n.has(`voltage_l${o}`) || n.has(`current_l${o}`))), i = H(() => {
      const o = e.value.amp_warn * 100;
      return `linear-gradient(90deg, var(--fm-ok) 0%, var(--fm-ok) ${Math.max(0, o - 25)}%, var(--fm-warn) ${o}%, var(--fm-bad) ${Math.min(100, o + 15)}%, var(--fm-bad) 100%)`;
    });
    return (o, l) => r.value.length ? (W(), z("div", Za, [
      w("div", Xa, I(T(s).grid) + " · " + I(T(Fe)(T(s).fuse, { x: T(e).fuse_amps })), 1),
      w("div", tc, [
        (W(!0), z(ot, null, tn(r.value, (a) => (W(), nn(Qa, {
          key: a,
          phase: a,
          gradient: i.value
        }, null, 8, ["phase", "gradient"]))), 128))
      ])
    ])) : Ft("", !0);
  }
}), sc = ".phases{display:flex;flex-direction:column;gap:6px}", nc = /* @__PURE__ */ St(ec, [["styles", [sc]]]), rc = { class: "flow" }, ic = {
  class: "line",
  viewBox: "0 0 100 10",
  preserveAspectRatio: "none"
}, oc = /* @__PURE__ */ lt({
  __name: "PowerFlow",
  setup(t) {
    const { config: e, power: s } = kt(), n = H(() => Math.max(0.35, 2.4 - Math.abs(s.net.value) / e.value.max_power * 2.2) + "s");
    return (r, i) => (W(), z("div", rc, [
      L(Kt, { name: "tower" }),
      (W(), z("svg", ic, [
        w("line", {
          class: "flowline",
          x1: "2",
          y1: "5",
          x2: "98",
          y2: "5",
          style: Bt({ animationDuration: n.value })
        }, null, 4)
      ])),
      L(Kt, { name: "home" })
    ]));
  }
}), lc = ".flow{display:flex;align-items:center;gap:10px;margin:14px 0 6px;color:var(--fm-muted)}.flow .ico{width:22px;height:22px}.flow svg.line{flex:1;height:10px;overflow:visible}.flowline{stroke:var(--fm-line);stroke-width:3;stroke-linecap:round;stroke-dasharray:1 7;animation:flow 1.5s linear infinite;vector-effect:non-scaling-stroke}.import .flowline{stroke:var(--fm-import)}.export .flowline{stroke:var(--fm-export);animation-direction:reverse}.idle .flowline{animation:none}@keyframes flow{to{stroke-dashoffset:-16}}", ac = /* @__PURE__ */ St(oc, [["styles", [lc]]]), cc = { class: "hero" }, fc = ["data-k"], uc = { class: "net" }, dc = { class: "sub" }, pc = { class: "chips" }, hc = {
  class: "chip imp",
  "data-k": "power_consumption"
}, _c = {
  key: 0,
  class: "chip exp",
  "data-k": "power_production"
}, mc = /* @__PURE__ */ lt({
  __name: "PowerHero",
  setup(t) {
    const { t: e, ent: s, fmt: n, power: r } = kt(), { consumption: i, production: o, net: l, mode: a } = r, f = H(() => a.value === "import" ? e.value.importing : a.value === "export" ? e.value.exporting : e.value.idle);
    return (u, p) => (W(), z("div", cc, [
      w("div", {
        class: "big",
        "data-k": T(a) === "export" ? "power_production" : "power_consumption"
      }, [
        w("span", uc, I(T(n)(Math.abs(T(l)))), 1),
        p[0] || (p[0] = w("span", { class: "unit" }, "kW", -1))
      ], 8, fc),
      w("div", dc, I(f.value), 1),
      w("div", pc, [
        w("span", hc, [
          L(Kt, { name: "down" }),
          w("span", null, I(T(e).cons), 1),
          w("b", null, I(T(n)(T(i))) + " kW", 1)
        ]),
        T(s).has("power_production") ? (W(), z("span", _c, [
          L(Kt, { name: "up" }),
          w("span", null, I(T(e).prod), 1),
          w("b", null, I(T(n)(T(o))) + " kW", 1)
        ])) : Ft("", !0)
      ])
    ]));
  }
}), gc = ".hero{margin-top:14px}.big{display:inline-block;font-size:44px;font-weight:500;line-height:1;letter-spacing:-1px;font-variant-numeric:tabular-nums;padding:2px 4px;margin-left:-4px}.big .unit{font-size:18px;letter-spacing:0;color:var(--fm-muted);margin-left:6px}.import .net{color:var(--fm-import)}.export .net{color:var(--fm-export)}.sub{font-size:13px;color:var(--fm-muted);margin-top:4px}.chips{display:flex;gap:6px;margin-top:10px;flex-wrap:wrap}.chip{display:inline-flex;align-items:center;gap:5px;font-size:12px;padding:5px 10px 5px 7px;border-radius:999px;background:color-mix(in srgb,currentColor 12%,transparent)}.chip span{color:var(--fm-muted)}.chip b{color:var(--fm-text)}.chip .ico{width:14px;height:14px}@media(hover:hover){.chip:hover{filter:brightness(1.15)}}", vc = /* @__PURE__ */ St(mc, [["styles", [gc]]]), yc = {
  class: "spark-wrap",
  "data-k": "power_consumption"
}, xc = ["viewBox"], wc = ["d"], bc = ["d"], kc = ["d"], Sc = ["d"], Cc = { class: "spark-meta" }, Qn = 300, Zn = 64, Tc = 3, Mc = /* @__PURE__ */ lt({
  __name: "PowerSparkline",
  setup(t) {
    const { config: e, t: s, fmt: n, now: r, history: i } = kt(), o = H(() => {
      const { c: l, p: a } = i.value, f = r.value - e.value.history_hours * 36e5, u = Math.max(0.5, ...l.map((v) => v[1]), ...a.map((v) => v[1])) * 1.1, p = { width: Qn, height: Zn, pad: Tc, t0: f, now: r.value, max: u };
      return {
        imp: Yn(l, p),
        exp: Yn(a, p),
        peak: Math.max(0, ...l.map((v) => v[1]))
      };
    });
    return (l, a) => (W(), z("div", yc, [
      (W(), z("svg", {
        class: "spark",
        viewBox: `0 0 ${Qn} ${Zn}`,
        preserveAspectRatio: "none"
      }, [
        a[0] || (a[0] = Yo('<defs><linearGradient id="gc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--fm-import)" stop-opacity=".35"></stop><stop offset="1" stop-color="var(--fm-import)" stop-opacity="0"></stop></linearGradient><linearGradient id="gp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--fm-export)" stop-opacity=".35"></stop><stop offset="1" stop-color="var(--fm-export)" stop-opacity="0"></stop></linearGradient></defs>', 1)),
        w("path", {
          d: o.value.imp.area,
          fill: "url(#gc)"
        }, null, 8, wc),
        w("path", {
          d: o.value.imp.line,
          class: "l imp"
        }, null, 8, bc),
        w("path", {
          d: o.value.exp.area,
          fill: "url(#gp)"
        }, null, 8, kc),
        w("path", {
          d: o.value.exp.line,
          class: "l exp"
        }, null, 8, Sc)
      ], 8, xc)),
      w("div", Cc, [
        w("span", null, I(T(Fe)(T(s).last, { h: T(e).history_hours })), 1),
        w("span", null, "max " + I(T(n)(o.value.peak)) + " kW", 1)
      ])
    ]));
  }
}), Ac = ".spark-wrap{margin:6px 0 4px;padding:4px;margin-inline:-4px}.spark{width:100%;height:64px;display:block}.spark .l{fill:none;stroke-width:1.6;vector-effect:non-scaling-stroke;stroke-linejoin:round}.spark .imp{stroke:var(--fm-import)}.spark .exp{stroke:var(--fm-export)}.spark-meta{display:flex;justify-content:space-between;font-size:11px;color:var(--fm-muted);margin-top:4px}", $c = /* @__PURE__ */ St(Mc, [["styles", [Ac]]]), Ec = { class: "tile" }, Pc = { class: "tile-h" }, Oc = { class: "tv-row" }, Rc = { class: "imp" }, Ic = { class: "exp" }, Xn = /* @__PURE__ */ lt({
  __name: "TariffTile",
  props: {
    period: { type: String },
    icon: { type: null }
  },
  setup(t) {
    const e = t, { t: s, ent: n, fmt: r, stats: i } = kt(), o = `consumption_${e.period}`, l = `production_${e.period}`;
    return (a, f) => (W(), z("div", Ec, [
      w("div", Pc, [
        L(Kt, {
          name: t.icon,
          class: ft(`c-${t.period}`)
        }, null, 8, ["name", "class"]),
        w("span", null, I(T(s)[t.period]), 1)
      ]),
      w("div", Oc, [
        w("div", {
          class: "tv",
          "data-k": o
        }, [
          w("b", Rc, [
            ne(I(T(r)(T(i).today[o], 1)), 1),
            f[0] || (f[0] = w("i", null, "kWh", -1))
          ]),
          w("small", null, [
            L(Kt, { name: "down" }),
            ne(I(T(s).cons), 1)
          ])
        ]),
        T(n).has(l) ? (W(), z("div", {
          key: 0,
          class: "tv",
          "data-k": l
        }, [
          w("b", Ic, [
            ne(I(T(r)(T(i).today[l], 1)), 1),
            f[1] || (f[1] = w("i", null, "kWh", -1))
          ]),
          w("small", null, [
            L(Kt, { name: "up" }),
            ne(I(T(s).prod), 1)
          ])
        ])) : Ft("", !0)
      ])
    ]));
  }
}), Nc = { class: "tile-h" }, Fc = { class: "tv-row" }, Dc = ["data-k"], jc = ["data-k"], Hc = ["viewBox"], Lc = ["x", "y", "width", "height"], Wc = { class: "mini-meta" }, Vc = { key: 0 }, Es = 120, Ps = 28, tr = 1.2, Bc = /* @__PURE__ */ lt({
  __name: "UtilityTile",
  props: {
    kind: { type: String },
    icon: { type: null },
    wide: { type: Boolean }
  },
  setup(t) {
    const e = t, { config: s, t: n, ent: r, fmt: i, stats: o } = kt(), l = H(() => di(r, e.kind)), a = H(() => {
      const u = o.mini[e.kind] ?? [], p = u.length, v = Math.max(...u) || 1;
      return u.map((y, E) => {
        const M = y > 0 ? Math.max(2, y / v * (Ps - 1)) : 1;
        return { x: E * Es / p + tr / 2, y: Ps - M, w: Es / p - tr, h: M, on: y > 0 };
      });
    }), f = H(() => (o.mini[e.kind] ?? []).reduce((u, p) => u + p, 0));
    return (u, p) => T(r).has(t.kind) ? (W(), z("div", {
      key: 0,
      class: ft(["tile", { wide: t.wide }])
    }, [
      w("div", Nc, [
        L(Kt, {
          name: t.icon,
          class: ft(`c-${t.kind}`)
        }, null, 8, ["name", "class"]),
        w("span", null, I(T(n)[t.kind]), 1)
      ]),
      w("div", Fc, [
        w("div", {
          class: "tv",
          "data-k": t.kind
        }, [
          w("b", null, [
            ne(I(T(i)(T(o).today[t.kind], l.value.decimals)), 1),
            w("i", null, I(l.value.symbol), 1)
          ])
        ], 8, Dc)
      ]),
      w("div", {
        class: "mini",
        "data-k": t.kind
      }, [
        (W(), z("svg", {
          viewBox: `0 0 ${Es} ${Ps}`,
          preserveAspectRatio: "none",
          class: ft(`mini-${t.kind}`)
        }, [
          (W(!0), z(ot, null, tn(a.value, (v, y) => (W(), z("rect", {
            key: y,
            x: v.x,
            y: v.y,
            width: v.w,
            height: v.h,
            rx: "1",
            class: ft(v.on ? "on" : "off")
          }, null, 10, Lc))), 128))
        ], 10, Hc)),
        w("div", Wc, [
          w("span", null, I(T(Fe)(T(n).last2h, { h: T(s).history_hours })), 1),
          a.value.length ? (W(), z("span", Vc, I(T(i)(f.value, l.value.decimals)) + " " + I(l.value.symbol), 1)) : Ft("", !0)
        ])
      ], 8, jc)
    ], 2)) : Ft("", !0);
  }
}), Kc = ".mini{margin:0 -4px;padding:2px 4px}.mini svg{width:100%;height:28px;display:block}.mini rect.on{opacity:.85}.mini rect.off{opacity:.2}.mini-gas rect{fill:var(--fm-gas)}.mini-water rect{fill:var(--fm-water)}.mini-meta{display:flex;justify-content:space-between;font-size:10px;color:var(--fm-muted);margin-top:3px;font-variant-numeric:tabular-nums}", er = /* @__PURE__ */ St(Bc, [["styles", [Kc]]]), Uc = { class: "label" }, zc = { class: "tiles" }, qc = /* @__PURE__ */ lt({
  __name: "TodayTiles",
  setup(t) {
    const { t: e, ent: s } = kt();
    return (n, r) => (W(), z(ot, null, [
      w("div", Uc, I(T(e).today), 1),
      w("div", zc, [
        L(Xn, {
          period: "day",
          icon: "sun"
        }),
        L(Xn, {
          period: "night",
          icon: "moon"
        }),
        L(er, {
          kind: "gas",
          icon: "flame",
          wide: !T(s).has("water")
        }, null, 8, ["wide"]),
        L(er, {
          kind: "water",
          icon: "drop",
          wide: !T(s).has("gas")
        }, null, 8, ["wide"])
      ])
    ], 64));
  }
}), Gc = ".tiles{display:grid;grid-template-columns:1fr 1fr;gap:8px}.tile{background:var(--fm-soft);border-radius:var(--fm-radius);padding:10px;display:flex;flex-direction:column;gap:6px;min-width:0}.tile.wide{grid-column:span 2}.tile-h{display:flex;align-items:center;gap:6px;font-size:13px;color:var(--fm-muted)}.tile-h .ico{width:18px;height:18px}.tv-row{display:flex;gap:4px}.tv{flex:1;display:flex;flex-direction:column;gap:2px;padding:4px 6px;margin:0 -2px;min-width:0}.tv b{font-size:18px;white-space:nowrap}.tv b i{font-style:normal;font-size:11px;color:var(--fm-muted);margin-left:3px;font-weight:400}.tv small{font-size:11px;color:var(--fm-muted);display:flex;align-items:center;gap:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tv small .ico{width:11px;height:11px}.c-day{color:var(--fm-day)}.c-night{color:var(--fm-night)}.c-gas{color:var(--fm-gas)}.c-water{color:var(--fm-water)}@media(hover:hover){.tile .tv:hover{background:var(--fm-hover)}}", Yc = /* @__PURE__ */ St(qc, [["styles", [Gc]]]), Jc = /* @__PURE__ */ lt({
  __name: "MeterCard",
  props: {
    hass: { type: Object },
    config: { type: Object }
  },
  setup(t) {
    const e = t, { ent: s, power: n } = ia(e);
    function r(i) {
      const o = i.composedPath().find(
        (l) => l instanceof Element && !!l.dataset?.k
      );
      !o || !i.currentTarget || (i.stopPropagation(), oa(i.currentTarget, s, o.dataset.k));
    }
    return (i, o) => (W(), z("ha-card", {
      class: ft(T(n).mode.value),
      onClick: r
    }, [
      L(Pa),
      L(vc),
      L(ac),
      L($c),
      L(Sa),
      L(Yc),
      L(nc),
      L(Da)
    ], 2));
  }
}), Qc = /* @__PURE__ */ lt({
  __name: "FluviusMeterCard",
  props: {
    hass: { type: Object },
    config: { type: Object }
  },
  setup(t) {
    const e = t, s = /* @__PURE__ */ cs(0);
    return le(() => e.config, () => s.value++), (n, r) => t.hass && t.config ? (W(), nn(Jc, {
      key: s.value,
      hass: t.hass,
      config: t.config
    }, null, 8, ["hass", "config"])) : Ft("", !0);
  }
}), Zc = ":host{--fm-import: var(--energy-grid-consumption-color, #488fc2);--fm-export: var(--energy-grid-return-color, #8353d1);--fm-gas: var(--energy-gas-color, #8e021b);--fm-water: var(--energy-water-color, #00bcd4);--fm-ok: var(--success-color, #43a047);--fm-warn: var(--warning-color, #ffa600);--fm-bad: var(--error-color, #db4437);--fm-day: var(--fluvius-day-color, var(--warning-color, #ffa600));--fm-night: var(--fluvius-night-color, var(--state-icon-color, #44739e));--fm-text: var(--primary-text-color, #212121);--fm-muted: var(--secondary-text-color, #727272);--fm-line: var(--divider-color, rgba(127,127,127,.2));--fm-soft: color-mix(in srgb, var(--fm-text) 5%, transparent);--fm-hover: color-mix(in srgb, var(--fm-text) 9%, transparent);--fm-radius: var(--ha-card-border-radius, 12px)}ha-card{display:block;padding:16px;color:var(--fm-text)}ha-card:not(:defined){background:var(--ha-card-background, var(--card-background-color, #fff));border-radius:var(--fm-radius);border:var(--ha-card-border-width, 1px) solid var(--ha-card-border-color, var(--fm-line));box-shadow:var(--ha-card-box-shadow, none)}b{font-weight:500;font-variant-numeric:tabular-nums}[data-k]{cursor:pointer;border-radius:8px;transition:background .15s}.ico{width:16px;height:16px;flex:none}.imp{color:var(--fm-import)}.exp{color:var(--fm-export)}.label{font-size:11px;font-weight:500;text-transform:uppercase;letter-spacing:.8px;color:var(--fm-muted);margin:18px 0 8px}@media(hover:hover){[data-k]:not(.ph-bar):not(.chip):not(.ring):hover{background-color:var(--fm-hover)}}", Xc = /* @__PURE__ */ St(Qc, [["styles", [Zc]]]);
class tf extends (/* @__PURE__ */ ai(Xc)) {
  static getConfigElement() {
    return document.createElement(Os);
  }
  static getStubConfig() {
    return {};
  }
  setConfig(e) {
    if (!e) throw new Error("Invalid configuration");
    this.config = wi(e);
  }
  getCardSize() {
    return 11;
  }
  getGridOptions() {
    return { columns: 12, min_columns: 6, rows: "auto" };
  }
}
class ef extends (/* @__PURE__ */ ai(Gl)) {
  setConfig(e) {
    this.config = e ?? {};
  }
}
customElements.get($e) || customElements.define($e, tf);
customElements.get(Os) || customElements.define(Os, ef);
window.customCards = window.customCards || [];
window.customCards.some((t) => t.type === $e) || window.customCards.push({
  type: $e,
  name: "Fluvius Meter Card",
  description: "Live vermogen, capaciteitstarief, dagverbruik, gas/water en fasen voor de Belgische digitale meter.",
  preview: !0
});
console.info("%c FLUVIUS-METER-CARD %c v1.0.0 ", "background:#488fc2;color:#fff", "");
