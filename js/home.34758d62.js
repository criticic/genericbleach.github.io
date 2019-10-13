(window.webpackJsonp = window.webpackJsonp || []).push([
    ["home"], {
        "126d": function(e, t, n) {
            var i = n("6da8"),
                s = n("aaec"),
                a = n("d094");
            e.exports = function(e) {
                return s(e) ? a(e) : i(e)
            }
        },
        "204f": function(e, t, n) {
            e.exports = n.p + "img/trial-3.073922f6.png"
        },
        "2f92": function(e, t, n) {
            e.exports = n.p + "img/trial-1.0f3f5026.png"
        },
        "3cfb": function(e, t, n) {
            "use strict";
            n.r(t);
            var i = (n("8e6e"), n("ac6a"), n("456d"), n("96cf"), n("3b8d")),
                s = (n("6762"), n("2fdb"), n("5df3"), n("1c4c"), n("75fc")),
                a = n("bd86"),
                r = n("2f62"),
                o = n("af63"),
                l = (n("c5f6"), n("7f7f"), n("f12d")),
                c = n("0dbb"),
                u = {
                    name: "NnnHexagon",
                    props: {
                        size: {
                            type: String,
                            required: !1,
                            default: ""
                        },
                        color: {
                            type: String,
                            required: !1,
                            default: ""
                        },
                        strokeWidth: {
                            type: Number,
                            required: !1,
                            default: 2
                        },
                        filled: {
                            type: Boolean,
                            required: !1,
                            default: !1
                        },
                        svgClass: {
                            type: [String, Object],
                            required: !1,
                            default: function() {}
                        }
                    },
                    computed: {
                        className: function() {
                            return Object(c.a)([{
                                value: this.variation
                            }, {
                                name: "size",
                                value: this.size
                            }, {
                                name: "color",
                                value: this.color
                            }, {
                                shouldApply: this.filled,
                                value: "filled"
                            }], "c-svg-hexagon")
                        }
                    }
                },
                d = n("2877"),
                p = {
                    name: "tooltip",
                    inserted: function(e, t) {
                        var n = t.value;
                        e.classList.add("c-tooltip");
                        var i = document.createElement("div");
                        i.classList.add("c-tooltip__ctn");
                        var s = document.createElement("div");
                        s.innerHTML = n || "", s.classList.add("c-tooltip__ctn-body"), i.append(s), e.append(i)
                    }
                },
                f = {
                    name: "NnnTrialProgress",
                    components: {
                        NnnHexagon: Object(d.a)(u, function() {
                            var e = this,
                                t = e.$createElement,
                                n = e._self._c || t;
                            return n("div", {
                                class: e.className
                            }, [n("svg", {
                                staticClass: "c-svg-hexagon__icon",
                                class: e.svgClass,
                                attrs: {
                                    version: "1.1",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 -1 48.49742261192856 59"
                                }
                            }, [n("path", {
                                attrs: {
                                    "stroke-width": e.strokeWidth,
                                    d: "M24.24871130596428 0L48.49742261192856 14L48.49742261192856 42L24.24871130596428 56L0 42L0 14Z"
                                }
                            })]), e.$slots.default ? n("div", {
                                staticClass: "c-svg-hexagon__ctn"
                            }, [e._t("default")], 2) : e._e()])
                        }, [], !1, null, null, null).exports,
                        CloseIcon: {
                            functional: !0,
                            render(e, t) {
                                const {
                                    _c: n,
                                    _v: i,
                                    data: s,
                                    children: a = []
                                } = t, {
                                    class: r,
                                    staticClass: o,
                                    style: l,
                                    staticStyle: c,
                                    attrs: u = {},
                                    ...d
                                } = s;
                                return n("svg", {
                                    class: [r, o],
                                    style: [l, c],
                                    attrs: Object.assign({
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 13 13"
                                    }, u),
                                    ...d
                                }, a.concat([n("path", {
                                    attrs: {
                                        d: "M11.1.49l1.41 1.41L1.9 12.51.49 11.1 11.1.49zm-9.2 0L12.51 11.1l-1.41 1.41L.49 1.9 1.9.49z"
                                    }
                                })]))
                            }
                        }
                    },
                    directives: Object(a.a)({}, p.name, p),
                    props: {
                        taskNumber: {
                            type: Number,
                            required: !0
                        },
                        status: {
                            validator: function(e) {
                                return [l.a, l.d, l.c, l.b].indexOf(e) > -1
                            },
                            required: !0
                        }
                    },
                    computed: {
                        tooltipContent: function() {
                            var e = l.e[this.status];
                            return "<p>TASK ".concat(this.taskNumber, " STATUS</p><h6>").concat(e, "</h6>")
                        },
                        filled: function() {
                            return this.status === l.a
                        },
                        displayRejectedIcon: function() {
                            return this.status === l.d
                        },
                        svgClass: function() {
                            return this.status === l.b ? "u-opacity-20" : ""
                        }
                    }
                },
                h = Object(d.a)(f, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("nnn-hexagon", {
                        directives: [{
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: e.tooltipContent,
                            expression: "tooltipContent"
                        }],
                        staticClass: "c-trial-progress",
                        attrs: {
                            svgClass: e.svgClass,
                            size: "md",
                            color: "white",
                            strokeWidth: 5,
                            filled: e.filled
                        }
                    }, [e.displayRejectedIcon ? n("close-icon", {
                        attrs: {
                            width: "8px",
                            height: "8px",
                            fill: "currentColor"
                        }
                    }) : e._e()], 1)
                }, [], !1, null, null, null).exports,
                m = n("f487"),
                g = n("a8db"),
                v = n("1dce"),
                b = n("5fd7"),
                _ = n("e081"),
                y = n("e946"),
                C = n("9301"),
                O = {
                    components: {
                        NnnInput: y.a,
                        NnnButton: C.a
                    },
                    directives: Object(a.a)({}, _.a.name, _.a),
                    props: {
                        password: {
                            type: String,
                            required: !0
                        },
                        confirmPassword: {
                            type: String,
                            required: !0
                        },
                        errors: {
                            type: Object,
                            required: !0
                        }
                    },
                    computed: {
                        isFormInvalid: function() {
                            return this.errors.password || !this.errors.$v.password.$anyDirty || this.errors.confirmPassword || !this.errors.$v.password.$anyDirty
                        }
                    },
                    beforeDestroy: function() {
                        this.$emit("clear-password-data")
                    }
                },
                w = Object(d.a)(O, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("form", {
                        staticClass: "c-form u-width-31 u-mh-auto u-mt-12",
                        on: {
                            submit: function(t) {
                                return t.preventDefault(), e.$emit("save")
                            }
                        }
                    }, [n("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [n("nnn-input", {
                        directives: [{
                            name: "focus",
                            rawName: "v-focus"
                        }],
                        attrs: {
                            type: "password",
                            name: "password",
                            placeholder: "NEW PASSWORD",
                            autocomplete: "new-password",
                            value: e.password,
                            "error-message": e.errors.password ? " Password is required and must contain 8 - 50 characters, at least 1 letter and 1 number!" : null,
                            "case-sensitive": ""
                        },
                        on: {
                            change: function(t) {
                                return e.$emit("set-field", "password", t)
                            }
                        }
                    })], 1), n("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [n("nnn-input", {
                        attrs: {
                            type: "password",
                            name: "confirmPassword",
                            placeholder: "RETYPE NEW PASSWORD",
                            autocomplete: "new-password",
                            value: e.confirmPassword,
                            "error-message": e.errors.confirmPassword ? "This field must be same as password" : null,
                            "case-sensitive": ""
                        },
                        on: {
                            change: function(t) {
                                return e.$emit("set-field", "confirmPassword", t)
                            }
                        }
                    })], 1), n("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [n("div", {
                        staticClass: "u-display-flex u-justify-center"
                    }, [n("nnn-button", {
                        staticClass: "u-mt-8",
                        attrs: {
                            type: "submit",
                            "font-size": "lg",
                            color: "primary",
                            disabled: e.isFormInvalid
                        }
                    }, [e._v("\n        CHANGE PASSWORD\n      ")])], 1)]), n("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [n("div", {
                        staticClass: "u-display-flex u-justify-center"
                    }, [n("nnn-button", {
                        staticClass: "c-profile__change-pass-btn",
                        attrs: {
                            type: "button",
                            "font-size": "lg",
                            color: "gray-02"
                        },
                        on: {
                            click: function(t) {
                                return e.$emit("cancel")
                            }
                        }
                    }, [e._v("\n        CANCEL\n      ")])], 1)])])
                }, [], !1, null, null, null).exports,
                E = n("5a50"),
                P = n("cc57"),
                D = n("1795"),
                j = n("3005"),
                x = {
                    functional: !0,
                    render(e, t) {
                        const {
                            _c: n,
                            _v: i,
                            data: s,
                            children: a = []
                        } = t, {
                            class: r,
                            staticClass: o,
                            style: l,
                            staticStyle: c,
                            attrs: u = {},
                            ...d
                        } = s;
                        return n("svg", {
                            class: [r, o],
                            style: [l, c],
                            attrs: Object.assign({
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 13 14"
                            }, u),
                            ...d
                        }, a.concat([n("path", {
                            attrs: {
                                d: "M11 7.01L2 13V9.76l4.44-2.75L2 4.23V1l9 6.01z"
                            }
                        })]))
                    }
                },
                T = {
                    components: {
                        NnnInput: y.a,
                        NnnButton: C.a,
                        NnnSelect: P.a,
                        NnnDatePicker: D.a,
                        NnnSelectOption: j.a,
                        ArrowRightIcon: x
                    },
                    directives: Object(a.a)({}, _.a.name, _.a),
                    props: {
                        formData: {
                            type: Object,
                            required: !0
                        },
                        isFormValid: {
                            type: Boolean,
                            default: !0,
                            required: !0
                        },
                        accountDetailsErrors: {
                            type: Object,
                            required: !0
                        },
                        personalDetailsErrors: {
                            type: Object,
                            required: !0
                        },
                        countries: {
                            type: [Array, Object],
                            required: !0
                        }
                    },
                    computed: {
                        countriesWithPhoneCodes: function() {
                            var e = this;
                            return Object.keys(this.countries).filter(function(t) {
                                return e.countries[t].phoneCode
                            }).map(function(t) {
                                return e.countries[t]
                            })
                        },
                        dateOfBirthErrorMessage: function() {
                            return this.personalDetailsErrors.dateOfBirth ? "YOU MUST BE OF LEGAL AGE TO APPLY!" : ""
                        }
                    },
                    methods: {
                        getErrorMessageForField: function(e) {
                            return this.personalDetailsErrors[e] ? E.P[e] : null
                        },
                        setField: function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                            this.$emit("set-field", e, t), n()
                        }
                    },
                    created: function() {
                        this.genderOptions = E.s, this.mobileOsOptions = E.G
                    }
                },
                S = Object(d.a)(T, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("form", {
                        staticClass: "c-form u-width-31 u-mh-auto",
                        on: {
                            submit: function(t) {
                                return t.preventDefault(), e.$emit("save-personal-details-data")
                            }
                        }
                    }, [n("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [n("h6", {
                        staticClass: "c-form-group__header"
                    }, [e._v("PERSONAL DETAILS")]), n("nnn-input", {
                        directives: [{
                            name: "focus",
                            rawName: "v-focus"
                        }],
                        attrs: {
                            type: "text",
                            name: "firstName",
                            placeholder: "First name",
                            value: e.formData.firstName,
                            autocomplete: e.formData.firstName,
                            "error-message": e.personalDetailsErrors.firstName ? " This field is required" : null
                        },
                        on: {
                            change: function(t) {
                                return e.$emit("set-field", "firstName", t)
                            }
                        }
                    })], 1), n("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [n("nnn-input", {
                        attrs: {
                            value: e.formData.lastName,
                            type: "text",
                            name: "lastName",
                            placeholder: "Last name",
                            "error-message": e.personalDetailsErrors.lastName ? " This field is required" : null
                        },
                        on: {
                            change: function(t) {
                                return e.$emit("set-field", "lastName", t)
                            }
                        }
                    })], 1), n("div", {
                        staticClass: "c-form-group c-form-group--lg-mb u-mt-8"
                    }, [n("nnn-date-picker", {
                        attrs: {
                            date: e.formData.dateOfBirth,
                            "error-message": e.dateOfBirthErrorMessage
                        },
                        on: {
                            change: function(t) {
                                return e.$emit("set-date-field", t)
                            }
                        }
                    })], 1), n("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [n("nnn-select", {
                        attrs: {
                            value: e.formData.gender,
                            errorMessage: e.getErrorMessageForField("gender"),
                            placeholder: "GENDER",
                            options: e.genderOptions
                        },
                        on: {
                            change: function(t) {
                                return e.$emit("set-field", "gender", t)
                            }
                        }
                    })], 1), n("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [n("nnn-select", {
                        attrs: {
                            value: e.formData.countryNationality,
                            errorMessage: e.getErrorMessageForField("countryNationality"),
                            placeholder: "COUNTRY"
                        },
                        on: {
                            change: function(t) {
                                return e.setField("countryNationality", t)
                            }
                        },
                        scopedSlots: e._u([{
                            key: "item",
                            fn: function(t) {
                                return e._l(e.countries, function(i, s) {
                                    return n("nnn-select-option", {
                                        key: "nationality-" + s,
                                        attrs: {
                                            value: i.name
                                        },
                                        nativeOn: {
                                            click: function(n) {
                                                return e.setField("countryNationality", i.name, t.closeDropdown)
                                            }
                                        }
                                    }, [e._v(e._s(i.name))])
                                })
                            }
                        }])
                    })], 1), n("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [n("nnn-select", {
                        attrs: {
                            value: e.formData.mobileOS,
                            errorMessage: e.getErrorMessageForField("mobileOS"),
                            placeholder: "MOBILE OS",
                            options: e.mobileOsOptions
                        },
                        on: {
                            change: function(t) {
                                return e.$emit("set-field", "mobileOS", t)
                            }
                        }
                    })], 1), n("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [n("h6", {
                        staticClass: "c-form-group__header"
                    }, [e._v("ACCOUNT DETAILS")]), n("div", {
                        staticClass: "u-display-flex u-flex-direction-column"
                    }, [n("nnn-button", {
                        attrs: {
                            "font-size": "lg",
                            variation: "input-with-icon",
                            color: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.$emit("display-change-email-section")
                            }
                        }
                    }, [e._v("\n        CHANGE EMAIL\n        "), n("template", {
                        slot: "icon"
                    }, [n("arrow-right-icon", {
                        attrs: {
                            fill: "currentColor",
                            width: "14",
                            height: "13"
                        }
                    })], 1)], 2)], 1), n("div", {
                        staticClass: "u-display-flex u-flex-direction-column"
                    }, [n("nnn-button", {
                        attrs: {
                            "font-size": "lg",
                            variation: "input-with-icon",
                            color: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.$emit("display-change-password-section")
                            }
                        }
                    }, [e._v("\n        CHANGE PASSWORD\n        "), n("template", {
                        slot: "icon"
                    }, [n("arrow-right-icon", {
                        attrs: {
                            fill: "currentColor",
                            width: "14",
                            height: "13"
                        }
                    })], 1)], 2)], 1)]), n("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [n("div", {
                        staticClass: "u-display-flex u-justify-center"
                    }, [n("nnn-button", {
                        staticClass: "c-profile__submit-btn",
                        attrs: {
                            type: "submit",
                            "font-size": "lg",
                            color: "primary",
                            disabled: !e.isFormValid || !e.personalDetailsErrors.$v.$anyDirty
                        }
                    }, [e._v("SAVE CHANGES")])], 1)])])
                }, [], !1, null, null, null).exports,
                A = {
                    name: "ChangeEmailComponent",
                    components: {
                        NnnInput: y.a,
                        NnnButton: C.a
                    },
                    directives: Object(a.a)({}, _.a.name, _.a),
                    props: {
                        email: {
                            type: String,
                            required: !0
                        },
                        oldEmail: {
                            type: String,
                            required: !0
                        },
                        errors: {
                            type: Object,
                            required: !0
                        }
                    },
                    computed: {
                        isFormInvalid: function() {
                            return this.errors.email || !this.errors.$v.email.$anyDirty || this.oldEmail === this.email
                        },
                        emailErrorMessage: function() {
                            return this.errors.email ? this.errors.$v.email.uniqueEmail ? "Incorrect value" : "Email is already taken" : ""
                        }
                    }
                },
                k = Object(d.a)(A, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("form", {
                        staticClass: "c-form u-width-31 u-mh-auto u-mt-12",
                        on: {
                            submit: function(t) {
                                return t.preventDefault(), e.$emit("save")
                            }
                        }
                    }, [n("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [n("nnn-input", {
                        attrs: {
                            value: e.email,
                            type: "email",
                            name: "email",
                            placeholder: "EMAIL",
                            "error-message": e.emailErrorMessage
                        },
                        on: {
                            change: function(t) {
                                return e.$emit("set-field", "email", t)
                            }
                        }
                    })], 1), n("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [n("div", {
                        staticClass: "u-display-flex u-justify-center"
                    }, [n("nnn-button", {
                        staticClass: "u-mt-8",
                        attrs: {
                            type: "submit",
                            "font-size": "lg",
                            color: "primary",
                            disabled: e.isFormInvalid
                        }
                    }, [e._v("\n        CHANGE EMAIL ADRESS\n      ")])], 1)]), n("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [n("div", {
                        staticClass: "u-display-flex u-justify-center"
                    }, [n("nnn-button", {
                        staticClass: "c-profile__change-pass-btn",
                        attrs: {
                            type: "button",
                            "font-size": "lg",
                            color: "gray-02"
                        },
                        on: {
                            click: function(t) {
                                return e.$emit("cancel")
                            }
                        }
                    }, [e._v("\n        CANCEL\n      ")])], 1)])])
                }, [], !1, null, null, null).exports,
                L = n("ee97");

            function N(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, i)
                }
                return n
            }

            function $(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(n, !0).forEach(function(t) {
                        Object(a.a)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var V = {
                    name: "MyProfileComponent",
                    components: {
                        NnnTransition: L.a,
                        MyProfileDetailsComponent: S,
                        ChangePasswordComponent: w,
                        ChangeEmailComponent: k
                    },
                    mixins: [v.validationMixin, b.a],
                    computed: $({}, Object(r.c)(["user", "countries", "profileData", "content"]), {
                        isFormValid: function() {
                            return this.checkFieldsValidity(["firstName", "lastName", "dateOfBirth", "gender", "countryNationality", "mobileOS", "email"], !1)
                        },
                        passwordConfimed: function() {
                            return this.checkFieldsValidity(["password", "confirmPassword"])
                        }
                    }),
                    methods: $({}, Object(r.b)({
                        getProfileData: "getProfileData",
                        fetchCountries: "fetchCountries",
                        changeProfileData: "changeProfileData",
                        setAccountContent: "setAccountContent",
                        setNewPassword: "setNewPassword",
                        changeEmail: "changeEmail",
                        checkEmailAndUsernameAvailability: "checkEmailAndUsernameAvailability"
                    }), {
                        displayPersonalDetailsSection: function() {
                            this.setAccountContent({
                                content: E.I
                            })
                        },
                        displayChangePasswordSection: function() {
                            this.setAccountContent({
                                content: E.K
                            })
                        },
                        displayChangeEmailSection: function() {
                            this.setAccountContent({
                                content: E.J
                            })
                        },
                        displayConfirmYourEmailSection: function() {
                            this.setAccountContent({
                                content: E.i
                            })
                        },
                        setDateField: function(e) {
                            this.setField("dateOfBirth", e.value), e.touched || this.$v.formData.dateOfBirth.$reset()
                        },
                        fetchInitialData: function() {
                            var e = this;
                            this.fetchCountries(), this.getProfileData({
                                username: this.user.username
                            }).then(function() {
                                e.formData = $({}, e.formData, {}, e.profileData)
                            })
                        },
                        savePersonalDetailsData: function() {
                            var e = Object(i.a)(regeneratorRuntime.mark(function e() {
                                var t, n;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.isFormValid) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return (t = this.formData).password, t.confirmPassword, t.username, n = Object(g.a)(t, ["password", "confirmPassword", "username"]), e.next = 5, this.changeProfileData({
                                                data: $({
                                                    username: this.user.username
                                                }, n)
                                            });
                                        case 5:
                                            this.setAccountContent({
                                                content: E.j
                                            });
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        saveUpdatedPassword: function() {
                            this.passwordConfimed && (this.setNewPassword({
                                username: this.user.username,
                                password: this.formData.password
                            }), this.displayPersonalDetailsSection())
                        },
                        saveUpdatedEmail: function() {
                            var e = Object(i.a)(regeneratorRuntime.mark(function e() {
                                var t;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.checkEmailAndUsernameAvailability({
                                                username: this.profileData.username,
                                                email: this.formData.email
                                            });
                                        case 2:
                                            if (t = e.sent, t.email) {
                                                e.next = 7;
                                                break
                                            }
                                            return this.alreadyTakenEmails.push(this.formData.email), e.abrupt("return");
                                        case 7:
                                            this.changeEmail({
                                                username: this.profileData.username,
                                                email: this.formData.email
                                            }), this.displayConfirmYourEmailSection();
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        clearPasswordData: function() {
                            this.formData.password = "", this.formData.confirmPassword = "", this.accountDetailsErrors.password = !1, this.accountDetailsErrors.confirmPassword = !1
                        }
                    }),
                    created: function() {
                        this.fetchInitialData(), this.MY_PROFILE = E.I, this.MY_PROFILE_CHANGE_PASSWORD = E.K, this.MY_PROFILE_CHANGE_EMAIL = E.J, this.CONFIRM_YOUR_EMAIL = E.i
                    }
                },
                I = Object(d.a)(V, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "c-account-wrapper-ctn c-account-wrapper-ctn--hide-heading-on-desk c-profile js-a-profile-details js-a-profile-details--initial"
                    }, [n("div", {
                        staticClass: "c-account-wrapper-ctn__main"
                    }, [n("nnn-transition", {
                        attrs: {
                            "toggle-scroll-during-animation": "",
                            name: "vt-fade-scale"
                        }
                    }, [e.content === e.MY_PROFILE ? n("my-profile-details-component", {
                        key: 0,
                        attrs: {
                            formData: e.formData,
                            "personal-details-errors": e.personalDetailsErrors,
                            "account-details-errors": e.accountDetailsErrors,
                            countries: e.countries,
                            "is-form-valid": e.isFormValid
                        },
                        on: {
                            "save-personal-details-data": e.savePersonalDetailsData,
                            "set-field": e.setField,
                            "display-change-password-section": e.displayChangePasswordSection,
                            "display-change-email-section": e.displayChangeEmailSection,
                            "set-date-field": e.setDateField
                        }
                    }) : e._e(), e.content === e.MY_PROFILE_CHANGE_PASSWORD ? n("change-password-component", {
                        key: 1,
                        attrs: {
                            password: e.formData.password,
                            confirmPassword: e.formData.confirmPassword,
                            errors: e.accountDetailsErrors
                        },
                        on: {
                            save: e.saveUpdatedPassword,
                            cancel: e.displayPersonalDetailsSection,
                            "set-field": e.setField,
                            "clear-password-data": e.clearPasswordData
                        }
                    }) : e._e(), e.content === e.MY_PROFILE_CHANGE_EMAIL ? n("change-email-component", {
                        key: 2,
                        attrs: {
                            email: e.formData.email,
                            oldEmail: e.profileData.email,
                            errors: e.accountDetailsErrors
                        },
                        on: {
                            save: e.saveUpdatedEmail,
                            cancel: e.displayPersonalDetailsSection,
                            "set-field": e.setField
                        }
                    }) : e._e()], 1)], 1)])
                }, [], !1, null, null, null).exports,
                M = n("487a"),
                F = n.n(M),
                R = {
                    name: "NnnVideoCard",
                    components: {
                        PlayIcon: {
                            functional: !0,
                            render(e, t) {
                                const {
                                    _c: n,
                                    _v: i,
                                    data: s,
                                    children: a = []
                                } = t, {
                                    class: r,
                                    staticClass: o,
                                    style: l,
                                    staticStyle: c,
                                    attrs: u = {},
                                    ...d
                                } = s;
                                return n("svg", {
                                    class: [r, o],
                                    style: [l, c],
                                    attrs: Object.assign({
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 14 16"
                                    }, u),
                                    ...d
                                }, a.concat([n("path", {
                                    attrs: {
                                        d: "M1 15.61V.39L13.61 8 1 15.61z"
                                    }
                                })]))
                            }
                        }
                    },
                    props: {
                        video: {
                            type: Object,
                            required: !0
                        },
                        displayPlayIcon: {
                            type: Boolean,
                            required: !1,
                            default: !1
                        },
                        playIconStyles: {
                            type: Object,
                            required: !1,
                            default: function() {}
                        }
                    }
                },
                B = Object(d.a)(R, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "c-video-thumb u-cursor-pointer"
                    }, [n("div", {
                        staticClass: "c-video-thumb__img",
                        style: {
                            backgroundImage: "url(" + e.video.thumbnail + ")"
                        }
                    }), n("div", {
                        staticClass: "c-video-thumb__gradient"
                    }, e._l(10, function(e) {
                        return n("div", {
                            key: e,
                            staticClass: "c-video-thumb__gradient-item"
                        })
                    }), 0), e._t("video-description"), e.displayPlayIcon ? n("div", {
                        staticClass: "c-play-icon",
                        style: e.playIconStyles
                    }, [n("play-icon", {
                        attrs: {
                            fill: "currentColor",
                            width: "14",
                            height: "16"
                        }
                    })], 1) : e._e()], 2)
                }, [], !1, null, null, null).exports,
                G = n("b047c"),
                z = n.n(G),
                H = n("bb4f"),
                Y = {
                    name: "NnnVideoThumbPart",
                    props: {
                        source: {
                            type: String,
                            required: !0
                        }
                    }
                },
                q = {
                    name: "NnnVideoThumbAnimationBox",
                    components: {
                        NnnVideoThumbPart: Object(d.a)(Y, function() {
                            var e = this,
                                t = e.$createElement,
                                n = e._self._c || t;
                            return n("div", {
                                staticClass: "c-video-thumb-part"
                            }, [n("div", {
                                staticClass: "c-video-thumb-part__img",
                                style: {
                                    backgroundImage: "url(" + e.source + ")"
                                }
                            })])
                        }, [], !1, null, null, null).exports
                    },
                    props: {
                        isVideoOpened: {
                            type: Boolean,
                            required: !0
                        },
                        isVideoClosing: {
                            type: Boolean,
                            required: !0
                        },
                        source: {
                            type: String,
                            required: !0
                        }
                    },
                    methods: {
                        getAnimationBoxElement: function() {
                            return this.$refs.animationBox
                        }
                    }
                },
                U = Object(d.a)(q, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        class: ["c-video-thumb-animation-box", {
                            "is-open": e.isVideoOpened
                        }, {
                            "is-closing": e.isVideoClosing
                        }]
                    }, [n("div", {
                        class: ["c-video-thumb-animation-box__bg", {
                            "is-open": e.isVideoOpened
                        }],
                        style: {
                            backgroundImage: "url(" + e.source + ")"
                        }
                    }), n("div", {
                        ref: "animationBox",
                        staticClass: "c-video-thumb-animation-box__ctn"
                    }, [n("nnn-video-thumb-part", {
                        staticClass: "c-video-thumb-part--1",
                        attrs: {
                            source: e.source
                        }
                    }), n("nnn-video-thumb-part", {
                        staticClass: "c-video-thumb-part--2",
                        attrs: {
                            source: e.source
                        }
                    }), n("nnn-video-thumb-part", {
                        staticClass: "c-video-thumb-part--3",
                        attrs: {
                            source: e.source
                        }
                    }), n("nnn-video-thumb-part", {
                        staticClass: "c-video-thumb-part--4",
                        attrs: {
                            source: e.source
                        }
                    })], 1)])
                }, [], !1, null, null, null).exports,
                W = n("5a9e"),
                X = n("16e1"),
                K = {
                    name: "NnnVideoDialog",
                    components: {
                        NnnVideoThumbAnimationBox: U,
                        NnnCloseButton: H.a
                    },
                    data: function() {
                        return {
                            player: null,
                            src: "",
                            thumbnail: "",
                            isVideoOpened: !1,
                            isVideoPlaying: !1,
                            isVideoClosing: !1,
                            playerOptions: {
                                controls: !0,
                                vertical: !0,
                                playsinline: !0,
                                controlBar: {
                                    volumePanel: {
                                        inline: !1
                                    }
                                }
                            }
                        }
                    },
                    methods: {
                        addClassToVideoPlayer: function() {
                            this.$refs.videoPlayer && this.$refs.videoPlayer.classList.add("is-hover")
                        },
                        removeClass: z()(function() {
                            this.$refs.videoPlayer && this.$refs.videoPlayer.classList.remove("is-hover")
                        }, 1500),
                        getAnimationBoxElement: function() {
                            return this.$refs.animationBoxWrapper.getAnimationBoxElement()
                        },
                        fitThumbnailToFullScreen: function() {
                            var e = this.getAnimationBoxElement();
                            e.removeAttribute("style");
                            var t = Object(X.b)(e),
                                n = Object(X.b)(this.$el),
                                i = n.height,
                                s = n.width,
                                a = i / t.height > 1,
                                r = a ? i / t.height : s / t.width;
                            e.style.transform = "scale(".concat(r, ")");
                            var o = a ? -1 * Object(X.b)(e).left / r : -1 * Object(X.b)(e).top / r,
                                l = a ? "--size-horizontal-to-cut-overflow" : "--size-vertical-to-cut-overflow";
                            e.style.setProperty(l, "".concat(o, "px"))
                        },
                        handleMouseMoveOnVideo: function() {
                            this.addClassToVideoPlayer(), this.removeClass()
                        },
                        play: function(e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W.a.VIDEO_ANIMATION_DURATION;
                            this.thumbnail = e.thumbnail, document.documentElement.classList.add("u-overflow-hidden"), this.isVideoOpened = !0, this.src = e.src, this.player.muted(!0), this.player.src({
                                src: e.src,
                                type: "video/mp4"
                            }), setTimeout(function() {
                                Object(X.c)() && Object(X.e)(document.documentElement), t.isVideoPlaying = !0, t.$emit("start", e), setTimeout(function() {
                                    t.player.muted(!1), t.player.play()
                                }, n)
                            }, n)
                        },
                        stop: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 800;
                            this.player.pause(), setTimeout(function() {
                                e.$emit("stop"), e.isVideoPlaying = !1, e.isVideoClosing = !0
                            }, t), setTimeout(function() {
                                e.getAnimationBoxElement().removeAttribute("style"), e.isVideoOpened = !1, e.isVideoClosing = !1, document.documentElement.classList.remove("u-overflow-hidden"), Object(X.c)() && Object(X.a)()
                            }, t + 1e3)
                        }
                    },
                    mounted: function() {
                        var e = this;
                        ["mousemove", "touchstart"].forEach(function(t) {
                            return e.$refs.videoPlayer.addEventListener(t, e.handleMouseMoveOnVideo)
                        }), n.e("video.js").then(n.t.bind(null, "cb8d", 7)).then(function(t) {
                            e.$refs.videoRef && (e.player = t.default(e.$refs.videoRef, e.playerOptions))
                        })
                    },
                    beforeDestroy: function() {
                        var e = this;
                        ["mousemove", "touchstart"].forEach(function(t) {
                            return e.$refs.videoPlayer.removeEventListener(t, e.handleMouseMoveOnVideo)
                        }), this.player && this.player.dispose()
                    }
                },
                J = (n("dd7f"), Object(d.a)(K, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        class: ["c-video-thumb-animation-box-wrapper", {
                            "is-open": e.isVideoOpened
                        }, {
                            "is-closing": e.isVideoClosing
                        }]
                    }, [n("nnn-video-thumb-animation-box", {
                        ref: "animationBoxWrapper",
                        attrs: {
                            "is-video-opened": e.isVideoOpened,
                            "is-video-closing": e.isVideoClosing,
                            source: e.thumbnail
                        }
                    }), n("div", {
                        ref: "videoPlayer",
                        class: ["c-video-player", {
                            "is-open": e.isVideoPlaying
                        }]
                    }, [n("video", {
                        ref: "videoRef",
                        staticClass: "video-js vjs-default-skin c-video-player__video c-video-js-skin-custom"
                    }, [e.src ? n("source", {
                        attrs: {
                            src: e.src,
                            type: "video/mp4"
                        }
                    }) : e._e()]), n("div", {
                        staticClass: "c-video-player__filter"
                    }, e._l(10, function(e) {
                        return n("div", {
                            key: e,
                            staticClass: "c-video-player__filter-gradient"
                        })
                    }), 0), n("div", {
                        staticClass: "c-video-player__controls"
                    }, [n("button", {
                        staticClass: "c-video-player__control-prev",
                        on: {
                            click: function(t) {
                                return e.$emit("previous")
                            }
                        }
                    }, [n("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 41",
                            width: "20",
                            height: "41",
                            fill: "currentColor"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M0.47 21L1.28 21.97L17.19 41L19.47 39.06L4.37 21L19.47 2.94L17.19 1L1.28 20.03L0.47 21L0.47 21Z"
                        }
                    })])]), n("button", {
                        staticClass: "c-video-player__control-next",
                        on: {
                            click: function(t) {
                                return e.$emit("next")
                            }
                        }
                    }, [n("svg", {
                        staticStyle: {
                            transform: "rotate(180deg)"
                        },
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 41",
                            width: "20",
                            height: "41",
                            fill: "currentColor"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M0.47 21L1.28 21.97L17.19 41L19.47 39.06L4.37 21L19.47 2.94L17.19 1L1.28 20.03L0.47 21L0.47 21Z"
                        }
                    })])]), e._m(0), n("nnn-close-button", {
                        staticClass: "c-video-player__close-button",
                        on: {
                            click: e.stop
                        }
                    })], 1)])], 1)
                }, [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "c-submission-data c-submission-data--video-player"
                    }, [e._v("\n        submitted: 1h ago"), n("br"), e._v("\n        Duration: 1:15"), n("br"), e._v("\n        Trial level: 2\n      ")])
                }], !1, null, null, null)).exports,
                Z = {
                    name: "NnnLoader"
                },
                Q = Object(d.a)(Z, function() {
                    var e = this;
                    e.$createElement;
                    return e._self._c, e._m(0)
                }, [function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        staticClass: "c-loader"
                    }, [t("div", {
                        staticClass: "c-loader-bar"
                    }), t("div", {
                        staticClass: "c-loader-bar"
                    }), t("div", {
                        staticClass: "c-loader-bar"
                    })])
                }], !1, null, null, null).exports,
                ee = n("a60f"),
                te = n("a557"),
                ne = {
                    name: "NnnVideoWall",
                    components: {
                        NnnVideoCard: B,
                        NnnVideoDialog: J,
                        NnnLoader: Q
                    },
                    directives: {
                        infiniteScroll: F.a
                    },
                    props: {
                        videos: {
                            type: Array,
                            required: !0
                        },
                        loadedAllVideos: {
                            type: Boolean,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            currentVideo: null,
                            isVideoPlaying: !1
                        }
                    },
                    computed: {
                        gridItemsAnimationDelay: function() {
                            return function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                return {
                                    animationDelay: "".concat(.05 * e + t, "s")
                                }
                            }
                        }
                    },
                    methods: {
                        openVideoDialog: function(e) {
                            this.currentVideo = e, this.$refs.videoDialog.play(e, W.a.VIDEO_ANIMATION_DURATION)
                        },
                        onVideoStarted: function() {
                            this.isVideoPlaying = !0, this.$audio.pause()
                        },
                        onVideoStopped: function() {
                            var e = this;
                            setTimeout(function() {
                                e.isVideoPlaying = !1, e.$audio.play(e.$appConfig.activeAmbientAudio, !0)
                            }, 1e3)
                        },
                        loadMore: function() {
                            this.$emit("load-more")
                        },
                        startNextVideo: function() {
                            var e = Object(ee.b)(this.videos, this.currentVideo);
                            this.currentVideo = this.videos[e], this.$refs.videoDialog.play(this.currentVideo, 0)
                        },
                        startPreviousVideo: function() {
                            var e = Object(ee.c)(this.videos, this.currentVideo);
                            this.currentVideo = this.videos[e], this.$refs.videoDialog.play(this.currentVideo, 0)
                        },
                        fitThumbnailToFullScreen: function() {
                            this.$refs.videoDialog && this.$refs.videoDialog.fitThumbnailToFullScreen()
                        },
                        animateTextOnHover: function(e) {
                            Object(te.d)(this.$refs["video_".concat(e.id)][0].$el)
                        }
                    }
                },
                ie = Object(d.a)(ne, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "u-max-width-full-hd u-mh-auto"
                    }, [n("section", {
                        directives: [{
                            name: "infinite-scroll",
                            rawName: "v-infinite-scroll",
                            value: e.loadMore,
                            expression: "loadMore"
                        }],
                        staticClass: "c-gallery-grid c-gallery-grid--video-wall js-a-video-grid",
                        attrs: {
                            "infinite-scroll-disabled": "busy",
                            "infinite-scroll-distance": "100"
                        }
                    }, e._l(e.videos, function(t) {
                        return n("div", {
                            key: t.id,
                            staticClass: "c-gallery-grid__item u-display-flex u-flex-direction-column",
                            style: e.gridItemsAnimationDelay(t.index)
                        }, [n("nnn-video-card", {
                            ref: "video_" + t.id,
                            refInFor: !0,
                            class: ["c-video-thumb--submission c-video-thumb--js-a-video-wall", {
                                "is-selected": t === e.currentVideo && e.isVideoPlaying
                            }],
                            attrs: {
                                video: t,
                                "display-play-icon": !0,
                                "play-icon-styles": e.gridItemsAnimationDelay(t.index, .3)
                            },
                            nativeOn: {
                                click: function(n) {
                                    return e.openVideoDialog(t)
                                },
                                mouseenter: function(n) {
                                    return e.animateTextOnHover(t), void e.fitThumbnailToFullScreen()
                                },
                                mousedown: function(t) {
                                    return e.fitThumbnailToFullScreen(t)
                                }
                            }
                        }), n("div", {
                            staticClass: "c-submission-data u-display-flex u-flex-direction-column u-align-items-end c-submission-data--js-a-video-wall"
                        }, [n("span", {
                            style: e.gridItemsAnimationDelay(t.index, .7)
                        }, [e._v("submitted: 1h ago")]), n("span", {
                            style: e.gridItemsAnimationDelay(t.index, .85)
                        }, [e._v("Duration: 1:15")]), n("span", {
                            style: e.gridItemsAnimationDelay(t.index, 1)
                        }, [e._v("Trial level: 2")])])], 1)
                    }), 0), e.loadedAllVideos ? e._e() : n("div", {
                        staticClass: "u-display-flex u-justify-center"
                    }, [n("nnn-loader")], 1), n("nnn-video-dialog", {
                        ref: "videoDialog",
                        on: {
                            start: e.onVideoStarted,
                            stop: e.onVideoStopped,
                            next: e.startNextVideo,
                            previous: e.startPreviousVideo
                        }
                    })], 1)
                }, [], !1, null, null, null).exports,
                se = n("a3c5"),
                ae = n("2103");

            function re(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, i)
                }
                return n
            }
            var oe = {
                name: "NnnVideoSubmissionsFilter",
                directives: {
                    clickOutside: n.n(ae).a.directive
                },
                components: {
                    NnnTransition: L.a,
                    NnnSelectOption: j.a
                },
                props: {
                    value: {
                        type: String,
                        required: !1,
                        default: se.a
                    },
                    name: {
                        type: String,
                        required: !1
                    }
                },
                data: function() {
                    return {
                        isDropdownOpen: !1
                    }
                },
                computed: function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? re(n, !0).forEach(function(t) {
                            Object(a.a)(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : re(n).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }({}, Object(r.c)({
                    profileData: "profileData"
                }), {
                    label: function() {
                        return function(e) {
                            return se.d[e]
                        }
                    },
                    trialLevelsOptions: function() {
                        var e = this.profileData.trialLevel;
                        return se.c.filter(function(t) {
                            return !parseInt(t.key) || t.key <= e
                        })
                    }
                }),
                methods: {
                    toggleDropdown: function() {
                        this.isDropdownOpen = !this.isDropdownOpen
                    },
                    onSelectedFilter: function(e) {
                        this.closeDropdown(), this.$emit("change", e.name)
                    },
                    handleClickOutside: function() {
                        this.closeDropdown()
                    },
                    closeDropdown: function() {
                        this.isDropdownOpen = !1
                    }
                },
                created: function() {
                    this.TRIAL_LEVELS_OPTIONS = se.c
                }
            };

            function le(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, i)
                }
                return n
            }

            function ce(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? le(n, !0).forEach(function(t) {
                        Object(a.a)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : le(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var ue = {
                    name: "VideoSubmissionsComponent",
                    components: {
                        NnnVideoWall: ie,
                        NnnVideoSubmissionsFilter: Object(d.a)(oe, function() {
                            var e = this,
                                t = e.$createElement,
                                n = e._self._c || t;
                            return n("div", {
                                directives: [{
                                    name: "click-outside",
                                    rawName: "v-click-outside",
                                    value: e.handleClickOutside,
                                    expression: "handleClickOutside"
                                }],
                                class: ["c-dropdown c-dropdown--level-select", {
                                    "is-open": e.isDropdownOpen
                                }, {
                                    "c-dropdown--clear-target": e.$slots.target
                                }]
                            }, [n("div", {
                                staticClass: "c-dropdown__target"
                            }, [n("button", {
                                staticClass: "c-dropdown__target-default",
                                on: {
                                    click: e.toggleDropdown
                                }
                            }, [n("div", {
                                staticClass: "u-text-transparent-50 u-mr-2"
                            }, [e._v("SHOW:")]), n("span", [e._v(e._s(e.label(e.value)))]), n("div", {
                                staticClass: "c-dropdown__icon-wrapper"
                            }, [n("svg", {
                                attrs: {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "currentColor",
                                    viewBox: "0 0 13 10",
                                    width: "13",
                                    height: "10"
                                }
                            }, [n("path", {
                                attrs: {
                                    d: "M6.74 9L0.5 0.5L3.87 0.5L6.74 4.69L9.63 0.5L13 0.5L6.74 9Z"
                                }
                            })])])]), n("nnn-transition", {
                                attrs: {
                                    name: "vt-fade"
                                }
                            }, [e.isDropdownOpen ? n("ul", {
                                staticClass: "c-dropdown__options"
                            }, [e._t("items", e._l(e.trialLevelsOptions, function(t, i) {
                                return n("nnn-select-option", {
                                    key: i,
                                    attrs: {
                                        selectOptionClass: "c-dropdown__option-item",
                                        buttonClass: "c-dropdown__option-item-text"
                                    },
                                    on: {
                                        click: function(n) {
                                            return e.onSelectedFilter(t)
                                        }
                                    }
                                }, [n("span", {
                                    staticClass: "u-ml-12"
                                }, [e._v(e._s(e.label(t.name)))])])
                            }))], 2) : e._e()])], 1)])
                        }, [], !1, null, null, null).exports
                    },
                    data: function() {
                        return {
                            page: 1,
                            selectedFilter: se.a
                        }
                    },
                    computed: ce({}, Object(r.c)({
                        videos: "videos",
                        videosMeta: "videosMeta"
                    }), {
                        loadedAllVideos: function() {
                            return this.videos.length >= this.videosMeta.total
                        }
                    }),
                    methods: ce({}, Object(r.b)({
                        fetchVideos: "fetchVideos"
                    }), {
                        onFilterChange: function(e) {
                            this.selectedFilter = e
                        },
                        fetchMoreVideos: function() {
                            this.loadedAllVideos || this.fetchVideos({
                                page: ++this.page,
                                perPage: this.VIDEOS_PER_PAGE,
                                isDashboard: !1
                            })
                        }
                    }),
                    created: function() {
                        this.VIDEOS_PER_PAGE = 20, this.videos.length || this.fetchVideos({
                            page: this.page,
                            perPage: this.VIDEOS_PER_PAGE,
                            isDashboard: !1
                        })
                    }
                },
                de = Object(d.a)(ue, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "c-account-wrapper-ctn c-account-wrapper-ctn--hide-heading-on-desk"
                    }, [n("div", {
                        staticClass: "c-account-wrapper-ctn__header c-video-submission-ctn"
                    }, [n("nnn-video-submissions-filter", {
                        staticClass: "u-ml-auto",
                        attrs: {
                            name: "selectedLevel",
                            value: e.selectedFilter
                        },
                        on: {
                            change: e.onFilterChange
                        }
                    })], 1), n("div", {
                        staticClass: "c-account-wrapper-ctn__main"
                    }, [n("nnn-video-wall", {
                        attrs: {
                            videos: e.videos,
                            loadedAllVideos: e.loadedAllVideos
                        },
                        on: {
                            "load-more": e.fetchMoreVideos
                        }
                    })], 1)])
                }, [], !1, null, null, null).exports,
                pe = n("1209"),
                fe = {
                    name: "GlobalConsciousnessComponent",
                    data: function() {
                        return {
                            graphPlacementElBoundingData: {},
                            graphWrapperElBoundingData: {},
                            scale: 1,
                            additionalX: 0,
                            additionalY: 0,
                            clipPath: "inset(0 0)",
                            isCanvasLoaded: !1,
                            pageYOffset: 0,
                            windowHeight: 0
                        }
                    },
                    props: {
                        isOpen: {
                            type: Boolean,
                            required: !0
                        },
                        isClosing: {
                            type: Boolean,
                            required: !0
                        }
                    },
                    methods: {
                        getGraphPlacementDimensions: function() {
                            var e = document.querySelector(".js-a-graph-placement-el"),
                                t = document.querySelector(".js-a-graph-wrapper-top");
                            this.graphPlacementElBoundingData = Object(X.b)(e), this.graphWrapperElBoundingData = Object(X.b)(t), this.getSizesToFitToDashboard()
                        },
                        setToGraphPlacementDimensions: function() {
                            pe.a.set(this.$el, {
                                top: 0 - this.graphWrapperElBoundingData.top - window.pageYOffset
                            }), pe.a.set(this.$refs.graphWrapperElement, {
                                height: window.innerHeight,
                                translateX: this.graphPlacementElBoundingData.left - this.additionalX,
                                translateY: this.graphPlacementElBoundingData.top - this.additionalY + window.pageYOffset,
                                scale: this.scale
                            })
                        },
                        animateGraphToFullScreen: function() {
                            return Object(pe.a)({
                                targets: this.$refs.graphWrapperElement,
                                translateX: 0,
                                translateY: 0,
                                translateZ: 0,
                                scale: 1,
                                delay: 500,
                                easing: "easeInOutCubic",
                                autoplay: !1
                            })
                        },
                        getSizesToFitToDashboard: function() {
                            var e = this.graphPlacementElBoundingData.height / window.innerHeight,
                                t = 0,
                                n = 0,
                                i = this.clipPath;
                            if (window.innerWidth * e > this.graphPlacementElBoundingData.width) return t = (window.innerWidth * e - this.graphPlacementElBoundingData.width) / 2, i = "inset(0 ".concat(t / e, "px)"), this.scale = e, this.additionalX = t, this.additionalY = n, void(this.clipPath = i);
                            e = this.graphPlacementElBoundingData.width / window.innerWidth, n = (window.innerHeight * e - this.graphPlacementElBoundingData.height) / 2, i = "inset(".concat(n / e, "px 0)"), this.scale = e, this.additionalX = t, this.additionalY = n, this.clipPath = i
                        },
                        clipSize: function() {
                            if (!Object(X.d)()) return this.$refs.graphElementCanvas && (this.$refs.graphElementCanvas.style.clipPath = this.clipPath), void(this.$refs.graphElementCanvas && (this.$refs.graphElementCanvas.style.webkitClipPath = this.clipPath));
                            this.$refs.graphElementCanvas && (this.$refs.graphElementCanvas.style.width = "calc(100% - ".concat(this.additionalX / this.scale * 2, "px)")), this.$refs.graphElementCanvas && (this.$refs.graphElementCanvas.style.height = "calc(100% - ".concat(this.additionalY / this.scale * 2, "px)"))
                        },
                        checkIfShouldResize: function() {
                            var e = window.innerHeight;
                            return Math.abs(e - this.windowHeight) < 100 && Object(X.d)() ? (this.windowHeight = e, !1) : (this.windowHeight = e, !0)
                        },
                        removeClippedSize: function() {
                            if (!Object(X.d)()) return this.$refs.graphElementCanvas && (this.$refs.graphElementCanvas.style.transition = "all .7s"), this.$refs.graphElementCanvas && (this.$refs.graphElementCanvas.style.webkitTransition = "all .7s"), this.$refs.graphElementCanvas && (this.$refs.graphElementCanvas.style.clipPath = "inset(0 0 0 0)"), void(this.$refs.graphElementCanvas && (this.$refs.graphElementCanvas.style.webkitClipPath = "inset(0 0 0 0)"));
                            this.$refs.graphElementCanvas && (this.$refs.graphElementCanvas.style.transition = "all .7s"), this.$refs.graphElementCanvas && (this.$refs.graphElementCanvas.style.webkitTransition = "all .7s"), this.$refs.graphElementCanvas && (this.$refs.graphElementCanvas.style.width = "100%"), this.$refs.graphElementCanvas && (this.$refs.graphElementCanvas.style.height = "100%")
                        },
                        resizeGraph: function() {
                            this.dfeGraph.onResize()
                        }
                    },
                    mounted: function() {
                        var e = this;
                        this.windowHeight = window.innerHeight, Promise.all([n.e("chunk-4f2ac058"), n.e("graph")]).then(n.bind(null, "523d")).then(function(t) {
                            e.dfeGraph = new t.default({
                                showGui: !1,
                                container: e.$refs.graph
                            }), e.dfeGraph.animate(), e.$nextTick(function() {
                                e.getGraphPlacementDimensions(), e.setToGraphPlacementDimensions(), e.clipSize(), e.isCanvasLoaded = !0
                            }), window.addEventListener("resize", function() {
                                e.checkIfShouldResize() && (e.isOpen || setTimeout(function() {
                                    e.resizeGraph(), e.getGraphPlacementDimensions(), e.setToGraphPlacementDimensions(), e.clipSize()
                                }, 300), e.isOpen && (e.resizeGraph(), e.$emit("on-full-graph-resize")))
                            }), setTimeout(function() {
                                e.dfeGraph.camFront(), setTimeout(function() {
                                    e.dfeGraph.camUpperRight(2e3)
                                }, 2e3)
                            }, 1e3)
                        })
                    }
                },
                he = Object(d.a)(fe, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        class: ["c-graph js-a-global-consciousness", {
                            "is-open": e.isOpen
                        }, {
                            "is-animated": e.isCanvasLoaded
                        }, {
                            "is-closing": e.isClosing
                        }]
                    }, [n("div", {
                        ref: "graphWrapperElement",
                        staticClass: "c-graph__el-wrapper"
                    }, [n("div", {
                        ref: "graphElement",
                        staticClass: "c-graph__el"
                    }, [n("div", {
                        ref: "graphElementCanvas",
                        staticClass: "c-graph__el-canvas"
                    }, [n("div", {
                        ref: "graph",
                        staticClass: "c-graph__el-canvas-graph"
                    })])])])])
                }, [], !1, null, null, null).exports,
                me = n("98dc"),
                ge = n.n(me),
                ve = n("f0ad"),
                be = function(e, t) {
                    return e.length > t && (e = e.substring(0, t - 3) + "..."), e
                },
                _e = {
                    name: "NnnArticle",
                    filters: {
                        timeAgo: ve.a,
                        truncate: be
                    },
                    props: {
                        article: {
                            required: !0
                        }
                    },
                    computed: {
                        description: function() {
                            return be(this.article.content, 160)
                        }
                    }
                },
                ye = Object(d.a)(_e, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("a", {
                        staticClass: "c-news-card"
                    }, [n("div", {
                        staticClass: "c-news-card__ctn js-a-news"
                    }, [n("div", {
                        staticClass: "c-news-card__heading"
                    }, [n("img", {
                        staticClass: "c-news-card__image",
                        attrs: {
                            src: e.article.thumbnail,
                            alt: "avatar"
                        }
                    }), n("h6", {
                        staticClass: "c-news-card__title"
                    }, [e._v("\n        " + e._s(e.article.title) + "\n      ")])]), n("div", {
                        staticClass: "c-news-card__desc",
                        domProps: {
                            innerHTML: e._s(e.description)
                        }
                    }), n("div", {
                        staticClass: "c-news-card__footer"
                    }, [n("span", {
                        staticClass: "c-news-card__text"
                    }, [e._v(e._s(e._f("timeAgo")(e.article.created_at)))]), n("div", {
                        staticClass: "u-flex-align-center"
                    }, [n("span", {
                        class: ["c-news-card__text", {
                            "u-color-primary": e.article.external_url
                        }]
                    }, [e._v("\n          " + e._s(e.article.source) + "\n        ")])])])])])
                }, [], !1, null, null, null).exports,
                Ce = n("4106"),
                Oe = n.n(Ce),
                we = {
                    name: "NnnPaginate",
                    props: {
                        value: {
                            type: Number
                        },
                        pageCount: {
                            type: Number,
                            required: !0
                        },
                        forcePage: {
                            type: Number
                        },
                        clickHandler: {
                            type: Function,
                            default: function() {}
                        },
                        pageRange: {
                            type: Number,
                            default: 3
                        },
                        marginPages: {
                            type: Number,
                            default: 1
                        },
                        breakViewText: {
                            type: String,
                            default: "…"
                        },
                        containerClass: {
                            type: String
                        },
                        pageClass: {
                            type: String
                        },
                        pageLinkClass: {
                            type: String
                        },
                        prevClass: {
                            type: String
                        },
                        prevLinkClass: {
                            type: String
                        },
                        nextClass: {
                            type: String
                        },
                        nextLinkClass: {
                            type: String
                        },
                        breakViewClass: {
                            type: String
                        },
                        breakViewLinkClass: {
                            type: String
                        },
                        activeClass: {
                            type: String,
                            default: "active"
                        },
                        disabledClass: {
                            type: String,
                            default: "disabled"
                        },
                        firstLastButton: {
                            type: Boolean,
                            default: !1
                        },
                        firstButtonText: {
                            type: String,
                            default: "First"
                        },
                        lastButtonText: {
                            type: String,
                            default: "Last"
                        },
                        hidePrevNext: {
                            type: Boolean,
                            default: !1
                        },
                        formatPagePreview: {
                            type: Function,
                            default: function(e) {
                                return Oe()(e, 2, "0")
                            },
                            required: !1
                        }
                    },
                    beforeUpdate: function() {
                        void 0 !== this.forcePage && this.forcePage !== this.selected && (this.selected = this.forcePage)
                    },
                    computed: {
                        selected: {
                            get: function() {
                                return this.value || this.innerValue
                            },
                            set: function(e) {
                                this.innerValue = e
                            }
                        },
                        pages: function() {
                            var e = this,
                                t = {};
                            if (this.pageCount <= this.pageRange)
                                for (var n = 0; n < this.pageCount; n++) {
                                    var i = {
                                        index: n,
                                        content: n + 1,
                                        selected: n === this.selected - 1
                                    };
                                    t[n] = i
                                } else {
                                    for (var s = Math.floor(this.pageRange / 2), a = function(n) {
                                            var i = {
                                                index: n,
                                                content: n + 1,
                                                selected: n === e.selected - 1
                                            };
                                            t[n] = i
                                        }, r = function(e) {
                                            t[e] = {
                                                disabled: !0,
                                                breakView: !0
                                            }
                                        }, o = 0; o < this.marginPages; o++) a(o);
                                    var l = 0;
                                    this.selected - s > 0 && (l = this.selected - 1 - s);
                                    var c = l + this.pageRange - 1;
                                    c >= this.pageCount && (l = (c = this.pageCount - 1) - this.pageRange + 1);
                                    for (var u = l; u <= c && u <= this.pageCount - 1; u++) a(u);
                                    l > this.marginPages && r(l - 1), c + 1 < this.pageCount - this.marginPages && r(c + 1);
                                    for (var d = this.pageCount - 1; d >= this.pageCount - this.marginPages; d--) a(d)
                                }
                            return t
                        },
                        pageContent: function() {
                            var e = this;
                            return function(t) {
                                return e.formatPagePreview(t)
                            }
                        }
                    },
                    data: function() {
                        return {
                            innerValue: 1
                        }
                    },
                    methods: {
                        handlePageSelected: function(e) {
                            this.selected !== e && (this.innerValue = e, this.$emit("input", e), this.clickHandler(e))
                        },
                        prevPage: function() {
                            this.selected <= 1 || this.handlePageSelected(this.selected - 1)
                        },
                        nextPage: function() {
                            this.selected >= this.pageCount || this.handlePageSelected(this.selected + 1)
                        },
                        firstPageSelected: function() {
                            return 1 === this.selected
                        },
                        lastPageSelected: function() {
                            return this.selected === this.pageCount || 0 === this.pageCount
                        },
                        selectFirstPage: function() {
                            this.selected <= 1 || this.handlePageSelected(1)
                        },
                        selectLastPage: function() {
                            this.selected >= this.pageCount || this.handlePageSelected(this.pageCount)
                        }
                    }
                },
                Ee = Object(d.a)(we, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("ul", {
                        class: e.containerClass
                    }, [e.firstLastButton ? n("li", {
                        class: [e.pageClass, e.firstPageSelected() ? e.disabledClass : ""]
                    }, [n("a", {
                        class: e.pageLinkClass,
                        attrs: {
                            tabindex: e.firstPageSelected() ? -1 : 0
                        },
                        domProps: {
                            innerHTML: e._s(e.firstButtonText)
                        },
                        on: {
                            click: function(t) {
                                return e.selectFirstPage()
                            },
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.selectFirstPage()
                            }
                        }
                    })]) : e._e(), e.firstPageSelected() && e.hidePrevNext ? e._e() : n("li", {
                        class: [e.prevClass, e.firstPageSelected() ? e.disabledClass : ""]
                    }, [n("a", {
                        class: e.prevLinkClass,
                        attrs: {
                            tabindex: e.firstPageSelected() ? -1 : 0
                        },
                        on: {
                            click: function(t) {
                                return e.prevPage()
                            },
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.prevPage()
                            }
                        }
                    }, [n("span", {
                        staticClass: "c-pagination__btn-link-text-prev"
                    }, [e._t("previous-content")], 2), n("span", {
                        staticClass: "c-pagination__btn-link-text-main"
                    }, [e._t("previous-content")], 2)])]), e._l(e.pages, function(t, i) {
                        return n("li", {
                            key: i,
                            class: [e.pageClass, t.selected ? e.activeClass : "", t.disabled ? e.disabledClass : "", t.breakView ? e.breakViewClass : ""]
                        }, [t.breakView ? n("a", {
                            class: [e.pageLinkClass, e.breakViewLinkClass],
                            attrs: {
                                tabindex: "0"
                            }
                        }, [e._t("break-view-content", [e._v(e._s(e.breakViewText))])], 2) : t.disabled ? n("a", {
                            class: e.pageLinkClass,
                            attrs: {
                                tabindex: "0"
                            }
                        }, [e._v(e._s(e.pageContent(t.content)))]) : n("a", {
                            class: e.pageLinkClass,
                            attrs: {
                                tabindex: "0"
                            },
                            on: {
                                click: function(n) {
                                    return e.handlePageSelected(t.index + 1)
                                },
                                keyup: function(n) {
                                    return !n.type.indexOf("key") && e._k(n.keyCode, "enter", 13, n.key, "Enter") ? null : e.handlePageSelected(t.index + 1)
                                }
                            }
                        }, [n("span", {
                            staticClass: "c-pagination__btn-link-text-prev"
                        }, [e._v("\n        " + e._s(e.pageContent(t.content)) + "\n      ")]), n("span", {
                            staticClass: "c-pagination__btn-link-text-main"
                        }, [e._v("\n        " + e._s(e.pageContent(t.content)) + "\n      ")])])])
                    }), e.lastPageSelected() && e.hidePrevNext ? e._e() : n("li", {
                        class: [e.nextClass, e.lastPageSelected() ? e.disabledClass : ""]
                    }, [n("a", {
                        class: e.nextLinkClass,
                        attrs: {
                            tabindex: e.lastPageSelected() ? -1 : 0
                        },
                        on: {
                            click: function(t) {
                                return e.nextPage()
                            },
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.nextPage()
                            }
                        }
                    }, [n("span", {
                        staticClass: "c-pagination__btn-link-text-prev"
                    }, [e._t("next-content")], 2), n("span", {
                        staticClass: "c-pagination__btn-link-text-main"
                    }, [e._t("next-content")], 2)])]), e.firstLastButton ? n("li", {
                        class: [e.pageClass, e.lastPageSelected() ? e.disabledClass : ""]
                    }, [n("a", {
                        class: e.pageLinkClass,
                        attrs: {
                            tabindex: e.lastPageSelected() ? -1 : 0
                        },
                        domProps: {
                            innerHTML: e._s(e.lastButtonText)
                        },
                        on: {
                            click: function(t) {
                                return e.selectLastPage()
                            },
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.selectLastPage()
                            }
                        }
                    })]) : e._e()], 2)
                }, [], !1, null, null, null).exports,
                Pe = {
                    name: "NnnSlider",
                    props: {
                        items: {
                            type: Array,
                            required: !0,
                            default: function() {
                                return []
                            }
                        },
                        type: {
                            type: String,
                            default: "item"
                        }
                    },
                    data: function() {
                        return {
                            currentlyActiveIndex: 0
                        }
                    },
                    methods: {
                        scrollTo: function(e) {
                            this.$refs.slidesElement.scrollBy({
                                top: 0,
                                left: this.$refs.slidesElement.clientWidth * (e - this.currentlyActiveIndex),
                                behavior: "smooth"
                            })
                        }
                    },
                    mounted: function() {
                        var e = this;
                        this.$refs.slidesElement.addEventListener("scroll", function(t) {
                            e.currentlyActiveIndex = Math.floor(t.target.scrollLeft / e.$refs.slidesElement.clientWidth)
                        })
                    }
                },
                De = Object(d.a)(Pe, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "c-slider"
                    }, [n("div", {
                        ref: "slidesElement",
                        staticClass: "c-slider__slides"
                    }, e._l(e.items, function(t) {
                        return n("div", {
                            key: t.id,
                            staticClass: "c-slider__slide"
                        }, [e._t("item-" + t.id)], 2)
                    }), 0), n("div", {
                        staticClass: "c-slider__dots"
                    }, e._l(e.items, function(t, i) {
                        return n("div", {
                            key: "dot-" + t.id,
                            class: ["c-slider__dots-item dot", {
                                "is-current": e.currentlyActiveIndex === i
                            }],
                            on: {
                                click: function(t) {
                                    return e.scrollTo(i)
                                }
                            }
                        }, [n("span")])
                    }), 0)])
                }, [], !1, null, null, null).exports,
                je = n("f320"),
                xe = n("ac3b");

            function Te(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, i)
                }
                return n
            }

            function Se(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Te(n, !0).forEach(function(t) {
                        Object(a.a)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Te(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var Ae = {
                    name: "DashboardComponent",
                    components: {
                        NnnTransition: L.a,
                        NnnButton: C.a,
                        NnnArticle: ye,
                        NnnVideoCard: B,
                        NnnPaginate: Ee,
                        NnnSlider: De,
                        SimpleDialog: je.a,
                        ArrowRightIcon: x,
                        ArrowLeftIcon: xe.a,
                        NnnVideoDialog: J
                    },
                    data: function() {
                        return {
                            showDialog: !1,
                            currentArticle: null,
                            videosPerPage: E.m,
                            articleAnimation: {
                                type: "dashboard-in"
                            },
                            currentVideo: null
                        }
                    },
                    computed: Se({}, Object(r.c)({
                        articles: "articles",
                        articlesMeta: "articlesMeta",
                        videos: "dashboardVideos",
                        videosMeta: "dashboardVideosMeta"
                    }), {
                        extendedVideosList: function() {
                            return [].concat(Object(s.a)(this.videos), Object(s.a)(Array.from({
                                length: E.m - this.videos.length
                            }).map(function() {
                                return {
                                    id: ge()(),
                                    isPlaceholder: !0
                                }
                            })))
                        },
                        extendedArticlesList: function() {
                            return [].concat(Object(s.a)(this.articles), Object(s.a)(Array.from({
                                length: E.l - this.articles.length
                            }).map(function() {
                                return {
                                    id: ge()(),
                                    isPlaceholder: !0
                                }
                            })))
                        }
                    }),
                    methods: Se({}, Object(r.b)({
                        setContent: "setAccountContent",
                        fetchArticles: "fetchArticles",
                        fetchVideos: "fetchVideos"
                    }), {
                        goToVideoSubmissions: function() {
                            this.setContent({
                                content: E.Y
                            })
                        },
                        goToGlobalConsciousness: function() {
                            this.setContent({
                                content: E.t
                            })
                        },
                        goToNewsAndAnnouncements: function() {
                            this.setContent({
                                content: E.L
                            })
                        },
                        fetchFreshArticles: function(e) {
                            this.fetchArticles({
                                page: e,
                                perPage: E.l
                            })
                        },
                        toggleDialogVisibility: function() {
                            this.showDialog = !this.showDialog
                        },
                        openArticle: function(e) {
                            if (this.currentArticle = e, e.external_url) return window.open(e.external_url, "__blank");
                            this.toggleDialogVisibility()
                        },
                        fetchDashboardVideos: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                            this.fetchVideos({
                                page: e,
                                perPage: this.videosPerPage,
                                isDashboard: !0
                            })
                        },
                        openVideoDialog: function(e) {
                            this.currentVideo = e, this.$refs.videoDialog.play(e, W.a.VIDEO_ANIMATION_DURATION)
                        },
                        fitThumbnailToFullScreen: function() {
                            this.$refs.videoDialog && this.$refs.videoDialog.fitThumbnailToFullScreen()
                        },
                        onVideoStarted: function() {
                            this.$audio.pause()
                        },
                        onVideoStopped: function() {
                            var e = this;
                            setTimeout(function() {
                                e.$audio.play(e.$appConfig.activeAmbientAudio, !0)
                            }, 1e3)
                        },
                        startNextVideo: function() {
                            var e = Object(ee.b)(this.videos, this.currentVideo);
                            this.currentVideo = this.videos[e], this.$refs.videoDialog.play(this.currentVideo, 0)
                        },
                        startPreviousVideo: function() {
                            var e = Object(ee.c)(this.videos, this.currentVideo);
                            this.currentVideo = this.videos[e], this.$refs.videoDialog.play(this.currentVideo, 0)
                        },
                        animateTextOnHover: function(e) {
                            Object(te.d)(this.$refs["video_".concat(e.id)][0].$el)
                        }
                    }),
                    mounted: function() {
                        !this.articles.length && this.fetchArticles(1), !this.videos.length && this.fetchDashboardVideos()
                    }
                },
                ke = Object(d.a)(Ae, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "c-account-wrapper-ctn c-account-wrapper-ctn--hide-heading-on-desk"
                    }, [n("div", {
                        staticClass: "c-account-wrapper-ctn__main js-a-graph-full-height"
                    }, [n("div", {
                        staticClass: "l-dashboard"
                    }, [n("div", {
                        staticClass: "l-dashboard__aside l-videos"
                    }, [n("div", {
                        staticClass: "c-dash-subsection"
                    }, [n("h6", {
                        staticClass: "c-dash-subsection__heading"
                    }, [n("div", {
                        staticClass: "c-dash-subsection__heading-title js-a-heading-title"
                    }, [e._v("\n              RECENT VIDEO SUBMISSIONS\n            ")]), n("div", {
                        staticClass: "c-dash-subsection__heading-action js-a-heading-action"
                    }, [n("nnn-button", {
                        attrs: {
                            variation: "clear",
                            "font-size": "inherit",
                            color: "primary",
                            animate: !0
                        },
                        on: {
                            click: e.goToVideoSubmissions
                        }
                    }, [e._v("\n                VIEW ALL\n              ")])], 1)]), n("div", {
                        staticClass: "c-dash-subsection__ctn js-a-subsection"
                    }, [n("div", {
                        staticClass: "c-mobile-visible"
                    }, [n("nnn-slider", {
                        attrs: {
                            items: e.videos,
                            type: "video"
                        }
                    }, e._l(e.videos, function(t) {
                        return n("nnn-video-card", {
                            key: t.id,
                            staticClass: "c-video-thumb--submission c-video-thumb--mb-none",
                            attrs: {
                                slot: "item-" + t.id,
                                video: t
                            },
                            nativeOn: {
                                click: function(n) {
                                    return e.openVideoDialog(t)
                                },
                                mouseenter: function(t) {
                                    return e.fitThumbnailToFullScreen(t)
                                },
                                mousedown: function(t) {
                                    return e.fitThumbnailToFullScreen(t)
                                }
                            },
                            slot: "item-" + t.id
                        }, [n("template", {
                            slot: "video-description"
                        }, [n("div", {
                            staticClass: "c-thumb-desc"
                        }, [n("p", {
                            staticClass: "c-thumb-desc__text"
                        }, [e._v("SUBMITTED: 1H AGO")]), n("p", {
                            staticClass: "c-thumb-desc__text"
                        }, [e._v("DURATION: 1:15")]), n("p", {
                            staticClass: "c-thumb-desc__text"
                        }, [e._v("TRIAL LEVEL: 2")])])])], 2)
                    }), 1)], 1), n("ul", {
                        staticClass: "c-recent-videos c-desktop-visible"
                    }, e._l(e.extendedVideosList, function(t) {
                        return n("transition", {
                            key: t.id + "-wrapper",
                            attrs: {
                                mode: "out-in",
                                name: "vt-fade-slide-horizontal-left"
                            }
                        }, [n("li", {
                            key: t.id,
                            staticClass: "c-recent-videos__item"
                        }, [t.isPlaceholder ? n("div", {
                            staticClass: "c-video-thumb u-cursor-pointer c-video-thumb--submission c-video-thumb--mb-none js-a-recent-video"
                        }) : n("nnn-video-card", {
                            ref: "video_" + t.id,
                            refInFor: !0,
                            staticClass: "c-video-thumb--submission c-video-thumb--mb-none js-a-recent-video",
                            attrs: {
                                video: t
                            },
                            nativeOn: {
                                click: function(n) {
                                    return e.openVideoDialog(t)
                                },
                                mouseenter: function(n) {
                                    return e.animateTextOnHover(t), void e.fitThumbnailToFullScreen()
                                },
                                mousedown: function(t) {
                                    return e.fitThumbnailToFullScreen(t)
                                }
                            }
                        }, [n("template", {
                            slot: "video-description"
                        }, [n("div", {
                            staticClass: "c-thumb-desc c-thumb-desc--dash-desk"
                        }, [n("p", {
                            staticClass: "c-thumb-desc__text"
                        }, [e._v("SUBMITTED: 1H AGO")]), n("p", {
                            staticClass: "c-thumb-desc__text"
                        }, [e._v("DURATION: 1:15")]), n("p", {
                            staticClass: "c-thumb-desc__text"
                        }, [e._v("TRIAL LEVEL: 2")])])])], 2)], 1)])
                    }), 1)])]), n("div", {
                        staticClass: "c-pagination-wrapper c-desktop-visible js-a-pagination"
                    }, [n("nnn-paginate", {
                        attrs: {
                            value: e.videosMeta.page,
                            "page-count": e.videosMeta.lastPage,
                            "page-range": 3,
                            "margin-pages": 0,
                            "page-class": "c-pagination__btn",
                            "page-link-class": "c-pagination__btn-link",
                            "next-class": "c-pagination__btn",
                            "next-link-class": "c-pagination__btn-link c-pagination__btn-link--arrow-next",
                            "prev-class": "c-pagination__btn",
                            "prev-link-class": "c-pagination__btn-link c-pagination__btn-link--arrow-prev",
                            "container-class": "c-pagination",
                            "click-handler": e.fetchDashboardVideos
                        }
                    }, [n("template", {
                        slot: "break-view-content"
                    }), n("template", {
                        slot: "previous-content"
                    }, [n("arrow-left-icon", {
                        attrs: {
                            fill: "currentColor",
                            width: "14",
                            height: "13"
                        }
                    })], 1), n("template", {
                        slot: "next-content"
                    }, [n("arrow-right-icon", {
                        attrs: {
                            fill: "currentColor",
                            width: "14",
                            height: "13"
                        }
                    })], 1)], 2)], 1)]), n("div", {
                        staticClass: "l-dashboard__main"
                    }, [n("div", {
                        staticClass: "c-dash-subsection"
                    }, [n("h6", {
                        staticClass: "c-dash-subsection__heading"
                    }, [n("div", {
                        staticClass: "c-dash-subsection__heading-title js-a-heading-title"
                    }, [e._v("\n              GLOBAL CONSCIOUSNESS\n            ")]), n("div", {
                        staticClass: "c-dash-subsection__heading-action js-a-heading-action"
                    }, [n("nnn-button", {
                        attrs: {
                            variation: "clear",
                            "font-size": "inherit",
                            color: "primary",
                            animate: !0
                        },
                        on: {
                            click: e.goToGlobalConsciousness
                        }
                    }, [e._v("\n                MORE DETAILS\n              ")])], 1)]), n("div", {
                        staticClass: "c-dash-subsection__ctn"
                    }, [n("div", {
                        staticClass: "c-dash-main js-a-graph-placement-el",
                        on: {
                            click: e.goToGlobalConsciousness
                        }
                    }, [e._m(0)])])])]), n("div", {
                        staticClass: "l-dashboard__aside l-news"
                    }, [n("nnn-transition", {
                        attrs: {
                            name: "vt-fade"
                        }
                    }, [e.showDialog ? n("simple-dialog", {
                        attrs: {
                            article: e.currentArticle
                        },
                        on: {
                            close: e.toggleDialogVisibility
                        }
                    }) : e._e()], 1), n("div", {
                        staticClass: "c-dash-subsection"
                    }, [n("h6", {
                        staticClass: "c-dash-subsection__heading"
                    }, [n("div", {
                        staticClass: "c-dash-subsection__heading-title js-a-heading-title"
                    }, [e._v("\n              NEWS AND ANNOUNCEMENTS\n            ")]), n("div", {
                        staticClass: "c-dash-subsection__heading-action js-a-heading-action c-mobile-visible"
                    }, [n("nnn-button", {
                        attrs: {
                            variation: "clear",
                            "font-size": "inherit",
                            color: "primary",
                            animate: !0
                        },
                        on: {
                            click: e.goToNewsAndAnnouncements
                        }
                    }, [e._v("\n                VIEW ALL\n              ")])], 1)]), n("div", {
                        staticClass: "c-dash-subsection__ctn js-a-subsection"
                    }, [n("div", {
                        staticClass: "c-mobile-visible"
                    }, [n("nnn-slider", {
                        attrs: {
                            items: e.articles,
                            type: "article"
                        }
                    }, e._l(e.articles, function(t) {
                        return n("nnn-article", {
                            key: t.id,
                            staticClass: "c-news-card--dash-mobile",
                            attrs: {
                                slot: "item-" + t.id,
                                article: t
                            },
                            nativeOn: {
                                click: function(n) {
                                    return e.openArticle(t)
                                }
                            },
                            slot: "item-" + t.id
                        })
                    }), 1)], 1), n("div", {
                        staticClass: "u-display-flex u-flex-1-1-auto c-desktop-visible"
                    }, [n("div", {
                        staticClass: "c-news-wrapper js-a-news-wrapper"
                    }, e._l(e.extendedArticlesList, function(t) {
                        return n("transition", {
                            key: "article-" + t.id + "-wrapper",
                            attrs: {
                                mode: "out-in",
                                name: "vt-fade-slide-horizontal-right"
                            }
                        }, [t.isPlaceholder ? n("div") : n("nnn-article", {
                            key: "article-" + t.id,
                            staticClass: "c-news-card--dash-desk",
                            attrs: {
                                article: t
                            },
                            nativeOn: {
                                click: function(n) {
                                    return e.openArticle(t)
                                }
                            }
                        })], 1)
                    }), 1)])])]), n("div", {
                        staticClass: "c-pagination-wrapper c-desktop-visible js-a-pagination"
                    }, [n("nnn-paginate", {
                        attrs: {
                            "page-count": e.articlesMeta.lastPage,
                            "page-range": e.articlesMeta.perPage,
                            "margin-pages": 0,
                            "page-class": "c-pagination__btn",
                            "page-link-class": "c-pagination__btn-link",
                            "next-class": "c-pagination__btn",
                            "next-link-class": "c-pagination__btn-link c-pagination__btn-link--arrow-next",
                            "prev-class": "c-pagination__btn",
                            "prev-link-class": "c-pagination__btn-link c-pagination__btn-link--arrow-prev",
                            "container-class": "c-pagination",
                            "click-handler": e.fetchFreshArticles
                        }
                    }, [n("template", {
                        slot: "break-view-content"
                    }), n("template", {
                        slot: "previous-content"
                    }, [n("arrow-left-icon", {
                        attrs: {
                            fill: "currentColor",
                            width: "14",
                            height: "13"
                        }
                    })], 1), n("template", {
                        slot: "next-content"
                    }, [n("arrow-right-icon", {
                        attrs: {
                            fill: "currentColor",
                            width: "14",
                            height: "13"
                        }
                    })], 1)], 2)], 1)], 1), n("nnn-video-dialog", {
                        ref: "videoDialog",
                        on: {
                            start: e.onVideoStarted,
                            stop: e.onVideoStopped,
                            next: e.startNextVideo,
                            previous: e.startPreviousVideo
                        }
                    })], 1)])])
                }, [function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "c-dash-main__ctn u-position-relative u-display-flex u-flex-direction-column"
                    }, [n("div", {
                        staticClass: "c-thumb-desc c-thumb-desc--dash-desk js-a-graph-desc"
                    }, [n("p", {
                        staticClass: "c-thumb-desc__text"
                    }, [e._v("SUBMITTED: 1H AGO")]), n("p", {
                        staticClass: "c-thumb-desc__text"
                    }, [e._v("DURATION: 1:15")]), n("p", {
                        staticClass: "c-thumb-desc__text"
                    }, [e._v("TRIAL LEVEL: 2")])])])
                }], !1, null, null, null).exports;

            function Le(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, i)
                }
                return n
            }
            var Ne = {
                    name: "NewsComponent",
                    components: {
                        NnnArticle: ye,
                        NnnTransition: L.a,
                        NnnSimpleDialog: je.a
                    },
                    directives: {
                        infiniteScroll: F.a
                    },
                    data: function() {
                        return {
                            articles: [],
                            currentArticle: null,
                            page: 0,
                            perPage: 20,
                            total: 0
                        }
                    },
                    methods: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Le(n, !0).forEach(function(t) {
                                Object(a.a)(e, t, n[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Le(n).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            })
                        }
                        return e
                    }({}, Object(r.b)({
                        fetchArticles: "fetchArticles"
                    }), {
                        fetchNewArticles: function() {
                            var e = Object(i.a)(regeneratorRuntime.mark(function e(t) {
                                var n;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(this.articles.length && this.articles.length >= this.total)) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return e.next = 4, this.fetchArticles({
                                                page: t,
                                                perPage: 20,
                                                store: !1
                                            });
                                        case 4:
                                            n = e.sent, this.articles = [].concat(Object(s.a)(this.articles), Object(s.a)(n.data)), this.page = t, this.total = n.total;
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        closeDialog: function() {
                            this.currentArticle = null
                        },
                        openArticle: function(e) {
                            if (this.currentArticle = e, e.external_url) return window.open(e.external_url, "__blank")
                        }
                    })
                },
                $e = Object(d.a)(Ne, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "c-news c-mobile-visible"
                    }, [n("div", {
                        staticClass: "c-news__ctn"
                    }, [n("section", {
                        directives: [{
                            name: "infinite-scroll",
                            rawName: "v-infinite-scroll",
                            value: function() {
                                return e.fetchNewArticles(++e.page)
                            },
                            expression: "() => fetchNewArticles(++page)"
                        }],
                        staticClass: "c-news-wrapper c-news-wrapper--mobile js-a-news-wrapper-mobile",
                        attrs: {
                            "infinite-scroll-disabled": "busy",
                            "infinite-scroll-distance": "10"
                        }
                    }, e._l(e.articles, function(t, i) {
                        return n("nnn-article", {
                            key: t.id + "-" + i,
                            attrs: {
                                slot: "item-" + t.id,
                                article: t
                            },
                            nativeOn: {
                                click: function(n) {
                                    return e.openArticle(t)
                                }
                            },
                            slot: "item-" + t.id
                        })
                    }), 1)]), n("nnn-transition", {
                        attrs: {
                            name: "vt-fade"
                        }
                    }, [e.currentArticle ? n("nnn-simple-dialog", {
                        attrs: {
                            article: e.currentArticle
                        },
                        on: {
                            close: e.closeDialog
                        }
                    }) : e._e()], 1)], 1)
                }, [], !1, null, null, null).exports,
                Ve = {
                    name: "NnnLevel",
                    props: {
                        level: {
                            type: Number,
                            required: !1,
                            default: 0
                        }
                    },
                    data: function() {
                        return {
                            translateX: 0,
                            size: 4,
                            frameRate: 30
                        }
                    },
                    computed: {
                        levelAsset: function() {
                            var e = E.x[this.level];
                            return n("74b3")("./".concat(e))
                        }
                    },
                    methods: {
                        getSize: function() {
                            var e = getComputedStyle(document.documentElement);
                            this.size = e.getPropertyValue("--level-icon-size")
                        },
                        animateLevel: function() {
                            var e = this;
                            setTimeout(function() {
                                e.$refs.level && (requestAnimationFrame(e.animateLevel), e.translateX < 119 * -e.size && (e.translateX = 0), e.$refs.level.style.transform = "translate3d(".concat(e.translateX, "rem, 0, 0)"), e.translateX -= e.size)
                            }, 1e3 / this.frameRate)
                        }
                    },
                    mounted: function() {
                        this.getSize(), this.requestAnimationFrameId = requestAnimationFrame(this.animateLevel)
                    },
                    beforeDestroy: function() {
                        this.requestAnimationFrameId && cancelAnimationFrame(this.requestAnimationFrameId)
                    }
                },
                Ie = Object(d.a)(Ve, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "c-level"
                    }, [n("picture", [n("img", {
                        ref: "level",
                        attrs: {
                            src: e.levelAsset,
                            alt: "level"
                        }
                    })])])
                }, [], !1, null, null, null).exports,
                Me = n("96ce");

            function Fe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, i)
                }
                return n
            }

            function Re(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Fe(n, !0).forEach(function(t) {
                        Object(a.a)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fe(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var Be = {
                    components: {
                        NnnBaseLayout: Me.a,
                        NnnButton: C.a
                    },
                    computed: Re({}, Object(r.c)(["temporaryEmail", "profileData"])),
                    methods: Re({}, Object(r.b)(["changeEmail"]), {
                        sendEmailAgain: function() {
                            this.changeEmail({
                                username: this.profileData.username,
                                email: this.temporaryEmail
                            })
                        }
                    })
                },
                Ge = Object(d.a)(Be, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("nnn-base-layout", {
                        staticClass: "c-responsive-padding"
                    }, [n("div", {
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
                    }, [n("div", {
                        staticClass: "c-form-header c-form-header--lighter"
                    }, [n("h2", {
                        staticClass: "c-form-header__title"
                    }, [e._v("CONFIRM YOUR EMAIL ADDRESS")]), n("p", {
                        staticClass: "c-form-header__desc c-h6"
                    }, [e._v("\n        PLEASE CHECK YOUR INBOX FOR A CONFIRMATION EMAIL\n      ")]), n("p", {
                        staticClass: "c-form-header__desc c-h6"
                    }, [e._v("\n        DIDN'T RECEIVE THE EMAIL? \n        "), n("nnn-button", {
                        attrs: {
                            color: "primary",
                            "font-size": "inherit"
                        },
                        on: {
                            click: e.sendEmailAgain
                        }
                    }, [e._v("SEND IT AGAIN")])], 1)])])])
                }, [], !1, null, null, null).exports;

            function ze(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, i)
                }
                return n
            }

            function He(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ze(n, !0).forEach(function(t) {
                        Object(a.a)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ze(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var Ye = {
                    components: {
                        NnnBaseLayout: Me.a,
                        NnnButton: C.a
                    },
                    computed: He({}, Object(r.c)({
                        error: "authError",
                        profile: "profileData"
                    }), {
                        title: function() {
                            return this.error ? "YOUR EMAIL ADDRESS CHANGE HAS FAILED" : "YOUR EMAIL HAS BEEN CHANGED SUCCESSFULLY"
                        },
                        subtitle: function() {
                            return this.error ? "VERIFICATION CODE INVALID" : "NEXT TIME YOU LOG IN USE YOUR NEW EMAIL ".concat(this.profile.email)
                        }
                    }),
                    methods: He({}, Object(r.b)({
                        setContent: "setAccountContent",
                        getProfileData: "getProfileData"
                    }), {
                        goBack: function() {
                            this.setContent({
                                content: E.j
                            })
                        }
                    }),
                    created: function() {
                        this.getProfileData()
                    }
                },
                qe = Object(d.a)(Ye, function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("nnn-base-layout", {
                        staticClass: "c-responsive-padding"
                    }, [n("div", {
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
                    }, [n("div", {
                        staticClass: "c-form-header c-form-header--lighter"
                    }, [n("h2", {
                        staticClass: "c-form-header__title"
                    }, [e._v(e._s(e.title))]), n("p", {
                        staticClass: "c-form-header__desc c-h6"
                    }, [e._v(e._s(e.subtitle))]), n("nnn-button", {
                        attrs: {
                            "font-size": "lg",
                            color: "primary"
                        },
                        on: {
                            click: e.goBack
                        }
                    }, [e._v("GO BACK")])], 1)])])
                }, [], !1, null, null, null).exports;

            function Ue(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, i)
                }
                return n
            }

            function We(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ue(n, !0).forEach(function(t) {
                        Object(a.a)(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ue(n).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            var Xe = {
                    name: "AccountWraperPage",
                    mixins: [o.a],
                    components: {
                        NnnLevel: Ie,
                        NnnTrialProgress: h,
                        MyProfileComponent: I,
                        VideoSubmissionsComponent: de,
                        GlobalConsciousnessComponent: he,
                        DashboardComponent: ke,
                        NewsComponent: $e,
                        NnnMedia: m.a,
                        ConfirmYourEmailComponent: Ge,
                        EmailChangedComponent: qe
                    },
                    data: function() {
                        return {
                            globalFull: !1,
                            isClosingGraph: !1
                        }
                    },
                    computed: We({}, Object(r.c)({
                        currentContent: "content",
                        profileData: "profileData",
                        isLoadedProfile: "isLoadedProfile",
                        nextContent: "nextContent"
                    }), {
                        firstName: function() {
                            return (this.profileData.firstName || "").toUpperCase()
                        },
                        videoTrials: function() {
                            if (!this.profileData.videoTrials) return [];
                            var e = this.profileData.trialLevel,
                                t = E.X[e].videos,
                                n = (this.profileData.videoTrials[e] || []).slice(0, t);
                            return [].concat(Object(s.a)(n), Object(s.a)(Array.from({
                                length: t - n.length
                            }).map(function() {
                                return {
                                    status: E.p
                                }
                            })))
                        },
                        isDashboardOrGlobalConsciousnessActive: function() {
                            return [E.t, E.j].indexOf(this.currentContent) > -1
                        }
                    }),
                    watch: {
                        nextContent: function(e, t) {
                            var n = this;
                            if (this.$ga.page({
                                    page: "/home",
                                    title: E.N[e] || "",
                                    location: window.location.href
                                }), e) {
                                if (t === E.Y && (this.defaultPageAnimationTimeline = Object(te.c)(".js-a-video-grid")), t !== E.I || [E.K, E.J].includes(e) || (this.defaultPageAnimationTimeline = Object(te.c)(".js-a-profile-details")), t === E.L && (this.defaultPageAnimationTimeline = Object(te.c)(".js-a-news-wrapper-mobile")), e === E.I && setTimeout(function() {
                                        n.defaultPageAnimationTimeline = Object(te.b)(".js-a-profile-details"), document.querySelector(".js-a-profile-details").classList.remove("js-a-profile-details--initial")
                                    }, 20 + E.M[t]), e === E.L && setTimeout(function() {
                                        n.defaultPageAnimationTimeline = Object(te.b)(".js-a-news-wrapper-mobile"), document.querySelector(".js-a-profile-details").classList.remove("js-a-profile-details--initial")
                                    }, 20 + E.M[t]), this.globalFull = !1, this.isClosingGraph = !1, Object(X.d)() && document.documentElement.classList.remove("c-global-cons-active"), t === E.t && e === E.j) return this.$refs.globalConsciousness.resizeGraph(), this.$refs.globalConsciousness.getGraphPlacementDimensions(), this.$refs.globalConsciousness.setToGraphPlacementDimensions(), void this.$nextTick(function() {
                                    n.$refs.globalConsciousness.clipSize(), n.animateGlobalConsToDashboardPage(), n.animateGraphToDashboard(), window.scrollTo(0, n.pageYOffset)
                                });
                                if (t === E.t && (this.defaultPageAnimationTimeline = Object(te.c)(".js-a-global-consciousness")), e !== E.j) return t === E.j && e === E.t ? (this.$refs.globalConsciousness.resizeGraph(), this.$refs.globalConsciousness.getGraphPlacementDimensions(), this.$refs.globalConsciousness.setToGraphPlacementDimensions(), this.pageYOffset = window.pageYOffset, this.dashboardToGlobalTimeline = Object(te.a)(), this.dashboardToGlobalTimeline.play(), this.graphTimeline = this.$refs.globalConsciousness.animateGraphToFullScreen(), this.graphTimeline.play(), window.scrollTo(0, 0), this.graphTimeline.finished.then(function() {
                                    n.globalFull = !0, Object(X.d)() && document.documentElement.classList.add("c-global-cons-active")
                                }), void setTimeout(function() {
                                    n.$refs.globalConsciousness.removeClippedSize()
                                }, 1e3)) : e === E.t ? (this.dashboardToGlobalTimeline = Object(te.a)(), this.dashboardToGlobalTimeline.seek(this.dashboardToGlobalTimeline.duration), this.dashboardToGlobalTimeline.play(), void setTimeout(function() {
                                    n.graphTimeline = n.$refs.globalConsciousness.animateGraphToFullScreen(), n.graphTimeline.seek(n.graphTimeline.duration - .99), n.graphTimeline.play(), n.globalFull = !0, n.$refs.globalConsciousness.removeClippedSize(), Object(X.d)() && document.documentElement.classList.add("c-global-cons-active")
                                }, 700 + E.M[t] || 0)) : t !== E.j || e !== E.Y && e !== E.I && e !== E.L ? void 0 : (this.animateDashboardToSubmissions(), void(this.isClosingGraph = !0));
                                setTimeout(function() {
                                    n.initDashboardDefaultAnimation(), n.$refs.globalConsciousness.clipSize()
                                }, 500 + E.M[t])
                            }
                        }
                    },
                    methods: We({}, Object(r.b)({
                        setAccountContent: "setAccountContent",
                        logoutUser: "logout",
                        getProfile: "getProfileData"
                    }), {
                        showEditProfileSection: function() {
                            this.setAccountContent({
                                content: E.I
                            })
                        },
                        logout: function() {
                            var e = Object(i.a)(regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.logoutUser();
                                        case 2:
                                            this.$router.push({
                                                name: E.w
                                            });
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        animateDashboardToSubmissions: function() {
                            this.dashboardDefaultTimeline && (this.dashboardDefaultTimeline = Object(te.e)(500), this.dashboardDefaultTimeline.seek(this.dashboardDefaultTimeline.duration), this.dashboardDefaultTimeline.reverse(), this.dashboardDefaultTimeline.completed = !1, this.dashboardDefaultTimeline.play())
                        },
                        animateGlobalConsToDashboardPage: function() {
                            this.dashboardToGlobalTimeline && (this.dashboardToGlobalTimeline = Object(te.a)(), this.dashboardToGlobalTimeline.play(), this.dashboardToGlobalTimeline.seek(this.dashboardToGlobalTimeline.duration), this.dashboardToGlobalTimeline.reverse(), this.dashboardToGlobalTimeline.completed = !1, this.dashboardToGlobalTimeline.play())
                        },
                        animateGraphToDashboard: function() {
                            this.graphTimeline && this.$refs.globalConsciousness && (this.graphTimeline = this.$refs.globalConsciousness.animateGraphToFullScreen(), this.graphTimeline.seek(this.graphTimeline.duration - .999), this.graphTimeline.play(), this.graphTimeline.reverse())
                        },
                        initDashboardDefaultAnimation: function() {
                            this.dashboardDefaultTimeline = Object(te.e)(), this.dashboardDefaultTimeline.completed = !1, this.dashboardDefaultTimeline.play()
                        },
                        onFullGraphResize: function() {
                            this.$refs.globalConsciousness.getGraphPlacementDimensions(), this.$refs.globalConsciousness.setToGraphPlacementDimensions(), this.graphTimeline = this.$refs.globalConsciousness.animateGraphToFullScreen(), this.graphTimeline.seek(this.graphTimeline.duration - .999), this.graphTimeline.play()
                        }
                    }),
                    created: function() {
                        this.isLoadedProfile || this.getProfile(), this.DASHBOARD = E.j, this.NEWS = E.L, this.VIDEO_SUBMISSIONS = E.Y, this.GLOBAL_CONSCIOUSNESS = E.t, this.MY_PROFILE = E.I, this.MY_PROFILE_CHANGE_PASSWORD = E.K, this.MY_PROFILE_CHANGE_EMAIL = E.J, this.CONFIRM_YOUR_EMAIL = E.i, this.EMAIL_CHANGED = E.o, this.mediaButtons = [{
                            title: "EDIT PROFILE",
                            click: this.showEditProfileSection
                        }, {
                            title: "LOGOUT",
                            click: this.logout
                        }]
                    },
                    mounted: function() {
                        var e = this;
                        setTimeout(function() {
                            e.initDashboardDefaultAnimation()
                        }, 500)
                    }
                },
                Ke = Object(d.a)(Xe, function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "c-account-wrapper js-a-graph-wrapper-top"
                    }, [i("section", {
                        class: ["c-account-details", {
                            "c-desktop-visible": e.currentContent === e.VIDEO_SUBMISSIONS || e.currentContent === e.MY_PROFILE || e.currentContent === e.NEWS
                        }]
                    }, [i("div", {
                        staticClass: "c-account-details__ctn js-a-graph-full-width"
                    }, [i("div", {
                        staticClass: "c-dash-user-media"
                    }, [e.isLoadedProfile ? i("nnn-media", {
                        attrs: {
                            "img-source": n("4d41"),
                            title: "WELCOME BACK, " + e.firstName,
                            mediaButtons: e.mediaButtons,
                            "display-gear-icon": !0
                        }
                    }) : e._e()], 1), i("div", {
                        staticClass: "c-account-details__item"
                    }, [i("span", {
                        staticClass: "c-account-details__item-text"
                    }, [e._v("TRIAL LEVEL " + e._s(e.profileData.trialLevel))]), i("nnn-level", {
                        staticClass: "c-level--responsive",
                        attrs: {
                            level: e.profileData.trialLevel
                        }
                    })], 1), i("div", {
                        staticClass: "c-account-details__item"
                    }, [i("span", {
                        staticClass: "c-account-details__item-text"
                    }, [e._v("TRIAL PROGRESS")]), e._l(e.videoTrials, function(e, t) {
                        return i("nnn-trial-progress", {
                            key: e.id,
                            attrs: {
                                taskNumber: t + 1,
                                status: e.status
                            }
                        })
                    })], 2)])]), e.isDashboardOrGlobalConsciousnessActive ? i("global-consciousness-component", {
                        ref: "globalConsciousness",
                        attrs: {
                            "is-open": e.globalFull,
                            "is-closing": e.isClosingGraph
                        },
                        on: {
                            "on-full-graph-resize": e.onFullGraphResize
                        }
                    }) : e._e(), e.isDashboardOrGlobalConsciousnessActive ? i("dashboard-component", {
                        ref: "dashboardComponent",
                        class: {
                            "u-hide": e.currentContent !== e.DASHBOARD
                        }
                    }) : e._e(), e.currentContent === e.VIDEO_SUBMISSIONS ? i("video-submissions-component") : e._e(), [e.MY_PROFILE, e.MY_PROFILE_CHANGE_PASSWORD, e.MY_PROFILE_CHANGE_EMAIL].includes(e.currentContent) ? i("my-profile-component", {
                        ref: "myProfile"
                    }) : e._e(), e.currentContent === e.CONFIRM_YOUR_EMAIL ? i("confirm-your-email-component") : e._e(), e.currentContent === e.EMAIL_CHANGED ? i("email-changed-component") : e._e(), e.currentContent === e.NEWS ? i("news-component") : e._e()], 1)
                }, [], !1, null, null, null);
            t.default = Ke.exports
        },
        4106: function(e, t, n) {
            var i = n("4aad"),
                s = n("6751"),
                a = n("4b17"),
                r = n("76dd");
            e.exports = function(e, t, n) {
                e = r(e);
                var o = (t = a(t)) ? s(e) : 0;
                return t && o < t ? i(t - o, n) + e : e
            }
        },
        "487a": function(e, t, n) {
            e.exports = function() {
                "use strict";
                var e = "@@InfiniteScroll",
                    t = function(e) {
                        return e === window ? Math.max(window.pageYOffset || 0, document.documentElement.scrollTop) : e.scrollTop
                    },
                    n = document.defaultView.getComputedStyle,
                    i = function(e) {
                        for (var t = e; t && "HTML" !== t.tagName && "BODY" !== t.tagName && 1 === t.nodeType;) {
                            var i = n(t).overflowY;
                            if ("scroll" === i || "auto" === i) return t;
                            t = t.parentNode
                        }
                        return window
                    },
                    s = function(e) {
                        return e === window ? t(window) : e.getBoundingClientRect().top + t(window)
                    },
                    a = function(e) {
                        for (var t = e.parentNode; t;) {
                            if ("HTML" === t.tagName) return !0;
                            if (11 === t.nodeType) return !1;
                            t = t.parentNode
                        }
                        return !1
                    },
                    r = function() {
                        if (!this.binded) {
                            this.binded = !0;
                            var e = this,
                                t = e.el,
                                n = t.getAttribute("infinite-scroll-throttle-delay"),
                                s = 200;
                            n && (s = Number(e.vm[n] || n), (isNaN(s) || s < 0) && (s = 200)), e.throttleDelay = s, e.scrollEventTarget = i(t), e.scrollListener = function(e, t) {
                                var n, i, s, a, r, o = function() {
                                    e.apply(a, r), i = n
                                };
                                return function() {
                                    if (a = this, r = arguments, n = Date.now(), s && (clearTimeout(s), s = null), i) {
                                        var e = t - (n - i);
                                        e < 0 ? o() : s = setTimeout(function() {
                                            o()
                                        }, e)
                                    } else o()
                                }
                            }(o.bind(e), e.throttleDelay), e.scrollEventTarget.addEventListener("scroll", e.scrollListener), this.vm.$on("hook:beforeDestroy", function() {
                                e.scrollEventTarget.removeEventListener("scroll", e.scrollListener)
                            });
                            var a = t.getAttribute("infinite-scroll-disabled"),
                                r = !1;
                            a && (this.vm.$watch(a, function(t) {
                                e.disabled = t, !t && e.immediateCheck && o.call(e)
                            }), r = Boolean(e.vm[a])), e.disabled = r;
                            var l = t.getAttribute("infinite-scroll-distance"),
                                c = 0;
                            l && (c = Number(e.vm[l] || l), isNaN(c) && (c = 0)), e.distance = c;
                            var u = t.getAttribute("infinite-scroll-immediate-check"),
                                d = !0;
                            u && (d = Boolean(e.vm[u])), e.immediateCheck = d, d && o.call(e);
                            var p = t.getAttribute("infinite-scroll-listen-for-event");
                            p && e.vm.$on(p, function() {
                                o.call(e)
                            })
                        }
                    },
                    o = function(e) {
                        var n = this.scrollEventTarget,
                            i = this.el,
                            a = this.distance;
                        if (!0 === e || !this.disabled) {
                            var r = t(n),
                                o = r + function(e) {
                                    return e === window ? document.documentElement.clientHeight : e.clientHeight
                                }(n),
                                l = !1;
                            if (n === i) l = n.scrollHeight - o <= a;
                            else {
                                var c = s(i) - s(n) + i.offsetHeight + r;
                                l = o + a >= c
                            }
                            l && this.expression && this.expression()
                        }
                    },
                    l = {
                        bind: function(t, n, i) {
                            t[e] = {
                                el: t,
                                vm: i.context,
                                expression: n.value
                            };
                            var s = arguments;
                            t[e].vm.$on("hook:mounted", function() {
                                t[e].vm.$nextTick(function() {
                                    a(t) && r.call(t[e], s), t[e].bindTryCount = 0,
                                        function n() {
                                            t[e].bindTryCount > 10 || (t[e].bindTryCount++, a(t) ? r.call(t[e], s) : setTimeout(n, 50))
                                        }()
                                })
                            })
                        },
                        unbind: function(t) {
                            t && t[e] && t[e].scrollEventTarget && t[e].scrollEventTarget.removeEventListener("scroll", t[e].scrollListener)
                        }
                    },
                    c = function(e) {
                        e.directive("InfiniteScroll", l)
                    };
                return window.Vue && (window.infiniteScroll = l, Vue.use(c)), l.install = c, l
            }()
        },
        "4aad": function(e, t, n) {
            var i = n("b0a8"),
                s = n("ce86"),
                a = n("c32f"),
                r = n("aaec"),
                o = n("6751"),
                l = n("126d"),
                c = Math.ceil;
            e.exports = function(e, t) {
                var n = (t = void 0 === t ? " " : s(t)).length;
                if (n < 2) return n ? i(t, e) : t;
                var u = i(t, c(e / o(t)));
                return r(t) ? a(l(u), 0, e).join("") : u.slice(0, e)
            }
        },
        6751: function(e, t, n) {
            var i = n("c9ca"),
                s = n("aaec"),
                a = n("ab81");
            e.exports = function(e) {
                return s(e) ? a(e) : i(e)
            }
        },
        "6da8": function(e, t) {
            e.exports = function(e) {
                return e.split("")
            }
        },
        "74b3": function(e, t, n) {
            var i = {
                "./trial-0.png": "a907",
                "./trial-1.png": "2f92",
                "./trial-2.png": "8ea5",
                "./trial-3.png": "204f",
                "./trial-4.png": "a264"
            };

            function s(e) {
                var t = a(e);
                return n(t)
            }

            function a(e) {
                var t = i[e];
                if (!(t + 1)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return t
            }
            s.keys = function() {
                return Object.keys(i)
            }, s.resolve = a, e.exports = s, s.id = "74b3"
        },
        "8ea5": function(e, t, n) {
            e.exports = n.p + "img/trial-2.4220a0e2.png"
        },
        "98dc": function(e, t, n) {
            var i = n("76dd"),
                s = 0;
            e.exports = function(e) {
                var t = ++s;
                return i(e) + t
            }
        },
        a264: function(e, t, n) {
            e.exports = n.p + "img/trial-4.9e59e117.png"
        },
        a907: function(e, t, n) {
            e.exports = n.p + "img/trial-0.209c1a79.png"
        },
        aaec: function(e, t) {
            var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            e.exports = function(e) {
                return n.test(e)
            }
        },
        ab81: function(e, t) {
            var n = "\\ud800-\\udfff",
                i = "[" + n + "]",
                s = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                a = "\\ud83c[\\udffb-\\udfff]",
                r = "[^" + n + "]",
                o = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                l = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                c = "(?:" + s + "|" + a + ")" + "?",
                u = "[\\ufe0e\\ufe0f]?",
                d = u + c + ("(?:\\u200d(?:" + [r, o, l].join("|") + ")" + u + c + ")*"),
                p = "(?:" + [r + s + "?", s, o, l, i].join("|") + ")",
                f = RegExp(a + "(?=" + a + ")|" + p + d, "g");
            e.exports = function(e) {
                for (var t = f.lastIndex = 0; f.test(e);) ++t;
                return t
            }
        },
        ac3b: function(e, t, n) {
            "use strict";
            t.a = {
                functional: !0,
                render(e, t) {
                    const {
                        _c: n,
                        _v: i,
                        data: s,
                        children: a = []
                    } = t, {
                        class: r,
                        staticClass: o,
                        style: l,
                        staticStyle: c,
                        attrs: u = {},
                        ...d
                    } = s;
                    return n("svg", {
                        class: [r, o],
                        style: [l, c],
                        attrs: Object.assign({
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "-1.8 -0.59 13 14"
                        }, u),
                        ...d
                    }, a.concat([n("path", {
                        attrs: {
                            d: "M0 6.24L8.5 0v3.37L4.31 6.24 8.5 9.13v3.37L0 6.24z"
                        }
                    })]))
                }
            }
        },
        af63: function(e, t, n) {
            "use strict";
            var i = n("2b0e"),
                s = "dom_webgl_channel",
                a = new i.a;
            n.d(t, "a", function() {
                return r
            });
            var r = {
                methods: {
                    $emitToEventBus: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
                        a.$emit(t, e)
                    },
                    $listenToEventBus: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
                        a.$on(t, e)
                    },
                    $removeEventBusListener: function(e) {
                        a.$off(e)
                    }
                }
            }
        },
        b0a8: function(e, t) {
            var n = 9007199254740991,
                i = Math.floor;
            e.exports = function(e, t) {
                var s = "";
                if (!e || t < 1 || t > n) return s;
                do {
                    t % 2 && (s += e), (t = i(t / 2)) && (e += e)
                } while (t);
                return s
            }
        },
        c32f: function(e, t, n) {
            var i = n("2b10");
            e.exports = function(e, t, n) {
                var s = e.length;
                return n = void 0 === n ? s : n, !t && n >= s ? e : i(e, t, n)
            }
        },
        c4a9: function(e, t, n) {},
        c9ca: function(e, t, n) {
            var i = n("ef5d")("length");
            e.exports = i
        },
        d094: function(e, t) {
            var n = "\\ud800-\\udfff",
                i = "[" + n + "]",
                s = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                a = "\\ud83c[\\udffb-\\udfff]",
                r = "[^" + n + "]",
                o = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                l = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                c = "(?:" + s + "|" + a + ")" + "?",
                u = "[\\ufe0e\\ufe0f]?",
                d = u + c + ("(?:\\u200d(?:" + [r, o, l].join("|") + ")" + u + c + ")*"),
                p = "(?:" + [r + s + "?", s, o, l, i].join("|") + ")",
                f = RegExp(a + "(?=" + a + ")|" + p + d, "g");
            e.exports = function(e) {
                return e.match(f) || []
            }
        },
        dd7f: function(e, t, n) {
            "use strict";
            var i = n("c4a9");
            n.n(i).a
        }
    }
]);