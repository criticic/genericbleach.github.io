!function(t) {
    function e(e) {
        for(var a, i, s=e[0], c=e[1], u=e[2], l=0, p=[];
        l<s.length;
        l++)i=s[l],
        r[i]&&p.push(r[i][0]),
        r[i]=0;
        for(a in c)Object.prototype.hasOwnProperty.call(c, a)&&(t[a]=c[a]);
        for(d&&d(e);
        p.length;
        )p.shift()();
        return o.push.apply(o, u||[]),
        n()
    }
    function n() {
        for(var t, e=0;
        e<o.length;
        e++) {
            for(var n=o[e], a=!0, i=1;
            i<n.length;
            i++) {
                var c=n[i];
                0!==r[c]&&(a=!1)
            }
            a&&(o.splice(e--, 1), t=s(s.s=n[0]))
        }
        return t
    }
    var a= {}
    ,
    i= {
        app: 0
    }
    ,
    r= {
        app: 0
    }
    ,
    o=[];
    function s(e) {
        if(a[e])return a[e].exports;
        var n=a[e]= {
            i:e,
            l:!1,
            exports: {}
        }
        ;
        return t[e].call(n.exports, n, n.exports, s),
        n.l=!0,
        n.exports
    }
    s.e=function(t) {
        var e=[];
        i[t]?e.push(i[t]):0!==i[t]&& {
            home: 1, membership: 1
        }
        [t]&&e.push(i[t]=new Promise(function(e, n) {
            for(var a="css/"+( {
                "check-email": "check-email", "forgot-password~home~login~membership~reset-password": "forgot-password~home~login~membership~reset-password", "forgot-password": "forgot-password", "home~membership": "home~membership", home: "home", membership: "membership", login: "login", "reset-password": "reset-password", landing: "landing", "membership-confirmation": "membership-confirmation", "reset-password-confirmation": "reset-password-confirmation", graph: "graph", "video.js": "video.js"
            }
            [t]||t)+"."+ {
                "check-email": "31d6cfe0", "chunk-2d0a2d66": "31d6cfe0", "chunk-2d0b2914": "31d6cfe0", "chunk-2d0b6918": "31d6cfe0", "chunk-2d0b6c4d": "31d6cfe0", "chunk-2d0c5aba": "31d6cfe0", "chunk-2d0d4066": "31d6cfe0", "chunk-2d21022f": "31d6cfe0", "chunk-2d213ac8": "31d6cfe0", "chunk-4f2ac058": "31d6cfe0", "chunk-6b561019": "31d6cfe0", "chunk-d71896fa": "31d6cfe0", "forgot-password~home~login~membership~reset-password": "31d6cfe0", "forgot-password": "31d6cfe0", "home~membership": "31d6cfe0", home: "6443900d", membership: "7c95c81c", login: "31d6cfe0", "reset-password": "31d6cfe0", landing: "31d6cfe0", "membership-confirmation": "31d6cfe0", "reset-password-confirmation": "31d6cfe0", graph: "31d6cfe0", "video.js": "31d6cfe0"
            }
            [t]+".css", r=s.p+a, o=document.getElementsByTagName("link"), c=0;
            c<o.length;
            c++) {
                var u=o[c], l=u.getAttribute("data-href")||u.getAttribute("href");
                if("stylesheet"===u.rel&&(l===a||l===r))return e()
            }
            var d=document.getElementsByTagName("style");
            for(c=0;
            c<d.length;
            c++)if((l=(u=d[c]).getAttribute("data-href"))===a||l===r)return e();
            var p=document.createElement("link");
            p.rel="stylesheet", p.type="text/css", p.onload=e, p.onerror=function(e) {
                var a=e&&e.target&&e.target.src||r, o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");
                o.code="CSS_CHUNK_LOAD_FAILED", o.request=a, delete i[t], p.parentNode.removeChild(p), n(o)
            }
            , p.href=r, document.getElementsByTagName("head")[0].appendChild(p)
        }
        ).then(function() {
            i[t]=0
        }
        ));
        var n=r[t];
        if(0!==n)if(n)e.push(n[2]);
        else {
            var a=new Promise(function(e, a) {
                n=r[t]=[e, a]
            }
            );
            e.push(n[2]=a);
            var o,
            c=document.createElement("script");
            c.charset="utf-8",
            c.timeout=120,
            s.nc&&c.setAttribute("nonce", s.nc),
            c.src=function(t) {
                return s.p+"js/"+( {
                    "check-email": "check-email", "forgot-password~home~login~membership~reset-password": "forgot-password~home~login~membership~reset-password", "forgot-password": "forgot-password", "home~membership": "home~membership", home: "home", membership: "membership", login: "login", "reset-password": "reset-password", landing: "landing", "membership-confirmation": "membership-confirmation", "reset-password-confirmation": "reset-password-confirmation", graph: "graph", "video.js": "video.js"
                }
                [t]||t)+"."+ {
                    "check-email": "dd9b71a9", "chunk-2d0a2d66": "9e0ca783", "chunk-2d0b2914": "3312c023", "chunk-2d0b6918": "90886231", "chunk-2d0b6c4d": "6cb33c6f", "chunk-2d0c5aba": "8298874b", "chunk-2d0d4066": "ec90dda2", "chunk-2d21022f": "c6387794", "chunk-2d213ac8": "9d05777c", "chunk-4f2ac058": "107a7473", "chunk-6b561019": "f1b72d97", "chunk-d71896fa": "4293ec79", "forgot-password~home~login~membership~reset-password": "0c254e76", "forgot-password": "d62258a6", "home~membership": "9afa919e", home: "34758d62", membership: "74aca58e", login: "56519b71", "reset-password": "2441e981", landing: "904ad0a4", "membership-confirmation": "01dfdbeb", "reset-password-confirmation": "dec89f36", graph: "ca7fed48", "video.js": "62f6fc4b"
                }
                [t]+".js"
            }
            (t),
            o=function(e) {
                c.onerror=c.onload=null,
                clearTimeout(u);
                var n=r[t];
                if(0!==n) {
                    if(n) {
                        var a=e&&("load"===e.type?"missing": e.type), i=e&&e.target&&e.target.src, o=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");
                        o.type=a,
                        o.request=i,
                        n[1](o)
                    }
                    r[t]=void 0
                }
            }
            ;
            var u=setTimeout(function() {
                o( {
                    type: "timeout", target: c
                }
                )
            }
            , 12e4);
            c.onerror=c.onload=o,
            document.head.appendChild(c)
        }
        return Promise.all(e)
    }
    ,
    s.m=t,
    s.c=a,
    s.d=function(t, e, n) {
        s.o(t, e)||Object.defineProperty(t, e, {
            enumerable: !0, get: n
        }
        )
    }
    ,
    s.r=function(t) {
        "undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }
        ),
        Object.defineProperty(t, "__esModule", {
            value: !0
        }
        )
    }
    ,
    s.t=function(t, e) {
        if(1&e&&(t=s(t)), 8&e)return t;
        if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;
        var n=Object.create(null);
        if(s.r(n), Object.defineProperty(n, "default", {
            enumerable: !0, value: t
        }
        ), 2&e&&"string"!=typeof t)for(var a in t)s.d(n, a, function(e) {
            return t[e]
        }
        .bind(null, a));
        return n
    }
    ,
    s.n=function(t) {
        var e=t&&t.__esModule?function() {
            return t.default
        }
        :function() {
            return t
        }
        ;
        return s.d(e, "a", e),
        e
    }
    ,
    s.o=function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    s.p="/",
    s.oe=function(t) {
        throw console.error(t),
        t
    }
    ;
    var c=window.webpackJsonp=window.webpackJsonp||[],
    u=c.push.bind(c);
    c.push=e,
    c=c.slice();
    for(var l=0;
    l<c.length;
    l++)e(c[l]);
    var d=u;
    o.push([0, "chunk-vendors"]),
    n()
}

( {
    0:function(t, e, n) {
        t.exports=n("56d7")
    }
    , "0dbb":function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return a
        }
        ), n("7f7f");
        var a=function(t, e) {
            return t.reduce(function(t, n) {
                var a=n.name, i=n.value, r=n.withBase, o=void 0===r||r, s=n.shouldApply;
                return(void 0===s||s)&&i?t+" ".concat(o?"".concat(e, "--"): "").concat(a?"".concat(a, "-"): "").concat(i): t
            }
            , e)
        }
    }
    , "0f74":function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return r
        }
        ), n.d(e, "c", function() {
            return o
        }
        ), n.d(e, "d", function() {
            return s
        }
        ), n.d(e, "a", function() {
            return c
        }
        );
        var a, i=n("bd86"), r="eula", o="survey", s="survey_mobile", c=(a= {}
        , Object(i.a)(a, r, {
            title: "MACHINE-BRAIN END USER LICENSE AGREEMENT", description: '\n    <p class="c-dialog__body-text">\n    In order to protect New Noology Network Machine-Brain Twitch Extensions (our “Twitch Extensions” or “Twitch Extension”)\n    and the members of its experimental test subject pool, we require these end user license terms to establish some rules\n    for downloading and using our Twitch Extensions.\n    </p>\n    <p class="c-dialog__body-text">\n    This license is a legal agreement between you and us (New Noology Network) and describes the terms and conditions for\n    using our Twitch Extensions. If you violate these rules please be aware that we may restrict you from using our Twitch Extensions.\n    </p>\n    <p class="c-dialog__body-text">\n    By downloading or using our Twitch Extension, you are agreeing to stick to the rules of these end user license agreement (“EULA”) terms.\n    If you do not agree or cannot comply with these rules, then you must not download or use our Twitch Extensions.\n    </p>\n    <h4 class="c-dialog__subtitle">OWNERSHIP OF TWITCH EXTENSIONS</h4>\n    <p class="c-dialog__body-text">\n    Although we license you permission to install on your Twitch account and use our Twitch Extensions, we still retain sole ownership of our\n    Twitch Extensions. We are also the sole owners of our brands and any content contained in the Twitch Extensions. Therefore, when you download\n    or use our Twitch Extensions, you are being granted a license to use the Twitch Extensions precisely in accordance with this EULA – you are\n    not taking ownership of the Twitch Extensions themselves.\n    </p>\n    <h4 class="c-dialog__subtitle">CONTENT</h4>\n    <p class="c-dialog__body-text">\n    If you record any content, including but not limited to deep neural network (DNN) enabled reconstructions of fMRI or other neurological activity\n    data through our Twitch Extensions, you agree to give us permission to use, copy, modify, adapt, distribute, and publicly display that content and\n    any contained data in whatever way we see fit. This permission is irrevocable, and you also agree to let us permit other third parties to use, copy,\n    modify, adapt, distribute, and publicly display your content. You are not giving up your ownership rights in your content, you are just giving us\n    permission to use it. For example, we may need to copy, reformat, and distribute content that you upload so others can read it. If you do not want to\n    give us these permissions, do not make content available on or through our Twitch Extension.\n    </p>\n    <p class="c-dialog__body-text">\n    Any content you make available through use of our Twitch Extensions must be your own creation or you must have permission or the legal right for said\n    content’s use. You must also agree that you will not make any content available, using the Twitch Extension that infringes the rights of others, including\n    but not limited to research carried out on unaware or involuntary or test subjects.\n    </p>\n    <h4 class="c-dialog__subtitle">UPDATES</h4>\n    <p class="c-dialog__body-text">\n    New Noology Network may make upgrades, updates or patches (our “updates”) to our Twitch Extensions available intermittently but we are not obliged to do so.\n    We are also not obliged to provide ongoing technical support or maintenance of said Twitch Extensions.\n    </p>\n    <h4 class="c-dialog__subtitle">TERMINATION</h4>\n    <p class="c-dialog__body-text">\n    The New Noology Network can and will terminate this EULA if you breach any of its terms. You can terminate also at any time by uninstalling the Twitch Extension\n    from your twitch account, whereupon such time this EULA will be terminated.\n    </p>\n    <p class="c-dialog__body-text">\n    If the EULA is terminated, you will no longer have any of the rights to the Twitch Extension given in this license. However you will retain the rights to things\n    you have created yourself with the Twitch Extension.\n    </p>\n    <h4 class="c-dialog__subtitle">DISCLAIMER OF WARRANTIES</h4>\n    <p class="c-dialog__body-text">\n    ALL NEW NOOLOGY NETWORK MATERIALS AND ALL RELATED COMPONENTS AND INFORMATION ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS WITHOUT ANY WARRANTIES OF ANY KIND,\n    AND NEW NOOLOGY NETWORK EXPRESSLY DISCLAIMS ANY AND ALL WARRANTIES OR CONDITIONS, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES\n    OF MERCHANTABILITY, TITLE, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. YOU ACKNOWLEDGE THAT NEW NOOLOGY NETWORK DOES NOT WARRANT THAT THE NEW NOOLOGY\n    NETWORK MATERIALS WILL BE UNINTERRUPTED, TIMELY, SECURE, ERROR-FREE OR VIRUS-FREE, NOR DOES IT MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED FROM USE OF\n    THE NEW NOOLOGY NETWORK MATERIALS, AND NO INFORMATION, ADVICE OR SERVICES OBTAINED BY YOU FROM NEW NOOLOGY NETWORK OR THROUGH ITS WEBSITES SHALL CREATE ANY WARRANTY\n    NOT EXPRESSLY STATED IN THIS AGREEMENT.\n    </p>\n    <h4 class="c-dialog__subtitle">SEVERABILITY CLAUSE</h4 class="c-dialog__body-subtitle">\n    <p class="c-dialog__body-text">\n    If a provision of this EULA is or becomes illegal, invalid or unenforceable in any jurisdiction, that shall not affect: the validity or enforceability in that jurisdiction\n    of any other provision of this EULA; or the validity or enforceability in other jurisdictions of that or any other provision of this EULA.\n    </p>\n    '
        }
        ), Object(i.a)(a, o, {
            title: "", description: '\n    <p class="c-dialog__body-text">\n    IN ORDER TO BE CONSIDERED FOR A TRIAL MEMBERSHIP WITHIN THE NEW NOOLOGY NETWORK, ALL\n          APPLICANTS MUST COMPLETE A SHORT, 20-QUESTION PSYCHOLOGICAL SURVEY.\n    </p>\n    <p class="c-dialog__body-text">\n      IN EACH PAIR OF SENTENCES BELOW, SIMPLY CHOOSE THE ONE YOU AGREE WITH MOST - MARKING\n      THE DEGREE TO WHICH YOU AGREE WITH ONE STATEMENT OVER THE OTHER BY HOW FAR YOU MOVE\n                        THE LEVER TO EITHER THE LEFT OR RIGHT.\n    </p>\n    <p class="c-dialog__body-text">\n      REMEMBER THAT THERE ARE NO WRONG OR RIGHT ANSWERS AND THERE IS NO TIME LIMIT ON THIS\n      SURVEY. HOWEVER, PLEASE NOTE THAT YOUR TIMING AND HESITANCY OF RESPONSE WILL BE RECORDED.\n    </p>\n    <p class="c-dialog__body-text">\n      WHEN THINKING ABOUT YOUR RESPONSES, IT IS IMPORTANT TO BE EXTREMELY HONEST AND TRUST\n      YOUR INSTINCTS. YOU SHOULD NOT CHOOSE A STATEMENT JUST BECAUSE YOU THINK IT IS HOW\n      OTHERS OR SOCIETY WOULD WANT YOU TO RESPOND. BEING DECEPTIVE WILL ONLY RESULT IN YOUR\n                                APPLICATION BEING REJECTED.\n    </p>\n    '
        }
        ), Object(i.a)(a, s, {
            title: "", description: '\n    <p class="c-dialog__body-text">\n    IN ORDER TO BE CONSIDERED FOR A TRIAL MEMBERSHIP WITHIN THE NEW NOOLOGY NETWORK, ALL\n          APPLICANTS MUST COMPLETE A SHORT, 20-QUESTION PSYCHOLOGICAL SURVEY.\n    </p>\n    <p class="c-dialog__body-text">\n      IN EACH PAIR OF SENTENCES BELOW, SIMPLY CHOOSE THE ONE YOU AGREE WITH MOST - MARKING\n      THE DEGREE TO WHICH YOU AGREE WITH ONE STATEMENT OVER THE OTHER BY HOW FAR YOU CLICK\n                      AND DRAG THE LEVER TO THE TOP OR BOTTOM.\n    </p>\n    <p class="c-dialog__body-text">\n      REMEMBER THAT THERE ARE NO WRONG OR RIGHT ANSWERS AND THERE IS NO TIME LIMIT ON THIS\n      SURVEY. HOWEVER, PLEASE NOTE THAT YOUR TIMING AND HESITANCY OF RESPONSE WILL BE RECORDED.\n    </p>\n    <p class="c-dialog__body-text">\n      WHEN THINKING ABOUT YOUR RESPONSES, IT IS IMPORTANT TO BE EXTREMELY HONEST AND TRUST\n      YOUR INSTINCTS. YOU SHOULD NOT CHOOSE A STATEMENT JUST BECAUSE YOU THINK IT IS HOW\n      OTHERS OR SOCIETY WOULD WANT YOU TO RESPOND. BEING DECEPTIVE WILL ONLY RESULT IN YOUR\n                                APPLICATION BEING REJECTED.\n    </p>\n    '
        }
        ), a)
    }
    , "16e1":function(t, e, n) {
        "use strict";
        n("5a9e");
        var a=740, i=812;
        n.d(e, "b", function() {
            return r
        }
        ), n.d(e, "c", function() {
            return o
        }
        ), n.d(e, "d", function() {
            return s
        }
        ), n.d(e, "e", function() {
            return c
        }
        ), n.d(e, "a", function() {
            return u
        }
        );
        var r=function(t) {
            var e=t.getBoundingClientRect();
            return {
                width: e.width, height: e.height, top: e.y, left: e.x
            }
        }
        , o=function() {
            var t=window.innerWidth<=a, e=window.innerWidth<=i&&window.innerWidth>window.innerHeight;
            return t||e
        }
        , s=function() {
            return"undefined"==typeof window||"function"!=typeof window.matchMedia||!window.matchMedia("(hover: hover)").matches
        }
        , c=function(t) {
            t.requestFullScreen?t.requestFullScreen(): t.mozRequestFullScreen?t.mozRequestFullScreen(): t.webkitRequestFullScreen?t.webkitRequestFullScreen(): t.webkitRequestFullscreen&&t.webkitRequestFullscreen()
        }
        , u=function() {
            document.exitFullscreen?document.exitFullscreen(): document.mozCancelFullScreen?document.mozCancelFullScreen(): document.webkitExitFullscreen&&document.webkitExitFullscreen()
        }
    }
    , 2885:function(t, e, n) {
        "use strict";
        var a=(n("5df3"), n("1c4c"), n("ac6a"), n("1209")), i= {
            name:"NnnMusicIcon", data:function() {
                return {
                    timelines: []
                }
            }
            , props: {
                displayAbsolute: {
                    type: Boolean, required: !1, default: !1
                }
            }
            , computed: {
                soundMuted:function() {
                    return this.$appConfig.audioMuted
                }
            }
            , watch: {
                soundMuted:function(t, e) {
                    t||!e?(this.timelines.forEach(function(t) {
                        return t.pause()
                    }
                    ), this.stopSoundWave()):this.timelines.forEach(function(t) {
                        return t.play()
                    }
                    )
                }
            }
            , methods: {
                startSoundWave:function() {
                    var t=this, e=this.$refs.animatedMusicIcon.querySelectorAll(".c-animated-music-icon__bar");
                    return Array.from(e).map(function(e) {
                        var n=a.a.timeline( {
                            targets: e, delay: 0, easing: "linear", loop: !0, duration: a.a.random(1500, 3500), autoplay: !t.soundMuted
                        }
                        );
                        return n.add( {
                            targets:e, keyframes:[ {
                                translateY: -8
                            }
                            , {
                                translateY: -4
                            }
                            , {
                                translateY: -8
                            }
                            , {
                                translateY: -2
                            }
                            , {
                                translateY: -7
                            }
                            , {
                                translateY: -3
                            }
                            , {
                                translateY: -4
                            }
                            , {
                                translateY: -0
                            }
                            ]
                        }
                        ), n
                    }
                    )
                }
                , stopSoundWave:function() {
                    var t=this.$refs.animatedMusicIcon.querySelectorAll(".c-animated-music-icon__bar");
                    a.a.timeline( {
                        targets: t, delay: 0, easing: "linear", duration: 400
                    }
                    ).add( {
                        targets: t, translateY: 0
                    }
                    )
                }
            }
            , mounted:function() {
                this.timelines=this.startSoundWave()
            }
        }
        , r=n("2877"), o=Object(r.a)(i, function() {
            var t=this, e=t.$createElement, n=t._self._c||e;
            return n("div", {
                class:["c-music-icon", {
                    "c-music-icon--absolute": t.displayAbsolute
                }
                ]
            }
            , [n("button", {
                staticClass:"c-music-icon__btn", on: {
                    click:function(e) {
                        return t.$audio.mute(!t.soundMuted)
                    }
                }
            }
            , [n("div", {
                class:["c-animated-music-icon", {
                    "is-muted": t.soundMuted
                }
                ]
            }
            , [n("div", {
                ref: "animatedMusicIcon", staticClass: "c-animated-music-icon__ctn"
            }
            , [n("span", {
                staticClass: "c-animated-music-icon__bar"
            }
            ), n("span", {
                staticClass: "c-animated-music-icon__bar"
            }
            ), n("span", {
                staticClass: "c-animated-music-icon__bar"
            }
            ), n("span", {
                staticClass: "c-animated-music-icon__bar"
            }
            ), n("span", {
                staticClass: "c-animated-music-icon__bar"
            }
            )])])])])
        }
        , [], !1, null, null, null);
        e.a=o.exports
    }
    , 3005:function(t, e, n) {
        "use strict";
        var a= {
            name:"NnnSelectOption", props: {
                selectOptionClass: {
                    type: String, required: !1, default: "c-input-select__dropdown-item"
                }
                , buttonClass: {
                    type: String, required: !1, default: "c-input-select__dropdown-item-text"
                }
            }
        }
        , i=n("2877"), r=Object(i.a)(a, function() {
            var t=this, e=t.$createElement, n=t._self._c||e;
            return n("li", {
                class: t.selectOptionClass
            }
            , [n("button", {
                class:t.buttonClass, attrs: {
                    type: "button"
                }
                , on: {
                    click:function(e) {
                        return t.$emit("click")
                    }
                }
            }
            , [t._t("default")], 2)])
        }
        , [], !1, null, null, null);
        e.a=r.exports
    }
    , "30f8":function(t) {
        t.exports= {
            v:"5.5.8", fr:29.9700012207031, ip:0, op:26.0000010590017, w:74, h:74, nm:"Close main", ddd:0, assets:[], layers:[ {
                ddd:0, ind:1, ty:3, nm:"Null 2", sr:1, ks: {
                    o: {
                        a: 0, k: 0, ix: 11
                    }
                    , r: {
                        a:1, k:[ {
                            i: {
                                x: [.198], y: [1]
                            }
                            , o: {
                                x: [.811], y: [0]
                            }
                            , t:13.118, s:[0]
                        }
                        , {
                            i: {
                                x: [.833], y: [1]
                            }
                            , o: {
                                x: [.167], y: [0]
                            }
                            , t:24.313, s:[182]
                        }
                        , {
                            t: 29.0000011811942, s: [290]
                        }
                        ], ix:10
                    }
                    , p: {
                        a: 0, k: [37.25, 36.75, 0], ix: 2
                    }
                    , a: {
                        a: 0, k: [0, 0, 0], ix: 1
                    }
                    , s: {
                        a: 0, k: [100, 100, 100], ix: 6
                    }
                }
                , ao:0, ip:0, op:27.0000010997325, st:-166.000006761319, bm:0
            }
            , {
                ddd:0, ind:2, ty:4, nm:"line 02", parent:1, sr:1, ks: {
                    o: {
                        a: 0, k: 100, ix: 11
                    }
                    , r: {
                        a:1, k:[ {
                            i: {
                                x: [.311], y: [1]
                            }
                            , o: {
                                x: [.657], y: [0]
                            }
                            , t:0, s:[0]
                        }
                        , {
                            t: 3.41250013899397, s: [-45]
                        }
                        ], ix:10
                    }
                    , p: {
                        a: 0, k: [-.188, .156, 0], ix: 2
                    }
                    , a: {
                        a: 0, k: [855.563, -431.594, 0], ix: 1
                    }
                    , s: {
                        a: 0, k: [100, 100, 100], ix: 6
                    }
                }
                , ao:0, shapes:[ {
                    ty:"gr", it:[ {
                        ind:0, ty:"sh", ix:1, ks: {
                            a:1, k:[ {
                                i: {
                                    x: .667, y: 1
                                }
                                , o: {
                                    x: .333, y: 0
                                }
                                , t:3.413, s:[ {
                                    i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[850.25, -426.313], [860.875, -436.875]], c: !1
                                }
                                ]
                            }
                            , {
                                i: {
                                    x: .311, y: 1
                                }
                                , o: {
                                    x: .657, y: 0
                                }
                                , t:8, s:[ {
                                    i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[850.579, -425.984], [861.204, -436.546]], c: !1
                                }
                                ]
                            }
                            , {
                                i: {
                                    x: .554, y: 1
                                }
                                , o: {
                                    x: .488, y: 0
                                }
                                , t:13.118, s:[ {
                                    i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[856.107, -431.504], [875.053, -450.45]], c: !1
                                }
                                ]
                            }
                            , {
                                i: {
                                    x: .311, y: 1
                                }
                                , o: {
                                    x: .657, y: 0
                                }
                                , t:20.563, s:[ {
                                    i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[856.107, -431.504], [875.053, -450.45]], c: !1
                                }
                                ]
                            }
                            , {
                                t:24.2500009877227, s:[ {
                                    i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[855.122, -430.545], [855.87, -431.273]], c: !1
                                }
                                ]
                            }
                            ], ix:2
                        }
                        , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                    }
                    , {
                        ty:"st", c: {
                            a: 0, k: [.865456973805, .865456973805, .865456973805, 1], ix: 3
                        }
                        , o: {
                            a: 0, k: 100, ix: 4
                        }
                        , w: {
                            a: 0, k: 2.5, ix: 5
                        }
                        , lc:1, lj:1, ml:4, bm:0, nm:"Stroke 1", mn:"ADBE Vector Graphic - Stroke", hd:!1
                    }
                    , {
                        ty:"tr", p: {
                            a: 0, k: [0, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [0, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100], ix: 3
                        }
                        , r: {
                            a: 0, k: 0, ix: 6
                        }
                        , o: {
                            a: 0, k: 100, ix: 7
                        }
                        , sk: {
                            a: 0, k: 0, ix: 4
                        }
                        , sa: {
                            a: 0, k: 0, ix: 5
                        }
                        , nm:"Transform"
                    }
                    ], nm:"Shape 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                }
                ], ip:0, op:24.00000097754, st:-166.000006761319, bm:0
            }
            , {
                ddd:0, ind:3, ty:4, nm:"line 01", parent:1, sr:1, ks: {
                    o: {
                        a: 0, k: 100, ix: 11
                    }
                    , r: {
                        a:1, k:[ {
                            i: {
                                x: [.311], y: [1]
                            }
                            , o: {
                                x: [.657], y: [0]
                            }
                            , t:0, s:[0]
                        }
                        , {
                            t: 3.41250013899397, s: [45]
                        }
                        ], ix:10
                    }
                    , p: {
                        a: 0, k: [.219, .188, 0], ix: 2
                    }
                    , a: {
                        a: 0, k: [855.594, -431.25, 0], ix: 1
                    }
                    , s: {
                        a: 0, k: [100, 100, 100], ix: 6
                    }
                }
                , ao:0, shapes:[ {
                    ty:"gr", it:[ {
                        ind:0, ty:"sh", ix:1, ks: {
                            a:1, k:[ {
                                i: {
                                    x: .667, y: 1
                                }
                                , o: {
                                    x: .333, y: 0
                                }
                                , t:3.413, s:[ {
                                    i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[860.625, -426.125], [850.563, -436.375]], c: !1
                                }
                                ]
                            }
                            , {
                                i: {
                                    x: .311, y: 1
                                }
                                , o: {
                                    x: .657, y: 0
                                }
                                , t:8, s:[ {
                                    i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[860.625, -426.125], [850.563, -436.375]], c: !1
                                }
                                ]
                            }
                            , {
                                i: {
                                    x: .554, y: 1
                                }
                                , o: {
                                    x: .488, y: 0
                                }
                                , t:13.118, s:[ {
                                    i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[874.168, -412.621], [855.183, -431.804]], c: !1
                                }
                                ]
                            }
                            , {
                                i: {
                                    x: .311, y: 1
                                }
                                , o: {
                                    x: .657, y: 0
                                }
                                , t:20.563, s:[ {
                                    i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[874.168, -412.621], [855.183, -431.804]], c: !1
                                }
                                ]
                            }
                            , {
                                t:24.2500009877227, s:[ {
                                    i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[856.253, -430.592], [855.94, -430.969]], c: !1
                                }
                                ]
                            }
                            ], ix:2
                        }
                        , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                    }
                    , {
                        ty:"st", c: {
                            a: 0, k: [.865456973805, .865456973805, .865456973805, 1], ix: 3
                        }
                        , o: {
                            a: 0, k: 100, ix: 4
                        }
                        , w: {
                            a: 0, k: 2.5, ix: 5
                        }
                        , lc:1, lj:1, ml:4, bm:0, nm:"Stroke 1", mn:"ADBE Vector Graphic - Stroke", hd:!1
                    }
                    , {
                        ty:"tr", p: {
                            a: 0, k: [0, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [0, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100], ix: 3
                        }
                        , r: {
                            a: 0, k: 0, ix: 6
                        }
                        , o: {
                            a: 0, k: 100, ix: 7
                        }
                        , sk: {
                            a: 0, k: 0, ix: 4
                        }
                        , sa: {
                            a: 0, k: 0, ix: 5
                        }
                        , nm:"Transform"
                    }
                    ], nm:"Shape 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                }
                ], ip:0, op:24.00000097754, st:-166.000006761319, bm:0
            }
            , {
                ddd:0, ind:4, ty:4, nm:"six 02", parent:1, sr:1, ks: {
                    o: {
                        a: 0, k: 100, ix: 11
                    }
                    , r: {
                        a: 0, k: 0, ix: 10
                    }
                    , p: {
                        a: 0, k: [.125, -.375, 0], ix: 2
                    }
                    , a: {
                        a: 0, k: [855.875, -432.125, 0], ix: 1
                    }
                    , s: {
                        a: 0, k: [100, 100, 100], ix: 6
                    }
                }
                , ao:0, shapes:[ {
                    ty:"gr", it:[ {
                        ind:0, ty:"sh", ix:1, ks: {
                            a:0, k: {
                                i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[855.75, -458.875], [832.375, -445], [832.25, -418.75], [855.75, -405.375], [879.5, -419.125], [879.375, -444.875]], c: !0
                            }
                            , ix:2
                        }
                        , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                    }
                    , {
                        ty:"st", c: {
                            a: 0, k: [.865456973805, .865456973805, .865456973805, 1], ix: 3
                        }
                        , o: {
                            a: 0, k: 100, ix: 4
                        }
                        , w: {
                            a: 0, k: 2.5, ix: 5
                        }
                        , lc:2, lj:2, bm:0, nm:"Stroke 1", mn:"ADBE Vector Graphic - Stroke", hd:!1
                    }
                    , {
                        ty:"tr", p: {
                            a: 0, k: [0, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [0, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100], ix: 3
                        }
                        , r: {
                            a: 0, k: 0, ix: 6
                        }
                        , o: {
                            a: 0, k: 100, ix: 7
                        }
                        , sk: {
                            a: 0, k: 0, ix: 4
                        }
                        , sa: {
                            a: 0, k: 0, ix: 5
                        }
                        , nm:"Transform"
                    }
                    ], nm:"Shape 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                }
                , {
                    ty:"tm", s: {
                        a:1, k:[ {
                            i: {
                                x: [.198], y: [1]
                            }
                            , o: {
                                x: [.811], y: [0]
                            }
                            , t:13.118, s:[100]
                        }
                        , {
                            t: 21.3750008706216, s: [50]
                        }
                        ], ix:1
                    }
                    , e: {
                        a: 0, k: 50, ix: 2
                    }
                    , o: {
                        a: 0, k: 0, ix: 3
                    }
                    , m:1, ix:2, nm:"Trim Paths 1", mn:"ADBE Vector Filter - Trim", hd:!1
                }
                ], ip:0, op:24.00000097754, st:-166.000006761319, bm:0
            }
            , {
                ddd:0, ind:5, ty:4, nm:"six 01", parent:1, sr:1, ks: {
                    o: {
                        a: 0, k: 100, ix: 11
                    }
                    , r: {
                        a: 0, k: 0, ix: 10
                    }
                    , p: {
                        a: 0, k: [.125, -.375, 0], ix: 2
                    }
                    , a: {
                        a: 0, k: [855.875, -432.125, 0], ix: 1
                    }
                    , s: {
                        a: 0, k: [100, 100, 100], ix: 6
                    }
                }
                , ao:0, shapes:[ {
                    ty:"gr", it:[ {
                        ind:0, ty:"sh", ix:1, ks: {
                            a:0, k: {
                                i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[855.75, -458.875], [832.375, -445], [832.25, -418.75], [855.75, -405.375], [879.5, -419.125], [879.375, -444.875]], c: !0
                            }
                            , ix:2
                        }
                        , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                    }
                    , {
                        ty:"st", c: {
                            a: 0, k: [.865456973805, .865456973805, .865456973805, 1], ix: 3
                        }
                        , o: {
                            a: 0, k: 100, ix: 4
                        }
                        , w: {
                            a: 0, k: 2.5, ix: 5
                        }
                        , lc:2, lj:2, bm:0, nm:"Stroke 1", mn:"ADBE Vector Graphic - Stroke", hd:!1
                    }
                    , {
                        ty:"tr", p: {
                            a: 0, k: [0, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [0, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100], ix: 3
                        }
                        , r: {
                            a: 0, k: 0, ix: 6
                        }
                        , o: {
                            a: 0, k: 100, ix: 7
                        }
                        , sk: {
                            a: 0, k: 0, ix: 4
                        }
                        , sa: {
                            a: 0, k: 0, ix: 5
                        }
                        , nm:"Transform"
                    }
                    ], nm:"Shape 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                }
                , {
                    ty:"tm", s: {
                        a: 0, k: 0, ix: 1
                    }
                    , e: {
                        a:1, k:[ {
                            i: {
                                x: [.198], y: [1]
                            }
                            , o: {
                                x: [.811], y: [0]
                            }
                            , t:13.118, s:[50]
                        }
                        , {
                            t: 21.3750008706216, s: [0]
                        }
                        ], ix:2
                    }
                    , o: {
                        a: 0, k: 0, ix: 3
                    }
                    , m:1, ix:2, nm:"Trim Paths 1", mn:"ADBE Vector Filter - Trim", hd:!1
                }
                ], ip:0, op:24.00000097754, st:-166.000006761319, bm:0
            }
            ], markers:[]
        }
    }
    , "3aad":function(t, e, n) {
        "use strict";
        var a=n("d6bd");
        n.n(a).a
    }
    , "4d41":function(t, e, n) {
        t.exports=n.p+"img/avatar.97546509.png"
    }
    , "56d7":function(t, e, n) {
        "use strict";
        n.r(e), n("cadf"), n("551c"), n("f751"), n("097d");
        var a, i, r=n("2b0e"), o=n("0284"), s=n.n(o), c=(n("8e6e"), n("ac6a"), n("456d"), n("96cf"), n("3b8d")), u=n("bd86"), l=n("2f62"), d=(n("7f7f"), function() {
            var t=this, e=t.$createElement, n=t._self._c||e;
            return n("header", {
                staticClass: "c-header"
            }
            , [n("div", {
                staticClass: "c-header__content c-desktop-visible"
            }
            , [n("nnn-logo", {
                directives:[ {
                    name:"audio", rawName:"v-audio.mouseenter", value: {
                        name: "logo_hover", volume: .5
                    }
                    , expression:"{ name: 'logo_hover', volume: 0.5 }", modifiers: {
                        mouseenter: !0
                    }
                }
                , {
                    name:"audio", rawName:"v-audio.click", value:"button_click", expression:"'button_click'", modifiers: {
                        click: !0
                    }
                }
                ], nativeOn: {
                    click:function(e) {
                        return t.goToLandingPage(e)
                    }
                }
            }
            ), n("div", {
                staticClass: "c-header__action"
            }
            , [n("nnn-transition", {
                attrs: {
                    name: "vt-fade"
                }
            }
            , [n("keep-alive", [n(t.currentHeader, {
                tag:"component", on: {
                    "go-to-login-page": t.handleGoToLoginPage, "go-to-registration-page": t.handleGoToRegistration
                }
            }
            )], 1)], 1), n("nnn-music-icon", {
                attrs: {
                    "display-absolute": ""
                }
            }
            )], 1)], 1), n("div", {
                staticClass: "c-header__content c-mobile-visible"
            }
            , [t.user?t._e():n("nnn-logo", {
                nativeOn: {
                    click:function(e) {
                        return t.goToLandingPage(e)
                    }
                }
            }
            ), n(t.currentMobileHeader, {
                tag:"component", attrs: {
                    "account-content": t.accountContent, profile: t.profile
                }
                , on: {
                    "go-to-landing-page": t.goToLandingPage, "go-to-login-page": t.handleGoToLoginPage, "go-to-membership-page": t.handleGoToRegistration, "toggle-menu-dialog": t.toggleMenuDialog
                }
            }
            )], 1), n("nnn-transition", {
                attrs: {
                    name: "vt-fade"
                }
            }
            , [t.isMenuDialogActive?n("nnn-menu-dialog", {
                attrs: {
                    profile: t.profile
                }
                , on: {
                    close: t.toggleMenuDialog, logout: t.logout, "redirect-to-account-page": t.changeAccountPage
                }
            }
            ):t._e()], 1)], 1)
        }
        ), p=n("5a50"), m=n("f091"), h=n("f487"), f= {
            name:"NnnMenuDialog", components: {
                NnnCloseButton: n("bb4f").a, NnnMedia: h.a
            }
            , data:function() {
                return {
                    isClosing: !1
                }
            }
            , props: {
                profile: {
                    type: Object, required: !0
                }
            }
            , computed: {
                fullName:function() {
                    return"".concat(this.profile.firstName, " ").concat(this.profile.lastName)
                }
            }
            , methods: {
                beforeClose:function() {
                    this.isClosing=!0, document.documentElement.removeAttribute("style")
                }
                , close:function() {
                    var t=this;
                    this.beforeClose(), setTimeout(function() {
                        t.$emit("close")
                    }
                    , 1e3)
                }
                , goToDashboard:function() {
                    this.$emit("redirect-to-account-page", p.j), this.close()
                }
                , goToVideoSubmissions:function() {
                    this.$emit("redirect-to-account-page", p.Y), this.close()
                }
                , goToGlobalConsciousness:function() {
                    this.$emit("redirect-to-account-page", p.t), this.close()
                }
                , goToProfile:function() {
                    this.$emit("redirect-to-account-page", p.I), this.close()
                }
                , logout:function() {
                    this.$emit("logout"), this.close()
                }
            }
            , mounted:function() {
                document.documentElement.style.overflow="hiddden", document.documentElement.style.position="fixed", document.documentElement.style.width="100%"
            }
        }
        , k=n("2877"), x=Object(k.a)(f, function() {
            var t=this, e=t.$createElement, a=t._self._c||e;
            return a("div", {
                class:["c-mobile-header-menu c-mobile-visible", {
                    "is-closing": t.isClosing
                }
                ]
            }
            , [a("div", {
                staticClass: "c-mobile-header-menu__header"
            }
            , [a("nnn-media", {
                attrs: {
                    "img-source": n("4d41"), title: t.fullName, "display-gear-icon": !0, "account-details": !0
                }
                , nativeOn: {
                    click:function(e) {
                        return t.goToProfile(e)
                    }
                }
            }
            )], 1), a("div", {
                staticClass: "c-mobile-header-menu__ctn"
            }
            , [a("ul", {
                staticClass: "c-mobile-header-menu-list"
            }
            , [a("li", {
                staticClass: "c-mobile-header-menu-list__item"
            }
            , [a("a", {
                staticClass:"c-mobile-header-menu-list__item-text", on: {
                    click: t.goToDashboard
                }
            }
            , [t._v("\n          DASHBOARD\n        ")])]), a("li", {
                staticClass: "c-mobile-header-menu-list__item"
            }
            , [a("a", {
                staticClass:"c-mobile-header-menu-list__item-text", on: {
                    click: t.goToGlobalConsciousness
                }
            }
            , [t._v("\n          GLOBAL CONSCIOUSNESS\n        ")])]), a("li", {
                staticClass: "c-mobile-header-menu-list__item"
            }
            , [a("a", {
                staticClass:"c-mobile-header-menu-list__item-text", on: {
                    click: t.goToVideoSubmissions
                }
            }
            , [t._v("\n          VIDEO SUBMISSIONS\n        ")])]), a("li", {
                staticClass: "c-mobile-header-menu-list__item"
            }
            , [a("a", {
                staticClass:"c-mobile-header-menu-list__item-text", on: {
                    click: t.logout
                }
            }
            , [t._v("\n          LOGOUT\n        ")])])])]), a("nnn-close-button", {
                staticClass:"c-mobile-header-menu__close-btn", on: {
                    click: t.close
                }
            }
            )], 1)
        }
        , [], !1, null, null, null).exports, b=n("2885"), g= {
            functional:!0, render(t, e) {
                const {
                    _c: n, _v: a, data: i, children: r=[]
                }
                =e, {
                    class:o, staticClass:s, style:c, staticStyle:u, attrs:l= {}
                    , ...d
                }
                =i;
                return n("svg", {
                    class:[o, s], style:[c, u], attrs:Object.assign( {
                        xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 60 24"
                    }
                    , l), ...d
                }
                , r.concat([n("path", {
                    attrs: {
                        d: "M60 0h-6.3v11.8L42.4.7v12.4L53.7 24H60V0zM38.8 0h-6.3v11.8L21.2.7v12.4L32.5 24h6.3V0zM17.6 0h-6.3v11.8L0 .7v12.4L11.3 24h6.3V0z"
                    }
                }
                )]))
            }
        }
        , y=n("ee97");
        function v(t, e) {
            var n=Object.keys(t);
            if(Object.getOwnPropertySymbols) {
                var a=Object.getOwnPropertySymbols(t);
                e&&(a=a.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                )), n.push.apply(n, a)
            }
            return n
        }
        function E(t) {
            for(var e=1;
            e<arguments.length;
            e++) {
                var n=null!=arguments[e]?arguments[e]: {}
                ;
                e%2?v(n, !0).forEach(function(e) {
                    Object(u.a)(t, e, n[e])
                }
                ):Object.getOwnPropertyDescriptors?Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                )
            }
            return t
        }
        var O=function() {
            return n.e("chunk-2d0b6c4d").then(n.bind(null, "1f24"))
        }
        , A=(a= {}
        , Object(u.a)(a, p.y, function() {
            return n.e("chunk-2d0a2d66").then(n.bind(null, "002b"))
        }
        ), Object(u.a)(a, p.r, ""), Object(u.a)(a, p.S, ""), Object(u.a)(a, p.T, ""), Object(u.a)(a, p.h, ""), Object(u.a)(a, p.w, function() {
            return n.e("chunk-2d21022f").then(n.bind(null, "b737"))
        }
        ), Object(u.a)(a, p.b, function() {
            return n.e("chunk-2d0c5aba").then(n.bind(null, "3fa2"))
        }
        ), a), w=(i= {}
        , Object(u.a)(i, p.y, function() {
            return n.e("chunk-2d213ac8").then(n.bind(null, "ae4b"))
        }
        ), Object(u.a)(i, p.C, function() {
            return n.e("chunk-2d0b2914").then(n.bind(null, "2550"))
        }
        ), Object(u.a)(i, p.w, function() {
            return n.e("chunk-2d0d4066").then(n.bind(null, "5eee"))
        }
        ), Object(u.a)(i, p.r, O), Object(u.a)(i, p.S, O), Object(u.a)(i, p.T, O), Object(u.a)(i, p.h, O), Object(u.a)(i, p.b, function() {
            return n.e("chunk-d71896fa").then(n.bind(null, "d88a"))
        }
        ), i), T= {
            components: {
                NnnLogo: m.a, NnnMenuDialog: x, NnnTransition: y.a, NnnMusicIcon: b.a, NnnLogoIcon: g
            }
            , props: {
                currentRoute: {
                    type: String, default: p.w, required: !0
                }
            }
            , data:function() {
                return {
                    soundMuted: !1, isMenuDialogActive: !1
                }
            }
            , computed:E( {}
            , Object(l.c)( {
                user: "user", profile: "profileData", accountContent: "content"
            }
            ), {
                currentHeader:function() {
                    return A[this.currentRoute]||""
                }
                , currentMobileHeader:function() {
                    return w[this.currentRoute]||""
                }
            }
            ), methods:E( {}
            , Object(l.b)( {
                setContent: "setAccountContent", logoutUser: "logout"
            }
            ), {
                handleGoToLoginPage:function() {
                    this.$router.push( {
                        name: p.y
                    }
                    )
                }
                , handleGoToRegistration:function() {
                    this.$router.push( {
                        name: p.C
                    }
                    )
                }
                , goToLandingPage:function(t) {
                    return t&&t.redirectToProfile?this.setContent( {
                        content: p.I
                    }
                    ):this.user?this.setContent( {
                        content: p.j
                    }
                    ):void this.$router.push( {
                        name: p.w
                    }
                    )
                }
                , changeAccountPage:function(t) {
                    return this.setContent( {
                        content: t
                    }
                    )
                }
                , toggleMenuDialog:function() {
                    this.isMenuDialogActive=!this.isMenuDialogActive
                }
                , logout:function() {
                    var t=Object(c.a)(regeneratorRuntime.mark(function t() {
                        return regeneratorRuntime.wrap(function(t) {
                            for(;
                            ;
                            )switch(t.prev=t.next) {
                                case 0: return t.next=2, this.logoutUser();
                                case 2:this.$router.push( {
                                    name: p.w
                                }
                                );
                                case 3:case"end":return t.stop()
                            }
                        }
                        , t, this)
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }
                ()
            }
            )
        }
        , S=Object(k.a)(T, d, [], !1, null, null, null).exports;
        function D(t, e) {
            var n=Object.keys(t);
            if(Object.getOwnPropertySymbols) {
                var a=Object.getOwnPropertySymbols(t);
                e&&(a=a.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                )), n.push.apply(n, a)
            }
            return n
        }
        var _= {
            name:"NnnCanvas", data:function() {
                return {
                    renderer: null, currentScene: null, initialPreset: null
                }
            }
            , computed:function(t) {
                for(var e=1;
                e<arguments.length;
                e++) {
                    var n=null!=arguments[e]?arguments[e]: {}
                    ;
                    e%2?D(n, !0).forEach(function(e) {
                        Object(u.a)(t, e, n[e])
                    }
                    ):Object.getOwnPropertyDescriptors?Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)):D(n).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    )
                }
                return t
            }
            ( {}
            , Object(l.c)( {
                preset: "preset"
            }
            )), watch: {
                preset:function(t) {
                    this.initialPreset=t, this.grid&&this.grid.animateToPreset(t.name, t.duration)
                }
            }
            , mounted:function() {
                var t=this;
                Promise.all([n.e("chunk-4f2ac058"), n.e("chunk-6b561019")]).then(n.bind(null, "ae1a")).then(function(e) {
                    t.grid=new e.default( {
                        container: t.$refs.canvasElement
                    }
                    ), t.grid.start(), t.initialPreset&&t.grid.animateToPreset(t.initialPreset.name, 0), window.addEventListener("resize", function() {
                        setTimeout(function() {
                            t.grid.onResize()
                        }
                        , 1500)
                    }
                    )
                }
                )
            }
        }
        , R=(n("3aad"), Object(k.a)(_, function() {
            var t=this.$createElement;
            return(this._self._c||t)("div", {
                ref:"canvasElement", attrs: {
                    id: "canvas"
                }
            }
            )
        }
        , [], !1, null, "27483852", null)).exports, j=n("a080"), N=n("16e1");
        function I(t, e) {
            var n=Object.keys(t);
            if(Object.getOwnPropertySymbols) {
                var a=Object.getOwnPropertySymbols(t);
                e&&(a=a.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                )), n.push.apply(n, a)
            }
            return n
        }
        var P= {
            name:"NnnBackgroundContent", props: {
                currentRoute: {
                    type: Object, required: !0
                }
            }
            , data:function() {
                return {
                    glitchAnimationClasses: {}
                    , isTouchAvailable: Object(N.d)(), translateVideos: !1
                }
            }
            , computed:function(t) {
                for(var e=1;
                e<arguments.length;
                e++) {
                    var n=null!=arguments[e]?arguments[e]: {}
                    ;
                    e%2?I(n, !0).forEach(function(e) {
                        Object(u.a)(t, e, n[e])
                    }
                    ):Object.getOwnPropertyDescriptors?Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)):I(n).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    )
                }
                return t
            }
            ( {}
            , Object(l.c)( {
                hasGlobalError: "hasGlobalError"
            }
            ), {
                animationClass:function() {
                    return this.meta.animation||""
                }
                , showVideo:function() {
                    return this.currentRouteName===j.e||this.currentRouteName===j.d
                }
                , meta:function() {
                    return this.currentRoute.meta
                }
                , currentRouteName:function() {
                    return this.currentRoute.name
                }
            }
            ), watch: {
                hasGlobalError:function(t, e) {
                    this.showVideo&&(this.$refs.errorVideo.currentTime=0, this.glitchAnimationClasses= {
                        "has-starting-animation": this.currentRoute.name===j.e&&t, "has-ending-animation": this.currentRoute.name===j.e&&!t
                    }
                    , t&&e!==t?this.setActiveVideo(this.$refs.errorVideo):t||e===t||(this.setActiveVideo(this.$refs.loginVideo), this.$refs.errorVideo.pause()))
                }
                , meta:function(t, e) {
                    this.startLandingVideo(t.hasHeadVideo, e&&e.hasHeadVideo)
                }
                , currentRouteName:function(t, e) {
                    var n=this;
                    return t===j.e?(this.translateVideos=!0, e===j.d&&this.startLandingToLoginVideo(), void setTimeout(function() {
                        n.startLoginVideo()
                    }
                    , e===j.d?600:0)):t===j.d?(this.translateVideos=!1, e===j.e&&this.startLoginToLandingVideo(), void setTimeout(function() {
                        n.startLandingVideo()
                    }
                    , e===j.e?600:0)):void 0
                }
            }
            , methods: {
                getSourceBasedOnTouchDetection:function(t) {
                    return Object(N.d)()?"".concat(t, ".mp4"): "".concat(t, ".webm")
                }
                , getTypeBasedOnTouchDetection:function() {
                    return Object(N.d)()?"video/mp4": "video/webm"
                }
                , startLandingVideo:function() {
                    this.setActiveVideo(this.$refs.landingVideo)
                }
                , startLandingToLoginVideo:function() {
                    this.setActiveVideo(this.$refs.landingToLoginVideo)
                }
                , startLoginVideo:function() {
                    this.setActiveVideo(this.$refs.loginVideo)
                }
                , startLoginToLandingVideo:function() {
                    this.setActiveVideo(this.$refs.loginToLandingVideo)
                }
                , setInactiveVideoElements:function() {
                    this.getVideoRefs().forEach(function(t) {
                        t&&t.classList.remove("is-active")
                    }
                    )
                }
                , setActiveVideo:function(t) {
                    var e=this;
                    this.$nextTick(function() {
                        t&&(e.setInactiveVideoElements(), t.classList.add("is-active"), t.play())
                    }
                    )
                }
                , getVideoRefs:function() {
                    return[this.$refs.landingVideo, this.$refs.landingToLoginVideo, this.$refs.loginVideo, this.$refs.loginToLandingVideo, this.$refs.errorVideo]
                }
            }
            , mounted:function() {
                if(this.showVideo) {
                    if(this.currentRouteName===j.d)return this.translateVideos=!1, void this.startLandingVideo();
                    this.startLoginVideo(), this.translateVideos=!0
                }
            }
        }
        , C=Object(k.a)(P, function() {
            var t=this, e=t.$createElement, n=t._self._c||e;
            return n("div", {
                staticClass: "u-flex-center u-position-absolute-full"
            }
            , [n("transition", {
                attrs: {
                    name: "vt-fade-slide-vertical"
                }
            }
            , [t.showVideo?n("div", {
                staticClass: "u-position-absolute-full u-flex-center"
            }
            , [n("div", {
                class:["c-head-videos", {
                    "c-head-videos--translated": t.translateVideos
                }
                ]
            }
            , [n("div", {
                staticClass: "c-head-videos__item"
            }
            , [n("video", {
                ref:"landingVideo", class:["c-head-video", t.animationClass, t.glitchAnimationClasses], attrs: {
                    preload: "auto", loop: "", muted: "", playsinline: ""
                }
                , domProps: {
                    muted: !0
                }
            }
            , [t.isTouchAvailable?t._e():n("source", {
                attrs: {
                    src: "/videos/head-landing.webm", type: "video/webm"
                }
            }
            ), n("source", {
                attrs: {
                    src: "/videos/head-landing.mp4", type: "video/mp4"
                }
            }
            )]), n("video", {
                ref:"landingToLoginVideo", staticClass:"c-head-video c-head-video--landing-to-login", attrs: {
                    muted: "", playsinline: "", preload: "auto"
                }
                , domProps: {
                    muted: !0
                }
            }
            , [t.isTouchAvailable?t._e():n("source", {
                attrs: {
                    src: "/videos/head-landing-to-login.webm", type: "video/webm"
                }
            }
            ), n("source", {
                attrs: {
                    src: "/videos/head-landing-to-login.mp4", type: "video/mp4"
                }
            }
            )]), n("video", {
                ref:"loginVideo", staticClass:"c-head-video c-head-video--login", attrs: {
                    loop: "", muted: "", playsinline: "", preload: "auto"
                }
                , domProps: {
                    muted: !0
                }
            }
            , [t.isTouchAvailable?t._e():n("source", {
                attrs: {
                    src: "/videos/head-login.webm", type: "video/webm"
                }
            }
            ), n("source", {
                attrs: {
                    src: "/videos/head-login.mp4", type: "video/mp4"
                }
            }
            )]), n("video", {
                ref:"loginToLandingVideo", staticClass:"c-head-video c-head-video--login-to-landing", attrs: {
                    muted: "", playsinline: "", preload: "auto"
                }
                , domProps: {
                    muted: !0
                }
            }
            , [t.isTouchAvailable?t._e():n("source", {
                attrs: {
                    src: "/videos/head-login-to-landing.webm", type: "video/webm"
                }
            }
            ), n("source", {
                attrs: {
                    src: "/videos/head-login-to-landing.mp4", type: "video/mp4"
                }
            }
            )]), n("video", {
                ref:"errorVideo", class:["c-head-video", t.glitchAnimationClasses], attrs: {
                    loop: "", muted: "", playsinline: "", preload: "auto"
                }
                , domProps: {
                    muted: !0
                }
            }
            , [t.isTouchAvailable?t._e():n("source", {
                attrs: {
                    src: "/videos/head-error.webm", type: "video/webm"
                }
            }
            ), n("source", {
                attrs: {
                    src: "/videos/head-error.mp4", type: "video/mp4"
                }
            }
            )])])])]):t._e()])], 1)
        }
        , [], !1, null, null, null).exports, V= {
            name:"NnnLayout", components: {
                NnnHeader: S, NnnCanvas: R, NnnTransition: y.a, NnnBackgroundContent: C
            }
            , props: {
                currentRoute: {
                    type: Object, required: !0
                }
            }
            , computed: {
                transitionName:function() {
                    return this.currentRoute&&this.currentRoute.name===p.b?"vt-fade-slide-vertical-dash": "vt-fade-slide-vertical"
                }
            }
        }
        , B=Object(k.a)(V, function() {
            var t=this, e=t.$createElement, n=t._self._c||e;
            return n("div", {
                staticClass:"l-main", class:["l-main", {
                    "l-main--has-head-video": "landing"===t.currentRoute.name||"login"===t.currentRoute.name
                }
                ]
            }
            , [n("div", {
                staticClass: "l-main__canvas u-flex-center"
            }
            , [n("nnn-background-content", {
                attrs: {
                    "current-route": t.currentRoute
                }
            }
            ), n("div", {
                staticClass: "c-canvas-bg"
            }
            ), n("nnn-canvas")], 1), n("div", {
                staticClass: "l-main__top"
            }
            , [n("nnn-header", {
                attrs: {
                    "current-route": t.currentRoute.name
                }
            }
            )], 1), n("div", {
                staticClass: "l-main__body"
            }
            , [n("nnn-transition", {
                attrs: {
                    "toggle-scroll-during-animation": "", name: t.transitionName
                }
            }
            , [n("router-view")], 1)], 1)])
        }
        , [], !1, null, null, null).exports, G=(n("a481"), n("6a64")), L=n.n(G), M=n("1209"), F=n("9301"), H=n("f320"), U=n("0f74"), W= {
            name:"NnnSplashScreen", components: {
                NnnButton: F.a, NnnSimpleDialog: H.a, NnnTransition: y.a
            }
            , data:function() {
                return {
                    showDialog: !1, dialogType: U.b, isClosing: !1, letterAnimationFinished: !1
                }
            }
            , props: {
                fetchingInProcces: {
                    type: Boolean, required: !0
                }
            }
            , methods: {
                openEulaModal:function() {
                    this.showDialog=!0
                }
                , handleClick:function() {
                    var t=this;
                    this.$appConfig.startAmbientAudio=!0, this.isClosing=!0, setTimeout(function() {
                        t.$emit("agree")
                    }
                    , 900)
                }
                , animateText:function() {
                    var t=this;
                    if(this.$refs.textToGet&&this.$refs.textToSet&&document.querySelector(".js-agree-btn")) {
                        var e=this.$refs.textToGet, n=this.$refs.textToSet, a=document.querySelector(".js-agree-btn");
                        n.innerHTML=e.textContent.replace(/\S/g, "<span class='letter'>$&</span>"), M.a.timeline().add( {
                            targets:".js-splash-desc-animation-set .letter", opacity:[0, 1], easing:"easeInOutQuad", duration:500, delay:function(t, e) {
                                return 30*(e+1)
                            }
                        }
                        ).add( {
                            targets: e, opacity: [0, 1], duration: 100
                        }
                        ).add( {
                            targets:n, opacity:[1, 0], duration:100, complete:function() {
                                t.letterAnimationFinished=!0
                            }
                        }
                        ).add( {
                            targets: a, opacity: [0, 1], translateY: [60, 0], duration: 700, easing: "easeInOutQuad"
                        }
                        , "-=500")
                    }
                }
            }
            , created:function() {
                window.location.pathname===p.q&&(this.showDialog=!0)
            }
            , mounted:function() {
                var t=this;
                this.lottieInstance=L.a.loadAnimation( {
                    container: this.$refs.logo, renderer: "svg", loop: !0, autoplay: !1, animationData: n("edf4")
                }
                ), setTimeout(function() {
                    t.lottieInstance.play(), t.animateText()
                }
                , 800)
            }
            , beforeDestroy:function() {
                this.lottieInstance.destroy()
            }
        }
        ;
        function Y(t, e) {
            var n=Object.keys(t);
            if(Object.getOwnPropertySymbols) {
                var a=Object.getOwnPropertySymbols(t);
                e&&(a=a.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                )), n.push.apply(n, a)
            }
            return n
        }
        function $(t) {
            for(var e=1;
            e<arguments.length;
            e++) {
                var n=null!=arguments[e]?arguments[e]: {}
                ;
                e%2?Y(n, !0).forEach(function(e) {
                    Object(u.a)(t, e, n[e])
                }
                ):Object.getOwnPropertyDescriptors?Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)):Y(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                )
            }
            return t
        }
        var q= {
            name:"app", components: {
                NnnLayout:B, NnnSplashScreen:Object(k.a)(W, function() {
                    var t=this, e=t.$createElement, n=t._self._c||e;
                    return n("div", {
                        class:["c-splash", {
                            "is-closing": t.isClosing
                        }
                        ]
                    }
                    , [n("div", {
                        ref: "logo", staticClass: "c-splash__content"
                    }
                    ), n("div", {
                        class:["c-splash__footer", {
                            "u-pointer-events-none": !t.letterAnimationFinished
                        }
                        ]
                    }
                    , [n("p", {
                        staticClass: "c-splash__desc"
                    }
                    , [n("span", {
                        ref: "textToGet", staticClass: "c-splash__desc-text js-splash-desc-animation-get"
                    }
                    , [t._v("\n        BY PROCEEDING BEYOND THIS POINT YOU ACCEPT ALL TERMS OF OUR\n        "), n("a", {
                        staticClass:"c-link c-link--white", attrs: {
                            tabindex: "0"
                        }
                        , on: {
                            click: t.openEulaModal
                        }
                    }
                    , [t._v("MACHINE-BRAIN END USER LICENSE AGREEMENT")]), t._v("\n        INCLUDING USE OF SOPHISTICATED TRACKING ANALYTICS (COOKIES) FOR\n        PERSONAL INTERNET USAGE AND/OR RETENTION OF BIOLOGICAL DATA.\n      ")]), n("span", {
                        ref:"textToSet", class:["c-splash__desc-animated-text js-splash-desc-animation-set", {
                            "u-pointer-events-none": t.letterAnimationFinished
                        }
                        ]
                    }
                    )]), n("div", {
                        staticClass: "c-splash__btn js-agree-btn"
                    }
                    , [n("nnn-button", {
                        directives:[ {
                            name:"audio", rawName:"v-audio.click", value:"intro", expression:"'intro'", modifiers: {
                                click: !0
                            }
                        }
                        ], attrs: {
                            color: "primary", "font-size": "lg", animate: !0, disableClick: !0, disableHover: !0
                        }
                        , on: {
                            click: t.handleClick
                        }
                    }
                    , [t._v("I AGREE")])], 1)]), n("nnn-transition", {
                        attrs: {
                            name: "vt-fade"
                        }
                    }
                    , [t.showDialog?n("nnn-simple-dialog", {
                        staticClass:"c-dialog--licence", attrs: {
                            type: t.dialogType
                        }
                        , on: {
                            close:function(e) {
                                t.showDialog=!1
                            }
                        }
                    }
                    ):t._e()], 1)], 1)
                }
                , [], !1, null, null, null).exports
            }
            , data:function() {
                return {
                    loading: !0, displaySplashScreen: !0, currentRoute: ""
                }
            }
            , watch: {
                $route:function(t) {
                    this.currentRoute=t
                }
            }
            , computed:$( {}
            , Object(l.c)( {
                user: "user", hasGlobalError: "hasGlobalError", isLoadedProfile: "isLoadedProfile"
            }
            )), methods:$( {}
            , Object(l.b)( {
                fetchArticles: "fetchArticles", getProfile: "getProfileData", prefetchDashboardData: "prefetchDashboardData"
            }
            ), {
                onAgree:function() {
                    this.displaySplashScreen=!1
                }
            }
            ), created:function() {
                var t=this;
                this.prefetchDashboardData().then(Object(c.a)(regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function(e) {
                        for(;
                        ;
                        )switch(e.prev=e.next) {
                            case 0: t.loading=!1;
                            case 1: case"end": return e.stop()
                        }
                    }
                    , e)
                }
                ))).catch(function() {
                    t.loading=!1
                }
                )
            }
        }
        , K=(n("5c0b"), Object(k.a)(q, function() {
            var t=this, e=t.$createElement, n=t._self._c||e;
            return n("div", {
                class: {
                    "has-error": t.hasGlobalError
                }
                , attrs: {
                    id: "app"
                }
            }
            , [n("transition", {
                attrs: {
                    name: "vt-fade", mode: "out-in"
                }
            }
            , [t.displaySplashScreen?n("nnn-splash-screen", {
                attrs: {
                    "fetching-in-procces": t.loading
                }
                , on: {
                    agree: t.onAgree
                }
            }
            ):n("nnn-layout", {
                attrs: {
                    "current-route": t.currentRoute
                }
            }
            )], 1)], 1)
        }
        , [], !1, null, null, null)).exports, z=n("2593"), J=n.n(z), X=n("0e44"), Q=n("a8db"), Z=n("c707"), tt=n.n(Z), et=n("3eea"), nt=n.n(et), at=n("dd61"), it=n.n(at), rt=n("d225"), ot=n("b0b4"), st=n("308d"), ct=n("6bb5"), ut=n("4e2b"), lt=n("bc3a"), dt=n.n(lt), pt=function() {
            function t(e) {
                Object(rt.a)(this, t), this.client=dt.a.create(e)
            }
            return Object(ot.a)(t, [ {
                key:"setInterceptor", value:function() {
                    this.client.interceptors.request.use(function() {
                        var t=Object(c.a)(regeneratorRuntime.mark(function t(e) {
                            var n, a;
                            return regeneratorRuntime.wrap(function(t) {
                                for(;
                                ;
                                )switch(t.prev=t.next) {
                                    case 0: return t.next=2, JSON.parse(localStorage.getItem("vuex"));
                                    case 2:return n=t.sent, (a=n.AuthStore)&&a.token&&Object.assign(e.headers, Object(u.a)( {}
                                    , "access-token", a.token)), t.abrupt("return", e);
                                    case 6: case"end": return t.stop()
                                }
                            }
                            , t)
                        }
                        ));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }
                    ())
                }
            }
            , {
                key:"attachHeaders", value:function(t) {
                    Object.assign(this.client.defaults.headers, t)
                }
            }
            , {
                key:"detachHeader", value:function(t) {
                    delete this.client.defaults.headers[t]
                }
            }
            ]), t
        }
        (), mt=function(t) {
            function e() {
                var t;
                return Object(rt.a)(this, e), (t=Object(st.a)(this, Object(ct.a)(e).call(this, {
                    baseURL: "https://nnn-api.herokuapp.com/v1"
                }
                ))).setInterceptor(), t
            }
            return Object(ut.a)(e, t), e
        }
        (pt), ht=n("3022"), ft=function(t) {
            var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]: [];
            return {
                userData: {
                    name: "userData", value: nt()(t, e)
                }
            }
        }
        ;
        function kt(t, e) {
            var n=Object.keys(t);
            if(Object.getOwnPropertySymbols) {
                var a=Object.getOwnPropertySymbols(t);
                e&&(a=a.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                )), n.push.apply(n, a)
            }
            return n
        }
        var xt="/users/log", bt="/users/", gt="/user/forgot_password/%s", yt="/reset-password", vt="/users/verify", Et="/users/%s/change_email_verify", Ot="/users/available", At=new(function(t) {
            function e() {
                return Object(rt.a)(this, e), Object(st.a)(this, Object(ct.a)(e).apply(this, arguments))
            }
            return Object(ut.a)(e, t), Object(ot.a)(e, [ {
                key:"login", value:function() {
                    var t=Object(c.a)(regeneratorRuntime.mark(function t(e, n) {
                        var a, i;
                        return regeneratorRuntime.wrap(function(t) {
                            for(;
                            ;
                            )switch(t.prev=t.next) {
                                case 0:return t.next=2, this.client.post(xt, {
                                    username: e, password: n
                                }
                                );
                                case 2:return a=t.sent, i=a.data, this.attachHeaders(Object(u.a)( {}
                                , "access-token", i.accessToken)), t.abrupt("return", i);
                                case 6:case"end":return t.stop()
                            }
                        }
                        , t, this)
                    }
                    ));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }
                ()
            }
            , {
                key:"register", value:function(t, e) {
                    var n=ft(e);
                    return this.client.post(bt, function(t) {
                        for(var e=1;
                        e<arguments.length;
                        e++) {
                            var n=null!=arguments[e]?arguments[e]: {}
                            ;
                            e%2?kt(n, !0).forEach(function(e) {
                                Object(u.a)(t, e, n[e])
                            }
                            ):Object.getOwnPropertyDescriptors?Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)):kt(n).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }
                            )
                        }
                        return t
                    }
                    ( {}
                    , t, {
                        properties: n
                    }
                    ))
                }
            }
            , {
                key:"forgotPassword", value:function(t) {
                    return this.client.get(Object(ht.format)(gt, t))
                }
            }
            , {
                key:"resetPassword", value:function(t) {
                    return this.client.post(yt, {
                        password: t
                    }
                    )
                }
            }
            , {
                key:"verifyAccount", value:function(t) {
                    return this.client.post(vt, {
                        code: t
                    }
                    )
                }
            }
            , {
                key:"verifyEmail", value:function(t, e) {
                    return this.client.post(Object(ht.format)(Et, t), {
                        code: e
                    }
                    )
                }
            }
            , {
                key:"checkEmailAndUsernameAvailability", value:function(t) {
                    return this.client.post(Ot, t)
                }
            }
            ]), e
        }
        (mt)), wt= {
            countries: {}
        }
        , Tt=new(function(t) {
            function e() {
                return Object(rt.a)(this, e), Object(st.a)(this, Object(ct.a)(e).apply(this, arguments))
            }
            return Object(ut.a)(e, t), Object(ot.a)(e, [ {
                key:"fetchCountries", value:function() {
                    return 0===Object.keys(wt.countries).length?this.client.get("./countries.json").then(function(t) {
                        var e=t.data;
                        return wt.countries=e, e
                    }
                    ):new Promise(function(t) {
                        return t(wt.countries)
                    }
                    )
                }
            }
            ]), e
        }
        (pt));
        function St(t, e) {
            var n=Object.keys(t);
            if(Object.getOwnPropertySymbols) {
                var a=Object.getOwnPropertySymbols(t);
                e&&(a=a.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                )), n.push.apply(n, a)
            }
            return n
        }
        function Dt(t) {
            for(var e=1;
            e<arguments.length;
            e++) {
                var n=null!=arguments[e]?arguments[e]: {}
                ;
                e%2?St(n, !0).forEach(function(e) {
                    Object(u.a)(t, e, n[e])
                }
                ):Object.getOwnPropertyDescriptors?Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)):St(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                )
            }
            return t
        }
        var _t=["US", "CA"], Rt= {
            state: {
                token:null, refreshToken:null, user:null, error:null, forgotPasswordEmail:"", countries: {}
                , currentMembershipStep: 0
            }
            , mutations: {
                setTokens:function(t, e) {
                    var n=e.accessToken, a=e.refreshToken;
                    t.token=n, t.refreshToken=a
                }
                , setUser:function(t, e) {
                    t.user=e
                }
                , setError:function(t, e) {
                    t.error=e
                }
                , setForgotPasswordEmail:function(t, e) {
                    t.forgotPasswordEmail=e
                }
                , setCountries:function(t, e) {
                    t.countries=e
                }
                , setMembershipStep:function(t, e) {
                    t.currentMembershipStep=e
                }
            }
            , actions: {
                login:function() {
                    var t=Object(c.a)(regeneratorRuntime.mark(function t(e, n) {
                        var a, i, r;
                        return regeneratorRuntime.wrap(function(t) {
                            for(;
                            ;
                            )switch(t.prev=t.next) {
                                case 0:return a=e.commit, i=n.username, r=n.password, t.abrupt("return", At.login(i, r).then(function(t) {
                                    var e=t.accessToken, n=t.refreshToken, i=Object(Q.a)(t, ["accessToken", "refreshToken"]);
                                    a("setUser", i), a("setTokens", {
                                        accessToken: e, refreshToken: n
                                    }
                                    ), a("setError", null)
                                }
                                ).catch(function(t) {
                                    throw a("setError", t), t
                                }
                                ));
                                case 3:case"end":return t.stop()
                            }
                        }
                        , t)
                    }
                    ));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }
                (), register:function(t, e) {
                    var n=t.commit, a=e.formData, i=a.username, r=a.password, o=(a.confirmPassword, a.email), s=Object(Q.a)(a, ["username", "password", "confirmPassword", "email"]);
                    return At.register( {
                        username: i, password: r, email: o, displayname: "".concat(s.firstName, " ").concat(s.lastName)
                    }
                    , s).catch(function(t) {
                        throw n("setError", t), t
                    }
                    )
                }
                , verifyAccount:function(t, e) {
                    var n=e.code;
                    return At.verifyAccount(n)
                }
                , verifyEmail:function(t, e) {
                    var n=t.state, a=t.commit, i=e.code;
                    return At.verifyEmail(n.user.username, i).catch(function(t) {
                        throw a("setError", t), t
                    }
                    )
                }
                , sendForgotPasswordRequest:function() {
                    var t=Object(c.a)(regeneratorRuntime.mark(function t(e, n) {
                        var a, i;
                        return regeneratorRuntime.wrap(function(t) {
                            for(;
                            ;
                            )switch(t.prev=t.next) {
                                case 0: return a=e.commit, i=n.email, t.prev=2, t.next=5, At.forgotPassword(i);
                                case 5: a("setForgotPasswordEmail", i), t.next=11;
                                break;
                                case 8: t.prev=8, t.t0=t.catch(2), a("setError", t.t0);
                                case 11: case"end": return t.stop()
                            }
                        }
                        , t, null, [[2, 8]])
                    }
                    ));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }
                (), resetPassword:function() {
                    var t=Object(c.a)(regeneratorRuntime.mark(function t(e, n) {
                        var a, i;
                        return regeneratorRuntime.wrap(function(t) {
                            for(;
                            ;
                            )switch(t.prev=t.next) {
                                case 0: return a=e.commit, i=n.password, t.prev=2, t.next=5, At.resetPassword(i);
                                case 5: t.next=10;
                                break;
                                case 7: t.prev=7, t.t0=t.catch(2), a("setError", t.t0);
                                case 10: case"end": return t.stop()
                            }
                        }
                        , t, null, [[2, 7]])
                    }
                    ));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }
                (), fetchCountries:function() {
                    var t=Object(c.a)(regeneratorRuntime.mark(function t(e) {
                        var n, a;
                        return regeneratorRuntime.wrap(function(t) {
                            for(;
                            ;
                            )switch(t.prev=t.next) {
                                case 0: return n=e.commit, t.prev=1, t.next=4, Tt.fetchCountries();
                                case 4: a=t.sent, n("setCountries", a), t.next=11;
                                break;
                                case 8: t.prev=8, t.t0=t.catch(1), n("setError", t.t0);
                                case 11: case"end": return t.stop()
                            }
                        }
                        , t, null, [[1, 8]])
                    }
                    ));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }
                (), logout:function(t) {
                    var e=t.commit;
                    try {
                        e("setUser", null), e("setTokens", {
                            accessToken: null, refreshToken: null
                        }
                        )
                    }
                    catch(t) {
                        e("setError", t)
                    }
                }
                , checkEmailAndUsernameAvailability:function() {
                    var t=Object(c.a)(regeneratorRuntime.mark(function t(e, n) {
                        var a, i, r;
                        return regeneratorRuntime.wrap(function(t) {
                            for(;
                            ;
                            )switch(t.prev=t.next) {
                                case 0:return a=e.commit, i=n.username, r=n.email, t.abrupt("return", At.checkEmailAndUsernameAvailability( {
                                    username: i, email: r
                                }
                                ).then(function(t) {
                                    return t.data
                                }
                                ).catch(function(t) {
                                    return a("setError", t)
                                }
                                ));
                                case 3:case"end":return t.stop()
                            }
                        }
                        , t)
                    }
                    ));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }
                ()
            }
            , getters: {
                user:function(t) {
                    return t.user
                }
                , authError:function(t) {
                    return t.error
                }
                , forgotPasswordEmail:function(t) {
                    return t.forgotPasswordEmail
                }
                , countries:function(t) {
                    var e=it()(nt()(t.countries, _t), function(t, e) {
                        return Dt( {}
                        , t, {
                            key: e
                        }
                        )
                    }
                    ), n=tt()(e, "name").map(function(t) {
                        return t.key
                    }
                    ).reduce(function(e, n) {
                        return Dt( {}
                        , e, Object(u.a)( {}
                        , n, t.countries[n]))
                    }
                    , {}
                    );
                    return Dt( {}
                    , J()(t.countries, _t), {}
                    , n)
                }
                , currentMembershipStep:function(t) {
                    return t.currentMembershipStep
                }
            }
        }
        , jt= {
            state: {
                hasGlobalError:!1, error: {}
            }
            , mutations: {
                setDisplayErrorsGlobally:function(t, e) {
                    t.hasGlobalError=e
                }
                , putError:function(t, e) {
                    t.error=e
                }
            }
            , actions: {
                displayErrorsGlobally:function(t, e) {
                    var n=t.commit, a=(e|| {}
                    ).duration||p.n;
                    try {
                        return n("setDisplayErrorsGlobally", !0), new Promise(function(t) {
                            setTimeout(function() {
                                n("setDisplayErrorsGlobally", !1), t()
                            }
                            , a)
                        }
                        )
                    }
                    catch(t) {
                        n("putError", t)
                    }
                }
            }
            , getters: {
                hasGlobalError:function(t) {
                    return t.hasGlobalError
                }
            }
        }
        , Nt=n("75fc");
        function It(t, e) {
            var n=Object.keys(t);
            if(Object.getOwnPropertySymbols) {
                var a=Object.getOwnPropertySymbols(t);
                e&&(a=a.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                )), n.push.apply(n, a)
            }
            return n
        }
        var Pt=function(t) {
            var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]: "";
            return t?t.value: e
        }
        , Ct=function(t) {
            return function(t) {
                for(var e=1;
                e<arguments.length;
                e++) {
                    var n=null!=arguments[e]?arguments[e]: {}
                    ;
                    e%2?It(n, !0).forEach(function(e) {
                        Object(u.a)(t, e, n[e])
                    }
                    ):Object.getOwnPropertyDescriptors?Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)):It(n).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    )
                }
                return t
            }
            ( {
                email: t.email, username: t.username
            }
            , Pt(t.properties.userData, {}
            ), {
                trialLevel:Pt(t.properties.trial, 0), videoTrials:Pt(t.properties.video_trials, {}
                )
            }
            )
        }
        , Vt=function(t) {
            function e() {
                return Object(rt.a)(this, e), Object(st.a)(this, Object(ct.a)(e).call(this, {
                    baseURL: "https://video-api-proxy.herokuapp.com"
                }
                ))
            }
            return Object(ut.a)(e, t), e
        }
        (pt), Bt=n("a60f"), Gt=["http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4", "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4", "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"], Lt="/videos/%s", Mt=new(function(t) {
            function e() {
                return Object(rt.a)(this, e), Object(st.a)(this, Object(ct.a)(e).apply(this, arguments))
            }
            return Object(ut.a)(e, t), Object(ot.a)(e, [ {
                key:"fetchVideos", value:function() {
                    var t=Object(c.a)(regeneratorRuntime.mark(function t() {
                        var e, n, a, i, r, o, s=arguments;
                        return regeneratorRuntime.wrap(function(t) {
                            for(;
                            ;
                            )switch(t.prev=t.next) {
                                case 0:return e=s.length>0&&void 0!==s[0]?s[0]:1, n=s.length>1?s[1]:void 0, a=s.length>2?s[2]:void 0, t.next=5, this.client.get(Object(ht.format)(Lt, a), {
                                    params: {
                                        page: e-1, limit: n
                                    }
                                }
                                );
                                case 5:return i=t.sent, r=i.data, o=Object(Bt.a)(r.data, Gt[Math.floor(Math.random()*Gt.length)]), t.abrupt("return", new Promise(function(t) {
                                    setTimeout(function() {
                                        t( {
                                            data: o, total: r.total
                                        }
                                        )
                                    }
                                    , 500*Math.random())
                                }
                                ));
                                case 9:case"end":return t.stop()
                            }
                        }
                        , t, this)
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }
                ()
            }
            ]), e
        }
        (Vt)), Ft=(n("7514"), n("9b02")), Ht=n.n(Ft), Ut="https://nnn-articles.prismic.io/api/v2", Wt="https://nnn-articles.prismic.io/api/v2/documents/search", Yt="MC5YVy1KZmhFQUFDZ0FGajNF.Kwlh77-9Zu-_vQvvv705AO-_ve-_vWJM77-9QGs_ahRzVVvvv71h77-977-9JggAZXU", $t='[[at(document.type,"great_article")]]', qt="[document.first_publication_date desc]", Kt=new(function(t) {
            function e() {
                return Object(rt.a)(this, e), Object(st.a)(this, Object(ct.a)(e).apply(this, arguments))
            }
            return Object(ut.a)(e, t), Object(ot.a)(e, [ {
                key:"transforPrismicResult", value:function(t) {
                    return {
                        id:t.id, title:Ht()(t, "data.title.0.text"), source:Ht()(t, "data.source.0.text"), thumbnail:Ht()(t, "data.thumbnail.url"), external_url:Ht()(t, "data.external_url.url"), content:t.data.content.map(function(t) {
                            return"<p>".concat(t.text, "</p>")
                        }
                        ).join(""), created_at:t.first_publication_date
                    }
                }
            }
            , {
                key:"getArticlesRef", value:function() {
                    var t=Object(c.a)(regeneratorRuntime.mark(function t() {
                        var e, n, a;
                        return regeneratorRuntime.wrap(function(t) {
                            for(;
                            ;
                            )switch(t.prev=t.next) {
                                case 0:return t.next=2, this.client.get(Ut, {
                                    params: {
                                        access_token: Yt
                                    }
                                }
                                );
                                case 2:return e=t.sent, n=e.data, a=n.refs.find(function(t) {
                                    return"master"===t.id
                                }
                                ), t.abrupt("return", a?a.ref:"");
                                case 6:case"end":return t.stop()
                            }
                        }
                        , t, this)
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }
                ()
            }
            , {
                key:"fetchArticles", value:function() {
                    var t=Object(c.a)(regeneratorRuntime.mark(function t() {
                        var e, n, a, i=this, r=arguments;
                        return regeneratorRuntime.wrap(function(t) {
                            for(;
                            ;
                            )switch(t.prev=t.next) {
                                case 0: return e=r.length>0&&void 0!==r[0]?r[0]: 1, n=r.length>1&&void 0!==r[1]?r[1]: 3, t.next=4, this.getArticlesRef();
                                case 4:return a=t.sent, t.abrupt("return", this.client.get(Wt, {
                                    params: {
                                        access_token: Yt, q: $t, orderings: qt, format: "json", ref: a, page: e, pageSize: n
                                    }
                                }
                                ).then(function(t) {
                                    var e=t.data;
                                    return {
                                        total:e.total_results_size, data:e.results.map(function(t) {
                                            return i.transforPrismicResult(t)
                                        }
                                        )
                                    }
                                }
                                ));
                                case 6:case"end":return t.stop()
                            }
                        }
                        , t, this)
                    }
                    ));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }
                ()
            }
            ]), e
        }
        (pt)), zt=n("013f"), Jt= {
            PROFILE_DATA: "/users/%s", UPDATE_USER_PROPERTIES: "/users/%s/properties", CHANGE_PASSWORD: "/users/%s/password", CHANGE_EMAIL: "/users/%s/change_email_request"
        }
        ;
        var Xt=new(function(t) {
            function e() {
                var t, n;
                Object(rt.a)(this, e);
                for(var a=arguments.length, i=new Array(a), r=0;
                r<a;
                r++)i[r]=arguments[r];
                return n=Object(st.a)(this, (t=Object(ct.a)(e)).call.apply(t, [this].concat(i))), Object(u.a)(Object(zt.a)(n), "getProfileData", function(t) {
                    return n.client.get(Object(ht.format)(Jt.PROFILE_DATA, t)).then(function(t) {
                        return function(t) {
                            return {
                                data: t
                            }
                        }
                        (t.data)
                    }
                    ).catch(function(t) {
                        return t
                    }
                    )
                }
                ), Object(u.a)(Object(zt.a)(n), "changeDetails", function(t, e) {
                    var a=ft(e, ["trialLevel", "videoTrials"]);
                    return n.client.post(Object(ht.format)(Jt.UPDATE_USER_PROPERTIES, t), a.userData)
                }
                ), Object(u.a)(Object(zt.a)(n), "changeEmail", function(t, e) {
                    return n.client.post(Object(ht.format)(Jt.CHANGE_EMAIL, t), {
                        email: e
                    }
                    )
                }
                ), Object(u.a)(Object(zt.a)(n), "changePassword", function(t, e) {
                    return n.client.put(Object(ht.format)(Jt.CHANGE_PASSWORD, t), {
                        new_password: e, new_password_confirm: e
                    }
                    )
                }
                ), n
            }
            return Object(ut.a)(e, t), e
        }
        (mt)), Qt=n("a557"), Zt=(n("5df3"), n("6c09")), te=[], ee=[function() {
            return Promise.all([n.e("chunk-4f2ac058"), n.e("chunk-6b561019")]).then(n.bind(null, "ae1a"))
        }
        ], ne=function(t, e) {
            return t?[e("fetchArticles", {
                page: 1, perPage: Zt.e
            }
            ), e("fetchVideos", {
                page: 1, perPage: Zt.f, isDashboard: !0
            }
            )]:[]
        }
        , ae=function(t) {
            t.forEach(function(t) {
                "caches"in window&&t.url&&caches.open(t.url).then(function(e) {
                    e.put(t.url, t)
                }
                )
            }
            )
        }
        , ie=function() {
            var t=Object(c.a)(regeneratorRuntime.mark(function t(e, n) {
                var a;
                return regeneratorRuntime.wrap(function(t) {
                    for(;
                    ;
                    )switch(t.prev=t.next) {
                        case 0:if(a=(new Date).getTime(), !e) {
                            t.next=4;
                            break
                        }
                        return t.next=4, n("getProfileData");
                        case 4:return t.abrupt("return", new Promise(function(t, i) {
                            Promise.all([].concat(Object(Nt.a)(te.map(function(t) {
                                return fetch(t)
                            }
                            )), ee, Object(Nt.a)(ne(e, n)))).then(function(e) {
                                ae(e);
                                var n=Zt.h-((new Date).getTime()-a);
                                if(n<=0)return t();
                                setTimeout(function() {
                                    t()
                                }
                                , n)
                            }
                            ).catch(function(t) {
                                return i(t)
                            }
                            )
                        }
                        ));
                        case 5:case"end":return t.stop()
                    }
                }
                , t)
            }
            ));
            return function(e, n) {
                return t.apply(this, arguments)
            }
        }
        ();
        function re(t, e) {
            var n=Object.keys(t);
            if(Object.getOwnPropertySymbols) {
                var a=Object.getOwnPropertySymbols(t);
                e&&(a=a.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                )), n.push.apply(n, a)
            }
            return n
        }
        var oe= {
            state: {
                currentContent:p.j, nextContent:p.j, presetName:"", presetDuration:1e3, error:null, profileData: {}
                , temporaryEmail:"", articles:[], articlesMeta: {
                    page: 1, perPage: 0, total: 0, lastPage: 1
                }
                , videos:[], videosMeta: {
                    page: 1, perPage: 0, total: 0, lastPage: 1
                }
                , dashboardVideos:[], dashboardVideosMeta: {
                    page: 1, perPage: 0, total: 0, lastPage: 1
                }
            }
            , mutations: {
                setContent:function(t, e) {
                    t.currentContent=e
                }
                , setNextContent:function(t, e) {
                    t.nextContent=e
                }
                , setTemporaryEmail:function(t, e) {
                    t.temporaryEmail=e
                }
                , setVideos:function(t, e) {
                    var n=e.isDashboard, a=e.videos;
                    n?t.dashboardVideos=a: t.videos=[].concat(Object(Nt.a)(t.videos), Object(Nt.a)(a))
                }
                , setVideosMeta:function(t, e) {
                    t.videosMeta=e
                }
                , setDashboardVideosMeta:function(t, e) {
                    t.dashboardVideosMeta=e
                }
                , setArticles:function(t, e) {
                    t.articles=e
                }
                , setArticlesMeta:function(t, e) {
                    t.articlesMeta=e
                }
                , setError:function(t, e) {
                    t.error=e
                }
                , setProfileData:function(t, e) {
                    t.profileData=function(t) {
                        for(var e=1;
                        e<arguments.length;
                        e++) {
                            var n=null!=arguments[e]?arguments[e]: {}
                            ;
                            e%2?re(n, !0).forEach(function(e) {
                                Object(u.a)(t, e, n[e])
                            }
                            ):Object.getOwnPropertyDescriptors?Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)):re(n).forEach(function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }
                            )
                        }
                        return t
                    }
                    ( {}
                    , t.profileData, {}
                    , e)
                }
                , setPreset:function(t, e) {
                    var n=e.name, a=e.duration;
                    t.presetName=n, t.presetDuration=a||1e3
                }
            }
            , actions: {
                setAccountContent:function(t, e) {
                    var n=t.commit, a=t.state, i=e.content;
                    if(a.currentContent!==i) {
                        n("setNextContent", i);
                        try {
                            setTimeout(function() {
                                n("setContent", i)
                            }
                            , Object(Qt.f)(a.currentContent, a.nextContent))
                        }
                        catch(t) {
                            n("setError", t)
                        }
                    }
                }
                , getProfileData:function() {
                    var t=Object(c.a)(regeneratorRuntime.mark(function t(e, n) {
                        var a, i, r, o, s, c;
                        return regeneratorRuntime.wrap(function(t) {
                            for(;
                            ;
                            )switch(t.prev=t.next) {
                                case 0: return a=e.commit, i=e.getters, r=n?n.username: i.user.username, t.prev=2, t.next=5, Xt.getProfileData(r);
                                case 5: return o=t.sent, s=o.data, c=Ct(s), a("setProfileData", c), t.abrupt("return", c);
                                case 12: t.prev=12, t.t0=t.catch(2), a("setError", t.t0);
                                case 15: case"end": return t.stop()
                            }
                        }
                        , t, null, [[2, 12]])
                    }
                    ));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }
                (), changeProfileData:function() {
                    var t=Object(c.a)(regeneratorRuntime.mark(function t(e, n) {
                        var a, i, r, o;
                        return regeneratorRuntime.wrap(function(t) {
                            for(;
                            ;
                            )switch(t.prev=t.next) {
                                case 0: return a=e.commit, i=n.data, t.prev=2, r=i.username, i.email, o=Object(Q.a)(i, ["username", "email"]), t.next=6, Xt.changeDetails(r, o);
                                case 6: t.next=11;
                                break;
                                case 8: t.prev=8, t.t0=t.catch(2), a("setError", t.t0);
                                case 11: case"end": return t.stop()
                            }
                        }
                        , t, null, [[2, 8]])
                    }
                    ));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }
                (), changeEmail:function() {
                    var t=Object(c.a)(regeneratorRuntime.mark(function t(e, n) {
                        var a, i, r;
                        return regeneratorRuntime.wrap(function(t) {
                            for(;
                            ;
                            )switch(t.prev=t.next) {
                                case 0: return a=e.commit, i=n.username, r=n.email, t.prev=2, a("setTemporaryEmail", r), t.next=6, Xt.changeEmail(i, r);
                                case 6: t.next=11;
                                break;
                                case 8: t.prev=8, t.t0=t.catch(2), a("setError", t.t0);
                                case 11: case"end": return t.stop()
                            }
                        }
                        , t, null, [[2, 8]])
                    }
                    ));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }
                (), setNewPassword:function() {
                    var t=Object(c.a)(regeneratorRuntime.mark(function t(e, n) {
                        var a, i, r;
                        return regeneratorRuntime.wrap(function(t) {
                            for(;
                            ;
                            )switch(t.prev=t.next) {
                                case 0: return a=e.commit, i=n.password, r=n.username, t.prev=2, t.next=5, Xt.changePassword(r, i);
                                case 5: t.next=10;
                                break;
                                case 7: t.prev=7, t.t0=t.catch(2), a("setError", t.t0);
                                case 10: case"end": return t.stop()
                            }
                        }
                        , t, null, [[2, 7]])
                    }
                    ));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }
                (), fetchVideos:function() {
                    var t=Object(c.a)(regeneratorRuntime.mark(function t(e, n) {
                        var a, i, r, o, s, c, u, l, d, p;
                        return regeneratorRuntime.wrap(function(t) {
                            for(;
                            ;
                            )switch(t.prev=t.next) {
                                case 0: return a=e.commit, i=e.state, r=n.page, o=n.perPage, s=n.isDashboard, t.prev=2, t.next=5, Mt.fetchVideos(r, o, i.profileData.trialLevel);
                                case 5:return c=t.sent, u=c.data, l=c.total, d=s?"setDashboardVideosMeta":"setVideosMeta", p=Math.ceil(l/o), a("setVideos", {
                                    isDashboard: s, videos: u
                                }
                                ), a(d, {
                                    page: r, perPage: o, total: l, lastPage: p
                                }
                                ), t.abrupt("return", {
                                    data: u, total: l, lastPage: p, perPage: o
                                }
                                );
                                case 15:t.prev=15, t.t0=t.catch(2), a("setError", t.t0);
                                case 18:case"end":return t.stop()
                            }
                        }
                        , t, null, [[2, 15]])
                    }
                    ));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }
                (), fetchArticles:function() {
                    var t=Object(c.a)(regeneratorRuntime.mark(function t(e, n) {
                        var a, i, r, o, s, c, u, l;
                        return regeneratorRuntime.wrap(function(t) {
                            for(;
                            ;
                            )switch(t.prev=t.next) {
                                case 0: return a=e.commit, i=n.page, r=n.perPage, o=n.store, s=void 0===o||o, t.prev=2, t.next=5, Kt.fetchArticles(i, r);
                                case 5:return c=t.sent, u=c.data, l=c.total, s&&(a("setArticles", u), a("setArticlesMeta", {
                                    page: i, perPage: r, total: l, lastPage: Math.ceil(l/r)
                                }
                                )), t.abrupt("return", {
                                    data: u, page: i, total: l
                                }
                                );
                                case 12:t.prev=12, t.t0=t.catch(2), a("setError", t.t0);
                                case 15:case"end":return t.stop()
                            }
                        }
                        , t, null, [[2, 12]])
                    }
                    ));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }
                (), setPreset:function(t, e) {
                    var n=t.commit, a=t.state, i=e.name, o=e.duration, s=void 0===o?1e3: o, c=e.withoutAudioEffects;
                    !(void 0!==c&&c)&&a.presetName&&r.a.prototype.$effectsAudio&&r.a.prototype.$effectsAudio.playAndSetVolume("grid_change", .33), n("setPreset", {
                        name: i, duration: s||1e3
                    }
                    )
                }
                , prefetchDashboardData:function(t) {
                    var e=t.dispatch, n=t.getters;
                    return ie(n.user, e)
                }
            }
            , getters: {
                content:function(t) {
                    return t.currentContent
                }
                , nextContent:function(t) {
                    return t.nextContent
                }
                , profileData:function(t) {
                    return t.profileData
                }
                , isLoadedProfile:function(t) {
                    return Object.keys(t.profileData).length>0
                }
                , accountWrapperError:function(t) {
                    return t.error
                }
                , videos:function(t) {
                    return t.videos
                }
                , articles:function(t) {
                    return t.articles
                }
                , articlesMeta:function(t) {
                    return t.articlesMeta
                }
                , dashboardVideosMeta:function(t) {
                    return t.dashboardVideosMeta
                }
                , videosMeta:function(t) {
                    return t.videosMeta
                }
                , dashboardVideos:function(t) {
                    return t.dashboardVideos
                }
                , temporaryEmail:function(t) {
                    return t.temporaryEmail
                }
                , preset:function(t) {
                    return {
                        name: t.presetName, duration: t.presetDuration
                    }
                }
            }
        }
        ;
        r.a.use(l.a);
        var se=new l.a.Store( {
            plugins:[Object(X.a)( {
                reducer:function(t) {
                    return {
                        AuthStore: J()(t.AuthStore, ["user", "token", "refreshToken"])
                    }
                }
            }
            )], modules: {
                AuthStore: Rt, CommonStore: jt, AccountWrapperStore: oe
            }
        }
        ), ce=n("8c4f"), ue=n("ee3e");
        r.a.use(ce.a);
        var le=new ce.a( {
            mode:"history", routes:[ {
                path:"/(".concat(p.q.replace("/", ""), ")?"), name:p.w, component:function() {
                    return n.e("landing").then(n.bind(null, "6dc9"))
                }
                , meta: {
                    auth: !1, hasHeadVideo: !0, showVideo: !0, title: "LANDING"
                }
            }
            , {
                path:"/login", name:p.y, component:function() {
                    return Promise.all([n.e("forgot-password~home~login~membership~reset-password"), n.e("login")]).then(n.bind(null, "1d0b"))
                }
                , meta: {
                    auth: !1, hasHeadVideo: !0, animation: "c-head-video--translated", showVideo: !0, title: "LOGIN"
                }
            }
            , {
                path:"/apply", name:p.C, component:function() {
                    return Promise.all([n.e("forgot-password~home~login~membership~reset-password"), n.e("home~membership"), n.e("membership")]).then(n.bind(null, "93ef"))
                }
                , meta: {
                    auth: !1, title: "MEMBERSHIP"
                }
            }
            , {
                path:"/password-recovery", name:p.r, component:function() {
                    return Promise.all([n.e("forgot-password~home~login~membership~reset-password"), n.e("forgot-password")]).then(n.bind(null, "ab68"))
                }
                , meta: {
                    auth: !1, title: "FORGOT PASSWORD"
                }
            }
            , {
                path:"/check-email", name:p.h, component:function() {
                    return n.e("check-email").then(n.bind(null, "46b3"))
                }
                , meta: {
                    auth: !1, title: "CHECK YOUR EMAIL"
                }
            }
            , {
                path:"/home", name:p.b, component:function() {
                    return Promise.all([n.e("forgot-password~home~login~membership~reset-password"), n.e("home~membership"), n.e("home")]).then(n.bind(null, "3cfb"))
                }
                , meta: {
                    auth: !0, showImage: !0, title: "DASHBOARD"
                }
            }
            , {
                path:"/reset-password", name:p.T, component:function() {
                    return Promise.all([n.e("forgot-password~home~login~membership~reset-password"), n.e("reset-password")]).then(n.bind(null, "9b01"))
                }
                , meta: {
                    auth: !1, title: "RESET PASSWORD"
                }
            }
            , {
                path:"/reset-password-confirmation", name:p.S, component:function() {
                    return n.e("reset-password-confirmation").then(n.bind(null, "63d7"))
                }
                , meta: {
                    auth: !1, title: "RESET PASSWORD CONFIRMATION"
                }
            }
            , {
                path:"/submission-confirmation", name:p.D, component:function() {
                    return n.e("membership-confirmation").then(n.bind(null, "0c3c"))
                }
                , meta: {
                    auth: !1, title: "MEMBERSHIP CONFIRMATION"
                }
            }
            , {
                path:"*", redirect: {
                    name: p.w
                }
            }
            ]
        }
        ), de=function() {
            var t=Object(c.a)(regeneratorRuntime.mark(function t(e, n) {
                var a;
                return regeneratorRuntime.wrap(function(t) {
                    for(;
                    ;
                    )switch(t.prev=t.next) {
                        case 0:if(n.change_email_code&&e||n.verification_code) {
                            t.next=2;
                            break
                        }
                        return t.abrupt("return");
                        case 2:if(a=n.verification_code||n.change_email_code, !n.verification_code) {
                            t.next=7;
                            break
                        }
                        return le.replace( {
                            query: {}
                        }
                        ), se.dispatch("verifyAccount", {
                            code: a
                        }
                        ), t.abrupt("return");
                        case 7:if(!n.change_email_code) {
                            t.next=18;
                            break
                        }
                        return le.replace( {
                            query: {}
                        }
                        ), t.prev=9, t.next=12, se.dispatch("verifyEmail", {
                            code: a
                        }
                        );
                        case 12:se.dispatch("setAccountContent", {
                            content: p.o
                        }
                        ), t.next=18;
                        break;
                        case 15:t.prev=15, t.t0=t.catch(9), se.dispatch("setAccountContent", {
                            content: p.o
                        }
                        );
                        case 18:case"end":return t.stop()
                    }
                }
                , t, null, [[9, 15]])
            }
            ));
            return function(e, n) {
                return t.apply(this, arguments)
            }
        }
        ();
        le.beforeEach(function(t, e, n) {
            var a=!!se.getters.user;
            return!a&&t.meta.auth?n( {
                name: p.w
            }
            ):a&&!t.meta.auth?n( {
                name: p.b
            }
            ):t.name===p.h?function(t) {
                return se.getters.forgotPasswordEmail?t():t( {
                    name: p.w
                }
                )
            }
            (n):void n()
        }
        ), le.afterEach(function(t) {
            var e=!!se.getters.user;
            de(e, t.query), e||(r.a.prototype.$appConfig.initialAmbientAudio=t.name===p.C?ue.c: ue.b, r.a.prototype.$appConfig.startAmbientAudio&&r.a.prototype.$audio.play(r.a.prototype.$appConfig.initialAmbientAudio))
        }
        );
        var pe=le, me=n("7618"), he=n("386c"), fe=n.n(he);
        function ke(t, e) {
            var n=Object.keys(t);
            if(Object.getOwnPropertySymbols) {
                var a=Object.getOwnPropertySymbols(t);
                e&&(a=a.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                )), n.push.apply(n, a)
            }
            return n
        }
        var xe=[ue.b, ue.c, ue.d, ue.e, ue.f], be= {
            src:[ue.a], volume:1, sprite: {
                bad_login: [0, 979.750566893424], button_click: [2e3, 1018.7755102040815], button_hover: [5e3, 417.95918367346906], grid_change: [7e3, 1671.836734693878], intro: [1e4, 14899.591836734693], logo_hover: [26e3, 1332.2448979591854]
            }
        }
        , ge= {
            install:function(t, e) {
                var n=e.howler;
                t.prototype.$appConfig=new t( {
                    data:function() {
                        return {
                            startAmbientAudio: !1, audioMuted: !1, initialAmbientAudio: "", activeAmbientAudio: ""
                        }
                    }
                    , watch: {
                        startAmbientAudio:function(t) {
                            t&&this.play()
                        }
                    }
                    , methods: {
                        play:function() {
                            t.prototype.$audio.play(this.initialAmbientAudio)
                        }
                    }
                }
                );
                var a=t.prototype.$appConfig, i= {}
                ;
                n.then(function(e) {
                    var n=e.Howl;
                    i=xe.reduce(function(t, e) {
                        return function(t) {
                            for(var e=1;
                            e<arguments.length;
                            e++) {
                                var n=null!=arguments[e]?arguments[e]: {}
                                ;
                                e%2?ke(n, !0).forEach(function(e) {
                                    Object(u.a)(t, e, n[e])
                                }
                                ):Object.getOwnPropertyDescriptors?Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)):ke(n).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }
                                )
                            }
                            return t
                        }
                        ( {}
                        , t, Object(u.a)( {}
                        , e, new n( {
                            src: [e], autoplay: !1, loop: !0, volume: 1, preload: !1
                        }
                        )))
                    }
                    , {}
                    ), t.prototype.$effectsAudio=new n(be), t.prototype.$effectsAudio.playAndSetVolume=function(e, n) {
                        t.prototype.$effectsAudio&&(t.prototype.$effectsAudio.volume(n), t.prototype.$effectsAudio.play(e), setTimeout(function() {
                            t.prototype.$effectsAudio.volume(1)
                        }
                        , 5e3))
                    }
                }
                ), t.prototype.$audio= {
                    load:function(t) {
                        return new Promise(function(e) {
                            if(i[t]._preload)return e();
                            i[t].load(), i[t].once("load", function() {
                                e()
                            }
                            )
                        }
                        )
                    }
                    , mute:function(t) {
                        var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];
                        e&&(a.audioMuted=t), Object.keys(i).forEach(function(e) {
                            return i[e].mute(t)
                        }
                        )
                    }
                    , pause:function() {
                        Object.keys(i).forEach(function(t) {
                            return i[t].pause()
                        }
                        )
                    }
                    , play:function(t) {
                        var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];
                        if((e||a.activeAmbientAudio!==t)&&(Object.keys(i).forEach(function(e) {
                            if(t!==e) {
                                if(i[e].playing())return i[e].fade(1, 0, 5e3);
                                !i[e]._preload&&i[e].load(), i[e].stop()
                            }
                        }
                        ), i[t])) {
                            if(a.activeAmbientAudio=t, "loaded"===i[t]._state)return!i[t].playing()&&i[t].play(), void i[t].fade(0, 1, 5e3);
                            i[t].load(), i[t].once("load", function() {
                                !i[t].playing()&&i[t].play(), i[t].fade(0, 1, 5e3)
                            }
                            )
                        }
                    }
                }
                , fe.a.change(function() {
                    a.audioMuted||t.prototype.$audio.mute(fe.a.hidden(), !1)
                }
                ), t.directive("audio", {
                    inserted:function(e, n) {
                        var a=Object.keys(n.modifiers);
                        (a.length?a: ["mouseover"]).forEach(function(a) {
                            e.addEventListener(a, function() {
                                var e;
                                if(!n.value.disable) {
                                    var a=[];
                                    "string"==typeof n.value&&(a=[n.value, 1]), "object"===Object(me.a)(n.value)&&(a=[n.value.name, n.value.volume]), (e=t.prototype.$effectsAudio).playAndSetVolume.apply(e, Object(Nt.a)(a))
                                }
                            }
                            )
                        }
                        )
                    }
                }
                )
            }
        }
        ;
        r.a.use(ge, {
            howler: n.e("chunk-2d0b6918").then(n.t.bind(null, "1e5c", 7))
        }
        ), r.a.use(s.a, {
            id:"UA-148436826-2", router:pe, autoTracking: {
                pageviewTemplate:function(t) {
                    return {
                        page: t.path, title: t.meta.title, location: window.location.href
                    }
                }
            }
            , debug: {
                sendHitTask: !0
            }
        }
        ), r.a.config.productionTip=!1, new r.a( {
            store:se, router:pe, render:function(t) {
                return t(K)
            }
        }
        ).$mount("#app")
    }
    , "5a50":function(t, e, n) {
        "use strict";
        var a, i=n("a080"), r=n("bd86"), o="account_details", s="personal_details", c="psychological_survey", u=[o, s, c], l=(a= {}
        , Object(r.a)(a, o, "Account Details"), Object(r.a)(a, s, "Biographical Data"), Object(r.a)(a, c, "Psychological Survey"), a), d= {
            question1: {
                option1: "I am most receptive to people, relationships, and emotions.", option2: "I am more receptive to logic, knowledge, and empirical data."
            }
            , question2: {
                option1: "I readily identify with objects/concepts that are tangible or concrete.", option2: "I readily identify with objects/concepts that are intangible or abstract."
            }
            , question3: {
                option1: "I consider myself an important person.", option2: "I feel no need to tout my self-worth."
            }
            , question4: {
                option1: "I enjoy the taste of rare cooked or raw animal flesh immensely.", option2: "I find the idea of killing another living creature repulsive."
            }
            , question5: {
                option1: "I frequently am concerned for my health.", option2: "I trust my body to self-regulate."
            }
            , question6: {
                option1: "As long as people are not hurting others, they should enjoy absolute freedom.", option2: "If breaking the law, there is no such thing as a “victimless crime”."
            }
            , question7: {
                option1: "I can imagine the experience of others.", option2: "Other people are a mystery to me."
            }
            , question8: {
                option1: "I frequently or on occasion have enjoyed sexual relations with multiple partners, simultaneously or within a short time period.", option2: "I tend to pursue monogamous relationships and usually only engage in physical intimacy after a long introductory period."
            }
            , question9: {
                option1: "Much of the time my head aches all over.", option2: "I rarely experience cranial tension."
            }
            , question10: {
                option1: "I consider my father to be a good person.", option2: "I consider my mother to be a good person."
            }
            , question11: {
                option1: "Lying is acceptable in cases where it will protect people from harm.", option2: "Lying is completely unacceptable under any circumstances."
            }
            , question12: {
                option1: "I would enjoy the work of a surgeon.", option2: "I would enjoy the work of a gardener."
            }
            , question13: {
                option1: "When in public alone, I am prone to striking up conversations with strangers.", option2: "When in public alone, I feel hesitant or am shy to speak to strangers."
            }
            , question14: {
                option1: "I prefer to focus on the potential of happiness in the future.", option2: "I prefer to focus on the immediate pleasures of the present."
            }
            , question15: {
                option1: "When using the internet, I often end feeling alone or isolated.", option2: "When using the internet, I usually feel connected and more social."
            }
            , question16: {
                option1: "If scientifically feasible, I would prefer to live for eternity.", option2: "Even if possible, I would never want to live for eternity."
            }
            , question17: {
                option1: "When I see a homeless person, I usually make eye contact and behave in a friendly manner.", option2: "When I see a homeless person, I often avoid eye contact and try to pass by quickly."
            }
            , question18: {
                option1: "I believe that our society is most likely heading for a large disaster or turmoil in the near future", option2: "I believe that our society is facing challenges that we will all likely learn and grow from."
            }
            , question19: {
                option1: "I sometimes cry in the evening, sometimes for no particular reason.", option2: "I rarely if ever cry in the evening, and am generally calm at night."
            }
            , question20: {
                option1: "My family approves of my lifestyle.", option2: "My family’s opinions are not important to me."
            }
        }
        , p= {
            GENDER: "GENDER", COUNTRY_NATIONALITY: "COUNTRY", MOBILE_OS: "MOBILE OS"
        }
        , m= {
            gender: "This field is required", countryNationality: "This field is required", mobileOS: "This field is required"
        }
        , h="ANDROID", f=[h, "IOS"], k=["MALE", "FEMALE", "NON-BINARY", "CHOOSE NOT TO DISCLOSE"], x=["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"], b= {
            month: "MONTH", day: "DAY", year: "YEAR"
        }
        , g=n("f0ce"), y=n("6c09"), v=n("a3c5"), E=n("f12d");
        n.d(e, "w", function() {
            return i.d
        }
        ), n.d(e, "y", function() {
            return i.e
        }
        ), n.d(e, "C", function() {
            return i.f
        }
        ), n.d(e, "b", function() {
            return i.a
        }
        ), n.d(e, "D", function() {
            return i.g
        }
        ), n.d(e, "r", function() {
            return i.c
        }
        ), n.d(e, "S", function() {
            return i.h
        }
        ), n.d(e, "T", function() {
            return i.i
        }
        ), n.d(e, "h", function() {
            return i.b
        }
        ), n.d(e, "a", function() {
            return o
        }
        ), n.d(e, "O", function() {
            return s
        }
        ), n.d(e, "Q", function() {
            return c
        }
        ), n.d(e, "E", function() {
            return u
        }
        ), n.d(e, "F", function() {
            return l
        }
        ), n.d(e, "R", function() {
            return d
        }
        ), n.d(e, "U", function() {
            return p
        }
        ), n.d(e, "P", function() {
            return m
        }
        ), n.d(e, "c", function() {
            return h
        }
        ), n.d(e, "v", function() {
            return"IOS"
        }
        ), n.d(e, "G", function() {
            return f
        }
        ), n.d(e, "s", function() {
            return k
        }
        ), n.d(e, "H", function() {
            return x
        }
        ), n.d(e, "k", function() {
            return b
        }
        ), n.d(e, "j", function() {
            return g.b
        }
        ), n.d(e, "t", function() {
            return g.d
        }
        ), n.d(e, "Y", function() {
            return g.m
        }
        ), n.d(e, "I", function() {
            return g.f
        }
        ), n.d(e, "K", function() {
            return g.h
        }
        ), n.d(e, "J", function() {
            return g.g
        }
        ), n.d(e, "B", function() {
            return g.e
        }
        ), n.d(e, "L", function() {
            return g.i
        }
        ), n.d(e, "i", function() {
            return g.a
        }
        ), n.d(e, "o", function() {
            return g.c
        }
        ), n.d(e, "N", function() {
            return g.l
        }
        ), n.d(e, "M", function() {
            return g.j
        }
        ), n.d(e, "n", function() {
            return y.g
        }
        ), n.d(e, "A", function() {
            return y.j
        }
        ), n.d(e, "V", function() {
            return y.k
        }
        ), n.d(e, "z", function() {
            return y.i
        }
        ), n.d(e, "e", function() {
            return y.b
        }
        ), n.d(e, "f", function() {
            return y.c
        }
        ), n.d(e, "g", function() {
            return y.d
        }
        ), n.d(e, "d", function() {
            return y.a
        }
        ), n.d(e, "W", function() {
            return y.l
        }
        ), n.d(e, "X", function() {
            return y.m
        }
        ), n.d(e, "m", function() {
            return y.f
        }
        ), n.d(e, "l", function() {
            return y.e
        }
        ), n.d(e, "x", function() {
            return v.b
        }
        ), n.d(e, "p", function() {
            return E.b
        }
        ), n.d(e, "q", function() {
            return"/machine-brain-EULA"
        }
        ), n.d(e, "u", function() {
            return"/"
        }
        )
    }
    , "5a9e":function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return a
        }
        );
        var a= {
            VIDEO_ASCPECT_RATIO: 9/16, VIDEO_ANIMATION_DURATION: 1500, EASING_CUBIC_BEZIER: "cubicBezier(0.410, 0.095, 0.145, 1.025)"
        }
    }
    , "5c0b":function(t, e, n) {
        "use strict";
        var a=n("5e27");
        n.n(a).a
    }
    , "5e27":function(t, e, n) {}
    , "6c09":function(t, e, n) {
        "use strict";
        n.d(e, "g", function() {
            return a
        }
        ), n.d(e, "j", function() {
            return i
        }
        ), n.d(e, "k", function() {
            return r
        }
        ), n.d(e, "i", function() {
            return o
        }
        ), n.d(e, "b", function() {
            return s
        }
        ), n.d(e, "c", function() {
            return c
        }
        ), n.d(e, "d", function() {
            return u
        }
        ), n.d(e, "a", function() {
            return l
        }
        ), n.d(e, "l", function() {
            return d
        }
        ), n.d(e, "m", function() {
            return p
        }
        ), n.d(e, "h", function() {
            return m
        }
        ), n.d(e, "f", function() {
            return h
        }
        ), n.d(e, "e", function() {
            return f
        }
        );
        var a=2100, i=1e3, r=3e3, o="loginError", s="applyStep1", c="applyStep2", u="applySuccess", l="applyError", d=[ {
            name: "survey1to5", duration: 1e3
        }
        , {
            name: "survey6to10", duration: 1e3
        }
        , {
            name: "survey11to15", duration: 1e3
        }
        , {
            name: "survey16to20", duration: 1e3
        }
        , {
            name: "survey21to25", duration: 1e3
        }
        , {
            name: "survey26to30", duration: 1e3
        }
        ], p=[ {
            level: 0, videos: 6
        }
        , {
            level: 1, videos: 4
        }
        , {
            level: 2, videos: 5
        }
        , {
            level: 3, videos: 7
        }
        , {
            level: 4, videos: 6
        }
        ], m=2100, h=5, f=3
    }
    , "90f5":function(t) {
        t.exports= {
            v:"5.5.8", fr:29.9700012207031, ip:0, op:38.0000015477717, w:188, h:58, nm:"NNNLogoHoverNEW 01", ddd:0, assets:[ {
                id:"comp_0", layers:[ {
                    ddd:0, ind:1, ty:0, nm:"Loading Screen lottie", refId:"comp_1", sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [940, 540, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [960, 540, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, w:1920, h:1080, ip:0, op:61.0000024845809, st:0, bm:0
                }
                ]
            }
            , {
                id:"comp_1", layers:[ {
                    ddd:0, ind:1, ty:4, nm:"Shape Layer 1", sr:1, ks: {
                        o: {
                            a:1, k:[ {
                                t: 8, s: [0], h: 1
                            }
                            , {
                                t: 10, s: [100], h: 1
                            }
                            , {
                                t: 14, s: [0], h: 1
                            }
                            , {
                                t: 19, s: [100], h: 1
                            }
                            , {
                                t: 22, s: [0], h: 1
                            }
                            , {
                                t: 26, s: [100], h: 1
                            }
                            , {
                                t: 28, s: [0], h: 1
                            }
                            , {
                                t: 30, s: [100], h: 1
                            }
                            , {
                                t: 34.0000013848484, s: [0], h: 1
                            }
                            ], ix:11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                i: {
                                    x: .209, y: 1
                                }
                                , o: {
                                    x: .171, y: 0
                                }
                                , t:19, s:[960, 540, 0], to:[23.708, 0, 0], ti:[-23.708, 0, 0]
                            }
                            , {
                                t: 30.0000012219251, s: [1102.25, 540, 0]
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [0, 0, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[24.891, -28], [24.891, 28.813], [-19.5, 28.813], [-19.5, -28]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, .525489956725, .341175991881, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-159.5, 2.125], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:8.00000032584668, op:61.0000024845809, st:0, bm:0
                }
                , {
                    ddd:0, ind:2, ty:1, nm:"White Solid 8", sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [897.241, 542.274, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [897.241, 542.274, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, hasMask:!0, masksProperties:[ {
                        inv:!1, mode:"a", pt: {
                            a:0, k: {
                                i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[917.018, 515.508], [902.826, 515.508], [902.826, 541.862], [877.465, 517.156], [877.465, 544.791], [902.826, 569.039], [917.018, 569.039]], c: !0
                            }
                            , ix:1
                        }
                        , o: {
                            a: 0, k: 100, ix: 3
                        }
                        , x: {
                            a: 0, k: 0, ix: 4
                        }
                        , nm:"Mask 3"
                    }
                    ], sw:1920, sh:1080, sc:"#ffffff", ip:31.0000012626559, op:60.0000024438501, st:31.0000012626559, bm:0
                }
                , {
                    ddd:0, ind:3, ty:1, nm:"White Solid 8", sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [897.241, 542.274, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [897.241, 542.274, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, hasMask:!0, masksProperties:[ {
                        inv:!1, mode:"a", pt: {
                            a:0, k: {
                                i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[917.018, 515.508], [902.826, 515.508], [902.826, 541.862], [877.465, 517.156], [877.465, 544.791], [902.826, 569.039], [917.018, 569.039]], c: !0
                            }
                            , ix:1
                        }
                        , o: {
                            a: 0, k: 100, ix: 3
                        }
                        , x: {
                            a: 0, k: 0, ix: 4
                        }
                        , nm:"Mask 3"
                    }
                    ], sw:1920, sh:1080, sc:"#ffffff", ip:0, op:5.00000020365417, st:0, bm:0
                }
                , {
                    ddd:0, ind:4, ty:1, nm:"White Solid 8", sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [849.631, 542.274, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [849.631, 542.274, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, hasMask:!0, masksProperties:[ {
                        inv:!1, mode:"a", pt: {
                            a:0, k: {
                                i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[869.408, 515.508], [855.217, 515.508], [855.217, 541.862], [829.855, 517.156], [829.855, 544.791], [855.217, 569.039], [869.408, 569.039]], c: !0
                            }
                            , ix:1
                        }
                        , o: {
                            a: 0, k: 100, ix: 3
                        }
                        , x: {
                            a: 0, k: 0, ix: 4
                        }
                        , nm:"Mask 21"
                    }
                    ], sw:1920, sh:1080, sc:"#ffffff", ip:35.0000014255792, op:64.0000026067734, st:35.0000014255792, bm:0
                }
                , {
                    ddd:0, ind:5, ty:1, nm:"White Solid 8", sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a:1, k:[ {
                                t: 0, s: [0], h: 1
                            }
                            , {
                                t: 1.00000004073083, s: [180], h: 1
                            }
                            ], ix:10
                        }
                        , p: {
                            a: 0, k: [849.631, 542.274, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [849.631, 542.274, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, hasMask:!0, masksProperties:[ {
                        inv:!1, mode:"a", pt: {
                            a:0, k: {
                                i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[869.408, 515.508], [855.217, 515.508], [855.217, 541.862], [829.855, 517.156], [829.855, 544.791], [855.217, 569.039], [869.408, 569.039]], c: !0
                            }
                            , ix:1
                        }
                        , o: {
                            a: 0, k: 100, ix: 3
                        }
                        , x: {
                            a: 0, k: 0, ix: 4
                        }
                        , nm:"Mask 21"
                    }
                    ], sw:1920, sh:1080, sc:"#ffffff", ip:0, op:5.00000020365417, st:0, bm:0
                }
                , {
                    ddd:0, ind:6, ty:1, nm:"aa", sr:1, ks: {
                        o: {
                            a: 0, k: 99, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [801.105, 542.433, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [802.037, 542.274, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, hasMask:!0, masksProperties:[ {
                        inv:!1, mode:"a", pt: {
                            a:0, k: {
                                i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[821.814, 515.508], [807.622, 515.508], [807.622, 541.862], [782.26, 517.156], [782.26, 544.791], [807.622, 569.039], [821.814, 569.039]], c: !0
                            }
                            , ix:1
                        }
                        , o: {
                            a: 0, k: 100, ix: 3
                        }
                        , x: {
                            a: 0, k: 0, ix: 4
                        }
                        , nm:"Mask 22"
                    }
                    ], sw:1920, sh:1080, sc:"#ffffff", ip:37.0000015070409, op:61.0000024845809, st:0, bm:0
                }
                , {
                    ddd:0, ind:7, ty:1, nm:"aa", sr:1, ks: {
                        o: {
                            a: 0, k: 99, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [801.105, 542.433, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [802.037, 542.274, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, hasMask:!0, masksProperties:[ {
                        inv:!1, mode:"a", pt: {
                            a:0, k: {
                                i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[821.814, 515.508], [807.622, 515.508], [807.622, 541.862], [782.26, 517.156], [782.26, 544.791], [807.622, 569.039], [821.814, 569.039]], c: !0
                            }
                            , ix:1
                        }
                        , o: {
                            a: 0, k: 100, ix: 3
                        }
                        , x: {
                            a: 0, k: 0, ix: 4
                        }
                        , nm:"Mask 22"
                    }
                    ], sw:1920, sh:1080, sc:"#ffffff", ip:0, op:10.0000004073083, st:0, bm:0
                }
                , {
                    ddd:0, ind:8, ty:1, nm:"White Solid 8", sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a:1, k:[ {
                                i: {
                                    x: [.833], y: [.833]
                                }
                                , o: {
                                    x: [.167], y: [.167]
                                }
                                , t:42, s:[0]
                            }
                            , {
                                t: 43.0000017514259, s: [-90]
                            }
                            ], ix:10
                        }
                        , p: {
                            a: 0, k: [808.035, 542.208, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [858.285, 635.208, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [99, 99, 100], ix: 6
                        }
                    }
                    , ao:0, hasMask:!0, masksProperties:[ {
                        inv:!1, mode:"a", pt: {
                            a:0, k: {
                                i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[859.564, 608.458], [859.564, 622.565], [872.495, 622.565], [872.495, 647.852], [844.074, 647.852], [844.074, 622.565], [857.432, 622.565], [857.432, 608.458], [830.864, 608.458], [830.864, 661.959], [885.707, 661.959], [885.707, 608.458]], c: !0
                            }
                            , ix:1
                        }
                        , o: {
                            a: 0, k: 100, ix: 3
                        }
                        , x: {
                            a: 0, k: 0, ix: 4
                        }
                        , nm:"Mask 18"
                    }
                    ], sw:1920, sh:1080, sc:"#ffffff", ip:24.00000097754, op:29.0000011811942, st:24.00000097754, bm:0
                }
                , {
                    ddd:0, ind:9, ty:1, nm:"White Solid 8", sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a:1, k:[ {
                                i: {
                                    x: [.833], y: [.833]
                                }
                                , o: {
                                    x: [.167], y: [.167]
                                }
                                , t:41, s:[0]
                            }
                            , {
                                t: 42.0000017106951, s: [-90]
                            }
                            ], ix:10
                        }
                        , p: {
                            a: 0, k: [926.535, 542.208, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [858.285, 635.208, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [99, 99, 100], ix: 6
                        }
                    }
                    , ao:0, hasMask:!0, masksProperties:[ {
                        inv:!1, mode:"a", pt: {
                            a:0, k: {
                                i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[859.564, 608.458], [859.564, 622.565], [872.495, 622.565], [872.495, 647.852], [844.074, 647.852], [844.074, 622.565], [857.432, 622.565], [857.432, 608.458], [830.864, 608.458], [830.864, 661.959], [885.707, 661.959], [885.707, 608.458]], c: !0
                            }
                            , ix:1
                        }
                        , o: {
                            a: 0, k: 100, ix: 3
                        }
                        , x: {
                            a: 0, k: 0, ix: 4
                        }
                        , nm:"Mask 18"
                    }
                    ], sw:1920, sh:1080, sc:"#ffffff", ip:23.0000009368092, op:28.0000011404634, st:23.0000009368092, bm:0
                }
                , {
                    ddd:0, ind:10, ty:1, nm:"White Solid 8", sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 180, ix: 10
                        }
                        , p: {
                            a: 0, k: [867.285, 542.208, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [858.285, 635.208, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [99, 99, 100], ix: 6
                        }
                    }
                    , ao:0, hasMask:!0, masksProperties:[ {
                        inv:!1, mode:"a", pt: {
                            a:0, k: {
                                i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[859.564, 608.458], [859.564, 622.565], [872.495, 622.565], [872.495, 647.852], [844.074, 647.852], [844.074, 622.565], [857.432, 622.565], [857.432, 608.458], [830.864, 608.458], [830.864, 661.959], [885.707, 661.959], [885.707, 608.458]], c: !0
                            }
                            , ix:1
                        }
                        , o: {
                            a: 0, k: 100, ix: 3
                        }
                        , x: {
                            a: 0, k: 0, ix: 4
                        }
                        , nm:"Mask 18"
                    }
                    ], sw:1920, sh:1080, sc:"#ffffff", ip:20.0000008146167, op:31.0000012626559, st:20.0000008146167, bm:0
                }
                , {
                    ddd:0, ind:12, ty:1, nm:"White Solid 7", sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [896.398, 542.531, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [992.023, 543.281, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, hasMask:!0, masksProperties:[ {
                        inv:!1, mode:"a", pt: {
                            a:0, k: {
                                i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[996.195, 529.837], [981.381, 529.837], [981.381, 571.028], [996.195, 571.028], [1021.622, 547.169], [1021.622, 571.028], [1036.434, 571.028], [1062.336, 546.725], [1062.336, 519.017], [1036.434, 543.716], [1036.434, 515.647], [1025.205, 515.668], [996.195, 544.433]], c: !0
                            }
                            , ix:1
                        }
                        , o: {
                            a: 0, k: 100, ix: 3
                        }
                        , x: {
                            a: 0, k: 0, ix: 4
                        }
                        , nm:"Mask 8"
                    }
                    ], sw:1920, sh:1080, sc:"#ffffff", ip:10.0000004073083, op:19.0000007738859, st:10.0000004073083, bm:0
                }
                , {
                    ddd:0, ind:13, ty:1, nm:"White Solid 7", sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [896.398, 542.531, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [992.023, 543.281, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, hasMask:!0, masksProperties:[ {
                        inv:!1, mode:"a", pt: {
                            a:0, k: {
                                i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[978.896, 571.028], [978.896, 559.153], [954.503, 559.153], [944.918, 549.416], [978.974, 549.416], [978.974, 537.304], [956.72, 537.304], [946.265, 527.25], [1010.086, 527.25], [1021.986, 515.534], [921.71, 515.534], [921.71, 527.25], [931.928, 537.304], [921.71, 537.304], [921.71, 549.416], [942.384, 571.028]], c: !0
                            }
                            , ix:1
                        }
                        , o: {
                            a: 0, k: 95, ix: 3
                        }
                        , x: {
                            a: 0, k: 0, ix: 4
                        }
                        , nm:"Mask 7"
                    }
                    ], sw:1920, sh:1080, sc:"#ffffff", ip:5.00000020365417, op:19.0000007738859, st:5.00000020365417, bm:0
                }
                ]
            }
            ], layers:[ {
                ddd:0, ind:1, ty:0, nm:"Loading Screen", refId:"comp_0", sr:1, ks: {
                    o: {
                        a: 0, k: 100, ix: 11
                    }
                    , r: {
                        a: 0, k: 0, ix: 10
                    }
                    , p: {
                        a: 0, k: [199.875, 26.5, 0], ix: 2
                    }
                    , a: {
                        a: 0, k: [960, 540, 0], ix: 1
                    }
                    , s: {
                        a: 0, k: [100, 100, 100], ix: 6
                    }
                }
                , ao:0, w:1920, h:1080, ip:0, op:61.0000024845809, st:0, bm:0
            }
            ], markers:[ {
                tm: 10.0000004073083, cm: "", dr: 0
            }
            ]
        }
    }
    , 9301:function(t, e, n) {
        "use strict";
        var a=n("bd86"), i=(n("7f7f"), n("0dbb"));
        function r(t, e) {
            var n=Object.keys(t);
            if(Object.getOwnPropertySymbols) {
                var a=Object.getOwnPropertySymbols(t);
                e&&(a=a.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                )), n.push.apply(n, a)
            }
            return n
        }
        function o(t) {
            for(var e=1;
            e<arguments.length;
            e++) {
                var n=null!=arguments[e]?arguments[e]: {}
                ;
                e%2?r(n, !0).forEach(function(e) {
                    Object(a.a)(t, e, n[e])
                }
                ):Object.getOwnPropertyDescriptors?Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                )
            }
            return t
        }
        n("8e6e"), n("456d"), n("ac6a"), n("55dd");
        var s= {
            name:"shuffle", inserted:function(t, e) {
                var n=e.value, a=t.querySelector(".c-btn__text-animation");
                if(a) {
                    var i=a.textContent.trim(""), r=o( {
                        delay: 45, duration: 180
                    }
                    , n|| {}
                    );
                    r.enabled&&["mouseenter", "focus"].forEach(function(e) {
                        t.addEventListener(e, function() {
                            var t=setInterval(function() {
                                a.textContent=function(t) {
                                    return"ABCDEFGHJKLMNOPQRSTUVXZ !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("").sort(function() {
                                        return.5-Math.random()
                                    }
                                    ).join("").substr(0, t)
                                }
                                (i.length)
                            }
                            , r.delay);
                            setTimeout(function() {
                                clearInterval(t), a.textContent=i
                            }
                            , r.duration)
                        }
                        )
                    }
                    )
                }
            }
        }
        , c= {
            name:"NnnButton", directives:Object(a.a)( {}
            , s.name, s), props: {
                variation: {
                    type: String, required: !1, default: ""
                }
                , disableClick: {
                    type: Boolean, required: !1, default: !1
                }
                , disableHover: {
                    type: Boolean, required: !1, default: !1
                }
                , fontSize: {
                    type: String, required: !1, default: ""
                }
                , color: {
                    type: String, required: !1, default: ""
                }
                , width: {
                    type: String, required: !1, default: ""
                }
                , animations: {
                    type: Boolean, required: !1, default: !0
                }
                , type: {
                    type: String, required: !1, default: "button"
                }
                , animate: {
                    type: Boolean, required: !1, default: !1
                }
                , textWritingAnimation: {
                    type: Boolean, required: !1, default: !1
                }
            }
            , computed: {
                className:function() {
                    return Object(i.a)([ {
                        value: this.variation
                    }
                    , {
                        name: "font", value: this.fontSize
                    }
                    , {
                        name: "color", value: this.color
                    }
                    , {
                        shouldApply: !this.animations, value: "no-animations"
                    }
                    , {
                        shouldApply: this.textWritingAnimation, value: "text-writing-animation"
                    }
                    ], "c-btn")
                }
                , isShuffleEnabled:function() {
                    return this.animate||"submit"===this.type||"contain"===this.variation
                }
            }
        }
        , u=n("2877"), l=Object(u.a)(c, function() {
            var t=this, e=t.$createElement, n=t._self._c||e;
            return n("button", {
                directives:[ {
                    name:"shuffle", rawName:"v-shuffle", value: {
                        enabled: t.isShuffleEnabled
                    }
                    , expression:"{ enabled: isShuffleEnabled }"
                }
                , {
                    name:"audio", rawName:"v-audio.click", value: {
                        name: "button_click", volume: .7, disable: t.disableClick
                    }
                    , expression:"{ name: 'button_click', volume: 0.7, disable: disableClick }", modifiers: {
                        click: !0
                    }
                }
                , {
                    name:"audio", rawName:"v-audio.mouseenter", value: {
                        name: "button_hover", volume: .5, disable: t.disableHover
                    }
                    , expression:"{\n    name: 'button_hover',\n    volume: 0.5,\n    disable: disableHover\n  }", modifiers: {
                        mouseenter: !0
                    }
                }
                ], class:[t.className, {
                    "is-animating": t.isShuffleEnabled
                }
                ], attrs: {
                    type: t.type
                }
                , on: {
                    click:function(e) {
                        return t.$emit("click")
                    }
                }
            }
            , [n("span", {
                staticClass: "c-btn__text"
            }
            , [t._t("default")], 2), n("span", {
                staticClass: "c-btn__text-animation"
            }
            , [t._t("default")], 2), "contain"===t.variation?n("div", {
                staticClass: "c-btn__bg"
            }
            ):t._e(), "input-with-icon"===t.variation?n("div", {
                staticClass: "c-btn__icon"
            }
            , [t._t("icon")], 2):t._e()])
        }
        , [], !1, null, null, null);
        e.a=l.exports
    }
    , a080:function(t, e, n) {
        "use strict";
        n.d(e, "d", function() {
            return a
        }
        ), n.d(e, "e", function() {
            return i
        }
        ), n.d(e, "f", function() {
            return r
        }
        ), n.d(e, "a", function() {
            return o
        }
        ), n.d(e, "g", function() {
            return s
        }
        ), n.d(e, "c", function() {
            return c
        }
        ), n.d(e, "h", function() {
            return u
        }
        ), n.d(e, "i", function() {
            return l
        }
        ), n.d(e, "b", function() {
            return d
        }
        );
        var a="landing", i="login", r="membership", o="account_wrapper", s="membership_confirmation", c="forgot_password", u="reset_confirmation_page", l="reset_password", d="check_your_email_page"
    }
    , a3c5:function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return r
        }
        ), n.d(e, "a", function() {
            return o
        }
        ), n.d(e, "c", function() {
            return d
        }
        ), n.d(e, "d", function() {
            return p
        }
        );
        var a, i=n("bd86"), r=["trial-0.png", "trial-1.png", "trial-2.png", "trial-3.png", "trial-4.png"], o="TRIAL_0", s="TRIAL_1", c="TRIAL_2", u="TRIAL_3", l="TRIAL_4", d=[ {
            key: 0, name: o
        }
        , {
            key: 1, name: s
        }
        , {
            key: 2, name: c
        }
        , {
            key: 3, name: u
        }
        , {
            key: 4, name: l
        }
        ], p=(a= {}
        , Object(i.a)(a, "MY_SUBMISSIONS", "MY SUBMISSIONS"), Object(i.a)(a, o, "TRIAL 0"), Object(i.a)(a, s, "TRIAL 1"), Object(i.a)(a, c, "TRIAL 2"), Object(i.a)(a, u, "TRIAL 3"), Object(i.a)(a, l, "TRIAL 4"), Object(i.a)(a, "ALL", "ALL"), a)
    }
    , a557:function(t, e, n) {
        "use strict";
        n.d(e, "e", function() {
            return o
        }
        ), n.d(e, "a", function() {
            return s
        }
        ), n.d(e, "b", function() {
            return c
        }
        ), n.d(e, "c", function() {
            return u
        }
        ), n.d(e, "f", function() {
            return l
        }
        ), n.d(e, "d", function() {
            return d
        }
        );
        var a=n("1209"), i=n("5a9e"), r=n("5a50"), o=function() {
            var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3, e=".js-a-heading-title", n=".js-a-heading-action", r=".js-a-subsection", o=".js-a-graph-desc", s=".js-a-recent-video", c=".js-a-news", u=".js-a-pagination", l=a.a.timeline( {
                duration:t, easing:i.a.EASING_CUBIC_BEZIER, autoplay:!1, changeBegin:function() {
                    document.documentElement.classList.add("u-overflow-hidden", "u-pointer-events-none"), document.body.classList.add("u-overflow-hidden")
                }
                , complete:function() {
                    document.documentElement.classList.remove("u-overflow-hidden", "u-pointer-events-none"), document.body.classList.remove("u-overflow-hidden")
                }
            }
            );
            return l.add( {
                targets:e, translateY:[-24, 0], opacity: {
                    value: [0, 1], easing: "linear"
                }
                , duration:.8*t
            }
            ).add( {
                targets:n, translateY:[-24, 0], opacity: {
                    value: [0, 1], easing: "linear"
                }
            }
            , "-=".concat(.7*t)).add( {
                targets:r, translateY: {
                    value: [60, 0], easing: "easeOutExpo"
                }
                , opacity: {
                    value: [0, 1], easing: "linear", duration: 100
                }
            }
            , "-=".concat(.85*t)).add( {
                targets:o, translateY: {
                    value: [60, 0], easing: "easeOutExpo"
                }
                , opacity: {
                    value: [0, 1], easing: "linear", duration: 100
                }
            }
            , "-=".concat(.85*t)).add( {
                targets:s, translateY:[60, 0], easing:"easeOutExpo", opacity: {
                    value: [0, 1], easing: "linear"
                }
                , delay:a.a.stagger(.15*t)
            }
            , "-=".concat(t)).add( {
                targets:c, translateY:[60, 0], easing:"easeOutExpo", opacity: {
                    value: [0, 1], easing: "linear"
                }
                , delay:a.a.stagger(.3*t)
            }
            , "-=".concat(3*t)).add( {
                targets:u, translateY:[60, 0], easing:"easeOutExpo", opacity: {
                    value: [0, 1], easing: "linear"
                }
            }
            , "-=".concat(t)), l
        }
        , s=function() {
            var t=600, e=a.a.timeline( {
                duration:t, easing:"easeInCubic", autoplay:!1, changeBegin:function() {
                    document.documentElement.classList.add("u-overflow-hidden", "u-pointer-events-none"), document.body.classList.add("u-overflow-hidden")
                }
                , complete:function() {
                    document.documentElement.classList.remove("u-overflow-hidden", "u-pointer-events-none"), document.body.classList.remove("u-overflow-hidden")
                }
            }
            );
            return e.add( {
                targets: ".js-a-graph-desc", translateY: [0, -60], opacity: [1, 0], duration: 540
            }
            , 0).add( {
                targets:".js-a-pagination", translateX:function(t, e) {
                    return 0===e?["0", "-100%"]: ["0", "100%"]
                }
                , opacity: {
                    value: [1, 0], duration: 480
                }
                , delay:a.a.stagger(120, {
                    from: "last"
                }
                )
            }
            , 0).add( {
                targets: ".js-a-heading-action", translateY: [0, -32], opacity: [1, 0]
            }
            , 0).add( {
                targets: ".js-a-heading-title", translateY: [0, -32], opacity: [1, 0], duration: 480
            }
            , 60).add( {
                targets:".js-a-news", translateX:["0", "100%"], opacity: {
                    value: [1, 0], duration: 480
                }
                , delay:a.a.stagger(120, {
                    from: "last"
                }
                )
            }
            , 60).add( {
                targets:".js-a-recent-video", translateX:["0", "-100%"], opacity: {
                    value: [1, 0], duration: 480
                }
                , delay:a.a.stagger(60, {
                    from: "last"
                }
                )
            }
            , 120).add( {
                targets: ".js-a-subsection", duration: 0, opacity: 1
            }
            , 0), e
        }
        , c=function(t) {
            var e=a.a.timeline( {
                duration:600, easing:"easeInCubic", autoplay:!0, changeBegin:function() {
                    document.documentElement.classList.add("u-overflow-hidden", "u-pointer-events-none"), document.body.classList.add("u-overflow-hidden")
                }
                , complete:function() {
                    document.documentElement.classList.remove("u-overflow-hidden", "u-pointer-events-none"), document.body.classList.remove("u-overflow-hidden")
                }
            }
            );
            return e.add( {
                targets:t, translateY:[80, 0], opacity: {
                    value: [0, 1]
                }
            }
            ), e
        }
        , u=function(t) {
            var e=a.a.timeline( {
                duration:600, easing:"easeInCubic", autoplay:!0, changeBegin:function() {
                    document.documentElement.classList.add("u-overflow-hidden", "u-pointer-events-none"), document.body.classList.add("u-overflow-hidden")
                }
                , complete:function() {
                    document.documentElement.classList.remove("u-overflow-hidden", "u-pointer-events-none"), document.body.classList.remove("u-overflow-hidden")
                }
            }
            );
            return e.add( {
                targets:t, translateY:[0, 80], opacity: {
                    value: [1, 0]
                }
            }
            ), e
        }
        , l=function(t, e) {
            return t===r.t&&e===r.j?0: r.M[t]||0
        }
        , d=function(t) {
            t&&t.classList.remove("has-animated-text"), setTimeout(function() {
                t&&t.classList.add("has-animated-text")
            }
            , 10)
        }
    }
    , a60f:function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return r
        }
        ), n.d(e, "c", function() {
            return o
        }
        ), n.d(e, "a", function() {
            return s
        }
        );
        var a=n("51f5"), i=n.n(a), r=function(t, e) {
            var n=i()(t, {
                id: e.id
            }
            );
            return n>=t.length-1?0:n+1
        }
        , o=function(t, e) {
            var n=i()(t, {
                id: e.id
            }
            );
            return n<=0?t.length-1:n-1
        }
        , s=function(t, e) {
            return t.map(function(t, n) {
                return {
                    thumbnail: (t.thumbnails||[])[0], id: t.id, src: e, index: n
                }
            }
            )
        }
    }
    , bb4f:function(t, e, n) {
        "use strict";
        var a=n("6a64"), i=n.n(a), r=n("1209"), o= {
            name:"NnnCloseButton", data:function() {
                return {
                    lottieInstance: null, animationEnded: !1
                }
            }
            , methods: {
                onClick:function() {
                    var t=this;
                    this.animationEnded=!1, this.lottieInstance&&(this.lottieInstance.play(), this.$emit("click"), this.lottieInstance.addEventListener("complete", function() {
                        t.animationEnded=!0, setTimeout(function() {
                            t.animationEnded=!1, t.lottieInstance.renderer&&t.lottieInstance.stop()
                        }
                        , 2e3)
                    }
                    ))
                }
                , handleMouseOver:function() {
                    var t=this.$refs.closeElement;
                    Object(r.a)( {
                        targets: t, scale: 1.1, easing: "easeOutElastic(1.8, 0.3)"
                    }
                    )
                }
                , handleMouseOut:function() {
                    var t=this.$refs.closeElement;
                    Object(r.a)( {
                        targets: t, scale: 1, easing: "easeOutElastic(1.8, 0.3)"
                    }
                    )
                }
            }
            , mounted:function() {
                this.lottieInstance=i.a.loadAnimation( {
                    container: this.$refs.closeElement, renderer: "svg", autoplay: !1, animationData: n("30f8")
                }
                )
            }
            , beforeDestroy:function() {
                this.lottieInstance.destroy()
            }
        }
        , s=n("2877"), c=Object(s.a)(o, function() {
            var t=this, e=t.$createElement, n=t._self._c||e;
            return n("button", {
                ref:"closeWrapperElement", class:["c-close-button", {
                    "u-opacity-0": t.animationEnded
                }
                ], attrs: {
                    type: "button"
                }
                , on: {
                    click: t.onClick, mouseover: t.handleMouseOver, mouseout: t.handleMouseOut
                }
            }
            , [n("div", {
                ref: "closeElement", staticClass: "c-close-button__el"
            }
            )])
        }
        , [], !1, null, null, null);
        e.a=c.exports
    }
    , d6bd:function(t, e, n) {}
    , edf4:function(t) {
        t.exports= {
            v:"5.5.8", fr:29.9700012207031, ip:0, op:122.000004969162, w:360, h:100, nm:"NNNLoading Screen lottie 3", ddd:0, assets:[ {
                id:"comp_0", layers:[ {
                    ddd:0, ind:1, ty:4, nm:"Shape Layer 4", sr:1, ks: {
                        o: {
                            a:1, k:[ {
                                t: 24, s: [0], h: 1
                            }
                            , {
                                t: 25, s: [100], h: 1
                            }
                            , {
                                t: 27.5, s: [0], h: 1
                            }
                            , {
                                t: 30, s: [100], h: 1
                            }
                            , {
                                t: 33, s: [0], h: 1
                            }
                            , {
                                t: 35, s: [100], h: 1
                            }
                            , {
                                t: 37.5, s: [0], h: 1
                            }
                            , {
                                t: 38.75, s: [100], h: 1
                            }
                            , {
                                t: 41.0000016699642, s: [0], h: 1
                            }
                            ], ix:11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                i: {
                                    x: .236, y: 1
                                }
                                , o: {
                                    x: .207, y: 0
                                }
                                , t:25, s:[198.313, 24.625, 0], to:[17, 0, 0], ti:[-17, 0, 0]
                            }
                            , {
                                t: 40.0000016292334, s: [300.313, 24.625, 0]
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [-167.563, 2.125, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [72, 53.992, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ty:"rc", d:1, s: {
                                a: 0, k: [33.625, 65.75], ix: 2
                            }
                            , p: {
                                a: 0, k: [0, 0], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 4
                            }
                            , nm:"Rectangle Path 1", mn:"ADBE Vector Shape - Rect", hd:!1
                        }
                        , {
                            ty:"st", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 3
                            }
                            , o: {
                                a: 0, k: 100, ix: 4
                            }
                            , w: {
                                a: 0, k: 0, ix: 5
                            }
                            , lc:1, lj:1, ml:4, bm:0, nm:"Stroke 1", mn:"ADBE Vector Graphic - Stroke", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, .525482177734, .341156005859, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-167.562, 2.125], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:24.00000097754, op:42.0000017106951, st:24.00000097754, bm:0
                }
                , {
                    ddd:0, ind:2, ty:4, nm:"Shape Layer 3", sr:1, ks: {
                        o: {
                            a:1, k:[ {
                                t: 25, s: [0], h: 1
                            }
                            , {
                                t: 26, s: [100], h: 1
                            }
                            , {
                                t: 28.5, s: [0], h: 1
                            }
                            , {
                                t: 31, s: [100], h: 1
                            }
                            , {
                                t: 34, s: [0], h: 1
                            }
                            , {
                                t: 36, s: [100], h: 1
                            }
                            , {
                                t: 38.5, s: [0], h: 1
                            }
                            , {
                                t: 39.75, s: [100], h: 1
                            }
                            , {
                                t: 42.0000017106951, s: [0], h: 1
                            }
                            ], ix:11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                i: {
                                    x: .236, y: 1
                                }
                                , o: {
                                    x: .207, y: 0
                                }
                                , t:26, s:[198.313, 96.375, 0], to:[32.354, 0, 0], ti:[-32.354, 0, 0]
                            }
                            , {
                                t: 41.0000016699642, s: [392.438, 96.375, 0]
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [-167.563, 2.125, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [72, 53.992, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ty:"rc", d:1, s: {
                                a: 0, k: [33.625, 65.75], ix: 2
                            }
                            , p: {
                                a: 0, k: [0, 0], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 4
                            }
                            , nm:"Rectangle Path 1", mn:"ADBE Vector Shape - Rect", hd:!1
                        }
                        , {
                            ty:"st", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 3
                            }
                            , o: {
                                a: 0, k: 100, ix: 4
                            }
                            , w: {
                                a: 0, k: 0, ix: 5
                            }
                            , lc:1, lj:1, ml:4, bm:0, nm:"Stroke 1", mn:"ADBE Vector Graphic - Stroke", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, .525482177734, .341156005859, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-167.562, 2.125], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:25.0000010182709, op:43.0000017514259, st:25.0000010182709, bm:0
                }
                , {
                    ddd:0, ind:3, ty:4, nm:"Shape Layer 2", sr:1, ks: {
                        o: {
                            a:1, k:[ {
                                t: 22, s: [0], h: 1
                            }
                            , {
                                t: 23, s: [100], h: 1
                            }
                            , {
                                t: 25.5, s: [0], h: 1
                            }
                            , {
                                t: 28, s: [100], h: 1
                            }
                            , {
                                t: 31, s: [0], h: 1
                            }
                            , {
                                t: 33, s: [100], h: 1
                            }
                            , {
                                t: 35.5, s: [0], h: 1
                            }
                            , {
                                t: 36.75, s: [100], h: 1
                            }
                            , {
                                t: 39.0000015885026, s: [0], h: 1
                            }
                            ], ix:11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                i: {
                                    x: .236, y: 1
                                }
                                , o: {
                                    x: .207, y: 0
                                }
                                , t:23, s:[198.313, 60.875, 0], to:[32.417, 0, 0], ti:[-32.417, 0, 0]
                            }
                            , {
                                t: 38.0000015477717, s: [392.813, 60.875, 0]
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [-167.563, 2.125, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [72, 53.992, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ty:"rc", d:1, s: {
                                a: 0, k: [33.625, 65.75], ix: 2
                            }
                            , p: {
                                a: 0, k: [0, 0], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 4
                            }
                            , nm:"Rectangle Path 1", mn:"ADBE Vector Shape - Rect", hd:!1
                        }
                        , {
                            ty:"st", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 3
                            }
                            , o: {
                                a: 0, k: 100, ix: 4
                            }
                            , w: {
                                a: 0, k: 0, ix: 5
                            }
                            , lc:1, lj:1, ml:4, bm:0, nm:"Stroke 1", mn:"ADBE Vector Graphic - Stroke", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, .525482177734, .341156005859, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-167.562, 2.125], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:22.0000008960784, op:40.0000016292334, st:22.0000008960784, bm:0
                }
                , {
                    ddd:0, ind:5, ty:4, nm:"Shape Layer 5", sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [100.212, 62.125, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [-167.563, 2.125, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ty:"rc", d:1, s: {
                                a: 0, k: [33.625, 65.75], ix: 2
                            }
                            , p: {
                                a: 0, k: [0, 0], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 4
                            }
                            , nm:"Rectangle Path 1", mn:"ADBE Vector Shape - Rect", hd:!1
                        }
                        , {
                            ty:"st", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 3
                            }
                            , o: {
                                a: 0, k: 100, ix: 4
                            }
                            , w: {
                                a: 0, k: 0, ix: 5
                            }
                            , lc:1, lj:1, ml:4, bm:0, nm:"Stroke 1", mn:"ADBE Vector Graphic - Stroke", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, .525482177734, .341156005859, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-167.562, 2.125], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:32.0000013033867, op:36.0000014663101, st:28.0000011404634, bm:0
                }
                , {
                    ddd:0, ind:6, ty:4, nm:"Shape Layer 1", sr:1, ks: {
                        o: {
                            a:1, k:[ {
                                t: 0, s: [0], h: 1
                            }
                            , {
                                t: 1, s: [100], h: 1
                            }
                            , {
                                t: 3.5, s: [0], h: 1
                            }
                            , {
                                t: 6, s: [100], h: 1
                            }
                            , {
                                t: 9, s: [0], h: 1
                            }
                            , {
                                t: 11, s: [100], h: 1
                            }
                            , {
                                t: 13.5, s: [0], h: 1
                            }
                            , {
                                t: 14.75, s: [100], h: 1
                            }
                            , {
                                t: 17.0000006924242, s: [0], h: 1
                            }
                            ], ix:11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                i: {
                                    x: .236, y: 1
                                }
                                , o: {
                                    x: .207, y: 0
                                }
                                , t:1, s:[42.438, 62.125, 0], to:[19.083, 0, 0], ti:[-19.083, 0, 0]
                            }
                            , {
                                t: 16.0000006516934, s: [156.938, 62.125, 0]
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [-167.563, 2.125, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ty:"rc", d:1, s: {
                                a: 0, k: [33.625, 65.75], ix: 2
                            }
                            , p: {
                                a: 0, k: [0, 0], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 4
                            }
                            , nm:"Rectangle Path 1", mn:"ADBE Vector Shape - Rect", hd:!1
                        }
                        , {
                            ty:"st", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 3
                            }
                            , o: {
                                a: 0, k: 100, ix: 4
                            }
                            , w: {
                                a: 0, k: 0, ix: 5
                            }
                            , lc:1, lj:1, ml:4, bm:0, nm:"Stroke 1", mn:"ADBE Vector Graphic - Stroke", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, .525482177734, .341156005859, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-167.562, 2.125], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:0, op:18.000000733155, st:0, bm:0
                }
                , {
                    ddd:0, ind:7, ty:3, nm:"Null 12", sr:1, ks: {
                        o: {
                            a: 0, k: 21.779, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [210, 60, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [0, 0, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100.056, 100.056, 100], ix: 6
                        }
                    }
                    , ao:0, ip:0, op:82.0000033399285, st:0, bm:0
                }
                , {
                    ddd:0, ind:8, ty:4, nm:"net K", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 0, s: [181.336, 35.556, 0], h: 1
                            }
                            , {
                                t: 10, s: [181.336, 35.556, 0], h: 1
                            }
                            , {
                                t: 19, s: [-9.656, 35.428, 0], h: 1
                            }
                            , {
                                t: 25, s: [22.049, .877, 0], h: 1
                            }
                            , {
                                t: 30, s: [48.534, 34.608, 0], h: 1
                            }
                            , {
                                t: 32, s: [-7.453, -34.625, 0], h: 1
                            }
                            , {
                                t: 42, s: [119.476, -.394, 0], h: 1
                            }
                            , {
                                t: 44.0000017921567, s: [181.336, 35.556, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [181.336, 35.556, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[205.213, 15.121], [198.063, 25.134], [197.655, 25.134], [197.655, 15.121], [186.389, 15.121], [186.389, 31.654], [186.389, 31.72], [186.389, 47.991], [197.655, 47.991], [197.655, 37.978], [198.063, 37.978], [205.213, 47.991], [213.283, 47.991], [201.129, 31.687], [213.283, 15.121]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:-1.00000004073083, op:124.000005050624, st:0, bm:0
                }
                , {
                    ddd:0, ind:9, ty:4, nm:"net R", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 10, s: [153.928, 35.505, 0], h: 1
                            }
                            , {
                                t: 15, s: [-8.934, 1.054, 0], h: 1
                            }
                            , {
                                t: 42.0000017106951, s: [153.928, 35.505, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [153.928, 35.505, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[185.101, 22.53], [185.101, 15.075], [159.52, 15.075], [159.52, 25.074], [169.292, 25.053], [159.576, 35.092], [172.1, 47.936], [185.336, 47.936], [172.659, 34.938]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:-1.00000004073083, op:124.000005050624, st:0, bm:0
                }
                , {
                    ddd:0, ind:10, ty:4, nm:"net O 2", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [122.701, 35.496, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [122.701, 35.496, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[141.943, 15.066], [141.943, 23.73], [149.929, 23.73], [149.929, 39.262], [132.472, 39.262], [132.472, 23.73], [140.634, 23.73], [140.634, 15.066], [124.359, 15.066], [124.359, 47.926], [158.043, 47.926], [158.043, 15.066]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:43.0000017514259, op:124.000005050624, st:5.00000020365417, bm:0
                }
                , {
                    ddd:0, ind:11, ty:4, nm:"net O", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 0, s: [122.701, 35.496, 0], h: 1
                            }
                            , {
                                t: 6, s: [122.701, -33.829, 0], h: 1
                            }
                            , {
                                t: 10, s: [122.701, 35.496, 0], h: 1
                            }
                            , {
                                t: 46.0000018736184, s: [122.701, 35.496, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [122.701, 35.496, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[141.943, 15.066], [141.943, 23.73], [149.929, 23.73], [149.929, 39.262], [132.472, 39.262], [132.472, 23.73], [140.634, 23.73], [140.634, 15.066], [124.359, 15.066], [124.359, 47.926], [158.043, 47.926], [158.043, 15.066]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:0, op:17.0000006924242, st:0, bm:0
                }
                , {
                    ddd:0, ind:12, ty:4, nm:"net W", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 10, s: [80.481, 35.563, 0], h: 1
                            }
                            , {
                                t: 23, s: [53.236, -34.568, 0], h: 1
                            }
                            , {
                                t: 43.0000017514259, s: [80.481, 35.563, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [80.481, 35.563, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[107.612, 15.127], [101.052, 15.13], [83.785, 32.393], [83.785, 24.658], [75.013, 24.658], [75.013, 48], [83.785, 48], [98.841, 33.872], [98.841, 48], [107.612, 48], [122.95, 33.609], [122.95, 17.202], [107.612, 31.827]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:-9.00000036657752, op:123.000005009893, st:0, bm:0
                }
                , {
                    ddd:0, ind:13, ty:4, nm:"net T 2", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 0, s: [57.074, 35.547, 0], h: 1
                            }
                            , {
                                t: 10, s: [57.074, 35.547, 0], h: 1
                            }
                            , {
                                t: 26, s: [57.074, 35.547, 0], h: 1
                            }
                            , {
                                t: 30, s: [28.715, -34.414, 0], h: 1
                            }
                            , {
                                t: 33, s: [92.179, 34.297, 0], h: 1
                            }
                            , {
                                t: 43.0000017514259, s: [57.074, 35.547, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [57.074, 35.547, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[52.075, 15.116], [52.075, 31.664], [64.832, 31.664], [64.832, 47.977], [73.603, 47.977], [73.603, 23.12], [91.1, 23.12], [99.073, 15.133]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:26.0000010590017, op:123.000005009893, st:0, bm:0
                }
                , {
                    ddd:0, ind:14, ty:4, nm:"net T", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 0, s: [57.074, 35.547, 0], h: 1
                            }
                            , {
                                t: 10, s: [57.074, 35.547, 0], h: 1
                            }
                            , {
                                t: 46.0000018736184, s: [57.074, 35.547, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [57.074, 35.547, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[52.075, 15.116], [52.075, 31.664], [64.832, 31.664], [64.832, 47.977], [73.603, 47.977], [73.603, 23.12], [91.1, 23.12], [99.073, 15.133]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:-3.00000012219251, op:21.0000008553475, st:0, bm:0
                }
                , {
                    ddd:0, ind:15, ty:4, nm:"net E 2", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 30, s: [24.182, 35.547, 0], h: 1
                            }
                            , {
                                t: 32, s: [126.689, .544, 0], h: 1
                            }
                            , {
                                t: 42.0000017106951, s: [24.182, 35.547, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [24.182, 35.547, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[35.676, 35.18], [50.639, 35.18], [50.639, 28.007], [42.664, 28.007], [36.473, 22.054], [50.639, 22.054], [50.639, 15.116], [21.933, 15.116], [21.933, 22.054], [27.983, 28.007], [21.933, 28.007], [21.933, 35.18], [34.174, 47.977], [63.43, 47.977], [63.43, 40.946], [41.351, 40.946]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:32.0000013033867, op:126.000005132085, st:22.0000008960784, bm:0
                }
                , {
                    ddd:0, ind:16, ty:4, nm:"net E", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 0, s: [24.182, 35.547, 0], h: 1
                            }
                            , {
                                t: 10, s: [24.182, 35.547, 0], h: 1
                            }
                            , {
                                t: 24, s: [127.408, 36.05, 0], h: 1
                            }
                            , {
                                t: 46.0000018736184, s: [24.182, 35.547, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [24.182, 35.547, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[35.676, 35.18], [50.639, 35.18], [50.639, 28.007], [42.664, 28.007], [36.473, 22.054], [50.639, 22.054], [50.639, 15.116], [21.933, 15.116], [21.933, 22.054], [27.983, 28.007], [21.933, 28.007], [21.933, 35.18], [34.174, 47.977], [63.43, 47.977], [63.43, 40.946], [41.351, 40.946]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:-7.00000028511585, op:25.0000010182709, st:0, bm:0
                }
                , {
                    ddd:0, ind:17, ty:4, nm:"net N 2", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [-8.351, 35.535, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [-8.351, 35.535, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[13.221, 28.418], [-.147, 15.105], [-.147, 33.34], [13.221, 47.966], [20.444, 47.966], [20.444, 15.105], [13.221, 15.105]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:50.0000020365418, op:127.000005172816, st:35.0000014255792, bm:0
                }
                , {
                    ddd:0, ind:18, ty:4, nm:"net N", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 0, s: [-8.351, 35.535, 0], h: 1
                            }
                            , {
                                t: 10, s: [-8.351, 35.535, 0], h: 1
                            }
                            , {
                                t: 19, s: [15.646, -33.904, 0], h: 1
                            }
                            , {
                                t: 46.0000018736184, s: [-8.351, 35.535, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [-8.351, 35.535, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[13.221, 28.418], [-.147, 15.105], [-.147, 33.34], [13.221, 47.966], [20.444, 47.966], [20.444, 15.105], [13.221, 15.105]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:0, op:29.0000011811942, st:0, bm:0
                }
                , {
                    ddd:0, ind:19, ty:4, nm:"noo Y", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 0, s: [181.502, .374, 0], h: 1
                            }
                            , {
                                t: 10, s: [181.502, .374, 0], h: 1
                            }
                            , {
                                t: 22, s: [119.552, 34.762, 0], h: 1
                            }
                            , {
                                t: 24, s: [19.599, 34.762, 0], h: 1
                            }
                            , {
                                t: 32, s: [181.502, .374, 0], h: 1
                            }
                            , {
                                t: 36, s: [19.552, .374, 0], h: 1
                            }
                            , {
                                t: 44, s: [52.881, .374, 0], h: 1
                            }
                            , {
                                t: 47.0000019143492, s: [181.502, .374, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [181.502, .374, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[206.266, -20.035], [206.266, -13.787], [193.861, -5.146], [193.729, -19.877], [186.504, -12.596], [186.504, 4.688], [197.332, 4.688], [206.266, -1.624], [206.266, 7.638], [186.562, 7.638], [186.562, 12.783], [213.5, 12.783], [213.5, -20.035]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:-2.00000008146167, op:125.000005091354, st:0, bm:0
                }
                , {
                    ddd:0, ind:20, ty:4, nm:"noo G", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 0, s: [157.161, .379, 0], h: 1
                            }
                            , {
                                t: 10, s: [157.161, .379, 0], h: 1
                            }
                            , {
                                t: 19, s: [188.306, 35.098, 0], h: 1
                            }
                            , {
                                t: 32, s: [22.899, .118, 0], h: 1
                            }
                            , {
                                t: 36, s: [165.781, .379, 0], h: 1
                            }
                            , {
                                t: 40, s: [50.72, .379, 0], h: 1
                            }
                            , {
                                t: 44.0000017921567, s: [157.161, .379, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [157.161, .379, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[185.073, -7.244], [174.901, -7.244], [174.901, -2.442], [169.352, -2.442], [169.352, -7.665], [175.106, -13.042], [184.884, -13.042], [191.846, -20.008], [172.48, -20.008], [159.475, -7.665], [159.475, 12.765], [185.073, 12.765]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:0, op:125.000005091354, st:0, bm:0
                }
                , {
                    ddd:0, ind:21, ty:4, nm:"noo O4", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [122.657, .349, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [122.657, .349, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[141.899, -20.082], [141.899, -11.417], [149.885, -11.417], [149.885, 4.115], [132.428, 4.115], [132.428, -11.417], [140.59, -11.417], [140.59, -20.082], [124.315, -20.082], [124.315, 12.779], [157.999, 12.779], [157.999, -20.082]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:44.0000017921567, op:125.000005091354, st:47.0000019143492, bm:0
                }
                , {
                    ddd:0, ind:22, ty:4, nm:"noo O3", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 0, s: [122.657, .349, 0], h: 1
                            }
                            , {
                                t: 10, s: [122.657, .349, 0], h: 1
                            }
                            , {
                                t: 46.0000018736184, s: [122.657, .349, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [122.657, .349, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[141.899, -20.082], [141.899, -11.417], [149.885, -11.417], [149.885, 4.115], [132.428, 4.115], [132.428, -11.417], [140.59, -11.417], [140.59, -20.082], [124.315, -20.082], [124.315, 12.779], [157.999, 12.779], [157.999, -20.082]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:0, op:31.0000012626559, st:0, bm:0
                }
                , {
                    ddd:0, ind:23, ty:4, nm:"noo L", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 0, s: [89.136, .399, 0], h: 1
                            }
                            , {
                                t: 10, s: [89.136, .399, 0], h: 1
                            }
                            , {
                                t: 12, s: [53.724, .399, 0], h: 1
                            }
                            , {
                                t: 15, s: [88.472, .399, 0], h: 1
                            }
                            , {
                                t: 20, s: [45.388, -33.683, 0], h: 1
                            }
                            , {
                                t: 23, s: [89.136, .399, 0], h: 1
                            }
                            , {
                                t: 26, s: [-10.502, 35.801, 0], h: 1
                            }
                            , {
                                t: 42, s: [89.136, .399, 0], h: 1
                            }
                            , {
                                t: 46.0000018736184, s: [89.136, .399, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [89.136, .399, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[92.462, -20.031], [92.462, 12.83], [101.232, 12.83], [122.811, 3.56], [122.811, -12.941], [101.232, -3.39], [101.232, -20.031]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:-5.00000020365417, op:124.000005050624, st:0, bm:0
                }
                , {
                    ddd:0, ind:24, ty:4, nm:"noo O5", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 0, s: [55.532, .349, 0], h: 1
                            }
                            , {
                                t: 7, s: [55.532, .349, 0], h: 1
                            }
                            , {
                                t: 12, s: [107.209, -35.147, 0], h: 1
                            }
                            , {
                                t: 47.0000019143492, s: [55.532, .349, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [55.532, .349, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[74.774, -20.082], [74.774, -11.417], [82.76, -11.417], [82.76, 4.115], [65.303, 4.115], [65.303, -11.417], [73.465, -11.417], [73.465, -20.082], [57.189, -20.082], [57.189, 12.779], [90.875, 12.779], [90.875, -20.082]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:47.0000019143492, op:124.000005050624, st:0, bm:0
                }
                , {
                    ddd:0, ind:25, ty:4, nm:"noo O2", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 0, s: [55.532, .349, 0], h: 1
                            }
                            , {
                                t: 7, s: [55.532, .349, 0], h: 1
                            }
                            , {
                                t: 12, s: [107.209, -35.147, 0], h: 1
                            }
                            , {
                                t: 47.0000019143492, s: [55.532, .349, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [55.532, .349, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[74.774, -20.082], [74.774, -11.417], [82.76, -11.417], [82.76, 4.115], [65.303, 4.115], [65.303, -11.417], [73.465, -11.417], [73.465, -20.082], [57.189, -20.082], [57.189, 12.779], [90.875, 12.779], [90.875, -20.082]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:0, op:27.0000010997325, st:0, bm:0
                }
                , {
                    ddd:0, ind:26, ty:4, nm:"noo O 2", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [20.248, .349, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [20.248, .349, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[39.533, -20.082], [39.533, -11.417], [47.475, -11.417], [47.475, 4.115], [30.019, 4.115], [30.019, -11.417], [38.223, -11.417], [38.223, -20.082], [21.905, -20.082], [21.905, 12.779], [55.59, 12.779], [55.59, -20.082]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:44.0000017921567, op:125.000005091354, st:33.0000013441176, bm:0
                }
                , {
                    ddd:0, ind:27, ty:4, nm:"noo O", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 0, s: [20.248, .349, 0], h: 1
                            }
                            , {
                                t: 10, s: [20.248, .349, 0], h: 1
                            }
                            , {
                                t: 15, s: [143.438, -34.886, 0], h: 1
                            }
                            , {
                                t: 25, s: [69.038, 35.492, 0], h: 1
                            }
                            , {
                                t: 46.0000018736184, s: [20.248, .349, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [20.248, .349, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[39.533, -20.082], [39.533, -11.417], [47.475, -11.417], [47.475, 4.115], [30.019, 4.115], [30.019, -11.417], [38.223, -11.417], [38.223, -20.082], [21.905, -20.082], [21.905, 12.779], [55.59, 12.779], [55.59, -20.082]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:0, op:18.000000733155, st:0, bm:0
                }
                , {
                    ddd:0, ind:28, ty:4, nm:"noo N", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 0, s: [-8.351, .399, 0], h: 1
                            }
                            , {
                                t: 10, s: [-8.351, .399, 0], h: 1
                            }
                            , {
                                t: 15, s: [76.211, -34.313, 0], h: 1
                            }
                            , {
                                t: 23, s: [156.938, 35.818, 0], h: 1
                            }
                            , {
                                t: 42.0000017106951, s: [-8.351, .399, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [-8.351, .399, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[13.221, -6.718], [-.147, -20.031], [-.147, -1.796], [13.221, 12.83], [20.444, 12.83], [20.444, -20.031], [13.221, -20.031]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:-1.00000004073083, op:125.000005091354, st:0, bm:0
                }
                , {
                    ddd:0, ind:29, ty:4, nm:"new W 2", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [-69.176, 3.19, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [62.541, -34.536, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [134.031, 134.031, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[65.844, -46.53], [57.072, -46.53], [57.072, -22.139], [65.844, -22.139], [80.9, -36.267], [80.9, -22.139], [89.671, -22.139], [105.009, -36.53], [105.009, -52.937], [89.671, -38.312], [89.671, -54.933], [83.022, -54.921], [65.844, -37.887]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:11.0000004480392, op:25.0000010182709, st:16.0000006516934, bm:0
                }
                , {
                    ddd:0, ind:30, ty:4, nm:"new E 2", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [-109.577, 3.157, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [32.927, -34.569, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [130.458, 130.458, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[55.6, -22.139], [55.6, -29.171], [41.156, -29.171], [35.48, -34.936], [55.647, -34.936], [55.647, -42.109], [42.469, -42.109], [36.278, -48.062], [74.069, -48.062], [81.116, -55], [21.737, -55], [21.737, -48.062], [27.788, -42.109], [21.737, -42.109], [21.737, -34.936], [33.98, -22.139]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:8.00000032584668, op:29.0000011811942, st:10.0000004073083, bm:0
                }
                , {
                    ddd:0, ind:31, ty:4, nm:"new N 2", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [-166.116, 3.157, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [-8.351, -34.569, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [135.231, 135.231, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[13.221, -41.687], [-.147, -55], [-.147, -36.765], [13.221, -22.139], [20.444, -22.139], [20.444, -55], [13.221, -55]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:12.00000048877, op:27.0000010997326, st:15.0000006109625, bm:0
                }
                , {
                    ddd:0, ind:32, ty:4, nm:"new W 3", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 9, s: [62.541, -34.536, 0], h: 1
                            }
                            , {
                                t: 19, s: [62.541, -34.536, 0], h: 1
                            }
                            , {
                                t: 24, s: [44.793, .176, 0], h: 1
                            }
                            , {
                                t: 34, s: [117.182, 34.863, 0], h: 1
                            }
                            , {
                                t: 47.0000019143492, s: [62.541, -34.536, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [62.541, -34.536, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[65.844, -46.53], [57.072, -46.53], [57.072, -22.139], [65.844, -22.139], [80.9, -36.267], [80.9, -22.139], [89.671, -22.139], [105.009, -36.53], [105.009, -52.937], [89.671, -38.312], [89.671, -54.933], [83.022, -54.921], [65.844, -37.887]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:47.0000019143492, op:140.000005702317, st:9.00000036657752, bm:0
                }
                , {
                    ddd:0, ind:33, ty:4, nm:"new W", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 0, s: [62.541, -34.536, 0], h: 1
                            }
                            , {
                                t: 10, s: [62.541, -34.536, 0], h: 1
                            }
                            , {
                                t: 15, s: [44.793, .176, 0], h: 1
                            }
                            , {
                                t: 25, s: [117.182, 34.863, 0], h: 1
                            }
                            , {
                                t: 43.0000017514259, s: [62.541, -34.536, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [62.541, -34.536, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[65.844, -46.53], [57.072, -46.53], [57.072, -22.139], [65.844, -22.139], [80.9, -36.267], [80.9, -22.139], [89.671, -22.139], [105.009, -36.53], [105.009, -52.937], [89.671, -38.312], [89.671, -54.933], [83.022, -54.921], [65.844, -37.887]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:0, op:30.0000012219251, st:0, bm:0
                }
                , {
                    ddd:0, ind:34, ty:4, nm:"new E 3", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [32.927, -34.569, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [32.927, -34.569, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[55.6, -22.139], [55.6, -29.171], [41.156, -29.171], [35.48, -34.936], [55.647, -34.936], [55.647, -42.109], [42.469, -42.109], [36.278, -48.062], [74.069, -48.062], [81.116, -55], [21.737, -55], [21.737, -48.062], [27.788, -42.109], [21.737, -42.109], [21.737, -34.936], [33.98, -22.139]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:43.0000017514259, op:124.000005050624, st:50.0000020365418, bm:0
                }
                , {
                    ddd:0, ind:35, ty:4, nm:"new N 3", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [-8.351, -34.569, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [-8.351, -34.569, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[13.221, -41.687], [-.147, -55], [-.147, -36.765], [13.221, -22.139], [20.444, -22.139], [20.444, -55], [13.221, -55]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:46.0000018736184, op:125.000005091354, st:50.0000020365418, bm:0
                }
                , {
                    ddd:0, ind:36, ty:4, nm:"new E", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 0, s: [32.927, -34.569, 0], h: 1
                            }
                            , {
                                t: 10, s: [32.927, -34.569, 0], h: 1
                            }
                            , {
                                t: 46.0000018736184, s: [32.927, -34.569, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [32.927, -34.569, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[55.6, -22.139], [55.6, -29.171], [41.156, -29.171], [35.48, -34.936], [55.647, -34.936], [55.647, -42.109], [42.469, -42.109], [36.278, -48.062], [74.069, -48.062], [81.116, -55], [21.737, -55], [21.737, -48.062], [27.788, -42.109], [21.737, -42.109], [21.737, -34.936], [33.98, -22.139]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:0, op:18.000000733155, st:0, bm:0
                }
                , {
                    ddd:0, ind:37, ty:4, nm:"new N", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a:1, k:[ {
                                t: 0, s: [-8.351, -34.569, 0], h: 1
                            }
                            , {
                                t: 10, s: [-8.351, -34.569, 0], h: 1
                            }
                            , {
                                t: 46.0000018736184, s: [-8.351, -34.569, 0], h: 1
                            }
                            ], ix:2
                        }
                        , a: {
                            a: 0, k: [-8.351, -34.569, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[13.221, -41.687], [-.147, -55], [-.147, -36.765], [13.221, -22.139], [20.444, -22.139], [20.444, -55], [13.221, -55]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:0, op:26.0000010590017, st:0, bm:0
                }
                , {
                    ddd:0, ind:38, ty:4, nm:"n big 9", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [-157.963, 2.274, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [-157.963, 2.274, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-119.686, -28.492], [-133.878, -28.492], [-133.878, -2.138], [-159.24, -26.844], [-159.24, .791], [-133.878, 25.039], [-119.686, 25.039]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:-49.0000019958109, op:7.00000028511585, st:-74.0000030140818, bm:0
                }
                , {
                    ddd:0, ind:39, ty:4, nm:"n big 6", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [-157.963, 2.274, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [-157.963, 2.274, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-119.686, -28.492], [-133.878, -28.492], [-133.878, -2.138], [-159.24, -26.844], [-159.24, .791], [-133.878, 25.039], [-119.686, 25.039]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:33.0000013441176, op:129.000005254278, st:8.00000032584668, bm:0
                }
                , {
                    ddd:0, ind:40, ty:4, nm:"n big 8", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [-110.369, 2.274, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [-110.369, 2.274, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-72.092, -28.492], [-86.283, -28.492], [-86.283, -2.138], [-111.645, -26.844], [-111.645, .791], [-86.283, 25.039], [-72.092, 25.039]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:-56.0000022809268, op:8.00000032584667, st:-74.0000030140818, bm:0
                }
                , {
                    ddd:0, ind:41, ty:4, nm:"n big 5", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [-110.369, 2.274, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [-110.369, 2.274, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-72.092, -28.492], [-86.283, -28.492], [-86.283, -2.138], [-111.645, -26.844], [-111.645, .791], [-86.283, 25.039], [-72.092, 25.039]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:40.0000016292334, op:137.000005580124, st:8.00000032584668, bm:0
                }
                , {
                    ddd:0, ind:42, ty:4, nm:"n big 7", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [-62.759, 2.274, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [-62.759, 2.274, 0], ix: 1
                        }
                        , s: {
                            a:1, k:[ {
                                t: -56, s: [-100, 100, 100], h: 1
                            }
                            , {
                                t: -46.0000018736184, s: [100, 100, 100], h: 1
                            }
                            ], ix:6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-24.482, -28.492], [-38.674, -28.492], [-38.674, -2.138], [-64.035, -26.844], [-64.035, .791], [-38.674, 25.039], [-24.482, 25.039]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:-54.0000021994651, op:5.00000020365418, st:-74.0000030140818, bm:0
                }
                , {
                    ddd:0, ind:43, ty:4, nm:"n big 4", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [-62.759, 2.274, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [-62.759, 2.274, 0], ix: 1
                        }
                        , s: {
                            a:1, k:[ {
                                t: 26, s: [-100, 100, 100], h: 1
                            }
                            , {
                                t: 36.0000014663101, s: [100, 100, 100], h: 1
                            }
                            ], ix:6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-24.482, -28.492], [-38.674, -28.492], [-38.674, -2.138], [-64.035, -26.844], [-64.035, .791], [-38.674, 25.039], [-24.482, 25.039]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:28.0000011404634, op:131.000005335739, st:8.00000032584668, bm:0
                }
                , {
                    ddd:0, ind:44, ty:4, nm:"zagrada 4", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [-65.748, .515, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [-65.748, .515, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-16.421, 33.257], [-86.286, 33.257], [-86.286, 47.969], [-8.21, 47.969], [-8.21, -54.939], [-38.634, -54.939], [-38.634, -36.644], [-16.421, -36.644]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:41.0000016699642, op:125.000005091354, st:45.0000018328876, bm:0
                }
                , {
                    ddd:0, ind:45, ty:4, nm:"zagrada 2", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [-65.748, .515, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [-65.748, .515, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-16.421, 33.257], [-86.286, 33.257], [-86.286, 47.969], [-8.21, 47.969], [-8.21, -54.939], [-38.634, -54.939], [-38.634, -36.644], [-16.421, -36.644]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:-2.00000008146167, op:31.0000012626559, st:21.0000008553475, bm:0
                }
                , {
                    ddd:0, ind:46, ty:4, nm:"zagrada 3", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [-149.389, .587, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [-149.389, .587, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-167.289, -36.358], [-86.277, -36.358], [-86.277, -54.795], [-175.5, -54.795], [-175.5, 47.969], [-133.921, 47.969], [-133.921, 33.257], [-167.289, 33.257]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:40.0000016292334, op:125.000005091354, st:40.0000016292334, bm:0
                }
                , {
                    ddd:0, ind:47, ty:4, nm:"zagrada", parent:7, sr:1, ks: {
                        o: {
                            a: 0, k: 100, ix: 11
                        }
                        , r: {
                            a: 0, k: 0, ix: 10
                        }
                        , p: {
                            a: 0, k: [-149.389, .587, 0], ix: 2
                        }
                        , a: {
                            a: 0, k: [-149.389, .587, 0], ix: 1
                        }
                        , s: {
                            a: 0, k: [100, 100, 100], ix: 6
                        }
                    }
                    , ao:0, shapes:[ {
                        ty:"gr", it:[ {
                            ind:0, ty:"sh", ix:1, ks: {
                                a:0, k: {
                                    i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[-167.289, -36.358], [-86.277, -36.358], [-86.277, -54.795], [-175.5, -54.795], [-175.5, 47.969], [-133.921, 47.969], [-133.921, 33.257], [-167.289, 33.257]], c: !0
                                }
                                , ix:2
                            }
                            , nm:"Path 1", mn:"ADBE Vector Shape - Group", hd:!1
                        }
                        , {
                            ty:"fl", c: {
                                a: 0, k: [1, 1, 1, 1], ix: 4
                            }
                            , o: {
                                a: 0, k: 100, ix: 5
                            }
                            , r:1, bm:0, nm:"Fill 1", mn:"ADBE Vector Graphic - Fill", hd:!1
                        }
                        , {
                            ty:"tr", p: {
                                a: 0, k: [-18.5, 4], ix: 2
                            }
                            , a: {
                                a: 0, k: [0, 0], ix: 1
                            }
                            , s: {
                                a: 0, k: [100, 100], ix: 3
                            }
                            , r: {
                                a: 0, k: 0, ix: 6
                            }
                            , o: {
                                a: 0, k: 100, ix: 7
                            }
                            , sk: {
                                a: 0, k: 0, ix: 4
                            }
                            , sa: {
                                a: 0, k: 0, ix: 5
                            }
                            , nm:"Transform"
                        }
                        ], nm:"Rectangle 1", np:3, cix:2, bm:0, ix:1, mn:"ADBE Vector Group", hd:!1
                    }
                    ], ip:0, op:21.0000008553475, st:16.0000006516934, bm:0
                }
                ]
            }
            ], layers:[ {
                ddd:0, ind:1, ty:0, nm:"NNNLoading Screen lottie 2", refId:"comp_0", sr:1, ks: {
                    o: {
                        a: 0, k: 100, ix: 11
                    }
                    , r: {
                        a: 0, k: 0, ix: 10
                    }
                    , p: {
                        a: 0, k: [177.5, 49.5, 0], ix: 2
                    }
                    , a: {
                        a: 0, k: [210, 60, 0], ix: 1
                    }
                    , s: {
                        a: 0, k: [90, 90, 100], ix: 6
                    }
                }
                , ao:0, w:420, h:120, ip:0, op:122.000004969162, st:0, bm:0
            }
            ], markers:[]
        }
    }
    , ee3e:function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return a
        }
        ), n.d(e, "c", function() {
            return i
        }
        ), n.d(e, "d", function() {
            return r
        }
        ), n.d(e, "e", function() {
            return o
        }
        ), n.d(e, "f", function() {
            return s
        }
        ), n.d(e, "a", function() {
            return c
        }
        );
        var a="/audio/background.mp3", i="/audio/membership-audio.mp3", r="/audio/survey-1.mp3", o="/audio/survey-2.mp3", s="/audio/survey-3.mp3", c="/audio/sprite-effects.mp3"
    }
    , ee97:function(t, e, n) {
        "use strict";
        var a= {
            name:"NnnTransition", props: {
                name: {
                    type: String, required: !1, default: "vt-fade-slide-vertical"
                }
                , toggleScrollDuringAnimation: {
                    type: Boolean, required: !1, default: !1
                }
            }
            , methods: {
                showScroll:function() {
                    document.documentElement.classList.remove("u-overflow-hidden"), document.body.classList.remove("u-overflow-hidden")
                }
                , hideScrollWhileAnimationIsInProgress:function() {
                    var t=this;
                    this.toggleScrollDuringAnimation&&(document.documentElement.classList.add("u-overflow-hidden"), document.body.classList.add("u-overflow-hidden"), setTimeout(function() {
                        t.showScroll()
                    }
                    , 1100))
                }
            }
        }
        , i=n("2877"), r=Object(i.a)(a, function() {
            var t=this, e=t.$createElement;
            return(t._self._c||e)("transition", {
                attrs: {
                    name: t.name, mode: "out-in"
                }
                , on: {
                    enter: t.hideScrollWhileAnimationIsInProgress, leave: t.hideScrollWhileAnimationIsInProgress
                }
            }
            , [t._t("default")], 2)
        }
        , [], !1, null, null, null);
        e.a=r.exports
    }
    , f091:function(t, e, n) {
        "use strict";
        var a=n("6a64"), i=n.n(a), r= {
            name:"NnnLogo", methods: {
                playAnimation:function() {
                    var t=this;
                    this.lottieInstance&&(this.lottieInstance.play(), this.lottieInstance.addEventListener("complete", function() {
                        t.lottieInstance.stop()
                    }
                    ))
                }
            }
            , mounted:function() {
                this.lottieInstance=i.a.loadAnimation( {
                    container:this.$el, renderer:"svg", loop:!1, autoplay:!1, animationData:n("90f5"), rendererSettings: {
                        className: "c-header__logo-icon"
                    }
                }
                ), this.$el.addEventListener("mouseenter", this.playAnimation.bind(this))
            }
            , beforeDestroy:function() {
                this.$el.removeEventListener("mouseenter", this.playAnimation.bind(this)), this.lottieInstance.destroy()
            }
        }
        , o=n("2877"), s=Object(o.a)(r, function() {
            var t=this.$createElement;
            return(this._self._c||t)("div", {
                staticClass: "c-header__logo"
            }
            )
        }
        , [], !1, null, null, null);
        e.a=s.exports
    }
    , f0ad:function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return o
        }
        ), n("a481"), n("87e8");
        var a=n("4a68"), i=n.n(a), r=new(n("6b4b").a)(i.a), o=function(t) {
            var e=-1!=navigator.userAgent.indexOf("Firefox")?t: t.replace(/-/g, "/").replace("T", " "), n=new Date, a=(new Date(e).getTime()-n.getTime())/36e5;
            if(Math.abs(a)<25)return r.format(Math.floor(a), "hours");
            if(Math.abs(a)<168) {
                var i=a/24;
                return r.format(Math.ceil(i), "days")
            }
            var o=a/168;
            return r.format(Math.ceil(o), "weeks")
        }
    }
    , f0ce:function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return s
        }
        ), n.d(e, "d", function() {
            return c
        }
        ), n.d(e, "m", function() {
            return u
        }
        ), n.d(e, "f", function() {
            return l
        }
        ), n.d(e, "h", function() {
            return d
        }
        ), n.d(e, "g", function() {
            return p
        }
        ), n.d(e, "e", function() {
            return m
        }
        ), n.d(e, "i", function() {
            return h
        }
        ), n.d(e, "a", function() {
            return f
        }
        ), n.d(e, "c", function() {
            return k
        }
        ), n.d(e, "l", function() {
            return x
        }
        ), n.d(e, "k", function() {
            return b
        }
        ), n.d(e, "j", function() {
            return g
        }
        );
        var a, i, r, o=n("bd86"), s="dashboard", c="global_consciousness", u="video_submissions", l="my_profile", d="my_profile_change_password", p="my_profile_change_email", m="LOGOUT", h="news", f="confirm_your_email", k="email_changed", x=(a= {}
        , Object(o.a)(a, s, "DASHBOARD"), Object(o.a)(a, c, "GLOBAL CONSCIOUSNESS"), Object(o.a)(a, u, "VIDEO SUBMISSIONS"), Object(o.a)(a, l, "ACCOUNT DETAILS"), Object(o.a)(a, d, "CHANGE PASSWORD"), Object(o.a)(a, p, "CHANGE EMAIL"), Object(o.a)(a, h, "NEWS"), Object(o.a)(a, f, ""), Object(o.a)(a, k, ""), a), b=(i= {}
        , Object(o.a)(i, s, function(t) {
            var e=t.firstName;
            return"WELCOME BACK ".concat(e)
        }
        ), Object(o.a)(i, c, function() {
            return""
        }
        ), Object(o.a)(i, u, function() {
            return""
        }
        ), Object(o.a)(i, l, function() {
            return""
        }
        ), Object(o.a)(i, d, function() {
            return""
        }
        ), Object(o.a)(i, p, function() {
            return""
        }
        ), Object(o.a)(i, h, function() {
            return"& ANNOUNCEMENTS"
        }
        ), Object(o.a)(i, f, function() {
            return""
        }
        ), Object(o.a)(i, k, function() {
            return""
        }
        ), i), g=(r= {}
        , Object(o.a)(r, s, 1e3), Object(o.a)(r, u, 600), Object(o.a)(r, c, 1e3), Object(o.a)(r, l, 600), Object(o.a)(r, h, 600), r)
    }
    , f12d:function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return r
        }
        ), n.d(e, "d", function() {
            return o
        }
        ), n.d(e, "c", function() {
            return s
        }
        ), n.d(e, "b", function() {
            return c
        }
        ), n.d(e, "e", function() {
            return u
        }
        );
        var a, i=n("bd86"), r="approved", o="rejected", s="pending", c="empty", u=(a= {}
        , Object(i.a)(a, r, "ACCEPTED"), Object(i.a)(a, o, "REJECTED"), Object(i.a)(a, s, "IN REVIEW"), Object(i.a)(a, c, "EMPTY"), a)
    }
    , f320:function(t, e, n) {
        "use strict";
        var a=(n("ac6a"), n("456d"), n("0f74")), i=n("5a50"), r=n("bb4f"), o=n("f487"), s=n("f0ad"), c= {
            name:"NnnSimpleDialog", components: {
                NnnCloseButton: r.a, NnnMedia: o.a
            }
            , data:function() {
                return {
                    isClosing: !1
                }
            }
            , filters: {
                timeAgo: s.a
            }
            , props: {
                type: {
                    required:!1, validator:function(t) {
                        return Object.keys(a.a).indexOf(t)>-1
                    }
                }
                , article: {
                    required: !1, default: null
                }
            }
            , computed: {
                content:function() {
                    return a.a[this.type]
                }
                , description:function() {
                    return this.article?this.article.content: this.content.description
                }
            }
            , methods: {
                close:function() {
                    var t=this;
                    this.beforeClose(), setTimeout(function() {
                        t.$emit("close")
                    }
                    , 1e3)
                }
                , toggleScrollbarClass:function() {
                    document.documentElement.classList.toggle("u-overflow-hidden")
                }
                , beforeClose:function() {
                    this.isClosing=!0, document.documentElement.removeAttribute("style")
                }
            }
            , mounted:function() {
                this.toggleScrollbarClass(), document.documentElement.style.overflow="hiddden", document.documentElement.style.position="fixed", document.documentElement.style.width="100%", this.type===a.b&&this.$router.push( {
                    path: i.q
                }
                )
            }
            , beforeDestroy:function() {
                this.toggleScrollbarClass(), this.type===a.b&&this.$router.push( {
                    path: i.u
                }
                )
            }
        }
        , u=n("2877"), l=Object(u.a)(c, function() {
            var t=this, e=t.$createElement, n=t._self._c||e;
            return n("div", {
                class:["c-dialog", {
                    "is-closing": t.isClosing
                }
                ]
            }
            , [n("div", {
                staticClass: "c-dialog__ctn"
            }
            , [n("div", {
                staticClass: "c-dialog__header"
            }
            , [n("div", {
                staticClass: "c-dialog-media-wrapper"
            }
            , [t.article?n("nnn-media", {
                staticClass:"u-mr-auto u-mb-8", attrs: {
                    "img-source": t.article.thumbnail, title: t.article.title, "display-large": !0, timestamp: t._f("timeAgo")(t.article.created_at), resource: t.article.source
                }
            }
            ):n("h2", {
                staticClass: "c-dialog__title"
            }
            , [t._v("\n          "+t._s(t.content.title)+"\n        ")])], 1)]), n("div", {
                staticClass: "c-dialog__body"
            }
            , [n("div", {
                staticClass:"c-dialog__body-ctn", domProps: {
                    innerHTML: t._s(t.description)
                }
            }
            )])]), n("div", {
                staticClass: "c-dialog__fade"
            }
            ), n("nnn-close-button", {
                staticClass:"c-dialog__header-close-btn", on: {
                    click: t.close
                }
            }
            )], 1)
        }
        , [], !1, null, null, null);
        e.a=l.exports
    }
    , f487:function(t, e, n) {
        "use strict";
        var a=(n("7f7f"), n("ee97")), i=n("2103"), r= {
            name:"NnnDropdown", directives: {
                clickOutside: n.n(i).a.directive
            }
            , components: {
                NnnTransition: a.a
            }
            , data:function() {
                return {
                    isDropdownOpen: !1
                }
            }
            , methods: {
                toggleDropdown:function() {
                    this.isDropdownOpen=!this.isDropdownOpen
                }
                , setField:function(t) {
                    this.closeDropdown(), this.$emit("set-field", this.name, t)
                }
                , handleClickOutside:function() {
                    this.closeDropdown()
                }
                , closeDropdown:function() {
                    this.isDropdownOpen=!1
                }
            }
        }
        , o=n("2877"), s= {
            functional:!0, render(t, e) {
                const {
                    _c: n, _v: a, data: i, children: r=[]
                }
                =e, {
                    class:o, staticClass:s, style:c, staticStyle:u, attrs:l= {}
                    , ...d
                }
                =i;
                return n("svg", {
                    class:[o, s], style:[c, u], attrs:Object.assign( {
                        xmlns: "http://www.w3.org/2000/svg", viewBox: "0.6 0.5 17 17", width: "17", height: "17"
                    }
                    , l), ...d
                }
                , r.concat([n("path", {
                    staticClass:"shp0", attrs: {
                        d: "M16.95 8.11c-.03-.22-.29-.39-.52-.39-.97.02-1.78-.75-1.8-1.72-.01-.52.21-1.01.59-1.36.17-.15.2-.42.05-.6-.37-.48-.8-.9-1.27-1.28a.44.44 0 00-.61.05c-.51.54-1.3.71-1.99.45-.69-.3-1.12-.99-1.08-1.74a.45.45 0 00-.4-.47 8.24 8.24 0 00-1.79-.01c-.23.03-.41.23-.4.46.03.74-.41 1.42-1.1 1.71-.69.25-1.47.08-1.98-.45a.437.437 0 00-.6-.05c-.48.37-.91.8-1.3 1.28a.46.46 0 00.05.61c.56.5.74 1.3.45 2-.31.67-.99 1.1-1.74 1.07a.44.44 0 00-.46.4c-.07.6-.07 1.21 0 1.82.02.23.29.39.52.39.73-.01 1.38.43 1.65 1.1.28.69.1 1.47-.45 1.98-.17.15-.19.42-.05.6.38.47.8.9 1.27 1.28.18.15.45.13.61-.05.51-.54 1.3-.72 2-.45.69.29 1.12.99 1.08 1.74-.02.23.16.44.39.47.31.03.61.05.92.05.29 0 .59-.02.88-.05.23-.03.4-.23.4-.46-.03-.74.41-1.42 1.09-1.71a1.87 1.87 0 011.98.46c.15.17.42.19.6.05.48-.38.91-.81 1.29-1.28.15-.18.13-.45-.04-.61-.73-.64-.8-1.76-.16-2.48.34-.39.83-.61 1.35-.6h.1c.23.01.44-.16.47-.39.06-.61.06-1.22 0-1.82zm-7.94 3.57a2.67 2.67 0 01-2.67-2.67c0-1.47 1.2-2.66 2.67-2.66s2.67 1.19 2.67 2.66c0 1.48-1.2 2.67-2.67 2.67z"
                    }
                }
                )]))
            }
        }
        , c= {
            name:"NnnMedia", components: {
                NnnDropdown:Object(o.a)(r, function() {
                    var t=this, e=t.$createElement, n=t._self._c||e;
                    return n("div", {
                        directives:[ {
                            name: "click-outside", rawName: "v-click-outside", value: t.handleClickOutside, expression: "handleClickOutside"
                        }
                        ], class:["c-dropdown", {
                            "is-open": t.isDropdownOpen
                        }
                        , {
                            "c-dropdown--clear-target": t.$slots.target
                        }
                        ]
                    }
                    , [n("div", {
                        staticClass: "c-dropdown__target"
                    }
                    , [n("button", {
                        staticClass:"c-dropdown__target-default", on: {
                            click: t.toggleDropdown
                        }
                    }
                    , [t._t("target")], 2), n("nnn-transition", {
                        attrs: {
                            name: "vt-fade"
                        }
                    }
                    , [t.isDropdownOpen?n("ul", {
                        staticClass:"c-dropdown__options", on: {
                            click: t.closeDropdown
                        }
                    }
                    , [t._t("items")], 2):t._e()])], 1)])
                }
                , [], !1, null, null, null).exports, NnnSelectOption:n("3005").a, GearIcon:s
            }
            , props: {
                imgSource: {
                    type: String, required: !0
                }
                , title: {
                    type: String, required: !0
                }
                , displayLarge: {
                    type: Boolean, required: !1, default: !1
                }
                , accountDetails: {
                    type: Boolean, required: !1, default: !1
                }
                , timestamp: {
                    type: String, required: !1, default: ""
                }
                , resource: {
                    type: String, required: !1, default: ""
                }
                , mediaButtons: {
                    type:Array, required:!1, default:function() {
                        return[]
                    }
                }
                , displayGearIcon: {
                    type: Boolean, default: !1, required: !1
                }
            }
        }
        , u=Object(o.a)(c, function() {
            var t=this, e=t.$createElement, n=t._self._c||e;
            return n("div", {
                class:["c-media", {
                    "c-media--lg": t.displayLarge
                }
                , {
                    "c-media--account-details": t.accountDetails
                }
                ]
            }
            , [t.displayGearIcon||t.mediaButtons.length?n("nnn-dropdown", {
                staticClass: "c-media__img-wrapper"
            }
            , [n("template", {
                slot: "target"
            }
            , [n("div", {
                staticClass: "c-media-settings"
            }
            , [n("div", {
                staticClass: "c-media__img"
            }
            , [n("img", {
                attrs: {
                    src: t.imgSource, alt: "avatar"
                }
            }
            )]), n("div", {
                staticClass: "c-media-settings__gradient"
            }
            ), n("div", {
                staticClass: "c-media-settings__svg"
            }
            , [n("gear-icon")], 1)])]), n("template", {
                slot: "items"
            }
            , t._l(t.mediaButtons, function(e, a) {
                return n("nnn-select-option", {
                    key:a, attrs: {
                        selectOptionClass: "c-dropdown__option-item", buttonClass: "c-dropdown__option-item-text"
                    }
                    , on: {
                        click: e.click
                    }
                }
                , [n("div", {
                    staticClass: "u-min-width-10 u-font-weight-normal"
                }
                , [t._v("\n          "+t._s(e.title)+"\n        ")])])
            }
            ), 1)], 2):n("div", {
                staticClass: "c-media__img-wrapper"
            }
            , [n("div", {
                staticClass: "c-media__img"
            }
            , [n("img", {
                attrs: {
                    src: t.imgSource, alt: "avatar"
                }
            }
            )])]), n("div", {
                staticClass: "c-media__ctn"
            }
            , [t.timestamp?n("span", {
                staticClass: "c-media__timestamp"
            }
            , [t._v(t._s(t.timestamp))]):t._e(), n("h4", {
                staticClass: "c-media__title"
            }
            , [t._v(t._s(t.title))]), t.accountDetails?n("span", {
                staticClass: "c-media__primary-text"
            }
            , [t._v("ACCOUNT DETAILS")]):t._e(), t.resource?n("span", {
                staticClass: "c-media__resource"
            }
            , [t._v(t._s(t.resource))]):t._e()])], 1)
        }
        , [], !1, null, null, null);
        e.a=u.exports
    }
}

);