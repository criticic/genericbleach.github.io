(window.webpackJsonp = window.webpackJsonp || []).push([
    ["chunk-2d0c5aba"], {
        "3fa2": function(t, e, n) {
            "use strict";
            n.r(e);
            var o = (n("8e6e"), n("ac6a"), n("456d"), n("96cf"), n("3b8d")),
                r = n("bd86"),
                c = n("9301"),
                i = n("2f62"),
                s = n("5a50");

            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), n.push.apply(n, o)
                }
                return n
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(n, !0).forEach(function(e) {
                        Object(r.a)(t, e, n[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(n).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    })
                }
                return t
            }
            var l = {
                    components: {
                        NnnButton: c.a
                    },
                    created: function() {
                        this.headerButtons = [{
                            key: s.j,
                            title: "DASHBOARD",
                            handleClick: this.goToDashboard
                        }, {
                            key: s.t,
                            title: "GLOBAL CONSCIOUSNESS",
                            handleClick: this.goToGlobalConciousness
                        }, {
                            key: s.Y,
                            title: "VIDEO SUBMISSIONS",
                            handleClick: this.goToVideos
                        }, {
                            key: s.B,
                            title: "LOGOUT",
                            handleClick: this.logout
                        }]
                    },
                    computed: a({}, Object(i.c)(["content"])),
                    methods: a({}, Object(i.b)({
                        setAccountContent: "setAccountContent",
                        logoutUser: "logout"
                    }), {
                        goToDashboard: function() {
                            this.setAccountContent({
                                content: s.j
                            })
                        },
                        goToGlobalConciousness: function() {
                            this.setAccountContent({
                                content: s.t
                            })
                        },
                        goToVideos: function() {
                            this.setAccountContent({
                                content: s.Y
                            })
                        },
                        logout: function() {
                            var t = Object(o.a)(regeneratorRuntime.mark(function t() {
                                return regeneratorRuntime.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, this.logoutUser();
                                        case 2:
                                            this.$router.push({
                                                name: s.w
                                            });
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }, t, this)
                            }));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }()
                    })
                },
                f = n("2877"),
                h = Object(f.a)(l, function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [t._t("left"), n("div", {
                        staticClass: "u-display-flex u-flex-wrap"
                    }, t._l(t.headerButtons, function(e) {
                        return n("nnn-button", {
                            key: e.key,
                            class: ["c-menu-item", {
                                "is-active": t.content === e.key
                            }],
                            attrs: {
                                "font-size": "22",
                                "text-writing-animation": !0
                            },
                            on: {
                                click: e.handleClick
                            }
                        }, [t._v(t._s(e.title))])
                    }), 1)], 2)
                }, [], !1, null, null, null);
            e.default = h.exports
        }
    }
]);