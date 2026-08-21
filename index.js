import * as e from "react";
import { motion as t } from "framer-motion";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region \0rolldown/runtime.js
var i = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), a = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), o = /* @__PURE__ */ i(((e) => {
	var t = a("react").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	e.c = function(e) {
		return t.H.useMemoCache(e);
	};
})), s = /* @__PURE__ */ i(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = a("react").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
		e.c = function(e) {
			var n = t.H;
			return n === null && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."), n.useMemoCache(e);
		};
	})();
})), c = (/* @__PURE__ */ i(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = o() : t.exports = s();
})))();
function l(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") if (Array.isArray(e)) {
		var i = e.length;
		for (t = 0; t < i; t++) e[t] && (n = l(e[t])) && (r && (r += " "), r += n);
	} else for (n in e) e[n] && (r && (r += " "), r += n);
	return r;
}
function u() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = l(e)) && (r && (r += " "), r += t);
	return r;
}
//#endregion
//#region node_modules/tailwind-merge/dist/bundle-mjs.mjs
var d = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, f = (e, t) => ({
	classGroupId: e,
	validator: t
}), p = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), m = "-", h = [], g = "arbitrary..", _ = (e) => {
	let t = b(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return y(e);
			let n = e.split(m);
			return v(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? d(i, t) : t : i || h;
			}
			return n[e] || h;
		}
	};
}, v = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = v(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(m) : e.slice(t).join(m), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, y = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? g + r : void 0;
})(), b = (e) => {
	let { theme: t, classGroups: n } = e;
	return x(n, t);
}, x = (e, t) => {
	let n = p();
	for (let r in e) {
		let i = e[r];
		S(i, n, r, t);
	}
	return n;
}, S = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		C(i, t, n, r);
	}
}, C = (e, t, n, r) => {
	if (typeof e == "string") {
		w(e, t, n);
		return;
	}
	if (typeof e == "function") {
		T(e, t, n, r);
		return;
	}
	ee(e, t, n, r);
}, w = (e, t, n) => {
	let r = e === "" ? t : te(t, e);
	r.classGroupId = n;
}, T = (e, t, n, r) => {
	if (E(e)) {
		S(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(f(n, e));
}, ee = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		S(o, te(t, a), n, r);
	}
}, te = (e, t) => {
	let n = e, r = t.split(m), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = p(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, E = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, ne = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, D = "!", O = ":", k = [], A = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), re = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === O) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(D) ? (c = s.slice(0, -1), l = !0) : s.startsWith(D) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return A(t, l, c, u);
	};
	if (t) {
		let e = t + O, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : A(k, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, ie = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, j = (e) => ({
	cache: ne(e.cacheSize),
	parseClassName: re(e),
	sortModifiers: ie(e),
	postfixLookupClassGroupIds: ae(e),
	..._(e)
}), ae = (e) => {
	let t = Object.create(null), n = e.postfixLookupClassGroups;
	if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
	return t;
}, oe = /\s+/, se = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a, postfixLookupClassGroupIds: o } = t, s = [], c = e.trim().split(oe), l = "";
	for (let e = c.length - 1; e >= 0; --e) {
		let t = c[e], { isExternal: u, modifiers: d, hasImportantModifier: f, baseClassName: p, maybePostfixModifierPosition: m } = n(t);
		if (u) {
			l = t + (l.length > 0 ? " " + l : l);
			continue;
		}
		let h = !!m, g;
		if (h) {
			g = r(p.substring(0, m));
			let e = g && o[g] ? r(p) : void 0;
			e && e !== g && (g = e, h = !1);
		} else g = r(p);
		if (!g) {
			if (!h) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			if (g = r(p), !g) {
				l = t + (l.length > 0 ? " " + l : l);
				continue;
			}
			h = !1;
		}
		let _ = d.length === 0 ? "" : d.length === 1 ? d[0] : a(d).join(":"), v = f ? _ + D : _, y = v + g;
		if (s.indexOf(y) > -1) continue;
		s.push(y);
		let b = i(g, h);
		for (let e = 0; e < b.length; ++e) {
			let t = b[e];
			s.push(v + t);
		}
		l = t + (l.length > 0 ? " " + l : l);
	}
	return l;
}, ce = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = M(n)) && (i && (i += " "), i += r);
	return i;
}, M = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = M(e[r])) && (n && (n += " "), n += t);
	return n;
}, N = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = j(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = se(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(ce(...e));
}, le = [], P = (e) => {
	let t = (t) => t[e] || le;
	return t.isThemeGetter = !0, t;
}, ue = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, F = /^\((?:(\w[\w-]*):)?(.+)\)$/i, de = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, fe = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, pe = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, me = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, he = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ge = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, I = (e) => de.test(e), L = (e) => !!e && !Number.isNaN(Number(e)), R = (e) => !!e && Number.isInteger(Number(e)), _e = (e) => e.endsWith("%") && L(e.slice(0, -1)), z = (e) => fe.test(e), ve = () => !0, ye = (e) => pe.test(e) && !me.test(e), be = () => !1, xe = (e) => he.test(e), Se = (e) => ge.test(e), Ce = (e) => !B(e) && !H(e), we = (e) => e.startsWith("@container") && (e[10] === "/" && e[11] !== void 0 || e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10) || e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10)), Te = (e) => U(e, Ve, be), B = (e) => ue.test(e), V = (e) => U(e, He, ye), Ee = (e) => U(e, Ue, L), De = (e) => U(e, Ge, ve), Oe = (e) => U(e, We, be), ke = (e) => U(e, ze, be), Ae = (e) => U(e, Be, Se), je = (e) => U(e, Ke, xe), H = (e) => F.test(e), Me = (e) => W(e, He), Ne = (e) => W(e, We), Pe = (e) => W(e, ze), Fe = (e) => W(e, Ve), Ie = (e) => W(e, Be), Le = (e) => W(e, Ke, !0), Re = (e) => W(e, Ge, !0), U = (e, t, n) => {
	let r = ue.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, W = (e, t, n = !1) => {
	let r = F.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, ze = (e) => e === "position" || e === "percentage", Be = (e) => e === "image" || e === "url", Ve = (e) => e === "length" || e === "size" || e === "bg-size", He = (e) => e === "length", Ue = (e) => e === "number", We = (e) => e === "family-name", Ge = (e) => e === "number" || e === "weight", Ke = (e) => e === "shadow", qe = /*#__PURE__*/ N(() => {
	let e = P("color"), t = P("font"), n = P("text"), r = P("font-weight"), i = P("tracking"), a = P("leading"), o = P("breakpoint"), s = P("container"), c = P("spacing"), l = P("radius"), u = P("shadow"), d = P("inset-shadow"), f = P("text-shadow"), p = P("drop-shadow"), m = P("blur"), h = P("perspective"), g = P("aspect"), _ = P("ease"), v = P("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		H,
		B
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		H,
		B,
		c
	], T = () => [
		I,
		"full",
		"auto",
		...w()
	], ee = () => [
		R,
		"none",
		"subgrid",
		H,
		B
	], te = () => [
		"auto",
		{ span: [
			"full",
			R,
			H,
			B
		] },
		R,
		H,
		B
	], E = () => [
		R,
		"auto",
		H,
		B
	], ne = () => [
		"auto",
		"min",
		"max",
		"fr",
		H,
		B
	], D = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], O = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], k = () => ["auto", ...w()], A = () => [
		I,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], re = () => [
		I,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], ie = () => [
		I,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], j = () => [
		e,
		H,
		B
	], ae = () => [
		...b(),
		Pe,
		ke,
		{ position: [H, B] }
	], oe = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], se = () => [
		"auto",
		"cover",
		"contain",
		Fe,
		Te,
		{ size: [H, B] }
	], ce = () => [
		_e,
		Me,
		V
	], M = () => [
		"",
		"none",
		"full",
		l,
		H,
		B
	], N = () => [
		"",
		L,
		Me,
		V
	], le = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ue = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], F = () => [
		L,
		_e,
		Pe,
		ke
	], de = () => [
		"",
		"none",
		m,
		H,
		B
	], fe = () => [
		"none",
		L,
		H,
		B
	], pe = () => [
		"none",
		L,
		H,
		B
	], me = () => [
		L,
		H,
		B
	], he = () => [
		I,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [z],
			breakpoint: [z],
			color: [ve],
			container: [z],
			"drop-shadow": [z],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Ce],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [z],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [z],
			shadow: [z],
			spacing: ["px", L],
			text: [z],
			"text-shadow": [z],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				I,
				B,
				H,
				g
			] }],
			container: ["container"],
			"container-type": [{ "@container": [
				"",
				"normal",
				"size",
				H,
				B
			] }],
			"container-named": [we],
			columns: [{ columns: [
				L,
				B,
				H,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				R,
				"auto",
				H,
				B
			] }],
			basis: [{ basis: [
				I,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				L,
				I,
				"auto",
				"initial",
				"none",
				B
			] }],
			grow: [{ grow: [
				"",
				L,
				H,
				B
			] }],
			shrink: [{ shrink: [
				"",
				L,
				H,
				B
			] }],
			order: [{ order: [
				R,
				"first",
				"last",
				"none",
				H,
				B
			] }],
			"grid-cols": [{ "grid-cols": ee() }],
			"col-start-end": [{ col: te() }],
			"col-start": [{ "col-start": E() }],
			"col-end": [{ "col-end": E() }],
			"grid-rows": [{ "grid-rows": ee() }],
			"row-start-end": [{ row: te() }],
			"row-start": [{ "row-start": E() }],
			"row-end": [{ "row-end": E() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": ne() }],
			"auto-rows": [{ "auto-rows": ne() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...D(), "normal"] }],
			"justify-items": [{ "justify-items": [...O(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...O()] }],
			"align-content": [{ content: ["normal", ...D()] }],
			"align-items": [{ items: [...O(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...O(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": D() }],
			"place-items": [{ "place-items": [...O(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...O()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: k() }],
			mx: [{ mx: k() }],
			my: [{ my: k() }],
			ms: [{ ms: k() }],
			me: [{ me: k() }],
			mbs: [{ mbs: k() }],
			mbe: [{ mbe: k() }],
			mt: [{ mt: k() }],
			mr: [{ mr: k() }],
			mb: [{ mb: k() }],
			ml: [{ ml: k() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: A() }],
			"inline-size": [{ inline: ["auto", ...re()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...re()] }],
			"max-inline-size": [{ "max-inline": ["none", ...re()] }],
			"block-size": [{ block: ["auto", ...ie()] }],
			"min-block-size": [{ "min-block": ["auto", ...ie()] }],
			"max-block-size": [{ "max-block": ["none", ...ie()] }],
			w: [{ w: [
				s,
				"screen",
				...A()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...A()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...A()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...A()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...A()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...A()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				Me,
				V
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				Re,
				De
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				_e,
				B
			] }],
			"font-family": [{ font: [
				Ne,
				Oe,
				t
			] }],
			"font-features": [{ "font-features": [B] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				H,
				B
			] }],
			"line-clamp": [{ "line-clamp": [
				L,
				"none",
				H,
				Ee
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				H,
				B
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				H,
				B
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: j() }],
			"text-color": [{ text: j() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...le(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				L,
				"from-font",
				"auto",
				H,
				V
			] }],
			"text-decoration-color": [{ decoration: j() }],
			"underline-offset": [{ "underline-offset": [
				L,
				"auto",
				H,
				B
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"tab-size": [{ tab: [
				R,
				H,
				B
			] }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				H,
				B
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				H,
				B
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: ae() }],
			"bg-repeat": [{ bg: oe() }],
			"bg-size": [{ bg: se() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						R,
						H,
						B
					],
					radial: [
						"",
						H,
						B
					],
					conic: [
						R,
						H,
						B
					]
				},
				Ie,
				Ae
			] }],
			"bg-color": [{ bg: j() }],
			"gradient-from-pos": [{ from: ce() }],
			"gradient-via-pos": [{ via: ce() }],
			"gradient-to-pos": [{ to: ce() }],
			"gradient-from": [{ from: j() }],
			"gradient-via": [{ via: j() }],
			"gradient-to": [{ to: j() }],
			rounded: [{ rounded: M() }],
			"rounded-s": [{ "rounded-s": M() }],
			"rounded-e": [{ "rounded-e": M() }],
			"rounded-t": [{ "rounded-t": M() }],
			"rounded-r": [{ "rounded-r": M() }],
			"rounded-b": [{ "rounded-b": M() }],
			"rounded-l": [{ "rounded-l": M() }],
			"rounded-ss": [{ "rounded-ss": M() }],
			"rounded-se": [{ "rounded-se": M() }],
			"rounded-ee": [{ "rounded-ee": M() }],
			"rounded-es": [{ "rounded-es": M() }],
			"rounded-tl": [{ "rounded-tl": M() }],
			"rounded-tr": [{ "rounded-tr": M() }],
			"rounded-br": [{ "rounded-br": M() }],
			"rounded-bl": [{ "rounded-bl": M() }],
			"border-w": [{ border: N() }],
			"border-w-x": [{ "border-x": N() }],
			"border-w-y": [{ "border-y": N() }],
			"border-w-s": [{ "border-s": N() }],
			"border-w-e": [{ "border-e": N() }],
			"border-w-bs": [{ "border-bs": N() }],
			"border-w-be": [{ "border-be": N() }],
			"border-w-t": [{ "border-t": N() }],
			"border-w-r": [{ "border-r": N() }],
			"border-w-b": [{ "border-b": N() }],
			"border-w-l": [{ "border-l": N() }],
			"divide-x": [{ "divide-x": N() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": N() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...le(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...le(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: j() }],
			"border-color-x": [{ "border-x": j() }],
			"border-color-y": [{ "border-y": j() }],
			"border-color-s": [{ "border-s": j() }],
			"border-color-e": [{ "border-e": j() }],
			"border-color-bs": [{ "border-bs": j() }],
			"border-color-be": [{ "border-be": j() }],
			"border-color-t": [{ "border-t": j() }],
			"border-color-r": [{ "border-r": j() }],
			"border-color-b": [{ "border-b": j() }],
			"border-color-l": [{ "border-l": j() }],
			"divide-color": [{ divide: j() }],
			"outline-style": [{ outline: [
				...le(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				L,
				H,
				B
			] }],
			"outline-w": [{ outline: [
				"",
				L,
				Me,
				V
			] }],
			"outline-color": [{ outline: j() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				Le,
				je
			] }],
			"shadow-color": [{ shadow: j() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Le,
				je
			] }],
			"inset-shadow-color": [{ "inset-shadow": j() }],
			"ring-w": [{ ring: N() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: j() }],
			"ring-offset-w": [{ "ring-offset": [L, V] }],
			"ring-offset-color": [{ "ring-offset": j() }],
			"inset-ring-w": [{ "inset-ring": N() }],
			"inset-ring-color": [{ "inset-ring": j() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Le,
				je
			] }],
			"text-shadow-color": [{ "text-shadow": j() }],
			opacity: [{ opacity: [
				L,
				H,
				B
			] }],
			"mix-blend": [{ "mix-blend": [
				...ue(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ue() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [L] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": F() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": F() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": j() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": j() }],
			"mask-image-t-from-pos": [{ "mask-t-from": F() }],
			"mask-image-t-to-pos": [{ "mask-t-to": F() }],
			"mask-image-t-from-color": [{ "mask-t-from": j() }],
			"mask-image-t-to-color": [{ "mask-t-to": j() }],
			"mask-image-r-from-pos": [{ "mask-r-from": F() }],
			"mask-image-r-to-pos": [{ "mask-r-to": F() }],
			"mask-image-r-from-color": [{ "mask-r-from": j() }],
			"mask-image-r-to-color": [{ "mask-r-to": j() }],
			"mask-image-b-from-pos": [{ "mask-b-from": F() }],
			"mask-image-b-to-pos": [{ "mask-b-to": F() }],
			"mask-image-b-from-color": [{ "mask-b-from": j() }],
			"mask-image-b-to-color": [{ "mask-b-to": j() }],
			"mask-image-l-from-pos": [{ "mask-l-from": F() }],
			"mask-image-l-to-pos": [{ "mask-l-to": F() }],
			"mask-image-l-from-color": [{ "mask-l-from": j() }],
			"mask-image-l-to-color": [{ "mask-l-to": j() }],
			"mask-image-x-from-pos": [{ "mask-x-from": F() }],
			"mask-image-x-to-pos": [{ "mask-x-to": F() }],
			"mask-image-x-from-color": [{ "mask-x-from": j() }],
			"mask-image-x-to-color": [{ "mask-x-to": j() }],
			"mask-image-y-from-pos": [{ "mask-y-from": F() }],
			"mask-image-y-to-pos": [{ "mask-y-to": F() }],
			"mask-image-y-from-color": [{ "mask-y-from": j() }],
			"mask-image-y-to-color": [{ "mask-y-to": j() }],
			"mask-image-radial": [{ "mask-radial": [H, B] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": F() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": F() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": j() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": j() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [L] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": F() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": F() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": j() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": j() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: ae() }],
			"mask-repeat": [{ mask: oe() }],
			"mask-size": [{ mask: se() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				H,
				B
			] }],
			filter: [{ filter: [
				"",
				"none",
				H,
				B
			] }],
			blur: [{ blur: de() }],
			brightness: [{ brightness: [
				L,
				H,
				B
			] }],
			contrast: [{ contrast: [
				L,
				H,
				B
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Le,
				je
			] }],
			"drop-shadow-color": [{ "drop-shadow": j() }],
			grayscale: [{ grayscale: [
				"",
				L,
				H,
				B
			] }],
			"hue-rotate": [{ "hue-rotate": [
				L,
				H,
				B
			] }],
			invert: [{ invert: [
				"",
				L,
				H,
				B
			] }],
			saturate: [{ saturate: [
				L,
				H,
				B
			] }],
			sepia: [{ sepia: [
				"",
				L,
				H,
				B
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				H,
				B
			] }],
			"backdrop-blur": [{ "backdrop-blur": de() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				L,
				H,
				B
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				L,
				H,
				B
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				L,
				H,
				B
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				L,
				H,
				B
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				L,
				H,
				B
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				L,
				H,
				B
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				L,
				H,
				B
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				L,
				H,
				B
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				H,
				B
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				L,
				"initial",
				H,
				B
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				H,
				B
			] }],
			delay: [{ delay: [
				L,
				H,
				B
			] }],
			animate: [{ animate: [
				"none",
				v,
				H,
				B
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				H,
				B
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: fe() }],
			"rotate-x": [{ "rotate-x": fe() }],
			"rotate-y": [{ "rotate-y": fe() }],
			"rotate-z": [{ "rotate-z": fe() }],
			scale: [{ scale: pe() }],
			"scale-x": [{ "scale-x": pe() }],
			"scale-y": [{ "scale-y": pe() }],
			"scale-z": [{ "scale-z": pe() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: me() }],
			"skew-x": [{ "skew-x": me() }],
			"skew-y": [{ "skew-y": me() }],
			transform: [{ transform: [
				H,
				B,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: he() }],
			"translate-x": [{ "translate-x": he() }],
			"translate-y": [{ "translate-y": he() }],
			"translate-z": [{ "translate-z": he() }],
			"translate-none": ["translate-none"],
			zoom: [{ zoom: [
				R,
				H,
				B
			] }],
			accent: [{ accent: j() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: j() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				H,
				B
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scrollbar-thumb-color": [{ "scrollbar-thumb": j() }],
			"scrollbar-track-color": [{ "scrollbar-track": j() }],
			"scrollbar-gutter": [{ "scrollbar-gutter": [
				"auto",
				"stable",
				"both"
			] }],
			"scrollbar-w": [{ scrollbar: [
				"auto",
				"thin",
				"none"
			] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				H,
				B
			] }],
			fill: [{ fill: ["none", ...j()] }],
			"stroke-w": [{ stroke: [
				L,
				Me,
				V,
				Ee
			] }],
			stroke: [{ stroke: ["none", ...j()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			"container-named": ["container-type"],
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		postfixLookupClassGroups: ["container-type"],
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
//#endregion
//#region src/utils/cn.ts
function G(...e) {
	return qe(u(e));
}
//#endregion
//#region node_modules/react-router/dist/development/chunk-4ZMWKKQ3.mjs
var Je = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i, Ye = /^[\\/]{2}/;
function Xe(e, t) {
	return t + e.replace(/\\/g, "/");
}
function K(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function q(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw Error(t);
		} catch {}
	}
}
function Ze({ pathname: e = "/", search: t = "", hash: n = "" }) {
	return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function Qe(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
	}
	return t;
}
function $e(e, t, n = "/") {
	return et(e, t, n, !1);
}
function et(e, t, n, r, i) {
	let a = J((typeof t == "string" ? Qe(t) : t).pathname || "/", n);
	if (a == null) return null;
	let o = i ?? nt(e), s = null, c = yt(a);
	for (let e = 0; s == null && e < o.length; ++e) s = ht(o[e], c, r);
	return s;
}
function tt(e, t) {
	let { route: n, pathname: r, params: i } = e;
	return {
		id: n.id,
		pathname: r,
		params: i,
		data: t[n.id],
		loaderData: t[n.id],
		handle: n.handle
	};
}
function nt(e) {
	let t = rt(e);
	return at(t), t;
}
function rt(e, t = [], n = [], r = "", i = !1) {
	let a = (e, a, o = i, s) => {
		let c = {
			relativePath: s === void 0 ? e.path || "" : s,
			caseSensitive: e.caseSensitive === !0,
			childrenIndex: a,
			route: e
		};
		if (c.relativePath.startsWith("/")) {
			if (!c.relativePath.startsWith(r) && o) return;
			K(c.relativePath.startsWith(r), `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), c.relativePath = c.relativePath.slice(r.length);
		}
		let l = Y([r, c.relativePath]), u = n.concat(c);
		e.children && e.children.length > 0 && (K(e.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${l}".`), rt(e.children, t, u, l, o)), !(e.path == null && !e.index) && t.push({
			path: l,
			score: pt(l, e.index),
			routesMeta: u.map((e, t) => {
				let [n, r] = vt(e.relativePath, e.caseSensitive, t === u.length - 1);
				return {
					...e,
					matcher: n,
					compiledParams: r
				};
			})
		});
	};
	return e.forEach((e, t) => {
		if (e.path === "" || !e.path?.includes("?")) a(e, t);
		else for (let n of it(e.path)) a(e, t, !0, n);
	}), t;
}
function it(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [a, ""] : [a];
	let o = it(r.join("/")), s = [];
	return s.push(...o.map((e) => e === "" ? a : [a, e].join("/"))), i && s.push(...o), s.map((t) => e.startsWith("/") && t === "" ? "/" : t);
}
function at(e) {
	e.sort((e, t) => e.score === t.score ? mt(e.routesMeta.map((e) => e.childrenIndex), t.routesMeta.map((e) => e.childrenIndex)) : t.score - e.score);
}
var ot = /^:[\w-]+$/, st = 3, ct = 2, lt = 1, ut = 10, dt = -2, ft = (e) => e === "*";
function pt(e, t) {
	let n = e.split("/"), r = n.length;
	return n.some(ft) && (r += dt), t && (r += ct), n.filter((e) => !ft(e)).reduce((e, t) => e + (ot.test(t) ? st : t === "" ? lt : ut), r);
}
function mt(e, t) {
	return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function ht(e, t, n = !1) {
	let { routesMeta: r } = e, i = {}, a = "/", o = [];
	for (let e = 0; e < r.length; ++e) {
		let s = r[e], c = e === r.length - 1, l = a === "/" ? t : t.slice(a.length) || "/", u = {
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: c
		}, d = s.matcher && s.compiledParams ? _t(u, l, s.matcher, s.compiledParams) : gt(u, l), f = s.route;
		if (!d && c && n && !r[r.length - 1].route.index && (d = gt({
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: !1
		}, l)), !d) return null;
		Object.assign(i, d.params), o.push({
			params: i,
			pathname: Y([a, d.pathname]),
			pathnameBase: Ot(Y([a, d.pathnameBase])),
			route: f
		}), d.pathnameBase !== "/" && (a = Y([a, d.pathnameBase]));
	}
	return o;
}
function gt(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = vt(e.path, e.caseSensitive, e.end);
	return _t(e, t, n, r);
}
function _t(e, t, n, r) {
	let i = t.match(n);
	if (!i) return null;
	let a = i[0], o = a.replace(/(.)\/+$/, "$1"), s = i.slice(1);
	return {
		params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
			if (t === "*") {
				let e = s[r] || "";
				o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1");
			}
			let i = s[r];
			return n && !i ? e[t] = void 0 : e[t] = (i || "").replace(/%2F/g, "/"), e;
		}, {}),
		pathname: a,
		pathnameBase: o,
		pattern: e
	};
}
function vt(e, t = !1, n = !0) {
	q(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
	let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
		if (r.push({
			paramName: t,
			isOptional: n != null
		}), n) {
			let t = a.charAt(i + e.length);
			return t && t !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
		}
		return "/([^\\/]+)";
	}).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
	return e.endsWith("*") ? (r.push({ paramName: "*" }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function yt(e) {
	try {
		return e.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
	} catch (t) {
		return q(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
	}
}
function J(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function bt(e, t = "/") {
	let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? Qe(e) : e, a;
	return n ? (n = Et(n), a = n.startsWith("/") ? xt(n.substring(1), "/") : xt(n, t)) : a = t, {
		pathname: a,
		search: kt(r),
		hash: At(i)
	};
}
function xt(e, t) {
	let n = Dt(t).split("/");
	return e.split("/").forEach((e) => {
		e === ".." ? n.length > 1 && n.pop() : e !== "." && n.push(e);
	}), n.length > 1 ? n.join("/") : "/";
}
function St(e, t, n, r) {
	return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Ct(e) {
	return e.filter((e, t) => t === 0 || e.route.path && e.route.path.length > 0);
}
function wt(e) {
	let t = Ct(e);
	return t.map((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase);
}
function Tt(e, t, n, r = !1) {
	let i;
	typeof e == "string" ? i = Qe(e) : (i = { ...e }, K(!i.pathname || !i.pathname.includes("?"), St("?", "pathname", "search", i)), K(!i.pathname || !i.pathname.includes("#"), St("#", "pathname", "hash", i)), K(!i.search || !i.search.includes("#"), St("#", "search", "hash", i)));
	let a = e === "" || i.pathname === "", o = a ? "/" : i.pathname, s;
	if (o == null) s = n;
	else {
		let e = t.length - 1;
		if (!r && o.startsWith("..")) {
			let t = o.split("/");
			for (; t[0] === "..";) t.shift(), --e;
			i.pathname = t.join("/");
		}
		s = e >= 0 ? t[e] : "/";
	}
	let c = bt(i, s), l = o && o !== "/" && o.endsWith("/"), u = (a || o === ".") && n.endsWith("/");
	return !c.pathname.endsWith("/") && (l || u) && (c.pathname += "/"), c;
}
var Et = (e) => e.replace(/[\\/]{2,}/g, "/"), Y = (e) => Et(e.join("/")), Dt = (e) => e.replace(/\/+$/, ""), Ot = (e) => Dt(e).replace(/^\/*/, "/"), kt = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, At = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, jt = class {
	constructor(e, t, n, r = !1) {
		this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
	}
};
function Mt(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function Nt(e) {
	return Y(e.map((e) => e.route.path).filter(Boolean)) || "/";
}
var Pt = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function Ft(e, t) {
	let n = e;
	if (typeof n != "string" || !Je.test(n)) return {
		absoluteURL: void 0,
		isExternal: !1,
		to: n
	};
	let r = n, i = !1;
	if (Pt) try {
		let e = new URL(window.location.href), r = Ye.test(n) ? new URL(Xe(n, e.protocol)) : new URL(n), a = J(r.pathname, t);
		r.origin === e.origin && a != null ? n = a + r.search + r.hash : i = !0;
	} catch {
		q(!1, `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
	}
	return {
		absoluteURL: r,
		isExternal: i,
		to: n
	};
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var It = [
	"POST",
	"PUT",
	"PATCH",
	"DELETE"
];
new Set(It);
var Lt = ["GET", ...It];
new Set(Lt);
var Rt = [
	"about:",
	"blob:",
	"chrome:",
	"chrome-untrusted:",
	"content:",
	"data:",
	"devtools:",
	"file:",
	"filesystem:",
	"javascript:"
];
function zt(e) {
	try {
		return Rt.includes(new URL(e).protocol);
	} catch {
		return !1;
	}
}
var X = e.createContext(null);
X.displayName = "DataRouter";
var Bt = e.createContext(null);
Bt.displayName = "DataRouterState";
var Vt = e.createContext(!1);
function Ht() {
	return e.useContext(Vt);
}
var Ut = e.createContext({ isTransitioning: !1 });
Ut.displayName = "ViewTransition";
var Wt = e.createContext(/* @__PURE__ */ new Map());
Wt.displayName = "Fetchers";
var Gt = e.createContext(null);
Gt.displayName = "Await";
var Z = e.createContext(null);
Z.displayName = "Navigation";
var Kt = e.createContext(null);
Kt.displayName = "Location";
var Q = e.createContext({
	outlet: null,
	matches: [],
	isDataRoute: !1
});
Q.displayName = "Route";
var qt = e.createContext(null);
qt.displayName = "RouteError";
var Jt = "REACT_ROUTER_ERROR", Yt = "REDIRECT", Xt = "ROUTE_ERROR_RESPONSE";
function Zt(e) {
	if (e.startsWith(`${Jt}:${Yt}:{`)) try {
		let t = JSON.parse(e.slice(28));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
	} catch {}
}
function Qt(e) {
	if (e.startsWith(`${Jt}:${Xt}:{`)) try {
		let t = JSON.parse(e.slice(40));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new jt(t.status, t.statusText, t.data);
	} catch {}
}
function $t(t, { relative: n } = {}) {
	K(en(), "useHref() may be used only in the context of a <Router> component.");
	let { basename: r, navigator: i } = e.useContext(Z), { hash: a, pathname: o, search: s } = on(t, { relative: n }), c = o;
	return r !== "/" && (c = o === "/" ? r : Y([r, o])), i.createHref({
		pathname: c,
		search: s,
		hash: a
	});
}
function en() {
	return e.useContext(Kt) != null;
}
function $() {
	return K(en(), "useLocation() may be used only in the context of a <Router> component."), e.useContext(Kt).location;
}
var tn = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function nn(t) {
	e.useContext(Z).static || e.useLayoutEffect(t);
}
function rn() {
	let { isDataRoute: t } = e.useContext(Q);
	return t ? wn() : an();
}
function an() {
	K(en(), "useNavigate() may be used only in the context of a <Router> component.");
	let t = e.useContext(X), { basename: n, navigator: r } = e.useContext(Z), { matches: i } = e.useContext(Q), { pathname: a } = $(), o = JSON.stringify(wt(i)), s = e.useRef(!1);
	return nn(() => {
		s.current = !0;
	}), e.useCallback((e, i = {}) => {
		if (q(s.current, tn), !s.current) return;
		if (typeof e == "number") {
			r.go(e);
			return;
		}
		let c = Tt(e, JSON.parse(o), a, i.relative === "path");
		t == null && n !== "/" && (c.pathname = c.pathname === "/" ? n : Y([n, c.pathname])), (i.replace ? r.replace : r.push)(c, i.state, i);
	}, [
		n,
		r,
		o,
		a,
		t
	]);
}
e.createContext(null);
function on(t, { relative: n } = {}) {
	let { matches: r } = e.useContext(Q), { pathname: i } = $(), a = JSON.stringify(wt(r));
	return e.useMemo(() => Tt(t, JSON.parse(a), i, n === "path"), [
		t,
		a,
		i,
		n
	]);
}
function sn(t, n, r) {
	K(en(), "useRoutes() may be used only in the context of a <Router> component.");
	let { navigator: i } = e.useContext(Z), { matches: a } = e.useContext(Q), o = a[a.length - 1], s = o ? o.params : {}, c = o ? o.pathname : "/", l = o ? o.pathnameBase : "/", u = o && o.route;
	{
		let e = u && u.path || "";
		En(c, !u || e.endsWith("*") || e.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === "/" ? "*" : `${e}/*`}">.`);
	}
	let d = $(), f;
	if (n) {
		let e = typeof n == "string" ? Qe(n) : n;
		K(l === "/" || e.pathname?.startsWith(l), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${e.pathname}" was given in the \`location\` prop.`), f = e;
	} else f = d;
	let p = f.pathname || "/", m = p;
	if (l !== "/") {
		let e = l.replace(/^\//, "").split("/");
		m = "/" + p.replace(/^\//, "").split("/").slice(e.length).join("/");
	}
	let h = r && r.state.matches.length ? r.state.matches.map((e) => Object.assign(e, { route: r.manifest[e.route.id] || e.route })) : $e(t, { pathname: m });
	q(u || h != null, `No routes matched location "${f.pathname}${f.search}${f.hash}" `), q(h == null || h[h.length - 1].route.element !== void 0 || h[h.length - 1].route.Component !== void 0 || h[h.length - 1].route.lazy !== void 0, `Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
	let g = mn(h && h.map((e) => Object.assign({}, e, {
		params: Object.assign({}, s, e.params),
		pathname: Y([l, i.encodeLocation ? i.encodeLocation(e.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathname]),
		pathnameBase: e.pathnameBase === "/" ? l : Y([l, i.encodeLocation ? i.encodeLocation(e.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathnameBase])
	})), a, r);
	return n && g ? /* @__PURE__ */ e.createElement(Kt.Provider, { value: {
		location: {
			pathname: "/",
			search: "",
			hash: "",
			state: null,
			key: "default",
			mask: void 0,
			...f
		},
		navigationType: "POP"
	} }, g) : g;
}
function cn() {
	let t = Cn(), n = Mt(t) ? `${t.status} ${t.statusText}` : t instanceof Error ? t.message : JSON.stringify(t), r = t instanceof Error ? t.stack : null, i = "rgba(200,200,200, 0.5)", a = {
		padding: "0.5rem",
		backgroundColor: i
	}, o = {
		padding: "2px 4px",
		backgroundColor: i
	}, s = null;
	return console.error("Error handled by React Router default ErrorBoundary:", t), s = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ e.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ e.createElement("code", { style: o }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ e.createElement("code", { style: o }, "errorElement"), " prop on your route.")), /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ e.createElement("h3", { style: { fontStyle: "italic" } }, n), r ? /* @__PURE__ */ e.createElement("pre", { style: a }, r) : null, s);
}
var ln = /* @__PURE__ */ e.createElement(cn, null), un = class extends e.Component {
	constructor(e) {
		super(e), this.state = {
			location: e.location,
			revalidation: e.revalidation,
			error: e.error
		};
	}
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	static getDerivedStateFromProps(e, t) {
		return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
			error: e.error,
			location: e.location,
			revalidation: e.revalidation
		} : {
			error: e.error === void 0 ? t.error : e.error,
			location: t.location,
			revalidation: e.revalidation || t.revalidation
		};
	}
	componentDidCatch(e, t) {
		this.props.onError ? this.props.onError(e, t) : console.error("React Router caught the following error during render", e);
	}
	render() {
		let t = this.state.error;
		if (this.context && typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
			let e = Qt(t.digest);
			e && (t = e);
		}
		let n = t === void 0 ? this.props.children : /* @__PURE__ */ e.createElement(Q.Provider, { value: this.props.routeContext }, /* @__PURE__ */ e.createElement(qt.Provider, {
			value: t,
			children: this.props.component
		}));
		return this.context ? /* @__PURE__ */ e.createElement(fn, { error: t }, n) : n;
	}
};
un.contextType = Vt;
var dn = /* @__PURE__ */ new WeakMap();
function fn({ children: t, error: n }) {
	let { basename: r } = e.useContext(Z);
	if (typeof n == "object" && n && "digest" in n && typeof n.digest == "string") {
		let t = Zt(n.digest);
		if (t) {
			let i = dn.get(n);
			if (i) throw i;
			let a = Ft(t.location, r), o = a.absoluteURL || a.to;
			if (zt(o)) throw Error("Invalid redirect location");
			if (Pt && !dn.get(n)) if (a.isExternal || t.reloadDocument) window.location.href = o;
			else {
				let e = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(a.to, { replace: t.replace }));
				throw dn.set(n, e), e;
			}
			return /* @__PURE__ */ e.createElement("meta", {
				httpEquiv: "refresh",
				content: `0;url=${o}`
			});
		}
	}
	return t;
}
function pn({ routeContext: t, match: n, children: r }) {
	let i = e.useContext(X);
	return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ e.createElement(Q.Provider, { value: t }, r);
}
function mn(t, n = [], r) {
	let i = r?.state;
	if (t == null) {
		if (!i) return null;
		if (i.errors) t = i.matches;
		else if (n.length === 0 && !i.initialized && i.matches.length > 0) t = i.matches;
		else return null;
	}
	let a = t, o = i?.errors;
	if (o != null) {
		let e = a.findIndex((e) => e.route.id && o?.[e.route.id] !== void 0);
		K(e >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`), a = a.slice(0, Math.min(a.length, e + 1));
	}
	let s = !1, c = -1;
	if (r && i) {
		s = i.renderFallback;
		for (let e = 0; e < a.length; e++) {
			let t = a[e];
			if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (c = e), t.route.id) {
				let { loaderData: e, errors: n } = i, o = t.route.loader && !e.hasOwnProperty(t.route.id) && (!n || n[t.route.id] === void 0);
				if (t.route.lazy || o) {
					r.isStatic && (s = !0), a = c >= 0 ? a.slice(0, c + 1) : [a[0]];
					break;
				}
			}
		}
	}
	let l = r?.onError, u = i && l ? (e, t) => {
		l(e, {
			location: i.location,
			params: i.matches?.[0]?.params ?? {},
			pattern: Nt(i.matches),
			errorInfo: t
		});
	} : void 0;
	return a.reduceRight((t, r, l) => {
		let d, f = !1, p = null, m = null;
		i && (d = o && r.route.id ? o[r.route.id] : void 0, p = r.route.errorElement || ln, s && (c < 0 && l === 0 ? (En("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), f = !0, m = null) : c === l && (f = !0, m = r.route.hydrateFallbackElement || null)));
		let h = n.concat(a.slice(0, l + 1)), g = () => {
			let n;
			return n = d ? p : f ? m : r.route.Component ? /* @__PURE__ */ e.createElement(r.route.Component, null) : r.route.element ? r.route.element : t, /* @__PURE__ */ e.createElement(pn, {
				match: r,
				routeContext: {
					outlet: t,
					matches: h,
					isDataRoute: i != null
				},
				children: n
			});
		};
		return i && (r.route.ErrorBoundary || r.route.errorElement || l === 0) ? /* @__PURE__ */ e.createElement(un, {
			location: i.location,
			revalidation: i.revalidation,
			component: p,
			error: d,
			children: g(),
			routeContext: {
				outlet: null,
				matches: h,
				isDataRoute: !0
			},
			onError: u
		}) : g();
	}, null);
}
function hn(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function gn(t) {
	let n = e.useContext(X);
	return K(n, hn(t)), n;
}
function _n(t) {
	let n = e.useContext(Bt);
	return K(n, hn(t)), n;
}
function vn(t) {
	let n = e.useContext(Q);
	return K(n, hn(t)), n;
}
function yn(e) {
	let t = vn(e), n = t.matches[t.matches.length - 1];
	return K(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id;
}
function bn() {
	return yn("useRouteId");
}
function xn() {
	let t = _n("useNavigation");
	return e.useMemo(() => {
		let { matches: e, historyAction: n, ...r } = t.navigation;
		return r;
	}, [t.navigation]);
}
function Sn() {
	let { matches: t, loaderData: n } = _n("useMatches");
	return e.useMemo(() => t.map((e) => tt(e, n)), [t, n]);
}
function Cn() {
	let t = e.useContext(qt), n = _n("useRouteError"), r = yn("useRouteError");
	return t === void 0 ? n.errors?.[r] : t;
}
function wn() {
	let { router: t } = gn("useNavigate"), n = yn("useNavigate"), r = e.useRef(!1);
	return nn(() => {
		r.current = !0;
	}), e.useCallback(async (e, i = {}) => {
		q(r.current, tn), r.current && (typeof e == "number" ? await t.navigate(e) : await t.navigate(e, {
			fromRouteId: n,
			...i
		}));
	}, [t, n]);
}
var Tn = {};
function En(e, t, n) {
	!t && !Tn[e] && (Tn[e] = !0, q(!1, n));
}
e.memo(Dn);
function Dn({ routes: e, manifest: t, future: n, state: r, isStatic: i, onError: a }) {
	return sn(e, void 0, {
		manifest: t,
		state: r,
		isStatic: i,
		onError: a,
		future: n
	});
}
function On({ basename: t = "/", children: n = null, location: r, navigationType: i = "POP", navigator: a, static: o = !1, useTransitions: s }) {
	K(!en(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
	let c = t.replace(/^\/*/, "/"), l = e.useMemo(() => ({
		basename: c,
		navigator: a,
		static: o,
		useTransitions: s,
		future: {}
	}), [
		c,
		a,
		o,
		s
	]);
	typeof r == "string" && (r = Qe(r));
	let { pathname: u = "/", search: d = "", hash: f = "", state: p = null, key: m = "default", mask: h } = r, g = e.useMemo(() => {
		let e = J(u, c);
		return e == null ? null : {
			location: {
				pathname: e,
				search: d,
				hash: f,
				state: p,
				key: m,
				mask: h
			},
			navigationType: i
		};
	}, [
		c,
		u,
		d,
		f,
		p,
		m,
		i,
		h
	]);
	return q(g != null, `<Router basename="${c}"> is not able to match the URL "${u}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`), g == null ? null : /* @__PURE__ */ e.createElement(Z.Provider, { value: l }, /* @__PURE__ */ e.createElement(Kt.Provider, {
		children: n,
		value: g
	}));
}
e.Component;
var kn = "get", An = "application/x-www-form-urlencoded";
function jn(e) {
	return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Mn(e) {
	return jn(e) && e.tagName.toLowerCase() === "button";
}
function Nn(e) {
	return jn(e) && e.tagName.toLowerCase() === "form";
}
function Pn(e) {
	return jn(e) && e.tagName.toLowerCase() === "input";
}
function Fn(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function In(e, t) {
	return e.button === 0 && (!t || t === "_self") && !Fn(e);
}
var Ln = null;
function Rn() {
	if (Ln === null) try {
		new FormData(document.createElement("form"), 0), Ln = !1;
	} catch {
		Ln = !0;
	}
	return Ln;
}
var zn = /* @__PURE__ */ new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain"
]);
function Bn(e) {
	return e != null && !zn.has(e) ? (q(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${An}"`), null) : e;
}
function Vn(e, t) {
	let n, r, i, a, o;
	if (Nn(e)) {
		let o = e.getAttribute("action");
		r = o ? J(o, t) : null, n = e.getAttribute("method") || kn, i = Bn(e.getAttribute("enctype")) || An, a = new FormData(e);
	} else if (Mn(e) || Pn(e) && (e.type === "submit" || e.type === "image")) {
		let o = e.form;
		if (o == null) throw Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
		let s = e.getAttribute("formaction") || o.getAttribute("action");
		if (r = s ? J(s, t) : null, n = e.getAttribute("formmethod") || o.getAttribute("method") || kn, i = Bn(e.getAttribute("formenctype")) || Bn(o.getAttribute("enctype")) || An, a = new FormData(o, e), !Rn()) {
			let { name: t, type: n, value: r } = e;
			if (n === "image") {
				let e = t ? `${t}.` : "";
				a.append(`${e}x`, "0"), a.append(`${e}y`, "0");
			} else t && a.append(t, r);
		}
	} else if (jn(e)) throw Error("Cannot submit element that is not <form>, <button>, or <input type=\"submit|image\">");
	else n = kn, r = null, i = An, o = e;
	return a && i === "text/plain" && (o = a, a = void 0), {
		action: r,
		method: n.toLowerCase(),
		encType: i,
		formData: a,
		body: o
	};
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Hn = {
	"&": "\\u0026",
	">": "\\u003e",
	"<": "\\u003c",
	"\u2028": "\\u2028",
	"\u2029": "\\u2029"
}, Un = /[&><\u2028\u2029]/g;
function Wn(e) {
	return e.replace(Un, (e) => Hn[e]);
}
function Gn(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function Kn(e, t, n, r) {
	let i = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
	return n ? i.pathname.endsWith("/") ? i.pathname = `${i.pathname}_.${r}` : i.pathname = `${i.pathname}.${r}` : i.pathname === "/" ? i.pathname = `_root.${r}` : t && J(i.pathname, t) === "/" ? i.pathname = `${Dt(t)}/_root.${r}` : i.pathname = `${Dt(i.pathname)}.${r}`, i;
}
async function qn(e, t) {
	if (e.id in t) return t[e.id];
	try {
		let n = await import(
			/* @vite-ignore */
			/* webpackIgnore: true */
			e.module
);
		return t[e.id] = n, n;
	} catch (t) {
		return console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(t), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {});
	}
}
function Jn(e) {
	return e != null && typeof e.page == "string";
}
function Yn(e) {
	return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function Xn(e, t, n) {
	return tr((await Promise.all(e.map(async (e) => {
		let r = t.routes[e.route.id];
		if (r) {
			let e = await qn(r, n);
			return e.links ? e.links() : [];
		}
		return [];
	}))).flat(1).filter(Yn).filter((e) => e.rel === "stylesheet" || e.rel === "preload").map((e) => e.rel === "stylesheet" ? {
		...e,
		rel: "prefetch",
		as: "style"
	} : {
		...e,
		rel: "prefetch"
	}));
}
function Zn(e, t, n, r, i, a) {
	let o = (e, t) => n[t] ? e.route.id !== n[t].route.id : !0, s = (e, t) => n[t].pathname !== e.pathname || n[t].route.path?.endsWith("*") && n[t].params["*"] !== e.params["*"];
	return a === "assets" ? t.filter((e, t) => o(e, t) || s(e, t)) : a === "data" ? t.filter((t, a) => {
		let c = r.routes[t.route.id];
		if (!c || !c.hasLoader) return !1;
		if (o(t, a) || s(t, a)) return !0;
		if (t.route.shouldRevalidate) {
			let r = t.route.shouldRevalidate({
				currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
				currentParams: n[0]?.params || {},
				nextUrl: new URL(e, window.origin),
				nextParams: t.params,
				defaultShouldRevalidate: !0
			});
			if (typeof r == "boolean") return r;
		}
		return !0;
	}) : [];
}
function Qn(e, t, { includeHydrateFallback: n } = {}) {
	return $n(e.map((e) => {
		let r = t.routes[e.route.id];
		if (!r) return [];
		let i = [r.module];
		return r.clientActionModule && (i = i.concat(r.clientActionModule)), r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)), n && r.hydrateFallbackModule && (i = i.concat(r.hydrateFallbackModule)), r.imports && (i = i.concat(r.imports)), i;
	}).flat(1));
}
function $n(e) {
	return [...new Set(e)];
}
function er(e) {
	let t = {}, n = Object.keys(e).sort();
	for (let r of n) t[r] = e[r];
	return t;
}
function tr(e, t) {
	let n = /* @__PURE__ */ new Set(), r = new Set(t);
	return e.reduce((e, i) => {
		if (t && !Jn(i) && i.as === "script" && i.href && r.has(i.href)) return e;
		let a = JSON.stringify(er(i));
		return n.has(a) || (n.add(a), e.push({
			key: a,
			link: i
		})), e;
	}, []);
}
function nr() {
	let t = e.useContext(X);
	return Gn(t, "You must render this element inside a <DataRouterContext.Provider> element"), t;
}
function rr() {
	let t = e.useContext(Bt);
	return Gn(t, "You must render this element inside a <DataRouterStateContext.Provider> element"), t;
}
var ir = e.createContext(void 0);
ir.displayName = "FrameworkContext";
function ar() {
	let t = e.useContext(ir);
	return Gn(t, "You must render this element inside a <HydratedRouter> element"), t;
}
function or(t, n) {
	let r = e.useContext(ir), [i, a] = e.useState(!1), [o, s] = e.useState(!1), { onFocus: c, onBlur: l, onMouseEnter: u, onMouseLeave: d, onTouchStart: f } = n, p = e.useRef(null);
	e.useEffect(() => {
		if (t === "render" && s(!0), t === "viewport") {
			let e = new IntersectionObserver((e) => {
				e.forEach((e) => {
					s(e.isIntersecting);
				});
			}, { threshold: .5 });
			return p.current && e.observe(p.current), () => {
				e.disconnect();
			};
		}
	}, [t]), e.useEffect(() => {
		if (i) {
			let e = setTimeout(() => {
				s(!0);
			}, 100);
			return () => {
				clearTimeout(e);
			};
		}
	}, [i]);
	let m = () => {
		a(!0);
	}, h = () => {
		a(!1), s(!1);
	};
	return r ? t === "intent" ? [
		o,
		p,
		{
			onFocus: sr(c, m),
			onBlur: sr(l, h),
			onMouseEnter: sr(u, m),
			onMouseLeave: sr(d, h),
			onTouchStart: sr(f, m)
		}
	] : [
		o,
		p,
		{}
	] : [
		!1,
		p,
		{}
	];
}
function sr(e, t) {
	return (n) => {
		e && e(n), n.defaultPrevented || t(n);
	};
}
function cr({ page: t, ...n }) {
	let r = Ht(), { nonce: i } = ar(), { router: a } = nr(), o = e.useMemo(() => $e(a.routes, t, a.basename), [
		a.routes,
		t,
		a.basename
	]);
	return o ? (n.nonce == null && i && (n = {
		...n,
		nonce: i
	}), r ? /* @__PURE__ */ e.createElement(ur, {
		page: t,
		matches: o,
		...n
	}) : /* @__PURE__ */ e.createElement(dr, {
		page: t,
		matches: o,
		...n
	})) : null;
}
function lr(t) {
	let { manifest: n, routeModules: r } = ar(), [i, a] = e.useState([]);
	return e.useEffect(() => {
		let e = !1;
		return Xn(t, n, r).then((t) => {
			e || a(t);
		}), () => {
			e = !0;
		};
	}, [
		t,
		n,
		r
	]), i;
}
function ur({ page: t, matches: n, ...r }) {
	let i = $(), { future: a } = ar(), { basename: o } = nr(), s = e.useMemo(() => {
		if (t === i.pathname + i.search + i.hash) return [];
		let e = Kn(t, o, a.v8_trailingSlashAwareDataRequests, "rsc"), r = !1, s = [];
		for (let e of n) typeof e.route.shouldRevalidate == "function" ? r = !0 : s.push(e.route.id);
		return r && s.length > 0 && e.searchParams.set("_routes", s.join(",")), [e.pathname + e.search];
	}, [
		o,
		a.v8_trailingSlashAwareDataRequests,
		t,
		i,
		n
	]);
	return /* @__PURE__ */ e.createElement(e.Fragment, null, s.map((t) => /* @__PURE__ */ e.createElement("link", {
		key: t,
		rel: "prefetch",
		as: "fetch",
		href: t,
		...r
	})));
}
function dr({ page: t, matches: n, ...r }) {
	let i = $(), { future: a, manifest: o, routeModules: s } = ar(), { basename: c } = nr(), { loaderData: l, matches: u } = rr(), d = e.useMemo(() => Zn(t, n, u, o, i, "data"), [
		t,
		n,
		u,
		o,
		i
	]), f = e.useMemo(() => Zn(t, n, u, o, i, "assets"), [
		t,
		n,
		u,
		o,
		i
	]), p = e.useMemo(() => {
		if (t === i.pathname + i.search + i.hash) return [];
		let e = /* @__PURE__ */ new Set(), r = !1;
		if (n.forEach((t) => {
			let n = o.routes[t.route.id];
			!n || !n.hasLoader || (!d.some((e) => e.route.id === t.route.id) && t.route.id in l && s[t.route.id]?.shouldRevalidate || n.hasClientLoader ? r = !0 : e.add(t.route.id));
		}), e.size === 0) return [];
		let u = Kn(t, c, a.v8_trailingSlashAwareDataRequests, "data");
		return r && e.size > 0 && u.searchParams.set("_routes", n.filter((t) => e.has(t.route.id)).map((e) => e.route.id).join(",")), [u.pathname + u.search];
	}, [
		c,
		a.v8_trailingSlashAwareDataRequests,
		l,
		i,
		o,
		d,
		n,
		t,
		s
	]), m = e.useMemo(() => Qn(f, o), [f, o]), h = lr(f);
	return /* @__PURE__ */ e.createElement(e.Fragment, null, p.map((t) => /* @__PURE__ */ e.createElement("link", {
		key: t,
		rel: "prefetch",
		as: "fetch",
		href: t,
		...r
	})), m.map((t) => /* @__PURE__ */ e.createElement("link", {
		key: t,
		rel: "modulepreload",
		href: t,
		...r
	})), h.map(({ key: t, link: n }) => /* @__PURE__ */ e.createElement("link", {
		key: t,
		nonce: r.nonce,
		...n,
		crossOrigin: n.crossOrigin ?? r.crossOrigin
	})));
}
function fr(...e) {
	return (t) => {
		e.forEach((e) => {
			typeof e == "function" ? e(t) : e != null && (e.current = t);
		});
	};
}
e.Component;
var pr = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
try {
	pr && (window.__reactRouterVersion = "7.18.0");
} catch {}
function mr({ basename: t, children: n, history: r, useTransitions: i }) {
	let [a, o] = e.useState({
		action: r.action,
		location: r.location
	}), s = e.useCallback((t) => {
		i === !1 ? o(t) : e.startTransition(() => o(t));
	}, [i]);
	return e.useLayoutEffect(() => r.listen(s), [r, s]), /* @__PURE__ */ e.createElement(On, {
		basename: t,
		children: n,
		location: a.location,
		navigationType: a.action,
		navigator: r,
		useTransitions: i
	});
}
mr.displayName = "unstable_HistoryRouter";
var hr = e.forwardRef(function({ onClick: t, discover: n = "render", prefetch: r = "none", relative: i, reloadDocument: a, replace: o, mask: s, state: c, target: l, to: u, preventScrollReset: d, viewTransition: f, defaultShouldRevalidate: p, ...m }, h) {
	let { basename: g, navigator: _, useTransitions: v } = e.useContext(Z), y = typeof u == "string" && Je.test(u), b = Ft(u, g);
	u = b.to;
	let x = $t(u, { relative: i }), S = $(), C = null;
	if (s) {
		let e = Tt(s, [], S.mask ? S.mask.pathname : "/", !0);
		g !== "/" && (e.pathname = e.pathname === "/" ? g : Y([g, e.pathname])), C = _.createHref(e);
	}
	let [w, T, ee] = or(r, m), te = Sr(u, {
		replace: o,
		mask: s,
		state: c,
		target: l,
		preventScrollReset: d,
		relative: i,
		viewTransition: f,
		defaultShouldRevalidate: p,
		useTransitions: v
	});
	function E(e) {
		t && t(e), e.defaultPrevented || te(e);
	}
	let ne = !(b.isExternal || a), D = /* @__PURE__ */ e.createElement("a", {
		...m,
		...ee,
		href: (ne ? C : void 0) || b.absoluteURL || x,
		onClick: ne ? E : t,
		ref: fr(h, T),
		target: l,
		"data-discover": !y && n === "render" ? "true" : void 0
	});
	return w && !y ? /* @__PURE__ */ e.createElement(e.Fragment, null, D, /* @__PURE__ */ e.createElement(cr, { page: x })) : D;
});
hr.displayName = "Link";
var gr = e.forwardRef(function({ "aria-current": t = "page", caseSensitive: n = !1, className: r = "", end: i = !1, style: a, to: o, viewTransition: s, children: c, ...l }, u) {
	let d = on(o, { relative: l.relative }), f = $(), p = e.useContext(Bt), { navigator: m, basename: h } = e.useContext(Z), g = p != null && Mr(d) && s === !0, _ = m.encodeLocation ? m.encodeLocation(d).pathname : d.pathname, v = f.pathname, y = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
	n || (v = v.toLowerCase(), y = y ? y.toLowerCase() : null, _ = _.toLowerCase()), y && h && (y = J(y, h) || y);
	let b = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length, x = v === _ || !i && v.startsWith(_) && v.charAt(b) === "/", S = y != null && (y === _ || !i && y.startsWith(_) && y.charAt(_.length) === "/"), C = {
		isActive: x,
		isPending: S,
		isTransitioning: g
	}, w = x ? t : void 0, T;
	T = typeof r == "function" ? r(C) : [
		r,
		x ? "active" : null,
		S ? "pending" : null,
		g ? "transitioning" : null
	].filter(Boolean).join(" ");
	let ee = typeof a == "function" ? a(C) : a;
	return /* @__PURE__ */ e.createElement(hr, {
		...l,
		"aria-current": w,
		className: T,
		ref: u,
		style: ee,
		to: o,
		viewTransition: s
	}, typeof c == "function" ? c(C) : c);
});
gr.displayName = "NavLink";
var _r = e.forwardRef(({ discover: t = "render", fetcherKey: n, navigate: r, reloadDocument: i, replace: a, state: o, method: s = kn, action: c, onSubmit: l, relative: u, preventScrollReset: d, viewTransition: f, defaultShouldRevalidate: p, ...m }, h) => {
	let { useTransitions: g } = e.useContext(Z), _ = Tr(), v = Er(c, { relative: u }), y = s.toLowerCase() === "get" ? "get" : "post", b = typeof c == "string" && Je.test(c);
	return /* @__PURE__ */ e.createElement("form", {
		ref: h,
		method: y,
		action: v,
		onSubmit: i ? l : (t) => {
			if (l && l(t), t.defaultPrevented) return;
			t.preventDefault();
			let i = t.nativeEvent.submitter, c = i?.getAttribute("formmethod") || s, m = () => _(i || t.currentTarget, {
				fetcherKey: n,
				method: c,
				navigate: r,
				replace: a,
				state: o,
				relative: u,
				preventScrollReset: d,
				viewTransition: f,
				defaultShouldRevalidate: p
			});
			g && r !== !1 ? e.startTransition(() => m()) : m();
		},
		...m,
		"data-discover": !b && t === "render" ? "true" : void 0
	});
});
_r.displayName = "Form";
function vr({ getKey: t, storageKey: n, ...r }) {
	let i = e.useContext(ir), { basename: a } = e.useContext(Z), o = $(), s = Sn();
	Ar({
		getKey: t,
		storageKey: n
	});
	let c = e.useMemo(() => {
		if (!i || !t) return null;
		let e = kr(o, s, a, t);
		return e === o.key ? null : e;
	}, []);
	if (!i || i.isSpaMode) return null;
	let l = ((e, t) => {
		if (!window.history.state || !window.history.state.key) {
			let e = Math.random().toString(32).slice(2);
			window.history.replaceState({ key: e }, "");
		}
		try {
			let n = JSON.parse(sessionStorage.getItem(e) || "{}")[t || window.history.state.key];
			typeof n == "number" && window.scrollTo(0, n);
		} catch (t) {
			console.error(t), sessionStorage.removeItem(e);
		}
	}).toString();
	return r.nonce == null && i?.nonce && (r.nonce = i.nonce), /* @__PURE__ */ e.createElement("script", {
		...r,
		suppressHydrationWarning: !0,
		dangerouslySetInnerHTML: { __html: `(${l})(${Wn(JSON.stringify(n || Dr))}, ${Wn(JSON.stringify(c))})` }
	});
}
vr.displayName = "ScrollRestoration";
function yr(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function br(t) {
	let n = e.useContext(X);
	return K(n, yr(t)), n;
}
function xr(t) {
	let n = e.useContext(Bt);
	return K(n, yr(t)), n;
}
function Sr(t, { target: n, replace: r, mask: i, state: a, preventScrollReset: o, relative: s, viewTransition: c, defaultShouldRevalidate: l, useTransitions: u } = {}) {
	let d = rn(), f = $(), p = on(t, { relative: s });
	return e.useCallback((m) => {
		if (In(m, n)) {
			m.preventDefault();
			let n = r === void 0 ? Ze(f) === Ze(p) : r, h = () => d(t, {
				replace: n,
				mask: i,
				state: a,
				preventScrollReset: o,
				relative: s,
				viewTransition: c,
				defaultShouldRevalidate: l
			});
			u ? e.startTransition(() => h()) : h();
		}
	}, [
		f,
		d,
		p,
		r,
		i,
		a,
		n,
		t,
		o,
		s,
		c,
		l,
		u
	]);
}
var Cr = 0, wr = () => `__${String(++Cr)}__`;
function Tr() {
	let { router: t } = br("useSubmit"), { basename: n } = e.useContext(Z), r = bn(), i = t.fetch, a = t.navigate;
	return e.useCallback(async (e, t = {}) => {
		let { action: o, method: s, encType: c, formData: l, body: u } = Vn(e, n);
		t.navigate === !1 ? await i(t.fetcherKey || wr(), r, t.action || o, {
			defaultShouldRevalidate: t.defaultShouldRevalidate,
			preventScrollReset: t.preventScrollReset,
			formData: l,
			body: u,
			formMethod: t.method || s,
			formEncType: t.encType || c,
			flushSync: t.flushSync
		}) : await a(t.action || o, {
			defaultShouldRevalidate: t.defaultShouldRevalidate,
			preventScrollReset: t.preventScrollReset,
			formData: l,
			body: u,
			formMethod: t.method || s,
			formEncType: t.encType || c,
			replace: t.replace,
			state: t.state,
			fromRouteId: r,
			flushSync: t.flushSync,
			viewTransition: t.viewTransition
		});
	}, [
		i,
		a,
		n,
		r
	]);
}
function Er(t, { relative: n } = {}) {
	let { basename: r } = e.useContext(Z), i = e.useContext(Q);
	K(i, "useFormAction must be used inside a RouteContext");
	let [a] = i.matches.slice(-1), o = { ...on(t || ".", { relative: n }) }, s = $();
	if (t == null) {
		o.search = s.search;
		let e = new URLSearchParams(o.search), t = e.getAll("index");
		if (t.some((e) => e === "")) {
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			o.search = n ? `?${n}` : "";
		}
	}
	return (!t || t === ".") && a.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (o.pathname = o.pathname === "/" ? r : Y([r, o.pathname])), Ze(o);
}
var Dr = "react-router-scroll-positions", Or = {};
function kr(e, t, n, r) {
	let i = null;
	return r && (i = r(n === "/" ? e : {
		...e,
		pathname: J(e.pathname, n) || e.pathname
	}, t)), i ??= e.key, i;
}
function Ar({ getKey: t, storageKey: n } = {}) {
	let { router: r } = br("useScrollRestoration"), { restoreScrollPosition: i, preventScrollReset: a } = xr("useScrollRestoration"), { basename: o } = e.useContext(Z), s = $(), c = Sn(), l = xn();
	e.useEffect(() => (window.history.scrollRestoration = "manual", () => {
		window.history.scrollRestoration = "auto";
	}), []), jr(e.useCallback(() => {
		if (l.state === "idle") {
			let e = kr(s, c, o, t);
			Or[e] = window.scrollY;
		}
		try {
			sessionStorage.setItem(n || Dr, JSON.stringify(Or));
		} catch (e) {
			q(!1, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`);
		}
		window.history.scrollRestoration = "auto";
	}, [
		l.state,
		t,
		o,
		s,
		c,
		n
	])), typeof document < "u" && (e.useLayoutEffect(() => {
		try {
			let e = sessionStorage.getItem(n || Dr);
			e && (Or = JSON.parse(e));
		} catch {}
	}, [n]), e.useLayoutEffect(() => {
		let e = r?.enableScrollRestoration(Or, () => window.scrollY, t ? (e, n) => kr(e, n, o, t) : void 0);
		return () => e && e();
	}, [
		r,
		o,
		t
	]), e.useLayoutEffect(() => {
		if (i !== !1) {
			if (typeof i == "number") {
				window.scrollTo(0, i);
				return;
			}
			try {
				if (s.hash) {
					let e = document.getElementById(decodeURIComponent(s.hash.slice(1)));
					if (e) {
						e.scrollIntoView();
						return;
					}
				}
			} catch {
				q(!1, `"${s.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
			}
			a !== !0 && window.scrollTo(0, 0);
		}
	}, [
		s,
		i,
		a
	]));
}
function jr(t, n) {
	let { capture: r } = n || {};
	e.useEffect(() => {
		let e = r == null ? void 0 : { capture: r };
		return window.addEventListener("pagehide", t, e), () => {
			window.removeEventListener("pagehide", t, e);
		};
	}, [t, r]);
}
function Mr(t, { relative: n } = {}) {
	let r = e.useContext(Ut);
	K(r != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	let { basename: i } = br("useViewTransitionState"), a = on(t, { relative: n });
	if (!r.isTransitioning) return !1;
	let o = J(r.currentLocation.pathname, i) || r.currentLocation.pathname, s = J(r.nextLocation.pathname, i) || r.nextLocation.pathname;
	return gt(a.pathname, s) != null || gt(a.pathname, o) != null;
}
//#endregion
//#region src/components/AnimateIn/AnimateIn.tsx
function Nr(e) {
	let r = (0, c.c)(16), i, a, o, s, l;
	r[0] === e ? (i = r[1], a = r[2], o = r[3], s = r[4], l = r[5]) : ({children: i, className: a, variant: s, size: l, ...o} = e, r[0] = e, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = l);
	let u = s === void 0 ? "solid" : s, d = l === void 0 ? "md" : l, f = {
		solid: "bg-primary-main text-white",
		glow: " bg-primary-main brightness-200 border-accent-main/30 text-black glow-md",
		inset: "inset-shadow-sm inset-shadow-black/70 bg-primary-main bg-linear-to-t from-white/5 to-white/0 text-white"
	}, p = {
		sm: "p-4 text-sm",
		md: "p-6 text-base",
		lg: "p-8 text-lg"
	}, m = $(), h, g;
	r[6] === Symbol.for("react.memo_cache_sentinel") ? (h = {
		opacity: 0,
		y: 12,
		scale: .99
	}, g = {
		opacity: 1,
		y: 0,
		scale: 1
	}, r[6] = h, r[7] = g) : (h = r[6], g = r[7]);
	let _;
	r[8] === Symbol.for("react.memo_cache_sentinel") ? (_ = {
		initial: h,
		animate: g,
		transition: {
			duration: .4,
			ease: [
				.215,
				.61,
				.355,
				1
			]
		}
	}, r[8] = _) : _ = r[8];
	let v = _, y = t, b = m.pathname, x = G("rounded-lg", f[u], p[d], a), S;
	return r[9] !== i || r[10] !== v || r[11] !== m.pathname || r[12] !== o || r[13] !== y.div || r[14] !== x ? (S = /* @__PURE__ */ n(y.div, {
		...v,
		className: x,
		...o,
		children: i
	}, b), r[9] = i, r[10] = v, r[11] = m.pathname, r[12] = o, r[13] = y.div, r[14] = x, r[15] = S) : S = r[15], S;
}
//#endregion
//#region src/components/Badge/Badge.tsx
function Pr(e) {
	let r = (0, c.c)(19), i, a, o, s, l;
	r[0] === e ? (i = r[1], a = r[2], o = r[3], s = r[4], l = r[5]) : ({children: i, className: a, variant: s, size: l, ...o} = e, r[0] = e, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = l);
	let u = s === void 0 ? "solid" : s, d = l === void 0 ? "md" : l, f, p, m;
	if (r[6] !== a || r[7] !== d || r[8] !== u) {
		let e = {
			solid: " bg-white/5 text-accent-main text-xs",
			success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
			warning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
			error: "bg-rose-500/10 text-rose-400 border-rose-500/20"
		}, n = {
			sm: "Tamaños tailwind",
			md: "Tamaños tailwind",
			lg: "Tamaños tailwind"
		}, i;
		r[12] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			whileHover: { scale: 1.02 },
			whileTap: { scale: .98 },
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 15
			}
		}, r[12] = i) : i = r[12];
		let o = i;
		f = t.span, p = o, m = G("rounded px-1.5 py-0.5 font-mono font-mono", e[u], n[d], a), r[6] = a, r[7] = d, r[8] = u, r[9] = f, r[10] = p, r[11] = m;
	} else f = r[9], p = r[10], m = r[11];
	let h;
	return r[13] !== f || r[14] !== i || r[15] !== o || r[16] !== p || r[17] !== m ? (h = /* @__PURE__ */ n(f, {
		...p,
		className: m,
		...o,
		children: i
	}), r[13] = f, r[14] = i, r[15] = o, r[16] = p, r[17] = m, r[18] = h) : h = r[18], h;
}
//#endregion
//#region src/components/Button/Button.tsx
function Fr(e) {
	let r = (0, c.c)(19), i, a, o, s, l;
	r[0] === e ? (i = r[1], a = r[2], o = r[3], s = r[4], l = r[5]) : ({children: i, className: a, variant: s, size: l, ...o} = e, r[0] = e, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = l);
	let u = s === void 0 ? "solid" : s, d = l === void 0 ? "md" : l, f, p, m;
	if (r[6] !== a || r[7] !== d || r[8] !== u) {
		let e = {
			solid: "bg-accent-main text-primary-main",
			glow: " bg-accent-main border-2 border-black/30 text-primary-main glow-bottom",
			inset: "inset-shadow-sm inset-shadow-black/70 bg-primary-main bg-linear-to-t from-white/5 to-white/0 text-white"
		}, n = {
			sm: "px-3 py-1.5 text-sm",
			md: "px-5 py-2.5 text-base",
			lg: "px-7 py-3.5 text-lg"
		}, i;
		r[12] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			initial: {
				opacity: 0,
				scale: 0
			},
			animate: {
				opacity: 1,
				scale: 1
			},
			whileHover: {
				scale: 1.02,
				filter: "brightness(120%)"
			},
			whileTap: {
				scale: .98,
				filter: "brightness(150%)"
			},
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 15
			}
		}, r[12] = i) : i = r[12];
		let o = i;
		f = t.button, p = o, m = G("m-5 inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none cursor-pointer", e[u], n[d], a), r[6] = a, r[7] = d, r[8] = u, r[9] = f, r[10] = p, r[11] = m;
	} else f = r[9], p = r[10], m = r[11];
	let h;
	return r[13] !== f || r[14] !== i || r[15] !== o || r[16] !== p || r[17] !== m ? (h = /* @__PURE__ */ n(f, {
		...p,
		className: m,
		...o,
		children: i
	}), r[13] = f, r[14] = i, r[15] = o, r[16] = p, r[17] = m, r[18] = h) : h = r[18], h;
}
//#endregion
//#region src/components/Callout/Callout.tsx
function Ir(e) {
	let r = (0, c.c)(19), i, a, o, s, l;
	r[0] === e ? (i = r[1], a = r[2], o = r[3], s = r[4], l = r[5]) : ({children: i, className: a, variant: s, size: l, ...o} = e, r[0] = e, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = l);
	let u = s === void 0 ? "solid" : s, d = l === void 0 ? "md" : l, f, p, m;
	if (r[6] !== a || r[7] !== d || r[8] !== u) {
		let e = {
			solid: "bg-accent-main text-primary-main",
			glow: "bg-accent-main/5 border border-accent-main/10 ",
			inset: "inset-shadow-sm inset-shadow-black/70 bg-primary-main bg-linear-to-t from-white/5 to-white/0 text-white"
		}, n = {
			sm: "w-auto h-auto",
			md: "w-auto h-auto",
			lg: "w-auto h-auto"
		}, i;
		r[12] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			initial: {
				opacity: 0,
				scale: 0
			},
			whileInView: {
				opacity: 1,
				scale: 1
			},
			viewport: {
				once: !0,
				margin: "-50px"
			},
			whileHover: { y: -4 },
			transition: {
				duration: 1.5,
				type: "spring"
			}
		}, r[12] = i) : i = r[12];
		let o = i;
		f = t.div, p = o, m = G("transition-colors m-5 p-4 rounded-xl space-y-4", e[u], n[d], a), r[6] = a, r[7] = d, r[8] = u, r[9] = f, r[10] = p, r[11] = m;
	} else f = r[9], p = r[10], m = r[11];
	let h;
	return r[13] !== f || r[14] !== i || r[15] !== o || r[16] !== p || r[17] !== m ? (h = /* @__PURE__ */ n(f, {
		...p,
		className: m,
		...o,
		children: i
	}), r[13] = f, r[14] = i, r[15] = o, r[16] = p, r[17] = m, r[18] = h) : h = r[18], h;
}
//#endregion
//#region src/components/Card/Card.tsx
function Lr(e) {
	let r = (0, c.c)(19), i, a, o, s, l;
	r[0] === e ? (i = r[1], a = r[2], o = r[3], s = r[4], l = r[5]) : ({children: i, className: a, variant: s, size: l, ...o} = e, r[0] = e, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = l);
	let u = s === void 0 ? "solid" : s, d = l === void 0 ? "md" : l, f, p, m;
	if (r[6] !== a || r[7] !== d || r[8] !== u) {
		let e = {
			solid: "bg-accent-main text-primary-main",
			glow: "bg-accent-main border-2 border-black/50 text-primary-main glow-bottom",
			inset: "inset-shadow-sm inset-shadow-black/70 bg-primary-main bg-linear-to-t from-white/5 to-white/0 text-white"
		}, n = {
			sm: "w-20 h-auto",
			md: "w-50 h-auto",
			lg: "w-100 h-auto"
		}, i;
		r[12] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			initial: {
				opacity: 0,
				scale: 0
			},
			whileInView: {
				opacity: 1,
				scale: 1
			},
			viewport: {
				once: !0,
				margin: "-50px"
			},
			whileHover: { y: -4 },
			transition: {
				duration: 1.5,
				type: "spring"
			}
		}, r[12] = i) : i = r[12];
		let o = i;
		f = t.div, p = o, m = G("transition-colors m-5 p-5 rounded-lg", e[u], n[d], a), r[6] = a, r[7] = d, r[8] = u, r[9] = f, r[10] = p, r[11] = m;
	} else f = r[9], p = r[10], m = r[11];
	let h;
	return r[13] !== f || r[14] !== i || r[15] !== o || r[16] !== p || r[17] !== m ? (h = /* @__PURE__ */ n(f, {
		...p,
		className: m,
		...o,
		children: i
	}), r[13] = f, r[14] = i, r[15] = o, r[16] = p, r[17] = m, r[18] = h) : h = r[18], h;
}
//#endregion
//#region src/components/InlineCode/InlineCode.tsx
function Rr(e) {
	let r = (0, c.c)(19), i, a, o, s, l;
	r[0] === e ? (i = r[1], a = r[2], o = r[3], s = r[4], l = r[5]) : ({children: i, className: a, variant: s, size: l, ...o} = e, r[0] = e, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = l);
	let u = s === void 0 ? "solid" : s, d = l === void 0 ? "md" : l, f, p, m;
	if (r[6] !== a || r[7] !== d || r[8] !== u) {
		let e = {
			solid: " bg-white/5 text-accent-main text-xs",
			terminal: "text-emerald-500 bg-emerald-950 border-b-emerald-700 font-bold"
		}, n = {
			sm: "Tamaños tailwind",
			md: "Tamaños tailwind",
			lg: "Tamaños tailwind"
		}, i;
		r[12] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			whileHover: { scale: 1.02 },
			whileTap: { scale: .98 },
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 15
			}
		}, r[12] = i) : i = r[12];
		let o = i;
		f = t.code, p = o, m = G("rounded px-1.5 py-0.5 font-mono font-mono", e[u], n[d], a), r[6] = a, r[7] = d, r[8] = u, r[9] = f, r[10] = p, r[11] = m;
	} else f = r[9], p = r[10], m = r[11];
	let h;
	return r[13] !== f || r[14] !== i || r[15] !== o || r[16] !== p || r[17] !== m ? (h = /* @__PURE__ */ n(f, {
		...p,
		className: m,
		...o,
		children: i
	}), r[13] = f, r[14] = i, r[15] = o, r[16] = p, r[17] = m, r[18] = h) : h = r[18], h;
}
//#endregion
//#region src/components/Sidebar/Sidebar.tsx
function zr(e) {
	let r = (0, c.c)(19), i, a, o, s, l;
	r[0] === e ? (i = r[1], a = r[2], o = r[3], s = r[4], l = r[5]) : ({children: i, className: a, variant: s, size: l, ...o} = e, r[0] = e, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = l);
	let u = s === void 0 ? "solid" : s, d = l === void 0 ? "md" : l, f, p, m;
	if (r[6] !== a || r[7] !== d || r[8] !== u) {
		let e = {
			solid: "bg-primary-main text-primary-main",
			glow: " bg-accent-main border-2 border-black/30 text-primary-main glow-bottom",
			inset: "inset-shadow-sm inset-shadow-black/70 bg-primary-main bg-linear-to-t from-white/5 to-white/0 text-white"
		}, n = {
			sm: "w-56",
			md: "w-64",
			lg: "w-72"
		}, i;
		r[12] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			initial: {
				x: -20,
				opacity: 0
			},
			whileInView: {
				x: 0,
				opacity: 1
			},
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 20
			}
		}, r[12] = i) : i = r[12];
		let o = i;
		f = t.aside, p = o, m = G("sticky top-0 left-0 h-screen shrink-0 overflow-y-auto p-6 border-r border-white/5 transition-all duration-300", e[u], n[d], a), r[6] = a, r[7] = d, r[8] = u, r[9] = f, r[10] = p, r[11] = m;
	} else f = r[9], p = r[10], m = r[11];
	let h;
	return r[13] !== f || r[14] !== i || r[15] !== o || r[16] !== p || r[17] !== m ? (h = /* @__PURE__ */ n(f, {
		...p,
		className: m,
		...o,
		children: i
	}), r[13] = f, r[14] = i, r[15] = o, r[16] = p, r[17] = m, r[18] = h) : h = r[18], h;
}
//#endregion
//#region src/components/Sidebar/SidebarLink.tsx
function Br(e) {
	let i = (0, c.c)(13), { href: a, label: o, isActive: s, as: l } = e, u = l === void 0 ? "a" : l, d;
	i[0] !== u || i[1] !== a ? (d = u === "a" ? { href: a } : { to: a }, i[0] = u, i[1] = a, i[2] = d) : d = i[2];
	let f = s ? "text-accent-main font-semibold" : "text-white/70 hover:text-white", p;
	i[3] === f ? p = i[4] : (p = G("relative block rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 z-10", f), i[3] = f, i[4] = p);
	let m;
	i[5] === s ? m = i[6] : (m = s && /* @__PURE__ */ n(t.div, {
		layoutId: "activeIndicator",
		className: "absolute inset-0 -z-10 rounded-lg bg-accent-main/10 border-l-2 border-accent-main",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition: {
			type: "spring",
			stiffness: 380,
			damping: 30
		}
	}), i[5] = s, i[6] = m);
	let h;
	return i[7] !== u || i[8] !== o || i[9] !== d || i[10] !== p || i[11] !== m ? (h = /* @__PURE__ */ n("li", {
		className: "relative",
		children: /* @__PURE__ */ r(u, {
			...d,
			className: p,
			children: [o, m]
		})
	}), i[7] = u, i[8] = o, i[9] = d, i[10] = p, i[11] = m, i[12] = h) : h = i[12], h;
}
//#endregion
//#region src/components/Sidebar/SidebarMenu.tsx
function Vr(e) {
	let t = (0, c.c)(11), { sections: i, currentPath: a, linkComponent: o, onClick: s } = e, l;
	if (t[0] !== a || t[1] !== o || t[2] !== s || t[3] !== i) {
		let e;
		t[5] !== a || t[6] !== o || t[7] !== s ? (e = (e) => /* @__PURE__ */ r("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ n("h4", {
				className: "-ml-4 px-3 text-1xl font-bold uppercase tracking-widest text-white",
				children: e.title
			}), /* @__PURE__ */ n("ul", {
				className: "space-y-1",
				onClick: s,
				children: e.items.map((e) => /* @__PURE__ */ n(Br, {
					href: e.href,
					label: e.label,
					isActive: a === e.href,
					as: o
				}, e.href))
			})]
		}, e.title), t[5] = a, t[6] = o, t[7] = s, t[8] = e) : e = t[8], l = i.map(e), t[0] = a, t[1] = o, t[2] = s, t[3] = i, t[4] = l;
	} else l = t[4];
	let u;
	return t[9] === l ? u = t[10] : (u = /* @__PURE__ */ n("nav", {
		className: "space-y-6",
		children: l
	}), t[9] = l, t[10] = u), u;
}
//#endregion
//#region src/components/StepBadge/StepBadge.tsx
function Hr(e) {
	let r = (0, c.c)(19), i, a, o, s, l;
	r[0] === e ? (i = r[1], a = r[2], o = r[3], s = r[4], l = r[5]) : ({children: i, className: a, variant: s, size: l, ...o} = e, r[0] = e, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = l);
	let u = s === void 0 ? "solid" : s, d = l === void 0 ? "md" : l, f, p, m;
	if (r[6] !== a || r[7] !== d || r[8] !== u) {
		let e = {
			solid: "bg-accent-main text-primary-main",
			glow: " bg-accent-main/10 text-accent-main border border-accent-main/20 glow-bottom",
			inset: "inset-shadow-sm inset-shadow-black/70 bg-primary-main bg-linear-to-t from-white/5 to-white/0 text-white"
		}, n = {
			sm: "Tamaños tailwind",
			md: "Tamaños tailwind",
			lg: "Tamaños tailwind"
		}, i;
		r[12] === Symbol.for("react.memo_cache_sentinel") ? (i = {
			whileHover: { scale: 1.02 },
			whileTap: { scale: .98 },
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 15
			}
		}, r[12] = i) : i = r[12];
		let o = i;
		f = t.div, p = o, m = G("flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-bold text-xs font-mono", e[u], n[d], a), r[6] = a, r[7] = d, r[8] = u, r[9] = f, r[10] = p, r[11] = m;
	} else f = r[9], p = r[10], m = r[11];
	let h;
	return r[13] !== f || r[14] !== i || r[15] !== o || r[16] !== p || r[17] !== m ? (h = /* @__PURE__ */ n(f, {
		...p,
		className: m,
		...o,
		children: i
	}), r[13] = f, r[14] = i, r[15] = o, r[16] = p, r[17] = m, r[18] = h) : h = r[18], h;
}
//#endregion
export { Nr as AnimateIn, Pr as Badge, Fr as Button, Ir as Callout, Lr as Card, Rr as Inlinecode, zr as Sidebar, Br as SidebarLink, Vr as SidebarMenu, Hr as StepBadge };
