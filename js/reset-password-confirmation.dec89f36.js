(window.webpackJsonp=window.webpackJsonp||[]).push([["reset-password-confirmation"], {
    "63d7":function(t, e, s) {
        "use strict";
        s.r(e);
        var a=s("9301"), n=s("96ce"), o=s("5a50"), i= {
            components: {
                NnnButton: a.a, NnnBaseLayout: n.a
            }
            , methods: {
                goBackToLogin:function() {
                    this.$router.push( {
                        name: o.y
                    }
                    )
                }
            }
        }
        , r=s("2877"), c=Object(r.a)(i, function() {
            var t=this, e=t.$createElement, s=t._self._c||e;
            return s("nnn-base-layout", [s("form", {
                staticClass:"c-form u-width-31", attrs: {
                    slot: "main"
                }
                , slot:"main"
            }
            , [s("div", {
                staticClass: "c-form-header c-form-header--lighter"
            }
            , [s("h2", {
                staticClass: "c-form-header__title"
            }
            , [t._v("SUCCESS")]), s("p", {
                staticClass: "c-form-header__desc c-h6"
            }
            , [t._v("YOUR PASSWORD HAS BEEN RESET.")])]), s("div", {
                staticClass: "c-form__footer u-p-4"
            }
            , [s("nnn-button", {
                staticClass:"u-mh-auto", attrs: {
                    animate: !0, "font-size": "lg", color: "primary"
                }
                , on: {
                    click: t.goBackToLogin
                }
            }
            , [t._v("\n        BACK TO LOGIN\n      ")])], 1)])])
        }
        , [], !1, null, null, null);
        e.default=c.exports
    }
    , "96ce":function(t, e, s) {
        "use strict";
        var a= {
            name:"NnnBaseLayout", props: {
                contentStretched: {
                    type: Boolean, required: !1, default: !1
                }
                , isMembership: {
                    type: Boolean, required: !1, default: !1
                }
            }
        }
        , n=s("2877"), o=Object(n.a)(a, function() {
            var t=this, e=t.$createElement, s=t._self._c||e;
            return s("div", {
                class:["l-base", {
                    "l-base--membership": t.isMembership
                }
                ]
            }
            , [s("div", {
                staticClass: "l-base__main"
            }
            , [s("div", {
                staticClass: "l-base__main-ctn"
            }
            , [t._t("main")], 2)]), t.$slots.bottom?s("div", {
                staticClass: "l-base__bottom"
            }
            , [t._t("bottom")], 2):t._e()])
        }
        , [], !1, null, null, null);
        e.a=o.exports
    }
}

]);