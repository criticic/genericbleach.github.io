(window.webpackJsonp = window.webpackJsonp || []).push([
    ["chunk-2d0a2d66"], {
        "002b": function(t, n, e) {
            "use strict";
            e.r(n);
            var i = {
                    components: {
                        NnnButton: e("9301").a
                    },
                    methods: {
                        goToMembershipRegistration: function() {
                            this.$emit("go-to-registration-page")
                        }
                    }
                },
                o = e("2877"),
                s = Object(o.a)(i, function() {
                    var t = this,
                        n = t.$createElement,
                        e = t._self._c || n;
                    return e("div", [t._t("default", [e("div", {
                        staticClass: "c-membership-header c-h5"
                    }, [e("span", {
                        staticClass: "u-color-gray-02-while-not-danger u-transition-color-speed-fast"
                    }, [t._v("DON'T HAVE AN ACCOUNT?\n      ")]), e("NnnButton", {
                        attrs: {
                            color: "primary",
                            "font-size": "inherit",
                            "text-writing-animation": !0
                        },
                        on: {
                            click: t.goToMembershipRegistration
                        }
                    }, [t._v("\n        Apply here\n      ")])], 1)])], 2)
                }, [], !1, null, null, null);
            n.default = s.exports
        }
    }
]);