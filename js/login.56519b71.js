(window.webpackJsonp=window.webpackJsonp||[]).push([["login"], {
    "1d0b":function(t, r, e) {
        "use strict";
        e.r(r);
        var s=(e("8e6e"), e("ac6a"), e("456d"), e("96cf"), e("3b8d")), n=e("bd86"), o=(e("7f7f"), e("2f62")), a=e("1dce"), i=e("d4f4"), u=e.n(i), c=e("5a50"), l=e("af63"), d=e("e081"), m=e("96ce"), p=e("e946"), f=e("9301"), b= {
            name:"NnnWrapperLoadingButton", props: {
                submitFormInProgress: {
                    type: Boolean, required: !0
                }
            }
        }
        , h=e("2877"), v=Object(h.a)(b, function() {
            var t=this, r=t.$createElement, e=t._self._c||r;
            return e("div", {
                staticClass:"c-loader-button", class: {
                    "is-loading": t.submitFormInProgress
                }
            }
            , [e("div", {
                staticClass: "c-loader-button__primary"
            }
            , [t._t("default")], 2), e("div", {
                staticClass: "c-loader-button__container"
            }
            , [e("svg", {
                staticClass:"c-loader-button-svg c-loader-button-svg--left", attrs: {
                    version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 497 61", preserveAspectRatio: "none"
                }
            }
            , [e("rect", {
                attrs: {
                    x: "0.5", y: "0.5", width: "496", height: "60", fill: "none"
                }
            }
            )]), e("svg", {
                staticClass:"c-loader-button-svg c-loader-button-svg--right", attrs: {
                    version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", "xmlns:xlink": "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 497 61", preserveAspectRatio: "none"
                }
            }
            , [e("rect", {
                attrs: {
                    x: "0.5", y: "0.5", width: "496", height: "60", fill: "none"
                }
            }
            )]), e("div", {
                staticClass: "c-loader-button__bg"
            }
            ), e("div", {
                staticClass: "c-loader-button__text"
            }
            , [t._v("LOADING...")])])])
        }
        , [], !1, null, null, null).exports;
        function g(t, r) {
            var e=Object.keys(t);
            if(Object.getOwnPropertySymbols) {
                var s=Object.getOwnPropertySymbols(t);
                r&&(s=s.filter(function(r) {
                    return Object.getOwnPropertyDescriptor(t, r).enumerable
                }
                )), e.push.apply(e, s)
            }
            return e
        }
        function w(t) {
            for(var r=1;
            r<arguments.length;
            r++) {
                var e=null!=arguments[r]?arguments[r]: {}
                ;
                r%2?g(e, !0).forEach(function(r) {
                    Object(n.a)(t, r, e[r])
                }
                ):Object.getOwnPropertyDescriptors?Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)):g(e).forEach(function(r) {
                    Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
                }
                )
            }
            return t
        }
        var y= {
            name:"LoginPage", components: {
                NnnBaseLayout: m.a, NnnInput: p.a, NnnButton: f.a, NnnWrapperLoadingButton: v
            }
            , directives:Object(n.a)( {}
            , d.a.name, d.a), mixins:[a.validationMixin, l.a], data:function() {
                return {
                    username: "", password: "", submitFormInProgress: !1
                }
            }
            , computed:w( {}
            , Object(o.c)( {
                error: "authError", displayErrors: "hasGlobalError"
            }
            ), {
                usernameError:function() {
                    return this.$v.username.$anyError?"The field is required": null
                }
                , passwordError:function() {
                    return this.$v.password.$anyError?"The field is required": null
                }
                , isSubmitFormEnabled:function() {
                    return!this.usernameError&&!this.passwordError&&this.$v.username.$dirty&&this.$v.password.$dirty
                }
            }
            ), watch: {
                error:function(t) {
                    t&&this.displayErrorsGlobally( {
                        duration: c.A
                    }
                    )
                }
                , displayErrors:function(t) {
                    return t?this.setPreset( {
                        name: c.z, withoutAudioEffects: !0
                    }
                    ):this.setPreset( {
                        name: c.y, withoutAudioEffects: !0
                    }
                    )
                }
            }
            , validations: {
                username: {
                    required: u.a
                }
                , password: {
                    required: u.a
                }
            }
            , methods:w( {}
            , Object(o.b)( {
                login: "login", displayErrorsGlobally: "displayErrorsGlobally", setPreset: "setPreset", prefetchDashboardData: "prefetchDashboardData"
            }
            ), {
                submitForm:function() {
                    var t=this;
                    this.isSubmitFormEnabled&&!this.displayErrors&&(this.submitFormInProgress=!0, this.login( {
                        username: this.username, password: this.password
                    }
                    ).then(Object(s.a)(regeneratorRuntime.mark(function r() {
                        return regeneratorRuntime.wrap(function(r) {
                            for(;
                            ;
                            )switch(r.prev=r.next) {
                                case 0: return r.next=2, t.prefetchDashboardData();
                                case 2:t.$router.push( {
                                    name: c.b
                                }
                                ), t.submitFormInProgress=!1;
                                case 4:case"end":return r.stop()
                            }
                        }
                        , r)
                    }
                    ))).catch(function() {
                        t.$effectsAudio.play("bad_login"), t.submitFormInProgress=!1
                    }
                    ))
                }
                , goToForgotPasswordPage:function() {
                    this.$router.push( {
                        name: c.r
                    }
                    )
                }
                , onInput:function(t) {
                    this.$v[t].$touch()
                }
            }
            ), created:function() {
                this.setPreset( {
                    name: c.y
                }
                )
            }
        }
        , E=Object(h.a)(y, function() {
            var t=this, r=t.$createElement, e=t._self._c||r;
            return e("nnn-base-layout", {
                staticClass: "c-login c-responsive-padding"
            }
            , [e("template", {
                slot: "bottom"
            }
            , [e("form", {
                staticClass:"c-form u-width-31 u-pt-12", attrs: {
                    "aria-disabled": !t.isSubmitFormEnabled
                }
                , on: {
                    submit:function(r) {
                        return r.preventDefault(), t.submitForm(r)
                    }
                }
            }
            , [e("div", {
                staticClass: "c-form-header c-form-header--lighter"
            }
            , [e("h2", {
                staticClass: "c-form-header__title"
            }
            , [t._v("LOGIN TO YOUR ACCOUNT")]), e("p", {
                staticClass: "c-form-header__desc c-h6"
            }
            , [e("transition", {
                attrs: {
                    name: "fade"
                }
            }
            , [t.displayErrors?e("span", [t._v("INCORRECT EMAIL OR PASSWORD, PLEASE TRY AGAIN!")]):e("span", [t._v("ENTER YOUR DETAILS BELOW")])])], 1)]), e("div", {
                staticClass: "c-form-group"
            }
            , [e("nnn-input", {
                directives:[ {
                    name: "focus", rawName: "v-focus"
                }
                ], attrs: {
                    type: "text", placeholder: "Username", autocomplete: "username", "case-sensitive": "", "error-margin-sm": "", "error-message": t.usernameError
                }
                , on: {
                    input:function(r) {
                        return t.onInput("username")
                    }
                }
                , model: {
                    value:t.username, callback:function(r) {
                        t.username="string"==typeof r?r.trim(): r
                    }
                    , expression:"username"
                }
            }
            )], 1), e("div", {
                staticClass: "c-form-group"
            }
            , [e("nnn-input", {
                attrs: {
                    type: "password", placeholder: "Password", autocomplete: "current-password", "error-message": t.passwordError, "error-margin-sm": "", "case-sensitive": ""
                }
                , on: {
                    input:function(r) {
                        return t.onInput("password")
                    }
                }
                , model: {
                    value:t.password, callback:function(r) {
                        t.password="string"==typeof r?r.trim(): r
                    }
                    , expression:"password"
                }
            }
            )], 1), e("div", {
                staticClass: "c-form__footer"
            }
            , [e("nnn-button", {
                staticClass:"u-mb-5 u-mt-1 u-opacity-50", attrs: {
                    "font-size": "md", color: "primary", disableClick: !0, disableHover: !0
                }
                , on: {
                    click: t.goToForgotPasswordPage
                }
            }
            , [t._v("FORGOT YOUR PASSWORD?")]), e("nnn-wrapper-loading-button", {
                attrs: {
                    submitFormInProgress: t.submitFormInProgress
                }
            }
            , [e("nnn-button", {
                attrs: {
                    type: "submit", "font-size": "lg", color: "primary", width: "full", variation: "contain", "aria-disabled": !t.isSubmitFormEnabled, disabled: !t.isSubmitFormEnabled
                }
            }
            , [t._v("LOGIN")])], 1)], 1)])])], 2)
        }
        , [], !1, null, null, null);
        r.default=E.exports
    }
    , af63:function(t, r, e) {
        "use strict";
        var s=e("2b0e"), n="dom_webgl_channel", o=new s.a;
        e.d(r, "a", function() {
            return a
        }
        );
        var a= {
            methods: {
                $emitToEventBus:function(t) {
                    var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]: n;
                    o.$emit(r, t)
                }
                , $listenToEventBus:function(t) {
                    var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]: n;
                    o.$on(r, t)
                }
                , $removeEventBusListener:function(t) {
                    o.$off(t)
                }
            }
        }
    }
    , e081:function(t, r, e) {
        "use strict";
        e.d(r, "a", function() {
            return n
        }
        ), e("7f7f");
        var s=e("16e1"), n= {
            name:"focus", inserted:function(t, r) {
                var e=r.value;
                if(!Object(s.d)()) {
                    var n=t?t.querySelector("input"): null;
                    setTimeout(function() {
                        n&&n.focus()
                    }
                    , e||10)
                }
            }
        }
    }
}

]);