(window.webpackJsonp = window.webpackJsonp || []).push([
    ["chunk-2d0d4066"], {
        "5eee": function(n, e, i) {
            "use strict";
            i.r(e);
            var t = i("2885"),
                o = i("9301"),
                c = {
                    components: {
                        NnnMusicIcon: t.a,
                        NnnButton: o.a
                    }
                },
                a = i("2877"),
                s = Object(a.a)(c, function() {
                    var n = this,
                        e = n.$createElement,
                        i = n._self._c || e;
                    return i("div", {
                        staticClass: "c-header__action"
                    }, [i("nnn-button", {
                        directives: [{
                            name: "audio",
                            rawName: "v-audio.click",
                            value: "login",
                            expression: "'login'",
                            modifiers: {
                                click: !0
                            }
                        }],
                        attrs: {
                            "font-size": "22"
                        },
                        on: {
                            click: function(e) {
                                return n.$emit("go-to-login-page")
                            }
                        }
                    }, [n._v("\n    LOGIN\n  ")]), i("nnn-music-icon")], 1)
                }, [], !1, null, null, null);
            e.default = s.exports
        }
    }
]);