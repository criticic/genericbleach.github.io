(window.webpackJsonp = window.webpackJsonp || []).push([
    ["membership-confirmation"], {
        "0c3c": function(e, t, n) {
            "use strict";
            n.r(t);
            var s = (n("8e6e"), n("ac6a"), n("456d"), n("bd86")),
                r = n("2f62"),
                a = n("a080"),
                o = n("9301"),
                c = n("96ce"),
                i = n("5a50");

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, s)
                }
                return n
            }
            var u = {
                    components: {
                        NnnButton: o.a,
                        NnnBaseLayout: c.a
                    },
                    name: "MembershipConfirmationPage",
                    methods: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? l(n, !0).forEach(function(t) {
                                Object(s.a)(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, Object(r.b)({
                        setPreset: "setPreset"
                    }), {
                        goBack: function() {
                            this.$router.push({
                                name: a.d
                            })
                        }
                    }),
                    created: function() {
                        this.setPreset({
                            name: i.g
                        })
                    }
                },
                m = n("2877"),
                f = Object(m.a)(u, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("nnn-base-layout", {
                        staticClass: "c-responsive-padding"
                    }, [n("form", {
                        staticClass: "c-form c-form--submission-confirmation",
                        attrs: {
                            slot: "main"
                        },
                        slot: "main"
                    }, [n("div", {
                        staticClass: "c-form-header c-form-header--lighter c-form-header--submission-confirmation"
                    }, [n("h2", {
                        staticClass: "c-form-header__title"
                    }, [e._v("\n        THANK YOU FOR TAKING THE TIME TO FILL SUBMIT AN APPLICATION.\n      ")]), n("p", {
                        staticClass: "c-form-header__desc c-h6"
                    }, [e._v("\n        IF THE PROKTORS OF THE NEW NOOLOGY NETWORK BELIEVE YOU ARE QUALIFIED\n        FOR FURTHER CONSIDERATION AS A TRIAL MEMBER, YOU WILL BE CONTACTED\n        SOMETIME IN THE FUTURE.\n      ")])]), n("div", {
                        staticClass: "c-form__footer u-p-4"
                    }, [n("nnn-button", {
                        staticClass: "u-mh-auto",
                        attrs: {
                            "font-size": "lg",
                            color: "primary",
                            animate: !0
                        },
                        on: {
                            click: e.goBack
                        }
                    }, [e._v("\n        GO BACK\n      ")])], 1)])])
                }, [], !1, null, null, null);
            t.default = f.exports
        },
        "96ce": function(e, t, n) {
            "use strict";
            var s = {
                    name: "NnnBaseLayout",
                    props: {
                        contentStretched: {
                            type: Boolean,
                            required: !1,
                            default: !1
                        },
                        isMembership: {
                            type: Boolean,
                            required: !1,
                            default: !1
                        }
                    }
                },
                r = n("2877"),
                a = Object(r.a)(s, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        class: ["l-base", {
                            "l-base--membership": e.isMembership
                        }]
                    }, [n("div", {
                        staticClass: "l-base__main"
                    }, [n("div", {
                        staticClass: "l-base__main-ctn"
                    }, [e._t("main")], 2)]), e.$slots.bottom ? n("div", {
                        staticClass: "l-base__bottom"
                    }, [e._t("bottom")], 2) : e._e()])
                }, [], !1, null, null, null);
            t.a = a.exports
        }
    }
]);