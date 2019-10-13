(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6b561019"], {
    "0347":function(e, t, n) {
        "use strict";
        const i=/iPhone/i, r=/iPod/i, a=/iPad/i, o=/\bAndroid(?: .+)Mobile\b/i, s=/Android/i, p=/(?: SD4930UR|\bSilk(?: .+)Mobile\b)/i, c=/Silk/i, l=/Windows Phone/i, d=/\bWindows(?: .+)ARM\b/i, u=/BlackBerry/i, f=/BB10/i, h=/Opera Mini/i, m=/\b(CriOS|Chrome)(?: .+)Mobile/i, g=/Mobile(?: .+)Firefox\b/i;
        function v(e, t) {
            return e.test(t)
        }
        function y(e) {
            let t=(e=e||("undefined"!=typeof navigator?navigator.userAgent: "")).split("[FBAN");
            void 0!==t[1]&&(e=t[0]), void 0!==(t=e.split("Twitter"))[1]&&(e=t[0]);
            const n= {
                apple: {
                    phone: v(i, e)&&!v(l, e), ipod: v(r, e), tablet: !v(i, e)&&v(a, e)&&!v(l, e), device: (v(i, e)||v(r, e)||v(a, e))&&!v(l, e)
                }
                , amazon: {
                    phone: v(p, e), tablet: !v(p, e)&&v(c, e), device: v(p, e)||v(c, e)
                }
                , android: {
                    phone: !v(l, e)&&v(p, e)||!v(l, e)&&v(o, e), tablet: !v(l, e)&&!v(p, e)&&!v(o, e)&&(v(c, e)||v(s, e)), device: !v(l, e)&&(v(p, e)||v(c, e)||v(o, e)||v(s, e))||v(/\bokhttp\b/i, e)
                }
                , windows: {
                    phone: v(l, e), tablet: v(d, e), device: v(l, e)||v(d, e)
                }
                , other: {
                    blackberry: v(u, e), blackberry10: v(f, e), opera: v(h, e), firefox: v(g, e), chrome: v(m, e), device: v(u, e)||v(f, e)||v(h, e)||v(g, e)||v(m, e)
                }
                , any:!1, phone:!1, tablet:!1
            }
            ;
            return n.any=n.apple.device||n.android.device||n.windows.device||n.other.device, n.phone=n.apple.phone||n.android.phone||n.windows.phone, n.tablet=n.apple.tablet||n.android.tablet||n.windows.tablet, n
        }
        n.d(t, "a", function() {
            return y
        }
        )
    }
    , "49c7":function(e) {
        e.exports= {
            landing: {
                camPos: [0, 0, 2.36], camTar: [0, 0, 0], speed: -1.558, freq: 0, radius: 2.944, lineScl: 1.76, lineOpacity: .347, lineSpeed: .44, pSpd: .528, particleOpacity: .939, pointThreshold: .337, pointGroupThreshold: .466, pointsPerLine: 31, noiseDisplace: [0, 0, 0], figureEight: 2, numLines: 103, pSize: 1.564, rotNoise: 0, tangentRot: .082, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 70, centerWeight: -.4
            }
            , login: {
                camPos: [0, 0, 2.36], camTar: [0, 0, 0], speed: -1.558, freq: 0, radius: 2.076, lineScl: 2.412, lineOpacity: .347, lineSpeed: .234, pSpd: .528, particleOpacity: .939, pointThreshold: .337, pointGroupThreshold: .466, pointsPerLine: 31, noiseDisplace: [0, 0, 0], figureEight: 2, numLines: 103, pSize: 1.564, rotNoise: 0, tangentRot: .082, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 70, centerWeight: -.4
            }
            , loginError: {
                camPos: [0, 0, 2.36], camTar: [0, 0, 0], speed: -1.558, freq: 0, radius: 2.524, lineScl: 2.254, lineOpacity: .347, lineSpeed: .234, pSpd: .528, particleOpacity: .939, pointThreshold: .337, pointGroupThreshold: .466, pointsPerLine: 31, noiseDisplace: [0, 0, 0], figureEight: 2, numLines: 103, pSize: 1.564, rotNoise: 0, tangentRot: .192, palette: ["#be3547", "#be3547", "#120d0b", "#be3547", "#be3547"], pointLines: 70, centerWeight: -.4
            }
            , applyStep1: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: 1.282, lineScl: 1.85, lineOpacity: .215, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 27, noiseDisplace: [0, 0, 0], figureEight: 3, numLines: 128, pSize: 2.276, rotNoise: 0, tangentRot: -1.823, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 45, centerWeight: -.3
            }
            , applyStep2: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: 1.466, lineScl: 1.856, lineOpacity: .215, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 27, noiseDisplace: [0, 0, 0], figureEight: 3, numLines: 135, pSize: 2.276, rotNoise: 0, tangentRot: -1.841, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 45, centerWeight: -.3
            }
            , survey1to5: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: 1.65, lineScl: 1.862, lineOpacity: .215, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 27, noiseDisplace: [0, 0, 0], figureEight: 3, numLines: 142, pSize: 2.276, rotNoise: 0, tangentRot: -1.859, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 46, centerWeight: -.3
            }
            , survey6to10: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: 1.834, lineScl: 1.868, lineOpacity: .215, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 28, noiseDisplace: [0, 0, 0], figureEight: 3, numLines: 149, pSize: 2.276, rotNoise: 0, tangentRot: -1.877, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 46, centerWeight: -.3
            }
            , survey11to15: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: 2.018, lineScl: 1.874, lineOpacity: .215, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 28, noiseDisplace: [0, 0, 0], figureEight: 3, numLines: 156, pSize: 2.276, rotNoise: 0, tangentRot: -1.895, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 47, centerWeight: -.3
            }
            , survey16to20: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: 2.202, lineScl: 1.88, lineOpacity: .215, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 28, noiseDisplace: [0, 0, 0], figureEight: 3, numLines: 163, pSize: 2.276, rotNoise: 0, tangentRot: -1.913, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 47, centerWeight: -.3
            }
            , survey21to25: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: 2.386, lineScl: 1.886, lineOpacity: .215, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 29, noiseDisplace: [0, 0, 0], figureEight: 3, numLines: 170, pSize: 2.276, rotNoise: 0, tangentRot: -1.931, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 48, centerWeight: -.3
            }
            , survey26to30: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: 2.571, lineScl: 1.894, lineOpacity: .215, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 29, noiseDisplace: [0, 0, 0], figureEight: 3, numLines: 176, pSize: 2.276, rotNoise: 0, tangentRot: -1.952, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 48, centerWeight: -.3
            }
            , applySuccess: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: 1.559, lineScl: 2.049, lineOpacity: .215, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 27, noiseDisplace: [0, 0, 0], figureEight: 3, numLines: 128, pSize: 2.276, rotNoise: 0, tangentRot: -1.823, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 45, centerWeight: -.3
            }
            , applyError: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .251, freq: 0, radius: 2.533, lineScl: 1.672, lineOpacity: .215, lineSpeed: 1.396, pSpd: .618, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 31, noiseDisplace: [0, 0, 0], figureEight: 3, numLines: 116, pSize: 2.027, rotNoise: 0, tangentRot: -1.774, palette: ["#be3547", "#be3547", "#120d0b", "#be3547", "#be3547"], pointLines: 48, centerWeight: -.3
            }
        }
    }
    , "5dbc":function(e, t, n) {
        var i=n("d3f4"), r=n("8b97").set;
        e.exports=function(e, t, n) {
            var a, o=t.constructor;
            return o!==n&&"function"==typeof o&&(a=o.prototype)!==n.prototype&&i(a)&&r&&r(e, a), e
        }
    }
    , "614b":function(e) {
        e.exports= {
            landing: {
                camPos: [0, 0, 2.36], camTar: [0, 0, 0], speed: -1.558, freq: 0, radius: 3.572, lineScl: 2.292, lineOpacity: .347, lineSpeed: .44, pSpd: .528, particleOpacity: .939, pointThreshold: .337, pointGroupThreshold: .466, pointsPerLine: 31, noiseDisplace: [0, 0, 0], figureEight: 1, numLines: 120, pSize: 1.564, rotNoise: 0, tangentRot: -.692, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 70, centerWeight: -.4
            }
            , login: {
                camPos: [0, 0, 2.36], camTar: [0, 0, 0], speed: -1.558, freq: 0, radius: 4.172, lineScl: 2.442, lineOpacity: .347, lineSpeed: .44, pSpd: .528, particleOpacity: .939, pointThreshold: .337, pointGroupThreshold: .466, pointsPerLine: 31, noiseDisplace: [0, 0, 0], figureEight: 1, numLines: 120, pSize: 1.564, rotNoise: 0, tangentRot: -.722, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 70, centerWeight: -.4
            }
            , loginError: {
                camPos: [0, 0, 2.36], camTar: [0, 0, 0], speed: -1.558, freq: 0, radius: 3.952, lineScl: 2.442, lineOpacity: .347, lineSpeed: .44, pSpd: .528, particleOpacity: .939, pointThreshold: .337, pointGroupThreshold: .466, pointsPerLine: 31, noiseDisplace: [0, 0, 0], figureEight: 1, numLines: 120, pSize: 1.564, rotNoise: 0, tangentRot: -.732, palette: ["#be3547", "#be3547", "#120d0b", "#be3547", "#be3547"], pointLines: 70, centerWeight: -.4
            }
            , applyStep1: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: .542, lineScl: 1.162, lineOpacity: .261, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 27, noiseDisplace: [0, 0, 0], figureEight: 2, numLines: 128, pSize: 2.276, rotNoise: 0, tangentRot: .058, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 45, centerWeight: -.4
            }
            , applyStep2: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: .612, lineScl: 1.222, lineOpacity: .261, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 27, noiseDisplace: [0, 0, 0], figureEight: 2, numLines: 128, pSize: 2.276, rotNoise: 0, tangentRot: .198, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 45, centerWeight: -.4
            }
            , survey1to5: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: .682, lineScl: 1.222, lineOpacity: .261, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 27, noiseDisplace: [0, 0, 0], figureEight: 2, numLines: 128, pSize: 2.276, rotNoise: 0, tangentRot: .388, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 45, centerWeight: -.4
            }
            , survey6to10: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: .792, lineScl: 1.222, lineOpacity: .261, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 27, noiseDisplace: [0, 0, 0], figureEight: 2, numLines: 128, pSize: 2.276, rotNoise: 0, tangentRot: .468, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 45, centerWeight: -.4
            }
            , survey11to15: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: .792, lineScl: 1.342, lineOpacity: .261, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 27, noiseDisplace: [0, 0, 0], figureEight: 2, numLines: 128, pSize: 2.276, rotNoise: 0, tangentRot: 1.138, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 45, centerWeight: -.4
            }
            , survey16to20: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: .792, lineScl: 1.342, lineOpacity: .261, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 27, noiseDisplace: [0, 0, 0], figureEight: 2, numLines: 128, pSize: 2.276, rotNoise: 0, tangentRot: 1.568, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 45, centerWeight: -.4
            }
            , survey21to25: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: 2.386, lineScl: 1.886, lineOpacity: .215, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 29, noiseDisplace: [0, 0, 0], figureEight: 3, numLines: 170, pSize: 2.276, rotNoise: 0, tangentRot: -1.931, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 48, centerWeight: -.3
            }
            , survey26to30: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: 2.571, lineScl: 1.894, lineOpacity: .215, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 29, noiseDisplace: [0, 0, 0], figureEight: 3, numLines: 176, pSize: 2.276, rotNoise: 0, tangentRot: -1.952, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 48, centerWeight: -.3
            }
            , applySuccess: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: .542, lineScl: 1.162, lineOpacity: .261, lineSpeed: 1.417, pSpd: .053, particleOpacity: 1, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 27, noiseDisplace: [0, 0, 0], figureEight: 2, numLines: 128, pSize: 2.276, rotNoise: 0, tangentRot: .058, palette: ["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines: 45, centerWeight: -.4
            }
            , applyError: {
                camPos: [0, 0, 1.49], camTar: [0, -.98, 0], speed: .332, freq: 0, radius: .792, lineScl: 1.342, lineOpacity: .25, lineSpeed: 1.417, pSpd: .053, particleOpacity: .485, pointThreshold: .335, pointGroupThreshold: .335, pointsPerLine: 27, noiseDisplace: [0, 0, 0], figureEight: 2, numLines: 128, pSize: 2.276, rotNoise: 0, tangentRot: 1.568, palette: ["#be3547", "#be3547", "#120d0b", "#be3547", "#be3547"], pointLines: 45, centerWeight: -.4
            }
        }
    }
    , "733c":function(e, t, n) {
        var i=n("63b6"), r=n("a159"), a=n("79aa"), o=n("e4ae"), s=n("f772"), p=n("294c"), c=n("c189"), l=(n("e53d").Reflect|| {}
        ).construct, d=p(function() {
            function e() {}
            return!(l(function() {}
            , [], e)instanceof e)
        }
        ), u=!p(function() {
            l(function() {}
            )
        }
        );
        i(i.S+i.F*(d||u), "Reflect", {
            construct:function(e, t) {
                a(e), o(t);
                var n=arguments.length<3?e: a(arguments[2]);
                if(u&&!d)return l(e, t, n);
                if(e==n) {
                    switch(t.length) {
                        case 0: return new e;
                        case 1: return new e(t[0]);
                        case 2: return new e(t[0], t[1]);
                        case 3: return new e(t[0], t[1], t[2]);
                        case 4: return new e(t[0], t[1], t[2], t[3])
                    }
                    var i=[null];
                    return i.push.apply(i, t), new(c.apply(e, i))
                }
                var p=n.prototype, f=r(s(p)?p:Object.prototype), h=Function.apply.call(e, f, t);
                return s(h)?h:f
            }
        }
        )
    }
    , "8b97":function(e, t, n) {
        var i=n("d3f4"), r=n("cb7c"), a=function(e, t) {
            if(r(e), !i(t)&&null!==t)throw TypeError(t+": can't set as prototype!")
        }
        ;
        e.exports= {
            set:Object.setPrototypeOf||("__proto__"in {}
            ?function(e, t, i) {
                try {
                    (i=n("9b43")(Function.call, n("11e9").f(Object.prototype, "__proto__").set, 2))(e, []), t=!(e instanceof Array)
                }
                catch(e) {
                    t=!0
                }
                return function(e, n) {
                    return a(e, n), t?e.__proto__=n: i(e, n), e
                }
            }
            ( {}
            , !1):void 0), check:a
        }
    }
    , a5b2:function(e, t, n) {
        e.exports=n("aa28")
    }
    , aa28:function(e, t, n) {
        n("733c"), e.exports=n("584a").Reflect.construct
    }
    , aa77:function(e, t, n) {
        var i=n("5ca1"), r=n("be13"), a=n("79e5"), o=n("fdef"), s="["+o+"]", p=RegExp("^"+s+s+"*"), c=RegExp(s+s+"*$"), l=function(e, t, n) {
            var r= {}
            , s=a(function() {
                return!!o[e]()||"​"!="​"[e]()
            }
            ), p=r[e]=s?t(d):o[e];
            n&&(r[n]=p), i(i.P+i.F*s, "String", r)
        }
        , d=l.trim=function(e, t) {
            return e=String(r(e)), 1&t&&(e=e.replace(p, "")), 2&t&&(e=e.replace(c, "")), e
        }
        ;
        e.exports=l
    }
    , aae3:function(e, t, n) {
        var i=n("d3f4"), r=n("2d95"), a=n("2b4c")("match");
        e.exports=function(e) {
            var t;
            return i(e)&&(void 0!==(t=e[a])?!!t: "RegExp"==r(e))
        }
    }
    , ae1a:function(e, t, n) {
        "use strict";
        n.r(t), n("8e6e"), n("5df3"), n("1c4c"), n("7f7f"), n("c5f6"), n("63d9");
        var i=n("d225"), r=n("b0b4"), a=n("a5b2"), o=n.n(a), s=n("54b6");
        function p(e, t, n) {
            return(p=function() {
                if("undefined"==typeof Reflect||!o.a)return!1;
                if(o.a.sham)return!1;
                if("function"==typeof Proxy)return!0;
                try {
                    return Date.prototype.toString.call(o()(Date, [], function() {}
                    )), !0
                }
                catch(e) {
                    return!1
                }
            }
            ()?o.a:function(e, t, n) {
                var i=[null];
                i.push.apply(i, t);
                var r=new(Function.bind.apply(e, i));
                return n&&Object(s.a)(r, n.prototype), r
            }
            ).apply(null, arguments)
        }
        var c=n("75fc"), l=n("bd86"), d=(n("ac6a"), n("456d"), n("a481"), n("0347"));
        n("4026");
        var u, f=n("5a89"), h=n("fa0b"), m="// lines.vert\n${random}\n${mapLinear}\n${curlNoise}\n\nuniform float pixelRatio;\nuniform float pSize;\nuniform float time, speed, offset, lineSpeed;\nuniform float particleTime;\nuniform float lineScl;\nuniform float freq;\nuniform float radius;\nuniform vec3 noiseDisplace;\nuniform float figureEight;\nuniform float rotNoise, tangentRot;\nuniform float pointThreshold, pointGroupThreshold;\n\n\nattribute float aLineThreshold;\nattribute float aOffset;\n\n#define HALF_PI 1.5707963268\n#define PI 3.14159265359\n#define TWO_PI 6.28318530718\n\nvarying vec2 vUv;\nvarying float vOffset;\nvarying float vPointSize;\n\nmat2 rotate2d(float _angle){\n    return mat2(cos(_angle),-sin(_angle),\n                sin(_angle),cos(_angle));\n}\n\nmat4 rotationMatrix(vec3 axis, float angle) {\n    axis = normalize(axis);\n    float s = sin(angle);\n    float c = cos(angle);\n    float oc = 1.0 - c;\n\n    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n                0.0,                                0.0,                                0.0,                                1.0);\n}\n\nvoid main() {\n\n  vPointSize = 1.0;\n  vUv = uv;\n  vOffset = aOffset;\n\n  // float o = aOffset + offset;\n  float t = time;\n  float o = aOffset + offset + t;\n\n  vec3 modelCenter = vec3(modelMatrix * vec4(vec3(0.0,0.0,0.0), 1.0));\n\n  vec3 lineCenter = vec3(0.0);\n  lineCenter.x = sin(o * figureEight) * radius;\n  lineCenter.y = cos(o) * radius;\n\n  vec3 n = curlNoise((modelCenter + lineCenter) * freq + vec3(0.0,0.0,t));\n\n  vec3 p = position;\n  // THIS LINE IS REPLACED WITH POINT STUFF (DONT DELETE!)\n\n  p *= lineScl * 2.0;\n\n  vec3 axis = mix(vec3(0.0,0.0,1.0), n, vec3(rotNoise));\n  float angle = o + tangentRot;\n  mat4 rMat = rotationMatrix(axis, angle);\n\n\n\n  p = vec3(rMat * vec4(p, 1.0));\n  vec3 noiseOffset = n * noiseDisplace;\n  p += lineCenter + noiseOffset;\n\n\n  vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);\n  gl_Position = projectionMatrix * mvPosition;\n\n}\n\n\n\n\n\n// // vertex position\n// mat2 rotMat = rotate2d(t * TWO_PI + o * freq + TWO_PI * sn);\n// mat2 rotMatZX = rotate2d(TWO_PI * sn + t);\n// p.z = vec2(rotMatZX * p.xz * lineScl).y;\n// p.xy = rotMat * p.xy * lineScl;\n// p += center;", g="// #include <common>\nuniform sampler2D gradient;\nuniform float time;\nuniform float lineOpacity;\nuniform vec2 uResolution;\nuniform float lineScl;\n\nvarying vec2 vUv;\nvarying float vOffset;\n\n// ${random}\n\nvoid main() {\n\n\n  float d = 1.0 - 2.0 * abs(vUv.x - 0.5);\n  d = min(1.0, d * 4.0);\n\n  vec2 suv = gl_FragCoord.xy/uResolution;\n  vec3 c = vec3( suv, 1.0 );\n  c = vec3(texture2D(gradient, suv.yx));\n\n\n  gl_FragColor = vec4(c, lineOpacity * d);\n\n}", v="uniform sampler2D gradient;\n// uniform vec3 particleColor;\nuniform float particleOpacity;\nvarying float colorMix;\nuniform float pointSize;\nuniform vec2 uResolution;\n\nvarying vec2 vUv;\nvarying float vPointSize;\n\nfloat quadraticIn(float t) {\n  return t * t;\n}\nfloat quadraticOut(float t) {\n  return -t * (t - 2.0);\n}\n\nvoid main(){\n\n  float o = distance(gl_PointCoord.xy, vec2(0.5)) * 2.0;\n  if(o > 1.0) {\n    discard;\n  }\n\n  vec2 suv = gl_FragCoord.xy/uResolution;\n  vec3 c = vec3( suv, 1.0 );\n  c = vec3(texture2D(gradient, suv.yx));\n  // c *= (1.0 - o*o) * 1.5;\n\n  gl_FragColor = vec4(c, particleOpacity);\n\n  // make the smaller points transparent\n  gl_FragColor.w *= min(1.0, vPointSize * 10.0);\n\n\n}", y=n("d9f3"), S=n("b5ec"), b=n("438c"), O=n("49c7"), P=n("614b");
        function T(e, t) {
            var n=Object.keys(e);
            if(Object.getOwnPropertySymbols) {
                var i=Object.getOwnPropertySymbols(e);
                t&&(i=i.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                )), n.push.apply(n, i)
            }
            return n
        }
        var L=m.replace("// THIS LINE IS REPLACED WITH POINT STUFF (DONT DELETE!)", "// pointChunck.vert\n\nfloat pTime = particleTime;\n\np.x = position.x;\n\n// p.x = position.x;\nfloat p_acc = pTime;// * uv.y;\np.x = (mod(p.x + p_acc, 1.0) * 2.0 - 1.0);\n\n// faded the points size at the ends\nfloat d = 1.0 - abs(p.x * 1.0);\nd = min(1.0, d * 6.0);\np.x *= 0.5;\n\n\n// pass the points size\ngl_PointSize = min(10.0, pSize * d) * pixelRatio;\nvPointSize = gl_PointSize;\n\n\n// pointChunck.vert"), x=2*Math.PI, w=f.Math.mapLinear, E=f.Math.lerp, N=Object(d.a)().phone||Object(d.a)().tablet?P:O, A=N[Object.keys(N)[0]], z=function(e) {
            for(var t=1;
            t<arguments.length;
            t++) {
                var n=null!=arguments[t]?arguments[t]: {}
                ;
                t%2?T(n, !0).forEach(function(t) {
                    Object(l.a)(e, t, n[t])
                }
                ):Object.getOwnPropertyDescriptors?Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)):T(n).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                )
            }
            return e
        }
        ( {
            camPos:[0, 0, 2.36], camTar:[0, 0, 0], speed:-.503, freq:0, radius:4, lineScl:2.453, lineOpacity:.512, lineSpeed:.29, pSpd:-.362, particleOpacity:1, pointThreshold:.337, pointGroupThreshold:.466, pointsPerLine:29.52, noiseDisplace: {
                x: 0, y: 0, z: 0
            }
            , figureEight:1.068, numLines:159.385, pSize:2.291, rotNoise:.144, tangentRot:.133, palette:["#3e2417", "#81462b", "#120d0b", "#4f697d", "#2a3238"], pointLines:19, centerWeight:0
        }
        , A, (u= {}
        , Object(l.a)(u, "camPos", p(f.Vector3, Object(c.a)(A.camPos))), Object(l.a)(u, "camTar", p(f.Vector3, Object(c.a)(A.camTar))), Object(l.a)(u, "noiseDisplace", new f.Vector3(A.noiseDisplace.x, A.noiseDisplace.y, A.noiseDisplace.z)), u)), C=function() {
            function e() {
                var t, n=arguments.length>0&&void 0!==arguments[0]?arguments[0]: {}
                ;
                Object(i.a)(this, e);
                var r=(n=Object.assign( {
                    container: document.getElementById("threeContainer"), showGui: !1, isMobile: !1
                }
                , n)).container, a=r.clientWidth, o=r.clientHeight, s=new f.Clock, p=Object(y.a)(z.palette.map(function(e) {
                    return new f.Color(e)
                }
                ), 1, f.LinearFilter, f.ClampToEdgeWrapping), c= {
                    opacity: {
                        value: .25
                    }
                    , time: {
                        value: 0
                    }
                    , speed: {
                        value: .1
                    }
                    , gradient: {
                        value: p
                    }
                    , uResolution: {
                        value: new f.Vector2(a, o)
                    }
                    , lineScl: {
                        value: z.lineScl
                    }
                    , freq: {
                        value: z.freq
                    }
                    , radius: {
                        value: z.radius
                    }
                    , lineOpacity: {
                        value: z.lineOpacity
                    }
                    , lineSpeed: {
                        value: z.lineSpeed
                    }
                    , noiseDisplace: {
                        value: z.noiseDisplace
                    }
                    , figureEight: {
                        value: z.figureEight
                    }
                    , particleTime: {
                        value: 0
                    }
                    , particleOpacity: {
                        value: z.particleOpacity
                    }
                    , pSize: {
                        value: z.pSize
                    }
                    , rotNoise: {
                        value: z.rotNoise
                    }
                    , tangentRot: {
                        value: z.tangentRot
                    }
                    , pixelRatio: {
                        value: window.devicePixelRatio
                    }
                }
                , d=new f.ShaderMaterial( {
                    uniforms: c, vertexShader: Object(h.a)(m), fragmentShader: Object(h.a)(g), transparent: !0, depthTest: !0, depthWrite: !1, blending: f.NormalBlending
                }
                ), u=(new f.ShaderMaterial( {
                    uniforms: c, vertexShader: Object(h.a)(L), fragmentShader: Object(h.a)(v), transparent: !0, depthTest: !0, depthWrite: !1, blending: f.AdditiveBlending
                }
                ), new f.ShaderMaterial( {
                    uniforms: c, vertexShader: Object(h.a)(L), fragmentShader: Object(h.a)(v), transparent: !0, depthTest: !0, depthWrite: !1, blending: f.AdditiveBlending
                }
                )), O=new f.WebGLRenderer( {
                    alpha: !0, premultipliedAlpha: !0, antialias: !1, stencil: !0, preserveDrawingBuffer: !0, failIfMajorPerformanceCaveat: !1, depth: !0, logarithmicDepthBuffer: !1
                }
                );
                O.autoClear=!1, O.shadowMap.enabled=!1, O.setSize(a, o), O.setClearColor(new f.Color("black")), O.setClearAlpha(0), O.toneMappingExposure=1;
                var P=O.getPixelRatio();
                c.pixelRatio.value=P, r.appendChild(O.domElement);
                var T=new f.Scene, E=new f.PerspectiveCamera(60, a/o, .1, 100);
                E.position.set(0, 0, 3), E.lookAt(new f.Vector3(0, 0, 0)), T.add(E), E.updateProjectionMatrix(), E.updateMatrixWorld();
                var A=new f.Raycaster, C=new f.Plane(new f.Vector3(0, 0, 1), 0), R=new f.Vector3;
                A.setFromCamera(new f.Vector2(1, 1), E), A.ray.intersectPlane(C, R);
                var D=new f.Mesh(new f.BoxGeometry(2, 2, 2), new f.MeshBasicMaterial( {
                    wireframe: !0, color: "white", side: 2
                }
                ));
                D.visible=!1, T.add(D);
                var I=new f.Group;
                T.add(I);
                var M=new f.Group;
                I.add(M);
                var W=function() {
                    for(var e=parseInt(z.numLines), t=new f.BufferAttribute(new Float32Array(2*e*3), 3), n=new f.BufferAttribute(new Float32Array(2*e*2), 2), i=new f.BufferAttribute(new Float32Array(2*e), 1), r=0, a=0;
                    r<e;
                    r++, a+=2) {
                        var o=w(r, 0, e, 0, x);
                        t.setXYZ(a, -.5, 0, 0), t.setXYZ(a+1, .5, 0, 0), n.setXY(a, 0, 0), n.setXY(a+1, 1, 1), i.setX(a, o), i.setX(a+1, o)
                    }
                    var s=new f.BufferGeometry;
                    return s.addAttribute("position", t), s.addAttribute("uv", n), s.addAttribute("aOffset", i), s
                }
                (), j=new f.LineSegments(W, d);
                j.frustumCulled=!1, M.add(j);
                var F=j.clone();
                F.rotation.x=Math.PI, M.add(F);
                var _=new f.LineSegments(j.geometry, j.material.clone());
                _.frustumCulled=!1, _.material.uniforms=Object.assign( {}
                , j.material.uniforms, {
                    offset: {
                        value: Math.PI
                    }
                }
                ), _.rotation.x=Math.PI, _.rotation.y=Math.PI, M.add(_);
                var G=_.clone();
                function q() {
                    var e=1-z.centerWeight;
                    A.setFromCamera(new f.Vector2(e, -1), E), A.ray.intersectPlane(C, j.position), A.setFromCamera(new f.Vector2(e, 1), E), A.ray.intersectPlane(C, F.position), A.setFromCamera(new f.Vector2(-e, -1), E), A.ray.intersectPlane(C, _.position), A.setFromCamera(new f.Vector2(-e, 1), E), A.ray.intersectPlane(C, G.position)
                }
                _.rotation.x=0, M.add(G), q();
                var k=[j, F, _, G], B=[];
                function V() {
                    var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0], t=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 33;
                    e=parseInt(z.pointLines, z.pointsPerLinelineCount);
                    for(var n=(t=parseInt(t))*e, i=new f.BufferAttribute(new Float32Array(3*n), 3), r=new f.BufferAttribute(new Float32Array(2*n), 2), a=new f.BufferAttribute(new Float32Array(n), 1), o=0, s=0;
                    o<e;
                    o++) {
                        for(var p=w(o, 0, e, 0, x), c=1;
                        c<7;
                        c++)Math.pow(2, c), 0;
                        for(var l=0;
                        l<t;
                        l++) {
                            var d=w(l, 0, t, -.5, .5);
                            i.setXYZ(s, d, 0, 0), r.setXY(s, Math.random(), 2*Math.random()-1), a.setX(s, p), s+=1
                        }
                    }
                    var u=new f.BufferGeometry;
                    return u.addAttribute("position", i), u.addAttribute("uv", r), u.addAttribute("aOffset", a), u
                }
                new f.PointsMaterial( {
                    color: 8978431, size: .1
                }
                );
                var U=V(z.pointLines, z.pointsPerLine);
                k.forEach(function(e) {
                    var t=new f.Points(U, u);
                    t.frustumCulled=!1, e.add(t), B.push(t)
                }
                );
                var X=z.palette.map(function(e) {
                    return(new f.Color).setStyle(e)
                }
                );
                Object.assign(this, (t= {
                    camera:E, clock:s, container:r, gradient:p, matUniforms:c, uniformNames:["lineOpacity", "speed", "freq", "radius", "lineScl", "lineSpeed", "figureEight", "particleOpacity", "pSize", "rotNoise", "tangentRot"], params:z, renderer:O, scene:T, isStopped:!0, isAnimating:!1, transitionTween:new S.a( {
                        ease: b.a
                    }
                    ), leftCircle:j, leftCircleBottom:F, rightCircle:_, rightCircleBottom:G, presets:N, linesMaterial:d, palette:X, setCirclePositions:q, updatePointsPerLine:function() {
                        var e=V(z.pointLines, z.pointsPerLine);
                        B[0].geometry.dispose(), B.forEach(function(t) {
                            return t.geometry=e
                        }
                        )
                    }
                }
                , Object(l.a)(t, "setCirclePositions", q), Object(l.a)(t, "presets", N), t))
            }
            return Object(r.a)(e, [ {
                key:"update", value:function() {
                    var e=this.clock.getDelta(), t=z.speed*z.lineSpeed*.1;
                    this.matUniforms.time.value+=e*t, this.matUniforms.particleTime.value+=e*z.pSpd*.1
                }
            }
            , {
                key:"draw", value:function() {
                    this.renderer.clear(), this.renderer.render(this.scene, this.camera)
                }
            }
            , {
                key:"animate", value:function() {
                    this.isStopped?this.isAnimating=!1: (this.isAnimating=!0, this.update(), this.draw(), requestAnimationFrame(this.animate.bind(this)))
                }
            }
            , {
                key:"start", value:function() {
                    this.isStopped=!1, this.isAnimating||this.animate()
                }
            }
            , {
                key:"stop", value:function() {
                    this.isStopped=!0
                }
            }
            , {
                key:"onResize", value:function() {
                    var e=this.container.clientWidth, t=this.container.clientHeight;
                    this.renderer.setSize(e, t), this.camera.aspect=e/t, this.camera.updateProjectionMatrix(), this.matUniforms.uResolution.value.set(e, t), this.setCirclePositions()
                }
            }
            , {
                key:"getSettingsString", value:function() {
                    var e=function(e) {
                        return Number(Number(e).toFixed(3))
                    }
                    ;
                    return Object.keys(z).map(function(t) {
                        if(Array.isArray(z[t])) {
                            var n=z[t].map(function(e) {
                                return e instanceof f.Color?"#"+e.getHexString(): e instanceof f.Vector3?e.toArray(): "string"==typeof e?'"'.concat(e, '"'): e
                            }
                            );
                            return'"'.concat(t, '": [').concat(n, "],")
                        }
                        if(z[t]instanceof f.Vector3) {
                            var i=z[t];
                            return'"'.concat(t, '": [').concat(i.toArray().map(e), "],")
                        }
                        return"string"==typeof z[t]?'"'.concat(t, "\": '").concat(z[t], "',"):'"'.concat(t, '": ').concat(z[t], ",")
                    }
                    ).join("\n")
                }
            }
            , {
                key:"updateSettings", value:function() {
                    var e=this, t=this.params;
                    this.uniformNames.forEach(function(n) {
                        e.linesMaterial.uniforms[n].value=t[n]
                    }
                    )
                }
            }
            , {
                key:"fadeParams", value:function(e, t, n) {
                    var i=this.params;
                    for(var r in e)if(void 0!==t[r]&&void 0!==i[r]) {
                        var a=e[r], o=t[r];
                        if("palette"===r) {
                            var s=a.map(function(e, t) {
                                return[e, o[t]]
                            }
                            ).map(function(e) {
                                var t=(new f.Color).setStyle(e[0]), i=(new f.Color).setStyle(e[1]);
                                return t.lerp(i, n)
                            }
                            );
                            i[r]=s.map(function(e) {
                                return"#"+e.getHexString()
                            }
                            ), Object(y.c)(this.gradient, s)
                        }
                        else if("pointsPerLine"===r) {
                            var p=parseInt(E(a, o, n));
                            i.pointsPerLine!==p&&(i.pointsPerLine=p, this.updatePointsPerLine())
                        }
                        else if("centerWeight"===r)i[r]=E(a, o, n), this.setCirclePositions();
                        else if("pointLines"===r) {
                            var c=parseInt(E(a, o, n));
                            i.pointLines!==c&&(i.pointLines=c, this.updatePointsPerLine())
                        }
                        else Array.isArray(i[r])||(i[r]instanceof f.Vector3?(Array.isArray(a)&&(a=(new f.Vector3).fromArray(a)), Array.isArray(o)&&(o=(new f.Vector3).fromArray(o)), i[r].copy(a).lerp(o, n)):i[r]instanceof f.Color?(i[r].setStyle(a), i[r].lerp((new f.Color).setStyle(o), n)):"string"==typeof i[r]?i[r]=o:i[r]=E(a, o, n))
                    }
                    else void 0===e[r]&&void 0===t[r]?e[r]=t[r]=this.params[r]:void 0===e[r]?e[r]=this.params[r]:void 0===t[r]&&(t[r]=this.params[r]);
                    this.updateSettings()
                }
            }
            , {
                key:"cloneParams", value:function() {
                    var e= {}
                    ;
                    for(var t in z)z[t], Array.isArray(z[t])?e[t]=Array.from(z[t]): z[t]instanceof f.Vector3?e[t]=z[t].clone(): e[t]=z[t];
                    return e
                }
            }
            , {
                key:"animateToPreset", value:function(e) {
                    var t=this, n=arguments.length>1&&void 0!==arguments[1]?arguments[1]: 1500, i=this.transitionTween;
                    i.stop(), i.data= {
                        a: this.cloneParams(), b: N[e]
                    }
                    , i.scope=this, i.duration=n, i.onUpdate=function(e) {
                        t.fadeParams(i.data.a, i.data.b, e), t.updateSettings()
                    }
                    , i.start()
                }
            }
            , {
                key:"setPrestFromCurrentParams", value:function(e) {
                    this.presets[e];
                    var t=this.params;
                    this.presets[e]=JSON.parse(JSON.stringify(t, null, 4))
                }
            }
            ]), e
        }
        ();
        t.default=C
    }
    , c189:function(e, t, n) {
        "use strict";
        var i=n("79aa"), r=n("f772"), a=n("3024"), o=[].slice, s= {}
        , p=function(e, t, n) {
            if(!(t in s)) {
                for(var i=[], r=0;
                r<t;
                r++)i[r]="a["+r+"]";
                s[t]=Function("F,a", "return new F("+i.join(",")+")")
            }
            return s[t](e, n)
        }
        ;
        e.exports=Function.bind||function(e) {
            var t=i(this), n=o.call(arguments, 1), s=function() {
                var i=n.concat(o.call(arguments));
                return this instanceof s?p(t, i.length, i): a(t, i, e)
            }
            ;
            return r(t.prototype)&&(s.prototype=t.prototype), s
        }
    }
    , c5f6:function(e, t, n) {
        "use strict";
        var i=n("7726"), r=n("69a8"), a=n("2d95"), o=n("5dbc"), s=n("6a99"), p=n("79e5"), c=n("9093").f, l=n("11e9").f, d=n("86cc").f, u=n("aa77").trim, f="Number", h=i[f], m=h, g=h.prototype, v=a(n("2aeb")(g))==f, y="trim"in String.prototype, S=function(e) {
            var t=s(e, !1);
            if("string"==typeof t&&t.length>2) {
                var n, i, r, a=(t=y?t.trim(): u(t, 3)).charCodeAt(0);
                if(43===a||45===a) {
                    if(88===(n=t.charCodeAt(2))||120===n)return NaN
                }
                else if(48===a) {
                    switch(t.charCodeAt(1)) {
                        case 66: case 98: i=2, r=49;
                        break;
                        case 79: case 111: i=8, r=55;
                        break;
                        default: return+t
                    }
                    for(var o, p=t.slice(2), c=0, l=p.length;
                    c<l;
                    c++)if((o=p.charCodeAt(c))<48||o>r)return NaN;
                    return parseInt(p, i)
                }
            }
            return+t
        }
        ;
        if(!h(" 0o1")||!h("0b1")||h("+0x1")) {
            h=function(e) {
                var t=arguments.length<1?0: e, n=this;
                return n instanceof h&&(v?p(function() {
                    g.valueOf.call(n)
                }
                ):a(n)!=f)?o(new m(S(t)), n, h):S(t)
            }
            ;
            for(var b, O=n("9e1e")?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), P=0;
            O.length>P;
            P++)r(m, b=O[P])&&!r(h, b)&&d(h, b, l(m, b));
            h.prototype=g, g.constructor=h, n("2aba")(i, f, h)
        }
    }
    , fdef:function(e, t) {
        e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
    }
}

]);