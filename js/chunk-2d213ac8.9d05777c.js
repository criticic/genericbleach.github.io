(window.webpackJsonp = window.webpackJsonp || []).push([
    ["chunk-2d213ac8"], {
        ae4b: function(n, t, e) {
            "use strict";
            e.r(t);
            var a = e("2885"),
                s = e("ee97"),
                i = {
                    components: {
                        NnnButton: e("9301").a,
                        NnnTransition: s.a,
                        NnnMusicIcon: a.a
                    }
                },
                o = e("2877"),
                r = Object(o.a)(i, function() {
                    var n = this,
                        t = n.$createElement,
                        e = n._self._c || t;
                    return e("div", {
                        staticClass: "c-header__action"
                    }, [e("nnn-transition", {
                        attrs: {
                            name: "vt-fade"
                        }
                    }, [e("div", {
                        staticClass: "c-membership-header c-h5"
                    }, [e("span", {
                        staticClass: "u-color-gray-02-while-not-danger u-transition-color-speed-fast"
                    }, [n._v("DON'T HAVE AN ACCOUNT?\n      ")]), e("NnnButton", {
                        attrs: {
                            color: "primary",
                            "font-size": "inherit"
                        },
                        on: {
                            click: function(t) {
                                return n.$emit("go-to-membership-page")
                            }
                        }
                    }, [n._v("\n        Apply here\n      ")])], 1)]), e("nnn-music-icon", {
                        attrs: {
                            "display-absolute": ""
                        }
                    })], 1)
                }, [], !1, null, null, null);
            t.default = r.exports
        }
    }
]);