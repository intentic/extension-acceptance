import { hostSlot as e, sandboxLedger as t, sandboxPoll as n } from "@intentic/extension-api";
import { Fragment as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createTextVNode as l, createVNode as u, defineComponent as d, mergeProps as f, normalizeClass as p, onBeforeUnmount as m, onMounted as h, openBlock as g, reactive as ee, ref as _, renderList as te, resolveDirective as ne, toDisplayString as v, unref as y, vModelText as re, watch as ie, withCtx as b, withDirectives as x, withKeys as ae, withModifiers as oe } from "vue";
import { AgentRunButton as se, Button as ce, Card as le, Checkbox as ue, DisclosureRow as de, Icon as S, Markdown as fe, MarkdownDocument as pe, Notice as me, Page as he, PageAction as ge, PageHeader as _e, Popover as ve, RowGroup as ye, SkeletonSnapshot as be, StatusBadge as xe, appLink as Se, noticeOf as Ce, timeAgo as we, ui as Te, useAgentRunPick as Ee, vAction as De, vSkeletonSource as Oe } from "@intentic/extension-ui";
import { useQuery as C, useQueryClient as ke } from "@tanstack/vue-query";
//#region \0rolldown/runtime.js
var Ae = Object.defineProperty, w = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, je = (e, t) => {
	let n = {};
	for (var r in e) Ae(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || Ae(n, Symbol.toStringTag, { value: "Module" }), n;
};
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/util.js
function Me(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function Ne(e, t = "|") {
	return e.map((e) => Je(e)).join(t);
}
function Pe(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function Fe(e) {
	return { get value() {
		{
			let t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
	} };
}
function Ie(e) {
	return e == null;
}
function Le(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function Re(e, t) {
	let n = e / t, r = Math.round(n), i = 4 * 2 ** -52 * Math.max(Math.abs(n), 1);
	return Math.abs(n - r) < i ? 0 : n - r;
}
function ze(e, t, n) {
	let r;
	Object.defineProperty(e, t, {
		get() {
			if (r !== bt) return r === void 0 && (r = bt, r = n()), r;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function T(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function Be(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function Ve(e) {
	return JSON.stringify(e);
}
function He(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
function Ue(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function We(e) {
	if (Ue(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return Ue(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function Ge(e) {
	return We(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
function Ke(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function qe(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function E(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function Je(e) {
	return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Ye(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin !== void 0 && e[t]._zod.optout === "optional");
}
function Xe(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	return qe(e, Be(e._zod.def, {
		get shape() {
			let e = {};
			for (let r of Reflect.ownKeys(t)) {
				if (!Object.prototype.hasOwnProperty.call(n.shape, r)) throw Error(`Unrecognized key: "${String(r)}"`);
				t[r] && T(e, r, n.shape[r]);
			}
			return T(this, "shape", e), e;
		},
		checks: []
	}));
}
function Ze(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	return qe(e, Be(e._zod.def, {
		get shape() {
			let r = { ...e._zod.def.shape };
			for (let e of Reflect.ownKeys(t)) {
				if (!Object.prototype.hasOwnProperty.call(n.shape, e)) throw Error(`Unrecognized key: "${String(e)}"`);
				t[e] && delete r[e];
			}
			return T(this, "shape", r), r;
		},
		checks: []
	}));
}
function Qe(e, t) {
	if (!We(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = e._zod.def.shape;
		for (let e of Reflect.ownKeys(t)) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return qe(e, Be(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return T(this, "shape", n), n;
	} }));
}
function $e(e, t) {
	if (!We(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return qe(e, Be(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return T(this, "shape", n), n;
	} }));
}
function et(e, t) {
	if (!t?._zod?.def) throw Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	return qe(e, Be(e._zod.def, {
		get shape() {
			let n = {
				...e._zod.def.shape,
				...t._zod.def.shape
			};
			return T(this, "shape", n), n;
		},
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function tt(e, t, n, r = "partial") {
	let i = t._zod.def.checks;
	if (i && i.length > 0) throw Error(`.${r}() cannot be used on object schemas containing refinements`);
	return qe(t, Be(t._zod.def, {
		get shape() {
			let r = t._zod.def.shape, i = { ...r };
			if (n) for (let t of Reflect.ownKeys(n)) {
				if (!Object.prototype.hasOwnProperty.call(r, t)) throw Error(`Unrecognized key: "${String(t)}"`);
				n[t] && (i[t] = e ? new e({
					type: "optional",
					innerType: r[t]
				}) : r[t]);
			}
			else for (let t of Reflect.ownKeys(r)) i[t] = e ? new e({
				type: "optional",
				innerType: r[t]
			}) : r[t];
			return T(this, "shape", i), i;
		},
		checks: []
	}));
}
function nt(e, t, n) {
	return qe(t, Be(t._zod.def, { get shape() {
		let r = t._zod.def.shape, i = { ...r };
		if (n) for (let t of Reflect.ownKeys(n)) {
			if (!Object.prototype.hasOwnProperty.call(i, t)) throw Error(`Unrecognized key: "${String(t)}"`);
			n[t] && (i[t] = new e({
				type: "nonoptional",
				innerType: r[t]
			}));
		}
		else for (let t of Reflect.ownKeys(r)) i[t] = new e({
			type: "nonoptional",
			innerType: r[t]
		});
		return T(this, "shape", i), i;
	} }));
}
function rt(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function it(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function at(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function ot(e) {
	return typeof e == "string" ? e : e?.message;
}
function st(e, t, n) {
	var r;
	for (let i = t; i < e.length; i++) (r = e[i]).schema ?? (r.schema = n);
}
function ct(e, t, n) {
	var r;
	let i = e.inst?._zod?.traits;
	i?.has("$ZodType") && (i.has("$ZodCheck") ? (r = e).schema ?? (r.schema = e.inst) : e.schema = e.inst);
	let a = e.schema === e.inst ? void 0 : e.schema?._zod.def?.error, o = e.message ? e.message : ot(e.inst?._zod.def?.error?.(e)) ?? ot(a?.(e)) ?? ot(t?.error?.(e)) ?? ot(n.customError?.(e)) ?? ot(n.localeError?.(e)) ?? "Invalid input", { inst: s, schema: c, continue: l, input: u, ...d } = e;
	return d.path ??= [], d.message = o, t?.reportInput && (d.input = u), d;
}
function lt(e) {
	let t = e.length;
	if (!Tt.test(e)) return t;
	let n = t;
	for (let r = 0; r < t - 1; r++) (e.charCodeAt(r) & 64512) == 55296 && (e.charCodeAt(r + 1) & 64512) == 56320 && (n--, r++);
	return n;
}
function ut(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function dt(e) {
	let t = typeof e;
	switch (t) {
		case "number": return Number.isNaN(e) ? "nan" : "number";
		case "object": {
			if (e === null) return "null";
			if (Array.isArray(e)) return "array";
			let t = e;
			if (t && Object.getPrototypeOf(t) !== Object.prototype && "constructor" in t && t.constructor) return t.constructor.name;
		}
	}
	return t;
}
function ft(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
function pt(e, t) {
	for (let n in t) {
		let r = Object.getOwnPropertyDescriptor(t, n);
		r.get ? Object.defineProperty(e, n, {
			...r,
			enumerable: !1
		}) : gt(e, n, r.value);
	}
}
function mt(e, t, n, r = !0) {
	return Object.defineProperty(e, t, {
		configurable: !0,
		writable: !0,
		enumerable: r,
		value: n
	}), n;
}
function ht(e, t, n) {
	return mt(e, t, n, !1);
}
function gt(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		get() {
			return this == null ? n : mt(this, t, n.bind(this));
		},
		set(e) {
			mt(this, t, e);
		}
	});
}
function _t(e, t) {
	let n = Object.getPrototypeOf(e);
	return t in n ? void 0 : n;
}
function D(e, t, n) {
	let r = Object.getPrototypeOf(e._zod);
	if (t in r && Et !== e._zod) {
		Et = void 0;
		return;
	}
	Et = e._zod, Object.defineProperty(r, t, {
		configurable: !0,
		get() {
			Object.defineProperty(this, t, Ot);
			let e = Dt;
			Dt = !1;
			try {
				let r = n(this);
				return Dt ? delete this[t] : Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: r
				}), Dt ||= e, r;
			} catch (n) {
				throw delete this[t], Dt ||= e, n;
			}
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				value: e
			});
		}
	});
}
function vt(e, t, n, r) {
	let i = _t(e, t);
	i && Object.defineProperty(i, t, {
		configurable: !0,
		get() {
			let e = {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: void 0
			};
			return Object.defineProperty(this, t, e), e.value = n(this), Object.defineProperty(this, t, e), e.value;
		},
		set(e) {
			Object.defineProperty(this, t, {
				configurable: !0,
				writable: !0,
				enumerable: r,
				value: e
			});
		}
	});
}
function yt(e) {
	let t = () => e;
	return t[kt] = !0, t;
}
var bt, xt, St, Ct, wt, Tt, Et, Dt, Ot, kt, At = w((() => {
	zt(), bt = /* @__PURE__*/ Symbol("evaluating"), xt = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {}, St = /* @__PURE__*/ Fe(() => {
		if (Rt.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
		try {
			return Function(""), !0;
		} catch {
			return !1;
		}
	}), Ct = /* @__PURE__*/ new Set([
		"string",
		"number",
		"symbol"
	]), wt = {
		safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
		int32: [-2147483648, 2147483647],
		uint32: [0, 4294967295],
		float32: [-34028234663852886e22, 34028234663852886e22],
		float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
	}, Tt = /[\uD800-\uDBFF]/, Dt = !1, Ot = {
		configurable: !0,
		get() {
			Dt = !0;
		}
	}, kt = "~constantCatch";
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/core.js
function jt(e) {
	let t = Ft;
	if (t) {
		let n = t.stackTraceLimit;
		if (typeof n == "number") {
			try {
				t.stackTraceLimit = 0;
			} catch {
				return Ft = null, new e();
			}
			try {
				return new e();
			} finally {
				t.stackTraceLimit = n;
			}
		}
	}
	return new e();
}
function O(e, t, n, r) {
	let i = {};
	function a(e) {
		this.def = e, this.constr = d, this.traits = /* @__PURE__ */ new Set();
	}
	a.prototype = i;
	let o = n, s = o && /* @__PURE__ */ new WeakSet();
	function c(n, r) {
		if (!n._zod) {
			Pt.value = new a(r);
			try {
				Object.defineProperty(n, "_zod", Pt);
			} finally {
				Pt.value = void 0;
			}
		}
		if (n._zod.traits.has(e)) return;
		if (n._zod.traits.add(e), t(n, r), s) {
			let e = Object.getPrototypeOf(n), t = n._zod.constr.prototype, r = e;
			for (; r && r !== t;) r = Object.getPrototypeOf(r);
			let i = r ?? e;
			s.has(i) || (s.add(i), pt(i, o));
		}
		let i = d.prototype;
		for (let e in i) Object.prototype.hasOwnProperty.call(i, e) && (e in n || (n[e] = i[e].bind(n)));
	}
	let l = r?.Parent ?? Object;
	class u extends l {}
	Object.defineProperty(u, "name", { value: e });
	function d(e) {
		let t = r?.Parent ? jt(u) : this;
		c(t, e);
		let n = t._zod.deferred;
		if (n) {
			for (let e of n) e();
			t._zod.deferred = void 0;
		}
		let i = globalThis.__zod_globalConfig?.postProcessor;
		return i && i(t), t;
	}
	return Object.defineProperty(d, "init", { value: c }), Object.defineProperty(d, Symbol.hasInstance, { value: (t) => r?.Parent && t instanceof r.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(d, "name", { value: e }), d;
}
function Mt(e) {
	return e && Object.assign(Rt, e), Rt;
}
var Nt, Pt, Ft, It, Lt, Rt, zt = w((() => {
	At(), Pt = {
		value: void 0,
		enumerable: !1
	}, Ft = "captureStackTrace" in Error ? Error : null, It = class extends Error {
		constructor() {
			super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
		}
	}, Lt = class extends Error {
		constructor(e) {
			super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
		}
	}, (Nt = globalThis).__zod_globalConfig ?? (Nt.__zod_globalConfig = {}), Rt = globalThis.__zod_globalConfig;
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/errors.js
function Bt() {
	let e = this._zod;
	return e.message ??= JSON.stringify(e.def, Pe, 2), e.message;
}
function Vt(e) {
	this._zod.message = e;
}
function Ht(e, t, n) {
	return Object.prototype.hasOwnProperty.call(e, t) || (t === "__proto__" ? Object.defineProperty(e, t, {
		value: n(),
		writable: !0,
		enumerable: !0,
		configurable: !0
	}) : e[t] = n()), e[t];
}
function Ut(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? Ht(n, i.path[0], () => []).push(t(i)) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function Wt(e, t = (e) => e.message) {
	let n = { _errors: [] }, r = (e, i = []) => {
		for (let a of e.issues) if (a.code === "invalid_union" && a.errors.length) a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
		else if (a.code === "invalid_key") r({ issues: a.issues }, [...i, ...a.path]);
		else if (a.code === "invalid_element") r({ issues: a.issues }, [...i, ...a.path]);
		else {
			let e = [...i, ...a.path];
			if (e.length === 0) n._errors.push(t(a));
			else {
				let r = n, i = 0;
				for (; i < e.length;) {
					let n = e[i], o = i === e.length - 1;
					if (n === "_errors") {
						o && r._errors.push(t(a)), i++;
						continue;
					}
					Object.prototype.hasOwnProperty.call(r, n) || Object.defineProperty(r, n, {
						value: { _errors: [] },
						enumerable: !0,
						writable: !0,
						configurable: !0
					});
					let s = r[n];
					o && s._errors.push(t(a)), r = s, i++;
				}
			}
		}
	};
	return r(e), n;
}
var Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt = w((() => {
	zt(), At(), Gt = {
		get: Bt,
		set: Vt,
		enumerable: !0,
		configurable: !0
	}, Kt = {
		value: void 0,
		enumerable: !1
	}, qt = {
		value: void 0,
		enumerable: !1
	}, Jt = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), Yt = (e, t) => {
		e.name = "$ZodError", Kt.value = e._zod, Object.defineProperty(e, "_zod", Kt), qt.value = t, Object.defineProperty(e, "issues", qt), Kt.value = void 0, qt.value = void 0, Object.defineProperty(e, "message", Gt);
		let n = Object.getPrototypeOf(e);
		Jt.has(n) || (Jt.add(n), Object.defineProperty(n, "toString", {
			configurable: !0,
			enumerable: !1,
			get() {
				let e = () => this.message;
				return Object.defineProperty(this, "toString", {
					value: e,
					configurable: !0,
					writable: !0
				}), e;
			},
			set(e) {
				Object.defineProperty(this, "toString", {
					value: e,
					configurable: !0,
					writable: !0
				});
			}
		}));
	}, Xt = O("$ZodError", Yt), Zt = O("$ZodError", Yt, void 0, { Parent: Error });
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/parse.js
function $t(e, t) {
	return {
		callee: t?.callee ?? e,
		Err: t?.Err
	};
}
var en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn = w((() => {
	zt(), Qt(), At(), en = (e) => {
		let t = (n, r, i, a) => {
			let o = i ? {
				...i,
				async: !1
			} : { async: !1 }, s = n._zod.run({
				value: r,
				issues: []
			}, o);
			if (s instanceof Promise) throw new It();
			if (s.issues.length) {
				let n = new ((a?.Err) ?? e)(s.issues.map((e) => ct(e, o, Mt())));
				throw xt(n, a?.callee ?? t), n;
			}
			return s.value;
		};
		return t;
	}, tn = (e) => {
		let t = async (n, r, i, a) => {
			let o = i ? {
				...i,
				async: !0
			} : { async: !0 }, s = n._zod.run({
				value: r,
				issues: []
			}, o);
			if (s instanceof Promise && (s = await s), s.issues.length) {
				let n = new ((a?.Err) ?? e)(s.issues.map((e) => ct(e, o, Mt())));
				throw xt(n, a?.callee ?? t), n;
			}
			return s.value;
		};
		return t;
	}, nn = (e) => (t, n, r) => {
		let i = r ? {
			...r,
			async: !1
		} : { async: !1 }, a = t._zod.run({
			value: n,
			issues: []
		}, i);
		if (a instanceof Promise) throw new It();
		return a.issues.length ? {
			success: !1,
			error: new (e ?? Xt)(a.issues.map((e) => ct(e, i, Mt())))
		} : {
			success: !0,
			data: a.value
		};
	}, rn = /* @__PURE__*/ nn(Zt), an = (e) => async (t, n, r) => {
		let i = r ? {
			...r,
			async: !0
		} : { async: !0 }, a = t._zod.run({
			value: n,
			issues: []
		}, i);
		return a instanceof Promise && (a = await a), a.issues.length ? {
			success: !1,
			error: new e(a.issues.map((e) => ct(e, i, Mt())))
		} : {
			success: !0,
			data: a.value
		};
	}, on = /* @__PURE__*/ an(Zt), sn = (e) => {
		let t = en(e), n = (e, r, i, a) => {
			let o = i ? {
				...i,
				direction: "backward"
			} : { direction: "backward" };
			return t(e, r, o, $t(n, a));
		};
		return n;
	}, cn = (e) => {
		let t = en(e), n = (e, r, i, a) => t(e, r, i, $t(n, a));
		return n;
	}, ln = (e) => {
		let t = tn(e), n = async (e, r, i, a) => {
			let o = i ? {
				...i,
				direction: "backward"
			} : { direction: "backward" };
			return await t(e, r, o, $t(n, a));
		};
		return n;
	}, un = (e) => {
		let t = tn(e), n = async (e, r, i, a) => await t(e, r, i, $t(n, a));
		return n;
	}, dn = (e) => (t, n, r) => {
		let i = r ? {
			...r,
			direction: "backward"
		} : { direction: "backward" };
		return nn(e)(t, n, i);
	}, fn = (e) => (t, n, r) => nn(e)(t, n, r), pn = (e) => async (t, n, r) => {
		let i = r ? {
			...r,
			direction: "backward"
		} : { direction: "backward" };
		return an(e)(t, n, i);
	}, mn = (e) => async (t, n, r) => an(e)(t, n, r);
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/regexes.js
function gn(e) {
	return RegExp(`^[a-zA-Z0-9_-]{${e}}$`);
}
function _n() {
	return new RegExp(Mn, "u");
}
function vn(e) {
	return RegExp(`^${e}$`);
}
function yn(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : e.seconds ? `${t}:[0-5]\\d(?:\\.\\d+)?` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function bn(e) {
	return RegExp(`^${yn(e)}$`);
}
function xn(e) {
	let t = ["Z"];
	e.offset && t.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let n = `${yn({
		precision: e.precision,
		seconds: !0
	})}(?:${t.join("|")})`, r = e.local ? `${n}|${yn({ precision: e.precision })}` : n;
	return RegExp(`^${Vn}T(?:${r})$`);
}
var Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn = w((() => {
	Sn = /^[cC][0-9a-z]{6,}$/, Cn = /^[0-9a-z]+$/, wn = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Tn = /^[0-9a-vA-V]{20}$/, En = /^[A-Za-z0-9]{27}$/, Dn = /^[a-zA-Z0-9_-]{21}$/, On = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, kn = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, An = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, jn = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Mn = "^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$", Nn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Pn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Fn = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, In = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ln = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Rn = /^[A-Za-z0-9_-]*$/, zn = /^https?$/, Bn = /^\+[1-9]\d{6,14}$/, Vn = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Hn = /*@__PURE__*/ vn(Vn), Un = (e) => {
		let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
		return RegExp(`^${t}$`);
	}, Wn = /^-?\d+$/, Gn = /^-?\d+(?:\.\d+)?$/, Kn = /^(?:true|false)$/i, qn = /^[^A-Z]*$/, Jn = /^[^a-z]*$/;
})), Xn, Zn, Qn, $n, er, tr, nr, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr = w((() => {
	zt(), Yn(), At(), Xn = /*@__PURE__*/ O("$ZodCheck", (e, t) => {
		var n;
		e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
	}), Zn = (e) => {
		let t = e.value;
		return !Ie(t) && t.length !== void 0;
	}, Qn = {
		number: "number",
		bigint: "bigint",
		object: "date"
	}, $n = /*@__PURE__*/ O("$ZodCheckLessThan", (e, t) => {
		Xn.init(e, t);
		let n = Qn[typeof t.value];
		e._zod.onattach.push((e) => {
			let n = e._zod.bag, r = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Infinity;
			t.value < r && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
		}), e._zod.check = (r) => {
			(t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
				origin: Qn[typeof r.value] ?? n,
				code: "too_big",
				maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
				input: r.value,
				inclusive: t.inclusive,
				inst: e,
				continue: !t.abort
			});
		};
	}), er = /*@__PURE__*/ O("$ZodCheckGreaterThan", (e, t) => {
		Xn.init(e, t);
		let n = Qn[typeof t.value];
		e._zod.onattach.push((e) => {
			let n = e._zod.bag, r = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? -Infinity;
			t.value > r && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
		}), e._zod.check = (r) => {
			(t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
				origin: Qn[typeof r.value] ?? n,
				code: "too_small",
				minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
				input: r.value,
				inclusive: t.inclusive,
				inst: e,
				continue: !t.abort
			});
		};
	}), tr = /*@__PURE__*/ O("$ZodCheckMultipleOf", (e, t) => {
		Xn.init(e, t), e._zod.onattach.push((e) => {
			var n;
			(n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
		}), e._zod.check = (n) => {
			if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
			(typeof n.value == "bigint" ? t.value !== BigInt(0) && n.value % t.value === BigInt(0) : Re(n.value, t.value) === 0) || n.issues.push({
				origin: typeof n.value,
				code: "not_multiple_of",
				divisor: t.value,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), nr = /*@__PURE__*/ O("$ZodCheckNumberFormat", (e, t) => {
		Xn.init(e, t), t.format = t.format || "float64";
		let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = wt[t.format];
		e._zod.onattach.push((e) => {
			let r = e._zod.bag;
			r.format = t.format, r.minimum = i, r.maximum = a, n && (r.pattern = Wn);
		}), e._zod.check = (o) => {
			let s = o.value;
			if (n) {
				if (!Number.isInteger(s)) {
					o.issues.push({
						expected: r,
						format: t.format,
						code: "invalid_type",
						continue: !1,
						input: s,
						inst: e
					});
					return;
				}
				if (!Number.isSafeInteger(s)) {
					s > 0 ? o.issues.push({
						input: s,
						code: "too_big",
						maximum: 2 ** 53 - 1,
						note: "Integers must be within the safe integer range.",
						inst: e,
						origin: r,
						inclusive: !0,
						continue: !t.abort
					}) : o.issues.push({
						input: s,
						code: "too_small",
						minimum: -(2 ** 53 - 1),
						note: "Integers must be within the safe integer range.",
						inst: e,
						origin: r,
						inclusive: !0,
						continue: !t.abort
					});
					return;
				}
			}
			s < i && o.issues.push({
				origin: "number",
				input: s,
				code: "too_small",
				minimum: i,
				inclusive: !0,
				inst: e,
				continue: !t.abort
			}), s > a && o.issues.push({
				origin: "number",
				input: s,
				code: "too_big",
				maximum: a,
				inclusive: !0,
				inst: e,
				continue: !t.abort
			});
		};
	}), rr = /*@__PURE__*/ O("$ZodCheckMaxLength", (e, t) => {
		var n;
		Xn.init(e, t), (n = e._zod.def).when ?? (n.when = Zn), e._zod.onattach.push((e) => {
			let n = e._zod.bag.maximum ?? Infinity;
			t.maximum < n && (e._zod.bag.maximum = t.maximum);
		}), e._zod.check = (n) => {
			let r = n.value, i = r.length;
			if ((typeof r == "string" && i > t.maximum ? lt(r) : i) <= t.maximum) return;
			let a = ut(r);
			n.issues.push({
				origin: a,
				code: "too_big",
				maximum: t.maximum,
				inclusive: !0,
				input: r,
				inst: e,
				continue: !t.abort
			});
		};
	}), ir = /*@__PURE__*/ O("$ZodCheckMinLength", (e, t) => {
		var n;
		Xn.init(e, t), (n = e._zod.def).when ?? (n.when = Zn), e._zod.onattach.push((e) => {
			let n = e._zod.bag.minimum ?? -Infinity;
			t.minimum > n && (e._zod.bag.minimum = t.minimum);
		}), e._zod.check = (n) => {
			let r = n.value, i = r.length;
			if ((typeof r == "string" && i >= t.minimum && i < t.minimum * 2 ? lt(r) : i) >= t.minimum) return;
			let a = ut(r);
			n.issues.push({
				origin: a,
				code: "too_small",
				minimum: t.minimum,
				inclusive: !0,
				input: r,
				inst: e,
				continue: !t.abort
			});
		};
	}), ar = /*@__PURE__*/ O("$ZodCheckLengthEquals", (e, t) => {
		var n;
		Xn.init(e, t), (n = e._zod.def).when ?? (n.when = Zn), e._zod.onattach.push((e) => {
			let n = e._zod.bag;
			n.minimum = t.length, n.maximum = t.length, n.length = t.length;
		}), e._zod.check = (n) => {
			let r = n.value, i = r.length, a = typeof r == "string" && i >= t.length && i <= t.length * 2 ? lt(r) : i;
			if (a === t.length) return;
			let o = ut(r), s = a > t.length;
			n.issues.push({
				origin: o,
				...s ? {
					code: "too_big",
					maximum: t.length
				} : {
					code: "too_small",
					minimum: t.length
				},
				inclusive: !0,
				exact: !0,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), or = /*@__PURE__*/ O("$ZodCheckStringFormat", (e, t) => {
		var n, r;
		Xn.init(e, t), e._zod.onattach.push((e) => {
			let n = e._zod.bag;
			n.format = t.format, t.pattern && (n.patterns ??= /* @__PURE__ */ new Set(), n.patterns.add(t.pattern));
		}), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
			t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: t.format,
				input: n.value,
				...t.pattern ? { pattern: t.pattern.toString() } : {},
				inst: e,
				continue: !t.abort
			});
		}) : (r = e._zod).check ?? (r.check = () => {});
	}), sr = /*@__PURE__*/ O("$ZodCheckRegex", (e, t) => {
		or.init(e, t), e._zod.check = (n) => {
			t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "regex",
				input: n.value,
				pattern: t.pattern.toString(),
				inst: e,
				continue: !t.abort
			});
		};
	}), cr = /*@__PURE__*/ O("$ZodCheckLowerCase", (e, t) => {
		t.pattern ??= qn, or.init(e, t);
	}), lr = /*@__PURE__*/ O("$ZodCheckUpperCase", (e, t) => {
		t.pattern ??= Jn, or.init(e, t);
	}), ur = /*@__PURE__*/ O("$ZodCheckIncludes", (e, t) => {
		Xn.init(e, t);
		let n = Ke(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position},}${n}` : n);
		t.pattern = r, e._zod.onattach.push((e) => {
			let t = e._zod.bag;
			t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(r);
		}), e._zod.check = (n) => {
			n.value.includes(t.includes, t.position) || n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "includes",
				includes: t.includes,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), dr = /*@__PURE__*/ O("$ZodCheckStartsWith", (e, t) => {
		Xn.init(e, t);
		let n = RegExp(`^${Ke(t.prefix)}.*`);
		t.pattern ??= n, e._zod.onattach.push((e) => {
			let t = e._zod.bag;
			t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
		}), e._zod.check = (n) => {
			n.value.startsWith(t.prefix) || n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "starts_with",
				prefix: t.prefix,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), fr = /*@__PURE__*/ O("$ZodCheckEndsWith", (e, t) => {
		Xn.init(e, t);
		let n = RegExp(`.*${Ke(t.suffix)}$`);
		t.pattern ??= n, e._zod.onattach.push((e) => {
			let t = e._zod.bag;
			t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
		}), e._zod.check = (n) => {
			n.value.endsWith(t.suffix) || n.issues.push({
				origin: "string",
				code: "invalid_format",
				format: "ends_with",
				suffix: t.suffix,
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), pr = /*@__PURE__*/ O("$ZodCheckOverwrite", (e, t) => {
		Xn.init(e, t), e._zod.check = (e) => {
			e.value = t.tx(e.value);
		};
	});
})), hr, gr = w((() => {
	hr = class {
		constructor(e = [], t = {}) {
			this.content = [], this.indent = 0, this.args = e, this.closed = t;
		}
		indented(e) {
			this.indent += 1, e(this), --this.indent;
		}
		write(e) {
			if (typeof e == "function") {
				e(this, { execution: "sync" }), e(this, { execution: "async" });
				return;
			}
			let t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), r = t.map((e) => e.slice(n)).map((e) => " ".repeat(this.indent * 2) + e);
			for (let e of r) this.content.push(e);
		}
		compile() {
			let e = Function, t = this?.content ?? [""];
			return new e(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {\n${t.join("\n")}\n};`)(...Object.values(this.closed));
		}
	};
})), _r, vr = w((() => {
	_r = {
		major: 4,
		minor: 5,
		patch: 4
	};
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/schemas.js
function yr(e) {
	return {
		validate: (t) => {
			try {
				return Jr(rn(e, t));
			} catch {
				return on(e, t).then(Jr);
			}
		},
		vendor: "zod",
		version: 1
	};
}
function br(e, t) {
	if (!t.normalize && t.protocol?.source === zn.source && !/^https?:\/\//i.test(e)) return 1;
	try {
		return new URL(e);
	} catch {
		return 2;
	}
}
function xr(e) {
	return e.replace($r, "");
}
function Sr(e, t) {
	return t.lastIndex = 0, t.test(e.hostname);
}
function Cr(e, t) {
	return t.lastIndex = 0, t.test(e.protocol.endsWith(":") ? e.protocol.slice(0, -1) : e.protocol);
}
function wr(e) {
	if (!pi.test(e)) return !1;
	try {
		return new URL(`http://[${e}]`), !0;
	} catch {
		return !1;
	}
}
function Tr(e) {
	let t = e.split("/");
	if (t.length !== 2) return !1;
	let [n, r] = t;
	if (!r) return !1;
	let i = Number(r);
	return `${i}` !== r || i < 0 || i > 128 ? !1 : wr(n);
}
function Er(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
function Dr(e) {
	if (!Rn.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Er(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
function Or(e, t = null) {
	try {
		let n = e.split(".");
		if (n.length !== 3) return !1;
		let [r] = n;
		if (!r) return !1;
		let i = JSON.parse(atob(r));
		return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
	} catch {
		return !1;
	}
}
function kr(e, t, n) {
	e.issues.length && t.issues.push(...at(n, e.issues)), t.value[n] = e.value;
}
function Ar(e, t, n, r, i, a) {
	let o = n in r, s = a === "optional";
	if (o || !s || i !== "optional") {
		if (e.issues.length) {
			if (i !== void 0 && s && !o) return;
			t.issues.push(...at(n, e.issues));
		}
		if (!o && i === void 0) {
			e.issues.length || t.issues.push({
				code: "invalid_type",
				expected: "nonoptional",
				input: void 0,
				path: [n]
			});
			return;
		}
		e.value === void 0 ? o && (t.value[n] = void 0) : t.value[n] = e.value;
	}
}
function jr(e) {
	let t = Object.keys(e.shape), n = Object.getOwnPropertySymbols(e.shape), r = n.length ? n : Di, i = r.length ? [...t, ...r] : t;
	for (let t of i) if (!e.shape?.[t]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${String(t)}": expected a Zod schema`);
	let a = Ye(e.shape);
	return {
		...e,
		allKeys: i,
		symbolKeys: r,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(a)
	};
}
function Mr(e, t, n, r, i, a) {
	let o = [], s = i.keySet, c = i.catchall._zod, l = c.def.type, u = c.optin, d = c.optout;
	for (let i in t) {
		if (s.has(i)) continue;
		if (i === "__proto__") {
			l === "never" && o.push(i);
			continue;
		}
		if (l === "never") {
			o.push(i);
			continue;
		}
		let a = c.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => Ar(e, n, i, t, u, d))) : Ar(a, n, i, t, u, d);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a,
		continue: !0
	}), e.length ? Promise.all(e).then(() => n) : n;
}
function Nr(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !rt(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => ct(e, r, Mt())))
	}), t);
}
function Pr(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (We(e) && We(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		Object.prototype.hasOwnProperty.call(i, "__proto__") && delete i.__proto__;
		for (let n of r) {
			if (n === "__proto__") continue;
			let r = Pr(e[n], t[n]);
			if (!r.valid) return {
				valid: !1,
				mergeErrorPath: [n, ...r.mergeErrorPath]
			};
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = Pr(i, a);
			if (!o.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...o.mergeErrorPath]
			};
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function Fr(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i, a = /* @__PURE__ */ new Map(), o = (e, t) => {
		let n;
		if (e.code === "unrecognized_keys" && !e.path?.length) i ??= e, n = e.keys;
		else if (e.code === "invalid_key" && e.origin === "record" && e.path?.length === 1) {
			let t = String(e.path[0]);
			a.has(t) || a.set(t, e), n = [t];
		} else return !1;
		for (let e of n) r.has(e) || r.set(e, {}), r.get(e)[t] = !0;
		return !0;
	};
	for (let n of t.issues) o(n, "l") || e.issues.push(n);
	for (let t of n.issues) o(t, "r") || e.issues.push(t);
	let s = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (s.length) {
		let t = i ? s.filter((e) => i.keys.includes(e)) : [];
		t.length && e.issues.push({
			...i,
			keys: t
		});
		for (let n of s) !t.includes(n) && a.has(n) && e.issues.push(a.get(n));
	}
	let c = Pr(t.value, n.value);
	if (!c.valid) {
		if (rt(e)) return e;
		throw Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`);
	}
	return e.value = c.data, e;
}
function Ir(e, t) {
	for (let n = e.length - 1; n >= 0; n--) if (!(t === "optin" ? e[n]._zod.optin !== void 0 : e[n]._zod.optout === "optional")) return n + 1;
	return 0;
}
function Lr(e, t, n) {
	e.issues.length && t.issues.push(...at(n, e.issues)), t.value[n] = e.value;
}
function Rr(e, t, n, r, i) {
	for (let a = 0; a < n.length; a++) {
		let o = e[a], s = a < r.length;
		if (!s && a >= i && n[a]._zod.optin === "optional") {
			t.value.length = a;
			break;
		}
		if (o.issues.length) {
			if (!s && a >= i) {
				t.value.length = a;
				break;
			}
			t.issues.push(...at(a, o.issues));
		}
		t.value[a] = o.value;
	}
	for (let e = t.value.length - 1; e >= r.length && n[e]._zod.optout === "optional" && t.value[e] === void 0; e--) t.value.length = e;
	return t;
}
function zr(e, t) {
	return e.value = t.issues.length ? void 0 : t.value, e;
}
function Br(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
function Vr(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
function Hr(e, t, n, r) {
	return t.issues.length ? (e.value = n.catchValue({
		...t,
		value: e.value,
		error: { issues: t.issues.map((e) => ct(e, r, Mt())) },
		input: e.value
	}), e) : (e.value = t.value, t.memo && (e.memo = !0), e);
}
function Ur(e, t, n) {
	return e.issues.some((e) => e.code !== "unrecognized_keys") ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues
	}, n);
}
function Wr(e, t, n) {
	if (e.issues.length) return e.aborted = !0, e;
	if ((n.direction || "forward") === "forward") {
		let r = t.transform(e.value, e);
		return r instanceof Promise ? r.then((r) => Gr(e, r, t.out, n)) : Gr(e, r, t.out, n);
	}
	{
		let r = t.reverseTransform(e.value, e);
		return r instanceof Promise ? r.then((r) => Gr(e, r, t.in, n)) : Gr(e, r, t.in, n);
	}
}
function Gr(e, t, n, r) {
	return e.issues.length ? (e.aborted = !0, e) : n._zod.run({
		value: t,
		issues: e.issues
	}, r);
}
function Kr(e) {
	return e.memo || (e.value = Object.freeze(e.value)), e;
}
function qr(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(ft(e));
	}
}
var k, Jr, Yr, A, Xr, Zr, Qr, $r, ei, ti, ni, ri, ii, ai, oi, si, ci, li, ui, di, fi, pi, mi, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi, Xi, Zi = w((() => {
	mr(), zt(), gr(), hn(), Yn(), At(), vr(), k = /*@__PURE__*/ O("$ZodType", (e, t) => {
		var n;
		e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = _r;
		let r = e._zod.def.checks, i = e._zod.traits.has("$ZodCheck") ? [e, ...r ?? []] : r?.length ? [...r] : [];
		for (let t of i) for (let n of t._zod.onattach) n(e);
		if (i.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
			e._zod.run = e._zod.parse;
		});
		else {
			let t = (t, n, r) => {
				if (t.memo) return t;
				let i = rt(t), a;
				for (let o of n) {
					if (o._zod.def.when) {
						if (it(t) || !o._zod.def.when(t)) continue;
					} else if (i) continue;
					let n = t.issues.length, s = o._zod.check(t);
					if (s instanceof Promise && r?.async === !1) throw new It();
					if (a || s instanceof Promise) a = (a ?? Promise.resolve()).then(async () => {
						await s, t.issues.length !== n && (st(t.issues, n, e), i ||= rt(t, n));
					});
					else {
						if (t.issues.length === n) continue;
						st(t.issues, n, e), i ||= rt(t, n);
					}
				}
				return a ? a.then(() => t) : t;
			}, n = (n, r, a) => {
				if (rt(n)) return n.aborted = !0, n;
				let o = t(r, i, a);
				if (o instanceof Promise) {
					if (a.async === !1) throw new It();
					return o.then((t) => e._zod.parse(t, a));
				}
				return e._zod.parse(o, a);
			};
			e._zod.run = (r, a) => {
				if (a.skipChecks) return e._zod.parse(r, a);
				if (a.direction === "backward") {
					let t = e._zod.parse({
						value: r.value,
						issues: []
					}, {
						...a,
						skipChecks: !0
					});
					return t instanceof Promise ? t.then((e) => n(e, r, a)) : n(t, r, a);
				}
				let o = e._zod.parse(r, a);
				if (o instanceof Promise) {
					if (a.async === !1) throw new It();
					return o.then((e) => t(e, i, a));
				}
				return t(o, i, a);
			};
		}
	}, {
		get "~standard"() {
			return ht(this, "~standard", yr(this));
		},
		set "~standard"(e) {
			mt(this, "~standard", e);
		}
	}), Jr = (e) => e.success ? { value: e.data } : { issues: e.error?.issues }, Yr = /*@__PURE__*/ O("$ZodString", (e, t) => {
		k.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? Un(e._zod.bag), e._zod.parse = (n, r) => {
			if (t.coerce) try {
				n.value = String(n.value);
			} catch {}
			return typeof n.value == "string" || n.issues.push({
				expected: "string",
				code: "invalid_type",
				input: n.value,
				inst: e
			}), n;
		};
	}), A = /*@__PURE__*/ O("$ZodStringFormat", (e, t) => {
		or.init(e, t), Yr.init(e, t);
	}), Xr = /*@__PURE__*/ O("$ZodGUID", (e, t) => {
		t.pattern ??= kn, A.init(e, t);
	}), Zr = /*@__PURE__*/ O("$ZodUUID", (e, t) => {
		if (t.version) {
			let e = {
				v1: 1,
				v2: 2,
				v3: 3,
				v4: 4,
				v5: 5,
				v6: 6,
				v7: 7,
				v8: 8
			}[t.version];
			if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
			t.pattern ??= An(e);
		} else t.pattern ??= An();
		A.init(e, t);
	}), Qr = /*@__PURE__*/ O("$ZodEmail", (e, t) => {
		t.pattern ??= jn, A.init(e, t);
	}), $r = /[\t\n\r]/g, ei = /*@__PURE__*/ O("$ZodURL", (e, t) => {
		A.init(e, t), e._zod.check = (n) => {
			try {
				let r = n.value.trim(), i = br(r, t);
				if (i === 1) {
					n.issues.push({
						code: "invalid_format",
						format: "url",
						note: "Invalid URL format",
						input: n.value,
						inst: e,
						continue: !t.abort
					});
					return;
				}
				if (i === 2) {
					n.issues.push({
						code: "invalid_format",
						format: "url",
						input: n.value,
						inst: e,
						continue: !t.abort
					});
					return;
				}
				t.hostname && !Sr(i, t.hostname) && n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid hostname",
					pattern: t.hostname.source,
					input: n.value,
					inst: e,
					continue: !t.abort
				}), t.protocol && !Cr(i, t.protocol) && n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid protocol",
					pattern: t.protocol.source,
					input: n.value,
					inst: e,
					continue: !t.abort
				}), n.value = t.normalize ? i.href : xr(r);
				return;
			} catch {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
			}
		};
	}), ti = /*@__PURE__*/ O("$ZodEmoji", (e, t) => {
		t.pattern ??= _n(), A.init(e, t);
	}), ni = /*@__PURE__*/ O("$ZodNanoID", (e, t) => {
		if (t.length !== void 0 && (!Number.isInteger(t.length) || t.length < 1)) throw Error(`Invalid nanoid length: ${t.length}`);
		t.pattern ??= t.length === void 0 ? Dn : gn(t.length), A.init(e, t);
	}), ri = /*@__PURE__*/ O("$ZodCUID", (e, t) => {
		t.pattern ??= Sn, A.init(e, t);
	}), ii = /*@__PURE__*/ O("$ZodCUID2", (e, t) => {
		t.pattern ??= Cn, A.init(e, t);
	}), ai = /*@__PURE__*/ O("$ZodULID", (e, t) => {
		t.pattern ??= wn, A.init(e, t);
	}), oi = /*@__PURE__*/ O("$ZodXID", (e, t) => {
		t.pattern ??= Tn, A.init(e, t);
	}), si = /*@__PURE__*/ O("$ZodKSUID", (e, t) => {
		t.pattern ??= En, A.init(e, t);
	}), ci = /*@__PURE__*/ O("$ZodISODateTime", (e, t) => {
		t.pattern ??= xn(t), A.init(e, t), (t.local || t.precision === -1) && (e._zod.bag.laxFormat = !0, e._zod.onattach.push((e) => {
			e._zod.bag.laxFormat = !0;
		}));
	}), li = /*@__PURE__*/ O("$ZodISODate", (e, t) => {
		t.pattern ??= Hn, A.init(e, t);
	}), ui = /*@__PURE__*/ O("$ZodISOTime", (e, t) => {
		t.pattern ??= bn(t), A.init(e, t);
	}), di = /*@__PURE__*/ O("$ZodISODuration", (e, t) => {
		t.pattern ??= On, A.init(e, t);
	}), fi = /*@__PURE__*/ O("$ZodIPv4", (e, t) => {
		t.pattern ??= Nn, A.init(e, t), e._zod.bag.format = "ipv4";
	}), pi = /^[0-9a-fA-F:.]+$/, mi = /*@__PURE__*/ O("$ZodIPv6", (e, t) => {
		t.pattern ??= Pn, A.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
			wr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), hi = /*@__PURE__*/ O("$ZodCIDRv4", (e, t) => {
		t.pattern ??= Fn, A.init(e, t);
	}), gi = /*@__PURE__*/ O("$ZodCIDRv6", (e, t) => {
		t.pattern ??= In, A.init(e, t), e._zod.check = (n) => {
			Tr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), _i = /*@__PURE__*/ O("$ZodBase64", (e, t) => {
		t.pattern ??= Ln, A.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
			Er(n.value) || n.issues.push({
				code: "invalid_format",
				format: "base64",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), vi = /*@__PURE__*/ O("$ZodBase64URL", (e, t) => {
		t.pattern ??= Rn, A.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
			Dr(n.value) || n.issues.push({
				code: "invalid_format",
				format: "base64url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), yi = /*@__PURE__*/ O("$ZodE164", (e, t) => {
		t.pattern ??= Bn, A.init(e, t);
	}), bi = /*@__PURE__*/ O("$ZodJWT", (e, t) => {
		A.init(e, t), e._zod.check = (n) => {
			Or(n.value, t.alg) || n.issues.push({
				code: "invalid_format",
				format: "jwt",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		};
	}), xi = /*@__PURE__*/ O("$ZodNumber", (e, t) => {
		k.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Gn, e._zod.parse = (n, r) => {
			if (t.coerce) try {
				n.value = Number(n.value);
			} catch {}
			let i = n.value;
			if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return n;
			let a = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : String(i) : void 0;
			return n.issues.push({
				expected: "number",
				code: "invalid_type",
				input: i,
				inst: e,
				...a ? { received: a } : {}
			}), n;
		};
	}), Si = /*@__PURE__*/ O("$ZodNumberFormat", (e, t) => {
		nr.init(e, t), xi.init(e, t);
	}), Ci = /*@__PURE__*/ O("$ZodBoolean", (e, t) => {
		k.init(e, t), e._zod.pattern = Kn, e._zod.parse = (n, r) => {
			if (t.coerce) try {
				n.value = !!n.value;
			} catch {}
			let i = n.value;
			return typeof i == "boolean" || n.issues.push({
				expected: "boolean",
				code: "invalid_type",
				input: i,
				inst: e
			}), n;
		};
	}), wi = /*@__PURE__*/ O("$ZodUnknown", (e, t) => {
		k.init(e, t), e._zod.parse = (e) => e;
	}), Ti = /*@__PURE__*/ O("$ZodNever", (e, t) => {
		k.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
			expected: "never",
			code: "invalid_type",
			input: t.value,
			inst: e
		}), t);
	}), Ei = /*@__PURE__*/ O("$ZodArray", (e, t) => {
		k.init(e, t);
		let n = Rt.memoizer;
		n?.attach(e), e._zod.parse = (r, i) => {
			let a = r.value;
			if (!Array.isArray(a)) return r.issues.push({
				expected: "array",
				code: "invalid_type",
				input: a,
				inst: e
			}), r;
			r.value = n ? n.alloc(e, r, Array(a.length), i) : Array(a.length);
			let o = [];
			for (let e = 0; e < a.length; e++) {
				let n = a[e], s = t.element._zod.run({
					value: n,
					issues: []
				}, i);
				s instanceof Promise ? o.push(s.then((t) => kr(t, r, e))) : kr(s, r, e);
			}
			return o.length ? Promise.all(o).then(() => r) : r;
		};
	}), Di = [], Oi = /* @__PURE__ */ new WeakMap(), ki = /*@__PURE__*/ O("$ZodObject", (e, t) => {
		if (k.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
			let e = t.shape;
			Oi.set(t, e), Object.defineProperty(t, "shape", { get: () => {
				let n = { ...e };
				return Object.defineProperty(t, "shape", { value: n }), Oi.set(t, n), n;
			} });
		}
		let n = Fe(() => jr(t));
		D(e, "propValues", (e) => {
			let t = e.def.shape, n = {};
			for (let e in t) {
				let r = t[e]._zod;
				if (r.values) {
					Object.prototype.hasOwnProperty.call(n, e) || T(n, e, /* @__PURE__ */ new Set());
					for (let t of r.values) n[e].add(t);
					r.optin !== void 0 && n[e].add(void 0);
				}
			}
			return n;
		});
		let r = Ue, i = t.catchall, a, o = Rt.memoizer;
		o?.attach(e), e._zod.parse = (t, s) => {
			a ??= n.value;
			let c = t.value;
			if (!r(c)) return t.issues.push({
				expected: "object",
				code: "invalid_type",
				input: c,
				inst: e
			}), t;
			t.value = o ? o.alloc(e, t, {}, s) : {};
			let l = [], u = a.shape;
			for (let e of a.allKeys) {
				if (e === "__proto__") continue;
				let n = u[e], r = n._zod.optin, i = n._zod.optout, a = n._zod.run({
					value: c[e],
					issues: []
				}, s);
				a instanceof Promise ? l.push(a.then((n) => Ar(n, t, e, c, r, i))) : Ar(a, t, e, c, r, i);
			}
			return i ? Mr(l, c, t, s, n.value, e) : l.length ? Promise.all(l).then(() => t) : t;
		};
	}), Ai = /*@__PURE__*/ O("$ZodObjectJIT", (e, t) => {
		ki.init(e, t);
		let n = e._zod.parse, r = Fe(() => jr(t)), i = Rt.memoizer, a = (t) => {
			let n = r.value, a = n.symbolKeys, o = new hr(["payload", "ctx"], {
				shape: t,
				inst: e,
				memo: i,
				syms: a
			}), s = (e) => `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`, c = (e, t) => `
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
          }`;
			o.write("const input = payload.value;");
			let l = Object.create(null), u = 0;
			for (let e of n.allKeys) l[e] = `key_${u++}`;
			o.write(i ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
			for (let e of n.allKeys) {
				if (e === "__proto__") continue;
				let n = l[e], r = typeof e == "symbol" ? `syms[${a.indexOf(e)}]` : Ve(e), i = `${r} in input`, u = t[e], d = u?._zod?.optin, f = d !== void 0, p = u?._zod?.optout === "optional";
				if (o.write(`const ${n} = ${s(r)};`), f && p) {
					let e = d === "optional" ? `${n}_present` : `${n}.value !== undefined || ${n}_present`;
					o.write(`
        const ${n}_present = ${i};
        if (!${n}.issues.length || ${n}_present) {
          if (${n}.issues.length) {${c(n, r)}
          }

          if (${e}) {
            newResult[${r}] = ${n}.value;
          }
        }

      `);
				} else f ? o.write(`
        if (${n}.issues.length) {${c(n, r)}
        }
        
        if (${n}.value === undefined) {
          if (${i}) {
            newResult[${r}] = undefined;
          }
        } else {
          newResult[${r}] = ${n}.value;
        }

      `) : o.write(`
        const ${n}_present = ${i};
        if (${n}.issues.length) {${c(n, r)}
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${r}]
          });
        }

        if (${n}_present) {
          newResult[${r}] = ${n}.value;
        }

      `);
			}
			return o.write("payload.value = newResult;"), o.write("return payload;"), o.compile();
		}, o, s = Ue, c = !Rt.jitless, l = c && St.value, u = t.catchall, d;
		e._zod.parse = (i, f) => {
			d ??= r.value;
			let p = i.value;
			return s(p) ? c && l && f?.async === !1 && f.jitless !== !0 ? (o ||= a(t.shape), i = o(i, f), u ? Mr([], p, i, f, d, e) : i) : n(i, f) : (i.issues.push({
				expected: "object",
				code: "invalid_type",
				input: p,
				inst: e
			}), i);
		};
	}), ji = /*@__PURE__*/ O("$ZodUnion", (e, t) => {
		k.init(e, t), D(e, "optin", (e) => e.def.options.some((e) => e._zod.optin === "defaulted") ? "defaulted" : e.def.options.some((e) => e._zod.optin !== void 0) ? "optional" : void 0), D(e, "optout", (e) => e.def.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), D(e, "values", (e) => {
			if (e.def.options.every((e) => e._zod.values)) return new Set(e.def.options.flatMap((e) => Array.from(e._zod.values)));
		}), D(e, "pattern", (e) => {
			if (e.def.options.every((e) => e._zod.pattern)) {
				let t = e.def.options.map((e) => e._zod.pattern);
				return RegExp(`^(${t.map((e) => Le(e.source)).join("|")})$`);
			}
		});
		let n = t.options.length === 1 ? t.options[0]._zod.run : null;
		e._zod.parse = (r, i) => {
			if (n) return n(r, i);
			let a = !1, o = [];
			for (let e of t.options) {
				let t = e._zod.run({
					value: r.value,
					issues: []
				}, i);
				if (t instanceof Promise) o.push(t), a = !0;
				else {
					if (t.issues.length === 0) return t;
					o.push(t);
				}
			}
			return a ? Promise.all(o).then((t) => Nr(t, r, e, i)) : Nr(o, r, e, i);
		};
	}), Mi = /*@__PURE__*/ O("$ZodDiscriminatedUnion", (e, t) => {
		t.inclusive = !1, ji.init(e, t);
		let n = e._zod.parse;
		D(e, "propValues", (e) => {
			let t = {};
			for (let n of e.def.options) {
				let r = n._zod.propValues;
				if (!r || Object.keys(r).length === 0) throw Error(`Invalid discriminated union option at index "${e.def.options.indexOf(n)}"`);
				for (let [e, n] of Object.entries(r)) {
					Object.prototype.hasOwnProperty.call(t, e) || T(t, e, /* @__PURE__ */ new Set());
					for (let r of n) t[e].add(r);
				}
			}
			return t;
		}), t.options.forEach((e, n) => {
			let r = Oi.get(e._zod.def);
			if (r && !Object.prototype.hasOwnProperty.call(r, t.discriminator)) throw Error(`Invalid discriminated union option at index "${n}"`);
		});
		let r = Fe(() => {
			let e = t.options, n = /* @__PURE__ */ new Map();
			for (let r of e) {
				let e = r._zod.propValues?.[t.discriminator];
				if (!e || e.size === 0) throw Error(`Invalid discriminated union option at index "${t.options.indexOf(r)}"`);
				for (let t of e) {
					if (n.has(t)) throw Error(`Duplicate discriminator value "${String(t)}"`);
					n.set(t, r);
				}
			}
			return n;
		});
		e._zod.parse = (i, a) => {
			let o = i.value;
			if (!Ue(o)) return i.issues.push({
				code: "invalid_type",
				expected: "object",
				input: o,
				inst: e
			}), i;
			let s = r.value.get(o?.[t.discriminator]);
			return s ? s._zod.run(i, a) : t.unionFallback || a.direction === "backward" ? n(i, a) : (i.issues.push({
				code: "invalid_union",
				errors: [],
				note: "No matching discriminator",
				discriminator: t.discriminator,
				options: Array.from(r.value.keys()),
				input: o,
				path: [t.discriminator],
				inst: e
			}), i);
		};
	}), Ni = /*@__PURE__*/ O("$ZodIntersection", (e, t) => {
		k.init(e, t), e._zod.parse = (e, n) => {
			let r = e.value, i = t.left._zod.run({
				value: r,
				issues: []
			}, n), a = t.right._zod.run({
				value: r,
				issues: []
			}, n);
			return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => Fr(e, t, n)) : Fr(e, i, a);
		};
	}), Pi = /*@__PURE__*/ O("$ZodTuple", (e, t) => {
		k.init(e, t);
		let n = t.items, r = Rt.memoizer;
		r?.attach(e), e._zod.parse = (i, a) => {
			let o = i.value;
			if (!Array.isArray(o)) return i.issues.push({
				input: o,
				inst: e,
				expected: "tuple",
				code: "invalid_type"
			}), i;
			i.value = r ? r.alloc(e, i, [], a) : [];
			let s = [], c = Ir(n, "optin"), l = Ir(n, "optout");
			if (!t.rest) {
				if (o.length < c) return i.issues.push({
					code: "too_small",
					minimum: c,
					inclusive: !0,
					input: o,
					inst: e,
					origin: "array"
				}), i;
				o.length > n.length && i.issues.push({
					code: "too_big",
					maximum: n.length,
					inclusive: !0,
					input: o,
					inst: e,
					origin: "array"
				});
			}
			let u = Array(n.length);
			for (let e = 0; e < n.length; e++) {
				let t = n[e]._zod.run({
					value: o[e],
					issues: []
				}, a);
				t instanceof Promise ? s.push(t.then((t) => {
					u[e] = t;
				})) : u[e] = t;
			}
			if (t.rest) {
				let e = n.length - 1, r = o.slice(n.length);
				for (let n of r) {
					e++;
					let r = t.rest._zod.run({
						value: n,
						issues: []
					}, a);
					r instanceof Promise ? s.push(r.then((t) => Lr(t, i, e))) : Lr(r, i, e);
				}
			}
			return s.length ? Promise.all(s).then(() => Rr(u, i, n, o, l)) : Rr(u, i, n, o, l);
		};
	}), Fi = /*@__PURE__*/ O("$ZodRecord", (e, t) => {
		k.init(e, t);
		let n = Rt.memoizer;
		n?.attach(e), e._zod.parse = (r, i) => {
			let a = r.value;
			if (!We(a)) return r.issues.push({
				expected: "record",
				code: "invalid_type",
				input: a,
				inst: e
			}), r;
			let o = [], s = t.keyType._zod.values;
			if (s && !t.partial) {
				r.value = n ? n.alloc(e, r, {}, i) : {};
				let c = /* @__PURE__ */ new Set();
				for (let n of s) if (typeof n == "string" || typeof n == "number" || typeof n == "symbol") {
					if (c.add(typeof n == "number" ? n.toString() : n), n === "__proto__") continue;
					let s = t.keyType._zod.run({
						value: n,
						issues: []
					}, i);
					if (s instanceof Promise) throw Error("Async schemas not supported in object keys currently");
					if (s.issues.length) {
						r.issues.push({
							code: "invalid_key",
							origin: "record",
							issues: s.issues.map((e) => ct(e, i, Mt())),
							input: n,
							path: [n],
							inst: e
						});
						continue;
					}
					let l = s.value;
					if (l === "__proto__") continue;
					let u = t.valueType._zod.run({
						value: a[n],
						issues: []
					}, i);
					u instanceof Promise ? o.push(u.then((e) => {
						e.issues.length && r.issues.push(...at(n, e.issues)), r.value[l] = e.value;
					})) : (u.issues.length && r.issues.push(...at(n, u.issues)), r.value[l] = u.value);
				}
				let l;
				for (let e in a) if (!c.has(e)) {
					if (t.mode === "loose") {
						if (e === "__proto__") continue;
						r.value[e] = a[e];
					} else l ??= [], l.push(e);
				}
				l && l.length > 0 && r.issues.push({
					code: "unrecognized_keys",
					input: a,
					inst: e,
					keys: l,
					continue: !0
				});
			} else {
				r.value = n ? n.alloc(e, r, {}, i) : {};
				let c;
				for (let n of Reflect.ownKeys(a)) {
					if (n === "__proto__" || !Object.prototype.propertyIsEnumerable.call(a, n)) continue;
					let l = t.keyType._zod.run({
						value: n,
						issues: []
					}, i);
					if (l instanceof Promise) throw Error("Async schemas not supported in object keys currently");
					if (typeof n == "string" && Gn.test(n) && l.issues.length) {
						let e = t.keyType._zod.run({
							value: Number(n),
							issues: []
						}, i);
						if (e instanceof Promise) throw Error("Async schemas not supported in object keys currently");
						e.issues.length === 0 && (l = e);
					}
					if (l.issues.length) {
						t.mode === "loose" ? r.value[n] = a[n] : s ? (c ??= [], c.push(n)) : r.issues.push({
							code: "invalid_key",
							origin: "record",
							issues: l.issues.map((e) => ct(e, i, Mt())),
							input: n,
							path: [n],
							inst: e
						});
						continue;
					}
					let u = l.value;
					if (u === "__proto__") continue;
					let d = t.valueType._zod.run({
						value: a[n],
						issues: []
					}, i);
					d instanceof Promise ? o.push(d.then((e) => {
						e.issues.length && r.issues.push(...at(n, e.issues)), r.value[u] = e.value;
					})) : (d.issues.length && r.issues.push(...at(n, d.issues)), r.value[u] = d.value);
				}
				c && c.length > 0 && r.issues.push({
					code: "unrecognized_keys",
					input: a,
					inst: e,
					keys: c,
					continue: !0
				});
			}
			return o.length ? Promise.all(o).then(() => r) : r;
		};
	}), Ii = /*@__PURE__*/ O("$ZodEnum", (e, t) => {
		k.init(e, t);
		let n = Me(t.entries), r = new Set(n);
		e._zod.values = r;
		let i = n.filter((e) => Ct.has(typeof e));
		e._zod.pattern = RegExp(i.length ? `^(${i.map((e) => Ke(e.toString())).join("|")})$` : "^[^\\s\\S]$"), e._zod.parse = (t, i) => {
			let a = t.value;
			return r.has(a) || t.issues.push({
				code: "invalid_value",
				values: n,
				input: a,
				inst: e
			}), t;
		};
	}), Li = /*@__PURE__*/ O("$ZodLiteral", (e, t) => {
		k.init(e, t);
		let n = new Set(t.values);
		e._zod.values = n, e._zod.pattern = RegExp(t.values.length ? `^(${t.values.map((e) => typeof e == "string" ? Ke(e) : e ? Ke(e.toString()) : String(e)).join("|")})$` : "^[^\\s\\S]$"), e._zod.parse = (r, i) => {
			let a = r.value;
			return n.has(a) || r.issues.push({
				code: "invalid_value",
				values: t.values,
				input: a,
				inst: e
			}), r;
		};
	}), Ri = /*@__PURE__*/ O("$ZodTransform", (e, t) => {
		k.init(e, t), e._zod.optin = "optional", Rt.memoizer?.guard(e), e._zod.parse = (n, r) => {
			if (r.direction === "backward") throw new Lt(e.constructor.name);
			let i = t.transform(n.value, n);
			if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n));
			if (i instanceof Promise) throw new It();
			return n.value = i, n;
		};
	}), zi = /*@__PURE__*/ O("$ZodOptional", (e, t) => {
		k.init(e, t), D(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), e._zod.optout = "optional", D(e, "values", (e) => {
			let t = e.def.innerType._zod.values;
			return t ? /* @__PURE__ */ new Set([...t, void 0]) : void 0;
		}), D(e, "pattern", (e) => {
			let t = e.def.innerType._zod.pattern;
			return t ? RegExp(`^(${Le(t.source)})?$`) : void 0;
		}), e._zod.parse = (e, n) => {
			if (e.value === void 0) {
				if (t.innerType._zod.optin !== "defaulted") return e;
				let r = t.innerType._zod.run({
					value: e.value,
					issues: []
				}, n);
				return r instanceof Promise ? r.then((t) => zr(e, t)) : zr(e, r);
			}
			return t.innerType._zod.run(e, n);
		};
	}), Bi = /*@__PURE__*/ O("$ZodExactOptional", (e, t) => {
		zi.init(e, t), D(e, "values", (e) => e.def.innerType._zod.values), D(e, "pattern", (e) => e.def.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
	}), Vi = /*@__PURE__*/ O("$ZodNullable", (e, t) => {
		k.init(e, t), D(e, "optin", (e) => e.def.innerType._zod.optin), D(e, "optout", (e) => e.def.innerType._zod.optout), D(e, "pattern", (e) => {
			let t = e.def.innerType._zod.pattern;
			return t ? RegExp(`^(${Le(t.source)}|null)$`) : void 0;
		}), D(e, "values", (e) => e.def.innerType._zod.values ? /* @__PURE__ */ new Set([...e.def.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
	}), Hi = /*@__PURE__*/ O("$ZodDefault", (e, t) => {
		k.init(e, t), e._zod.optin = "defaulted", D(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			if (e.value === void 0) return e.value = t.defaultValue, e;
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Br(e, t)) : Br(r, t);
		};
	}), Ui = /*@__PURE__*/ O("$ZodPrefault", (e, t) => {
		k.init(e, t), e._zod.optin = "defaulted", D(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
	}), Wi = /*@__PURE__*/ O("$ZodNonOptional", (e, t) => {
		k.init(e, t), D(e, "values", (e) => {
			let t = e.def.innerType._zod.values;
			return t ? new Set([...t].filter((e) => e !== void 0)) : void 0;
		}), e._zod.parse = (n, r) => {
			let i = t.innerType._zod.run(n, r);
			return i instanceof Promise ? i.then((t) => Vr(t, e)) : Vr(i, e);
		};
	}), Gi = /*@__PURE__*/ O("$ZodCatch", (e, t) => {
		k.init(e, t), D(e, "optin", (e) => e.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), D(e, "optout", (e) => e.def.innerType._zod.optout), D(e, "values", (e) => e.def.innerType._zod.values), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			let r = t.innerType._zod.run({
				value: e.value,
				issues: []
			}, n);
			return r instanceof Promise ? r.then((r) => Hr(e, r, t, n)) : Hr(e, r, t, n);
		};
	}), Ki = /*@__PURE__*/ O("$ZodPipe", (e, t) => {
		k.init(e, t), D(e, "values", (e) => e.def.in._zod.values), D(e, "optin", (e) => e.def.in._zod.optin), D(e, "optout", (e) => e.def.out._zod.optout), D(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
			if (n.direction === "backward") {
				let r = t.out._zod.run(e, n);
				return r instanceof Promise ? r.then((e) => Ur(e, t.in, n)) : Ur(r, t.in, n);
			}
			let r = t.in._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Ur(e, t.out, n)) : Ur(r, t.out, n);
		};
	}), qi = /*@__PURE__*/ O("$ZodCodec", (e, t) => {
		k.init(e, t), D(e, "values", (e) => e.def.in._zod.values), D(e, "optin", (e) => e.def.in._zod.optin), D(e, "optout", (e) => e.def.out._zod.optout), D(e, "propValues", (e) => e.def.in._zod.propValues), e._zod.parse = (e, n) => {
			if ((n.direction || "forward") === "forward") {
				let r = t.in._zod.run(e, n);
				return r instanceof Promise ? r.then((e) => Wr(e, t, n)) : Wr(r, t, n);
			}
			{
				let r = t.out._zod.run(e, n);
				return r instanceof Promise ? r.then((e) => Wr(e, t, n)) : Wr(r, t, n);
			}
		};
	}), Ji = /*@__PURE__*/ O("$ZodReadonly", (e, t) => {
		k.init(e, t), D(e, "propValues", (e) => e.def.innerType._zod.propValues), D(e, "values", (e) => e.def.innerType._zod.values), D(e, "optin", (e) => e.def.innerType?._zod?.optin), D(e, "optout", (e) => e.def.innerType?._zod?.optout), e._zod.parse = (e, n) => {
			if (n.direction === "backward") return t.innerType._zod.run(e, n);
			let r = t.innerType._zod.run(e, n);
			return r instanceof Promise ? r.then(Kr) : Kr(r);
		};
	}), Yi = /*@__PURE__*/ O("$ZodLazy", (e, t) => {
		k.init(e, t), ze(e._zod, "innerType", () => {
			let e = t;
			return e._cachedInner ||= t.getter(), e._cachedInner;
		}), D(e, "pattern", (e) => e.innerType?._zod?.pattern), D(e, "propValues", (e) => e.innerType?._zod?.propValues), D(e, "optin", (e) => e.innerType?._zod?.optin ?? void 0), D(e, "optout", (e) => e.innerType?._zod?.optout ?? void 0), e._zod.parse = (t, n) => e._zod.innerType._zod.run(t, n);
	}), Xi = /*@__PURE__*/ O("$ZodCustom", (e, t) => {
		Xn.init(e, t), k.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
			let r = n.value, i = t.fn(r);
			if (i instanceof Promise) return i.then((t) => qr(t, n, r, e));
			qr(i, n, r, e);
		};
	});
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/memoizer.js
function Qi(e) {
	return e.map((e) => e.path ? {
		...e,
		path: e.path.slice()
	} : { ...e });
}
function $i(e, t) {
	let n = oa.get(e);
	if (n !== void 0) return n;
	if (t.has(e)) return !0;
	t.add(e);
	let r = !1, i = (e) => {
		!r && e?._zod && $i(e, t) && (r = !0);
	}, a = e._zod.def;
	switch (a.type) {
		case "object":
			for (let e of Reflect.ownKeys(a.shape)) i(a.shape[e]);
			i(a.catchall);
			break;
		case "array":
			i(a.element);
			break;
		case "tuple":
			for (let e of a.items) i(e);
			i(a.rest);
			break;
		case "record":
		case "map":
			i(a.keyType), i(a.valueType);
			break;
		case "set":
			i(a.valueType);
			break;
		case "union":
			for (let e of a.options) i(e);
			break;
		case "intersection":
			i(a.left), i(a.right);
			break;
		case "optional":
		case "nullable":
		case "default":
		case "prefault":
		case "catch":
		case "readonly":
		case "nonoptional":
		case "promise":
		case "success":
			i(a.innerType);
			break;
		case "pipe":
			i(a.in), i(a.out);
			break;
		case "function":
			i(a.input), i(a.output);
			break;
		case "lazy":
			i(e._zod.innerType);
			break;
		case "template_literal":
		case "string":
		case "number":
		case "int":
		case "boolean":
		case "bigint":
		case "symbol":
		case "undefined":
		case "null":
		case "void":
		case "never":
		case "any":
		case "unknown":
		case "date":
		case "nan":
		case "enum":
		case "literal":
		case "file":
		case "transform":
		case "custom": break;
		default: for (let e in a) {
			let t = Object.getOwnPropertyDescriptor(a, e);
			if (!t || t.get) continue;
			let n = t.value;
			if (n && typeof n == "object") {
				if (n._zod) i(n);
				else if (Array.isArray(n)) for (let e of n) i(e);
			}
		}
	}
	return t.delete(e), oa.set(e, r), r;
}
function ea(e, t) {
	let n = e.buckets.get(t);
	return n || (n = /* @__PURE__ */ new Map(), e.buckets.set(t, n)), n;
}
function ta() {
	return la;
}
function na(e, t) {
	let n = e[ia]?.backEdges;
	return n !== void 0 && typeof t == "object" && !!t && n.has(t);
}
var ra, ia, aa, oa, sa, ca, la, ua = w((() => {
	ra = class extends Error {
		constructor() {
			super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
		}
	}, ia = "~memo", aa = [], oa = /*@__PURE__*/ new WeakMap(), ca = [], la = {
		alloc(e, t, n) {
			let r = sa;
			if (!r) return n;
			sa = void 0;
			let i = {
				value: n,
				issues: null
			};
			return r.set(t.value, i), ca.push(i), n;
		},
		guard(e) {
			var t;
			(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
				let t = e._zod.parse, n = (e, n) => {
					if (n.direction !== "backward" && na(n, e.value)) throw new ra();
					return t(e, n);
				};
				e._zod.parse = n, e._zod.run === t && (e._zod.run = n);
			});
		},
		attach(e) {
			var t;
			let n, r, i;
			(t = e._zod).deferred ?? (t.deferred = []), e._zod.deferred.push(() => {
				let t = e._zod.parse, a = (o, s) => {
					if (n === void 0 && (n = $i(e, /* @__PURE__ */ new Set()), !n)) return e._zod.parse = t, e._zod.run === a && (e._zod.run = t), t(o, s);
					let c = o.value;
					if (typeof c != "object" || !c) return t(o, s);
					let l = s[ia];
					l || (l = {
						buckets: /* @__PURE__ */ new Map(),
						backEdges: void 0
					}, s[ia] = l);
					let u;
					r === s ? u = i : (u = ea(l, e), r = s, i = u);
					let d = u.get(c);
					if (d) return o.value = d.value, d.issues ? d.issues.length && o.issues.push(...Qi(d.issues)) : (o.memo = !0, l.backEdges ?? (l.backEdges = /* @__PURE__ */ new Set()), l.backEdges.add(d.value)), o;
					sa = u;
					let f = ca.length, p = t(o, s);
					sa = void 0;
					let m = ca.length > f ? ca.pop() : void 0;
					return p instanceof Promise ? p.then((e) => (m && (m.issues = e.issues.length ? Qi(e.issues) : aa), e)) : (m && (m.issues = p.issues.length ? Qi(p.issues) : aa), p);
				};
				e._zod.parse = a, e._zod.run === t && (e._zod.run = a);
			});
		}
	};
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/locales/en.js
function da() {
	return { localeError: fa() };
}
var fa, pa = w((() => {
	At(), fa = () => {
		let e = {
			string: {
				unit: "characters",
				verb: "to have"
			},
			file: {
				unit: "bytes",
				verb: "to have"
			},
			array: {
				unit: "items",
				verb: "to have"
			},
			set: {
				unit: "items",
				verb: "to have"
			},
			map: {
				unit: "entries",
				verb: "to have"
			}
		};
		function t(t) {
			return e[t] ?? null;
		}
		let n = {
			regex: "input",
			email: "email address",
			url: "URL",
			emoji: "emoji",
			uuid: "UUID",
			uuidv4: "UUIDv4",
			uuidv6: "UUIDv6",
			nanoid: "nanoid",
			guid: "GUID",
			cuid: "cuid",
			cuid2: "cuid2",
			ulid: "ULID",
			xid: "XID",
			ksuid: "KSUID",
			datetime: "ISO datetime",
			date: "ISO date",
			time: "ISO time",
			duration: "ISO duration",
			ipv4: "IPv4 address",
			ipv6: "IPv6 address",
			mac: "MAC address",
			cidrv4: "IPv4 range",
			cidrv6: "IPv6 range",
			base64: "base64-encoded string",
			base64url: "base64url-encoded string",
			json_string: "JSON string",
			e164: "E.164 number",
			credit_card: "credit card number",
			jwt: "JWT",
			template_literal: "input"
		}, r = { nan: "NaN" };
		function i(e, t) {
			return e === "number" && typeof t == "number" && !Number.isFinite(t) ? String(t) : r[e] ?? e;
		}
		return (e) => {
			switch (e.code) {
				case "invalid_type": return `Invalid input: expected ${i(e.expected)}, received ${i(dt(e.input), e.input)}`;
				case "invalid_value": return e.values.length === 1 ? `Invalid input: expected ${Je(e.values[0])}` : `Invalid option: expected one of ${Ne(e.values, "|")}`;
				case "too_big": {
					let n = e.exact ? "exactly " : e.inclusive ? "<=" : "<", r = t(e.origin);
					return r ? `Too big: expected ${e.origin ?? "value"} to have ${n}${e.maximum.toString()} ${r.unit ?? "elements"}` : `Too big: expected ${e.origin ?? "value"} to be ${n}${e.maximum.toString()}`;
				}
				case "too_small": {
					let n = e.exact ? "exactly " : e.inclusive ? ">=" : ">", r = t(e.origin);
					return r ? `Too small: expected ${e.origin} to have ${n}${e.minimum.toString()} ${r.unit}` : `Too small: expected ${e.origin} to be ${n}${e.minimum.toString()}`;
				}
				case "invalid_format": {
					let t = e;
					return t.format === "starts_with" ? `Invalid string: must start with "${t.prefix}"` : t.format === "ends_with" ? `Invalid string: must end with "${t.suffix}"` : t.format === "includes" ? `Invalid string: must include "${t.includes}"` : t.format === "regex" ? `Invalid string: must match pattern ${t.pattern}` : `Invalid ${n[t.format] ?? e.format}`;
				}
				case "not_multiple_of": return `Invalid number: must be a multiple of ${e.divisor}`;
				case "unrecognized_keys": return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${Ne(e.keys, ", ")}`;
				case "invalid_key": return `Invalid key in ${e.origin}`;
				case "invalid_union": return e.options && Array.isArray(e.options) && e.options.length > 0 ? `Invalid discriminator value. Expected ${e.options.map((e) => `'${e}'`).join(" | ")}` : e.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
				case "invalid_element": return `Invalid value in ${e.origin}`;
				default: return "Invalid input";
			}
		};
	};
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/registries.js
function ma() {
	return new ga();
}
var ha, ga, _a, va = w((() => {
	ga = class {
		constructor() {
			this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
		}
		add(e, ...t) {
			let n = t[0];
			return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
		}
		clear() {
			return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
		}
		remove(e) {
			let t = this._map.get(e);
			return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
		}
		get(e) {
			let t = e._zod.parent;
			if (t) {
				let n = { ...this.get(t) ?? {} };
				delete n.id;
				let r = {
					...n,
					...this._map.get(e)
				};
				return Object.keys(r).length ? r : void 0;
			}
			return this._map.get(e);
		}
		has(e) {
			return this._map.has(e);
		}
	}, (ha = globalThis).__zod_globalRegistry ?? (ha.__zod_globalRegistry = ma()), _a = globalThis.__zod_globalRegistry;
})), ya = w((() => {}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function ba(e, t) {
	return new e({
		type: "string",
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function xa(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Sa(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ca(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function wa(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ta(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ea(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Da(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Oa(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ka(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Aa(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ja(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ma(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Na(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Pa(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Fa(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ia(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function La(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ra(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function za(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ba(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Va(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ha(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ua(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Wa(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ga(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ka(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function qa(e, t) {
	return new e({
		type: "number",
		checks: [],
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ja(e, t) {
	return new e({
		type: "number",
		coerce: !0,
		checks: [],
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ya(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Xa(e, t) {
	return new e({
		type: "boolean",
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Za(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function Qa(e, t) {
	return new e({
		type: "never",
		...E(t)
	});
}
// @__NO_SIDE_EFFECTS__
function $a(e, t) {
	return new $n({
		check: "less_than",
		...E(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function eo(e, t) {
	return new $n({
		check: "less_than",
		...E(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function to(e, t) {
	return new er({
		check: "greater_than",
		...E(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function no(e, t) {
	return new er({
		check: "greater_than",
		...E(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function ro(e, t) {
	return new tr({
		check: "multiple_of",
		...E(t),
		value: e
	});
}
// @__NO_SIDE_EFFECTS__
function io(e, t) {
	return new rr({
		check: "max_length",
		...E(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function ao(e, t) {
	return new ir({
		check: "min_length",
		...E(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function oo(e, t) {
	return new ar({
		check: "length_equals",
		...E(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function so(e, t) {
	return new sr({
		check: "string_format",
		format: "regex",
		...E(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function co(e) {
	return new cr({
		check: "string_format",
		format: "lowercase",
		...E(e)
	});
}
// @__NO_SIDE_EFFECTS__
function lo(e) {
	return new lr({
		check: "string_format",
		format: "uppercase",
		...E(e)
	});
}
// @__NO_SIDE_EFFECTS__
function uo(e, t) {
	return new ur({
		check: "string_format",
		format: "includes",
		...E(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function fo(e, t) {
	return new dr({
		check: "string_format",
		format: "starts_with",
		...E(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function po(e, t) {
	return new fr({
		check: "string_format",
		format: "ends_with",
		...E(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function mo(e) {
	return new pr({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function ho(e) {
	return /* @__PURE__ */ mo((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function go() {
	return /* @__PURE__ */ mo((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function _o() {
	return /* @__PURE__ */ mo((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function vo() {
	return /* @__PURE__ */ mo((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function yo() {
	return /* @__PURE__ */ mo((e) => He(e));
}
// @__NO_SIDE_EFFECTS__
function bo(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...E(n)
	});
}
// @__NO_SIDE_EFFECTS__
function xo(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...E(n)
	});
}
// @__NO_SIDE_EFFECTS__
function So(e, t) {
	let n = /* @__PURE__ */ Co((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(ft(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", "input" in r || (r.input = t.value), r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(ft(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function Co(e, t) {
	let n = new Xn({
		check: "custom",
		...E(t)
	});
	return n._zod.check = e, n;
}
// @__NO_SIDE_EFFECTS__
function wo(e, t) {
	let n = E(t), r = n.truthy ?? [
		"true",
		"1",
		"yes",
		"on",
		"y",
		"enabled"
	], i = n.falsy ?? [
		"false",
		"0",
		"no",
		"off",
		"n",
		"disabled"
	];
	n.case !== "sensitive" && (r = r.map((e) => typeof e == "string" ? e.toLowerCase() : e), i = i.map((e) => typeof e == "string" ? e.toLowerCase() : e));
	let a = new Set(r), o = new Set(i), s = e.Codec ?? qi, c = e.Boolean ?? Ci, l = new s({
		type: "pipe",
		in: new (e.String ?? Yr)({
			type: "string",
			error: n.error
		}),
		out: new c({
			type: "boolean",
			error: n.error
		}),
		transform: ((e, t) => {
			let r = e;
			return n.case !== "sensitive" && (r = r.toLowerCase()), a.has(r) ? !0 : !o.has(r) && (t.issues.push({
				code: "invalid_value",
				expected: "stringbool",
				values: [...a, ...o],
				input: t.value,
				inst: l,
				continue: !1
			}), {});
		}),
		reverseTransform: ((e, t) => e === !0 ? r[0] || "true" : i[0] || "false"),
		error: n.error
	});
	return l._zod.bag.truthy = r, l._zod.bag.falsy = i, l._zod.bag.case = n.case ?? "insensitive", l;
}
var To = w((() => {
	mr(), Zi(), At();
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/to-json-schema.js
function Eo(e, ...t) {
	for (let n of t) for (let t of Reflect.ownKeys(n)) Object.prototype.propertyIsEnumerable.call(n, t) && T(e, t, n[t]);
	return e;
}
function Do(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? _a,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		sharedDefsExtractedFor: void 0,
		sharedEmitDoneFor: void 0,
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		intersections: [],
		deferred: [],
		external: e?.external ?? void 0
	};
}
function j(e, t, n, r, i) {
	let a = typeof t.unrepresentable == "function" ? t.unrepresentable({
		zodSchema: e,
		path: r.path,
		message: i
	}) : t.unrepresentable;
	if (a === "any") return !1;
	if (a === void 0 || a === "throw") throw Error(i);
	return Object.assign(n, a), !0;
}
function M(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var r;
	let i = e._zod.def, a = t.seen.get(e);
	if (a) return a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
	let o = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, o), t.sharedDefsExtractedFor = void 0, t.sharedEmitDoneFor = void 0;
	let s = e._zod.toJSONSchema?.();
	if (s) o.schema = s;
	else {
		let r = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
		else {
			let n = o.schema, a = t.processors[i.type];
			if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			a(e, t, n, r);
		}
		let a = e._zod.parent;
		a && (o.ref ||= a, M(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Eo(o.schema, c), t.io === "input" && Fo(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Oo(e) {
	return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function ko(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	if (e.external && e.sharedDefsExtractedFor === e.external) return;
	let r = /* @__PURE__ */ new Map();
	for (let t of e.seen.entries()) {
		let n = e.metadataRegistry.get(t[0])?.id;
		if (n) {
			let e = r.get(n);
			if (e && e !== t[0]) throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			r.set(n, t[0]);
		}
	}
	let i = (t) => {
		let r = e.target === "draft-2020-12" ? "$defs" : "definitions";
		if (e.external) {
			let n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
			if (n) return { ref: i(n) };
			let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
			return t[1].defId = a, {
				defId: a,
				ref: `${i("__shared")}#/${r}/${Oo(a)}`
			};
		}
		let i = `#/${r}/`;
		if (t[1] === n && !t[1].schema.id) return { ref: "#" };
		let a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + Oo(a)
		};
	}, a = (e) => {
		if (e[1].schema.$ref) return;
		let t = e[1], { ref: n, defId: r } = i(e);
		t.def = { ...t.schema }, r && (t.defId = r);
		let a = t.schema;
		for (let e in a) delete a[e];
		a.$ref = n;
	};
	if (e.cycles === "throw") for (let t of e.seen.entries()) {
		let e = t[1];
		if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let n of e.seen.entries()) {
		let r = n[1];
		if (t === n[0]) {
			a(n);
			continue;
		}
		if (e.external) {
			let r = e.external.registry.get(n[0])?.id;
			if (t !== n[0] && r) {
				a(n);
				continue;
			}
		}
		if (e.metadataRegistry.get(n[0])?.id) {
			a(n);
			continue;
		}
		if (r.cycle) {
			a(n);
			continue;
		}
		if (r.count > 1 && e.reused === "ref") {
			a(n);
			continue;
		}
	}
	e.external && (e.sharedDefsExtractedFor = e.external);
}
function Ao(e) {
	let t = e.anyOf;
	if (!Array.isArray(t) || t.length === 0 || e.type !== void 0) return;
	let n = [];
	for (let e of t) {
		if (!e || typeof e != "object") return;
		Ao(e);
		let t = Object.keys(e);
		if (t.length !== 1 || t[0] !== "type") return;
		let r = e.type;
		for (let e of Array.isArray(r) ? r : [r]) {
			if (typeof e != "string") return;
			n.includes(e) || n.push(e);
		}
	}
	delete e.anyOf, e.type = n.length === 1 ? n[0] : n;
}
function jo(e) {
	let t = e.additionalProperties;
	return t === void 0 || t === !1 || typeof t != "object" || !t ? null : Object.keys(t).length ? t : null;
}
function Mo(e) {
	let t = [];
	for (let n of e) {
		if (typeof n != "object" || n.type !== "object") return null;
		for (let e in n) if (!Io.has(e)) return null;
		t.push(n);
	}
	let n = {}, r = /* @__PURE__ */ new Set();
	for (let e of t) {
		for (let r in e.properties) {
			if (Object.prototype.hasOwnProperty.call(n, r)) continue;
			let e = [];
			for (let n of t) {
				let t = n.properties?.[r] ?? jo(n);
				t != null && (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) || e.push(t));
			}
			T(n, r, e.length === 1 ? e[0] : Mo(e) ?? { allOf: e });
		}
		for (let t of e.required ?? []) r.add(t);
	}
	let i = {
		type: "object",
		properties: n
	};
	if (r.size && (i.required = [...r]), t.every((e) => e.additionalProperties === !1)) i.additionalProperties = !1;
	else {
		let e = [];
		for (let n of t) {
			let t = jo(n);
			t && !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) && e.push(t);
		}
		e.length === 1 ? i.additionalProperties = e[0] : e.length > 1 && (i.additionalProperties = { allOf: e });
	}
	return i;
}
function No(e) {
	let t = e.allOf;
	if (!Array.isArray(t) || t.length < 2) return;
	for (let t of Io) if (t in e) return;
	let n = t.filter((e) => Lo.some((t) => Array.isArray(e[t]))), r = null;
	if (!n.length) r = Mo(t);
	else {
		let e = n[0], i = Lo.find((t) => Array.isArray(e[t]));
		if (Object.keys(e).length !== 1) return;
		let a = t.filter((t) => t !== e), o = e[i].map((e) => Mo([...a, e]));
		if (o.some((e) => !e)) return;
		r = { [i]: o };
	}
	r && (delete e.allOf, Eo(e, r));
}
function Po(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : Eo(i, s), Eo(i, a), t._zod.parent === o) for (let e in i) e !== "$ref" && e !== "allOf" && (e in a || delete i[e]);
			if (s.$ref && n.def) for (let e in i) e !== "$ref" && e !== "allOf" && e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		let s = t._zod.parent;
		if (s && s !== o) {
			r(s);
			let t = e.seen.get(s);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e !== "$ref" && e !== "allOf" && e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	if (!e.external || e.sharedEmitDoneFor !== e.external) {
		for (let t of [...e.seen.entries()].reverse()) r(t[0]);
		if (e.target !== "openapi-3.0") for (let t of e.seen.entries()) Ao(t[1].def ?? t[1].schema);
		for (let t of e.deferred) t();
		if (e.intersections.length) {
			let t = /* @__PURE__ */ new Map();
			for (let n of e.seen.values()) for (let e of [n.schema, n.def]) {
				let n = e?.allOf;
				if (!Array.isArray(n)) continue;
				let r = t.get(n);
				r ? r.push(e) : t.set(n, [e]);
			}
			for (let n of e.intersections) for (let e of t.get(n) ?? []) No(e);
		}
	}
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	Eo(i, n.defId ? n.schema : n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	if (!e.external || e.sharedEmitDoneFor !== e.external) for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, T(o, e.defId, e.def));
	}
	e.external && (e.sharedEmitDoneFor = e.external), e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: zo(t, "input", e.processors),
					output: zo(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function Fo(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return Fo(r.element, n);
	if (r.type === "set") return Fo(r.valueType, n);
	if (r.type === "lazy") return Fo(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault" || r.type === "catch") return Fo(r.innerType, n);
	if (r.type === "intersection") return Fo(r.left, n) || Fo(r.right, n);
	if (r.type === "record" || r.type === "map") return Fo(r.keyType, n) || Fo(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : Fo(r.in, n) || Fo(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (Fo(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (Fo(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (Fo(e, n)) return !0;
		return !!(r.rest && Fo(r.rest, n));
	}
	return !1;
}
var Io, Lo, Ro, zo, Bo = w((() => {
	va(), At(), Io = /* @__PURE__ */ new Set([
		"type",
		"properties",
		"required",
		"additionalProperties"
	]), Lo = ["oneOf", "anyOf"], Ro = (e, t = {}) => (n) => {
		let r = Do({
			...n,
			processors: t
		});
		return M(e, r), ko(r, e), Po(r, e);
	}, zo = (e, t, n = {}) => (r) => {
		let { libraryOptions: i, target: a } = r ?? {}, o = Do({
			...i ?? {},
			target: a,
			io: t,
			processors: n
		});
		return M(e, o), ko(o, e), Po(o, e);
	};
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/json-schema-processors.js
function Vo(e) {
	let t = e._zod.def;
	return t.type === "pipe" && t.in._zod.traits.has("$ZodTransform") ? Vo(t.out) : t.type === "catch" ? Vo(t.innerType) : e._zod.optin;
}
function Ho(e, t, n) {
	if (t.$ref) {
		if (n.has(t)) return t;
		n.add(t);
		let r = e.get(t)?.def;
		if (!r) return t;
		let i = Ho(e, r, n);
		return i === r ? t : i;
	}
	for (let r of ["anyOf", "oneOf"]) {
		let i = t[r];
		if (!Array.isArray(i)) continue;
		let a = i.map((t) => Ho(e, t, n));
		a.some((e, t) => e !== i[t]) && (t = {
			...t,
			[r]: a
		});
	}
	let r = Array.isArray(t.type) ? t.type : [t.type], i = !r.includes("string") && r.some((e) => e === "number" || e === "integer"), a = t.enum ?? (t.const === void 0 ? void 0 : [t.const]);
	if (!i && !a?.some((e) => typeof e == "number")) return t;
	let { minimum: o, maximum: s, exclusiveMinimum: c, exclusiveMaximum: l, multipleOf: u, format: d, id: f, ...p } = t;
	return p.enum ? p.enum = p.enum.map((e) => typeof e == "number" ? String(e) : e) : typeof p.const == "number" && (p.const = String(p.const)), i ? (p.type = "string", a || (p.pattern = (r.includes("number") ? Gn : Wn).source), p) : p;
}
function Uo(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.seen.values()) n.def && !t.has(n.schema) && t.set(n.schema, n);
	let n = /* @__PURE__ */ new Map();
	for (let r of xs.get(e) ?? []) {
		let i = e.seen.get(r), a = (i?.def ?? i?.schema)?.propertyNames;
		if (!a || a === !0 || n.has(a)) continue;
		let o = Ho(t, a, /* @__PURE__ */ new Set());
		o !== a && n.set(a, o);
	}
	if (n.size) for (let t of e.seen.values()) for (let e of [t.schema, t.def]) {
		let t = e && n.get(e.propertyNames);
		t && (e.propertyNames = t);
	}
}
function Wo(e, t, n, r, i) {
	let a = !1, o = JSON.stringify(e, (e, t) => typeof t == "bigint" ? (a = !0, null) : t);
	return a ? (j(t, n, r, i, "BigInt defaults cannot be represented in JSON Schema"), Ts) : JSON.parse(o);
}
function Go(e, t) {
	if ("_idmap" in e) {
		let n = e, r = Do({
			...t,
			processors: Ps
		}), i = {};
		for (let e of n._idmap.entries()) {
			let [t, n] = e;
			M(n, r);
		}
		let a = {};
		r.external = {
			registry: n,
			uri: t?.uri,
			defs: i
		};
		for (let e of n._idmap.entries()) {
			let [t, n] = e;
			ko(r, n), T(a, t, Po(r, n));
		}
		return Object.keys(i).length > 0 && (a.__shared = { [r.target === "draft-2020-12" ? "$defs" : "definitions"]: i }), { schemas: a };
	}
	let n = Do({
		...t,
		processors: Ps
	});
	return M(e, n), ko(n, e), Po(n, e);
}
var Ko, qo, Jo, Yo, Xo, Zo, Qo, $o, es, ts, ns, rs, is, as, os, ss, cs, ls, us, ds, fs, ps, ms, hs, gs, _s, vs, ys, bs, xs, Ss, Cs, ws, Ts, Es, Ds, Os, ks, As, js, Ms, Ns, Ps, Fs = w((() => {
	Yn(), Bo(), At(), Ko = {
		guid: "uuid",
		url: "uri",
		datetime: "date-time",
		json_string: "json-string",
		regex: ""
	}, qo = (e, t, n, r) => {
		let i = n;
		i.type = "string";
		let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l, laxFormat: u } = e._zod.bag;
		if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = Ko[s] ?? s, i.format === "" && delete i.format, (s === "time" || u) && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
			let e = [...c];
			e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
				...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
				pattern: e.source
			}))]);
		}
	}, Jo = (e, t, n, r) => {
		let i = n, { minimum: a, maximum: o, format: s, multipleOf: c, exclusiveMaximum: l, exclusiveMinimum: u } = e._zod.bag;
		i.type = typeof s == "string" && s.includes("int") ? "integer" : "number";
		let d = typeof u == "number" && u >= (a ?? -Infinity), f = typeof l == "number" && l <= (o ?? Infinity), p = t.target === "draft-04" || t.target === "openapi-3.0";
		d ? p ? (i.minimum = u, i.exclusiveMinimum = !0) : i.exclusiveMinimum = u : typeof a == "number" && (i.minimum = a), f ? p ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l : typeof o == "number" && (i.maximum = o), typeof c == "number" && (Number.isFinite(c) && c !== 0 ? i.multipleOf = Math.abs(c) : j(e, t, i, r, `A multipleOf divisor of ${c} cannot be represented in JSON Schema`));
	}, Yo = (e, t, n, r) => {
		n.type = "boolean";
	}, Xo = (e, t, n, r) => {
		j(e, t, n, r, "BigInt cannot be represented in JSON Schema");
	}, Zo = (e, t, n, r) => {
		j(e, t, n, r, "Symbols cannot be represented in JSON Schema");
	}, Qo = (e, t, n, r) => {
		t.target === "openapi-3.0" ? (n.type = "string", n.nullable = !0, n.enum = [null]) : n.type = "null";
	}, $o = (e, t, n, r) => {
		j(e, t, n, r, "Undefined cannot be represented in JSON Schema");
	}, es = (e, t, n, r) => {
		j(e, t, n, r, "Void cannot be represented in JSON Schema");
	}, ts = (e, t, n, r) => {
		n.not = {};
	}, ns = (e, t, n, r) => {}, rs = (e, t, n, r) => {}, is = (e, t, n, r) => {
		j(e, t, n, r, "Date cannot be represented in JSON Schema");
	}, as = (e, t, n, r) => {
		let i = e._zod.def, a = Me(i.entries);
		if (a.length === 0) {
			n.not = {};
			return;
		}
		a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
	}, os = (e, t, n, r) => {
		let i = e._zod.def;
		if (i.values.length === 0) {
			n.not = {};
			return;
		}
		let a = [];
		for (let o of i.values) if (o === void 0) {
			if (j(e, t, n, r, "Literal `undefined` cannot be represented in JSON Schema")) return;
		} else if (typeof o == "bigint") {
			if (j(e, t, n, r, "BigInt literals cannot be represented in JSON Schema")) return;
			a.push(Number(o));
		} else a.push(o);
		if (a.length !== 0) {
			if (a.length === 1) {
				let e = a[0];
				n.type = e === null ? "null" : typeof e, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [e] : n.const = e;
			} else a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), a.every((e) => typeof e == "boolean") && (n.type = "boolean"), a.every((e) => e === null) && (n.type = "null"), n.enum = a;
		}
	}, ss = (e, t, n, r) => {
		j(e, t, n, r, "NaN cannot be represented in JSON Schema");
	}, cs = (e, t, n, r) => {
		let i = n, a = e._zod.pattern;
		if (!a) throw Error("Pattern not found in template literal");
		i.type = "string", i.pattern = a.source;
	}, ls = (e, t, n, r) => {
		let i = n, a = {
			type: "string",
			format: "binary",
			contentEncoding: "binary"
		}, { minimum: o, maximum: s, mime: c } = e._zod.bag;
		o !== void 0 && (a.minLength = o), s !== void 0 && (a.maxLength = s), c ? c.length === 1 ? (a.contentMediaType = c[0], Object.assign(i, a)) : (Object.assign(i, a), i.anyOf = c.map((e) => ({ contentMediaType: e }))) : Object.assign(i, a);
	}, us = (e, t, n, r) => {
		n.type = "boolean";
	}, ds = (e, t, n, r) => {
		j(e, t, n, r, "Custom types cannot be represented in JSON Schema");
	}, fs = (e, t, n, r) => {
		j(e, t, n, r, "Function types cannot be represented in JSON Schema");
	}, ps = (e, t, n, r) => {
		j(e, t, n, r, "Transforms cannot be represented in JSON Schema");
	}, ms = (e, t, n, r) => {
		j(e, t, n, r, "Map cannot be represented in JSON Schema");
	}, hs = (e, t, n, r) => {
		j(e, t, n, r, "Set cannot be represented in JSON Schema");
	}, gs = (e, t, n, r) => {
		let i = n, a = e._zod.def, { minimum: o, maximum: s } = e._zod.bag;
		typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = M(a.element, t, {
			...r,
			path: [...r.path, "items"]
		});
	}, _s = (e, t, n, r) => {
		let i = n, a = e._zod.def, o = a.shape;
		if (Object.getOwnPropertySymbols(o).length && j(e, t, i, r, "Symbol keys cannot be represented in JSON Schema")) return;
		i.type = "object", i.properties = {};
		for (let e in o) T(i.properties, e, M(o[e], t, {
			...r,
			path: [
				...r.path,
				"properties",
				e
			]
		}));
		let s = new Set(Object.keys(o)), c = new Set([...s].filter((e) => {
			let n = a.shape[e];
			return t.io === "input" ? Vo(n) === void 0 : n._zod.optout === void 0;
		}));
		c.size > 0 && (i.required = Array.from(c)), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = M(a.catchall, t, {
			...r,
			path: [...r.path, "additionalProperties"]
		})) : t.io === "output" && (i.additionalProperties = !1);
	}, vs = (e, t, n, r) => {
		let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => M(e, t, {
			...r,
			path: [
				...r.path,
				a ? "oneOf" : "anyOf",
				n
			]
		}));
		a ? n.oneOf = o : n.anyOf = o;
	}, ys = (e, t, n, r) => {
		let i = e._zod.def, a = M(i.left, t, {
			...r,
			path: [
				...r.path,
				"allOf",
				0
			]
		}), o = M(i.right, t, {
			...r,
			path: [
				...r.path,
				"allOf",
				1
			]
		}), s = (e) => "allOf" in e && Object.keys(e).length === 1, c = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
		n.allOf = c, t.intersections.push(c);
	}, bs = (e, t, n, r) => {
		let i = n, a = e._zod.def;
		i.type = "array";
		let o = t.target === "draft-2020-12" ? "prefixItems" : "items", s = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems", c = a.items.map((e, n) => M(e, t, {
			...r,
			path: [
				...r.path,
				o,
				n
			]
		})), l = a.rest ? M(a.rest, t, {
			...r,
			path: [
				...r.path,
				s,
				...t.target === "openapi-3.0" ? [a.items.length] : []
			]
		}) : null, u = a.items.length;
		for (; u > 0;) {
			let e = a.items[u - 1];
			if (!(t.io === "input" ? Vo(e) !== void 0 : e._zod.optout === "optional")) break;
			u--;
		}
		let d = a.items.length, f = !a.rest;
		t.target === "draft-2020-12" ? (i.prefixItems = c, f ? i.items = !1 : l && (i.items = l), u > 0 && (i.minItems = u), f && (i.maxItems = d)) : t.target === "openapi-3.0" ? (i.items = { anyOf: c }, l && i.items.anyOf.push(l), u > 0 && (i.minItems = u), f && (i.maxItems = d)) : (i.items = c, f ? i.additionalItems = !1 : l && (i.additionalItems = l), u > 0 && (i.minItems = u), f && (i.maxItems = d));
		let { minimum: p, maximum: m } = e._zod.bag;
		typeof p == "number" && (i.minItems = p), typeof m == "number" && (i.maxItems = m);
	}, xs = /* @__PURE__ */ new WeakMap(), Ss = (e, t, n, r) => {
		let i = n, a = e._zod.def;
		i.type = "object";
		let o = a.keyType, s = o._zod.bag?.patterns;
		if (a.mode === "loose" && s && s.size > 0) {
			let e = M(a.valueType, t, {
				...r,
				path: [
					...r.path,
					"patternProperties",
					"*"
				]
			});
			i.patternProperties = {};
			for (let t of s) T(i.patternProperties, t.source, e);
		} else {
			if (t.target === "draft-07" || t.target === "draft-2020-12") {
				i.propertyNames = M(a.keyType, t, {
					...r,
					path: [...r.path, "propertyNames"]
				});
				let n = xs.get(t);
				n || (n = [], xs.set(t, n), t.deferred.push(() => Uo(t))), n.push(e);
			}
			i.additionalProperties = M(a.valueType, t, {
				...r,
				path: [...r.path, "additionalProperties"]
			});
		}
		let c = o._zod.values, l = t.io === "input" && Vo(a.valueType) !== void 0;
		if (c && !a.partial && !l) {
			let e = [...c].filter((e) => typeof e == "string" || typeof e == "number");
			e.length > 0 && (i.required = e.map(String));
		}
	}, Cs = (e, t, n, r) => {
		let i = e._zod.def, a = M(i.innerType, t, r), o = t.seen.get(e);
		t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
	}, ws = (e, t, n, r) => {
		let i = e._zod.def;
		M(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	}, Ts = Symbol(), Es = (e, t, n, r) => {
		let i = e._zod.def;
		M(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
		let o = Wo(i.defaultValue, e, t, n, r);
		o !== Ts && (n.default = o);
	}, Ds = (e, t, n, r) => {
		let i = e._zod.def;
		M(i.innerType, t, r);
		let a = t.seen.get(e);
		if (a.ref = i.innerType, t.io !== "input") return;
		let o = Wo(i.defaultValue, e, t, n, r);
		o !== Ts && (n._prefault = o);
	}, Os = (e, t, n, r) => {
		let i = e._zod.def;
		M(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
		let o;
		try {
			o = i.catchValue(void 0);
		} catch {
			j(e, t, n, r, "Dynamic catch values are not supported in JSON Schema");
			return;
		}
		n.default = o;
	}, ks = (e, t, n, r) => {
		let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
		M(o, t, r);
		let s = t.seen.get(e);
		s.ref = o;
	}, As = (e, t, n, r) => {
		let i = e._zod.def;
		M(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType, n.readOnly = !0;
	}, js = (e, t, n, r) => {
		let i = e._zod.def;
		M(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	}, Ms = (e, t, n, r) => {
		let i = e._zod.def;
		M(i.innerType, t, r);
		let a = t.seen.get(e);
		a.ref = i.innerType;
	}, Ns = (e, t, n, r) => {
		let i = e._zod.innerType;
		M(i, t, r);
		let a = t.seen.get(e);
		a.ref = i;
	}, Ps = {
		string: qo,
		number: Jo,
		boolean: Yo,
		bigint: Xo,
		symbol: Zo,
		null: Qo,
		undefined: $o,
		void: es,
		never: ts,
		any: ns,
		unknown: rs,
		date: is,
		enum: as,
		literal: os,
		nan: ss,
		template_literal: cs,
		file: ls,
		success: us,
		custom: ds,
		function: fs,
		transform: ps,
		map: ms,
		set: hs,
		array: gs,
		object: _s,
		union: vs,
		intersection: ys,
		tuple: bs,
		record: Ss,
		nullable: Cs,
		nonoptional: ws,
		default: Es,
		prefault: Ds,
		catch: Os,
		pipe: ks,
		readonly: As,
		promise: js,
		optional: Ms,
		lazy: Ns
	};
})), Is = w((() => {
	zt(), hn(), Qt(), Zi(), ua(), mr(), vr(), At(), Yn(), pa(), va(), gr(), ya(), To(), Bo(), Fs(), Bo();
})), Ls = w((() => {
	Is();
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/errors.js
function Rs(e, t, n) {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		get() {
			let e = n(this);
			return Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			}), e;
		},
		set(e) {
			Object.defineProperty(this, t, {
				value: e,
				configurable: !0,
				writable: !0
			});
		}
	});
}
var zs, Bs, Vs, Hs = w((() => {
	Is(), At(), zs = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), Bs = (e, t) => {
		Xt.init(e, t), e.name = "ZodError";
		let n = Object.getPrototypeOf(e);
		zs.has(n) || (zs.add(n), Rs(n, "format", (e) => (t) => Wt(e, t)), Rs(n, "flatten", (e) => (t) => Ut(e, t)), Rs(n, "addIssue", (e) => (t) => {
			e.issues.push(t), e.message = JSON.stringify(e.issues, Pe, 2);
		}), Rs(n, "addIssues", (e) => (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, Pe, 2);
		}), Object.defineProperty(n, "isEmpty", {
			configurable: !0,
			enumerable: !1,
			get() {
				return this.issues.length === 0;
			}
		}));
	}, Vs = /*@__PURE__*/ O("ZodError", Bs, void 0, { Parent: Error });
})), Us, Ws, Gs, Ks, qs, Js, Ys, Xs, Zs, Qs, $s, ec, tc = w((() => {
	Is(), Hs(), Us = /* @__PURE__ */ en(Vs), Ws = /* @__PURE__ */ tn(Vs), Gs = /* @__PURE__ */ nn(Vs), Ks = /* @__PURE__ */ an(Vs), qs = /* @__PURE__ */ sn(Vs), Js = /* @__PURE__ */ cn(Vs), Ys = /* @__PURE__ */ ln(Vs), Xs = /* @__PURE__ */ un(Vs), Zs = /* @__PURE__ */ dn(Vs), Qs = /* @__PURE__ */ fn(Vs), $s = /* @__PURE__ */ pn(Vs), ec = /* @__PURE__ */ mn(Vs);
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/schemas.js
function nc() {
	Rt.localeError || Mt(da());
}
function rc() {
	Rt.memoizer || Mt({ memoizer: ta() });
}
function N(e) {
	return /* @__PURE__ */ ba(kc, e);
}
function P(e) {
	return /* @__PURE__ */ Da(Lc, e);
}
function ic(e) {
	return /* @__PURE__ */ La(qc, e);
}
function ac(e) {
	return /* @__PURE__ */ Ra(Jc, e);
}
function F(e) {
	return /* @__PURE__ */ qa($c, e);
}
function oc(e) {
	return /* @__PURE__ */ Ya(el, e);
}
function I(e) {
	return /* @__PURE__ */ Xa(tl, e);
}
function sc() {
	return /* @__PURE__ */ Za(nl);
}
function cc(e) {
	return /* @__PURE__ */ Qa(rl, e);
}
function L(e, t) {
	return /* @__PURE__ */ bo(il, e, t);
}
function R(e, t) {
	let n = {
		type: "object",
		shape: e ?? {},
		...E(t)
	};
	return new al(n);
}
function lc(e, t) {
	return new al({
		type: "object",
		shape: e,
		catchall: cc(),
		...E(t)
	});
}
function uc(e, t) {
	return new al({
		type: "object",
		shape: e,
		catchall: sc(),
		...E(t)
	});
}
function dc(e, t) {
	return new ol({
		type: "union",
		options: e,
		...E(t)
	});
}
function z(e, t, n) {
	return new sl({
		type: "union",
		options: t,
		discriminator: e,
		...E(n)
	});
}
function fc(e, t) {
	return new cl({
		type: "intersection",
		left: e,
		right: t
	});
}
function pc(e, t, n) {
	let r = t instanceof k;
	return new ll({
		type: "tuple",
		items: e,
		rest: r ? t : null,
		...E(r ? n : t)
	});
}
function B(e, t, n) {
	return !t || !t._zod ? new ul({
		type: "record",
		keyType: N(),
		valueType: e,
		...E(t)
	}) : new ul({
		type: "record",
		keyType: e,
		valueType: t,
		...E(n)
	});
}
function mc(e, t, n) {
	return new ul({
		type: "record",
		keyType: e,
		valueType: t,
		...E(n),
		partial: !0
	});
}
function V(e, t) {
	let n = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e;
	return new dl({
		type: "enum",
		entries: n,
		...E(t)
	});
}
function H(e, t) {
	return new fl({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...E(t)
	});
}
function hc(e) {
	return new pl({
		type: "transform",
		transform: e
	});
}
function gc(e) {
	return new ml({
		type: "optional",
		innerType: e
	});
}
function _c(e) {
	return new hl({
		type: "optional",
		innerType: e
	});
}
function vc(e) {
	return new gl({
		type: "nullable",
		innerType: e
	});
}
function yc(e, t) {
	return new _l({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Ge(t);
		}
	});
}
function bc(e, t) {
	return new vl({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Ge(t);
		}
	});
}
function xc(e, t) {
	return new yl({
		type: "nonoptional",
		innerType: e,
		...E(t)
	});
}
function Sc(e, t) {
	return new bl({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : yt(t)
	});
}
function Cc(e, t) {
	return new xl({
		type: "pipe",
		in: e,
		out: t
	});
}
function wc(e) {
	return new Cl({
		type: "readonly",
		innerType: e
	});
}
function Tc(e) {
	return new wl({
		type: "lazy",
		getter: e
	});
}
function Ec(e, t = {}) {
	return /* @__PURE__ */ xo(Tl, e, t);
}
function Dc(e, t) {
	return /* @__PURE__ */ So(e, t);
}
var U, Oc, kc, W, Ac, jc, Mc, Nc, Pc, Fc, Ic, Lc, Rc, zc, Bc, Vc, Hc, Uc, Wc, Gc, Kc, qc, Jc, Yc, Xc, Zc, Qc, $c, el, tl, nl, rl, il, al, ol, sl, cl, ll, ul, dl, fl, pl, ml, hl, gl, _l, vl, yl, bl, xl, Sl, Cl, wl, Tl, El, Dl = w((() => {
	Is(), Fs(), Bo(), pa(), Ls(), tc(), U = /*@__PURE__*/ O("ZodType", (e, t) => (nc(), k.init(e, t), e.def = t, e.type = t.type, e), {
		check(...e) {
			let t = this.def;
			return this.clone(Be(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
				check: e,
				def: { check: "custom" },
				onattach: []
			} } : e)] }), { parent: !0 });
		},
		with(...e) {
			return this.check(...e);
		},
		clone(e, t) {
			return qe(this, e, t);
		},
		brand() {
			return this;
		},
		register(e, t) {
			return e.add(this, t), this;
		},
		refine(e, t) {
			return this.check(Ec(e, t));
		},
		superRefine(e, t) {
			return this.check(Dc(e, t));
		},
		overwrite(e) {
			return this.check(/* @__PURE__ */ mo(e));
		},
		optional() {
			return gc(this);
		},
		exactOptional() {
			return _c(this);
		},
		nullable() {
			return vc(this);
		},
		nullish() {
			return gc(vc(this));
		},
		nonoptional(e) {
			return xc(this, e);
		},
		array() {
			return L(this);
		},
		or(e) {
			return dc([this, e]);
		},
		and(e) {
			return fc(this, e);
		},
		transform(e) {
			return Cc(this, hc(e));
		},
		default(e) {
			return yc(this, e);
		},
		prefault(e) {
			return bc(this, e);
		},
		catch(e) {
			return Sc(this, e);
		},
		pipe(e) {
			return Cc(this, e);
		},
		readonly() {
			return wc(this);
		},
		describe(e) {
			let t = this.clone();
			return _a.add(t, { description: e }), t;
		},
		meta(...e) {
			if (e.length === 0) return _a.get(this);
			let t = this.clone();
			return _a.add(t, e[0]), t;
		},
		isOptional() {
			return this.safeParse(void 0).success;
		},
		isNullable() {
			return this.safeParse(null).success;
		},
		apply(e, ...t) {
			return t.length === 0 ? e(this) : e(this, ...t);
		},
		get "~standard"() {
			return ht(this, "~standard", {
				...yr(this),
				jsonSchema: {
					input: zo(this, "input"),
					output: zo(this, "output")
				}
			});
		},
		set "~standard"(e) {
			mt(this, "~standard", e);
		},
		parse: function e(t, n) {
			return Us(this, t, n, { callee: e });
		},
		parseAsync: async function e(t, n) {
			return await Ws(this, t, n, { callee: e });
		},
		safeParse(e, t) {
			return Gs(this, e, t);
		},
		async safeParseAsync(e, t) {
			return Ks(this, e, t);
		},
		get spa() {
			return this?.safeParseAsync;
		},
		set spa(e) {
			mt(this, "spa", e);
		},
		encode: function e(t, n) {
			return qs(this, t, n, { callee: e });
		},
		decode: function e(t, n) {
			return Js(this, t, n, { callee: e });
		},
		encodeAsync: async function e(t, n) {
			return await Ys(this, t, n, { callee: e });
		},
		decodeAsync: async function e(t, n) {
			return await Xs(this, t, n, { callee: e });
		},
		safeEncode(e, t) {
			return Zs(this, e, t);
		},
		safeDecode(e, t) {
			return Qs(this, e, t);
		},
		async safeEncodeAsync(e, t) {
			return $s(this, e, t);
		},
		async safeDecodeAsync(e, t) {
			return ec(this, e, t);
		},
		toJSONSchema(e) {
			return Ro(this, {})(e);
		},
		get description() {
			return _a.get(this)?.description;
		},
		get _def() {
			return this._zod.def;
		}
	}), Oc = /*@__PURE__*/ O("_ZodString", (e, t) => {
		Yr.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => qo(e, t, n, r);
		let n = e._zod.bag;
		e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null;
	}, {
		regex(...e) {
			return this.check(/* @__PURE__ */ so(...e));
		},
		includes(...e) {
			return this.check(/* @__PURE__ */ uo(...e));
		},
		startsWith(...e) {
			return this.check(/* @__PURE__ */ fo(...e));
		},
		endsWith(...e) {
			return this.check(/* @__PURE__ */ po(...e));
		},
		min(...e) {
			return this.check(/* @__PURE__ */ ao(...e));
		},
		max(...e) {
			return this.check(/* @__PURE__ */ io(...e));
		},
		length(...e) {
			return this.check(/* @__PURE__ */ oo(...e));
		},
		nonempty(...e) {
			return this.check(/* @__PURE__ */ ao(1, ...e));
		},
		lowercase(e) {
			return this.check(/* @__PURE__ */ co(e));
		},
		uppercase(e) {
			return this.check(/* @__PURE__ */ lo(e));
		},
		trim() {
			return this.check(/* @__PURE__ */ go());
		},
		normalize(...e) {
			return this.check(/* @__PURE__ */ ho(...e));
		},
		toLowerCase() {
			return this.check(/* @__PURE__ */ _o());
		},
		toUpperCase() {
			return this.check(/* @__PURE__ */ vo());
		},
		slugify() {
			return this.check(/* @__PURE__ */ yo());
		}
	}), kc = /*@__PURE__*/ O("ZodString", (e, t) => {
		Yr.init(e, t), Oc.init(e, t);
	}, {
		email(e) {
			return this.check(/* @__PURE__ */ xa(Pc, e));
		},
		url(e) {
			return this.check(/* @__PURE__ */ Da(Lc, e));
		},
		jwt(e) {
			return this.check(/* @__PURE__ */ Ha(Qc, e));
		},
		emoji(e) {
			return this.check(/* @__PURE__ */ Oa(Rc, e));
		},
		guid(e) {
			return this.check(/* @__PURE__ */ Sa(Fc, e));
		},
		uuid(e) {
			return this.check(/* @__PURE__ */ Ca(Ic, e));
		},
		uuidv4(e) {
			return this.check(/* @__PURE__ */ wa(Ic, e));
		},
		uuidv6(e) {
			return this.check(/* @__PURE__ */ Ta(Ic, e));
		},
		uuidv7(e) {
			return this.check(/* @__PURE__ */ Ea(Ic, e));
		},
		nanoid(e) {
			return this.check(/* @__PURE__ */ ka(zc, e));
		},
		cuid(e) {
			return this.check(/* @__PURE__ */ Aa(Bc, e));
		},
		cuid2(e) {
			return this.check(/* @__PURE__ */ ja(Vc, e));
		},
		ulid(e) {
			return this.check(/* @__PURE__ */ Ma(Hc, e));
		},
		base64(e) {
			return this.check(/* @__PURE__ */ za(Yc, e));
		},
		base64url(e) {
			return this.check(/* @__PURE__ */ Ba(Xc, e));
		},
		xid(e) {
			return this.check(/* @__PURE__ */ Na(Uc, e));
		},
		ksuid(e) {
			return this.check(/* @__PURE__ */ Pa(Wc, e));
		},
		ipv4(e) {
			return this.check(/* @__PURE__ */ Fa(Gc, e));
		},
		ipv6(e) {
			return this.check(/* @__PURE__ */ Ia(Kc, e));
		},
		cidrv4(e) {
			return this.check(/* @__PURE__ */ La(qc, e));
		},
		cidrv6(e) {
			return this.check(/* @__PURE__ */ Ra(Jc, e));
		},
		e164(e) {
			return this.check(/* @__PURE__ */ Va(Zc, e));
		},
		datetime(e) {
			return this.check(/* @__PURE__ */ Ua(Ac, e));
		},
		date(e) {
			return this.check(/* @__PURE__ */ Wa(jc, e));
		},
		time(e) {
			return this.check(/* @__PURE__ */ Ga(Mc, e));
		},
		duration(e) {
			return this.check(/* @__PURE__ */ Ka(Nc, e));
		}
	}), W = /*@__PURE__*/ O("ZodStringFormat", (e, t) => {
		A.init(e, t), Oc.init(e, t);
	}), Ac = /*@__PURE__*/ O("ZodISODateTime", (e, t) => {
		ci.init(e, t), W.init(e, t);
	}), jc = /*@__PURE__*/ O("ZodISODate", (e, t) => {
		li.init(e, t), W.init(e, t);
	}), Mc = /*@__PURE__*/ O("ZodISOTime", (e, t) => {
		ui.init(e, t), W.init(e, t);
	}), Nc = /*@__PURE__*/ O("ZodISODuration", (e, t) => {
		di.init(e, t), W.init(e, t);
	}), Pc = /*@__PURE__*/ O("ZodEmail", (e, t) => {
		Qr.init(e, t), W.init(e, t);
	}), Fc = /*@__PURE__*/ O("ZodGUID", (e, t) => {
		Xr.init(e, t), W.init(e, t);
	}), Ic = /*@__PURE__*/ O("ZodUUID", (e, t) => {
		Zr.init(e, t), W.init(e, t);
	}), Lc = /*@__PURE__*/ O("ZodURL", (e, t) => {
		ei.init(e, t), W.init(e, t);
	}), Rc = /*@__PURE__*/ O("ZodEmoji", (e, t) => {
		ti.init(e, t), W.init(e, t);
	}), zc = /*@__PURE__*/ O("ZodNanoID", (e, t) => {
		ni.init(e, t), W.init(e, t);
	}), Bc = /*@__PURE__*/ O("ZodCUID", (e, t) => {
		ri.init(e, t), W.init(e, t);
	}), Vc = /*@__PURE__*/ O("ZodCUID2", (e, t) => {
		ii.init(e, t), W.init(e, t);
	}), Hc = /*@__PURE__*/ O("ZodULID", (e, t) => {
		ai.init(e, t), W.init(e, t);
	}), Uc = /*@__PURE__*/ O("ZodXID", (e, t) => {
		oi.init(e, t), W.init(e, t);
	}), Wc = /*@__PURE__*/ O("ZodKSUID", (e, t) => {
		si.init(e, t), W.init(e, t);
	}), Gc = /*@__PURE__*/ O("ZodIPv4", (e, t) => {
		fi.init(e, t), W.init(e, t);
	}), Kc = /*@__PURE__*/ O("ZodIPv6", (e, t) => {
		mi.init(e, t), W.init(e, t);
	}), qc = /*@__PURE__*/ O("ZodCIDRv4", (e, t) => {
		hi.init(e, t), W.init(e, t);
	}), Jc = /*@__PURE__*/ O("ZodCIDRv6", (e, t) => {
		gi.init(e, t), W.init(e, t);
	}), Yc = /*@__PURE__*/ O("ZodBase64", (e, t) => {
		_i.init(e, t), W.init(e, t);
	}), Xc = /*@__PURE__*/ O("ZodBase64URL", (e, t) => {
		vi.init(e, t), W.init(e, t);
	}), Zc = /*@__PURE__*/ O("ZodE164", (e, t) => {
		yi.init(e, t), W.init(e, t);
	}), Qc = /*@__PURE__*/ O("ZodJWT", (e, t) => {
		bi.init(e, t), W.init(e, t);
	}), $c = /*@__PURE__*/ O("ZodNumber", (e, t) => {
		xi.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => Jo(e, t, n, r);
		let n = e._zod.bag;
		e.minValue = Math.max(n.minimum ?? -Infinity, n.exclusiveMinimum ?? -Infinity) ?? null, e.maxValue = Math.min(n.maximum ?? Infinity, n.exclusiveMaximum ?? Infinity) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
	}, {
		gt(e, t) {
			return this.check(/* @__PURE__ */ to(e, t));
		},
		gte(e, t) {
			return this.check(/* @__PURE__ */ no(e, t));
		},
		min(e, t) {
			return this.check(/* @__PURE__ */ no(e, t));
		},
		lt(e, t) {
			return this.check(/* @__PURE__ */ $a(e, t));
		},
		lte(e, t) {
			return this.check(/* @__PURE__ */ eo(e, t));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ eo(e, t));
		},
		int(e) {
			return this.check(oc(e));
		},
		safe(e) {
			return this.check(oc(e));
		},
		positive(e) {
			return this.check(/* @__PURE__ */ to(0, e));
		},
		nonnegative(e) {
			return this.check(/* @__PURE__ */ no(0, e));
		},
		negative(e) {
			return this.check(/* @__PURE__ */ $a(0, e));
		},
		nonpositive(e) {
			return this.check(/* @__PURE__ */ eo(0, e));
		},
		multipleOf(e, t) {
			return this.check(/* @__PURE__ */ ro(e, t));
		},
		step(e, t) {
			return this.check(/* @__PURE__ */ ro(e, t));
		},
		finite() {
			return this;
		}
	}), el = /*@__PURE__*/ O("ZodNumberFormat", (e, t) => {
		Si.init(e, t), $c.init(e, t);
	}), tl = /*@__PURE__*/ O("ZodBoolean", (e, t) => {
		Ci.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => Yo(e, t, n, r);
	}), nl = /*@__PURE__*/ O("ZodUnknown", (e, t) => {
		wi.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => rs(e, t, n, r);
	}), rl = /*@__PURE__*/ O("ZodNever", (e, t) => {
		Ti.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => ts(e, t, n, r);
	}), il = /*@__PURE__*/ O("ZodArray", (e, t) => {
		rc(), Ei.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => gs(e, t, n, r), e.element = t.element;
	}, {
		min(e, t) {
			return this.check(/* @__PURE__ */ ao(e, t));
		},
		nonempty(e) {
			return this.check(/* @__PURE__ */ ao(1, e));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ io(e, t));
		},
		length(e, t) {
			return this.check(/* @__PURE__ */ oo(e, t));
		},
		unwrap() {
			return this.element;
		}
	}), al = /*@__PURE__*/ O("ZodObject", (e, t) => {
		rc(), Ai.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => _s(e, t, n, r), vt(e, "shape", (e) => e._zod.def.shape, !1);
	}, {
		keyof() {
			return V(Object.keys(this._zod.def.shape));
		},
		catchall(e) {
			return this.clone({
				...this._zod.def,
				catchall: e
			});
		},
		passthrough() {
			return this.clone({
				...this._zod.def,
				catchall: sc()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: sc()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: cc()
			});
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			});
		},
		extend(e) {
			return Qe(this, e);
		},
		safeExtend(e) {
			return $e(this, e);
		},
		merge(e) {
			return et(this, e);
		},
		pick(e) {
			return Xe(this, e);
		},
		omit(e) {
			return Ze(this, e);
		},
		partial(...e) {
			return tt(ml, this, e[0]);
		},
		exactPartial(...e) {
			return tt(hl, this, e[0], "exactPartial");
		},
		required(...e) {
			return nt(yl, this, e[0]);
		}
	}), ol = /*@__PURE__*/ O("ZodUnion", (e, t) => {
		ji.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => vs(e, t, n, r), e.options = t.options;
	}), sl = /*@__PURE__*/ O("ZodDiscriminatedUnion", (e, t) => {
		ol.init(e, t), Mi.init(e, t);
	}), cl = /*@__PURE__*/ O("ZodIntersection", (e, t) => {
		Ni.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => ys(e, t, n, r);
	}), ll = /*@__PURE__*/ O("ZodTuple", (e, t) => {
		rc(), Pi.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => bs(e, t, n, r);
	}, {
		rest(e) {
			return this.clone({
				...this._zod.def,
				rest: e
			});
		},
		partial() {
			let e = this._zod.def;
			if (e.checks?.length) throw Error(".partial() cannot be used on tuple schemas containing refinements");
			return this.clone({
				...e,
				items: e.items.map((e) => new ml({
					type: "optional",
					innerType: e
				}))
			});
		}
	}), ul = /*@__PURE__*/ O("ZodRecord", (e, t) => {
		rc(), Fi.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ss(e, t, n, r), e.keyType = t.keyType, e.valueType = t.valueType;
	}), dl = /*@__PURE__*/ O("ZodEnum", (e, t) => {
		Ii.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => as(e, t, n, r), e.enum = t.entries, e.options = Object.values(t.entries);
		let n = new Set(Object.keys(t.entries));
		e.extract = (e, r) => {
			let i = {};
			for (let r of e) if (n.has(r)) i[r] = t.entries[r];
			else throw Error(`Key ${r} not found in enum`);
			return new dl({
				...t,
				checks: [],
				...E(r),
				entries: i
			});
		}, e.exclude = (e, r) => {
			let i = { ...t.entries };
			for (let t of e) if (n.has(t)) delete i[t];
			else throw Error(`Key ${t} not found in enum`);
			return new dl({
				...t,
				checks: [],
				...E(r),
				entries: i
			});
		};
	}), fl = /*@__PURE__*/ O("ZodLiteral", (e, t) => {
		Li.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => os(e, t, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
			if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
			return t.values[0];
		} });
	}), pl = /*@__PURE__*/ O("ZodTransform", (e, t) => {
		rc(), Ri.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => ps(e, t, n, r), e._zod.parse = (n, r) => {
			if (r.direction === "backward") throw new Lt(e.constructor.name);
			n.addIssue = (r) => {
				if (typeof r == "string") n.issues.push(ft(r, n.value, t));
				else {
					let t = r;
					t.fatal && (t.continue = !1), t.code ??= "custom", "input" in t || (t.input = n.value), t.inst ??= e, n.issues.push(ft(t));
				}
			};
			let i = t.transform(n.value, n);
			return i instanceof Promise ? i.then((e) => (n.value = e, n)) : (n.value = i, n);
		};
	}), ml = /*@__PURE__*/ O("ZodOptional", (e, t) => {
		zi.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ms(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), hl = /*@__PURE__*/ O("ZodExactOptional", (e, t) => {
		Bi.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ms(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), gl = /*@__PURE__*/ O("ZodNullable", (e, t) => {
		Vi.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => Cs(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), _l = /*@__PURE__*/ O("ZodDefault", (e, t) => {
		Hi.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => Es(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
	}), vl = /*@__PURE__*/ O("ZodPrefault", (e, t) => {
		Ui.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ds(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), yl = /*@__PURE__*/ O("ZodNonOptional", (e, t) => {
		Wi.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => ws(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), bl = /*@__PURE__*/ O("ZodCatch", (e, t) => {
		Gi.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => Os(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
	}), xl = /*@__PURE__*/ O("ZodPipe", (e, t) => {
		Ki.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => ks(e, t, n, r), e.in = t.in, e.out = t.out;
	}), Sl = /*@__PURE__*/ O("ZodCodec", (e, t) => {
		xl.init(e, t), qi.init(e, t);
	}), Cl = /*@__PURE__*/ O("ZodReadonly", (e, t) => {
		Ji.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => As(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
	}), wl = /*@__PURE__*/ O("ZodLazy", (e, t) => {
		Yi.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ns(e, t, n, r), e.unwrap = () => e._zod.def.getter();
	}), Tl = /*@__PURE__*/ O("ZodCustom", (e, t) => {
		Xi.init(e, t), U.init(e, t), e._zod.processJSONSchema = (t, n, r) => ds(e, t, n, r);
	}), El = (...e) => /* @__PURE__ */ wo({
		Codec: Sl,
		Boolean: tl,
		String: kc
	}, ...e);
})), Ol = w((() => {
	Is();
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/iso.js
function kl(e) {
	return /* @__PURE__ */ Ua(Ac, e);
}
var Al = w((() => {
	Is(), Dl();
}));
//#endregion
//#region node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/coerce.js
function G(e) {
	return /* @__PURE__ */ Ja($c, e);
}
var jl = w((() => {
	Is(), Dl();
})), Ml = w((() => {
	Is(), Dl(), Ls(), Hs(), tc(), Ol(), Fs(), va(), At(), Ls(), Al(), Dl(), Zi(), pa(), jl();
})), K = w((() => {
	Ml(), Ml();
})), Nl, Pl, Fl, Il, Ll, Rl, zl, Bl = w((() => {
	K(), Nl = (e) => {
		if (typeof e != "object" || !e || !("~orpc" in e)) return;
		let { route: t } = e["~orpc"];
		if (t?.method !== void 0 && t.path !== void 0) return {
			method: t.method,
			path: t.path
		};
	}, Pl = (e) => {
		let t = [];
		for (let [n, r] of Object.entries(e)) if (typeof r == "object" && r) for (let [e, i] of Object.entries(r)) {
			let r = Nl(i);
			r !== void 0 && t.push({
				name: `${n}.${e}`,
				method: r.method,
				path: r.path
			});
		}
		return t.toSorted((e, t) => e.name.localeCompare(t.name));
	}, Fl = /* @__PURE__ */ new Set([
		"required",
		"enum",
		"anyOf",
		"oneOf",
		"allOf"
	]), Il = (e, t) => {
		if (Array.isArray(e)) {
			let n = e.map((e) => Il(e));
			return t !== void 0 && Fl.has(t) ? n.toSorted((e, t) => JSON.stringify(e).localeCompare(JSON.stringify(t))) : n;
		}
		return typeof e != "object" || !e ? e : Object.entries(e).toSorted(([e], [t]) => e.localeCompare(t)).map(([e, t]) => [e, Il(t, e)]);
	}, Ll = (e) => {
		let t = JSON.stringify(Il(e)), n = 2166136261;
		for (let e = 0; e < t.length; e++) n ^= t.charCodeAt(e), n = Math.imul(n, 16777619) >>> 0;
		return n.toString(36);
	}, Rl = (e) => {
		if (typeof e != "object" || !e || !("~orpc" in e)) return;
		let { inputSchema: t, outputSchema: n } = e["~orpc"];
		try {
			return Ll({
				in: t === void 0 ? void 0 : Go(t, { io: "input" }),
				out: n === void 0 ? void 0 : Go(n, { io: "output" })
			});
		} catch {
			return;
		}
	}, zl = (e) => {
		let t = {};
		for (let [n, r] of Object.entries(e)) if (typeof r == "object" && r) for (let [e, i] of Object.entries(r)) {
			if (Nl(i) === void 0) continue;
			let r = Rl(i);
			r !== void 0 && (t[`${n}.${e}`] = r);
		}
		return t;
	};
}));
//#endregion
//#region node_modules/.pnpm/@orpc+shared@1.14.13/node_modules/@orpc/shared/dist/index.mjs
function Vl(e) {
	return e[0] ?? {};
}
function Hl(e) {
	let t = Promise.resolve();
	return (...n) => t = t.catch(() => {}).then(() => e(...n));
}
function Ul(e) {
	return !e || typeof e != "object" ? !1 : "next" in e && typeof e.next == "function" && Symbol.asyncIterator in e && typeof e[Symbol.asyncIterator] == "function";
}
function Wl(e) {
	return Gl(e) ? Object.getPrototypeOf(e)?.constructor : null;
}
function Gl(e) {
	return !!e && (typeof e == "object" || typeof e == "function");
}
var Kl, ql, Jl, Yl, Xl = w((() => {
	Kl = "@orpc/shared", ql = "1.14.13", `${Kl}${ql}`, Jl = Symbol.asyncDispose ?? Symbol.for("asyncDispose"), Yl = class {
		#e = !1;
		#t = !1;
		#n;
		#r;
		constructor(e, t) {
			this.#n = t, this.#r = Hl(async () => {
				if (this.#e) return {
					done: !0,
					value: void 0
				};
				try {
					let t = await e();
					return t.done && (this.#e = !0), t;
				} catch (e) {
					throw this.#e = !0, e;
				} finally {
					this.#e && !this.#t && (this.#t = !0, await this.#n("next"));
				}
			});
		}
		next() {
			return this.#r();
		}
		async return(e) {
			return this.#e = !0, this.#t || (this.#t = !0, await this.#n("return")), {
				done: !0,
				value: e
			};
		}
		async throw(e) {
			throw this.#e = !0, this.#t || (this.#t = !0, await this.#n("throw")), e;
		}
		async [Jl]() {
			this.#e = !0, this.#t || (this.#t = !0, await this.#n("dispose"));
		}
		[Symbol.asyncIterator]() {
			return this;
		}
	};
}));
//#endregion
//#region node_modules/.pnpm/@orpc+client@1.14.13/node_modules/@orpc/client/dist/shared/client.DexhfmWd.mjs
function Zl(e, t) {
	return t ?? nu[e]?.status ?? 500;
}
function Ql(e, t) {
	return t || nu[e]?.message || e;
}
function $l(e) {
	return e < 200 || e >= 400;
}
var eu, tu, nu, ru, iu, au = w((() => {
	Xl(), eu = "@orpc/client", tu = "1.14.13", nu = {
		BAD_REQUEST: {
			status: 400,
			message: "Bad Request"
		},
		UNAUTHORIZED: {
			status: 401,
			message: "Unauthorized"
		},
		FORBIDDEN: {
			status: 403,
			message: "Forbidden"
		},
		NOT_FOUND: {
			status: 404,
			message: "Not Found"
		},
		METHOD_NOT_SUPPORTED: {
			status: 405,
			message: "Method Not Supported"
		},
		NOT_ACCEPTABLE: {
			status: 406,
			message: "Not Acceptable"
		},
		TIMEOUT: {
			status: 408,
			message: "Request Timeout"
		},
		CONFLICT: {
			status: 409,
			message: "Conflict"
		},
		PRECONDITION_FAILED: {
			status: 412,
			message: "Precondition Failed"
		},
		PAYLOAD_TOO_LARGE: {
			status: 413,
			message: "Payload Too Large"
		},
		UNSUPPORTED_MEDIA_TYPE: {
			status: 415,
			message: "Unsupported Media Type"
		},
		UNPROCESSABLE_CONTENT: {
			status: 422,
			message: "Unprocessable Content"
		},
		TOO_MANY_REQUESTS: {
			status: 429,
			message: "Too Many Requests"
		},
		CLIENT_CLOSED_REQUEST: {
			status: 499,
			message: "Client Closed Request"
		},
		INTERNAL_SERVER_ERROR: {
			status: 500,
			message: "Internal Server Error"
		},
		NOT_IMPLEMENTED: {
			status: 501,
			message: "Not Implemented"
		},
		BAD_GATEWAY: {
			status: 502,
			message: "Bad Gateway"
		},
		SERVICE_UNAVAILABLE: {
			status: 503,
			message: "Service Unavailable"
		},
		GATEWAY_TIMEOUT: {
			status: 504,
			message: "Gateway Timeout"
		}
	}, iu = class e extends Error {
		defined;
		code;
		status;
		data;
		static {
			let t = Symbol.for(`__${eu}@${tu}/error/ORPC_ERROR_CONSTRUCTORS__`);
			globalThis[t] ??= /* @__PURE__ */ new WeakSet(), ru = globalThis[t], ru.add(e);
		}
		constructor(e, ...t) {
			let n = Vl(t);
			if (n.status !== void 0 && !$l(n.status)) throw Error("[ORPCError] Invalid error status code.");
			let r = Ql(e, n.message);
			super(r, n), this.code = e, this.status = Zl(e, n.status), this.defined = n.defined ?? !1, this.data = n.data;
		}
		toJSON() {
			return {
				defined: this.defined,
				code: this.code,
				status: this.status,
				message: this.message,
				data: this.data
			};
		}
		static [Symbol.hasInstance](e) {
			if (ru.has(this)) {
				let t = Wl(e);
				if (t && ru.has(t)) return !0;
			}
			return super[Symbol.hasInstance](e);
		}
	};
}));
function ou(e) {
	return pu.test(e);
}
function su(e) {
	if (ou(e)) throw new fu("Event's id must not contain a carriage return or newline character");
}
function cu(e) {
	if (!Number.isInteger(e) || e < 0) throw new fu("Event's retry must be a integer and >= 0");
}
function lu(e) {
	if (ou(e)) throw new fu("Event's comment must not contain a carriage return or newline character");
}
function uu(e, t) {
	if (t.id === void 0 && t.retry === void 0 && !t.comments?.length) return e;
	if (t.id !== void 0 && su(t.id), t.retry !== void 0 && cu(t.retry), t.comments !== void 0) for (let e of t.comments) lu(e);
	return new Proxy(e, { get(e, n, r) {
		return n === mu ? t : Reflect.get(e, n, r);
	} });
}
function du(e) {
	return Gl(e) ? Reflect.get(e, mu) : void 0;
}
var fu, pu, mu, hu = w((() => {
	Xl(), fu = class extends TypeError {}, TransformStream, pu = /\r\n|[\n\r]/, mu = Symbol("ORPC_EVENT_SOURCE_META");
}));
//#endregion
//#region node_modules/.pnpm/@orpc+client@1.14.13/node_modules/@orpc/client/dist/shared/client.BLtwTQUg.mjs
function gu(e, t) {
	let n = async (e) => {
		let n = await t.error(e);
		if (n !== e) {
			let t = du(e);
			t && Gl(n) && (n = uu(n, t));
		}
		return n;
	};
	return new Yl(async () => {
		let { done: r, value: i } = await (async () => {
			try {
				return await e.next();
			} catch (e) {
				throw await n(e);
			}
		})(), a = await t.value(i, r);
		if (a !== i) {
			let e = du(i);
			e && Gl(a) && (a = uu(a, e));
		}
		return {
			done: r,
			value: a
		};
	}, async () => {
		try {
			await e.return?.();
		} catch (e) {
			throw await n(e);
		}
	});
}
var _u = w((() => {
	Xl(), hu();
})), vu = w((() => {
	Xl(), au(), _u(), hu();
}));
//#endregion
//#region node_modules/.pnpm/@orpc+contract@1.14.13/node_modules/@orpc/contract/dist/shared/contract.D_dZrO__.mjs
function yu(e, t) {
	return {
		...e,
		...t
	};
}
function bu(e) {
	return e instanceof Su || (typeof e == "object" || typeof e == "function") && e !== null && "~orpc" in e && typeof e["~orpc"] == "object" && e["~orpc"] !== null && "errorMap" in e["~orpc"] && "route" in e["~orpc"] && "meta" in e["~orpc"];
}
var xu, Su, Cu = w((() => {
	vu(), xu = class extends Error {
		issues;
		data;
		constructor(e) {
			super(e.message, e), this.issues = e.issues, this.data = e.data;
		}
	}, Su = class {
		"~orpc";
		constructor(e) {
			if (e.route?.successStatus && $l(e.route.successStatus)) throw Error("[ContractProcedure] Invalid successStatus.");
			if (Object.values(e.errorMap).some((e) => e && e.status && !$l(e.status))) throw Error("[ContractProcedure] Invalid error status code.");
			this["~orpc"] = e;
		}
	};
}));
//#endregion
//#region node_modules/.pnpm/@orpc+contract@1.14.13/node_modules/@orpc/contract/dist/index.mjs
function wu(e, t) {
	return {
		...e,
		...t
	};
}
function Tu(e, t) {
	return {
		...e,
		...t
	};
}
function Eu(e, t) {
	return e.path ? {
		...e,
		path: `${t}${e.path}`
	} : e;
}
function Du(e, t) {
	return {
		...e,
		tags: [...t, ...e.tags ?? []]
	};
}
function Ou(e, t) {
	return e ? `${e}${t}` : t;
}
function ku(e, t) {
	return e ? [...e, ...t] : t;
}
function Au(e, t) {
	let n = e;
	return t.prefix && (n = Eu(n, t.prefix)), t.tags?.length && (n = Du(n, t.tags)), n;
}
function ju(e, t) {
	if (bu(e)) return new Su({
		...e["~orpc"],
		errorMap: yu(t.errorMap, e["~orpc"].errorMap),
		route: Au(e["~orpc"].route, t)
	});
	if (typeof e != "object" || !e) return e;
	let n = {};
	for (let r in e) n[r] = ju(e[r], t);
	return n;
}
function Mu(e, t) {
	return { "~standard": {
		[Pu]: {
			yields: e,
			returns: t
		},
		vendor: "orpc",
		version: 1,
		validate(n) {
			return Ul(n) ? { value: gu(n, {
				async value(n, r) {
					let i = r ? t : e;
					if (!i) return n;
					let a = await i["~standard"].validate(n);
					if (a.issues) throw new iu("EVENT_ITERATOR_VALIDATION_FAILED", {
						message: "Event iterator validation failed",
						cause: new xu({
							issues: a.issues,
							message: "Event iterator validation failed",
							data: n
						})
					});
					return a.value;
				},
				error: async (e) => e
			}) } : { issues: [{
				message: "Expect event iterator",
				path: []
			}] };
		}
	} };
}
var Nu, q, Pu, J = w((() => {
	Cu(), Xl(), vu(), Nu = class e extends Su {
		constructor(e) {
			super(e), this["~orpc"].prefix = e.prefix, this["~orpc"].tags = e.tags;
		}
		$meta(t) {
			return new e({
				...this["~orpc"],
				meta: t
			});
		}
		$route(t) {
			return new e({
				...this["~orpc"],
				route: t
			});
		}
		$input(t) {
			return new e({
				...this["~orpc"],
				inputSchema: t
			});
		}
		errors(t) {
			return new e({
				...this["~orpc"],
				errorMap: yu(this["~orpc"].errorMap, t)
			});
		}
		meta(t) {
			return new e({
				...this["~orpc"],
				meta: wu(this["~orpc"].meta, t)
			});
		}
		route(t) {
			return new e({
				...this["~orpc"],
				route: Tu(this["~orpc"].route, t)
			});
		}
		input(t) {
			return new e({
				...this["~orpc"],
				inputSchema: t
			});
		}
		output(t) {
			return new e({
				...this["~orpc"],
				outputSchema: t
			});
		}
		prefix(t) {
			return new e({
				...this["~orpc"],
				prefix: Ou(this["~orpc"].prefix, t)
			});
		}
		tag(...t) {
			return new e({
				...this["~orpc"],
				tags: ku(this["~orpc"].tags, t)
			});
		}
		router(e) {
			return ju(e, this["~orpc"]);
		}
	}, q = new Nu({
		errorMap: {},
		route: {},
		meta: {}
	}), Pu = Symbol("ORPC_EVENT_ITERATOR_DETAILS");
})), Fu, Iu, Lu = w((() => {
	Fu = /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,63}$/, Iu = (e) => Fu.test(e);
})), Ru, zu, Bu, Vu, Hu = w((() => {
	K(), V(["helper", "run"]), Ru = [
		{
			id: "commit-message",
			label: "Commit messages",
			blurb: "The subject written when an agent's work lands, and the release note under it.",
			kind: "helper",
			icon: "file-edit"
		},
		{
			id: "session-title",
			label: "Session titles",
			blurb: "The name a conversation wears on the board, written a second into its first turn.",
			kind: "helper",
			icon: "pencil"
		},
		{
			id: "safety-judge",
			label: "Safety judge",
			blurb: "Which model reads your safety policy before a flagged command runs.",
			kind: "helper",
			icon: "shield"
		},
		{
			id: "loop-verdict",
			label: "Loop verdicts",
			blurb: "Whether a loop's iteration met the goal, or the loop goes round again.",
			kind: "helper",
			icon: "check-square"
		},
		{
			id: "persona-router",
			label: "Persona routing",
			blurb: "Which model reads a new chat's first message and picks the persona for it.",
			kind: "helper",
			icon: "users"
		},
		{
			id: "pipeline-fix",
			label: "Pipeline fixes",
			blurb: "The agent started by Fix on a red pipeline.",
			kind: "run",
			trigger: "pressed",
			icon: "wave-pulse"
		},
		{
			id: "deployment-fix",
			label: "Deployment fixes",
			blurb: "The agent started by Fix on a deployment that is down.",
			kind: "run",
			trigger: "pressed",
			icon: "server"
		},
		{
			id: "maintenance-chore",
			label: "Maintenance chores",
			blurb: "A chore run started from the Maintenance board.",
			kind: "run",
			trigger: "pressed",
			icon: "wrench"
		},
		{
			id: "documentation-run",
			label: "Documentation runs",
			blurb: "A pass over a repo's own documentation.",
			kind: "run",
			trigger: "pressed",
			icon: "book"
		},
		{
			id: "acceptance-run",
			label: "Acceptance runs",
			blurb: "One session per story in an acceptance fan-out.",
			kind: "run",
			trigger: "pressed",
			icon: "list-check"
		},
		{
			id: "pre-push-fix",
			label: "Pre-push fixes",
			blurb: "The fix proposed when a check fails on the way to a push.",
			kind: "run",
			trigger: "pressed",
			icon: "cloud-upload"
		},
		{
			id: "approval-queue",
			label: "Approvals queue",
			blurb: "The turn that publishes or acts on what you approved.",
			kind: "run",
			trigger: "pressed",
			icon: "check-circle"
		},
		{
			id: "extension-review",
			label: "Extension update reviews",
			blurb: "The agent that reads an extension update before it is applied.",
			kind: "run",
			trigger: "unprompted",
			icon: "box"
		},
		{
			id: "loop-iteration",
			label: "Loop iterations",
			blurb: "Each round of a loop working towards its goal.",
			kind: "run",
			trigger: "unprompted",
			icon: "repeat"
		}
	], zu = Ru.map((e) => e.id), Bu = V(zu), Vu = (e) => Ru.filter((t) => e(t)), Vu((e) => e.kind === "helper"), Vu((e) => e.kind === "run" && e.trigger === "pressed"), Vu((e) => e.kind === "run" && e.trigger === "unprompted");
})), Uu, Wu, Gu, Ku, qu, Ju = w((() => {
	Uu = {
		runtime: "claude-code",
		steering: !0,
		permissions: "modes",
		questions: !0,
		mcp: "full",
		execution: ["shell", "js"],
		effort: !0,
		fastMode: !0,
		isolation: "namespace",
		commands: !0,
		terminals: !0,
		recovery: !0,
		instructions: "replace",
		skillDiscovery: "native",
		rulebook: "hooks",
		secrets: "masked"
	}, Wu = {
		runtime: "codex",
		steering: !0,
		permissions: "plan",
		questions: !0,
		mcp: "browser",
		execution: ["shell"],
		effort: !0,
		fastMode: !1,
		isolation: "namespace",
		commands: !0,
		terminals: !1,
		recovery: !1,
		instructions: "replace",
		skillDiscovery: "native",
		rulebook: "approval",
		secrets: "none"
	}, Gu = {
		runtime: "opencode",
		steering: !1,
		permissions: "plan",
		questions: !1,
		mcp: "none",
		execution: ["shell"],
		effort: !1,
		fastMode: !1,
		isolation: "cwd",
		commands: !1,
		terminals: !1,
		recovery: !1,
		instructions: "append",
		skillDiscovery: "prompt",
		rulebook: "refuse-only",
		secrets: "none"
	}, Ku = {
		...Gu,
		runtime: "opencode-gemini"
	}, qu = {
		runtime: "cursor",
		steering: !1,
		permissions: "plan",
		questions: !0,
		mcp: "tools",
		execution: ["shell"],
		effort: !0,
		fastMode: !1,
		isolation: "cwd",
		commands: !1,
		terminals: !1,
		recovery: !0,
		instructions: "append",
		skillDiscovery: "prompt",
		rulebook: "hooks",
		secrets: "none"
	};
})), Yu, Xu, Zu, Qu = w((() => {
	Ju(), Yu = [
		{
			id: "claude",
			label: "Claude Code",
			vendor: "Claude",
			accountLabel: "Claude",
			destination: "Anthropic",
			brand: "claude",
			access: {
				kind: "subscription",
				requirement: "Claude subscription",
				runs: "Claude Code"
			},
			auth: { kind: "oauth" },
			planLimits: !0,
			runtimes: {
				native: Uu,
				claudeCode: Uu
			}
		},
		{
			id: "codex",
			label: "Codex",
			vendor: "ChatGPT",
			accountLabel: "ChatGPT",
			destination: "ChatGPT",
			brand: "codex",
			access: {
				kind: "subscription",
				requirement: "ChatGPT subscription",
				runs: "Codex"
			},
			auth: {
				kind: "translator",
				cliProxy: "codex"
			},
			planLimits: !0,
			runtimes: {
				native: Wu,
				claudeCode: Uu
			}
		},
		{
			id: "grok",
			label: "Grok",
			vendor: "xAI",
			accountLabel: "Grok",
			destination: "x.ai",
			brand: "grok",
			access: {
				kind: "subscription",
				requirement: "SuperGrok subscription",
				runs: "Grok"
			},
			auth: {
				kind: "translator",
				cliProxy: "xai"
			},
			planLimits: !1,
			runtimes: {
				native: Gu,
				claudeCode: Uu
			}
		},
		{
			id: "kimi",
			label: "Kimi Code",
			vendor: "Kimi Code",
			accountLabel: "Kimi Code",
			destination: "Kimi Code",
			brand: "kimi",
			access: {
				kind: "subscription",
				requirement: "Kimi Code subscription",
				runs: "Kimi Code"
			},
			auth: {
				kind: "translator",
				cliProxy: "kimi"
			},
			planLimits: !0,
			runtimes: {
				native: Uu,
				claudeCode: Uu
			}
		},
		{
			id: "gemini",
			label: "Google",
			vendor: "Google",
			accountLabel: "Google",
			destination: "Google",
			brand: "gemini",
			access: {
				kind: "free",
				requirement: "Google sign-in",
				runs: "Gemini, Claude and GPT-OSS under Claude Code"
			},
			auth: {
				kind: "translator",
				cliProxy: "antigravity"
			},
			planLimits: !0,
			runtimes: {
				native: Ku,
				claudeCode: Ku
			}
		},
		{
			id: "cursor",
			label: "Cursor",
			vendor: "Cursor",
			accountLabel: "Cursor",
			destination: "Cursor",
			brand: "cursor",
			access: {
				kind: "subscription",
				requirement: "Cursor Pro subscription",
				runs: "Cursor Agent"
			},
			auth: { kind: "oauth" },
			planLimits: !1,
			runtimes: {
				native: qu,
				claudeCode: qu
			}
		},
		{
			id: "meta",
			label: "Meta",
			vendor: "Meta",
			accountLabel: "Meta",
			destination: "Meta",
			brand: "meta",
			access: {
				kind: "subscription",
				requirement: "Muse Code subscription",
				runs: "Muse Spark under Claude Code"
			},
			auth: {
				kind: "minted",
				variants: [{
					id: "meta",
					label: "Meta",
					flow: "device",
					anthropicBase: "https://api.meta.ai",
					catalogBase: "https://api.meta.ai/v1"
				}]
			},
			planLimits: !1,
			runtimes: {
				native: Uu,
				claudeCode: Uu
			}
		},
		{
			id: "zai",
			label: "Z.ai",
			vendor: "Z.ai",
			accountLabel: "Z.ai",
			destination: "Z.ai",
			brand: "zai",
			access: {
				kind: "subscription",
				requirement: "Z.ai GLM Coding Plan",
				runs: "GLM under Claude Code"
			},
			auth: {
				kind: "minted",
				variants: [{
					id: "zai",
					label: "Z.ai international",
					flow: "device",
					anthropicBase: "https://api.z.ai/api/anthropic",
					catalogBase: "https://api.z.ai/api/coding/paas/v4"
				}, {
					id: "bigmodel",
					label: "BigModel (中国大陆)",
					flow: "redirect",
					anthropicBase: "https://open.bigmodel.cn/api/anthropic",
					catalogBase: "https://open.bigmodel.cn/api/coding/paas/v4"
				}]
			},
			planLimits: !1,
			runtimes: {
				native: Uu,
				claudeCode: Uu
			}
		}
	], Xu = Yu.map((e) => e.id), new Map(Yu.map((e) => [e.id, e])), Zu = Yu.filter((e) => e.auth.kind === "translator").map((e) => e.id), Yu.filter((e) => e.auth.kind === "minted").map((e) => e.id);
})), $u, ed = w((() => {
	K(), $u = R({
		subject: N(),
		detail: N()
	});
})), td, nd, rd, id, ad, od, sd = w((() => {
	K(), ed(), R({
		type: H("runner-hello"),
		token: N(),
		version: N(),
		image: N(),
		channel: N().optional(),
		overlayHash: N().optional(),
		definitionToml: N().optional()
	}), R({
		agent: N().optional(),
		account: N().optional(),
		model: N().optional()
	}), dc([
		R({
			ok: H(!0),
			kind: H("oauth"),
			accessToken: N(),
			account: N().optional()
		}),
		R({
			ok: H(!0),
			kind: H("parent-translator"),
			model: N(),
			trial: I().optional()
		}),
		R({
			ok: H(!0),
			kind: H("endpoint"),
			baseUrl: N(),
			authToken: N(),
			model: N(),
			trial: I().optional()
		}),
		R({
			ok: H(!1),
			code: V([
				"subscription-required",
				"claude-reauth",
				"trial-unavailable"
			]).optional(),
			message: N()
		})
	]), R({
		account: N().min(1),
		rejected: N().min(1)
	}), R({ accessToken: N().optional() }), td = R({
		cpus: F().int().positive(),
		memoryMb: F().int().positive(),
		freeDiskMb: F().int().nonnegative(),
		load: F().nonnegative()
	}), nd = V([
		"current",
		"outdated",
		"unknown"
	]), R({
		id: N(),
		host: N().optional(),
		online: I(),
		version: N().optional(),
		image: N().optional(),
		channel: N().optional(),
		overlayHash: N().optional(),
		facts: td.optional(),
		lastSeen: F().optional(),
		parity: nd,
		drift: L($u).optional()
	}), rd = R({
		op: V(["pull", "push"]),
		conversationId: N().min(1),
		branch: N().min(1),
		repos: L(R({
			repo: N().min(1),
			dir: N(),
			mainBranch: N().min(1)
		}))
	}), id = dc([R({
		kind: H("line"),
		text: N()
	}), R({
		kind: H("done"),
		ok: I(),
		detail: N().optional()
	})]), ad = R({
		conversationId: N().min(1),
		branch: N().min(1),
		prompt: N(),
		provider: N(),
		harness: N(),
		model: N().optional(),
		effort: N().optional(),
		thinking: I().optional(),
		fast: I().optional(),
		account: N().optional(),
		sessionId: N().optional(),
		attachments: L(R({
			path: N().min(1),
			bytesBase64: N()
		})).optional()
	}), od = dc([R({ kind: H("local") }), R({
		kind: H("runner"),
		id: N().min(1)
	})]);
})), Y, cd, ld, ud = w((() => {
	K(), Y = N().min(1).max(60).regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/), cd = N().regex(/^[A-Za-z0-9][A-Za-z0-9._/-]*$/).max(200), ld = V(["on", "off"]).default("off");
})), dd, fd, pd, md, hd, gd, _d, vd, yd, bd, xd, Sd, Cd, wd, Td, Ed, Dd, Od, kd, X = w((() => {
	K(), Lu(), Hu(), Qu(), sd(), ud(), dd = N().min(1), fd = R({ provider: V(Xu) }), pd = V(["native", "claude-code"]), md = R({
		repo: N(),
		base: N().min(1)
	}), hd = R({
		file: N().min(1).describe("The file open in the editor, as a workspace path."),
		startLine: F().int().min(1).optional().describe("First line of the selection, counting from one. Leave both out when the whole file is the context."),
		endLine: F().int().min(1).optional().describe("Last line of the selection, counting from one."),
		selection: N().max(2e4).optional().describe("The selected text itself. Cut it down before sending if it is long: this is context, not an upload.")
	}), gd = N().regex(Fu), _d = R({
		automationId: N(),
		provider: N(),
		channelId: N().optional(),
		author: N().optional()
	}), V([
		"schedule",
		"event",
		"listener",
		"webchat",
		"issues",
		"workspace",
		"workflow"
	]), vd = V([
		"allow",
		"hold",
		"deny"
	]), yd = V(["sandbox", "device"]), bd = V([
		"git.destructive",
		"files.destructive",
		"system.destructive",
		"container.state",
		"secrets.access",
		"package.publish",
		"network.outbound"
	]), xd = R({
		schedule: vd.default("allow"),
		event: vd.default("allow"),
		listener: vd.default("allow"),
		webchat: vd.default("allow"),
		issues: vd.default("hold"),
		workspace: vd.default("allow"),
		workflow: V(["allow", "deny"]).default("allow")
	}), Sd = V([
		"default",
		"plan",
		"bypassPermissions"
	]), Cd = R({
		conversationId: gd,
		index: F().int().nonnegative(),
		files: V(["then", "now"])
	}), wd = R({
		prompt: N().describe("What to say to the agent. May be empty if you are only attaching files."),
		title: N().max(80).optional().describe("A title for a conversation this turn is opening. Ignored for a conversation that already has one."),
		attachments: L(N().min(1)).max(20).optional().describe("Files to hand the agent along with the prompt, as workspace paths. Upload them first."),
		agent: dd.optional().describe("Which model provider serves this turn. Leave it out for Claude."),
		harness: pd.optional().describe("Which agentic loop runs the turn. Leave it out to use each provider's own."),
		account: N().optional().describe("Which of that provider's connected accounts pays for the turn. Leave it out for the first one."),
		actsAs: Y.optional().describe("Which persona the turn speaks as out in the world. Not the same as which account pays for it."),
		sessionId: N().optional().describe("Resume this provider session instead of starting a fresh one."),
		conversationId: gd.optional().describe("The conversation this turn belongs to. You choose it, it survives model switches, and it is how you address the conversation later. Naming one that does not exist opens it."),
		isolated: I().optional().describe("Work in this conversation's own private copy of the repos rather than the shared tree, so several agents can work at once. Needs a conversation id."),
		startIn: N().max(200).optional().describe("Which folder the conversation opens in, relative to the workspace root; the project it belongs to. Decided on the first turn. A persona that names its own start folder wins."),
		placement: od.optional().describe("Where this conversation runs: this sandbox (leave it out), or a paired runner by id. Decided on the first turn; later turns follow the conversation."),
		worktreeBase: L(md).min(1).max(50).optional().describe("Pin a new private copy to these exact commits instead of today's workspace. Used when several agents must start from identical files."),
		autoLand: I().optional().describe("Whether this turn's work merges into the workspace when it finishes. Overrides the conversation's own setting for this turn only."),
		runRole: Bu.optional().describe("What started this turn, when it was not a person typing: which of the sandbox's per-job model lists answers for it. Only used when the turn names no model of its own."),
		origin: _d.optional().describe("Set by the sandbox alone: this turn opened a conversation on behalf of a message from outside rather than a person."),
		forkOf: R({
			conversationId: gd.describe("The conversation this one was cut from."),
			keep: F().int().nonnegative().describe("How many of that conversation's messages to copy in before this turn runs."),
			files: V(["then", "now"]).describe("Which files the fork opens on: \"now\" is the workspace as it stands, \"then\" is the files as they were at the cut, which needs a private copy.")
		}).optional().describe("Where this conversation was cut from, on its first turn only. Only the client knows this, so only the client can say it."),
		model: N().optional().describe("Which model to use. Leave it out for the provider's default."),
		unattended: I().optional().describe("Nobody chose a model for this turn because a screen started it rather than a person. The sandbox then fills in the model its owner picked for unwatched work."),
		outsideWake: N().min(1).optional().describe("Content from outside caused this turn, and what to call the source. It is what makes the sandbox treat the turn as carrying somebody else's words."),
		permissionMode: Sd.optional().describe("How tool calls are gated: ask before each tool, propose a plan first, or run everything. The agent can move itself between these mid-turn."),
		allowedTools: L(N().min(1)).optional().describe("Narrow the turn to these tools. Leave it out for everything the runtime has. For a turn driven by an outside message this list is the real boundary, because prompt wording is only advice."),
		effort: N().optional().describe("How hard the model should think, where the provider offers a choice."),
		thinking: I().optional().describe("Whether to show the model's reasoning as it works."),
		fast: I().optional().describe("Ask for the same work at a higher rate for a higher price. A request rather than a promise: the answer says what actually happened."),
		tierHold: I().optional().describe("Run exactly the model that was picked, even when the turn looks simple enough for a cheaper one. The judgement is still recorded; nothing is substituted."),
		editorContext: hd.optional().describe("What the user has open in their editor, folded into the prompt so that pointing words like \"this\" resolve.")
	}).refine((e) => e.prompt.trim().length > 0 || (e.attachments?.length ?? 0) > 0, { message: "prompt or attachments required" }).refine((e) => e.isolated !== !0 || e.conversationId !== void 0, { message: "isolated requires conversationId" }).refine((e) => e.worktreeBase === void 0 || e.isolated === !0 && e.conversationId !== void 0, { message: "worktreeBase requires an isolated conversationId" }).refine((e) => e.origin === void 0 || e.conversationId !== void 0, { message: "origin requires conversationId" }).refine((e) => e.forkOf === void 0 || e.conversationId !== void 0, { message: "forkOf requires conversationId" }).refine((e) => e.forkOf?.files !== "then" || e.isolated === !0, { message: "forkOf.files \"then\" requires isolated" }), Td = R({
		agent: N().min(1).describe("Which provider."),
		model: N().min(1).describe("Which of its models. Both or neither, because a model name only means anything to the provider that serves it."),
		account: N().optional().describe("Which connected account of that provider pays, by its daemon-minted id. Leave it out for whichever has headroom."),
		harness: pd.optional().describe("Which agentic loop runs it. Leave it out to use the provider's own."),
		effort: N().optional().describe("How hard that model should think, where it offers a choice. Leave it out to take the model's own default."),
		thinking: I().optional().describe("Whether this model reasons before it answers, where that is a choice it offers."),
		fast: I().optional().describe("Ask for this model's work at a higher rate for a higher price. A request rather than a promise.")
	}).optional(), Ed = (e) => ({
		agent: e.provider,
		model: e.model,
		...e.account === void 0 ? {} : { account: e.account },
		...e.harness === void 0 ? {} : { harness: e.harness },
		...e.effort === void 0 ? {} : { effort: e.effort },
		...e.thinking === void 0 ? {} : { thinking: e.thinking },
		...e.fast === void 0 ? {} : { fast: e.fast }
	}), Dd = R({
		provider: dd.describe("Which provider serves this work."),
		model: N().min(1).describe("Which of its models. Both halves, because a model name only means anything to the provider that serves it."),
		effort: N().optional().describe("How hard this model should think, where it offers a choice. Leave it out to take the model's own default."),
		thinking: I().optional().describe("Whether this model reasons before it answers, where that is a choice it offers."),
		fast: I().optional().describe("Ask for this model's work at a higher rate for a higher price. A request rather than a promise."),
		harness: pd.optional().describe("Which agentic loop runs it. Leave it out to use the provider's own.")
	}), Od = R({ run: N().describe("The id of the run that just started. Hand it back when you attach, so the stream resumes rather than replaying.") }), kd = R({
		conversationId: gd.describe("Which conversation to watch."),
		run: N().optional().describe("The run you were watching. If a newer turn has started since, the head names that one instead, and its rows are that turn's.")
	});
})), Ad, jd, Md, Nd, Pd, Fd, Id, Ld, Rd, zd, Bd, Vd, Hd, Ud, Wd = w((() => {
	K(), Qu(), X(), Ad = dc([
		H("all"),
		H("none"),
		R({ models: L(N().min(1)).min(1) })
	]), jd = R({
		kind: N(),
		label: N().optional(),
		utilization: F(),
		resetsAt: F().optional(),
		gates: Ad
	}), Md = R({
		windows: L(jd),
		measuredAt: F()
	}), Nd = R({
		available: I().describe("Whether the provider will reopen this account's session window right now. The only thing a button may be drawn from."),
		reason: N().optional().describe("Why not, in the provider's own word, when it gave one. Absent when it is available, or when the provider said nothing."),
		nextAvailableAt: F().optional().describe("When the next reset may be claimed, in epoch seconds, where the provider publishes it. Absent means unknown, never 'now'."),
		weeklyResetsAt: F().optional().describe("When the weekly allowance itself reopens, in epoch seconds, where the provider publishes it.")
	}), Pd = R({
		result: V([
			"reset",
			"already_used",
			"not_limited",
			"ineligible",
			"unavailable",
			"error"
		]).describe("What the provider did. Only `reset` reopened the window; every other value means nothing changed."),
		nextAvailableAt: F().optional().describe("When another reset may be claimed, in epoch seconds, where the provider published it."),
		detail: N().optional().describe("What went wrong, in words, for the two outcomes that are this sandbox's fault rather than the plan's.")
	}), Fd = R({
		at: F().describe("When it refused, in milliseconds."),
		kind: V([
			"limit",
			"auth",
			"entitlement"
		]).describe("Three different noes, kept apart because what fixes each is different. A spent allowance is answered by waiting; a refused credential by signing in again; and an entitlement refusal, where somebody has switched this off for your seat, by neither of those. That last one authenticates fine and reports healthy limits the whole time it refuses everything."),
		message: N().describe("The provider's own words, verbatim. The only part that says which limit or which credential."),
		account: N().optional().describe("Which account was serving, where that is known."),
		model: N().optional().describe("Which model the refused turn was on, where that is known.")
	}), Id = R({ refusals: B(N(), Fd).describe("The most recent refusal per provider. Read alongside an account's usage: that says how full it was when last checked, this says whether it has since started saying no.") }), Ld = R({
		name: N(),
		label: N(),
		usage: Md.optional(),
		cooling: R({
			until: F().optional(),
			reason: N().optional()
		}).optional()
	}), Rd = R(Object.fromEntries(Zu.map((e) => [e, L(Ld)]))), zd = z("kind", [
		R({
			kind: H("plan").describe("Answering a plan the agent proposed."),
			requestId: N().min(1).describe("Which card you are answering, from the frame that raised it."),
			approve: I().describe("Whether to go ahead. Approving means the plan then runs without a prompt per tool, because being asked whether a plan you just approved may run its first command is not a question worth having."),
			feedback: N().optional().describe("Why not, which goes back to the model as the reason.")
		}),
		R({
			kind: H("question").describe("Answering a question the agent asked."),
			requestId: N().min(1).describe("Which card you are answering."),
			answers: B(N(), L(N())).optional().describe("What you chose, keyed by the question, with the chosen labels or your own words."),
			cancelled: I().optional().describe("Dismissing it instead, which tells the agent to carry on using sensible defaults rather than leaving it waiting.")
		}),
		R({
			kind: H("permission").describe("Answering a request to use a tool."),
			requestId: N().min(1).describe("Which card you are answering."),
			decision: V([
				"once",
				"always",
				"deny"
			]).describe("Once allows this call alone; always allows that whole tool for the rest of the conversation; no blocks it."),
			feedback: N().optional().describe("Why not, which goes back to the model as the reason.")
		}),
		R({
			kind: H("browser_help").describe("Answering a request for help in the agent's browser: a captcha, a password it does not hold, a check on your phone."),
			requestId: N().min(1).describe("Which card you are answering."),
			helped: I().describe("Whether you cleared it. Yes means the turn carries on from the page as you left it; no tells the agent so, and it moves on rather than waiting for ever."),
			note: N().optional().describe("Anything the agent should know, which goes back to it either way.")
		}),
		R({
			kind: H("terminal_help").describe("Answering a request for help at a terminal: a code to type, a confirmation only a person can give."),
			requestId: N().min(1).describe("Which card you are answering."),
			helped: I().describe("Whether you did it. Yes also hands the agent what the terminal now says, because a person answering a prompt is exactly the moment the agent cannot see."),
			note: N().optional().describe("Anything the agent should know, which goes back to it either way.")
		}),
		R({
			kind: H("capability_offer").describe("Answering a request to connect something the agent needs."),
			requestId: N().min(1).describe("Which card you are answering."),
			connect: I().describe("Yes keeps the agent waiting while you set it up, and it carries on the moment the connection comes alive. No tells it to continue without. The reply itself connects nothing: setting it up is still your own doing.")
		}),
		R({
			kind: H("payment_offer").describe("Answering a request to pay for something."),
			requestId: N().min(1).describe("Which card you are answering."),
			approve: I().describe("Yes releases exactly one payment. Anything else spends nothing. This click is the only way the money can move.")
		}),
		R({
			kind: H("credential_offer").describe("Releasing a credential the agent may only use once a named person says so."),
			requestId: N().min(1).describe("Which card you are answering."),
			approve: I().describe("Yes releases it, as far as the card says (this one use, or the rest of the conversation). Only the people the card names can answer at all, yes or no.")
		})
	]), Bd = R({
		conversationId: N().min(1).describe("Which running conversation to interrupt."),
		text: N().max(2e4).describe("What to say to it. It arrives mid-turn without stopping the turn."),
		attachments: L(N().min(1)).max(20).optional().describe("Files to send with it, as workspace paths. A screenshot dropped in mid-turn with no words is a legitimate thing to send."),
		editorContext: hd.optional().describe("What you have open, folded in so that pointing words resolve.")
	}).refine((e) => e.text.trim().length > 0 || (e.attachments?.length ?? 0) > 0, { message: "text or attachments required" }), Vd = R({ conversationId: N().min(1).describe("Which conversation's running turn to cancel.") }), Hd = R({
		agent: dd.describe("Which provider serves the re-run."),
		harness: pd.describe("Which agentic loop runs it."),
		account: N().optional().describe("Which of that provider's accounts pays for it. Leave it out for the first one."),
		model: N().optional().describe("Which model. Leave it out to keep the one the refused turn named."),
		carry: I().optional().describe("When the account changes, keep the provider session (the model keeps everything, and re-reads all of it once on the other account) rather than opening a fresh one seeded from the record. Ignored when the provider changes, or when nothing changes.")
	}), Ud = R({
		conversationId: N().min(1).describe("Which conversation's held turn to run again."),
		routing: Hd.optional().describe("Who serves the re-run, when the conversation has been re-pointed since it was refused. Leave it out to run it on whatever the turn carried.")
	});
})), Gd, Kd = w((() => {
	K(), Qu(), Gd = V(Zu);
})), qd, Jd, Yd, Xd, Zd, Qd, $d, ef, tf, nf, rf, af, of, sf, cf, lf, uf, df = w((() => {
	K(), Wd(), Kd(), qd = R({
		id: N().describe("The account's id, which is what a turn names to spend on it and what disconnecting takes."),
		label: N().describe("What it is called here, which somebody can change."),
		email: N().optional().describe("Who it signs in as, in the provider's own words. Kept beside the label rather than folded into it, so a renamed account can still say whose it is. Absent when the provider says nothing, which is exactly when renaming is the only answer."),
		organization: N().optional().describe("Which organisation it belongs to, where the provider says."),
		scope: N().optional().describe("What the credential is permitted to do, in the provider's terms."),
		connectedAt: F().describe("When it was connected, in milliseconds."),
		needsReauth: I().optional().describe("Its stored credential can no longer be renewed and somebody has to sign in again. Absent means healthy, or not checked yet."),
		detail: N().optional().describe("Why, in words a person can act on."),
		usage: Md.optional().describe("How full its plan limits were when last measured, so a picker can show what is left before committing work to it. Absent until a reading exists, which reads as unknown rather than as nothing left.")
	}), Jd = R({ accounts: L(qd).describe("The connected accounts. Tokens never travel in this shape: being in this list is what connected means.") }), Yd = R({ force: El().default(!1).describe("Measure the plan limits again before answering, rather than serving a recent reading. Slower, and the right thing when somebody has just changed a plan and is asking whether what they can see is still true.") }), Xd = R({ id: N().min(1).describe("Which account.") }), Zd = R({
		id: N().min(1).describe("Which account."),
		label: N().max(80).describe("The new name. Blank restores the one derived from the sign-in, rather than leaving a nameless row.")
	}), Qd = V([
		"device",
		"redirect",
		"paste"
	]), $d = R({
		url: N().describe("The page to open and sign in on."),
		code: N().describe("The one-time code the page will ask for, where the vendor issues one. Blank when the page is already addressed to this attempt."),
		state: N().describe("For a redirect sign-in, the marker in the address the browser lands on, so a pasted URL can be recognised as this attempt's. Blank otherwise."),
		flow: Qd.describe("How this attempt ends. A device sign-in finishes by itself and you watch the account list; a redirect needs the address it landed on handed back; a paste needs the code the page showed."),
		variant: N().describe("Which of the provider's estates this attempt signs in to. Blank for a provider with one."),
		handshake: N().describe("This attempt's id, for finishing or abandoning it. Not a credential and not redeemable: the proof that completes the sign-in never leaves the sandbox."),
		expiresAt: F().describe("When this attempt stops being answerable, in milliseconds, so a card can stop waiting instead of spinning.")
	}), ef = R({ variant: N().min(1).optional().describe("Which estate to sign in to. Absent takes the provider's default.") }), tf = R({
		handshake: N().min(1).describe("Which attempt this belongs to."),
		code: N().optional().describe("The code the sign-in page showed, for a paste sign-in."),
		redirectUrl: N().optional().describe("The address the browser was sent to, whole, for a redirect sign-in. The grant is inside it."),
		label: N().optional().describe("What to call the account. Blank derives one from the sign-in.")
	}), nf = R({ account: qd.optional().describe("The account it connected, where the sign-in ends here. Absent means keep watching the account list.") }), rf = R({ handshake: N().min(1).describe("Which attempt to stop waiting on.") }), af = R({
		url: N().describe("The page to open."),
		code: N().describe("The one-time code, where the provider uses one."),
		state: N().min(1).describe("The handshake's id, which status reads and the finishing call sends back."),
		flow: V(["device", "redirect"]).describe("Which shape this is. A device sign-in finishes by itself and you poll the attempt; a redirect needs the address it landed on handed back. Said outright rather than guessed at from whether a code happens to exist.")
	}), of = z("status", [
		R({ status: H("wait") }),
		R({ status: H("ok") }),
		R({
			status: H("error"),
			error: N().min(1)
		})
	]), sf = R({
		provider: Gd.describe("Which provider."),
		redirectUrl: N().min(1).describe("The address the browser was sent to, whole. The grant is inside it."),
		state: N().min(1).describe("The handshake this belongs to. A mismatch is refused.")
	}), cf = V(["reasoning", "fast"]), lf = R({
		id: N().describe("What to name when asking for this model."),
		label: N().describe("What to call it on screen."),
		efforts: L(N()).optional().describe("The thinking levels it accepts, where the provider says. Empty means use your own defaults."),
		description: N().optional().describe("What it is good for, in the provider's own words. Absent where the provider publishes only ids, which is the honest answer rather than something to paper over with a hand-written table."),
		badges: L(cf).optional().describe("What it is known for, where the provider says so."),
		contextWindow: F().optional().describe("How many tokens this model will accept in one request, where the server publishes it.")
	}), uf = R({
		models: L(lf).describe("What this provider serves, in its own preference order, which is not rearranged here. Never empty."),
		default: N().describe("Which one a fresh conversation starts on. Always present.")
	});
})), Z, ff, pf, Q, $ = w((() => {
	K(), Z = R({ ok: H(!0).describe("Always true. A route that answers this either did the thing or refused with a status; there is no third outcome to report.") }), ff = V([
		"viewer",
		"collaborator",
		"maintainer",
		"owner"
	]), V([
		"viewer",
		"collaborator",
		"maintainer"
	]), pf = R({ token: N().min(1).describe("The freshly minted credential. The previous one stopped working the moment this answered.") }), Q = R({ repo: N().describe("Which repository. \"root\" is the workspace itself; anything else is a repository's folder relative to the workspace root, URL-encoded.") });
})), mf, hf = w((() => {
	J(), X(), df(), $(), mf = {
		start: q.route({
			method: "POST",
			path: "/accounts/{provider}/login/start",
			summary: "Begin connecting an account",
			description: "Hands back the page to sign in on, and the code it will ask for where there is one. The sandbox holds the proof and finishes what it can itself: a device sign-in lands in the account list on its own, a paste or a redirect needs one thing brought back to the finishing call."
		}).input(fd.extend(ef.shape)).output($d),
		complete: q.route({
			method: "POST",
			path: "/accounts/{provider}/login/complete",
			summary: "Finish a sign-in with what the page handed back",
			description: "Takes the code the page showed, or the address a redirect landed on, and finishes the attempt. Answers with the account where the exchange ends here; otherwise the sandbox still has a mint to do and the row appears in the account list."
		}).input(fd.extend(tf.shape)).output(nf),
		cancel: q.route({
			method: "POST",
			path: "/accounts/{provider}/login/cancel",
			summary: "Abandon a sign-in",
			description: "Stops waiting on a sign-in nobody completed. An abandoned attempt also expires on its own."
		}).input(fd.extend(rf.shape)).output(Z),
		accounts: q.route({
			method: "GET",
			path: "/accounts/{provider}",
			summary: "Connected accounts of a provider",
			description: "Each connected account with how full its plan limits were when last measured, where the provider publishes any. Ask for a fresh measurement and it takes one before answering, which is slower. The credentials themselves never travel: being in this list is what connected means."
		}).input(fd.extend(Yd.shape)).output(Jd),
		rename: q.route({
			method: "POST",
			path: "/accounts/{provider}/rename",
			summary: "Rename an account",
			description: "Changes the label one account shows under, so several are tellable apart. Blank restores the one derived from the sign-in."
		}).input(fd.extend(Zd.shape)).output(qd),
		disconnect: q.route({
			method: "POST",
			path: "/accounts/{provider}/disconnect",
			summary: "Disconnect an account",
			description: "Clears one stored credential, and stops any sign-in still in flight for this provider. The others stay connected."
		}).input(fd.extend(Xd.shape)).output(Z)
	};
})), gf, _f, vf, yf, bf, xf = w((() => {
	K(), X(), gf = R({
		id: N().describe("The entry's own id."),
		at: F().describe("When it happened, in milliseconds. Also what you page by."),
		provider: N().optional().describe("Which outside service, when one was involved. Absent for the sandbox's own events."),
		account: N().optional().describe("Which account handled it. Absent for the sandbox's own events and for work run on a provider's default."),
		direction: V([
			"in",
			"out",
			"system"
		]).describe("Whether something arrived, something went out, or the sandbox did it to itself."),
		type: N().describe("Exactly what happened: a message received or sent, a reaction, a turn starting or ending, a rule doing something. A rule that ran and passed says nothing here, because a feed of green ticks is one the eye learns to skip."),
		channelId: N().optional().describe("Which channel or thread it happened in."),
		author: N().optional().describe("Who sent it, for something that arrived."),
		actor: N().optional().describe("Who asked for the turn, as the sandbox verified it: a member's email, or token:<label> for a program's control token. Absent for a wake nothing asked for."),
		content: N().optional().describe("The message, in full, whichever direction it went."),
		method: N().optional().describe("The verb of an outgoing call."),
		endpoint: N().optional().describe("The address of an outgoing call. Credentials travel in headers, so they are never here."),
		sessionId: N().optional().describe("The provider session behind it."),
		turnId: N().optional().describe("Ties one turn's entries together. A turn writes several, and read as separate rows they say one thing several times, so a feed groups on this."),
		conversationId: N().optional().describe("Which conversation. This, rather than the provider session, is what the same agent means across a feed, because a session is retired whenever the model changes."),
		title: N().optional().describe("What that conversation was called at the time. Copied in rather than looked up, because an audit entry must still read as words years later, after the conversation has been renamed or pruned."),
		origin: _d.optional().describe("What woke the conversation from outside, when something did. It is how a turn gets filed under the chat service that caused it rather than under the model that served it."),
		automationIds: L(N()).optional().describe("Which automations were involved."),
		outcome: V(["ok", "error"]).optional().describe("How it ended."),
		error: N().optional().describe("What went wrong, when something did."),
		extra: B(N(), sc()).optional().describe("Whatever else the source had to say: attachments, participants, a recording's path. Shape varies by source.")
	}), _f = R({
		provider: N().optional().describe("Narrow it to one outside service."),
		limit: G().min(1).max(500).default(100).describe("How many entries to return."),
		before: G().optional().describe("Only entries older than this timestamp, so paging walks backwards through the feed.")
	}), vf = R({ events: L(gf).describe("The audit entries, newest first.") }), yf = R({
		capabilityId: N().describe("Which connection."),
		provider: N().describe("Which service it is."),
		gateway: V([
			"ready",
			"connecting",
			"pairing",
			"disconnected",
			"idle"
		]).describe("Idle means it is up but has nothing to listen for, which is different from a connection that should be up and is not. Pairing means somebody started a sign-in and never finished it, which no amount of waiting will fix."),
		lastError: N().optional().describe("The most recent thing that went wrong on it.")
	}), bf = R({
		connections: L(yf).describe("Each source feeding the record, and whether it is working. Probed now rather than remembered."),
		voice: R({
			channelId: N().describe("Which channel."),
			channelName: N().describe("What it is called."),
			startedAt: F().describe("When it joined, in milliseconds."),
			participants: L(N()).describe("Who else is in it.")
		}).optional().describe("A voice call the sandbox is currently in, when it is in one.")
	});
})), Sf, Cf = w((() => {
	J(), xf(), Sf = {
		list: q.route({
			method: "GET",
			path: "/activity",
			summary: "What the agent has done out in the world",
			description: "The audit trail of actions taken on outside services. Read-only on purpose: entries are written by the sandbox alone, which is what makes it a record worth trusting."
		}).input(_f).output(vf),
		status: q.route({
			method: "GET",
			path: "/activity/status",
			summary: "Whether the audit trail is being kept",
			description: "Which sources are feeding the record and whether each is working."
		}).output(bf)
	};
})), wf, Tf, Ef, Df, Of, kf, Af, jf, Mf, Nf, Pf, Ff, If, Lf, Rf, zf, Bf = w((() => {
	K(), wf = /^[A-Za-z_][A-Za-z0-9_]*$/, Tf = N().regex(wf).max(128), Ef = R({
		key: Tf.describe("The name to store it under, which is the name a process will find it by."),
		value: N().min(1).describe("The value. It goes straight to your sandbox and never through the platform.")
	}), Df = R({ keys: L(N()).describe("The names that exist here. Only the names: the values never leave the sandbox.") }), Of = R({ key: Tf.describe("Which secret, by name.") }), kf = R({ value: N().describe("The value itself. The only place in this API one is ever returned.") }), Af = V(["use", "conversation"]).describe("How far one release goes: `use` asks again every single time (one click releases exactly one use), `conversation` covers the rest of this conversation and is forgotten when the daemon restarts."), jf = V(["secret", "capability"]).describe("Whether this gate covers one stored secret, by the name a reference carries, or one whole connected capability, by its id."), Mf = V([
		"shell",
		"code",
		"browser",
		"session",
		"otp"
	]).describe("What the credential was about to be used for: a shell command, a script, typing into a page, mounting a connected account, or one one-time code."), Nf = R({
		subject: N().min(1).describe("What is gated: a secret's name, or a connected capability's id."),
		kind: jf,
		approvers: L(N().min(3)).min(1).describe("Exactly who may release it, by email, from the people on the Access roster. Not a seniority floor: nobody outside this list can release it, the owner included, unless the owner is on it."),
		scope: Af
	}), Pf = R({ gates: L(Nf).describe("Every gate in force. Names, subjects and approver addresses only: this answer never carries a credential.") }), Ff = R({ subject: N().min(1).describe("Which gate, by the secret name or capability id it covers.") }), If = R({
		subject: N().min(1).describe("What to ask for: the secret's name, or the connected capability's id."),
		why: N().max(280).optional().describe("One line on what it is for. The only words on the card that are the agent's."),
		conversationId: N().optional().describe("Which conversation to raise the card in. The CLI fills this from the running turn.")
	}), Lf = R({
		granted: H(!0).describe("Always true: a refusal is an error with a sentence, never a `false` here."),
		approvedBy: N().describe("Who released it."),
		message: N().describe("What the grant means in practice, and what to do next.")
	}), Rf = R({
		key: N().describe("What identifies it. Unique across the whole inventory, so several accounts of one provider each get their own entry."),
		kind: V([
			"env",
			"generated",
			"capability",
			"provider"
		]).describe("Where it came from: you set it, the sandbox generated it, a connection needs it, or it is a model account's credential."),
		label: N().optional().describe("A friendlier name, for entries that have one."),
		status: V([
			"missing",
			"set",
			"connected"
		]).describe("Whether it exists and, for a connection, whether it is working."),
		requiredBy: L(R({
			resourceId: N().describe("Which resource."),
			type: N().describe("What kind of resource it is.")
		})).describe("What is waiting on it. Empty for a connection's or an account's own credential."),
		storedAt: N().describe("Where it actually lives, in words."),
		revealable: I().describe("Whether its value can be shown at all. Everything except a model account's credential can be."),
		ci: R({
			synced: I().describe("Whether the pipeline has it."),
			pushedAt: N().optional().describe("When it was last sent there.")
		}).optional().describe("Whether a copy has been given to the build pipeline."),
		lastUse: R({
			at: F().describe("When, in milliseconds."),
			lane: V([
				"shell",
				"code",
				"browser"
			]).describe("How it was used: a command, a script, or typed into a page."),
			detail: N().optional().describe("Where it went: the start of the command or script, or the site. Names and destinations only, never values."),
			approvedBy: N().optional().describe("Who released it for that use, when it is gated. Absent when nothing had to be approved.")
		}).optional().describe("The last time an agent actually spent this secret. Absent while it never has been, which most never are."),
		gate: R({
			approvers: L(N()).describe("Who may release it, by email. Nobody else can, whatever their role."),
			scope: Af
		}).optional().describe("Who has to release this before the agent can use it, and for how long one release lasts. Absent when it is not gated.")
	}), zf = R({ entries: L(Rf).describe("One entry per secret this sandbox knows about, from every place they live. No values, ever.") });
})), Vf, Hf, Uf, Wf, Gf, Kf, qf, Jf, Yf, Xf, Zf, Qf, $f, ep, tp, np, rp, ip, ap, op, sp, cp, lp, up, dp, fp, pp, mp, hp, gp, _p, vp, yp = w((() => {
	K(), X(), Bf(), Vf = R({
		label: N().describe("The choice, in a few words."),
		description: N().describe("What picking it means."),
		preview: N().optional().describe("Something to look at while deciding: a mock-up, a snippet, a layout.")
	}), Hf = R({
		question: N().describe("What the agent is asking."),
		header: N().describe("A short label for the question."),
		multiSelect: I().describe("Whether more than one answer can be picked."),
		options: L(Vf).describe("The choices offered. A free-text answer is always possible as well.")
	}), Uf = R({
		text: N().describe("What would run."),
		language: V(["bash", "javascript"]).describe("Which of the two backends it is written for, named as the grammar that colours it."),
		truncated: I().describe("Whether this is an excerpt of a longer program, so the card can say so instead of ending mid-word. An excerpt always carries the flagged fragment: the beginning, then a window around the fragment, with any skipped middle written into the text as a bracketed count."),
		spans: L(R({
			start: F().int().nonnegative(),
			end: F().int().nonnegative()
		})).describe("Which fragments of the text the pattern match fired on: every matched class's, or, under the hard rule, only the class the title names. Offsets into text, in order, never overlapping.")
	}), Wf = R({
		toolName: N().describe("Which tool it wants to use."),
		title: N().optional().describe("The whole question, as a sentence, exactly as the runtime words it."),
		displayName: N().optional().describe("A short phrase for the button, such as read file."),
		description: N().optional().describe("More about what it is asking for."),
		reason: N().optional().describe("Why it is asking at all: a rule, the current mode, something that looked risky."),
		path: N().optional().describe("Which file it concerns, when it concerns one."),
		alwaysLabel: N().optional().describe("The wording for an always-allow answer. Present only when there is something an always could actually remember; without it the only answers are once and no."),
		program: Uf.optional().describe("The program this card is holding, when the card is about one. Present on a command gate's card and absent on every other permission ask."),
		explain: N().optional().describe("One plain sentence saying what the program does and why it is being asked about, where the title says something else. Written by the judge that read your safety policy, never by the agent being gated.")
	}), Gf = R({
		card: N().describe("Which connection is being asked for."),
		name: N().describe("What it is called, as the catalogue titles it rather than as the agent named it."),
		why: N().optional().describe("The agent's case for connecting it, and the only words on this card that are the agent's.")
	}), Kf = R({
		url: N().describe("What is being paid for."),
		description: N().optional().describe("What the endpoint says it is."),
		payTo: N().describe("Where the money goes, taken verbatim from the endpoint's own demand."),
		network: N().describe("On which network."),
		asset: N().describe("In which token."),
		assetName: N().describe("That token's name. It is pegged to the dollar, which is what lets every amount here read as dollars."),
		amountUsd: N().describe("The exact price. Not a ceiling: this scheme has no ranges, so this is the whole spend."),
		spentTodayUsd: N().describe("What has already gone out today."),
		dailyCapUsd: N().describe("What may go out in a day."),
		why: N().optional().describe("The agent's case for paying, and the only words on this card that are the agent's.")
	}), qf = R({
		subject: N().describe("Which credential is being asked for."),
		kind: jf,
		lane: Mf,
		detail: N().optional().describe("Where it would go: the start of the command, the site, or what is being mounted. Never a value: the command still reads as a reference at this point."),
		why: N().optional().describe("The agent's case for using it, and the only words on this card that are the agent's."),
		approvers: L(N()).describe("Who may release it. A click from anyone else is refused and leaves the card standing."),
		scope: Af
	}), Jf = R({
		name: N().describe("What to type, without the leading slash."),
		description: N().describe("What it does."),
		hint: N().optional().describe("What its argument should look like, shown after the name.")
	}), Yf = R({ agent: dd.optional().describe("Whose commands to read. Leave it out for Claude.") }), Xf = R({ commands: L(Jf).describe("The shortcut commands, as the provider last published them.") }), Zf = R({
		content: N().describe("The item, as the agent wrote it."),
		status: V([
			"pending",
			"in_progress",
			"completed"
		]).describe("Where it is."),
		activeForm: N().optional().describe("How to phrase it while it is happening, so a screen can say what the agent is doing rather than what it plans to do.")
	}), Qf = R({
		tokens: F().describe("How much the latest request sent, all told."),
		contextWindow: F().describe("How much the model can hold. The gap between these two is how close the conversation is to being compacted."),
		cachedAt: F().optional().describe("When that request last touched the provider's prompt cache, in milliseconds. The cache's clock runs from here, since a read refreshes it as a write does."),
		cacheTtlMs: F().optional().describe("How long that cache entry lives from `cachedAt`, in milliseconds.")
	}), $f = V([
		"read",
		"edit",
		"delete",
		"move",
		"search",
		"execute",
		"think",
		"fetch",
		"other"
	]), ep = V([
		"pending",
		"in_progress",
		"completed",
		"failed"
	]), tp = R({
		path: N().describe("The file, as a workspace path, whatever directory the tool was run from."),
		line: F().optional().describe("Which line, counting from one.")
	}), np = z("type", [
		R({
			type: H("text").describe("Plain output."),
			text: N().describe("What the tool said.")
		}),
		R({
			type: H("diff").describe("A change to a file."),
			path: N().describe("Which file, as a workspace path."),
			oldText: N().optional().describe("What was there. Absent for a new file, or where the previous contents are not known."),
			newText: N().describe("What is there now."),
			truncated: I().optional().describe("One of the two sides was too large to send whole.")
		}),
		R({
			type: H("image").describe("A picture the tool produced."),
			path: N().describe("Where it is, as a workspace path. A path rather than the bytes, because the workspace already serves it, sending it inline would bloat every stored record, and this way the picture stays openable afterwards.")
		})
	]), rp = R({
		path: N().describe("Where it lives, as a workspace path."),
		title: N().describe("What it is called: its opening heading, or its file name."),
		markdown: N().describe("The document itself."),
		truncated: I().optional().describe("It was clipped at the wire cap; the file on disk has more."),
		plan: I().optional().describe("It is one of the CLI's plan files, written to be approved rather than merely read.")
	}), ip = N().describe("What to send back when you answer."), ap = {
		requestId: ip,
		text: N().describe("The plan itself."),
		document: rp.optional().describe("The write-up this plan refers to, when the plan itself is a pointer to one.")
	}, op = {
		requestId: ip,
		questions: L(Hf).describe("What it wants to know."),
		document: rp.optional().describe("The document this turn wrote and is asking about, so the choice can be read beside it.")
	}, sp = { requestId: ip }, cp = {
		requestId: N(),
		session: N(),
		account: N(),
		message: N()
	}, lp = {
		requestId: N(),
		session: N(),
		message: N()
	}, up = {
		requestId: N(),
		offer: Gf
	}, dp = {
		requestId: N(),
		offer: Kf
	}, fp = {
		requestId: N(),
		offer: qf
	}, pp = R({
		outcome: V(["connected", "unfinished"]),
		id: N().optional()
	}), mp = R({
		outcome: V(["paid", "failed"]),
		amountUsd: N(),
		transaction: N().optional(),
		network: N().optional()
	}), hp = R({
		outcome: V(["released", "refused"]),
		approvedBy: N().optional()
	}), gp = R({
		kind: H("plan").describe("The agent has written a plan and is waiting for a yes."),
		...ap
	}), _p = R({
		kind: H("question").describe("The agent has asked you something and is waiting."),
		...op
	}), vp = Wf.extend({
		kind: H("permission").describe("The agent wants to use a tool it needs permission for."),
		...sp
	}), z("kind", [
		gp,
		_p,
		vp
	]);
})), bp = w((() => {})), xp = w((() => {})), Sp, Cp, wp, Tp = w((() => {
	bp(), xp(), Sp = "/work", Cp = ".intentic", wp = "481795963975-cq9msl6higcd91joidrfp8mjlkuq5fk3.apps.googleusercontent.com", `${wp}`;
})), Ep, Dp, Op, kp, Ap = w((() => {
	K(), Ep = /^[a-zA-Z_][a-zA-Z0-9_]{0,39}$/, Dp = R({
		name: N().regex(Ep),
		type: V([
			"string",
			"number",
			"boolean",
			"string[]"
		]),
		description: N().min(1),
		required: I()
	}), Op = (e) => {
		let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
		for (let r of e) t.has(r.name) && n.add(r.name), t.add(r.name);
		return [...n];
	}, kp = L(Dp).min(1).max(16).superRefine((e, t) => {
		for (let n of Op(e)) t.addIssue({
			code: "custom",
			message: `Output field names must be unique; "${n}" is repeated.`
		});
	});
})), jp, Mp, Np, Pp, Fp, Ip, Lp, Rp, zp, Bp, Vp, Hp, Up, Wp, Gp, Kp = w((() => {
	K(), Tp(), Ap(), X(), ud(), jp = V(["fresh", "continue"]), Mp = z("kind", [
		R({ kind: H("none").describe("It produces nothing but its work. The classic make the suite pass: what it leaves behind is a passing suite, and asking it to also file a report is asking it to spend a round on paperwork.") }),
		R({ kind: H("claim").describe("Each round says whether it is done and why. Structured prose: done is a value read rather than a sentence interpreted. Self-assessment, so advisory by construction; it exists because plenty of goals have no command that could check them.") }),
		R({
			kind: H("json").describe("Each round writes a real answer in a shape you declared. This is the one that makes a step's output usable as the next step's input: a paragraph mentioning three files cannot be fed to anything, a list of three files can."),
			fields: kp.describe("The shape that answer has to match.")
		})
	]), Np = z("kind", [R({
		kind: H("command").describe("Run something and see if it passes. Deterministic, free, and the only signal here whose answer does not come from a model. A passing test suite beats any amount of self-report."),
		command: N().min(1).describe("The command to run in the conversation's own tree. Exiting cleanly means satisfied.")
	}), R({
		kind: H("judge").describe("Put the question to a separate model with no tools, which reads the round's own report and rules on it, having done none of the work and nothing invested in its being finished."),
		rubric: N().min(1).describe("What that judge is asked."),
		model: N().optional().describe("Which model judges. Leave it out for the cheap one the other small jobs use.")
	})]), Pp = R({
		done: I().describe("Whether the goal is met. Reading this is the whole point of the file."),
		reason: N().describe("Why, in one line. The most-read sentence in the feature: the next round reads it first and the history shows it."),
		evidence: N().optional().describe("What was checked to know that. Optional, so a round with nothing to point at says so by leaving it out rather than by inventing a sentence."),
		data: B(N(), sc()).optional().describe("The declared answer, for a loop that asked for one, checked against the shape it declared.")
	}), Fp = 50, Ip = R({
		conversationId: gd.describe("The conversation to loop. It need not exist yet: naming a fresh one opens it, which is what lets run this until it passes be the first thing you ever say."),
		goal: N().min(1).describe("What done means, in your words. It goes into every round's instructions and into the judge's question, so the model is told the bar rather than left to infer it."),
		prompt: N().min(1).describe("What each round is asked to do. The suite passes is the goal; run the tests, take the top failure, fix it is the instruction."),
		context: jp.describe("How each round meets the last. Starting fresh makes the files the memory rather than the conversation, so the twentieth round reads the tree as clearly as the first, and costs a re-read each time. Carrying on is cheaper and keeps the reasoning, which suits a short polish-this loop and degrades on long ones: a session that has spent eleven rounds arguing for its own approach is the worst available judge of whether that approach is finished."),
		output: Mp,
		checks: L(Np).describe("What else has to be true, all of them together. A list because the suite passes and the report is written is a real bar, and running it as two loops would do the work twice."),
		maxIterations: F().int().min(1).max(Fp).describe("How many rounds before it gives up. A loop that has not got there in fifty is not one round short of it."),
		maxSpendUsd: F().positive().optional().describe("A ceiling on what the whole loop may spend, in dollars. Optional for a short loop somebody is watching, and strongly wanted otherwise: this is the first thing here that can keep spending with nobody pressing anything between rounds."),
		stallLimit: F().int().min(1).describe("Stop after this many rounds in a row that changed nothing on disk. The guard that matters most: a loop's failure is not runaway success, it is an agent re-reading the same three files, restating the same plan and declaring more work remains, eleven times. Every one of those rounds succeeds, so only the tree not moving catches it."),
		isolated: I().describe("Whether it works in the conversation's own private copy or in the shared tree. It also decides where a check runs: testing the shared tree would be testing code this loop has not merged yet."),
		agent: dd.optional().describe("Which provider the rounds run on. Absent falls back to the conversation's own last choice."),
		harness: pd.optional().describe("Which agentic loop they run on."),
		account: N().optional().describe("Which account pays."),
		model: N().optional().describe("Which model."),
		actsAs: Y.optional().describe("Which persona the rounds act as. It matters here: every round is unwatched, and an unwatched turn naming no persona reaches no signed-in account at all, so pinning one is how a loop gets hands."),
		worktreeBase: L(md).min(1).max(50).optional().describe("Pin the private copy to these exact commits, so a restart cannot quietly change what the loop is working on."),
		autoLand: I().optional().describe("Whether the work merges as it goes.")
	}), `${Cp}`, Lp = R({
		n: F().int().min(1).describe("Which round this was."),
		at: F().describe("When it ran, in milliseconds."),
		outcome: V([
			"continue",
			"done",
			"error"
		]).describe("How the round ended, which is not the same question as how the loop did. A round that errored does not end the loop by itself: a failing turn is often exactly what the next round is meant to fix."),
		detail: N().optional().describe("What the check said, in its own words. What a run history is actually read for: why it kept going, and why it stopped."),
		costUsd: F().optional().describe("What the round cost, in dollars."),
		changed: I().describe("Whether anything on disk moved. Three unchanged rounds in a row is the shape of a loop that is not working."),
		sessionId: N().optional().describe("The session it ran on, and the way from a history row to a readable record.")
	}), Rp = V([
		"running",
		"done",
		"exhausted",
		"stalled",
		"overspent",
		"stopped",
		"error"
	]), zp = Ip.extend({
		state: Rp.describe("How it ended, and each of these is a different thing to be told. Out of rounds says give it more room; stalled says it is not making progress and more room will not help. Overspent, stopped by a person, and the loop itself failing are all their own answers."),
		startedAt: F().describe("When it began, in milliseconds."),
		endedAt: F().optional().describe("When it ended, in milliseconds."),
		resumed: F().int().min(0).describe("How many times the sandbox restarted under it and picked it back up. Counted rather than flagged, so a loop whose round reliably kills the sandbox is not resurrected on every boot for ever."),
		detail: N().optional().describe("Why it ended, for the endings whose reason is not in their name."),
		iterations: L(Lp).describe("Every round, in order. Why it stopped at the fourth is the question a loop gets read for, and this is the answer.")
	}), Bp = R({ loops: L(zp).describe("Every loop this workspace has run, newest first, kept after they end.") }), Vp = R({ conversationId: gd.describe("Which conversation's loop.") }), Hp = R({
		id: Y.describe("The design's id."),
		name: N().min(1).max(60).describe("What to call it. Short, because it has to be readable on a small badge."),
		description: N().max(280).optional().describe("What it is for, in one line. Optional, because a well-named loop has already said it."),
		prompt: N().optional().describe("What each round is asked to do, when that is worth saying separately from the goal. Absent means each round works towards the goal however it sees fit."),
		context: jp.describe("How each round meets the last: starting clean, or carrying on."),
		output: Mp.describe("What it has to produce."),
		checks: L(Np).describe("What else has to be true."),
		maxIterations: F().int().min(1).max(Fp).describe("How many rounds before it gives up."),
		maxSpendUsd: F().positive().optional().describe("A ceiling on what it may spend, in dollars."),
		stallLimit: F().int().min(1).describe("Stop after this many rounds in a row that changed nothing.")
	}), Up = R({ designs: L(Hp).describe("Saved loops: the machinery with the goal left out, so one design can be pointed at a different job every time.") }), Wp = R({
		design: Hp.describe("The design to write."),
		create: I().describe("Whether you mean to make a new one or replace an existing one, so an id that happens to collide cannot silently overwrite the one you had.")
	}), Gp = R({ id: Y.describe("Which saved loop.") });
})), qp, Jp, Yp, Xp, Zp, Qp, $p, em, tm, nm, rm, im, am, om, sm, cm, lm, um, dm, fm, pm, mm, hm, gm, _m, vm, ym, bm, xm, Sm, Cm, wm, Tm, Em, Dm, Om = w((() => {
	K(), X(), Kp(), qp = V([
		"idle",
		"running",
		"awaiting",
		"stopping",
		"dismissing",
		"stopped",
		"resuming",
		"landing",
		"ready",
		"landed",
		"conflict",
		"error",
		"interrupted"
	]), Jp = R({
		tool: N().optional().describe("The last tool it reached for."),
		target: N().optional().describe("What it reached for that tool with: a file, a command, a URL."),
		todo: N().optional().describe("The item on its own list that it is working through.")
	}), Yp = R({
		done: F().describe("Items it has completed."),
		total: F().describe("Items on the list. Never zero: a conversation that kept no list carries no clause at all.")
	}), Xp = R({
		plan: I().describe("It has proposed a plan and is waiting for a yes."),
		question: I().describe("It has asked you something."),
		permission: I().describe("It wants to use a tool it needs permission for."),
		capability: I().describe("It needs something connected that is not connected yet."),
		credential: I().describe("It is waiting for a named person to release a credential. The one pause that may not be yours to clear, whatever your role."),
		conflict: I().describe("Its work cannot be merged without somebody resolving a clash.")
	}), Zp = R({
		at: F().describe("When the turn that left this ended, in milliseconds."),
		steps: R({
			open: F().describe("Items on it that were never completed."),
			total: F().describe("Items on the whole list."),
			next: N().optional().describe("The one it would have done next: what it was working through, or the first still waiting.")
		}).optional().describe("The agent's own checklist where that turn left it. Absent for a conversation that kept no list."),
		check: N().optional().describe("The end-of-turn check that was still failing when the turn ended, by name.")
	}), Qp = R({
		subject: N().describe("One line saying what the merged work did, read off the code rather than off the opening request. A conversation that asks for an audit and then spends four turns fixing what it found needs a subject about the fixes."),
		note: N().optional().describe("The same change said to somebody who uses the product, for a repository that keeps a changelog. Usually absent, because most changes are not ones a user would notice."),
		breaking: N().optional().describe("What this change takes away, for anything already relying on it. Nearly always absent: it is for removals, not for additions.")
	}), $p = R({
		provider: N().min(1).describe("Which provider was asked."),
		model: N().min(1).describe("Which of its models."),
		status: V([
			"asking",
			"answered",
			"refused",
			"skipped"
		]).describe("How this one went. Skipped means it was not asked at all, because it refused a few minutes ago and the walk stepped over it."),
		at: F().optional().describe("When it started being asked, in milliseconds. Absent for one that was skipped, which cost no time."),
		ms: F().optional().describe("How long it took. Absent while it is still being asked."),
		reason: N().optional().describe("Why it refused, in its own words.")
	}), em = R({
		startedAt: F().describe("When the drafting began, in milliseconds."),
		steps: L($p).describe("Each model that was asked, in the order they were spent, so the list is the timeline. Empty with no outcome means the diff is still being read."),
		outcome: V(["written", "failed"]).optional().describe("How it ended. Absent means it is still going."),
		reason: N().optional().describe("The one-line account of a failure, for a screen with one line to spend. The steps carry each model's own words."),
		finishedAt: F().optional().describe("When it ended, in milliseconds.")
	}), tm = V([
		"workspace",
		"diverged",
		"binary"
	]), nm = R({
		id: N().describe("The conversation id, which is how every other call addresses it."),
		sessionId: N().optional().describe("The provider session behind the last turn. It is retired whenever the model or account changes."),
		title: N().optional().describe("What to call it: the first prompt cut to one line, unless somebody renamed it."),
		status: qp.describe("What it is doing. Stopping and stopped are the two halves of somebody pressing stop, because a cancel is not instant; dismissing is the same window for a question waved away, which ends the turn too but owes the user nothing; resuming means the sandbox is already putting right whatever killed the turn; landing means its work is being carried into the workspace right now, and nothing may act on its branch until that settles."),
		failure: N().optional().describe("Why the last turn failed, in the words it died on. Absent unless it did, and cleared the moment it runs again. Carried here because the word error on its own is not an answer, least of all for a run nobody was watching."),
		failureCode: N().optional().describe("Which kind of failure it was, as the turn's own error frame coded it. Absent for a failure nothing could classify, which reads as the plain red line it is."),
		limitResetsAt: F().optional().describe("When the spent allowance reopens, in epoch seconds. Absent when the provider publishes no instant."),
		limitHeld: I().optional().describe("Whether the refused turn is held whole, so sending again re-runs it instead of appending to it."),
		limitScheduled: I().optional().describe("Whether the held turn is already booked to go again at the reset, so nobody has to press anything."),
		limitMoving: N().optional().describe("The account the held turn is being moved to by the owner's policy, while that move is booked."),
		provider: dd.describe("Which model provider it runs on."),
		harness: pd.describe("Which agentic loop it runs on."),
		runner: N().optional().describe("The runner this conversation runs on. Absent means this sandbox."),
		startIn: N().optional().describe("Which folder it opened in, relative to the workspace root. Absent means the root."),
		actsAs: N().optional().describe("Which persona its first turn acted as. Absent for an ordinary chat."),
		model: N().optional().describe("What its last turn ran with. Kept per conversation so opening it restores the choices made in it, rather than whatever some other tab last picked."),
		effort: N().optional().describe("How hard that turn was told to think."),
		thinking: I().optional().describe("Whether that turn showed its reasoning."),
		fast: I().optional().describe("Whether that turn asked for higher speed. What was asked for, not what was served."),
		tier: V(["fast", "standard"]).optional().describe("How hard its last turn looked to the complexity judge. What the next turn's preview needs, not what actually ran."),
		tierHold: I().optional().describe("Whether this conversation is pinned to the picked model, so a turn that looks simple is never moved to a cheaper one."),
		account: N().optional().describe("Which connected account paid for it."),
		branch: N().optional().describe("The branch its private copy works on. Absent for a conversation that works directly in the shared tree."),
		autoLand: I().optional().describe("This conversation's own answer to whether its work merges automatically. Absent means it follows the sandbox-wide setting, which is the common case."),
		resumeAfterOutage: I().optional(),
		resumeAfterLimit: I().optional(),
		moveAfterLimit: I().optional(),
		landRequested: R({
			email: N().describe("Who asked."),
			name: N().optional().describe("Their display name."),
			at: F().describe("When they asked, in milliseconds.")
		}).optional().describe("A collaborator has asked a maintainer to merge this work. Cleared by whichever merge or discard answers it. Absent means nobody is waiting."),
		origin: _d.optional().describe("Where the conversation came from when nobody typed it: a chat mention, a visitor's message, a webhook. Absent means a person started it."),
		startedBy: N().optional().describe("Who asked for the first turn, as the sandbox verified it: a member's email, or token:<label> for a program's control token. Absent when nothing was verified (a wake, a loopback caller)."),
		forkedFrom: Cd.optional().describe("The conversation this one was cut from. Recorded once and never cleared: it is the relationship, not a pending state."),
		base: N().optional().describe("The commit its private copy started from, shortened."),
		costUsd: F().optional().describe("What it has cost so far, in dollars. A subagent's spend is its own and is not folded in here."),
		inputTokens: F().optional().describe("Tokens sent."),
		outputTokens: F().optional().describe("Tokens received."),
		contextTokens: F().optional().describe("How much of the window the conversation currently fills."),
		contextWindow: F().optional().describe("How large that window is."),
		promptCache: R({
			at: F().describe("When its last request touched the provider's prompt cache, in milliseconds."),
			ttlMs: F().describe("How long that entry lives from `at`, in milliseconds.")
		}).optional().describe("When this conversation's prompt cache was last kept alive and how long it lasts, which together say when picking the conversation up stops being cheap. Absent when the provider publishes nothing to ground it on."),
		activity: Jp.optional().describe("What it is doing at this moment."),
		checklist: Yp.optional().describe("How far it is through its own checklist. Absent for a conversation that kept no list, which is most short ones."),
		landedMessageDraft: em.optional().describe("The whole story of this merge's commit message being written: which models were asked, how long each took, what refused and in what words. Forgotten on restart, which is right, because a restart also killed the drafting it describes."),
		landedMessage: Qp.optional().describe("What this conversation's merged work is called, once the drafting above has finished. It arrives on the same push that ends the draft, so the promise and the answer travel together."),
		startedAt: F().optional().describe("When the running turn started, in milliseconds. Absent when none is running."),
		updatedAt: F().describe("When it last did something, in milliseconds. Reading it does not count."),
		seenAt: F().optional().describe("When somebody last opened it, in milliseconds. Newer activity than this is what makes it unread. Kept by the sandbox rather than by a browser, so clearing site data or picking up a phone does not resurrect every badge."),
		attention: Xp.describe("Which kinds of waiting-for-you it is doing."),
		conflictCauses: L(tm).optional().describe("Why its work will not merge, and so who can clear it: your own uncommitted edits, which only you can commit or stash, against a moved main line or an unmergeable binary, which the conversation can redo on its own copy. Absent unless it is refusing to merge."),
		unfinished: Zp.optional().describe("What its last turn left open: steps it never completed, a check still failing. Absent for a turn that finished what it started."),
		turns: F().optional().describe("Turns it has finished."),
		toolUses: F().optional().describe("Tools it has used, over its whole life."),
		subagents: R({
			running: F().describe("Subagents working right now."),
			total: F().describe("Subagents it has started over its whole life.")
		}).optional().describe("Subagents and child agents this one delegated to. Absent means it never has, which is most conversations. Their spend is their own and is not folded into this conversation's cost."),
		diff: R({
			files: F().describe("Files touched."),
			insertions: F().describe("Lines added."),
			deletions: F().describe("Lines removed.")
		}).optional().describe("Everything it has written, measured from where it started. Independent of how much has been merged."),
		landedPresence: R({
			landed: F().describe("Paths this conversation merged in."),
			present: F().describe("How many of them are still there, either pending or committed.")
		}).optional().describe("Present only when some of what it merged has since been thrown away. Absent is the steady state: its presence is the signal, so an ordinary card spends no line on it."),
		loop: R({
			state: Rp.describe("How the loop is going."),
			iteration: F().int().min(0).describe("Which round it is on."),
			maxIterations: F().int().min(1).describe("How many rounds it will attempt before giving up."),
			goal: N().describe("What it is looping towards.")
		}).optional().describe("The loop driving this conversation, if one is. Absent for an ordinary conversation, which is nearly all of them."),
		workflow: R({
			runId: N().describe("The run this belongs to, which is how a board groups its steps together."),
			name: N().describe("The workflow's name."),
			step: N().describe("Which step this conversation is on now. It moves when steps are chained."),
			index: F().int().min(1).describe("This step's place in the workflow, counting from one."),
			total: F().int().min(1).describe("How many steps the workflow has.")
		}).optional().describe("The workflow run this conversation is a step of. Without it, a four-step run reads as four unrelated conversations that happen to have started together."),
		watches: L(R({
			id: N().describe("The daemon's handle for this watch, the same one the agent was given when it armed it."),
			note: N().describe("The agent's own line on what it is waiting for."),
			intervalSeconds: F().int().min(1).describe("How often the check runs."),
			deadlineAt: F().describe("When it gives up and wakes the conversation anyway, in milliseconds. Every watch has one.")
		})).optional().describe("Outside conditions this conversation is parked on, each of which will wake it. Absent means none, which is nearly every conversation: an armed watch is why a finished-looking agent starts working by itself, and why a hosted machine will not go idle."),
		archivedAt: F().optional().describe("When it was put away, in milliseconds. Nothing was lost: its branch, its record and every counter stayed, and bringing it back gives it a fresh working copy. Absent means it is live on the board.")
	}), rm = R({ id: N().min(1).describe("Which conversation.") }), im = rm.extend({
		before: G().int().optional().describe("Return the messages before this position in the record: the `from` of the page below. Absent asks for the most recent turns."),
		turns: G().int().min(1).max(200).optional().describe("How many of the user's turns to return, newest first. Absent takes the daemon's default.")
	}), am = R({ ids: L(N().min(1)).max(500).optional().describe("Which conversations to put away. Leave it out for every finished one that can be archived right now.") }), om = R({ ids: L(N().min(1)).min(1).max(500).describe("Which conversations.") }), sm = R({
		moved: L(nm).describe("What actually moved, whole, rather than the fleet afterwards. Two archives finishing at once would each carry a snapshot from a different instant, and swapping one in wholesale would let the slower answer resurrect what the faster one just filed away."),
		rev: F().describe("The version of the fleet that includes this move, so a caller can hold its own optimistic change until it sees a list at least that new.")
	}), cm = sm.extend({ failed: L(R({
		id: N().describe("Which conversation stayed on the board."),
		reason: N().describe("Why its working copy could not be released, in the words the failure came with.")
	})).describe("The conversations this press could not put away, each with the reason, so the board can say it instead of reporting silence.") }), lm = R({ removed: L(N()).describe("Which conversations were deleted, as ids. Ids rather than whole cards, because these no longer exist anywhere: there is nothing left to show and nothing to put back.") }), um = R({
		query: N().trim().min(2).describe("What to look for. Searched against what was said, both sides of the conversation, and nothing else: not the thinking, not the tool output, which between them name nearly every identifier in the workspace and would return most of the board."),
		caseSensitive: El().optional().describe("Whether capitals matter.")
	}), dm = V(["user", "agent"]), fm = R({
		text: N().describe("The matching line, with a little either side of it."),
		speaker: dm.describe("Who said it. Carried with the words rather than beside them, because a line of the agent's prose under a card reads as something you typed until the row says otherwise.")
	}), pm = R({
		id: N().describe("Which conversation matched."),
		snippet: fm.optional().describe("Why, in its own words. Absent when the title was the match, which the card already shows: repeating it underneath is noise where evidence was wanted.")
	}), mm = R({
		matches: L(pm).describe("What matched, from the live fleet and the archive together."),
		scanned: F().describe("How many conversations were actually read, so a screen can say when a search saw less than everything rather than implying it saw all of it."),
		indexing: I().describe("Whether what was said is still being read in the background. True means this answer can still grow, so a screen must say it is incomplete rather than presenting it as the whole list.")
	}), hm = R({
		id: N().min(1).describe("Which conversation."),
		title: N().trim().min(1).max(80).describe("What to call it from now on.")
	}), gm = R({
		id: N().min(1).describe("Which conversation."),
		text: N().trim().min(1).max(8e3).describe("The words to put in the agent's mouth. Bounded just above what the next turn can carry whole, because a line too long to be handed over intact would reach the agent truncated and quietly break the very thing this is for.")
	}), _m = R({
		id: N().min(1).describe("Which conversation."),
		autoLand: I().nullable().describe("Whether its work merges automatically when a turn finishes. Null clears the override and goes back to following the sandbox-wide setting, so a conversation does not sit holding a frozen copy of a default it has quietly stopped following.")
	}), vm = R({
		id: N().min(1).describe("Which conversation."),
		resumeAfterOutage: I().nullable().describe("Whether it retries by itself when the model provider was what failed. Null clears the override back to the sandbox-wide setting.")
	}), ym = R({
		id: N().min(1).describe("Which conversation."),
		resumeAfterLimit: I().nullable().describe("Whether the turn a spent allowance refused is sent again by itself once the window reopens. Null clears the override back to the sandbox-wide setting.")
	}), bm = R({
		id: N().min(1).describe("Which conversation."),
		moveAfterLimit: I().nullable().describe("Whether the turn a spent allowance refused is moved to another connected account of the same provider that has room, as soon as the refusal lands. Null clears the override back to the sandbox-wide setting.")
	}), xm = R({
		id: N().min(1).describe("Which conversation."),
		repo: N().min(1).describe("Which repository."),
		path: N().min(1).describe("Which file, relative to that repository.")
	}), Sm = R({
		path: N().describe("Which file."),
		reason: tm.describe("Why it would not merge, and the three have nothing in common but the symptom. Your own uncommitted edits on that path, where yours is the copy at risk. The shared tree having moved under the conversation since it started, where nothing of yours is at risk. Or a file git cannot merge at all, where no automatic answer exists.")
	}), Cm = R({
		repo: N().describe("Which repository."),
		paths: L(Sm).describe("The files that genuinely would not apply. Not the whole change: reporting everything whenever the cause could not be pinned down turned four real conflicts into a wall of fourteen."),
		clean: F().describe("How many files in this repository passed but remain held with the refused composition. Zero alongside an empty list means the repository could not be reached at all."),
		mainBranch: N().optional().describe("The branch your own checkout is on, which is what the conversation has to rebase onto. Carried because only the sandbox can see it. Absent where there is no name to give.")
	}), wm = R({
		landed: I().describe("Whether the entire composed change was applied."),
		conflicts: L(Cm).optional().describe("What stopped the whole composed change, grouped per repository."),
		resolving: L(R({
			repo: N().describe("Which repository."),
			paths: L(N()).describe("Which files now hold conflict markers to sort out by hand.")
		})).optional().describe("Files left half-merged when you asked to carry the whole composition with its conflicts marked for resolution."),
		held: I().optional().describe("Nothing was applied and nothing failed: there is work waiting on the branch for a deliberate merge. Not merged on its own cannot say that, because on its own it means refused.")
	}), Tm = V([
		"check",
		"merge",
		"measure"
	]), Em = V(["cumulative", "outstanding"]), Dm = R({
		id: N().min(1).describe("Which conversation's work to merge."),
		mode: Tm.optional().describe("How to apply it. The default applies every repository or none, so a refusal leaves the workspace exactly as it was. The other carries the whole composition and leaves conflicted paths with markers to resolve by hand."),
		span: Em.optional().describe("How much of the work to take. Leave it out for everything not yet merged."),
		force: I().optional().describe("Go ahead despite a check that would otherwise refuse.")
	});
})), km, Am = w((() => {
	K(), km = R({
		status: V([
			"allowed",
			"allowed_warning",
			"rejected"
		]),
		resetsAt: F().optional(),
		rateLimitType: N().optional(),
		utilization: F().optional()
	});
})), jm, Mm = w((() => {
	K(), jm = V([
		"off",
		"cooldown",
		"on"
	]);
})), Nm, Pm, Fm, Im, Lm, Rm, zm, Bm, Vm, Hm, Um, Wm, Gm, Km, qm, Jm = w((() => {
	K(), Nm = R({
		name: N().describe("Its id, and what the close route takes."),
		label: N().optional().describe("What to call it on screen."),
		kind: V([
			"shell",
			"panel",
			"agent",
			"job",
			"process"
		]).describe("What sort of thing it is: a terminal somebody opened, a repository's dev server, where an agent's commands run, a job the sandbox started, or a background process that is watched rather than typed into."),
		running: I().describe("Whether it is alive. A finished one-shot job leaves a dead shell behind, which reads as false and is how it gets swept up."),
		activityAt: F().describe("When it last produced output, in milliseconds. Zero means it did not say, which is unknown rather than 1970."),
		exitCode: F().optional().describe("How the last thing in it ended. Absent while that pane is still alive."),
		command: N().optional().describe("What is running in it right now. Absent when it is sitting at a prompt. Not a second spelling of whether it is alive: this says whether anything is happening, which is what a close button should ask about before it ends something."),
		extensionId: N().optional().describe("Which extension declared this process, when one did."),
		processName: N().optional().describe("Which of that extension's processes it is, which together with the id above addresses its start and stop routes."),
		help: R({
			requestId: N().describe("What to send back when you answer, through the agent reply route."),
			message: N().describe("What the agent needs, in its own words."),
			requestedAt: F().describe("When it asked, in milliseconds.")
		}).optional().describe("The agent has stopped at something only a person can clear, and is waiting at this terminal. Present only while it is waiting.")
	}), Pm = R({ sessions: L(Nm).describe("Every live surface the sandbox is holding, in one list, because the question they all answer is the same one.") }), Fm = R({ name: N().describe("Which terminal.") }), Im = R({
		name: N().describe("Which terminal."),
		lines: G().min(1).max(1e5).default(2e4).describe("How far back to ask for. Clamped to the history that actually exists.")
	}), Lm = R({
		name: N().describe("Which terminal this is from."),
		text: N().describe("The history, oldest line first, with wrapped lines rejoined so a copied address or path comes back whole."),
		lines: F().describe("How many lines you got."),
		truncated: I().describe("It stopped because you asked for that many, not because the history ran out.")
	}), Rm = R({
		id: N().describe("Stable for the life of the page, which is what lets a tab survive a refresh of this list. Its address changes as the agent navigates and its position changes when a sibling closes."),
		title: N().optional().describe("The page's title. Absent mid-navigation, which is exactly when a tab still has to be drawn."),
		url: N().describe("Where it is."),
		active: I().describe("The one the agent last touched, or for a finished session, the one it ended on. Exactly one page has this.")
	}), zm = R({
		name: N().describe("Its id, and what the close route takes."),
		label: N().describe("What to call it on screen: the open page's title, or its site, or which browser this is."),
		server: N().describe("Which browser drives it: the credential-free one, or a signed-in account's. The difference between a throwaway page and one logged in as you, which is worth saying out loud."),
		running: I().describe("Whether it is still open. A closed one is listed for a while with the pages it had, as the record of where the agent went."),
		activityAt: F().describe("When it last did anything, in milliseconds."),
		finishedAt: F().optional().describe("When it closed, in milliseconds. Absent while it is open."),
		help: R({
			requestId: N().describe("What to send back when you answer, through the agent reply route."),
			message: N().describe("What the agent needs, in its own words."),
			requestedAt: F().describe("When it asked, in milliseconds.")
		}).optional().describe("The agent has hit something only a person can clear: a captcha, a password it does not hold, a check on your phone. Present only while it is waiting."),
		pages: L(Rm).describe("Every page it has open. A browser holds several at once, which is the reason it is listed apart from the terminals.")
	}), Bm = R({ sessions: L(zm).describe("Every browser the agents have running, open or recently closed.") }), Vm = R({ name: N().describe("Which browser.") }), Hm = V(["subagent", "spawned"]), Um = V([
		"pending",
		"running",
		"blocked",
		"completed",
		"failed",
		"killed",
		"paused"
	]), Wm = R({
		state: V([
			"verified",
			"unproven",
			"failing",
			"no-code"
		]).describe("Whether anything proved its work: a check passed after its last edit, it changed code and nothing checked it, a check ran and failed, or it changed no code at all."),
		paths: L(N()).optional().describe("The code files it changed, most recent last. The first few; the record holds the rest."),
		check: N().optional().describe("The command that spoke: the one that cleared it, or the one that failed. Named rather than summarised, so a targeted test is not read as the whole suite.")
	}), Gm = R({
		id: N().describe("The id of the tool call that started it (an SDK child) or the child's own conversation id (a spawned one); either way both sides already hold it, so a card links to its subagent with the id it has and the subagent points back the same way."),
		kind: Hm.describe("What sort of subagent: one the runtime's own Task tool spawned in-process, or a full child agent the daemon started for the turn. It changes only how you watch it."),
		conversationId: N().describe("The conversation whose turn started it, and the way back to the chat it belongs to."),
		agentType: N().optional().describe("What kind of subagent it is."),
		description: N().optional().describe("What it was asked to do, in one line."),
		model: N().optional().describe("Which model it runs on."),
		provider: N().optional().describe("Which provider serves it, for a child agent spawned across providers."),
		spawnDepth: F().optional().describe("How deep in the chain it sits, where one means the turn itself started it. A subagent can start subagents, and a flat list that could not say so would read as though the turn started all of them."),
		background: I().optional().describe("The parent carried on working instead of waiting for it. This is the whole reason the list exists: such a subagent used to be invisible until its result landed, sometimes minutes later."),
		status: Um.describe("How it is going. Blocked means it needs an answer, which a parent and an operator act on differently from it simply working."),
		startedAt: F().describe("When it started, in milliseconds."),
		endedAt: F().optional().describe("When it finished, in milliseconds. Absent while it works."),
		activityAt: F().describe("When it last did anything, in milliseconds."),
		tokens: F().optional().describe("What it has spent. Its own, so a parent's cost and the sum of its subagents' are two different true numbers."),
		toolUses: F().optional().describe("How many tools it has used."),
		lastTool: N().optional().describe("The last one it reached for."),
		summary: N().optional().describe("Its report: what it concluded, without opening its record. The question a finished subagent gets read for."),
		error: N().optional().describe("Why it failed, when it did."),
		verification: Wm.optional().describe("Whether anything proved the work its report describes.")
	}), Km = R({ sessions: L(Gm).describe("Every subagent and child agent this sandbox's conversations have started.") }), qm = R({ id: N() });
})), Ym, Xm, Zm, Qm, $m, eh, th = w((() => {
	K(), Ym = V(["messages", "everything"]), Xm = R({
		id: N().describe("The share's own id, minted fresh each time, so sharing one conversation twice gives two links. Deliberately not the conversation's id, which is memorable by design and would make a page's address guessable."),
		conversationId: N().describe("Which conversation it was taken from."),
		title: N().describe("The title on the page, which is the sharer's choice rather than the conversation's own."),
		detail: Ym.describe("How much travels: the two speakers' words alone, or the whole record including the agent's work and thinking, which necessarily publishes the code and command output in it."),
		sharedAt: F().describe("When the snapshot was taken, in milliseconds. A share is frozen, so this dates what a recipient can see rather than when the conversation happened."),
		messages: F().describe("How many messages are behind the link."),
		url: N().optional().describe("The page's address. Absent on a sandbox with nowhere to publish to.")
	}), Zm = R({ shares: L(Xm).describe("Every conversation currently published as a page.") }), Qm = R({
		conversationId: N().min(1).describe("Which conversation to publish."),
		title: N().min(1).max(80).describe("The title for the page. The conversation's own name is only what a dialog would open with."),
		detail: Ym.describe("How much to publish. Two levels rather than a set of switches, because every extra toggle is another thing to get wrong about a link that cannot be recalled.")
	}), $m = R({ id: N().min(1).describe("Which share to re-take. Its link stays the same, which matters because it has already been sent.") }), eh = R({ id: N().min(1).describe("Which share to take down.") });
})), nh, rh, ih, ah, oh, sh, ch, lh, uh, dh, fh, ph, mh, hh, gh, _h, vh, yh, bh, xh, Sh, Ch, wh, Th = w((() => {
	K(), X(), th(), Jm(), yp(), nh = V([
		"pending",
		"approved",
		"rejected",
		"cancelled"
	]), rh = V([
		"pending",
		"answered",
		"cancelled"
	]), ih = V([
		"pending",
		"allowed",
		"always",
		"denied",
		"cancelled"
	]), ah = V([
		"pending",
		"helped",
		"declined",
		"cancelled"
	]), oh = V([
		"pending",
		"approved",
		"skipped",
		"cancelled"
	]), sh = V([
		"pending",
		"connecting",
		"skipped",
		"cancelled"
	]), ch = R({
		...ap,
		status: nh.describe("Where the decision stands.")
	}), lh = R({
		...op,
		status: rh.describe("Where the answer stands."),
		answers: B(N(), L(N())).optional().describe("What was chosen, keyed by the question, with the chosen labels or the user's own words.")
	}), uh = Wf.extend({
		...sp,
		status: ih.describe("Where the decision stands.")
	}), dh = R({
		...cp,
		status: ah.describe("How the hand-over ended.")
	}), fh = R({
		...lp,
		status: ah.describe("How the hand-over ended.")
	}), ph = R({
		...up,
		status: sh.describe("Where the decision stands."),
		outcome: pp.optional().describe("How an accepted ask's setup ended (the capability_outcome frame).")
	}), mh = R({
		...dp,
		status: oh.describe("Where the decision stands."),
		receipt: mp.optional().describe("How the approved payment ended (the payment_receipt frame).")
	}), hh = R({
		...fp,
		status: oh.describe("Where the decision stands."),
		receipt: hp.optional().describe("Who released it, or that somebody refused (the credential_receipt frame).")
	}), gh = Tc(() => R({
		id: N().describe("The call's id."),
		name: N().describe("Which tool."),
		category: $f.describe("What kind of thing it does: read, edit, delete, move, search, run, think, fetch. Named the same way whatever the backend called the tool."),
		status: ep.describe("How it went."),
		target: N().optional().describe("What it acted on, in one line: a file, a command, an address."),
		locations: L(tp).optional().describe("The files it touched."),
		content: L(np).optional().describe("What it produced: text, a change to a file, or a picture."),
		children: L(gh).optional().describe("Calls a delegated subagent made, nested under the call that started it, so a reopened conversation redraws the delegation rather than collapsing it into one result."),
		thinking: N().optional().describe("What the agent was reasoning about around this call."),
		subagent: _h.optional().describe("The helper this call started, as the daemon's registry sees it: what it is, how it is going, what it has spent. What a card can say about a backgrounded child whose result is minutes away.")
	})), _h = R({
		kind: Hm,
		agentType: N().optional(),
		description: N().optional(),
		model: N().optional(),
		provider: N().optional(),
		background: I().optional(),
		status: Um,
		tokens: F().optional(),
		toolUses: F().optional(),
		lastTool: N().optional(),
		summary: N().optional(),
		error: N().optional(),
		verification: Wm.optional()
	}), vh = R({
		title: N().describe("The one line a reader sees, on a row that opens to the text below."),
		text: N().describe("The note itself, which is also exactly what the model was told.")
	}), yh = R({
		costUsd: F().optional(),
		inputTokens: F().optional(),
		outputTokens: F().optional(),
		durationMs: F().optional(),
		numTurns: F().optional()
	}), bh = R({
		role: V([
			"user",
			"assistant",
			"notice"
		]).describe("Who said it. A notice is neither side: it is something that happened to the turn, recorded so a reopened conversation can say it. Without those, a turn a provider refused ends on the user's message and reads as broken."),
		text: N().describe("The words."),
		sentAt: F().optional().describe("When it was sent, in milliseconds. On the user's rows only, because that is the only moment actually known: a turn's own frames arrive with no clock, so stamping the agent's rows could only ever mean the whole turn's start or end."),
		attachments: L(N()).optional().describe("Files attached to this message, as workspace paths."),
		checkpointId: N().optional().describe("The saved point this message can be rewound to. Looked up on each read rather than stored, so what is offered is exactly what is still there to go back to."),
		rewindIndex: F().int().nonnegative().optional().describe("This message's position in the conversation's record, which is how a rewind names it. Present only beside a checkpoint."),
		thinking: N().optional().describe("What the agent was reasoning about."),
		tools: L(gh).optional().describe("The tool calls this part of the turn made."),
		todos: L(Zf).optional().describe("The agent's task checklist, as of this bubble."),
		usage: yh.optional().describe("What the turn cost, on the bubble its answer ended in."),
		notes: L(vh).optional().describe("What the sandbox added to this message before the model saw it. Carried on the message rather than as rows of their own, because they genuinely were part of what was sent."),
		placed: I().optional().describe("A person wrote this in the agent's voice, with no turn behind it. Marked for the human re-reading the conversation months later, so their own words do not pass as the agent's. The agent itself never sees the mark."),
		noticeAction: V([
			"landHold",
			"outageOptOut",
			"depsInstall",
			"tierHold"
		]).optional().describe("A one-press follow-up this notice offers, by name. The chat decides what it does and whether it still applies."),
		noticeWait: V(["credentialRenewal", "personaRoute"]).optional().describe("The wait this notice describes, by name, so a reader can say whether it is still on."),
		plan: ch.optional().describe("The plan this row asked approval for, and the answer."),
		question: lh.optional().describe("The questions this row asked, and the picks that answered them."),
		permission: uh.optional().describe("The tool this row asked permission for, and the decision."),
		browserHelp: dh.optional().describe("The browser hand-over this row asked for, and how it ended."),
		terminalHelp: fh.optional().describe("The terminal hand-over this row asked for, and how it ended."),
		capabilityOffer: ph.optional().describe("The capability setup this row asked for, the decision, and the outcome."),
		paymentOffer: mh.optional().describe("The payment this row asked for, the decision, and the receipt."),
		credentialOffer: hh.optional().describe("The gated credential this row asked to use, who may release it, and who did.")
	}), xh = z("op", [
		R({
			op: H("append").describe("A new row at the end."),
			row: bh
		}),
		R({
			op: H("replace").describe("This row, whole, in place of the one at that index."),
			index: F().int().nonnegative(),
			row: bh
		}),
		R({
			op: H("drop").describe("The row at that index is gone: it was opened and never written into."),
			index: F().int().nonnegative()
		}),
		R({
			op: H("text").describe("More of the agent's prose, onto that row's text."),
			index: F().int().nonnegative(),
			text: N()
		}),
		R({
			op: H("thinking").describe("More of the agent's reasoning, onto that row's thinking."),
			index: F().int().nonnegative(),
			text: N()
		}),
		R({
			op: H("tool").describe("A tool card, whole: new, or the latest state of one already there, matched by id wherever it nests."),
			index: F().int().nonnegative(),
			tool: gh,
			parent: N().optional().describe("The card this one nests under, when it is a delegated subagent's own call.")
		})
	]), Sh = R({ messages: L(bh).describe("The conversation, in order. Each block of the agent's prose is its own message with the tools that block introduced, which is what reproduces the way it actually unfolded.") }), Ch = R({
		reason: V([
			"stopped",
			"limit",
			"outage"
		]).describe("Which ending left the work here: a Stop or a daemon killed under the turn, a spent usage allowance, or a provider that refused it."),
		resetsAt: F().optional().describe("When the spent allowance reopens, in epoch seconds. Absent for every ending that names no instant, and for a provider that publishes none."),
		held: R({
			ran: I().describe("Whether the held turn got anywhere before it was refused, which is a different sentence from one refused at the door."),
			contextTokens: F().optional().describe("How much context a press that keeps the session re-reads once, on this account at the reset or carried to another. Absent when no usage frame measured it."),
			handoffTokens: F().optional().describe("What a press that opens a fresh session pays instead: the capped record plus the sandbox's measured brief, counted at the failure."),
			moving: N().optional().describe("The account the owner's policy is already moving this turn to, when it is; the surface then reports the move rather than offering a press.")
		}).optional().describe("Present when the daemon still holds the refused turn whole, so a press re-runs it rather than appending a message after it."),
		scheduled: I().optional().describe("Whether something other than the user is already booked to send this turn again, so the surface reports the wait instead of offering a press.")
	}), wh = Sh.extend({
		sessionId: N().optional().describe("The provider session behind the last turn, when there is one."),
		provider: dd.optional().describe("Which provider minted that session."),
		harness: pd.optional().describe("Which runtime minted it: a session resumes only on the loop that opened it."),
		account: N().optional().describe("Which stored account it belongs to, as the daemon resolved it. Absent when no stored account paid for the turn."),
		ending: Ch.optional().describe("How the last turn ended, when it left work behind that one press finishes. Absent for a conversation whose last turn ended on its own, and for the failures that name something to repair first."),
		from: F().int().nonnegative().describe("Where the first message sits in the whole record, and the `before` that asks for the page above this one."),
		more: I().describe("Whether older messages precede this page.")
	}), R({
		title: N(),
		sharedAt: F(),
		detail: Ym,
		messages: L(bh)
	});
})), Eh, Dh, Oh, kh, Ah, jh = w((() => {
	K(), X(), Om(), Am(), Mm(), Wd(), Jm(), yp(), Th(), Eh = z("kind", [
		R({
			kind: H("session"),
			sessionId: N(),
			account: N().optional().describe("Which stored account this session belongs to, as the daemon resolved it for the turn.")
		}),
		R({
			kind: H("worktree"),
			branch: N(),
			base: N(),
			unenforced: I().optional(),
			sync: R({
				commits: F(),
				blocked: L(N())
			}).optional(),
			remote: N().optional()
		}),
		R({
			kind: H("landed"),
			landed: I(),
			conflicts: L(Cm).optional(),
			held: I().optional(),
			deps: R({
				missing: F(),
				started: L(N()),
				deferred: I()
			}).optional()
		}),
		R({
			kind: H("preamble"),
			notes: L(vh)
		}),
		R({
			kind: H("init"),
			model: N()
		}),
		R({
			kind: H("checkpoint"),
			id: N(),
			index: F().int().nonnegative().optional()
		}),
		R({
			kind: H("steer"),
			text: N(),
			sentAt: F(),
			attachments: L(N()).optional()
		}),
		R({
			kind: H("delta"),
			text: N(),
			parentToolUseId: N().optional()
		}),
		R({
			kind: H("text_end"),
			parentToolUseId: N().optional()
		}),
		R({
			kind: H("thinking"),
			text: N(),
			parentToolUseId: N().optional()
		}),
		R({
			kind: H("tool_call"),
			id: N(),
			name: N(),
			category: $f,
			status: ep,
			target: N().optional(),
			locations: L(tp).optional(),
			content: L(np).optional(),
			parentToolUseId: N().optional()
		}),
		R({
			kind: H("tool_call_update"),
			id: N(),
			status: ep.optional(),
			content: L(np).optional(),
			locations: L(tp).optional()
		}),
		R({
			kind: H("terminal"),
			session: N()
		}),
		R({
			kind: H("browser"),
			session: N()
		}),
		R({
			kind: H("subagent"),
			id: N(),
			subagentKind: Hm,
			agentType: N().optional(),
			description: N().optional(),
			model: N().optional(),
			provider: N().optional(),
			background: I().optional()
		}),
		R({
			kind: H("subagent_update"),
			id: N(),
			status: Um.optional(),
			tokens: F().optional(),
			toolUses: F().optional(),
			lastTool: N().optional(),
			summary: N().optional(),
			error: N().optional(),
			verification: Wm.optional()
		}),
		R({
			kind: H("todos"),
			items: L(Zf)
		}),
		R({
			kind: H("commands"),
			items: L(Jf)
		}),
		R({
			kind: H("usage"),
			account: N().optional(),
			costUsd: F().optional(),
			inputTokens: F().optional(),
			outputTokens: F().optional(),
			cacheReadTokens: F().optional(),
			cacheCreationTokens: F().optional(),
			durationMs: F().optional(),
			numTurns: F().optional()
		}),
		km.extend({
			kind: H("rate_limit_info"),
			account: N().optional()
		}),
		R({
			kind: H("fast_mode"),
			state: jm,
			reason: N().optional()
		}),
		R({
			kind: H("tier"),
			tier: V(["fast", "standard"]),
			score: F(),
			rules: L(N()),
			model: N().optional(),
			routed: I(),
			held: I().optional()
		}),
		R({
			kind: H("provider_retry"),
			attempt: F(),
			maxAttempts: F().optional(),
			nextAttemptAt: F().optional(),
			status: F().optional()
		}),
		R({
			kind: H("account_usage"),
			account: N().optional(),
			windows: L(jd)
		}),
		Qf.extend({ kind: H("context_usage") }),
		R({
			kind: H("compact"),
			trigger: N(),
			preTokens: F().optional(),
			postTokens: F().optional()
		}),
		gp,
		_p,
		vp,
		R({
			kind: H("browser_help"),
			...cp
		}),
		R({
			kind: H("terminal_help"),
			...lp
		}),
		R({
			kind: H("capability_offer"),
			...up
		}),
		pp.extend({
			kind: H("capability_outcome"),
			requestId: N()
		}),
		R({
			kind: H("payment_offer"),
			...dp
		}),
		mp.extend({
			kind: H("payment_receipt"),
			requestId: N()
		}),
		R({
			kind: H("credential_offer"),
			...fp
		}),
		hp.extend({
			kind: H("credential_receipt"),
			requestId: N()
		}),
		R({
			kind: H("resolved"),
			requestId: N(),
			reply: zd.optional()
		}),
		R({
			kind: H("mode"),
			mode: Sd
		}),
		R({
			kind: H("error"),
			message: N(),
			code: V([
				"session-not-found",
				"rate_limit",
				"codex-advisory",
				"codex-reauth",
				"claude-reauth",
				"claude-token-refused",
				"claude-not-entitled",
				"provider-outage",
				"trial-unavailable",
				"trial-model-unavailable",
				"trial-exhausted",
				"unknown-command",
				"grok-model-invalid",
				"codex-model-invalid",
				"model-unavailable",
				"context-window-too-small",
				"subscription-required",
				"agent-busy",
				"sandbox-memory-low",
				"turn-cap",
				"harness-incomplete",
				"engine-version-floor"
			]).optional(),
			engine: R({
				id: N().describe("Which engine (e.g. claude)."),
				running: N().optional().describe("The version that was refused, when the provider named it."),
				floor: N().describe("The lowest version the provider will accept.")
			}).optional(),
			resetsAt: F().optional(),
			autoResume: V(["scheduled", "available"]).optional(),
			held: R({
				ran: I(),
				contextTokens: F().optional(),
				handoffTokens: F().optional(),
				moving: N().optional()
			}).optional(),
			outage: R({
				retryAt: F(),
				attempt: F(),
				maxAttempts: F()
			}).optional()
		}),
		R({ kind: H("done") })
	]), Dh = [
		"session",
		"worktree",
		"init",
		"terminal",
		"browser",
		"commands",
		"usage",
		"rate_limit_info",
		"fast_mode",
		"tier",
		"provider_retry",
		"account_usage",
		"context_usage",
		"mode",
		"error"
	], Oh = Eh.options.filter((e) => Dh.includes(e.shape.kind.value)), kh = z("kind", Oh), Ah = z("kind", [
		R({
			kind: H("attached").describe("The first frame, identifying the run you have joined and handing you its transcript so far."),
			run: N().describe("The run's id."),
			startedAt: F().describe("When it started, in milliseconds, so a window joining late can show how long it has been going."),
			seq: F().describe("How many frames the run has produced so far. A fact at or below this number is being replayed; a patch is never."),
			rows: L(bh).describe("The turn's rows as they stand: what was asked, and everything the agent has said and done since. Draw these, then apply the patches that follow.")
		}),
		R({
			kind: H("patch").describe("One change to the run's rows."),
			seq: F().describe("Its position in the run, counting from one."),
			patch: xh
		}),
		R({
			kind: H("fact").describe("One thing about the turn that is not a row: its session, its branch, its cost, a failure."),
			seq: F().describe("Its position in the run, counting from one. At or below the head's number, it is being replayed."),
			fact: kh
		}),
		R({ kind: H("end").describe("The run is over and every frame has been delivered. A stream that closes without this was dropped mid-run, so re-attach rather than assuming the turn finished.") })
	]);
})), Mh, Nh, Ph, Fh, Ih, Lh, Rh, zh, Bh, Vh, Hh, Uh = w((() => {
	K(), Mh = V([
		"turn",
		"interval",
		"pre-restore",
		"restore",
		"user"
	]), Nh = R({
		id: N().describe("The saved point's id, which is what restoring and diffing take."),
		at: F().describe("When it was taken, in milliseconds."),
		trigger: Mh.describe("What caused it. The automatic between-turn captures are a safety net and are not listed; they dissolve into the next visible point's differences."),
		label: N().optional().describe("What to call it. For one taken before a turn, that turn's prompt.")
	}), Ph = R({ snapshots: L(Nh).describe("Every point you can go back to, newest first.") }), Fh = R({
		conversationId: N().min(1).describe("Which conversation to rewind."),
		index: F().int().nonnegative().describe("Which message to go back to, counting from the start. It is also how many messages survive: rewinding to the first keeps none of them and puts the files back to before it ran.")
	}), Ih = R({
		snapshot: N().optional().describe("The saved point the files were put back to. Absent for a conversation working in its own copy, whose rewind moved a branch rather than the shared timeline."),
		dropped: F().int().nonnegative().describe("How many messages were removed.")
	}), Lh = R({ id: N().min(1).describe("Which saved point.") }), Rh = R({
		scope: N().describe("Which part of the workspace the path belongs to: the workspace root, or one of the repositories inside it."),
		path: N().describe("The path, relative to that scope."),
		status: V([
			"added",
			"modified",
			"deleted",
			"type-changed"
		]).describe("What happened to it.")
	}), zh = R({ changes: L(Rh).describe("Everything that differs between this saved point and the one before it.") }), Bh = R({
		id: N().min(1).describe("Which saved point."),
		scope: N().min(1).describe("Which part of the workspace the path belongs to."),
		path: N().min(1).describe("The file, relative to that scope.")
	}), Vh = R({
		beforeBytes: F().int().nonnegative().optional().describe("How big the before side is, in bytes. Absent when the file did not exist yet."),
		afterBytes: F().int().nonnegative().optional().describe("How big the after side is, in bytes. Absent when the file was deleted."),
		patch: N().optional().describe("The changed regions as unified-diff hunks (`@@` sections only). Absent when the change was too large to render even as a patch."),
		more: I().optional().describe("There were more changed regions than fit; the patch stops at a region boundary.")
	}), Hh = R({
		before: N().optional().describe("The whole file as it was. Absent when it did not exist yet, or when `partial` is set."),
		after: N().optional().describe("The whole file as it is now. Absent when it was deleted, or when `partial` is set."),
		binary: I().optional().describe("The file is not text, so neither side is sent."),
		partial: Vh.optional().describe("Set when the file was too large to send whole: what is sent instead of the two sides.")
	});
})), Wh, Gh = w((() => {
	J(), yp(), jh(), X(), Uh(), Wd(), $(), Wh = {
		run: q.route({
			method: "POST",
			path: "/agent",
			summary: "Say something to an agent",
			description: "Starts a turn and answers immediately with its id; the work runs inside the sandbox whether or not anybody stays connected. Watch it by attaching. Naming a conversation that does not exist yet opens it."
		}).input(wd).output(Od),
		attach: q.route({
			method: "POST",
			path: "/agent/attach",
			summary: "Watch a turn happen",
			description: "Streams everything the agent does: its words, the tools it reaches for, and the answers it gets. Give it the point you have already seen and it replays from there before going live, so a reload loses nothing. The window that started the turn holds no special claim, and any number of watchers on any number of devices see the same thing."
		}).input(kd).output(Mu(Ah)),
		reply: q.route({
			method: "POST",
			path: "/agent/reply",
			summary: "Answer a question the agent asked",
			description: "Un-parks a turn that is waiting on you: approving a plan, choosing between options, or permitting a tool. The turn picks up where it stopped."
		}).input(zd).output(Z),
		steer: q.route({
			method: "POST",
			path: "/agent/steer",
			summary: "Interrupt a running turn",
			description: "Slips a message into a turn already under way, without stopping it. This is how you redirect an agent mid-thought rather than waiting for it to finish being wrong."
		}).input(Bd).output(Z),
		stop: q.route({
			method: "POST",
			path: "/agent/stop",
			summary: "Stop a turn now",
			description: "Cancels the running turn inside the sandbox. Whatever it had already written to disk stays written."
		}).input(Vd).output(Z),
		resume: q.route({
			method: "POST",
			path: "/agent/resume",
			summary: "Run a refused turn again",
			description: "Sends the same turn again when the model provider's allowance refused it, with everything it originally carried except who serves it: the caller may name a different provider, harness or account, which is the usual answer to a spent allowance. It repeats the request rather than adding a new message to the conversation, so pressing it twice costs nothing and the agent is never told to continue work it has not started."
		}).input(Ud).output(Od),
		rewind: q.route({
			method: "POST",
			path: "/agent/rewind",
			summary: "Go back to an earlier message",
			description: "Puts the files back as they stood at that point, drops every message after it, and forgets what the model remembered, so the next thing you say starts from there cleanly. Refused while a turn is running, because a restore cannot overwrite files an agent is editing, and refused for a message with no saved state to return to."
		}).input(Fh).output(Ih),
		commands: q.route({
			method: "GET",
			path: "/agent/commands",
			summary: "Shortcut commands the agent knows",
			description: "The commands a provider published the last time one of its turns ran, so a composer can offer them before this conversation has run anything. A running turn's own list wins over this one."
		}).input(Yf).output(Xf),
		refusals: q.route({
			method: "GET",
			path: "/agent/refusals",
			summary: "The last time each provider said no",
			description: "What each model provider most recently refused and why. Read this alongside an account's usage: the usage says how full it was when last checked, this says whether it has since started turning work away."
		}).output(Id)
	};
})), Kh, qh, Jh, Yh, Xh, Zh, Qh, $h, eg, tg, ng, rg, ig, ag, og, sg, cg, lg = w((() => {
	K(), ud(), Kh = V([
		"crash",
		"report",
		"detection"
	]), qh = R({
		at: F().describe("When, in milliseconds."),
		kind: N().max(40).describe("What sort of thing it was: a console line, a request, a click, a route change."),
		message: N().max(300).describe("What it said, already truncated by the SDK.")
	}), Jh = R({
		email: N().max(320).optional().describe("An address they typed, to reach them about it. Unverified."),
		name: N().max(200).optional().describe("A name they typed. Unverified, and never identity.")
	}), Yh = 20, Xh = B(N().max(60), N().max(300)).refine((e) => Object.keys(e).length <= Yh, { message: `at most ${Yh} context entries` }), Zh = R({
		kind: Kh.describe("A crash the SDK caught, something a person wrote in, or a problem the SDK noticed on its own."),
		message: N().min(1).max(1e3).describe("The error's own message, or the headline of what a person reported."),
		stack: N().max(2e4).optional().describe("The stack, verbatim from the browser."),
		url: N().max(2e3).optional().describe("Where it happened: the page's address, or a screen name in an app."),
		release: N().max(200).optional().describe("Which build it came from: a commit sha or a tag. With it the agent reads your real source rather than minified frames."),
		userAgent: N().max(400).optional().describe("What the browser said it was."),
		description: N().max(5e3).optional().describe("What the person typed, when a person is the one reporting."),
		reporter: Jh.optional().describe("Who says they are reporting it. Unverified by construction."),
		breadcrumbs: L(qh).max(40).optional().describe("What happened just before, oldest first."),
		context: Xh.optional().describe("Whatever else the app attached: a route, a version, a locale."),
		fingerprint: N().max(200).optional().describe("Group by this instead of by the stack, when your app knows better than the stack does.")
	}), R({
		report: Zh,
		clientId: N().min(1).max(200).describe("The SDK's own id for this browser. Not a secret: it is what the rate limit counts against."),
		powNonce: N().max(400).optional(),
		key: N().max(200).optional()
	}), Qh = V([
		"open",
		"investigating",
		"resolved",
		"ignored"
	]), $h = R({
		conversationId: N().describe("The conversation this run became."),
		at: F().describe("When it started, in milliseconds."),
		atCount: F().describe("How many times it had happened when this run started.")
	}), eg = R({
		kind: Kh,
		title: N().min(1).max(300).describe("The one line this is listed under."),
		culprit: N().max(300).optional().describe("The frame it came from, when the stack named one."),
		automationId: Y.describe("Which intake received it."),
		origin: N().max(400).optional().describe("Which site it came from."),
		firstSeen: F().describe("When it first happened, in milliseconds."),
		lastSeen: F().describe("When it last happened, in milliseconds."),
		count: F().describe("How many times this exact thing has arrived."),
		status: Qh.default("open").describe("Where it stands with you."),
		statusAt: F().optional().describe("When the status last changed, in milliseconds."),
		release: N().max(200).optional().describe("The build the latest one came from."),
		sample: Zh.describe("The most recent one, in full."),
		firedAt: F().optional().describe("What the count stood at the last time this woke an agent."),
		runs: L($h).max(20).optional().describe("The turns started for it.")
	}), tg = eg.extend({ id: Y.describe("The issue's id, which is its fingerprint.") }), ng = R({
		issues: L(tg).describe("The inbox, most recently seen first."),
		invalid: L(N()).describe("Files in the issues directory that could not be read at all.")
	}), rg = R({ id: Y.describe("Which issue.") }), ig = R({
		id: Y.describe("Which issue."),
		status: V([
			"open",
			"resolved",
			"ignored"
		]).describe("Where it now stands with you.")
	}), ag = R({
		keyFromBrowsers: I().optional().describe("Let a browser report with the key alone, rather than only from a site you listed. Off unless you need it."),
		dailyReportMax: F().int().positive().optional().describe("How many reports a day this intake accepts at all."),
		escalateAfter: F().int().positive().optional().describe("How many more times a known crash must happen before it wakes an agent again."),
		antiBot: V(["pow"]).optional().describe("Make a person's browser solve a small puzzle before it accepts a written report."),
		title: N().max(80).optional().describe("The dialog's heading."),
		prompt: N().max(300).optional().describe("The line above the box they type in."),
		thanks: N().max(300).optional().describe("What it says once they have sent it."),
		askEmail: I().optional().describe("Ask for an address to reply to. Optional for them either way."),
		accent: N().regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, "accent must be a hex colour, e.g. #e47100").optional(),
		captureCrashes: I().optional().describe("Catch uncaught errors automatically, as well as what people write in.")
	}), R({
		automationId: N(),
		title: N(),
		prompt: N(),
		thanks: N(),
		askEmail: I(),
		accent: N(),
		captureCrashes: I(),
		antiBot: V(["pow", "off"])
	}), R({
		ok: H(!0),
		id: N()
	}), og = R({
		origin: N(),
		allowed: I(),
		lastSeenAt: F(),
		loads: F()
	}), sg = R({ origins: L(og) }), cg = R({ automationId: Y.describe("Which intake.") });
})), ug, dg, fg, pg, mg, hg, gg, _g, vg, yg, bg, xg, Sg, Cg, wg, Tg, Eg, Dg, Og, kg, Ag, jg, Mg, Ng = w((() => {
	K(), X(), Om(), ud(), lg(), ug = V([
		"turn.settled",
		"agent.landed",
		"deps.broken",
		"deps.fixed"
	]), R({
		event: ug,
		agentId: N(),
		title: N().optional(),
		branch: N(),
		outcome: V([
			"landed",
			"conflict",
			"ready",
			"idle",
			"error"
		]),
		repos: L(R({
			repo: N(),
			from: N(),
			dir: N()
		})),
		deps: R({
			project: N(),
			command: N(),
			exitCode: F(),
			attempt: F(),
			logTail: N()
		}).optional()
	}), dg = z("kind", [
		R({
			kind: H("schedule").describe("On a clock."),
			cron: N().min(1).describe("When, in cron notation."),
			afterSessions: F().int().positive().optional().describe("Fire only once at least this many new sessions have been run since the last wake. A due run short of that is skipped, and says how far off it is.")
		}),
		R({
			kind: H("event").describe("When something calls its webhook."),
			dailyMax: F().int().positive().optional().describe("How many webhook calls a day may wake the agent, across every caller. Absent is a modest default rather than unlimited.")
		}),
		R({
			kind: H("listener").describe("When a message arrives from somewhere outside."),
			provider: N().min(1).describe("Which service to listen to."),
			channelId: N().min(1).optional().describe("Narrow it to one channel or thread."),
			eventType: N().min(1).optional().describe("Narrow it to one kind of event."),
			mentioned: I().optional().describe("Only when the agent is actually addressed, rather than on everything said in earshot."),
			branch: N().min(1).optional().describe("Narrow it to one branch, for the sources that have branches. Absent means every branch of the repositories it matches."),
			allowedOrigins: L(N()).optional().describe("Which websites may reach the public endpoint, the chat widget's or the bug reporter's. Absent or empty admits nobody.")
		}),
		R({
			kind: H("workspace").describe("When something happens to the files or the repositories."),
			event: ug.describe("Which happening."),
			repo: N().min(1).optional().describe("Narrow it to one repository. Absent means any of them.")
		})
	]), fg = R({
		access: V(["public", "google"]).optional().describe("Who may write to it. Absent means anyone, which is the anonymous support box it looks like."),
		requireName: I().optional().describe("Ask a visitor for a name first. Cosmetic: the name is typed, so it reaches the model as something a stranger said, never as identity."),
		antiBot: V(["turnstile", "pow"]).optional().describe("How to keep bots out: a third-party check that needs the site's own keys, or a puzzle the sandbox sets and the widget solves, so a site with no such account still has something. Absent leaves the site allowlist and the rate limit as the whole boundary."),
		turnstileSiteKey: N().optional().describe("The public half of those keys, which ships to the visitor's browser."),
		turnstileSecret: N().optional().describe("The private half, which the sandbox keeps and the widget never sees."),
		googleClientId: N().optional().describe("The site's own sign-in client id. It cannot be ours: a sign-in is only issued to an approved origin, and no single client can list every customer's domain."),
		title: N().max(80).optional(),
		greeting: N().max(500).optional(),
		accent: N().regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, "accent must be a hex colour, e.g. #e47100").optional(),
		position: V([
			"top-right",
			"top-left",
			"bottom-right",
			"bottom-left"
		]).optional(),
		dailyMessageMax: F().int().positive().optional(),
		conversationMessageMax: F().int().positive().optional(),
		sessionTtlMinutes: F().int().positive().optional()
	}), R({
		automationId: N(),
		title: N(),
		greeting: N(),
		accent: N(),
		position: V([
			"top-right",
			"top-left",
			"bottom-right",
			"bottom-left"
		]),
		access: V(["public", "google"]),
		requireName: I(),
		antiBot: V([
			"turnstile",
			"pow",
			"off"
		]),
		turnstileSiteKey: N().optional(),
		googleClientId: N().optional()
	}), R({
		salt: N(),
		difficulty: F().int().positive()
	}), R({
		conversationId: N().min(1).max(200),
		content: N().min(1),
		displayName: N().max(200).optional(),
		idToken: N().optional(),
		turnstileToken: N().optional(),
		powNonce: N().optional(),
		history: L(R({
			author: N().optional(),
			content: N()
		})).max(50).optional()
	}), R({
		replies: L(R({
			seq: F(),
			at: F(),
			text: N()
		})),
		cursor: F()
	}), pg = R({
		label: N().max(60).optional().describe("What to call these people on screen."),
		ids: L(N().min(1).max(200)).max(200).optional().describe("Sender ids, as the service names them, never display names."),
		groups: L(N().min(1).max(200)).max(50).optional().describe("Group ids the service reports on a sender, a Discord role. Only for a source whose messages carry them."),
		actsAs: Y.optional().describe("Which persona their wakes speak as. Absent is no persona: the full toolbox, reaching no account."),
		requireApproval: I().optional().describe("Hold their wakes for a person, even when the automation itself does not.")
	}).refine((e) => (e.ids?.length ?? 0) + (e.groups?.length ?? 0) > 0, { message: "a sender rule must name at least one id or group" }), mg = R({
		rules: L(pg).max(50).describe("Walked in order; the first rule naming the sender decides."),
		others: V([
			"allow",
			"hold",
			"ignore"
		]).describe("What a sender no rule names gets: the automation as configured, a hold for a person, or nothing at all.")
	}), hg = R({
		id: Y.describe("The automation's id."),
		trigger: dg.describe("What sets it off: a schedule, an event in the workspace, a message arriving from outside, or a webhook."),
		guard: N().min(1).optional().describe("A command run before the wake that decides whether there is anything to do. Skipped by the guard is often the most useful thing an automation can report."),
		prompt: N().min(1).describe("What the woken agent is told."),
		webchat: fg.optional().describe("Settings for the public chat widget, for an automation that answers visitors."),
		issues: ag.optional().describe("Settings for the bug reporter, for an automation that takes crash reports from your own sites and apps."),
		allowedTools: L(N().min(1)).optional().describe("Narrow the woken turn to these tools. For one driven by an outside message this list is the real boundary, because prompt wording is only advice and an empty toolbox is not."),
		models: L(Dd).min(1).max(10).describe("Which models this automation may run on, best first. Required, and nothing is chosen for you: work that fires while nobody is watching spends a real allowance, so it names the models it spends rather than inheriting one. Tried in order, so a spent account does not silently stop the job."),
		account: N().optional().describe("Which account pays for it."),
		actsAs: Y.optional().describe("Which persona it speaks as. An unwatched turn naming none reaches no signed-in account at all."),
		senders: mg.optional().describe("Who may talk to it, and as whom: rules by sender id or group, each naming the persona those people get, plus what everyone else gets. Absent admits everyone the trigger's filters do."),
		requireApproval: I().optional().describe("Hold every fire for a person instead of running it. Only a person can release one of those."),
		holdForSeconds: F().optional().describe("Hold each fire this long before running it anyway, which is a delay rather than a decision."),
		chore: I().optional().describe("This automation is a maintenance job, which is what files it under chores rather than among ordinary automations."),
		enabled: I().describe("Whether it fires at all.")
	}), gg = R({
		id: Y.describe("This waiting item's own id, which approving and rejecting take."),
		automationId: N().describe("Which automation it came from."),
		payload: N().optional().describe("What set it off, kept whole so an approved wake carries the same thing it would have had. Absent for one on a schedule, which carries nothing."),
		origin: _d.optional().describe("Where the message came from, kept alongside the payload so an approved wake appears on the board exactly as an automatic one would have."),
		title: N().optional().describe("What the conversation would be called."),
		conversationId: N().optional().describe("The thread this belongs to, when it has one, so approving continues that conversation rather than opening a new one. Without it, one visitor's chat becomes a card per approved message and an agent that meets them again every turn."),
		sessionId: N().optional().describe("The provider session that thread last ran on."),
		thread: N().optional().describe("Which inbound thread this belongs to, so the approved run continues that thread's memory rather than a fresh one."),
		actsAs: Y.optional().describe("Which persona the approved run speaks as, decided when it was held."),
		createdAt: F().describe("When it started waiting, in milliseconds."),
		autoRunAt: F().optional().describe("When it goes ahead on its own, in milliseconds, for a hold that is only a delay. Absent for one that genuinely waits on a person.")
	}), _g = R({
		agents: L(nm).describe("The conversations."),
		rev: F().describe("Which version of the fleet this is. The fleet is published as whole snapshots, so without a version a list read before a change but delivered after it would silently undo that change. Drop any list older than the newest you have already applied."),
		held: L(gg).default([]).describe("Automations waiting at the door for a yes, put alongside the running conversations so needs-you sits beside working rather than on a page nobody opens.")
	}), vg = R({ approvals: L(gg).describe("Everything waiting for a yes.") }), yg = R({ id: N().describe("Which waiting item.") }), bg = R({
		at: F(),
		outcome: V([
			"completed",
			"skipped",
			"error",
			"interrupted"
		]),
		detail: N().optional(),
		conversationId: N().optional()
	}), xg = hg.extend({
		runs: L(bg),
		nextRun: F().optional(),
		webhookToken: N().optional().describe("What a caller presents at /automations/{id}/fire, for an event automation. Shown to a maintainer or the owner only."),
		ingestKey: N().optional().describe("What a client with no website origin presents to a bug intake. Shown to a maintainer or the owner only.")
	}), Sg = R({ automations: L(xg) }), Cg = R({
		id: N().describe("The sender id the service vouches for, what a rule stores."),
		name: N().describe("What they were called on their last message, for display only."),
		groups: L(N()).optional().describe("The group ids the service reported on their last message, a Discord role list."),
		firstSeenAt: F().describe("When they first reached an automation here, in milliseconds."),
		lastSeenAt: F().describe("When they last did, in milliseconds."),
		messages: F().describe("How many of their messages reached an automation's filters, admitted or not.")
	}), wg = R({ senders: L(Cg).describe("Newest first.") }), Tg = R({ provider: N().min(1).describe("Which listener source.") }), Eg = R({ id: N() }), Dg = R({
		id: N(),
		enabled: I()
	}), Og = R({
		label: N().min(1),
		placeholder: N().min(1),
		hint: N().min(1).optional()
	}), kg = R({
		provider: N().min(1),
		label: N().min(1),
		logo: N().min(1).optional(),
		icon: N().min(1).optional(),
		events: L(R({
			value: N().min(1),
			label: N().min(1)
		})),
		channel: Og,
		branchField: Og.optional(),
		sender: Og.optional(),
		senderGroup: Og.optional(),
		mentionLabel: N().min(1).optional(),
		starterPrompt: N().min(1).optional(),
		requires: L(N().min(1)).default([]),
		enabled: I()
	}), Ag = V(["create", "configure"]), jg = R({
		id: N().min(1),
		title: N().min(1),
		logo: N().min(1).optional(),
		icon: N().min(1).optional(),
		requires: L(N().min(1)).default([]),
		trigger: dg,
		guard: N().min(1).optional(),
		holdForSeconds: F().int().positive().optional(),
		prompt: N().min(1),
		note: N().min(1).optional(),
		setup: N().min(1).optional(),
		description: N().min(1).optional(),
		offer: Ag.optional(),
		chore: I().optional()
	}), Mg = R({
		sources: L(kg),
		templates: L(jg)
	});
})), Pg, Fg, Ig, Lg, Rg, zg, Bg, Vg, Hg, Ug, Wg, Gg, Kg = w((() => {
	K(), X(), Pg = V(["github", "gitlab"]), Fg = V([
		"queued",
		"running",
		"success",
		"failed",
		"canceled",
		"skipped"
	]), Ig = R({
		repo: N().describe("Which workspace repository it belongs to."),
		host: Pg.describe("Which forge is running it."),
		project: N().describe("The project there, as that forge names it."),
		runId: F().describe("The forge's own id for the run, which is what re-running and cancelling take."),
		title: N().optional().describe("The run's headline, usually the commit subject or the pull request's title. Absent means falling back to the branch and commit."),
		authorName: N().optional().describe("Who the forge credits for setting it off."),
		authorAvatarUrl: N().optional().describe("Their picture, hosted by the forge. Absent means drawing their initials instead."),
		trigger: N().optional().describe("What set it off, in the forge's own word rather than flattened into a shared vocabulary, because the forge's word is the precise one."),
		branch: N().describe("Which branch."),
		sha: N().describe("Which commit."),
		status: Fg.describe("How it is going. Queued means the forge has accepted it and nothing is executing it yet, which is a different thing to wait on than a run actually in progress."),
		url: N().describe("Its page on the forge."),
		createdAt: F().describe("When it started, in milliseconds."),
		durationSeconds: F().optional().describe("How long it took."),
		failedJobs: L(N()).optional().describe("What broke, by name. Fetched only for failed runs, so that a notification or a screen can say what went wrong rather than just that something did.")
	}), Lg = R({
		name: N().describe("The job's name."),
		status: Fg.describe("How it went."),
		stage: N().optional().describe("Which stage it belongs to, where the pipeline groups its jobs that way."),
		needs: L(N()).optional().describe("Which jobs in this run it declared it waits on: the real shape of the pipeline. Absent means nothing could be read, which is different from an empty list, which is the claim that it waits on nothing."),
		startedAt: F().optional().describe("When it began, in milliseconds. Absent while it is queued."),
		finishedAt: F().optional().describe("When it ended, in milliseconds."),
		durationSeconds: F().optional().describe("How long it took."),
		webUrl: N().optional().describe("Its page on the forge, which is the shortest path from this step failed to the log that says why.")
	}), Rg = R({ jobs: L(Lg).describe("The steps inside one run. Fetched separately from the run list, so that list stays cheap.") }), zg = R({
		repo: N().describe("Which workspace repository."),
		host: Pg.describe("Which forge it lives on."),
		project: N().describe("The project there."),
		url: N().describe("Its page on the forge."),
		hookWarning: N().optional().describe("Present when the sandbox could not register for instant notifications, with what happened. Without them the sandbox polls instead, so this costs a couple of minutes' delay rather than the feature."),
		hookRecipe: N().optional().describe("What to paste into the repository's webhook settings by hand, secret included. Shown to a maintainer or the owner only.")
	}), Bg = R({
		repos: L(zg).describe("Which workspace repositories are wired to a forge, and how each one's notifications are set up."),
		runs: L(Ig).describe("Runs across all of them, newest first.")
	}), Vg = R({
		repo: N().describe("Which workspace repository. The project behind it is resolved fresh each call, so a stale screen cannot act on one the workspace no longer maps to."),
		runId: F().describe("Which run, by the forge's own id.")
	}), Hg = Vg.extend({
		pick: Td.describe("Which model to open the conversation on, when somebody chose one. Leave it out for the sandbox's own choice, which is the ordinary path."),
		mode: V(["continue", "start-over"]).optional().describe("What to do about the attempt already made at this run, when there is one. `continue` carries on in that conversation; `start-over` stops it if running, files it away, and opens the next attempt on a clean worktree. Leave it out for the plain press: an attempt that ended is continued, a fresh failure gets attempt 1, and one still in play answers CONFLICT with why."),
		force: I().optional().describe("Open the conversation even when every failed job died in its runner's own setup, which is the fleet's fault and nothing an agent on the code can repair. Left out, such a run is refused with that sentence.")
	}), Ug = R({ conversationId: N().describe("The conversation that was opened, already holding the failure. Open it to watch, or attach to its turn.") }), Wg = V([
		"idle",
		"running",
		"passed",
		"failed",
		"error",
		"cancelled"
	]), Gg = R({
		status: Wg.describe("Where the run is. Failed and error are deliberately different: failed means the code is wrong, error means the command could not be run at all, and calling the second one a test failure would send an agent hunting a bug that is not there."),
		command: N().describe("What actually ran, echoed here rather than read back from the settings, so a result looked at after the setting changed still says what produced it."),
		startedAt: F().optional().describe("When it began, in milliseconds."),
		finishedAt: F().optional().describe("When it ended, in milliseconds."),
		exitCode: F().optional().describe("How the command exited."),
		timedOut: I().optional().describe("It was killed for taking too long rather than finishing."),
		session: N().optional().describe("The terminal it runs in, which is where to watch it. Absent where the sandbox has no terminals, in which case there is nothing to attach to."),
		output: N().describe("The end of what it printed, as plain text with the colour codes and redrawn progress lines resolved away. The end rather than the beginning, because a suite's verdict is at the end. Empty while it runs, and for one that was killed.")
	});
})), qg, Jg, Yg, Xg, Zg, Qg, $g, e_, t_, n_, r_, i_, a_, o_, s_, c_, l_, u_, d_, f_, p_, m_, h_, g_, __, v_, y_, b_, x_, S_, C_, w_, T_, E_, D_, O_, k_, A_, j_, M_, N_, P_ = w((() => {
	K(), X(), Om(), Kg(), ud(), $(), qg = V([
		"staged",
		"unstaged",
		"conflicted"
	]), Jg = R({
		side: qg.optional().describe("Narrow to one of the three lists a repository's changes split into. Leave it out for all of them, which is the whole repository."),
		origin: N().min(1).optional().describe("Narrow to the files one conversation landed. Leave it out for everyone's, including your own edits.")
	}), Yg = 1e3, Xg = L(N().min(1)).max(Yg).describe("Exactly these repository-relative paths. For anything bigger than a hand-picked selection, describe a scope instead."), Zg = R({
		paths: Xg.optional(),
		scope: Jg.optional().describe("What to act on, described rather than listed, so it covers every matching file in the repository and not just the ones a list could hold.")
	}), Qg = { message: "name paths or a scope, not both" }, $g = (e) => e.paths === void 0 || e.scope === void 0, e_ = Q.extend({
		message: N().min(1).describe("The commit message."),
		stage: Zg.refine($g, Qg).optional().describe("What to stage before committing. Leave it out to record the index exactly as it stands; give it an empty object to stage everything first.")
	}), t_ = Q.extend(Zg.shape).describe("What to throw away. Neither paths nor a scope discards every uncommitted change in the repository.").refine($g, Qg), n_ = Q.extend(Zg.shape).describe("What to move across the index. Nothing on disk changes either way.").refine($g, Qg), r_ = Q.extend({ branch: N().min(1).optional().describe("Which branch to push. Leave it out for the checked-out one. A branch with no upstream yet gets one set on this push.") }), i_ = V([
		"hook",
		"remote",
		"transport"
	]), a_ = Gg.extend({
		repo: N().describe("The repository this run is about, the same id the routes take."),
		reason: N().optional().describe("Why not, in git's own words: the last verdict line, for a row that has room for one line. The whole tail is `output`."),
		refusedBy: i_.optional().describe("Who refused a failed push: this repository's pre-push hook (the code is wrong, a fix is worth proposing), the remote (pull first), or the transport (credentials, network: retry). Absent while it runs and for a push that went.")
	}), o_ = Q.extend({ path: N().min(1).describe("The file to read, relative to the repository root.") }), s_ = Q.extend({
		path: N().min(1).describe("Where to write, relative to the repository root. Missing folders are created."),
		content: N().describe("The file's whole new contents.")
	}), c_ = Q.extend({
		path: N().min(1).describe("The file, relative to the repository root."),
		side: qg.describe("Which comparison you want. A file that is staged and then edited again has genuinely different answers for each, which is why this is required rather than assumed.")
	}), l_ = R({
		branch: N().describe("The checked-out branch."),
		dirty: I().describe("Whether anything is uncommitted."),
		files: L(N()).describe("Every path with something pending, staged or not.")
	}), u_ = R({ files: L(N()).describe("Every path git tracks, relative to the repository root. Ignored and untracked files are not here.") }), d_ = R({
		path: N().describe("The path, as asked for."),
		content: N().describe("The file's contents as they stand on disk.")
	}), R({ repo: N().min(1).describe("Which repository.") }).extend(Zg.shape).refine($g, Qg), f_ = R({
		path: N().describe("The path, relative to the repository root. For a rename this is the new one."),
		status: V([
			"added",
			"modified",
			"deleted",
			"renamed",
			"type-changed",
			"conflicted"
		]).describe("What happened to it. Conflicted is not a kind of edit: nothing can be committed anywhere in the repository while one exists."),
		from: N().optional().describe("Where a renamed file came from."),
		additions: F().optional().describe("Lines added. Absent for a binary file, and for an untracked one, which has nothing to compare against."),
		deletions: F().optional().describe("Lines removed. Absent for the same reasons additions is."),
		code: R({
			additions: F(),
			deletions: F()
		}).optional().describe("The same +/− with every comment stripped from both sides, which is what a review shows beside a diff that opens on code alone. Absent when the file cannot be read that way (binary, too large, or a language this build ships no grammar for): git's own counts above are then the reading.")
	}), p_ = R({
		remote: N().optional().describe("The remote this branch pushes to. Absent means none is configured. In a fork with two remotes, pushing to the wrong one succeeds and leaves the count stuck, which is why this says which."),
		branch: N().optional().describe("The checked-out branch. Absent when the repository is on a bare commit, or has no commits yet."),
		upstream: N().optional().describe("The branch on the remote this one follows. Absent means the next push will publish it."),
		ahead: F().describe("Commits you have that the remote does not."),
		behind: F().describe("Commits the remote has that you do not, as of the last fetch. Fetch before trusting it.")
	}), m_ = R({
		name: N().describe("The branch name."),
		current: I().describe("Whether this is the one checked out."),
		upstream: N().optional().describe("The branch on the remote it follows, if any."),
		ahead: F().describe("Commits this branch has that its remote counterpart does not."),
		behind: F().describe("Commits its remote counterpart has that it does not."),
		gone: I().optional().describe("The branch it followed no longer exists on the remote, usually because a merged pull request deleted it. The signal that this one is safe to delete."),
		at: F().describe("When its tip was committed, in milliseconds. Lists are newest first.")
	}), h_ = R({
		name: N().describe("The full name, such as origin/main."),
		remote: N().describe("Just the remote part, so a picker can group by it without re-parsing."),
		branch: N().describe("Just the branch part."),
		at: F().describe("When its tip was committed, in milliseconds, as this repository last saw it.")
	}), g_ = R({
		branches: L(m_).describe("Branches in this repository."),
		remotes: L(h_).describe("Branches on its remotes, as last seen. Sent together with the locals so a switcher never draws a half-filled list.")
	}), __ = Q.extend({
		name: cd.describe("The new branch's name."),
		start: N().min(1).optional().describe("Where to start it: a commit or another branch. Leave it out to start from where you are."),
		checkout: I().optional().describe("Switch to it as well as creating it.")
	}), v_ = Q.extend({
		name: cd.describe("The branch to delete."),
		force: I().optional().describe("Delete it even though it holds work that was never merged. The deliberate retry after the first attempt refuses.")
	}), y_ = V([
		"merge",
		"rebase",
		"cherry-pick",
		"revert"
	]), b_ = R({
		repo: N().describe("The repository asked about."),
		operation: y_.optional().describe("Which operation the working tree is stuck inside. Absent means it is not stuck at all, which is almost always. While one is present git refuses nearly everything else, and abandoning it is the only way out.")
	}), x_ = R({
		repo: N(),
		branch: N().optional().describe("The checked-out branch. Absent in a repository that has no commits yet."),
		conflicted: L(f_).describe("Paths a merge or rebase could not finish. First, because nothing anywhere in this repository can be committed until they are resolved. Held apart from the two lists below, because staged or not is not a question one of these has an answer to."),
		operation: y_.optional().describe("What halted, when something did. This is the sentence that explains the conflicts above and names the way out of them."),
		staged: L(f_).describe("What a plain commit would record right now."),
		unstaged: L(f_).describe("Edits on disk that are not staged, plus untracked files. A path can be in both lists at once with different line counts, which is why they are separate."),
		truncated: R({
			staged: F().describe("Staged changes not listed above."),
			unstaged: F().describe("Unstaged changes not listed above.")
		}).optional().describe("How many changes were cut from each of the two lists above. A freshly cloned monorepo or a mass delete runs to six figures, which no screen can draw, so past a budget the lists arrive short and this says by how much on each side. Absent means they are complete."),
		remote: p_.optional().describe("Where this repository stands against its remote."),
		origins: B(N(), L(N())).optional().describe("Which conversation put each path here, newest first, keyed by path. Only work that went through a merge can appear: edits made in the shared tree, in a terminal, or by a person are simply absent rather than guessed at."),
		error: N().optional().describe("Why the repository could not be read at all, in git's own words. A repository left broken by a failed import arrives with empty lists and this set, rather than vanishing from the answer with nothing to act on.")
	}), S_ = R({
		title: N().optional().describe("The conversation's title. Absent for one that never got as far as having a title."),
		provider: dd.describe("Which model provider it ran on."),
		landedMessage: Qp.optional().describe("What the merged work did, drafted by the conversation itself. Carried here as well as on its card, because merged lines outlive the card: archiving a finished conversation does not uncommit its work.")
	}), C_ = R({
		repos: L(x_).describe("One entry per repository that has something pending, is out of step with its remote, or could not be read. A clean repository is simply absent."),
		originAgents: B(N(), S_).optional().describe("Who each conversation named above is, keyed by id, so a caller need not look them up. Absent when nothing in the review can be attributed."),
		committing: L(N()).optional().describe("Repositories with a commit running right now. The sandbox's answer rather than any one tab's, so a reload, a second window and another device all know. Absent means nothing is committing.")
	}), w_ = R({
		committed: I().describe("Whether a commit was actually recorded."),
		changes: x_.optional().describe("What this repository looks like now, read in the same breath as the commit so a caller can redraw from here instead of asking for a fresh scan. Absent means there is nothing left to show."),
		originAgents: B(N(), S_).optional().describe("Who the conversations named in those changes are. Merge it over what you already hold rather than replacing: other repositories still name their own.")
	}), T_ = R({
		dir: N().describe("Where the package lives, relative to its repository. Empty when the repository is itself one package."),
		name: N().describe("The name the package declares for itself.")
	}), E_ = R({
		repo: N().describe("Which repository."),
		modules: L(T_).describe("Its packages.")
	}), D_ = R({ repos: L(E_).describe("Every repository with the packages inside it.") }), O_ = f_.extend({ landed: I().describe("Whether your workspace already holds this content. Read from the tree at request time, not from what a land recorded: discard a landed file in the Changes panel and this goes back to false, which is what puts it back under Land now.") }), k_ = R({
		repo: N().describe("Which repository."),
		branch: N().optional().describe("The branch this conversation's work sits on."),
		changes: L(O_).describe("What it changed there."),
		modules: L(T_).describe("The packages of the tree these changes came from, so a review can group by package. Carried with the changes rather than looked up separately, because a package the conversation has just created exists only in its own copy and the shared tree has never heard of it.")
	}), A_ = R({
		repos: L(k_).describe("One entry per repository the conversation touched."),
		absorbed: F().describe("How many of this conversation's files your own history already carries, and which are therefore not listed as differences any more."),
		conflicts: L(Cm).optional().describe("Why the last merge refused, when one did. Carried here as well as in the merge's own answer, because a conflict is found the moment a turn ends and dealt with hours later on this surface, which would otherwise open with nothing to explain what it promised to resolve.")
	}), j_ = R({
		sha: N().describe("The commit."),
		short: N().describe("Its abbreviated hash, which is what a reader recognises it by."),
		subject: N().describe("Its first line."),
		author: N().describe("Who committed it."),
		at: F().describe("When it was authored, in milliseconds."),
		changes: L(f_).describe("The conversation's files that this commit is the newest carrier of, as the conversation changed them. Every file appears under exactly one commit, so these counts add up to the work rather than over-counting a file that history touched twice.")
	}), M_ = R({
		repo: N().describe("Which repository."),
		commits: L(j_).describe("The commits carrying this conversation's work there, newest first."),
		modules: L(T_).describe("The packages of the tree these files came from, so a review can group them by package.")
	}), N_ = R({
		repos: L(M_).describe("One entry per repository holding committed work of this conversation."),
		unaccounted: F().describe("How many of the conversation's absorbed files none of these commits carries. Above zero means its content reached your main line by some other road, so the commits listed are not the whole story.")
	});
})), F_, I_ = w((() => {
	J(), Th(), Om(), Ng(), P_(), Uh(), $(), F_ = {
		list: q.route({
			method: "GET",
			path: "/agents",
			summary: "Every live conversation",
			description: "The fleet as the board draws it: each conversation with its title, what it is doing, when it last moved and whether anybody has read it since. Archived conversations are not in here."
		}).output(_g),
		archived: q.route({
			method: "GET",
			path: "/agents/archived",
			summary: "Conversations put away",
			description: "The same shape as the live fleet, for the conversations somebody has decided are finished. Their work is kept, and any one of them can be brought back."
		}).output(_g),
		search: q.route({
			method: "GET",
			path: "/agents/search",
			summary: "Find a conversation",
			description: "Searches the live fleet and the archive together. Both halves on purpose: the board hides finished work by design, and a filter that says it found nothing while the answer sits one click away is simply wrong."
		}).input(um).output(mm),
		get: q.route({
			method: "GET",
			path: "/agents/{id}",
			summary: "One conversation's card",
			description: "Everything the board shows for a single conversation: its title, state, working branch, unread marker and timestamps."
		}).input(rm).output(nm),
		transcript: q.route({
			method: "GET",
			path: "/agents/{id}/transcript",
			summary: "One page of a conversation",
			description: "The most recent turns of one conversation, in order, including the tool calls and their results: what the chat replays and the next turn is seeded from. A page, not the whole record — pass the answer's `from` back as `before` to walk further back, until `more` reads false."
		}).input(im).output(wh),
		place: q.route({
			method: "POST",
			path: "/agents/{id}/place",
			summary: "Put words in the agent's mouth",
			description: "Writes a line into the record as though the agent had said it, with no turn behind it and no reply. Human readers see it marked as placed. The next real turn starts fresh from the record, where the line reads as the agent's own. Refused while a turn is running."
		}).input(gm).output(Z),
		rename: q.route({
			method: "POST",
			path: "/agents/{id}/rename",
			summary: "Retitle a conversation",
			description: "Sets the title a person chose, replacing the one that was generated. Allowed while the conversation is working, and it does not count as activity."
		}).input(hm).output(nm),
		autoLand: q.route({
			method: "POST",
			path: "/agents/{id}/auto-land",
			summary: "Whether this conversation merges its work automatically",
			description: "Overrides the sandbox-wide setting for one conversation; clear it to go back to following the default. Deliberately allowed mid-turn, because the setting is read when the turn finishes, so flipping it while the agent works means exactly hold this piece of work for review."
		}).input(_m).output(nm),
		resumeAfterOutage: q.route({
			method: "POST",
			path: "/agents/{id}/resume-after-outage",
			summary: "Whether this conversation retries after a provider outage",
			description: "Overrides the sandbox-wide setting for one conversation; clear it to follow the default again. This is what the offer shown when a turn dies writes, because the press happens inside one conversation and honestly means finish this piece of work."
		}).input(vm).output(nm),
		resumeAfterLimit: q.route({
			method: "POST",
			path: "/agents/{id}/resume-after-limit",
			summary: "Whether this conversation sends itself again when its allowance comes back",
			description: "Overrides the sandbox-wide setting for one conversation; clear it to follow the default again. Off unless asked for, because the allowance is the user's own budget and a turn that spends it the moment it reopens is not a decision to make on their behalf."
		}).input(ym).output(nm),
		moveAfterLimit: q.route({
			method: "POST",
			path: "/agents/{id}/move-after-limit",
			summary: "Whether this conversation moves to another account when its allowance is spent",
			description: "Overrides the sandbox-wide setting for one conversation; clear it to follow the default again. A move spends a second account of the same provider on this conversation's behalf, so it is off unless asked for."
		}).input(bm).output(nm),
		seen: q.route({
			method: "POST",
			path: "/agents/{id}/seen",
			summary: "Mark a conversation read",
			description: "Stamps the read marker behind the unread badge on one card. Allowed while the conversation is working, and reading never counts as activity."
		}).input(rm).output(nm),
		stopWatching: q.route({
			method: "POST",
			path: "/agents/{id}/stop-watching",
			summary: "Stop every condition watch a conversation is parked on",
			description: "Disarms all of this conversation's outside-condition watches, so none of them will wake it. All of them rather than one, because that is what the press means when it is made about a card. Nothing else about the conversation changes."
		}).input(rm).output(nm),
		seenAll: q.route({
			method: "POST",
			path: "/agents/seen",
			summary: "Mark every conversation read",
			description: "Clears the unread badge across the whole fleet at once, and hands the refreshed list back."
		}).output(_g),
		diff: q.route({
			method: "GET",
			path: "/agents/{id}/diff",
			summary: "Everything a conversation has changed",
			description: "One flat set of changed files per repo, measured against where each repo stood when the conversation started, with every file flagged as already merged or not. Not the staged-and-unstaged shape a working copy has, because nobody ever checks this branch out to stage into it."
		}).input(rm).output(A_),
		history: q.route({
			method: "GET",
			path: "/agents/{id}/history",
			summary: "Where a conversation's committed work lives",
			description: "The commits in your own history that carry this conversation's work, with the files each one brought. Use it when the change list is empty or short because you already committed what it wrote: those files are not differences against the main line any more, so they are not in the review, and this is where they went."
		}).input(rm).output(N_),
		fileDiff: q.route({
			method: "GET",
			path: "/agents/{id}/{repo}/file-diff",
			summary: "One file's before and after in a conversation's work",
			description: "Both sides of a single file: what it held when the conversation started and what it holds on its branch now."
		}).input(xm).output(Hh),
		land: q.route({
			method: "POST",
			path: "/agents/{id}/land",
			summary: "Merge a conversation's work into the workspace",
			description: "Brings the conversation's branches into the main tree, one repo at a time. A conflict is reported rather than raised and nothing is lost when it fails. Refused while a turn is running, and refused for a conversation that works directly in the shared tree, which has nothing to merge."
		}).input(Dm).output(wm),
		requestLand: q.route({
			method: "POST",
			path: "/agents/{id}/request-land",
			summary: "Ask a maintainer to merge this work",
			description: "For a collaborator who is not allowed to merge: marks the conversation as waiting for review, with who asked. The request shows on every maintainer's board and clears when somebody merges or discards it."
		}).input(rm).output(nm),
		discard: q.route({
			method: "POST",
			path: "/agents/{id}/discard",
			summary: "Throw a conversation's work away",
			description: "Deletes the conversation's working copies, its branches and its entry. Nothing is kept. Refused while a turn is running, and refused for a conversation working in the shared tree."
		}).input(rm).output(Z),
		archive: q.route({
			method: "POST",
			path: "/agents/archive",
			summary: "Put conversations away",
			description: "The gentle counterpart to discarding. Commits whatever the conversation still has in progress onto its own branch, releases its working copy, and keeps the entry and the record. It leaves the live fleet and joins the archive. Refused for a conversation that is running."
		}).input(am).output(cm),
		unarchive: q.route({
			method: "POST",
			path: "/agents/unarchive",
			summary: "Bring conversations back",
			description: "Returns archived conversations to the live fleet. The next turn picks up a fresh working copy from the branch that was kept."
		}).input(om).output(sm),
		purge: q.route({
			method: "POST",
			path: "/agents/purge",
			summary: "Empty the archive for good",
			description: "Discards every conversation already in the archive: working copies, branches and entries. The whole archive rather than a chosen few, because the archive is the pile somebody has already decided is over. A teardown that fails on one conversation leaves that one behind instead of taking the rest down with it."
		}).output(lm)
	};
})), L_, R_, z_, B_, V_, H_, U_, W_, G_, K_, q_ = w((() => {
	K(), ud(), V(["post", "action"]), L_ = V([
		"proposed",
		"approved",
		"running",
		"done",
		"failed"
	]), R_ = {
		actsAs: Y.optional().describe("Whose name it acts under. Needed for anything that requires being logged in, because an unwatched turn naming nobody is allowed no account at all. Never guessed: one site can be connected five times over, and picking for you means picking wrong in public with no undo."),
		scheduledAt: F().optional().describe("When it should happen, in milliseconds. An agent may propose without one and you set it when approving; an approved item with no time goes after a short countdown you can still stop."),
		status: L_.default("proposed").describe("Where it is: proposed by the agent, approved by you, being carried out, done, or failed. Rejecting is deleting it; retrying is approving a failed one again."),
		createdAt: F().optional().describe("When it was written, in milliseconds."),
		startedAt: F().optional().describe("When it started being carried out, in milliseconds. Needed to tell a run that is under way from one whose turn died mid-flight, which the scheduled time cannot."),
		finishedAt: F().optional().describe("When it was done, in milliseconds."),
		result: N().optional().describe("What came back, when something did: the post's own address, a confirmation number. The one thing a finished item can offer that reading it cannot."),
		error: N().optional().describe("Why it failed, written as a sentence for a person to read rather than as a code.")
	}, z_ = R({
		kind: H("post").describe("A post to publish somewhere."),
		platform: N().min(1).describe("Where it should go. A plain name, so a new site needs no change here; an unknown one simply fails when it tries to post."),
		content: N().min(1).describe("The post itself."),
		title: N().optional().describe("A title, where the site wants one."),
		target: N().optional().describe("Where on the site: a community, a channel. Or the address of the thing this replies to, in which case it is a reply, and on some sites the difference between a thread's address and one comment's is the difference between talking to the room and answering the person."),
		media: L(N()).optional().describe("Anything to attach, as workspace paths."),
		...R_
	}), B_ = R({
		kind: H("action").describe("Something the agent will do once you say so."),
		summary: N().min(1).max(200).describe("What will happen, in one line: the row's headline and the confirm dialog's item."),
		details: N().optional().describe("The specifics, as Markdown: everything you would want to see before saying yes."),
		instructions: N().min(1).describe("What to do once approved, written for the fresh turn that will do it: names, ids and steps, since it has none of this conversation."),
		...R_
	}), z("kind", [z_, B_]), V_ = { id: Y.describe("The approval's id.") }, H_ = z_.extend(V_), U_ = B_.extend(V_), W_ = z("kind", [H_, U_]), G_ = R({
		approvals: L(W_).describe("The queue."),
		invalid: L(N()).describe("Files that could not be read at all, or name a kind this daemon does not know. Listed rather than skipped, because an agent writes these files directly and a malformed one would otherwise never run and never say why.")
	}), K_ = R({ id: Y.describe("Which approval.") });
})), J_, Y_ = w((() => {
	J(), q_(), $(), J_ = {
		list: q.route({
			method: "GET",
			path: "/approvals",
			summary: "Things waiting for your yes",
			description: "Everything an agent has prepared and would like to do: posts to publish, actions to carry out. Nothing here has happened yet."
		}).output(G_),
		upsert: q.route({
			method: "POST",
			path: "/approvals",
			summary: "Approve, edit or retry one",
			description: "All three are the same act with a different field changed, so they share one call. Send the item back as you want it."
		}).input(W_).output(Z),
		remove: q.route({
			method: "DELETE",
			path: "/approvals/{id}",
			summary: "Reject one",
			description: "Throws it away undone."
		}).input(K_).output(Z)
	};
})), X_, Z_ = w((() => {
	J(), Ng(), $(), X_ = {
		list: q.route({
			method: "GET",
			path: "/automations",
			summary: "Things that wake an agent on their own",
			description: "Every automation with its recent runs and when it fires next."
		}).output(Sg),
		catalog: q.route({
			method: "GET",
			path: "/automations/catalog",
			summary: "What can trigger an automation here",
			description: "Every trigger this sandbox understands and every template worth starting from, the daemon's own merged with each installed extension's. Writing an automation is checked against this same list, so a screen and the daemon can never disagree about what is allowed."
		}).output(Mg),
		upsert: q.route({
			method: "POST",
			path: "/automations",
			summary: "Create or edit an automation",
			description: "Writes an automation by id. Nothing needs provisioning: the scheduler picks it up on its next sweep."
		}).input(hg).output(Z),
		setEnabled: q.route({
			method: "POST",
			path: "/automations/{id}/enabled",
			summary: "Turn an automation on or off",
			description: "Flips only the switch, so a row in a list can be toggled without rebuilding the whole record."
		}).input(Dg).output(Z),
		remove: q.route({
			method: "DELETE",
			path: "/automations/{id}",
			summary: "Delete an automation",
			description: "Removes it, so nothing fires from it again."
		}).input(Eg).output(Z),
		rotateToken: q.route({
			method: "POST",
			path: "/automations/{id}/rotate-token",
			summary: "Rotate an automation's webhook token or intake key",
			description: "Mints a new credential for the door this automation opens and retires the old one at once. Every caller has to be handed the new URL; that is the point. Refused for an automation with no door."
		}).input(Eg).output(pf),
		run: q.route({
			method: "POST",
			path: "/automations/{id}/run",
			summary: "Fire an automation by hand",
			description: "The answer to writing something that runs at three in the morning and having no way to try it. It takes exactly the path the real trigger takes, including the check that decides whether there was anything to do, since skipped by the guard is the most useful thing this can tell you. A switched-off automation fires too, because trying it before switching it on is the main reason to press this. Not available for the trigger that listens for incoming messages, where a hand-fire would produce an agent asked to handle events and handed none; send the bot a message instead. Answers straight away and runs detached."
		}).input(Eg).output(Z),
		senders: q.route({
			method: "GET",
			path: "/automations/senders/{provider}",
			summary: "Who has written to a listener source",
			description: "Everyone whose message reached one of this source's automations, newest first, admitted or not. What the sender rules picker offers by name while storing the id the service vouches for."
		}).input(Tg).output(wg),
		pendingList: q.route({
			method: "GET",
			path: "/automations/pending",
			summary: "Automations waiting for a yes",
			description: "The queue an automation set to ask first lands in each time it would have fired."
		}).output(vg),
		approve: q.route({
			method: "POST",
			path: "/automations/pending/{id}/approve",
			summary: "Let a held automation run",
			description: "Releases one waiting automation and runs the wake it was holding. Answers straight away and runs detached."
		}).input(yg).output(Z),
		reject: q.route({
			method: "POST",
			path: "/automations/pending/{id}/reject",
			summary: "Drop a held automation",
			description: "Throws one waiting fire away. The automation stays on, and the next trigger queues as usual."
		}).input(yg).output(Z)
	};
})), Q_, $_, ev, tv, nv, rv, iv, av, ov, sv, cv, lv, uv, dv, fv, pv, mv, hv, gv, _v, vv, yv, bv, xv, Sv, Cv, wv = w((() => {
	K(), X(), Q_ = R({ agent: gd.optional().describe("Read a conversation's own private copy of the workspace rather than the shared tree. Leave it out for the shared tree. A conversation that is not working privately resolves back to the shared tree rather than failing, so a link need not know which mode it runs in.") }), $_ = R({
		to: N().describe("What the link says, verbatim, rather than where it ends up. That is what the person who made it wrote, and what they would edit."),
		state: V(["broken", "outside"]).optional().describe("Absent for an ordinary link. Broken means there is nothing at the other end, and it is listed anyway because a dangling link is worth seeing. Outside means it leads out of the workspace, so it is shown and refused.")
	}), ev = R({
		name: N().describe("Just this entry's own name."),
		path: N().describe("Its full path from the workspace root, which feeds straight back into the file routes."),
		type: V(["file", "dir"]).describe("What it is. For a link, what it points at, so a link to a folder opens like a folder."),
		size: F().optional().describe("Size in bytes, for a file."),
		ignored: I().optional().describe("Tooling ignores it: installed packages, git internals, anything the ignore rules exclude. Usually drawn greyed out."),
		link: $_.optional().describe("Present when this entry is a link."),
		get children() {
			return L(ev).optional().describe("What is inside a folder. Absent means it was not opened, either because it is ignored or because the walk ran out of budget above it, so ask for it separately. An empty list means it really is empty.");
		}
	}), tv = R({
		root: N().describe("The path everything below is relative to."),
		tree: L(ev).describe("The workspace, one entry per file and folder."),
		hidden: F().describe("How many entries at the top level were cut for size. Zero means the listing is complete."),
		barren: L(N()).describe("Folders whose whole contents are empty folders, and nothing else. Complete for the workspace, however much of the tree above was listed, and ordered like the tree, so a parent comes before the branch below it.")
	}), nv = Q_.extend({
		path: N().min(1).describe("The folder to open, as a workspace path."),
		depth: G().int().min(1).max(5).optional().describe("How many levels to include. Omitted means direct children only; at most five levels can be read in one request.")
	}), rv = R({
		entries: L(ev).describe("What is inside it, as a flat list. With the default depth these are direct children; a deeper request also includes descendants, whose full paths say where they belong. Folders carry no nested contents of their own."),
		hidden: F().describe("How many entries were cut for size. Zero means the listing is complete.")
	}), iv = R({ path: N().min(1).describe("The file or folder, as a workspace path.") }), av = Q_.extend({ path: N().min(1).describe("The media file the ticket should cover.") }), ov = R({
		ticket: N().describe("Hand this to the streaming route in the query string. It buys exactly the one file it was minted for."),
		expiresAt: F().describe("When it stops working, in milliseconds, so a player can tell a dead ticket from a dead file.")
	}), sv = Q_.extend({
		path: N().min(1).describe("The file to read, as a workspace path."),
		offset: G().int().optional().describe("Which byte to start at. A negative number reads that many bytes from the end, which is how you follow a growing log without knowing its size first."),
		limit: G().int().min(1).optional().describe("How many bytes to read. Capped by the sandbox, so leaving it out or asking for too much gives you the cap rather than the whole file.")
	}), cv = R({
		present: H(!0).describe("There is something at that path."),
		path: N().describe("The path, as asked for."),
		content: N().describe("The bytes of the window you asked for, as text."),
		size: F().describe("How large the whole file is. Compare it with the window below to know whether there is more."),
		offset: F().describe("Which byte the window starts at."),
		bytes: F().describe("How many bytes the window holds."),
		shared: I().describe("Which tree answered. True when no conversation was named, and also when one was but its own copy has no such file, which is the case a reader has to be told about rather than left to assume.")
	}), lv = R({
		present: H(!1).describe("Nothing there. An answer, not a failure: reading a file that may not exist yet is the ordinary case for half the reads in this product."),
		path: N().describe("The path, as asked for.")
	}), uv = z("present", [cv, lv]), dv = R({ path: N().min(1).describe("The file you want the text of, as a workspace path. The real file, not its shadow: where the text is kept is this route's business.") }), fv = R({
		enabled: I().describe("Whether the background pass is on (the `sidecars` setting). Off means a shadow exists only where someone asked for one."),
		queued: F().describe("Files waiting for a shadow, not counting the batch being rendered right now."),
		deriving: L(N()).describe("The files being rendered at this moment, as workspace paths. One batch at a time, because derivation shares the box with the agent it serves."),
		sweeping: I().describe("Whether a whole-tree pass is running, which is what a freshly enabled setting or an unlistably large batch triggers."),
		broken: I().describe("Whether the `fileq` binary is missing, in which case nothing renders in the background until this sandbox restarts."),
		shadows: F().optional().describe("How many shadows the last whole-tree pass counted. Absent until one has run in this daemon's lifetime."),
		sweptAt: N().optional().describe("When that pass finished, as an ISO timestamp.")
	}), pv = V([
		"off",
		"queued",
		"deriving",
		"idle",
		"broken",
		"undeliverable"
	]), mv = {
		state: pv.describe("Where this file stands with the background pass: switched off, waiting its turn, being read right now, settled, or unreachable because the renderer is missing. `undeliverable` is a format nothing here reads."),
		queue: fv.describe("How the background pass as a whole is doing, so a wait can be reported as a queue rather than as nothing happening.")
	}, hv = R({
		...mv,
		present: H(!0).describe("There is derived text for that file."),
		path: N().describe("The file it was derived from, as asked for."),
		content: N().describe("The text itself, as markdown."),
		deriver: N().describe("Which reader wrote it, and at which version, such as `pdf+ocr v1`. A file re-derives when this changes."),
		derivedAt: N().optional().describe("When it was written, as an ISO timestamp. Absent only for a shadow whose front matter was edited by hand."),
		title: N().optional().describe("The title the format carried, where it carried one."),
		notes: L(N()).describe("Every cap and degradation the derivation hit: a sheet cut to 200 rows, a book cut at 2 MB, a scan recognised rather than read. Show these with the text, since text that was cut reading as complete is the one failure this whole feature cannot afford."),
		tokens: F().describe("Roughly what an agent spends reading it, by the same four-chars-a-token estimate every budget here uses."),
		truncated: I().describe("Whether this is only the start of the shadow, cut to keep the response sendable. The file on disk holds the rest."),
		stale: I().describe("Whether the file has changed since this text was derived, compared by content rather than by clock. True means you are reading a rendering of an older version of the file, and deriving it again catches it up.")
	}), gv = R({
		...mv,
		present: H(!1).describe("There is no derived text for that file. Read `state` before saying so to anyone: absent and queued are different answers."),
		path: N().describe("The file, as asked for."),
		derivable: I().describe("Whether this format can be turned into text at all. True means asking for it to be derived is worth offering; false means nothing here reads this format."),
		reason: N().optional().describe("Why there is none, when deriving was just attempted and produced nothing: the file is too large, corrupt, or of a format no reader claims.")
	}), _v = z("present", [hv, gv]), vv = Q_.extend({ path: N().min(1).max(512).describe("The reference as somebody wrote it. Often only the tail of the real path, which is why this is matched against the tree rather than read as-is.") }), yv = R({ path: N().optional().describe("The real path it means. Absent when nothing in the workspace ends that way.") }), bv = R({ path: N().min(1).describe("The folder to create. Missing folders above it are created too.") }), xv = R({
		from: N().min(1).describe("What to move or copy, as a workspace path."),
		to: N().min(1).describe("Where it should end up. Changing only the last part is how you rename something.")
	}), Sv = V([
		"repositories",
		"documents",
		"media",
		"archives",
		"other"
	]), Cv = R({ classifications: L(R({
		path: N().describe("What was looked at."),
		bucket: Sv.describe("Which bucket it was sorted into."),
		reason: N().describe("The signal that decided it, so the proposal can be argued with rather than trusted.")
	})).describe("One entry per repository folder and loose file at the top of the workspace. A read-only proposal: nothing moves until you apply it.") });
})), Tv, Ev, Dv, Ov, kv, Av, jv, Mv, Nv, Pv, Fv, Iv, Lv, Rv, zv, Bv, Vv, Hv = w((() => {
	K(), Om(), Wd(), $(), wv(), Tv = uc({ kind: N() }), Ev = R({
		kind: H("heartbeat"),
		rev: F()
	}), Dv = R({
		key: N(),
		label: N(),
		state: V([
			"pending",
			"running",
			"done",
			"failed"
		]),
		ms: F().optional()
	}), Ov = R({
		ready: I(),
		startedAt: F(),
		steps: L(Dv)
	}), kv = R({
		kind: H("boot"),
		...Ov.shape
	}), Av = R({
		kind: H("hello"),
		workspaceId: N(),
		routes: L(N()).optional(),
		shapes: B(N(), N()).optional(),
		build: N().optional(),
		boot: Ov.optional()
	}), jv = R({
		kind: H("reposChanged"),
		repos: L(N())
	}), Mv = R({
		kind: H("workspaceChanged"),
		paths: L(N())
	}), Nv = R({
		kind: H("derivedChanged"),
		paths: L(N()),
		queue: fv
	}), Pv = R({
		kind: H("refsChanged"),
		repos: L(N())
	}), Fv = R({
		kind: H("runtimeChanged"),
		domains: L(N())
	}), Iv = R({
		clientId: N(),
		email: N(),
		name: N().optional(),
		picture: N().optional(),
		role: ff,
		idle: I(),
		view: N().optional(),
		sessionId: N().optional(),
		path: N().optional()
	}), Lv = R({
		kind: H("presence"),
		users: L(Iv)
	}), Rv = R({
		kind: H("agents"),
		agents: L(nm),
		rev: F()
	}), zv = R({
		kind: H("accountUsage"),
		provider: N(),
		account: N(),
		usage: Md.optional()
	}), Bv = R({
		kind: H("providerRefusal"),
		provider: N(),
		refusal: Fd.optional()
	}), Vv = z("kind", [
		Av,
		Ev,
		kv,
		Mv,
		Nv,
		jv,
		Pv,
		Fv,
		Lv,
		Rv,
		zv,
		Bv
	]);
})), Uv, Wv, Gv, Kv, qv, Jv, Yv, Xv, Zv, Qv, $v, ey, ty, ny, ry = w((() => {
	K(), ud(), Uv = V([
		"tor",
		"vpngate",
		"wireguard"
	]), Wv = N().regex(/^[A-Za-z]{2}$/, "A country is its two-letter code, like DE, US or JP.").transform((e) => e.toUpperCase()), Gv = R({
		provider: H("tor"),
		country: Wv.optional(),
		autoStart: ld
	}), Kv = R({
		provider: H("vpngate"),
		country: Wv.optional(),
		autoStart: ld
	}), qv = R({
		provider: H("wireguard"),
		config: N().min(1),
		country: Wv.optional(),
		autoStart: ld
	}), Jv = z("provider", [
		Gv,
		Kv,
		qv
	]), Yv = V([
		"up",
		"starting",
		"down",
		"unavailable",
		"failed"
	]), Xv = R({
		ip: N().describe("The address the world sees, looked up through the exit's own proxy rather than assumed."),
		country: N().optional().describe("Which country that address is in. Absent when the lookup gave an address and no country, in which case a switch is judged on the address having changed instead."),
		countryName: N().optional().describe("That country's name, spelled out.")
	}), Zv = R({
		country: N().describe("The country's code."),
		countryName: N().describe("Its name, spelled out."),
		servers: F().describe("How many servers this provider has there."),
		share: F().optional().describe("How much of the provider's actual capacity is there, from zero to one. This is what a list should be sorted by: a third of the countries on offer are one overloaded machine behind a flag, and a count of servers would rank them first.")
	}), Qv = R({
		countries: L(Zv).describe("Where this exit can put you, best-supplied first."),
		live: I().describe("Whether the provider answered, or this came from a built-in list. Said out loud rather than presenting an old list as current.")
	}), $v = R({
		id: N().describe("Which exit."),
		provider: Uv.describe("What it runs on."),
		state: Yv.describe("Whether it is carrying traffic, coming up, resting, failed, or not installable yet because its client needs a rebuild to arrive."),
		proxy: N().describe("Where to point traffic that should go through it. Fixed per exit and unchanged by a country switch, which is what lets a long job move country halfway through without reconfiguring anything."),
		country: N().optional().describe("Where it was asked to come out. Absent means the provider chose."),
		observedCountry: N().optional().describe("Where it actually comes out, as last checked. Kept separate from what was asked for, because those two disagreeing is the most useful fault signal this whole feature has."),
		ip: N().optional().describe("The address behind that observation."),
		checkedAt: F().optional().describe("When that was checked, in milliseconds, so an old reading can be shown as old."),
		interface: N().optional().describe("The network interface, for the kinds that have one."),
		since: F().optional().describe("When it came up, in milliseconds."),
		autoStart: I().describe("Whether it starts itself when the sandbox does."),
		detail: N().optional().describe("Why it failed, or a note about a healthy one.")
	}), ey = R({ links: L($v).describe("Every configured exit, with where it was asked to come out and where it actually does.") }), ty = R({ id: N().describe("Which exit.") }), ny = R({
		id: N().describe("Which exit."),
		country: Wv.optional().describe("Where to come out. Leaving it out means letting the provider choose, so clearing a country is something you can actually say rather than only setting one.")
	});
})), iy, ay, oy, sy, cy, ly, uy, dy, fy, py, my, hy, gy = w((() => {
	K(), iy = V([
		"host",
		"cloudflare",
		"github",
		"gitlab",
		"stripe"
	]), ay = V([
		"signoz",
		"outline",
		"paperless",
		"openproject",
		"invoiceninja",
		"infisical"
	]), oy = B(N(), dc([N(), F()])), sy = /^[a-zA-Z_][a-zA-Z0-9_]*$/, cy = N().min(1).max(60).regex(sy), ly = R({
		kind: H("backend").describe("Something you already have: a machine, an account with a hosting provider."),
		provider: iy.describe("Which provider it is with."),
		name: N().describe("What to call it, which is also how everything else refers to it."),
		values: oy.describe("Its settings. Anything secret is stored separately and referred to here, never written in.")
	}), uy = R({
		kind: H("service").describe("Something you want provisioned."),
		service: ay.describe("Which service."),
		name: N().describe("What to call it."),
		values: oy.describe("Its settings."),
		on: N().describe("Which of your machines to put it on."),
		expose: N().describe("How it should be reachable.")
	}), dy = R({
		kind: H("app").describe("An app of your own, built from source and deployed."),
		name: N().describe("What to call it."),
		values: oy.describe("Its settings, including the address it should answer on."),
		on: N().describe("Which of your machines to put it on."),
		expose: N().describe("How it should be reachable.")
	}), fy = z("kind", [
		ly,
		uy,
		dy
	]), py = z("kind", [
		ly.extend({ name: cy }),
		uy.extend({ name: cy }),
		dy.extend({ name: cy })
	]), my = R({ name: N().describe("Which entry, by name.") }), hy = R({ entries: L(fy).describe("Everything declared: what you have, and what you want provisioned.") }), R({
		name: cy,
		user: N().min(1),
		address: N().min(1),
		port: G().default(22),
		via: V(["direct", "cloudflared"]).default("cloudflared"),
		sshKey: N().min(1),
		cfToken: N().optional(),
		cfZone: N().optional()
	});
})), _y, vy, yy, by, xy, Sy, Cy, wy, Ty, Ey, Dy, Oy, ky, Ay, jy, My, Ny = w((() => {
	K(), _y = V([
		"wireguard",
		"fortinet",
		"ipsec"
	]), vy = V(["on", "off"]).default("on"), yy = (e) => /^Enc[X]?\s+[0-9A-Fa-f]{8,}$/.test(e.trim()), by = (e, t) => e.refine((e) => !yy(e), { message: `That looks like a value copied straight out of a FortiClient config, FortiClient encrypts it with a key tied to the machine that exported it, so it can't be used here. Enter the actual ${t} (ask whoever administers the gateway).` }), xy = R({
		provider: H("wireguard"),
		config: N().min(1),
		autoConnect: vy
	}), Sy = R({
		provider: H("fortinet"),
		server: N().min(1),
		port: G().int().min(1).max(65535).default(443),
		username: N().min(1),
		password: by(N().min(1), "password"),
		trustedCert: N().min(1).optional(),
		realm: N().min(1).optional(),
		autoConnect: vy
	}), Cy = R({
		provider: H("ipsec"),
		server: N().min(1),
		presharedKey: by(N().min(1), "pre-shared key"),
		localId: N().min(1).optional(),
		remoteId: N().min(1).optional(),
		username: N().min(1).optional(),
		password: by(N().min(1), "XAuth password").optional(),
		ikeVersion: V(["1", "2"]).default("1"),
		pfs: V(["on", "off"]).default("on"),
		dhGroup: V([
			"2",
			"5",
			"14",
			"15",
			"16",
			"19",
			"20"
		]).default("14"),
		aggressive: V(["on", "off"]).default("on"),
		routedNetworks: N().default("0.0.0.0/0").refine((e) => e.split(",").map((e) => e.trim()).every((e) => ic().safeParse(e).success || ac().safeParse(e).success), { message: "Routed networks is a comma-separated list of CIDRs, like 10.0.0.0/8,192.168.0.0/16. A single host needs its prefix too (192.168.0.168/32). Leave it at 0.0.0.0/0 to send everything through the gateway." }),
		autoConnect: vy
	}), wy = z("provider", [
		xy,
		Sy,
		Cy
	]), Ty = V([
		"connected",
		"connecting",
		"disconnected",
		"unavailable",
		"failed"
	]), Ey = R({
		id: N().describe("Which tunnel."),
		provider: _y.describe("What kind of tunnel it is."),
		state: Ty.describe("Whether it is up, dialling, resting, failed, or not installable yet because its client needs a rebuild to arrive."),
		gateway: N().optional().describe("What it dials. For display only, and never a credential."),
		interface: N().optional().describe("The network interface carrying it, once one exists."),
		address: N().optional().describe("The address the far end gave this sandbox, which is the single most useful answer to whether you are on the VPN."),
		routes: L(N()).default([]).describe("What goes through it. Everything, when the range covers the whole internet. Empty until it is up."),
		dns: L(N()).default([]).describe("Name servers it pushed, when it pushed any."),
		since: F().optional().describe("When it came up, in milliseconds. Absent unless it is."),
		autoConnect: I().describe("Whether it dials itself when the sandbox starts."),
		detail: N().optional().describe("Why it failed, or a note about a healthy one. Never a credential.")
	}), Dy = R({ links: L(Ey).describe("Every configured tunnel with its live state, read back from the operating system each time rather than remembered.") }), Oy = R({
		id: N().describe("Which tunnel to dial."),
		otp: N().min(1).optional().describe("A one-time code, where the gateway wants one. Supplied per dial and never stored; without it such a gateway refuses and says so.")
	}), ky = R({ id: N().describe("Which tunnel.") }), Ay = R({ xml: N().min(1).describe("The exported configuration file, whole. Nothing is stored: it is read and thrown away.") }), jy = R({
		id: N().describe("The id it would be added under."),
		label: N().describe("Its name as the file has it, so somebody recognises the connection they are picking."),
		provider: _y.describe("What kind of tunnel it is."),
		server: N().describe("Where it dials."),
		port: F().describe("On which port."),
		username: N().optional().describe("The username, but only when the file stored it in the clear. An encrypted one is dropped rather than guessed at."),
		description: N().optional().describe("Whatever the file said about it."),
		localId: N().optional().describe("An identity some tunnel types need, when the file stored it readably."),
		aggressive: I().optional().describe("Which negotiation mode it used."),
		pfs: I().optional().describe("Whether it asked for forward secrecy."),
		dhGroup: N().optional().describe("Which key-exchange group it used. Together with the setting above, this is what decides whether the connection can complete at all."),
		needs: L(N()).describe("What you still have to type in before it can dial. Always at least the password, because the export wraps credentials in encryption that cannot be undone here.")
	}), My = R({ connections: L(jy).describe("The connections found in the file, ready to be added one at a time.") });
})), Py, Fy, Iy, Ly, Ry, zy, By, Vy, Hy, Uy, Wy, Gy, Ky, qy, Jy, Yy, Xy, Zy, Qy, $y, eb, tb, nb, rb, ib, ab, ob, sb, cb, lb, ub, db, fb, pb, mb, hb, gb, _b, vb, yb, bb, xb, Sb = w((() => {
	K(), ry(), ud(), gy(), Ny(), Py = V([
		"devops",
		"monorepo",
		"mcp",
		"service",
		"integration",
		"cli",
		"plugin",
		"extension",
		"ssh",
		"vpn",
		"exit",
		"docker",
		"browser",
		"identity",
		"host",
		"webext",
		"agent",
		"endpoint",
		"localmodel",
		"wallet"
	]), Fy = V([
		"active",
		"pending",
		"error",
		"inactive"
	]), Iy = R({
		url: P().describe("Where the tool server answers."),
		token: N().optional().describe("The credential it needs, if any. Stored, never echoed back.")
	}), Ly = R({
		service: ay.describe("Which service to provision."),
		domain: N().min(1).describe("The address it should answer on."),
		on: N().min(1).describe("Which machine to put it on."),
		expose: N().min(1).describe("How it should be reachable.")
	}), Ry = R({ provider: H("stripe").describe("Which outside service's credential to make available to deployed apps.") }), zy = R({ provider: N().min(1).describe("Which tool to give the agent. The rest of the fields are whatever that tool's own card declares it needs, and are checked against it when you connect.") }).catchall(N()), By = R({
		url: P().describe("The repository to take the plugin from."),
		ref: N().min(1).optional().describe("A branch, tag or commit to pin to. Leave it out to follow the default branch."),
		path: N().min(1).refine((e) => !e.split("/").includes(".."), { message: "path must stay inside the checkout" }).optional().describe("Where inside the repository the plugin lives, for one that sits in a larger checkout."),
		token: N().min(1).optional().describe("A credential for a private repository. Stored, never echoed back.")
	}), Vy = R({
		url: P().describe("The repository to take the extension from."),
		ref: N().regex(/^[0-9a-f]{40}$/, "ref must be a full 40-character commit sha").describe("The exact commit to install, in full. Required rather than optional because extension code runs with your browser's trust: the owner approves precisely the code that runs, and an update is a deliberate re-install at a new commit."),
		path: N().min(1).refine((e) => !e.split("/").includes(".."), { message: "path must stay inside the checkout" }).optional().describe("Where inside the repository the extension lives, for one that sits in a larger checkout."),
		token: N().min(1).optional().describe("A credential for a private repository. Stored, never echoed back."),
		registry: P().optional().describe("Which registry this install came from, which is what update checks and security advisories are read against. Absent falls back to the official one.")
	}), Hy = z("auth", [R({
		auth: H("key").describe("Sign in with a key."),
		host: N().min(1).describe("The machine's address."),
		port: G().default(22).describe("Which port it listens on."),
		user: N().min(1).describe("Which user to connect as."),
		privateKey: N().min(1).describe("The private key, whole. Stored with tight permissions and never echoed back.")
	}), R({
		auth: H("password").describe("Sign in with a password."),
		host: N().min(1).describe("The machine's address."),
		port: G().default(22).describe("Which port it listens on."),
		user: N().min(1).describe("Which user to connect as."),
		password: N().min(1).describe("The password. Stored, never echoed back.")
	})]), Uy = R({
		gpu: V(["on", "off"]).default("off"),
		registryMirror: P().optional(),
		insecureRegistries: N().optional(),
		addressPool: N().optional()
	}), Wy = R({
		platform: N().min(1),
		username: N().optional(),
		password: N().optional(),
		identity: N().optional(),
		purpose: N().optional(),
		openedAt: N().optional(),
		exit: N().optional()
	}).catchall(N()), Gy = R({
		email: N().min(3),
		password: N().optional(),
		mailbox: N().optional(),
		loginUrl: P().optional(),
		openAccounts: V(["on", "off"]).default("off"),
		exit: N().optional()
	}), Ky = V(["on", "off"]), qy = R({
		shell: Ky.default("on"),
		write: Ky.default("off"),
		screen: Ky.default("on"),
		control: Ky.default("off"),
		sandboxes: Ky.default("off"),
		destructive: Ky.default("off"),
		roots: N().optional()
	}), Jy = qy.extend({ platform: N().min(1) }), Yy = V(["on", "off"]), Xy = R({
		read: Yy.default("on"),
		act: Yy.default("on"),
		screenshot: Yy.default("off"),
		cookies: Yy.default("off"),
		confirm: V([
			"sensitive",
			"always",
			"never"
		]).default("sensitive")
	}), Zy = Xy.extend({ platform: N().min(1) }), Qy = R({
		command: N().min(1),
		name: N().min(1).optional(),
		env: N().optional(),
		loginCommand: N().min(1).optional()
	}), $y = V(["openai", "anthropic"]), eb = R({
		baseUrl: P(),
		protocol: $y.default("openai"),
		apiKey: N().optional(),
		headers: N().optional()
	}), tb = [
		"16384",
		"32768",
		"65536",
		"131072"
	], nb = "65536", rb = 2048, ib = 1048576, ab = R({
		model: N().min(1),
		gpu: V(["on", "off"]).default("off"),
		url: P().optional(),
		context: dc([V(tb), H("custom")]).default(nb),
		contextTokens: G().int().min(rb).max(ib).optional()
	}), ob = N().regex(/^\d+(\.\d{1,6})?$/, "a USD amount like 0.50 (up to six decimals: USDC's own precision)"), sb = V(["eip155:8453", "eip155:84532"]), cb = R({
		network: sb.default("eip155:8453"),
		address: N().optional(),
		perPaymentMaxUsd: ob.default("1.00"),
		autoApproveUnderUsd: ob.default("0"),
		dailyCapUsd: ob.default("5.00"),
		allow: N().optional(),
		deny: N().optional()
	}), lb = z("kind", [
		R({
			id: Y,
			kind: H("devops"),
			config: R({})
		}),
		R({
			id: Y,
			kind: H("monorepo"),
			config: R({})
		}),
		R({
			id: Y,
			kind: H("mcp"),
			config: Iy
		}),
		R({
			id: Y,
			kind: H("service"),
			config: Ly
		}),
		R({
			id: Y,
			kind: H("integration"),
			config: Ry
		}),
		R({
			id: Y,
			kind: H("cli"),
			config: zy
		}),
		R({
			id: Y,
			kind: H("plugin"),
			config: By
		}),
		R({
			id: Y,
			kind: H("extension"),
			config: Vy
		}),
		R({
			id: Y,
			kind: H("ssh"),
			config: Hy
		}),
		R({
			id: Y,
			kind: H("vpn"),
			config: wy
		}),
		R({
			id: Y,
			kind: H("exit"),
			config: Jv
		}),
		R({
			id: Y,
			kind: H("docker"),
			config: Uy
		}),
		R({
			id: Y,
			kind: H("browser"),
			config: Wy
		}),
		R({
			id: Y,
			kind: H("identity"),
			config: Gy
		}),
		R({
			id: Y,
			kind: H("host"),
			config: Jy
		}),
		R({
			id: Y,
			kind: H("webext"),
			config: Zy
		}),
		R({
			id: Y,
			kind: H("agent"),
			config: Qy
		}),
		R({
			id: Y,
			kind: H("endpoint"),
			config: eb
		}),
		R({
			id: Y,
			kind: H("localmodel"),
			config: ab
		}),
		R({
			id: Y,
			kind: H("wallet"),
			config: cb
		})
	]), ub = R({
		state: Fy.describe("Whether it is live, still coming up, broken, or switched off."),
		detail: N().optional().describe("What is wrong, in words a person can act on."),
		code: N().optional().describe("A short marker for that reason, for anything deciding what to do about it.")
	}), db = R({
		id: N().describe("The connection's id."),
		kind: Py.describe("What sort of thing it is."),
		status: ub.describe("Whether it is working."),
		config: B(N(), dc([
			N(),
			F(),
			I()
		])).describe("Its settings, minus anything secret."),
		secrets: L(N()).default([]).describe("Which credentials it holds, by name. The values are on one route only, and it is not this one.")
	}), fb = R({
		card: N().describe("Which connection is being suggested."),
		evidence: N().describe("What was seen that prompted it: a file, a remote, printed verbatim so the claim can be checked rather than believed."),
		reason: N().describe("The same claim in words, without repeating the evidence into it."),
		prefill: B(N(), N()).describe("Settings the scan could read, to fill the form so you supply only the credential. Never a secret, even when one is sitting in a checked-in file: the suggestion points at such a file, it does not absorb what is in it.")
	}), pb = R({
		capabilities: L(db).describe("What this sandbox is connected to."),
		recommendations: L(fb).default([]).describe("Things worth connecting, worked out from what is actually in the workspace rather than from anything you configured. Re-derived on every read, so one whose evidence has moved simply stops being suggested.")
	}), mb = R({ id: N().describe("Which connection.") }), hb = R({
		id: N().describe("The connection's id."),
		kind: N().describe("What sort of thing it is."),
		config: B(N(), N()).describe("Its settings exactly as stored, credentials included. The field names are its own kind's, which the caller already knows.")
	}), gb = R({ card: N().describe("Which suggestion to stop making.") }), _b = R({
		id: N().describe("Which connection."),
		value: N().min(1).describe("The new credential. Its other settings are left alone.")
	}), vb = R({
		id: N(),
		to: N().min(1).max(60).regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/)
	}), yb = R({ session: N().describe("The terminal the sign-in is happening in. Attach to it to type.") }), bb = R({
		code: N().describe("The code."),
		secondsRemaining: F().describe("How long it lasts. Its expiring is what makes handing one to an agent safe, since the seed behind it is never revealed.")
	}), xb = R({
		checked: I().describe("Whether this connection can be tested from here at all. False is not a failure: it is 'no test exists'."),
		ok: I().describe("Whether the service answered as itself."),
		message: N().describe("What happened, in the words a person standing in front of the form needs: the service's own answer, or its refusal.")
	});
})), Cb, wb, Tb, Eb = w((() => {
	K(), Cb = R({
		url: N(),
		ref: N().optional(),
		path: N().optional()
	}), wb = (e, t, n) => {
		if (typeof e == "string") {
			let r = e.replace(/^\.\//, ""), i = n?.replace(/^\.\//, "").replace(/\/$/, "");
			return {
				url: t,
				path: i !== void 0 && i !== "" ? `${i}/${r}` : r
			};
		}
		if (typeof e != "object" || !e) return;
		let r = e, i = r.sha ?? r.ref;
		if (r.source === "github" && typeof r.repo == "string") return {
			url: `https://github.com/${r.repo}.git`,
			...i === void 0 ? {} : { ref: i }
		};
		if (r.source === "url" && typeof r.url == "string") return {
			url: r.url,
			...i === void 0 ? {} : { ref: i }
		};
		if (r.source === "git-subdir" && typeof r.url == "string" && typeof r.path == "string") return {
			url: r.url,
			path: r.path,
			...i === void 0 ? {} : { ref: i }
		};
	}, Tb = /^[0-9a-f]{40}$/;
})), Db, Ob, kb, Ab, jb, Mb, Nb = w((() => {
	K(), Eb(), Db = R({
		sha: N().regex(Tb, "must be a full lowercase commit sha"),
		url: N().min(1),
		path: N().min(1).optional(),
		policy: N().min(1),
		reviewer: N().min(1),
		reviewedAt: kl(),
		runId: N().min(1),
		deterministic: R({
			policy: N().min(1),
			scanner: N().min(1),
			version: N().min(1),
			runId: N().min(1)
		})
	}), Ob = V([
		"verified",
		"listed",
		"blocked"
	]), kb = R({
		name: N(),
		description: N().optional(),
		version: N().optional(),
		kind: V(["plugin", "extension"]).optional(),
		trust: Ob.optional(),
		trustReason: N().optional(),
		securityReview: Db.optional(),
		securityFix: I().optional(),
		category: N().optional(),
		art: N().max(4096).optional(),
		logo: N().optional(),
		icon: N().optional(),
		homepage: P().optional(),
		source: sc()
	}).superRefine((e, t) => {
		let n = e.trust ?? "listed";
		if (n === "blocked" && (e.trustReason === void 0 || e.trustReason.trim() === "") && t.addIssue({
			code: "custom",
			path: ["trustReason"],
			message: "a blocked entry must say why"
		}), n === "verified" && e.securityReview === void 0 && t.addIssue({
			code: "custom",
			path: ["securityReview"],
			message: "a verified entry must carry its security review"
		}), e.securityReview === void 0) return;
		let r = wb(e.source, "", void 0);
		(r?.ref !== e.securityReview.sha || r?.url !== e.securityReview.url || r.path !== e.securityReview.path) && t.addIssue({
			code: "custom",
			path: ["securityReview"],
			message: "must equal the exact repository, commit and subdirectory named by source"
		});
	}), R({
		name: N(),
		metadata: R({ pluginRoot: N().optional() }).optional(),
		plugins: L(kb)
	}).superRefine((e, t) => {
		let n = /* @__PURE__ */ new Set();
		for (let r = 0; r < e.plugins.length; r += 1) {
			let i = e.plugins[r]?.name;
			i !== void 0 && n.has(i) && t.addIssue({
				code: "custom",
				path: [
					"plugins",
					r,
					"name"
				],
				message: "entry names must be unique"
			}), i !== void 0 && n.add(i);
		}
	}), Ab = R({
		sha: N(),
		manifest: N(),
		bundle: N(),
		engines: N().optional()
	}), jb = R({
		name: N(),
		stars: F().int().nonnegative().optional(),
		pushedAt: N().optional(),
		checks: Ab.optional()
	}), R({
		scannedAt: N(),
		entries: L(jb)
	}), Mb = R({
		name: N(),
		description: N().optional(),
		version: N().optional(),
		kind: V(["plugin", "extension"]),
		trust: Ob,
		trustReason: N().optional(),
		securityReview: Db.optional(),
		admitted: I(),
		securityFix: I().optional(),
		category: N().optional(),
		art: N().optional(),
		logo: N().optional(),
		icon: N().optional(),
		homepage: N().optional(),
		install: Cb.optional(),
		stars: F().int().nonnegative().optional(),
		pushedAt: N().optional(),
		checks: Ab.optional()
	});
})), Pb = w((() => {
	Nb(), Eb();
})), Fb, Ib, Lb = w((() => {
	K(), Pb(), Fb = R({
		url: P().describe("The registry to read."),
		token: N().min(1).optional().describe("A credential for a private one. Sent as a body rather than in the address, so it never lands in a log.")
	}), Ib = R({
		name: N().describe("What the registry calls itself."),
		plugins: L(Mb).describe("What it lists, each with the curated decision, the resolved pointer and what a scan found upstream.")
	});
})), Rb, zb, Bb, Vb = w((() => {
	K(), Rb = R({
		url: P().describe("The repository to ask. http(s) only: an ssh remote would stop on a host-key prompt nobody can answer."),
		token: N().min(1).optional().describe("A credential for a private one. Sent as a body rather than in the address, so it never lands in a log. A form editing a live connection has never been shown its token: it sends the VAULTED marker here and names the connection in `keeping`, so a private repository still answers without anyone retyping a key."),
		keeping: N().min(1).optional().describe("Which connection a VAULTED token belongs to. Ignored when a real token is sent.")
	}), zb = R({
		name: N().describe("The branch or tag as a person names it: `main`, `v1.4.0`."),
		kind: V(["branch", "tag"]),
		sha: N().regex(/^[0-9a-f]{40}$/).describe("The commit it points at. An annotated tag is peeled here, so this is always a commit, never a tag object.")
	}), Bb = R({
		defaultBranch: N().optional().describe("The branch the remote advertises as HEAD, the one to offer first. Absent when the remote advertises no symref."),
		refs: L(zb).describe("Every branch the remote advertises, then every tag. Which to offer first is the reader's question, not this one's.")
	});
})), Hb, Ub = w((() => {
	J(), Hv(), Sb(), Lb(), Vb(), $(), Hb = {
		list: q.route({
			method: "GET",
			path: "/capabilities",
			summary: "Everything this sandbox is connected to",
			description: "Each connection with its live state, the settings that are safe to show, and the names of the credentials it holds. The values of those credentials are never in the answer, on any route but one."
		}).output(pb),
		add: q.route({
			method: "POST",
			path: "/capabilities",
			summary: "Connect something, or change a connection",
			description: "Writes a connection and streams the work of applying it, because some kinds provision real infrastructure and take a while. Sending an id that already exists edits that connection: this is the edit as well as the create. Since a caller is never shown stored credentials, it marks the ones it is leaving alone and the daemon fills them in, which is the only way to change one setting without retyping a key."
		}).input(lb).output(Mu(Tv)),
		probe: q.route({
			method: "POST",
			path: "/capabilities/probe",
			summary: "Test a connection's settings without saving them",
			description: "Dials the service the way this connection would and hands back what it said, before anything is written. The answer is the service's own confirmation or its exact refusal, so a wrong token or an unreachable host is found on the form rather than on a card afterwards."
		}).input(lb).output(xb),
		remove: q.route({
			method: "DELETE",
			path: "/capabilities/{id}",
			summary: "Disconnect something",
			description: "Tears a connection down. The kinds that own real infrastructure refuse, because deleting those would be losing data rather than losing a connection."
		}).input(mb).output(Z),
		rename: q.route({
			method: "POST",
			path: "/capabilities/{id}/rename",
			summary: "Rename a connection",
			description: "Carries everything the old name keyed across with it: a browser profile and its logins, an enrolled machine, an extension's copy of its source. Removing and re-adding would lose exactly the state that made the connection worth keeping. Kinds whose name is part of what they are refuse."
		}).input(vb).output(Z),
		setSecret: q.route({
			method: "POST",
			path: "/capabilities/{id}/secret",
			summary: "Replace a stored credential",
			description: "Swaps one connection's key or token for a new one and re-applies it, without touching any of its other settings."
		}).input(_b).output(Z),
		status: q.route({
			method: "GET",
			path: "/capabilities/{id}/status",
			summary: "Re-check one connection",
			description: "Probes a single connection right now, for a screen that wants to refresh one row rather than the whole list."
		}).input(mb).output(ub),
		connection: q.route({
			method: "GET",
			path: "/capabilities/{id}/connection",
			summary: "A connection's settings, credentials included",
			description: "The one call that hands back stored secrets, so an extension's own backend can dial the service behind a connection. Never answered for a signed-in person: only a machine credential reaches it, and an extension's only if its manifest asked for this route out loud at install time."
		}).input(mb).output(hb),
		marketplace: q.route({
			method: "POST",
			path: "/capabilities/marketplace",
			summary: "Read a plugin marketplace",
			description: "Resolves a plugin marketplace source into the list of connections you could install from it."
		}).input(Fb).output(Ib),
		refs: q.route({
			method: "POST",
			path: "/capabilities/refs",
			summary: "The versions a repository offers",
			description: "Asks a git remote what it advertises and hands back every branch and tag with the commit it points at, plus which branch is its default. Nothing is cloned and nothing is written, so this is cheap enough to answer a form as someone types a repository into it."
		}).input(Rb).output(Bb),
		dismiss: q.route({
			method: "DELETE",
			path: "/capabilities/recommendations/{card}",
			summary: "Stop suggesting this connection",
			description: "Not needed, for now. Nothing is torn down. The suggestion comes back if what prompted it in the workspace changes, because what is remembered is the evidence, not the refusal."
		}).input(gb).output(Z),
		login: q.route({
			method: "POST",
			path: "/capabilities/{id}/login",
			summary: "Sign in to a connection by hand",
			description: "Opens the connection's own sign-in in a terminal a person can type into, for the flows that need a code pasted or a device confirmed. The answer names the terminal to attach to."
		}).input(mb).output(yb),
		otp: q.route({
			method: "GET",
			path: "/capabilities/{id}/otp",
			summary: "Mint a one-time code",
			description: "Generates a single two-factor code from a stored seed. The one credential-adjacent read an agent is allowed, and it is safe because a code expires in seconds and never reveals the seed, so an agent can answer a prompt without ever holding the factor."
		}).input(mb).output(bb)
	};
})), Wb, Gb, Kb, qb, Jb, Yb, Xb, Zb = w((() => {
	K(), Wb = R({
		query: N().min(2).max(512).describe("What to look for. Plain words, a pattern, a symbol name, or a question."),
		mode: V([
			"q",
			"find",
			"files",
			"def",
			"refs",
			"sym",
			"ast"
		]).optional().describe("Narrow the search to one kind: plain text, filenames, definitions, references, symbols, or code structure. Leave it out to blend them, which also answers a question asked in words."),
		includeIgnored: El().optional().describe("Search inside installed packages and other ignored folders too."),
		literal: El().optional().describe("Treat the query as fixed text rather than a pattern."),
		word: El().optional().describe("Match whole words only."),
		caseSensitive: El().optional().describe("Whether capitals matter. Off means they do not, rather than being guessed at from the query."),
		include: N().max(512).optional().describe("Which files to ask, in the same grammar an editor's files-to-include box takes: comma-separated patterns, matched at any depth unless anchored, a leading exclamation mark excluding instead."),
		limit: G().int().positive().optional().describe("How many results to return."),
		after: N().optional().describe("Resume from the cursor a previous answer handed back.")
	}), Gb = R({
		kind: V([
			"def",
			"text",
			"sem",
			"bm25",
			"rerank",
			"path",
			"import",
			"call",
			"type",
			"write",
			"fuzzy",
			"heuristic"
		]).describe("Why this line matched: the literal text, its meaning, the path, a definition, a call, and so on. Several kinds can agree on one line."),
		score: F().optional().describe("How strongly that reason applied.")
	}), Kb = R({
		start: F().describe("First character of the match within the line."),
		end: F().describe("One past the last.")
	}), qb = R({
		line: F().describe("Which line, counting from one."),
		text: N().describe("The line itself."),
		spans: L(Kb).describe("Where in the line the matches are, so you can highlight without searching again. Empty when the whole line is the match rather than part of it."),
		tags: L(Gb).describe("Why it matched."),
		context: N().optional().describe("What it sits inside: the function, the class, the heading. Often enough that you need not open the file.")
	}), Jb = R({
		path: N().describe("The file."),
		score: F().describe("How well it matched. Groups arrive best first, never in path order."),
		hits: L(qb).describe("The matching lines in it."),
		capped: I().optional().describe("This file had more matches than are kept per file, so the count is a floor. Say fifty-plus rather than fifty.")
	}), Yb = R({
		state: V([
			"fresh",
			"building",
			"stale"
		]).describe("Whether the index matches what is on disk, is still filling, or has fallen behind."),
		ageMs: F().optional().describe("How long since it last matched the disk, in milliseconds."),
		progress: F().optional().describe("How far through building it is, from zero to one."),
		behind: F().optional().describe("How many files it has not caught up with. Worth showing, because the word stale on its own reads as a warning about the answer, which it almost never is.")
	}), Xb = R({
		mode: N().describe("Which kind of search actually ran, which matters when you let it choose."),
		total: F().describe("Matching lines across the whole workspace, not just this page."),
		files: F().describe("Files the query matched in total."),
		shown: F().describe("How many of those lines are on this page."),
		groups: L(Jb).describe("The results, grouped by file, best first."),
		freshness: Yb.describe("Whether the index behind the answer is up to date."),
		truncated: I().describe("This page is not all of it. Use the cursor."),
		partial: I().optional().describe("At least one file had more matches than are kept per file, so the total is a floor. Different from the page being truncated: a complete page can still count partially."),
		cursor: N().optional().describe("Pass this back as `after` to get the next page."),
		hint: N().optional().describe("A suggestion for getting a better answer out of this query."),
		note: N().optional().describe("What the engine did that you did not ask for: a pattern rerun as plain text because it was not valid, escapes rewritten, a language filter that matched nothing."),
		related: L(N()).optional().describe("Places next door to the best results: where each is defined, and whatever calls it most."),
		candidates: L(N()).optional().describe("Ranked places that scored but did not make the page, best first. The answer often sits at rank five to thirteen, so this saves paging through to find out."),
		features: L(N()).optional().describe("Which stages of the search were switched off for this run. Absent means all of them ran.")
	});
})), Qb, $b, ex, tx, nx = w((() => {
	K(), Zb(), Qb = R({
		repo: N().min(1).describe("Which repository, using the same ids the git routes take."),
		since: N().max(16).optional().describe("How far back to count changes, written as a span such as 2d, 12h, 1w or 3m. Leave it out for all of history."),
		limit: G().int().positive().max(200).optional().describe("How many files and modules to rank. A leaderboard rather than an inventory: past a screenful the ranking stops being the point.")
	}), $b = R({
		path: N(),
		commits: F(),
		adds: F(),
		dels: F(),
		complexity: F(),
		score: F(),
		latestMs: F()
	}), ex = R({
		path: N(),
		exports: F()
	}), tx = R({
		repo: N().describe("Which repository this describes."),
		totals: R({
			files: F().describe("Files counted."),
			symbols: F().describe("Named things they export."),
			complexity: F().describe("Branch points across all of them added up."),
			hotspots: F().describe("How many files qualify as hotspots at all. The list below is capped; this is not.")
		}).describe("Counts anybody could recount in the files themselves. Deliberately no single maintainability grade: those cannot be checked and are not comparable between projects."),
		hotspots: L($b).describe("Files that change often and are complicated at the same time, worst first."),
		modules: L(ex).describe("The parts of the codebase the rest of it leans on most."),
		freshness: Yb.describe("Whether the index these numbers were read from is up to date.")
	});
})), rx, ix, ax, ox, sx, cx, lx, ux, dx, fx, px, mx, hx, gx, _x, vx, yx, bx, xx, Sx, Cx, wx, Tx, Ex = w((() => {
	K(), nx(), rx = [
		"outdated",
		"audit",
		"knip",
		"jscpd",
		"ui",
		"bundle",
		"mutation"
	], ix = V(rx), ax = R({
		name: N().describe("The dependency."),
		current: N().describe("What you are on."),
		latest: N().describe("What is published."),
		kind: V([
			"major",
			"minor",
			"patch"
		]).describe("How far apart those are. This is not one number because forty patch releases behind is a morning's work and one major version is a project."),
		section: N().describe("Which part of the manifest declares it. A major version behind on a build-time tool is a different risk from one that ships.")
	}), ox = R({
		name: N().describe("The dependency it concerns."),
		severity: V([
			"critical",
			"high",
			"moderate",
			"low",
			"info"
		]).describe("How bad it is said to be."),
		title: N().describe("What it is, in one line. No scoring vector and no reference list: those are for reading on the advisory's own page, and carrying them would put a kilobyte of prose per finding on every poll."),
		patched: N().optional().describe("Which versions fix it. Absent means no fix has been published, which is exactly when nothing should offer to upgrade and something should say so instead."),
		dev: I().describe("Whether it only reaches build-time tooling, which is a different problem from one that reaches what you ship.")
	}), sx = R({
		files: F().int().nonnegative().describe("Files nothing reaches."),
		exports: F().int().nonnegative().describe("Exported things nothing uses."),
		types: F().int().nonnegative().describe("Types nothing uses."),
		dependencies: F().int().nonnegative().describe("Declared dependencies nothing imports."),
		devDependencies: F().int().nonnegative().describe("The same, for build-time ones."),
		sample: L(N()).describe("A handful of the files, so a reader need not take the count on faith. Counts and a sample rather than the whole list, because an agent re-measures against the live tree anyway.")
	}), cx = R({
		percentage: F().describe("How much of the scanned code is duplicated. A share rather than a count, because a count grows with the repository and would mean something different every quarter."),
		clones: F().int().nonnegative().describe("How many duplicated stretches were found."),
		top: L(R({
			lines: F().int().nonnegative().describe("How long the duplicated stretch is."),
			first: N().describe("One of the two places."),
			second: N().describe("The other.")
		})).describe("The largest of them.")
	}), lx = R({
		components: L(N()).describe("The interface's own source files, with tests, stories and generated output left out."),
		bypasses: L(R({
			path: N().describe("The file."),
			count: F().int().positive().describe("How many times, in that file.")
		})).describe("Where the design system was routed around and a value hard-coded instead. Counted per file, because a reader deciding what to open is served by a file and a number, not by eleven snippets."),
		idioms: L(R({
			id: N().describe("Which outdated idiom. Looked up rather than listed here, so a sandbox one version behind can still report one this list has never heard of."),
			files: L(N()).describe("The files still on it.")
		})).describe("Files still written the way their framework has since replaced.")
	}), ux = R({
		dir: N().describe("Which folder was measured. Read from build output already on disk rather than by building, so this is sometimes a commit behind and never leaves anything in your working tree."),
		totalBytes: F().int().nonnegative().describe("The whole thing, raw."),
		totalGzip: F().int().nonnegative().describe("The whole thing, compressed. The ratio between the two is the difference between big and big-and-incompressible, which are different problems."),
		assets: L(R({
			path: N().describe("The file."),
			bytes: F().int().nonnegative().describe("Its raw size."),
			gzip: F().int().nonnegative().describe("Its compressed size.")
		})).describe("What is in it, piece by piece.")
	}), dx = R({
		score: F().describe("The share of injected faults the suite caught. Not a coverage figure: coverage says a line ran, this says an assertion depended on it."),
		killed: F().int().nonnegative().describe("Faults the suite caught."),
		survived: F().int().nonnegative().describe("Faults it did not: code that can be broken with every test still green."),
		inconclusive: F().int().nonnegative().describe("Faults it never got a verdict on, because they would not compile or were configured out. Left out of the score entirely, since neither answer is known."),
		survivors: L(R({
			file: N().describe("Where it is."),
			line: F().int().nonnegative().describe("Which line."),
			mutator: N().describe("What was changed, in the mutation tool's own vocabulary."),
			replacement: N().describe("What it became, so a reader can judge whether it matters without opening the file.")
		})).describe("The surviving faults themselves. A percentage is a mood; a named line with the change that went unnoticed is a morning's work.")
	}), fx = V([
		"ok",
		"unavailable",
		"failed"
	]), px = z("id", [
		R({
			id: H("outdated"),
			packages: L(ax)
		}),
		R({
			id: H("audit"),
			advisories: L(ox)
		}),
		R({
			id: H("knip"),
			deadCode: sx
		}),
		R({
			id: H("jscpd"),
			duplication: cx
		}),
		R({
			id: H("ui"),
			scan: lx
		}),
		R({
			id: H("bundle"),
			bundle: ux
		}),
		R({
			id: H("mutation"),
			mutation: dx
		})
	]), mx = R({
		id: ix.describe("Which measurement this is."),
		state: fx.describe("Whether the tool ran and reported, is not part of this repository at all, or broke. The middle one is not evidence of health: the check simply cannot be made here."),
		ranAt: F().describe("When it last finished, in milliseconds, which is what its age is measured from."),
		tookMs: F().int().nonnegative().describe("How long it took. Worth knowing before asking for it again: some of these run for minutes."),
		facts: px.optional().describe("What it found, including finding nothing, which is a real answer and the one that keeps a chore quiet."),
		reason: N().optional().describe("Why it broke, quoted from the tool rather than summarised, or, when it never ran, what is missing. Never a sentence built from the check's own name, which would have an unmeasured check claiming there is nothing to measure.")
	}), hx = R({
		dir: N().describe("Where the package lives."),
		name: N().describe("What it declares itself as."),
		engines: B(N(), N()).optional().describe("Which runtime versions it says it needs, verbatim."),
		dependencies: L(N()).describe("What it depends on."),
		devDependencies: L(N()).describe("What it needs only to build."),
		documented: I().describe("Whether it has a README, which in this workspace is what a package's own documentation is.")
	}), gx = R({
		docs: L(N()).describe("The repository's own architecture documents, when it has any. Their existence is the question: a repository with none has never been through the documentation flow at all."),
		dockerfiles: L(N()).describe("Container definitions in it."),
		ci: L(N()).describe("Pipeline definitions in it."),
		lockfile: I().describe("Whether dependencies are pinned to exact versions, which is what makes a security audit mean anything."),
		packageManifest: I().describe("Whether it is a JavaScript project at all. A Rust or Go repository has no majors to be behind on, and offering it those checks would be this surface guessing at what it is looking at."),
		deps: L(N()).describe("Every dependency name declared anywhere in the repository. Names rather than a verdict about which framework this is, because that judgement belongs to whatever reads this, not to a sandbox baked months ago.")
	}), _x = R({
		packages: L(hx).describe("Each package in the repository, as its own manifest declares it."),
		shape: gx.describe("What the repository is made of, which decides whether a given chore is even a sensible question to ask of it."),
		hotspots: L($b).describe("Files that change often and are complicated at once, capped tight: a chore only asks whether something has entered the top of the ranking."),
		keyModules: L(ex).describe("The parts the rest of the code leans on most, capped the same way."),
		totals: R({
			files: F().describe("Files counted."),
			symbols: F().describe("Named things they export."),
			complexity: F().describe("Branch points added up."),
			hotspots: F().describe("How many files qualify as hotspots at all.")
		}).describe("The repository in numbers."),
		indexed: I().describe("Whether the index these rankings came from is finished. Nothing should act on a half-built one.")
	}), vx = V([
		"acted",
		"reported",
		"clean"
	]), yx = R({
		repo: N().describe("Which repository."),
		chore: N().describe("Which chore."),
		ranAt: F().describe("When it ran, in milliseconds."),
		runId: N().describe("The conversation that ran it, so its whole record can be opened."),
		outcome: vx.describe("What it concluded: it did something, it wrote something down, or it looked and found the finding to be false. That last one matters most, or the same turn starts again for ever."),
		digest: N().describe("A fingerprint of the evidence standing at the time. A chore whose evidence has since changed is due again on its own merits; one whose evidence has not stays quiet."),
		snoozedUntil: F().optional().describe("Not until then, in milliseconds. The chore stays visible and stays out of the badge. Different from switching it off, which is a setting.")
	}), bx = R({
		repo: N().describe("Which repository."),
		id: ix.describe("Which measurement."),
		askedAt: F().describe("When it was asked for, in milliseconds, so one still waiting can say how long it has waited."),
		startedAt: F().optional().describe("When it actually began. Absent while it is queued behind another, which is a real and common state: there is one lane for the whole sandbox.")
	}), xx = R({
		repos: L(R({
			repo: N().describe("Which repository."),
			probes: L(mx).describe("The expensive measurements, served from a cache with an age on each rather than run on demand."),
			signals: _x.describe("The cheap facts, worked out fresh every time.")
		})).describe("Every repository's standing evidence. One answer for all of them, because a badge polls this on a timer and one request per repository is the kind of poll that shows up in a battery graph."),
		ledger: L(yx).describe("What has already been done about all of it."),
		running: L(bx).describe("What is being measured right now and what is waiting behind it. Part of this read rather than a route of its own, because a screen that had to ask twice would show the two halves disagreeing."),
		node: N().describe("The runtime version this sandbox is actually running, read off the process rather than off a manifest, because what is installed is the fact that matters and a declared range is a wish.")
	}), Sx = R({
		repo: N().min(1).describe("Which repository."),
		id: ix.describe("Which measurement to retake, ahead of its usual schedule.")
	}), Cx = yx, wx = R({
		id: N().describe("Which check."),
		label: N().describe("What it is called."),
		status: V([
			"pass",
			"warn",
			"fail"
		]).describe("How it went. A warning is a real third answer rather than a soft failure."),
		detail: N().describe("What it found.")
	}), Tx = R({ checks: L(wx).describe("Everything that can be checked from the extension's own files, for an author about to publish.") });
})), Dx, Ox = w((() => {
	J(), Ex(), $(), Dx = {
		list: q.route({
			method: "GET",
			path: "/chores",
			summary: "What maintenance the repos are asking for",
			description: "Every repo's standing evidence in one read: what the last measurement found and how old it is, the cheap signals that are always current, and what has already been decided about each."
		}).output(xx),
		probe: q.route({
			method: "POST",
			path: "/chores/probe",
			summary: "Measure one repo again now",
			description: "Re-runs a single check without waiting for it to go stale. Answers immediately: the work happens in the background and the result turns up in the next read, because some of these sweeps outlive any sane request."
		}).input(Sx).output(Z),
		record: q.route({
			method: "POST",
			path: "/chores/ledger",
			summary: "Record a verdict, or snooze one",
			description: "Writes what somebody concluded about one repo's chore, replacing the previous verdict. A chore has one current answer, not a growing pile of times it was fine."
		}).input(Cx).output(Z)
	};
})), kx, Ax = w((() => {
	J(), Kg(), $(), kx = {
		runs: q.route({
			method: "GET",
			path: "/ci/runs",
			summary: "Pipeline runs across the repos",
			description: "What the forges are reporting for every workspace repo that has a remote, served from a cache and filled in on demand. Repos whose notifications are not wired up say so."
		}).output(Bg),
		rerun: q.route({
			method: "POST",
			path: "/ci/runs/rerun",
			summary: "Run a pipeline again",
			description: "Asks the forge to re-run one pipeline. The daemon only passes the request along."
		}).input(Vg).output(Z),
		cancel: q.route({
			method: "POST",
			path: "/ci/runs/cancel",
			summary: "Cancel a pipeline run",
			description: "Asks the forge to stop a run in progress."
		}).input(Vg).output(Z),
		jobs: q.route({
			method: "POST",
			path: "/ci/runs/jobs",
			summary: "The steps inside one pipeline run",
			description: "Each job in a run with its outcome, which is where you look to find out what actually broke."
		}).input(Vg).output(Rg),
		fix: q.route({
			method: "POST",
			path: "/ci/fix",
			summary: "Put an agent on a broken pipeline",
			description: "Opens a fresh isolated conversation already holding the failure: which job, which repo, what it said. The answer names the conversation so you can open it."
		}).input(Hg).output(Ug)
	};
})), jx, Mx, Nx, Px = w((() => {
	J(), K(), Sb(), df(), jx = V([
		"unknown",
		"healthy",
		"degraded",
		"unavailable"
	]), Mx = R({
		available: I(),
		allowance: F().int().nonnegative(),
		used: F().int().nonnegative(),
		remaining: F().int().nonnegative(),
		health: jx,
		resetsAt: N().optional(),
		retryAt: N().optional(),
		servedModel: N().optional()
	}), Nx = {
		models: q.route({
			method: "GET",
			path: "/endpoints/{id}/models",
			summary: "Models a connected server offers",
			description: "Asks one configured model server what it serves. There is no built-in list and no fallback: what a server offers is knowable only by asking it, so an empty answer is the honest report that we could not."
		}).input(mb).output(uf),
		trial: q.route({
			method: "GET",
			path: "/endpoints/trial/status",
			summary: "What is left of the free trial",
			description: "The allowance, what has been used, when it resets, and which model actually answered the last message. Not being available is the ordinary answer rather than a failure: most sandboxes run against a platform that offers no trial at all."
		}).output(Mx)
	};
})), Fx, Ix = w((() => {
	J(), Hv(), ry(), $(), Fx = {
		list: q.route({
			method: "GET",
			path: "/exit",
			summary: "Ways to come out somewhere else",
			description: "Every configured exit with its live state, the country it was asked to appear in, and the country it actually appears in. Those last two disagreeing is the whole reason this reports both."
		}).output(ey),
		countries: q.route({
			method: "GET",
			path: "/exit/{id}/countries",
			summary: "Countries one exit can reach",
			description: "Where this exit can put you, ranked by how much capacity is really there. Asked of the provider when it answers and taken from a built-in list when it does not, and the answer says which of those you got."
		}).input(ty).output(Qv),
		start: q.route({
			method: "POST",
			path: "/exit/{id}/start",
			summary: "Bring an exit up",
			description: "Starts the exit in the country it was configured for. Streamed, because a first start fetches a catalogue, raises a tunnel and then checks the address, which takes tens of seconds on the free providers and can fail at each step with something worth reading. Starting one that is already up simply says so."
		}).input(ty).output(Mu(Tv)),
		use: q.route({
			method: "POST",
			path: "/exit/{id}/use",
			summary: "Move to another country",
			description: "Switches the exit's country, starting it first if it was down. It ends by checking where the world actually sees you and fails if that does not match what you asked for. A switch that quietly left your traffic where it was is the exact failure this whole feature exists to rule out."
		}).input(ny).output(Mu(Tv)),
		rotate: q.route({
			method: "POST",
			path: "/exit/{id}/rotate",
			summary: "Take a different address, same country",
			description: "Swaps to another address in the country you are already in. Fails if the address does not actually change, which on a small pool it sometimes cannot."
		}).input(ty).output(Mu(Tv)),
		check: q.route({
			method: "POST",
			path: "/exit/{id}/check",
			summary: "Where the world sees you right now",
			description: "Looks up the address and country as seen through this exit. Cheap, and the honest answer to whether you are really where you meant to be, which is what every other call here is judged against."
		}).input(ty).output(Xv),
		stop: q.route({
			method: "POST",
			path: "/exit/{id}/stop",
			summary: "Take an exit down",
			description: "Shuts the exit off. One that was already down is fine: the promise is that it is not up afterwards, not that it was up before."
		}).input(ty).output(Z)
	};
})), Lx = w((() => {})), Rx = w((() => {})), zx, Bx, Vx = w((() => {
	K(), zx = 4096, Bx = {
		art: N().max(zx).optional().describe("This extension's own mark, as a complete SVG document inline: the tier an author controls fully. Give it a viewBox and let it fill its own square edge to edge; it is drawn as the tile, not as a glyph on a plate. Kept as readable SVG text (not base64) so a registry reviewer can see what they are publishing, drawn inert so it cannot script the page, and capped at 4 KB. Anything that does not parse as SVG falls back to `logo`, then `icon`, then initials."),
		logo: N().optional().describe("A simple-icons slug, fetched from a CDN: right for standing in for somebody else's product. Add a \"/<hex>\" suffix to force a colour for a mark that vanishes against the surface it lands on. Unreachable in an offline sandbox, so it falls back to `icon`, then to initials."),
		icon: N().optional().describe("A name from the host's own icon set, drawn when no simple-icons slug fits. It ships in the image, follows the theme and costs no request: what actually carries a first-party extension. An unknown name falls back to initials rather than to a hole.")
	};
})), Hx, Ux, Wx = w((() => {
	K(), Hx = R({ path: N().optional().describe("Relative to the extension checkout. Absent ⇒ the checkout root.") }), Ux = {
		name: "agent",
		description: "Declare that this checkout is also a Claude Code plugin, so the agent picks up its skills, agents, hooks, commands and MCP servers each turn. The daemon hands the directory to the plugin loader and never parses what is in it.",
		schema: Hx
	};
})), Gx, Kx, qx = w((() => {
	K(), Gx = R({
		id: N().regex(/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/).describe("Prefills the automation name, and is what \"does one of these exist already\" is asked by, so spell it as an id, not as prose."),
		title: N().min(1),
		logo: N().min(1).optional().describe("A simple-icons slug for the card."),
		icon: N().min(1).optional().describe("A name from the host's icon set, drawn when no simple-icons slug fits."),
		requires: L(N().min(1)).optional().describe("Capability providers that make this template work: any one connected is enough (fixing CI rides github or gitlab). Omitted ⇒ nothing to connect, so it is always offered."),
		trigger: R({
			kind: V([
				"schedule",
				"event",
				"listener",
				"workspace"
			]),
			cron: N().min(1).optional(),
			provider: N().min(1).optional(),
			eventType: N().min(1).optional(),
			event: N().min(1).optional()
		}).describe("What wakes it. Checked against the real trigger schema when the daemon builds the catalogue, so a template can never offer one that would be refused."),
		guard: N().min(1).optional().describe("A condition that must hold before the turn runs: what makes a template safe to leave switched on."),
		holdForSeconds: F().int().positive().optional().describe("Wait this long and coalesce repeats, rather than firing on every event."),
		prompt: N().min(1).describe("The turn this starts. You own the trigger's payload vocabulary, so you own the prompt that reads it."),
		note: N().min(1).optional(),
		setup: N().min(1).optional().describe("What the user must do themselves before this can work."),
		description: N().min(1).optional(),
		offer: V(["create", "configure"]).optional().describe("Absent ⇒ it waits in the gallery, where you go once you know what you want. `create` puts a card on the page that makes it, switched off, in one click. `configure` puts one there that opens the dialog prefilled, for a template that cannot work unconfigured. Both are for what a user would never think to go looking for: mark everything as offered and you have rebuilt the gallery with extra steps."),
		chore: I().optional().describe("Whether what this makes watches THIS codebase rather than the outside world. Declared rather than read off the trigger: a nightly dependency sweep and a nightly Stripe poll are both schedules.")
	}), Kx = {
		name: "automationTemplates",
		description: "Starting points this pack offers in the automation composer, a trigger, a prompt written for that trigger's payload, and whatever guard makes it safe to leave on. Declared by whoever knows the service rather than by the composer, so they appear when your pack is installed and disappear with it. Pure prefill: creating one makes an ordinary automation.",
		schema: L(Gx)
	};
})), Jx, Yx = w((() => {
	K(), Jx = {
		name: "bin",
		description: "A checkout-relative directory of executables the daemon puts on the agent's PATH every turn, how you ship the agent a command-line tool. The files are the approved code themselves: they ride the pinned checkout, and the daemon only adds the directory to PATH.",
		schema: N().min(1).refine((e) => !e.split("/").includes(".."), { message: "bin must stay inside the checkout" })
	};
})), Xx, Zx, Qx, $x, eS, tS, nS, rS, iS = w((() => {
	Xx = class extends Error {
		source;
		offset;
		constructor(e, t, n) {
			super(`${e} (in \`${t}\` at ${n})`), this.source = t, this.offset = n, this.name = "WhenSyntaxError";
		}
	}, Zx = [
		"&&",
		"||",
		"==",
		"!=",
		">=",
		"<=",
		">",
		"<",
		"(",
		")",
		"[",
		"]",
		",",
		"!"
	], Qx = /[A-Za-z_]/, $x = /[A-Za-z0-9_.-]/, eS = (e) => {
		let t = [], n = 0;
		for (; n < e.length;) {
			let r = e[n] ?? "";
			if (r.trim() === "") {
				n += 1;
				continue;
			}
			if (r === "'" || r === "\"") {
				let i = e.indexOf(r, n + 1);
				if (i === -1) throw new Xx("unterminated string", e, n);
				t.push({
					kind: "literal",
					value: e.slice(n + 1, i),
					at: n
				}), n = i + 1;
				continue;
			}
			let i = Zx.find((t) => e.startsWith(t, n));
			if (i !== void 0) {
				t.push({
					kind: "punct",
					text: i,
					at: n
				}), n += i.length;
				continue;
			}
			if (/[0-9]/.test(r)) {
				let r = /^[0-9]+(\.[0-9]+)?/.exec(e.slice(n))?.[0] ?? "";
				t.push({
					kind: "literal",
					value: Number(r),
					at: n
				}), n += r.length;
				continue;
			}
			if (Qx.test(r)) {
				let r = n + 1;
				for (; r < e.length && $x.test(e[r] ?? "");) r += 1;
				let i = e.slice(n, r);
				i === "true" || i === "false" ? t.push({
					kind: "literal",
					value: i === "true",
					at: n
				}) : i === "in" || i === "not" ? t.push({
					kind: "punct",
					text: i,
					at: n
				}) : t.push({
					kind: "key",
					text: i,
					at: n
				}), n = r;
				continue;
			}
			throw new Xx(`unexpected character ${JSON.stringify(r)}`, e, n);
		}
		return t;
	}, tS = class {
		tokens;
		source;
		index = 0;
		constructor(e, t) {
			this.tokens = e, this.source = t;
		}
		parse() {
			let e = this.or(), t = this.tokens[this.index];
			if (t !== void 0) throw new Xx("unexpected trailing input", this.source, t.at);
			return e;
		}
		or() {
			let e = this.and();
			if (!this.at("||")) return e;
			let t = [e];
			for (; this.eat("||");) t.push(this.and());
			return {
				kind: "or",
				operands: t
			};
		}
		and() {
			let e = this.unary();
			if (!this.at("&&")) return e;
			let t = [e];
			for (; this.eat("&&");) t.push(this.unary());
			return {
				kind: "and",
				operands: t
			};
		}
		unary() {
			if (this.eat("!")) return {
				kind: "not",
				operand: this.unary()
			};
			if (this.eat("(")) {
				let e = this.or();
				return this.expect(")"), e;
			}
			let e = this.tokens[this.index];
			if (e?.kind !== "key") throw new Xx("expected a context key", this.source, e?.at ?? this.source.length);
			return this.index += 1, this.tail(e.text);
		}
		tail(e) {
			for (let t of [
				"==",
				"!=",
				">=",
				"<=",
				">",
				"<"
			]) if (this.eat(t)) return {
				kind: "compare",
				key: e,
				op: t,
				value: this.literal()
			};
			return this.eat("in") ? {
				kind: "member",
				key: e,
				values: this.list(),
				negated: !1
			} : this.at("not") ? (this.index += 1, this.expect("in"), {
				kind: "member",
				key: e,
				values: this.list(),
				negated: !0
			}) : {
				kind: "has",
				key: e
			};
		}
		list() {
			this.expect("[");
			let e = [this.literal()];
			for (; this.eat(",");) e.push(this.literal());
			return this.expect("]"), e;
		}
		literal() {
			let e = this.tokens[this.index];
			if (e?.kind !== "literal") throw new Xx("expected a literal value", this.source, e?.at ?? this.source.length);
			return this.index += 1, e.value;
		}
		at(e) {
			let t = this.tokens[this.index];
			return t?.kind === "punct" && t.text === e;
		}
		eat(e) {
			return this.at(e) ? (this.index += 1, !0) : !1;
		}
		expect(e) {
			if (!this.eat(e)) throw new Xx(`expected \`${e}\``, this.source, this.tokens[this.index]?.at ?? this.source.length);
		}
	}, nS = (e) => new tS(eS(e), e).parse(), rS = (e) => {
		try {
			return nS(e), !0;
		} catch {
			return !1;
		}
	};
})), aS, oS, sS, cS, lS, uS, dS = w((() => {
	iS(), K(), Vx(), aS = R({
		key: N().regex(/^[a-zA-Z][a-zA-Z0-9]*$/),
		label: N().min(1),
		placeholder: N().optional(),
		secret: I().optional().describe("Mask it, and never echo it back."),
		optional: I().optional(),
		multiline: I().optional(),
		advanced: I().optional().describe("Fold this field behind the form's Advanced disclosure: for answers whose default is right for nearly everyone. The disclosure opens by itself while any advanced field holds a non-default value, so an edit never hides live settings."),
		boolean: I().optional().describe("Render it as a switch, carrying \"on\"/\"off\". For an opt-in EXTRA rather than a decision: a two-option picker says the same thing but presents a choice the user must make to proceed, sized like the required fields around it. A switch always holds a value, so a field like this never blocks a submit."),
		hint: N().optional().describe("A line under this control, for what the label alone cannot say: a host requirement, when a value takes effect. The card's own `hint` speaks for the whole card; this one is bound to the field it qualifies."),
		rebuild: I().optional().describe("This value only takes effect after the sandbox is rebuilt, because it rides the image overlay. Shown as a chip beside the label: two switches side by side, identical in every visible way, can otherwise cost five seconds or five minutes with no way to tell which."),
		default: N().optional(),
		options: L(R({
			value: N(),
			label: N()
		})).optional().describe("Turns the field into a select."),
		when: N().refine(rS, { message: "not a valid `when` condition" }).optional().describe("Only show this field while a condition over the answers already given holds: `auth == 'key'`, `provider in ['ipsec', 'fortinet']`, `!advanced`. Supports `&&`, `||`, `!`, comparisons and `in`."),
		value: N().optional().describe("A fixed value baked into the config rather than asked for: how a card pins its discriminator (platform=\"reddit\", provider=\"stripe\"). Renders as nothing."),
		totp: I().optional().describe("This field holds a TOTP seed, the base32 key or otpauth:// URI a service shows when enrolling an authenticator app. Declare it with `secret: true`. Unlike an ordinary secret it never enters the agent's environment: the daemon mints the six-digit codes on demand and only those cross.")
	}), oS = R({
		url: N().min(1).describe("The URL to call, as a template over the fields: `${field}` substitutes, `${field:uri}` percent-encodes. Same spelling as `env`."),
		method: V([
			"GET",
			"POST",
			"HEAD"
		]).optional().describe("Defaults to GET."),
		headers: B(N(), N()).optional().describe("The request headers, templated the same way: `{\"Authorization\": \"Bearer ${token}\"}`."),
		identity: N().optional().describe("A dotted path into the JSON answer naming who the caller is (\"login\", \"user.name\"), so success can say which account answered."),
		insecure: I().optional().describe("Accept a self-signed certificate, for a service whose local install ships one (Obsidian's Local REST API).")
	}), sS = R({
		name: N().min(1),
		...Bx,
		description: N().min(1).describe("ONE LINE: aim for 60 characters or fewer. The grid clamps it at two lines in a narrow pane, so a paragraph here is a paragraph the reader gets truncated. Everything longer belongs in `hint`."),
		category: N().min(1),
		hint: N().optional().describe("The paragraph, shown under the add form and searched from the catalog, so the words that identify this card to someone hunting for it (\"webauthn\", \"socket mode\") belong here even when the tile cannot show them."),
		guide: R({
			url: N().optional(),
			urlFromField: N().optional(),
			path: N().optional(),
			linkLabel: N().optional(),
			scopes: N().optional(),
			steps: L(N()).optional()
		}).optional().describe("The walkthrough the install dialog renders for getting the credential this card asks for.")
	}), cS = {
		id: N().regex(/^[a-z0-9][a-z0-9-]*$/),
		catalog: sS,
		fields: L(aS)
	}, lS = z("kind", [
		R({
			...cS,
			kind: H("cli"),
			fields: L(aS).min(1),
			env: B(N().regex(/^[A-Z][A-Z0-9_]*$/), N()).describe("The environment the agent's shell gets, as value templates over the fields: `${field}` substitutes, `${field:uri}` percent-encodes. Each name is suffixed per instance."),
			skill: N().min(1).describe("Checkout-relative SKILL.md teaching the agent this tool. `${id}` in it is replaced with the instance name at apply time."),
			fragment: N().min(1).optional().describe("A Dockerfile fragment holding the client binary this tool needs (psql, mysql, whisper)."),
			pack: N().min(1).optional().describe("A sandbox feature pack name (whisper, llamacpp, browser, …) supplying this tool. Preferred over `fragment`: an image that already bakes the pack needs no rebuild, and there is no copy to drift."),
			probe: oS.optional().describe("One authenticated request that tests this card's settings before they are saved, so a wrong token or an unreachable host is answered on the form rather than by a card that says 'not connected' afterwards.")
		}),
		R({
			...cS,
			kind: H("browser"),
			loginUrl: P().optional().describe("What the sign-in window opens; the profile it persists IS the credential. Optional so one card can be the generic one that asks for the URL on its form instead, but a card must either pin this or declare a field that supplies it, or the window opens on nothing."),
			homeUrl: P().optional().describe("Where that same profile opens once it HAS a session: the owner's own hands on the connected browser. Separate from loginUrl because for some platforms the login lives on another site entirely (YouTube signs in at accounts.google.com)."),
			skill: N().min(1).describe("Checkout-relative SKILL.md teaching the agent this site's actions: rendered once per site, all its connected accounts on one roster (`${accounts}`), the core tool note at `${tools}`.")
		}),
		R({
			...cS,
			kind: H("host"),
			skill: N().min(1).describe("Checkout-relative SKILL.md teaching the agent that machine's shell.")
		}),
		R({
			...cS,
			kind: H("webext"),
			install: P().describe("Where this browser's extension is installed from: its store listing, or a page offering the build."),
			skill: N().min(1).describe("Checkout-relative SKILL.md teaching the agent to drive this browser.")
		}),
		R({
			...cS,
			kind: H("agent")
		})
	]).superRefine((e, t) => {
		if (e.kind === "cli") for (let n of e.fields.filter((e) => e.totp === !0)) Object.values(e.env).some((e) => e.includes(`\${${n.key}}`) || e.includes(`\${${n.key}:uri}`)) && t.addIssue({
			code: "custom",
			message: `env must not reference the totp field "${n.key}", the daemon mints codes from it instead`
		});
	}), uS = {
		name: "capabilities",
		description: "Capability cards this pack adds to the \"+\" grid: a connected CLI tool, a site the agent acts on as the owner through the shared browser, an operating system pack, a browser family the owner connects their own copy of, or a preset over a core kind. The card and its form are data here; the machinery that acts on them is core, which is why a card may only name one of these five kinds.",
		schema: L(lS)
	};
})), fS, pS, mS = w((() => {
	iS(), K(), fS = R({
		command: N().regex(/^[a-z0-9][a-z0-9-]*(\.[a-z0-9][a-z0-9-]*)+$/),
		title: N().min(1).describe("What the command palette shows. The manifest's value wins over the one passed at registration."),
		category: N().min(1).optional().describe("What the command acts on (\"Deployments\", \"Knowledge\"), drawn ahead of the title as \"Category: Title\" and searched with it. Use the extension's own name so its commands group together; omit it and the command stands alone."),
		icon: N().optional().describe("A name from the host's icon set, drawn beside the title."),
		keybinding: N().regex(/^\S+$/).optional().describe("A global keyboard shortcut, e.g. \"Mod+Shift+K\" — `Mod` is ⌘ on Apple and Ctrl elsewhere. Declared here because a global shortcut is consequential: the owner approves it at install, and the host binds only what was approved."),
		when: N().refine(rS, { message: "not a valid `when` condition" }).optional().describe("When the shortcut applies, as a condition over the shell's context keys, `tabSurface == 'chat'`, `!editableTarget`. Without one the chord is claimed everywhere, including inside a terminal where a bare key belongs to the program running in it. The command palette ignores this: a command is always runnable by name.")
	}), pS = {
		name: "commands",
		description: "Commands this extension may register handlers for, surfaced in the command palette. Title, icon and shortcut all come from here rather than from the registration call, because this is what the owner approved at install.",
		schema: L(fS)
	};
})), hS, gS, _S = w((() => {
	K(), hS = R({
		id: N().regex(/^[a-z0-9][a-z0-9-]*$/),
		label: N().min(1).describe("The family's name, shown in the install dialog beside your other contributions. Per-row wording stays with the provider, which is the only thing that knows what it found.")
	}), gS = {
		name: "documents",
		description: "Per-directory documents this extension can offer. Your provider marks the rows in the Workspace tree it has something to say about, and the host opens your component as a tab.",
		schema: L(hS)
	};
})), vS, yS, bS = w((() => {
	K(), vS = R({ fragment: N().min(1).refine((e) => !e.split("/").includes(".."), { message: "fragment must stay inside the checkout" }).describe("Checkout-relative path to a file holding ONLY RUN and ENV instructions. FROM and privileged directives are rejected: those stay daemon-owned.") }), yS = {
		name: "environment",
		description: "A Dockerfile fragment baked into the sandbox image so your tools are actually installed at runtime: a whisper binary, a psql client. The owner approves the composed overlay and rebuilds out of band, so this does not take effect immediately.",
		schema: vS
	};
})), xS, SS, CS = w((() => {
	K(), xS = R({
		path: N().min(1).refine((e) => !e.startsWith("/") && !e.split("/").includes(".."), { message: "path must be workspace-root-relative and stay inside the workspace" }).describe("Workspace-root-relative, forward-slash, matched by prefix, so one entry covers an exact file (`.intentic/config/automations.json`), a directory (`.intentic/config/approvals/`, with the trailing slash so it cannot match a sibling file) or a name family (`.intentic/environment.`). Not a glob."),
		invalidates: L(N().min(1)).min(1).describe("The query keys this path makes stale, the first element of your own api.sandbox.key(...) keys. Keep both this and the path as narrow as the view actually needs: a broad prefix costs every connected browser a refetch on every matching write.")
	}), SS = {
		name: "files",
		description: "Which workspace files back your views, so the daemon's file watcher can tell the browser they went stale instead of you polling for it. The agent edits the workspace out of band from every HTTP route, and this push is the only thing that can notice.",
		schema: L(xS)
	};
})), wS, TS, ES, DS = w((() => {
	K(), wS = R({
		label: N().min(1),
		placeholder: N().min(1),
		hint: N().min(1).optional().describe("The sentence under the input, for a filter whose empty case is easy to get wrong.")
	}), TS = R({
		provider: N().regex(/^[a-z0-9][a-z0-9-]*$/).describe("The slug this source's automation triggers fire on."),
		events: L(R({
			type: N().regex(/^[a-z0-9][a-z0-9_]*$/),
			label: N().min(1)
		})).min(1).refine((e) => new Set(e.map((e) => e.type)).size === e.length, { message: "listener event types must be unique" }).describe("The event types this source can fire, with the wording the automation editor offers them under. The daemon accepts no others."),
		automation: R({
			label: N().min(1),
			mentionLabel: N().min(1).optional().describe("Only for a source whose message events distinguish being addressed. Absent ⇒ the editor offers no mention-only filter, rather than inventing semantics you did not promise."),
			channel: wS.describe("The primary narrowing filter, a channel, a room, a repo."),
			branchField: wS.optional().describe("A second narrowing axis, for a source whose events carry one: a pipeline's git ref, so a trigger can say \"the branch that ships\" rather than \"every agent's every failure\"."),
			sender: wS.optional().describe("How this source names a sender, and where a person finds that id. Declaring it promises that `author.id` is an identity the service vouches for, not a name the sender typed; absent ⇒ the editor offers no sender rules on this source."),
			senderGroup: wS.optional().describe("How this source names a sender's group, for a source whose messages carry `author.groups` (a Discord role). Absent ⇒ rules match ids only."),
			starterPrompt: N().min(1).describe("The first prompt a new automation on this source is prefilled with. You own the payload vocabulary, so you own the prompt that explains it.")
		}).describe("How the generic automation editor presents this source: its name, its filters, and the prompt it starts people on.")
	}), ES = {
		name: "listener",
		description: "A realtime event source this extension supplies, so automations can trigger on it. One declaration feeds both halves: the daemon accepts these event types and serves this provider's control surface, and the automation editor derives its source picker, filters and starter prompt from it, so a newly installed listener is configurable without a matching app release.",
		schema: TS
	};
})), OS, kS, AS = w((() => {
	K(), OS = R({
		name: N().regex(/^[a-z0-9][a-z0-9-]*$/),
		command: N().min(1),
		cwd: N().optional().describe("Relative to the extension checkout. Absent ⇒ the checkout root."),
		port: H("auto").optional().describe("Assign a free port and inject it as PORT."),
		preview: I().optional().describe("Expose the port on a tunnelled preview hostname."),
		autoStart: I().optional().describe("Launch it on install and on daemon boot, rather than waiting to be started.")
	}), kS = {
		name: "processes",
		description: "Long-lived background processes the daemon runs for this extension: a gateway holding a connection the daemon must not, a dev server. Managed the same way panel dev servers are, and startable and stoppable from the Extensions tab.",
		schema: L(OS)
	};
})), jS, MS, NS = w((() => {
	K(), jS = R({
		key: N().regex(/^[a-z0-9][a-zA-Z0-9-]*$/),
		type: V([
			"boolean",
			"string",
			"number",
			"enum"
		]).describe("Which control the Settings page draws. `enum` reads its choices from `enum`."),
		title: N().min(1),
		description: N().optional().describe("The line under the control."),
		default: dc([
			N(),
			F(),
			I()
		]).optional(),
		enum: L(N()).optional().describe("The choices, for type \"enum\". Meaningless otherwise."),
		secret: I().optional().describe("Mask the value in the UI and strip it from reads: a set secret round-trips as 'still set', never as its value."),
		env: N().regex(/^[A-Z][A-Z0-9_]*$/).optional().describe("Inject the stored value into the agent's shell environment under this name, every turn. How a credential you hold reaches the agent's command-line tools.")
	}), MS = {
		name: "settings",
		description: "Typed settings the host renders into the Settings page for you and persists daemon-side. You never draw the form or store the value; you read it back with api.settings.get.",
		schema: L(jS)
	};
})), PS, FS, IS = w((() => {
	K(), PS = R({
		id: N().regex(/^[a-z0-9][a-z0-9-]*$/),
		extensions: L(N().regex(/^[a-z0-9]+$/)).min(1).describe("Bare file extensions, no dot: e.g. [\"docx\", \"xlsx\"]."),
		fetch: V([
			"text",
			"blob",
			"url"
		]).describe("How much of the file the host hands you. `text` for a format that is text (svg, a subtitle track). `blob` for one that must be parsed end to end before any of it shows (a .docx, a spreadsheet), bounded by the daemon's raw-read cap. `url` for anything range-read rather than parsed (audio, video): your component gets a streaming URL to point an element at, never the bytes.")
	}), FS = {
		name: "viewers",
		description: "File formats this extension can render. The host resolves an opened file to your viewer by its extension, fetches the content, and renders your component with it: you keep none of the fetch lifecycle and none of the daemon credentials.",
		schema: L(PS)
	};
})), LS, RS, zS = w((() => {
	K(), LS = R({
		id: N().regex(/^[a-z0-9][a-z0-9-]*$/),
		label: N().min(1).describe("The name shown on the tile or tab. The manifest's value wins over the one passed at registration."),
		surface: V([
			"rail",
			"directory",
			"sandbox"
		]).describe("Where it appears. `rail` is a tile in the global left rail; `directory` is a panel opened from a repo in the Workspace tree; `sandbox` is a tab on the Sandbox hub, for a view whose subject is the box rather than the work."),
		badge: I().optional().describe("Allow this view to say something on its tile: a count, a glyph, or that work is running there. Declared because a badge interrupts from every other screen in the app; leave it out and any badge the extension registers is dropped.")
	}), RS = {
		name: "views",
		description: "Sidebar elements this extension may register at runtime. Each entry reserves an id and a surface; the extension supplies the component with api.views.register, and the host refuses any registration this list does not cover.",
		schema: L(LS)
	};
})), BS, VS, HS = w((() => {
	K(), Wx(), qx(), Yx(), dS(), mS(), _S(), bS(), CS(), DS(), AS(), NS(), IS(), zS(), Wx(), qx(), Yx(), dS(), mS(), _S(), bS(), CS(), DS(), AS(), NS(), IS(), zS(), BS = [
		RS,
		SS,
		FS,
		gS,
		pS,
		MS,
		kS,
		Ux,
		yS,
		uS,
		ES,
		Kx,
		Jx
	], VS = R(Object.fromEntries(BS.map((e) => [e.name, e.schema.describe(e.description).optional()])));
})), US, WS = w((() => {
	K(), Vx(), HS(), US = R({
		$schema: N().optional().describe("The authoring schema, for editor completion and validation. Nothing at runtime reads it."),
		publisher: N().regex(/^[a-z0-9][a-z0-9-]*$/),
		name: N().regex(/^[a-z0-9][a-z0-9-]*$/),
		version: N().min(1).describe("Your own semver, display and identity only. The installed code's identity is the pinned commit sha."),
		category: N().min(1).optional().describe("Which section of the Extensions tab this sits under: a grouping by what it is FOR, which cannot be derived from what it contributes. A section this app has never heard of lands in 'Other' rather than failing to install."),
		...Bx,
		engines: R({ intentic: N().min(1) }).describe("A semver range over the host's extension API version, checked before your code is activated."),
		entry: N().min(1).refine((e) => !e.split("/").includes(".."), { message: "entry must stay inside the checkout" }).optional().describe("Repo-relative path of your prebuilt single-file ESM bundle, built with `vue` and `@intentic/extension-api` as externals. Absent ⇒ an extension with no UI."),
		server: N().min(1).refine((e) => !e.split("/").includes(".."), { message: "server must stay inside the checkout" }).optional().describe("Repo-relative path of your prebuilt single-file node ESM server bundle, exporting `activateServer`. Served under your own route namespace, which the daemon proxies. Nothing is provided at runtime but node builtins, so bundle everything else in. Absent ⇒ no backend."),
		permissions: R({
			sandbox: L(N()).optional().describe("Daemon routes your UI half may call. Your own backend namespace needs no entry: its backend is your own code."),
			daemon: L(N()).optional().describe("Daemon routes your SERVER half may call. Separate from `sandbox` because the two halves run as different principals: the UI as the owner's session, the backend as a minted per-extension token, so a grant to one must never quietly widen the other.")
		}).optional().describe("How far this extension may reach into the daemon, as \"<METHOD> <path-glob>\" entries where `*` matches one path segment: e.g. \"GET /panels\", \"POST /panels/*/start\". The install dialog shows these, the host refuses anything undeclared, and the usage ledger records which were actually earned."),
		contributes: VS.optional()
	});
})), GS = w((() => {
	WS();
})), KS = w((() => {})), qS = w((() => {})), JS = w((() => {
	Lx(), Rx(), GS(), WS(), KS(), HS(), qS();
})), YS, XS, ZS, QS, $S, eC, tC, nC, rC, iC, aC, oC, sC, cC, lC, uC, dC, fC, pC, mC, hC, gC, _C, vC, yC, bC = w((() => {
	K(), JS(), YS = N().min(1).max(121).regex(/^[a-zA-Z0-9][a-zA-Z0-9_.-]*$/), XS = R({
		updates: V([
			"notify",
			"agent",
			"auto"
		]),
		advisories: V(["auto-disable", "notify"])
	}), ZS = R({
		ref: N().describe("The commit being offered."),
		version: N().optional().describe("What it calls itself."),
		url: N().describe("Where it comes from."),
		path: N().optional().describe("Where inside that repository it lives."),
		trust: V(["verified", "listed"]).describe("Whether anybody vouched for it, or it is merely listed."),
		securityFix: I().optional().describe("This release fixes a security problem in earlier ones, so here the old version is the dangerous one."),
		registry: N().describe("Which registry said so."),
		at: N().describe("When it was published."),
		needsReview: N().optional().describe("Why this one was not taken automatically and is asking for a person instead: it wants more than it used to, or nobody has vouched for it."),
		review: R({
			conversationId: N().describe("Where to read what it found."),
			at: N().describe("When it looked.")
		}).optional().describe("An agent has already read the difference between what is installed and this, so the card can link to what it found rather than offer to start looking.")
	}), QS = R({
		reason: N().describe("Why the registry pulled the listing, in its own words. Delisting protects people browsing; this record is for the person already running it."),
		registry: N().describe("Which registry said so."),
		at: N().describe("When."),
		autoDisabled: I().describe("Whether the sandbox has already switched it off.")
	}), $S = R({
		state: V([
			"watching",
			"healthy",
			"unhealthy"
		]).describe("How it has behaved since the last update. Checks catch broken, not wrong, so for a while after a swap it is simply watched."),
		detail: N().optional().describe("What is going wrong, when something is."),
		fromRef: N().optional().describe("Which version it was updated from, which is what going back would return to."),
		at: N().describe("When the watching started."),
		autoReverted: I().optional().describe("The update was already rolled back without anybody asking. The record stays rather than pretending the attempt never happened.")
	}), eC = R({
		added: L(N()).describe("What the new version asks for that the running one does not. The whole point of the comparison."),
		removed: L(N()).describe("What it no longer asks for."),
		unchanged: L(N()).describe("What stays the same.")
	}), tC = R({
		id: YS.describe("Which extension."),
		ref: N().regex(/^[0-9a-f]{40}$/).optional().describe("Which commit, in full. Leave it out for whatever the last check found, which is what most callers mean.")
	}), nC = R({
		ref: N().describe("The commit this would install."),
		version: N().describe("What that version calls itself."),
		installedVersion: N().describe("What is running now."),
		engines: N().describe("Which sandbox versions the new one says it needs."),
		compatible: I().describe("Whether this sandbox is one of them."),
		powers: eC.describe("Exactly what the new code asks for that the running one does not. This is what approving an update is approving.")
	}), rC = R({
		ok: H(!0).describe("It went through."),
		ref: N().describe("Which commit is now running."),
		rebuildNeeded: I().optional().describe("The new version changes what the sandbox image contains, so a one-time rebuild is still pending and the update is not wholly landed yet.")
	}), iC = R({
		id: YS.describe("Which extension."),
		updates: V([
			"notify",
			"agent",
			"auto"
		]).optional().describe("What to do about a newer version: tell you, have an agent read the difference first, or just take it."),
		advisories: V(["auto-disable", "notify"]).optional().describe("What to do about a security warning: switch it off at once, or tell you.")
	}), aC = R({
		ok: H(!0).describe("The check ran."),
		checkedAt: N().describe("When, so a screen can date the answer.")
	}), oC = R({
		id: YS.describe("The extension's id."),
		manifest: US.describe("What it declares about itself: what it contributes, what it needs, and what it may reach."),
		commit: N().describe("Exactly which commit is installed."),
		source: V([
			"builtin",
			"installed",
			"workspace"
		]).describe("Where the code comes from: baked into the sandbox image and not removable, installed from a repository at a pinned commit, or written in this workspace and edited in place."),
		enabled: I().describe("The owner's switch. A switched-off extension is still listed, which is what makes it switchable back on, but nothing it contributes is wired up."),
		essential: I().optional().describe("Its switch is fixed on, because it is the only way to see or stop an engine the sandbox runs regardless. Hiding that page would not stop the spending, only your ability to notice it. Declared by the core about its own surfaces, never by an extension about itself, which would be a pack making itself un-removable."),
		usage: B(N(), R({
			calls: F().int().nonnegative().describe("How many times."),
			last: N().describe("When, most recently.")
		})).optional().describe("How much of the reach it asked for it has actually used, keyed by what it declared. Absent means never observed doing anything, which is a different claim from uses none of them, and the two have to stay tellable apart: reading either as these permissions are unnecessary turns evidence into a guess with a number on it."),
		backend: R({
			state: V([
				"running",
				"error",
				"absent",
				"incompatible",
				"starting",
				"stopped"
			]).describe("How its server half is doing. Absent means the code is not in this image at all; incompatible means it needs a different sandbox version."),
			detail: N().optional().describe("What went wrong, so a backend that failed to start is a sentence rather than an address that answers nothing.")
		}).optional().describe("Present only for an extension that ships a server half."),
		update: ZS.optional().describe("A newer version waiting. All five of these exist only for one installed from a repository: a built-in updates with the image and one written here is edited live."),
		advisory: QS.optional().describe("A security warning about the installed version."),
		health: $S.optional().describe("How it has behaved since the last update, which is what decides whether that update sticks."),
		previous: R({
			ref: N().describe("The commit that was running before."),
			version: N().optional().describe("What it called itself.")
		}).optional().describe("The version kept one step back, which is what going back means."),
		updatePolicy: XS.optional().describe("The owner's standing answer for this one: tell me, have an agent look, or just do it.")
	}), sC = R({
		dir: N().describe("Which folder."),
		error: N().describe("Why it could not be read.")
	}), cC = R({
		extensions: L(oC).describe("What is installed."),
		invalid: L(sC).describe("Extensions written here that could not be read at all. Listed rather than dropped, because there is no install moment at which to reject a broken one, so this is its only way of saying anything."),
		updatesCheckedAt: N().optional().describe("When updates were last looked for. Absent until the first check has run. Sent so a screen can say checked an hour ago rather than presenting staleness as certainty.")
	}), lC = R({
		settings: B(N(), dc([
			N(),
			F(),
			I()
		])).describe("The values, minus anything marked secret."),
		secretsSet: L(N()).describe("Which of its secret settings actually hold a value. Names only: the values themselves never come back.")
	}), uC = R({
		id: N().describe("Which extension."),
		settings: B(N(), dc([
			N(),
			F(),
			I()
		])).describe("The values to write. A key the extension never declared is refused rather than quietly stored.")
	}), dC = R({
		id: N().describe("Which extension."),
		enabled: I().describe("On or off.")
	}), fC = R({
		publisher: N().regex(/^[a-z0-9][a-z0-9-]*$/).describe("Who it is by, which together with the name makes its id."),
		name: N().regex(/^[a-z0-9][a-z0-9-]*$/).describe("What it is called.")
	}), pC = R({
		id: N().describe("The id it was given."),
		dir: N().describe("Where its files are, so you can open them.")
	}), mC = R({
		id: N().describe("The name the owner gave it, which is also the agent's handle for it."),
		kind: N().describe("Which core kind it is underneath: cli, browser, host or webext."),
		card: N().describe("The card it was added from, named as the grid names it."),
		secrets: L(N()).describe("Credential fields stored for it, by name. The values are deleted with the entry and cannot be recovered from here."),
		effect: N().describe("What tearing it down actually takes away, in one sentence.")
	}), hC = R({
		id: YS.describe("The extension's id, as the list addresses it."),
		name: N().describe("Its publisher.name identity, which is the key its settings and switch are stored under."),
		version: N().describe("The version being removed."),
		source: V([
			"builtin",
			"installed",
			"workspace"
		]).describe("Where its code comes from, which decides what removal means."),
		blocked: N().optional().describe("Why this one cannot be removed, when it cannot. Present means every other field is what would go if it could."),
		files: L(R({
			path: N().describe("Workspace-relative."),
			detail: N().describe("What is in there.")
		})).describe("Directories deleted outright. For an extension written here this is the owner's own source, which nothing else keeps a copy of."),
		connections: L(mC).describe("Connections configured from its cards, which are removed with it."),
		settings: L(R({
			key: N().describe("Which setting."),
			secret: I().describe("Whether its value is a stored credential.")
		})).describe("Values the owner entered for this extension that are forgotten. Only keys actually holding a value are listed."),
		processes: L(N()).describe("Background processes it declared, stopped before its files go."),
		automations: L(N()).describe("Automations of the owner's own that wake on a listener this extension provides. They are NOT removed, and are listed because they stop firing, which is the sort of thing a removal is otherwise discovered by."),
		rebuildNeeded: I().describe("It bakes a layer into the sandbox image, so what it added to the image is only gone after the next environment rebuild."),
		keeps: L(N()).describe("What removal deliberately leaves alone, so the list of what goes can be read as complete.")
	}), gC = R({
		ok: H(!0).describe("It is gone."),
		connections: L(N()).describe("Which configured connections went with it, by name."),
		rebuildNeeded: I().optional().describe("Its image layer is still in the running sandbox until the next environment rebuild; nothing else is pending.")
	}), _C = R({ reports: B(N(), B(N(), F().int().positive())).describe("Each extension that called something, and the counts against the declared powers it exercised.") }), vC = R({
		id: N().describe("Which extension."),
		name: N().describe("Which of its declared processes.")
	}), yC = R({
		name: N().describe("Which process."),
		running: I().describe("Whether it is up. False with a port means it crashed and the supervisor is waiting to retry it."),
		port: F().optional().describe("The port it was given."),
		restarts: F().optional().describe("How many times it died and was brought back since it was started. A growing number is a service in trouble."),
		lastExitCode: F().optional().describe("How it last exited, when it has crashed at least once."),
		previewUrl: N().optional().describe("Where to open it, when it has an address.")
	});
})), xC, SC = w((() => {
	J(), Sb(), bC(), Ex(), $(), xC = {
		list: q.route({
			method: "GET",
			path: "/extensions",
			summary: "Installed extensions",
			description: "Every extension installed here, resolved to the manifest the owner approved, which is what the app boots its extension host from. The code itself is served separately, because raw script bytes are not a JSON answer."
		}).output(cC),
		create: q.route({
			method: "POST",
			path: "/extensions/workspace",
			summary: "Write a new extension in place",
			description: "Scaffolds a working extension into this workspace and installs it. The only call here that creates one, and it exists because that folder is otherwise reachable only through an agent's file tools, which is a fine way to change an extension and a poor way to meet the idea of one."
		}).input(fC).output(pC),
		removalPlan: q.route({
			method: "GET",
			path: "/extensions/{id}/removal",
			summary: "What removing an extension would take away",
			description: "Everything one removal destroys, before it happens: the files deleted, the connections configured from its cards, the settings and credentials forgotten, the background processes stopped, and the owner's own automations that quietly stop firing. Also answerable for an extension that cannot be removed, in which case it says why."
		}).input(mb).output(hC),
		remove: q.route({
			method: "POST",
			path: "/extensions/{id}/remove",
			summary: "Remove an extension",
			description: "Uninstalls it and everything that only existed because it was here: the connections added from its cards, with their stored credentials, its settings, its switch and its update record. What the owner made with it — automations, files in the workspace — is left alone. Owner only, for the same reason installing is. Built-in extensions cannot be removed; switch them off instead."
		}).input(mb).output(gC),
		settings: q.route({
			method: "GET",
			path: "/extensions/{id}/settings",
			summary: "An extension's settings",
			description: "The current values for the settings this extension declared it has."
		}).input(mb).output(lC),
		setSettings: q.route({
			method: "POST",
			path: "/extensions/{id}/settings",
			summary: "Change an extension's settings",
			description: "Writes new values. A key the extension never declared is refused rather than quietly stored, the same honesty rule that governs everything else an extension claims."
		}).input(uC).output(Z),
		setEnabled: q.route({
			method: "POST",
			path: "/extensions/{id}/enabled",
			summary: "Turn an extension on or off",
			description: "The owner's switch. Turning one off stops its background processes at once. What it contributes to an agent's tools is rebuilt at the start of the next turn, and anything it adds to the sandbox image only at the next rebuild."
		}).input(dC).output(Z),
		recordUsage: q.route({
			method: "POST",
			path: "/extensions/usage",
			summary: "Record what extensions just used",
			description: "One batch written by the app rather than measured by the daemon, because the permission gate runs in the browser: from the sandbox's side extension traffic is indistinguishable from anyone else's. This is how the record of which powers each extension actually exercises gets kept without one reporting request per extension."
		}).input(_C).output(Z),
		readiness: q.route({
			method: "GET",
			path: "/extensions/{id}/readiness",
			summary: "Whether an extension is fit to share",
			description: "The checks that can be answered from an extension's own files, for an author about to publish. Read on demand rather than carried on the list, because it reads the code off disk each time."
		}).input(mb).output(Tx),
		checkUpdates: q.route({
			method: "POST",
			path: "/extensions/updates/check",
			summary: "Look for extension updates now",
			description: "Compares every installed extension against its source and reports what is newer, what carries an advisory and what looks unhealthy. This also happens on a schedule; call it to check on demand."
		}).output(aC),
		updatePreview: q.route({
			method: "POST",
			path: "/extensions/{id}/update/preview",
			summary: "What an update would change",
			description: "The read before the click: which versions are involved and exactly which powers the new code asks for that the running one does not. Costs one throwaway copy of the source, the same as browsing a registry entry."
		}).input(tC).output(nC),
		applyUpdate: q.route({
			method: "POST",
			path: "/extensions/{id}/update",
			summary: "Update an extension",
			description: "The whole swap as one transaction: fetch, check, quiet the running one, replace it while keeping the outgoing copy one step back, restart and watch it come up. The existing configuration is kept, so a token for a private source survives what removing and re-adding would lose. Owner only, because it changes what code runs."
		}).input(tC).output(rC),
		revert: q.route({
			method: "POST",
			path: "/extensions/{id}/revert",
			summary: "Go back to the previous version",
			description: "Swaps the copy kept from before the last update back into place. Owner only, for the same reason updating is."
		}).input(mb).output(rC),
		setUpdatePolicy: q.route({
			method: "POST",
			path: "/extensions/{id}/update-policy",
			summary: "How an extension should handle its own updates",
			description: "The owner's standing answer for one extension: tell me, have an agent look at it, or just do it. Security advisories can be opted out of separately."
		}).input(iC).output(Z),
		processStatus: q.route({
			method: "GET",
			path: "/extensions/{id}/processes/{name}",
			summary: "Whether an extension's background process is up",
			description: "The state of one process an extension declared, with the port it was given and its preview address if it has one."
		}).input(vC).output(yC),
		processStart: q.route({
			method: "POST",
			path: "/extensions/{id}/processes/{name}/start",
			summary: "Start an extension's background process",
			description: "Brings one of an extension's declared processes up in an attachable terminal."
		}).input(vC).output(Z),
		processStop: q.route({
			method: "POST",
			path: "/extensions/{id}/processes/{name}/stop",
			summary: "Stop an extension's background process",
			description: "Shuts one of an extension's declared processes down and frees its port."
		}).input(vC).output(Z)
	};
})), CC = w((() => {
	Ju(), Qu(), Yu.map((e) => ({
		label: e.label,
		value: e.id
	})), Object.fromEntries(Yu.map((e) => [e.id, e.access])), Yu.filter((e) => e.access.kind === "free").map((e) => e.id), Object.fromEntries(Yu.map((e) => [e.id, e.vendor])), Yu.filter((e) => e.planLimits).map((e) => e.id);
})), wC = w((() => {
	CC();
})), TC, EC, DC, OC, kC, AC, jC, MC, NC, PC, FC, IC, LC = w((() => {
	Tp(), X(), TC = (e) => e.map((e) => new RegExp(e.source, `${e.flags}g`)), EC = [
		/\bgit\s+push\b[^|;&]*\s(?:-f\b|--force\b|--force-with-lease\b|--delete\b)/,
		/\bgit\s+reset\b[^|;&]*\s--hard\b/,
		/\bgit\s+clean\b[^|;&]*\s-{1,2}[a-zA-Z]*f/,
		/\bgit\s+branch\b[^|;&]*\s(?:-D\b|--delete\s+--force\b|--force\s+--delete\b)/,
		/\bgit\s+filter-branch\b/
	], DC = [/\{\{secret:[A-Za-z0-9_./-]+\}\}/], OC = String.raw`[\w~$.{}/\\-]*`, kC = [
		/(?<![\w.])\.env(?!\.(?:example|sample|template))(?:\.[\w-]+)?\b/,
		/\.ssh(?!\w)(?!\/(?:known_hosts|config|authorized_keys|environment)(?!\w))(?!\/[\w.-]*\.pub(?!\w))(?:\/[\w.\-/]*)?/,
		/\bid_(?:rsa|dsa|ecdsa|ed25519)\b(?!\.pub\b)/,
		new RegExp(String.raw`${OC}\.aws/credentials\b`),
		new RegExp(String.raw`${OC}\.npmrc(?!\.(?:example|sample|template))\b`),
		new RegExp(String.raw`${OC}\.git-credentials\b`),
		new RegExp(String.raw`${OC}\.credentials\.json\b`)
	], AC = [
		/\b(?:npm|pnpm|yarn|bun)\s+publish\b/,
		/\bcargo\s+publish\b/,
		/\bgh\s+release\s+create\b/,
		/\bdocker\s+push\b/,
		/\btwine\s+upload\b/
	], jC = String.raw`(?:localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])(?::\d+)?(?=[/?#\s'"\x60]|$)`, MC = [new RegExp(String.raw`\b(?:curl|wget)\b[^|;&]*\bhttps?://(?!${jC})`), new RegExp(String.raw`\bfetch\(\s*['"\x60]https?://(?!${jC})`)], NC = [
		/\bmkfs(?:\.\w+)?\b/,
		/\bwipefs\b/,
		/\bblkdiscard\b/,
		/\bsgdisk\b[^|;&]*\s(?:--zap-all|-Z)\b/,
		/\bdd\b[^|;&]*\bof=(?:\/dev\/|['"`]\/dev\/)/,
		/\bshred\b[^|;&]*\s\/dev\//,
		/>\s*\/dev\/(?:[shv]d[a-z]|nvme\d|disk\d|mmcblk\d)/
	], PC = [
		/\b(?:docker|podman)\s+volume\s+(?:rm|remove|prune)\b/,
		/\b(?:docker|podman)\s+system\s+prune\b/,
		/\b(?:docker(?:\s+compose|-compose)?|podman-compose)\s+down\b[^|;&]*\s(?:-v\b|--volumes\b)/
	], TC(EC), TC(DC), TC(kC), TC(AC), TC(MC), TC(NC), TC(PC), FC = {
		"git.destructive": "rewrite or discard git history",
		"files.destructive": "delete files recursively",
		"system.destructive": "wipe a disk, or delete a whole root directory",
		"container.state": "delete a container volume or the data in it",
		"secrets.access": "read credential material",
		"package.publish": "publish or release a package",
		"network.outbound": "send a request out to the internet"
	}, IC = {
		"git.destructive": [
			{
				code: "git push --force",
				qualifier: "also -f and --force-with-lease"
			},
			{ code: "git push --delete" },
			{ code: "git reset --hard" },
			{ code: "git clean -f" },
			{ code: "git branch -D" },
			{ code: "git filter-branch" }
		],
		"files.destructive": [
			{ code: "rm -rf <path>" },
			{
				code: "fs.rm(<path>, { recursive: true })",
				qualifier: "also rmSync, rmdir, rmdirSync"
			},
			{ code: "rimraf(<path>)" }
		],
		"system.destructive": [
			{ code: "mkfs" },
			{ code: "wipefs" },
			{ code: "blkdiscard" },
			{ code: "sgdisk --zap-all" },
			{ code: "dd of=/dev/…" },
			{ code: "shred /dev/…" },
			{ code: "> /dev/sda" },
			{
				code: "rm -rf /",
				qualifier: "only when the target is a root, listed below"
			}
		],
		"container.state": [
			{
				code: "docker volume rm",
				qualifier: "also remove, prune, and podman for any of these"
			},
			{ code: "docker system prune" },
			{ code: "docker compose down -v" }
		],
		"secrets.access": [
			{
				code: "{{secret:NAME}}",
				qualifier: "a stored secret, used in the command itself"
			},
			{ code: ".env" },
			{ code: ".ssh/*" },
			{ code: "id_rsa" },
			{ code: ".aws/credentials" },
			{ code: ".npmrc" },
			{ code: ".git-credentials" }
		],
		"package.publish": [
			{
				code: "npm publish",
				qualifier: "also pnpm, yarn, bun"
			},
			{ code: "cargo publish" },
			{ code: "gh release create" },
			{ code: "docker push" },
			{ code: "twine upload" }
		],
		"network.outbound": [{
			code: "curl https://…",
			qualifier: "also wget; loopback does not count"
		}, {
			code: "fetch(\"https://…\")",
			qualifier: "in a script"
		}]
	};
})), RC, zC, BC, VC, HC, UC, WC, GC, KC, qC, JC = w((() => {
	K(), LC(), X(), RC = /* @__PURE__ */ new Set(["system.destructive"]), zC = /* @__PURE__ */ new Set([
		"system.destructive",
		"container.state",
		"files.destructive"
	]), BC = (e) => e === "sandbox" ? RC : zC, VC = {
		sandbox: "/ and /history. Not /work, /usr or /etc: the worktree's changes are uncommitted work, and the container comes back from its image.",
		device: "/, a home directory, a Windows drive, and the top-level directories an OS keeps."
	}, HC = (e) => Object.fromEntries(yd.options.map((t) => [t, BC(t).has(e) ? "hard" : "judged"])), UC = (e) => yd.options.filter((t) => e.tiers[t] === "hard").length, bd.options.map((e) => ({
		commandClass: e,
		label: FC[e],
		patterns: IC[e],
		tiers: HC(e),
		...e === "system.destructive" ? { notes: VC } : {}
	})).sort((e, t) => UC(t) - UC(e)), WC = V([
		"off",
		"watch",
		"on"
	]), GC = V([
		"allow",
		"ask",
		"refuse"
	]), R({
		decision: GC.describe("Run it, ask the owner, or refuse it."),
		sentence: N().describe("What this command does and why it was allowed, held or refused, in one plain sentence."),
		policyLine: N().optional().describe("A line the owner could add to their policy so this stops being asked. Shown on the card before it is accepted.")
	}), KC = R({
		at: F().int().describe("When it was judged, epoch milliseconds."),
		program: N().describe("The command or script, excerpted."),
		classes: L(N()).describe("The kinds of consequence triage matched, which is why a judge looked."),
		decision: GC.describe("What the judge decided."),
		sentence: N().describe("The judge's sentence."),
		outcome: V([
			"allowed",
			"asked",
			"refused"
		]).describe("What the gate did in the end."),
		answer: V([
			"allowed",
			"declined",
			"unanswered"
		]).optional().describe("How the owner answered, when they were asked."),
		machine: N().optional().describe("Which connected device it was headed for, when it was not this sandbox.")
	}), qC = R({
		text: N().describe("The policy, as the owner wrote it."),
		custom: I().describe("False when nobody has edited it and this is the text this product ships.")
	});
})), YC, XC, ZC, QC, $C, ew, tw, nw, rw, iw, aw, ow, sw, cw, lw, uw, dw, fw, pw, mw, hw, gw, _w, vw, yw, bw, xw, Sw, Cw, ww, Tw, Ew, Dw, Ow, kw, Aw, jw, Mw, Nw = w((() => {
	Tp(), K(), JC(), Hu(), X(), YC = V([
		"intentic",
		"claude",
		"custom"
	]), XC = R({ base: V(["intentic", "claude"]) }), ZC = V([
		"off",
		"versions",
		"full"
	]), QC = V([
		"file.edited",
		"turn.ending",
		"push.starting",
		"agent.finished",
		"agent.landed"
	]), $C = V([
		"verify-edits",
		"verify-removals",
		"verify-ui-edits",
		"verify-tests",
		"version-landed"
	]), ew = z("kind", [
		R({
			kind: H("command"),
			command: N().max(500),
			timeoutMs: F().min(6e4).max(36e5).default(9e5)
		}),
		R({
			kind: H("instruct"),
			text: N().min(1).max(4e3)
		}),
		R({
			kind: H("verdict"),
			verdict: V(["allow", "hold"])
		}),
		R({
			kind: H("builtin"),
			name: $C
		})
	]), tw = V([
		"clean",
		"error",
		"conflict",
		"checks-failed"
	]), nw = R({
		repo: N().min(1).optional(),
		paths: L(N().min(1)).max(20).optional(),
		outcome: L(tw).optional(),
		sample: F().gt(0).lt(1).optional()
	}), rw = {
		"file.edited": ["command"],
		"turn.ending": [
			"builtin",
			"instruct",
			"command"
		],
		"push.starting": ["command"],
		"agent.finished": ["verdict"],
		"agent.landed": ["builtin"]
	}, iw = {
		"turn.ending": [
			"verify-edits",
			"verify-removals",
			"verify-ui-edits",
			"verify-tests"
		],
		"agent.landed": ["version-landed"]
	}, aw = R({
		id: N().regex(/^[a-z0-9][a-z0-9-]*$/),
		label: N().min(1).max(80),
		moment: QC,
		when: nw.optional(),
		action: ew,
		enabled: I().default(!0)
	}).refine((e) => rw[e.moment].includes(e.action.kind), {
		message: "that action cannot stand at that moment",
		path: ["action"]
	}).refine((e) => e.action.kind !== "builtin" || (iw[e.moment] ?? []).includes(e.action.name), {
		message: "that built-in cannot stand at that moment",
		path: ["action"]
	}), ow = B(N(), F()), sw = V([
		"builtin",
		"own",
		"capability",
		"extension",
		"plugin",
		"persona",
		"dropped"
	]), cw = N().regex(/^[a-z0-9][a-z0-9-]*$/, "a skill name is lowercase letters, digits and dashes"), lw = R({
		id: N().describe("Its handle, which reading and deleting take. A skill of your own is simply its name; one belonging to something else is qualified, because two packages may each ship a review."),
		name: N().describe("Its name."),
		description: N().describe("What it is for, which is the line the agent reads to decide whether to reach for it. Empty when the skill declares none, which is worth showing as the blank it is: a skill with no description is rarely picked."),
		origin: sw.describe("Where it came from."),
		owner: N().optional().describe("Who ships it, as the row would name them."),
		enabled: I().describe("Whether the agent can reach it."),
		switchable: I().describe("Whether this surface can switch it. Everything else is on because its extension or its plugin is, and a switch here that silently did nothing would be worse than none, so the row names its owner instead."),
		editable: I().describe("Whether it can be rewritten here. Your own only: editing somebody else's in place would be undone the next time the thing that ships it catches up."),
		removable: I()
	}), uw = L(lw), dw = R({
		id: N().describe("The skill's id, which can carry the owner it came from."),
		name: N().describe("Its name."),
		body: N().describe("The instructions themselves, as written.")
	}), fw = R({ id: N().min(1).describe("Which skill. It travels in the query rather than the address, because an id can name the owner it came from and that will not fit in a path.") }), pw = R({
		name: cw.describe("What to call it. Saving over an existing name rewrites it, which is also how one is renamed."),
		description: N().min(1).max(1024).describe("What it is for, which is what the agent reads to decide whether to reach for it."),
		body: N().min(1).describe("The skill itself.")
	}), mw = R({ name: cw.describe("Which skill to delete. The stored text and the agent's copy go together, so nothing is left half done.") }), hw = R({
		name: cw.describe("Which skill of your own to switch."),
		on: I().describe("On writes the agent's copy from the stored text; off removes that copy and keeps the text.")
	}), gw = R({
		stableSystemPrompt: I().default(!1).describe("Keep the instructions identical between turns so the provider can cache them, moving anything that varies into the message instead. Cheaper, at the cost of some flexibility."),
		skills: L(N()).default(["lsp", "fileq"]).describe("Which built-in tools are switched on. A skill of your own is not listed here: it is on while the agent's copy of it exists."),
		personaRouting: I().default(!0).describe("Whether a new chat is matched to one of your personas from its first message. The message is read once it is sent, by the model on the persona-routing list, and the chat says in its own transcript what was asked and which persona it landed on. Never applies to unwatched runs, which name their persona themselves."),
		hashlineEdits: I().default(!1).describe("Have the agent edit files by line number rather than by quoting the text it wants replaced. Cheaper on large files, and less forgiving of a stale read."),
		systemPromptMode: YC.default("intentic").describe("Which instructions the agent starts from: intentic's own, the ones the installed Claude Code carries, or your own. The first two both get this product's own guidance added on top; your own gets nothing added, which is the point of it."),
		systemPrompt: N().max(2e4).default("").describe("Your own instructions, used only when the mode above says custom. Then it is the whole of them: both built-in bases go, and so does everything this product would otherwise add, including the guidance the chat's own cards are driven by. That is the price of total control."),
		iqSearch: I().default(!1).describe("Teach the agent how to use this workspace's own search tool, rather than leaving it to grep around."),
		iqSearchHoldout: F().min(0).max(1).default(0).describe("What share of conversations to run without that teaching, so the two can be compared. Whole conversations rather than individual turns, because once the teaching is in a session, withholding it from the next request does not make the model forget it."),
		workspaceMap: I().default(!1).describe("Open every conversation with a map of the project it starts in: what is in it, what each part is for, and where the agent is standing. Worked out fresh each time rather than written down anywhere, because a written layout is wrong within a fortnight. Off by default, since it spends tokens on the first message of every conversation."),
		workspaceMapHoldout: F().min(0).max(1).default(0).describe("What share of conversations to open without the map, so the two can be compared. Whole conversations rather than individual turns, because the map is sent once and stays in the conversation's history afterwards."),
		sidecars: I().default(!1).describe("Keep an up-to-date markdown rendering of every document, image and audio file in the workspace, made in the background as files land, so the agent reads a pre-derived text instead of paying to parse the file mid-task. Costs background CPU on a document-heavy workspace, so it is a switch rather than a default."),
		dependencyFreshness: ZC.default("off").describe("Whether a version the agent is about to pin is checked against the package's own registry first. Facts only, or facts plus the name of a maintained replacement where the registry agrees the current choice has been abandoned. It tells the agent and lets it decide rather than refusing, because matching a version your project already uses is usually the right answer and a gate would fight it."),
		outputCleaners: N().default("").describe("Which command outputs to trim before the agent reads them, cutting the noise a build tool prints without cutting what it said."),
		outputHoldout: F().min(0).max(1).default(0).describe("What share of commands to leave untrimmed, so the saving can be measured against a real comparison rather than estimated."),
		modelRoles: mc(Bu, L(Dd).max(10)).default({}).describe("Which models do which job, one ordered list per job: commit messages, session titles, the safety judge, pipeline fixes, and every other place this sandbox picks a model for you. Tried in order, so one spent account does not take a job down. Nothing is chosen for you: a one-shot job with no list does not run, and a whole session with no list opens on whatever your own chat is set to."),
		changelogRepos: L(N()).max(50).default([]).describe("Which repositories keep a changelog, and so get a user-facing note written alongside each merge. A list rather than a switch, and empty by default, because the commit writer's standing rule is to copy the house style rather than impose one, and a repository that has never written such a note gives it nothing to copy."),
		autoTier: V([
			"off",
			"shadow",
			"on"
		]).default("shadow").describe("Whether an easy-looking turn may run on a cheaper model from the same provider. Three states rather than a switch, because the middle one is the only honest road to the third: it scores every turn and routes nothing, so the guess can become a measurement before it changes anything. It can only ever route down, so the worst case is one turn's quality rather than a bill nobody asked for."),
		autoTierEagerness: V([
			"cautious",
			"balanced",
			"eager"
		]).default("balanced").describe("How readily a turn counts as simple enough for the cheaper model. It moves only the cutoff: at every setting a turn still has to say something positively easy, so nothing here can downgrade a short vague request."),
		autoFastModels: L(N()).max(10).default([]).describe("Which cheaper model a downgraded turn lands on. A list so a sandbox spanning providers can name a rung on each, but not a fallback ladder: an entry naming a different provider than the turn is on is skipped rather than tried, because switching provider retires the conversation and starting over to save a fraction of a penny is not a saving. Empty picks the cheapest the turn's own provider publishes."),
		agentRetentionDays: F().min(0).max(365).default(3).describe("How many days a finished conversation stays on the board before being put away. Zero means never. The one setting here that defaults on, because each card left behind is a real working copy on disk, not just a row."),
		resumeAfterOutage: I().default(!1).describe("Whether a turn killed by the model provider failing is re-run automatically, backing off between attempts. The sandbox-wide default; any one conversation can say otherwise. Off to begin with, because a retry spends your allowance on a turn you sent once and only you can say whether it was worth paying for twice. Worth turning on for a sandbox whose work mostly happens with nobody in the room."),
		resumeAfterLimit: I().default(!1).describe("Whether a turn a spent usage limit refused is sent again by itself once the allowance reopens. The sandbox-wide default; any one conversation can say otherwise. Off to begin with, because the allowance is your budget and a turn that spends it the second it comes back is not a decision to make for you. Worth turning on for a sandbox whose work mostly happens with nobody in the room."),
		moveAfterLimit: I().default(!1).describe("Whether a turn a spent usage limit refused is moved to another connected account of the same provider that still has room, as soon as the refusal lands. The sandbox-wide default; any one conversation can say otherwise. Off to begin with, because it spends a second account on your behalf. With no account that has room the turn waits as the setting above says."),
		limitMoveCarryUnder: F().int().min(0).default(1e5).describe("When a spent usage limit moves a turn to another account, carry the provider session (the model keeps everything, and re-reads all of it once on the other account) while the conversation's context is under this many tokens; at or above it, start a fresh session with the sandbox's measured brief instead. Zero always starts fresh."),
		autoResumeOnRestart: I().default(!1).describe("Whether a turn killed by the sandbox restarting is re-run once it comes back. Off to begin with, for the same reason: it would spend your allowance on work you are not watching and edit files while you are still waiting for the sandbox to return. Either way the interruption is recorded rather than silently lost."),
		adoptedChecks: B(N(), N()).default({}).describe("Which repositories may run the checks they declare for themselves, and exactly which version of those checks you agreed to. A repository's declaration does nothing until it appears here, the same rule git keeps for hooks, which are never cloned; and a declaration that changes afterwards is held until you look at it again."),
		rules: L(aw).max(50).default([]).describe("Standing instructions you give the sandbox about its own work: ask for proof before a turn ends, run something before a push, hold or release finished work. Empty is the default and is exactly the behaviour of a fresh sandbox, because each of those defaults is what no rule matched means at its own moment."),
		automationFailureLimit: F().min(0).max(20).default(0).describe("How many failures in a row before an automation switches itself off. Zero means never, which is the default, because the failure is not always the automation's fault and a job disabled at three in the morning is one nobody re-enables. Only real errors count: a guard deciding there was nothing to do, or the sandbox dying mid-run, say nothing about the automation."),
		admission: xd.prefault({}).describe("Whether work started from outside may run, per kind of trigger: let it, hold it for approval, or refuse it. Composes with each automation's own setting, and the stricter of the two wins, so holding every visitor's message needs no edit to each automation."),
		actionRules: B(N(), vd).default({}).describe("What an agent may do out in the world, per kind of action: go ahead, ask first, or never."),
		commandJudge: WC.default("on").describe("Whether a model reads your safety policy before a flagged command runs. Off judges nothing and asks about nothing; Watch judges everything and records it without ever interrupting you, which is how you find out what your policy actually does before you let it stop anything; On lets the verdict decide. Wiping a disk or deleting under /history asks at every setting — that rule is typed rather than judged, and cannot be turned off."),
		subagentsAtOnce: F().min(1).max(200).default(20).describe("How many subagents may work at the same time."),
		subagentsPerTurn: F().min(1).max(2e3).default(200).describe("How many a single turn may start in total."),
		subagentDepth: F().min(1).max(10).default(3).describe("How many levels deep the delegation may go, since a subagent can start subagents of its own.")
	}), _w = R({
		text: N(),
		version: N()
	}), vw = R({
		id: N(),
		commands: F(),
		savedTokens: F()
	}), yw = R({
		updatedAt: F().optional(),
		commands: F(),
		rawTokens: F(),
		emittedTokens: F(),
		savedPct: F(),
		perCleaner: L(vw),
		holdout: R({
			cleaned: F(),
			heldOut: F(),
			measuredSavedPct: F().optional()
		}),
		gaps: L(R({
			command: N(),
			commands: F(),
			tokens: F()
		}))
	}), bw = R({
		turns: F(),
		mean: F()
	}), xw = R({
		metric: V([
			"searchCalls",
			"openingSearches",
			"openingListings",
			"callsBeforeTarget"
		]),
		on: bw,
		off: bw,
		controlTurnsNeeded: F().optional(),
		marginPct: F().optional(),
		deltaPct: F().optional(),
		saved: F().optional()
	}), Sw = R({
		metrics: pc([xw], xw),
		minTurns: F(),
		sampleUnit: V([
			"turns",
			"conversations",
			"opening turns"
		]).optional(),
		cohort: N().optional()
	}), Cw = R({
		judged: F(),
		fast: F(),
		atStakeUsd: F(),
		routed: F(),
		routedUsd: F(),
		escalated: F(),
		denied: F()
	}), ww = R({
		prevented: N(),
		chosen: N(),
		reason: N(),
		at: F().optional()
	}), Tw = R({
		checked: F(),
		improved: F(),
		recent: L(ww),
		updatedAt: F().optional()
	}), Ew = R({
		input: yw,
		search: Sw.optional(),
		map: Sw.optional(),
		tier: Cw.optional(),
		dependencies: Tw.optional()
	}), Dw = `${Cp}/checks.json`, Ow = V(["turn", "push"]), kw = R({
		when: Ow.describe("When to run it: `turn` before the assistant finishes, `push` before code leaves the machine."),
		run: N().min(1).max(500).describe("The command, run in this repository's own directory, so it reads as it would in a terminal there."),
		label: N().min(1).max(80).optional().describe("What to call it on screen. Absent names it after the command."),
		timeoutMs: F().min(6e4).max(36e5).optional().describe("How long it may take before it is killed and counted as failed."),
		paths: L(N().min(1)).max(20).optional().describe("Only run it when the change touches these paths, written relative to this repository. Absent runs it on every change here.")
	}), R({ checks: L(kw).max(10).default([]) }), Aw = R({
		repo: N().describe("Which repository, by its workspace id (\"root\" is the workspace itself)."),
		path: N().describe("Where the declaration lives, relative to the workspace, whether or not the file exists yet."),
		checks: L(kw).describe("What it declares, in the order the file lists them."),
		adopted: I().describe("Whether these are running. False means declared and inert: nothing a repository writes runs until the owner switches it on."),
		changed: I().describe("Whether the declaration changed since it was adopted, which holds it until the owner looks again. True only for a repository that was adopted before."),
		error: N().optional().describe("Why the file could not be read, when it exists but does not parse. The checks list is empty in that case.")
	}), jw = R({ repos: L(Aw).describe("Every repository that declares checks, plus any the owner has adopted before, sorted by id.") }), Mw = R({
		repo: N().min(1).describe("Which repository's declaration to switch."),
		on: I().describe("On adopts what it declares as it stands now; off stops running it. Adopting again is how a changed declaration is accepted.")
	});
})), Pw, Fw, Iw, Lw, Rw, zw, Bw, Vw, Hw, Uw, Ww, Gw, Kw, qw, Jw, Yw = w((() => {
	K(), wC(), X(), ud(), Nw(), Pw = R({
		files: V([
			"none",
			"read",
			"write"
		]).default("write").describe("What it may do with files: nothing, look and search, or also create and change."),
		shell: I().default(!0).describe("Whether it may run commands, and with them the terminals, the test runs and every tool on the image. The switch the strength of the others depends on."),
		code: I().default(!0).describe("Whether it may write and run a script rather than a command line. Its fence is real where the shell's is not: reads and writes follow the files answer, and it can start no other program unless commands are allowed too. The one stated gap is that the fence cannot cut the network."),
		web: I().default(!0).describe("Whether it may fetch a page or run a search."),
		browser: I().default(!0),
		delegate: I().default(!0),
		sandbox: I().default(!0),
		connectors: L(Y).max(100).optional(),
		devices: L(Y).max(50).optional(),
		mcp: L(Y).max(50).optional()
	}), Fw = R({
		startIn: N().max(200).optional().describe("Which folder a conversation opens in."),
		folders: L(N().min(1)).max(50).optional().describe("Which folders it may touch at all. Absent means the whole workspace.")
	}), Iw = R({ repos: L(N().min(1).max(200)).max(50).describe("Which nested repositories a conversation wearing this card carries, by workspace-relative path. The workspace itself is always carried; empty means the workspace alone.") }), Lw = V([
		"map",
		"context",
		"skills",
		"search",
		"delegation",
		"checks",
		"dependencies",
		"repoSync",
		"handoff"
	]), Rw = R({ omit: L(Lw).max(20).describe("Which of the notes the sandbox prepends to each message a conversation wearing this card does NOT get. Everything not named here is sent as usual; the notes that keep a turn inside its own branch or explain a missing account cannot be named at all.") }), zw = R({
		id: Y.describe("The persona's id."),
		label: N().max(60).optional().describe("What to call it on screen. Absent falls back to the id, which somebody chose anyway."),
		capabilities: L(Y).max(50).describe("Which connected accounts are its hands. Named individually rather than by site, because two accounts on one site is the whole problem this solves. Naming one that is not connected yet is not an error: it is a card describing an account this sandbox has still to sign into."),
		brief: N().max(200).optional().describe("What this persona is for, in one line. A new chat is routed onto a persona by this sentence, and the Personas page shows it under the name."),
		powers: Pw.optional().describe("What a conversation wearing it may do. Absent means the full toolbox, so a card written before this existed behaves exactly as it did."),
		workspace: Fw.optional().describe("Where it works. Absent means the whole workspace."),
		context: Iw.optional().describe("Which part of the workspace a conversation wearing it carries: the repositories its checkout holds. Absent means every repository."),
		briefing: Rw.optional().describe("Which of the notes the sandbox prepends to every message this card's conversations do without. Absent means all of them, which is what a card written before this existed keeps."),
		models: L(Dd).max(10).optional().describe("Which models a conversation wearing it runs on, tried in order. Absent means whatever the chat or the job would have run on anyway; a model chosen for the turn itself always wins."),
		systemPromptMode: YC.optional()
	}), Bw = R({
		prompt: N().min(1).max(2e4).describe("The message a new chat is about to open with."),
		folder: N().max(200).optional().describe("The workspace folder the chat was opened in, when it was opened in one."),
		paths: L(N().min(1).max(500)).max(50).default([]).describe("Workspace paths the message names: uploads, @-mentions, the editor's own file.")
	}), Vw = R({
		persona: Y.optional().describe("The card this message belongs to, or absent when none does and the chat should stay open to everything."),
		reason: N().describe("Why, in the one line a chat can show. Present whether or not a card was named."),
		model: N().optional().describe("Which model answered, as `provider:model`, so the chat can name what the reading cost. Absent when no model was asked at all, which a folder match and an empty persona list both are.")
	}), Hw = R({ id: Y.describe("Which persona.") }), Uw = R({
		personas: L(zw).describe("The characters an agent can wear."),
		connected: L(N()).describe("Which accounts are actually connected right now, so a persona naming one that has since been disconnected can be shown as broken rather than as working.")
	}), Ww = R({
		prompt: N().describe("What this persona is told, on top of everything else. Empty means it simply follows the sandbox's own instructions."),
		skills: L(R({
			name: N().describe("The skill's name."),
			description: N().describe("What it is for.")
		})).describe("Skills only this persona's conversations can reach. A different question from what the agent knows generally, with a different answer.")
	}), Gw = Hw.extend({ prompt: N().max(2e4).describe("What to tell this persona. Sending an empty one removes it entirely rather than storing a blank, so the persona falls back to the sandbox's own instructions.") }), Kw = Hw.extend(pw.shape), qw = Hw.extend({ name: cw.describe("Which skill.") }), Jw = R({
		name: N().describe("The skill's name."),
		description: N().describe("What it is for."),
		body: N().describe("The skill itself, in full.")
	});
})), Xw, Zw = w((() => {
	J(), Yw(), $(), Xw = {
		list: q.route({
			method: "GET",
			path: "/personas",
			summary: "The characters an agent can wear",
			description: "Each persona with the connected accounts it speaks for, what a conversation wearing it is allowed to do, and where it works."
		}).output(Uw),
		save: q.route({
			method: "POST",
			path: "/personas",
			summary: "Create or edit a persona",
			description: "Writes the whole card; sending an id that exists edits it. Nothing is connected, installed or spent by saving one, because a persona only records a decision about accounts that already exist. It is stored as a file you can equally well edit by hand, which is why this writes the card whole rather than patching a field: a round trip through a screen should leave a change a reviewer recognises."
		}).input(zw).output(Z),
		remove: q.route({
			method: "DELETE",
			path: "/personas/{id}",
			summary: "Delete a persona",
			description: "Takes away the character, never the accounts: every login it named stays connected. Its own prompt and skills go with it, since a folder nothing can reach is worse than deleting what somebody just asked to delete. Anything still pointed at it goes quiet rather than falling back to speaking as everyone."
		}).input(Hw).output(Z),
		route: q.route({
			method: "POST",
			path: "/personas/route",
			summary: "Which persona a new chat belongs to",
			description: "Reads the message a chat has just been sent, and one line per persona, and names the card it belongs to, or none, along with the model that answered. Costs one small model call on the persona-routing list, and says so. Nothing is applied here: the chat that asked puts the card on, and only when the persona routing setting is on."
		}).input(Bw).output(Vw),
		kit: q.route({
			method: "GET",
			path: "/personas/{id}/kit",
			summary: "What one persona carries",
			description: "The instructions this persona is given and the skills only its conversations can reach. A different question from what the agent knows generally, with a different answer."
		}).input(Hw).output(Ww),
		savePrompt: q.route({
			method: "POST",
			path: "/personas/{id}/prompt",
			summary: "Write a persona's instructions",
			description: "Sets what this persona is told. Saving an empty one removes it entirely rather than storing a blank, so the persona simply falls back to the sandbox's own instructions."
		}).input(Gw).output(Z),
		readSkill: q.route({
			method: "GET",
			path: "/personas/{id}/skills/read",
			summary: "Read one of a persona's skills",
			description: "The full text of a single skill belonging to this persona."
		}).input(qw).output(Jw),
		saveSkill: q.route({
			method: "POST",
			path: "/personas/{id}/skills",
			summary: "Write one of a persona's skills",
			description: "Creates or replaces a skill by name. There is nothing to switch on: a persona's skill is available exactly when that persona is worn, which is what belonging to it has to mean."
		}).input(Kw).output(Z),
		removeSkill: q.route({
			method: "POST",
			path: "/personas/{id}/skills/remove",
			summary: "Delete one of a persona's skills",
			description: "Removes a single skill from this persona and leaves the rest of its kit alone."
		}).input(qw).output(Z)
	};
})), Qw, $w, eT, tT, nT, rT, iT, aT, oT, sT, cT, lT, uT, dT, fT, pT, mT, hT, gT, _T, vT, yT, bT, xT, ST, CT, wT, TT, ET, DT, OT, kT = w((() => {
	K(), ud(), $(), P_(), Qw = N().regex(/^[0-9a-f]{4,64}$/), $w = R({
		sha: N().describe("The commit, in full."),
		short: N().describe("The abbreviated form, for showing."),
		parents: L(N()).describe("What it came from. None means the first commit, one is ordinary, two or more is a merge, which is what a graph draws its lanes from."),
		subject: N().describe("Its first line."),
		body: N().describe("Everything after that."),
		author: N().describe("Who wrote it."),
		email: N().describe("Their address."),
		at: F().describe("When they wrote it, in milliseconds."),
		refs: L(N()).describe("Branches and tags sitting on it."),
		head: I().describe("Whether this is where the repository currently stands.")
	}), eT = R({
		repo: N().describe("Which repository."),
		branch: N().optional().describe("Which branch these are from."),
		commits: L($w).describe("The commits, newest first."),
		hasMore: I().describe("There are older ones behind this page. It is also what stops the last row being drawn as the beginning of history, which is how a truncated log used to claim it started where the page happened to stop.")
	}), tT = Q.extend({
		limit: G().int().positive().max(2e3).optional().describe("How many commits to return."),
		skip: G().int().nonnegative().max(1e6).optional().describe("How many newer commits to step over, which is how you page further back. Paged rather than read whole, because a large repository's history is tens of thousands of rows.")
	}), nT = R({ repos: L(N()).describe("Every repository's id. The workspace itself is always present as \"root\".") }), rT = R({
		repo: N().describe("The workspace repository."),
		host: N().describe("Which forge its remote points at."),
		project: N().describe("Which project there, as owner and name.")
	}), iT = R({ repos: L(rT).describe("Each repository matched to the project its remote points at.") }), aT = Q.extend({
		path: N().min(1).describe("Which file, relative to the repository."),
		content: N().describe("Its whole new contents."),
		message: N().min(1).describe("The commit message.")
	}), oT = R({
		ok: I().describe("Whether the whole thing went through."),
		wrote: I().describe("The file was written."),
		committed: I().describe("The commit was recorded."),
		pushed: I().describe("It reached the remote."),
		branch: N().optional().describe("Which branch it happened on."),
		defaultBranch: N().optional().describe("Which branch the repository considers its main one, so a caller can see it was on a side branch."),
		reason: N().optional().describe("Why it stopped where it did. Being on a side branch, having no remote and having no credentials are all reported here rather than raised.")
	}), sT = Q.extend({ sha: Qw.describe("Which commit.") }), cT = R({ files: L(f_).describe("Which files it touched, with counts but not contents. Fetch any one file's contents separately, so a commit with a thousand files stays one cheap answer.") }), lT = Q.extend({
		sha: Qw.describe("Which commit."),
		path: N().min(1).describe("Which file in it.")
	}), uT = Q.extend({
		sha: Qw.describe("Which commit to start it at."),
		name: cd.describe("The new branch's name.")
	}), dT = Q.extend({
		sha: Qw.describe("Which commit to tag."),
		name: cd.describe("The tag's name.")
	}), fT = Q.extend({ ref: cd.describe("Where to switch to: a branch, a tag, or a commit.") }), pT = Q.extend({
		name: cd.describe("Which tag."),
		remote: cd.optional().describe("Also delete it there. Leave it out to remove it locally only.")
	}), mT = Q.extend({
		name: cd.describe("Which tag."),
		remote: cd.describe("Which remote to send it to.")
	}), hT = Q.extend({
		sha: Qw.describe("Which commit to move the branch to."),
		mode: V([
			"soft",
			"mixed",
			"hard"
		]).describe("How much to take with it: move the branch alone, also unstage, or also throw away what is on disk. The last one takes a checkpoint first.")
	}), gT = Q.extend({ sha: Qw.describe("Which commit to act on.") }), _T = R({
		ok: I().describe("Whether it worked."),
		reason: N().optional().describe("Why not, in git's own words. A conflict, a missing remote and missing credentials are all reported here rather than raised, because they are things a screen has to render rather than breakages.")
	}), vT = R({
		ref: N().describe("How to address it, which applying and dropping take."),
		sha: N().describe("The commit behind it, because a stash entry is a commit."),
		short: N().describe("The abbreviated form, for showing."),
		subject: N().describe("What it was set aside as, with git's own scaffolding stripped off."),
		branch: N().optional().describe("Which branch it was set aside from."),
		at: F().describe("When, in milliseconds."),
		parents: L(N()).describe("What it sits on, so a graph can draw it like any other commit.")
	}), yT = R({
		repo: N().describe("Which repository."),
		stashes: L(vT).describe("What is set aside, newest first.")
	}), bT = N().regex(/^stash@\{\d{1,4}\}$/), xT = Q.extend({
		message: N().max(500).optional().describe("What to call it, so you know what it was later."),
		includeUntracked: I().optional().describe("Also set aside files git is not yet tracking, which are otherwise left where they are.")
	}), ST = Q.extend({
		ref: bT.describe("Which entry."),
		pop: I().optional().describe("Remove it from the stash once it has been applied cleanly.")
	}), CT = Q.extend({ ref: bT.describe("Which entry.") }), wT = Q.extend({ ref: bT.describe("Which entry.") }), TT = V([
		"commit",
		"amend",
		"merge",
		"rebase",
		"cherry-pick",
		"revert",
		"reset",
		"pull",
		"other"
	]), ET = R({
		kind: TT.describe("What the last action was."),
		description: N().describe("What undoing it would do, in words."),
		branch: N().describe("Which branch would move."),
		sha: N().describe("Where it stands now."),
		previousSha: N().describe("Where it would go back to. Send this with the undo as proof you looked, so one prepared against a view that has since moved is refused rather than landing somewhere unexamined."),
		changesWorkingTree: I().describe("Undoing would rewrite files as well as moving the branch, so anything offering it should warn about losing work.")
	}), DT = R({
		repo: N().describe("Which repository."),
		action: ET.optional().describe("What undoing would reverse. Absent means there is nothing to go back from.")
	}), OT = Q.extend({
		previousSha: Qw.describe("Where to go back to, from the matching read. It is also proof you looked: one prepared against a stale view is refused."),
		discardChanges: I().optional().describe("Also rewrite the files, rather than only moving the branch.")
	});
})), AT, jT = w((() => {
	J(), P_(), kT(), Uh(), $(), AT = {
		changes: q.route({
			method: "GET",
			path: "/git/changes",
			summary: "Uncommitted work across every repo",
			description: "The workspace's whole review set in one answer: every repo that has something uncommitted, and within it every changed file with its status and line counts. This is what the Changes panel draws, and it is the call to make when you want to know whether a workspace is clean without walking the repos yourself."
		}).output(C_),
		repos: q.route({
			method: "GET",
			path: "/git/repos",
			summary: "Every git repo in the workspace",
			description: "The repos the daemon found under the workspace root, each with the id every other call in this group expects as its `{repo}` segment. The workspace root itself is always present as `root`."
		}).output(nT),
		remoteRepos: q.route({
			method: "GET",
			path: "/git/remote-repos",
			summary: "Repos matched to their remotes",
			description: "The same repo list, but with the forge host and `owner/name` each one's remote points at. Use it to recognise a workspace repo in a list of names that came from somewhere else, such as a set of pull requests. Costs a remote lookup per repo, which is why it is separate from the plain repo list."
		}).output(iT),
		log: q.route({
			method: "GET",
			path: "/git/{repo}/log",
			summary: "Commit history for one repo",
			description: "A page of commits on the current branch, newest first, each with its author, subject, timestamp and the refs pointing at it. Paginate with the cursor the answer hands back rather than by offset, so a commit landing mid-scroll does not shift the page under you."
		}).input(tT).output(eT),
		commitDiff: q.route({
			method: "GET",
			path: "/git/{repo}/commit-diff",
			summary: "What one commit changed",
			description: "The list of files a single commit touched, with per-file status and line counts but not the content. Fetch the content of any one of them with the commit file diff call, so a commit with a thousand files stays one cheap answer."
		}).input(sT).output(cT),
		commitFileDiff: q.route({
			method: "GET",
			path: "/git/{repo}/commit-file-diff",
			summary: "One file's before and after at a commit",
			description: "Both sides of a single file as of one commit: the content its parent had and the content that commit left. The daemon returns whole sides rather than a patch, so a caller can render the comparison however it likes."
		}).input(lT).output(Hh),
		operation: q.route({
			method: "GET",
			path: "/git/{repo}/operation",
			summary: "Whether a merge or rebase is halted mid-flight",
			description: "Names the git operation the worktree is stuck inside, if any: a conflicted merge, an interrupted rebase, a half-applied cherry-pick. Check this first when another call refuses, because a halted worktree is the usual reason and the abort call is the way out."
		}).input(Q).output(b_),
		abort: q.route({
			method: "POST",
			path: "/git/{repo}/abort",
			summary: "Abandon a halted merge or rebase",
			description: "Runs git's own abort for whichever operation has the worktree halted, putting the repo back where it stood before the operation started. Nothing else clears that state."
		}).input(Q).output(_T),
		undoable: q.route({
			method: "GET",
			path: "/git/{repo}/undo",
			summary: "What undoing the last action would do",
			description: "Reads the branch's reflog to describe the move that undo would reverse, and hands back the commit it would land on. Pass that commit to the undo call as proof you looked, and an undo prepared against a view that has since moved is refused rather than landing somewhere unexamined."
		}).input(Q).output(DT),
		undo: q.route({
			method: "POST",
			path: "/git/{repo}/undo",
			summary: "Move the branch back one step",
			description: "Walks the current branch back to where it pointed before its last action. This moves the branch ref and leaves the working tree alone, which is the opposite of restoring a checkpoint. Requires the commit the matching read handed you."
		}).input(OT).output(_T),
		stashes: q.route({
			method: "GET",
			path: "/git/{repo}/stashes",
			summary: "Everything set aside in the stash",
			description: "The repo's stash entries, newest first, each with the message and the commit behind it. A stash entry is a commit, so it reads the same way a log entry does and its contents come back from the stash diff call."
		}).input(Q).output(yT),
		stashDiff: q.route({
			method: "GET",
			path: "/git/{repo}/stash-diff",
			summary: "What one stash entry holds",
			description: "The files a single stash entry would bring back, with per-file status and line counts. The same shape a commit diff has, because a stash entry is a commit."
		}).input(wT).output(cT),
		stashPush: q.route({
			method: "POST",
			path: "/git/{repo}/stash",
			summary: "Set the current changes aside",
			description: "Moves the working tree's changes onto the stash and leaves a clean tree behind. Nothing is lost: the entry is a commit you can inspect, apply or drop afterwards."
		}).input(xT).output(_T),
		stashApply: q.route({
			method: "POST",
			path: "/git/{repo}/stash/apply",
			summary: "Bring a stash entry back",
			description: "Replays one stash entry onto the working tree. A conflict is reported in the answer rather than raised as a failure, because a conflicting apply is an ordinary outcome a screen has to render."
		}).input(ST).output(_T),
		stashDrop: q.route({
			method: "POST",
			path: "/git/{repo}/stash/drop",
			summary: "Discard a stash entry",
			description: "Deletes one stash entry. This is the only unrecoverable call in the stash set, so the daemon takes a checkpoint of the workspace first."
		}).input(CT).output(Z),
		createBranch: q.route({
			method: "POST",
			path: "/git/{repo}/branch",
			summary: "Start a branch at a commit",
			description: "Points a new branch name at any commit, without moving HEAD. Use the checkout call if you also want to switch to it."
		}).input(uT).output(Z),
		createTag: q.route({
			method: "POST",
			path: "/git/{repo}/tag",
			summary: "Tag a commit",
			description: "Puts a tag on any commit. Local only: pushing it to the remote is a separate call."
		}).input(dT).output(Z),
		deleteTag: q.route({
			method: "POST",
			path: "/git/{repo}/tag/delete",
			summary: "Remove a tag",
			description: "Deletes a tag locally. A tag already pushed stays on the remote until it is deleted there too."
		}).input(pT).output(Z),
		pushTag: q.route({
			method: "POST",
			path: "/git/{repo}/tag/push",
			summary: "Send a tag to the remote",
			description: "Pushes one tag to the repo's remote. Reports the outcome rather than failing, since a missing remote or missing credentials are ordinary answers here."
		}).input(mT).output(_T),
		checkout: q.route({
			method: "POST",
			path: "/git/{repo}/checkout",
			summary: "Switch to a branch or commit",
			description: "Moves HEAD to a branch, tag or commit and reshapes the working tree to match. The daemon takes a checkpoint first, so an unexpected result is recoverable. Uncommitted work that would be overwritten is reported instead of being trampled."
		}).input(fT).output(_T),
		cherryPick: q.route({
			method: "POST",
			path: "/git/{repo}/cherry-pick",
			summary: "Replay one commit onto this branch",
			description: "Applies a single commit's changes on top of the current branch as a new commit. A conflict comes back in the answer, with the halted state readable from the operation call."
		}).input(gT).output(_T),
		revert: q.route({
			method: "POST",
			path: "/git/{repo}/revert",
			summary: "Undo a commit with a new commit",
			description: "Adds a commit that reverses an earlier one, leaving the history intact. This is the safe way to take something back on a branch other people have pulled."
		}).input(gT).output(_T),
		drop: q.route({
			method: "POST",
			path: "/git/{repo}/drop",
			summary: "Remove a commit from history",
			description: "Rewrites the branch so one commit is no longer in it. History changes, so this is for branches nobody else has pulled. A checkpoint is taken first."
		}).input(gT).output(_T),
		merge: q.route({
			method: "POST",
			path: "/git/{repo}/merge",
			summary: "Merge another branch in",
			description: "Merges a branch or commit into the current one. Conflicts are reported in the answer and leave the worktree halted, which the operation call explains and the abort call clears."
		}).input(gT).output(_T),
		rebase: q.route({
			method: "POST",
			path: "/git/{repo}/rebase",
			summary: "Replay this branch onto another",
			description: "Moves the current branch's commits on top of a different base. History changes. Conflicts halt the rebase and are reported rather than raised, so the operation and abort calls are the way through."
		}).input(gT).output(_T),
		reset: q.route({
			method: "POST",
			path: "/git/{repo}/reset",
			summary: "Move the branch to a commit",
			description: "Repoints the current branch at another commit, optionally reshaping the working tree to match. The destructive modes take a checkpoint first."
		}).input(hT).output(_T),
		fileDiff: q.route({
			method: "GET",
			path: "/git/{repo}/file-diff",
			summary: "One file's committed and working copies",
			description: "Both sides of a file as it stands right now: what the last commit holds and what is on disk. This is what a review pane shows for an uncommitted change."
		}).input(c_).output(Hh),
		status: q.route({
			method: "GET",
			path: "/git/{repo}/status",
			summary: "One repo's branch and pending changes",
			description: "The current branch, its sync position against the remote, and every staged, unstaged and untracked path. The single-repo counterpart to the workspace-wide changes call."
		}).input(Q).output(l_),
		commit: q.route({
			method: "POST",
			path: "/git/{repo}/commit",
			summary: "Commit the pending changes",
			description: "Records a commit with your message. It commits whatever is staged; add `stage` to stage something first — an empty object for everything pending, or a scope such as one side or one conversation's landed files. The answer carries the commit it created."
		}).input(e_).output(w_),
		discard: q.route({
			method: "POST",
			path: "/git/{repo}/discard",
			summary: "Throw away pending changes",
			description: "Restores files to their committed state and deletes untracked ones. Name paths or a scope to narrow it; with neither it throws away every uncommitted change in the repository. The daemon checkpoints the workspace first, so this is recoverable from the timeline."
		}).input(t_).output(Z),
		stage: q.route({
			method: "POST",
			path: "/git/{repo}/stage",
			summary: "Mark changes for the next commit",
			description: "Adds changes to the index: exactly the paths you name, everything a scope describes, or the whole repository when you name neither. Nothing on disk changes, so this is always safe and always reversible with the unstage call."
		}).input(n_).output(Z),
		unstage: q.route({
			method: "POST",
			path: "/git/{repo}/unstage",
			summary: "Take changes back out of the next commit",
			description: "Removes changes from the index and leaves the files themselves untouched, on the same terms as staging. The exact reverse of it."
		}).input(n_).output(Z),
		branches: q.route({
			method: "GET",
			path: "/git/{repo}/branches",
			summary: "Local branches and how far each has drifted",
			description: "Every local branch with how many commits it sits ahead of and behind its remote counterpart, so a branch switcher can show sync state without a call per branch."
		}).input(Q).output(g_),
		createBranchAt: q.route({
			method: "POST",
			path: "/git/{repo}/branches",
			summary: "Create a branch from a starting point",
			description: "Makes a branch at a named start point and optionally switches to it. The branch-switcher counterpart to creating a branch at a specific commit."
		}).input(__).output(Z),
		deleteBranch: q.route({
			method: "POST",
			path: "/git/{repo}/branches/delete",
			summary: "Delete a local branch",
			description: "Removes a branch from the repo. Unmerged work is refused unless you ask for it to be forced, and the remote branch is untouched either way."
		}).input(v_).output(Z),
		remote: q.route({
			method: "GET",
			path: "/git/{repo}/remote",
			summary: "Sync position against the remote",
			description: "How far the current branch sits ahead of and behind its remote, as of the last fetch, plus whether a remote and working credentials exist at all. This is a read of what the daemon already knows, not a network call, which is why fetching is a separate button."
		}).input(Q).output(p_),
		fetch: q.route({
			method: "POST",
			path: "/git/{repo}/fetch",
			summary: "Refresh what the remote holds",
			description: "Contacts the remote and updates the daemon's picture of it without touching your branch. Run this before trusting the sync position."
		}).input(Q).output(_T),
		pull: q.route({
			method: "POST",
			path: "/git/{repo}/pull",
			summary: "Bring remote commits down",
			description: "Fetches and integrates the remote's commits into the current branch. A pull that cannot fast-forward is reported in the answer rather than raised, because that is an ordinary thing to be told."
		}).input(Q).output(_T),
		push: q.route({
			method: "POST",
			path: "/git/{repo}/push",
			summary: "Start sending commits to the remote",
			description: "Starts pushing the current branch, setting its upstream on first push, and answers at once: the push runs in a real terminal (it runs this repository's pre-push hook, which can be a whole suite), so watch it there and poll pushState for the verdict. A second start while one is going joins it rather than pushing twice."
		}).input(r_).output(Z),
		pushState: q.route({
			method: "GET",
			path: "/git/{repo}/push",
			summary: "How the push is going",
			description: "The verdict, or the progress so far: where it is, the terminal it runs in, and for a push that did not go, git's last words and who refused it, the repository's own pre-push hook, the remote, or the transport. Idle when nothing has been started for this repository."
		}).input(Q).output(a_),
		pushCancel: q.route({
			method: "POST",
			path: "/git/{repo}/push/cancel",
			summary: "Stop the push",
			description: "Kills the run. It settles as cancelled; nothing that git had not already sent reaches the remote."
		}).input(Q).output(Z),
		files: q.route({
			method: "GET",
			path: "/git/{repo}/files",
			summary: "Every tracked path in the repo",
			description: "The flat list of files git tracks, which is what a file picker or a search box wants. Ignored and untracked files are not in it."
		}).input(Q).output(u_),
		readFile: q.route({
			method: "GET",
			path: "/git/{repo}/file",
			summary: "Read a file from the repo",
			description: "The contents of one file as it stands on disk. A path that climbs out of the repo is refused."
		}).input(o_).output(d_),
		writeFile: q.route({
			method: "PUT",
			path: "/git/{repo}/file",
			summary: "Write a file into the repo",
			description: "Replaces one file's contents, creating it and its parent folders if they are missing. Nothing is committed: the change shows up as pending work."
		}).input(s_).output(Z),
		publishFile: q.route({
			method: "POST",
			path: "/git/{repo}/publish-file",
			summary: "Write, commit and push one file",
			description: "The three steps as a single call with a single answer, committing only the path you named and leaving any other pending work alone. Being on a side branch, having no remote and having no credentials are all reported rather than raised."
		}).input(aT).output(oT)
	};
})), MT, NT = w((() => {
	J(), Uh(), $(), MT = {
		list: q.route({
			method: "GET",
			path: "/history/snapshots",
			summary: "Points you can go back to",
			description: "The saved states of the whole workspace, taken automatically as work happens. This is the timeline behind undoing a change that was never committed."
		}).output(Ph),
		diff: q.route({
			method: "GET",
			path: "/history/diff",
			summary: "What changed since a saved point",
			description: "The files that differ between one saved point and the one before it, taking in everything that happened in between."
		}).input(Lh).output(zh),
		fileDiff: q.route({
			method: "GET",
			path: "/history/file-diff",
			summary: "One file's before and after across a saved point",
			description: "Both sides of a single file at one point in the timeline."
		}).input(Bh).output(Hh),
		restore: q.route({
			method: "POST",
			path: "/history/restore",
			summary: "Put the workspace back",
			description: "Returns every file to how it stood at a saved point. This restores the files; moving a branch is a different thing and lives with the git calls."
		}).input(Lh).output(Z)
	};
})), PT, FT = w((() => {
	K(), PT = R({ args: L(N()) });
})), IT, LT = w((() => {
	J(), Hv(), FT(), $(), IT = {
		run: q.route({
			method: "POST",
			path: "/intentic",
			summary: "Run an infrastructure command",
			description: "Runs the sandbox's own command-line tool and streams its output as it arrives, so progress is visible rather than arriving all at once at the end. A failure surfaces once the stream closes."
		}).input(PT).output(Mu(Tv)),
		apply: q.route({
			method: "POST",
			path: "/intentic/apply",
			summary: "Bring the infrastructure into line",
			description: "Starts the long reconcile that makes the running world match what was declared, and answers immediately. It takes minutes, so it runs in a terminal you attach to rather than on a held-open request."
		}).output(Z),
		applyEvents: q.route({
			method: "GET",
			path: "/intentic/apply/events",
			summary: "Follow the reconcile",
			description: "The same progress the terminal shows, as structured events, kept on disk so a page refresh does not lose it. It replays from the start of the run and then follows live, closing when the run ends."
		}).output(Mu(Tv))
	};
})), RT, zT = w((() => {
	J(), gy(), RT = {
		list: q.route({
			method: "GET",
			path: "/inventory",
			summary: "Machines and services you have declared",
			description: "What the deployment configuration says this setup owns and what it wants provisioned."
		}).output(hy),
		add: q.route({
			method: "POST",
			path: "/inventory",
			summary: "Declare a machine or service",
			description: "Writes the entry into the configuration file and commits it, exactly as an agent editing that file by hand would. Answers with the whole updated list, so a screen redraws from one response."
		}).input(py).output(hy),
		remove: q.route({
			method: "DELETE",
			path: "/inventory/{name}",
			summary: "Undeclare a machine or service",
			description: "Takes the entry back out of the configuration and commits that too. Answers with the whole updated list."
		}).input(my).output(hy)
	};
})), BT, VT = w((() => {
	J(), lg(), $(), BT = {
		list: q.route({
			method: "GET",
			path: "/issues",
			summary: "Bugs your users have reported",
			description: "Everything that has crashed or been written in, grouped so a crash that hit a thousand people is one row with a count."
		}).output(ng),
		status: q.route({
			method: "POST",
			path: "/issues/{id}/status",
			summary: "File one away, or reopen it",
			description: "Moves one issue between open, resolved and ignored. Resolving does not close anything upstream: it is your own inbox."
		}).input(ig).output(Z),
		investigate: q.route({
			method: "POST",
			path: "/issues/{id}/investigate",
			summary: "Put an agent on it now",
			description: "Starts a turn on this issue with the crash, its stack and what led up to it as the brief. Answers straight away and runs detached; the issue goes to 'being looked at'."
		}).input(rg).output(Z),
		remove: q.route({
			method: "DELETE",
			path: "/issues/{id}",
			summary: "Throw one away",
			description: "Forgets an issue entirely. It will come back as new if it happens again, which is usually what you want."
		}).input(rg).output(Z),
		installs: q.route({
			method: "GET",
			path: "/issues/installs/{automationId}",
			summary: "Which sites have loaded the reporter",
			description: "The sites whose pages actually loaded this intake's script, and the ones that were turned away. The answer to 'did the snippet land?', which an empty inbox cannot give you."
		}).input(cg).output(sg)
	};
})), HT, UT, WT, GT, KT, qT, JT, YT, XT = w((() => {
	K(), HT = R({
		name: N().describe("Its name, which is what the read route takes."),
		sizeBytes: F().describe("Size in bytes."),
		modifiedAt: F().describe("When it last changed, in milliseconds.")
	}), UT = R({ files: L(HT).describe("Every log the sandbox keeps: captured terminal output, command runs, and its own log.") }), WT = R({
		name: N().min(1).describe("Which log. It travels in the query rather than the address, because log names contain slashes."),
		bytes: G().min(1).max(1048576).default(65536).describe("How much of the end to read. The newest bytes win when the file is larger.")
	}), GT = R({
		name: N().describe("Which log this is from."),
		sizeBytes: F().describe("How large the whole file is."),
		text: N().describe("The end of it, as text."),
		truncated: I().describe("There is more before what you got.")
	}), KT = R({
		seenAt: F().describe("When the browser saw it, in milliseconds."),
		level: V(["warn", "error"]).describe("How bad it was."),
		event: N().min(1).max(100).describe("What kind of thing it was, as a stable name."),
		message: N().max(2e3).describe("What it said."),
		route: N().max(300).optional().describe("Which page they were on."),
		requestId: N().max(100).optional().describe("Which daemon call it belonged to, when it belonged to one."),
		build: N().max(100).optional().describe("Which build of the app was running."),
		fields: B(N().max(60), dc([
			N().max(4e3),
			F(),
			I()
		])).optional().describe("Whatever else was worth keeping.")
	}), qT = R({ events: L(KT).min(1).max(50).describe("What the browser has to report, oldest first.") }), JT = R({ recorded: F().describe("How many were written down.") }), YT = R({
		clientId: N().describe("This connection's own id, the same one it gave the event stream."),
		idle: I().describe("Whether the person has stopped doing anything."),
		view: N().optional().describe("Which view they are on."),
		sessionId: N().optional().describe("Which conversation they have open."),
		path: N().optional().describe("Which file they are looking at. Sent whole rather than merged: leaving a field out clears it, so a tab that closes a file drops the path in the same report.")
	});
})), ZT, QT = w((() => {
	J(), XT(), ZT = {
		list: q.route({
			method: "GET",
			path: "/logs",
			summary: "Logs the sandbox keeps",
			description: "Every log file the daemon owns: captured terminal output, command runs, and the daemon's own log. Read-only, because only the sandbox writes them."
		}).output(UT),
		read: q.route({
			method: "GET",
			path: "/logs/file",
			summary: "Read part of a log",
			description: "A window of one log file's text. A window rather than the whole thing, because a busy log outgrows any single answer."
		}).input(WT).output(GT),
		report: q.route({
			method: "POST",
			path: "/logs/client",
			summary: "Report what the browser saw",
			description: "Errors the app caught, stalls it measured, and recoveries it performed, written to a log of their own. The browser is the only witness to these, so without it a bug someone hit in their own browser leaves no record at all."
		}).input(qT).output(JT)
	};
})), $T, eE = w((() => {
	J(), Kp(), $(), $T = {
		list: q.route({
			method: "GET",
			path: "/loops",
			summary: "Every loop that has run",
			description: "The loops this workspace has run, newest first, kept after they end. Why it stopped on the fourth round is the question a loop gets read for, and the round-by-round history is the answer."
		}).output(Bp),
		start: q.route({
			method: "POST",
			path: "/loops",
			summary: "Run a conversation until it is done",
			description: "Starts repeating a conversation towards a goal and answers straight away with the loop as recorded; the work carries on without you. The conversation need not exist yet, so run this until it passes can be the first thing you ever say to a new agent. A conversation already looping is refused."
		}).input(Ip).output(zp),
		stop: q.route({
			method: "POST",
			path: "/loops/{conversationId}/stop",
			summary: "Make this round the last",
			description: "Means do not start another round, not stop what is running. Somebody watching the sixth round do good work can say this is the last one without throwing that work away. To cut the current round off as well, stop the conversation too."
		}).input(Vp).output(Z),
		designs: q.route({
			method: "GET",
			path: "/loops/designs",
			summary: "Saved loop designs",
			description: "Loops somebody authored once and can point at a different job each time. A saved loop is the same loop with its goal left blank until you type one, not a different feature."
		}).output(Up),
		saveDesign: q.route({
			method: "POST",
			path: "/loops/designs",
			summary: "Create or replace a saved loop",
			description: "Say which of the two you mean, so a name that happens to collide cannot silently overwrite somebody's work. A design that could never finish, with nothing to produce and nothing to check, is refused in the same words an ad-hoc loop would be: catching that at save time is the whole advantage of saving."
		}).input(Wp).output(Hp),
		removeDesign: q.route({
			method: "DELETE",
			path: "/loops/designs/{id}",
			summary: "Delete a saved loop",
			description: "Removes the design. A loop already running from it keeps going on its own terms, because it took a copy of what it needed when it started."
		}).input(Gp).output(Z)
	};
})), tE, nE, rE, iE, aE = w((() => {
	K(), tE = V([
		"launching",
		"installing",
		"starting",
		"exited"
	]), nE = R({
		repo: N().describe("Which repository."),
		hasPanel: I().describe("Whether it has anything runnable at all."),
		running: I().describe("Whether the sandbox has it running."),
		installed: I().describe("Whether its dependencies are installed, which is what decides whether a start takes seconds or an install first."),
		launch: tE.optional().describe("Where a start the sandbox is running has got to: its shell coming up, installing, its dev command running with nothing listening yet, or exited back to a prompt. Absent when nothing is starting and once it serves."),
		healthy: I().describe("Whether anything it owns is actually answering. A different question: a server still installing is running and not yet healthy, and one somebody started by hand is healthy without the sandbox running it."),
		port: F().optional().describe("The port the sandbox told it to use. What it actually bound is below, and for a repository that pins its own ports those are different numbers."),
		servers: L(R({
			port: F().describe("The port it is listening on, which is what forwarding it takes."),
			url: N().describe("Where it answers, with the right scheme: a server on its own certificate is served over https."),
			dir: N().optional().describe("Which part of the repository it belongs to, which for a repository whose dev command fans out is the only thing telling them apart."),
			session: N().optional().describe("The terminal it runs in: the sandbox's when it started it, yours when you did, and absent when nothing here owns it, which is the case worth designing for.")
		})).describe("Every server this repository is really serving, found by looking at what is listening. Empty when nothing answers."),
		previewUrl: N().optional().describe("Where to open it from outside, present only while that address really serves it. Absent on a sandbox with no outside address."),
		role: V([
			"intent",
			"desired-state",
			"app"
		]).optional().describe("Which of the workspace's three fixed roles this repository fills. Absent for one that was simply cloned in."),
		deployConfig: I().describe("It declares infrastructure."),
		desiredState: I().describe("That declaration has been resolved at least once."),
		directoryUi: I().describe("It carries a small interface of its own."),
		monorepo: I().describe("It holds several packages."),
		vitest: I().describe("It has tests that can be run."),
		userStories: I().describe("It carries stories an agent could test the running app against. The one fact here that says nothing about the language."),
		docs: I().describe("It carries generated architecture documentation.")
	}), rE = R({ panels: L(nE).describe("One entry per repository, worked out in a single pass so nothing has to walk the workspace file by file.") }), iE = R({ repo: N().describe("Which repository.") });
})), oE, sE = w((() => {
	J(), aE(), $(), oE = {
		list: q.route({
			method: "GET",
			path: "/panels",
			summary: "Repos you can run and preview",
			description: "Every repo with whether its dev server is up and what the sandbox worked out about its contents."
		}).output(rE),
		start: q.route({
			method: "POST",
			path: "/panels/{repo}/start",
			summary: "Start a repo's dev server",
			description: "Brings the repo's own runnable app up in a terminal you can attach to, so its preview address starts answering."
		}).input(iE).output(Z),
		stop: q.route({
			method: "POST",
			path: "/panels/{repo}/stop",
			summary: "Stop a repo's dev server",
			description: "Shuts it down and frees the port."
		}).input(iE).output(Z)
	};
})), cE, lE, uE, dE, fE = w((() => {
	K(), cE = R({
		port: F().describe("The port number."),
		host: V(["127.0.0.1", "::1"]).describe("Which loopback address it actually answers on. Some tools bind only one of the two, and anything dialling it has to know which."),
		forwardable: I().describe("Whether it can be exposed at all. Some listeners answer only at their own address and nowhere else; those are listed for honesty and refused for forwarding."),
		kind: V(["workspace", "system"]).describe("Whether somebody's own work put it there, or the sandbox's own machinery did. Only the first kind is worth previewing."),
		title: N().describe("What a person would call it. Always present: a listener nothing can explain is still named, because the button beside it publishes the port to the internet."),
		purpose: N().describe("One sentence about what it is for, including when the honest answer is that nothing could work it out."),
		origin: V([
			"terminal",
			"agent",
			"panel",
			"extension",
			"container",
			"sandbox",
			"unknown"
		]).describe("Who put it there, which is the question somebody is really asking: mine, my agent's, or the box's own."),
		pid: F().optional().describe("The process holding it. Absent when nothing could be matched to the socket."),
		command: N().optional().describe("The command behind it, as it was run. Absent only when nothing could be attributed at all."),
		cwd: N().optional().describe("Where it is running from, which is how a port gets attributed to a repository."),
		session: N().optional().describe("The terminal it came from, to watch it in or stop it from. Absent when nothing in its ancestry is one, which is the honest \"you cannot reach this from here\"."),
		forwarded: I().describe("Whether it is currently reachable from outside."),
		previewUrl: N().optional().describe("Where to open it. Present only while forwarded, and only on a sandbox that has an outside address.")
	}), lE = R({ ports: L(cE).describe("Everything listening inside the sandbox right now, read fresh each time rather than from a register the sandbox keeps.") }), uE = R({ port: F().int().min(1).max(65535).describe("Which port.") }), dE = R({ previewUrl: N().optional().describe("Where it can now be reached. Absent on a sandbox with no outside address, where the mapping exists but has no public name.") });
})), pE, mE = w((() => {
	J(), fE(), $(), pE = {
		list: q.route({
			method: "GET",
			path: "/ports",
			summary: "What is listening inside the sandbox",
			description: "Every port something is answering on, and whether each one is reachable from outside."
		}).output(lE),
		forward: q.route({
			method: "POST",
			path: "/ports/forward",
			summary: "Make a port reachable",
			description: "Gives one port an address on the outside. Asking twice is harmless: the second call hands back the address the first one made."
		}).input(uE).output(dE),
		unforward: q.route({
			method: "POST",
			path: "/ports/unforward",
			summary: "Stop exposing a port",
			description: "Frees the slot at once. The address keeps resolving; it simply stops leading anywhere."
		}).input(uE).output(Z)
	};
})), hE, gE, _E, vE, yE, bE = w((() => {
	K(), hE = R({
		path: N().describe("Where it sits inside the outbox."),
		size: F().describe("Size in bytes."),
		modifiedAt: F().describe("When it last changed, in milliseconds."),
		url: N().optional().describe("Its public address. Absent when this sandbox has no outside address, or when the file is being refused."),
		blocked: N().optional().describe("Why a file sitting in the outbox is not being served: a hidden name, a credential-shaped name, contents that look like a token, or sheer size. Only the publisher sees this; a stranger asking for the same file gets the same nothing every other miss gets.")
	}), gE = R({
		url: N().optional().describe("Your public address, which every file's own hangs off. Absent on a sandbox with nowhere to publish to."),
		files: L(hE).describe("What the outbox holds.")
	}), _E = R({ path: N().min(1).describe("What to publish, as a workspace path. It is copied rather than moved, so a repository does not lose its build output because somebody shared it.") }), vE = R({ path: N().min(1).describe("What to withdraw, as a path inside the outbox rather than a workspace path.") }), yE = R({
		path: N().describe("Where it landed inside the outbox."),
		url: N().optional().describe("Its public address. Absent on a sandbox with nowhere to publish to.")
	});
})), xE, SE = w((() => {
	J(), bE(), $(), xE = {
		list: q.route({
			method: "GET",
			path: "/public",
			summary: "What is published to the internet",
			description: "Everything currently in the outbox and the address it answers on. There is no call to read a published file back: it is served openly to anyone with the link, which is the entire point of having put it there."
		}).output(gE),
		publish: q.route({
			method: "POST",
			path: "/public/publish",
			summary: "Put a file on the internet",
			description: "Copies a workspace file or folder into the outbox, where it is served to anyone with the link and no sign-in. Answers with the address."
		}).input(_E).output(yE),
		unpublish: q.route({
			method: "POST",
			path: "/public/unpublish",
			summary: "Take something off the internet",
			description: "Withdraws one published entry. When the last one goes, the outbox goes with it, so its existing at all always means something is published."
		}).input(vE).output(Z)
	};
})), CE, wE, TE = w((() => {
	J(), K(), Kg(), $(), CE = R({ repos: L(N().min(1)).max(100).default([]).describe("The repositories going out, by workspace id. Empty runs only what stands for every push, whichever repository it is.") }).prefault({}), wE = {
		state: q.route({
			method: "GET",
			path: "/prepush/state",
			summary: "How the pre-push check is going",
			description: "The verdict, or the progress so far. Nothing is addressed by id here, because there is one working tree and so exactly one check."
		}).output(Gg),
		run: q.route({
			method: "POST",
			path: "/prepush/run",
			summary: "Run the checks before pushing",
			description: "Starts the suite the workspace runs before anything leaves the machine, and answers immediately. A suite takes minutes, and a request held open that long dies at the first proxy. It runs in a real terminal, so watch it there and poll for the verdict. Name the repositories going out, and each one's own checks run in its own directory."
		}).input(CE).output(Z),
		cancel: q.route({
			method: "POST",
			path: "/prepush/cancel",
			summary: "Stop the pre-push check",
			description: "Kills the run. It settles as cancelled and the push it was gating does not go."
		}).output(Z)
	};
})), EE, DE, OE = w((() => {
	J(), K(), X(), df(), EE = R({
		agents: L(R({
			id: N(),
			label: N()
		})).describe("ACP agents installed here. The id is the provider id itself, the label its display name."),
		endpoints: L(R({
			id: N(),
			label: N(),
			kind: V(["endpoint", "localmodel"])
		})).describe("Model endpoints, already prefixed `endpoint/`, including the daemon-provisioned free trial.")
	}), DE = {
		list: q.route({
			method: "GET",
			path: "/providers",
			summary: "Providers a chat can run on here",
			description: "The installed ACP agents and model endpoints, which are the providers this sandbox adds to the fixed native list. A read for anyone who may watch or drive a turn: it names what a message can be addressed to, not what credential stands behind it."
		}).output(EE),
		models: q.route({
			method: "GET",
			path: "/providers/{provider}/models",
			summary: "Models one provider offers",
			description: "Every model this provider serves and which one it defaults to. Never empty: it is discovered live with a stored list behind it. The order is the provider's own preference and is not rearranged here."
		}).input(fd).output(uf)
	};
})), kE, AE, jE, ME, NE, PE, FE, IE = w((() => {
	K(), kE = R({
		kind: H("webpush").describe("A browser, which the sandbox can reach directly and encrypt end to end."),
		endpoint: P().describe("Where that browser's push service accepts sends. It also identifies the device everywhere else in this group."),
		keys: R({
			p256dh: N().min(1).describe("The browser's public key, for encrypting what is sent."),
			auth: N().min(1).describe("The browser's secret, for the same.")
		}).describe("What the browser handed you when it subscribed. Post it back exactly as it came; nothing reshapes it.")
	}), AE = R({
		kind: H("relay").describe("A native app, whose operating system only accepts sends from the app's publisher, so the sandbox posts through a relay instead. The message passes through that relay readable, which is the price of the publisher having to be in the loop."),
		url: P().describe("Where to post a send. Recorded rather than assumed, so the sandbox need not know any platform by name."),
		deviceId: N().min(1).describe("The device's id, which also identifies this registration everywhere else in this group."),
		secret: N().min(1).describe("Proof that this sandbox may notify this device. The relay never learns which sandbox is calling.")
	}), jE = z("kind", [kE, AE]), R({
		title: N().min(1).describe("The headline."),
		body: N().describe("The line under it. Push services cap the whole payload at a few kilobytes, which is why nothing here carries a transcript or a diff: a notification is a pointer back, not a delivery."),
		url: N().optional().describe("Where tapping it goes. An existing tab is focused rather than a new one opened."),
		tag: N().optional().describe("Collapses repeats: a second notification with the same tag replaces the first instead of stacking beside it."),
		requireInteraction: I().optional().describe("Keep it on screen until it is dismissed. Used when the agent is waiting for you, where one that fades away is a question that went unanswered in silence.")
	}), ME = R({
		publicKey: N().describe("The key a browser needs in order to subscribe. Native apps ignore it."),
		subscribed: I().describe("Whether the asking device is already registered, so a toggle can show its real state instead of trusting the device's own permission, which can be granted with nothing behind it.")
	}), NE = R({ id: N().min(1).describe("Which device: a browser's push address, or a native install's device id.") }), PE = R({ id: N().min(1).optional().describe("Which device is asking. Without it the answer can only speak for the sandbox as a whole, which is rarely the question.") }), FE = R({ delivered: F().int().nonnegative().describe("How many devices actually accepted it. A count rather than a yes, because this button exists to prove a chain nobody can inspect, and the sandbox having accepted the request is not the question being asked.") });
})), LE, RE = w((() => {
	J(), IE(), $(), LE = {
		config: q.route({
			method: "GET",
			path: "/push/config",
			summary: "What a device needs to subscribe",
			description: "The public key and settings a browser or app needs before it can register for notifications from this sandbox."
		}).input(PE).output(ME),
		subscribe: q.route({
			method: "POST",
			path: "/push/subscribe",
			summary: "Send notifications to this device",
			description: "Registers one device. The sandbox only interrupts you on the three moments where attention is genuinely wanted: a turn has finished, the agent is stuck on a question, and something is waiting for approval."
		}).input(jE).output(Z),
		unsubscribe: q.route({
			method: "POST",
			path: "/push/unsubscribe",
			summary: "Stop notifying a device",
			description: "Removes one registered device. Others keep receiving."
		}).input(NE).output(Z),
		test: q.route({
			method: "POST",
			path: "/push/test",
			summary: "Send a test notification",
			description: "Proves the whole chain end to end. Worth having, because there are four separate places a notification can be lost that nobody can inspect from the outside: the device's permission, its registration, the sandbox's key, and the delivery service."
		}).output(FE)
	};
})), zE, BE = w((() => {
	J(), JC(), $(), K(), zE = {
		policy: q.route({
			method: "GET",
			path: "/safety/policy",
			summary: "The safety policy this sandbox is judged against",
			description: "The document that decides when an agent stops to ask you before running something. Prose, not settings: it is read by the model that judges each command. When nobody has written one, this is the text the product ships with, and it describes the behaviour a fresh sandbox already has."
		}).output(qC),
		setPolicy: q.route({
			method: "POST",
			path: "/safety/policy",
			summary: "Rewrite the safety policy",
			description: "Replaces the document whole. Nothing in it can widen what the sandbox is structurally allowed to do: it decides which of the things an agent may already do are worth interrupting you about."
		}).input(R({ text: N().describe("The policy, as you want it written.") })).output(Z),
		log: q.route({
			method: "GET",
			path: "/safety/log",
			summary: "Recent safety verdicts",
			description: "What was judged lately, what the judge decided, and whether you were interrupted. Newest first. This is where you find out why you were not asked about something, which is the question a policy page otherwise cannot answer."
		}).output(L(KC))
	};
})), VE, HE = w((() => {
	J(), Bf(), $(), VE = {
		set: q.route({
			method: "POST",
			path: "/secrets",
			summary: "Store a secret",
			description: "Writes one name and value into the sandbox's own store, where running processes pick it up without a restart. Refused until the sandbox has somewhere to keep them."
		}).input(Ef).output(Z),
		list: q.route({
			method: "GET",
			path: "/secrets",
			summary: "Names of the stored secrets",
			description: "Which secrets exist here. Names only, never values."
		}).output(Df),
		remove: q.route({
			method: "DELETE",
			path: "/secrets/{key}",
			summary: "Delete a secret",
			description: "Removes one by name."
		}).input(Of).output(Z),
		inventory: q.route({
			method: "GET",
			path: "/secrets/inventory",
			summary: "Every secret this sandbox holds, from everywhere",
			description: "One view across all the places secrets live here: what exists, where it came from and whether it is working. Never any values. This one always answers, even before there is a store to write to."
		}).output(zf),
		reveal: q.route({
			method: "POST",
			path: "/secrets/reveal",
			summary: "Show one secret's value",
			description: "The only call that hands a value back, and it is for the owner alone. Sent as a body rather than in the address, so the name never ends up in a log or a browser's history."
		}).input(Of).output(kf),
		gates: q.route({
			method: "GET",
			path: "/secrets/gates",
			summary: "Which credentials need somebody's approval",
			description: "What is gated and who may release it. Names and addresses only, never values, and the agent may read it too: knowing a credential needs Bob is what stops it concluding the account is simply not connected."
		}).output(Pf),
		setGate: q.route({
			method: "PUT",
			path: "/secrets/gates/{subject}",
			summary: "Put a credential behind named approvers",
			description: "Names exactly who may release one secret or one connected account, and how far a single release goes. The owner's call alone. A signed-in browser or a mounted server cannot be released for one use, so those are always for the rest of the conversation."
		}).input(Nf).output(Z),
		removeGate: q.route({
			method: "DELETE",
			path: "/secrets/gates/{subject}",
			summary: "Stop requiring approval for a credential",
			description: "Removes one gate, so the agent can use that credential the way it uses any other. The owner's call alone."
		}).input(Ff).output(Z),
		request: q.route({
			method: "POST",
			path: "/secrets/request",
			summary: "Ask a named person to release a credential",
			description: "Raises the release card in the live conversation and waits for one of the people named on it. Refused, rather than held, when there is nobody to ask: an unattended turn, no live conversation, or a click with no verified identity behind it."
		}).input(If).output(Lf)
	};
})), UE, WE, GE, KE = w((() => {
	K(), Om(), UE = R({ id: N().describe("Which past conversation.") }), WE = R({
		id: N().describe("Its id."),
		title: N().describe("What it is called."),
		updatedAt: F().describe("When it last moved, in milliseconds."),
		snippet: fm.optional().describe("Why a search matched: the line it hit, with a little around it, and who said it. Absent on an unfiltered list, and on a match the title already shows, where repeating it would be noise rather than evidence.")
	}), GE = R({ sessions: L(WE).describe("Past conversations, newest first.") });
})), qE, JE = w((() => {
	J(), K(), Th(), KE(), qE = {
		list: q.route({
			method: "GET",
			path: "/sessions",
			summary: "Past conversations in this workspace",
			description: "Summaries for a history menu, filtered when you pass a search. Covers conversations that worked in their own private copies too, so nothing is hidden just because it happened on a branch."
		}).input(R({
			query: N().optional(),
			caseSensitive: El().optional()
		})).output(GE),
		get: q.route({
			method: "GET",
			path: "/sessions/{id}",
			summary: "Read one past conversation",
			description: "The full record of a single conversation, restored for display."
		}).input(UE).output(Sh)
	};
})), YE, XE, ZE, QE, $E, eD = w((() => {
	K(), R({
		at: F().describe("When the turn ended, in milliseconds."),
		day: N().describe("The day it fell in, as YYYY-MM-DD in UTC, worked out once so nothing downstream has to do timezone arithmetic."),
		provider: N().describe("Which model provider served it."),
		account: N().optional().describe("Which account paid. Absent for a turn run on a plain key, which belongs to no account."),
		model: N().optional().describe("The model that actually ran, past whatever was asked for and every default. Absent only when the provider's own default served it without being named."),
		modelRequested: N().optional().describe("The model that was asked for, when one was named. Differs from `model` when something resolved it."),
		harness: N().describe("Which agentic loop it ran on."),
		outcome: V([
			"ok",
			"error",
			"cancelled"
		]).optional().describe("How it ended: finished, failed, or was stopped by the user."),
		errorCode: N().optional().describe("The failure's code, when it had one."),
		errorMessage: N().optional().describe("What the failure said, trimmed."),
		conversationId: N().optional().describe("Which conversation it belonged to, so spending can be traced to a card. Absent only for an internal one-off with no conversation at all."),
		turns: F().describe("The provider's own count for the request, since one exchange can be several under the hood. One when it reported none."),
		inputTokens: F().describe("Tokens sent."),
		outputTokens: F().describe("Tokens received."),
		cacheReadTokens: F().describe("Tokens served from cache, which cost less."),
		cacheCreationTokens: F().describe("Tokens written to cache, which cost more up front and less afterwards."),
		costUsd: F().describe("What it cost, in dollars."),
		durationMs: F().describe("How long it took, in milliseconds."),
		iqSearchArm: I().optional(),
		iqSearchCohort: N().optional(),
		searchCalls: F().optional(),
		openingSearches: F().optional(),
		openingListings: F().optional(),
		callsBeforeTarget: F().optional(),
		mapArm: I().optional(),
		mapChars: F().optional(),
		turnIndex: F().optional(),
		verification: V([
			"verified",
			"unproven",
			"failing",
			"no-code"
		]).optional(),
		check: N().optional(),
		filesEdited: F().optional(),
		toolCalls: F().optional(),
		checklistTotal: F().optional(),
		checklistOpen: F().optional(),
		compactions: F().optional(),
		contextTokens: F().optional(),
		contextWindow: F().optional(),
		tierScore: F().optional(),
		tierRules: L(N()).optional(),
		tierRouted: I().optional(),
		tierFast: I().optional(),
		tierCeiling: F().optional(),
		tierDenied: I().optional()
	}), YE = R({
		day: N().describe("The day, as YYYY-MM-DD in UTC."),
		provider: N().describe("Which model provider."),
		account: N().optional().describe("Which account. Absent for work run on a plain key."),
		model: N().optional().describe("Which model."),
		harness: N().describe("Which agentic loop."),
		conversationId: N().optional().describe("Which conversation."),
		turns: F().describe("Turns in this group."),
		inputTokens: F().describe("Tokens sent."),
		outputTokens: F().describe("Tokens received."),
		cacheReadTokens: F().describe("Tokens served from cache."),
		cacheCreationTokens: F().describe("Tokens written to cache."),
		costUsd: F().describe("What the group cost, in dollars."),
		durationMs: F().describe("Time spent, in milliseconds.")
	}), XE = R({
		from: N().optional().describe("First day to include, as YYYY-MM-DD in UTC. Leave it out for everything up to the end day."),
		to: N().optional().describe("Last day to include, as YYYY-MM-DD in UTC, and it is included rather than excluded. Leave it out for everything from the start day onwards.")
	}), ZE = R({ rows: L(YE).describe("Spending grouped by day, provider, account, model and conversation. Everything a cost screen shows is a rearrangement of these rows, which is why there is no second call for any of it.") }), QE = R({
		provider: N(),
		account: N(),
		turns: F(),
		inputTokens: F(),
		outputTokens: F(),
		cacheReadTokens: F(),
		cacheCreationTokens: F(),
		costUsd: F()
	}), $E = R({ accounts: L(QE) });
})), tD, nD = w((() => {
	J(), Nw(), $(), eD(), tD = {
		get: q.route({
			method: "GET",
			path: "/settings",
			summary: "How this sandbox is configured",
			description: "Every setting that governs how agents behave here, with the defaults filled in for anything nobody has chosen."
		}).output(gw),
		set: q.route({
			method: "POST",
			path: "/settings",
			summary: "Change the sandbox settings",
			description: "Writes the settings whole, so send the complete object rather than the fields you changed."
		}).input(gw).output(Z),
		savings: q.route({
			method: "GET",
			path: "/settings/savings",
			summary: "What the token-saving measures were worth",
			description: "Measured rather than estimated: what each mechanism actually saved over a range of days. The same day range the spending ledger takes, so one calendar filters both."
		}).input(XE).output(Ew),
		builtinPrompt: q.route({
			method: "GET",
			path: "/settings/system-prompt/{base}",
			summary: "Read a built-in system prompt",
			description: "The actual text behind one of the built-in modes, so a settings screen can show the prompt instead of asking anyone to trust a description of it, and so either can be forked into a custom one."
		}).input(XC).output(_w),
		firings: q.route({
			method: "GET",
			path: "/settings/rule-firings",
			summary: "When each rule last did something",
			description: "A separate read rather than a field on the settings, because a rule firing is not somebody editing anything: folding it in would turn every firing into a settings write and put a self-changing value inside the object a screen edits."
		}).output(ow),
		repoChecks: q.route({
			method: "GET",
			path: "/settings/repo-checks",
			summary: "What each repository asks to run on its own code",
			description: `Every repository that declares its own checks at \`${Dw}\`, what it declares, and whether you have switched it on. A repository declares what to run because the command belongs beside the scripts it names; nothing it declares runs until you say so.`
		}).output(jw),
		adoptRepoChecks: q.route({
			method: "POST",
			path: "/settings/repo-checks/adopt",
			summary: "Switch a repository's own checks on or off",
			description: "Adopts exactly what that repository declares as it stands now. If the declaration changes afterwards it stops running until you adopt it again, so a command nobody has read cannot inherit the answer given to a different one."
		}).input(Mw).output(Z)
	};
})), rD, iD = w((() => {
	J(), th(), $(), rD = {
		list: q.route({
			method: "GET",
			path: "/share",
			summary: "Conversations published as pages",
			description: "Every conversation that has been turned into a read-only page, with its link. There is no call to read one back: the page itself is the read, and it answers to anyone who has the link."
		}).output(Zm),
		create: q.route({
			method: "POST",
			path: "/share",
			summary: "Publish a conversation",
			description: "Renders a conversation into a page anybody with the link can read, without signing in. Answers with the link, so nothing has to be listed again to find it."
		}).input(Qm).output(Xm),
		update: q.route({
			method: "POST",
			path: "/share/update",
			summary: "Refresh a published page",
			description: "Re-renders an existing page from the conversation as it stands now. Same link, newer contents."
		}).input($m).output(Xm),
		remove: q.route({
			method: "POST",
			path: "/share/remove",
			summary: "Unpublish a conversation",
			description: "Takes the page down, so the link stops answering."
		}).input(eh).output(Z)
	};
})), aD, oD = w((() => {
	J(), Nw(), $(), aD = {
		list: q.route({
			method: "GET",
			path: "/skills",
			summary: "What the agent knows how to do",
			description: "Every skill available here and whether it is switched on, joined from all the places they come from: the owner's own, the settings, plugins a connection installed, folders inside extensions, and persona kits."
		}).output(uw),
		read: q.route({
			method: "GET",
			path: "/skills/read",
			summary: "Read one skill",
			description: "The full text of a single skill. The name travels in the query rather than the address, because a name can carry the owner it came from and that will not fit in a path."
		}).input(fw).output(dw),
		save: q.route({
			method: "POST",
			path: "/skills",
			summary: "Write a skill",
			description: "Creates or rewrites a skill by name. A new one starts switched on, because you wrote it in order to use it; rewriting one you switched off leaves it off. Renaming is saving under the new name and deleting the old."
		}).input(pw).output(Z),
		switch: q.route({
			method: "POST",
			path: "/skills/switch",
			summary: "Switch one of your own skills on or off",
			description: "Off takes the agent's copy away and keeps your text; on writes the copy back from it. Built-in tools are switched in the agent settings instead, and nothing else has a switch."
		}).input(hw).output(Z),
		remove: q.route({
			method: "POST",
			path: "/skills/remove",
			summary: "Delete a skill",
			description: "Removes the text and the agent's copy in one step, so a screen never has to sequence two calls and never leaves one half done."
		}).input(mw).output(Z)
	};
})), sD, cD, lD, uD, dD = w((() => {
	K(), sD = R({ distro: N() }), cD = R({
		os: N(),
		arch: N(),
		shell: N(),
		home: N(),
		roots: L(N()),
		engine: R({
			memoryBytes: F(),
			cpus: F()
		}).optional(),
		hostname: N().optional(),
		wsl: sD.optional(),
		wslDistros: L(N()).optional()
	}), lD = R({
		key: N().min(1),
		online: I(),
		version: N().optional(),
		lastSeen: F().optional(),
		facts: cD.optional()
	}), uD = R({
		id: N(),
		platform: N().min(1),
		environments: L(lD).min(1),
		online: I(),
		version: N().optional(),
		lastSeen: F().optional(),
		facts: cD.optional()
	}), R({ hosts: L(uD) });
})), fD = w((() => {})), pD, mD, hD, gD, _D, vD, yD, bD, xD, SD, CD, wD, TD, ED, DD, OD, kD, AD, jD, MD, ND, PD, FD, ID, LD, RD, zD, BD = w((() => {
	K(), dD(), pD = R({
		memoryBytes: F().optional(),
		cpus: F().optional(),
		privileged: I(),
		gpu: I(),
		hostRuntime: L(N()),
		overlayRuntime: L(N())
	}), mD = R({
		memoryGib: oc().positive().nullable().optional(),
		cpus: oc().positive().nullable().optional(),
		privileged: I().optional(),
		gpu: I().optional()
	}), hD = mD.refine((e) => Object.values(e).some((e) => e !== void 0), { message: "a reshape must change at least one thing" }), gD = R({
		slug: N(),
		container: N(),
		name: N().optional(),
		running: I(),
		image: N(),
		tunnelRunning: I().optional(),
		resources: pD.optional()
	}), _D = V([
		"start",
		"stop",
		"restart",
		"prepare",
		"update",
		"rebuild",
		"rollback",
		"reshape",
		"remove",
		"logs",
		"reconnect",
		"runner-up",
		"runner-remove"
	]), vD = R({
		op: _D,
		slug: N().min(1),
		hash: N().optional(),
		resources: hD.optional(),
		parentUrl: N().optional(),
		pair: N().optional().meta({ secret: !0 }),
		setupCode: N().optional().meta({ secret: !0 }),
		definition: N().optional(),
		overlay: N().optional(),
		overlayHash: N().optional()
	}), yD = vD.extend({ id: N().min(1) }), bD = z("kind", [
		R({
			kind: H("line"),
			text: N()
		}),
		R({
			kind: H("result"),
			message: N()
		}),
		R({
			kind: H("error"),
			message: N()
		})
	]), xD = V(["upgrade", "restart"]), SD = R({ op: xD }), CD = SD.extend({ id: N().min(1) }), wD = V([
		"mirror-off",
		"mirror-on",
		"sync-pause",
		"sync-resume",
		"sync-unpair",
		"dev-reload",
		"dev-rebuild",
		"dev-rebuild-log",
		"sync-install"
	]), wD.exclude([
		"dev-reload",
		"dev-rebuild",
		"dev-rebuild-log",
		"sync-install"
	]), TD = N().max(200).regex(/^[A-Za-z0-9][A-Za-z0-9._-]*$/), ED = N().min(1).max(4096).regex(/^(?:~|\/|[A-Za-z]:[\\/])[^"'`$;|&\n\r]*$/), DD = R({
		id: N().min(1),
		command: wD,
		sandboxId: TD.optional(),
		mode: V(["sync", "mirror"]).optional(),
		localDir: ED.optional()
	}), OD = R({
		ok: I(),
		message: N(),
		output: N().optional(),
		refused: I()
	}), kD = V([
		"created",
		"modified",
		"deleted"
	]), AD = R({
		path: N(),
		local: kD.optional(),
		sandbox: kD.optional()
	}), jD = R({
		sandboxId: N(),
		mode: V(["sync", "mirror"]),
		localDir: N().optional(),
		mirroring: V(["on", "off"]).optional(),
		mutagenStatus: N().optional(),
		conflicts: F().int().nonnegative().optional(),
		conflictedPaths: L(AD).optional(),
		paused: I().optional(),
		backupStatus: N().optional()
	}), MD = V([
		"mirrored",
		"held-by-sandbox",
		"busy"
	]), ND = R({
		port: F().int().min(1).max(65535),
		host: V(["127.0.0.1", "::1"]),
		sandboxId: N(),
		state: MD,
		heldBy: N().optional(),
		command: N().optional()
	}), PD = R({
		running: I(),
		pid: F().int().optional(),
		installed: N().optional(),
		build: N().optional(),
		lastTickAt: F().optional()
	}), FD = R({
		hostname: N(),
		os: N(),
		wsl: sD.optional(),
		pairings: L(jD),
		ports: L(ND),
		agent: PD,
		capturedAt: F()
	}), ID = V([
		"offline",
		"scope-off",
		"no-agent",
		"unreported"
	]), LD = R({
		machine: N(),
		mode: V(["sync", "mirror"]),
		seenAt: F().optional()
	}), RD = R({
		key: N(),
		label: N(),
		sync: LD.optional(),
		hostId: N().optional(),
		online: I().optional(),
		platform: N().optional(),
		facts: cD.optional(),
		agentVersion: N().optional(),
		lastSeen: F().optional(),
		report: FD.optional(),
		sandboxes: L(gD).optional(),
		gap: ID.optional()
	}), zD = R({ devices: L(RD) }), R({
		enrolled: I(),
		available: I().optional(),
		machines: L(FD).optional()
	});
})), VD, HD, UD, WD, GD, KD, qD, JD, YD, XD, ZD, QD, $D = w((() => {
	K(), VD = R({
		state: V([
			"ready",
			"unavailable",
			"unknown"
		]).describe("Whether this runtime can serve a turn. Unknown is a real answer rather than a soft no: a check that could not run must not grey out a provider you can in fact use."),
		detail: N().optional().describe("Why it cannot, and what to do about it. Absent when it can."),
		checkedAt: F().describe("When it was last checked, in milliseconds.")
	}), HD = R({
		version: N().optional().describe("What the downloaded build says it is. Absent means ready but unnamed, never that nothing is ready."),
		channel: N().describe("Which channel it was taken from. Not necessarily the one this sandbox follows: downloading a beta build is not the same as moving onto beta."),
		at: F().describe("When the download finished, in milliseconds, which answers whether this is still the update being offered.")
	}), UD = R({
		name: N().optional().describe("What this sandbox is called."),
		image: N().optional().describe("The image it is running."),
		version: N().optional().describe("The version of that image."),
		latest: N().optional().describe("The newest published version on its channel."),
		updateAvailable: I().optional().describe("Whether those two differ."),
		runtimes: B(N(), VD).optional().describe("Which agent runtimes can serve a turn right now, keyed by runtime. Absent until the first check has run, which reads the same as every entry being unknown."),
		channel: N().optional().describe("Which release channel this sandbox follows."),
		previousImage: N().optional().describe("The image the last update replaced, which is what a rollback would return to. Absent means there is nothing to go back to."),
		updateNotes: L(N()).optional().describe("What is in the update, in the words of the people it is for, newest first. Absent or empty whenever there is nothing worth saying, which reads on screen exactly as it did before there were notes at all."),
		moreUpdateNotes: F().optional().describe("How many further notes there are beyond the ones sent, for a sandbox left alone a long time. Absent or zero means you have all of them."),
		breakingNotes: L(N()).optional().describe("What the update takes away, uncapped, because a warning that fell off a shortened list is a breaking update taken unwarned. Absent for the overwhelming majority, which break nothing."),
		staged: HD.optional().describe("An update already downloaded and built on the machine running this container, waiting only for the restart that applies it. That restart is seconds, where an unprepared update is minutes, which is a different decision entirely. Absent when nothing is waiting.")
	}), WD = R({
		kind: V([
			"unreadable",
			"unknownKey",
			"invalidEntry"
		]).describe("What to do about it. Unreadable means the whole file is being ignored and everything in it is at its default. An unknown key means only that key is ignored. An invalid entry means one item of a list was skipped and the rest is fine."),
		detail: N().describe("What exactly was wrong, as one sentence and nothing else. Never the remedy: that is `fix`."),
		suggestion: N().optional().describe("The name it was probably meant to be, when one is close enough to guess honestly."),
		fix: N().optional().describe("What to do about it, when that is something other than 'correct the file'. Absent whenever the file itself is the thing to edit.")
	}), GD = R({
		path: N().describe("The file, as a workspace path. The file is the unit somebody fixes, which is why problems are grouped by it."),
		problems: L(WD).describe("Everything currently wrong with it. A file with nothing wrong is absent rather than present and empty.")
	}), KD = L(GD), qD = R({
		path: N().describe("The file to repair, as the workspace path the problem was reported under. Only the handful of manifests a person hand-edits can be named; anything else is refused."),
		key: N().describe("The stray top-level key, exactly as it was reported. Absent from the file already means there is nothing to do."),
		to: N().optional().describe("Rename the key to this instead of removing it, carrying its value across. Absent means remove it. Naming a key that is already in the file is refused rather than silently overwriting what is there.")
	}), JD = R({
		token: N().describe("The credential every other call carries. Present it as a bearer token."),
		expiresAt: F().describe("When it stops working, in milliseconds, so a caller can renew ahead of it without reading the token."),
		email: N().describe("Who the sandbox verified you as.")
	}), V([
		"google",
		"ticket",
		"passkey",
		"recovery"
	]), YD = R({
		id: N().describe("The credential id the authenticator chose, base64url."),
		email: N().describe("Whose passkey this is; the owner's list carries every member's, a member's only their own."),
		label: N().describe("The name given at registration, or the daemon's default."),
		rpId: N().describe("The editor host this passkey is bound to; a passkey answers only from that origin."),
		createdAt: F().describe("Epoch ms of registration."),
		lastUsedAt: F().optional().describe("Epoch ms of the last sign-in it answered; absent means never."),
		backedUp: I().describe("Whether the authenticator syncs this passkey (a phone's keychain) or holds the only copy (a hardware key).")
	}), R({
		passkeys: L(YD),
		required: I().describe("Whether a passkey is the only proof that opens this sandbox; owner-set."),
		recovery: R({ remaining: F() }).optional().describe("Owner only, while required: how many one-time recovery codes are still unspent.")
	}), R({ required: I() }), R({ codes: L(N()) }), R({ code: N().min(1) }), R({
		error: N(),
		requires: H("passkey"),
		enrolled: I()
	}), XD = N().regex(/^[A-Za-z0-9_-]+$/, "base64url"), ZD = R({
		id: XD,
		rawId: XD,
		type: H("public-key"),
		response: R({
			clientDataJSON: XD,
			attestationObject: XD,
			transports: L(N()).optional()
		}),
		authenticatorAttachment: N().optional(),
		clientExtensionResults: B(N(), sc()).optional()
	}), QD = R({
		id: XD,
		rawId: XD,
		type: H("public-key"),
		response: R({
			clientDataJSON: XD,
			authenticatorData: XD,
			signature: XD,
			userHandle: XD.optional()
		}),
		authenticatorAttachment: N().optional(),
		clientExtensionResults: B(N(), sc()).optional()
	}), R({
		response: ZD,
		label: N().optional()
	}), R({ response: QD });
})), eO, tO = w((() => {
	J(), K(), Th(), Hv(), BD(), XT(), $(), $D(), Jm(), eD(), eO = {
		info: q.route({
			method: "GET",
			path: "/info",
			summary: "What this sandbox is",
			description: "The sandbox's own identity and state: which workspace it holds, which image it runs, what it is called, and the list of calls it actually implements. Start here, because a browser is routinely newer than the sandbox it is talking to and this is how it finds out what is there."
		}).output(UD),
		manifestProblems: q.route({
			method: "GET",
			path: "/system/manifest-problems",
			summary: "Settings files the sandbox could not read",
			description: "Anything the daemon tripped over in its own configuration on disk: a file it had to fall back from, a key it did not recognise, an entry it skipped. Separate from the identity call because it goes stale for a different reason, namely a file changing."
		}).output(KD),
		repairManifest: q.route({
			method: "POST",
			path: "/system/manifest-problems/repair",
			summary: "Take a stray setting out of a file",
			description: "Removes a key the sandbox does not recognise from one of its settings files, or renames it to the one it was probably meant to be, keeping the value. Only the files a person hand-edits can be named, and only a key — never a value — so this can only ever remove something already being ignored. Renaming onto a key the file already has is refused instead of overwriting it."
		}).input(qD).output(Z),
		session: q.route({
			method: "POST",
			path: "/system/session",
			summary: "Trade a sign-in for a session",
			description: "Exchanges a verified sign-in, or a session that has not expired yet, for a fresh session the daemon minted. That session is the credential every other call carries, and calling this again with a live one renews it."
		}).output(JD),
		events: q.route({
			method: "GET",
			path: "/events",
			summary: "The live event stream",
			description: "A stream held open for as long as you want it, carrying heartbeats so a caller notices the sandbox dying at once, batches of file changes so a tree or an editor can refresh itself, and the roster of who else is looking. Give it an id for this connection to appear in that roster; leave it out and you watch without being seen."
		}).input(R({ clientId: N().optional() })).output(Mu(Vv)),
		presence: q.route({
			method: "POST",
			path: "/system/presence",
			summary: "Say what you are looking at",
			description: "Reports which view, conversation or file this connection is on, or that it has gone idle. The daemon fans it back out on the event stream so everyone else's roster updates."
		}).input(YT).output(Z),
		usage: q.route({
			method: "GET",
			path: "/system/usage",
			summary: "What has been spent",
			description: "Token and cost totals per account, added up from the record of every finished turn."
		}).output($E),
		terminals: q.route({
			method: "GET",
			path: "/system/terminals",
			summary: "Open terminals",
			description: "The terminal sessions this sandbox is holding, which is what a terminal panel rebuilds its tabs from after a reload. The live typing and output run over a separate socket; this is the list."
		}).output(Pm),
		killTerminal: q.route({
			method: "DELETE",
			path: "/system/terminals/{name}",
			summary: "Close a terminal",
			description: "Destroys one terminal session and whatever was running inside it."
		}).input(Fm).output(Z),
		terminalScrollback: q.route({
			method: "GET",
			path: "/system/terminals/{name}/scrollback",
			summary: "A terminal's history as plain text",
			description: "What has scrolled past in one terminal, as text you can select and copy. The live view is a picture of a screen on the far side of a socket, with nothing in the page to select, so scrolling back and copying is this call rather than a gesture."
		}).input(Im).output(Lm),
		browsers: q.route({
			method: "GET",
			path: "/system/browsers",
			summary: "Browsers the agent has open",
			description: "Every browser a conversation currently has running and the pages inside each one. The picture of what they are showing comes over a separate socket; this is the roster."
		}).output(Bm),
		closeBrowser: q.route({
			method: "DELETE",
			path: "/system/browsers/{name}",
			summary: "Shut a browser down",
			description: "Closes one of the agent's browsers. Its next attempt to use that browser then fails as though it had crashed, which is the honest account of somebody pulling the plug."
		}).input(Vm).output(Z),
		subagents: q.route({
			method: "GET",
			path: "/system/subagents",
			summary: "Subagents the agents have started",
			description: "Every subagent and child agent this sandbox's conversations have delegated work to, whichever tool started it, with what each one is doing."
		}).output(Km),
		subagentTranscript: q.route({
			method: "GET",
			path: "/system/subagents/{id}/transcript",
			summary: "A subagent's record",
			description: "The full record of one delegated subagent, in the same shape as any other conversation. It comes live from the parent turn while it works, and from stored history once it has finished."
		}).input(qm).output(Sh),
		devices: q.route({
			method: "GET",
			path: "/system/devices",
			summary: "The machines you have connected",
			description: "Every computer this sandbox can see, whether it reached it through desktop sync or through a connected device, in one row per machine: what it says about itself, which sandboxes it holds, and what stopped it answering when nothing came back."
		}).output(zD),
		manageDeviceSandbox: q.route({
			method: "POST",
			path: "/system/devices/{id}/sandboxes/{slug}",
			summary: "Drive a sandbox on one of your own devices",
			description: "Start, stop, restart, update, rebuild, roll back, reshape (its memory and CPU caps, privileged, GPU) or remove a sandbox running on a machine you own, relayed over the connection that machine holds open. The answer is a stream because the slowest of these takes minutes, and it is the same stream whichever you ask for. The daemon adds no opinion: the machine enforces its own permissions and a refusal arrives as the last line, in the machine's words, naming the switch to flip."
		}).input(yD).output(Mu(bD)),
		runDeviceCommand: q.route({
			method: "POST",
			path: "/system/devices/{id}/commands/{command}",
			summary: "Run one of your device's own CLI actions",
			description: "Performs a named action on a machine you own by running its own intentic-machine command there — turning that device's port mirroring off, say — over the connection it holds open. The set of actions is fixed and the command line is built here from the name, never sent by the caller. The machine enforces its own permissions and a refusal comes back as its own sentence, naming the switch to flip."
		}).input(DD).output(OD),
		runDeviceAgentFlow: q.route({
			method: "POST",
			path: "/system/devices/{id}/agent/{op}",
			summary: "Update or restart the agent on one of your own devices",
			description: "Updates a machine you own to the current intentic-machine agent, or restarts the loop it is running, over the connection that machine holds open. The answer is a stream of the run's own output — and it normally stops mid-run, because the agent's loop is what carries this connection: the work is detached from it first, so it finishes regardless, and the device's reported version is what confirms it. Takes the machine's \"Run commands\" permission, the same one a command typed there would."
		}).input(CD).output(Mu(bD))
	};
})), nO, rO = w((() => {
	J(), K(), Wd(), df(), Kd(), $(), nO = {
		accounts: q.route({
			method: "GET",
			path: "/translator/accounts",
			summary: "Subscriptions connected through the translator",
			description: "What is signed in per provider. Each provider can hold several accounts at once, and the translator spreads work across them."
		}).output(Rd),
		connect: q.route({
			method: "POST",
			path: "/translator/{provider}/connect",
			summary: "Start connecting a subscription",
			description: "Begins the sign-in for one provider and says which of the two shapes it is: a code you type into a device page, which finishes by itself in the background, or a redirect whose landing address you hand back afterwards."
		}).input(R({ provider: Gd })).output(af),
		status: q.route({
			method: "GET",
			path: "/translator/{provider}/connect",
			summary: "Read a subscription connection attempt",
			description: "Reports whether this exact sign-in attempt is waiting, completed, or failed. Completion is tied to the attempt rather than a change in account count, because signing in to an existing account replaces its credential in place."
		}).input(R({
			provider: Gd,
			state: N().min(1)
		})).output(of),
		complete: q.route({
			method: "POST",
			path: "/translator/{provider}/complete",
			summary: "Finish a redirect sign-in",
			description: "For the providers that redirect somewhere this sandbox cannot receive: hand back the address you landed on and the connection completes."
		}).input(sf).output(Z),
		disconnect: q.route({
			method: "POST",
			path: "/translator/{provider}/disconnect",
			summary: "Disconnect one subscription",
			description: "Clears a single account by name. Any others under the same provider stay connected."
		}).input(R({
			provider: Gd,
			name: N().min(1)
		})).output(Z)
	};
})), iO, aO, oO = w((() => {
	J(), K(), Wd(), eD(), iO = R({ force: I().default(!1).describe("Measure again even if a reading was taken a moment ago.") }), aO = {
		rollup: q.route({
			method: "GET",
			path: "/usage/rollup",
			summary: "What was spent, grouped",
			description: "The spending record over a range of days, grouped by day, provider, account and model. Everything a cost screen shows is a rearrangement of this one answer, so nothing needs a second call. Read-only: rows are written by the sandbox as turns end, which is what makes it worth trusting."
		}).input(XE).output(ZE),
		refreshPlanLimits: q.route({
			method: "POST",
			path: "/usage/plan-limits/refresh",
			summary: "Measure every account's plan limits again",
			description: "Reads how full each connected account's plan limits are, for every provider, and records it. Forced, it measures even accounts read a moment ago, which is the right thing when a plan was just changed and the question is whether the number on screen is still true."
		}).input(iO).output(R({ ok: H(!0) })),
		limitReset: q.route({
			method: "GET",
			path: "/usage/limit-reset/{account}",
			summary: "Whether this account's session window can be reopened now",
			description: "Asks the provider whether it will reopen this account's spent session window immediately, which some plans grant once a week. Only worth asking about an account that has actually been refused: the answer is the provider's judgement at this moment, it is not cached, and an account with no such grant answers plainly that it has none."
		}).input(R({ account: N().min(1).describe("Which account.") })).output(Nd),
		claimLimitReset: q.route({
			method: "POST",
			path: "/usage/limit-reset/{account}/claim",
			summary: "Reopen this account's session window now",
			description: "Spends one of the account's weekly resets to reopen its session window immediately. The weekly allowance is untouched and still binds. Answers with what the provider actually did: only `reset` changed anything, and it is the cue to send the refused turn again."
		}).input(R({ account: N().min(1).describe("Which account.") })).output(Pd)
	};
})), sO, cO = w((() => {
	J(), Hv(), $(), Ny(), sO = {
		list: q.route({
			method: "GET",
			path: "/vpn",
			summary: "Configured tunnels and which are up",
			description: "Every stored VPN with its live link state, read back from the operating system rather than from memory, so a tunnel dropped from a shell and one dropped from a screen look the same here."
		}).output(Dy),
		connect: q.route({
			method: "POST",
			path: "/vpn/{id}/connect",
			summary: "Dial a VPN",
			description: "Brings a stored tunnel up, streaming the client's progress as it authenticates and then sets up routing. Streamed because a dial takes seconds and can fail with something you have to read: a wrong password, a gateway certificate nobody trusts, a code it wants. Connecting one that is already up simply says so."
		}).input(Oy).output(Mu(Tv)),
		disconnect: q.route({
			method: "POST",
			path: "/vpn/{id}/disconnect",
			summary: "Drop a tunnel",
			description: "Takes the tunnel down. One that was already down is fine: the promise is that it is not up afterwards."
		}).input(ky).output(Z),
		importForticlient: q.route({
			method: "POST",
			path: "/vpn/import-forticlient",
			summary: "Read connections out of an exported config",
			description: "Turns an exported FortiClient configuration into a list of connections you can add, so somebody holding that file picks from a list instead of retyping a host and port for every tunnel."
		}).input(Ay).output(My)
	};
})), lO, uO, dO, fO, pO, mO, hO, gO, _O, vO, yO, bO, xO, SO, CO, wO, TO, EO, DO, OO, kO = w((() => {
	K(), X(), ud(), Kp(), lO = N().min(1).max(24).regex(/^[a-z0-9][a-z0-9-]*$/), uO = V(["fresh", "continue"]), dO = 24, fO = R({
		id: lO.describe("This step's own name, which other steps use to say they wait on it."),
		title: N().min(1).max(60).describe("What to call it on screen. Short: the instruction below is where the detail goes."),
		goal: N().min(1).optional().describe("What done means for this step, in your words. It is what the step is judged against, and a different sentence from what it is told to do."),
		prompt: N().min(1).optional().describe("What the step is told to do. The goal is the suite is green; this is run the tests, take the top failure, fix it. Leaving it out hands over the run's own request untouched, which is right for a step whose whole job is do what was asked."),
		needs: L(lO).describe("Which steps must finish first. Empty means it starts when the run does. Naming a step that does not exist, or a loop between steps, is refused when the workflow is saved."),
		handoff: uO.describe("How it meets what came before: a fresh conversation handed the previous step's result, or the same conversation carried on."),
		output: Mp.describe("What it has to produce for the step to count."),
		checks: L(Np).describe("What has to pass before it counts as done."),
		context: jp.describe("How the step's own repeats meet each other. A long-running step wants to start clean each round; a short polish-this step wants to carry on."),
		maxSpendUsd: F().positive().optional().describe("A ceiling on what this step may spend. The one resource that cannot be recovered after an unattended fan-out, which is why it is here and iteration limits are not. Absent is uncapped."),
		agent: dd.optional().describe("Which provider runs it."),
		harness: pd.optional().describe("Which agentic loop runs it."),
		account: N().optional().describe("Which account pays for it."),
		model: N().optional().describe("Which model runs it."),
		actsAs: Y.optional().describe("Which persona it acts as. Unpinned, a step gets the strict unwatched default: every tool, and no signed-in accounts at all. Pinning one is how a release check gets a voice, a folder to work in, or the single account it may post from.")
	}), pO = R({
		step: lO.describe("Which step's answer carries the decision. Usually a last step that weighs up the ones before it, though nothing requires that."),
		field: N().min(1).describe("Which of that step's declared answers to read. A declared field is the one part of a step's answer that was checked rather than fished out of prose, which is the whole rule here. Checked when the workflow is saved."),
		pass: L(N().min(1)).min(1).describe("Which values mean ship it. Everything else fails. A list of what passes rather than what fails, because a step answering mostly-pass or pass-with-notes must not ship, and this gets that right without anybody having had to enumerate the ways a model can hedge."),
		dailyMax: F().int().positive().optional().describe("How many runs a day, across every caller. A gate is a paid door with nobody in the loop: one wired into a push-triggered pipeline is a fan-out of conversations per commit. Absent is a small default rather than unlimited.")
	}), mO = V([
		"pass",
		"fail",
		"blocked"
	]), R({
		outcome: mO.describe("Ship it, do not, or we could not tell. That third answer exists because could not reach a judgement is not the product is broken: a gate that reported its own outages as failures is one a team switches off, so it should be the honest answer far more often than the convenient one, and it means a neutral build rather than a red one."),
		reason: N().describe("Why, in one line. Realistically the only part of this a build log will ever show."),
		runId: N().describe("The run behind the verdict, so somebody can go and read it."),
		value: N().optional().describe("What the step actually answered. Absent when there was nothing to read, which is most of the could-not-tell cases.")
	}), hO = R({
		id: Y.describe("The workflow's id."),
		name: N().min(1).max(80).describe("What to call it."),
		description: N().max(400).optional().describe("What it is for."),
		steps: L(fO).min(1).max(dO).describe("The steps, each with what it waits on. Every one runs in its own private copy of the repos, always, because parallel steps sharing a tree collide."),
		gate: pO.optional().describe("Present means a machine can run this design and get a ship-it answer back. Absent means an ordinary workflow, started by a person, with no outside door onto it at all."),
		maxParallel: F().int().min(1).max(8).describe("How many steps may run at once. Bounded, because a fan-out of twelve is twelve model sessions, twelve working copies and twelve times the burn rate, on one machine.")
	}), gO = V([
		"pending",
		"running",
		"done",
		"failed",
		"skipped",
		"stopped"
	]), _O = R({
		stepId: lO.describe("Which step this is."),
		state: gO.describe("How it went. Skipped carries what the others cannot: it never ran, because something it was waiting on did not finish. That is why a failed run shows one red step and a trail of grey ones."),
		conversationId: N().describe("The conversation it ran on, and the way from a node on the graph to a real record. Shared with the step before it when they were chained, which is what makes those two one card."),
		startedAt: F().optional().describe("When it began, in milliseconds."),
		endedAt: F().optional().describe("When it ended, in milliseconds."),
		iterations: F().int().min(0).describe("How many rounds it took."),
		costUsd: F().optional().describe("What it cost, in dollars."),
		loopState: Rp.optional().describe("How its repeating ended. Out of rounds and stuck both come out as a failed step, and the difference between them is the difference between give it more room and more room will not help."),
		detail: N().optional().describe("What went wrong, when something did."),
		document: Pp.optional().describe("What it produced, once it has produced something that passes its own declared shape. This is what the steps after it are handed."),
		report: N().optional().describe("The start of its closing words. Bounded, so a long answer is not silently cut down to its last few thousand characters and the record stays a sensible size."),
		reportPath: N().optional().describe("Where the whole answer is, as a workspace path. Every step can read it, so a long handoff need not be copied into anybody's prompt.")
	}), vO = V([
		"running",
		"done",
		"failed",
		"stopped",
		"overspent",
		"error"
	]), yO = R({
		runId: N().min(1).describe("This run's id."),
		workflow: hO.describe("The design as it stood when the run started, copied rather than looked up. The run has to keep showing the graph it actually ran, not the one edited twice since, and a run of a deleted workflow has to stay readable."),
		repos: L(md).min(1).max(50).describe("The workspace as this run began, one exact commit per repository. Every step branches from these, even if the shared tree moves while a wide fan-out is still opening its copies, so the steps can be compared with each other afterwards."),
		request: N().optional().describe("What this run was asked to do, handed to every step on top of its own instructions. It is what makes one saved design worth keeping: two models, one task is a shape, and the task is different every time. Absent for a run started with nowhere to type one."),
		state: vO.describe("How the run is going. Finished means every step that ran got there; a run with skipped steps counts as failed, because a graph that never reached its end did not do what it was asked whatever the survivors managed."),
		startedAt: F().describe("When it began, in milliseconds."),
		endedAt: F().optional().describe("When it ended, in milliseconds."),
		resumed: F().int().min(0).describe("How many times the sandbox restarted under it and picked it back up."),
		detail: N().optional().describe("What went wrong, when something did."),
		steps: L(_O).describe("One entry per step, in the design's own order. Every one is written down as waiting when the run starts, so the picture is complete from the first frame and a missing step never has to mean two things."),
		archivedAt: F().optional().describe("When it was put away, in milliseconds. The record stays readable and every step's branch, transcript and counters are untouched. Its conversations are put away with it, and brought back with it. Absent means live on the board.")
	}), bO = N().optional().describe("What a pipeline presents at /workflows/{id}/gate, when the design declares a gate. Shown to a maintainer or the owner only."), xO = hO.extend({ gateToken: bO }), SO = hO.extend({
		runs: L(yO).describe("Its runs, newest first."),
		gateToken: bO
	}), CO = R({ workflows: L(SO).describe("Every saved design with its own run history.") }), wO = R({ runs: L(yO).describe("Every run across every workflow, newest first, including runs of workflows since deleted.") }), TO = R({ id: N().describe("Which workflow.") }), EO = R({ runId: N().describe("Which run.") }), DO = TO.extend({ request: N().min(1).max(2e4).optional().describe("What to point it at. Optional, because a design whose steps already say what they want is complete on its own; only one written as a shape needs today's sentence.") }), OO = R({
		workflow: hO.describe("The design to write."),
		create: I().describe("Whether you mean to make a new one or replace an existing one. Said outright rather than inferred, so an id that happens to collide is a refusal instead of one saved design quietly overwriting another.")
	});
})), AO, jO = w((() => {
	J(), $(), kO(), AO = {
		list: q.route({
			method: "GET",
			path: "/workflows",
			summary: "Saved workflows and their runs",
			description: "Every workflow somebody has designed, each with its own run history, newest first. One answer rather than two, because a workflow that has never been run is the interesting case rather than a mistake."
		}).output(CO),
		save: q.route({
			method: "POST",
			path: "/workflows",
			summary: "Create or replace a workflow",
			description: "Writes a workflow design. Say which of the two you mean, so an id that happens to collide cannot silently overwrite somebody's work. A design that could never run is refused, in the same words the editor shows while you type: a loop in the steps, a step waiting on one that is not there, a step with no way of knowing it is finished."
		}).input(OO).output(xO),
		rotateGateToken: q.route({
			method: "POST",
			path: "/workflows/{id}/gate/rotate",
			summary: "Rotate a release gate's token",
			description: "Mints a new credential for the workflow's release gate and retires the old one at once. Every pipeline wired to the gate has to be handed the new URL. Refused for a workflow that declares no gate."
		}).input(TO).output(pf),
		remove: q.route({
			method: "DELETE",
			path: "/workflows/{id}",
			summary: "Delete a workflow",
			description: "Removes the design. A run of it that is already going keeps going and stays readable and stoppable, because a run takes its own copy of the design when it starts."
		}).input(TO).output(Z),
		run: q.route({
			method: "POST",
			path: "/workflows/{id}/run",
			summary: "Start a workflow",
			description: "Kicks a workflow off and answers immediately with the run as recorded; the work carries on without you. Point it at a question and every step gets that on top of its own instructions. Every step is written down as waiting up front, so the picture is complete from the first frame. Several runs of one design can be in flight at once without colliding."
		}).input(DO).output(yO),
		runs: q.route({
			method: "GET",
			path: "/workflows/runs",
			summary: "Every workflow run",
			description: "All runs across all workflows, newest first. This is also the only place the runs of a deleted workflow are still reachable."
		}).output(wO),
		stopRun: q.route({
			method: "POST",
			path: "/workflows/runs/{runId}/stop",
			summary: "Stop a run now",
			description: "Nothing further starts, and the steps already going are cut off where they stand. Whatever they had written stays on their branches. Deliberately abrupt rather than letting the current step finish: a step is a whole agent turn, and a stop that kept spending for minutes afterwards is indistinguishable from a button that does nothing. It always ends the run, including one left stranded by a daemon that was replaced mid-flight."
		}).input(EO).output(Z),
		archiveRun: q.route({
			method: "POST",
			path: "/workflows/runs/{runId}/archive",
			summary: "Take a finished run off the board",
			description: "Nothing is lost and the working copies are reclaimed. Every conversation the run started is put away with it, which is what makes this an archive rather than a dismissal: a step has no card of its own, so merely dropping the run would spill its conversations onto the board at the moment somebody said they were done. Refused while the run is still going."
		}).input(EO).output(Z),
		unarchiveRun: q.route({
			method: "POST",
			path: "/workflows/runs/{runId}/unarchive",
			summary: "Bring an archived run back",
			description: "Puts a run and every conversation it started back on the board."
		}).input(EO).output(Z)
	};
})), MO, NO, PO, FO, IO, LO, RO, zO, BO, VO, HO, UO, WO, GO, KO, qO, JO, YO, XO, ZO = w((() => {
	K(), aE(), MO = R({ repos: L(N()).describe("Every repository's id, sorted. An id is its folder relative to the workspace root, and \"root\" is the workspace itself.") }), NO = R({
		name: N().min(1).describe("What to call it in the workspace."),
		cloneUrl: N().min(1).describe("Where to clone it from."),
		branch: N().optional().describe("Which branch to check out. Leave it out for the repository's default.")
	}), PO = R({
		name: N().describe("What it ended up called."),
		path: N().describe("Where it landed.")
	}), FO = R({ name: N().min(1).describe("What to call it, which is also its folder under the workspace root.") }), IO = R({
		repo: N().describe("Which repository."),
		status: V([
			"updated",
			"current",
			"dirty",
			"diverged",
			"no-remote",
			"skipped",
			"error"
		]).describe("What happened to it. Dirty and diverged are why a repository was left alone: it had uncommitted work, or it had moved in a way that cannot be fast-forwarded."),
		behind: F().optional().describe("How many commits it was behind."),
		ahead: F().optional().describe("How many commits it was ahead."),
		head: N().optional().describe("The commit it ended up on."),
		message: N().optional().describe("What went wrong, when something did.")
	}), LO = R({ repos: L(IO).describe("One entry per repository, saying what happened to it.") }), RO = R({
		template: N().min(1).describe("Which kind of app to scaffold, by its key in the template list."),
		name: N().min(1).regex(/^[a-z][a-z0-9-]*$/).describe("What to call this one.")
	}), zO = R({
		repo: N().describe("Which repository to scaffold into."),
		apps: L(RO).min(1).describe("The apps to add.")
	}), BO = R({
		repo: N().describe("Which repository."),
		session: N().describe("What to call the terminal this runs in, so you can find it again."),
		dirs: L(N()).min(1).describe("Which projects to test, as folders relative to the repository. Empty targets the repository root.")
	}), VO = R({
		key: N().describe("The id to name when scaffolding one."),
		label: N().describe("What to call it on screen."),
		description: N().describe("What you get.")
	}), HO = R({ templates: L(VO).describe("The kinds of app the configured source repository knows how to scaffold.") }), UO = R({
		app: N().describe("The app's name, which is also its folder."),
		kind: N().optional().describe("What sort of app it is: the template it came from, or the framework worked out from its dependencies. Absent when it was found purely by having a dev script."),
		previewUrl: N().optional().describe("Where to open it. Absent when this sandbox has no outside address."),
		running: I().describe("Whether its dev server is up."),
		healthy: I().describe("Whether it is actually answering."),
		installed: I().describe("Whether its dependencies are installed, which is what decides whether a start takes seconds or an install first."),
		launch: tE.optional().describe("Where a start the sandbox is running has got to: its shell coming up, installing, its dev command running with nothing listening yet, or exited back to a prompt. Absent when nothing is starting and once it serves.")
	}), WO = R({ apps: L(UO).describe("The apps in this repository.") }), GO = R({
		name: N().describe("The name the package declares."),
		dir: N().describe("Where it lives, relative to the repository."),
		group: N().describe("The top-level folder it sits under, which is what a diagram colours by.")
	}), KO = V([
		"prod",
		"dev",
		"peer"
	]), qO = R({
		from: N().describe("The package that depends."),
		to: N().describe("The package it depends on."),
		type: KO.describe("Which kind of dependency declared it.")
	}), JO = R({
		packages: L(GO).describe("Every package in the repository."),
		edges: L(qO).describe("Which of them use which. Pure data: how to lay it out is yours to decide.")
	}), YO = R({ repo: N().describe("Which repository.") }), XO = R({
		repo: N().describe("Which repository."),
		app: N().min(1).regex(/^[a-z][a-z0-9-]*$/).describe("Which app inside it.")
	});
})), QO, $O, ek, tk, nk = w((() => {
	K(), QO = R({
		dir: N().describe("Where the project is, relative to the workspace root. Empty means the root itself."),
		ecosystem: V(["node", "python"]).describe("Which language's tooling it uses."),
		manager: N().describe("The tool that would do the installing."),
		command: N().describe("The exact command that would run."),
		evidence: N().describe("The file that decided all of the above, so the answer can be checked rather than trusted."),
		state: V([
			"ready",
			"installing",
			"needs-setup",
			"unsupported",
			"stale"
		]).describe("Ready means its dependencies are really there. Stale means it was installed once and has since outgrown that, which is what an agent leaves behind when it adds a dependency without installing it. Unsupported means this sandbox has no such tool."),
		missing: F().optional().describe("How many declared dependencies cannot be found on disk. What separates never-installed from outgrown.")
	}), $O = R({ projects: L(QO).describe("Every project the sandbox found, and whether each is usable.") }), ek = R({ dirs: L(N().max(500)).min(1).max(50).describe("Which projects to install, by folder. Ones already ready, already installing, or with no tool to install them are skipped rather than refused.") }), tk = R({ queued: L(N()).describe("Which of them actually started, which is not necessarily what you asked for.") });
})), rk, ik = w((() => {
	J(), nx(), P_(), $(), ZO(), Zb(), nk(), wv(), rk = {
		tree: q.route({
			method: "GET",
			path: "/workspace/tree",
			summary: "The workspace file tree",
			description: "Every folder and file under the workspace root, as one walk. Name a conversation to read its own private copy of the tree instead of the shared one. Folders the daemon skips, such as installed packages, come back without their contents; ask for those separately."
		}).input(Q_).output(tv),
		children: q.route({
			method: "GET",
			path: "/workspace/children",
			summary: "A bounded folder listing",
			description: "The entries inside a folder as one flat list. Direct children are the default, which is how the explorer opens a folder the full tree walk left closed; callers that need a small subtree can ask for up to five levels without a request per directory."
		}).input(nv).output(rv),
		file: q.route({
			method: "GET",
			path: "/workspace/file",
			summary: "Read part of a text file",
			description: "A window of one file's text, plus how large the whole file is. Never the entire file: an unbounded read is how a single enormous log stalls the daemon for everyone, so ask for the slice you mean to show and page through if you need more."
		}).input(sv).output(uv),
		derived: q.route({
			method: "GET",
			path: "/workspace/derived",
			summary: "Read a file's derived text",
			description: "What a document, picture, recording or archive says, as text, from the shadow the sandbox keeps beside it. This is the same rendering an agent reads instead of the bytes, so it is also the way to check what one is working from. Nothing is derived here: a file with no shadow yet answers that it has none, and whether it could have one."
		}).input(dv).output(_v),
		derive: q.route({
			method: "POST",
			path: "/workspace/derive",
			summary: "Derive a file's text now",
			description: "Renders one file to text and answers with the result, for when its shadow is missing or you want it rebuilt. The same work the background pass does when that setting is on, so this is how a reader gets the text without turning it on for the whole workspace. Costs a parse of exactly one file; a format nothing can read says so rather than failing."
		}).input(dv).output(_v),
		derivedStatus: q.route({
			method: "GET",
			path: "/workspace/derived-status",
			summary: "How the background rendering is doing",
			description: "Whether documents, pictures, recordings and archives are being rendered to text in the background, how many are waiting, which are being read right now, and how many shadows the last whole-tree pass counted. Ask this to tell a file nothing can read from a file whose turn has not come."
		}).output(fv),
		mediaTicket: q.route({
			method: "POST",
			path: "/workspace/media-ticket",
			summary: "Get a pass for streaming a media file",
			description: "Mints the short-lived ticket a video or audio element hands to the streaming route, which serves byte ranges and so cannot carry an ordinary header. Minting it here means a caller can tell whether this sandbox streams media at all, rather than discovering it mid-playback."
		}).input(av).output(ov),
		resolve: q.route({
			method: "GET",
			path: "/workspace/resolve",
			summary: "Turn a written path into a real file",
			description: "Matches a path somebody wrote in prose against the real tree and says which file it means. A path mentioned in a message is often only the tail of the real one, so this is the lookup behind every clickable file reference rather than a plain existence check."
		}).input(vv).output(yv),
		search: q.route({
			method: "GET",
			path: "/workspace/search",
			summary: "Search the code",
			description: "Ranked results across the whole workspace, grouped, each carrying why it matched and how fresh it is. Left alone it blends plain text, structure, meaning and history in one pass; narrow it to a single kind of search when you already know which you want. Long result sets resume from the cursor it hands back."
		}).input(Wb).output(Xb),
		health: q.route({
			method: "GET",
			path: "/workspace/health",
			summary: "A repo's shape in numbers",
			description: "Where one repo's risk sits: the files that change often and are complicated at once, what the index holds, and which modules the rest of the code leans on most. Scoped to a repo, because a codebase is a repo rather than the whole drop."
		}).input(Qb).output(tx),
		classify: q.route({
			method: "GET",
			path: "/workspace/classify",
			summary: "Sort a messy drop into buckets",
			description: "Proposes which of the loose things in the workspace are code, documents, media or archives. A read-only suggestion by fixed rules, with no model involved: nothing moves until a caller applies the moves it likes through the move call."
		}).output(Cv),
		mkdir: q.route({
			method: "POST",
			path: "/workspace/dir",
			summary: "Create a folder",
			description: "Makes a folder, and any missing folders above it."
		}).input(bv).output(Z),
		delete: q.route({
			method: "DELETE",
			path: "/workspace/entry",
			summary: "Delete a file or folder",
			description: "Removes one entry and everything under it. The path travels in the body rather than the address, the same as every other write in this group."
		}).input(iv).output(Z),
		move: q.route({
			method: "POST",
			path: "/workspace/move",
			summary: "Move or rename something",
			description: "Moves one entry to a new path, which is also how you rename it."
		}).input(xv).output(Z),
		copy: q.route({
			method: "POST",
			path: "/workspace/copy",
			summary: "Copy a file or folder",
			description: "Duplicates one entry at a new path, recursively for a folder."
		}).input(xv).output(Z),
		setup: q.route({
			method: "GET",
			path: "/workspace/setup",
			summary: "Which projects have their dependencies installed",
			description: "Per project, whether its dependencies are actually present. A project that arrives by import comes without them, so files landing is not the same as the project working: until this says a project is ready, its type checks and tests can only mislead you."
		}).output($O),
		install: q.route({
			method: "POST",
			path: "/workspace/setup/install",
			summary: "Install a project's dependencies",
			description: "Starts the install for one or more projects in a terminal you can attach to, and answers immediately. The run survives a page reload and its output stays in the terminal history."
		}).input(ek).output(tk),
		repos: q.route({
			method: "GET",
			path: "/workspace/repos",
			summary: "Repos in the workspace",
			description: "Every git repo the daemon found in the workspace, with where each one sits and what it is called."
		}).output(MO),
		addRepo: q.route({
			method: "POST",
			path: "/workspace/repos",
			summary: "Clone a repo in",
			description: "Clones a repository into the workspace beside the others, using whatever forge credentials the sandbox already holds."
		}).input(NO).output(PO),
		createRepo: q.route({
			method: "POST",
			path: "/workspace/repos/new",
			summary: "Start a new repo",
			description: "Makes an empty repository in the workspace: a folder named after it, initialised, with a README that names it and one commit, so an agent can start on it at once. Nothing is cloned and nothing leaves the machine."
		}).input(FO).output(PO),
		sync: q.route({
			method: "POST",
			path: "/workspace/sync",
			summary: "Pull every repo up to date",
			description: "Fetches every repo that has a remote and fast-forwards the ones that can move safely, reporting what happened to each. This runs by itself at the start of a turn; call it directly to refresh on demand, or to re-sync a repo that had drifted."
		}).output(LO),
		templates: q.route({
			method: "GET",
			path: "/workspace/templates",
			summary: "App templates you can add",
			description: "The kinds of app the configured source repo knows how to scaffold, which is what an add-app picker lists."
		}).output(HO),
		addApps: q.route({
			method: "POST",
			path: "/workspace/repos/{repo}/apps",
			summary: "Scaffold new apps into a repo",
			description: "Starts scaffolding one or more apps inside an existing multi-package repo and answers straight away. Watch the terminal it opens for progress and for anything that goes wrong."
		}).input(zO).output(Z),
		appsList: q.route({
			method: "GET",
			path: "/workspace/repos/{repo}/apps",
			summary: "Apps inside a repo",
			description: "The apps in one multi-package repo, each with its preview address and whether its dev server is up."
		}).input(YO).output(WO),
		packageGraph: q.route({
			method: "GET",
			path: "/workspace/repos/{repo}/graph",
			summary: "How a repo's packages depend on each other",
			description: "Every package in one multi-package repo and which of its siblings each one uses, which is what a dependency view draws."
		}).input(YO).output(JO),
		modules: q.route({
			method: "GET",
			path: "/workspace/modules",
			summary: "Every package across every repo",
			description: "The named packages in the whole workspace, which is what a review list groups changed files under when a reader wants packages rather than paths. Whole-workspace in one answer, because a review spans repos and asking per repo would be a fan-out on every open."
		}).output(D_),
		startApp: q.route({
			method: "POST",
			path: "/workspace/repos/{repo}/apps/{app}/start",
			summary: "Start an app's dev server",
			description: "Brings up one app's preview server in an attachable terminal, so its address starts answering."
		}).input(XO).output(Z),
		stopApp: q.route({
			method: "POST",
			path: "/workspace/repos/{repo}/apps/{app}/stop",
			summary: "Stop an app's dev server",
			description: "Shuts one app's preview server down and frees its port."
		}).input(XO).output(Z),
		runTests: q.route({
			method: "POST",
			path: "/workspace/repos/{repo}/tests",
			summary: "Run a project's tests",
			description: "Starts the test run for the projects you name in an attachable terminal and answers straight away. The terminal is where the results appear."
		}).input(BO).output(Z)
	};
})), ak = w((() => {
	J(), K(), BD(), Sb(), dD(), $(), q.output(cD), q.input(qy).output(Z), q.output(Z), q.input(sc()).output(sc()), q.input(vD).output(Mu(bD)), q.input(SD).output(Mu(bD));
})), ok, sk, ck, lk, uk = w((() => {
	K(), ok = R({
		origin: N(),
		mode: V(["read", "act"])
	}), sk = R({
		browser: N(),
		tabs: F(),
		grants: L(ok),
		paused: I()
	}), ck = R({
		id: N(),
		platform: N().min(1),
		online: I(),
		version: N().optional(),
		lastSeen: F().optional(),
		facts: sk.optional()
	}), R({ browsers: L(ck) }), lk = R({
		name: N(),
		value: N(),
		domain: N(),
		path: N(),
		expires: F().optional(),
		httpOnly: I(),
		secure: I(),
		sameSite: V([
			"Strict",
			"Lax",
			"None"
		])
	}), R({
		account: N().min(1),
		origin: N().min(1),
		cookies: L(lk).min(1).max(300)
	}), R({
		account: N().min(1),
		domain: N().min(1)
	}), R({
		ok: I(),
		message: N(),
		cookies: L(lk).optional()
	});
})), dk = w((() => {
	J(), K(), Sb(), $(), uk(), q.output(sk), q.input(Xy).output(Z), q.output(Z), q.input(sc()).output(sc());
})), fk = w((() => {
	J(), K(), jh(), sd(), X(), Wd(), $(), q.output(td), q.input(rd).output(Mu(id)), q.input(ad).output(Mu(Eh)), q.input(zd).output(R({ applied: I() })), q.input(R({
		conversationId: N().min(1),
		text: N(),
		attachments: L(N()).optional(),
		editorContext: hd.optional()
	})).output(R({
		applied: I(),
		invalid: N().optional()
	})), q.input(R({ toml: N() })).output(R({ settings: L(N()) })), q.input(ad.pick({ conversationId: !0 })).output(Z), q.output(Z);
})), pk = w((() => {})), mk, hk, gk = w((() => {
	mk = "The interrupted request is repeated below, where part of it was already completed in this session, continue from that point instead of starting over.", hk = {
		auth: `The Claude credential that interrupted this conversation has been renewed, and this turn resumed automatically. ${mk}`,
		outage: `The model provider was briefly unavailable and interrupted this conversation; this turn resumed automatically. ${mk}`,
		restart: `The sandbox restarted while this turn was running, which stopped it, and this turn resumed automatically once it came back. ${mk}`,
		stopped: `The previous attempt at this request stopped before it finished, and it has been sent again. ${mk}`,
		limit: `The model provider's usage allowance ran out while this turn was running, which stopped it, and it has been sent again. ${mk}`,
		switched: "The model provider's usage allowance ran out while this turn was running, which stopped it, and it has been sent again on a different account, which starts a fresh session. The conversation so far has been carried across above, including the part of the request that was already completed, and the sandbox has measured where the work actually stands (the files changed on this branch, what was verified, what the checklist still holds) in the note headed 'Where the work stands': trust that note over anything recalled, then continue from that point instead of starting over.",
		carried: `The model provider's usage allowance ran out while this turn was running, which stopped it, and it has been sent again on a different account of the same provider, in this same session: everything you knew is still here. ${mk}`,
		refused: "The model provider refused the previous attempt at this request outright, because its usage allowance was spent: no part of the request below was read or acted on, and nothing has been done towards it. It has been sent again, and starts from the beginning. Where the sandbox has measured earlier work on this branch, it is in the note headed 'Where the work stands'.",
		answered: "The sandbox restarted while this conversation was waiting for the user to respond; it is back, and their response follows below: continue from where the session left off."
	}, hk.answered;
})), _k = w((() => {})), vk = w((() => {})), yk = w((() => {})), bk, xk = w((() => {
	K(), bk = [
		"editor",
		"read",
		"drive",
		"land"
	], V(bk);
})), Sk, Ck, wk, Tk, Ek, Dk, Ok = w((() => {
	Tp(), Sk = [
		{
			path: ".intentic/config/capabilities.json",
			invalidates: [
				"capabilities",
				"environment",
				"panels",
				"manifests"
			],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/capability-dismissals.json",
			invalidates: ["capabilities"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/records/secret-uses.json",
			invalidates: ["secrets"],
			portability: "carry"
		},
		{
			path: ".intentic/records/wallet-ledger.json",
			invalidates: [],
			why: "Rendered through the wallet CLI and the capability card's live status probe, not from a browser query key.",
			portability: "carry"
		},
		{
			path: ".intentic/config/personas.json",
			invalidates: [
				"personas",
				"capabilities",
				"manifests"
			],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/environment.custom.Dockerfile",
			invalidates: ["environment"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/environment.Dockerfile",
			invalidates: ["environment"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/environment.d/",
			invalidates: ["environment"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/local/environment.approved.Dockerfile",
			invalidates: ["environment"],
			portability: "derived",
			note: "The target composes its own overlay on first boot; rebuild it there to install the tools it names."
		},
		{
			path: ".intentic/config/settings.json",
			invalidates: ["settings", "manifests"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/safety.md",
			invalidates: ["safety-policy"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/local/safety-log.json",
			invalidates: ["safety-log"],
			portability: "derived",
			note: "The target starts its own record of what it decided."
		},
		{
			path: ".intentic/config/autostart.json",
			invalidates: [],
			why: "The browser reads what is running off /panels; this file only tells the daemon what to start at boot.",
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/heavy-commands.json",
			invalidates: ["settings"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/hooks/",
			invalidates: [],
			why: "The settings screen renders the rules that name these scripts, out of settings.json; nothing in the browser reads the scripts themselves.",
			portability: "carry",
			versioned: !0,
			outsideWriter: "the owner or an agent, authoring them; the daemon only ever RUNS one, by the path a rule's command names"
		},
		{
			path: ".intentic/local/rule-firings.json",
			invalidates: ["rule-firings"],
			portability: "derived",
			note: "Stamps of when each rule last did something; the new sandbox starts its own record."
		},
		{
			path: ".intentic/records/runtime-installs.json",
			invalidates: ["environment"],
			portability: "carry"
		},
		{
			path: ".intentic/config/engines.json",
			invalidates: ["engines"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/approvals/",
			invalidates: ["approvals"],
			portability: "carry",
			versioned: !0,
			authored: !0
		},
		{
			path: ".intentic/config/automations.json",
			invalidates: [],
			why: "Declared by the intentic.automations extension's contributes.files, `automations` is its query key, not core's.",
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/records/automation-runs.json",
			invalidates: [],
			why: "Declared by the intentic.automations extension's contributes.files, `automations` is its query key, not core's.",
			portability: "carry"
		},
		{
			path: ".intentic/records/approvals/",
			invalidates: [],
			why: "Declared by the intentic.approvals extension's contributes.files (the page that lists held wakes), `automation-approvals` is its query key, not core's.",
			portability: "carry"
		},
		{
			path: ".intentic/records/issues/",
			invalidates: [],
			why: "Declared by the intentic.issues extension's contributes.files, `issues` is its query key, not core's.",
			portability: "carry"
		},
		{
			path: ".intentic/records/chores/",
			invalidates: [],
			why: "Declared by the intentic.maintenance extension's contributes.files, `maintenance-report`/`maintenance-runs` are its query keys, not core's.",
			portability: "carry"
		},
		{
			path: ".intentic/config/docs/",
			invalidates: [],
			why: "Declared by the intentic.documentation extension's contributes.files, `documentation`/`documentation-runs` are its query keys, not core's.",
			portability: "carry",
			authored: !0,
			outsideWriter: "the intentic.documentation extension's staging writes (its paths.ts)"
		},
		{
			path: ".intentic/config/workflows.json",
			invalidates: ["workflows"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/records/workflow-runs.json",
			invalidates: ["workflows", "workflow-runs"],
			portability: "carry"
		},
		{
			path: ".intentic/config/loop-designs.json",
			invalidates: ["loop-designs"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/records/loops.json",
			invalidates: [],
			why: "Ralph loops and their iteration history. Nothing observes it: where a RUNNING loop stands rides on the fleet roster (AgentSummary.loop), which the /events stream already pushes about once a second, and a second source invalidating on this file could only ever disagree with the card beside it. The iteration list of an ENDED loop is an on-demand read, nothing renders it until someone opens it (web's useLoops, which holds no query for exactly this reason).",
			portability: "carry"
		},
		{
			path: ".intentic/records/webchat-installs.json",
			invalidates: [],
			why: "Which origins have loaded a Front Desk's widget, written on a 30s flush timer while a customer's site serves page views. The install panel that renders it fetches on open and polls itself while it is on screen, which is the whole window in which the answer changes for anyone. Pushing instead would bill every connected browser a refetch per flush, for a panel almost nobody has open.",
			portability: "carry"
		},
		{
			path: ".intentic/records/issue-installs.json",
			invalidates: [],
			why: "The same probe for the bug reporter's script, on the same flush timer and read by the same kind of panel, so it is outside the push path for the same reason the Front Desk's is.",
			portability: "carry"
		},
		{
			path: ".intentic/records/webchat-outbox.json",
			invalidates: [],
			why: "Front Desk replies a visitor has not collected yet, written when an approved wake answers or a human writes as the agent. The only reader is a stranger's browser polling the public /webchat door, which no query key in this app addresses; the owner's own view of the same words is the conversation's transcript, which the agent registry already pushes.",
			portability: "carry"
		},
		{
			path: ".intentic/records/thread-sessions.json",
			invalidates: [],
			why: "Thread bookkeeping (an inbound thread, a Front Desk visitor, a Discord or Slack channel, → sandbox conversation + provider session), written on EVERY inbound message. Nothing in the browser reads it: what a thread produces is a conversation, and the fleet board already learns about that from the agent registry's own push. Naming a key here would bill every connected browser a refetch per inbound message, the request storm this table's own note warns about, to refresh nothing it can see.",
			portability: "carry"
		},
		{
			path: ".intentic/records/senders.json",
			invalidates: [],
			why: "Who has written to each listener source, written on every inbound message that reached an automation. Read only while the automation editor's sender picker is open, which fetches it on open; a live key here would refetch every connected browser per Discord message to refresh a list nobody has on screen.",
			portability: "carry"
		},
		{
			path: ".intentic/config/extension-settings.json",
			invalidates: [],
			why: "Held in a module-level shallowRef store per extension (web's extensionSettingsStore) with no query observer, and deliberately so: api.settings.get must answer SYNCHRONOUSLY from an extension's first activate() line, and the store outlives every component scope. A module-level QueryObserver is the one shape that would make invalidation refetch, and this app already ruled it out, it detaches on the queryClient.clear() at logout (see useSandbox's sandbox-list mirror). So a remote member's setting edit reaches this browser on its next load, not live.",
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/extension-enablement.json",
			invalidates: ["extensions"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/workspace-extensions/",
			invalidates: ["extensions"],
			portability: "carry",
			versioned: !0,
			authored: !0
		},
		{
			path: ".intentic/records/extension-updates.json",
			invalidates: ["extensions"],
			portability: "carry"
		},
		{
			path: ".intentic/config/extension-update-policy.json",
			invalidates: ["extensions"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/records/extension-usage.json",
			invalidates: [],
			why: "Which of the routes each extension DECLARED it has actually called, the evidence behind the permissions list on its row. The one entry here whose empty set is a RATE decision rather than an architectural one: every browser with the app open reports its batch on a timer, so wiring this to the `extensions` query would refetch the whole list every few seconds for a figure nobody is watching change. The tab reads it when it loads, which is when anyone is reading it.",
			portability: "carry"
		},
		{
			path: ".intentic/identity/members.json",
			invalidates: [],
			why: "Not this view's source at all: SandboxAccess renders the PLATFORM's invite records (apiClient.invite.list), and this file is the daemon's ENFORCED copy, written first so a grant the enforcer never got is never recorded, then never read back. A change here means the two disagreed, which the write order makes fail-closed rather than stale.",
			portability: "identity",
			note: "Re-invite collaborators from the Access tab, a grant is the platform's record, and the target enforces its own copy."
		},
		{
			path: ".intentic/secrets/auth/",
			invalidates: [],
			why: "AI-provider credentials and runtime homes, plus the capability and extension-settings secret vaults; each account is rendered through owner-gated provider routes.",
			portability: "secret",
			note: "Sign the agent's AI accounts in again on the Agent tab, then re-enter each connection's credential on Capabilities and each extension's secret settings on Extensions, both arrived listed but unauthenticated."
		},
		{
			path: ".intentic/records/sessions/claude/",
			invalidates: [],
			why: "Agent session transcripts; nothing derives from watching them, and descending into them would cost a fifth of the watcher.",
			portability: "carry"
		},
		{
			path: ".intentic/records/artifacts/",
			invalidates: [],
			why: "Durable outputs owned by conversations and extension runs: attachments, browser captures, generated images, acceptance reports, workflow step reports, voice transcripts, and loop ledgers.",
			portability: "carry"
		},
		{
			path: ".intentic/local/cache/",
			invalidates: [],
			why: "Rebuildable indexes and caches, the iq index and its vector sidecar, the whisper model, fileq's derived/ markdown shadows of binary files; ignored by the watcher and recreated from carried workspace content.",
			portability: "derived"
		},
		{
			path: ".intentic/local/runtime/",
			invalidates: [],
			why: "Extension runtime scratch (watermarks, cached short-lived tokens); nothing renders it and gateways re-derive it.",
			portability: "derived",
			outsideWriter: "extensions, through extensionRuntimeDir below"
		},
		{
			path: ".intentic/local/tmp/",
			invalidates: [],
			why: "Scratch that agents and tools leave behind (build logs, demo checkouts); nothing reads it after the turn that wrote it. The state janitor empties it at boot.",
			portability: "derived"
		},
		{
			path: ".intentic/local/.pnpm-store/",
			invalidates: [],
			why: "pnpm's content-addressable store, auto-created by installs run from under .intentic; the next install rebuilds it.",
			portability: "derived",
			outsideWriter: "pnpm itself, when an install runs from under .intentic"
		},
		{
			path: ".intentic/local/newest-run.json",
			invalidates: [],
			why: "The newest daemon version that ever ran this workspace (store/newest-run.ts), a downgrade tripwire, about THIS sandbox the way rule-firings is.",
			portability: "derived",
			note: "The target stamps its own daemon version on first boot."
		},
		{
			path: ".intentic/records/verify.json",
			invalidates: [],
			why: "The dependency verifier's verdict memory; nothing renders it directly, outcomes reach the owner as activity entries and workspace events.",
			portability: "carry"
		},
		{
			path: ".intentic/local/verify/",
			invalidates: [],
			why: "A running check's wrapper artifacts (log + exit status), read once by the daemon when the panel finishes.",
			portability: "derived"
		},
		{
			path: ".intentic/secrets/ci.json",
			invalidates: [],
			why: "Webhook secret + conclusion memory; the Pipelines view reads it through /ci/runs, not off disk.",
			portability: "secret",
			note: "Re-add the CI webhook on the Pipelines view, its secret is per-sandbox."
		},
		{
			path: ".intentic/secrets/doors.json",
			invalidates: [],
			why: "The credentials behind the event webhooks, release gates and bug intakes; each surface reads its own through /automations and /workflows, never off disk.",
			portability: "secret",
			note: "Webhook, gate and intake URLs are minted fresh on the first read here: re-copy each into its caller's secret store."
		},
		{
			path: ".intentic/identity/control-tokens.json",
			invalidates: [],
			why: "Hashed control tokens (the ACP editor bridge, and anything else driving this sandbox from outside), listed on demand by the owner.",
			portability: "identity",
			backup: !1,
			note: "Mint fresh control tokens, the old ones authenticate against the source sandbox."
		},
		{
			path: ".intentic/identity/owner.json",
			invalidates: [],
			why: "Bound once on first use; a change here means the sandbox was re-owned, which re-authenticates anyway.",
			portability: "identity"
		},
		{
			path: ".intentic/identity/workspace.json",
			invalidates: [],
			why: "The workspace identity, read from the /events hello frame rather than as a file.",
			portability: "identity"
		},
		{
			path: ".intentic/identity/passkeys.json",
			invalidates: [],
			why: "The passkeys registered with this sandbox, whether one is required to open it, and the hashes of the owner's recovery codes; the Access tab reads them through /system/passkeys, never off disk.",
			portability: "identity",
			note: "Passkeys are bound to the sandbox they were registered with: add them again on the new one from its Access tab."
		},
		{
			path: ".intentic/config/templates.json",
			invalidates: [],
			why: "Scaffold templates, read when the scaffold dialog opens.",
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/local/browser/",
			invalidates: [],
			why: "Browser-login profiles: Chromium rewrites these constantly. Descent-ignored by the watcher outright.",
			portability: "derived",
			note: "Log the agent's browser back into any site it needs, profiles do not travel."
		},
		{
			path: ".intentic/local/extensions/",
			invalidates: [],
			why: "Extension checkouts, whole git clones. The `extensions` query is driven by the capability manifest above, not by their contents.",
			portability: "derived",
			note: "Extensions re-clone from the capability manifest on the target's next reconcile."
		},
		{
			path: ".intentic/records/plugins/",
			invalidates: [],
			why: "Agent plugin dirs, read by the SDK's loader each turn.",
			portability: "carry"
		},
		{
			path: ".intentic/config/skills/",
			invalidates: ["skills"],
			portability: "carry",
			versioned: !0
		},
		{
			path: ".intentic/config/personas/",
			invalidates: ["personas"],
			portability: "carry",
			versioned: !0
		}
	], Ck = Sk, Ck.filter((e) => e.versioned).map((e) => e.path), Ck.filter((e) => e.versioned || e.authored).map((e) => e.path), wk = {
		config: `${Cp}/config`,
		records: `${Cp}/records`,
		local: `${Cp}/local`,
		identity: `${Cp}/identity`,
		secrets: `${Cp}/secrets`
	}, Tk = Object.keys(wk), Ek = (e) => {
		switch (e.portability) {
			case "secret": return "secrets";
			case "identity": return "identity";
			case "derived": return "local";
			case "carry": return e.versioned === !0 || e.authored === !0 ? "config" : "records";
		}
	}, Tk.flatMap((e) => {
		let t = Ck.filter((t) => Ek(t) === e);
		return t.some((e) => e.versioned === !0) ? t.filter((e) => e.versioned !== !0).map((e) => e.path) : [`${wk[e]}/`];
	}), Dk = Ck.filter((e) => e.backup !== !1 && (e.portability === "carry" || e.portability === "identity")).map((e) => e.path), Ck.filter((e) => !Dk.includes(e.path)).map((e) => e.path), Ck.filter((e) => e.invalidates.includes("manifests")).map((e) => e.path), `${Cp}`, `${Cp}`;
})), kk = w((() => {})), Ak = w((() => {})), jk = w((() => {})), Mk = w((() => {})), Nk = w((() => {})), Pk = w((() => {})), Fk, Ik = w((() => {
	Fk = (e) => e instanceof Error ? e.message : String(e);
})), Lk = w((() => {})), Rk, zk, Bk, Vk, Hk = w((() => {
	Rk = /(?:auth[_-]?token|access[_-]?token|refresh[_-]?token|api[_-]?key|access[_-]?key|secret[_-]?key|client[_-]?secret|private[_-]?key|passwo?rd|passphrase|credentials?|secret|token|bearer)["']?[ \t]*[:=][ \t]*(?:"([^"\n]*)"|'([^'\n]*)'|([^\s"',;}\n]*))/gi, zk = [
		/-----BEGIN (?:[A-Z0-9]+ )*PRIVATE KEY-----/,
		/PuTTY-User-Key-File-\d/,
		/\b[a-z][a-z0-9+.-]*:\/\/[^\s/:@]+:(?!\*+@)[^\s/@]{3,}@/i
	], Bk = [
		/\bnpm_[A-Za-z0-9]{30,}/,
		/\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{30,}/,
		/\bgithub_pat_[A-Za-z0-9_]{50,}/,
		/\bglpat-[A-Za-z0-9_-]{16,}/,
		/\bxox[baprs]-[A-Za-z0-9-]{10,}/,
		/\bsk-[A-Za-z0-9_-]{20,}/,
		/\b(?:sk|rk)_live_[A-Za-z0-9]{16,}/,
		/\bAKIA[0-9A-Z]{16}\b/,
		/\bASIA[0-9A-Z]{16}\b/,
		/\bAIza[0-9A-Za-z_-]{35}\b/,
		/\bhf_[A-Za-z0-9]{30,}/,
		/\bdop_v1_[a-f0-9]{60,}/,
		/\bey[A-Za-z0-9_-]{10,}\.ey[A-Za-z0-9_-]{10,}\./
	], [...zk, ...Bk], Vk = (e) => e.map((e) => new RegExp(e.source, `${e.flags}g`)), Vk(Bk), new RegExp(Rk.source, Rk.flags);
})), Uk = w((() => {})), Wk, Gk = w((() => {
	Wk = 80, Wk * .6;
})), Kk = w((() => {
	Gk(), Ok();
})), qk = w((() => {})), Jk = w((() => {
	wC();
})), Yk = w((() => {
	K(), R({
		type: H("hello"),
		token: N(),
		version: N()
	});
})), Xk = w((() => {
	K(), R({
		type: H("hello"),
		token: N(),
		version: N()
	});
})), Zk = w((() => {})), Qk, $k = w((() => {
	K(), xf(), R({
		provider: N().min(1),
		type: N().min(1),
		id: N(),
		channelId: N(),
		author: R({
			id: N(),
			name: N(),
			groups: L(N()).optional()
		}),
		content: N(),
		mentioned: I().optional(),
		branch: N().optional(),
		history: L(R({
			author: R({
				id: N(),
				name: N()
			}),
			content: N(),
			timestamp: N(),
			self: I().optional()
		})).optional(),
		timestamp: N(),
		extra: B(N(), sc()).optional()
	}), Qk = R({
		state: V([
			"waiting",
			"code",
			"failed"
		]),
		code: N().optional(),
		detail: N().optional(),
		since: F().optional()
	}), bf.extend({
		whisperReady: I().optional(),
		pairing: B(N(), Qk).optional()
	});
})), eA = w((() => {})), tA = w((() => {})), nA = w((() => {})), rA = w((() => {})), iA = w((() => {})), aA, oA = w((() => {
	aA = {
		cautious: 0,
		balanced: .25,
		eager: .4
	}, aA.balanced;
})), sA = w((() => {})), cA, lA, uA, dA, fA, pA = w((() => {
	K(), cA = [
		"claude",
		"codex",
		"cursor",
		"opencode",
		"translator"
	], lA = V(cA), uA = R({
		kind: V([
			"blessed",
			"latest",
			"pinned",
			"image"
		]).describe("Where this engine's version comes from."),
		version: N().optional().describe("Which version, when it is pinned to one.")
	}), dA = R({
		version: N().describe("Which version was refused."),
		reason: N().describe("What was wrong with it: it would not launch, or it did not export what the daemon calls."),
		at: N().describe("When it was refused.")
	}), fA = R({
		id: lA.describe("Which engine."),
		label: N().describe("What it is called on screen."),
		running: R({
			version: N().optional().describe("The version a turn would use right now. Absent means there is no copy of this engine here yet."),
			source: V(["image", "store"]).describe("Whether that version is the one baked into the sandbox image or one the store installed over it.")
		}).describe("What a turn started now would actually run."),
		baked: N().optional().describe("The version the image bakes, which is the floor everything else falls back to. Absent on an image that carries no copy of it."),
		channel: uA.describe("The owner's standing answer for this engine."),
		offered: R({
			version: N().describe("The version this engine would move to."),
			blessed: I().describe("Whether the blessed list names this version, which on the latest channel is routinely no.")
		}).optional().describe("A newer version waiting, absent when the running one is already what the channel asks for."),
		blessed: N().optional().describe("What the blessed list names for this engine, when the list has been read."),
		previous: N().optional().describe("The version kept one step back, which is what going back means."),
		quarantined: L(dA).describe("Versions the store installed and then refused, with the reason."),
		diskBytes: F().int().nonnegative().describe("What this engine's kept versions cost on the daemon's volume."),
		installing: I().optional().describe("Whether this engine is currently being installed in the background.")
	}), R({
		engines: L(fA).describe("Every engine this sandbox can run, whether or not the store holds anything for it."),
		checkedAt: N().optional().describe("When upstream was last asked what it publishes. Absent until the first check has run."),
		listSource: N().describe("Where the blessed list is read from, so a self-hosted sandbox can show its own."),
		listReadAt: N().optional().describe("When that list was last read. Absent means it has never been reachable from here.")
	}), R({
		id: lA.describe("Which engine."),
		kind: V([
			"blessed",
			"latest",
			"pinned",
			"image"
		]).describe("Where its version should come from."),
		version: N().optional().describe("Which version, required when pinning and ignored otherwise.")
	}), R({
		id: lA.describe("Which engine."),
		version: N().optional().describe("Which version. Leave it out for whatever the channel offers; naming one takes a version nobody has blessed, deliberately."),
		floor: N().optional().describe("Install the lowest published version at or above this one. What a turn refused for being too old sends back.")
	}), R({ id: lA.describe("Which engine.") }), R({
		ok: H(!0).describe("It went through."),
		version: N().describe("Which version is now active."),
		source: V(["image", "store"]).describe("Whether that is the image's copy or the store's."),
		fromNextTurn: I().describe("Whether the change reaches turns already in flight, or only the next one.")
	});
})), mA, hA, gA, _A, vA, yA, bA, xA, SA, CA = w((() => {
	K(), mA = R({
		content: N(),
		hash: N()
	}), hA = R({
		bornAt: F(),
		at: F(),
		apt: L(N()),
		paths: L(N())
	}), gA = V([
		"apt",
		"pip",
		"cargo",
		"npm",
		"rustup-target",
		"playwright",
		"gem",
		"pipx",
		"go",
		"other"
	]), _A = R({
		tool: N(),
		kind: gA,
		sessions: L(N()),
		commands: L(N()),
		firstAt: F(),
		lastAt: F(),
		count: F(),
		declinedAt: F().optional()
	}), R({
		installs: L(_A),
		drift: hA.optional()
	}), vA = R({
		tool: N(),
		kind: gA,
		sessions: F(),
		lastAt: F(),
		live: I(),
		drafted: I().optional(),
		declined: I().optional(),
		step: N().optional()
	}), R({
		tool: N().min(1),
		decision: V([
			"adopt",
			"dismiss",
			"restore"
		])
	}), yA = R({
		base: N(),
		root: N().optional()
	}), R({
		proposal: mA.optional(),
		custom: mA.optional(),
		approved: mA.optional(),
		appliedHash: N().optional(),
		container: N().optional(),
		drift: hA.optional(),
		recurring: L(vA).optional(),
		localImage: yA.optional()
	}), R({ hash: N().min(1) }), bA = R({
		name: N(),
		version: N().optional()
	}), xA = R({
		id: N(),
		name: N(),
		origin: V([
			"custom",
			"capability",
			"base"
		]),
		originLabel: N().optional(),
		state: V([
			"active",
			"after-rebuild",
			"awaiting-approval"
		]),
		tools: L(bA),
		extras: F().optional(),
		purpose: N().optional(),
		detail: N().optional(),
		commands: N().optional()
	}), R({ items: L(xA) }), SA = R({
		name: N(),
		status: V([
			"packing",
			"ready",
			"failed"
		]),
		bytes: F(),
		createdAt: F(),
		secrets: I(),
		error: N().optional()
	}), R({ exports: L(SA) });
})), wA, TA, EA, DA, OA, kA = w((() => {
	K(), ed(), wA = V([
		"definition",
		"bundle",
		"hermes",
		"openclaw"
	]), TA = V(["hermes", "openclaw"]), EA = V([
		"workspace",
		"repo",
		"files",
		"history",
		"environment",
		"capability",
		"settings",
		"memory",
		"skill",
		"automation",
		"secret"
	]), DA = R({
		id: N(),
		group: EA,
		label: N(),
		detail: N().optional(),
		applicable: I(),
		reason: N().optional(),
		recommended: I(),
		secrets: L(N())
	}), R({
		source: wA,
		token: N(),
		name: N().optional(),
		items: L(DA),
		carriesSecrets: I(),
		refused: L(N()),
		needsAction: L($u)
	}), R({
		token: N(),
		items: L(N()),
		includeSecrets: I()
	}), R({
		applied: L(R({
			id: N(),
			group: EA,
			label: N()
		})),
		failed: L(R({
			id: N(),
			label: N(),
			error: N()
		})),
		refused: L(N()),
		needsAction: L($u),
		presentation: R({
			name: N().optional(),
			image: N().optional()
		}).optional()
	}), OA = R({
		id: N(),
		online: I(),
		found: TA.optional(),
		detail: N().optional()
	}), R({ hosts: L(OA) }), R({ host: N().min(1) });
})), AA, jA, MA, NA, PA, FA, IA = w((() => {
	K(), ed(), Sb(), Nw(), AA = lc({
		id: N().min(1),
		remote: N().min(1),
		ref: N().optional()
	}), jA = lc({
		remote: N().min(1),
		ref: N().optional()
	}), MA = lc({
		baseImage: N().optional(),
		dockerfile: N().optional()
	}), NA = (e) => {
		let t = e;
		for (; t instanceof _l || t instanceof vl;) t = t.unwrap();
		return t;
	}, PA = () => lc(Object.fromEntries(Object.entries(gw.shape).map(([e, t]) => [e, NA(t).optional()]))).prefault({}), FA = lc({
		schemaVersion: H(1),
		name: N().optional(),
		environment: MA.prefault({}),
		workspace: jA.optional(),
		repositories: L(AA).prefault([]),
		capabilities: L(lb).prefault([]),
		secrets: L(N()).prefault([]),
		settings: PA()
	}), R({
		toml: N(),
		omitted: L($u)
	}), R({ differences: L($u) }), R({
		remote: N().min(1).optional(),
		name: N().min(1).optional(),
		owner: N().min(1).optional()
	}), R({
		remote: N(),
		branch: N(),
		created: I()
	}), R({
		remote: N().optional(),
		branch: N().optional(),
		hosts: L(N())
	}), R({
		version: H(3),
		sandbox: R({ name: N() }).optional(),
		presentation: R({
			name: N().optional(),
			image: N().optional()
		}).optional(),
		createdAt: F(),
		secrets: I(),
		repos: L(N()),
		definition: FA,
		excluded: L(R({
			path: N(),
			portability: N(),
			note: N().optional()
		}))
	});
})), LA = w((() => {})), RA = w((() => {})), zA = w((() => {})), BA = w((() => {})), VA = w((() => {})), HA = w((() => {
	Ap();
})), UA, WA, GA = w((() => {
	Bl(), hf(), Cf(), Gh(), I_(), Y_(), Z_(), Ub(), Ox(), Ax(), Px(), Ix(), SC(), Zw(), jT(), NT(), LT(), zT(), VT(), QT(), eE(), sE(), mE(), SE(), TE(), OE(), RE(), BE(), HE(), JE(), nD(), iD(), oD(), tO(), rO(), oO(), cO(), jO(), ik(), ak(), dk(), fk(), pk(), jh(), yp(), gk(), Hv(), Th(), _k(), vk(), yk(), Bl(), xk(), Tp(), Ok(), kk(), Ak(), jk(), Mk(), Nk(), Ju(), Qu(), CC(), Pk(), LC(), Lk(), JC(), Hk(), Uk(), Lu(), Kk(), Jk(), Yk(), Xk(), Zk(), sd(), $k(), eA(), tA(), nA(), qk(), wC(), Hu(), rA(), iA(), oA(), Ap(), sA(), xf(), X(), Om(), q_(), Ng(), Sb(), Kg(), Am(), nx(), BD(), pA(), CA(), ry(), bC(), Mm(), P_(), kT(), Uh(), dD(), FT(), gy(), lg(), XT(), Kp(), Ex(), Lb(), aE(), Yw(), Wd(), fE(), df(), Kd(), bE(), IE(), Vb(), Bf(), KE(), Nw(), th(), $(), $D(), Jm(), eD(), Ny(), uk(), kO(), ZO(), Zb(), nk(), wv(), kA(), IA(), LA(), RA(), zA(), Gk(), fD(), BA(), VA(), HA(), UA = {
		accounts: mf,
		activity: Sf,
		agent: Wh,
		agents: F_,
		approvals: J_,
		automations: X_,
		capabilities: Hb,
		chores: Dx,
		ci: kx,
		endpoints: Nx,
		extensions: xC,
		personas: Xw,
		safety: zE,
		sessions: qE,
		settings: tD,
		share: rD,
		skills: aD,
		intentic: IT,
		git: AT,
		history: MT,
		workspace: rk,
		inventory: RT,
		issues: BT,
		logs: ZT,
		loops: $T,
		panels: oE,
		ports: pE,
		public: xE,
		prepush: wE,
		providers: DE,
		push: LE,
		secrets: VE,
		system: eO,
		translator: nO,
		usage: aO,
		vpn: sO,
		exit: Fx,
		workflows: AO
	}, WA = Pl(UA), WA.map((e) => e.name), zl(UA);
})), KA, qA, JA = w((() => {
	({bindHost: KA, host: qA} = e("ext-acceptance"));
})), YA, XA, ZA, QA, $A, ej, tj, nj, rj, ij, aj = w((() => {
	Tp(), YA = 64, XA = 8, ZA = 0, QA = (e) => `r${e.toString(36).padStart(XA, "0")}${(ZA++).toString(36)}`, $A = (e, t, n) => `${e.prefix}-${t}${n === void 0 ? "" : `-${n}`}`.slice(0, YA).replace(/[-_]+$/u, ""), ej = (e) => `${Cp}/${e.runsDir}`, tj = (e, t) => `${ej(e)}/${t}`, nj = (e, t) => `${tj(e, t)}/run.json`, rj = (e, t, n) => n === void 0 ? tj(e, t) : `${tj(e, t)}/${n}`, ij = (e, t, n) => `${rj(e, t, n)}/result.json`;
})), oj, sj, cj, lj, uj, dj, fj, pj, mj, hj, gj, _j, vj, yj, bj, xj, Sj, Cj, wj, Tj, Ej, Dj, Oj, kj, Aj, jj, Mj, Nj, Pj, Fj, Ij, Lj = w((() => {
	aj(), GA(), oj = {
		runsDir: "records/artifacts/acceptance",
		prefix: "xt",
		scanRuns: 10
	}, sj = ej(oj), cj = oj.scanRuns, lj = (e, t) => rj(oj, e, t), uj = (e) => nj(oj, e), dj = (e, t) => ij(oj, e, t), fj = (e, t) => `${lj(e, t)}/report.md`, pj = `${sj}/seen.json`, mj = /^r[0-9a-z]+$/, hj = /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/, gj = /^shots\/[^/]+\.png$/i, _j = (e) => gj.test(e), vj = (e) => QA(e), yj = (e, t) => $A(oj, e, t), bj = (e) => ({
		runId: e.runId,
		createdAt: e.createdAt,
		targets: e.targets,
		notes: e.notes,
		pick: e.pick,
		stories: e.stories.map(({ slug: t, repo: n, group: r, path: i, title: a, content: o, criteria: s }) => ({
			slug: t,
			repo: n,
			group: r,
			path: i,
			title: a,
			conversationId: yj(e.runId, t),
			content: o,
			criteria: s
		})),
		launchFailures: {}
	}), xj = (e) => [...new Set(e.stories.map((e) => e.repo))], Sj = (e, t) => t !== void 0 && e.content === t, Cj = (e) => e === "pass" ? "success" : e === "fail" ? "danger" : "warning", wj = (e, t) => {
		if (e !== void 0) return {
			label: e,
			variant: Cj(e)
		};
		if (t === "running" || t === "awaiting") return {
			label: "testing",
			variant: "info"
		};
		if (t === "error") return {
			label: "untested",
			variant: "danger"
		};
	}, Tj = (e) => typeof e == "object" && e && !Array.isArray(e) ? e : void 0, Ej = (e) => typeof e == "string" && e !== "", Dj = (e) => typeof e == "string", Oj = (e) => e === "pass" || e === "fail" || e === "blocked", kj = (e) => {
		let t = Tj(e);
		if (t === void 0) return;
		let { text: n, verdict: r, note: i } = t;
		if (Ej(n) && (r === "pass" || r === "fail" || r === "untested") && Dj(i)) return {
			text: n,
			verdict: r,
			note: i
		};
	}, Aj = (e) => {
		let t = Tj(e);
		if (t === void 0) return;
		let { n, action: r, expected: i, observed: a, shot: o } = t;
		if (!(typeof n != "number" || !Number.isInteger(n) || n < 1 || !Ej(r) || !Dj(i) || !Dj(a) || !Dj(o) || o !== "" && !_j(o))) return {
			n,
			action: r,
			expected: i,
			observed: a,
			shot: o
		};
	}, jj = (e) => {
		let t = Tj(e);
		if (t === void 0) return;
		let { severity: n, summary: r, repro: i, shot: a } = t;
		if ((n === "blocker" || n === "major" || n === "minor") && Ej(r) && Dj(i) && Dj(a) && (a === "" || _j(a))) return {
			severity: n,
			summary: r,
			repro: i,
			shot: a
		};
	}, Mj = (e, t) => {
		if (!Array.isArray(e)) return;
		let n = e.map(t);
		return n.some((e) => e === void 0) ? void 0 : n;
	}, Nj = (e, t) => {
		try {
			let n = Tj(JSON.parse(e));
			if (n === void 0) return;
			let { story: r, title: i, verdict: a, criteria: o, steps: s, defects: c } = n;
			if (!Ej(r) || !Ej(i) || !Oj(a)) return;
			let l = Mj(o, kj), u = Mj(s, Aj), d = Mj(c, jj);
			return l === void 0 || u === void 0 || d === void 0 || l.length === 0 || r !== t.slug || i !== t.title || t.criteria.length > 0 && (l.length !== t.criteria.length || l.some((e, n) => e.text !== t.criteria[n])) || a === "pass" && l.some((e) => e.verdict !== "pass") || a === "blocked" && l.some((e) => e.verdict !== "untested") ? void 0 : {
				story: r,
				title: i,
				verdict: a,
				criteria: l,
				steps: u,
				defects: d
			};
		} catch {
			return;
		}
	}, Pj = (e) => {
		let t = Tj(e);
		if (t === void 0) return;
		let { slug: n, repo: r, group: i, path: a, title: o, conversationId: s, content: c, criteria: l } = t;
		if (Ej(n) && hj.test(n) && Ej(r) && typeof i == "string" && Ej(a) && Ej(o) && Ej(s) && Iu(s) && typeof c == "string" && Array.isArray(l) && l.every(Ej)) return {
			slug: n,
			repo: r,
			group: i,
			path: a,
			title: o,
			conversationId: s,
			content: c,
			criteria: l
		};
	}, Fj = (e) => {
		let t = Tj(e);
		return t === void 0 || Object.values(t).some((e) => typeof e != "string") ? void 0 : t;
	}, Ij = (e) => {
		try {
			let t = Tj(JSON.parse(e));
			if (t === void 0) return;
			let { runId: n, createdAt: r, stories: i, targets: a, notes: o, launchFailures: s } = t, c = Td.safeParse(t.pick);
			if (!Ej(n) || !mj.test(n) || typeof r != "number" || !Number.isSafeInteger(r) || r < 0 || !c.success || c.data === void 0 || !Array.isArray(i) || i.length === 0) return;
			let l = Fj(a), u = Fj(o), d = Fj(s), f = i.map(Pj);
			if (l === void 0 || u === void 0 || d === void 0 || f.some((e) => e === void 0)) return;
			let p = f;
			return new Set(p.map((e) => e.slug)).size !== p.length || new Set(p.map((e) => e.conversationId)).size !== p.length || p.some((e) => e.conversationId !== yj(n, e.slug)) || Object.entries(d).some(([e, t]) => t === "" || !p.some((t) => t.slug === e)) ? void 0 : {
				runId: n,
				createdAt: r,
				targets: l,
				notes: u,
				pick: c.data,
				stories: p,
				launchFailures: d
			};
		} catch {
			return;
		}
	};
})), Rj, zj, Bj, Vj, Hj, Uj, Wj, Gj, Kj, qj = w((() => {
	GA(), JA(), Lj(), Rj = t(qA, pj), zj = (e) => `${e.runId}/${e.slug}`, Bj = (e, t) => e.filter((e) => t[zj(e)] !== e.verdict), Vj = (e) => Object.fromEntries(e.map((e) => [zj(e), e.verdict])), Hj = async (e) => {
		let t = rv.parse(await e.sandbox.json(`/workspace/children?path=${encodeURIComponent(sj)}`)).entries.filter((e) => e.type === "dir").map((e) => e.path).toSorted((e, t) => t.localeCompare(e)).slice(0, cj);
		return (await Promise.all(t.map(async (t) => {
			let n = Ij(await e.workspace.file(`${t}/run.json`) ?? "");
			return n === void 0 ? [] : (await Promise.all(n.stories.map(async (t) => {
				let r = Nj(await e.workspace.file(dj(n.runId, t.slug)) ?? "", t)?.verdict;
				return r === "fail" || r === "blocked" ? {
					runId: n.runId,
					slug: t.slug,
					verdict: r
				} : void 0;
			}))).flatMap((e) => e === void 0 ? [] : [e]);
		}))).flat();
	}, {state: Uj, start: Wj} = n({
		host: qA,
		everyMs: 6e5,
		initial: () => [],
		read: async (e) => Bj(await Hj(e), await Rj.read())
	}), Gj = () => {
		let e = Uj.value.filter((e) => e.verdict === "fail").length, t = Uj.value.filter((e) => e.verdict === "blocked").length;
		if (e + t === 0) return;
		let n = [...e > 0 ? [`${e} failed`] : [], ...t > 0 ? [`${t} blocked`] : []];
		return {
			count: e + t,
			tone: e > 0 ? "danger" : "warning",
			tooltip: `${n.join(", ")} since you last looked`
		};
	}, Kj = async () => {
		try {
			let e = qA();
			if (!e.sandbox.reachable()) return;
			await Rj.replace(Vj(await Hj(e))) && (Uj.value = []);
		} catch {}
	};
})), Jj, Yj, Xj, Zj, Qj, $j, eM, tM, nM, rM, iM, aM, oM, sM, cM, lM, uM, dM, fM = w((() => {
	Jj = "docs/user-stories", Yj = `${Jj}/.acceptance.md`, Xj = [
		".md",
		".markdown",
		".feature",
		".txt"
	], Zj = (e) => e.type === "file" && !e.name.startsWith(".") && Xj.some((t) => e.name.toLowerCase().endsWith(t)), Qj = (e) => e.replace(/\.[^.]+$/, ""), $j = (e) => {
		let t = Qj(e.split("/").pop() ?? e).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40);
		return t === "" ? "story" : t;
	}, eM = 20, tM = (e, t) => {
		for (let e of (t ?? "").split("\n").slice(0, eM)) {
			let t = /^#\s+(.+?)\s*$/.exec(e) ?? /^\s*Feature:\s*(.+?)\s*$/.exec(e);
			if (t?.[1] !== void 0 && t[1] !== "") return t[1];
		}
		let n = Qj(e.split("/").pop() ?? e).replace(/^\d+[-_.]?\s*/, "").replace(/[-_]+/g, " ").trim(), r = n === "" ? Qj(e.split("/").pop() ?? e) : n;
		return r.charAt(0).toUpperCase() + r.slice(1);
	}, nM = (e) => e.group === "" ? e.repo : `${e.repo}/${e.group}`, rM = (e, t, n = {}) => {
		let r = `${e}/${Jj}/`, i = /* @__PURE__ */ new Map();
		return t.filter(Zj).map((e) => e.path).toSorted((e, t) => e.localeCompare(t)).map((t) => {
			let a = $j(t), o = i.get(a) ?? 0;
			i.set(a, o + 1);
			let s = (t.startsWith(r) ? t.slice(r.length) : t).split("/");
			return {
				repo: e,
				path: t,
				slug: o === 0 ? a : `${a}-${o + 1}`,
				title: tM(t, n[t]),
				group: s.length > 1 ? s[0] ?? "" : ""
			};
		});
	}, iM = (e) => {
		let t = /* @__PURE__ */ new Map();
		return e.map((e) => {
			let n = t.get(e.slug) ?? 0;
			return t.set(e.slug, n + 1), n === 0 ? e : {
				...e,
				slug: `${e.slug}-${n + 1}`
			};
		});
	}, aM = "## Acceptance criteria", oM = /^\s*[-*]\s+(?:\[[ xX]?\]\s*)?(.+?)\s*$/, sM = /^\s{0,3}#{1,6}\s/, cM = (e) => e.findIndex((e) => e.trim().toLowerCase() === aM.toLowerCase()), lM = (e) => {
		let t = (e ?? "").split("\n"), n = cM(t);
		if (n === -1) return [];
		let r = t.slice(n + 1), i = r.findIndex((e) => sM.test(e));
		return (i === -1 ? r : r.slice(0, i)).flatMap((e) => {
			let t = oM.exec(e);
			return t?.[1] === void 0 || t[1] === "" ? [] : [t[1]];
		});
	}, uM = (e) => `# ${e.trim()}\n\n${aM}\n\n- \n`, dM = (e, t, n) => `${e}/${Jj}/${t === "" ? "" : `${t}/`}${n}.md`;
}));
//#endregion
//#region src/useTargets.ts
function pM(e) {
	let t = qA(), n = ke(), r = t.sandbox.key("acceptance", "panels"), a = C({
		queryKey: r,
		enabled: i(() => t.sandbox.reachable()),
		queryFn: async () => rE.parse(await t.sandbox.json("/panels")).panels,
		refetchInterval: (e) => (e.state.data ?? []).some((e) => e.running && !e.healthy) ? mM : !1
	}), o = _({}), s = (e) => a.data.value?.find((t) => t.repo === e), c = (e) => s(e)?.servers ?? [], l = (e) => {
		let t = c(e);
		return t.length === 1 ? t[0] : void 0;
	}, u = (e) => {
		let t = s(e);
		return t?.hasPanel === !0 ? c(e).length > 0 ? "ready" : t.running ? "starting" : "stopped" : "none";
	}, d = (e) => l(e)?.url, f = (t, n) => {
		let r = nM({
			repo: t,
			group: n
		});
		return _M({
			typed: o.value[r],
			remembered: e.value[r],
			state: u(t),
			servers: c(t)
		});
	};
	return {
		stateOf: u,
		serversOf: c,
		localUrl: d,
		addressOf: f,
		terminalOf: (e) => l(e)?.session,
		isElsewhere: (e, t) => {
			let n = f(e, t);
			return n !== void 0 && n !== d(e);
		},
		needsAddress: (e, t) => f(e, t) === void 0 && !["stopped", "starting"].includes(u(e)),
		aimAt: (e, t, n) => {
			let r = nM({
				repo: e,
				group: t
			}), { [r]: i, ...a } = o.value;
			o.value = n === void 0 ? a : {
				...a,
				[r]: n
			};
		},
		isLoading: a.isLoading,
		error: i(() => a.error.value?.message),
		refresh: async () => {
			await n.invalidateQueries({ queryKey: r });
		},
		startPanel: async (e) => {
			t.terminal.open(hM(e)), await t.sandbox.json(`/panels/${encodeURIComponent(e)}/start`, { method: "POST" }), t.terminal.open(hM(e)), await n.invalidateQueries({ queryKey: r });
		}
	};
}
var mM, hM, gM, _M, vM = w((() => {
	GA(), JA(), fM(), mM = 2e3, hM = (e) => `panel-${e.replaceAll("/", "--")}`, gM = /^https?:\/\/(?:localhost|127\.0\.0\.1|\[::1\])(?::|\/|$)/i, _M = (e) => {
		if (e.typed !== void 0) return e.typed.trim() === "" ? void 0 : e.typed.trim();
		if (e.state === "none") return e.remembered;
		let t = e.servers.length === 1 ? e.servers[0] : void 0, n = t !== void 0 && t.dir === void 0 ? t.url : void 0;
		return e.remembered === void 0 ? n : !gM.test(e.remembered) || e.servers.some((t) => t.url === e.remembered) ? e.remembered : n;
	};
})), yM, bM, xM, SM, CM, wM, TM, EM, DM, OM, kM, AM, jM, MM, NM, PM = w((() => {
	Ik(), JA(), vM(), yM = {
		key: 0,
		class: "text-2xs text-subtle"
	}, bM = ["title"], xM = { class: "font-mono" }, SM = { class: "font-mono" }, CM = ["disabled"], wM = { class: "flex w-pop-sm flex-col gap-2 p-1" }, TM = { class: "text-sm font-medium text-content" }, EM = { class: "font-mono" }, DM = { class: "font-mono text-2xs text-content" }, OM = { class: "ml-auto flex shrink-0 items-baseline gap-2" }, kM = {
		key: 0,
		class: "font-mono text-2xs text-subtle"
	}, AM = ["onClick"], jM = {
		key: 2,
		class: "text-2xs text-subtle"
	}, MM = {
		key: 0,
		class: "text-2xs text-subtle"
	}, NM = /*@__PURE__*/ d({
		__name: "DevServerChip",
		props: {
			repo: {},
			targets: {},
			blocked: { type: Boolean }
		},
		setup(e) {
			let t = _(!1), n = _(void 0), i = _(null), a = async () => {
				t.value = !0, n.value = void 0;
				try {
					await e.targets.startPanel(e.repo);
				} catch (e) {
					n.value = Fk(e);
				} finally {
					t.value = !1;
				}
			};
			return (d, f) => {
				let m = ne("tooltip");
				return g(), s(r, null, [e.targets.stateOf(e.repo) === "none" ? (g(), s("span", yM, "no dev server")) : n.value ? (g(), s("span", {
					key: 1,
					class: "truncate rounded-lg border border-danger/40 bg-danger/10 px-2 py-0.5 text-2xs text-danger",
					title: n.value
				}, v(n.value), 9, bM)) : e.targets.terminalOf(e.repo) === void 0 ? e.targets.localUrl(e.repo) === void 0 ? e.targets.stateOf(e.repo) === "ready" ? x((g(), s("button", {
					key: 4,
					type: "button",
					class: p(y(Te).linkButton("gap-1.5 text-2xs text-muted hover:text-content hover:no-underline")),
					onClick: f[2] ||= (e) => i.value?.toggle(e)
				}, [
					f[6] ||= c("span", { class: "h-1.5 w-1.5 shrink-0 rounded-full bg-success" }, null, -1),
					l(" " + v(e.targets.serversOf(e.repo).length) + " servers ", 1),
					u(y(S), {
						name: "chevron-down",
						class: "text-subtle"
					})
				], 2)), [[
					m,
					"What this repository is serving",
					void 0,
					{ bottom: !0 }
				]]) : e.targets.stateOf(e.repo) === "starting" ? x((g(), s("button", {
					key: 5,
					type: "button",
					class: p(y(Te).linkButton("gap-1.5 text-2xs text-muted hover:text-content hover:no-underline")),
					onClick: f[3] ||= (t) => y(qA)().terminal.open(y(hM)(e.repo))
				}, [
					u(y(S), {
						name: "spinner",
						spin: "",
						class: "shrink-0 text-subtle"
					}),
					f[7] ||= l(" Starting… ", -1),
					u(y(S), {
						name: "desktop",
						class: "text-subtle"
					})
				], 2)), [[
					m,
					"A first start installs dependencies, which can take a minute: watch it in the terminal",
					void 0,
					{ bottom: !0 }
				]]) : x((g(), s("button", {
					key: 6,
					type: "button",
					disabled: t.value,
					class: p(y(Te).linkButton("gap-1.5 text-2xs hover:no-underline", e.blocked ? "text-warning hover:text-warning" : "text-muted hover:text-content"))
				}, [u(y(S), {
					name: "play",
					class: "shrink-0"
				}), f[8] ||= l(" Start dev server ", -1)], 10, CM)), [[
					m,
					"Start this repository's dev server",
					void 0,
					{ bottom: !0 }
				], [y(De), a]]) : x((g(), s("button", {
					key: 3,
					type: "button",
					class: p(y(Te).linkButton("gap-1.5 text-2xs text-muted hover:text-content hover:no-underline")),
					onClick: f[1] ||= (e) => i.value?.toggle(e)
				}, [
					f[5] ||= c("span", { class: "h-1.5 w-1.5 shrink-0 rounded-full bg-success" }, null, -1),
					c("span", SM, v(e.targets.localUrl(e.repo)), 1),
					u(y(S), {
						name: "chevron-down",
						class: "text-subtle"
					})
				], 2)), [[
					m,
					"What this repository is serving",
					void 0,
					{ bottom: !0 }
				]]) : x((g(), s("button", {
					key: 2,
					type: "button",
					class: p(y(Te).linkButton("gap-1.5 text-2xs text-muted hover:text-content hover:no-underline")),
					onClick: f[0] ||= (t) => y(qA)().terminal.open(e.targets.terminalOf(e.repo) ?? "")
				}, [
					f[4] ||= c("span", { class: "h-1.5 w-1.5 shrink-0 rounded-full bg-success" }, null, -1),
					c("span", xM, v(e.targets.localUrl(e.repo)), 1),
					u(y(S), {
						name: "desktop",
						class: "text-subtle"
					})
				], 2)), [[
					m,
					`Open the terminal serving this: ${e.targets.terminalOf(e.repo)}`,
					void 0,
					{ bottom: !0 }
				]]), u(y(ve), {
					ref_key: "popover",
					ref: i
				}, {
					default: b(() => [c("div", wM, [
						c("p", TM, [c("span", EM, v(e.repo), 1), l(" is serving " + v(e.targets.serversOf(e.repo).length) + " " + v(e.targets.serversOf(e.repo).length === 1 ? "app" : "apps"), 1)]),
						(g(!0), s(r, null, te(e.targets.serversOf(e.repo), (e) => (g(), s("div", {
							key: e.url,
							class: "flex items-baseline gap-2"
						}, [
							f[10] ||= c("span", { class: "h-1.5 w-1.5 shrink-0 -translate-y-0.5 rounded-full bg-success" }, null, -1),
							c("span", DM, v(e.url), 1),
							c("span", OM, [e.dir ? (g(), s("span", kM, v(e.dir), 1)) : o("", !0), e.session ? x((g(), s("button", {
								key: 1,
								type: "button",
								class: p(y(Te).linkButton("gap-1 text-2xs text-muted hover:text-content hover:no-underline")),
								onClick: (t) => y(qA)().terminal.open(e.session)
							}, [u(y(S), {
								name: "desktop",
								class: "shrink-0"
							}), l(" " + v(e.session), 1)], 10, AM)), [[
								m,
								`Open ${e.session}: the terminal this is running in`,
								void 0,
								{ bottom: !0 }
							]]) : x((g(), s("span", jM, [...f[9] ||= [l(" no terminal ", -1)]])), [[
								m,
								"Nothing in this sandbox's terminals is serving it: it answers from outside them, so there is no output to show here and no session to stop.",
								void 0,
								{ bottom: !0 }
							]])])
						]))), 128)),
						e.targets.serversOf(e.repo).length > 1 ? (g(), s("p", MM, " Each group below says which of these its stories are walked against: the dev server is shared, the addresses are not. ")) : o("", !0)
					])]),
					_: 1
				}, 512)], 64);
			};
		}
	});
})), FM, IM = w((() => {
	PM(), PM(), FM = NM;
})), LM, RM, zM, BM, VM, HM, UM = w((() => {
	JA(), LM = { class: "pointer-events-none sticky bottom-4 z-10 mt-4 flex justify-center" }, RM = { class: "pointer-events-auto flex max-w-full flex-wrap items-center justify-end gap-x-3 gap-y-1 rounded-full border border-line bg-card/95 py-1.5 pl-4 pr-1.5 shadow-lg backdrop-blur" }, zM = {
		key: 0,
		class: "flex min-w-0 items-center gap-1.5 text-2xs text-warning"
	}, BM = { class: "max-w-72 truncate" }, VM = {
		key: 1,
		class: "text-2xs text-muted"
	}, HM = /*@__PURE__*/ d({
		__name: "RunControls",
		props: {
			chosen: {},
			total: {},
			narrowed: { type: Boolean },
			blocked: {},
			canRun: { type: Boolean }
		},
		emits: ["submit", "clear"],
		setup(e, { emit: t }) {
			let n = t, r = Ee(() => qA().models, "acceptance-run"), a = (e) => `${e} ${e === 1 ? "story" : "stories"}`, l = i(() => `${e.chosen} ${e.chosen === 1 ? "session" : "sessions"}, one per story`);
			return (t, i) => {
				let d = ne("tooltip");
				return g(), s("div", LM, [c("div", RM, [
					e.blocked ? x((g(), s("span", zM, [u(y(S), {
						name: "exclamation-triangle",
						class: "shrink-0"
					}), c("span", BM, v(e.blocked), 1)])), [[
						d,
						e.blocked,
						void 0,
						{ top: !0 }
					]]) : e.chosen > 0 ? (g(), s("span", VM, v(l.value), 1)) : o("", !0),
					e.narrowed ? (g(), s("button", {
						key: 2,
						type: "button",
						class: p(y(Te).linkButton("text-2xs text-muted hover:text-content")),
						onClick: i[0] ||= (e) => n("clear")
					}, " Clear ", 2)) : o("", !0),
					u(y(se), {
						label: `Run ${e.narrowed ? a(e.chosen) : `all ${a(e.total)}`}`,
						icon: "play",
						picker: y(r),
						disabled: !e.canRun,
						hint: "Every test session runs on this model: one session per story",
						onRun: i[1] ||= (e) => n("submit", y(r).model.value)
					}, null, 8, [
						"label",
						"picker",
						"disabled"
					])
				])]);
			};
		}
	});
})), WM, GM = w((() => {
	UM(), UM(), WM = HM;
})), KM, qM, JM, YM = w((() => {
	KM = "browser-", qM = (e) => {
		let t = e.replace(/[^A-Za-z0-9_-]/g, "").slice(0, 8);
		return t === "" ? void 0 : t;
	}, JM = (e) => {
		let t = qM(e);
		return t === void 0 ? void 0 : `${KM}${t}`;
	};
})), XM, ZM, QM, $M, eN, tN, nN = w((() => {
	GA(), Lj(), XM = [
		"You are running an ACCEPTANCE TEST of one user story against a running application.",
		"",
		"You are a TESTER, not a developer. Do not modify the application's source. Do not fix defects you find. Finding them is the deliverable, and a fixed defect is one the report can no longer describe. The only files you write are your own report and screenshots, in the run directory named below."
	].join("\n"), ZM = (e) => e.length === 0 ? [
		"## Acceptance criteria",
		"",
		"This story declares no explicit criteria section, so derive them: read the story and write out the specific, checkable claims it makes about the application. Those are what you test, and what you report a verdict for."
	].join("\n") : [
		"## Acceptance criteria",
		"",
		"These are the story's OWN criteria, as its author wrote them. Test every one:",
		"",
		...e.map((e, t) => `${t + 1}. ${e}`),
		"",
		`Your result file must carry exactly these ${e.length}, in this order, one verdict each. Quote each criterion verbatim. Do not merge them, do not reword them, and do not add your own to the list: anything else you find belongs in \`defects\`, which is where an unpromised problem is still worth reporting.`
	].join("\n"), QM = (e) => [
		"## Method",
		"",
		"1. Put the criteria above into a checklist (ToolSearch `select:TaskCreate,TaskUpdate,TaskList`), one task per criterion. Keep it current; it is how the run is watched.",
		`2. Open ${e} and screenshot the entry point before touching anything.`,
		"3. Walk each criterion the way a user would: act, take a snapshot to see the result, screenshot it, and judge it against what the story says should happen. Prefer `browser_snapshot` over screenshots for READING the page because it is text and it is what you click by.",
		"4. Then go off-script, because a criteria list is a floor and not a ceiling: empty and invalid input, submitting twice, the back button, a reload mid-flow, a narrow viewport (`browser_resize`). Record what you tried even when nothing broke. \"Tried, held up\" is a finding.",
		"5. If the app is broken UPSTREAM of this story (it will not start, you cannot sign in, the page 500s), stop and record `blocked` with the exact wall you hit. Do not test around it and do not repair it."
	].join("\n"), $M = (e) => [
		"## Tools",
		"",
		"You drive a real Chromium. Its tools are deferred, so load them first: `ToolSearch` with `+browser` gives you `mcp__web__browser_navigate`, `_snapshot`, `_click`, `_type`, `_fill_form`, `_press_key`, `_resize`, `_console_messages`, `_network_requests` and `_take_screenshot`.",
		"",
		"The owner can watch this browser live and take control of it, so drive it as if someone is looking over your shoulder: one deliberate action at a time, and leave the page on whatever you last looked at.",
		"",
		"Console errors and failed requests are evidence. Check `browser_console_messages` and `browser_network_requests` when something looks wrong, and quote them in the defect.",
		"",
		"### Screenshots: read this before you take the first one",
		"",
		`Every screenshot lands in \`${Sp}/${Cp}/records/artifacts/browser\` whatever filename you pass; the harness rewrites it and that directory is SHARED with the other tests running right now. So:`,
		"",
		"- Name each shot `<NN>-<short-step>.png`, e.g. `01-signin-form.png`, `02-validation-error.png`. Numbers in the order you took them.",
		`- Immediately after each shot, copy it into your own directory: \`cp ${Sp}/${Cp}/records/artifacts/browser/<name>.png ${e}/<name>.png\`. Do it per shot, not in a batch at the end, because after the fact you cannot tell which step a file belonged to.`,
		"- Reference shots in your report by the path relative to your report file: `![](shots/01-signin-form.png)`."
	].join("\n"), eN = (e) => [
		"## What you leave behind",
		"",
		`Your run directory is \`${e.dir}\` (create it, plus \`shots/\`). Two files, both required, both written even when the verdict is \`fail\` or \`blocked\`. An absent report is indistinguishable from a crashed test.`,
		"",
		`**\`${e.report}\`**: the walkthrough a human reads. Open with the verdict and one sentence of why. Then the steps in order as prose, each with its screenshot inline. Then the defects, worst first. Write what you SAW, not what you expected to see.`,
		"",
		`**\`${e.result}\`**: the same run as data, in exactly this shape:`,
		"",
		"```json",
		JSON.stringify({
			story: e.slug,
			title: e.title,
			verdict: "pass | fail | blocked",
			criteria: (e.criteria.length === 0 ? ["the criterion, as the story states it"] : e.criteria).map((e) => ({
				text: e,
				verdict: "pass | fail | untested",
				note: "why, in one line"
			})),
			steps: [{
				n: 1,
				action: "what you did",
				expected: "what the story says",
				observed: "what happened",
				shot: "shots/01-....png"
			}],
			defects: [{
				severity: "blocker | major | minor",
				summary: "one line",
				repro: "the shortest path to see it",
				shot: "shots/04-....png"
			}]
		}, null, 2),
		"```",
		"",
		"`verdict` is `pass` only if every criterion passed. `blocked` means you could not exercise the story at all. `defects` is `[]` when there are none. Omit nothing."
	].join("\n"), tN = (e) => {
		let t = `${Sp}/${lj(e.runId, e.story.slug)}`, n = [
			XM,
			[
				"## The story",
				"",
				`From \`${e.story.path}\` in the \`${e.story.repo}\` repository. Test what it says, not what the code does. if the two disagree, that disagreement is the finding.`,
				"",
				"---",
				e.story.content.trim(),
				"---"
			].join("\n"),
			ZM(e.story.criteria),
			[
				"## The application under test",
				"",
				`Base URL: ${e.baseUrl}`,
				"",
				"It is already running. Do not start, build, restart or reconfigure it."
			].join("\n"),
			$M(`${t}/shots`),
			QM(e.baseUrl),
			eN({
				slug: e.story.slug,
				title: e.story.title,
				dir: t,
				report: `${Sp}/${fj(e.runId, e.story.slug)}`,
				result: `${Sp}/${dj(e.runId, e.story.slug)}`,
				criteria: e.story.criteria
			})
		], r = e.projectNotes?.trim();
		return (r === void 0 || r === "" ? n : [...n, [
			"## Project-specific testing notes",
			"",
			r
		].join("\n")]).join("\n\n");
	};
}));
//#endregion
//#region src/useRuns.ts
function rN() {
	let e = qA(), t = ke(), n = i(() => e.sandbox.key("acceptance", "runs")), r = i(() => e.sandbox.key("acceptance", "agents")), a = C({
		queryKey: n,
		enabled: i(() => e.sandbox.reachable()),
		queryFn: async () => {
			let t = await e.sandbox.json(`/workspace/children?path=${encodeURIComponent(sj)}`), n = rv.parse(t).entries.filter((e) => e.type === "dir");
			return (await Promise.all(n.map(async (t) => await e.workspace.file(`${t.path}/run.json`)))).flatMap((e) => e === void 0 ? [] : [Ij(e)]).flatMap((e) => e === void 0 ? [] : [e]).toSorted((e, t) => t.createdAt - e.createdAt);
		}
	}), o = i(() => new Set((a.data.value ?? []).flatMap((e) => e.stories.map((e) => e.conversationId)))), s = C({
		queryKey: r,
		enabled: i(() => e.sandbox.reachable() && o.value.size > 0),
		queryFn: async () => _g.parse(await e.sandbox.json("/agents")).agents,
		refetchInterval: (e) => (e.state.data ?? []).some((e) => o.value.has(e.id) && (e.status === "running" || e.status === "awaiting")) ? iN : !1
	}), c = i(() => new Map((s.data.value ?? []).map((e) => [e.id, e]))), l = i(() => (a.data.value ?? []).map((e) => {
		let t = e.stories.flatMap((e) => {
			let t = c.value.get(e.conversationId);
			return t === void 0 ? [] : [t];
		});
		return {
			manifest: e,
			agents: t,
			running: t.some((e) => e.status === "running" || e.status === "awaiting")
		};
	})), u = i(() => l.value.some((e) => e.running)), d = C({
		queryKey: i(() => e.sandbox.key("acceptance", "browsers")),
		enabled: i(() => e.sandbox.reachable() && u.value),
		refetchInterval: () => u.value ? iN : !1,
		queryFn: async () => Object.fromEntries(Bm.parse(await e.sandbox.json("/system/browsers")).sessions.filter((e) => e.running).map((e) => [e.name, e.pages.find((e) => e.active)?.url]))
	}), f = i(() => {
		let e = d.data.value ?? {};
		return Object.fromEntries((s.data.value ?? []).flatMap((t) => {
			let n = t.sessionId === void 0 ? void 0 : JM(t.sessionId);
			return n === void 0 || !(n in e) ? [] : [[t.id, {
				session: n,
				url: e[n]
			}]];
		}));
	}), p = i(() => (a.data.value ?? []).slice(0, cj)), m = C({
		queryKey: i(() => e.sandbox.key("acceptance", "verdicts", p.value.map((e) => e.runId).join(","))),
		enabled: i(() => e.sandbox.reachable() && p.value.length > 0),
		refetchInterval: () => u.value ? iN : !1,
		queryFn: async () => Object.fromEntries(await Promise.all(p.value.map(async (t) => {
			let n = await Promise.all(t.stories.map(async (n) => [n.slug, Nj(await e.workspace.file(dj(t.runId, n.slug)) ?? "", n)?.verdict]));
			return [t.runId, Object.fromEntries(n.flatMap(([e, t]) => t === void 0 ? [] : [[e, t]]))];
		})))
	}), h = (t) => C({
		queryKey: i(() => e.sandbox.key("acceptance", "outcomes", t.value ?? "")),
		enabled: i(() => e.sandbox.reachable() && t.value !== void 0),
		refetchInterval: () => l.value.find((e) => e.manifest.runId === t.value)?.running === !0 && iN,
		queryFn: async () => {
			let n = t.value, r = a.data.value?.find((e) => e.runId === n);
			if (n === void 0 || r === void 0) return {};
			let i = await Promise.all(r.stories.map(async (t) => {
				let [r, i] = await Promise.all([e.workspace.file(dj(n, t.slug)), e.workspace.file(fj(n, t.slug))]), a = r === void 0 ? void 0 : Nj(r, t);
				return [t.slug, {
					...a === void 0 ? {} : { result: a },
					...r !== void 0 && a === void 0 ? { invalidResult: !0 } : {},
					...i === void 0 ? {} : { report: i }
				}];
			}));
			return Object.fromEntries(i);
		}
	}), g = async (t, n) => {
		let r = {
			prompt: tN({
				story: n,
				runId: t.runId,
				baseUrl: t.targets[nM(n)] ?? "",
				projectNotes: t.notes[n.repo]
			}),
			title: `Acceptance: ${n.title}`.slice(0, 80),
			conversationId: n.conversationId,
			isolated: !0,
			permissionMode: "bypassPermissions",
			unattended: !0,
			runRole: "acceptance-run",
			...t.pick
		};
		Od.parse(await e.sandbox.json("/agent", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(r)
		}));
	};
	return {
		runs: l,
		browsers: f,
		verdicts: i(() => m.data.value ?? {}),
		error: i(() => a.error.value?.message ?? s.error.value?.message ?? d.error.value?.message ?? m.error.value?.message),
		isPending: a.isPending,
		refresh: async () => {
			await t.invalidateQueries({ queryKey: n.value });
		},
		start: async (i) => {
			let a = Date.now(), o = vj(a), s = await Promise.all(i.stories.map(async (t) => {
				let n = await e.workspace.file(t.path);
				if (n === void 0) throw Error(`Could not read ${t.path}; no acceptance sessions were started.`);
				return {
					...t,
					title: tM(t.path, n),
					content: n,
					criteria: lM(n)
				};
			})), c = bj({
				runId: o,
				createdAt: a,
				targets: i.targets,
				notes: i.notes,
				pick: i.pick,
				stories: s
			});
			await e.workspace.write(uj(o), JSON.stringify(c, null, 2));
			let l = await Promise.allSettled(c.stories.map(async (e) => await g(c, e))), u = Object.fromEntries(l.flatMap((e, t) => e.status === "fulfilled" ? [] : [[c.stories[t]?.slug ?? "unknown", aN(e.reason)]]));
			return Object.keys(u).length > 0 && await e.workspace.write(uj(o), JSON.stringify({
				...c,
				launchFailures: u
			}, null, 2)), await Promise.all([t.invalidateQueries({ queryKey: n.value }), t.invalidateQueries({ queryKey: r.value })]), o;
		},
		retry: async (i, o) => {
			let s = a.data.value?.find((e) => e.runId === i), c = s?.stories.find((e) => e.slug === o);
			if (s !== void 0 && c !== void 0 && s.launchFailures[o] !== void 0) try {
				try {
					await g(s, c);
				} catch (t) {
					throw await e.workspace.write(uj(i), JSON.stringify({
						...s,
						launchFailures: {
							...s.launchFailures,
							[o]: aN(t)
						}
					}, null, 2)), t;
				}
				let t = Object.fromEntries(Object.entries(s.launchFailures).filter(([e]) => e !== o));
				await e.workspace.write(uj(i), JSON.stringify({
					...s,
					launchFailures: t
				}, null, 2));
			} finally {
				await Promise.all([t.invalidateQueries({ queryKey: n.value }), t.invalidateQueries({ queryKey: r.value })]);
			}
		},
		stop: async (n) => {
			await e.sandbox.json("/agent/stop", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ conversationId: n })
			}), await t.invalidateQueries({ queryKey: r.value });
		},
		useRunOutcomes: h
	};
}
var iN, aN, oN, sN = w((() => {
	Ik(), GA(), YM(), nN(), JA(), Lj(), fM(), iN = 3e3, aN = (e) => {
		let t = Fk(e);
		return t === "" ? "The session could not be started." : t;
	}, oN = (e, t) => {
		let n = e.manifest.launchFailures[t];
		if (n === void 0) return;
		let r = e.manifest.stories.find((e) => e.slug === t)?.conversationId;
		return e.agents.some((e) => e.id === r) ? void 0 : n;
	};
})), cN, lN, uN, dN, fN, pN, mN, hN, gN, _N, vN, yN, bN, xN, SN, CN = w((() => {
	Ik(), JA(), Lj(), sN(), cN = { class: "flex flex-col gap-4" }, lN = { class: "flex flex-col gap-1" }, uN = { class: "font-mono text-muted" }, dN = { class: "truncate font-mono text-content" }, fN = { class: "mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted" }, pN = {
		key: 0,
		class: "text-danger"
	}, mN = { class: "overflow-hidden rounded-lg border border-line-subtle bg-card" }, hN = { class: "block truncate font-normal" }, gN = {
		key: 0,
		class: "block truncate text-danger"
	}, _N = {
		key: 1,
		class: "block truncate font-mono text-subtle"
	}, vN = { key: 1 }, yN = {
		key: 4,
		class: "mt-4 flex max-w-read flex-col gap-1.5"
	}, bN = { class: "min-w-0 flex-1 text-content" }, xN = {
		key: 0,
		class: "text-subtle"
	}, SN = /*@__PURE__*/ d({
		__name: "RunReport",
		props: {
			run: {},
			outcomes: {},
			browsers: {},
			loading: { type: Boolean },
			stop: { type: Function },
			retry: { type: Function }
		},
		setup(e) {
			let t = qA(), n = _(/* @__PURE__ */ new Set()), d = _(void 0), h = _(/* @__PURE__ */ new Set()), re = ee({}), ae = _({}), oe = (e) => {
				let t = new Set(n.value);
				t.delete(e) || t.add(e), n.value = t;
			}, se = (t) => e.run.manifest.stories.find((e) => e.slug === t)?.conversationId, ue = (t) => {
				let n = se(t);
				return n === void 0 ? void 0 : e.browsers[n];
			}, pe = (t) => e.run.agents.find((e) => e.id === se(t)), he = (t) => e.outcomes[t]?.result === void 0 && e.outcomes[t]?.report === void 0 && e.outcomes[t]?.invalidResult !== !0 ? oN(e.run, t) : void 0, ge = (e) => pe(e)?.failure ?? he(e), _e = (t) => `acceptance.report:${e.run.manifest.runId}/${t}`, ve = (t) => {
				if (e.outcomes[t]?.invalidResult === !0) return {
					label: "invalid result",
					variant: "danger"
				};
				let n = pe(t), r = wj(e.outcomes[t]?.result?.verdict, n?.status);
				return r === void 0 ? he(t) === void 0 ? n === void 0 ? {
					label: e.loading ? "…" : "no session",
					variant: "neutral"
				} : {
					label: n.status,
					variant: "neutral"
				} : {
					label: "not started",
					variant: "danger"
				} : r;
			}, ye = (e) => {
				let n = se(e), r = n === void 0 ? "/agents" : `/agents/${encodeURIComponent(n)}`;
				return Se(t.href(r), () => n === void 0 ? t.navigate(r) : t.chat.openAgent(n));
			}, Ee = (e) => {
				let n = `/browsers/${ue(e)?.session ?? ""}`;
				return Se(t.href(n), () => t.navigate(n));
			}, De = (e) => {
				let t = pe(e)?.status;
				return t === "running" || t === "awaiting";
			}, C = async (t) => {
				let n = se(t);
				if (n !== void 0) {
					d.value = void 0;
					try {
						await e.stop(n);
					} catch (e) {
						d.value = Fk(e);
					}
				}
			}, ke = async (t) => {
				h.value = /* @__PURE__ */ new Set([...h.value, t]), d.value = void 0;
				try {
					await e.retry(e.run.manifest.runId, t);
				} catch (e) {
					d.value = Fk(e);
				} finally {
					let e = new Set(h.value);
					e.delete(t), h.value = e;
				}
			}, Ae = (e) => {
				let t = ue(e)?.url;
				if (t !== void 0 && t !== "") return t;
				let n = pe(e)?.activity;
				return n?.todo ?? (n?.tool === void 0 ? void 0 : `${n.tool}${n.target === void 0 ? "" : ` ${n.target}`}`);
			}, w = async (e) => {
				if (re[e] !== void 0) return re[e];
				try {
					let n = await t.sandbox.request(`/workspace/raw?path=${encodeURIComponent(e)}`);
					if (!n.ok) return;
					let r = URL.createObjectURL(await n.blob());
					return re[e] = r, r;
				} catch {
					return;
				}
			}, je = (e) => {
				for (let t of e.querySelectorAll("img")) {
					let e = (t.getAttribute("src") ?? "").replace(/^\.\//, "");
					t.removeAttribute("srcset"), _j(e) || t.removeAttribute("src");
				}
			}, Me = (t) => {
				let n = ae.value[t];
				if (n !== void 0) for (let r of n.querySelectorAll("img")) {
					let n = r.getAttribute("src") ?? "";
					if (r.removeAttribute("srcset"), n === "" || n.startsWith("blob:")) continue;
					r.removeAttribute("src"), r.classList.add("max-w-full", "rounded-md", "border", "border-line");
					let i = n.replace(/^\.\//, "");
					_j(i) && w(`${lj(e.run.manifest.runId, t)}/${i}`).then((e) => {
						e !== void 0 && (r.src = e);
					});
				}
			};
			ie([n, () => e.outcomes], () => {
				for (let e of n.value) Me(e);
			}, {
				flush: "post",
				deep: !0
			}), m(() => {
				for (let e of Object.values(re)) URL.revokeObjectURL(e);
			});
			let Ne = i(() => e.run.manifest.stories.flatMap((t) => e.outcomes[t.slug]?.result?.defects ?? [])), Pe = i(() => Object.entries(e.run.manifest.targets).map(([e, t]) => ({
				key: e,
				url: t
			})));
			return (t, i) => {
				let m = ne("tooltip");
				return g(), s("div", cN, [
					u(y(le), { class: "p-4" }, {
						default: b(() => [c("div", lN, [(g(!0), s(r, null, te(Pe.value, (e) => (g(), s("div", {
							key: e.key,
							class: "flex items-baseline gap-2 text-xs"
						}, [c("span", uN, v(e.key), 1), c("span", dN, v(e.url || "—"), 1)]))), 128))]), c("div", fN, [
							c("span", null, v(e.run.manifest.pick.agent) + " · " + v(e.run.manifest.pick.model), 1),
							c("span", null, v(y(we)(e.run.manifest.createdAt)), 1),
							Ne.value.length > 0 ? (g(), s("span", pN, v(Ne.value.length) + " " + v(Ne.value.length === 1 ? "defect" : "defects"), 1)) : o("", !0)
						])]),
						_: 1
					}),
					d.value ? (g(), a(y(me), {
						key: 0,
						of: y(Ce)(d.value)
					}, null, 8, ["of"])) : o("", !0),
					c("div", mN, [(g(!0), s(r, null, te(e.run.manifest.stories, (t) => (g(), a(y(de), {
						key: t.slug,
						class: "border-b border-line-subtle last:border-b-0",
						density: "compact",
						body: "drawer",
						open: n.value.has(t.slug),
						"onUpdate:open": (e) => oe(t.slug)
					}, {
						title: b(() => [c("span", hN, v(t.title), 1)]),
						description: b(() => [ge(t.slug) ? x((g(), s("span", gN, [l(v(ge(t.slug)), 1)])), [[
							m,
							ge(t.slug),
							void 0,
							{ top: !0 }
						]]) : (g(), s("span", _N, [l(v(t.repo), 1), Ae(t.slug) ? (g(), s(r, { key: 0 }, [l(" · " + v(Ae(t.slug)), 1)], 64)) : o("", !0)]))]),
						control: b(() => [
							u(y(xe), {
								variant: ve(t.slug).variant,
								label: ve(t.slug).label,
								size: "xs"
							}, null, 8, ["variant", "label"]),
							ue(t.slug) ? (g(), a(y(ce), f({
								key: 0,
								label: "Watch",
								size: "small",
								severity: "secondary",
								as: "a"
							}, { ref_for: !0 }, Ee(t.slug)), {
								icon: b(() => [u(y(S), { name: "eye" })]),
								_: 1
							}, 16)) : o("", !0),
							he(t.slug) ? (g(), a(y(ce), {
								key: 1,
								label: "Retry",
								size: "small",
								severity: "secondary",
								loading: h.value.has(t.slug),
								onClick: (e) => ke(t.slug)
							}, {
								icon: b(() => [u(y(S), { name: "refresh" })]),
								_: 1
							}, 8, ["loading", "onClick"])) : o("", !0),
							pe(t.slug) ? (g(), a(y(ce), f({
								key: 2,
								label: "Session",
								size: "small",
								severity: "secondary",
								as: "a"
							}, { ref_for: !0 }, ye(t.slug)), {
								icon: b(() => [u(y(S), { name: "comments" })]),
								_: 1
							}, 16)) : o("", !0),
							De(t.slug) ? (g(), a(y(ce), {
								key: 3,
								label: "Stop",
								size: "small",
								severity: "secondary",
								onClick: (e) => C(t.slug)
							}, {
								icon: b(() => [u(y(S), { name: "stop" })]),
								_: 1
							}, 8, ["onClick"])) : o("", !0)
						]),
						below: b(() => [e.loading ? (g(), a(y(be), {
							key: 0,
							of: _e(t.slug),
							label: "Reading the report"
						}, {
							default: b(() => [...i[0] ||= [c("div", {
								class: "flex max-w-read flex-col gap-2 py-2",
								role: "status",
								"aria-busy": "true",
								"aria-label": "Reading the report"
							}, [
								c("span", { class: "skeleton block h-3 w-full" }),
								c("span", { class: "skeleton block h-3 w-11/12" }),
								c("span", { class: "skeleton block h-3 w-3/4" }),
								c("span", { class: "skeleton mt-4 block h-3 w-64 max-w-full" }),
								c("span", { class: "skeleton block h-3 w-56 max-w-full" })
							], -1)]]),
							_: 1
						}, 8, ["of"])) : x((g(), s("div", vN, [e.outcomes[t.slug]?.report ? (g(), s("div", {
							key: 0,
							ref_for: !0,
							ref: (e) => ae.value[t.slug] = e,
							style: { "--prose-measure": "68ch" }
						}, [u(y(fe), {
							source: e.outcomes[t.slug]?.report ?? "",
							decorate: je
						}, null, 8, ["source"])], 512)) : e.outcomes[t.slug]?.invalidResult ? (g(), a(y(me), {
							key: 1,
							of: y(Ce)("The session wrote a result that did not match this run's story and acceptance criteria. Open the session to correct it.")
						}, null, 8, ["of"])) : ge(t.slug) ? (g(), a(y(me), {
							key: 2,
							of: y(Ce)(ge(t.slug) ?? "")
						}, null, 8, ["of"])) : (g(), s("div", {
							key: 3,
							class: p(y(Te).emptyState())
						}, v(ve(t.slug).variant === "info" ? "Still testing: the report is written at the end of the walkthrough." : "No report was written. Open the session to see how far it got."), 3)), (e.outcomes[t.slug]?.result?.criteria ?? []).length > 0 ? (g(), s("ul", yN, [(g(!0), s(r, null, te(e.outcomes[t.slug]?.result?.criteria ?? [], (e, t) => (g(), s("li", {
							key: t,
							class: "flex items-start gap-2 text-sm leading-relaxed"
						}, [u(y(S), {
							name: e.verdict === "pass" ? "check-circle" : e.verdict === "fail" ? "exclamation-circle" : "circle",
							class: p(["mt-1 shrink-0", e.verdict === "pass" ? "text-success" : e.verdict === "fail" ? "text-danger" : "text-subtle"])
						}, null, 8, ["name", "class"]), c("span", bN, [l(v(e.text) + " ", 1), e.note ? (g(), s("span", xN, ": " + v(e.note), 1)) : o("", !0)])]))), 128))])) : o("", !0)])), [[y(Oe), _e(t.slug)]])]),
						_: 2
					}, 1032, ["open", "onUpdate:open"]))), 128))])
				]);
			};
		}
	});
})), wN, TN = w((() => {
	CN(), CN(), wN = SN;
})), EN, DN, ON, kN, AN, jN = w((() => {
	fM(), EN = { class: "px-4 py-2.5" }, DN = { class: "flex items-center gap-3" }, ON = ["placeholder", "onKeydown"], kN = {
		key: 0,
		class: "mt-1 pl-7 text-2xs text-warning"
	}, AN = /*@__PURE__*/ d({
		__name: "StoryComposer",
		props: {
			repo: {},
			group: {},
			taken: {}
		},
		emits: ["create"],
		setup(e, { emit: t }) {
			let n = t, r = _(""), a = i(() => r.value.trim()), l = i(() => a.value.lastIndexOf("/")), d = i(() => l.value === -1 ? a.value : a.value.slice(l.value + 1).trim()), f = i(() => l.value === -1 ? e.group : a.value.slice(0, l.value).trim()), m = i(() => dM(e.repo, f.value, $j(d.value))), h = i(() => d.value !== "" && e.taken.includes(m.value)), ee = () => {
				d.value === "" || h.value || (n("create", {
					path: m.value,
					title: d.value
				}), r.value = "");
			};
			return (t, n) => (g(), s("div", EN, [c("div", DN, [
				u(y(S), {
					name: "plus",
					class: "shrink-0 text-subtle"
				}),
				x(c("input", {
					"onUpdate:modelValue": n[0] ||= (e) => r.value = e,
					placeholder: e.group === "" ? "New story, a title, or group/title to file it under one" : `New story in ${e.group}/, type a title`,
					class: "field-bare ui-field-lit min-h-11 min-w-0 flex-1 rounded-md px-1",
					onKeydown: [ae(oe(ee, ["prevent"]), ["enter"]), n[1] ||= ae((e) => r.value = "", ["esc"])]
				}, null, 40, ON), [[re, r.value]]),
				d.value === "" ? o("", !0) : (g(), s("span", {
					key: 0,
					class: p(["shrink-0 truncate font-mono text-2xs", h.value ? "text-warning" : "text-subtle"])
				}, v(f.value === "" ? "" : `${f.value}/`) + v(m.value.split("/").pop()), 3))
			]), h.value ? (g(), s("p", kN, "That file already exists: open it below, or give this one another name.")) : o("", !0)]));
		}
	});
})), MN, NN = w((() => {
	jN(), jN(), MN = AN;
})), PN, FN, IN, LN, RN, zN, BN, VN, HN, UN = w((() => {
	Ik(), fM(), PN = {
		key: 0,
		class: "block min-w-0 truncate font-mono text-2xs font-normal text-subtle"
	}, FN = {
		key: 1,
		class: "block min-w-0 truncate font-normal text-content/80 group-hover:text-content"
	}, IN = { class: "w-20 shrink-0 text-right" }, LN = {
		class: "max-w-read px-2",
		style: { "--prose-measure": "68ch" }
	}, RN = ["aria-label"], zN = { key: 1 }, BN = { class: "mt-6 flex items-center justify-end gap-2 border-t border-line/60 pt-3" }, VN = "# Sign in with an email address\n\nAs a returning visitor, I want to sign in with my email and password so that I reach my own workspace.\n\nWhat the user is trying to do, where they start, and what counts as success. Handed to the agent verbatim: a test login or a fixture it needs belongs here.\n\n## Acceptance criteria\n\n- A wrong password shows an error and keeps the email field filled\n", HN = /*@__PURE__*/ d({
		__name: "StoryRow",
		props: {
			story: {},
			content: {},
			expanded: { type: Boolean },
			status: {},
			autofocus: { type: Boolean },
			selected: { type: Boolean },
			save: { type: Function },
			remove: { type: Function }
		},
		emits: [
			"toggle",
			"select",
			"run"
		],
		setup(e, { emit: t }) {
			let n = t, d = _(""), f = _(""), p = _(!1), h = _(!1), ee = _(void 0), te = _(!1), ne = i(() => `acceptance.story:${e.story.path}`), re = i(() => e.story.path.split("/").pop()), oe = i(() => lM(e.expanded ? d.value : e.content).length), se = i(() => e.autofocus === !0 ? d.value.trimEnd().length : void 0);
			ie([() => e.expanded, () => e.content], ([e, t]) => {
				if (!e) return;
				te.value = !1;
				let n = t ?? "";
				d.value === f.value && n !== f.value && (ee.value = void 0, d.value = n, f.value = n, p.value = n !== "");
			}, { immediate: !0 });
			let le = async (t) => {
				if (t.trim() !== "") {
					h.value = !0;
					try {
						await e.save({
							path: e.story.path,
							markdown: t
						}), f.value = t, ee.value = void 0;
					} catch (e) {
						ee.value = Fk(e);
					} finally {
						h.value = !1;
					}
				}
			}, fe = async () => {
				ee.value = void 0;
				try {
					await e.remove(e.story.path);
				} catch (e) {
					ee.value = Fk(e), te.value = !1;
				}
			};
			return m(() => h.value = !1), (t, i) => (g(), a(y(de), {
				density: "compact",
				body: "drawer",
				open: e.expanded,
				"onUpdate:open": i[5] ||= (e) => n("toggle")
			}, {
				before: b(() => [u(y(ue), {
					"model-value": e.selected,
					binary: "",
					size: "small",
					class: "ui-checkbox-quiet ml-4",
					"aria-label": `Run ${e.story.title}`,
					"onUpdate:modelValue": i[0] ||= (e) => n("select", e === !0)
				}, null, 8, ["model-value", "aria-label"])]),
				title: b(() => [e.expanded ? (g(), s("span", PN, v(e.story.path), 1)) : (g(), s("span", FN, v(e.story.title), 1))]),
				meta: b(() => [e.status ? (g(), a(y(xe), {
					key: 0,
					variant: e.status.variant,
					label: e.status.label,
					size: "xs"
				}, null, 8, ["variant", "label"])) : o("", !0), c("span", IN, v(oe.value === 0 ? "no criteria" : `${oe.value} criteria`), 1)]),
				below: b(() => [c("div", {
					class: "py-2 sm:px-2",
					onKeydown: i[4] ||= ae((e) => n("toggle"), ["esc"])
				}, [c("div", LN, [p.value ? x((g(), s("div", zN, [u(y(pe), {
					modelValue: d.value,
					"onUpdate:modelValue": i[1] ||= (e) => d.value = e,
					editable: "",
					save: "auto",
					stored: f.value,
					saving: h.value,
					"caret-at": se.value,
					label: e.story.path,
					placeholder: VN,
					class: "min-h-64",
					onSave: le
				}, {
					note: b(() => [oe.value === 0 ? (g(), s(r, { key: 0 }, [
						i[7] ||= l(" With no ", -1),
						i[8] ||= c("code", null, "## Acceptance criteria", -1),
						i[9] ||= l(", the agent reads checkable claims out of your prose instead, which works, but then the report grades itself against its own reading rather than against what you promised. ", -1)
					], 64)) : (g(), s(r, { key: 1 }, [l("One verdict per criterion, in the order you wrote them. Enter opens the next one.")], 64))]),
					_: 1
				}, 8, [
					"modelValue",
					"stored",
					"saving",
					"caret-at",
					"label"
				])])), [[y(Oe), ne.value]]) : (g(), a(y(be), {
					key: 0,
					of: ne.value,
					label: `Reading ${re.value}`
				}, {
					default: b(() => [c("div", {
						class: "flex min-h-64 flex-col py-2",
						role: "status",
						"aria-busy": "true",
						"aria-label": `Reading ${re.value}`
					}, [...i[6] ||= [
						c("span", { class: "skeleton block h-5 w-72 max-w-full" }, null, -1),
						c("span", { class: "mt-4 flex flex-col gap-2" }, [
							c("span", { class: "skeleton block h-3 w-full" }),
							c("span", { class: "skeleton block h-3 w-11/12" }),
							c("span", { class: "skeleton block h-3 w-2/3" })
						], -1),
						c("span", { class: "skeleton mt-6 block h-4 w-44" }, null, -1),
						c("span", { class: "mt-3 flex flex-col gap-2" }, [c("span", { class: "skeleton block h-3 w-80 max-w-full" }), c("span", { class: "skeleton block h-3 w-64 max-w-full" })], -1)
					]], 8, RN)]),
					_: 1
				}, 8, ["of", "label"])), ee.value ? (g(), a(y(me), {
					key: 2,
					of: y(Ce)(ee.value),
					class: "mt-4"
				}, null, 8, ["of"])) : o("", !0)]), c("div", BN, [u(y(ce), {
					label: "Run only this",
					size: "small",
					severity: "secondary",
					onClick: i[2] ||= (e) => n("run")
				}, {
					icon: b(() => [u(y(S), { name: "play" })]),
					_: 1
				}), te.value ? (g(), a(y(ce), {
					key: 1,
					size: "small",
					severity: "danger",
					label: `Delete ${e.story.path.split("/").pop()}?`,
					onClick: fe
				}, null, 8, ["label"])) : (g(), a(y(ce), {
					key: 0,
					size: "small",
					severity: "danger",
					label: "Delete",
					onClick: i[3] ||= (e) => te.value = !0
				}))])], 32)]),
				_: 1
			}, 8, ["open"]));
		}
	});
})), WN, GN = w((() => {
	UN(), UN(), WN = HN;
})), KN, qN, JN, YN, XN, ZN, QN, $N, eP, tP, nP, rP, iP = w((() => {
	KN = {
		key: 0,
		class: "text-subtle"
	}, qN = { class: "flex w-80 flex-col gap-2 p-1" }, JN = ["onClick"], YN = { class: "font-mono text-2xs text-content" }, XN = {
		key: 0,
		class: "ml-auto font-mono text-2xs text-subtle"
	}, ZN = ["value"], QN = {
		key: 1,
		class: "text-2xs text-subtle"
	}, $N = { class: "font-mono" }, eP = {
		key: 2,
		class: "text-2xs text-subtle"
	}, tP = { class: "text-2xs text-subtle" }, nP = { class: "font-mono" }, rP = /*@__PURE__*/ d({
		__name: "TargetChip",
		props: {
			repo: {},
			group: {},
			targets: {}
		},
		setup(e) {
			let t = _(null), n = (e) => t.value?.toggle(e), i = () => e.targets.isElsewhere(e.repo, e.group) || e.targets.needsAddress(e.repo, e.group), a = () => e.targets.serversOf(e.repo).length > 1 || e.targets.addressOf(e.repo, e.group) === void 0 ? e.targets.serversOf(e.repo) : [], d = () => e.targets.serversOf(e.repo).find((t) => t.url === e.targets.addressOf(e.repo, e.group))?.dir;
			return (f, m) => {
				let h = ne("tooltip");
				return g(), s(r, null, [i() ? x((g(), s("button", {
					key: 0,
					type: "button",
					class: p(y(Te).linkButton("gap-1.5 font-mono text-2xs hover:no-underline", e.targets.addressOf(e.repo, e.group) === void 0 ? "text-warning hover:text-warning" : "text-muted hover:text-content")),
					onClick: n
				}, [
					u(y(S), {
						name: "arrow-right",
						class: "shrink-0 text-subtle"
					}),
					l(" " + v(e.targets.addressOf(e.repo, e.group) ?? "needs an address") + " ", 1),
					d() ? (g(), s("span", KN, v(d()), 1)) : o("", !0)
				], 2)), [[
					h,
					"Point this group at a different address",
					void 0,
					{ bottom: !0 }
				]]) : x((g(), s("button", {
					key: 1,
					type: "button",
					class: p(y(Te).linkButton("gap-1.5 text-2xs text-muted opacity-0 group-hover:opacity-100 hover:no-underline focus-visible:opacity-100")),
					onClick: n
				}, [u(y(S), {
					name: "arrow-right",
					class: "shrink-0"
				}), m[2] ||= l(" aim elsewhere ", -1)], 2)), [[
					h,
					"Point this group at a different address",
					void 0,
					{ bottom: !0 }
				]]), u(y(ve), {
					ref_key: "popover",
					ref: t
				}, {
					default: b(() => [c("div", qN, [
						m[8] ||= c("p", { class: "text-sm font-medium text-content" }, "Where does this group's app answer?", -1),
						a().length > 0 ? (g(), s(r, { key: 0 }, [(g(!0), s(r, null, te(a(), (t) => (g(), s("button", {
							key: t.url,
							type: "button",
							class: p(["flex items-baseline gap-2 rounded px-2 py-1 text-left hover:bg-subtle", e.targets.addressOf(e.repo, e.group) === t.url ? "bg-subtle" : ""]),
							onClick: (n) => e.targets.aimAt(e.repo, e.group, t.url)
						}, [
							u(y(S), {
								name: e.targets.addressOf(e.repo, e.group) === t.url ? "check" : "arrow-right",
								class: p(["shrink-0 translate-y-px", e.targets.addressOf(e.repo, e.group) === t.url ? "text-success" : "text-subtle"])
							}, null, 8, ["name", "class"]),
							c("span", YN, v(t.url), 1),
							t.dir ? (g(), s("span", XN, v(t.dir), 1)) : o("", !0)
						], 10, JN))), 128)), m[3] ||= c("p", { class: "text-2xs text-subtle" }, "…or an address of your own:", -1)], 64)) : o("", !0),
						c("input", {
							value: e.targets.addressOf(e.repo, e.group) ?? "",
							type: "text",
							placeholder: "http://localhost:5173",
							class: p(y(Te).input("w-full")),
							onInput: m[0] ||= (t) => e.targets.aimAt(e.repo, e.group, t.target.value)
						}, null, 42, ZN),
						e.targets.stateOf(e.repo) === "none" ? (g(), s("p", QN, [
							m[4] ||= l(" The daemon runs no dev server for ", -1),
							c("span", $N, v(e.repo), 1),
							m[5] ||= l(": start the app yourself in a terminal, or point at a deployment. The agents reach it from inside the sandbox, so a localhost address is the direct route. ", -1)
						])) : a().length > 0 ? (g(), s("p", eP, " Pick the app these stories belong to. The next run against this group starts here, so this is a question you answer once. ")) : (g(), s(r, { key: 3 }, [c("p", tP, [
							m[6] ||= l(" Leave this to ", -1),
							c("span", nP, v(e.repo), 1),
							m[7] ||= l("'s own dev server unless this group is a second app: a marketing site on its own port, or a deployment you want walked instead. ", -1)
						]), e.targets.isElsewhere(e.repo, e.group) ? (g(), s("button", {
							key: 0,
							type: "button",
							class: p(y(Te).linkButton("text-2xs text-muted hover:text-content")),
							onClick: m[1] ||= (t) => e.targets.aimAt(e.repo, e.group, void 0)
						}, " Use " + v(e.repo) + "'s dev server ", 3)) : o("", !0)], 64))
					])]),
					_: 1
				}, 512)], 64);
			};
		}
	});
})), aP, oP = w((() => {
	iP(), iP(), aP = rP;
}));
//#endregion
//#region src/useStories.ts
function sP() {
	let e = qA(), t = ke(), n = i(() => e.sandbox.key("acceptance", "stories")), r = i(() => e.workspace.repos().filter((e) => e.userStories || e.hasPanel).map((e) => e.repo)), a = async (t) => rv.parse(await e.sandbox.json(`/workspace/children?path=${encodeURIComponent(t)}`)).entries, o = async (e) => {
		let t = [], n = [e];
		for (let e = 0; e < cP && n.length > 0; e += 1) {
			let e = (await Promise.all(n.map(async (e) => await a(e)))).flat();
			t.push(...e), n = e.filter((e) => e.type === "dir" && !e.name.startsWith(".")).map((e) => e.path);
		}
		return t;
	}, s = C({
		queryKey: i(() => [...n.value, r.value.join(",")]),
		enabled: i(() => e.sandbox.reachable()),
		queryFn: async () => {
			let t = await Promise.all(r.value.map(async (e) => ({
				repo: e,
				entries: await o(`${e}/${Jj}`)
			}))), n = iM(t.flatMap(({ repo: e, entries: t }) => rM(e, t))), i = n.slice(0, lP), a = await Promise.all(i.map(async (t) => [t.path, await e.workspace.file(t.path)])), s = Object.fromEntries(a.flatMap(([e, t]) => t === void 0 ? [] : [[e, t]])), c = await Promise.all(r.value.map(async (t) => [t, await e.workspace.file(`${t}/${Yj}`)]));
			return {
				stories: iM(t.flatMap(({ repo: e, entries: t }) => rM(e, t, s))),
				contents: s,
				notes: Object.fromEntries(c.flatMap(([e, t]) => t === void 0 ? [] : [[e, t]])),
				unread: n.length - i.length
			};
		}
	}), c = async () => {
		await t.invalidateQueries({ queryKey: n.value });
	};
	return {
		repos: r,
		stories: i(() => s.data.value?.stories ?? []),
		contents: i(() => s.data.value?.contents ?? {}),
		notes: i(() => s.data.value?.notes ?? {}),
		unread: i(() => s.data.value?.unread ?? 0),
		error: i(() => s.error.value?.message),
		isPending: s.isPending,
		refresh: c,
		save: async (t) => {
			await e.workspace.write(t.path, t.markdown), await c();
		},
		remove: async (t) => {
			await e.sandbox.json("/workspace/entry", {
				method: "DELETE",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ path: t })
			}), await c();
		}
	};
}
var cP, lP, uP = w((() => {
	GA(), JA(), fM(), cP = 3, lP = 200;
})), dP, fP, pP, mP, hP, gP, _P, vP, yP, bP, xP, SP, CP, wP, TP, EP, DP, OP, kP = w((() => {
	Ik(), GA(), qj(), IM(), Lj(), GM(), TN(), fM(), NN(), GN(), oP(), sN(), uP(), vM(), dP = { class: "mb-8 flex flex-col gap-4" }, fP = { class: "group flex items-center gap-2" }, pP = {
		class: "divide-y divide-line-subtle",
		role: "status",
		"aria-busy": "true",
		"aria-label": "Reading the stories"
	}, mP = { class: "flex h-5 min-w-0 flex-1 items-center" }, hP = {
		key: 1,
		class: "divide-y divide-line-subtle"
	}, gP = {
		key: 0,
		class: "group flex items-center gap-3 bg-canvas px-4 py-1"
	}, _P = { class: "min-w-0 flex-1 truncate font-mono text-2xs text-muted" }, vP = {
		key: 1,
		class: "text-2xs text-subtle"
	}, yP = {
		class: "divide-y divide-line-subtle",
		role: "status",
		"aria-busy": "true",
		"aria-label": "Reading the runs"
	}, bP = { class: "font-mono" }, xP = {
		key: 2,
		class: "divide-y divide-line-subtle"
	}, SP = ["onClick"], CP = { class: "min-w-0 flex-1" }, wP = { class: "block truncate text-sm text-content/80 group-hover:text-content" }, TP = { class: "block truncate font-mono text-2xs text-subtle" }, EP = { class: "w-20 shrink-0 text-right text-2xs text-subtle" }, DP = {
		key: 0,
		class: "mt-2 text-2xs text-subtle"
	}, OP = /*@__PURE__*/ d({
		__name: "AcceptanceView",
		setup(e) {
			let { stories: t, contents: n, notes: d, repos: f, unread: m, error: ee, isPending: ne, refresh: re, save: ie, remove: ae } = sP(), { runs: oe, browsers: se, verdicts: ce, error: le, isPending: de, start: fe, retry: pe, stop: ve, useRunOutcomes: Se } = rN(), Ee = pM(i(() => {
				let e = /* @__PURE__ */ new Map();
				for (let t of oe.value) for (let [n, r] of Object.entries(t.manifest.targets)) r !== "" && !e.has(n) && e.set(n, r);
				return Object.fromEntries(e);
			})), De = async () => {
				await Promise.all([re(), Ee.refresh()]);
			}, C = _(/* @__PURE__ */ new Set()), ke = _(void 0), Ae = _(void 0), w = _(void 0), je = _(void 0), Me = i(() => oe.value.find((e) => e.manifest.runId === w.value)), Ne = Se(w), Pe = i(() => je.value ?? ee.value ?? Ee.error.value ?? le.value ?? Ne.error.value?.message);
			h(() => void Kj());
			let Fe = i(() => [...f.value].toSorted((e, t) => e.localeCompare(t)).map((e) => {
				let n = t.value.filter((t) => t.repo === e), r = /* @__PURE__ */ new Map();
				for (let e of n) r.set(e.group, [...r.get(e.group) ?? [], e]);
				return {
					repo: e,
					count: n.length,
					rooted: r.has(""),
					groups: [...r.entries()].toSorted(([e], [t]) => e === "" ? -1 : t === "" ? 1 : e.localeCompare(t)).map(([e, t]) => ({
						group: e,
						entries: t,
						paths: t.map((e) => e.path)
					}))
				};
			})), Ie = i(() => t.value.map((e) => e.path)), Le = i(() => C.value.size === 0 ? t.value : t.value.filter((e) => C.value.has(e.path))), Re = i(() => {
				let e = /* @__PURE__ */ new Map();
				for (let t of Le.value) {
					let n = nM(t);
					e.has(n) || e.set(n, t);
				}
				return [...e.values()];
			}), ze = i(() => Re.value.filter((e) => Ee.addressOf(e.repo, e.group) === void 0)), T = i(() => Le.value.length > 0 && ze.value.length === 0), Be = i(() => {
				let e = /* @__PURE__ */ new Map();
				for (let t of ze.value) {
					let n = Ee.stateOf(t.repo);
					if (n === "starting" || n === "stopped") {
						e.set(t.repo, `${t.repo}'s dev server ${n === "starting" ? "is still starting" : "isn't running"}`);
						continue;
					}
					e.set(nM(t), `${nM(t)} needs an address`);
				}
				return [...e.values()];
			}), Ve = i(() => {
				let e = Be.value[0];
				return e === void 0 ? void 0 : `${e}${Be.value.length > 1 ? ` (+${Be.value.length - 1} more)` : ""}`;
			}), He = i(() => new Set(ze.value.filter((e) => ["starting", "stopped"].includes(Ee.stateOf(e.repo))).map((e) => e.repo))), Ue = (e, t) => {
				let n = new Set(C.value);
				for (let r of e) t ? n.add(r) : n.delete(r);
				C.value = n;
			}, We = i(() => {
				let e = /* @__PURE__ */ new Map();
				for (let t of oe.value) for (let r of t.manifest.stories) {
					if (e.has(r.path) || !Sj(r, n.value[r.path])) continue;
					let i = t.agents.find((e) => e.id === r.conversationId), a = wj(ce.value[t.manifest.runId]?.[r.slug], i?.status);
					if (a !== void 0) {
						e.set(r.path, a);
						continue;
					}
					oN(t, r.slug) !== void 0 && e.set(r.path, {
						label: "not started",
						variant: "danger"
					});
				}
				return Object.fromEntries(e);
			}), Ge = [
				"w-56",
				"w-72",
				"w-44"
			], Ke = (e) => {
				let t = ce.value[e.manifest.runId], n = e.manifest.stories.filter((n) => t?.[n.slug] === void 0 && oN(e, n.slug) !== void 0).length;
				if (e.running) return {
					label: `${e.manifest.stories.filter((n) => {
						let r = e.agents.find((e) => e.id === n.conversationId);
						return t?.[n.slug] !== void 0 || oN(e, n.slug) !== void 0 || r !== void 0 && r.status !== "running" && r.status !== "awaiting";
					}).length}/${e.manifest.stories.length} done`,
					variant: "info"
				};
				if (n > 0 && t === void 0) return {
					label: `${n} not started`,
					variant: "danger"
				};
				if (t === void 0) return;
				let r = e.manifest.stories.flatMap((e) => {
					let n = t[e.slug];
					return n === void 0 ? [] : [n];
				});
				if (r.length === 0) return n > 0 ? {
					label: `${n} not started`,
					variant: "danger"
				} : e.agents.some((e) => e.status === "error") ? {
					label: "errored",
					variant: "danger"
				} : {
					label: "no results",
					variant: "neutral"
				};
				let i = r.filter((e) => e === "fail").length, a = r.filter((e) => e === "blocked").length;
				return i + n > 0 ? {
					label: [...i > 0 ? [`${i} failed`] : [], ...n > 0 ? [`${n} not started`] : []].join(" · "),
					variant: "danger"
				} : a > 0 ? {
					label: `${a} blocked`,
					variant: "warning"
				} : {
					label: `${r.length} passed`,
					variant: "success"
				};
			}, qe = i(() => oe.value.map((e) => ({
				row: e,
				status: Ke(e)
			}))), E = async (e) => {
				je.value = void 0;
				try {
					await e();
				} catch (e) {
					je.value = Fk(e);
				}
			}, Je = (e) => E(async () => {
				await ie({
					path: e.path,
					markdown: uM(e.title)
				}), ke.value = e.path, Ae.value = e.path;
			}), Ye = (e) => {
				ke.value = ke.value === e ? void 0 : e, Ae.value = void 0;
			}, Xe = async (e) => E(async () => {
				w.value = await fe({
					stories: Le.value,
					targets: Object.fromEntries(Re.value.map((e) => [nM(e), Ee.addressOf(e.repo, e.group) ?? ""])),
					pick: Ed(e),
					notes: d.value
				});
			});
			return (e, i) => (g(), a(y(he), { width: "wide" }, {
				default: b(() => [
					u(y(_e), { title: "Acceptance" }, {
						actions: b(() => [u(y(ge), {
							quiet: "",
							icon: "refresh",
							label: "Refresh",
							hint: "Re-read the stories and the dev-server states",
							onClick: De
						})]),
						_: 1
					}),
					Pe.value ? (g(), a(y(me), {
						key: 0,
						of: y(Ce)(Pe.value),
						class: "mb-4"
					}, null, 8, ["of"])) : o("", !0),
					Me.value ? (g(), s(r, { key: 1 }, [c("button", {
						type: "button",
						class: p(y(Te).textAction("mb-4")),
						onClick: i[0] ||= (e) => w.value = void 0
					}, [u(y(S), { name: "arrow-left" }), i[2] ||= l(" All runs ", -1)], 2), u(wN, {
						run: Me.value,
						outcomes: y(Ne).data.value ?? {},
						browsers: y(se),
						loading: y(Ne).isLoading.value,
						stop: y(ve),
						retry: y(pe)
					}, null, 8, [
						"run",
						"outcomes",
						"browsers",
						"loading",
						"stop",
						"retry"
					])], 64)) : (g(), s(r, { key: 2 }, [
						c("section", dP, [
							y(f).length === 0 && !y(ne) ? (g(), s("div", {
								key: 0,
								class: p(y(Te).emptyState())
							}, [...i[3] ||= [
								l(" No repository here runs an app yet. Give one a panel (an ", -1),
								c("span", { class: "font-mono" }, "operator/", -1),
								l(" directory it can serve) and its stories become testable. ", -1)
							]], 2)) : o("", !0),
							(g(!0), s(r, null, te(Fe.value, (e) => (g(), a(y(ye), {
								key: e.repo,
								label: e.repo,
								count: y(ne) ? void 0 : e.count
							}, {
								actions: b(() => [c("span", fP, [e.rooted ? (g(), a(aP, {
									key: 0,
									repo: e.repo,
									group: "",
									targets: y(Ee)
								}, null, 8, ["repo", "targets"])) : o("", !0), u(FM, {
									repo: e.repo,
									targets: y(Ee),
									blocked: He.value.has(e.repo)
								}, null, 8, [
									"repo",
									"targets",
									"blocked"
								])])]),
								default: b(() => [y(ne) ? (g(), a(y(be), {
									key: 0,
									of: `acceptance.stories:${e.repo}`,
									label: "Reading the stories"
								}, {
									default: b(() => [c("div", pP, [(g(), s(r, null, te(3, (e) => c("div", {
										key: e,
										class: "flex w-full items-center gap-3 px-4 py-2.5"
									}, [
										i[4] ||= c("span", { class: "skeleton h-4 w-4 shrink-0" }, null, -1),
										i[5] ||= c("span", { class: "skeleton h-3.5 w-3.5 shrink-0" }, null, -1),
										c("span", mP, [c("span", { class: p(["skeleton block h-3", Ge[e - 1]]) }, null, 2)]),
										i[6] ||= c("span", { class: "skeleton h-2.5 w-14 shrink-0" }, null, -1)
									])), 64)), i[7] ||= c("div", { class: "px-4 py-2.5" }, [c("div", { class: "flex min-h-11 items-center gap-3" }, [c("span", { class: "skeleton h-3.5 w-3.5 shrink-0" }), c("span", { class: "skeleton block h-3 w-72 max-w-full" })])], -1)])]),
									_: 1
								}, 8, ["of"])) : x((g(), s("div", hP, [(g(!0), s(r, null, te(e.groups, (t) => (g(), s(r, { key: t.group || "root" }, [
									t.group === "" ? o("", !0) : (g(), s("div", gP, [
										u(y(ue), {
											"model-value": t.paths.every((e) => C.value.has(e)),
											indeterminate: t.paths.some((e) => C.value.has(e)) && !t.paths.every((e) => C.value.has(e)),
											binary: "",
											size: "small",
											class: "ui-checkbox-quiet",
											"aria-label": `Run every story in ${t.group}`,
											"onUpdate:modelValue": (e) => Ue(t.paths, e === !0)
										}, null, 8, [
											"model-value",
											"indeterminate",
											"aria-label",
											"onUpdate:modelValue"
										]),
										c("span", _P, v(t.group) + "/", 1),
										u(aP, {
											repo: e.repo,
											group: t.group,
											targets: y(Ee)
										}, null, 8, [
											"repo",
											"group",
											"targets"
										])
									])),
									(g(!0), s(r, null, te(t.entries, (e) => (g(), a(WN, {
										key: e.path,
										story: e,
										content: y(n)[e.path],
										expanded: ke.value === e.path,
										status: We.value[e.path],
										autofocus: Ae.value === e.path,
										selected: C.value.has(e.path),
										save: y(ie),
										remove: y(ae),
										onToggle: (t) => Ye(e.path),
										onSelect: (t) => Ue([e.path], t),
										onRun: (t) => C.value = /* @__PURE__ */ new Set([e.path])
									}, null, 8, [
										"story",
										"content",
										"expanded",
										"status",
										"autofocus",
										"selected",
										"save",
										"remove",
										"onToggle",
										"onSelect",
										"onRun"
									]))), 128)),
									u(MN, {
										repo: e.repo,
										group: t.group,
										taken: Ie.value,
										onCreate: Je
									}, null, 8, [
										"repo",
										"group",
										"taken"
									])
								], 64))), 128)), e.rooted ? o("", !0) : (g(), a(MN, {
									key: 0,
									repo: e.repo,
									group: "",
									taken: Ie.value,
									onCreate: Je
								}, null, 8, ["repo", "taken"]))])), [[y(Oe), `acceptance.stories:${e.repo}`]])]),
								_: 2
							}, 1032, ["label", "count"]))), 128)),
							y(m) > 0 ? (g(), s("p", vP, v(y(m)) + " further story files are listed by filename only: titles, criteria and text are read for the first 200. ", 1)) : o("", !0)
						]),
						u(y(ye), {
							label: "Runs",
							count: y(de) ? void 0 : y(oe).length
						}, {
							default: b(() => [y(de) ? (g(), a(y(be), {
								key: 0,
								of: "acceptance.runs",
								label: "Reading the runs"
							}, {
								default: b(() => [c("div", yP, [(g(), s(r, null, te(2, (e) => c("div", {
									key: e,
									class: "flex w-full items-center gap-3 px-4 py-2.5"
								}, [...i[8] ||= [
									c("span", { class: "skeleton h-3.5 w-3.5 shrink-0" }, null, -1),
									c("span", { class: "min-w-0 flex-1" }, [c("span", { class: "flex h-5 items-center" }, [c("span", { class: "skeleton block h-3 w-24" })]), c("span", { class: "flex h-4 items-center" }, [c("span", { class: "skeleton block h-2.5 w-40" })])], -1),
									c("span", { class: "skeleton h-4 w-16 shrink-0 rounded-full" }, null, -1),
									c("span", { class: "skeleton h-2.5 w-20 shrink-0" }, null, -1)
								]])), 64))])]),
								_: 1
							})) : y(oe).length === 0 ? x((g(), s("div", {
								key: 1,
								class: p(y(Te).emptyState("m-3"))
							}, [
								i[9] ||= l(" Nothing has been tested yet. Press Run below: reports land in ", -1),
								c("span", bP, v(y(sj)) + "/", 1),
								i[10] ||= l(", outside every repository. ", -1)
							], 2)), [[y(Oe), "acceptance.runs"]]) : x((g(), s("div", xP, [(g(!0), s(r, null, te(qe.value, (e) => (g(), s("button", {
								key: e.row.manifest.runId,
								type: "button",
								class: "group flex w-full cursor-pointer items-center gap-3 px-4 py-2.5 text-left hover:bg-overlay",
								onClick: (t) => w.value = e.row.manifest.runId
							}, [
								u(y(S), {
									name: e.row.running ? "spinner" : "history",
									spin: e.row.running,
									class: "shrink-0 text-subtle"
								}, null, 8, ["name", "spin"]),
								c("span", CP, [c("span", wP, v(e.row.manifest.stories.map((e) => e.title).join(" · ")), 1), c("span", TP, v(y(xj)(e.row.manifest).join(", ")) + " · " + v(e.row.manifest.pick.agent) + " " + v(e.row.manifest.pick.model), 1)]),
								e.status ? (g(), a(y(xe), {
									key: 0,
									variant: e.status.variant,
									label: e.status.label,
									size: "xs"
								}, null, 8, ["variant", "label"])) : o("", !0),
								c("span", EP, v(y(we)(e.row.manifest.createdAt)), 1)
							], 8, SP))), 128))])), [[y(Oe), "acceptance.runs"]])]),
							_: 1
						}, 8, ["count"]),
						y(oe).length > y(cj) ? (g(), s("p", DP, " Verdicts are read for the newest " + v(y(cj)) + " runs. Older ones show theirs when opened. ", 1)) : o("", !0),
						y(t).length > 0 ? (g(), a(WM, {
							key: 1,
							chosen: Le.value.length,
							total: y(t).length,
							narrowed: C.value.size > 0,
							blocked: Ve.value,
							"can-run": T.value,
							onClear: i[1] ||= (e) => C.value = /* @__PURE__ */ new Set(),
							onSubmit: Xe
						}, null, 8, [
							"chosen",
							"total",
							"narrowed",
							"blocked",
							"can-run"
						])) : o("", !0)
					], 64))
				]),
				_: 1
			}));
		}
	});
})), AP = /* @__PURE__ */ je({ default: () => jP }), jP, MP = w((() => {
	kP(), kP(), jP = OP;
}));
qj(), JA();
var NP = (e, t) => {
	KA(e), t.subscriptions.push(Wj()), t.subscriptions.push(e.views.register({
		id: "acceptance",
		label: "Acceptance",
		surface: "rail",
		detect: (e) => e.some((e) => e.userStories || e.hasPanel) ? [{
			key: "acceptance",
			title: "Acceptance",
			icon: "list-check"
		}] : [],
		badge: () => Gj(),
		view: async () => (await Promise.resolve().then(() => (MP(), AP))).default
	}));
}, PP = {
	$schema: "https://intentic.dev/intentic-extension.schema.json",
	publisher: "intentic",
	name: "acceptance",
	version: "1.0.0",
	category: "work",
	icon: "list-check",
	engines: { intentic: "^2.0.0" },
	entry: "dist/extension.js",
	permissions: { sandbox: [
		"GET /workspace/children",
		"GET /workspace/file",
		"GET /workspace/raw",
		"POST /workspace/upload",
		"DELETE /workspace/entry",
		"GET /panels",
		"POST /panels/*/start",
		"POST /agent",
		"POST /agent/stop",
		"GET /agents",
		"GET /system/browsers"
	] },
	contributes: {
		views: [{
			id: "acceptance",
			label: "Acceptance",
			surface: "rail",
			badge: !0
		}],
		files: [{
			path: ".intentic/records/artifacts/acceptance/",
			invalidates: ["acceptance"]
		}]
	}
};
//#endregion
//#region src/manifest.ts
JS();
var FP = US.parse(PP);
//#endregion
export { NP as activate, FP as manifest };
