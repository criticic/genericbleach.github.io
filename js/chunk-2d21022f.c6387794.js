(window.webpackJsonp = window.webpackJsonp || []).push([
    ["chunk-2d21022f"], {
        b737: function(n, t, o) {
            "use strict";
            o.r(t);
            var e = {
                    components: {
                        NnnButton: o("9301").a
                    },
                    methods: {
                        goToLoginPage: function() {
                            this.$emit("go-to-login-page")
                        }
                    }
                },
                i = o("2877"),
                a = Object(i.a)(e, function() {
                    var n = this,
                        t = n.$createElement,
                        o = n._self._c || t;
                    return o("div", {
                        staticClass: "c-login-header"
                    }, [n._t("left"), o("nnn-button", {
                        attrs: {
                            "font-size": "22",
                            "text-writing-animation": !0
                        },
                        on: {
                            click: n.goToLoginPage
                        }
                    }, [n._v("\n    LOGIN\n  ")])], 2)
                }, [], !1, null, null, null);
            t.default = a.exports
        }
    }
]);