(window.webpackJsonp = window.webpackJsonp || []).push([
    ["reset-password"], {
        "1cba": function(r, t, e) {
            var n = e("4796"),
                a = e("9aff"),
                s = e("6428");
            r.exports = function(r) {
                return function(t, e, o) {
                    return o && "number" != typeof o && a(t, e, o) && (e = o = void 0), t = s(t), void 0 === e ? (e = t, t = 0) : e = s(e), o = void 0 === o ? t < e ? 1 : -1 : s(o), n(t, e, o, r)
                }
            }
        },
        "2a12": function(r, t, e) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = e("78ef");
            t.default = function(r) {
                return (0, n.withParams)({
                    type: "maxLength",
                    max: r
                }, function(t) {
                    return !(0, n.req)(t) || (0, n.len)(t) <= r
                })
            }
        },
        4796: function(r, t) {
            var e = Math.ceil,
                n = Math.max;
            r.exports = function(r, t, a, s) {
                for (var o = -1, i = n(e((t - r) / (a || 1)), 0), u = Array(i); i--;) u[s ? i : ++o] = r, r += a;
                return u
            }
        },
        "5a3a": function(r, t, e) {
            var n = e("1cba")();
            r.exports = n
        },
        "5db3": function(r, t, e) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = e("78ef");
            t.default = function(r) {
                return (0, n.withParams)({
                    type: "minLength",
                    min: r
                }, function(t) {
                    return !(0, n.req)(t) || (0, n.len)(t) >= r
                })
            }
        },
        "9b01": function(r, t, e) {
            "use strict";
            e.r(t);
            var n = (e("8e6e"), e("ac6a"), e("456d"), e("96cf"), e("3b8d")),
                a = e("bd86"),
                s = e("2f62"),
                o = e("1dce"),
                i = e("d4f4"),
                u = e.n(i),
                c = e("5db3"),
                f = e.n(c),
                d = e("2a12"),
                l = e.n(d),
                p = e("b6cb"),
                m = e.n(p),
                h = e("a57d"),
                b = e("e946"),
                w = e("9301"),
                v = e("96ce"),
                P = e("5a50");

            function g(r, t) {
                var e = Object.keys(r);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(r);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })), e.push.apply(e, n)
                }
                return e
            }
            var O = {
                    components: {
                        NnnInput: b.a,
                        NnnButton: w.a,
                        NnnBaseLayout: v.a
                    },
                    mixins: [o.validationMixin],
                    data: function() {
                        return {
                            password: "",
                            confirmPassword: ""
                        }
                    },
                    computed: {
                        passwordError: function() {
                            return this.$v.password.$anyError ? "Password is required and must contain 8 - 50 characters, at least 1 letter and 1 number!" : null
                        },
                        confirmPasswordError: function() {
                            return this.$v.confirmPassword.$anyError ? "This field must be same as password" : null
                        }
                    },
                    validations: {
                        password: {
                            required: u.a,
                            minLength: f()(8),
                            maxLength: l()(50),
                            strongPasswordValidator: h.b
                        },
                        confirmPassword: {
                            sameAsPassword: m()("password")
                        }
                    },
                    methods: function(r) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? g(e, !0).forEach(function(t) {
                                Object(a.a)(r, t, e[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : g(e).forEach(function(t) {
                                Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t))
                            })
                        }
                        return r
                    }({}, Object(s.b)(["resetPassword"]), {
                        submitForm: function() {
                            var r = Object(n.a)(regeneratorRuntime.mark(function r() {
                                return regeneratorRuntime.wrap(function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (!this.passwordError && !this.confirmPasswordError) {
                                                r.next = 2;
                                                break
                                            }
                                            return r.abrupt("return");
                                        case 2:
                                            return r.next = 4, this.resetPassword({
                                                password: this.password
                                            });
                                        case 4:
                                            this.$router.push({
                                                name: P.S
                                            });
                                        case 5:
                                        case "end":
                                            return r.stop()
                                    }
                                }, r, this)
                            }));
                            return function() {
                                return r.apply(this, arguments)
                            }
                        }(),
                        handleChangeField: function(r, t) {
                            this[r] = t, this.$v[r].$touch()
                        }
                    })
                },
                y = e("2877"),
                E = Object(y.a)(O, function() {
                    var r = this,
                        t = r.$createElement,
                        e = r._self._c || t;
                    return e("nnn-base-layout", {
                        staticClass: "c-responsive-padding"
                    }, [e("form", {
                        staticClass: "c-form u-width-31",
                        attrs: {
                            slot: "main"
                        },
                        on: {
                            submit: function(t) {
                                return t.preventDefault(), r.submitForm(t)
                            }
                        },
                        slot: "main"
                    }, [e("div", {
                        staticClass: "c-form-header c-form-header--lighter"
                    }, [e("h2", {
                        staticClass: "c-form-header__title"
                    }, [r._v("RESET PASSWORD")]), e("p", {
                        staticClass: "c-form-header__desc c-h6"
                    }, [r._v("\n        ENTER A NEW PASSWORD FOR YOUR ACCOUNT.\n      ")])]), e("div", {
                        staticClass: "c-form-group"
                    }, [e("nnn-input", {
                        attrs: {
                            type: "password",
                            placeholder: "NEW PASSWORD",
                            "error-message": r.passwordError,
                            value: r.password,
                            "case-sensitive": ""
                        },
                        on: {
                            change: function(t) {
                                return r.handleChangeField("password", t)
                            }
                        }
                    })], 1), e("div", {
                        staticClass: "c-form-group"
                    }, [e("nnn-input", {
                        attrs: {
                            type: "password",
                            placeholder: "RE-TYPE PASSWORD",
                            "error-message": r.confirmPasswordError,
                            value: r.confirmPassword,
                            "case-sensitive": ""
                        },
                        on: {
                            change: function(t) {
                                return r.handleChangeField("confirmPassword", t)
                            }
                        }
                    })], 1), e("div", {
                        staticClass: "c-form__footer u-p-4"
                    }, [e("nnn-button", {
                        staticClass: "u-mh-auto",
                        attrs: {
                            animate: !0,
                            "font-size": "lg",
                            color: "primary"
                        }
                    }, [r._v("RESET")])], 1)])])
                }, [], !1, null, null, null);
            t.default = E.exports
        },
        a57d: function(r, t, e) {
            "use strict";
            e.d(t, "b", function() {
                return a
            }), e.d(t, "a", function() {
                return s
            });
            var n = e("ba47"),
                a = function(r) {
                    return /^(?=.*[a-z])(?=.*[0-9]).*$/g.test(r)
                },
                s = function(r) {
                    var t = new Date,
                        e = new Date(r);
                    return Math.floor(Object(n.a)(t.getTime() - e.getTime())) >= 18
                }
        },
        b6cb: function(r, t, e) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = e("78ef");
            t.default = function(r) {
                return (0, n.withParams)({
                    type: "sameAs",
                    eq: r
                }, function(t, e) {
                    return t === (0, n.ref)(r, this, e)
                })
            }
        },
        ba47: function(r, t, e) {
            "use strict";
            e.d(t, "b", function() {
                return s
            }), e.d(t, "a", function() {
                return o
            });
            var n = e("5a3a"),
                a = e.n(n);

            function s() {
                var r = new Date;
                return a()(1900, r.getFullYear() + 1)
            }

            function o(r) {
                return Math.floor(r / 1e3 / 60 / 60 / 24 / 365)
            }
        }
    }
]);