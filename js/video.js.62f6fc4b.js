(window.webpackJsonp = window.webpackJsonp || []).push([
    ["video.js"], {
        1: function(e, t) {},
        be09: function(e, t, n) {
            (function(t) {
                var n;
                n = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = n
            }).call(this, n("c8ba"))
        },
        cb8d: function(e, t, n) {
            e.exports = function(e, t) {
                e = e && e.hasOwnProperty("default") ? e.default : e, t = t && t.hasOwnProperty("default") ? t.default : t;
                var n = "7.6.0";

                function r(e, t) {
                    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
                }

                function i(e, t) {
                    return (i = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function o(e, t, n) {
                    return (o = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }() ? Reflect.construct : function(e, t, n) {
                        var r = [null];
                        r.push.apply(r, t);
                        var o = Function.bind.apply(e, r),
                            s = new o;
                        return n && i(s, n.prototype), s
                    }).apply(null, arguments)
                }

                function s(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function a(e, t) {
                    return t || (t = e.slice(0)), e.raw = t, e
                }
                var l = [],
                    c = function(t, n) {
                        return function(r, i, o) {
                            var s = n.levels[i],
                                a = new RegExp("^(" + s + ")$");
                            if ("log" !== r && o.unshift(r.toUpperCase() + ":"), o.unshift(t + ":"), l && l.push([].concat(o)), e.console) {
                                var c = e.console[r];
                                c || "debug" !== r || (c = e.console.info || e.console.log), c && s && a.test(r) && c[Array.isArray(o) ? "apply" : "call"](e.console, o)
                            }
                        }
                    },
                    u = function e(t) {
                        var n, r = "info",
                            i = function() {
                                for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                                n("log", r, t)
                            };
                        return n = c(t, i), i.createLogger = function(n) {
                            return e(t + ": " + n)
                        }, i.levels = {
                            all: "debug|log|warn|error",
                            off: "",
                            debug: "debug|log|warn|error",
                            info: "log|warn|error",
                            warn: "warn|error",
                            error: "error",
                            DEFAULT: r
                        }, i.level = function(e) {
                            if ("string" == typeof e) {
                                if (!i.levels.hasOwnProperty(e)) throw new Error('"' + e + '" in not a valid log level');
                                r = e
                            }
                            return r
                        }, (i.history = function() {
                            return l ? [].concat(l) : []
                        }).filter = function(e) {
                            return (l || []).filter(function(t) {
                                return new RegExp(".*" + e + ".*").test(t[0])
                            })
                        }, i.history.clear = function() {
                            l && (l.length = 0)
                        }, i.history.disable = function() {
                            null !== l && (l.length = 0, l = null)
                        }, i.history.enable = function() {
                            null === l && (l = [])
                        }, i.error = function() {
                            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            return n("error", r, t)
                        }, i.warn = function() {
                            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            return n("warn", r, t)
                        }, i.debug = function() {
                            for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            return n("debug", r, t)
                        }, i
                    }("VIDEOJS"),
                    h = u.createLogger;

                function d(e) {
                    return e.replace(/\n\r?\s*/g, "")
                }
                var p = function(e) {
                        for (var t = "", n = 0; n < arguments.length; n++) t += d(e[n]) + (arguments[n + 1] || "");
                        return t
                    },
                    f = Object.prototype.toString,
                    v = function(e) {
                        return m(e) ? Object.keys(e) : []
                    };

                function y(e, t) {
                    v(e).forEach(function(n) {
                        return t(e[n], n)
                    })
                }

                function g(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    return Object.assign ? Object.assign.apply(Object, [e].concat(n)) : (n.forEach(function(t) {
                        t && y(t, function(t, n) {
                            e[n] = t
                        })
                    }), e)
                }

                function m(e) {
                    return !!e && "object" == typeof e
                }

                function _(e) {
                    return m(e) && "[object Object]" === f.call(e) && e.constructor === Object
                }

                function b(t, n) {
                    if (!t || !n) return "";
                    if ("function" == typeof e.getComputedStyle) {
                        var r = e.getComputedStyle(t);
                        return r ? r[n] : ""
                    }
                    return ""
                }

                function T() {
                    var e = a(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]);
                    return T = function() {
                        return e
                    }, e
                }

                function k(e) {
                    return "string" == typeof e && /\S/.test(e)
                }

                function C(e) {
                    if (/\s/.test(e)) throw new Error("class has illegal whitespace characters")
                }

                function E() {
                    return t === e.document
                }

                function S(e) {
                    return m(e) && 1 === e.nodeType
                }

                function w() {
                    try {
                        return e.parent !== e.self
                    } catch (e) {
                        return !0
                    }
                }

                function P(e) {
                    return function(n, r) {
                        if (!k(n)) return t[e](null);
                        k(r) && (r = t.querySelector(r));
                        var i = S(r) ? r : t;
                        return i[e] && i[e](n)
                    }
                }

                function x(e, n, r, i) {
                    void 0 === e && (e = "div"), void 0 === n && (n = {}), void 0 === r && (r = {});
                    var o = t.createElement(e);
                    return Object.getOwnPropertyNames(n).forEach(function(e) {
                        var t = n[e]; - 1 !== e.indexOf("aria-") || "role" === e || "type" === e ? (u.warn(p(T(), e, t)), o.setAttribute(e, t)) : "textContent" === e ? j(o, t) : o[e] = t
                    }), Object.getOwnPropertyNames(r).forEach(function(e) {
                        o.setAttribute(e, r[e])
                    }), i && G(o, i), o
                }

                function j(e, t) {
                    return void 0 === e.textContent ? e.innerText = t : e.textContent = t, e
                }

                function A(e, t) {
                    t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
                }

                function I(e, t) {
                    return C(t), e.classList ? e.classList.contains(t) : function(e) {
                        return new RegExp("(^|\\s)" + e + "($|\\s)")
                    }(t).test(e.className)
                }

                function O(e, t) {
                    return e.classList ? e.classList.add(t) : I(e, t) || (e.className = (e.className + " " + t).trim()), e
                }

                function D(e, t) {
                    return e.classList ? e.classList.remove(t) : (C(t), e.className = e.className.split(/\s+/).filter(function(e) {
                        return e !== t
                    }).join(" ")), e
                }

                function N(e, t, n) {
                    var r = I(e, t);
                    if ("function" == typeof n && (n = n(e, t)), "boolean" != typeof n && (n = !r), n !== r) return n ? O(e, t) : D(e, t), e
                }

                function M(e, t) {
                    Object.getOwnPropertyNames(t).forEach(function(n) {
                        var r = t[n];
                        null == r || !1 === r ? e.removeAttribute(n) : e.setAttribute(n, !0 === r ? "" : r)
                    })
                }

                function L(e) {
                    var t = {};
                    if (e && e.attributes && e.attributes.length > 0)
                        for (var n = e.attributes, r = n.length - 1; r >= 0; r--) {
                            var i = n[r].name,
                                o = n[r].value;
                            "boolean" != typeof e[i] && -1 === ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,".indexOf("," + i + ",") || (o = null !== o), t[i] = o
                        }
                    return t
                }

                function F(e, t) {
                    return e.getAttribute(t)
                }

                function R(e, t, n) {
                    e.setAttribute(t, n)
                }

                function B(e, t) {
                    e.removeAttribute(t)
                }

                function $() {
                    t.body.focus(), t.onselectstart = function() {
                        return !1
                    }
                }

                function H() {
                    t.onselectstart = function() {
                        return !0
                    }
                }

                function V(e) {
                    if (e && e.getBoundingClientRect && e.parentNode) {
                        var t = e.getBoundingClientRect(),
                            n = {};
                        return ["bottom", "height", "left", "right", "top", "width"].forEach(function(e) {
                            void 0 !== t[e] && (n[e] = t[e])
                        }), n.height || (n.height = parseFloat(b(e, "height"))), n.width || (n.width = parseFloat(b(e, "width"))), n
                    }
                }

                function U(n) {
                    var r;
                    if (n.getBoundingClientRect && n.parentNode && (r = n.getBoundingClientRect()), !r) return {
                        left: 0,
                        top: 0
                    };
                    var i = t.documentElement,
                        o = t.body,
                        s = i.clientLeft || o.clientLeft || 0,
                        a = e.pageXOffset || o.scrollLeft,
                        l = r.left + a - s,
                        c = i.clientTop || o.clientTop || 0,
                        u = e.pageYOffset || o.scrollTop,
                        h = r.top + u - c;
                    return {
                        left: Math.round(l),
                        top: Math.round(h)
                    }
                }

                function W(e, t) {
                    var n = {},
                        r = U(e),
                        i = e.offsetWidth,
                        o = e.offsetHeight,
                        s = r.top,
                        a = r.left,
                        l = t.pageY,
                        c = t.pageX;
                    return t.changedTouches && (c = t.changedTouches[0].pageX, l = t.changedTouches[0].pageY), n.y = Math.max(0, Math.min(1, (s - l + o) / o)), n.x = Math.max(0, Math.min(1, (c - a) / i)), n
                }

                function z(e) {
                    return m(e) && 3 === e.nodeType
                }

                function K(e) {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    return e
                }

                function q(e) {
                    return "function" == typeof e && (e = e()), (Array.isArray(e) ? e : [e]).map(function(e) {
                        return "function" == typeof e && (e = e()), S(e) || z(e) ? e : "string" == typeof e && /\S/.test(e) ? t.createTextNode(e) : void 0
                    }).filter(function(e) {
                        return e
                    })
                }

                function G(e, t) {
                    return q(t).forEach(function(t) {
                        return e.appendChild(t)
                    }), e
                }

                function X(e, t) {
                    return G(K(e), t)
                }

                function Y(e) {
                    return void 0 === e.button && void 0 === e.buttons || 0 === e.button && void 0 === e.buttons || 0 === e.button && 0 === e.buttons || 0 === e.button && 1 === e.buttons
                }
                var J = P("querySelector"),
                    Q = P("querySelectorAll"),
                    Z = Object.freeze({
                        isReal: E,
                        isEl: S,
                        isInFrame: w,
                        createEl: x,
                        textContent: j,
                        prependTo: A,
                        hasClass: I,
                        addClass: O,
                        removeClass: D,
                        toggleClass: N,
                        setAttributes: M,
                        getAttributes: L,
                        getAttribute: F,
                        setAttribute: R,
                        removeAttribute: B,
                        blockTextSelection: $,
                        unblockTextSelection: H,
                        getBoundingClientRect: V,
                        findPosition: U,
                        getPointerPosition: W,
                        isTextNode: z,
                        emptyEl: K,
                        normalizeContent: q,
                        appendContent: G,
                        insertContent: X,
                        isSingleLeftClick: Y,
                        $: J,
                        $$: Q
                    }),
                    ee = 1;

                function te() {
                    return ee++
                }
                var ne = {},
                    re = "vdata" + Math.floor(e.performance && e.performance.now() || Date.now());

                function ie(e) {
                    var t = e[re];
                    return t || (t = e[re] = te()), ne[t] || (ne[t] = {}), ne[t]
                }

                function oe(e) {
                    var t = e[re];
                    return !!t && !!Object.getOwnPropertyNames(ne[t]).length
                }

                function se(e) {
                    var t = e[re];
                    if (t) {
                        delete ne[t];
                        try {
                            delete e[re]
                        } catch (t) {
                            e.removeAttribute ? e.removeAttribute(re) : e[re] = null
                        }
                    }
                }

                function ae(e, t) {
                    var n = ie(e);
                    0 === n.handlers[t].length && (delete n.handlers[t], e.removeEventListener ? e.removeEventListener(t, n.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, n.dispatcher)), Object.getOwnPropertyNames(n.handlers).length <= 0 && (delete n.handlers, delete n.dispatcher, delete n.disabled), 0 === Object.getOwnPropertyNames(n).length && se(e)
                }

                function le(e, t, n, r) {
                    n.forEach(function(n) {
                        e(t, n, r)
                    })
                }

                function ce(n) {
                    function r() {
                        return !0
                    }

                    function i() {
                        return !1
                    }
                    if (!n || !n.isPropagationStopped) {
                        var o = n || e.event;
                        for (var s in n = {}, o) "layerX" !== s && "layerY" !== s && "keyLocation" !== s && "webkitMovementX" !== s && "webkitMovementY" !== s && ("returnValue" === s && o.preventDefault || (n[s] = o[s]));
                        if (n.target || (n.target = n.srcElement || t), n.relatedTarget || (n.relatedTarget = n.fromElement === n.target ? n.toElement : n.fromElement), n.preventDefault = function() {
                                o.preventDefault && o.preventDefault(), n.returnValue = !1, o.returnValue = !1, n.defaultPrevented = !0
                            }, n.defaultPrevented = !1, n.stopPropagation = function() {
                                o.stopPropagation && o.stopPropagation(), n.cancelBubble = !0, o.cancelBubble = !0, n.isPropagationStopped = r
                            }, n.isPropagationStopped = i, n.stopImmediatePropagation = function() {
                                o.stopImmediatePropagation && o.stopImmediatePropagation(), n.isImmediatePropagationStopped = r, n.stopPropagation()
                            }, n.isImmediatePropagationStopped = i, null !== n.clientX && void 0 !== n.clientX) {
                            var a = t.documentElement,
                                l = t.body;
                            n.pageX = n.clientX + (a && a.scrollLeft || l && l.scrollLeft || 0) - (a && a.clientLeft || l && l.clientLeft || 0), n.pageY = n.clientY + (a && a.scrollTop || l && l.scrollTop || 0) - (a && a.clientTop || l && l.clientTop || 0)
                        }
                        n.which = n.charCode || n.keyCode, null !== n.button && void 0 !== n.button && (n.button = 1 & n.button ? 0 : 4 & n.button ? 1 : 2 & n.button ? 2 : 0)
                    }
                    return n
                }
                var ue = !1;
                ! function() {
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                ue = !0
                            }
                        });
                        e.addEventListener("test", null, t), e.removeEventListener("test", null, t)
                    } catch (e) {}
                }();
                var he = ["touchstart", "touchmove"];

                function de(e, t, n) {
                    if (Array.isArray(t)) return le(de, e, t, n);
                    var r = ie(e);
                    if (r.handlers || (r.handlers = {}), r.handlers[t] || (r.handlers[t] = []), n.guid || (n.guid = te()), r.handlers[t].push(n), r.dispatcher || (r.disabled = !1, r.dispatcher = function(t, n) {
                            if (!r.disabled) {
                                t = ce(t);
                                var i = r.handlers[t.type];
                                if (i)
                                    for (var o = i.slice(0), s = 0, a = o.length; s < a && !t.isImmediatePropagationStopped(); s++) try {
                                        o[s].call(e, t, n)
                                    } catch (e) {
                                        u.error(e)
                                    }
                            }
                        }), 1 === r.handlers[t].length)
                        if (e.addEventListener) {
                            var i = !1;
                            ue && he.indexOf(t) > -1 && (i = {
                                passive: !0
                            }), e.addEventListener(t, r.dispatcher, i)
                        } else e.attachEvent && e.attachEvent("on" + t, r.dispatcher)
                }

                function pe(e, t, n) {
                    if (oe(e)) {
                        var r = ie(e);
                        if (r.handlers) {
                            if (Array.isArray(t)) return le(pe, e, t, n);
                            var i = function(e, t) {
                                r.handlers[t] = [], ae(e, t)
                            };
                            if (void 0 !== t) {
                                var o = r.handlers[t];
                                if (o)
                                    if (n) {
                                        if (n.guid)
                                            for (var s = 0; s < o.length; s++) o[s].guid === n.guid && o.splice(s--, 1);
                                        ae(e, t)
                                    } else i(e, t)
                            } else
                                for (var a in r.handlers) Object.prototype.hasOwnProperty.call(r.handlers || {}, a) && i(e, a)
                        }
                    }
                }

                function fe(e, t, n) {
                    var r = oe(e) ? ie(e) : {},
                        i = e.parentNode || e.ownerDocument;
                    if ("string" == typeof t ? t = {
                            type: t,
                            target: e
                        } : t.target || (t.target = e), t = ce(t), r.dispatcher && r.dispatcher.call(e, t, n), i && !t.isPropagationStopped() && !0 === t.bubbles) fe.call(null, i, t, n);
                    else if (!i && !t.defaultPrevented && t.target && t.target[t.type]) {
                        var o = ie(t.target);
                        t.target[t.type] && (o.disabled = !0, "function" == typeof t.target[t.type] && t.target[t.type](), o.disabled = !1)
                    }
                    return !t.defaultPrevented
                }

                function ve(e, t, n) {
                    if (Array.isArray(t)) return le(ve, e, t, n);
                    var r = function r() {
                        pe(e, t, r), n.apply(this, arguments)
                    };
                    r.guid = n.guid = n.guid || te(), de(e, t, r)
                }

                function ye(e, t, n) {
                    var r = function r() {
                        pe(e, t, r), n.apply(this, arguments)
                    };
                    r.guid = n.guid = n.guid || te(), de(e, t, r)
                }
                var ge, me = Object.freeze({
                        fixEvent: ce,
                        on: de,
                        off: pe,
                        trigger: fe,
                        one: ve,
                        any: ye
                    }),
                    _e = !1,
                    be = function() {
                        if (E() && !1 !== ge.options.autoSetup) {
                            var e = Array.prototype.slice.call(t.getElementsByTagName("video")),
                                n = Array.prototype.slice.call(t.getElementsByTagName("audio")),
                                r = Array.prototype.slice.call(t.getElementsByTagName("video-js")),
                                i = e.concat(n, r);
                            if (i && i.length > 0)
                                for (var o = 0, s = i.length; o < s; o++) {
                                    var a = i[o];
                                    if (!a || !a.getAttribute) {
                                        Te(1);
                                        break
                                    }
                                    if (void 0 === a.player) {
                                        var l = a.getAttribute("data-setup");
                                        null !== l && ge(a)
                                    }
                                } else _e || Te(1)
                        }
                    };

                function Te(t, n) {
                    n && (ge = n), e.setTimeout(be, t)
                }
                E() && "complete" === t.readyState ? _e = !0 : ve(e, "load", function() {
                    _e = !0
                });
                var ke, Ce = function(e) {
                        var n = t.createElement("style");
                        return n.className = e, n
                    },
                    Ee = function(e, t) {
                        e.styleSheet ? e.styleSheet.cssText = t : e.textContent = t
                    },
                    Se = function(e, t, n) {
                        t.guid || (t.guid = te());
                        var r = function() {
                            return t.apply(e, arguments)
                        };
                        return r.guid = n ? n + "_" + t.guid : t.guid, r
                    },
                    we = function(t, n) {
                        var r = e.performance.now();
                        return function() {
                            var i = e.performance.now();
                            i - r >= n && (t.apply(void 0, arguments), r = i)
                        }
                    },
                    Pe = function(t, n, r, i) {
                        var o;
                        void 0 === i && (i = e);
                        var s = function() {
                            var e = this,
                                s = arguments,
                                a = function() {
                                    o = null, a = null, r || t.apply(e, s)
                                };
                            !o && r && t.apply(e, s), i.clearTimeout(o), o = i.setTimeout(a, n)
                        };
                        return s.cancel = function() {
                            i.clearTimeout(o), o = null
                        }, s
                    },
                    xe = function() {};
                xe.prototype.allowedEvents_ = {}, xe.prototype.on = function(e, t) {
                    var n = this.addEventListener;
                    this.addEventListener = function() {}, de(this, e, t), this.addEventListener = n
                }, xe.prototype.addEventListener = xe.prototype.on, xe.prototype.off = function(e, t) {
                    pe(this, e, t)
                }, xe.prototype.removeEventListener = xe.prototype.off, xe.prototype.one = function(e, t) {
                    var n = this.addEventListener;
                    this.addEventListener = function() {}, ve(this, e, t), this.addEventListener = n
                }, xe.prototype.any = function(e, t) {
                    var n = this.addEventListener;
                    this.addEventListener = function() {}, ye(this, e, t), this.addEventListener = n
                }, xe.prototype.trigger = function(e) {
                    var t = e.type || e;
                    "string" == typeof e && (e = {
                        type: t
                    }), e = ce(e), this.allowedEvents_[t] && this["on" + t] && this["on" + t](e), fe(this, e)
                }, xe.prototype.dispatchEvent = xe.prototype.trigger, xe.prototype.queueTrigger = function(t) {
                    var n = this;
                    ke || (ke = new Map);
                    var r = t.type || t,
                        i = ke.get(this);
                    i || (i = new Map, ke.set(this, i));
                    var o = i.get(r);
                    i.delete(r), e.clearTimeout(o);
                    var s = e.setTimeout(function() {
                        0 === i.size && (i = null, ke.delete(n)), n.trigger(t)
                    }, 0);
                    i.set(r, s)
                };
                var je = function(e) {
                        return e instanceof xe || !!e.eventBusEl_ && ["on", "one", "off", "trigger"].every(function(t) {
                            return "function" == typeof e[t]
                        })
                    },
                    Ae = function(e) {
                        return "string" == typeof e && /\S/.test(e) || Array.isArray(e) && !!e.length
                    },
                    Ie = function(e) {
                        if (!e.nodeName && !je(e)) throw new Error("Invalid target; must be a DOM node or evented object.")
                    },
                    Oe = function(e) {
                        if (!Ae(e)) throw new Error("Invalid event type; must be a non-empty string or array.")
                    },
                    De = function(e) {
                        if ("function" != typeof e) throw new Error("Invalid listener; must be a function.")
                    },
                    Ne = function(e, t) {
                        var n, r, i, o = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_;
                        return o ? (n = e.eventBusEl_, t.length >= 3 && t.shift(), r = t[0], i = t[1]) : (n = t[0], r = t[1], i = t[2]), Ie(n), Oe(r), De(i), i = Se(e, i), {
                            isTargetingSelf: o,
                            target: n,
                            type: r,
                            listener: i
                        }
                    },
                    Me = function(e, t, n, r) {
                        Ie(e), e.nodeName ? me[t](e, n, r) : e[t](n, r)
                    },
                    Le = {
                        on: function() {
                            for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            var i = Ne(this, n),
                                o = i.isTargetingSelf,
                                s = i.target,
                                a = i.type,
                                l = i.listener;
                            if (Me(s, "on", a, l), !o) {
                                var c = function() {
                                    return e.off(s, a, l)
                                };
                                c.guid = l.guid;
                                var u = function() {
                                    return e.off("dispose", c)
                                };
                                u.guid = l.guid, Me(this, "on", "dispose", c), Me(s, "on", "dispose", u)
                            }
                        },
                        one: function() {
                            for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            var i = Ne(this, n),
                                o = i.isTargetingSelf,
                                s = i.target,
                                a = i.type,
                                l = i.listener;
                            if (o) Me(s, "one", a, l);
                            else {
                                var c = function t() {
                                    e.off(s, a, t);
                                    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                    l.apply(null, r)
                                };
                                c.guid = l.guid, Me(s, "one", a, c)
                            }
                        },
                        any: function() {
                            for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            var i = Ne(this, n),
                                o = i.isTargetingSelf,
                                s = i.target,
                                a = i.type,
                                l = i.listener;
                            if (o) Me(s, "any", a, l);
                            else {
                                var c = function t() {
                                    e.off(s, a, t);
                                    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                    l.apply(null, r)
                                };
                                c.guid = l.guid, Me(s, "any", a, c)
                            }
                        },
                        off: function(e, t, n) {
                            if (!e || Ae(e)) pe(this.eventBusEl_, e, t);
                            else {
                                var r = e,
                                    i = t;
                                Ie(r), Oe(i), De(n), n = Se(this, n), this.off("dispose", n), r.nodeName ? (pe(r, i, n), pe(r, "dispose", n)) : je(r) && (r.off(i, n), r.off("dispose", n))
                            }
                        },
                        trigger: function(e, t) {
                            return fe(this.eventBusEl_, e, t)
                        }
                    };

                function Fe(t, n) {
                    void 0 === n && (n = {});
                    var r = n,
                        i = r.eventBusKey;
                    if (i) {
                        if (!t[i].nodeName) throw new Error('The eventBusKey "' + i + '" does not refer to an element.');
                        t.eventBusEl_ = t[i]
                    } else t.eventBusEl_ = x("span", {
                        className: "vjs-event-bus"
                    });
                    return g(t, Le), t.eventedCallbacks && t.eventedCallbacks.forEach(function(e) {
                        e()
                    }), t.on("dispose", function() {
                        t.off(), e.setTimeout(function() {
                            t.eventBusEl_ = null
                        }, 0)
                    }), t
                }
                var Re = {
                    state: {},
                    setState: function(e) {
                        var t, n = this;
                        return "function" == typeof e && (e = e()), y(e, function(e, r) {
                            n.state[r] !== e && ((t = t || {})[r] = {
                                from: n.state[r],
                                to: e
                            }), n.state[r] = e
                        }), t && je(this) && this.trigger({
                            changes: t,
                            type: "statechanged"
                        }), t
                    }
                };

                function Be(e, t) {
                    return g(e, Re), e.state = g({}, e.state, t), "function" == typeof e.handleStateChanged && je(e) && e.on("statechanged", e.handleStateChanged), e
                }

                function $e(e) {
                    return "string" != typeof e ? e : e.charAt(0).toUpperCase() + e.slice(1)
                }

                function He() {
                    for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return n.forEach(function(t) {
                        t && y(t, function(t, n) {
                            _(t) ? (_(e[n]) || (e[n] = {}), e[n] = He(e[n], t)) : e[n] = t
                        })
                    }), e
                }
                var Ve = function() {
                    function t(e, t, n) {
                        if (!e && this.play ? this.player_ = e = this : this.player_ = e, this.parentComponent_ = null, this.options_ = He({}, this.options_), t = this.options_ = He(this.options_, t), this.id_ = t.id || t.el && t.el.id, !this.id_) {
                            var r = e && e.id && e.id() || "no_player";
                            this.id_ = r + "_component_" + te()
                        }
                        this.name_ = t.name || null, t.el ? this.el_ = t.el : !1 !== t.createEl && (this.el_ = this.createEl()), !1 !== t.evented && Fe(this, {
                            eventBusKey: this.el_ ? "el_" : null
                        }), Be(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, !1 !== t.initChildren && this.initChildren(), this.ready(n), !1 !== t.reportTouchActivity && this.enableTouchActivity()
                    }
                    var n = t.prototype;
                    return n.dispose = function() {
                        if (this.trigger({
                                type: "dispose",
                                bubbles: !1
                            }), this.children_)
                            for (var e = this.children_.length - 1; e >= 0; e--) this.children_[e].dispose && this.children_[e].dispose();
                        this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.parentComponent_ = null, this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), se(this.el_), this.el_ = null), this.player_ = null
                    }, n.player = function() {
                        return this.player_
                    }, n.options = function(e) {
                        return e ? (this.options_ = He(this.options_, e), this.options_) : this.options_
                    }, n.el = function() {
                        return this.el_
                    }, n.createEl = function(e, t, n) {
                        return x(e, t, n)
                    }, n.localize = function(e, t, n) {
                        void 0 === n && (n = e);
                        var r = this.player_.language && this.player_.language(),
                            i = this.player_.languages && this.player_.languages(),
                            o = i && i[r],
                            s = r && r.split("-")[0],
                            a = i && i[s],
                            l = n;
                        return o && o[e] ? l = o[e] : a && a[e] && (l = a[e]), t && (l = l.replace(/\{(\d+)\}/g, function(e, n) {
                            var r = t[n - 1],
                                i = r;
                            return void 0 === r && (i = e), i
                        })), l
                    }, n.contentEl = function() {
                        return this.contentEl_ || this.el_
                    }, n.id = function() {
                        return this.id_
                    }, n.name = function() {
                        return this.name_
                    }, n.children = function() {
                        return this.children_
                    }, n.getChildById = function(e) {
                        return this.childIndex_[e]
                    }, n.getChild = function(e) {
                        if (e) return e = $e(e), this.childNameIndex_[e]
                    }, n.addChild = function(e, n, r) {
                        var i, o;
                        if (void 0 === n && (n = {}), void 0 === r && (r = this.children_.length), "string" == typeof e) {
                            o = $e(e);
                            var s = n.componentClass || o;
                            n.name = o;
                            var a = t.getComponent(s);
                            if (!a) throw new Error("Component " + s + " does not exist");
                            if ("function" != typeof a) return null;
                            i = new a(this.player_ || this, n)
                        } else i = e;
                        if (i.parentComponent_ && i.parentComponent_.removeChild(i), this.children_.splice(r, 0, i), i.parentComponent_ = this, "function" == typeof i.id && (this.childIndex_[i.id()] = i), (o = o || i.name && $e(i.name())) && (this.childNameIndex_[o] = i), "function" == typeof i.el && i.el()) {
                            var l = this.contentEl().children,
                                c = l[r] || null;
                            this.contentEl().insertBefore(i.el(), c)
                        }
                        return i
                    }, n.removeChild = function(e) {
                        if ("string" == typeof e && (e = this.getChild(e)), e && this.children_) {
                            for (var t = !1, n = this.children_.length - 1; n >= 0; n--)
                                if (this.children_[n] === e) {
                                    t = !0, this.children_.splice(n, 1);
                                    break
                                }
                            if (t) {
                                e.parentComponent_ = null, this.childIndex_[e.id()] = null, this.childNameIndex_[e.name()] = null;
                                var r = e.el();
                                r && r.parentNode === this.contentEl() && this.contentEl().removeChild(e.el())
                            }
                        }
                    }, n.initChildren = function() {
                        var e = this,
                            n = this.options_.children;
                        if (n) {
                            var r, i = this.options_,
                                o = t.getComponent("Tech");
                            (r = Array.isArray(n) ? n : Object.keys(n)).concat(Object.keys(this.options_).filter(function(e) {
                                return !r.some(function(t) {
                                    return "string" == typeof t ? e === t : e === t.name
                                })
                            })).map(function(t) {
                                var r, i;
                                return "string" == typeof t ? i = n[r = t] || e.options_[r] || {} : (r = t.name, i = t), {
                                    name: r,
                                    opts: i
                                }
                            }).filter(function(e) {
                                var n = t.getComponent(e.opts.componentClass || $e(e.name));
                                return n && !o.isTech(n)
                            }).forEach(function(t) {
                                var n = t.name,
                                    r = t.opts;
                                if (void 0 !== i[n] && (r = i[n]), !1 !== r) {
                                    !0 === r && (r = {}), r.playerOptions = e.options_.playerOptions;
                                    var o = e.addChild(n, r);
                                    o && (e[n] = o)
                                }
                            })
                        }
                    }, n.buildCSSClass = function() {
                        return ""
                    }, n.ready = function(e, t) {
                        if (void 0 === t && (t = !1), e) return this.isReady_ ? void(t ? e.call(this) : this.setTimeout(e, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(e))
                    }, n.triggerReady = function() {
                        this.isReady_ = !0, this.setTimeout(function() {
                            var e = this.readyQueue_;
                            this.readyQueue_ = [], e && e.length > 0 && e.forEach(function(e) {
                                e.call(this)
                            }, this), this.trigger("ready")
                        }, 1)
                    }, n.$ = function(e, t) {
                        return J(e, t || this.contentEl())
                    }, n.$$ = function(e, t) {
                        return Q(e, t || this.contentEl())
                    }, n.hasClass = function(e) {
                        return I(this.el_, e)
                    }, n.addClass = function(e) {
                        O(this.el_, e)
                    }, n.removeClass = function(e) {
                        D(this.el_, e)
                    }, n.toggleClass = function(e, t) {
                        N(this.el_, e, t)
                    }, n.show = function() {
                        this.removeClass("vjs-hidden")
                    }, n.hide = function() {
                        this.addClass("vjs-hidden")
                    }, n.lockShowing = function() {
                        this.addClass("vjs-lock-showing")
                    }, n.unlockShowing = function() {
                        this.removeClass("vjs-lock-showing")
                    }, n.getAttribute = function(e) {
                        return F(this.el_, e)
                    }, n.setAttribute = function(e, t) {
                        R(this.el_, e, t)
                    }, n.removeAttribute = function(e) {
                        B(this.el_, e)
                    }, n.width = function(e, t) {
                        return this.dimension("width", e, t)
                    }, n.height = function(e, t) {
                        return this.dimension("height", e, t)
                    }, n.dimensions = function(e, t) {
                        this.width(e, !0), this.height(t)
                    }, n.dimension = function(e, t, n) {
                        if (void 0 !== t) return null !== t && t == t || (t = 0), -1 !== ("" + t).indexOf("%") || -1 !== ("" + t).indexOf("px") ? this.el_.style[e] = t : this.el_.style[e] = "auto" === t ? "" : t + "px", void(n || this.trigger("componentresize"));
                        if (!this.el_) return 0;
                        var r = this.el_.style[e],
                            i = r.indexOf("px");
                        return -1 !== i ? parseInt(r.slice(0, i), 10) : parseInt(this.el_["offset" + $e(e)], 10)
                    }, n.currentDimension = function(t) {
                        var n = 0;
                        if ("width" !== t && "height" !== t) throw new Error("currentDimension only accepts width or height value");
                        if ("function" == typeof e.getComputedStyle) {
                            var r = e.getComputedStyle(this.el_);
                            n = r.getPropertyValue(t) || r[t]
                        }
                        if (0 === (n = parseFloat(n))) {
                            var i = "offset" + $e(t);
                            n = this.el_[i]
                        }
                        return n
                    }, n.currentDimensions = function() {
                        return {
                            width: this.currentDimension("width"),
                            height: this.currentDimension("height")
                        }
                    }, n.currentWidth = function() {
                        return this.currentDimension("width")
                    }, n.currentHeight = function() {
                        return this.currentDimension("height")
                    }, n.focus = function() {
                        this.el_.focus()
                    }, n.blur = function() {
                        this.el_.blur()
                    }, n.handleKeyDown = function(e) {
                        this.player_ && (e.stopPropagation(), this.player_.handleKeyDown(e))
                    }, n.handleKeyPress = function(e) {
                        this.handleKeyDown(e)
                    }, n.emitTapEvents = function() {
                        var t, n = 0,
                            r = null;
                        this.on("touchstart", function(i) {
                            1 === i.touches.length && (r = {
                                pageX: i.touches[0].pageX,
                                pageY: i.touches[0].pageY
                            }, n = e.performance.now(), t = !0)
                        }), this.on("touchmove", function(e) {
                            if (e.touches.length > 1) t = !1;
                            else if (r) {
                                var n = e.touches[0].pageX - r.pageX,
                                    i = e.touches[0].pageY - r.pageY,
                                    o = Math.sqrt(n * n + i * i);
                                o > 10 && (t = !1)
                            }
                        });
                        var i = function() {
                            t = !1
                        };
                        this.on("touchleave", i), this.on("touchcancel", i), this.on("touchend", function(i) {
                            if (r = null, !0 === t) {
                                var o = e.performance.now() - n;
                                o < 200 && (i.preventDefault(), this.trigger("tap"))
                            }
                        })
                    }, n.enableTouchActivity = function() {
                        if (this.player() && this.player().reportUserActivity) {
                            var e, t = Se(this.player(), this.player().reportUserActivity);
                            this.on("touchstart", function() {
                                t(), this.clearInterval(e), e = this.setInterval(t, 250)
                            });
                            var n = function(n) {
                                t(), this.clearInterval(e)
                            };
                            this.on("touchmove", t), this.on("touchend", n), this.on("touchcancel", n)
                        }
                    }, n.setTimeout = function(t, n) {
                        var r, i, o = this;
                        return t = Se(this, t), r = e.setTimeout(function() {
                            o.off("dispose", i), t()
                        }, n), (i = function() {
                            return o.clearTimeout(r)
                        }).guid = "vjs-timeout-" + r, this.on("dispose", i), r
                    }, n.clearTimeout = function(t) {
                        e.clearTimeout(t);
                        var n = function() {};
                        return n.guid = "vjs-timeout-" + t, this.off("dispose", n), t
                    }, n.setInterval = function(t, n) {
                        var r = this;
                        t = Se(this, t);
                        var i = e.setInterval(t, n),
                            o = function() {
                                return r.clearInterval(i)
                            };
                        return o.guid = "vjs-interval-" + i, this.on("dispose", o), i
                    }, n.clearInterval = function(t) {
                        e.clearInterval(t);
                        var n = function() {};
                        return n.guid = "vjs-interval-" + t, this.off("dispose", n), t
                    }, n.requestAnimationFrame = function(t) {
                        var n, r, i = this;
                        return this.supportsRaf_ ? (t = Se(this, t), n = e.requestAnimationFrame(function() {
                            i.off("dispose", r), t()
                        }), (r = function() {
                            return i.cancelAnimationFrame(n)
                        }).guid = "vjs-raf-" + n, this.on("dispose", r), n) : this.setTimeout(t, 1e3 / 60)
                    }, n.cancelAnimationFrame = function(t) {
                        if (this.supportsRaf_) {
                            e.cancelAnimationFrame(t);
                            var n = function() {};
                            return n.guid = "vjs-raf-" + t, this.off("dispose", n), t
                        }
                        return this.clearTimeout(t)
                    }, t.registerComponent = function(e, n) {
                        if ("string" != typeof e || !e) throw new Error('Illegal component name, "' + e + '"; must be a non-empty string.');
                        var r = t.getComponent("Tech"),
                            i = r && r.isTech(n),
                            o = t === n || t.prototype.isPrototypeOf(n.prototype);
                        if (i || !o) throw new Error('Illegal component, "' + e + '"; ' + (i ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass") + ".");
                        e = $e(e), t.components_ || (t.components_ = {});
                        var s = t.getComponent("Player");
                        if ("Player" === e && s && s.players) {
                            var a = s.players,
                                l = Object.keys(a);
                            if (a && l.length > 0 && l.map(function(e) {
                                    return a[e]
                                }).every(Boolean)) throw new Error("Can not register Player component after player has been created.")
                        }
                        return t.components_[e] = n, n
                    }, t.getComponent = function(e) {
                        if (e) return e = $e(e), t.components_ && t.components_[e] ? t.components_[e] : void 0
                    }, t
                }();
                Ve.prototype.supportsRaf_ = "function" == typeof e.requestAnimationFrame && "function" == typeof e.cancelAnimationFrame, Ve.registerComponent("Component", Ve);
                var Ue = e.navigator && e.navigator.userAgent || "",
                    We = /AppleWebKit\/([\d.]+)/i.exec(Ue),
                    ze = We ? parseFloat(We.pop()) : null,
                    Ke = /iPad/i.test(Ue),
                    qe = /iPhone/i.test(Ue) && !Ke,
                    Ge = /iPod/i.test(Ue),
                    Xe = qe || Ke || Ge,
                    Ye = function() {
                        var e = Ue.match(/OS (\d+)_/i);
                        return e && e[1] ? e[1] : null
                    }(),
                    Je = /Android/i.test(Ue),
                    Qe = function() {
                        var e = Ue.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
                        if (!e) return null;
                        var t = e[1] && parseFloat(e[1]),
                            n = e[2] && parseFloat(e[2]);
                        return t && n ? parseFloat(e[1] + "." + e[2]) : t || null
                    }(),
                    Ze = Je && Qe < 5 && ze < 537,
                    et = /Firefox/i.test(Ue),
                    tt = /Edge/i.test(Ue),
                    nt = !tt && (/Chrome/i.test(Ue) || /CriOS/i.test(Ue)),
                    rt = function() {
                        var e = Ue.match(/(Chrome|CriOS)\/(\d+)/);
                        return e && e[2] ? parseFloat(e[2]) : null
                    }(),
                    it = function() {
                        var e = /MSIE\s(\d+)\.\d/.exec(Ue),
                            t = e && parseFloat(e[1]);
                        return !t && /Trident\/7.0/i.test(Ue) && /rv:11.0/.test(Ue) && (t = 11), t
                    }(),
                    ot = /Safari/i.test(Ue) && !nt && !Je && !tt,
                    st = (ot || Xe) && !nt,
                    at = /Windows/i.test(Ue),
                    lt = E() && ("ontouchstart" in e || e.navigator.maxTouchPoints || e.DocumentTouch && e.document instanceof e.DocumentTouch),
                    ct = Object.freeze({
                        IS_IPAD: Ke,
                        IS_IPHONE: qe,
                        IS_IPOD: Ge,
                        IS_IOS: Xe,
                        IOS_VERSION: Ye,
                        IS_ANDROID: Je,
                        ANDROID_VERSION: Qe,
                        IS_NATIVE_ANDROID: Ze,
                        IS_FIREFOX: et,
                        IS_EDGE: tt,
                        IS_CHROME: nt,
                        CHROME_VERSION: rt,
                        IE_VERSION: it,
                        IS_SAFARI: ot,
                        IS_ANY_SAFARI: st,
                        IS_WINDOWS: at,
                        TOUCH_ENABLED: lt
                    });

                function ut(e, t, n, r) {
                    return function(e, t, n) {
                        if ("number" != typeof t || t < 0 || t > n) throw new Error("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" + t + ") is non-numeric or out of bounds (0-" + n + ").")
                    }(e, r, n.length - 1), n[r][t]
                }

                function ht(e) {
                    return void 0 === e || 0 === e.length ? {
                        length: 0,
                        start: function() {
                            throw new Error("This TimeRanges object is empty")
                        },
                        end: function() {
                            throw new Error("This TimeRanges object is empty")
                        }
                    } : {
                        length: e.length,
                        start: ut.bind(null, "start", 0, e),
                        end: ut.bind(null, "end", 1, e)
                    }
                }

                function dt(e, t) {
                    return Array.isArray(e) ? ht(e) : void 0 === e || void 0 === t ? ht() : ht([
                        [e, t]
                    ])
                }

                function pt(e, t) {
                    var n, r, i = 0;
                    if (!t) return 0;
                    e && e.length || (e = dt(0, 0));
                    for (var o = 0; o < e.length; o++) n = e.start(o), (r = e.end(o)) > t && (r = t), i += r - n;
                    return i / t
                }
                for (var ft, vt = {
                        prefixed: !0
                    }, yt = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror", "-moz-full-screen"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError", "-ms-fullscreen"]
                    ], gt = yt[0], mt = 0; mt < yt.length; mt++)
                    if (yt[mt][1] in t) {
                        ft = yt[mt];
                        break
                    }
                if (ft) {
                    for (var _t = 0; _t < ft.length; _t++) vt[gt[_t]] = ft[_t];
                    vt.prefixed = ft[0] !== gt[0]
                }

                function bt(e) {
                    if (e instanceof bt) return e;
                    "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : m(e) && ("number" == typeof e.code && (this.code = e.code), g(this, e)), this.message || (this.message = bt.defaultMessages[this.code] || "")
                }
                bt.prototype.code = 0, bt.prototype.message = "", bt.prototype.status = null, bt.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], bt.defaultMessages = {
                    1: "You aborted the media playback",
                    2: "A network error caused the media download to fail part-way.",
                    3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
                    4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
                    5: "The media is encrypted and we do not have the keys to decrypt it."
                };
                for (var Tt = 0; Tt < bt.errorTypes.length; Tt++) bt[bt.errorTypes[Tt]] = Tt, bt.prototype[bt.errorTypes[Tt]] = Tt;
                var kt = function(e, t) {
                    var n, r = null;
                    try {
                        n = JSON.parse(e, t)
                    } catch (e) {
                        r = e
                    }
                    return [r, n]
                };

                function Ct(e) {
                    return null != e && "function" == typeof e.then
                }

                function Et(e) {
                    Ct(e) && e.then(null, function(e) {})
                }
                var St = function(e) {
                        var t = ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function(t, n, r) {
                            return e[n] && (t[n] = e[n]), t
                        }, {
                            cues: e.cues && Array.prototype.map.call(e.cues, function(e) {
                                return {
                                    startTime: e.startTime,
                                    endTime: e.endTime,
                                    text: e.text,
                                    id: e.id
                                }
                            })
                        });
                        return t
                    },
                    wt = {
                        textTracksToJson: function(e) {
                            var t = e.$$("track"),
                                n = Array.prototype.map.call(t, function(e) {
                                    return e.track
                                }),
                                r = Array.prototype.map.call(t, function(e) {
                                    var t = St(e.track);
                                    return e.src && (t.src = e.src), t
                                });
                            return r.concat(Array.prototype.filter.call(e.textTracks(), function(e) {
                                return -1 === n.indexOf(e)
                            }).map(St))
                        },
                        jsonToTextTracks: function(e, t) {
                            return e.forEach(function(e) {
                                var n = t.addRemoteTextTrack(e).track;
                                !e.src && e.cues && e.cues.forEach(function(e) {
                                    return n.addCue(e)
                                })
                            }), t.textTracks()
                        },
                        trackToJson_: St
                    },
                    Pt = function(e, t) {
                        return e(t = {
                            exports: {}
                        }, t.exports), t.exports
                    }(function(e, t) {
                        function n(e) {
                            if (e && "object" == typeof e) {
                                var t = e.which || e.keyCode || e.charCode;
                                t && (e = t)
                            }
                            if ("number" == typeof e) return s[e];
                            var n = String(e),
                                o = r[n.toLowerCase()];
                            return o || (o = i[n.toLowerCase()]) || (1 === n.length ? n.charCodeAt(0) : void 0)
                        }
                        n.isEventKey = function(e, t) {
                            if (e && "object" == typeof e) {
                                var n = e.which || e.keyCode || e.charCode;
                                if (null == n) return !1;
                                if ("string" == typeof t) {
                                    var o = r[t.toLowerCase()];
                                    if (o) return o === n;
                                    if (o = i[t.toLowerCase()]) return o === n
                                } else if ("number" == typeof t) return t === n;
                                return !1
                            }
                        };
                        var r = (t = e.exports = n).code = t.codes = {
                                backspace: 8,
                                tab: 9,
                                enter: 13,
                                shift: 16,
                                ctrl: 17,
                                alt: 18,
                                "pause/break": 19,
                                "caps lock": 20,
                                esc: 27,
                                space: 32,
                                "page up": 33,
                                "page down": 34,
                                end: 35,
                                home: 36,
                                left: 37,
                                up: 38,
                                right: 39,
                                down: 40,
                                insert: 45,
                                delete: 46,
                                command: 91,
                                "left command": 91,
                                "right command": 93,
                                "numpad *": 106,
                                "numpad +": 107,
                                "numpad -": 109,
                                "numpad .": 110,
                                "numpad /": 111,
                                "num lock": 144,
                                "scroll lock": 145,
                                "my computer": 182,
                                "my calculator": 183,
                                ";": 186,
                                "=": 187,
                                ",": 188,
                                "-": 189,
                                ".": 190,
                                "/": 191,
                                "`": 192,
                                "[": 219,
                                "\\": 220,
                                "]": 221,
                                "'": 222
                            },
                            i = t.aliases = {
                                windows: 91,
                                "⇧": 16,
                                "⌥": 18,
                                "⌃": 17,
                                "⌘": 91,
                                ctl: 17,
                                control: 17,
                                option: 18,
                                pause: 19,
                                break: 19,
                                caps: 20,
                                return: 13,
                                escape: 27,
                                spc: 32,
                                spacebar: 32,
                                pgup: 33,
                                pgdn: 34,
                                ins: 45,
                                del: 46,
                                cmd: 91
                            };
                        for (o = 97; o < 123; o++) r[String.fromCharCode(o)] = o - 32;
                        for (var o = 48; o < 58; o++) r[o - 48] = o;
                        for (o = 1; o < 13; o++) r["f" + o] = o + 111;
                        for (o = 0; o < 10; o++) r["numpad " + o] = o + 96;
                        var s = t.names = t.title = {};
                        for (o in r) s[r[o]] = o;
                        for (var a in i) r[a] = i[a]
                    }),
                    xt = (Pt.code, Pt.codes, Pt.aliases, Pt.names, Pt.title, "vjs-modal-dialog"),
                    jt = function(n) {
                        function i(e, t) {
                            var r;
                            return (r = n.call(this, e, t) || this).opened_ = r.hasBeenOpened_ = r.hasBeenFilled_ = !1, r.closeable(!r.options_.uncloseable), r.content(r.options_.content), r.contentEl_ = x("div", {
                                className: xt + "-content"
                            }, {
                                role: "document"
                            }), r.descEl_ = x("p", {
                                className: xt + "-description vjs-control-text",
                                id: r.el().getAttribute("aria-describedby")
                            }), j(r.descEl_, r.description()), r.el_.appendChild(r.descEl_), r.el_.appendChild(r.contentEl_), r
                        }
                        r(i, n);
                        var o = i.prototype;
                        return o.createEl = function() {
                            return n.prototype.createEl.call(this, "div", {
                                className: this.buildCSSClass(),
                                tabIndex: -1
                            }, {
                                "aria-describedby": this.id() + "_description",
                                "aria-hidden": "true",
                                "aria-label": this.label(),
                                role: "dialog"
                            })
                        }, o.dispose = function() {
                            this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, n.prototype.dispose.call(this)
                        }, o.buildCSSClass = function() {
                            return xt + " vjs-hidden " + n.prototype.buildCSSClass.call(this)
                        }, o.label = function() {
                            return this.localize(this.options_.label || "Modal Window")
                        }, o.description = function() {
                            var e = this.options_.description || this.localize("This is a modal window.");
                            return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), e
                        }, o.open = function() {
                            if (!this.opened_) {
                                var e = this.player();
                                this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !e.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(), this.on("keydown", this.handleKeyDown), this.hadControls_ = e.controls(), e.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
                            }
                        }, o.opened = function(e) {
                            return "boolean" == typeof e && this[e ? "open" : "close"](), this.opened_
                        }, o.close = function() {
                            if (this.opened_) {
                                var e = this.player();
                                this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && e.play(), this.off("keydown", this.handleKeyDown), this.hadControls_ && e.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose()
                            }
                        }, o.closeable = function(e) {
                            if ("boolean" == typeof e) {
                                var t = this.closeable_ = !!e,
                                    n = this.getChild("closeButton");
                                if (t && !n) {
                                    var r = this.contentEl_;
                                    this.contentEl_ = this.el_, n = this.addChild("closeButton", {
                                        controlText: "Close Modal Dialog"
                                    }), this.contentEl_ = r, this.on(n, "close", this.close)
                                }!t && n && (this.off(n, "close", this.close), this.removeChild(n), n.dispose())
                            }
                            return this.closeable_
                        }, o.fill = function() {
                            this.fillWith(this.content())
                        }, o.fillWith = function(e) {
                            var t = this.contentEl(),
                                n = t.parentNode,
                                r = t.nextSibling;
                            this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, n.removeChild(t), this.empty(), X(t, e), this.trigger("modalfill"), r ? n.insertBefore(t, r) : n.appendChild(t);
                            var i = this.getChild("closeButton");
                            i && n.appendChild(i.el_)
                        }, o.empty = function() {
                            this.trigger("beforemodalempty"), K(this.contentEl()), this.trigger("modalempty")
                        }, o.content = function(e) {
                            return void 0 !== e && (this.content_ = e), this.content_
                        }, o.conditionalFocus_ = function() {
                            var e = t.activeElement,
                                n = this.player_.el_;
                            this.previouslyActiveEl_ = null, (n.contains(e) || n === e) && (this.previouslyActiveEl_ = e, this.focus())
                        }, o.conditionalBlur_ = function() {
                            this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null)
                        }, o.handleKeyDown = function(e) {
                            if (e.stopPropagation(), Pt.isEventKey(e, "Escape") && this.closeable()) return e.preventDefault(), void this.close();
                            if (Pt.isEventKey(e, "Tab")) {
                                for (var n, r = this.focusableEls_(), i = this.el_.querySelector(":focus"), o = 0; o < r.length; o++)
                                    if (i === r[o]) {
                                        n = o;
                                        break
                                    }
                                t.activeElement === this.el_ && (n = 0), e.shiftKey && 0 === n ? (r[r.length - 1].focus(), e.preventDefault()) : e.shiftKey || n !== r.length - 1 || (r[0].focus(), e.preventDefault())
                            }
                        }, o.focusableEls_ = function() {
                            var t = this.el_.querySelectorAll("*");
                            return Array.prototype.filter.call(t, function(t) {
                                return (t instanceof e.HTMLAnchorElement || t instanceof e.HTMLAreaElement) && t.hasAttribute("href") || (t instanceof e.HTMLInputElement || t instanceof e.HTMLSelectElement || t instanceof e.HTMLTextAreaElement || t instanceof e.HTMLButtonElement) && !t.hasAttribute("disabled") || t instanceof e.HTMLIFrameElement || t instanceof e.HTMLObjectElement || t instanceof e.HTMLEmbedElement || t.hasAttribute("tabindex") && -1 !== t.getAttribute("tabindex") || t.hasAttribute("contenteditable")
                            })
                        }, i
                    }(Ve);
                jt.prototype.options_ = {
                    pauseOnOpen: !0,
                    temporary: !0
                }, Ve.registerComponent("ModalDialog", jt);
                var At = function(e) {
                    function t(t) {
                        var n;
                        void 0 === t && (t = []), (n = e.call(this) || this).tracks_ = [], Object.defineProperty(s(n), "length", {
                            get: function() {
                                return this.tracks_.length
                            }
                        });
                        for (var r = 0; r < t.length; r++) n.addTrack(t[r]);
                        return n
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.addTrack = function(e) {
                        var t = this.tracks_.length;
                        "" + t in this || Object.defineProperty(this, t, {
                            get: function() {
                                return this.tracks_[t]
                            }
                        }), -1 === this.tracks_.indexOf(e) && (this.tracks_.push(e), this.trigger({
                            track: e,
                            type: "addtrack",
                            target: this
                        }))
                    }, n.removeTrack = function(e) {
                        for (var t, n = 0, r = this.length; n < r; n++)
                            if (this[n] === e) {
                                (t = this[n]).off && t.off(), this.tracks_.splice(n, 1);
                                break
                            }
                        t && this.trigger({
                            track: t,
                            type: "removetrack",
                            target: this
                        })
                    }, n.getTrackById = function(e) {
                        for (var t = null, n = 0, r = this.length; n < r; n++) {
                            var i = this[n];
                            if (i.id === e) {
                                t = i;
                                break
                            }
                        }
                        return t
                    }, t
                }(xe);
                for (var It in At.prototype.allowedEvents_ = {
                        change: "change",
                        addtrack: "addtrack",
                        removetrack: "removetrack"
                    }, At.prototype.allowedEvents_) At.prototype["on" + It] = null;
                var Ot, Dt = function(e, t) {
                        for (var n = 0; n < e.length; n++) Object.keys(e[n]).length && t.id !== e[n].id && (e[n].enabled = !1)
                    },
                    Nt = function(e) {
                        function t(t) {
                            var n;
                            void 0 === t && (t = []);
                            for (var r = t.length - 1; r >= 0; r--)
                                if (t[r].enabled) {
                                    Dt(t, t[r]);
                                    break
                                }
                            return (n = e.call(this, t) || this).changing_ = !1, n
                        }
                        r(t, e);
                        var n = t.prototype;
                        return n.addTrack = function(t) {
                            var n = this;
                            t.enabled && Dt(this, t), e.prototype.addTrack.call(this, t), t.addEventListener && (t.enabledChange_ = function() {
                                n.changing_ || (n.changing_ = !0, Dt(n, t), n.changing_ = !1, n.trigger("change"))
                            }, t.addEventListener("enabledchange", t.enabledChange_))
                        }, n.removeTrack = function(t) {
                            e.prototype.removeTrack.call(this, t), t.removeEventListener && t.enabledChange_ && (t.removeEventListener("enabledchange", t.enabledChange_), t.enabledChange_ = null)
                        }, t
                    }(At),
                    Mt = function(e, t) {
                        for (var n = 0; n < e.length; n++) Object.keys(e[n]).length && t.id !== e[n].id && (e[n].selected = !1)
                    },
                    Lt = function(e) {
                        function t(t) {
                            var n;
                            void 0 === t && (t = []);
                            for (var r = t.length - 1; r >= 0; r--)
                                if (t[r].selected) {
                                    Mt(t, t[r]);
                                    break
                                }
                            return (n = e.call(this, t) || this).changing_ = !1, Object.defineProperty(s(n), "selectedIndex", {
                                get: function() {
                                    for (var e = 0; e < this.length; e++)
                                        if (this[e].selected) return e;
                                    return -1
                                },
                                set: function() {}
                            }), n
                        }
                        r(t, e);
                        var n = t.prototype;
                        return n.addTrack = function(t) {
                            var n = this;
                            t.selected && Mt(this, t), e.prototype.addTrack.call(this, t), t.addEventListener && (t.selectedChange_ = function() {
                                n.changing_ || (n.changing_ = !0, Mt(n, t), n.changing_ = !1, n.trigger("change"))
                            }, t.addEventListener("selectedchange", t.selectedChange_))
                        }, n.removeTrack = function(t) {
                            e.prototype.removeTrack.call(this, t), t.removeEventListener && t.selectedChange_ && (t.removeEventListener("selectedchange", t.selectedChange_), t.selectedChange_ = null)
                        }, t
                    }(At),
                    Ft = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }
                        r(t, e);
                        var n = t.prototype;
                        return n.addTrack = function(t) {
                            var n = this;
                            e.prototype.addTrack.call(this, t), this.queueChange_ || (this.queueChange_ = function() {
                                return n.queueTrigger("change")
                            }), this.triggerSelectedlanguagechange || (this.triggerSelectedlanguagechange_ = function() {
                                return n.trigger("selectedlanguagechange")
                            }), t.addEventListener("modechange", this.queueChange_), -1 === ["metadata", "chapters"].indexOf(t.kind) && t.addEventListener("modechange", this.triggerSelectedlanguagechange_)
                        }, n.removeTrack = function(t) {
                            e.prototype.removeTrack.call(this, t), t.removeEventListener && (this.queueChange_ && t.removeEventListener("modechange", this.queueChange_), this.selectedlanguagechange_ && t.removeEventListener("modechange", this.triggerSelectedlanguagechange_))
                        }, t
                    }(At),
                    Rt = function() {
                        function e(e) {
                            void 0 === e && (e = []), this.trackElements_ = [], Object.defineProperty(this, "length", {
                                get: function() {
                                    return this.trackElements_.length
                                }
                            });
                            for (var t = 0, n = e.length; t < n; t++) this.addTrackElement_(e[t])
                        }
                        var t = e.prototype;
                        return t.addTrackElement_ = function(e) {
                            var t = this.trackElements_.length;
                            "" + t in this || Object.defineProperty(this, t, {
                                get: function() {
                                    return this.trackElements_[t]
                                }
                            }), -1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e)
                        }, t.getTrackElementByTrack_ = function(e) {
                            for (var t, n = 0, r = this.trackElements_.length; n < r; n++)
                                if (e === this.trackElements_[n].track) {
                                    t = this.trackElements_[n];
                                    break
                                }
                            return t
                        }, t.removeTrackElement_ = function(e) {
                            for (var t = 0, n = this.trackElements_.length; t < n; t++)
                                if (e === this.trackElements_[t]) {
                                    this.trackElements_[t].track && "function" == typeof this.trackElements_[t].track.off && this.trackElements_[t].track.off(), "function" == typeof this.trackElements_[t].off && this.trackElements_[t].off(), this.trackElements_.splice(t, 1);
                                    break
                                }
                        }, e
                    }(),
                    Bt = function() {
                        function e(t) {
                            e.prototype.setCues_.call(this, t), Object.defineProperty(this, "length", {
                                get: function() {
                                    return this.length_
                                }
                            })
                        }
                        var t = e.prototype;
                        return t.setCues_ = function(e) {
                            var t = this.length || 0,
                                n = 0,
                                r = e.length;
                            this.cues_ = e, this.length_ = e.length;
                            var i = function(e) {
                                "" + e in this || Object.defineProperty(this, "" + e, {
                                    get: function() {
                                        return this.cues_[e]
                                    }
                                })
                            };
                            if (t < r)
                                for (n = t; n < r; n++) i.call(this, n)
                        }, t.getCueById = function(e) {
                            for (var t = null, n = 0, r = this.length; n < r; n++) {
                                var i = this[n];
                                if (i.id === e) {
                                    t = i;
                                    break
                                }
                            }
                            return t
                        }, e
                    }(),
                    $t = {
                        alternative: "alternative",
                        captions: "captions",
                        main: "main",
                        sign: "sign",
                        subtitles: "subtitles",
                        commentary: "commentary"
                    },
                    Ht = {
                        alternative: "alternative",
                        descriptions: "descriptions",
                        main: "main",
                        "main-desc": "main-desc",
                        translation: "translation",
                        commentary: "commentary"
                    },
                    Vt = {
                        subtitles: "subtitles",
                        captions: "captions",
                        descriptions: "descriptions",
                        chapters: "chapters",
                        metadata: "metadata"
                    },
                    Ut = {
                        disabled: "disabled",
                        hidden: "hidden",
                        showing: "showing"
                    },
                    Wt = function(e) {
                        function t(t) {
                            var n;
                            void 0 === t && (t = {}), n = e.call(this) || this;
                            var r = {
                                    id: t.id || "vjs_track_" + te(),
                                    kind: t.kind || "",
                                    label: t.label || "",
                                    language: t.language || ""
                                },
                                i = function(e) {
                                    Object.defineProperty(s(n), e, {
                                        get: function() {
                                            return r[e]
                                        },
                                        set: function() {}
                                    })
                                };
                            for (var o in r) i(o);
                            return n
                        }
                        return r(t, e), t
                    }(xe),
                    zt = function(n) {
                        var r = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
                            i = t.createElement("a");
                        i.href = n;
                        var o, s = "" === i.host && "file:" !== i.protocol;
                        s && ((o = t.createElement("div")).innerHTML = '<a href="' + n + '"></a>', i = o.firstChild, o.setAttribute("style", "display:none; position:absolute;"), t.body.appendChild(o));
                        for (var a = {}, l = 0; l < r.length; l++) a[r[l]] = i[r[l]];
                        return "http:" === a.protocol && (a.host = a.host.replace(/:80$/, "")), "https:" === a.protocol && (a.host = a.host.replace(/:443$/, "")), a.protocol || (a.protocol = e.location.protocol), s && t.body.removeChild(o), a
                    },
                    Kt = function(e) {
                        if (!e.match(/^https?:\/\//)) {
                            var n = t.createElement("div");
                            n.innerHTML = '<a href="' + e + '">x</a>', e = n.firstChild.href
                        }
                        return e
                    },
                    qt = function(e) {
                        if ("string" == typeof e) {
                            var t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(e);
                            if (t) return t.pop().toLowerCase()
                        }
                        return ""
                    },
                    Gt = function(t) {
                        var n = e.location,
                            r = zt(t),
                            i = ":" === r.protocol ? n.protocol : r.protocol,
                            o = i + r.host !== n.protocol + n.host;
                        return o
                    },
                    Xt = Object.freeze({
                        parseUrl: zt,
                        getAbsoluteURL: Kt,
                        getFileExtension: qt,
                        isCrossOrigin: Gt
                    }),
                    Yt = function(e) {
                        var t = Jt.call(e);
                        return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
                    },
                    Jt = Object.prototype.toString,
                    Qt = "Function.prototype.bind called on incompatible ",
                    Zt = Array.prototype.slice,
                    en = Object.prototype.toString,
                    tn = "[object Function]",
                    nn = Function.prototype.bind || function(e) {
                        var t = this;
                        if ("function" != typeof t || en.call(t) !== tn) throw new TypeError(Qt + t);
                        for (var n, r = Zt.call(arguments, 1), i = function() {
                                if (this instanceof n) {
                                    var i = t.apply(this, r.concat(Zt.call(arguments)));
                                    return Object(i) === i ? i : this
                                }
                                return t.apply(e, r.concat(Zt.call(arguments)))
                            }, o = Math.max(0, t.length - r.length), s = [], a = 0; a < o; a++) s.push("$" + a);
                        if (n = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(i), t.prototype) {
                            var l = function() {};
                            l.prototype = t.prototype, n.prototype = new l, l.prototype = null
                        }
                        return n
                    },
                    rn = Object.prototype.toString,
                    on = function(e) {
                        var t = rn.call(e),
                            n = "[object Arguments]" === t;
                        return n || (n = "[object Array]" !== t && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === rn.call(e.callee)), n
                    };
                if (!Object.keys) {
                    var sn = Object.prototype.hasOwnProperty,
                        an = Object.prototype.toString,
                        ln = on,
                        cn = Object.prototype.propertyIsEnumerable,
                        un = !cn.call({
                            toString: null
                        }, "toString"),
                        hn = cn.call(function() {}, "prototype"),
                        dn = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        pn = function(e) {
                            var t = e.constructor;
                            return t && t.prototype === e
                        },
                        fn = {
                            $applicationCache: !0,
                            $console: !0,
                            $external: !0,
                            $frame: !0,
                            $frameElement: !0,
                            $frames: !0,
                            $innerHeight: !0,
                            $innerWidth: !0,
                            $onmozfullscreenchange: !0,
                            $onmozfullscreenerror: !0,
                            $outerHeight: !0,
                            $outerWidth: !0,
                            $pageXOffset: !0,
                            $pageYOffset: !0,
                            $parent: !0,
                            $scrollLeft: !0,
                            $scrollTop: !0,
                            $scrollX: !0,
                            $scrollY: !0,
                            $self: !0,
                            $webkitIndexedDB: !0,
                            $webkitStorageInfo: !0,
                            $window: !0
                        },
                        vn = function() {
                            if ("undefined" == typeof window) return !1;
                            for (var e in window) try {
                                if (!fn["$" + e] && sn.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                                    pn(window[e])
                                } catch (e) {
                                    return !0
                                }
                            } catch (e) {
                                return !0
                            }
                            return !1
                        }();
                    Ot = function(e) {
                        var t = null !== e && "object" == typeof e,
                            n = "[object Function]" === an.call(e),
                            r = ln(e),
                            i = t && "[object String]" === an.call(e),
                            o = [];
                        if (!t && !n && !r) throw new TypeError("Object.keys called on a non-object");
                        var s = hn && n;
                        if (i && e.length > 0 && !sn.call(e, 0))
                            for (var a = 0; a < e.length; ++a) o.push(String(a));
                        if (r && e.length > 0)
                            for (var l = 0; l < e.length; ++l) o.push(String(l));
                        else
                            for (var c in e) s && "prototype" === c || !sn.call(e, c) || o.push(String(c));
                        if (un)
                            for (var u = function(e) {
                                    if ("undefined" == typeof window || !vn) return pn(e);
                                    try {
                                        return pn(e)
                                    } catch (e) {
                                        return !1
                                    }
                                }(e), h = 0; h < dn.length; ++h) u && "constructor" === dn[h] || !sn.call(e, dn[h]) || o.push(dn[h]);
                        return o
                    }
                }
                var yn = Ot,
                    gn = Array.prototype.slice,
                    mn = Object.keys,
                    _n = mn ? function(e) {
                        return mn(e)
                    } : yn,
                    bn = Object.keys;
                _n.shim = function() {
                    if (Object.keys) {
                        var e = function() {
                            var e = Object.keys(arguments);
                            return e && e.length === arguments.length
                        }(1, 2);
                        e || (Object.keys = function(e) {
                            return on(e) ? bn(gn.call(e)) : bn(e)
                        })
                    } else Object.keys = _n;
                    return Object.keys || _n
                };
                var Tn = _n,
                    kn = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
                    Cn = Object.prototype.toString,
                    En = Array.prototype.concat,
                    Sn = Object.defineProperty,
                    wn = Sn && function() {
                        var e = {};
                        try {
                            for (var t in Sn(e, "x", {
                                    enumerable: !1,
                                    value: e
                                }), e) return !1;
                            return e.x === e
                        } catch (e) {
                            return !1
                        }
                    }(),
                    Pn = function(e, t, n, r) {
                        (!(t in e) || function(e) {
                            return "function" == typeof e && "[object Function]" === Cn.call(e)
                        }(r) && r()) && (wn ? Sn(e, t, {
                            configurable: !0,
                            enumerable: !1,
                            value: n,
                            writable: !0
                        }) : e[t] = n)
                    },
                    xn = function(e, t) {
                        var n = arguments.length > 2 ? arguments[2] : {},
                            r = Tn(t);
                        kn && (r = En.call(r, Object.getOwnPropertySymbols(t)));
                        for (var i = 0; i < r.length; i += 1) Pn(e, r[i], t[r[i]], n[r[i]])
                    };
                xn.supportsDescriptors = !!wn;
                var jn, An = xn,
                    In = Object.getOwnPropertyDescriptor ? function() {
                        return Object.getOwnPropertyDescriptor(arguments, "callee").get
                    }() : function() {
                        throw new TypeError
                    },
                    On = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator,
                    Dn = Object.getPrototypeOf || function(e) {
                        return e.__proto__
                    },
                    Nn = "undefined" == typeof Uint8Array ? jn : Dn(Uint8Array),
                    Mn = {
                        "$ %Array%": Array,
                        "$ %ArrayBuffer%": "undefined" == typeof ArrayBuffer ? jn : ArrayBuffer,
                        "$ %ArrayBufferPrototype%": "undefined" == typeof ArrayBuffer ? jn : ArrayBuffer.prototype,
                        "$ %ArrayIteratorPrototype%": On ? Dn([][Symbol.iterator]()) : jn,
                        "$ %ArrayPrototype%": Array.prototype,
                        "$ %ArrayProto_entries%": Array.prototype.entries,
                        "$ %ArrayProto_forEach%": Array.prototype.forEach,
                        "$ %ArrayProto_keys%": Array.prototype.keys,
                        "$ %ArrayProto_values%": Array.prototype.values,
                        "$ %AsyncFromSyncIteratorPrototype%": jn,
                        "$ %AsyncFunction%": void 0,
                        "$ %AsyncFunctionPrototype%": jn,
                        "$ %AsyncGenerator%": jn,
                        "$ %AsyncGeneratorFunction%": void 0,
                        "$ %AsyncGeneratorPrototype%": jn,
                        "$ %AsyncIteratorPrototype%": jn,
                        "$ %Atomics%": "undefined" == typeof Atomics ? jn : Atomics,
                        "$ %Boolean%": Boolean,
                        "$ %BooleanPrototype%": Boolean.prototype,
                        "$ %DataView%": "undefined" == typeof DataView ? jn : DataView,
                        "$ %DataViewPrototype%": "undefined" == typeof DataView ? jn : DataView.prototype,
                        "$ %Date%": Date,
                        "$ %DatePrototype%": Date.prototype,
                        "$ %decodeURI%": decodeURI,
                        "$ %decodeURIComponent%": decodeURIComponent,
                        "$ %encodeURI%": encodeURI,
                        "$ %encodeURIComponent%": encodeURIComponent,
                        "$ %Error%": Error,
                        "$ %ErrorPrototype%": Error.prototype,
                        "$ %eval%": eval,
                        "$ %EvalError%": EvalError,
                        "$ %EvalErrorPrototype%": EvalError.prototype,
                        "$ %Float32Array%": "undefined" == typeof Float32Array ? jn : Float32Array,
                        "$ %Float32ArrayPrototype%": "undefined" == typeof Float32Array ? jn : Float32Array.prototype,
                        "$ %Float64Array%": "undefined" == typeof Float64Array ? jn : Float64Array,
                        "$ %Float64ArrayPrototype%": "undefined" == typeof Float64Array ? jn : Float64Array.prototype,
                        "$ %Function%": Function,
                        "$ %FunctionPrototype%": Function.prototype,
                        "$ %Generator%": jn,
                        "$ %GeneratorFunction%": void 0,
                        "$ %GeneratorPrototype%": jn,
                        "$ %Int8Array%": "undefined" == typeof Int8Array ? jn : Int8Array,
                        "$ %Int8ArrayPrototype%": "undefined" == typeof Int8Array ? jn : Int8Array.prototype,
                        "$ %Int16Array%": "undefined" == typeof Int16Array ? jn : Int16Array,
                        "$ %Int16ArrayPrototype%": "undefined" == typeof Int16Array ? jn : Int8Array.prototype,
                        "$ %Int32Array%": "undefined" == typeof Int32Array ? jn : Int32Array,
                        "$ %Int32ArrayPrototype%": "undefined" == typeof Int32Array ? jn : Int32Array.prototype,
                        "$ %isFinite%": isFinite,
                        "$ %isNaN%": isNaN,
                        "$ %IteratorPrototype%": On ? Dn(Dn([][Symbol.iterator]())) : jn,
                        "$ %JSON%": JSON,
                        "$ %JSONParse%": JSON.parse,
                        "$ %Map%": "undefined" == typeof Map ? jn : Map,
                        "$ %MapIteratorPrototype%": "undefined" != typeof Map && On ? Dn((new Map)[Symbol.iterator]()) : jn,
                        "$ %MapPrototype%": "undefined" == typeof Map ? jn : Map.prototype,
                        "$ %Math%": Math,
                        "$ %Number%": Number,
                        "$ %NumberPrototype%": Number.prototype,
                        "$ %Object%": Object,
                        "$ %ObjectPrototype%": Object.prototype,
                        "$ %ObjProto_toString%": Object.prototype.toString,
                        "$ %ObjProto_valueOf%": Object.prototype.valueOf,
                        "$ %parseFloat%": parseFloat,
                        "$ %parseInt%": parseInt,
                        "$ %Promise%": "undefined" == typeof Promise ? jn : Promise,
                        "$ %PromisePrototype%": "undefined" == typeof Promise ? jn : Promise.prototype,
                        "$ %PromiseProto_then%": "undefined" == typeof Promise ? jn : Promise.prototype.then,
                        "$ %Promise_all%": "undefined" == typeof Promise ? jn : Promise.all,
                        "$ %Promise_reject%": "undefined" == typeof Promise ? jn : Promise.reject,
                        "$ %Promise_resolve%": "undefined" == typeof Promise ? jn : Promise.resolve,
                        "$ %Proxy%": "undefined" == typeof Proxy ? jn : Proxy,
                        "$ %RangeError%": RangeError,
                        "$ %RangeErrorPrototype%": RangeError.prototype,
                        "$ %ReferenceError%": ReferenceError,
                        "$ %ReferenceErrorPrototype%": ReferenceError.prototype,
                        "$ %Reflect%": "undefined" == typeof Reflect ? jn : Reflect,
                        "$ %RegExp%": RegExp,
                        "$ %RegExpPrototype%": RegExp.prototype,
                        "$ %Set%": "undefined" == typeof Set ? jn : Set,
                        "$ %SetIteratorPrototype%": "undefined" != typeof Set && On ? Dn((new Set)[Symbol.iterator]()) : jn,
                        "$ %SetPrototype%": "undefined" == typeof Set ? jn : Set.prototype,
                        "$ %SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? jn : SharedArrayBuffer,
                        "$ %SharedArrayBufferPrototype%": "undefined" == typeof SharedArrayBuffer ? jn : SharedArrayBuffer.prototype,
                        "$ %String%": String,
                        "$ %StringIteratorPrototype%": On ? Dn("" [Symbol.iterator]()) : jn,
                        "$ %StringPrototype%": String.prototype,
                        "$ %Symbol%": On ? Symbol : jn,
                        "$ %SymbolPrototype%": On ? Symbol.prototype : jn,
                        "$ %SyntaxError%": SyntaxError,
                        "$ %SyntaxErrorPrototype%": SyntaxError.prototype,
                        "$ %ThrowTypeError%": In,
                        "$ %TypedArray%": Nn,
                        "$ %TypedArrayPrototype%": Nn ? Nn.prototype : jn,
                        "$ %TypeError%": TypeError,
                        "$ %TypeErrorPrototype%": TypeError.prototype,
                        "$ %Uint8Array%": "undefined" == typeof Uint8Array ? jn : Uint8Array,
                        "$ %Uint8ArrayPrototype%": "undefined" == typeof Uint8Array ? jn : Uint8Array.prototype,
                        "$ %Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? jn : Uint8ClampedArray,
                        "$ %Uint8ClampedArrayPrototype%": "undefined" == typeof Uint8ClampedArray ? jn : Uint8ClampedArray.prototype,
                        "$ %Uint16Array%": "undefined" == typeof Uint16Array ? jn : Uint16Array,
                        "$ %Uint16ArrayPrototype%": "undefined" == typeof Uint16Array ? jn : Uint16Array.prototype,
                        "$ %Uint32Array%": "undefined" == typeof Uint32Array ? jn : Uint32Array,
                        "$ %Uint32ArrayPrototype%": "undefined" == typeof Uint32Array ? jn : Uint32Array.prototype,
                        "$ %URIError%": URIError,
                        "$ %URIErrorPrototype%": URIError.prototype,
                        "$ %WeakMap%": "undefined" == typeof WeakMap ? jn : WeakMap,
                        "$ %WeakMapPrototype%": "undefined" == typeof WeakMap ? jn : WeakMap.prototype,
                        "$ %WeakSet%": "undefined" == typeof WeakSet ? jn : WeakSet,
                        "$ %WeakSetPrototype%": "undefined" == typeof WeakSet ? jn : WeakSet.prototype
                    },
                    Ln = function(e, t) {
                        if (arguments.length > 1 && "boolean" != typeof t) throw new TypeError('"allowMissing" argument must be a boolean');
                        var n = "$ " + e;
                        if (!(n in Mn)) throw new SyntaxError("intrinsic " + e + " does not exist!");
                        if (void 0 === Mn[n] && !t) throw new TypeError("intrinsic " + e + " exists, but is not available. Please file an issue!");
                        return Mn[n]
                    },
                    Fn = nn.call(Function.call, Object.prototype.hasOwnProperty),
                    Rn = Ln("%TypeError%"),
                    Bn = Ln("%SyntaxError%"),
                    $n = {
                        "Property Descriptor": function(e, t) {
                            if ("Object" !== e.Type(t)) return !1;
                            var n = {
                                "[[Configurable]]": !0,
                                "[[Enumerable]]": !0,
                                "[[Get]]": !0,
                                "[[Set]]": !0,
                                "[[Value]]": !0,
                                "[[Writable]]": !0
                            };
                            for (var r in t)
                                if (Fn(t, r) && !n[r]) return !1;
                            var i = Fn(t, "[[Value]]"),
                                o = Fn(t, "[[Get]]") || Fn(t, "[[Set]]");
                            if (i && o) throw new Rn("Property Descriptors may not be both accessor and data descriptors");
                            return !0
                        }
                    },
                    Hn = function(e, t, n, r) {
                        var i = $n[t];
                        if ("function" != typeof i) throw new Bn("unknown record type: " + t);
                        if (!i(e, r)) throw new Rn(n + " must be a " + t);
                        console.log(i(e, r), r)
                    },
                    Vn = Number.isNaN || function(e) {
                        return e != e
                    },
                    Un = Number.isNaN || function(e) {
                        return e != e
                    },
                    Wn = Number.isFinite || function(e) {
                        return "number" == typeof e && !Un(e) && e !== 1 / 0 && e !== -1 / 0
                    },
                    zn = function(e) {
                        return e >= 0 ? 1 : -1
                    },
                    Kn = Function.prototype.toString,
                    qn = /^\s*class\b/,
                    Gn = function(e) {
                        try {
                            var t = Kn.call(e);
                            return qn.test(t)
                        } catch (e) {
                            return !1
                        }
                    },
                    Xn = Object.prototype.toString,
                    Yn = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                    Jn = function(e) {
                        if (!e) return !1;
                        if ("function" != typeof e && "object" != typeof e) return !1;
                        if ("function" == typeof e && !e.prototype) return !0;
                        if (Yn) return function(e) {
                            try {
                                return !Gn(e) && (Kn.call(e), !0)
                            } catch (e) {
                                return !1
                            }
                        }(e);
                        if (Gn(e)) return !1;
                        var t = Xn.call(e);
                        return "[object Function]" === t || "[object GeneratorFunction]" === t
                    },
                    Qn = function(e) {
                        return null === e || "function" != typeof e && "object" != typeof e
                    },
                    Zn = Object.prototype.toString,
                    er = {
                        "[[DefaultValue]]": function(e) {
                            var t;
                            if ((t = arguments.length > 1 ? arguments[1] : "[object Date]" === Zn.call(e) ? String : Number) === String || t === Number) {
                                var n, r, i = t === String ? ["toString", "valueOf"] : ["valueOf", "toString"];
                                for (r = 0; r < i.length; ++r)
                                    if (Jn(e[i[r]]) && (n = e[i[r]](), Qn(n))) return n;
                                throw new TypeError("No default value")
                            }
                            throw new TypeError("invalid [[DefaultValue]] hint supplied")
                        }
                    },
                    tr = Ln("%Object%"),
                    nr = Ln("%TypeError%"),
                    rr = Ln("%String%"),
                    ir = {
                        ToPrimitive: function(e) {
                            return Qn(e) ? e : arguments.length > 1 ? er["[[DefaultValue]]"](e, arguments[1]) : er["[[DefaultValue]]"](e)
                        },
                        ToBoolean: function(e) {
                            return !!e
                        },
                        ToNumber: function(e) {
                            return +e
                        },
                        ToInteger: function(e) {
                            var t = this.ToNumber(e);
                            return Vn(t) ? 0 : 0 !== t && Wn(t) ? zn(t) * Math.floor(Math.abs(t)) : t
                        },
                        ToInt32: function(e) {
                            return this.ToNumber(e) >> 0
                        },
                        ToUint32: function(e) {
                            return this.ToNumber(e) >>> 0
                        },
                        ToUint16: function(e) {
                            var t = this.ToNumber(e);
                            if (Vn(t) || 0 === t || !Wn(t)) return 0;
                            var n = zn(t) * Math.floor(Math.abs(t));
                            return function(e, t) {
                                var n = e % t;
                                return Math.floor(n >= 0 ? n : n + t)
                            }(n, 65536)
                        },
                        ToString: function(e) {
                            return rr(e)
                        },
                        ToObject: function(e) {
                            return this.CheckObjectCoercible(e), tr(e)
                        },
                        CheckObjectCoercible: function(e, t) {
                            if (null == e) throw new nr(t || "Cannot call method on " + e);
                            return e
                        },
                        IsCallable: Jn,
                        SameValue: function(e, t) {
                            return e === t ? 0 !== e || 1 / e == 1 / t : Vn(e) && Vn(t)
                        },
                        Type: function(e) {
                            return null === e ? "Null" : void 0 === e ? "Undefined" : "function" == typeof e || "object" == typeof e ? "Object" : "number" == typeof e ? "Number" : "boolean" == typeof e ? "Boolean" : "string" == typeof e ? "String" : void 0
                        },
                        IsPropertyDescriptor: function(e) {
                            if ("Object" !== this.Type(e)) return !1;
                            var t = {
                                "[[Configurable]]": !0,
                                "[[Enumerable]]": !0,
                                "[[Get]]": !0,
                                "[[Set]]": !0,
                                "[[Value]]": !0,
                                "[[Writable]]": !0
                            };
                            for (var n in e)
                                if (Fn(e, n) && !t[n]) return !1;
                            var r = Fn(e, "[[Value]]"),
                                i = Fn(e, "[[Get]]") || Fn(e, "[[Set]]");
                            if (r && i) throw new nr("Property Descriptors may not be both accessor and data descriptors");
                            return !0
                        },
                        IsAccessorDescriptor: function(e) {
                            return void 0 !== e && (Hn(this, "Property Descriptor", "Desc", e), !(!Fn(e, "[[Get]]") && !Fn(e, "[[Set]]")))
                        },
                        IsDataDescriptor: function(e) {
                            return void 0 !== e && (Hn(this, "Property Descriptor", "Desc", e), !(!Fn(e, "[[Value]]") && !Fn(e, "[[Writable]]")))
                        },
                        IsGenericDescriptor: function(e) {
                            return void 0 !== e && (Hn(this, "Property Descriptor", "Desc", e), !this.IsAccessorDescriptor(e) && !this.IsDataDescriptor(e))
                        },
                        FromPropertyDescriptor: function(e) {
                            if (void 0 === e) return e;
                            if (Hn(this, "Property Descriptor", "Desc", e), this.IsDataDescriptor(e)) return {
                                value: e["[[Value]]"],
                                writable: !!e["[[Writable]]"],
                                enumerable: !!e["[[Enumerable]]"],
                                configurable: !!e["[[Configurable]]"]
                            };
                            if (this.IsAccessorDescriptor(e)) return {
                                get: e["[[Get]]"],
                                set: e["[[Set]]"],
                                enumerable: !!e["[[Enumerable]]"],
                                configurable: !!e["[[Configurable]]"]
                            };
                            throw new nr("FromPropertyDescriptor must be called with a fully populated Property Descriptor")
                        },
                        ToPropertyDescriptor: function(e) {
                            if ("Object" !== this.Type(e)) throw new nr("ToPropertyDescriptor requires an object");
                            var t = {};
                            if (Fn(e, "enumerable") && (t["[[Enumerable]]"] = this.ToBoolean(e.enumerable)), Fn(e, "configurable") && (t["[[Configurable]]"] = this.ToBoolean(e.configurable)), Fn(e, "value") && (t["[[Value]]"] = e.value), Fn(e, "writable") && (t["[[Writable]]"] = this.ToBoolean(e.writable)), Fn(e, "get")) {
                                var n = e.get;
                                if (void 0 !== n && !this.IsCallable(n)) throw new TypeError("getter must be a function");
                                t["[[Get]]"] = n
                            }
                            if (Fn(e, "set")) {
                                var r = e.set;
                                if (void 0 !== r && !this.IsCallable(r)) throw new nr("setter must be a function");
                                t["[[Set]]"] = r
                            }
                            if ((Fn(t, "[[Get]]") || Fn(t, "[[Set]]")) && (Fn(t, "[[Value]]") || Fn(t, "[[Writable]]"))) throw new nr("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
                            return t
                        }
                    },
                    or = nn.call(Function.call, String.prototype.replace),
                    sr = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/,
                    ar = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/,
                    lr = function() {
                        var e = ir.ToString(ir.CheckObjectCoercible(this));
                        return or(or(e, sr, ""), ar, "")
                    },
                    cr = function() {
                        return String.prototype.trim && "​" === "​".trim() ? String.prototype.trim : lr
                    },
                    ur = nn.call(Function.call, cr());
                An(ur, {
                    getPolyfill: cr,
                    implementation: lr,
                    shim: function() {
                        var e = cr();
                        return An(String.prototype, {
                            trim: e
                        }, {
                            trim: function() {
                                return String.prototype.trim !== e
                            }
                        }), e
                    }
                });
                var hr = ur,
                    dr = Object.prototype.toString,
                    pr = Object.prototype.hasOwnProperty,
                    fr = function(e, t, n) {
                        for (var r = 0, i = e.length; r < i; r++) pr.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e))
                    },
                    vr = function(e, t, n) {
                        for (var r = 0, i = e.length; r < i; r++) null == n ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e)
                    },
                    yr = function(e, t, n) {
                        for (var r in e) pr.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e))
                    },
                    gr = function(e, t, n) {
                        if (!Jn(t)) throw new TypeError("iterator must be a function");
                        var r;
                        arguments.length >= 3 && (r = n), "[object Array]" === dr.call(e) ? fr(e, t, r) : "string" == typeof e ? vr(e, t, r) : yr(e, t, r)
                    },
                    mr = function(e) {
                        if (!e) return {};
                        var t = {};
                        return gr(hr(e).split("\n"), function(e) {
                            var n = e.indexOf(":"),
                                r = hr(e.slice(0, n)).toLowerCase(),
                                i = hr(e.slice(n + 1));
                            void 0 === t[r] ? t[r] = i : function(e) {
                                return "[object Array]" === Object.prototype.toString.call(e)
                            }(t[r]) ? t[r].push(i) : t[r] = [t[r], i]
                        }), t
                    },
                    _r = function() {
                        for (var e = {}, t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) br.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    },
                    br = Object.prototype.hasOwnProperty,
                    Tr = Cr;

                function kr(e, t, n) {
                    var r = e;
                    return Yt(t) ? (n = t, "string" == typeof e && (r = {
                        uri: e
                    })) : r = _r(t, {
                        uri: e
                    }), r.callback = n, r
                }

                function Cr(e, t, n) {
                    return Er(t = kr(e, t, n))
                }

                function Er(e) {
                    if (void 0 === e.callback) throw new Error("callback argument missing");
                    var t = !1,
                        n = function(n, r, i) {
                            t || (t = !0, e.callback(n, r, i))
                        };

                    function r() {
                        var e = void 0;
                        if (e = l.response ? l.response : l.responseText || function(e) {
                                if ("document" === e.responseType) return e.responseXML;
                                var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
                                return "" !== e.responseType || t ? null : e.responseXML
                            }(l), v) try {
                            e = JSON.parse(e)
                        } catch (e) {}
                        return e
                    }

                    function i(e) {
                        return clearTimeout(c), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), e.statusCode = 0, n(e, y)
                    }

                    function o() {
                        if (!a) {
                            var t;
                            clearTimeout(c), t = e.useXDR && void 0 === l.status ? 200 : 1223 === l.status ? 204 : l.status;
                            var i = y,
                                o = null;
                            return 0 !== t ? (i = {
                                body: r(),
                                statusCode: t,
                                method: h,
                                headers: {},
                                url: u,
                                rawRequest: l
                            }, l.getAllResponseHeaders && (i.headers = mr(l.getAllResponseHeaders()))) : o = new Error("Internal XMLHttpRequest Error"), n(o, i, i.body)
                        }
                    }
                    var s, a, l = e.xhr || null;
                    l || (l = e.cors || e.useXDR ? new Cr.XDomainRequest : new Cr.XMLHttpRequest);
                    var c, u = l.url = e.uri || e.url,
                        h = l.method = e.method || "GET",
                        d = e.body || e.data,
                        p = l.headers = e.headers || {},
                        f = !!e.sync,
                        v = !1,
                        y = {
                            body: void 0,
                            headers: {},
                            statusCode: 0,
                            method: h,
                            url: u,
                            rawRequest: l
                        };
                    if ("json" in e && !1 !== e.json && (v = !0, p.accept || p.Accept || (p.Accept = "application/json"), "GET" !== h && "HEAD" !== h && (p["content-type"] || p["Content-Type"] || (p["Content-Type"] = "application/json"), d = JSON.stringify(!0 === e.json ? d : e.json))), l.onreadystatechange = function() {
                            4 === l.readyState && setTimeout(o, 0)
                        }, l.onload = o, l.onerror = i, l.onprogress = function() {}, l.onabort = function() {
                            a = !0
                        }, l.ontimeout = i, l.open(h, u, !f, e.username, e.password), f || (l.withCredentials = !!e.withCredentials), !f && e.timeout > 0 && (c = setTimeout(function() {
                            if (!a) {
                                a = !0, l.abort("timeout");
                                var e = new Error("XMLHttpRequest timeout");
                                e.code = "ETIMEDOUT", i(e)
                            }
                        }, e.timeout)), l.setRequestHeader)
                        for (s in p) p.hasOwnProperty(s) && l.setRequestHeader(s, p[s]);
                    else if (e.headers && ! function(e) {
                            for (var t in e)
                                if (e.hasOwnProperty(t)) return !1;
                            return !0
                        }(e.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
                    return "responseType" in e && (l.responseType = e.responseType), "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(l), l.send(d || null), l
                }
                Cr.XMLHttpRequest = e.XMLHttpRequest || function() {}, Cr.XDomainRequest = "withCredentials" in new Cr.XMLHttpRequest ? Cr.XMLHttpRequest : e.XDomainRequest,
                    function(e, t) {
                        for (var n = 0; n < e.length; n++) t(e[n])
                    }(["get", "put", "post", "patch", "head", "delete"], function(e) {
                        Cr["delete" === e ? "del" : e] = function(t, n, r) {
                            return (n = kr(t, n, r)).method = e.toUpperCase(), Er(n)
                        }
                    });
                var Sr = function(t, n) {
                        var r = new e.WebVTT.Parser(e, e.vttjs, e.WebVTT.StringDecoder()),
                            i = [];
                        r.oncue = function(e) {
                            n.addCue(e)
                        }, r.onparsingerror = function(e) {
                            i.push(e)
                        }, r.onflush = function() {
                            n.trigger({
                                type: "loadeddata",
                                target: n
                            })
                        }, r.parse(t), i.length > 0 && (e.console && e.console.groupCollapsed && e.console.groupCollapsed("Text Track parsing errors for " + n.src), i.forEach(function(e) {
                            return u.error(e)
                        }), e.console && e.console.groupEnd && e.console.groupEnd()), r.flush()
                    },
                    wr = function(t, n) {
                        var r = {
                                uri: t
                            },
                            i = Gt(t);
                        i && (r.cors = i), Tr(r, Se(this, function(t, r, i) {
                            if (t) return u.error(t, r);
                            if (n.loaded_ = !0, "function" != typeof e.WebVTT) {
                                if (n.tech_) {
                                    var o, s = function() {
                                        u.error("vttjs failed to load, stopping trying to process " + n.src), n.tech_.off("vttjsloaded", o)
                                    };
                                    o = function() {
                                        return n.tech_.off("vttjserror", s), Sr(i, n)
                                    }, n.tech_.one("vttjsloaded", o), n.tech_.one("vttjserror", s)
                                }
                            } else Sr(i, n)
                        }))
                    },
                    Pr = function(t) {
                        function n(e) {
                            var n;
                            if (void 0 === e && (e = {}), !e.tech) throw new Error("A tech was not provided.");
                            var r = He(e, {
                                    kind: Vt[e.kind] || "subtitles",
                                    language: e.language || e.srclang || ""
                                }),
                                i = Ut[r.mode] || "disabled",
                                o = r.default;
                            "metadata" !== r.kind && "chapters" !== r.kind || (i = "hidden"), (n = t.call(this, r) || this).tech_ = r.tech, n.cues_ = [], n.activeCues_ = [];
                            var a = new Bt(n.cues_),
                                l = new Bt(n.activeCues_),
                                c = !1,
                                u = Se(s(n), function() {
                                    this.activeCues = this.activeCues, c && (this.trigger("cuechange"), c = !1)
                                });
                            return "disabled" !== i && n.tech_.ready(function() {
                                n.tech_.on("timeupdate", u)
                            }, !0), Object.defineProperties(s(n), {
                                default: {
                                    get: function() {
                                        return o
                                    },
                                    set: function() {}
                                },
                                mode: {
                                    get: function() {
                                        return i
                                    },
                                    set: function(e) {
                                        var t = this;
                                        Ut[e] && ("disabled" !== (i = e) ? this.tech_.ready(function() {
                                            t.tech_.on("timeupdate", u)
                                        }, !0) : this.tech_.off("timeupdate", u), this.trigger("modechange"))
                                    }
                                },
                                cues: {
                                    get: function() {
                                        return this.loaded_ ? a : null
                                    },
                                    set: function() {}
                                },
                                activeCues: {
                                    get: function() {
                                        if (!this.loaded_) return null;
                                        if (0 === this.cues.length) return l;
                                        for (var e = this.tech_.currentTime(), t = [], n = 0, r = this.cues.length; n < r; n++) {
                                            var i = this.cues[n];
                                            i.startTime <= e && i.endTime >= e ? t.push(i) : i.startTime === i.endTime && i.startTime <= e && i.startTime + .5 >= e && t.push(i)
                                        }
                                        if (c = !1, t.length !== this.activeCues_.length) c = !0;
                                        else
                                            for (var o = 0; o < t.length; o++) - 1 === this.activeCues_.indexOf(t[o]) && (c = !0);
                                        return this.activeCues_ = t, l.setCues_(this.activeCues_), l
                                    },
                                    set: function() {}
                                }
                            }), r.src ? (n.src = r.src, wr(r.src, s(n))) : n.loaded_ = !0, n
                        }
                        r(n, t);
                        var i = n.prototype;
                        return i.addCue = function(t) {
                            var n = t;
                            if (e.vttjs && !(t instanceof e.vttjs.VTTCue)) {
                                for (var r in n = new e.vttjs.VTTCue(t.startTime, t.endTime, t.text), t) r in n || (n[r] = t[r]);
                                n.id = t.id, n.originalCue_ = t
                            }
                            for (var i = this.tech_.textTracks(), o = 0; o < i.length; o++) i[o] !== this && i[o].removeCue(n);
                            this.cues_.push(n), this.cues.setCues_(this.cues_)
                        }, i.removeCue = function(e) {
                            for (var t = this.cues_.length; t--;) {
                                var n = this.cues_[t];
                                if (n === e || n.originalCue_ && n.originalCue_ === e) {
                                    this.cues_.splice(t, 1), this.cues.setCues_(this.cues_);
                                    break
                                }
                            }
                        }, n
                    }(Wt);
                Pr.prototype.allowedEvents_ = {
                    cuechange: "cuechange"
                };
                var xr = function(e) {
                        function t(t) {
                            var n;
                            void 0 === t && (t = {});
                            var r = He(t, {
                                kind: Ht[t.kind] || ""
                            });
                            n = e.call(this, r) || this;
                            var i = !1;
                            return Object.defineProperty(s(n), "enabled", {
                                get: function() {
                                    return i
                                },
                                set: function(e) {
                                    "boolean" == typeof e && e !== i && (i = e, this.trigger("enabledchange"))
                                }
                            }), r.enabled && (n.enabled = r.enabled), n.loaded_ = !0, n
                        }
                        return r(t, e), t
                    }(Wt),
                    jr = function(e) {
                        function t(t) {
                            var n;
                            void 0 === t && (t = {});
                            var r = He(t, {
                                kind: $t[t.kind] || ""
                            });
                            n = e.call(this, r) || this;
                            var i = !1;
                            return Object.defineProperty(s(n), "selected", {
                                get: function() {
                                    return i
                                },
                                set: function(e) {
                                    "boolean" == typeof e && e !== i && (i = e, this.trigger("selectedchange"))
                                }
                            }), r.selected && (n.selected = r.selected), n
                        }
                        return r(t, e), t
                    }(Wt),
                    Ar = 0,
                    Ir = 2,
                    Or = function(e) {
                        function t(t) {
                            var n, r;
                            void 0 === t && (t = {}), n = e.call(this) || this;
                            var i = new Pr(t);
                            return n.kind = i.kind, n.src = i.src, n.srclang = i.language, n.label = i.label, n.default = i.default, Object.defineProperties(s(n), {
                                readyState: {
                                    get: function() {
                                        return r
                                    }
                                },
                                track: {
                                    get: function() {
                                        return i
                                    }
                                }
                            }), r = Ar, i.addEventListener("loadeddata", function() {
                                r = Ir, n.trigger({
                                    type: "load",
                                    target: s(n)
                                })
                            }), n
                        }
                        return r(t, e), t
                    }(xe);
                Or.prototype.allowedEvents_ = {
                    load: "load"
                }, Or.NONE = Ar, Or.LOADING = 1, Or.LOADED = Ir, Or.ERROR = 3;
                var Dr = {
                    audio: {
                        ListClass: Nt,
                        TrackClass: xr,
                        capitalName: "Audio"
                    },
                    video: {
                        ListClass: Lt,
                        TrackClass: jr,
                        capitalName: "Video"
                    },
                    text: {
                        ListClass: Ft,
                        TrackClass: Pr,
                        capitalName: "Text"
                    }
                };
                Object.keys(Dr).forEach(function(e) {
                    Dr[e].getterName = e + "Tracks", Dr[e].privateName = e + "Tracks_"
                });
                var Nr = {
                        remoteText: {
                            ListClass: Ft,
                            TrackClass: Pr,
                            capitalName: "RemoteText",
                            getterName: "remoteTextTracks",
                            privateName: "remoteTextTracks_"
                        },
                        remoteTextEl: {
                            ListClass: Rt,
                            TrackClass: Or,
                            capitalName: "RemoteTextTrackEls",
                            getterName: "remoteTextTrackEls",
                            privateName: "remoteTextTrackEls_"
                        }
                    },
                    Mr = He(Dr, Nr);
                Nr.names = Object.keys(Nr), Dr.names = Object.keys(Dr), Mr.names = [].concat(Nr.names).concat(Dr.names);
                var Lr = {},
                    Fr = function(n) {
                        function i(e, t) {
                            var r;
                            return void 0 === e && (e = {}), void 0 === t && (t = function() {}), e.reportTouchActivity = !1, (r = n.call(this, null, e, t) || this).hasStarted_ = !1, r.on("playing", function() {
                                this.hasStarted_ = !0
                            }), r.on("loadstart", function() {
                                this.hasStarted_ = !1
                            }), Mr.names.forEach(function(t) {
                                var n = Mr[t];
                                e && e[n.getterName] && (r[n.privateName] = e[n.getterName])
                            }), r.featuresProgressEvents || r.manualProgressOn(), r.featuresTimeupdateEvents || r.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function(t) {
                                !1 === e["native" + t + "Tracks"] && (r["featuresNative" + t + "Tracks"] = !1)
                            }), !1 === e.nativeCaptions || !1 === e.nativeTextTracks ? r.featuresNativeTextTracks = !1 : !0 !== e.nativeCaptions && !0 !== e.nativeTextTracks || (r.featuresNativeTextTracks = !0), r.featuresNativeTextTracks || r.emulateTextTracks(), r.autoRemoteTextTracks_ = new Mr.text.ListClass, r.initTrackListeners(), e.nativeControlsForTouch || r.emitTapEvents(), r.constructor && (r.name_ = r.constructor.name || "Unknown Tech"), r
                        }
                        r(i, n);
                        var o = i.prototype;
                        return o.triggerSourceset = function(e) {
                            var t = this;
                            this.isReady_ || this.one("ready", function() {
                                return t.setTimeout(function() {
                                    return t.triggerSourceset(e)
                                }, 1)
                            }), this.trigger({
                                src: e,
                                type: "sourceset"
                            })
                        }, o.manualProgressOn = function() {
                            this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
                        }, o.manualProgressOff = function() {
                            this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
                        }, o.trackProgress = function(e) {
                            this.stopTrackingProgress(), this.progressInterval = this.setInterval(Se(this, function() {
                                var e = this.bufferedPercent();
                                this.bufferedPercent_ !== e && this.trigger("progress"), this.bufferedPercent_ = e, 1 === e && this.stopTrackingProgress()
                            }), 500)
                        }, o.onDurationChange = function(e) {
                            this.duration_ = this.duration()
                        }, o.buffered = function() {
                            return dt(0, 0)
                        }, o.bufferedPercent = function() {
                            return pt(this.buffered(), this.duration_)
                        }, o.stopTrackingProgress = function() {
                            this.clearInterval(this.progressInterval)
                        }, o.manualTimeUpdatesOn = function() {
                            this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
                        }, o.manualTimeUpdatesOff = function() {
                            this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
                        }, o.trackCurrentTime = function() {
                            this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
                                this.trigger({
                                    type: "timeupdate",
                                    target: this,
                                    manuallyTriggered: !0
                                })
                            }, 250)
                        }, o.stopTrackingCurrentTime = function() {
                            this.clearInterval(this.currentTimeInterval), this.trigger({
                                type: "timeupdate",
                                target: this,
                                manuallyTriggered: !0
                            })
                        }, o.dispose = function() {
                            this.clearTracks(Dr.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), n.prototype.dispose.call(this)
                        }, o.clearTracks = function(e) {
                            var t = this;
                            (e = [].concat(e)).forEach(function(e) {
                                for (var n = t[e + "Tracks"]() || [], r = n.length; r--;) {
                                    var i = n[r];
                                    "text" === e && t.removeRemoteTextTrack(i), n.removeTrack(i)
                                }
                            })
                        }, o.cleanupAutoTextTracks = function() {
                            for (var e = this.autoRemoteTextTracks_ || [], t = e.length; t--;) {
                                var n = e[t];
                                this.removeRemoteTextTrack(n)
                            }
                        }, o.reset = function() {}, o.error = function(e) {
                            return void 0 !== e && (this.error_ = new bt(e), this.trigger("error")), this.error_
                        }, o.played = function() {
                            return this.hasStarted_ ? dt(0, 0) : dt()
                        }, o.setCurrentTime = function() {
                            this.manualTimeUpdates && this.trigger({
                                type: "timeupdate",
                                target: this,
                                manuallyTriggered: !0
                            })
                        }, o.initTrackListeners = function() {
                            var e = this;
                            Dr.names.forEach(function(t) {
                                var n = Dr[t],
                                    r = function() {
                                        e.trigger(t + "trackchange")
                                    },
                                    i = e[n.getterName]();
                                i.addEventListener("removetrack", r), i.addEventListener("addtrack", r), e.on("dispose", function() {
                                    i.removeEventListener("removetrack", r), i.removeEventListener("addtrack", r)
                                })
                            })
                        }, o.addWebVttScript_ = function() {
                            var n = this;
                            if (!e.WebVTT)
                                if (t.body.contains(this.el())) {
                                    if (!this.options_["vtt.js"] && _(Lr) && Object.keys(Lr).length > 0) return void this.trigger("vttjsloaded");
                                    var r = t.createElement("script");
                                    r.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js", r.onload = function() {
                                        n.trigger("vttjsloaded")
                                    }, r.onerror = function() {
                                        n.trigger("vttjserror")
                                    }, this.on("dispose", function() {
                                        r.onload = null, r.onerror = null
                                    }), e.WebVTT = !0, this.el().parentNode.appendChild(r)
                                } else this.ready(this.addWebVttScript_)
                        }, o.emulateTextTracks = function() {
                            var e = this,
                                t = this.textTracks(),
                                n = this.remoteTextTracks(),
                                r = function(e) {
                                    return t.addTrack(e.track)
                                },
                                i = function(e) {
                                    return t.removeTrack(e.track)
                                };
                            n.on("addtrack", r), n.on("removetrack", i), this.addWebVttScript_();
                            var o = function() {
                                    return e.trigger("texttrackchange")
                                },
                                s = function() {
                                    o();
                                    for (var e = 0; e < t.length; e++) {
                                        var n = t[e];
                                        n.removeEventListener("cuechange", o), "showing" === n.mode && n.addEventListener("cuechange", o)
                                    }
                                };
                            s(), t.addEventListener("change", s), t.addEventListener("addtrack", s), t.addEventListener("removetrack", s), this.on("dispose", function() {
                                n.off("addtrack", r), n.off("removetrack", i), t.removeEventListener("change", s), t.removeEventListener("addtrack", s), t.removeEventListener("removetrack", s);
                                for (var e = 0; e < t.length; e++) {
                                    var a = t[e];
                                    a.removeEventListener("cuechange", o)
                                }
                            })
                        }, o.addTextTrack = function(e, t, n) {
                            if (!e) throw new Error("TextTrack kind is required but was not provided");
                            return function(e, t, n, r, i) {
                                void 0 === i && (i = {});
                                var o = e.textTracks();
                                i.kind = t, n && (i.label = n), r && (i.language = r), i.tech = e;
                                var s = new Mr.text.TrackClass(i);
                                return o.addTrack(s), s
                            }(this, e, t, n)
                        }, o.createRemoteTextTrack = function(e) {
                            var t = He(e, {
                                tech: this
                            });
                            return new Nr.remoteTextEl.TrackClass(t)
                        }, o.addRemoteTextTrack = function(e, t) {
                            var n = this;
                            void 0 === e && (e = {});
                            var r = this.createRemoteTextTrack(e);
                            return !0 !== t && !1 !== t && (u.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), t = !0), this.remoteTextTrackEls().addTrackElement_(r), this.remoteTextTracks().addTrack(r.track), !0 !== t && this.ready(function() {
                                return n.autoRemoteTextTracks_.addTrack(r.track)
                            }), r
                        }, o.removeRemoteTextTrack = function(e) {
                            var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
                            this.remoteTextTrackEls().removeTrackElement_(t), this.remoteTextTracks().removeTrack(e), this.autoRemoteTextTracks_.removeTrack(e)
                        }, o.getVideoPlaybackQuality = function() {
                            return {}
                        }, o.requestPictureInPicture = function() {
                            var t = this.options_.Promise || e.Promise;
                            if (t) return t.reject()
                        }, o.setPoster = function() {}, o.playsinline = function() {}, o.setPlaysinline = function() {}, o.overrideNativeAudioTracks = function() {}, o.overrideNativeVideoTracks = function() {}, o.canPlayType = function() {
                            return ""
                        }, i.canPlayType = function() {
                            return ""
                        }, i.canPlaySource = function(e, t) {
                            return i.canPlayType(e.type)
                        }, i.isTech = function(e) {
                            return e.prototype instanceof i || e instanceof i || e === i
                        }, i.registerTech = function(e, t) {
                            if (i.techs_ || (i.techs_ = {}), !i.isTech(t)) throw new Error("Tech " + e + " must be a Tech");
                            if (!i.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
                            if (!i.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
                            return e = $e(e), i.techs_[e] = t, "Tech" !== e && i.defaultTechOrder_.push(e), t
                        }, i.getTech = function(t) {
                            if (t) return t = $e(t), i.techs_ && i.techs_[t] ? i.techs_[t] : e && e.videojs && e.videojs[t] ? (u.warn("The " + t + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), e.videojs[t]) : void 0
                        }, i
                    }(Ve);
                Mr.names.forEach(function(e) {
                    var t = Mr[e];
                    Fr.prototype[t.getterName] = function() {
                        return this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName]
                    }
                }), Fr.prototype.featuresVolumeControl = !0, Fr.prototype.featuresMuteControl = !0, Fr.prototype.featuresFullscreenResize = !1, Fr.prototype.featuresPlaybackRate = !1, Fr.prototype.featuresProgressEvents = !1, Fr.prototype.featuresSourceset = !1, Fr.prototype.featuresTimeupdateEvents = !1, Fr.prototype.featuresNativeTextTracks = !1, Fr.withSourceHandlers = function(e) {
                    e.registerSourceHandler = function(t, n) {
                        var r = e.sourceHandlers;
                        r || (r = e.sourceHandlers = []), void 0 === n && (n = r.length), r.splice(n, 0, t)
                    }, e.canPlayType = function(t) {
                        for (var n, r = e.sourceHandlers || [], i = 0; i < r.length; i++)
                            if (n = r[i].canPlayType(t)) return n;
                        return ""
                    }, e.selectSourceHandler = function(t, n) {
                        for (var r = e.sourceHandlers || [], i = 0; i < r.length; i++)
                            if (r[i].canHandleSource(t, n)) return r[i];
                        return null
                    }, e.canPlaySource = function(t, n) {
                        var r = e.selectSourceHandler(t, n);
                        return r ? r.canHandleSource(t, n) : ""
                    }, ["seekable", "seeking", "duration"].forEach(function(e) {
                        var t = this[e];
                        "function" == typeof t && (this[e] = function() {
                            return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) : t.apply(this, arguments)
                        })
                    }, e.prototype), e.prototype.setSource = function(t) {
                        var n = e.selectSourceHandler(t, this.options_);
                        n || (e.nativeSourceHandler ? n = e.nativeSourceHandler : u.error("No source handler found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), n !== e.nativeSourceHandler && (this.currentSource_ = t), this.sourceHandler_ = n.handleSource(t, this, this.options_), this.one("dispose", this.disposeSourceHandler)
                    }, e.prototype.disposeSourceHandler = function() {
                        this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
                    }
                }, Ve.registerComponent("Tech", Fr), Fr.registerTech("Tech", Fr), Fr.defaultTechOrder_ = [];
                var Rr = {},
                    Br = {},
                    $r = {};

                function Hr(e, t, n) {
                    e.setTimeout(function() {
                        return function e(t, n, r, i, o, s) {
                            void 0 === t && (t = {}), void 0 === n && (n = []), void 0 === o && (o = []), void 0 === s && (s = !1);
                            var a = n,
                                l = a[0],
                                c = a.slice(1);
                            if ("string" == typeof l) e(t, Rr[l], r, i, o, s);
                            else if (l) {
                                var u = function(e, t) {
                                    var n = Br[e.id()],
                                        r = null;
                                    if (null == n) return r = t(e), Br[e.id()] = [
                                        [t, r]
                                    ], r;
                                    for (var i = 0; i < n.length; i++) {
                                        var o = n[i],
                                            s = o[0],
                                            a = o[1];
                                        s === t && (r = a)
                                    }
                                    return null === r && (r = t(e), n.push([t, r])), r
                                }(i, l);
                                if (!u.setSource) return o.push(u), e(t, c, r, i, o, s);
                                u.setSource(g({}, t), function(n, a) {
                                    if (n) return e(t, c, r, i, o, s);
                                    o.push(u), e(a, t.type === a.type ? c : Rr[a.type], r, i, o, s)
                                })
                            } else c.length ? e(t, c, r, i, o, s) : s ? r(t, o) : e(t, Rr["*"], r, i, o, !0)
                        }(t, Rr[t.type], n, e)
                    }, 1)
                }

                function Vr(e, t, n, r) {
                    void 0 === r && (r = null);
                    var i = "call" + $e(n),
                        o = e.reduce(Kr(i), r),
                        s = o === $r,
                        a = s ? null : t[n](o);
                    return function(e, t, n, r) {
                        for (var i = e.length - 1; i >= 0; i--) {
                            var o = e[i];
                            o[t] && o[t](r, n)
                        }
                    }(e, n, a, s), a
                }
                var Ur = {
                        buffered: 1,
                        currentTime: 1,
                        duration: 1,
                        seekable: 1,
                        played: 1,
                        paused: 1,
                        volume: 1
                    },
                    Wr = {
                        setCurrentTime: 1,
                        setVolume: 1
                    },
                    zr = {
                        play: 1,
                        pause: 1
                    };

                function Kr(e) {
                    return function(t, n) {
                        return t === $r ? $r : n[e] ? n[e](t) : t
                    }
                }
                var qr = {
                        opus: "video/ogg",
                        ogv: "video/ogg",
                        mp4: "video/mp4",
                        mov: "video/mp4",
                        m4v: "video/mp4",
                        mkv: "video/x-matroska",
                        m4a: "audio/mp4",
                        mp3: "audio/mpeg",
                        aac: "audio/aac",
                        oga: "audio/ogg",
                        m3u8: "application/x-mpegURL",
                        jpg: "image/jpeg",
                        jpeg: "image/jpeg",
                        gif: "image/gif",
                        png: "image/png",
                        svg: "image/svg+xml",
                        webp: "image/webp"
                    },
                    Gr = function(e) {
                        void 0 === e && (e = "");
                        var t = qt(e),
                            n = qr[t.toLowerCase()];
                        return n || ""
                    };

                function Xr(e) {
                    var t = Gr(e.src);
                    return !e.type && t && (e.type = t), e
                }
                var Yr = function(e) {
                    function t(t, n, r) {
                        var i, o = He({
                            createEl: !1
                        }, n);
                        if (i = e.call(this, t, o, r) || this, n.playerOptions.sources && 0 !== n.playerOptions.sources.length) t.src(n.playerOptions.sources);
                        else
                            for (var s = 0, a = n.playerOptions.techOrder; s < a.length; s++) {
                                var l = $e(a[s]),
                                    c = Fr.getTech(l);
                                if (l || (c = Ve.getComponent(l)), c && c.isSupported()) {
                                    t.loadTech_(l);
                                    break
                                }
                            }
                        return i
                    }
                    return r(t, e), t
                }(Ve);
                Ve.registerComponent("MediaLoader", Yr);
                var Jr = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).emitTapEvents(), r.enable(), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createEl = function(t, n, r) {
                        void 0 === t && (t = "div"), void 0 === n && (n = {}), void 0 === r && (r = {}), n = g({
                            innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                            className: this.buildCSSClass(),
                            tabIndex: 0
                        }, n), "button" === t && u.error("Creating a ClickableComponent with an HTML element of " + t + " is not supported; use a Button instead."), r = g({
                            role: "button"
                        }, r), this.tabIndex_ = n.tabIndex;
                        var i = e.prototype.createEl.call(this, t, n, r);
                        return this.createControlTextEl(i), i
                    }, n.dispose = function() {
                        this.controlTextEl_ = null, e.prototype.dispose.call(this)
                    }, n.createControlTextEl = function(e) {
                        return this.controlTextEl_ = x("span", {
                            className: "vjs-control-text"
                        }, {
                            "aria-live": "polite"
                        }), e && e.appendChild(this.controlTextEl_), this.controlText(this.controlText_, e), this.controlTextEl_
                    }, n.controlText = function(e, t) {
                        if (void 0 === t && (t = this.el()), void 0 === e) return this.controlText_ || "Need Text";
                        var n = this.localize(e);
                        this.controlText_ = e, j(this.controlTextEl_, n), this.nonIconControl || t.setAttribute("title", n)
                    }, n.buildCSSClass = function() {
                        return "vjs-control vjs-button " + e.prototype.buildCSSClass.call(this)
                    }, n.enable = function() {
                        this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), void 0 !== this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick), this.on("keydown", this.handleKeyDown))
                    }, n.disable = function() {
                        this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), void 0 !== this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off(["tap", "click"], this.handleClick), this.off("keydown", this.handleKeyDown)
                    }, n.handleClick = function(e) {}, n.handleKeyDown = function(t) {
                        Pt.isEventKey(t, "Space") || Pt.isEventKey(t, "Enter") ? (t.preventDefault(), t.stopPropagation(), this.trigger("click")) : e.prototype.handleKeyDown.call(this, t)
                    }, t
                }(Ve);
                Ve.registerComponent("ClickableComponent", Jr);
                var Qr = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).update(), t.on("posterchange", Se(s(r), r.update)), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.dispose = function() {
                        this.player().off("posterchange", this.update), e.prototype.dispose.call(this)
                    }, n.createEl = function() {
                        var e = x("div", {
                            className: "vjs-poster",
                            tabIndex: -1
                        });
                        return e
                    }, n.update = function(e) {
                        var t = this.player().poster();
                        this.setSrc(t), t ? this.show() : this.hide()
                    }, n.setSrc = function(e) {
                        var t = "";
                        e && (t = 'url("' + e + '")'), this.el_.style.backgroundImage = t
                    }, n.handleClick = function(e) {
                        this.player_.controls() && (this.player_.tech(!0) && this.player_.tech(!0).focus(), this.player_.paused() ? Et(this.player_.play()) : this.player_.pause())
                    }, t
                }(Jr);
                Ve.registerComponent("PosterImage", Qr);
                var Zr = "#222",
                    ei = {
                        monospace: "monospace",
                        sansSerif: "sans-serif",
                        serif: "serif",
                        monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
                        monospaceSerif: '"Courier New", monospace',
                        proportionalSansSerif: "sans-serif",
                        proportionalSerif: "serif",
                        casual: '"Comic Sans MS", Impact, fantasy',
                        script: '"Monotype Corsiva", cursive',
                        smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
                    };

                function ti(e, t) {
                    var n;
                    if (4 === e.length) n = e[1] + e[1] + e[2] + e[2] + e[3] + e[3];
                    else {
                        if (7 !== e.length) throw new Error("Invalid color code provided, " + e + "; must be formatted as e.g. #f0e or #f604e2.");
                        n = e.slice(1)
                    }
                    return "rgba(" + parseInt(n.slice(0, 2), 16) + "," + parseInt(n.slice(2, 4), 16) + "," + parseInt(n.slice(4, 6), 16) + "," + t + ")"
                }

                function ni(e, t, n) {
                    try {
                        e.style[t] = n
                    } catch (e) {
                        return
                    }
                }
                var ri = function(t) {
                    function n(n, r, i) {
                        var o;
                        o = t.call(this, n, r, i) || this;
                        var a = Se(s(o), o.updateDisplay);
                        return n.on("loadstart", Se(s(o), o.toggleDisplay)), n.on("texttrackchange", a), n.on("loadedmetadata", Se(s(o), o.preselectTrack)), n.ready(Se(s(o), function() {
                            if (n.tech_ && n.tech_.featuresNativeTextTracks) this.hide();
                            else {
                                n.on("fullscreenchange", a), n.on("playerresize", a), e.addEventListener("orientationchange", a), n.on("dispose", function() {
                                    return e.removeEventListener("orientationchange", a)
                                });
                                for (var t = this.options_.playerOptions.tracks || [], r = 0; r < t.length; r++) this.player_.addRemoteTextTrack(t[r], !0);
                                this.preselectTrack()
                            }
                        })), o
                    }
                    r(n, t);
                    var i = n.prototype;
                    return i.preselectTrack = function() {
                        for (var e, t, n, r = {
                                captions: 1,
                                subtitles: 1
                            }, i = this.player_.textTracks(), o = this.player_.cache_.selectedLanguage, s = 0; s < i.length; s++) {
                            var a = i[s];
                            o && o.enabled && o.language && o.language === a.language && a.kind in r ? a.kind === o.kind ? n = a : n || (n = a) : o && !o.enabled ? (n = null, e = null, t = null) : a.default && ("descriptions" !== a.kind || e ? a.kind in r && !t && (t = a) : e = a)
                        }
                        n ? n.mode = "showing" : t ? t.mode = "showing" : e && (e.mode = "showing")
                    }, i.toggleDisplay = function() {
                        this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
                    }, i.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-text-track-display"
                        }, {
                            "aria-live": "off",
                            "aria-atomic": "true"
                        })
                    }, i.clearDisplay = function() {
                        "function" == typeof e.WebVTT && e.WebVTT.processCues(e, [], this.el_)
                    }, i.updateDisplay = function() {
                        var e = this.player_.textTracks(),
                            t = this.options_.allowMultipleShowingTracks;
                        if (this.clearDisplay(), t) {
                            for (var n = [], r = 0; r < e.length; ++r) {
                                var i = e[r];
                                "showing" === i.mode && n.push(i)
                            }
                            this.updateForTrack(n)
                        } else {
                            for (var o = null, s = null, a = e.length; a--;) {
                                var l = e[a];
                                "showing" === l.mode && ("descriptions" === l.kind ? o = l : s = l)
                            }
                            s ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(s)) : o && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(o))
                        }
                    }, i.updateDisplayState = function(t) {
                        for (var n = this.player_.textTrackSettings.getValues(), r = t.activeCues, i = r.length; i--;) {
                            var o = r[i];
                            if (o) {
                                var s = o.displayState;
                                if (n.color && (s.firstChild.style.color = n.color), n.textOpacity && ni(s.firstChild, "color", ti(n.color || "#fff", n.textOpacity)), n.backgroundColor && (s.firstChild.style.backgroundColor = n.backgroundColor), n.backgroundOpacity && ni(s.firstChild, "backgroundColor", ti(n.backgroundColor || "#000", n.backgroundOpacity)), n.windowColor && (n.windowOpacity ? ni(s, "backgroundColor", ti(n.windowColor, n.windowOpacity)) : s.style.backgroundColor = n.windowColor), n.edgeStyle && ("dropshadow" === n.edgeStyle ? s.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px " + Zr : "raised" === n.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px " + Zr : "depressed" === n.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px " + Zr : "uniform" === n.edgeStyle && (s.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px " + Zr)), n.fontPercent && 1 !== n.fontPercent) {
                                    var a = e.parseFloat(s.style.fontSize);
                                    s.style.fontSize = a * n.fontPercent + "px", s.style.height = "auto", s.style.top = "auto", s.style.bottom = "2px"
                                }
                                n.fontFamily && "default" !== n.fontFamily && ("small-caps" === n.fontFamily ? s.firstChild.style.fontVariant = "small-caps" : s.firstChild.style.fontFamily = ei[n.fontFamily])
                            }
                        }
                    }, i.updateForTrack = function(t) {
                        if (Array.isArray(t) || (t = [t]), "function" == typeof e.WebVTT && !t.every(function(e) {
                                return !e.activeCues
                            })) {
                            for (var n = [], r = 0; r < t.length; ++r)
                                for (var i = t[r], o = 0; o < i.activeCues.length; ++o) n.push(i.activeCues[o]);
                            e.WebVTT.processCues(e, n, this.el_);
                            for (var s = 0; s < t.length; ++s) {
                                for (var a = t[s], l = 0; l < a.activeCues.length; ++l) {
                                    var c = a.activeCues[l].displayState;
                                    O(c, "vjs-text-track-cue"), O(c, "vjs-text-track-cue-" + (a.language ? a.language : s))
                                }
                                this.player_.textTrackSettings && this.updateDisplayState(a)
                            }
                        }
                    }, n
                }(Ve);
                Ve.registerComponent("TextTrackDisplay", ri);
                var ii = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createEl = function() {
                        var t = this.player_.isAudio(),
                            n = this.localize(t ? "Audio Player" : "Video Player"),
                            r = x("span", {
                                className: "vjs-control-text",
                                innerHTML: this.localize("{1} is loading.", [n])
                            }),
                            i = e.prototype.createEl.call(this, "div", {
                                className: "vjs-loading-spinner",
                                dir: "ltr"
                            });
                        return i.appendChild(r), i
                    }, t
                }(Ve);
                Ve.registerComponent("LoadingSpinner", ii);
                var oi = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createEl = function(e, t, n) {
                        void 0 === t && (t = {}), void 0 === n && (n = {}), t = g({
                            innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
                            className: this.buildCSSClass()
                        }, t), n = g({
                            type: "button"
                        }, n);
                        var r = Ve.prototype.createEl.call(this, "button", t, n);
                        return this.createControlTextEl(r), r
                    }, n.addChild = function(e, t) {
                        void 0 === t && (t = {});
                        var n = this.constructor.name;
                        return u.warn("Adding an actionable (user controllable) child to a Button (" + n + ") is not supported; use a ClickableComponent instead."), Ve.prototype.addChild.call(this, e, t)
                    }, n.enable = function() {
                        e.prototype.enable.call(this), this.el_.removeAttribute("disabled")
                    }, n.disable = function() {
                        e.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
                    }, n.handleKeyDown = function(t) {
                        Pt.isEventKey(t, "Space") || Pt.isEventKey(t, "Enter") ? t.stopPropagation() : e.prototype.handleKeyDown.call(this, t)
                    }, t
                }(Jr);
                Ve.registerComponent("Button", oi);
                var si = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).mouseused_ = !1, r.on("mousedown", r.handleMouseDown), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.buildCSSClass = function() {
                        return "vjs-big-play-button"
                    }, n.handleClick = function(e) {
                        var t = this.player_.play();
                        if (this.mouseused_ && e.clientX && e.clientY) return Et(t), void(this.player_.tech(!0) && this.player_.tech(!0).focus());
                        var n = this.player_.getChild("controlBar"),
                            r = n && n.getChild("playToggle");
                        if (r) {
                            var i = function() {
                                return r.focus()
                            };
                            Ct(t) ? t.then(i, function() {}) : this.setTimeout(i, 1)
                        } else this.player_.tech(!0).focus()
                    }, n.handleKeyDown = function(t) {
                        this.mouseused_ = !1, e.prototype.handleKeyDown.call(this, t)
                    }, n.handleMouseDown = function(e) {
                        this.mouseused_ = !0
                    }, t
                }(oi);
                si.prototype.controlText_ = "Play Video", Ve.registerComponent("BigPlayButton", si);
                var ai = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).controlText(n && n.controlText || r.localize("Close")), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.buildCSSClass = function() {
                        return "vjs-close-button " + e.prototype.buildCSSClass.call(this)
                    }, n.handleClick = function(e) {
                        this.trigger({
                            type: "close",
                            bubbles: !1
                        })
                    }, n.handleKeyDown = function(t) {
                        Pt.isEventKey(t, "Esc") ? (t.preventDefault(), t.stopPropagation(), this.trigger("click")) : e.prototype.handleKeyDown.call(this, t)
                    }, t
                }(oi);
                Ve.registerComponent("CloseButton", ai);
                var li = function(e) {
                    function t(t, n) {
                        var r;
                        return void 0 === n && (n = {}), r = e.call(this, t, n) || this, n.replay = void 0 === n.replay || n.replay, r.on(t, "play", r.handlePlay), r.on(t, "pause", r.handlePause), n.replay && r.on(t, "ended", r.handleEnded), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.buildCSSClass = function() {
                        return "vjs-play-control " + e.prototype.buildCSSClass.call(this)
                    }, n.handleClick = function(e) {
                        this.player_.paused() ? this.player_.play() : this.player_.pause(), e.stopPropagation()
                    }, n.handleSeeked = function(e) {
                        this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(e) : this.handlePlay(e)
                    }, n.handlePlay = function(e) {
                        this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
                    }, n.handlePause = function(e) {
                        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
                    }, n.handleEnded = function(e) {
                        this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", this.handleSeeked)
                    }, t
                }(oi);
                li.prototype.controlText_ = "Play", Ve.registerComponent("PlayToggle", li);
                var ci = function(e, t) {
                        e = e < 0 ? 0 : e;
                        var n = Math.floor(e % 60),
                            r = Math.floor(e / 60 % 60),
                            i = Math.floor(e / 3600),
                            o = Math.floor(t / 60 % 60),
                            s = Math.floor(t / 3600);
                        return (isNaN(e) || e === 1 / 0) && (i = r = n = "-"), (i = i > 0 || s > 0 ? i + ":" : "") + (r = ((i || o >= 10) && r < 10 ? "0" + r : r) + ":") + (n = n < 10 ? "0" + n : n)
                    },
                    ui = ci;

                function hi(e, t) {
                    return void 0 === t && (t = e), ui(e, t)
                }
                var di = function(e) {
                    function n(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).throttledUpdateContent = we(Se(s(r), r.updateContent), 25), r.on(t, "timeupdate", r.throttledUpdateContent), r
                    }
                    r(n, e);
                    var i = n.prototype;
                    return i.createEl = function() {
                        var t = this.buildCSSClass(),
                            n = e.prototype.createEl.call(this, "div", {
                                className: t + " vjs-time-control vjs-control",
                                innerHTML: '<span class="vjs-control-text" role="presentation">' + this.localize(this.labelText_) + " </span>"
                            });
                        return this.contentEl_ = x("span", {
                            className: t + "-display"
                        }, {
                            "aria-live": "off",
                            role: "presentation"
                        }), this.updateTextNode_(), n.appendChild(this.contentEl_), n
                    }, i.dispose = function() {
                        this.contentEl_ = null, this.textNode_ = null, e.prototype.dispose.call(this)
                    }, i.updateTextNode_ = function() {
                        if (this.contentEl_) {
                            for (; this.contentEl_.firstChild;) this.contentEl_.removeChild(this.contentEl_.firstChild);
                            this.textNode_ = t.createTextNode(this.formattedTime_ || this.formatTime_(0)), this.contentEl_.appendChild(this.textNode_)
                        }
                    }, i.formatTime_ = function(e) {
                        return hi(e)
                    }, i.updateFormattedTime_ = function(e) {
                        var t = this.formatTime_(e);
                        t !== this.formattedTime_ && (this.formattedTime_ = t, this.requestAnimationFrame(this.updateTextNode_))
                    }, i.updateContent = function(e) {}, n
                }(Ve);
                di.prototype.labelText_ = "Time", di.prototype.controlText_ = "Time", Ve.registerComponent("TimeDisplay", di);
                var pi = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).on(t, "ended", r.handleEnded), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.buildCSSClass = function() {
                        return "vjs-current-time"
                    }, n.updateContent = function(e) {
                        var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                        this.updateFormattedTime_(t)
                    }, n.handleEnded = function(e) {
                        this.player_.duration() && this.updateFormattedTime_(this.player_.duration())
                    }, t
                }(di);
                pi.prototype.labelText_ = "Current Time", pi.prototype.controlText_ = "Current Time", Ve.registerComponent("CurrentTimeDisplay", pi);
                var fi = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).on(t, "durationchange", r.updateContent), r.on(t, "loadstart", r.updateContent), r.on(t, "loadedmetadata", r.throttledUpdateContent), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.buildCSSClass = function() {
                        return "vjs-duration"
                    }, n.updateContent = function(e) {
                        var t = this.player_.duration();
                        this.duration_ !== t && (this.duration_ = t, this.updateFormattedTime_(t))
                    }, t
                }(di);
                fi.prototype.labelText_ = "Duration", fi.prototype.controlText_ = "Duration", Ve.registerComponent("DurationDisplay", fi);
                var vi = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: "vjs-time-control vjs-time-divider",
                            innerHTML: "<div><span>/</span></div>"
                        }, {
                            "aria-hidden": !0
                        })
                    }, t
                }(Ve);
                Ve.registerComponent("TimeDivider", vi);
                var yi = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).on(t, "durationchange", r.throttledUpdateContent), r.on(t, "ended", r.handleEnded), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.buildCSSClass = function() {
                        return "vjs-remaining-time"
                    }, n.createEl = function() {
                        var t = e.prototype.createEl.call(this);
                        return t.insertBefore(x("span", {}, {
                            "aria-hidden": !0
                        }, "-"), this.contentEl_), t
                    }, n.updateContent = function(e) {
                        "number" == typeof this.player_.duration() && (this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay()) : this.updateFormattedTime_(this.player_.remainingTime()))
                    }, n.handleEnded = function(e) {
                        this.player_.duration() && this.updateFormattedTime_(0)
                    }, t
                }(di);
                yi.prototype.labelText_ = "Remaining Time", yi.prototype.controlText_ = "Remaining Time", Ve.registerComponent("RemainingTimeDisplay", yi);
                var gi = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).updateShowing(), r.on(r.player(), "durationchange", r.updateShowing), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createEl = function() {
                        var t = e.prototype.createEl.call(this, "div", {
                            className: "vjs-live-control vjs-control"
                        });
                        return this.contentEl_ = x("div", {
                            className: "vjs-live-display",
                            innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + " </span>" + this.localize("LIVE")
                        }, {
                            "aria-live": "off"
                        }), t.appendChild(this.contentEl_), t
                    }, n.dispose = function() {
                        this.contentEl_ = null, e.prototype.dispose.call(this)
                    }, n.updateShowing = function(e) {
                        this.player().duration() === 1 / 0 ? this.show() : this.hide()
                    }, t
                }(Ve);
                Ve.registerComponent("LiveDisplay", gi);
                var mi = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).updateLiveEdgeStatus(), r.player_.liveTracker && r.on(r.player_.liveTracker, "liveedgechange", r.updateLiveEdgeStatus), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createEl = function() {
                        var t = e.prototype.createEl.call(this, "button", {
                            className: "vjs-seek-to-live-control vjs-control"
                        });
                        return this.textEl_ = x("span", {
                            className: "vjs-seek-to-live-text",
                            innerHTML: this.localize("LIVE")
                        }, {
                            "aria-hidden": "true"
                        }), t.appendChild(this.textEl_), t
                    }, n.updateLiveEdgeStatus = function(e) {
                        !this.player_.liveTracker || this.player_.liveTracker.atLiveEdge() ? (this.setAttribute("aria-disabled", !0), this.addClass("vjs-at-live-edge"), this.controlText("Seek to live, currently playing live")) : (this.setAttribute("aria-disabled", !1), this.removeClass("vjs-at-live-edge"), this.controlText("Seek to live, currently behind live"))
                    }, n.handleClick = function() {
                        this.player_.liveTracker.seekToLiveEdge()
                    }, n.dispose = function() {
                        this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatus), this.textEl_ = null, e.prototype.dispose.call(this)
                    }, t
                }(oi);
                mi.prototype.controlText_ = "Seek to live, currently playing live", Ve.registerComponent("SeekToLive", mi);
                var _i = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).bar = r.getChild(r.options_.barName), r.vertical(!!r.options_.vertical), r.enable(), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.enabled = function() {
                        return this.enabled_
                    }, n.enable = function() {
                        this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("keydown", this.handleKeyDown), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
                    }, n.disable = function() {
                        if (this.enabled()) {
                            var e = this.bar.el_.ownerDocument;
                            this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown), this.off("keydown", this.handleKeyDown), this.off("click", this.handleClick), this.off(this.player_, "controlsvisible", this.update), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1
                        }
                    }, n.createEl = function(t, n, r) {
                        return void 0 === n && (n = {}), void 0 === r && (r = {}), n.className = n.className + " vjs-slider", n = g({
                            tabIndex: 0
                        }, n), r = g({
                            role: "slider",
                            "aria-valuenow": 0,
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            tabIndex: 0
                        }, r), e.prototype.createEl.call(this, t, n, r)
                    }, n.handleMouseDown = function(e) {
                        var t = this.bar.el_.ownerDocument;
                        "mousedown" === e.type && e.preventDefault(), "touchstart" !== e.type || nt || e.preventDefault(), $(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(t, "mousemove", this.handleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchmove", this.handleMouseMove), this.on(t, "touchend", this.handleMouseUp), this.handleMouseMove(e)
                    }, n.handleMouseMove = function(e) {}, n.handleMouseUp = function() {
                        var e = this.bar.el_.ownerDocument;
                        H(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.update()
                    }, n.update = function() {
                        if (this.el_) {
                            var e = this.getPercent(),
                                t = this.bar;
                            if (t) {
                                ("number" != typeof e || e != e || e < 0 || e === 1 / 0) && (e = 0);
                                var n = (100 * e).toFixed(2) + "%",
                                    r = t.el().style;
                                return this.vertical() ? r.height = n : r.width = n, e
                            }
                        }
                    }, n.calculateDistance = function(e) {
                        var t = W(this.el_, e);
                        return this.vertical() ? t.y : t.x
                    }, n.handleKeyDown = function(t) {
                        Pt.isEventKey(t, "Left") || Pt.isEventKey(t, "Down") ? (t.preventDefault(), t.stopPropagation(), this.stepBack()) : Pt.isEventKey(t, "Right") || Pt.isEventKey(t, "Up") ? (t.preventDefault(), t.stopPropagation(), this.stepForward()) : e.prototype.handleKeyDown.call(this, t)
                    }, n.handleClick = function(e) {
                        e.stopPropagation(), e.preventDefault()
                    }, n.vertical = function(e) {
                        if (void 0 === e) return this.vertical_ || !1;
                        this.vertical_ = !!e, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
                    }, t
                }(Ve);
                Ve.registerComponent("Slider", _i);
                var bi = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).partEls_ = [], r.on(t, "progress", r.update), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: "vjs-load-progress",
                            innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + '</span>: <span class="vjs-control-text-loaded-percentage">0%</span></span>'
                        })
                    }, n.dispose = function() {
                        this.partEls_ = null, e.prototype.dispose.call(this)
                    }, n.update = function(e) {
                        var t = this.player_.liveTracker,
                            n = this.player_.buffered(),
                            r = t && t.isLive() ? t.seekableEnd() : this.player_.duration(),
                            i = this.player_.bufferedEnd(),
                            o = this.partEls_,
                            s = this.$(".vjs-control-text-loaded-percentage"),
                            a = function(e, t, n) {
                                var r = e / t || 0;
                                return r = 100 * (r >= 1 ? 1 : r), n && (r = r.toFixed(2)), r + "%"
                            };
                        this.el_.style.width = a(i, r), j(s, a(i, r, !0));
                        for (var l = 0; l < n.length; l++) {
                            var c = n.start(l),
                                u = n.end(l),
                                h = o[l];
                            h || (h = this.el_.appendChild(x()), o[l] = h), h.style.left = a(c, i), h.style.width = a(u - c, i)
                        }
                        for (var d = o.length; d > n.length; d--) this.el_.removeChild(o[d - 1]);
                        o.length = n.length
                    }, t
                }(Ve);
                Ve.registerComponent("LoadProgressBar", bi);
                var Ti = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: "vjs-time-tooltip"
                        }, {
                            "aria-hidden": "true"
                        })
                    }, n.update = function(e, t, n) {
                        var r = V(this.el_),
                            i = V(this.player_.el()),
                            o = e.width * t;
                        if (i && r) {
                            var s = e.left - i.left + o,
                                a = e.width - o + (i.right - e.right),
                                l = r.width / 2;
                            s < l ? l += l - s : a < l && (l = a), l < 0 ? l = 0 : l > r.width && (l = r.width), this.el_.style.right = "-" + l + "px", this.write(n)
                        }
                    }, n.write = function(e) {
                        j(this.el_, e)
                    }, n.updateTime = function(e, t, n, r) {
                        var i = this;
                        this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function() {
                            var o, s = i.player_.duration();
                            if (i.player_.liveTracker && i.player_.liveTracker.isLive()) {
                                var a = i.player_.liveTracker.liveWindow(),
                                    l = a - t * a;
                                o = (l < 1 ? "" : "-") + hi(l, a)
                            } else o = hi(n, s);
                            i.update(e, t, o), r && r()
                        })
                    }, t
                }(Ve);
                Ve.registerComponent("TimeTooltip", Ti);
                var ki = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: "vjs-play-progress vjs-slider-bar"
                        }, {
                            "aria-hidden": "true"
                        })
                    }, n.update = function(e, t) {
                        var n = this.getChild("timeTooltip");
                        if (n) {
                            var r = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                            n.updateTime(e, t, r)
                        }
                    }, t
                }(Ve);
                ki.prototype.options_ = {
                    children: []
                }, Xe || Je || ki.prototype.options_.children.push("timeTooltip"), Ve.registerComponent("PlayProgressBar", ki);
                var Ci = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).update = we(Se(s(r), r.update), 25), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: "vjs-mouse-display"
                        })
                    }, n.update = function(e, t) {
                        var n = this,
                            r = t * this.player_.duration();
                        this.getChild("timeTooltip").updateTime(e, t, r, function() {
                            n.el_.style.left = e.width * t + "px"
                        })
                    }, t
                }(Ve);
                Ci.prototype.options_ = {
                    children: ["timeTooltip"]
                }, Ve.registerComponent("MouseTimeDisplay", Ci);
                var Ei = function(e) {
                    function n(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).setEventHandlers_(), r
                    }
                    r(n, e);
                    var i = n.prototype;
                    return i.setEventHandlers_ = function() {
                        this.update = we(Se(this, this.update), 30), this.on(this.player_, "timeupdate", this.update), this.on(this.player_, "ended", this.handleEnded), this.on(this.player_, "durationchange", this.update), this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update), this.updateInterval = null, this.on(this.player_, ["playing"], this.enableInterval_), this.on(this.player_, ["ended", "pause", "waiting"], this.disableInterval_), "hidden" in t && "visibilityState" in t && this.on(t, "visibilitychange", this.toggleVisibility_)
                    }, i.toggleVisibility_ = function(e) {
                        t.hidden ? this.disableInterval_(e) : (this.enableInterval_(), this.requestAnimationFrame(this.update))
                    }, i.enableInterval_ = function() {
                        var e = this;
                        this.clearInterval(this.updateInterval), this.updateInterval = this.setInterval(function() {
                            e.requestAnimationFrame(e.update)
                        }, 30)
                    }, i.disableInterval_ = function(e) {
                        this.player_.liveTracker && this.player_.liveTracker.isLive() && "ended" !== e.type || this.clearInterval(this.updateInterval)
                    }, i.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: "vjs-progress-holder"
                        }, {
                            "aria-label": this.localize("Progress Bar")
                        })
                    }, i.update_ = function(e, t) {
                        var n = this.player_.liveTracker,
                            r = this.player_.duration();
                        n && n.isLive() && (r = this.player_.liveTracker.liveCurrentTime()), this.el_.setAttribute("aria-valuenow", (100 * t).toFixed(2)), this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [hi(e, r), hi(r, r)], "{1} of {2}")), this.bar && this.bar.update(V(this.el_), t)
                    }, i.update = function(t) {
                        if (null !== this.el().offsetParent) {
                            var n = e.prototype.update.call(this);
                            return this.update_(this.getCurrentTime_(), n), n
                        }
                    }, i.getCurrentTime_ = function() {
                        return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
                    }, i.handleEnded = function(e) {
                        this.update_(this.player_.duration(), 1)
                    }, i.getPercent = function() {
                        var e, t = this.getCurrentTime_(),
                            n = this.player_.liveTracker;
                        return n && n.isLive() ? (e = (t - n.seekableStart()) / n.liveWindow(), n.atLiveEdge() && (e = 1)) : e = t / this.player_.duration(), e >= 1 ? 1 : e || 0
                    }, i.handleMouseDown = function(t) {
                        Y(t) && (t.stopPropagation(), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), e.prototype.handleMouseDown.call(this, t))
                    }, i.handleMouseMove = function(e) {
                        if (Y(e)) {
                            var t, n = this.calculateDistance(e),
                                r = this.player_.liveTracker;
                            if (r && r.isLive()) {
                                var i = r.seekableStart(),
                                    o = r.liveCurrentTime();
                                if ((t = i + n * r.liveWindow()) >= o && (t = o), t <= i && (t = i + .1), t === 1 / 0) return
                            } else(t = n * this.player_.duration()) === this.player_.duration() && (t -= .1);
                            this.player_.currentTime(t)
                        }
                    }, i.enable = function() {
                        e.prototype.enable.call(this);
                        var t = this.getChild("mouseTimeDisplay");
                        t && t.show()
                    }, i.disable = function() {
                        e.prototype.disable.call(this);
                        var t = this.getChild("mouseTimeDisplay");
                        t && t.hide()
                    }, i.handleMouseUp = function(t) {
                        e.prototype.handleMouseUp.call(this, t), t && t.stopPropagation(), this.player_.scrubbing(!1), this.player_.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        }), this.videoWasPlaying && Et(this.player_.play())
                    }, i.stepForward = function() {
                        this.player_.currentTime(this.player_.currentTime() + 5)
                    }, i.stepBack = function() {
                        this.player_.currentTime(this.player_.currentTime() - 5)
                    }, i.handleAction = function(e) {
                        this.player_.paused() ? this.player_.play() : this.player_.pause()
                    }, i.handleKeyDown = function(t) {
                        if (Pt.isEventKey(t, "Space") || Pt.isEventKey(t, "Enter")) t.preventDefault(), t.stopPropagation(), this.handleAction(t);
                        else if (Pt.isEventKey(t, "Home")) t.preventDefault(), t.stopPropagation(), this.player_.currentTime(0);
                        else if (Pt.isEventKey(t, "End")) t.preventDefault(), t.stopPropagation(), this.player_.currentTime(this.player_.duration());
                        else if (/^[0-9]$/.test(Pt(t))) {
                            t.preventDefault(), t.stopPropagation();
                            var n = 10 * (Pt.codes[Pt(t)] - Pt.codes[0]) / 100;
                            this.player_.currentTime(this.player_.duration() * n)
                        } else Pt.isEventKey(t, "PgDn") ? (t.preventDefault(), t.stopPropagation(), this.player_.currentTime(this.player_.currentTime() - 60)) : Pt.isEventKey(t, "PgUp") ? (t.preventDefault(), t.stopPropagation(), this.player_.currentTime(this.player_.currentTime() + 60)) : e.prototype.handleKeyDown.call(this, t)
                    }, n
                }(_i);
                Ei.prototype.options_ = {
                    children: ["loadProgressBar", "playProgressBar"],
                    barName: "playProgressBar"
                }, Xe || Je || Ei.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), Ve.registerComponent("SeekBar", Ei);
                var Si = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).handleMouseMove = we(Se(s(r), r.handleMouseMove), 25), r.throttledHandleMouseSeek = we(Se(s(r), r.handleMouseSeek), 25), r.enable(), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: "vjs-progress-control vjs-control"
                        })
                    }, n.handleMouseMove = function(e) {
                        var t = this.getChild("seekBar");
                        if (t) {
                            var n = t.getChild("mouseTimeDisplay"),
                                r = t.el(),
                                i = V(r),
                                o = W(r, e).x;
                            o > 1 ? o = 1 : o < 0 && (o = 0), n && n.update(i, o)
                        }
                    }, n.handleMouseSeek = function(e) {
                        var t = this.getChild("seekBar");
                        t && t.handleMouseMove(e)
                    }, n.enabled = function() {
                        return this.enabled_
                    }, n.disable = function() {
                        this.children().forEach(function(e) {
                            return e.disable && e.disable()
                        }), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), this.enabled_ = !1)
                    }, n.enable = function() {
                        this.children().forEach(function(e) {
                            return e.enable && e.enable()
                        }), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
                    }, n.handleMouseDown = function(e) {
                        var t = this.el_.ownerDocument,
                            n = this.getChild("seekBar");
                        n && n.handleMouseDown(e), this.on(t, "mousemove", this.throttledHandleMouseSeek), this.on(t, "touchmove", this.throttledHandleMouseSeek), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp)
                    }, n.handleMouseUp = function(e) {
                        var t = this.el_.ownerDocument,
                            n = this.getChild("seekBar");
                        n && n.handleMouseUp(e), this.off(t, "mousemove", this.throttledHandleMouseSeek), this.off(t, "touchmove", this.throttledHandleMouseSeek), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchend", this.handleMouseUp)
                    }, t
                }(Ve);
                Si.prototype.options_ = {
                    children: ["seekBar"]
                }, Ve.registerComponent("ProgressControl", Si);
                var wi = function(e) {
                    function n(n, r) {
                        var i;
                        return (i = e.call(this, n, r) || this).on(n, ["enterpictureinpicture", "leavepictureinpicture"], i.handlePictureInPictureChange), t.pictureInPictureEnabled || i.disable(), i
                    }
                    r(n, e);
                    var i = n.prototype;
                    return i.buildCSSClass = function() {
                        return "vjs-picture-in-picture-control " + e.prototype.buildCSSClass.call(this)
                    }, i.handlePictureInPictureChange = function(e) {
                        this.player_.isInPictureInPicture() ? this.controlText("Exit Picture-in-Picture") : this.controlText("Picture-in-Picture")
                    }, i.handleClick = function(e) {
                        this.player_.isInPictureInPicture() ? this.player_.exitPictureInPicture() : this.player_.requestPictureInPicture()
                    }, n
                }(oi);
                wi.prototype.controlText_ = "Picture-in-Picture", Ve.registerComponent("PictureInPictureToggle", wi);
                var Pi = function(e) {
                    function n(n, r) {
                        var i;
                        return (i = e.call(this, n, r) || this).on(n, "fullscreenchange", i.handleFullscreenChange), !1 === t[n.fsApi_.fullscreenEnabled] && i.disable(), i
                    }
                    r(n, e);
                    var i = n.prototype;
                    return i.buildCSSClass = function() {
                        return "vjs-fullscreen-control " + e.prototype.buildCSSClass.call(this)
                    }, i.handleFullscreenChange = function(e) {
                        this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
                    }, i.handleClick = function(e) {
                        this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
                    }, n
                }(oi);
                Pi.prototype.controlText_ = "Fullscreen", Ve.registerComponent("FullscreenToggle", Pi);
                var xi = function(e, t) {
                        t.tech_ && !t.tech_.featuresVolumeControl && e.addClass("vjs-hidden"), e.on(t, "loadstart", function() {
                            t.tech_.featuresVolumeControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden")
                        })
                    },
                    ji = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }
                        r(t, e);
                        var n = t.prototype;
                        return n.createEl = function() {
                            return e.prototype.createEl.call(this, "div", {
                                className: "vjs-volume-level",
                                innerHTML: '<span class="vjs-control-text"></span>'
                            })
                        }, t
                    }(Ve);
                Ve.registerComponent("VolumeLevel", ji);
                var Ai = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).on("slideractive", r.updateLastVolume_), r.on(t, "volumechange", r.updateARIAAttributes), t.ready(function() {
                            return r.updateARIAAttributes()
                        }), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: "vjs-volume-bar vjs-slider-bar"
                        }, {
                            "aria-label": this.localize("Volume Level"),
                            "aria-live": "polite"
                        })
                    }, n.handleMouseDown = function(t) {
                        Y(t) && e.prototype.handleMouseDown.call(this, t)
                    }, n.handleMouseMove = function(e) {
                        Y(e) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e)))
                    }, n.checkMuted = function() {
                        this.player_.muted() && this.player_.muted(!1)
                    }, n.getPercent = function() {
                        return this.player_.muted() ? 0 : this.player_.volume()
                    }, n.stepForward = function() {
                        this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
                    }, n.stepBack = function() {
                        this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
                    }, n.updateARIAAttributes = function(e) {
                        var t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
                        this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%")
                    }, n.volumeAsPercentage_ = function() {
                        return Math.round(100 * this.player_.volume())
                    }, n.updateLastVolume_ = function() {
                        var e = this,
                            t = this.player_.volume();
                        this.one("sliderinactive", function() {
                            0 === e.player_.volume() && e.player_.lastVolume_(t)
                        })
                    }, t
                }(_i);
                Ai.prototype.options_ = {
                    children: ["volumeLevel"],
                    barName: "volumeLevel"
                }, Ai.prototype.playerEvent = "volumechange", Ve.registerComponent("VolumeBar", Ai);
                var Ii = function(e) {
                    function t(t, n) {
                        var r;
                        return void 0 === n && (n = {}), n.vertical = n.vertical || !1, (void 0 === n.volumeBar || _(n.volumeBar)) && (n.volumeBar = n.volumeBar || {}, n.volumeBar.vertical = n.vertical), r = e.call(this, t, n) || this, xi(s(r), t), r.throttledHandleMouseMove = we(Se(s(r), r.handleMouseMove), 25), r.on("mousedown", r.handleMouseDown), r.on("touchstart", r.handleMouseDown), r.on(r.volumeBar, ["focus", "slideractive"], function() {
                            r.volumeBar.addClass("vjs-slider-active"), r.addClass("vjs-slider-active"), r.trigger("slideractive")
                        }), r.on(r.volumeBar, ["blur", "sliderinactive"], function() {
                            r.volumeBar.removeClass("vjs-slider-active"), r.removeClass("vjs-slider-active"), r.trigger("sliderinactive")
                        }), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createEl = function() {
                        var t = "vjs-volume-horizontal";
                        return this.options_.vertical && (t = "vjs-volume-vertical"), e.prototype.createEl.call(this, "div", {
                            className: "vjs-volume-control vjs-control " + t
                        })
                    }, n.handleMouseDown = function(e) {
                        var t = this.el_.ownerDocument;
                        this.on(t, "mousemove", this.throttledHandleMouseMove), this.on(t, "touchmove", this.throttledHandleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp)
                    }, n.handleMouseUp = function(e) {
                        var t = this.el_.ownerDocument;
                        this.off(t, "mousemove", this.throttledHandleMouseMove), this.off(t, "touchmove", this.throttledHandleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchend", this.handleMouseUp)
                    }, n.handleMouseMove = function(e) {
                        this.volumeBar.handleMouseMove(e)
                    }, t
                }(Ve);
                Ii.prototype.options_ = {
                    children: ["volumeBar"]
                }, Ve.registerComponent("VolumeControl", Ii);
                var Oi = function(e, t) {
                        t.tech_ && !t.tech_.featuresMuteControl && e.addClass("vjs-hidden"), e.on(t, "loadstart", function() {
                            t.tech_.featuresMuteControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden")
                        })
                    },
                    Di = function(e) {
                        function t(t, n) {
                            var r;
                            return r = e.call(this, t, n) || this, Oi(s(r), t), r.on(t, ["loadstart", "volumechange"], r.update), r
                        }
                        r(t, e);
                        var n = t.prototype;
                        return n.buildCSSClass = function() {
                            return "vjs-mute-control " + e.prototype.buildCSSClass.call(this)
                        }, n.handleClick = function(e) {
                            var t = this.player_.volume(),
                                n = this.player_.lastVolume_();
                            if (0 === t) {
                                var r = n < .1 ? .1 : n;
                                this.player_.volume(r), this.player_.muted(!1)
                            } else this.player_.muted(!this.player_.muted())
                        }, n.update = function(e) {
                            this.updateIcon_(), this.updateControlText_()
                        }, n.updateIcon_ = function() {
                            var e = this.player_.volume(),
                                t = 3;
                            Xe && this.player_.tech_ && this.player_.tech_.el_ && this.player_.muted(this.player_.tech_.el_.muted), 0 === e || this.player_.muted() ? t = 0 : e < .33 ? t = 1 : e < .67 && (t = 2);
                            for (var n = 0; n < 4; n++) D(this.el_, "vjs-vol-" + n);
                            O(this.el_, "vjs-vol-" + t)
                        }, n.updateControlText_ = function() {
                            var e = this.player_.muted() || 0 === this.player_.volume(),
                                t = e ? "Unmute" : "Mute";
                            this.controlText() !== t && this.controlText(t)
                        }, t
                    }(oi);
                Di.prototype.controlText_ = "Mute", Ve.registerComponent("MuteToggle", Di);
                var Ni = function(e) {
                    function t(t, n) {
                        var r;
                        return void 0 === n && (n = {}), void 0 !== n.inline ? n.inline = n.inline : n.inline = !0, (void 0 === n.volumeControl || _(n.volumeControl)) && (n.volumeControl = n.volumeControl || {}, n.volumeControl.vertical = !n.inline), (r = e.call(this, t, n) || this).on(t, ["loadstart"], r.volumePanelState_), r.on(r.volumeControl, ["slideractive"], r.sliderActive_), r.on(r.volumeControl, ["sliderinactive"], r.sliderInactive_), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.sliderActive_ = function() {
                        this.addClass("vjs-slider-active")
                    }, n.sliderInactive_ = function() {
                        this.removeClass("vjs-slider-active")
                    }, n.volumePanelState_ = function() {
                        this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden"), this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only")
                    }, n.createEl = function() {
                        var t = "vjs-volume-panel-horizontal";
                        return this.options_.inline || (t = "vjs-volume-panel-vertical"), e.prototype.createEl.call(this, "div", {
                            className: "vjs-volume-panel vjs-control " + t
                        })
                    }, t
                }(Ve);
                Ni.prototype.options_ = {
                    children: ["muteToggle", "volumeControl"]
                }, Ve.registerComponent("VolumePanel", Ni);
                var Mi = function(e) {
                    function n(t, n) {
                        var r;
                        return r = e.call(this, t, n) || this, n && (r.menuButton_ = n.menuButton), r.focusedChild_ = -1, r.on("keydown", r.handleKeyDown), r.boundHandleBlur_ = Se(s(r), r.handleBlur), r.boundHandleTapClick_ = Se(s(r), r.handleTapClick), r
                    }
                    r(n, e);
                    var i = n.prototype;
                    return i.addEventListenerForItem = function(e) {
                        e instanceof Ve && (this.on(e, "blur", this.boundHandleBlur_), this.on(e, ["tap", "click"], this.boundHandleTapClick_))
                    }, i.removeEventListenerForItem = function(e) {
                        e instanceof Ve && (this.off(e, "blur", this.boundHandleBlur_), this.off(e, ["tap", "click"], this.boundHandleTapClick_))
                    }, i.removeChild = function(t) {
                        "string" == typeof t && (t = this.getChild(t)), this.removeEventListenerForItem(t), e.prototype.removeChild.call(this, t)
                    }, i.addItem = function(e) {
                        var t = this.addChild(e);
                        t && this.addEventListenerForItem(t)
                    }, i.createEl = function() {
                        var t = this.options_.contentElType || "ul";
                        this.contentEl_ = x(t, {
                            className: "vjs-menu-content"
                        }), this.contentEl_.setAttribute("role", "menu");
                        var n = e.prototype.createEl.call(this, "div", {
                            append: this.contentEl_,
                            className: "vjs-menu"
                        });
                        return n.appendChild(this.contentEl_), de(n, "click", function(e) {
                            e.preventDefault(), e.stopImmediatePropagation()
                        }), n
                    }, i.dispose = function() {
                        this.contentEl_ = null, this.boundHandleBlur_ = null, this.boundHandleTapClick_ = null, e.prototype.dispose.call(this)
                    }, i.handleBlur = function(e) {
                        var n = e.relatedTarget || t.activeElement;
                        if (!this.children().some(function(e) {
                                return e.el() === n
                            })) {
                            var r = this.menuButton_;
                            r && r.buttonPressed_ && n !== r.el().firstChild && r.unpressButton()
                        }
                    }, i.handleTapClick = function(e) {
                        if (this.menuButton_) {
                            this.menuButton_.unpressButton();
                            var t = this.children();
                            if (!Array.isArray(t)) return;
                            var n = t.filter(function(t) {
                                return t.el() === e.target
                            })[0];
                            if (!n) return;
                            "CaptionSettingsMenuItem" !== n.name() && this.menuButton_.focus()
                        }
                    }, i.handleKeyDown = function(e) {
                        Pt.isEventKey(e, "Left") || Pt.isEventKey(e, "Down") ? (e.preventDefault(), e.stopPropagation(), this.stepForward()) : (Pt.isEventKey(e, "Right") || Pt.isEventKey(e, "Up")) && (e.preventDefault(), e.stopPropagation(), this.stepBack())
                    }, i.stepForward = function() {
                        var e = 0;
                        void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1), this.focus(e)
                    }, i.stepBack = function() {
                        var e = 0;
                        void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1), this.focus(e)
                    }, i.focus = function(e) {
                        void 0 === e && (e = 0);
                        var t = this.children().slice(),
                            n = t.length && t[0].className && /vjs-menu-title/.test(t[0].className);
                        n && t.shift(), t.length > 0 && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1), this.focusedChild_ = e, t[e].el_.focus())
                    }, n
                }(Ve);
                Ve.registerComponent("Menu", Mi);
                var Li = function(e) {
                    function t(t, n) {
                        var r;
                        void 0 === n && (n = {}), (r = e.call(this, t, n) || this).menuButton_ = new oi(t, n), r.menuButton_.controlText(r.controlText_), r.menuButton_.el_.setAttribute("aria-haspopup", "true");
                        var i = oi.prototype.buildCSSClass();
                        return r.menuButton_.el_.className = r.buildCSSClass() + " " + i, r.menuButton_.removeClass("vjs-control"), r.addChild(r.menuButton_), r.update(), r.enabled_ = !0, r.on(r.menuButton_, "tap", r.handleClick), r.on(r.menuButton_, "click", r.handleClick), r.on(r.menuButton_, "keydown", r.handleKeyDown), r.on(r.menuButton_, "mouseenter", function() {
                            r.menu.show()
                        }), r.on("keydown", r.handleSubmenuKeyDown), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.update = function() {
                        var e = this.createMenu();
                        this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = e, this.addChild(e), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
                    }, n.createMenu = function() {
                        var e = new Mi(this.player_, {
                            menuButton: this
                        });
                        if (this.hideThreshold_ = 0, this.options_.title) {
                            var t = x("li", {
                                className: "vjs-menu-title",
                                innerHTML: $e(this.options_.title),
                                tabIndex: -1
                            });
                            this.hideThreshold_ += 1;
                            var n = new Ve(this.player_, {
                                el: t
                            });
                            e.addItem(n)
                        }
                        if (this.items = this.createItems(), this.items)
                            for (var r = 0; r < this.items.length; r++) e.addItem(this.items[r]);
                        return e
                    }, n.createItems = function() {}, n.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: this.buildWrapperCSSClass()
                        }, {})
                    }, n.buildWrapperCSSClass = function() {
                        var t = "vjs-menu-button";
                        !0 === this.options_.inline ? t += "-inline" : t += "-popup";
                        var n = oi.prototype.buildCSSClass();
                        return "vjs-menu-button " + t + " " + n + " " + e.prototype.buildCSSClass.call(this)
                    }, n.buildCSSClass = function() {
                        var t = "vjs-menu-button";
                        return !0 === this.options_.inline ? t += "-inline" : t += "-popup", "vjs-menu-button " + t + " " + e.prototype.buildCSSClass.call(this)
                    }, n.controlText = function(e, t) {
                        return void 0 === t && (t = this.menuButton_.el()), this.menuButton_.controlText(e, t)
                    }, n.handleClick = function(e) {
                        this.buttonPressed_ ? this.unpressButton() : this.pressButton()
                    }, n.focus = function() {
                        this.menuButton_.focus()
                    }, n.blur = function() {
                        this.menuButton_.blur()
                    }, n.handleKeyDown = function(e) {
                        Pt.isEventKey(e, "Esc") || Pt.isEventKey(e, "Tab") ? (this.buttonPressed_ && this.unpressButton(), Pt.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus())) : (Pt.isEventKey(e, "Up") || Pt.isEventKey(e, "Down")) && (this.buttonPressed_ || (e.preventDefault(), this.pressButton()))
                    }, n.handleSubmenuKeyPress = function(e) {
                        this.handleSubmenuKeyDown(e)
                    }, n.handleSubmenuKeyDown = function(e) {
                        (Pt.isEventKey(e, "Esc") || Pt.isEventKey(e, "Tab")) && (this.buttonPressed_ && this.unpressButton(), Pt.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus()))
                    }, n.pressButton = function() {
                        if (this.enabled_) {
                            if (this.buttonPressed_ = !0, this.menu.show(), this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), Xe && w()) return;
                            this.menu.focus()
                        }
                    }, n.unpressButton = function() {
                        this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menu.hide(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
                    }, n.disable = function() {
                        this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable()
                    }, n.enable = function() {
                        this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable()
                    }, t
                }(Ve);
                Ve.registerComponent("MenuButton", Li);
                var Fi = function(e) {
                    function t(t, n) {
                        var r, i = n.tracks;
                        if ((r = e.call(this, t, n) || this).items.length <= 1 && r.hide(), !i) return s(r);
                        var o = Se(s(r), r.update);
                        return i.addEventListener("removetrack", o), i.addEventListener("addtrack", o), r.player_.on("ready", o), r.player_.on("dispose", function() {
                            i.removeEventListener("removetrack", o), i.removeEventListener("addtrack", o)
                        }), r
                    }
                    return r(t, e), t
                }(Li);
                Ve.registerComponent("TrackButton", Fi);
                var Ri = ["Tab", "Esc", "Up", "Down", "Right", "Left"],
                    Bi = function(e) {
                        function t(t, n) {
                            var r;
                            return (r = e.call(this, t, n) || this).selectable = n.selectable, r.isSelected_ = n.selected || !1, r.multiSelectable = n.multiSelectable, r.selected(r.isSelected_), r.selectable ? r.multiSelectable ? r.el_.setAttribute("role", "menuitemcheckbox") : r.el_.setAttribute("role", "menuitemradio") : r.el_.setAttribute("role", "menuitem"), r
                        }
                        r(t, e);
                        var n = t.prototype;
                        return n.createEl = function(t, n, r) {
                            return this.nonIconControl = !0, e.prototype.createEl.call(this, "li", g({
                                className: "vjs-menu-item",
                                innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
                                tabIndex: -1
                            }, n), r)
                        }, n.handleKeyDown = function(t) {
                            Ri.some(function(e) {
                                return Pt.isEventKey(t, e)
                            }) || e.prototype.handleKeyDown.call(this, t)
                        }, n.handleClick = function(e) {
                            this.selected(!0)
                        }, n.selected = function(e) {
                            this.selectable && (e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1))
                        }, t
                    }(Jr);
                Ve.registerComponent("MenuItem", Bi);
                var $i = function(n) {
                    function i(r, i) {
                        var o, a = i.track,
                            l = r.textTracks();
                        i.label = a.label || a.language || "Unknown", i.selected = "showing" === a.mode, (o = n.call(this, r, i) || this).track = a, o.kinds = (i.kinds || [i.kind || o.track.kind]).filter(Boolean);
                        var c, u = function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                o.handleTracksChange.apply(s(o), t)
                            },
                            h = function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                o.handleSelectedLanguageChange.apply(s(o), t)
                            };
                        return r.on(["loadstart", "texttrackchange"], u), l.addEventListener("change", u), l.addEventListener("selectedlanguagechange", h), o.on("dispose", function() {
                            r.off(["loadstart", "texttrackchange"], u), l.removeEventListener("change", u), l.removeEventListener("selectedlanguagechange", h)
                        }), void 0 === l.onchange && o.on(["tap", "click"], function() {
                            if ("object" != typeof e.Event) try {
                                c = new e.Event("change")
                            } catch (e) {}
                            c || (c = t.createEvent("Event")).initEvent("change", !0, !0), l.dispatchEvent(c)
                        }), o.handleTracksChange(), o
                    }
                    r(i, n);
                    var o = i.prototype;
                    return o.handleClick = function(e) {
                        var t = this.track,
                            r = this.player_.textTracks();
                        if (n.prototype.handleClick.call(this, e), r)
                            for (var i = 0; i < r.length; i++) {
                                var o = r[i]; - 1 !== this.kinds.indexOf(o.kind) && (o === t ? "showing" !== o.mode && (o.mode = "showing") : "disabled" !== o.mode && (o.mode = "disabled"))
                            }
                    }, o.handleTracksChange = function(e) {
                        var t = "showing" === this.track.mode;
                        t !== this.isSelected_ && this.selected(t)
                    }, o.handleSelectedLanguageChange = function(e) {
                        if ("showing" === this.track.mode) {
                            var t = this.player_.cache_.selectedLanguage;
                            if (t && t.enabled && t.language === this.track.language && t.kind !== this.track.kind) return;
                            this.player_.cache_.selectedLanguage = {
                                enabled: !0,
                                language: this.track.language,
                                kind: this.track.kind
                            }
                        }
                    }, o.dispose = function() {
                        this.track = null, n.prototype.dispose.call(this)
                    }, i
                }(Bi);
                Ve.registerComponent("TextTrackMenuItem", $i);
                var Hi = function(e) {
                    function t(t, n) {
                        return n.track = {
                            player: t,
                            kind: n.kind,
                            kinds: n.kinds,
                            default: !1,
                            mode: "disabled"
                        }, n.kinds || (n.kinds = [n.kind]), n.label ? n.track.label = n.label : n.track.label = n.kinds.join(" and ") + " off", n.selectable = !0, n.multiSelectable = !1, e.call(this, t, n) || this
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.handleTracksChange = function(e) {
                        for (var t = this.player().textTracks(), n = !0, r = 0, i = t.length; r < i; r++) {
                            var o = t[r];
                            if (this.options_.kinds.indexOf(o.kind) > -1 && "showing" === o.mode) {
                                n = !1;
                                break
                            }
                        }
                        n !== this.isSelected_ && this.selected(n)
                    }, n.handleSelectedLanguageChange = function(e) {
                        for (var t = this.player().textTracks(), n = !0, r = 0, i = t.length; r < i; r++) {
                            var o = t[r];
                            if (["captions", "descriptions", "subtitles"].indexOf(o.kind) > -1 && "showing" === o.mode) {
                                n = !1;
                                break
                            }
                        }
                        n && (this.player_.cache_.selectedLanguage = {
                            enabled: !1
                        })
                    }, t
                }($i);
                Ve.registerComponent("OffTextTrackMenuItem", Hi);
                var Vi = function(e) {
                    function t(t, n) {
                        return void 0 === n && (n = {}), n.tracks = t.textTracks(), e.call(this, t, n) || this
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createItems = function(e, t) {
                        var n;
                        void 0 === e && (e = []), void 0 === t && (t = $i), this.label_ && (n = this.label_ + " off"), e.push(new Hi(this.player_, {
                            kinds: this.kinds_,
                            kind: this.kind_,
                            label: n
                        })), this.hideThreshold_ += 1;
                        var r = this.player_.textTracks();
                        Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
                        for (var i = 0; i < r.length; i++) {
                            var o = r[i];
                            if (this.kinds_.indexOf(o.kind) > -1) {
                                var s = new t(this.player_, {
                                    track: o,
                                    kinds: this.kinds_,
                                    kind: this.kind_,
                                    selectable: !0,
                                    multiSelectable: !1
                                });
                                s.addClass("vjs-" + o.kind + "-menu-item"), e.push(s)
                            }
                        }
                        return e
                    }, t
                }(Fi);
                Ve.registerComponent("TextTrackButton", Vi);
                var Ui = function(e) {
                    function t(t, n) {
                        var r, i = n.track,
                            o = n.cue,
                            a = t.currentTime();
                        return n.selectable = !0, n.multiSelectable = !1, n.label = o.text, n.selected = o.startTime <= a && a < o.endTime, (r = e.call(this, t, n) || this).track = i, r.cue = o, i.addEventListener("cuechange", Se(s(r), r.update)), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.handleClick = function(t) {
                        e.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
                    }, n.update = function(e) {
                        var t = this.cue,
                            n = this.player_.currentTime();
                        this.selected(t.startTime <= n && n < t.endTime)
                    }, t
                }(Bi);
                Ve.registerComponent("ChaptersTrackMenuItem", Ui);
                var Wi = function(e) {
                    function t(t, n, r) {
                        return e.call(this, t, n, r) || this
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.buildCSSClass = function() {
                        return "vjs-chapters-button " + e.prototype.buildCSSClass.call(this)
                    }, n.buildWrapperCSSClass = function() {
                        return "vjs-chapters-button " + e.prototype.buildWrapperCSSClass.call(this)
                    }, n.update = function(t) {
                        this.track_ && (!t || "addtrack" !== t.type && "removetrack" !== t.type) || this.setTrack(this.findChaptersTrack()), e.prototype.update.call(this)
                    }, n.setTrack = function(e) {
                        if (this.track_ !== e) {
                            if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
                                var t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                                t && t.removeEventListener("load", this.updateHandler_), this.track_ = null
                            }
                            if (this.track_ = e, this.track_) {
                                this.track_.mode = "hidden";
                                var n = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
                                n && n.addEventListener("load", this.updateHandler_)
                            }
                        }
                    }, n.findChaptersTrack = function() {
                        for (var e = this.player_.textTracks() || [], t = e.length - 1; t >= 0; t--) {
                            var n = e[t];
                            if (n.kind === this.kind_) return n
                        }
                    }, n.getMenuCaption = function() {
                        return this.track_ && this.track_.label ? this.track_.label : this.localize($e(this.kind_))
                    }, n.createMenu = function() {
                        return this.options_.title = this.getMenuCaption(), e.prototype.createMenu.call(this)
                    }, n.createItems = function() {
                        var e = [];
                        if (!this.track_) return e;
                        var t = this.track_.cues;
                        if (!t) return e;
                        for (var n = 0, r = t.length; n < r; n++) {
                            var i = t[n],
                                o = new Ui(this.player_, {
                                    track: this.track_,
                                    cue: i
                                });
                            e.push(o)
                        }
                        return e
                    }, t
                }(Vi);
                Wi.prototype.kind_ = "chapters", Wi.prototype.controlText_ = "Chapters", Ve.registerComponent("ChaptersButton", Wi);
                var zi = function(e) {
                    function t(t, n, r) {
                        var i;
                        i = e.call(this, t, n, r) || this;
                        var o = t.textTracks(),
                            a = Se(s(i), i.handleTracksChange);
                        return o.addEventListener("change", a), i.on("dispose", function() {
                            o.removeEventListener("change", a)
                        }), i
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.handleTracksChange = function(e) {
                        for (var t = this.player().textTracks(), n = !1, r = 0, i = t.length; r < i; r++) {
                            var o = t[r];
                            if (o.kind !== this.kind_ && "showing" === o.mode) {
                                n = !0;
                                break
                            }
                        }
                        n ? this.disable() : this.enable()
                    }, n.buildCSSClass = function() {
                        return "vjs-descriptions-button " + e.prototype.buildCSSClass.call(this)
                    }, n.buildWrapperCSSClass = function() {
                        return "vjs-descriptions-button " + e.prototype.buildWrapperCSSClass.call(this)
                    }, t
                }(Vi);
                zi.prototype.kind_ = "descriptions", zi.prototype.controlText_ = "Descriptions", Ve.registerComponent("DescriptionsButton", zi);
                var Ki = function(e) {
                    function t(t, n, r) {
                        return e.call(this, t, n, r) || this
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.buildCSSClass = function() {
                        return "vjs-subtitles-button " + e.prototype.buildCSSClass.call(this)
                    }, n.buildWrapperCSSClass = function() {
                        return "vjs-subtitles-button " + e.prototype.buildWrapperCSSClass.call(this)
                    }, t
                }(Vi);
                Ki.prototype.kind_ = "subtitles", Ki.prototype.controlText_ = "Subtitles", Ve.registerComponent("SubtitlesButton", Ki);
                var qi = function(e) {
                    function t(t, n) {
                        var r;
                        return n.track = {
                            player: t,
                            kind: n.kind,
                            label: n.kind + " settings",
                            selectable: !1,
                            default: !1,
                            mode: "disabled"
                        }, n.selectable = !1, n.name = "CaptionSettingsMenuItem", (r = e.call(this, t, n) || this).addClass("vjs-texttrack-settings"), r.controlText(", opens " + n.kind + " settings dialog"), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.handleClick = function(e) {
                        this.player().getChild("textTrackSettings").open()
                    }, t
                }($i);
                Ve.registerComponent("CaptionSettingsMenuItem", qi);
                var Gi = function(e) {
                    function t(t, n, r) {
                        return e.call(this, t, n, r) || this
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.buildCSSClass = function() {
                        return "vjs-captions-button " + e.prototype.buildCSSClass.call(this)
                    }, n.buildWrapperCSSClass = function() {
                        return "vjs-captions-button " + e.prototype.buildWrapperCSSClass.call(this)
                    }, n.createItems = function() {
                        var t = [];
                        return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new qi(this.player_, {
                            kind: this.kind_
                        })), this.hideThreshold_ += 1), e.prototype.createItems.call(this, t)
                    }, t
                }(Vi);
                Gi.prototype.kind_ = "captions", Gi.prototype.controlText_ = "Captions", Ve.registerComponent("CaptionsButton", Gi);
                var Xi = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createEl = function(t, n, r) {
                        var i = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
                        "captions" === this.options_.track.kind && (i += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "), i += "</span>";
                        var o = e.prototype.createEl.call(this, t, g({
                            innerHTML: i
                        }, n), r);
                        return o
                    }, t
                }($i);
                Ve.registerComponent("SubsCapsMenuItem", Xi);
                var Yi = function(e) {
                    function t(t, n) {
                        var r;
                        return void 0 === n && (n = {}), (r = e.call(this, t, n) || this).label_ = "subtitles", ["en", "en-us", "en-ca", "fr-ca"].indexOf(r.player_.language_) > -1 && (r.label_ = "captions"), r.menuButton_.controlText($e(r.label_)), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.buildCSSClass = function() {
                        return "vjs-subs-caps-button " + e.prototype.buildCSSClass.call(this)
                    }, n.buildWrapperCSSClass = function() {
                        return "vjs-subs-caps-button " + e.prototype.buildWrapperCSSClass.call(this)
                    }, n.createItems = function() {
                        var t = [];
                        return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (t.push(new qi(this.player_, {
                            kind: this.label_
                        })), this.hideThreshold_ += 1), t = e.prototype.createItems.call(this, t, Xi)
                    }, t
                }(Vi);
                Yi.prototype.kinds_ = ["captions", "subtitles"], Yi.prototype.controlText_ = "Subtitles", Ve.registerComponent("SubsCapsButton", Yi);
                var Ji = function(e) {
                    function t(t, n) {
                        var r, i = n.track,
                            o = t.audioTracks();
                        n.label = i.label || i.language || "Unknown", n.selected = i.enabled, (r = e.call(this, t, n) || this).track = i, r.addClass("vjs-" + i.kind + "-menu-item");
                        var a = function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            r.handleTracksChange.apply(s(r), t)
                        };
                        return o.addEventListener("change", a), r.on("dispose", function() {
                            o.removeEventListener("change", a)
                        }), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createEl = function(t, n, r) {
                        var i = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
                        "main-desc" === this.options_.track.kind && (i += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Descriptions") + "</span>\n      "), i += "</span>";
                        var o = e.prototype.createEl.call(this, t, g({
                            innerHTML: i
                        }, n), r);
                        return o
                    }, n.handleClick = function(t) {
                        var n = this.player_.audioTracks();
                        e.prototype.handleClick.call(this, t);
                        for (var r = 0; r < n.length; r++) {
                            var i = n[r];
                            i.enabled = i === this.track
                        }
                    }, n.handleTracksChange = function(e) {
                        this.selected(this.track.enabled)
                    }, t
                }(Bi);
                Ve.registerComponent("AudioTrackMenuItem", Ji);
                var Qi = function(e) {
                    function t(t, n) {
                        return void 0 === n && (n = {}), n.tracks = t.audioTracks(), e.call(this, t, n) || this
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.buildCSSClass = function() {
                        return "vjs-audio-button " + e.prototype.buildCSSClass.call(this)
                    }, n.buildWrapperCSSClass = function() {
                        return "vjs-audio-button " + e.prototype.buildWrapperCSSClass.call(this)
                    }, n.createItems = function(e) {
                        void 0 === e && (e = []), this.hideThreshold_ = 1;
                        for (var t = this.player_.audioTracks(), n = 0; n < t.length; n++) {
                            var r = t[n];
                            e.push(new Ji(this.player_, {
                                track: r,
                                selectable: !0,
                                multiSelectable: !1
                            }))
                        }
                        return e
                    }, t
                }(Fi);
                Qi.prototype.controlText_ = "Audio Track", Ve.registerComponent("AudioTrackButton", Qi);
                var Zi = function(e) {
                    function t(t, n) {
                        var r, i = n.rate,
                            o = parseFloat(i, 10);
                        return n.label = i, n.selected = 1 === o, n.selectable = !0, n.multiSelectable = !1, (r = e.call(this, t, n) || this).label = i, r.rate = o, r.on(t, "ratechange", r.update), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.handleClick = function(t) {
                        e.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
                    }, n.update = function(e) {
                        this.selected(this.player().playbackRate() === this.rate)
                    }, t
                }(Bi);
                Zi.prototype.contentElType = "button", Ve.registerComponent("PlaybackRateMenuItem", Zi);
                var eo = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).updateVisibility(), r.updateLabel(), r.on(t, "loadstart", r.updateVisibility), r.on(t, "ratechange", r.updateLabel), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createEl = function() {
                        var t = e.prototype.createEl.call(this);
                        return this.labelEl_ = x("div", {
                            className: "vjs-playback-rate-value",
                            innerHTML: "1x"
                        }), t.appendChild(this.labelEl_), t
                    }, n.dispose = function() {
                        this.labelEl_ = null, e.prototype.dispose.call(this)
                    }, n.buildCSSClass = function() {
                        return "vjs-playback-rate " + e.prototype.buildCSSClass.call(this)
                    }, n.buildWrapperCSSClass = function() {
                        return "vjs-playback-rate " + e.prototype.buildWrapperCSSClass.call(this)
                    }, n.createMenu = function() {
                        var e = new Mi(this.player()),
                            t = this.playbackRates();
                        if (t)
                            for (var n = t.length - 1; n >= 0; n--) e.addChild(new Zi(this.player(), {
                                rate: t[n] + "x"
                            }));
                        return e
                    }, n.updateARIAAttributes = function() {
                        this.el().setAttribute("aria-valuenow", this.player().playbackRate())
                    }, n.handleClick = function(e) {
                        for (var t = this.player().playbackRate(), n = this.playbackRates(), r = n[0], i = 0; i < n.length; i++)
                            if (n[i] > t) {
                                r = n[i];
                                break
                            }
                        this.player().playbackRate(r)
                    }, n.playbackRates = function() {
                        return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
                    }, n.playbackRateSupported = function() {
                        return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
                    }, n.updateVisibility = function(e) {
                        this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
                    }, n.updateLabel = function(e) {
                        this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
                    }, t
                }(Li);
                eo.prototype.controlText_ = "Playback Rate", Ve.registerComponent("PlaybackRateMenuButton", eo);
                var to = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.buildCSSClass = function() {
                        return "vjs-spacer " + e.prototype.buildCSSClass.call(this)
                    }, n.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass()
                        })
                    }, t
                }(Ve);
                Ve.registerComponent("Spacer", to);
                var no = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.buildCSSClass = function() {
                        return "vjs-custom-control-spacer " + e.prototype.buildCSSClass.call(this)
                    }, n.createEl = function() {
                        var t = e.prototype.createEl.call(this, {
                            className: this.buildCSSClass()
                        });
                        return t.innerHTML = " ", t
                    }, t
                }(to);
                Ve.registerComponent("CustomControlSpacer", no);
                var ro = function(e) {
                    function t() {
                        return e.apply(this, arguments) || this
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.createEl = function() {
                        return e.prototype.createEl.call(this, "div", {
                            className: "vjs-control-bar",
                            dir: "ltr"
                        })
                    }, t
                }(Ve);
                ro.prototype.options_ = {
                    children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "pictureInPictureToggle", "fullscreenToggle"]
                }, Ve.registerComponent("ControlBar", ro);
                var io = function(e) {
                    function t(t, n) {
                        var r;
                        return (r = e.call(this, t, n) || this).on(t, "error", r.open), r
                    }
                    r(t, e);
                    var n = t.prototype;
                    return n.buildCSSClass = function() {
                        return "vjs-error-display " + e.prototype.buildCSSClass.call(this)
                    }, n.content = function() {
                        var e = this.player().error();
                        return e ? this.localize(e.message) : ""
                    }, t
                }(jt);
                io.prototype.options_ = He(jt.prototype.options_, {
                    pauseOnOpen: !1,
                    fillAlways: !0,
                    temporary: !1,
                    uncloseable: !0
                }), Ve.registerComponent("ErrorDisplay", io);
                var oo = "vjs-text-track-settings",
                    so = ["#000", "Black"],
                    ao = ["#00F", "Blue"],
                    lo = ["#0FF", "Cyan"],
                    co = ["#0F0", "Green"],
                    uo = ["#F0F", "Magenta"],
                    ho = ["#F00", "Red"],
                    po = ["#FFF", "White"],
                    fo = ["#FF0", "Yellow"],
                    vo = ["1", "Opaque"],
                    yo = ["0.5", "Semi-Transparent"],
                    go = ["0", "Transparent"],
                    mo = {
                        backgroundColor: {
                            selector: ".vjs-bg-color > select",
                            id: "captions-background-color-%s",
                            label: "Color",
                            options: [so, po, ho, co, ao, fo, uo, lo]
                        },
                        backgroundOpacity: {
                            selector: ".vjs-bg-opacity > select",
                            id: "captions-background-opacity-%s",
                            label: "Transparency",
                            options: [vo, yo, go]
                        },
                        color: {
                            selector: ".vjs-fg-color > select",
                            id: "captions-foreground-color-%s",
                            label: "Color",
                            options: [po, so, ho, co, ao, fo, uo, lo]
                        },
                        edgeStyle: {
                            selector: ".vjs-edge-style > select",
                            id: "%s",
                            label: "Text Edge Style",
                            options: [
                                ["none", "None"],
                                ["raised", "Raised"],
                                ["depressed", "Depressed"],
                                ["uniform", "Uniform"],
                                ["dropshadow", "Dropshadow"]
                            ]
                        },
                        fontFamily: {
                            selector: ".vjs-font-family > select",
                            id: "captions-font-family-%s",
                            label: "Font Family",
                            options: [
                                ["proportionalSansSerif", "Proportional Sans-Serif"],
                                ["monospaceSansSerif", "Monospace Sans-Serif"],
                                ["proportionalSerif", "Proportional Serif"],
                                ["monospaceSerif", "Monospace Serif"],
                                ["casual", "Casual"],
                                ["script", "Script"],
                                ["small-caps", "Small Caps"]
                            ]
                        },
                        fontPercent: {
                            selector: ".vjs-font-percent > select",
                            id: "captions-font-size-%s",
                            label: "Font Size",
                            options: [
                                ["0.50", "50%"],
                                ["0.75", "75%"],
                                ["1.00", "100%"],
                                ["1.25", "125%"],
                                ["1.50", "150%"],
                                ["1.75", "175%"],
                                ["2.00", "200%"],
                                ["3.00", "300%"],
                                ["4.00", "400%"]
                            ],
                            default: 2,
                            parser: function(e) {
                                return "1.00" === e ? null : Number(e)
                            }
                        },
                        textOpacity: {
                            selector: ".vjs-text-opacity > select",
                            id: "captions-foreground-opacity-%s",
                            label: "Transparency",
                            options: [vo, yo]
                        },
                        windowColor: {
                            selector: ".vjs-window-color > select",
                            id: "captions-window-color-%s",
                            label: "Color"
                        },
                        windowOpacity: {
                            selector: ".vjs-window-opacity > select",
                            id: "captions-window-opacity-%s",
                            label: "Transparency",
                            options: [go, yo, vo]
                        }
                    };

                function _o(e, t) {
                    if (t && (e = t(e)), e && "none" !== e) return e
                }
                mo.windowColor.options = mo.backgroundColor.options;
                var bo = function(t) {
                    function n(e, n) {
                        var r;
                        return n.temporary = !1, (r = t.call(this, e, n) || this).updateDisplay = Se(s(r), r.updateDisplay), r.fill(), r.hasBeenOpened_ = r.hasBeenFilled_ = !0, r.endDialog = x("p", {
                            className: "vjs-control-text",
                            textContent: r.localize("End of dialog window.")
                        }), r.el().appendChild(r.endDialog), r.setDefaults(), void 0 === n.persistTextTrackSettings && (r.options_.persistTextTrackSettings = r.options_.playerOptions.persistTextTrackSettings), r.on(r.$(".vjs-done-button"), "click", function() {
                            r.saveSettings(), r.close()
                        }), r.on(r.$(".vjs-default-button"), "click", function() {
                            r.setDefaults(), r.updateDisplay()
                        }), y(mo, function(e) {
                            r.on(r.$(e.selector), "change", r.updateDisplay)
                        }), r.options_.persistTextTrackSettings && r.restoreSettings(), r
                    }
                    r(n, t);
                    var i = n.prototype;
                    return i.dispose = function() {
                        this.endDialog = null, t.prototype.dispose.call(this)
                    }, i.createElSelect_ = function(e, t, n) {
                        var r = this;
                        void 0 === t && (t = ""), void 0 === n && (n = "label");
                        var i = mo[e],
                            o = i.id.replace("%s", this.id_),
                            s = [t, o].join(" ").trim();
                        return ["<" + n + ' id="' + o + '" class="' + ("label" === n ? "vjs-label" : "") + '">', this.localize(i.label), "</" + n + ">", '<select aria-labelledby="' + s + '">'].concat(i.options.map(function(e) {
                            var t = o + "-" + e[1].replace(/\W+/g, "");
                            return ['<option id="' + t + '" value="' + e[0] + '" ', 'aria-labelledby="' + s + " " + t + '">', r.localize(e[1]), "</option>"].join("")
                        })).concat("</select>").join("")
                    }, i.createElFgColor_ = function() {
                        var e = "captions-text-legend-" + this.id_;
                        return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", e), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", e), "</span>", "</fieldset>"].join("")
                    }, i.createElBgColor_ = function() {
                        var e = "captions-background-" + this.id_;
                        return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", e), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", e), "</span>", "</fieldset>"].join("")
                    }, i.createElWinColor_ = function() {
                        var e = "captions-window-" + this.id_;
                        return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", e), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", e), "</span>", "</fieldset>"].join("")
                    }, i.createElColors_ = function() {
                        return x("div", {
                            className: "vjs-track-settings-colors",
                            innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
                        })
                    }, i.createElFont_ = function() {
                        return x("div", {
                            className: "vjs-track-settings-font",
                            innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
                        })
                    }, i.createElControls_ = function() {
                        var e = this.localize("restore all settings to the default values");
                        return x("div", {
                            className: "vjs-track-settings-controls",
                            innerHTML: ['<button type="button" class="vjs-default-button" title="' + e + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + e + "</span>", "</button>", '<button type="button" class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
                        })
                    }, i.content = function() {
                        return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
                    }, i.label = function() {
                        return this.localize("Caption Settings Dialog")
                    }, i.description = function() {
                        return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
                    }, i.buildCSSClass = function() {
                        return t.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
                    }, i.getValues = function() {
                        var e = this;
                        return function(e, t, n) {
                            return void 0 === n && (n = 0), v(e).reduce(function(n, r) {
                                return t(n, e[r], r)
                            }, n)
                        }(mo, function(t, n, r) {
                            var i = function(e, t) {
                                return _o(e.options[e.options.selectedIndex].value, t)
                            }(e.$(n.selector), n.parser);
                            return void 0 !== i && (t[r] = i), t
                        }, {})
                    }, i.setValues = function(e) {
                        var t = this;
                        y(mo, function(n, r) {
                            ! function(e, t, n) {
                                if (t)
                                    for (var r = 0; r < e.options.length; r++)
                                        if (_o(e.options[r].value, n) === t) {
                                            e.selectedIndex = r;
                                            break
                                        }
                            }(t.$(n.selector), e[r], n.parser)
                        })
                    }, i.setDefaults = function() {
                        var e = this;
                        y(mo, function(t) {
                            var n = t.hasOwnProperty("default") ? t.default : 0;
                            e.$(t.selector).selectedIndex = n
                        })
                    }, i.restoreSettings = function() {
                        var t;
                        try {
                            t = JSON.parse(e.localStorage.getItem(oo))
                        } catch (e) {
                            u.warn(e)
                        }
                        t && this.setValues(t)
                    }, i.saveSettings = function() {
                        if (this.options_.persistTextTrackSettings) {
                            var t = this.getValues();
                            try {
                                Object.keys(t).length ? e.localStorage.setItem(oo, JSON.stringify(t)) : e.localStorage.removeItem(oo)
                            } catch (e) {
                                u.warn(e)
                            }
                        }
                    }, i.updateDisplay = function() {
                        var e = this.player_.getChild("textTrackDisplay");
                        e && e.updateDisplay()
                    }, i.conditionalBlur_ = function() {
                        this.previouslyActiveEl_ = null;
                        var e = this.player_.controlBar,
                            t = e && e.subsCapsButton,
                            n = e && e.captionsButton;
                        t ? t.focus() : n && n.focus()
                    }, n
                }(jt);
                Ve.registerComponent("TextTrackSettings", bo);
                var To = function(t) {
                    function n(n, r) {
                        var i, o = r.ResizeObserver || e.ResizeObserver;
                        null === r.ResizeObserver && (o = !1);
                        var a = He({
                            createEl: !o,
                            reportTouchActivity: !1
                        }, r);
                        return (i = t.call(this, n, a) || this).ResizeObserver = r.ResizeObserver || e.ResizeObserver, i.loadListener_ = null, i.resizeObserver_ = null, i.debouncedHandler_ = Pe(function() {
                            i.resizeHandler()
                        }, 100, !1, s(i)), o ? (i.resizeObserver_ = new i.ResizeObserver(i.debouncedHandler_), i.resizeObserver_.observe(n.el())) : (i.loadListener_ = function() {
                            if (i.el_ && i.el_.contentWindow) {
                                var e = i.debouncedHandler_,
                                    t = i.unloadListener_ = function() {
                                        pe(this, "resize", e), pe(this, "unload", t), t = null
                                    };
                                de(i.el_.contentWindow, "unload", t), de(i.el_.contentWindow, "resize", e)
                            }
                        }, i.one("load", i.loadListener_)), i
                    }
                    r(n, t);
                    var i = n.prototype;
                    return i.createEl = function() {
                        return t.prototype.createEl.call(this, "iframe", {
                            className: "vjs-resize-manager",
                            tabIndex: -1
                        }, {
                            "aria-hidden": "true"
                        })
                    }, i.resizeHandler = function() {
                        this.player_ && this.player_.trigger && this.player_.trigger("playerresize")
                    }, i.dispose = function() {
                        this.debouncedHandler_ && this.debouncedHandler_.cancel(), this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.loadListener_ && this.off("load", this.loadListener_), this.el_ && this.el_.contentWindow && this.unloadListener_ && this.unloadListener_.call(this.el_.contentWindow), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null, t.prototype.dispose.call(this)
                    }, n
                }(Ve);
                Ve.registerComponent("ResizeManager", To);
                var ko = function(e) {
                    function n(n, r) {
                        var i, o = He({
                            createEl: !1
                        }, r);
                        return (i = e.call(this, n, o) || this).reset_(), i.on(i.player_, "durationchange", i.handleDurationchange), it && "hidden" in t && "visibilityState" in t && i.on(t, "visibilitychange", i.handleVisibilityChange), i
                    }
                    r(n, e);
                    var i = n.prototype;
                    return i.handleVisibilityChange = function() {
                        this.player_.duration() === 1 / 0 && (t.hidden ? this.stopTracking() : this.startTracking())
                    }, i.isBehind_ = function() {
                        if (!this.timeupdateSeen_) return !1;
                        var e = this.liveCurrentTime(),
                            t = this.player_.currentTime(),
                            n = this.seekableIncrement_,
                            r = 2 * n + .07;
                        return e !== 1 / 0 && e - r >= t
                    }, i.trackLive_ = function() {
                        this.pastSeekEnd_ = this.pastSeekEnd_;
                        var e = this.player_.seekable();
                        if (e && e.length) {
                            var t = this.seekableEnd();
                            t !== this.lastSeekEnd_ && (this.lastSeekEnd_ && (this.seekableIncrement_ = Math.abs(t - this.lastSeekEnd_)), this.pastSeekEnd_ = 0, this.lastSeekEnd_ = t, this.trigger("seekableendchange")), this.pastSeekEnd_ = this.pastSeekEnd() + .03, this.isBehind_() !== this.behindLiveEdge() && (this.behindLiveEdge_ = this.isBehind_(), this.trigger("liveedgechange"))
                        }
                    }, i.handleDurationchange = function() {
                        this.player_.duration() === 1 / 0 ? this.startTracking() : this.stopTracking()
                    }, i.startTracking = function() {
                        var e = this;
                        this.isTracking() || (this.timeupdateSeen_ || (this.timeupdateSeen_ = this.player_.hasStarted()), this.trackingInterval_ = this.setInterval(this.trackLive_, 30), this.trackLive_(), this.on(this.player_, "play", this.trackLive_), this.on(this.player_, "pause", this.trackLive_), this.timeupdateSeen_ || (this.one(this.player_, "play", this.handlePlay), this.handleTimeupdate = function() {
                            e.timeupdateSeen_ = !0, e.handleTimeupdate = null
                        }, this.one(this.player_, "timeupdate", this.handleTimeupdate)))
                    }, i.handlePlay = function() {
                        this.one(this.player_, "timeupdate", this.seekToLiveEdge)
                    }, i.reset_ = function() {
                        this.pastSeekEnd_ = 0, this.lastSeekEnd_ = null, this.behindLiveEdge_ = null, this.timeupdateSeen_ = !1, this.clearInterval(this.trackingInterval_), this.trackingInterval_ = null, this.seekableIncrement_ = 12, this.off(this.player_, "play", this.trackLive_), this.off(this.player_, "pause", this.trackLive_), this.off(this.player_, "play", this.handlePlay), this.off(this.player_, "timeupdate", this.seekToLiveEdge), this.handleTimeupdate && (this.off(this.player_, "timeupdate", this.handleTimeupdate), this.handleTimeupdate = null)
                    }, i.stopTracking = function() {
                        this.isTracking() && this.reset_()
                    }, i.seekableEnd = function() {
                        for (var e = this.player_.seekable(), t = [], n = e ? e.length : 0; n--;) t.push(e.end(n));
                        return t.length ? t.sort()[t.length - 1] : 1 / 0
                    }, i.seekableStart = function() {
                        for (var e = this.player_.seekable(), t = [], n = e ? e.length : 0; n--;) t.push(e.start(n));
                        return t.length ? t.sort()[0] : 0
                    }, i.liveWindow = function() {
                        var e = this.liveCurrentTime();
                        return e === 1 / 0 ? 1 / 0 : e - this.seekableStart()
                    }, i.isLive = function() {
                        return this.isTracking()
                    }, i.atLiveEdge = function() {
                        return !this.behindLiveEdge()
                    }, i.liveCurrentTime = function() {
                        return this.pastSeekEnd() + this.seekableEnd()
                    }, i.pastSeekEnd = function() {
                        return this.pastSeekEnd_
                    }, i.behindLiveEdge = function() {
                        return this.behindLiveEdge_
                    }, i.isTracking = function() {
                        return "number" == typeof this.trackingInterval_
                    }, i.seekToLiveEdge = function() {
                        this.atLiveEdge() || (this.player_.currentTime(this.liveCurrentTime()), this.player_.paused() && this.player_.play())
                    }, i.dispose = function() {
                        this.stopTracking(), e.prototype.dispose.call(this)
                    }, n
                }(Ve);
                Ve.registerComponent("LiveTracker", ko);
                var Co = function(e) {
                        var t = e.el();
                        if (t.hasAttribute("src")) return e.triggerSourceset(t.src), !0;
                        var n = e.$$("source"),
                            r = [],
                            i = "";
                        if (!n.length) return !1;
                        for (var o = 0; o < n.length; o++) {
                            var s = n[o].src;
                            s && -1 === r.indexOf(s) && r.push(s)
                        }
                        return !!r.length && (1 === r.length && (i = r[0]), e.triggerSourceset(i), !0)
                    },
                    Eo = Object.defineProperty({}, "innerHTML", {
                        get: function() {
                            return this.cloneNode(!0).innerHTML
                        },
                        set: function(n) {
                            var r = t.createElement(this.nodeName.toLowerCase());
                            r.innerHTML = n;
                            for (var i = t.createDocumentFragment(); r.childNodes.length;) i.appendChild(r.childNodes[0]);
                            return this.innerText = "", e.Element.prototype.appendChild.call(this, i), this.innerHTML
                        }
                    }),
                    So = function(e, t) {
                        for (var n = {}, r = 0; r < e.length && !((n = Object.getOwnPropertyDescriptor(e[r], t)) && n.set && n.get); r++);
                        return n.enumerable = !0, n.configurable = !0, n
                    },
                    wo = function(t) {
                        return So([t.el(), e.HTMLMediaElement.prototype, e.Element.prototype, Eo], "innerHTML")
                    },
                    Po = function(e) {
                        var t = e.el();
                        if (!t.resetSourceWatch_) {
                            var n = {},
                                r = wo(e),
                                i = function(n) {
                                    return function() {
                                        for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                                        var s = n.apply(t, i);
                                        return Co(e), s
                                    }
                                };
                            ["append", "appendChild", "insertAdjacentHTML"].forEach(function(e) {
                                t[e] && (n[e] = t[e], t[e] = i(n[e]))
                            }), Object.defineProperty(t, "innerHTML", He(r, {
                                set: i(r.set)
                            })), t.resetSourceWatch_ = function() {
                                t.resetSourceWatch_ = null, Object.keys(n).forEach(function(e) {
                                    t[e] = n[e]
                                }), Object.defineProperty(t, "innerHTML", r)
                            }, e.one("sourceset", t.resetSourceWatch_)
                        }
                    },
                    xo = Object.defineProperty({}, "src", {
                        get: function() {
                            return this.hasAttribute("src") ? Kt(e.Element.prototype.getAttribute.call(this, "src")) : ""
                        },
                        set: function(t) {
                            return e.Element.prototype.setAttribute.call(this, "src", t), t
                        }
                    }),
                    jo = function(t) {
                        return So([t.el(), e.HTMLMediaElement.prototype, xo], "src")
                    };

                function Ao() {
                    var e = a(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]);
                    return Ao = function() {
                        return e
                    }, e
                }
                var Io = function(n) {
                    function i(e, t) {
                        var r;
                        r = n.call(this, e, t) || this;
                        var i = e.source,
                            o = !1;
                        if (i && (r.el_.currentSrc !== i.src || e.tag && 3 === e.tag.initNetworkState_) ? r.setSource(i) : r.handleLateInit_(r.el_), e.enableSourceset && r.setupSourcesetHandling_(), r.el_.hasChildNodes()) {
                            for (var s = r.el_.childNodes, a = s.length, l = []; a--;) {
                                var c = s[a],
                                    h = c.nodeName.toLowerCase();
                                "track" === h && (r.featuresNativeTextTracks ? (r.remoteTextTrackEls().addTrackElement_(c), r.remoteTextTracks().addTrack(c.track), r.textTracks().addTrack(c.track), o || r.el_.hasAttribute("crossorigin") || !Gt(c.src) || (o = !0)) : l.push(c))
                            }
                            for (var d = 0; d < l.length; d++) r.el_.removeChild(l[d])
                        }
                        return r.proxyNativeTracks_(), r.featuresNativeTextTracks && o && u.warn(p(Ao())), r.restoreMetadataTracksInIOSNativePlayer_(), (lt || qe || Ze) && !0 === e.nativeControlsForTouch && r.setControls(!0), r.proxyWebkitFullscreen_(), r.triggerReady(), r
                    }
                    r(i, n);
                    var o = i.prototype;
                    return o.dispose = function() {
                        this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), i.disposeMediaElement(this.el_), this.options_ = null, n.prototype.dispose.call(this)
                    }, o.setupSourcesetHandling_ = function() {
                        ! function(e) {
                            if (e.featuresSourceset) {
                                var t = e.el();
                                if (!t.resetSourceset_) {
                                    var n = jo(e),
                                        r = t.setAttribute,
                                        i = t.load;
                                    Object.defineProperty(t, "src", He(n, {
                                        set: function(r) {
                                            var i = n.set.call(t, r);
                                            return e.triggerSourceset(t.src), i
                                        }
                                    })), t.setAttribute = function(n, i) {
                                        var o = r.call(t, n, i);
                                        return /src/i.test(n) && e.triggerSourceset(t.src), o
                                    }, t.load = function() {
                                        var n = i.call(t);
                                        return Co(e) || (e.triggerSourceset(""), Po(e)), n
                                    }, t.currentSrc ? e.triggerSourceset(t.currentSrc) : Co(e) || Po(e), t.resetSourceset_ = function() {
                                        t.resetSourceset_ = null, t.load = i, t.setAttribute = r, Object.defineProperty(t, "src", n), t.resetSourceWatch_ && t.resetSourceWatch_()
                                    }
                                }
                            }
                        }(this)
                    }, o.restoreMetadataTracksInIOSNativePlayer_ = function() {
                        var e, t = this.textTracks(),
                            n = function() {
                                e = [];
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    "metadata" === r.kind && e.push({
                                        track: r,
                                        storedMode: r.mode
                                    })
                                }
                            };
                        n(), t.addEventListener("change", n), this.on("dispose", function() {
                            return t.removeEventListener("change", n)
                        });
                        var r = function n() {
                            for (var r = 0; r < e.length; r++) {
                                var i = e[r];
                                "disabled" === i.track.mode && i.track.mode !== i.storedMode && (i.track.mode = i.storedMode)
                            }
                            t.removeEventListener("change", n)
                        };
                        this.on("webkitbeginfullscreen", function() {
                            t.removeEventListener("change", n), t.removeEventListener("change", r), t.addEventListener("change", r)
                        }), this.on("webkitendfullscreen", function() {
                            t.removeEventListener("change", n), t.addEventListener("change", n), t.removeEventListener("change", r)
                        })
                    }, o.overrideNative_ = function(e, t) {
                        var n = this;
                        if (t === this["featuresNative" + e + "Tracks"]) {
                            var r = e.toLowerCase();
                            this[r + "TracksListeners_"] && Object.keys(this[r + "TracksListeners_"]).forEach(function(e) {
                                var t = n.el()[r + "Tracks"];
                                t.removeEventListener(e, n[r + "TracksListeners_"][e])
                            }), this["featuresNative" + e + "Tracks"] = !t, this[r + "TracksListeners_"] = null, this.proxyNativeTracksForType_(r)
                        }
                    }, o.overrideNativeAudioTracks = function(e) {
                        this.overrideNative_("Audio", e)
                    }, o.overrideNativeVideoTracks = function(e) {
                        this.overrideNative_("Video", e)
                    }, o.proxyNativeTracksForType_ = function(e) {
                        var t = this,
                            n = Dr[e],
                            r = this.el()[n.getterName],
                            i = this[n.getterName]();
                        if (this["featuresNative" + n.capitalName + "Tracks"] && r && r.addEventListener) {
                            var o = {
                                    change: function(e) {
                                        i.trigger({
                                            type: "change",
                                            target: i,
                                            currentTarget: i,
                                            srcElement: i
                                        })
                                    },
                                    addtrack: function(e) {
                                        i.addTrack(e.track)
                                    },
                                    removetrack: function(e) {
                                        i.removeTrack(e.track)
                                    }
                                },
                                s = function() {
                                    for (var e = [], t = 0; t < i.length; t++) {
                                        for (var n = !1, o = 0; o < r.length; o++)
                                            if (r[o] === i[t]) {
                                                n = !0;
                                                break
                                            }
                                        n || e.push(i[t])
                                    }
                                    for (; e.length;) i.removeTrack(e.shift())
                                };
                            this[n.getterName + "Listeners_"] = o, Object.keys(o).forEach(function(e) {
                                var n = o[e];
                                r.addEventListener(e, n), t.on("dispose", function(t) {
                                    return r.removeEventListener(e, n)
                                })
                            }), this.on("loadstart", s), this.on("dispose", function(e) {
                                return t.off("loadstart", s)
                            })
                        }
                    }, o.proxyNativeTracks_ = function() {
                        var e = this;
                        Dr.names.forEach(function(t) {
                            e.proxyNativeTracksForType_(t)
                        })
                    }, o.createEl = function() {
                        var e = this.options_.tag;
                        if (!e || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
                            if (e) {
                                var n = e.cloneNode(!0);
                                e.parentNode && e.parentNode.insertBefore(n, e), i.disposeMediaElement(e), e = n
                            } else {
                                e = t.createElement("video");
                                var r = this.options_.tag && L(this.options_.tag),
                                    o = He({}, r);
                                lt && !0 === this.options_.nativeControlsForTouch || delete o.controls, M(e, g(o, {
                                    id: this.options_.techId,
                                    class: "vjs-tech"
                                }))
                            }
                            e.playerId = this.options_.playerId
                        }
                        void 0 !== this.options_.preload && R(e, "preload", this.options_.preload);
                        for (var s = ["loop", "muted", "playsinline", "autoplay"], a = 0; a < s.length; a++) {
                            var l = s[a],
                                c = this.options_[l];
                            void 0 !== c && (c ? R(e, l, l) : B(e, l), e[l] = c)
                        }
                        return e
                    }, o.handleLateInit_ = function(e) {
                        if (0 !== e.networkState && 3 !== e.networkState) {
                            if (0 === e.readyState) {
                                var t = !1,
                                    n = function() {
                                        t = !0
                                    };
                                this.on("loadstart", n);
                                var r = function() {
                                    t || this.trigger("loadstart")
                                };
                                return this.on("loadedmetadata", r), void this.ready(function() {
                                    this.off("loadstart", n), this.off("loadedmetadata", r), t || this.trigger("loadstart")
                                })
                            }
                            var i = ["loadstart"];
                            i.push("loadedmetadata"), e.readyState >= 2 && i.push("loadeddata"), e.readyState >= 3 && i.push("canplay"), e.readyState >= 4 && i.push("canplaythrough"), this.ready(function() {
                                i.forEach(function(e) {
                                    this.trigger(e)
                                }, this)
                            })
                        }
                    }, o.setCurrentTime = function(e) {
                        try {
                            this.el_.currentTime = e
                        } catch (e) {
                            u(e, "Video is not ready. (Video.js)")
                        }
                    }, o.duration = function() {
                        var e = this;
                        return this.el_.duration === 1 / 0 && Je && nt && 0 === this.el_.currentTime ? (this.on("timeupdate", function t() {
                            e.el_.currentTime > 0 && (e.el_.duration === 1 / 0 && e.trigger("durationchange"), e.off("timeupdate", t))
                        }), NaN) : this.el_.duration || NaN
                    }, o.width = function() {
                        return this.el_.offsetWidth
                    }, o.height = function() {
                        return this.el_.offsetHeight
                    }, o.proxyWebkitFullscreen_ = function() {
                        var e = this;
                        if ("webkitDisplayingFullscreen" in this.el_) {
                            var t = function() {
                                    this.trigger("fullscreenchange", {
                                        isFullscreen: !1
                                    })
                                },
                                n = function() {
                                    "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", t), this.trigger("fullscreenchange", {
                                        isFullscreen: !0
                                    }))
                                };
                            this.on("webkitbeginfullscreen", n), this.on("dispose", function() {
                                e.off("webkitbeginfullscreen", n), e.off("webkitendfullscreen", t)
                            })
                        }
                    }, o.supportsFullScreen = function() {
                        if ("function" == typeof this.el_.webkitEnterFullScreen) {
                            var t = e.navigator && e.navigator.userAgent || "";
                            if (/Android/.test(t) || !/Chrome|Mac OS X 10.5/.test(t)) return !0
                        }
                        return !1
                    }, o.enterFullScreen = function() {
                        var e = this.el_;
                        e.paused && e.networkState <= e.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function() {
                            e.pause(), e.webkitEnterFullScreen()
                        }, 0)) : e.webkitEnterFullScreen()
                    }, o.exitFullScreen = function() {
                        this.el_.webkitExitFullScreen()
                    }, o.requestPictureInPicture = function() {
                        return this.el_.requestPictureInPicture()
                    }, o.src = function(e) {
                        if (void 0 === e) return this.el_.src;
                        this.setSrc(e)
                    }, o.reset = function() {
                        i.resetMediaElement(this.el_)
                    }, o.currentSrc = function() {
                        return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
                    }, o.setControls = function(e) {
                        this.el_.controls = !!e
                    }, o.addTextTrack = function(e, t, r) {
                        return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, t, r) : n.prototype.addTextTrack.call(this, e, t, r)
                    }, o.createRemoteTextTrack = function(e) {
                        if (!this.featuresNativeTextTracks) return n.prototype.createRemoteTextTrack.call(this, e);
                        var r = t.createElement("track");
                        return e.kind && (r.kind = e.kind), e.label && (r.label = e.label), (e.language || e.srclang) && (r.srclang = e.language || e.srclang), e.default && (r.default = e.default), e.id && (r.id = e.id), e.src && (r.src = e.src), r
                    }, o.addRemoteTextTrack = function(e, t) {
                        var r = n.prototype.addRemoteTextTrack.call(this, e, t);
                        return this.featuresNativeTextTracks && this.el().appendChild(r), r
                    }, o.removeRemoteTextTrack = function(e) {
                        if (n.prototype.removeRemoteTextTrack.call(this, e), this.featuresNativeTextTracks)
                            for (var t = this.$$("track"), r = t.length; r--;) e !== t[r] && e !== t[r].track || this.el().removeChild(t[r])
                    }, o.getVideoPlaybackQuality = function() {
                        if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
                        var t = {};
                        return void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (t.droppedVideoFrames = this.el().webkitDroppedFrameCount, t.totalVideoFrames = this.el().webkitDecodedFrameCount), e.performance && "function" == typeof e.performance.now ? t.creationTime = e.performance.now() : e.performance && e.performance.timing && "number" == typeof e.performance.timing.navigationStart && (t.creationTime = e.Date.now() - e.performance.timing.navigationStart), t
                    }, i
                }(Fr);
                if (E()) {
                    Io.TEST_VID = t.createElement("video");
                    var Oo = t.createElement("track");
                    Oo.kind = "captions", Oo.srclang = "en", Oo.label = "English", Io.TEST_VID.appendChild(Oo)
                }
                Io.isSupported = function() {
                    try {
                        Io.TEST_VID.volume = .5
                    } catch (e) {
                        return !1
                    }
                    return !(!Io.TEST_VID || !Io.TEST_VID.canPlayType)
                }, Io.canPlayType = function(e) {
                    return Io.TEST_VID.canPlayType(e)
                }, Io.canPlaySource = function(e, t) {
                    return Io.canPlayType(e.type)
                }, Io.canControlVolume = function() {
                    try {
                        var e = Io.TEST_VID.volume;
                        return Io.TEST_VID.volume = e / 2 + .1, e !== Io.TEST_VID.volume
                    } catch (e) {
                        return !1
                    }
                }, Io.canMuteVolume = function() {
                    try {
                        var e = Io.TEST_VID.muted;
                        return Io.TEST_VID.muted = !e, Io.TEST_VID.muted ? R(Io.TEST_VID, "muted", "muted") : B(Io.TEST_VID, "muted"), e !== Io.TEST_VID.muted
                    } catch (e) {
                        return !1
                    }
                }, Io.canControlPlaybackRate = function() {
                    if (Je && nt && rt < 58) return !1;
                    try {
                        var e = Io.TEST_VID.playbackRate;
                        return Io.TEST_VID.playbackRate = e / 2 + .1, e !== Io.TEST_VID.playbackRate
                    } catch (e) {
                        return !1
                    }
                }, Io.canOverrideAttributes = function() {
                    try {
                        var e = function() {};
                        Object.defineProperty(t.createElement("video"), "src", {
                            get: e,
                            set: e
                        }), Object.defineProperty(t.createElement("audio"), "src", {
                            get: e,
                            set: e
                        }), Object.defineProperty(t.createElement("video"), "innerHTML", {
                            get: e,
                            set: e
                        }), Object.defineProperty(t.createElement("audio"), "innerHTML", {
                            get: e,
                            set: e
                        })
                    } catch (e) {
                        return !1
                    }
                    return !0
                }, Io.supportsNativeTextTracks = function() {
                    return st || Xe && nt
                }, Io.supportsNativeVideoTracks = function() {
                    return !(!Io.TEST_VID || !Io.TEST_VID.videoTracks)
                }, Io.supportsNativeAudioTracks = function() {
                    return !(!Io.TEST_VID || !Io.TEST_VID.audioTracks)
                }, Io.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], Io.prototype.featuresVolumeControl = Io.canControlVolume(), Io.prototype.featuresMuteControl = Io.canMuteVolume(), Io.prototype.featuresPlaybackRate = Io.canControlPlaybackRate(), Io.prototype.featuresSourceset = Io.canOverrideAttributes(), Io.prototype.movingMediaElementInDOM = !Xe, Io.prototype.featuresFullscreenResize = !0, Io.prototype.featuresProgressEvents = !0, Io.prototype.featuresTimeupdateEvents = !0, Io.prototype.featuresNativeTextTracks = Io.supportsNativeTextTracks(), Io.prototype.featuresNativeVideoTracks = Io.supportsNativeVideoTracks(), Io.prototype.featuresNativeAudioTracks = Io.supportsNativeAudioTracks();
                var Do = Io.TEST_VID && Io.TEST_VID.constructor.prototype.canPlayType,
                    No = /^application\/(?:x-|vnd\.apple\.)mpegurl/i;

                function Mo() {
                    var e = a(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]);
                    return Mo = function() {
                        return e
                    }, e
                }
                Io.patchCanPlayType = function() {
                    Qe >= 4 && !et && !nt && (Io.TEST_VID.constructor.prototype.canPlayType = function(e) {
                        return e && No.test(e) ? "maybe" : Do.call(this, e)
                    })
                }, Io.unpatchCanPlayType = function() {
                    var e = Io.TEST_VID.constructor.prototype.canPlayType;
                    return Io.TEST_VID.constructor.prototype.canPlayType = Do, e
                }, Io.patchCanPlayType(), Io.disposeMediaElement = function(e) {
                    if (e) {
                        for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes();) e.removeChild(e.firstChild);
                        e.removeAttribute("src"), "function" == typeof e.load && function() {
                            try {
                                e.load()
                            } catch (e) {}
                        }()
                    }
                }, Io.resetMediaElement = function(e) {
                    if (e) {
                        for (var t = e.querySelectorAll("source"), n = t.length; n--;) e.removeChild(t[n]);
                        e.removeAttribute("src"), "function" == typeof e.load && function() {
                            try {
                                e.load()
                            } catch (e) {}
                        }()
                    }
                }, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function(e) {
                    Io.prototype[e] = function() {
                        return this.el_[e] || this.el_.hasAttribute(e)
                    }
                }), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function(e) {
                    Io.prototype["set" + $e(e)] = function(t) {
                        this.el_[e] = t, t ? this.el_.setAttribute(e, e) : this.el_.removeAttribute(e)
                    }
                }), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function(e) {
                    Io.prototype[e] = function() {
                        return this.el_[e]
                    }
                }), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach(function(e) {
                    Io.prototype["set" + $e(e)] = function(t) {
                        this.el_[e] = t
                    }
                }), ["pause", "load", "play"].forEach(function(e) {
                    Io.prototype[e] = function() {
                        return this.el_[e]()
                    }
                }), Fr.withSourceHandlers(Io), Io.nativeSourceHandler = {}, Io.nativeSourceHandler.canPlayType = function(e) {
                    try {
                        return Io.TEST_VID.canPlayType(e)
                    } catch (e) {
                        return ""
                    }
                }, Io.nativeSourceHandler.canHandleSource = function(e, t) {
                    if (e.type) return Io.nativeSourceHandler.canPlayType(e.type);
                    if (e.src) {
                        var n = qt(e.src);
                        return Io.nativeSourceHandler.canPlayType("video/" + n)
                    }
                    return ""
                }, Io.nativeSourceHandler.handleSource = function(e, t, n) {
                    t.setSrc(e.src)
                }, Io.nativeSourceHandler.dispose = function() {}, Io.registerSourceHandler(Io.nativeSourceHandler), Fr.registerTech("Html5", Io);
                var Lo = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"],
                    Fo = {
                        canplay: "CanPlay",
                        canplaythrough: "CanPlayThrough",
                        playing: "Playing",
                        seeked: "Seeked"
                    },
                    Ro = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"],
                    Bo = {};
                Ro.forEach(function(e) {
                    var t = "x" === e.charAt(0) ? "x-" + e.substring(1) : e;
                    Bo[e] = "vjs-layout-" + t
                });
                var $o = {
                        tiny: 210,
                        xsmall: 320,
                        small: 425,
                        medium: 768,
                        large: 1440,
                        xlarge: 2560,
                        huge: 1 / 0
                    },
                    Ho = function(i) {
                        function o(e, t, r) {
                            var a;
                            if (e.id = e.id || t.id || "vjs_video_" + te(), (t = g(o.getTagSettings(e), t)).initChildren = !1, t.createEl = !1, t.evented = !1, t.reportTouchActivity = !1, !t.language)
                                if ("function" == typeof e.closest) {
                                    var l = e.closest("[lang]");
                                    l && l.getAttribute && (t.language = l.getAttribute("lang"))
                                } else
                                    for (var c = e; c && 1 === c.nodeType;) {
                                        if (L(c).hasOwnProperty("lang")) {
                                            t.language = c.getAttribute("lang");
                                            break
                                        }
                                        c = c.parentNode
                                    }
                                if ((a = i.call(this, null, t, r) || this).boundDocumentFullscreenChange_ = Se(s(a), a.documentFullscreenChange_), a.boundFullWindowOnEscKey_ = Se(s(a), a.fullWindowOnEscKey), a.log = h(a.id_), a.fsApi_ = vt, a.isPosterFromTech_ = !1, a.queuedCallbacks_ = [], a.isReady_ = !1, a.hasStarted_ = !1, a.userActive_ = !1, !a.options_ || !a.options_.techOrder || !a.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                            if (a.tag = e, a.tagAttributes = e && L(e), a.language(a.options_.language), t.languages) {
                                var u = {};
                                Object.getOwnPropertyNames(t.languages).forEach(function(e) {
                                    u[e.toLowerCase()] = t.languages[e]
                                }), a.languages_ = u
                            } else a.languages_ = o.prototype.options_.languages;
                            a.resetCache_(), a.poster_ = t.poster || "", a.controls_ = !!t.controls, e.controls = !1, e.removeAttribute("controls"), a.changingSrc_ = !1, a.playCallbacks_ = [], a.playTerminatedQueue_ = [], e.hasAttribute("autoplay") ? a.autoplay(!0) : a.autoplay(a.options_.autoplay), t.plugins && Object.keys(t.plugins).forEach(function(e) {
                                if ("function" != typeof a[e]) throw new Error('plugin "' + e + '" does not exist')
                            }), a.scrubbing_ = !1, a.el_ = a.createEl(), Fe(s(a), {
                                eventBusKey: "el_"
                            }), a.fluid_ && a.on("playerreset", a.updateStyleEl_);
                            var d = He(a.options_);
                            t.plugins && Object.keys(t.plugins).forEach(function(e) {
                                a[e](t.plugins[e])
                            }), a.options_.playerOptions = d, a.middleware_ = [], a.initChildren(), a.isAudio("audio" === e.nodeName.toLowerCase()), a.controls() ? a.addClass("vjs-controls-enabled") : a.addClass("vjs-controls-disabled"), a.el_.setAttribute("role", "region"), a.isAudio() ? a.el_.setAttribute("aria-label", a.localize("Audio Player")) : a.el_.setAttribute("aria-label", a.localize("Video Player")), a.isAudio() && a.addClass("vjs-audio"), a.flexNotSupported_() && a.addClass("vjs-no-flex"), lt && a.addClass("vjs-touch-enabled"), Xe || a.addClass("vjs-workinghover"), o.players[a.id_] = s(a);
                            var p = n.split(".")[0];
                            return a.addClass("vjs-v" + p), a.userActive(!0), a.reportUserActivity(), a.one("play", a.listenForUserActivity_), a.on("stageclick", a.handleStageClick_), a.on("keydown", a.handleKeyDown), a.breakpoints(a.options_.breakpoints), a.responsive(a.options_.responsive), a
                        }
                        r(o, i);
                        var a = o.prototype;
                        return a.dispose = function() {
                            var e = this;
                            this.trigger("dispose"), this.off("dispose"), pe(t, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), pe(t, "keydown", this.boundFullWindowOnEscKey_), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), o.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null),
                                function(e) {
                                    Br[e.id()] = null
                                }(this), Mr.names.forEach(function(t) {
                                    var n = Mr[t],
                                        r = e[n.getterName]();
                                    r && r.off && r.off()
                                }), i.prototype.dispose.call(this)
                        }, a.createEl = function() {
                            var n, r = this.tag,
                                o = this.playerElIngest_ = r.parentNode && r.parentNode.hasAttribute && r.parentNode.hasAttribute("data-vjs-player"),
                                s = "video-js" === this.tag.tagName.toLowerCase();
                            o ? n = this.el_ = r.parentNode : s || (n = this.el_ = i.prototype.createEl.call(this, "div"));
                            var a = L(r);
                            if (s) {
                                for (n = this.el_ = r, r = this.tag = t.createElement("video"); n.children.length;) r.appendChild(n.firstChild);
                                I(n, "video-js") || O(n, "video-js"), n.appendChild(r), o = this.playerElIngest_ = n, Object.keys(n).forEach(function(e) {
                                    r[e] = n[e]
                                })
                            }
                            if (r.setAttribute("tabindex", "-1"), a.tabindex = "-1", (it || nt && at) && (r.setAttribute("role", "application"), a.role = "application"), r.removeAttribute("width"), r.removeAttribute("height"), "width" in a && delete a.width, "height" in a && delete a.height, Object.getOwnPropertyNames(a).forEach(function(e) {
                                    s && "class" === e || n.setAttribute(e, a[e]), s && r.setAttribute(e, a[e])
                                }), r.playerId = r.id, r.id += "_html5_api", r.className = "vjs-tech", r.player = n.player = this, this.addClass("vjs-paused"), !0 !== e.VIDEOJS_NO_DYNAMIC_STYLE) {
                                this.styleEl_ = Ce("vjs-styles-dimensions");
                                var l = J(".vjs-styles-defaults"),
                                    c = J("head");
                                c.insertBefore(this.styleEl_, l ? l.nextSibling : c.firstChild)
                            }
                            this.fill_ = !1, this.fluid_ = !1, this.width(this.options_.width), this.height(this.options_.height), this.fill(this.options_.fill), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
                            for (var u = r.getElementsByTagName("a"), h = 0; h < u.length; h++) {
                                var d = u.item(h);
                                O(d, "vjs-hidden"), d.setAttribute("hidden", "hidden")
                            }
                            return r.initNetworkState_ = r.networkState, r.parentNode && !o && r.parentNode.insertBefore(n, r), A(r, n), this.children_.unshift(r), this.el_.setAttribute("lang", this.language_), this.el_ = n, n
                        }, a.width = function(e) {
                            return this.dimension("width", e)
                        }, a.height = function(e) {
                            return this.dimension("height", e)
                        }, a.dimension = function(e, t) {
                            var n = e + "_";
                            if (void 0 === t) return this[n] || 0;
                            if ("" === t) return this[n] = void 0, void this.updateStyleEl_();
                            var r = parseFloat(t);
                            isNaN(r) ? u.error('Improper value "' + t + '" supplied for for ' + e) : (this[n] = r, this.updateStyleEl_())
                        }, a.fluid = function(e) {
                            if (void 0 === e) return !!this.fluid_;
                            this.fluid_ = !!e, je(this) && this.off("playerreset", this.updateStyleEl_), e ? (this.addClass("vjs-fluid"), this.fill(!1), function(e, t) {
                                je(e) ? t() : (e.eventedCallbacks || (e.eventedCallbacks = []), e.eventedCallbacks.push(t))
                            }(function() {
                                this.on("playerreset", this.updateStyleEl_)
                            })) : this.removeClass("vjs-fluid"), this.updateStyleEl_()
                        }, a.fill = function(e) {
                            if (void 0 === e) return !!this.fill_;
                            this.fill_ = !!e, e ? (this.addClass("vjs-fill"), this.fluid(!1)) : this.removeClass("vjs-fill")
                        }, a.aspectRatio = function(e) {
                            if (void 0 === e) return this.aspectRatio_;
                            if (!/^\d+\:\d+$/.test(e)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                            this.aspectRatio_ = e, this.fluid(!0), this.updateStyleEl_()
                        }, a.updateStyleEl_ = function() {
                            if (!0 !== e.VIDEOJS_NO_DYNAMIC_STYLE) {
                                var t, n, r, i = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() > 0 ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"),
                                    o = i[1] / i[0];
                                t = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / o : this.videoWidth() || 300, n = void 0 !== this.height_ ? this.height_ : t * o, r = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(r), Ee(this.styleEl_, "\n      ." + r + " {\n        width: " + t + "px;\n        height: " + n + "px;\n      }\n\n      ." + r + ".vjs-fluid {\n        padding-top: " + 100 * o + "%;\n      }\n    ")
                            } else {
                                var s = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                                    a = "number" == typeof this.height_ ? this.height_ : this.options_.height,
                                    l = this.tech_ && this.tech_.el();
                                l && (s >= 0 && (l.width = s), a >= 0 && (l.height = a))
                            }
                        }, a.loadTech_ = function(e, t) {
                            var n = this;
                            this.tech_ && this.unloadTech_();
                            var r = $e(e),
                                i = e.charAt(0).toLowerCase() + e.slice(1);
                            "Html5" !== r && this.tag && (Fr.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = r, this.isReady_ = !1;
                            var o = "string" != typeof this.autoplay() && this.autoplay(),
                                s = {
                                    source: t,
                                    autoplay: o,
                                    nativeControlsForTouch: this.options_.nativeControlsForTouch,
                                    playerId: this.id(),
                                    techId: this.id() + "_" + i + "_api",
                                    playsinline: this.options_.playsinline,
                                    preload: this.options_.preload,
                                    loop: this.options_.loop,
                                    muted: this.options_.muted,
                                    poster: this.poster(),
                                    language: this.language(),
                                    playerElIngest: this.playerElIngest_ || !1,
                                    "vtt.js": this.options_["vtt.js"],
                                    canOverridePoster: !!this.options_.techCanOverridePoster,
                                    enableSourceset: this.options_.enableSourceset,
                                    Promise: this.options_.Promise
                                };
                            Mr.names.forEach(function(e) {
                                var t = Mr[e];
                                s[t.getterName] = n[t.privateName]
                            }), g(s, this.options_[r]), g(s, this.options_[i]), g(s, this.options_[e.toLowerCase()]), this.tag && (s.tag = this.tag), t && t.src === this.cache_.src && this.cache_.currentTime > 0 && (s.startTime = this.cache_.currentTime);
                            var a = Fr.getTech(e);
                            if (!a) throw new Error("No Tech named '" + r + "' exists! '" + r + "' should be registered using videojs.registerTech()'");
                            this.tech_ = new a(s), this.tech_.ready(Se(this, this.handleTechReady_), !0), wt.jsonToTextTracks(this.textTracksJson_ || [], this.tech_), Lo.forEach(function(e) {
                                n.on(n.tech_, e, n["handleTech" + $e(e) + "_"])
                            }), Object.keys(Fo).forEach(function(e) {
                                n.on(n.tech_, e, function(t) {
                                    0 === n.tech_.playbackRate() && n.tech_.seeking() ? n.queuedCallbacks_.push({
                                        callback: n["handleTech" + Fo[e] + "_"].bind(n),
                                        event: t
                                    }) : n["handleTech" + Fo[e] + "_"](t)
                                })
                            }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "sourceset", this.handleTechSourceset_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "enterpictureinpicture", this.handleTechEnterPictureInPicture_), this.on(this.tech_, "leavepictureinpicture", this.handleTechLeavePictureInPicture_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.on(this.tech_, "ratechange", this.handleTechRateChange_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === r && this.tag || A(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
                        }, a.unloadTech_ = function() {
                            var e = this;
                            Mr.names.forEach(function(t) {
                                var n = Mr[t];
                                e[n.privateName] = e[n.getterName]()
                            }), this.textTracksJson_ = wt.textTracksToJson(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1, this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")), this.isPosterFromTech_ = !1
                        }, a.tech = function(e) {
                            return void 0 === e && u.warn(p(Mo())), this.tech_
                        }, a.addTechControlsListeners_ = function() {
                            this.removeTechControlsListeners_(), this.on(this.tech_, "mouseup", this.handleTechClick_), this.on(this.tech_, "dblclick", this.handleTechDoubleClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
                        }, a.removeTechControlsListeners_ = function() {
                            this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mouseup", this.handleTechClick_), this.off(this.tech_, "dblclick", this.handleTechDoubleClick_)
                        }, a.handleTechReady_ = function() {
                            this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_()
                        }, a.handleTechLoadStart_ = function() {
                            this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.handleTechDurationChange_(), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay")), this.manualAutoplay_(this.autoplay())
                        }, a.manualAutoplay_ = function(e) {
                            var t = this;
                            if (this.tech_ && "string" == typeof e) {
                                var n, r = function() {
                                    var e = t.muted();
                                    t.muted(!0);
                                    var n = function() {
                                        t.muted(e)
                                    };
                                    t.playTerminatedQueue_.push(n);
                                    var r = t.play();
                                    if (Ct(r)) return r.catch(n)
                                };
                                if ("any" === e && !0 !== this.muted() ? Ct(n = this.play()) && (n = n.catch(r)) : n = "muted" === e && !0 !== this.muted() ? r() : this.play(), Ct(n)) return n.then(function() {
                                    t.trigger({
                                        type: "autoplay-success",
                                        autoplay: e
                                    })
                                }).catch(function(n) {
                                    t.trigger({
                                        type: "autoplay-failure",
                                        autoplay: e
                                    })
                                })
                            }
                        }, a.updateSourceCaches_ = function(e) {
                            void 0 === e && (e = "");
                            var t = e,
                                n = "";
                            "string" != typeof t && (t = e.src, n = e.type), this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], t && !n && (n = function(e, t) {
                                if (!t) return "";
                                if (e.cache_.source.src === t && e.cache_.source.type) return e.cache_.source.type;
                                var n = e.cache_.sources.filter(function(e) {
                                    return e.src === t
                                });
                                if (n.length) return n[0].type;
                                for (var r = e.$$("source"), i = 0; i < r.length; i++) {
                                    var o = r[i];
                                    if (o.type && o.src && o.src === t) return o.type
                                }
                                return Gr(t)
                            }(this, t)), this.cache_.source = He({}, e, {
                                src: t,
                                type: n
                            });
                            for (var r = this.cache_.sources.filter(function(e) {
                                    return e.src && e.src === t
                                }), i = [], o = this.$$("source"), s = [], a = 0; a < o.length; a++) {
                                var l = L(o[a]);
                                i.push(l), l.src && l.src === t && s.push(l.src)
                            }
                            s.length && !r.length ? this.cache_.sources = i : r.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = t
                        }, a.handleTechSourceset_ = function(e) {
                            var t = this;
                            if (!this.changingSrc_) {
                                var n = function(e) {
                                        return t.updateSourceCaches_(e)
                                    },
                                    r = this.currentSource().src,
                                    i = e.src;
                                r && !/^blob:/.test(r) && /^blob:/.test(i) && (!this.lastSource_ || this.lastSource_.tech !== i && this.lastSource_.player !== r) && (n = function() {}), n(i), e.src || this.tech_.one(["sourceset", "loadstart"], function e(n) {
                                    if ("sourceset" !== n.type) {
                                        var r = t.techGet("currentSrc");
                                        t.lastSource_.tech = r, t.updateSourceCaches_(r)
                                    }
                                    t.tech_.off(["sourceset", "loadstart"], e)
                                })
                            }
                            this.lastSource_ = {
                                player: this.currentSource().src,
                                tech: e.src
                            }, this.trigger({
                                src: e.src,
                                type: "sourceset"
                            })
                        }, a.hasStarted = function(e) {
                            if (void 0 === e) return this.hasStarted_;
                            e !== this.hasStarted_ && (this.hasStarted_ = e, this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
                        }, a.handleTechPlay_ = function() {
                            this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
                        }, a.handleTechRateChange_ = function() {
                            this.tech_.playbackRate() > 0 && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach(function(e) {
                                return e.callback(e.event)
                            }), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange")
                        }, a.handleTechWaiting_ = function() {
                            var e = this;
                            this.addClass("vjs-waiting"), this.trigger("waiting");
                            var t = this.currentTime();
                            this.on("timeupdate", function n() {
                                t !== e.currentTime() && (e.removeClass("vjs-waiting"), e.off("timeupdate", n))
                            })
                        }, a.handleTechCanPlay_ = function() {
                            this.removeClass("vjs-waiting"), this.trigger("canplay")
                        }, a.handleTechCanPlayThrough_ = function() {
                            this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
                        }, a.handleTechPlaying_ = function() {
                            this.removeClass("vjs-waiting"), this.trigger("playing")
                        }, a.handleTechSeeking_ = function() {
                            this.addClass("vjs-seeking"), this.trigger("seeking")
                        }, a.handleTechSeeked_ = function() {
                            this.removeClass("vjs-seeking"), this.removeClass("vjs-ended"), this.trigger("seeked")
                        }, a.handleTechFirstPlay_ = function() {
                            this.options_.starttime && (u.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay")
                        }, a.handleTechPause_ = function() {
                            this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
                        }, a.handleTechEnded_ = function() {
                            this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
                        }, a.handleTechDurationChange_ = function() {
                            this.duration(this.techGet_("duration"))
                        }, a.handleTechClick_ = function(e) {
                            Y(e) && this.controls_ && (this.paused() ? Et(this.play()) : this.pause())
                        }, a.handleTechDoubleClick_ = function(e) {
                            if (this.controls_) {
                                var t = Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), function(t) {
                                    return t.contains(e.target)
                                });
                                t || void 0 !== this.options_ && void 0 !== this.options_.userActions && void 0 !== this.options_.userActions.doubleClick && !1 === this.options_.userActions.doubleClick || (void 0 !== this.options_ && void 0 !== this.options_.userActions && "function" == typeof this.options_.userActions.doubleClick ? this.options_.userActions.doubleClick.call(this, e) : this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen())
                            }
                        }, a.handleTechTap_ = function() {
                            this.userActive(!this.userActive())
                        }, a.handleTechTouchStart_ = function() {
                            this.userWasActive = this.userActive()
                        }, a.handleTechTouchMove_ = function() {
                            this.userWasActive && this.reportUserActivity()
                        }, a.handleTechTouchEnd_ = function(e) {
                            e.preventDefault()
                        }, a.handleStageClick_ = function() {
                            this.reportUserActivity()
                        }, a.toggleFullscreenClass_ = function() {
                            this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
                        }, a.documentFullscreenChange_ = function(e) {
                            var n = this.el(),
                                r = t[this.fsApi_.fullscreenElement] === n;
                            !r && n.matches ? r = n.matches(":" + this.fsApi_.fullscreen) : !r && n.msMatchesSelector && (r = n.msMatchesSelector(":" + this.fsApi_.fullscreen)), this.isFullscreen(r), !1 === this.isFullscreen() && pe(t, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), this.fsApi_.prefixed && this.trigger("fullscreenchange")
                        }, a.handleTechFullscreenChange_ = function(e, t) {
                            t && this.isFullscreen(t.isFullscreen), this.trigger("fullscreenchange")
                        }, a.togglePictureInPictureClass_ = function() {
                            this.isInPictureInPicture() ? this.addClass("vjs-picture-in-picture") : this.removeClass("vjs-picture-in-picture")
                        }, a.handleTechEnterPictureInPicture_ = function(e) {
                            this.isInPictureInPicture(!0)
                        }, a.handleTechLeavePictureInPicture_ = function(e) {
                            this.isInPictureInPicture(!1)
                        }, a.handleTechError_ = function() {
                            var e = this.tech_.error();
                            this.error(e)
                        }, a.handleTechTextData_ = function() {
                            var e = null;
                            arguments.length > 1 && (e = arguments[1]), this.trigger("textdata", e)
                        }, a.getCache = function() {
                            return this.cache_
                        }, a.resetCache_ = function() {
                            this.cache_ = {
                                currentTime: 0,
                                inactivityTimeout: this.options_.inactivityTimeout,
                                duration: NaN,
                                lastVolume: 1,
                                lastPlaybackRate: this.defaultPlaybackRate(),
                                media: null,
                                src: "",
                                source: {},
                                sources: [],
                                volume: 1
                            }
                        }, a.techCall_ = function(e, t) {
                            this.ready(function() {
                                if (e in Wr) return function(e, t, n, r) {
                                    return t[n](e.reduce(Kr(n), r))
                                }(this.middleware_, this.tech_, e, t);
                                if (e in zr) return Vr(this.middleware_, this.tech_, e, t);
                                try {
                                    this.tech_ && this.tech_[e](t)
                                } catch (e) {
                                    throw u(e), e
                                }
                            }, !0)
                        }, a.techGet_ = function(e) {
                            if (this.tech_ && this.tech_.isReady_) {
                                if (e in Ur) return function(e, t, n) {
                                    return e.reduceRight(Kr(n), t[n]())
                                }(this.middleware_, this.tech_, e);
                                if (e in zr) return Vr(this.middleware_, this.tech_, e);
                                try {
                                    return this.tech_[e]()
                                } catch (t) {
                                    if (void 0 === this.tech_[e]) throw u("Video.js: " + e + " method not defined for " + this.techName_ + " playback technology.", t), t;
                                    if ("TypeError" === t.name) throw u("Video.js: " + e + " unavailable on " + this.techName_ + " playback technology element.", t), this.tech_.isReady_ = !1, t;
                                    throw u(t), t
                                }
                            }
                        }, a.play = function() {
                            var t = this,
                                n = this.options_.Promise || e.Promise;
                            return n ? new n(function(e) {
                                t.play_(e)
                            }) : this.play_()
                        }, a.play_ = function(e) {
                            var t = this;
                            void 0 === e && (e = Et), this.playCallbacks_.push(e);
                            var n = Boolean(!this.changingSrc_ && (this.src() || this.currentSrc()));
                            if (this.waitToPlay_ && (this.off(["ready", "loadstart"], this.waitToPlay_), this.waitToPlay_ = null), !this.isReady_ || !n) return this.waitToPlay_ = function(e) {
                                t.play_()
                            }, this.one(["ready", "loadstart"], this.waitToPlay_), void(n || !st && !Xe || this.load());
                            var r = this.techGet_("play");
                            null === r ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(r)
                        }, a.runPlayTerminatedQueue_ = function() {
                            var e = this.playTerminatedQueue_.slice(0);
                            this.playTerminatedQueue_ = [], e.forEach(function(e) {
                                e()
                            })
                        }, a.runPlayCallbacks_ = function(e) {
                            var t = this.playCallbacks_.slice(0);
                            this.playCallbacks_ = [], this.playTerminatedQueue_ = [], t.forEach(function(t) {
                                t(e)
                            })
                        }, a.pause = function() {
                            this.techCall_("pause")
                        }, a.paused = function() {
                            return !1 !== this.techGet_("paused")
                        }, a.played = function() {
                            return this.techGet_("played") || dt(0, 0)
                        }, a.scrubbing = function(e) {
                            if (void 0 === e) return this.scrubbing_;
                            this.scrubbing_ = !!e, e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
                        }, a.currentTime = function(e) {
                            return void 0 !== e ? (e < 0 && (e = 0), void this.techCall_("setCurrentTime", e)) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
                        }, a.duration = function(e) {
                            if (void 0 === e) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
                            (e = parseFloat(e)) < 0 && (e = 1 / 0), e !== this.cache_.duration && (this.cache_.duration = e, e === 1 / 0 ? (this.addClass("vjs-live"), this.options_.liveui && this.player_.liveTracker && this.addClass("vjs-liveui")) : (this.removeClass("vjs-live"), this.removeClass("vjs-liveui")), isNaN(e) || this.trigger("durationchange"))
                        }, a.remainingTime = function() {
                            return this.duration() - this.currentTime()
                        }, a.remainingTimeDisplay = function() {
                            return Math.floor(this.duration()) - Math.floor(this.currentTime())
                        }, a.buffered = function() {
                            var e = this.techGet_("buffered");
                            return e && e.length || (e = dt(0, 0)), e
                        }, a.bufferedPercent = function() {
                            return pt(this.buffered(), this.duration())
                        }, a.bufferedEnd = function() {
                            var e = this.buffered(),
                                t = this.duration(),
                                n = e.end(e.length - 1);
                            return n > t && (n = t), n
                        }, a.volume = function(e) {
                            var t;
                            return void 0 !== e ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall_("setVolume", t), void(t > 0 && this.lastVolume_(t))) : (t = parseFloat(this.techGet_("volume")), isNaN(t) ? 1 : t)
                        }, a.muted = function(e) {
                            if (void 0 === e) return this.techGet_("muted") || !1;
                            this.techCall_("setMuted", e)
                        }, a.defaultMuted = function(e) {
                            return void 0 !== e ? this.techCall_("setDefaultMuted", e) : this.techGet_("defaultMuted") || !1
                        }, a.lastVolume_ = function(e) {
                            if (void 0 === e || 0 === e) return this.cache_.lastVolume;
                            this.cache_.lastVolume = e
                        }, a.supportsFullScreen = function() {
                            return this.techGet_("supportsFullScreen") || !1
                        }, a.isFullscreen = function(e) {
                            return void 0 !== e ? (this.isFullscreen_ = !!e, void this.toggleFullscreenClass_()) : !!this.isFullscreen_
                        }, a.requestFullscreen = function(e) {
                            var n;
                            this.isFullscreen(!0), this.fsApi_.requestFullscreen ? (de(t, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), this.fsApi_.prefixed || (n = this.options_.fullscreen && this.options_.fullscreen.options || {}, void 0 !== e && (n = e)), Et(this.el_[this.fsApi_.requestFullscreen](n))) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange"))
                        }, a.exitFullscreen = function() {
                            this.isFullscreen(!1), this.fsApi_.requestFullscreen ? Et(t[this.fsApi_.exitFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange"))
                        }, a.enterFullWindow = function() {
                            this.isFullWindow = !0, this.docOrigOverflow = t.documentElement.style.overflow, de(t, "keydown", this.boundFullWindowOnEscKey_), t.documentElement.style.overflow = "hidden", O(t.body, "vjs-full-window"), this.trigger("enterFullWindow")
                        }, a.fullWindowOnEscKey = function(e) {
                            Pt.isEventKey(e, "Esc") && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
                        }, a.exitFullWindow = function() {
                            this.isFullWindow = !1, pe(t, "keydown", this.boundFullWindowOnEscKey_), t.documentElement.style.overflow = this.docOrigOverflow, D(t.body, "vjs-full-window"), this.trigger("exitFullWindow")
                        }, a.isInPictureInPicture = function(e) {
                            return void 0 !== e ? (this.isInPictureInPicture_ = !!e, void this.togglePictureInPictureClass_()) : !!this.isInPictureInPicture_
                        }, a.requestPictureInPicture = function() {
                            if ("pictureInPictureEnabled" in t) return this.techGet_("requestPictureInPicture")
                        }, a.exitPictureInPicture = function() {
                            if ("pictureInPictureEnabled" in t) return t.exitPictureInPicture()
                        }, a.handleKeyDown = function(e) {
                            var t = this.options_.userActions;
                            t && t.hotkeys && (function(e) {
                                var t = e.tagName.toLowerCase();
                                return "input" === t ? -1 === ["button", "checkbox", "hidden", "radio", "reset", "submit"].indexOf(e.type) : -1 !== ["textarea"].indexOf(t)
                            }(this.el_.ownerDocument.activeElement) || ("function" == typeof t.hotkeys ? t.hotkeys.call(this, e) : this.handleHotkeys(e)))
                        }, a.handleHotkeys = function(e) {
                            var n = this.options_.userActions ? this.options_.userActions.hotkeys : {},
                                r = n.fullscreenKey,
                                i = void 0 === r ? function(e) {
                                    return Pt.isEventKey(e, "f")
                                } : r,
                                o = n.muteKey,
                                s = void 0 === o ? function(e) {
                                    return Pt.isEventKey(e, "m")
                                } : o,
                                a = n.playPauseKey,
                                l = void 0 === a ? function(e) {
                                    return Pt.isEventKey(e, "k") || Pt.isEventKey(e, "Space")
                                } : a;
                            if (i.call(this, e)) {
                                e.preventDefault(), e.stopPropagation();
                                var c = Ve.getComponent("FullscreenToggle");
                                !1 !== t[this.fsApi_.fullscreenEnabled] && c.prototype.handleClick.call(this, e)
                            } else if (s.call(this, e)) {
                                e.preventDefault(), e.stopPropagation();
                                var u = Ve.getComponent("MuteToggle");
                                u.prototype.handleClick.call(this, e)
                            } else if (l.call(this, e)) {
                                e.preventDefault(), e.stopPropagation();
                                var h = Ve.getComponent("PlayToggle");
                                h.prototype.handleClick.call(this, e)
                            }
                        }, a.canPlayType = function(e) {
                            for (var t, n = 0, r = this.options_.techOrder; n < r.length; n++) {
                                var i = r[n],
                                    o = Fr.getTech(i);
                                if (o || (o = Ve.getComponent(i)), o) {
                                    if (o.isSupported() && (t = o.canPlayType(e))) return t
                                } else u.error('The "' + i + '" tech is undefined. Skipped browser support check for that tech.')
                            }
                            return ""
                        }, a.selectSource = function(e) {
                            var t = this,
                                n = this.options_.techOrder.map(function(e) {
                                    return [e, Fr.getTech(e)]
                                }).filter(function(e) {
                                    var t = e[0],
                                        n = e[1];
                                    return n ? n.isSupported() : (u.error('The "' + t + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                                }),
                                r = function(e, t, n) {
                                    var r;
                                    return e.some(function(e) {
                                        return t.some(function(t) {
                                            if (r = n(e, t)) return !0
                                        })
                                    }), r
                                },
                                i = function(e, n) {
                                    var r = e[0],
                                        i = e[1];
                                    if (i.canPlaySource(n, t.options_[r.toLowerCase()])) return {
                                        source: n,
                                        tech: r
                                    }
                                };
                            return (this.options_.sourceOrder ? r(e, n, function(e) {
                                return function(t, n) {
                                    return e(n, t)
                                }
                            }(i)) : r(n, e, i)) || !1
                        }, a.src = function(e) {
                            var t = this;
                            if (void 0 === e) return this.cache_.src || "";
                            var n = function e(t) {
                                if (Array.isArray(t)) {
                                    var n = [];
                                    t.forEach(function(t) {
                                        t = e(t), Array.isArray(t) ? n = n.concat(t) : m(t) && n.push(t)
                                    }), t = n
                                } else t = "string" == typeof t && t.trim() ? [Xr({
                                    src: t
                                })] : m(t) && "string" == typeof t.src && t.src && t.src.trim() ? [Xr(t)] : [];
                                return t
                            }(e);
                            n.length ? (this.changingSrc_ = !0, this.cache_.sources = n, this.updateSourceCaches_(n[0]), Hr(this, n[0], function(e, r) {
                                t.middleware_ = r, t.cache_.sources = n, t.updateSourceCaches_(e);
                                var i = t.src_(e);
                                if (i) return n.length > 1 ? t.src(n.slice(1)) : (t.changingSrc_ = !1, t.setTimeout(function() {
                                    this.error({
                                        code: 4,
                                        message: this.localize(this.options_.notSupportedMessage)
                                    })
                                }, 0), void t.triggerReady());
                                ! function(e, t) {
                                    e.forEach(function(e) {
                                        return e.setTech && e.setTech(t)
                                    })
                                }(r, t.tech_)
                            })) : this.setTimeout(function() {
                                this.error({
                                    code: 4,
                                    message: this.localize(this.options_.notSupportedMessage)
                                })
                            }, 0)
                        }, a.src_ = function(e) {
                            var t = this,
                                n = this.selectSource([e]);
                            return !n || (function(e, t) {
                                return $e(e) === $e(t)
                            }(n.tech, this.techName_) ? (this.ready(function() {
                                this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src), this.changingSrc_ = !1
                            }, !0), !1) : (this.changingSrc_ = !0, this.loadTech_(n.tech, n.source), this.tech_.ready(function() {
                                t.changingSrc_ = !1
                            }), !1))
                        }, a.load = function() {
                            this.techCall_("load")
                        }, a.reset = function() {
                            var t = this,
                                n = this.options_.Promise || e.Promise;
                            if (this.paused() || !n) this.doReset_();
                            else {
                                var r = this.play();
                                Et(r.then(function() {
                                    return t.doReset_()
                                }))
                            }
                        }, a.doReset_ = function() {
                            this.tech_ && this.tech_.clearTracks("text"), this.resetCache_(), this.poster(""), this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset"), this.resetControlBarUI_(), je(this) && this.trigger("playerreset")
                        }, a.resetControlBarUI_ = function() {
                            this.resetProgressBar_(), this.resetPlaybackRate_(), this.resetVolumeBar_()
                        }, a.resetProgressBar_ = function() {
                            this.currentTime(0);
                            var e = this.controlBar,
                                t = e.durationDisplay,
                                n = e.remainingTimeDisplay;
                            t && t.updateContent(), n && n.updateContent()
                        }, a.resetPlaybackRate_ = function() {
                            this.playbackRate(this.defaultPlaybackRate()), this.handleTechRateChange_()
                        }, a.resetVolumeBar_ = function() {
                            this.volume(1), this.trigger("volumechange")
                        }, a.currentSources = function() {
                            var e = this.currentSource(),
                                t = [];
                            return 0 !== Object.keys(e).length && t.push(e), this.cache_.sources || t
                        }, a.currentSource = function() {
                            return this.cache_.source || {}
                        }, a.currentSrc = function() {
                            return this.currentSource() && this.currentSource().src || ""
                        }, a.currentType = function() {
                            return this.currentSource() && this.currentSource().type || ""
                        }, a.preload = function(e) {
                            return void 0 !== e ? (this.techCall_("setPreload", e), void(this.options_.preload = e)) : this.techGet_("preload")
                        }, a.autoplay = function(e) {
                            if (void 0 === e) return this.options_.autoplay || !1;
                            var t;
                            "string" == typeof e && /(any|play|muted)/.test(e) ? (this.options_.autoplay = e, this.manualAutoplay_(e), t = !1) : this.options_.autoplay = !!e, t = void 0 === t ? this.options_.autoplay : t, this.tech_ && this.techCall_("setAutoplay", t)
                        }, a.playsinline = function(e) {
                            return void 0 !== e ? (this.techCall_("setPlaysinline", e), this.options_.playsinline = e, this) : this.techGet_("playsinline")
                        }, a.loop = function(e) {
                            return void 0 !== e ? (this.techCall_("setLoop", e), void(this.options_.loop = e)) : this.techGet_("loop")
                        }, a.poster = function(e) {
                            if (void 0 === e) return this.poster_;
                            e || (e = ""), e !== this.poster_ && (this.poster_ = e, this.techCall_("setPoster", e), this.isPosterFromTech_ = !1, this.trigger("posterchange"))
                        }, a.handleTechPosterChange_ = function() {
                            if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
                                var e = this.tech_.poster() || "";
                                e !== this.poster_ && (this.poster_ = e, this.isPosterFromTech_ = !0, this.trigger("posterchange"))
                            }
                        }, a.controls = function(e) {
                            if (void 0 === e) return !!this.controls_;
                            e = !!e, this.controls_ !== e && (this.controls_ = e, this.usingNativeControls() && this.techCall_("setControls", e), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))
                        }, a.usingNativeControls = function(e) {
                            if (void 0 === e) return !!this.usingNativeControls_;
                            e = !!e, this.usingNativeControls_ !== e && (this.usingNativeControls_ = e, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
                        }, a.error = function(e) {
                            if (void 0 === e) return this.error_ || null;
                            if (this.options_.suppressNotSupportedError && e && e.message && e.message === this.localize(this.options_.notSupportedMessage)) {
                                var t = function() {
                                    this.error(e)
                                };
                                return this.options_.suppressNotSupportedError = !1, this.any(["click", "touchstart"], t), void this.one("loadstart", function() {
                                    this.off(["click", "touchstart"], t)
                                })
                            }
                            if (null === e) return this.error_ = e, this.removeClass("vjs-error"), void(this.errorDisplay && this.errorDisplay.close());
                            this.error_ = new bt(e), this.addClass("vjs-error"), u.error("(CODE:" + this.error_.code + " " + bt.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), this.trigger("error")
                        }, a.reportUserActivity = function(e) {
                            this.userActivity_ = !0
                        }, a.userActive = function(e) {
                            if (void 0 === e) return this.userActive_;
                            if ((e = !!e) !== this.userActive_) {
                                if (this.userActive_ = e, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive");
                                this.tech_ && this.tech_.one("mousemove", function(e) {
                                    e.stopPropagation(), e.preventDefault()
                                }), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")
                            }
                        }, a.listenForUserActivity_ = function() {
                            var e, t, n, r = Se(this, this.reportUserActivity);
                            this.on("mousedown", function() {
                                r(), this.clearInterval(e), e = this.setInterval(r, 250)
                            }), this.on("mousemove", function(e) {
                                e.screenX === t && e.screenY === n || (t = e.screenX, n = e.screenY, r())
                            }), this.on("mouseup", function(t) {
                                r(), this.clearInterval(e)
                            });
                            var i, o = this.getChild("controlBar");
                            !o || Xe || Je || (o.on("mouseenter", function(e) {
                                this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout, this.player().options_.inactivityTimeout = 0
                            }), o.on("mouseleave", function(e) {
                                this.player().options_.inactivityTimeout = this.player().cache_.inactivityTimeout
                            })), this.on("keydown", r), this.on("keyup", r), this.setInterval(function() {
                                if (this.userActivity_) {
                                    this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(i);
                                    var e = this.options_.inactivityTimeout;
                                    e <= 0 || (i = this.setTimeout(function() {
                                        this.userActivity_ || this.userActive(!1)
                                    }, e))
                                }
                            }, 250)
                        }, a.playbackRate = function(e) {
                            if (void 0 === e) return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
                            this.techCall_("setPlaybackRate", e)
                        }, a.defaultPlaybackRate = function(e) {
                            return void 0 !== e ? this.techCall_("setDefaultPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
                        }, a.isAudio = function(e) {
                            if (void 0 === e) return !!this.isAudio_;
                            this.isAudio_ = !!e
                        }, a.addTextTrack = function(e, t, n) {
                            if (this.tech_) return this.tech_.addTextTrack(e, t, n)
                        }, a.addRemoteTextTrack = function(e, t) {
                            if (this.tech_) return this.tech_.addRemoteTextTrack(e, t)
                        }, a.removeRemoteTextTrack = function(e) {
                            void 0 === e && (e = {});
                            var t = e,
                                n = t.track;
                            if (n || (n = e), this.tech_) return this.tech_.removeRemoteTextTrack(n)
                        }, a.getVideoPlaybackQuality = function() {
                            return this.techGet_("getVideoPlaybackQuality")
                        }, a.videoWidth = function() {
                            return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
                        }, a.videoHeight = function() {
                            return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
                        }, a.language = function(e) {
                            if (void 0 === e) return this.language_;
                            this.language_ = String(e).toLowerCase()
                        }, a.languages = function() {
                            return He(o.prototype.options_.languages, this.languages_)
                        }, a.toJSON = function() {
                            var e = He(this.options_),
                                t = e.tracks;
                            e.tracks = [];
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                (r = He(r)).player = void 0, e.tracks[n] = r
                            }
                            return e
                        }, a.createModal = function(e, t) {
                            var n = this;
                            (t = t || {}).content = e || "";
                            var r = new jt(this, t);
                            return this.addChild(r), r.on("dispose", function() {
                                n.removeChild(r)
                            }), r.open(), r
                        }, a.updateCurrentBreakpoint_ = function() {
                            if (this.responsive())
                                for (var e = this.currentBreakpoint(), t = this.currentWidth(), n = 0; n < Ro.length; n++) {
                                    var r = Ro[n],
                                        i = this.breakpoints_[r];
                                    if (t <= i) {
                                        if (e === r) return;
                                        e && this.removeClass(Bo[e]), this.addClass(Bo[r]), this.breakpoint_ = r;
                                        break
                                    }
                                }
                        }, a.removeCurrentBreakpoint_ = function() {
                            var e = this.currentBreakpointClass();
                            this.breakpoint_ = "", e && this.removeClass(e)
                        }, a.breakpoints = function(e) {
                            return void 0 === e ? g(this.breakpoints_) : (this.breakpoint_ = "", this.breakpoints_ = g({}, $o, e), this.updateCurrentBreakpoint_(), g(this.breakpoints_))
                        }, a.responsive = function(e) {
                            if (void 0 === e) return this.responsive_;
                            e = Boolean(e);
                            var t = this.responsive_;
                            return e !== t ? (this.responsive_ = e, e ? (this.on("playerresize", this.updateCurrentBreakpoint_), this.updateCurrentBreakpoint_()) : (this.off("playerresize", this.updateCurrentBreakpoint_), this.removeCurrentBreakpoint_()), e) : void 0
                        }, a.currentBreakpoint = function() {
                            return this.breakpoint_
                        }, a.currentBreakpointClass = function() {
                            return Bo[this.breakpoint_] || ""
                        }, a.loadMedia = function(e, t) {
                            var n = this;
                            if (e && "object" == typeof e) {
                                this.reset(), this.cache_.media = He(e);
                                var r = this.cache_.media,
                                    i = r.artwork,
                                    o = r.poster,
                                    s = r.src,
                                    a = r.textTracks;
                                !i && o && (this.cache_.media.artwork = [{
                                    src: o,
                                    type: Gr(o)
                                }]), s && this.src(s), o && this.poster(o), Array.isArray(a) && a.forEach(function(e) {
                                    return n.addRemoteTextTrack(e, !1)
                                }), this.ready(t)
                            }
                        }, a.getMedia = function() {
                            if (!this.cache_.media) {
                                var e = this.poster(),
                                    t = this.currentSources(),
                                    n = Array.prototype.map.call(this.remoteTextTracks(), function(e) {
                                        return {
                                            kind: e.kind,
                                            label: e.label,
                                            language: e.language,
                                            src: e.src
                                        }
                                    }),
                                    r = {
                                        src: t,
                                        textTracks: n
                                    };
                                return e && (r.poster = e, r.artwork = [{
                                    src: r.poster,
                                    type: Gr(r.poster)
                                }]), r
                            }
                            return He(this.cache_.media)
                        }, o.getTagSettings = function(e) {
                            var t = {
                                    sources: [],
                                    tracks: []
                                },
                                n = L(e),
                                r = n["data-setup"];
                            if (I(e, "vjs-fill") && (n.fill = !0), I(e, "vjs-fluid") && (n.fluid = !0), null !== r) {
                                var i = kt(r || "{}"),
                                    o = i[0],
                                    s = i[1];
                                o && u.error(o), g(n, s)
                            }
                            if (g(t, n), e.hasChildNodes())
                                for (var a = e.childNodes, l = 0, c = a.length; l < c; l++) {
                                    var h = a[l],
                                        d = h.nodeName.toLowerCase();
                                    "source" === d ? t.sources.push(L(h)) : "track" === d && t.tracks.push(L(h))
                                }
                            return t
                        }, a.flexNotSupported_ = function() {
                            var e = t.createElement("i");
                            return !("flexBasis" in e.style || "webkitFlexBasis" in e.style || "mozFlexBasis" in e.style || "msFlexBasis" in e.style || "msFlexOrder" in e.style)
                        }, o
                    }(Ve);
                Mr.names.forEach(function(e) {
                    var t = Mr[e];
                    Ho.prototype[t.getterName] = function() {
                        return this.tech_ ? this.tech_[t.getterName]() : (this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName])
                    }
                }), Ho.players = {};
                var Vo = e.navigator;
                Ho.prototype.options_ = {
                    techOrder: Fr.defaultTechOrder_,
                    html5: {},
                    flash: {},
                    inactivityTimeout: 2e3,
                    playbackRates: [],
                    liveui: !1,
                    children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "liveTracker", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"],
                    language: Vo && (Vo.languages && Vo.languages[0] || Vo.userLanguage || Vo.language) || "en",
                    languages: {},
                    notSupportedMessage: "No compatible source was found for this media.",
                    fullscreen: {
                        options: {
                            navigationUI: "hide"
                        }
                    },
                    breakpoints: {},
                    responsive: !1
                }, ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function(e) {
                    Ho.prototype[e] = function() {
                        return this.techGet_(e)
                    }
                }), Lo.forEach(function(e) {
                    Ho.prototype["handleTech" + $e(e) + "_"] = function() {
                        return this.trigger(e)
                    }
                }), Ve.registerComponent("Player", Ho);
                var Uo = "plugin",
                    Wo = "activePlugins_",
                    zo = {},
                    Ko = function(e) {
                        return zo.hasOwnProperty(e)
                    },
                    qo = function(e) {
                        return Ko(e) ? zo[e] : void 0
                    },
                    Go = function(e, t) {
                        e[Wo] = e[Wo] || {}, e[Wo][t] = !0
                    },
                    Xo = function(e, t, n) {
                        var r = (n ? "before" : "") + "pluginsetup";
                        e.trigger(r, t), e.trigger(r + ":" + t.name, t)
                    },
                    Yo = function(e, t) {
                        return t.prototype.name = e,
                            function() {
                                Xo(this, {
                                    name: e,
                                    plugin: t,
                                    instance: null
                                }, !0);
                                for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                var s = o(t, [this].concat(r));
                                return this[e] = function() {
                                    return s
                                }, Xo(this, s.getEventHash()), s
                            }
                    },
                    Jo = function() {
                        function e(t) {
                            if (this.constructor === e) throw new Error("Plugin must be sub-classed; not directly instantiated.");
                            this.player = t, Fe(this), delete this.trigger, Be(this, this.constructor.defaultState), Go(t, this.name), this.dispose = Se(this, this.dispose), t.on("dispose", this.dispose)
                        }
                        var t = e.prototype;
                        return t.version = function() {
                            return this.constructor.VERSION
                        }, t.getEventHash = function(e) {
                            return void 0 === e && (e = {}), e.name = this.name, e.plugin = this.constructor, e.instance = this, e
                        }, t.trigger = function(e, t) {
                            return void 0 === t && (t = {}), fe(this.eventBusEl_, e, this.getEventHash(t))
                        }, t.handleStateChanged = function(e) {}, t.dispose = function() {
                            var e = this.name,
                                t = this.player;
                            this.trigger("dispose"), this.off(), t.off("dispose", this.dispose), t[Wo][e] = !1, this.player = this.state = null, t[e] = Yo(e, zo[e])
                        }, e.isBasic = function(t) {
                            var n = "string" == typeof t ? qo(t) : t;
                            return "function" == typeof n && !e.prototype.isPrototypeOf(n.prototype)
                        }, e.registerPlugin = function(t, n) {
                            if ("string" != typeof t) throw new Error('Illegal plugin name, "' + t + '", must be a string, was ' + typeof t + ".");
                            if (Ko(t)) u.warn('A plugin named "' + t + '" already exists. You may want to avoid re-registering plugins!');
                            else if (Ho.prototype.hasOwnProperty(t)) throw new Error('Illegal plugin name, "' + t + '", cannot share a name with an existing player method!');
                            if ("function" != typeof n) throw new Error('Illegal plugin for "' + t + '", must be a function, was ' + typeof n + ".");
                            return zo[t] = n, t !== Uo && (e.isBasic(n) ? Ho.prototype[t] = function(e, t) {
                                var n = function() {
                                    Xo(this, {
                                        name: e,
                                        plugin: t,
                                        instance: null
                                    }, !0);
                                    var n = t.apply(this, arguments);
                                    return Go(this, e), Xo(this, {
                                        name: e,
                                        plugin: t,
                                        instance: n
                                    }), n
                                };
                                return Object.keys(t).forEach(function(e) {
                                    n[e] = t[e]
                                }), n
                            }(t, n) : Ho.prototype[t] = Yo(t, n)), n
                        }, e.deregisterPlugin = function(e) {
                            if (e === Uo) throw new Error("Cannot de-register base plugin.");
                            Ko(e) && (delete zo[e], delete Ho.prototype[e])
                        }, e.getPlugins = function(e) {
                            var t;
                            return void 0 === e && (e = Object.keys(zo)), e.forEach(function(e) {
                                var n = qo(e);
                                n && ((t = t || {})[e] = n)
                            }), t
                        }, e.getPluginVersion = function(e) {
                            var t = qo(e);
                            return t && t.VERSION || ""
                        }, e
                    }();
                Jo.getPlugin = qo, Jo.BASE_PLUGIN_NAME = Uo, Jo.registerPlugin(Uo, Jo), Ho.prototype.usingPlugin = function(e) {
                    return !!this[Wo] && !0 === this[Wo][e]
                }, Ho.prototype.hasPlugin = function(e) {
                    return !!Ko(e)
                };
                var Qo = function(e) {
                    return 0 === e.indexOf("#") ? e.slice(1) : e
                };

                function Zo(e, t, n) {
                    var r = Zo.getPlayer(e);
                    if (r) return t && u.warn('Player "' + e + '" is already initialised. Options will not be applied.'), n && r.ready(n), r;
                    var i = "string" == typeof e ? J("#" + Qo(e)) : e;
                    if (!S(i)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
                    i.ownerDocument.defaultView && i.ownerDocument.body.contains(i) || u.warn("The element supplied is not included in the DOM"), t = t || {}, Zo.hooks("beforesetup").forEach(function(e) {
                        var n = e(i, He(t));
                        m(n) && !Array.isArray(n) ? t = He(t, n) : u.error("please return an object in beforesetup hooks")
                    });
                    var o = Ve.getComponent("Player");
                    return r = new o(i, t, n), Zo.hooks("setup").forEach(function(e) {
                        return e(r)
                    }), r
                }
                if (Zo.hooks_ = {}, Zo.hooks = function(e, t) {
                        return Zo.hooks_[e] = Zo.hooks_[e] || [], t && (Zo.hooks_[e] = Zo.hooks_[e].concat(t)), Zo.hooks_[e]
                    }, Zo.hook = function(e, t) {
                        Zo.hooks(e, t)
                    }, Zo.hookOnce = function(e, t) {
                        Zo.hooks(e, [].concat(t).map(function(t) {
                            return function n() {
                                return Zo.removeHook(e, n), t.apply(void 0, arguments)
                            }
                        }))
                    }, Zo.removeHook = function(e, t) {
                        var n = Zo.hooks(e).indexOf(t);
                        return !(n <= -1 || (Zo.hooks_[e] = Zo.hooks_[e].slice(), Zo.hooks_[e].splice(n, 1), 0))
                    }, !0 !== e.VIDEOJS_NO_DYNAMIC_STYLE && E()) {
                    var es = J(".vjs-styles-defaults");
                    if (!es) {
                        es = Ce("vjs-styles-defaults");
                        var ts = J("head");
                        ts && ts.insertBefore(es, ts.firstChild), Ee(es, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
                    }
                }
                return Te(1, Zo), Zo.VERSION = n, Zo.options = Ho.prototype.options_, Zo.getPlayers = function() {
                    return Ho.players
                }, Zo.getPlayer = function(e) {
                    var t, n = Ho.players;
                    if ("string" == typeof e) {
                        var r = Qo(e),
                            i = n[r];
                        if (i) return i;
                        t = J("#" + r)
                    } else t = e;
                    if (S(t)) {
                        var o = t,
                            s = o.player,
                            a = o.playerId;
                        if (s || n[a]) return s || n[a]
                    }
                }, Zo.getAllPlayers = function() {
                    return Object.keys(Ho.players).map(function(e) {
                        return Ho.players[e]
                    }).filter(Boolean)
                }, Zo.players = Ho.players, Zo.getComponent = Ve.getComponent, Zo.registerComponent = function(e, t) {
                    Fr.isTech(t) && u.warn("The " + e + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), Ve.registerComponent.call(Ve, e, t)
                }, Zo.getTech = Fr.getTech, Zo.registerTech = Fr.registerTech, Zo.use = function(e, t) {
                    Rr[e] = Rr[e] || [], Rr[e].push(t)
                }, Object.defineProperty(Zo, "middleware", {
                    value: {},
                    writeable: !1,
                    enumerable: !0
                }), Object.defineProperty(Zo.middleware, "TERMINATOR", {
                    value: $r,
                    writeable: !1,
                    enumerable: !0
                }), Zo.browser = ct, Zo.TOUCH_ENABLED = lt, Zo.extend = function(e, t) {
                    void 0 === t && (t = {});
                    var n = function() {
                            e.apply(this, arguments)
                        },
                        r = {};
                    for (var i in "object" == typeof t ? (t.constructor !== Object.prototype.constructor && (n = t.constructor), r = t) : "function" == typeof t && (n = t),
                            function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && (e.super_ = t)
                            }(n, e), r) r.hasOwnProperty(i) && (n.prototype[i] = r[i]);
                    return n
                }, Zo.mergeOptions = He, Zo.bind = Se, Zo.registerPlugin = Jo.registerPlugin, Zo.deregisterPlugin = Jo.deregisterPlugin, Zo.plugin = function(e, t) {
                    return u.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), Jo.registerPlugin(e, t)
                }, Zo.getPlugins = Jo.getPlugins, Zo.getPlugin = Jo.getPlugin, Zo.getPluginVersion = Jo.getPluginVersion, Zo.addLanguage = function(e, t) {
                    var n;
                    return e = ("" + e).toLowerCase(), Zo.options.languages = He(Zo.options.languages, ((n = {})[e] = t, n)), Zo.options.languages[e]
                }, Zo.log = u, Zo.createLogger = h, Zo.createTimeRange = Zo.createTimeRanges = dt, Zo.formatTime = hi, Zo.setFormatTime = function(e) {
                    ui = e
                }, Zo.resetFormatTime = function() {
                    ui = ci
                }, Zo.parseUrl = zt, Zo.isCrossOrigin = Gt, Zo.EventTarget = xe, Zo.on = de, Zo.one = ve, Zo.off = pe, Zo.trigger = fe, Zo.xhr = Tr, Zo.TextTrack = Pr, Zo.AudioTrack = xr, Zo.VideoTrack = jr, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function(e) {
                    Zo[e] = function() {
                        return u.warn("videojs." + e + "() is deprecated; use videojs.dom." + e + "() instead"), Z[e].apply(null, arguments)
                    }
                }), Zo.computedStyle = b, Zo.dom = Z, Zo.url = Xt, Zo
            }(n("be09"), n("ef34"))
        },
        ef34: function(e, t, n) {
            (function(t) {
                var r, i = void 0 !== t ? t : "undefined" != typeof window ? window : {},
                    o = n(1);
                "undefined" != typeof document ? r = document : (r = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (r = i["__GLOBAL_DOCUMENT_CACHE@4"] = o), e.exports = r
            }).call(this, n("c8ba"))
        }
    }
]);