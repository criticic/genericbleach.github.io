(window.webpackJsonp = window.webpackJsonp || []).push([
    ["chunk-2d0b2914"], {
        2550: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = (r("8e6e"), r("ac6a"), r("456d"), r("bd86")),
                c = r("2f62"),
                o = r("2885"),
                i = r("5a50");

            function s(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var p = {
                    components: {
                        NnnMusicIcon: o.a
                    },
                    computed: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? s(r, !0).forEach(function(t) {
                                Object(n.a)(e, t, r[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(r).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                        }
                        return e
                    }({}, Object(c.c)({
                        membershipStep: "currentMembershipStep"
                    }), {
                        subtitle: function() {
                            var e = Object.keys(i.F)[this.membershipStep];
                            return i.F[e]
                        }
                    })
                },
                u = r("2877"),
                a = Object(u.a)(p, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", [r("div", {
                        staticClass: "c-mobile-header"
                    }, [r("h2", [e._v("APPLICATION")]), r("h6", {
                        staticClass: "u-opacity-50"
                    }, [e._v(e._s(e.subtitle))])]), r("nnn-music-icon")], 1)
                }, [], !1, null, null, null);
            t.default = a.exports
        }
    }
]);