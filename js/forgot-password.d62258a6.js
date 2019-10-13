(window.webpackJsonp = window.webpackJsonp || []).push([
    ["forgot-password"], {
        "5d75": function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = (0, r("78ef").regex)("email", /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/);
            t.default = a
        },
        ab68: function(e, t, r) {
            "use strict";
            r.r(t);
            var a = (r("8e6e"), r("ac6a"), r("456d"), r("96cf"), r("3b8d")),
                n = r("bd86"),
                i = (r("7f7f"), r("2f62")),
                s = r("1dce"),
                o = r("5d75"),
                c = r.n(o),
                u = r("d4f4"),
                l = r.n(u),
                f = r("5a50"),
                m = r("e081"),
                d = r("e946"),
                p = r("9301"),
                h = r("96ce");

            function v(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, a)
                }
                return r
            }
            var b = {
                    name: "ForgotPasswordPage",
                    components: {
                        NnnInput: d.a,
                        NnnButton: p.a,
                        NnnBaseLayout: h.a
                    },
                    mixins: [s.validationMixin],
                    directives: Object(n.a)({}, m.a.name, m.a),
                    data: function() {
                        return {
                            email: ""
                        }
                    },
                    validations: {
                        email: {
                            required: l.a,
                            email: c.a
                        }
                    },
                    computed: {
                        emailError: function() {
                            return this.$v.email.$anyError && !this.$v.email.required ? "This field is required" : this.$v.email.$anyError ? "Incorrect value" : null
                        }
                    },
                    methods: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? v(r, !0).forEach(function(t) {
                                Object(n.a)(e, t, r[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(r).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                        }
                        return e
                    }({}, Object(i.b)(["sendForgotPasswordRequest"]), {
                        handleEmailChange: function(e) {
                            this.email = e, this.$v.email.$touch()
                        },
                        submitForgotPassword: function() {
                            var e = Object(a.a)(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this.$v.email.$anyError) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, this.sendForgotPasswordRequest({
                                                email: this.email
                                            });
                                        case 4:
                                            this.$router.push({
                                                name: f.h
                                            });
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    })
                },
                O = r("2877"),
                g = Object(O.a)(b, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("nnn-base-layout", {
                        staticClass: "c-responsive-padding"
                    }, [r("form", {
                        staticClass: "c-form u-width-31",
                        attrs: {
                            slot: "main"
                        },
                        on: {
                            submit: function(t) {
                                return t.preventDefault(), e.submitForgotPassword(t)
                            }
                        },
                        slot: "main"
                    }, [r("div", {
                        staticClass: "c-form-header c-form-header--lighter"
                    }, [r("h2", {
                        staticClass: "c-form-header__title"
                    }, [e._v("FORGOT PASSWORD?")]), r("p", {
                        staticClass: "c-form-header__desc c-h6"
                    }, [e._v("\n        ENTER YOUR EMAIL ADDRESS TO BE IDENTIFIED\n      ")])]), r("div", {
                        staticClass: "c-form-group"
                    }, [r("nnn-input", {
                        directives: [{
                            name: "focus",
                            rawName: "v-focus"
                        }],
                        attrs: {
                            type: "text",
                            name: "email",
                            placeholder: "Email",
                            autocomplete: "email",
                            "error-message": e.emailError,
                            value: e.email
                        },
                        on: {
                            change: e.handleEmailChange
                        }
                    })], 1), r("div", {
                        staticClass: "c-form__footer u-p-4"
                    }, [r("nnn-button", {
                        staticClass: "u-mh-auto",
                        attrs: {
                            type: "submit",
                            "font-size": "lg",
                            color: "primary",
                            disabled: !this.email || e.$v.email.$anyError
                        }
                    }, [e._v("\n        SUBMIT\n      ")])], 1)])])
                }, [], !1, null, null, null);
            t.default = g.exports
        },
        e081: function(e, t, r) {
            "use strict";
            r.d(t, "a", function() {
                return n
            }), r("7f7f");
            var a = r("16e1"),
                n = {
                    name: "focus",
                    inserted: function(e, t) {
                        var r = t.value;
                        if (!Object(a.d)()) {
                            var n = e ? e.querySelector("input") : null;
                            setTimeout(function() {
                                n && n.focus()
                            }, r || 10)
                        }
                    }
                }
        }
    }
]);