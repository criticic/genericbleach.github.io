(window.webpackJsonp = window.webpackJsonp || []).push([
    ["membership"], {
        "1e64": function(e, t, r) {
            "use strict";
            var s = r("ec56");
            r.n(s).a
        },
        "93ef": function(e, t, r) {
            "use strict";
            r.r(t);
            var s = (r("8e6e"), r("ac6a"), r("456d"), r("96cf"), r("3b8d")),
                n = r("bd86"),
                i = r("1dce"),
                o = r("2f62"),
                a = r("5fd7"),
                c = r("5a50"),
                u = r("ee3e"),
                l = (r("7f7f"), r("e081")),
                d = r("1795"),
                m = r("e946"),
                f = r("cc57"),
                p = r("3005");

            function h(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, s)
                }
                return r
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? h(r, !0).forEach(function(t) {
                        Object(n.a)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(r).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var g = {
                    components: {
                        NnnInput: m.a,
                        NnnSelect: f.a,
                        NnnDatePicker: d.a,
                        NnnSelectOption: p.a
                    },
                    directives: Object(n.a)({}, l.a.name, l.a),
                    props: {
                        firstName: {
                            type: String,
                            required: !0
                        },
                        dateOfBirth: {
                            required: !0,
                            validator: function(e) {
                                return "string" == typeof e || null === e
                            }
                        },
                        lastName: {
                            type: String,
                            required: !0
                        },
                        gender: {
                            type: String,
                            required: !0
                        },
                        countryNationality: {
                            type: String,
                            required: !0
                        },
                        mobileOs: {
                            type: String,
                            required: !0
                        },
                        errors: {
                            type: Object,
                            required: !0
                        }
                    },
                    computed: v({}, Object(o.c)(["countries"]), {
                        countriesWithPhoneCodes: function() {
                            var e = this;
                            return Object.keys(this.countries).filter(function(t) {
                                return e.countries[t].phoneCode
                            }).map(function(t) {
                                return e.countries[t]
                            })
                        },
                        dateOfBirthErrorMessage: function() {
                            return this.errors.dateOfBirth ? "YOU MUST BE OF LEGAL AGE TO APPLY!" : ""
                        }
                    }),
                    methods: v({}, Object(o.b)({
                        fetchCountries: "fetchCountries",
                        setPreset: "setPreset"
                    }), {
                        setField: function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                            this.$emit("set-field", e, t), r && r()
                        },
                        setDateField: function(e) {
                            this.$emit("set-date-field", e)
                        },
                        getErrorMessageForField: function(e) {
                            return this.errors[e] ? c.P[e] : null
                        }
                    }),
                    created: function() {
                        this.setPreset({
                            name: c.f
                        }), this.mobileOsOptions = c.G, this.genderOptions = c.s, this.fetchCountries()
                    }
                },
                y = r("2877"),
                b = Object(y.a)(g, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "u-justify-center u-width-31 c-responsive-padding-horizontal u-mh-auto"
                    }, [r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-input", {
                        directives: [{
                            name: "focus",
                            rawName: "v-focus"
                        }],
                        attrs: {
                            value: e.firstName,
                            "error-message": e.errors.firstName ? " This field is required" : null,
                            type: "text",
                            name: "firstName",
                            placeholder: "First name"
                        },
                        on: {
                            change: function(t) {
                                return e.setField("firstName", t)
                            }
                        }
                    })], 1), r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-input", {
                        attrs: {
                            type: "text",
                            name: "lastName",
                            placeholder: "Last name",
                            value: e.lastName,
                            "error-message": e.errors.lastName ? " This field is required" : null
                        },
                        on: {
                            change: function(t) {
                                return e.setField("lastName", t)
                            }
                        }
                    })], 1), r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb c-date-of-birth"
                    }, [r("nnn-date-picker", {
                        attrs: {
                            date: e.dateOfBirth,
                            "error-message": e.dateOfBirthErrorMessage
                        },
                        on: {
                            change: function(t) {
                                return e.setDateField(t)
                            }
                        }
                    })], 1), r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-select", {
                        attrs: {
                            value: e.gender,
                            errorMessage: e.getErrorMessageForField("gender"),
                            placeholder: "GENDER",
                            options: e.genderOptions
                        },
                        on: {
                            change: function(t) {
                                return e.setField("gender", t)
                            }
                        }
                    })], 1), r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-select", {
                        attrs: {
                            value: e.countryNationality,
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
                                return e._l(e.countries, function(s, n) {
                                    return r("nnn-select-option", {
                                        key: "nationality-" + n,
                                        attrs: {
                                            value: s.name
                                        },
                                        nativeOn: {
                                            click: function(r) {
                                                return e.setField("countryNationality", s.name, t.closeDropdown)
                                            }
                                        }
                                    }, [e._v(e._s(s.name))])
                                })
                            }
                        }])
                    })], 1), r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-select", {
                        attrs: {
                            value: e.mobileOs,
                            errorMessage: e.getErrorMessageForField("mobileOS"),
                            placeholder: "MOBILE OS",
                            options: e.mobileOsOptions
                        },
                        on: {
                            change: function(t) {
                                return e.setField("mobileOS", t)
                            }
                        }
                    })], 1)])
                }, [], !1, null, null, null).exports,
                O = r("f320");

            function S(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, s)
                }
                return r
            }
            var _ = {
                    name: "AccountDetailsComponent",
                    components: {
                        NnnInput: m.a,
                        NnnSimpleDialog: O.a
                    },
                    directives: Object(n.a)({}, l.a.name, l.a),
                    props: {
                        username: {
                            type: String,
                            required: !0
                        },
                        email: {
                            type: String,
                            required: !0
                        },
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
                    data: function() {
                        return {
                            showDialog: !1
                        }
                    },
                    computed: {
                        usernameErrorMessage: function() {
                            return this.errors.username ? this.errors.$v.username.required ? "Username is already taken" : "This field is required" : ""
                        },
                        emailErrorMessage: function() {
                            return this.errors.email ? this.errors.$v.email.uniqueEmail ? "Incorrect value" : "Email is already taken" : ""
                        }
                    },
                    methods: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? S(r, !0).forEach(function(t) {
                                Object(n.a)(e, t, r[t])
                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(r).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            })
                        }
                        return e
                    }({}, Object(o.b)({
                        setPreset: "setPreset"
                    }), {
                        setField: function(e, t) {
                            this.$emit("set-field", e, t)
                        }
                    }),
                    created: function() {
                        this.setPreset({
                            name: c.e
                        })
                    }
                },
                C = (r("1e64"), Object(y.a)(_, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "u-justify-center u-mh-auto u-width-31 c-responsive-padding-horizontal u-display-flex u-flex-direction-column u-justify-center u-flex-1-1-auto"
                    }, [r("div", [r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-input", {
                        directives: [{
                            name: "focus",
                            rawName: "v-focus"
                        }],
                        attrs: {
                            type: "text",
                            name: "username",
                            placeholder: "Username",
                            "case-sensitive": "",
                            value: e.username,
                            "error-message": e.usernameErrorMessage
                        },
                        on: {
                            change: function(t) {
                                return e.setField("username", t)
                            }
                        }
                    })], 1), r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-input", {
                        attrs: {
                            type: "email",
                            name: "email",
                            placeholder: "Email",
                            autocomplete: "email",
                            value: e.email,
                            "error-message": e.emailErrorMessage
                        },
                        on: {
                            change: function(t) {
                                return e.setField("email", t)
                            }
                        }
                    })], 1), r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-input", {
                        attrs: {
                            value: e.password,
                            type: "password",
                            name: "password",
                            placeholder: "Password",
                            autocomplete: "new-password",
                            "error-message": e.errors.password ? " Password is required and must contain 8 - 50 characters, at least 1 letter and 1 number!" : null,
                            "case-sensitive": ""
                        },
                        on: {
                            change: function(t) {
                                return e.setField("password", t)
                            }
                        }
                    })], 1), r("div", {
                        staticClass: "c-form-group c-form-group--lg-mb"
                    }, [r("nnn-input", {
                        attrs: {
                            value: e.confirmPassword,
                            type: "password",
                            name: "confirmPassword",
                            placeholder: "Confirm password",
                            autocomplete: "new-password",
                            "error-message": e.errors.confirmPassword ? "This field must be same as password" : null,
                            "case-sensitive": ""
                        },
                        on: {
                            change: function(t) {
                                return e.setField("confirmPassword", t)
                            }
                        }
                    })], 1)]), r("transition", {
                        attrs: {
                            name: "vt-fade"
                        }
                    }, [e.showDialog ? r("nnn-simple-dialog", {
                        attrs: {
                            type: e.dialogType
                        },
                        on: {
                            close: function(t) {
                                e.showDialog = !1
                            }
                        }
                    }) : e._e()], 1)], 1)
                }, [], !1, null, null, null)).exports,
                w = (r("7514"), r("c5f6"), r("51f5")),
                D = r.n(w),
                E = {
                    name: "PsychologicalSurveyListItem",
                    props: {
                        question: {
                            type: Object,
                            required: !0
                        },
                        isQuestionActive: {
                            type: Boolean,
                            required: !0
                        },
                        value: {
                            type: Number,
                            required: !0
                        }
                    },
                    computed: {
                        questionColorClasses: function() {
                            return function(e) {
                                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                if (t) {
                                    if (50 === e) return {};
                                    var r = parseInt(e / 10),
                                        s = 5 === r ? 6 : r;
                                    return ["c-question-color-primary-".concat(s)]
                                }
                            }
                        },
                        questionColorTransition: function() {
                            return function(e) {
                                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                return t ? e : 50
                            }
                        },
                        sliderBackgroundStyles: function() {
                            var e = this;
                            return function(t) {
                                var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                                return !r || s ? ["u-color-transparent"] : [e.questionColorClasses(t, r)]
                            }
                        }
                    }
                },
                P = Object(y.a)(E, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("li", [r("div", {
                        class: ["c-question", {
                            "is--active": e.isQuestionActive
                        }, {
                            "is--answered": e.value > 50 || e.value < 50
                        }]
                    }, [r("span", {
                        class: ["c-question__label", e.questionColorClasses(e.value, e.value < 50)]
                    }, [e._v(e._s(e.question.option1))]), r("div", {
                        staticClass: "c-question__slider-wrapper"
                    }, [r("div", {
                        staticClass: "c-range-slider c-range-slider--responsive-rotated"
                    }, [r("div", {
                        staticClass: "c-range-slider__current-bg"
                    }, [r("div", {
                        staticClass: "c-range-slider__current-bg-left"
                    }, [r("span", {
                        class: ["c-range-slider__current-bg-el", e.sliderBackgroundStyles(e.value, e.value < 50, e.value >= 50)],
                        style: "transform: translate3d(" + 2 * e.questionColorTransition(e.value, e.value < 50) + "%, 0, 0)"
                    })]), r("div", {
                        staticClass: "c-range-slider__current-bg-right"
                    }, [r("span", {
                        class: ["c-range-slider__current-bg-el", e.sliderBackgroundStyles(e.value, e.value > 50, e.value <= 50)],
                        style: "transform: translate3d(" + 2 * (e.questionColorTransition(e.value, e.value > 50) - 100) + "%, 0, 0)"
                    })])]), r("input", {
                        staticClass: "c-range-slider__input",
                        attrs: {
                            disabled: !e.isQuestionActive,
                            type: "range",
                            name: "name",
                            min: "0",
                            max: "100"
                        },
                        domProps: {
                            value: e.value
                        },
                        on: {
                            input: function(t) {
                                return e.$emit("set-field", e.question.key, t.target.value)
                            },
                            change: function(t) {
                                return e.$emit("change")
                            }
                        }
                    })])]), r("span", {
                        class: ["c-question__label", e.questionColorClasses(e.value, e.value > 50)]
                    }, [e._v(e._s(e.question.option2))])])])
                }, [], !1, null, null, null).exports,
                q = {
                    name: "ProgressDot",
                    props: {
                        isActive: {
                            type: Boolean,
                            required: !0
                        },
                        value: {
                            type: Number,
                            required: !0
                        },
                        hasError: {
                            type: Boolean,
                            required: !1,
                            default: !0
                        }
                    }
                },
                j = Object(y.a)(q, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        class: ["dot", {
                            "is-current": e.isActive
                        }, {
                            "is-larger": e.value > 50
                        }, {
                            "is-lower": e.value < 50
                        }, {
                            "has-error": e.hasError
                        }]
                    }, [r("span")])
                }, [], !1, null, null, null).exports,
                x = {
                    functional: !0,
                    render(e, t) {
                        const {
                            _c: r,
                            _v: s,
                            data: n,
                            children: i = []
                        } = t, {
                            class: o,
                            staticClass: a,
                            style: c,
                            staticStyle: u,
                            attrs: l = {},
                            ...d
                        } = n;
                        return r("svg", {
                            class: [o, a],
                            style: [c, u],
                            attrs: Object.assign({
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 13 10"
                            }, l),
                            ...d
                        }, i.concat([r("path", {
                            staticClass: "path",
                            attrs: {
                                d: "M6.46.5L12.7 9H9.33L6.46 4.81 3.57 9H.2L6.46.5z"
                            }
                        })]))
                    }
                },
                k = {
                    functional: !0,
                    render(e, t) {
                        const {
                            _c: r,
                            _v: s,
                            data: n,
                            children: i = []
                        } = t, {
                            class: o,
                            staticClass: a,
                            style: c,
                            staticStyle: u,
                            attrs: l = {},
                            ...d
                        } = n;
                        return r("svg", {
                            class: [o, a],
                            style: [c, u],
                            attrs: Object.assign({
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 13 10"
                            }, l),
                            ...d
                        }, i.concat([r("path", {
                            attrs: {
                                d: "M6.74 9L.5.5h3.37l2.87 4.19L9.63.5H13L6.74 9z"
                            }
                        })]))
                    }
                },
                I = r("16e1");

            function N(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, s)
                }
                return r
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(r, !0).forEach(function(t) {
                        Object(n.a)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : N(r).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var A, T = {
                    components: {
                        PsychologicalSurveyListItem: P,
                        ProgressDot: j,
                        ArrowUpIcon: x,
                        ArrowDownIcon: k
                    },
                    props: {
                        questions: {
                            required: !0,
                            type: Array
                        },
                        questionsData: {
                            required: !0,
                            type: Object
                        },
                        errors: {
                            required: !0,
                            type: Object
                        }
                    },
                    data: function() {
                        return {
                            currentQuestionIndex: 0,
                            scrollListenerAttached: !1
                        }
                    },
                    computed: L({}, Object(o.c)({
                        displayErrors: "hasGlobalError"
                    }), {
                        currentQuestion: function() {
                            return Object.keys(this.questionsData)[this.currentQuestionIndex]
                        },
                        answeredQuestions: function() {
                            var e = this;
                            return Object.keys(this.questionsData).map(function(t) {
                                return e.questionsData[t]
                            }).filter(function(e) {
                                return 50 !== e
                            }).length
                        },
                        audioSegment: function() {
                            var e = [u.d, u.e, u.f],
                                t = parseInt(this.answeredQuestions / 6);
                            return e[3 === t ? 2 : t]
                        }
                    }),
                    watch: {
                        answeredQuestions: function(e, t) {
                            e !== t && (parseInt(e / 5) !== parseInt(t / 5) && this.setQuestionPreset(e - 1))
                        },
                        audioSegment: function(e, t) {
                            e !== t && this.playAudio()
                        },
                        displayErrors: function(e) {
                            return e ? this.setPreset({
                                name: c.d,
                                withoutAudioEffects: !0
                            }) : this.setQuestionPreset(this.answeredQuestions, !0)
                        }
                    },
                    methods: L({}, Object(o.b)({
                        setPreset: "setPreset"
                    }), {
                        onChangedValue: function() {
                            var e = this;
                            setTimeout(function() {
                                e.goToNext()
                            }, 500)
                        },
                        setField: function(e, t) {
                            this.$emit("set-field", e, parseFloat(t))
                        },
                        initScroll: function() {
                            var e = this;
                            setTimeout(function() {
                                e.$refs.questionsList && (e.rowHeight = Object(I.b)(e.$refs.questionsList.querySelector(".c-questions-list__item:nth-child(2)")).height)
                            }, 1e3), this.scrollListenerAttached || (this.$refs.questionsList.addEventListener("scroll", function() {
                                e.$refs.questionsList && (e.currentQuestionIndex = Number((e.$refs.questionsList.scrollTop / e.rowHeight).toFixed(0)))
                            }), this.scrollListenerAttached = !0)
                        },
                        scrollToFirstUnAnswerdQuestion: function(e) {
                            var t = Object.keys(e).find(function(t) {
                                return e[t]
                            });
                            this.scrollTo({
                                key: t
                            })
                        },
                        scrollTo: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = this.getQuestionIndex(e);
                            (t || r !== this.currentQuestionIndex) && this.$refs.questionsList && this.$refs.questionsList.scrollBy({
                                top: this.rowHeight * (r - this.currentQuestionIndex),
                                left: 0,
                                behavior: "smooth"
                            })
                        },
                        getQuestionIndex: function(e) {
                            return D()(this.questions, {
                                key: e.key
                            })
                        },
                        goToPrevious: function() {
                            this.currentQuestionIndex <= 0 || (this.scrollTo(this.questions[this.currentQuestionIndex - 1]), this.currentQuestionIndex -= 1)
                        },
                        goToNext: function() {
                            this.currentQuestionIndex >= this.questions.length - 1 || (this.scrollTo(this.questions[this.currentQuestionIndex + 1]), this.currentQuestionIndex += 1)
                        },
                        handleResize: function() {
                            this.initScroll(), this.scrollTo(this.currentQuestion, !0)
                        },
                        setQuestionPreset: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                r = parseInt(e / 5);
                            this.setPreset(L({}, c.W[r], {
                                withoutAudioEffects: t
                            }))
                        },
                        playAudio: function() {
                            this.$audio.play(this.audioSegment)
                        }
                    }),
                    mounted: function() {
                        var e = this;
                        this.playAudio(), this.$nextTick(function() {
                            setTimeout(function() {
                                return e.showDialog = !0
                            }, 700), e.setPreset(c.W[0]), document.documentElement.classList.add("u-overscroll-behavior-none"), e.initScroll()
                        }), window.addEventListener("resize", this.handleResize.bind(this))
                    },
                    beforeDestroy: function() {
                        document.documentElement.classList.remove("u-overscroll-behavior-none"), window.removeEventListener("resize", this.handleResize.bind(this))
                    }
                },
                F = Object(y.a)(T, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "c-survey"
                    }, [r("div", {
                        staticClass: "c-survey__ctn-wrap"
                    }, [r("div", {
                        staticClass: "c-survey__ctn"
                    }, [r("ul", {
                        ref: "questionsList",
                        staticClass: "c-questions-list"
                    }, [r("li", {
                        staticClass: "c-questions-list__item"
                    }), e._l(e.questions, function(t) {
                        return r("psychological-survey-list-item", {
                            key: t.key,
                            staticClass: "c-questions-list__item",
                            attrs: {
                                question: t,
                                "is-question-active": t.key === e.currentQuestion,
                                value: e.questionsData[t.key]
                            },
                            on: {
                                "set-field": e.setField,
                                change: e.onChangedValue
                            },
                            nativeOn: {
                                click: function(r) {
                                    return e.scrollTo(t)
                                }
                            }
                        })
                    }), r("li", {
                        staticClass: "c-questions-list__item"
                    })], 2), r("div", {
                        staticClass: "c-questions-navigation"
                    }, [r("button", {
                        staticClass: "c-questions-navigation__btn",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: e.goToPrevious
                        }
                    }, [r("arrow-up-icon", {
                        class: {
                            "u-opacity-50": e.currentQuestionIndex <= 0
                        }
                    })], 1), r("button", {
                        staticClass: "c-questions-navigation__btn",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: e.goToNext
                        }
                    }, [r("arrow-down-icon", {
                        class: {
                            "u-opacity-50": e.currentQuestionIndex >= e.questions.length - 1
                        }
                    })], 1)])])]), r("div", {
                        staticClass: "side-dots"
                    }, e._l(e.questions, function(t) {
                        return r("progress-dot", {
                            key: "dots-" + t.key,
                            attrs: {
                                "is-active": e.currentQuestion === t.key,
                                value: e.questionsData[t.key],
                                hasError: e.errors[t.key],
                                itemKey: t.key
                            },
                            nativeOn: {
                                click: function(r) {
                                    return e.scrollTo(t)
                                }
                            }
                        })
                    }), 1)])
                }, [], !1, null, null, null).exports,
                Q = r("96ce"),
                $ = r("9301"),
                B = r("ee97"),
                M = r("0347"),
                U = r("0f74"),
                R = {
                    name: "NnnSurveyDialog",
                    components: {
                        NnnButton: $.a
                    },
                    data: function() {
                        return {
                            isClosing: !1,
                            isMobileDevice: Object(M.a)().phone
                        }
                    },
                    methods: {
                        handleClick: function() {
                            var e = this;
                            this.beforeClose(), setTimeout(function() {
                                e.$emit("close")
                            }, 1e3)
                        },
                        beforeClose: function() {
                            this.isClosing = !0
                        }
                    },
                    computed: {
                        description: function() {
                            return this.isMobileDevice ? U.a[U.d].description : U.a[U.c].description
                        }
                    }
                },
                G = Object(y.a)(R, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        class: ["c-dialog c-dialog--survey", {
                            "is-closing": e.isClosing
                        }]
                    }, [r("div", {
                        staticClass: "c-dialog__ctn"
                    }, [r("div", {
                        staticClass: "c-dialog__body"
                    }, [r("div", {
                        staticClass: "c-dialog__body-ctn",
                        domProps: {
                            innerHTML: e._s(e.description)
                        }
                    }), r("div", {
                        staticClass: "c-dialog__survey-btn"
                    }, [r("nnn-button", {
                        attrs: {
                            color: "primary",
                            "font-size": "lg",
                            animate: !0
                        },
                        on: {
                            click: e.handleClick
                        }
                    }, [e._v("\n          BEGIN\n        ")])], 1)])])])
                }, [], !1, null, null, null).exports;

            function Y(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, s)
                }
                return r
            }

            function V(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Y(r, !0).forEach(function(t) {
                        Object(n.a)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Y(r).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var H = (A = {}, Object(n.a)(A, c.a, "accountDetailsValid"), Object(n.a)(A, c.O, "personalDetailsValid"), Object(n.a)(A, c.Q, "psychologicalSurveyDataValid"), A),
                z = {
                    name: "MembershipPage",
                    mixins: [i.validationMixin, a.a],
                    components: {
                        NnnSurveyDialog: G,
                        PersonalDetailsComponent: b,
                        AccountDetailsComponent: C,
                        PsychologicalSurveyComponent: F,
                        NnnBaseLayout: Q.a,
                        NnnButton: $.a,
                        NnnTransition: B.a
                    },
                    data: function() {
                        return {
                            isFormSubmited: !1,
                            showDialog: !1,
                            surveyModalSeen: !1
                        }
                    },
                    computed: V({}, Object(o.c)({
                        currentIndexOfSection: "currentMembershipStep"
                    }), {
                        currentSection: function() {
                            return c.E[this.currentIndexOfSection]
                        },
                        isNextButtonDisabled: function() {
                            return !this[H[this.currentSection]]
                        },
                        subtitle: function() {
                            return c.F[this.currentSection]
                        }
                    }),
                    watch: {
                        currentIndexOfSection: function(e) {
                            if (e < 2) return this.$audio.play(u.c)
                        }
                    },
                    methods: V({}, Object(o.d)({
                        setCurrentSectionIndex: "setMembershipStep"
                    }), {}, Object(o.b)({
                        register: "register",
                        displayErrorsGlobally: "displayErrorsGlobally",
                        checkEmailAndUsernameAvailability: "checkEmailAndUsernameAvailability"
                    }), {
                        goBackOneSection: function() {
                            this.setCurrentSectionIndex(this.currentIndexOfSection - 1)
                        },
                        goToNextSection: function() {
                            var e = this;
                            1 === this.currentIndexOfSection && setTimeout(function() {
                                e.showDialog = !0
                            }, 500), this.setCurrentSectionIndex(this.currentIndexOfSection + 1)
                        },
                        isNextStepForbidden: function() {
                            return this.isFormSubmited || this.currentSection === c.O && !this.personalDetailsValid || this.currentSection === c.a && !this.accountDetailsValid
                        },
                        setEmailAndUsernameErorrs: function(e, t) {
                            e || (this.alreadyTakenUsernames.push(this.formData.username), this.setCurrentSectionIndex(0)), t || (this.alreadyTakenEmails.push(this.formData.email), this.setCurrentSectionIndex(0))
                        },
                        submitForm: function() {
                            var e = Object(s.a)(regeneratorRuntime.mark(function e() {
                                var t = this;
                                return regeneratorRuntime.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this.isNextStepForbidden()) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (this.currentSection !== c.a) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 5, this.checkEmailAndUsernameAvailability({
                                                username: this.formData.username,
                                                email: this.formData.email
                                            }).then(function(e) {
                                                var r = e.username,
                                                    s = e.email;
                                                r && s ? t.goToNextSection() : t.setEmailAndUsernameErorrs(r, s)
                                            });
                                        case 5:
                                            return e.abrupt("return");
                                        case 6:
                                            if (this.isNextButtonDisabled || this.currentSection === c.Q) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.abrupt("return", this.goToNextSection());
                                        case 8:
                                            if (!this.$refs.psychologicalSurveyComponent || this.psychologicalSurveyDataValid) {
                                                e.next = 13;
                                                break
                                            }
                                            return this.touchQuestionsFields(), this.displayErrorsGlobally().then(function() {
                                                t.resetErrors()
                                            }), this.$refs.psychologicalSurveyComponent.scrollToFirstUnAnswerdQuestion(this.psychologicalSurveyErrors), e.abrupt("return");
                                        case 13:
                                            this.isFormSubmited = !0, this.register({
                                                formData: this.formData
                                            }).then(function() {
                                                t.$router.push({
                                                    name: c.D
                                                })
                                            }).catch(function(e) {
                                                e.response && e.response.data.username && (t.alreadyTakenUsernames.push(t.formData.username), t.setCurrentSectionIndex(0)), e.response && e.response.data.email && (t.alreadyTakenEmails.push(t.formData.email), t.setCurrentSectionIndex(0)), t.isFormSubmited = !1
                                            });
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        setDateField: function(e) {
                            this.setField("dateOfBirth", e.value), e.touched || this.$v.formData.dateOfBirth.$reset()
                        },
                        resetErrors: function() {
                            this.resetQuestionsFields()
                        },
                        beginSurvey: function() {
                            this.showDialog = !1, this.surveyModalSeen = !0
                        }
                    }),
                    created: function() {
                        this.ACCOUNT_DETAILS = c.a, this.PERSONAL_DETAILS = c.O, this.PSYCHOLOGICAL_SURVEY = c.Q, this.touchPrePopulatedFields()
                    },
                    mounted: function() {
                        this.$audio.play(u.c)
                    },
                    beforeDestroy: function() {
                        this.setCurrentSectionIndex(0)
                    }
                },
                W = Object(y.a)(z, function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("form", {
                        staticClass: "u-flex-direction-column u-flex-1-1-auto u-display-flex",
                        on: {
                            submit: function(t) {
                                return t.preventDefault(), e.submitForm(t)
                            }
                        }
                    }, [r("nnn-base-layout", {
                        staticClass: "u-flex-1-1-auto",
                        attrs: {
                            "is-membership": ""
                        }
                    }, [r("template", {
                        slot: "main"
                    }, [r("div", {
                        staticClass: "c-membership-root"
                    }, [r("div", {
                        staticClass: "c-form-header c-form-header--lighter c-form-header--mobile-top-fixed"
                    }, [r("h2", {
                        staticClass: "c-form-header__title"
                    }, [e._v("APPLICATION")]), r("p", {
                        staticClass: "c-form-header__desc c-h6"
                    }, [r("transition-group", {
                        attrs: {
                            name: "vt-fade-in-translate"
                        }
                    }, [!e.psychologicalSurveyDataValid && e.$v.formData.psychologicalSurveyQuestions.$anyError ? r("span", {
                        key: 0
                    }, [e._v("PLEASE ANSWER TO ALL QUESTIONS")]) : [e.currentSection === e.ACCOUNT_DETAILS ? r("span", {
                        key: 1
                    }, [e._v("\n                  " + e._s(e.subtitle) + "\n                ")]) : e._e(), e.currentSection === e.PERSONAL_DETAILS ? r("span", {
                        key: 2
                    }, [e._v("\n                  " + e._s(e.subtitle) + "\n                ")]) : e._e(), e.currentSection === e.PSYCHOLOGICAL_SURVEY ? r("span", {
                        key: 3
                    }, [e._v(e._s(e.subtitle))]) : e._e()]], 2)], 1)]), r("div", {
                        staticClass: "c-membership-content"
                    }, [r("nnn-transition", {
                        attrs: {
                            "toggle-scroll-during-animation": "",
                            name: "vt-fade-scale"
                        }
                    }, [e.currentSection === e.ACCOUNT_DETAILS ? r("account-details-component", {
                        attrs: {
                            username: e.formData.username,
                            email: e.formData.email,
                            password: e.formData.password,
                            "confirm-password": e.formData.confirmPassword,
                            errors: e.accountDetailsErrors
                        },
                        on: {
                            "set-field": e.setField
                        }
                    }) : e._e(), e.currentSection === e.PERSONAL_DETAILS ? r("personal-details-component", {
                        attrs: {
                            "first-name": e.formData.firstName,
                            "last-name": e.formData.lastName,
                            "date-of-birth": e.formData.dateOfBirth,
                            gender: e.formData.gender,
                            "country-nationality": e.formData.countryNationality,
                            "mobile-os": e.formData.mobileOS,
                            errors: e.personalDetailsErrors
                        },
                        on: {
                            "set-field": e.setField,
                            "set-date-field": e.setDateField
                        }
                    }) : e._e(), e.currentSection === e.PSYCHOLOGICAL_SURVEY ? r("psychological-survey-component", {
                        ref: "psychologicalSurveyComponent",
                        attrs: {
                            questions: e.psychologicalSurveyQuestions,
                            questionsData: e.formData.psychologicalSurveyQuestions,
                            errors: e.psychologicalSurveyErrors
                        },
                        on: {
                            "set-field": e.setPsychologicalSurveyFields
                        }
                    }) : e._e()], 1)], 1)])]), r("template", {
                        slot: "bottom"
                    }, [r("div", {
                        staticClass: "c-membership-footer"
                    }, [r("div", {
                        staticClass: "c-membership-footer__back"
                    }, [e.currentSection !== e.ACCOUNT_DETAILS ? r("nnn-button", {
                        staticClass: "c-membership-footer__btn c-membership-footer__btn--back",
                        attrs: {
                            "font-size": "inherit",
                            color: "primary",
                            animate: !0
                        },
                        on: {
                            click: e.goBackOneSection
                        }
                    }, [e._v("Go Back")]) : e._e()], 1), r("div", {
                        staticClass: "c-membership-footer__steps"
                    }, [e._v("\n          STEP " + e._s(e.currentIndexOfSection + 1) + " / 3\n        ")]), r("div", {
                        staticClass: "c-membership-footer__next"
                    }, [r("nnn-button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.currentSection === e.PSYCHOLOGICAL_SURVEY,
                            expression: "currentSection === PSYCHOLOGICAL_SURVEY"
                        }],
                        staticClass: "c-membership-footer__btn test",
                        attrs: {
                            type: "submit",
                            "font-size": "inherit",
                            color: "primary"
                        }
                    }, [e._v("Submit")]), r("nnn-button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.currentSection !== e.PSYCHOLOGICAL_SURVEY,
                            expression: "currentSection !== PSYCHOLOGICAL_SURVEY"
                        }],
                        staticClass: "c-membership-footer__btn",
                        attrs: {
                            disabled: e.isNextButtonDisabled,
                            "font-size": "inherit",
                            color: "primary",
                            type: "submit"
                        }
                    }, [e._v("Continue")])], 1)])])], 2), r("transition", {
                        attrs: {
                            name: "vt-fade"
                        }
                    }, [e.showDialog && !e.surveyModalSeen ? r("nnn-survey-dialog", {
                        on: {
                            close: e.beginSurvey
                        }
                    }) : e._e()], 1)], 1)
                }, [], !1, null, null, null);
            t.default = W.exports
        },
        ec56: function(e, t, r) {}
    }
]);