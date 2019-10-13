(window.webpackJsonp = window.webpackJsonp || []).push([
    ["graph"], {
        "523d": function(e, t, a) {
            "use strict";
            a.r(t), a("ac6a"), a("456d"), a("7f7f"), a("63d9");
            var n = a("d225"),
                o = a("b0b4"),
                i = (a("4026"), a("5a89")),
                r = {
                    uniforms: {
                        tDiffuse: {
                            value: null
                        },
                        opacity: {
                            value: 1
                        }
                    },
                    vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
                    fragmentShader: ["uniform float opacity;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "gl_FragColor = opacity * texel;", "}"].join("\n")
                };

            function s() {
                this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1
            }
            Object.assign(s.prototype, {
                setSize: function() {},
                render: function() {
                    console.error("THREE.Pass: .render() must be implemented in derived pass.")
                }
            }), s.FullScreenQuad = function() {
                var e = new i.OrthographicCamera(-1, 1, 1, -1, 0, 1),
                    t = new i.PlaneBufferGeometry(2, 2),
                    a = function(e) {
                        this._mesh = new i.Mesh(t, e)
                    };
                return Object.defineProperty(a.prototype, "material", {
                    get: function() {
                        return this._mesh.material
                    },
                    set: function(e) {
                        this._mesh.material = e
                    }
                }), Object.assign(a.prototype, {
                    render: function(t) {
                        t.render(this._mesh, e)
                    }
                }), a
            }();
            var l = function(e, t) {
                s.call(this), this.textureID = void 0 !== t ? t : "tDiffuse", e instanceof i.ShaderMaterial ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = i.UniformsUtils.clone(e.uniforms), this.material = new i.ShaderMaterial({
                    defines: Object.assign({}, e.defines),
                    uniforms: this.uniforms,
                    vertexShader: e.vertexShader,
                    fragmentShader: e.fragmentShader
                })), this.fsQuad = new s.FullScreenQuad(this.material)
            };
            l.prototype = Object.assign(Object.create(s.prototype), {
                constructor: l,
                render: function(e, t, a) {
                    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = a.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e))
                }
            });
            var d = function(e, t) {
                s.call(this), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1
            };
            d.prototype = Object.assign(Object.create(s.prototype), {
                constructor: d,
                render: function(e, t, a) {
                    var n, o, i = e.context,
                        r = e.state;
                    r.buffers.color.setMask(!1), r.buffers.depth.setMask(!1), r.buffers.color.setLocked(!0), r.buffers.depth.setLocked(!0), this.inverse ? (n = 0, o = 1) : (n = 1, o = 0), r.buffers.stencil.setTest(!0), r.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE), r.buffers.stencil.setFunc(i.ALWAYS, n, 4294967295), r.buffers.stencil.setClear(o), e.setRenderTarget(a), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), r.buffers.color.setLocked(!1), r.buffers.depth.setLocked(!1), r.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295), r.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP)
                }
            });
            var f = function() {
                s.call(this), this.needsSwap = !1
            };
            f.prototype = Object.create(s.prototype), Object.assign(f.prototype, {
                render: function(e) {
                    e.state.buffers.stencil.setTest(!1)
                }
            });
            var u = function(e, t) {
                if (this.renderer = e, void 0 === t) {
                    var a = {
                            minFilter: i.LinearFilter,
                            magFilter: i.LinearFilter,
                            format: i.RGBAFormat,
                            stencilBuffer: !1
                        },
                        n = e.getSize(new i.Vector2);
                    this._pixelRatio = e.getPixelRatio(), this._width = n.width, this._height = n.height, (t = new i.WebGLRenderTarget(this._width * this._pixelRatio, this._height * this._pixelRatio, a)).texture.name = "EffectComposer.rt1"
                } else this._pixelRatio = 1, this._width = t.width, this._height = t.height;
                this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], void 0 === r && console.error("THREE.EffectComposer relies on CopyShader"), void 0 === l && console.error("THREE.EffectComposer relies on ShaderPass"), this.copyPass = new l(r), this.clock = new i.Clock
            };
            Object.assign(u.prototype, {
                swapBuffers: function() {
                    var e = this.readBuffer;
                    this.readBuffer = this.writeBuffer, this.writeBuffer = e
                },
                addPass: function(e) {
                    this.passes.push(e);
                    var t = this.renderer.getDrawingBufferSize(new i.Vector2);
                    e.setSize(t.width, t.height)
                },
                insertPass: function(e, t) {
                    this.passes.splice(t, 0, e)
                },
                isLastEnabledPass: function(e) {
                    for (var t = e + 1; t < this.passes.length; t++)
                        if (this.passes[t].enabled) return !1;
                    return !0
                },
                render: function(e) {
                    void 0 === e && (e = this.clock.getDelta());
                    var t, a, n = this.renderer.getRenderTarget(),
                        o = !1,
                        i = this.passes.length;
                    for (a = 0; a < i; a++)
                        if (!1 !== (t = this.passes[a]).enabled) {
                            if (t.renderToScreen = this.renderToScreen && this.isLastEnabledPass(a), t.render(this.renderer, this.writeBuffer, this.readBuffer, e, o), t.needsSwap) {
                                if (o) {
                                    var r = this.renderer.context;
                                    r.stencilFunc(r.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), r.stencilFunc(r.EQUAL, 1, 4294967295)
                                }
                                this.swapBuffers()
                            }
                            void 0 !== d && (t instanceof d ? o = !0 : t instanceof f && (o = !1))
                        }
                    this.renderer.setRenderTarget(n)
                },
                reset: function(e) {
                    if (void 0 === e) {
                        var t = this.renderer.getSize(new i.Vector2);
                        this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, (e = this.renderTarget1.clone()).setSize(this._width * this._pixelRatio, this._height * this._pixelRatio)
                    }
                    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2
                },
                setSize: function(e, t) {
                    this._width = e, this._height = t;
                    var a = this._width * this._pixelRatio,
                        n = this._height * this._pixelRatio;
                    this.renderTarget1.setSize(a, n), this.renderTarget2.setSize(a, n);
                    for (var o = 0; o < this.passes.length; o++) this.passes[o].setSize(a, n)
                },
                setPixelRatio: function(e) {
                    this._pixelRatio = e, this.setSize(this._width, this._height)
                }
            });
            var m = function() {
                this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1
            };
            Object.assign(m.prototype, {
                setSize: function() {},
                render: function() {
                    console.error("THREE.Pass: .render() must be implemented in derived pass.")
                }
            }), m.FullScreenQuad = function() {
                var e = new i.OrthographicCamera(-1, 1, 1, -1, 0, 1),
                    t = new i.PlaneBufferGeometry(2, 2),
                    a = function(e) {
                        this._mesh = new i.Mesh(t, e)
                    };
                return Object.defineProperty(a.prototype, "material", {
                    get: function() {
                        return this._mesh.material
                    },
                    set: function(e) {
                        this._mesh.material = e
                    }
                }), Object.assign(a.prototype, {
                    render: function(t) {
                        t.render(this._mesh, e)
                    }
                }), a
            }();
            var c = function(e, t, a, n, o) {
                s.call(this), this.scene = e, this.camera = t, this.overrideMaterial = a, this.clearColor = n, this.clearAlpha = void 0 !== o ? o : 0, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1
            };
            c.prototype = Object.assign(Object.create(s.prototype), {
                constructor: c,
                render: function(e, t, a) {
                    var n, o, i = e.autoClear;
                    e.autoClear = !1, this.scene.overrideMaterial = this.overrideMaterial, this.clearColor && (n = e.getClearColor().getHex(), o = e.getClearAlpha(), e.setClearColor(this.clearColor, this.clearAlpha)), this.clearDepth && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : a), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor && e.setClearColor(n, o), this.scene.overrideMaterial = null, e.autoClear = i
                }
            });
            var A = {
                    shaderID: "luminosityHighPass",
                    uniforms: {
                        tDiffuse: {
                            value: null
                        },
                        luminosityThreshold: {
                            value: 1
                        },
                        smoothWidth: {
                            value: 1
                        },
                        defaultColor: {
                            value: new i.Color(0)
                        },
                        defaultOpacity: {
                            value: 0
                        }
                    },
                    vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
                    fragmentShader: ["uniform sampler2D tDiffuse;", "uniform vec3 defaultColor;", "uniform float defaultOpacity;", "uniform float luminosityThreshold;", "uniform float smoothWidth;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "vec3 luma = vec3( 0.299, 0.587, 0.114 );", "float v = dot( texel.xyz, luma );", "vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );", "float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );", "gl_FragColor = mix( outputColor, texel, alpha );", "}"].join("\n")
                },
                p = function(e, t, a, n) {
                    s.call(this), this.strength = void 0 !== t ? t : 1, this.radius = a, this.threshold = n, this.resolution = void 0 !== e ? new i.Vector2(e.x, e.y) : new i.Vector2(256, 256), this.clearColor = new i.Color(0, 0, 0);
                    var o = {
                        minFilter: i.LinearFilter,
                        magFilter: i.LinearFilter,
                        format: i.RGBAFormat
                    };
                    this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
                    var l = Math.round(this.resolution.x / 2),
                        d = Math.round(this.resolution.y / 2);
                    this.renderTargetBright = new i.WebGLRenderTarget(l, d, o), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = !1;
                    for (var f = 0; f < this.nMips; f++) {
                        var u = new i.WebGLRenderTarget(l, d, o);
                        u.texture.name = "UnrealBloomPass.h" + f, u.texture.generateMipmaps = !1, this.renderTargetsHorizontal.push(u);
                        var m = new i.WebGLRenderTarget(l, d, o);
                        m.texture.name = "UnrealBloomPass.v" + f, m.texture.generateMipmaps = !1, this.renderTargetsVertical.push(m), l = Math.round(l / 2), d = Math.round(d / 2)
                    }
                    void 0 === A && console.error("UnrealBloomPass relies on LuminosityHighPassShader");
                    var c = A;
                    this.highPassUniforms = i.UniformsUtils.clone(c.uniforms), this.highPassUniforms.luminosityThreshold.value = n, this.highPassUniforms.smoothWidth.value = .01, this.materialHighPassFilter = new i.ShaderMaterial({
                        uniforms: this.highPassUniforms,
                        vertexShader: c.vertexShader,
                        fragmentShader: c.fragmentShader,
                        defines: {}
                    }), this.separableBlurMaterials = [];
                    var p = [3, 5, 7, 9, 11];
                    for (l = Math.round(this.resolution.x / 2), d = Math.round(this.resolution.y / 2), f = 0; f < this.nMips; f++) this.separableBlurMaterials.push(this.getSeperableBlurMaterial(p[f])), this.separableBlurMaterials[f].uniforms.texSize.value = new i.Vector2(l, d), l = Math.round(l / 2), d = Math.round(d / 2);
                    this.compositeMaterial = this.getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = t, this.compositeMaterial.uniforms.bloomRadius.value = .1, this.compositeMaterial.needsUpdate = !0;
                    this.compositeMaterial.uniforms.bloomFactors.value = [1, .8, .6, .4, .2], this.bloomTintColors = [new i.Vector3(1, 1, 1), new i.Vector3(1, 1, 1), new i.Vector3(1, 1, 1), new i.Vector3(1, 1, 1), new i.Vector3(1, 1, 1)], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, void 0 === r && console.error("UnrealBloomPass relies on CopyShader");
                    var h = r;
                    this.copyUniforms = i.UniformsUtils.clone(h.uniforms), this.copyUniforms.opacity.value = 1, this.materialCopy = new i.ShaderMaterial({
                        uniforms: this.copyUniforms,
                        vertexShader: h.vertexShader,
                        fragmentShader: h.fragmentShader,
                        blending: i.AdditiveBlending,
                        depthTest: !1,
                        depthWrite: !1,
                        transparent: !0
                    }), this.enabled = !0, this.needsSwap = !1, this.oldClearColor = new i.Color, this.oldClearAlpha = 1, this.basic = new i.MeshBasicMaterial, this.fsQuad = new s.FullScreenQuad(null)
                };
            p.prototype = Object.assign(Object.create(s.prototype), {
                constructor: p,
                dispose: function() {
                    for (var e = 0; e < this.renderTargetsHorizontal.length; e++) this.renderTargetsHorizontal[e].dispose();
                    for (e = 0; e < this.renderTargetsVertical.length; e++) this.renderTargetsVertical[e].dispose();
                    this.renderTargetBright.dispose()
                },
                setSize: function(e, t) {
                    var a = Math.round(e / 2),
                        n = Math.round(t / 2);
                    this.renderTargetBright.setSize(a, n);
                    for (var o = 0; o < this.nMips; o++) this.renderTargetsHorizontal[o].setSize(a, n), this.renderTargetsVertical[o].setSize(a, n), this.separableBlurMaterials[o].uniforms.texSize.value = new i.Vector2(a, n), a = Math.round(a / 2), n = Math.round(n / 2)
                },
                render: function(e, t, a, n, o) {
                    this.oldClearColor.copy(e.getClearColor()), this.oldClearAlpha = e.getClearAlpha();
                    var i = e.autoClear;
                    e.autoClear = !1, e.setClearColor(this.clearColor, 0), o && e.state.buffers.stencil.setTest(!1), this.renderToScreen && (this.fsQuad.material = this.basic, this.basic.map = a.texture, e.setRenderTarget(null), e.clear(), this.fsQuad.render(e)), this.highPassUniforms.tDiffuse.value = a.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this.fsQuad.material = this.materialHighPassFilter, e.setRenderTarget(this.renderTargetBright), e.clear(), this.fsQuad.render(e);
                    for (var r = this.renderTargetBright, s = 0; s < this.nMips; s++) this.fsQuad.material = this.separableBlurMaterials[s], this.separableBlurMaterials[s].uniforms.colorTexture.value = r.texture, this.separableBlurMaterials[s].uniforms.direction.value = p.BlurDirectionX, e.setRenderTarget(this.renderTargetsHorizontal[s]), e.clear(), this.fsQuad.render(e), this.separableBlurMaterials[s].uniforms.colorTexture.value = this.renderTargetsHorizontal[s].texture, this.separableBlurMaterials[s].uniforms.direction.value = p.BlurDirectionY, e.setRenderTarget(this.renderTargetsVertical[s]), e.clear(), this.fsQuad.render(e), r = this.renderTargetsVertical[s];
                    this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, this.compositeMaterial.uniforms.origTex.value = a.texture || this.renderTargetsHorizontal[0].texture, this.compositeMaterial.uniforms.exposure.value = e.toneMappingExposure, e.setRenderTarget(this.renderTargetsHorizontal[0]), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.materialCopy, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, o && e.state.buffers.stencil.setTest(!0), this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(a), this.fsQuad.render(e)), e.setClearColor(this.oldClearColor, this.oldClearAlpha), e.autoClear = i
                },
                getSeperableBlurMaterial: function(e) {
                    return new i.ShaderMaterial({
                        defines: {
                            KERNEL_RADIUS: e,
                            SIGMA: e
                        },
                        uniforms: {
                            colorTexture: {
                                value: null
                            },
                            texSize: {
                                value: new i.Vector2(.5, .5)
                            },
                            direction: {
                                value: new i.Vector2(.5, .5)
                            }
                        },
                        vertexShader: "varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
                        fragmentShader: "#include <common>\t\t\t\tvarying vec2 vUv;\n\t\t\t\tuniform sampler2D colorTexture;\n\t\t\t\tuniform vec2 texSize;\t\t\t\tuniform vec2 direction;\t\t\t\t\t\t\t\tfloat gaussianPdf(in float x, in float sigma) {\t\t\t\t\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\t\t\t\t}\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\t\t\t\t\tfloat fSigma = float(SIGMA);\t\t\t\t\tfloat weightSum = gaussianPdf(0.0, fSigma);\t\t\t\t\tvec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;\t\t\t\t\tfor( int i = 1; i < KERNEL_RADIUS; i ++ ) {\t\t\t\t\t\tfloat x = float(i);\t\t\t\t\t\tfloat w = gaussianPdf(x, fSigma);\t\t\t\t\t\tvec2 uvOffset = direction * invSize * x;\t\t\t\t\t\tvec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;\t\t\t\t\t\tvec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;\t\t\t\t\t\tdiffuseSum += (sample1 + sample2) * w;\t\t\t\t\t\tweightSum += 2.0 * w;\t\t\t\t\t}\t\t\t\t\tgl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n\t\t\t\t}"
                    })
                },
                getCompositeMaterial: function(e) {
                    return new i.ShaderMaterial({
                        defines: {
                            NUM_MIPS: e
                        },
                        uniforms: {
                            blurTexture1: {
                                value: null
                            },
                            blurTexture2: {
                                value: null
                            },
                            blurTexture3: {
                                value: null
                            },
                            blurTexture4: {
                                value: null
                            },
                            blurTexture5: {
                                value: null
                            },
                            dirtTexture: {
                                value: null
                            },
                            bloomStrength: {
                                value: 1
                            },
                            bloomFactors: {
                                value: null
                            },
                            bloomTintColors: {
                                value: null
                            },
                            bloomRadius: {
                                value: 0
                            },
                            origTex: {
                                value: null
                            },
                            exposure: {
                                value: 1
                            }
                        },
                        vertexShader: "varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
                        fragmentShader: "\n\t\t\tvarying vec2 vUv;\n\t\t\tuniform sampler2D blurTexture1;\n\t\t\tuniform sampler2D blurTexture2;\n\t\t\tuniform sampler2D blurTexture3;\n\t\t\tuniform sampler2D blurTexture4;\n\t\t\tuniform sampler2D blurTexture5;\n\t\t\tuniform sampler2D dirtTexture;\n\t\t\tuniform sampler2D origTex;\n\t\t\tuniform float exposure;\n\t\t\tuniform float bloomStrength;\n\t\t\tuniform float bloomRadius;\n\t\t\tuniform float bloomFactors[NUM_MIPS];\n\t\t\tuniform vec3 bloomTintColors[NUM_MIPS];\n\n\t\t\tfloat lerpBloomFactor(const in float factor) {\n\t\t\t  float mirrorFactor = 1.2 - factor;\n\t\t\t  return mix(factor, mirrorFactor, bloomRadius);\n\t\t\t}\n\n\t\t\tvoid main() {\n\t\t\t  gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +\n\t\t\t                   lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +\n\t\t\t                   lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +\n\t\t\t                   lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +\n\t\t\t                   lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\n\n\t\t\t  gl_FragColor = max(texture2D(origTex, vUv) * exposure, gl_FragColor);\n\t\t\t}\n\t\t\t"
                    })
                }
            }), p.BlurDirectionX = new i.Vector2(1, 0), p.BlurDirectionY = new i.Vector2(0, 1);
            var h = {
                    uniforms: {
                        tDiffuse: {
                            value: null
                        },
                        resolution: {
                            value: new i.Vector2(1 / 1024, 1 / 512)
                        }
                    },
                    vertexShader: ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
                    fragmentShader: ["precision highp float;", "", "uniform sampler2D tDiffuse;", "", "uniform vec2 resolution;", "", "varying vec2 vUv;", "", "// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)", "", "//----------------------------------------------------------------------------------", "// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag", "// SDK Version: v3.00", "// Email:       gameworks@nvidia.com", "// Site:        http://developer.nvidia.com/", "//", "// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.", "//", "// Redistribution and use in source and binary forms, with or without", "// modification, are permitted provided that the following conditions", "// are met:", "//  * Redistributions of source code must retain the above copyright", "//    notice, this list of conditions and the following disclaimer.", "//  * Redistributions in binary form must reproduce the above copyright", "//    notice, this list of conditions and the following disclaimer in the", "//    documentation and/or other materials provided with the distribution.", "//  * Neither the name of NVIDIA CORPORATION nor the names of its", "//    contributors may be used to endorse or promote products derived", "//    from this software without specific prior written permission.", "//", "// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ``AS IS'' AND ANY", "// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE", "// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR", "// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR", "// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,", "// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,", "// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR", "// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY", "// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT", "// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE", "// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.", "//", "//----------------------------------------------------------------------------------", "", "#define FXAA_PC 1", "#define FXAA_GLSL_100 1", "#define FXAA_QUALITY_PRESET 12", "", "#define FXAA_GREEN_AS_LUMA 1", "", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_PC_CONSOLE", "    //", "    // The console algorithm for PC is included", "    // for developers targeting really low spec machines.", "    // Likely better to just run FXAA_PC, and use a really low preset.", "    //", "    #define FXAA_PC_CONSOLE 0", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_GLSL_120", "    #define FXAA_GLSL_120 0", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_GLSL_130", "    #define FXAA_GLSL_130 0", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_HLSL_3", "    #define FXAA_HLSL_3 0", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_HLSL_4", "    #define FXAA_HLSL_4 0", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_HLSL_5", "    #define FXAA_HLSL_5 0", "#endif", "/*==========================================================================*/", "#ifndef FXAA_GREEN_AS_LUMA", "    //", "    // For those using non-linear color,", "    // and either not able to get luma in alpha, or not wanting to,", "    // this enables FXAA to run using green as a proxy for luma.", "    // So with this enabled, no need to pack luma in alpha.", "    //", "    // This will turn off AA on anything which lacks some amount of green.", "    // Pure red and blue or combination of only R and B, will get no AA.", "    //", "    // Might want to lower the settings for both,", "    //    fxaaConsoleEdgeThresholdMin", "    //    fxaaQualityEdgeThresholdMin", "    // In order to insure AA does not get turned off on colors", "    // which contain a minor amount of green.", "    //", "    // 1 = On.", "    // 0 = Off.", "    //", "    #define FXAA_GREEN_AS_LUMA 0", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_EARLY_EXIT", "    //", "    // Controls algorithm's early exit path.", "    // On PS3 turning this ON adds 2 cycles to the shader.", "    // On 360 turning this OFF adds 10ths of a millisecond to the shader.", "    // Turning this off on console will result in a more blurry image.", "    // So this defaults to on.", "    //", "    // 1 = On.", "    // 0 = Off.", "    //", "    #define FXAA_EARLY_EXIT 1", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_DISCARD", "    //", "    // Only valid for PC OpenGL currently.", "    // Probably will not work when FXAA_GREEN_AS_LUMA = 1.", "    //", "    // 1 = Use discard on pixels which don't need AA.", "    //     For APIs which enable concurrent TEX+ROP from same surface.", "    // 0 = Return unchanged color on pixels which don't need AA.", "    //", "    #define FXAA_DISCARD 0", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_FAST_PIXEL_OFFSET", "    //", "    // Used for GLSL 120 only.", "    //", "    // 1 = GL API supports fast pixel offsets", "    // 0 = do not use fast pixel offsets", "    //", "    #ifdef GL_EXT_gpu_shader4", "        #define FXAA_FAST_PIXEL_OFFSET 1", "    #endif", "    #ifdef GL_NV_gpu_shader5", "        #define FXAA_FAST_PIXEL_OFFSET 1", "    #endif", "    #ifdef GL_ARB_gpu_shader5", "        #define FXAA_FAST_PIXEL_OFFSET 1", "    #endif", "    #ifndef FXAA_FAST_PIXEL_OFFSET", "        #define FXAA_FAST_PIXEL_OFFSET 0", "    #endif", "#endif", "/*--------------------------------------------------------------------------*/", "#ifndef FXAA_GATHER4_ALPHA", "    //", "    // 1 = API supports gather4 on alpha channel.", "    // 0 = API does not support gather4 on alpha channel.", "    //", "    #if (FXAA_HLSL_5 == 1)", "        #define FXAA_GATHER4_ALPHA 1", "    #endif", "    #ifdef GL_ARB_gpu_shader5", "        #define FXAA_GATHER4_ALPHA 1", "    #endif", "    #ifdef GL_NV_gpu_shader5", "        #define FXAA_GATHER4_ALPHA 1", "    #endif", "    #ifndef FXAA_GATHER4_ALPHA", "        #define FXAA_GATHER4_ALPHA 0", "    #endif", "#endif", "", "", "/*============================================================================", "                        FXAA QUALITY - TUNING KNOBS", "------------------------------------------------------------------------------", "NOTE the other tuning knobs are now in the shader function inputs!", "============================================================================*/", "#ifndef FXAA_QUALITY_PRESET", "    //", "    // Choose the quality preset.", "    // This needs to be compiled into the shader as it effects code.", "    // Best option to include multiple presets is to", "    // in each shader define the preset, then include this file.", "    //", "    // OPTIONS", "    // -----------------------------------------------------------------------", "    // 10 to 15 - default medium dither (10=fastest, 15=highest quality)", "    // 20 to 29 - less dither, more expensive (20=fastest, 29=highest quality)", "    // 39       - no dither, very expensive", "    //", "    // NOTES", "    // -----------------------------------------------------------------------", "    // 12 = slightly faster then FXAA 3.9 and higher edge quality (default)", "    // 13 = about same speed as FXAA 3.9 and better than 12", "    // 23 = closest to FXAA 3.9 visually and performance wise", "    //  _ = the lowest digit is directly related to performance", "    // _  = the highest digit is directly related to style", "    //", "    #define FXAA_QUALITY_PRESET 12", "#endif", "", "", "/*============================================================================", "", "                           FXAA QUALITY - PRESETS", "", "============================================================================*/", "", "/*============================================================================", "                     FXAA QUALITY - MEDIUM DITHER PRESETS", "============================================================================*/", "#if (FXAA_QUALITY_PRESET == 10)", "    #define FXAA_QUALITY_PS 3", "    #define FXAA_QUALITY_P0 1.5", "    #define FXAA_QUALITY_P1 3.0", "    #define FXAA_QUALITY_P2 12.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 11)", "    #define FXAA_QUALITY_PS 4", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 3.0", "    #define FXAA_QUALITY_P3 12.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 12)", "    #define FXAA_QUALITY_PS 5", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 4.0", "    #define FXAA_QUALITY_P4 12.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 13)", "    #define FXAA_QUALITY_PS 6", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 4.0", "    #define FXAA_QUALITY_P5 12.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 14)", "    #define FXAA_QUALITY_PS 7", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 4.0", "    #define FXAA_QUALITY_P6 12.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 15)", "    #define FXAA_QUALITY_PS 8", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 2.0", "    #define FXAA_QUALITY_P6 4.0", "    #define FXAA_QUALITY_P7 12.0", "#endif", "", "/*============================================================================", "                     FXAA QUALITY - LOW DITHER PRESETS", "============================================================================*/", "#if (FXAA_QUALITY_PRESET == 20)", "    #define FXAA_QUALITY_PS 3", "    #define FXAA_QUALITY_P0 1.5", "    #define FXAA_QUALITY_P1 2.0", "    #define FXAA_QUALITY_P2 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 21)", "    #define FXAA_QUALITY_PS 4", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 22)", "    #define FXAA_QUALITY_PS 5", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 23)", "    #define FXAA_QUALITY_PS 6", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 24)", "    #define FXAA_QUALITY_PS 7", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 3.0", "    #define FXAA_QUALITY_P6 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 25)", "    #define FXAA_QUALITY_PS 8", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 2.0", "    #define FXAA_QUALITY_P6 4.0", "    #define FXAA_QUALITY_P7 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 26)", "    #define FXAA_QUALITY_PS 9", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 2.0", "    #define FXAA_QUALITY_P6 2.0", "    #define FXAA_QUALITY_P7 4.0", "    #define FXAA_QUALITY_P8 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 27)", "    #define FXAA_QUALITY_PS 10", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 2.0", "    #define FXAA_QUALITY_P6 2.0", "    #define FXAA_QUALITY_P7 2.0", "    #define FXAA_QUALITY_P8 4.0", "    #define FXAA_QUALITY_P9 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 28)", "    #define FXAA_QUALITY_PS 11", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 2.0", "    #define FXAA_QUALITY_P6 2.0", "    #define FXAA_QUALITY_P7 2.0", "    #define FXAA_QUALITY_P8 2.0", "    #define FXAA_QUALITY_P9 4.0", "    #define FXAA_QUALITY_P10 8.0", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_QUALITY_PRESET == 29)", "    #define FXAA_QUALITY_PS 12", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.5", "    #define FXAA_QUALITY_P2 2.0", "    #define FXAA_QUALITY_P3 2.0", "    #define FXAA_QUALITY_P4 2.0", "    #define FXAA_QUALITY_P5 2.0", "    #define FXAA_QUALITY_P6 2.0", "    #define FXAA_QUALITY_P7 2.0", "    #define FXAA_QUALITY_P8 2.0", "    #define FXAA_QUALITY_P9 2.0", "    #define FXAA_QUALITY_P10 4.0", "    #define FXAA_QUALITY_P11 8.0", "#endif", "", "/*============================================================================", "                     FXAA QUALITY - EXTREME QUALITY", "============================================================================*/", "#if (FXAA_QUALITY_PRESET == 39)", "    #define FXAA_QUALITY_PS 12", "    #define FXAA_QUALITY_P0 1.0", "    #define FXAA_QUALITY_P1 1.0", "    #define FXAA_QUALITY_P2 1.0", "    #define FXAA_QUALITY_P3 1.0", "    #define FXAA_QUALITY_P4 1.0", "    #define FXAA_QUALITY_P5 1.5", "    #define FXAA_QUALITY_P6 2.0", "    #define FXAA_QUALITY_P7 2.0", "    #define FXAA_QUALITY_P8 2.0", "    #define FXAA_QUALITY_P9 2.0", "    #define FXAA_QUALITY_P10 4.0", "    #define FXAA_QUALITY_P11 8.0", "#endif", "", "", "", "/*============================================================================", "", "                                API PORTING", "", "============================================================================*/", "#if (FXAA_GLSL_100 == 1) || (FXAA_GLSL_120 == 1) || (FXAA_GLSL_130 == 1)", "    #define FxaaBool bool", "    #define FxaaDiscard discard", "    #define FxaaFloat float", "    #define FxaaFloat2 vec2", "    #define FxaaFloat3 vec3", "    #define FxaaFloat4 vec4", "    #define FxaaHalf float", "    #define FxaaHalf2 vec2", "    #define FxaaHalf3 vec3", "    #define FxaaHalf4 vec4", "    #define FxaaInt2 ivec2", "    #define FxaaSat(x) clamp(x, 0.0, 1.0)", "    #define FxaaTex sampler2D", "#else", "    #define FxaaBool bool", "    #define FxaaDiscard clip(-1)", "    #define FxaaFloat float", "    #define FxaaFloat2 float2", "    #define FxaaFloat3 float3", "    #define FxaaFloat4 float4", "    #define FxaaHalf half", "    #define FxaaHalf2 half2", "    #define FxaaHalf3 half3", "    #define FxaaHalf4 half4", "    #define FxaaSat(x) saturate(x)", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_GLSL_100 == 1)", "  #define FxaaTexTop(t, p) texture2D(t, p, 0.0)", "  #define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), 0.0)", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_GLSL_120 == 1)", "    // Requires,", "    //  #version 120", "    // And at least,", "    //  #extension GL_EXT_gpu_shader4 : enable", "    //  (or set FXAA_FAST_PIXEL_OFFSET 1 to work like DX9)", "    #define FxaaTexTop(t, p) texture2DLod(t, p, 0.0)", "    #if (FXAA_FAST_PIXEL_OFFSET == 1)", "        #define FxaaTexOff(t, p, o, r) texture2DLodOffset(t, p, 0.0, o)", "    #else", "        #define FxaaTexOff(t, p, o, r) texture2DLod(t, p + (o * r), 0.0)", "    #endif", "    #if (FXAA_GATHER4_ALPHA == 1)", "        // use #extension GL_ARB_gpu_shader5 : enable", "        #define FxaaTexAlpha4(t, p) textureGather(t, p, 3)", "        #define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)", "        #define FxaaTexGreen4(t, p) textureGather(t, p, 1)", "        #define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)", "    #endif", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_GLSL_130 == 1)", '    // Requires "#version 130" or better', "    #define FxaaTexTop(t, p) textureLod(t, p, 0.0)", "    #define FxaaTexOff(t, p, o, r) textureLodOffset(t, p, 0.0, o)", "    #if (FXAA_GATHER4_ALPHA == 1)", "        // use #extension GL_ARB_gpu_shader5 : enable", "        #define FxaaTexAlpha4(t, p) textureGather(t, p, 3)", "        #define FxaaTexOffAlpha4(t, p, o) textureGatherOffset(t, p, o, 3)", "        #define FxaaTexGreen4(t, p) textureGather(t, p, 1)", "        #define FxaaTexOffGreen4(t, p, o) textureGatherOffset(t, p, o, 1)", "    #endif", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_HLSL_3 == 1)", "    #define FxaaInt2 float2", "    #define FxaaTex sampler2D", "    #define FxaaTexTop(t, p) tex2Dlod(t, float4(p, 0.0, 0.0))", "    #define FxaaTexOff(t, p, o, r) tex2Dlod(t, float4(p + (o * r), 0, 0))", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_HLSL_4 == 1)", "    #define FxaaInt2 int2", "    struct FxaaTex { SamplerState smpl; Texture2D tex; };", "    #define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)", "    #define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)", "#endif", "/*--------------------------------------------------------------------------*/", "#if (FXAA_HLSL_5 == 1)", "    #define FxaaInt2 int2", "    struct FxaaTex { SamplerState smpl; Texture2D tex; };", "    #define FxaaTexTop(t, p) t.tex.SampleLevel(t.smpl, p, 0.0)", "    #define FxaaTexOff(t, p, o, r) t.tex.SampleLevel(t.smpl, p, 0.0, o)", "    #define FxaaTexAlpha4(t, p) t.tex.GatherAlpha(t.smpl, p)", "    #define FxaaTexOffAlpha4(t, p, o) t.tex.GatherAlpha(t.smpl, p, o)", "    #define FxaaTexGreen4(t, p) t.tex.GatherGreen(t.smpl, p)", "    #define FxaaTexOffGreen4(t, p, o) t.tex.GatherGreen(t.smpl, p, o)", "#endif", "", "", "/*============================================================================", "                   GREEN AS LUMA OPTION SUPPORT FUNCTION", "============================================================================*/", "#if (FXAA_GREEN_AS_LUMA == 0)", "    FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.w; }", "#else", "    FxaaFloat FxaaLuma(FxaaFloat4 rgba) { return rgba.y; }", "#endif", "", "", "", "", "/*============================================================================", "", "                             FXAA3 QUALITY - PC", "", "============================================================================*/", "#if (FXAA_PC == 1)", "/*--------------------------------------------------------------------------*/", "FxaaFloat4 FxaaPixelShader(", "    //", "    // Use noperspective interpolation here (turn off perspective interpolation).", "    // {xy} = center of pixel", "    FxaaFloat2 pos,", "    //", "    // Used only for FXAA Console, and not used on the 360 version.", "    // Use noperspective interpolation here (turn off perspective interpolation).", "    // {xy_} = upper left of pixel", "    // {_zw} = lower right of pixel", "    FxaaFloat4 fxaaConsolePosPos,", "    //", "    // Input color texture.", "    // {rgb_} = color in linear or perceptual color space", "    // if (FXAA_GREEN_AS_LUMA == 0)", "    //     {__a} = luma in perceptual color space (not linear)", "    FxaaTex tex,", "    //", "    // Only used on the optimized 360 version of FXAA Console.", '    // For everything but 360, just use the same input here as for "tex".', "    // For 360, same texture, just alias with a 2nd sampler.", "    // This sampler needs to have an exponent bias of -1.", "    FxaaTex fxaaConsole360TexExpBiasNegOne,", "    //", "    // Only used on the optimized 360 version of FXAA Console.", '    // For everything but 360, just use the same input here as for "tex".', "    // For 360, same texture, just alias with a 3nd sampler.", "    // This sampler needs to have an exponent bias of -2.", "    FxaaTex fxaaConsole360TexExpBiasNegTwo,", "    //", "    // Only used on FXAA Quality.", "    // This must be from a constant/uniform.", "    // {x_} = 1.0/screenWidthInPixels", "    // {_y} = 1.0/screenHeightInPixels", "    FxaaFloat2 fxaaQualityRcpFrame,", "    //", "    // Only used on FXAA Console.", "    // This must be from a constant/uniform.", "    // This effects sub-pixel AA quality and inversely sharpness.", "    //   Where N ranges between,", "    //     N = 0.50 (default)", "    //     N = 0.33 (sharper)", "    // {x__} = -N/screenWidthInPixels", "    // {_y_} = -N/screenHeightInPixels", "    // {_z_} =  N/screenWidthInPixels", "    // {__w} =  N/screenHeightInPixels", "    FxaaFloat4 fxaaConsoleRcpFrameOpt,", "    //", "    // Only used on FXAA Console.", "    // Not used on 360, but used on PS3 and PC.", "    // This must be from a constant/uniform.", "    // {x__} = -2.0/screenWidthInPixels", "    // {_y_} = -2.0/screenHeightInPixels", "    // {_z_} =  2.0/screenWidthInPixels", "    // {__w} =  2.0/screenHeightInPixels", "    FxaaFloat4 fxaaConsoleRcpFrameOpt2,", "    //", "    // Only used on FXAA Console.", "    // Only used on 360 in place of fxaaConsoleRcpFrameOpt2.", "    // This must be from a constant/uniform.", "    // {x__} =  8.0/screenWidthInPixels", "    // {_y_} =  8.0/screenHeightInPixels", "    // {_z_} = -4.0/screenWidthInPixels", "    // {__w} = -4.0/screenHeightInPixels", "    FxaaFloat4 fxaaConsole360RcpFrameOpt2,", "    //", "    // Only used on FXAA Quality.", "    // This used to be the FXAA_QUALITY_SUBPIX define.", "    // It is here now to allow easier tuning.", "    // Choose the amount of sub-pixel aliasing removal.", "    // This can effect sharpness.", "    //   1.00 - upper limit (softer)", "    //   0.75 - default amount of filtering", "    //   0.50 - lower limit (sharper, less sub-pixel aliasing removal)", "    //   0.25 - almost off", "    //   0.00 - completely off", "    FxaaFloat fxaaQualitySubpix,", "    //", "    // Only used on FXAA Quality.", "    // This used to be the FXAA_QUALITY_EDGE_THRESHOLD define.", "    // It is here now to allow easier tuning.", "    // The minimum amount of local contrast required to apply algorithm.", "    //   0.333 - too little (faster)", "    //   0.250 - low quality", "    //   0.166 - default", "    //   0.125 - high quality", "    //   0.063 - overkill (slower)", "    FxaaFloat fxaaQualityEdgeThreshold,", "    //", "    // Only used on FXAA Quality.", "    // This used to be the FXAA_QUALITY_EDGE_THRESHOLD_MIN define.", "    // It is here now to allow easier tuning.", "    // Trims the algorithm from processing darks.", "    //   0.0833 - upper limit (default, the start of visible unfiltered edges)", "    //   0.0625 - high quality (faster)", "    //   0.0312 - visible limit (slower)", "    // Special notes when using FXAA_GREEN_AS_LUMA,", "    //   Likely want to set this to zero.", "    //   As colors that are mostly not-green", "    //   will appear very dark in the green channel!", "    //   Tune by looking at mostly non-green content,", "    //   then start at zero and increase until aliasing is a problem.", "    FxaaFloat fxaaQualityEdgeThresholdMin,", "    //", "    // Only used on FXAA Console.", "    // This used to be the FXAA_CONSOLE_EDGE_SHARPNESS define.", "    // It is here now to allow easier tuning.", "    // This does not effect PS3, as this needs to be compiled in.", "    //   Use FXAA_CONSOLE_PS3_EDGE_SHARPNESS for PS3.", "    //   Due to the PS3 being ALU bound,", "    //   there are only three safe values here: 2 and 4 and 8.", "    //   These options use the shaders ability to a free *|/ by 2|4|8.", "    // For all other platforms can be a non-power of two.", "    //   8.0 is sharper (default!!!)", "    //   4.0 is softer", "    //   2.0 is really soft (good only for vector graphics inputs)", "    FxaaFloat fxaaConsoleEdgeSharpness,", "    //", "    // Only used on FXAA Console.", "    // This used to be the FXAA_CONSOLE_EDGE_THRESHOLD define.", "    // It is here now to allow easier tuning.", "    // This does not effect PS3, as this needs to be compiled in.", "    //   Use FXAA_CONSOLE_PS3_EDGE_THRESHOLD for PS3.", "    //   Due to the PS3 being ALU bound,", "    //   there are only two safe values here: 1/4 and 1/8.", "    //   These options use the shaders ability to a free *|/ by 2|4|8.", "    // The console setting has a different mapping than the quality setting.", "    // Other platforms can use other values.", "    //   0.125 leaves less aliasing, but is softer (default!!!)", "    //   0.25 leaves more aliasing, and is sharper", "    FxaaFloat fxaaConsoleEdgeThreshold,", "    //", "    // Only used on FXAA Console.", "    // This used to be the FXAA_CONSOLE_EDGE_THRESHOLD_MIN define.", "    // It is here now to allow easier tuning.", "    // Trims the algorithm from processing darks.", "    // The console setting has a different mapping than the quality setting.", "    // This only applies when FXAA_EARLY_EXIT is 1.", "    // This does not apply to PS3,", "    // PS3 was simplified to avoid more shader instructions.", "    //   0.06 - faster but more aliasing in darks", "    //   0.05 - default", "    //   0.04 - slower and less aliasing in darks", "    // Special notes when using FXAA_GREEN_AS_LUMA,", "    //   Likely want to set this to zero.", "    //   As colors that are mostly not-green", "    //   will appear very dark in the green channel!", "    //   Tune by looking at mostly non-green content,", "    //   then start at zero and increase until aliasing is a problem.", "    FxaaFloat fxaaConsoleEdgeThresholdMin,", "    //", "    // Extra constants for 360 FXAA Console only.", "    // Use zeros or anything else for other platforms.", "    // These must be in physical constant registers and NOT immediates.", "    // Immediates will result in compiler un-optimizing.", "    // {xyzw} = float4(1.0, -1.0, 0.25, -0.25)", "    FxaaFloat4 fxaaConsole360ConstDir", ") {", "/*--------------------------------------------------------------------------*/", "    FxaaFloat2 posM;", "    posM.x = pos.x;", "    posM.y = pos.y;", "    #if (FXAA_GATHER4_ALPHA == 1)", "        #if (FXAA_DISCARD == 0)", "            FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);", "            #if (FXAA_GREEN_AS_LUMA == 0)", "                #define lumaM rgbyM.w", "            #else", "                #define lumaM rgbyM.y", "            #endif", "        #endif", "        #if (FXAA_GREEN_AS_LUMA == 0)", "            FxaaFloat4 luma4A = FxaaTexAlpha4(tex, posM);", "            FxaaFloat4 luma4B = FxaaTexOffAlpha4(tex, posM, FxaaInt2(-1, -1));", "        #else", "            FxaaFloat4 luma4A = FxaaTexGreen4(tex, posM);", "            FxaaFloat4 luma4B = FxaaTexOffGreen4(tex, posM, FxaaInt2(-1, -1));", "        #endif", "        #if (FXAA_DISCARD == 1)", "            #define lumaM luma4A.w", "        #endif", "        #define lumaE luma4A.z", "        #define lumaS luma4A.x", "        #define lumaSE luma4A.y", "        #define lumaNW luma4B.w", "        #define lumaN luma4B.z", "        #define lumaW luma4B.x", "    #else", "        FxaaFloat4 rgbyM = FxaaTexTop(tex, posM);", "        #if (FXAA_GREEN_AS_LUMA == 0)", "            #define lumaM rgbyM.w", "        #else", "            #define lumaM rgbyM.y", "        #endif", "        #if (FXAA_GLSL_100 == 1)", "          FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0, 1.0), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 0.0), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 0.0,-1.0), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 0.0), fxaaQualityRcpFrame.xy));", "        #else", "          FxaaFloat lumaS = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0, 1), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 0), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaN = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 0,-1), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 0), fxaaQualityRcpFrame.xy));", "        #endif", "    #endif", "/*--------------------------------------------------------------------------*/", "    FxaaFloat maxSM = max(lumaS, lumaM);", "    FxaaFloat minSM = min(lumaS, lumaM);", "    FxaaFloat maxESM = max(lumaE, maxSM);", "    FxaaFloat minESM = min(lumaE, minSM);", "    FxaaFloat maxWN = max(lumaN, lumaW);", "    FxaaFloat minWN = min(lumaN, lumaW);", "    FxaaFloat rangeMax = max(maxWN, maxESM);", "    FxaaFloat rangeMin = min(minWN, minESM);", "    FxaaFloat rangeMaxScaled = rangeMax * fxaaQualityEdgeThreshold;", "    FxaaFloat range = rangeMax - rangeMin;", "    FxaaFloat rangeMaxClamped = max(fxaaQualityEdgeThresholdMin, rangeMaxScaled);", "    FxaaBool earlyExit = range < rangeMaxClamped;", "/*--------------------------------------------------------------------------*/", "    if(earlyExit)", "        #if (FXAA_DISCARD == 1)", "            FxaaDiscard;", "        #else", "            return rgbyM;", "        #endif", "/*--------------------------------------------------------------------------*/", "    #if (FXAA_GATHER4_ALPHA == 0)", "        #if (FXAA_GLSL_100 == 1)", "          FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0,-1.0), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0, 1.0), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2( 1.0,-1.0), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaFloat2(-1.0, 1.0), fxaaQualityRcpFrame.xy));", "        #else", "          FxaaFloat lumaNW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1,-1), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaSE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1, 1), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2( 1,-1), fxaaQualityRcpFrame.xy));", "          FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));", "        #endif", "    #else", "        FxaaFloat lumaNE = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(1, -1), fxaaQualityRcpFrame.xy));", "        FxaaFloat lumaSW = FxaaLuma(FxaaTexOff(tex, posM, FxaaInt2(-1, 1), fxaaQualityRcpFrame.xy));", "    #endif", "/*--------------------------------------------------------------------------*/", "    FxaaFloat lumaNS = lumaN + lumaS;", "    FxaaFloat lumaWE = lumaW + lumaE;", "    FxaaFloat subpixRcpRange = 1.0/range;", "    FxaaFloat subpixNSWE = lumaNS + lumaWE;", "    FxaaFloat edgeHorz1 = (-2.0 * lumaM) + lumaNS;", "    FxaaFloat edgeVert1 = (-2.0 * lumaM) + lumaWE;", "/*--------------------------------------------------------------------------*/", "    FxaaFloat lumaNESE = lumaNE + lumaSE;", "    FxaaFloat lumaNWNE = lumaNW + lumaNE;", "    FxaaFloat edgeHorz2 = (-2.0 * lumaE) + lumaNESE;", "    FxaaFloat edgeVert2 = (-2.0 * lumaN) + lumaNWNE;", "/*--------------------------------------------------------------------------*/", "    FxaaFloat lumaNWSW = lumaNW + lumaSW;", "    FxaaFloat lumaSWSE = lumaSW + lumaSE;", "    FxaaFloat edgeHorz4 = (abs(edgeHorz1) * 2.0) + abs(edgeHorz2);", "    FxaaFloat edgeVert4 = (abs(edgeVert1) * 2.0) + abs(edgeVert2);", "    FxaaFloat edgeHorz3 = (-2.0 * lumaW) + lumaNWSW;", "    FxaaFloat edgeVert3 = (-2.0 * lumaS) + lumaSWSE;", "    FxaaFloat edgeHorz = abs(edgeHorz3) + edgeHorz4;", "    FxaaFloat edgeVert = abs(edgeVert3) + edgeVert4;", "/*--------------------------------------------------------------------------*/", "    FxaaFloat subpixNWSWNESE = lumaNWSW + lumaNESE;", "    FxaaFloat lengthSign = fxaaQualityRcpFrame.x;", "    FxaaBool horzSpan = edgeHorz >= edgeVert;", "    FxaaFloat subpixA = subpixNSWE * 2.0 + subpixNWSWNESE;", "/*--------------------------------------------------------------------------*/", "    if(!horzSpan) lumaN = lumaW;", "    if(!horzSpan) lumaS = lumaE;", "    if(horzSpan) lengthSign = fxaaQualityRcpFrame.y;", "    FxaaFloat subpixB = (subpixA * (1.0/12.0)) - lumaM;", "/*--------------------------------------------------------------------------*/", "    FxaaFloat gradientN = lumaN - lumaM;", "    FxaaFloat gradientS = lumaS - lumaM;", "    FxaaFloat lumaNN = lumaN + lumaM;", "    FxaaFloat lumaSS = lumaS + lumaM;", "    FxaaBool pairN = abs(gradientN) >= abs(gradientS);", "    FxaaFloat gradient = max(abs(gradientN), abs(gradientS));", "    if(pairN) lengthSign = -lengthSign;", "    FxaaFloat subpixC = FxaaSat(abs(subpixB) * subpixRcpRange);", "/*--------------------------------------------------------------------------*/", "    FxaaFloat2 posB;", "    posB.x = posM.x;", "    posB.y = posM.y;", "    FxaaFloat2 offNP;", "    offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;", "    offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;", "    if(!horzSpan) posB.x += lengthSign * 0.5;", "    if( horzSpan) posB.y += lengthSign * 0.5;", "/*--------------------------------------------------------------------------*/", "    FxaaFloat2 posN;", "    posN.x = posB.x - offNP.x * FXAA_QUALITY_P0;", "    posN.y = posB.y - offNP.y * FXAA_QUALITY_P0;", "    FxaaFloat2 posP;", "    posP.x = posB.x + offNP.x * FXAA_QUALITY_P0;", "    posP.y = posB.y + offNP.y * FXAA_QUALITY_P0;", "    FxaaFloat subpixD = ((-2.0)*subpixC) + 3.0;", "    FxaaFloat lumaEndN = FxaaLuma(FxaaTexTop(tex, posN));", "    FxaaFloat subpixE = subpixC * subpixC;", "    FxaaFloat lumaEndP = FxaaLuma(FxaaTexTop(tex, posP));", "/*--------------------------------------------------------------------------*/", "    if(!pairN) lumaNN = lumaSS;", "    FxaaFloat gradientScaled = gradient * 1.0/4.0;", "    FxaaFloat lumaMM = lumaM - lumaNN * 0.5;", "    FxaaFloat subpixF = subpixD * subpixE;", "    FxaaBool lumaMLTZero = lumaMM < 0.0;", "/*--------------------------------------------------------------------------*/", "    lumaEndN -= lumaNN * 0.5;", "    lumaEndP -= lumaNN * 0.5;", "    FxaaBool doneN = abs(lumaEndN) >= gradientScaled;", "    FxaaBool doneP = abs(lumaEndP) >= gradientScaled;", "    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P1;", "    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P1;", "    FxaaBool doneNP = (!doneN) || (!doneP);", "    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P1;", "    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P1;", "/*--------------------------------------------------------------------------*/", "    if(doneNP) {", "        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "        doneN = abs(lumaEndN) >= gradientScaled;", "        doneP = abs(lumaEndP) >= gradientScaled;", "        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P2;", "        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P2;", "        doneNP = (!doneN) || (!doneP);", "        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P2;", "        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P2;", "/*--------------------------------------------------------------------------*/", "        #if (FXAA_QUALITY_PS > 3)", "        if(doneNP) {", "            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "            doneN = abs(lumaEndN) >= gradientScaled;", "            doneP = abs(lumaEndP) >= gradientScaled;", "            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P3;", "            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P3;", "            doneNP = (!doneN) || (!doneP);", "            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P3;", "            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P3;", "/*--------------------------------------------------------------------------*/", "            #if (FXAA_QUALITY_PS > 4)", "            if(doneNP) {", "                if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "                if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "                if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "                if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "                doneN = abs(lumaEndN) >= gradientScaled;", "                doneP = abs(lumaEndP) >= gradientScaled;", "                if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P4;", "                if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P4;", "                doneNP = (!doneN) || (!doneP);", "                if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P4;", "                if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P4;", "/*--------------------------------------------------------------------------*/", "                #if (FXAA_QUALITY_PS > 5)", "                if(doneNP) {", "                    if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "                    if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "                    if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "                    if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "                    doneN = abs(lumaEndN) >= gradientScaled;", "                    doneP = abs(lumaEndP) >= gradientScaled;", "                    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P5;", "                    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P5;", "                    doneNP = (!doneN) || (!doneP);", "                    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P5;", "                    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P5;", "/*--------------------------------------------------------------------------*/", "                    #if (FXAA_QUALITY_PS > 6)", "                    if(doneNP) {", "                        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "                        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "                        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "                        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "                        doneN = abs(lumaEndN) >= gradientScaled;", "                        doneP = abs(lumaEndP) >= gradientScaled;", "                        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P6;", "                        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P6;", "                        doneNP = (!doneN) || (!doneP);", "                        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P6;", "                        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P6;", "/*--------------------------------------------------------------------------*/", "                        #if (FXAA_QUALITY_PS > 7)", "                        if(doneNP) {", "                            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "                            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "                            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "                            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "                            doneN = abs(lumaEndN) >= gradientScaled;", "                            doneP = abs(lumaEndP) >= gradientScaled;", "                            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P7;", "                            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P7;", "                            doneNP = (!doneN) || (!doneP);", "                            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P7;", "                            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P7;", "/*--------------------------------------------------------------------------*/", "    #if (FXAA_QUALITY_PS > 8)", "    if(doneNP) {", "        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "        doneN = abs(lumaEndN) >= gradientScaled;", "        doneP = abs(lumaEndP) >= gradientScaled;", "        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P8;", "        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P8;", "        doneNP = (!doneN) || (!doneP);", "        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P8;", "        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P8;", "/*--------------------------------------------------------------------------*/", "        #if (FXAA_QUALITY_PS > 9)", "        if(doneNP) {", "            if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "            if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "            if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "            if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "            doneN = abs(lumaEndN) >= gradientScaled;", "            doneP = abs(lumaEndP) >= gradientScaled;", "            if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P9;", "            if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P9;", "            doneNP = (!doneN) || (!doneP);", "            if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P9;", "            if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P9;", "/*--------------------------------------------------------------------------*/", "            #if (FXAA_QUALITY_PS > 10)", "            if(doneNP) {", "                if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "                if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "                if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "                if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "                doneN = abs(lumaEndN) >= gradientScaled;", "                doneP = abs(lumaEndP) >= gradientScaled;", "                if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P10;", "                if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P10;", "                doneNP = (!doneN) || (!doneP);", "                if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P10;", "                if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P10;", "/*--------------------------------------------------------------------------*/", "                #if (FXAA_QUALITY_PS > 11)", "                if(doneNP) {", "                    if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "                    if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "                    if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "                    if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "                    doneN = abs(lumaEndN) >= gradientScaled;", "                    doneP = abs(lumaEndP) >= gradientScaled;", "                    if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P11;", "                    if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P11;", "                    doneNP = (!doneN) || (!doneP);", "                    if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P11;", "                    if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P11;", "/*--------------------------------------------------------------------------*/", "                    #if (FXAA_QUALITY_PS > 12)", "                    if(doneNP) {", "                        if(!doneN) lumaEndN = FxaaLuma(FxaaTexTop(tex, posN.xy));", "                        if(!doneP) lumaEndP = FxaaLuma(FxaaTexTop(tex, posP.xy));", "                        if(!doneN) lumaEndN = lumaEndN - lumaNN * 0.5;", "                        if(!doneP) lumaEndP = lumaEndP - lumaNN * 0.5;", "                        doneN = abs(lumaEndN) >= gradientScaled;", "                        doneP = abs(lumaEndP) >= gradientScaled;", "                        if(!doneN) posN.x -= offNP.x * FXAA_QUALITY_P12;", "                        if(!doneN) posN.y -= offNP.y * FXAA_QUALITY_P12;", "                        doneNP = (!doneN) || (!doneP);", "                        if(!doneP) posP.x += offNP.x * FXAA_QUALITY_P12;", "                        if(!doneP) posP.y += offNP.y * FXAA_QUALITY_P12;", "/*--------------------------------------------------------------------------*/", "                    }", "                    #endif", "/*--------------------------------------------------------------------------*/", "                }", "                #endif", "/*--------------------------------------------------------------------------*/", "            }", "            #endif", "/*--------------------------------------------------------------------------*/", "        }", "        #endif", "/*--------------------------------------------------------------------------*/", "    }", "    #endif", "/*--------------------------------------------------------------------------*/", "                        }", "                        #endif", "/*--------------------------------------------------------------------------*/", "                    }", "                    #endif", "/*--------------------------------------------------------------------------*/", "                }", "                #endif", "/*--------------------------------------------------------------------------*/", "            }", "            #endif", "/*--------------------------------------------------------------------------*/", "        }", "        #endif", "/*--------------------------------------------------------------------------*/", "    }", "/*--------------------------------------------------------------------------*/", "    FxaaFloat dstN = posM.x - posN.x;", "    FxaaFloat dstP = posP.x - posM.x;", "    if(!horzSpan) dstN = posM.y - posN.y;", "    if(!horzSpan) dstP = posP.y - posM.y;", "/*--------------------------------------------------------------------------*/", "    FxaaBool goodSpanN = (lumaEndN < 0.0) != lumaMLTZero;", "    FxaaFloat spanLength = (dstP + dstN);", "    FxaaBool goodSpanP = (lumaEndP < 0.0) != lumaMLTZero;", "    FxaaFloat spanLengthRcp = 1.0/spanLength;", "/*--------------------------------------------------------------------------*/", "    FxaaBool directionN = dstN < dstP;", "    FxaaFloat dst = min(dstN, dstP);", "    FxaaBool goodSpan = directionN ? goodSpanN : goodSpanP;", "    FxaaFloat subpixG = subpixF * subpixF;", "    FxaaFloat pixelOffset = (dst * (-spanLengthRcp)) + 0.5;", "    FxaaFloat subpixH = subpixG * fxaaQualitySubpix;", "/*--------------------------------------------------------------------------*/", "    FxaaFloat pixelOffsetGood = goodSpan ? pixelOffset : 0.0;", "    FxaaFloat pixelOffsetSubpix = max(pixelOffsetGood, subpixH);", "    if(!horzSpan) posM.x += pixelOffsetSubpix * lengthSign;", "    if( horzSpan) posM.y += pixelOffsetSubpix * lengthSign;", "    #if (FXAA_DISCARD == 1)", "        return FxaaTexTop(tex, posM);", "    #else", "        return FxaaFloat4(FxaaTexTop(tex, posM).xyz, lumaM);", "    #endif", "}", "/*==========================================================================*/", "#endif", "", "void main() {", "  gl_FragColor = FxaaPixelShader(", "    vUv,", "    vec4(0.0),", "    tDiffuse,", "    tDiffuse,", "    tDiffuse,", "    resolution,", "    vec4(0.0),", "    vec4(0.0),", "    vec4(0.0),", "    0.75,", "    0.166,", "    0.0833,", "    0.0,", "    0.0,", "    0.0,", "    vec4(0.0)", "  );", "", "  // TODO avoid querying texture twice for same texel", "  gl_FragColor.a = texture2D(tDiffuse, vUv).a;", "}"].join("\n")
                },
                x = function(e, t) {
                    this.object = e, this.domElement = void 0 !== t ? t : document, this.enabled = !0, this.target = new i.Vector3, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .25, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !1, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        BOTTOM: 40
                    }, this.mouseButtons = {
                        LEFT: i.MOUSE.LEFT,
                        MIDDLE: i.MOUSE.MIDDLE,
                        RIGHT: i.MOUSE.RIGHT
                    }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = function() {
                        return f.phi
                    }, this.getAzimuthalAngle = function() {
                        return f.theta
                    }, this.saveState = function() {
                        a.target0.copy(a.target), a.position0.copy(a.object.position), a.zoom0 = a.object.zoom
                    }, this.reset = function() {
                        a.target.copy(a.target0), a.object.position.copy(a.position0), a.object.zoom = a.zoom0, a.object.updateProjectionMatrix(), a.dispatchEvent(n), a.update(), l = s.NONE
                    }, this.update = function() {
                        var t = new i.Vector3,
                            o = (new i.Quaternion).setFromUnitVectors(e.up, new i.Vector3(0, 1, 0)),
                            r = o.clone().inverse(),
                            p = new i.Vector3,
                            h = new i.Quaternion;
                        return function() {
                            var e = a.object.position;
                            return t.copy(e).sub(a.target), t.applyQuaternion(o), f.setFromVector3(t), a.autoRotate && l === s.NONE && L(2 * Math.PI / 60 / 60 * a.autoRotateSpeed), f.theta += u.theta, f.phi += u.phi, f.theta = Math.max(a.minAzimuthAngle, Math.min(a.maxAzimuthAngle, f.theta)), f.phi = Math.max(a.minPolarAngle, Math.min(a.maxPolarAngle, f.phi)), f.makeSafe(), f.radius *= m, f.radius = Math.max(a.minDistance, Math.min(a.maxDistance, f.radius)), a.target.add(c), t.setFromSpherical(f), t.applyQuaternion(r), e.copy(a.target).add(t), a.object.lookAt(a.target), !0 === a.enableDamping ? (u.theta *= 1 - a.dampingFactor, u.phi *= 1 - a.dampingFactor, c.multiplyScalar(1 - a.dampingFactor)) : (u.set(0, 0, 0), c.set(0, 0, 0)), m = 1, !!(A || p.distanceToSquared(a.object.position) > d || 8 * (1 - h.dot(a.object.quaternion)) > d) && (a.dispatchEvent(n), p.copy(a.object.position), h.copy(a.object.quaternion), A = !1, !0)
                        }
                    }(), this.dispose = function() {
                        a.domElement.removeEventListener("contextmenu", H, !1), a.domElement.removeEventListener("mousedown", w, !1), a.domElement.removeEventListener("wheel", R, !1), a.domElement.removeEventListener("touchstart", M, !1), a.domElement.removeEventListener("touchend", D, !1), a.domElement.removeEventListener("touchmove", C, !1), document.removeEventListener("mousemove", O, !1), document.removeEventListener("mouseup", Q, !1), window.removeEventListener("keydown", Y, !1)
                    };
                    var a = this,
                        n = {
                            type: "change"
                        },
                        o = {
                            type: "start"
                        },
                        r = {
                            type: "end"
                        },
                        s = {
                            NONE: -1,
                            ROTATE: 0,
                            DOLLY: 1,
                            PAN: 2,
                            TOUCH_ROTATE: 3,
                            TOUCH_DOLLY_PAN: 4
                        },
                        l = s.NONE,
                        d = 1e-6,
                        f = new i.Spherical,
                        u = new i.Spherical,
                        m = 1,
                        c = new i.Vector3,
                        A = !1,
                        p = new i.Vector2,
                        h = new i.Vector2,
                        x = new i.Vector2,
                        F = new i.Vector2,
                        _ = new i.Vector2,
                        T = new i.Vector2,
                        P = new i.Vector2,
                        g = new i.Vector2,
                        v = new i.Vector2;

                    function S() {
                        return Math.pow(.95, a.zoomSpeed)
                    }

                    function L(e) {
                        u.theta -= e
                    }

                    function E(e) {
                        u.phi -= e
                    }
                    var N = function() {
                            var e = new i.Vector3;
                            return function(t, a) {
                                e.setFromMatrixColumn(a, 0), e.multiplyScalar(-t), c.add(e)
                            }
                        }(),
                        b = function() {
                            var e = new i.Vector3;
                            return function(t, n) {
                                !0 === a.screenSpacePanning ? e.setFromMatrixColumn(n, 1) : (e.setFromMatrixColumn(n, 0), e.crossVectors(a.object.up, e)), e.multiplyScalar(t), c.add(e)
                            }
                        }(),
                        y = function() {
                            var e = new i.Vector3;
                            return function(t, n) {
                                var o = a.domElement === document ? a.domElement.body : a.domElement;
                                if (a.object.isPerspectiveCamera) {
                                    var i = a.object.position;
                                    e.copy(i).sub(a.target);
                                    var r = e.length();
                                    r *= Math.tan(a.object.fov / 2 * Math.PI / 180), N(2 * t * r / o.clientHeight, a.object.matrix), b(2 * n * r / o.clientHeight, a.object.matrix)
                                } else a.object.isOrthographicCamera ? (N(t * (a.object.right - a.object.left) / a.object.zoom / o.clientWidth, a.object.matrix), b(n * (a.object.top - a.object.bottom) / a.object.zoom / o.clientHeight, a.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), a.enablePan = !1)
                            }
                        }();

                    function I(e) {
                        a.object.isPerspectiveCamera ? m /= e : a.object.isOrthographicCamera ? (a.object.zoom = Math.max(a.minZoom, Math.min(a.maxZoom, a.object.zoom * e)), a.object.updateProjectionMatrix(), A = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), a.enableZoom = !1)
                    }

                    function U(e) {
                        a.object.isPerspectiveCamera ? m *= e : a.object.isOrthographicCamera ? (a.object.zoom = Math.max(a.minZoom, Math.min(a.maxZoom, a.object.zoom / e)), a.object.updateProjectionMatrix(), A = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), a.enableZoom = !1)
                    }

                    function X(e) {
                        F.set(e.clientX, e.clientY)
                    }

                    function w(e) {
                        if (!1 !== a.enabled) {
                            switch (e.preventDefault(), a.domElement.focus ? a.domElement.focus() : window.focus(), e.button) {
                                case a.mouseButtons.LEFT:
                                    if (e.ctrlKey || e.metaKey || e.shiftKey) {
                                        if (!1 === a.enablePan) return;
                                        X(e), l = s.PAN
                                    } else {
                                        if (!1 === a.enableRotate) return;
                                        (function(e) {
                                            p.set(e.clientX, e.clientY)
                                        })(e), l = s.ROTATE
                                    }
                                    break;
                                case a.mouseButtons.MIDDLE:
                                    if (!1 === a.enableZoom) return;
                                    (function(e) {
                                        P.set(e.clientX, e.clientY)
                                    })(e), l = s.DOLLY;
                                    break;
                                case a.mouseButtons.RIGHT:
                                    if (!1 === a.enablePan) return;
                                    X(e), l = s.PAN
                            }
                            l !== s.NONE && (document.addEventListener("mousemove", O, !1), document.addEventListener("mouseup", Q, !1), a.dispatchEvent(o))
                        }
                    }

                    function O(e) {
                        if (!1 !== a.enabled) switch (e.preventDefault(), l) {
                            case s.ROTATE:
                                if (!1 === a.enableRotate) return;
                                ! function(e) {
                                    h.set(e.clientX, e.clientY), x.subVectors(h, p).multiplyScalar(a.rotateSpeed);
                                    var t = a.domElement === document ? a.domElement.body : a.domElement;
                                    L(2 * Math.PI * x.x / t.clientHeight), E(2 * Math.PI * x.y / t.clientHeight), p.copy(h), a.update()
                                }(e);
                                break;
                            case s.DOLLY:
                                if (!1 === a.enableZoom) return;
                                ! function(e) {
                                    g.set(e.clientX, e.clientY), v.subVectors(g, P), v.y > 0 ? I(S()) : v.y < 0 && U(S()), P.copy(g), a.update()
                                }(e);
                                break;
                            case s.PAN:
                                if (!1 === a.enablePan) return;
                                ! function(e) {
                                    _.set(e.clientX, e.clientY), T.subVectors(_, F).multiplyScalar(a.panSpeed), y(T.x, T.y), F.copy(_), a.update()
                                }(e)
                        }
                    }

                    function Q(e) {
                        !1 !== a.enabled && (document.removeEventListener("mousemove", O, !1), document.removeEventListener("mouseup", Q, !1), a.dispatchEvent(r), l = s.NONE)
                    }

                    function R(e) {
                        !1 === a.enabled || !1 === a.enableZoom || l !== s.NONE && l !== s.ROTATE || (e.preventDefault(), e.stopPropagation(), a.dispatchEvent(o), function(e) {
                            e.deltaY < 0 ? U(S()) : e.deltaY > 0 && I(S()), a.update()
                        }(e), a.dispatchEvent(r))
                    }

                    function Y(e) {
                        !1 !== a.enabled && !1 !== a.enableKeys && !1 !== a.enablePan && function(e) {
                            var t = !1;
                            switch (e.keyCode) {
                                case a.keys.UP:
                                    y(0, a.keyPanSpeed), t = !0;
                                    break;
                                case a.keys.BOTTOM:
                                    y(0, -a.keyPanSpeed), t = !0;
                                    break;
                                case a.keys.LEFT:
                                    y(a.keyPanSpeed, 0), t = !0;
                                    break;
                                case a.keys.RIGHT:
                                    y(-a.keyPanSpeed, 0), t = !0
                            }
                            t && (e.preventDefault(), a.update())
                        }(e)
                    }

                    function M(e) {
                        if (!1 !== a.enabled) {
                            switch (e.preventDefault(), e.touches.length) {
                                case 1:
                                    if (!1 === a.enableRotate) return;
                                    (function(e) {
                                        p.set(e.touches[0].pageX, e.touches[0].pageY)
                                    })(e), l = s.TOUCH_ROTATE;
                                    break;
                                case 2:
                                    if (!1 === a.enableZoom && !1 === a.enablePan) return;
                                    (function(e) {
                                        if (a.enableZoom) {
                                            var t = e.touches[0].pageX - e.touches[1].pageX,
                                                n = e.touches[0].pageY - e.touches[1].pageY,
                                                o = Math.sqrt(t * t + n * n);
                                            P.set(0, o)
                                        }
                                        if (a.enablePan) {
                                            var i = .5 * (e.touches[0].pageX + e.touches[1].pageX),
                                                r = .5 * (e.touches[0].pageY + e.touches[1].pageY);
                                            F.set(i, r)
                                        }
                                    })(e), l = s.TOUCH_DOLLY_PAN;
                                    break;
                                default:
                                    l = s.NONE
                            }
                            l !== s.NONE && a.dispatchEvent(o)
                        }
                    }

                    function C(e) {
                        if (!1 !== a.enabled) switch (e.preventDefault(), e.stopPropagation(), e.touches.length) {
                            case 1:
                                if (!1 === a.enableRotate) return;
                                if (l !== s.TOUCH_ROTATE) return;
                                ! function(e) {
                                    h.set(e.touches[0].pageX, e.touches[0].pageY), x.subVectors(h, p).multiplyScalar(a.rotateSpeed);
                                    var t = a.domElement === document ? a.domElement.body : a.domElement;
                                    L(2 * Math.PI * x.x / t.clientHeight), E(2 * Math.PI * x.y / t.clientHeight), p.copy(h), a.update()
                                }(e);
                                break;
                            case 2:
                                if (!1 === a.enableZoom && !1 === a.enablePan) return;
                                if (l !== s.TOUCH_DOLLY_PAN) return;
                                ! function(e) {
                                    if (a.enableZoom) {
                                        var t = e.touches[0].pageX - e.touches[1].pageX,
                                            n = e.touches[0].pageY - e.touches[1].pageY,
                                            o = Math.sqrt(t * t + n * n);
                                        g.set(0, o), v.set(0, Math.pow(g.y / P.y, a.zoomSpeed)), I(v.y), P.copy(g)
                                    }
                                    if (a.enablePan) {
                                        var i = .5 * (e.touches[0].pageX + e.touches[1].pageX),
                                            r = .5 * (e.touches[0].pageY + e.touches[1].pageY);
                                        _.set(i, r), T.subVectors(_, F).multiplyScalar(a.panSpeed), y(T.x, T.y), F.copy(_)
                                    }
                                    a.update()
                                }(e);
                                break;
                            default:
                                l = s.NONE
                        }
                    }

                    function D(e) {
                        !1 !== a.enabled && (a.dispatchEvent(r), l = s.NONE)
                    }

                    function H(e) {
                        !1 !== a.enabled && e.preventDefault()
                    }
                    a.domElement.addEventListener("contextmenu", H, !1), a.domElement.addEventListener("mousedown", w, !1), a.domElement.addEventListener("wheel", R, !1), a.domElement.addEventListener("touchstart", M, !1), a.domElement.addEventListener("touchend", D, !1), a.domElement.addEventListener("touchmove", C, !1), window.addEventListener("keydown", Y, !1), this.update()
                };
            x.prototype = Object.create(i.EventDispatcher.prototype), x.prototype.constructor = x, Object.defineProperties(x.prototype, {
                center: {
                    get: function() {
                        return console.warn("THREE.OrbitControls: .center has been renamed to .target"), this.target
                    }
                },
                noZoom: {
                    get: function() {
                        return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), !this.enableZoom
                    },
                    set: function(e) {
                        console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), this.enableZoom = !e
                    }
                },
                noRotate: {
                    get: function() {
                        return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), !this.enableRotate
                    },
                    set: function(e) {
                        console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), this.enableRotate = !e
                    }
                },
                noPan: {
                    get: function() {
                        return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), !this.enablePan
                    },
                    set: function(e) {
                        console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), this.enablePan = !e
                    }
                },
                noKeys: {
                    get: function() {
                        return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), !this.enableKeys
                    },
                    set: function(e) {
                        console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), this.enableKeys = !e
                    }
                },
                staticMoving: {
                    get: function() {
                        return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), !this.enableDamping
                    },
                    set: function(e) {
                        console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), this.enableDamping = !e
                    }
                },
                dynamicDampingFactor: {
                    get: function() {
                        return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.dampingFactor
                    },
                    set: function(e) {
                        console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.dampingFactor = e
                    }
                }
            });
            var F = a("fa0b"),
                _ = "${snoise}\n${mapLinear}\n${eases.Cubic.In}\n${eases.Cubic.Out}\n${eases.Cubic.InOut}\n\nuniform sampler2D spookyDataTex;\n\nuniform float time;\nuniform float speed;\nuniform float noiseScalar;\nuniform float noiseDisplace;\nuniform float noisePull;\nuniform float noiseVariation;\nuniform float noiseRangeTop;\nuniform float noiseRangeBottom;\nuniform float twist;\n\nuniform vec3 postTransformScale;\n\n\n// uniform float pointSize;\nuniform float pSizeA;\nuniform float pSizeB;\n\nvarying vec3 vPos;\n// varying vec3 upVec;\nvarying vec4 mvPosition;\n\nfloat PI = 3.14159;\nfloat TWO_PI = 6.28318;\n\nvec4 DoTwist( vec4 pos, float t )\n{\n  float st = sin(t);\n  float ct = cos(t);\n  vec4 new_pos;\n\n  new_pos.x = pos.x*ct - pos.y*st;\n  new_pos.y = pos.x*st + pos.y*ct;\n\n  new_pos.z = pos.z;\n  new_pos.w = pos.w;\n\n  return( new_pos );\n}\n\n\n\nvoid main() {\n\n  vec3 mPos = vec3(modelMatrix * vec4(position, 1.0));\n\n  vec3 noiseDir = vec3(time, 0.0, time * -1.3) * speed;\n\n\n  float u = mapLinear(mPos.z, -5.0, 5.0, 0.0, 1.0);\n\n  vec4 eee = texture2D(spookyDataTex, vec2(u * 0.1));\n\n  vec3 pos = DoTwist(vec4(mPos, 1.0), u * twist).xyz;\n\n  // vec3 samplePos = pos * vec3(noiseVariation, noiseVariation, 1.0) * noiseScalar + noiseDir;\n\n  vec3 samplePos = (vec3(eee.xy, 1.0) * pos * 3.0) * vec3(noiseVariation, noiseVariation, 1.0) * noiseScalar + noiseDir;\n\n  float sn = (snoise(samplePos) + snoise(samplePos * 0.5)) / 2.0;\n  float n = mapLinear(sn, -1.0, 1.0, noiseRangeBottom, noiseRangeTop);\n  n = max(0.0, n);\n\n  vec3 displaceDir = normalize(vec3(pos.x, pos.y, 0.0));\n\n  vec3 d = displaceDir * noiseDisplace * n;\n\n  pos += d;\n  vec3 pullDir = vec3(0.0, 0.0, 1.0);\n  pos += pullDir * mapLinear(n, 0.0, 1.0, noisePull * -0.25, noisePull);\n\n  pos *= postTransformScale;\n\n  mvPosition = viewMatrix * vec4(pos, 1.0);\n\n  gl_Position = projectionMatrix * mvPosition;\n\n  //\n  vPos = gl_Position.xyz;\n\n  // upVec = vec3(projectionMatrix * vec4(0.0,1.0,0.0,1.0));\n\n  // point size\n  float pointScl =  CubicInOut( sn + 0.5);\n  float pSize = mix(pSizeA, pSizeB, pointScl);\n  gl_PointSize = pSize * 3.0/ max(1.0, -mvPosition.z);\n\n  gl_PointSize = min(60.0, gl_PointSize);\n}",
                T = "uniform float meshOpacity;\n// varying vec3 upVec;\nvarying vec3 vPos;\nvarying vec4 mvPosition;\n\nuniform sampler2D gradient;\n\nvoid main() {\n\n\n  vec3 normal = normalize( cross(dFdx(vPos), dFdy(vPos)) );\n\n  // float fr = dot(normalize(upVec), -normal) * 0.5 + 0.5;\n  float fr = dot(normalize(mvPosition.xyz), -normal);// * 0.5 + 0.5;\n\n  fr = max(0.0, fr);\n\n  vec2 uv = normal.xy * 0.5 + 0.5;\n\n  uv = pow(uv, vec2(1.0));\n\n  vec3 c = texture2D(gradient, vec2(fr)).rgb;\n  // vec3 c = texture2D(gradient, uv).rgb;\n\n  // gl_FragColor = vec4( normal * 0.5 + 0.5, opacity);\n\n  gl_FragColor = vec4( c, 1.0 - pow(fr, 4.0));\n\n  gl_FragColor.w *= meshOpacity;\n}",
                P = "uniform float particleOpacity;\nuniform vec3 pointsColor;\nvarying vec3 vPos;\n\nvoid main() {\n\n  vPos;\n\n  float d = distance(gl_PointCoord.xy, vec2(0.5)) * 2.0;\n  float md = 1.0 - d;\n  vec3 c = pointsColor;\n\n  gl_FragColor = vec4(c, md * particleOpacity);\n\n}",
                g = "uniform float lineOpacity;\nuniform vec3 lineColor;\nvarying vec3 vPos;\n\nvoid main() {\n\n  vPos;\n\n  vec3 c = lineColor;\n\n  gl_FragColor = vec4(c, lineOpacity);\n\n}",
                v = "#include <common>\n\nuniform float sCount;\nuniform float sIntensity;\nuniform sampler2D tDiffuse;\nuniform vec2 uResolution;\nuniform float time;\nuniform float grainAmount;\nvarying vec2 vUv;\n\n\nvoid main() {\n\n  vec4 cTextureScreen = texture2D( tDiffuse, vUv );\n  // float dx = (rand( vUv + time )) * grainAmount;\n  float dx = (rand( vUv + time ) * 2.0 - 1.0) * grainAmount;\n  vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx, 0.0, 1.0 );\n  float count = uResolution.y * sCount;\n\n  vec2 sc = vec2( sin( vUv.y * count ), cos( vUv.y * count ) ) + 0.25;\n\n\n  cResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\n\n  gl_FragColor =  vec4( cResult, cTextureScreen.a );\n\n}",
                S = a("d9f3");
            a("34ef");
            var L = function() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 256, t = (arguments.length > 1 && void 0 !== arguments[1] && arguments[1], arguments.length > 2 && void 0 !== arguments[2] && arguments[2], new Uint8Array(3 * e)), a = 0, n = 0; a < e; a++, n += 3) t[n] = 255 * Math.random(), t[n + 1] = 255 * Math.random(), t[n + 2] = 255 * Math.random();
                    return t
                },
                E = a("b5ec"),
                N = a("438c"),
                b = Object(S.b)(L()),
                y = 2 * Math.PI,
                I = {
                    cameraControls: !0,
                    backgroundColor: "#000000",
                    speed: .5,
                    lineSpeed: 1,
                    pointSpeed: 1,
                    noiseDisplace: .572,
                    noiseScalar: .214,
                    noiseVariation: 100,
                    noisePull: .003,
                    noiseRangeTop: 1,
                    noiseRangeBottom: -.564,
                    numLines: 32,
                    numCircles: 48,
                    numParticlesX: 32,
                    numParticlesY: 48,
                    circleScaleOffset: 0,
                    twist: 0,
                    opacity: 1,
                    lineColor: "#6c9b9d",
                    pointsColor: "#ffffff",
                    showMesh: !0,
                    showLines: !0,
                    showParticles: !0,
                    pOffsetScl: 1,
                    lOffsetScl: 1,
                    pSizeA: 6.958,
                    pSizeB: 0,
                    particleOpacity: .049,
                    lineOpacity: .232,
                    meshOpacity: .236,
                    meshX: 12,
                    meshY: 48,
                    palette: ["#aeff00", "#5a5a5a", "#000000", "#000000", "#c6ff8a"],
                    meshBlend: "AdditiveBlending",
                    blmRad: .99,
                    blmStrngth: .986,
                    blmThrshld: 0,
                    exposure: 1,
                    grain: .292,
                    sCount: 2,
                    sIntensity: .04
                },
                U = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        Object(n.a)(this, e);
                        var a = (t = Object.assign({
                                container: document.getElementById("threeContainer"),
                                showGui: !1
                            }, t)).container,
                            o = {
                                speed: {
                                    value: .1
                                },
                                lineSpeed: {
                                    value: .1
                                },
                                pointSpeed: {
                                    value: .1
                                },
                                time: {
                                    value: 0
                                },
                                noiseVariation: {
                                    value: 10
                                },
                                noiseScalar: {
                                    value: .5
                                },
                                noiseDisplace: {
                                    value: .5
                                },
                                noiseRangeTop: {
                                    value: 1
                                },
                                noiseRangeBottom: {
                                    value: -.25
                                },
                                noisePull: {
                                    value: 0
                                },
                                twist: {
                                    value: 0
                                },
                                particleOpacity: {
                                    value: .5
                                },
                                lineOpacity: {
                                    value: .5
                                },
                                meshOpacity: {
                                    value: .5
                                },
                                pSizeA: {
                                    value: 0
                                },
                                pSizeB: {
                                    value: 10
                                },
                                gradient: {
                                    value: Object(S.a)(I.palette.map(function(e) {
                                        return new i.Color(e)
                                    }), 1)
                                },
                                lineColor: {
                                    value: new i.Color
                                },
                                pointsColor: {
                                    value: new i.Color
                                },
                                postTransformScale: {
                                    value: new i.Vector3(1, 1, 1)
                                },
                                spookyDataTex: {
                                    value: b
                                },
                                uResolution: {
                                    value: new i.Vector3(window.innerWidth, window.innerHeight)
                                },
                                grain: {
                                    value: I.grain
                                },
                                sCount: {
                                    value: I.sCount
                                },
                                sIntensity: {
                                    value: I.sIntensity
                                }
                            },
                            s = new i.ShaderMaterial({
                                uniforms: o,
                                vertexShader: Object(F.a)(_),
                                fragmentShader: Object(F.a)(T),
                                onBeforeCompile: function(e) {
                                    e.fragmentShader = "\n        #extension GL_OES_standard_derivatives : enable\n\n        ".concat(e.fragmentShader)
                                },
                                transparent: !0,
                                depthTest: !0,
                                depthWrite: !1,
                                blending: i[I.meshBlend],
                                side: 2,
                                wireframe: !1
                            }),
                            d = new i.ShaderMaterial({
                                uniforms: Object.assign({}, o, {
                                    postTransformScale: {
                                        value: new i.Vector3(1.1, 1.1, 1)
                                    },
                                    speed: o.pointSpeed
                                }),
                                vertexShader: Object(F.a)(_),
                                fragmentShader: Object(F.a)(P),
                                transparent: !0,
                                depthTest: !0,
                                depthWrite: !1,
                                blending: 2
                            }),
                            f = new i.ShaderMaterial({
                                uniforms: Object.assign({}, o, {
                                    postTransformScale: {
                                        value: new i.Vector3(1, 1, 1)
                                    },
                                    speed: o.lineSpeed
                                }),
                                vertexShader: Object(F.a)(_),
                                fragmentShader: Object(F.a)(g),
                                transparent: !0,
                                depthTest: !0,
                                depthWrite: !1,
                                blending: 2
                            }),
                            m = new i.Clock,
                            A = window.innerWidth,
                            L = window.innerHeight,
                            U = new i.WebGLRenderer({
                                alpha: !0,
                                premultipliedAlpha: !0,
                                antialias: !1,
                                stencil: !0,
                                preserveDrawingBuffer: !0,
                                failIfMajorPerformanceCaveat: !1,
                                depth: !0,
                                logarithmicDepthBuffer: !1
                            });
                        U.autoClear = !1, U.shadowMap.enabled = !1, U.setSize(A, L), U.setClearColor(new i.Color("#040404")), o.uResolution.value.set(A, L), U.toneMappingExposure = Math.pow(1.2, 4);
                        var X = U.getPixelRatio();
                        a.appendChild(U.domElement);
                        var w = new i.Scene,
                            O = new i.PerspectiveCamera(60, A / L, .1, 100);
                        O.position.set(2, 1, -2), O.lookAt(new i.Vector3), w.add(O);
                        var Q = new x(O, U.domElement);
                        Q.enabled = I.cameraControls, Q.enableKeys = !1;
                        var R = new c(w, O, null),
                            Y = new l(h);
                        Y.material.uniforms.resolution.value.x = 1 / (a.offsetWidth * X), Y.material.uniforms.resolution.value.y = 1 / (a.offsetHeight * X);
                        var M = new p(new i.Vector2(U.getDrawingBufferSize.x, U.getDrawingBufferSize.y).multiplyScalar(.5), 1, 1, 0);
                        M.renderToScreen = !1;
                        var C = new i.ShaderMaterial({
                                uniforms: {
                                    uResolution: o.uResolution,
                                    grainAmount: o.grain,
                                    sCount: o.sCount,
                                    sIntensity: o.sIntensity,
                                    tDiffuse: {
                                        value: void 0
                                    },
                                    time: o.time
                                },
                                vertexShader: "\n      varying vec2 vUv;\n\n      void main() {\n\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n      }",
                                fragmentShader: Object(F.a)(v),
                                blending: i.NormalBlending,
                                transparent: !0
                            }),
                            D = new l(C),
                            H = new l(r);
                        H.renderToScreen = !0, H.needsSwap = !1;
                        var B = new u(U);

                        function z(e) {
                            for (var t = e.children.length - 1; t >= 0; t--) e.remove(e.children[t])
                        }
                        B.setSize(a.offsetWidth, a.offsetHeight), B.addPass(R), B.addPass(Y), B.addPass(M), B.addPass(D);
                        var G = new i.Object3D,
                            V = new i.Object3D;
                        G.rotation.x = .5 * Math.PI, w.add(G);
                        var j = .0125,
                            W = new i.CylinderBufferGeometry(j, j, 10, I.meshX, I.meshY, !0),
                            k = new i.Mesh(W, s);
                        G.add(k);
                        var Z = new i.CylinderBufferGeometry(j, j, 10, I.numParticlesX, I.numParticlesY, !0),
                            q = new i.Points(Z, d);
                        G.add(q);
                        for (var K = new i.BufferAttribute(new Float32Array(1536), 3), $ = [], J = 0; J < 512; J++) ie = i.Math.mapLinear(J, 0, 511, -5, 5), K.setXYZ(J, 0, ie, j), $.push(J);
                        var ee = new i.BufferGeometry;
                        ee.addAttribute("position", K), ee.setIndex($);
                        var te = new i.Line(ee, f);
                        G.add(V),
                            function() {
                                z(V);
                                for (var e = 0; e < I.numLines; e++) {
                                    var t = te.clone(),
                                        a = i.Math.mapLinear(e, 0, I.numLines, 0, y);
                                    t.rotateY(a), V.add(t)
                                }
                            }();
                        var ae = new i.Object3D;
                        G.add(ae);
                        var ne, oe, ie, re, se = new i.BufferAttribute(new Float32Array(192), 3);
                        for (J = 0; J < 64; J++) ne = i.Math.mapLinear(J, 0, 63, 0, y), oe = Math.sin(ne) * j, ie = 0, re = Math.cos(ne) * j, se.setXYZ(J, oe, ie, re);
                        var le = new i.BufferGeometry;
                        le.addAttribute("position", se);
                        var de = new i.Line(le, f);
                        (function() {
                            z(ae);
                            for (var e = 0; e < I.numCircles; e++) {
                                var t = de.clone();
                                t.position.y = i.Math.mapLinear(e, 0, I.numCircles - 1, -5, 5), ae.add(t)
                            }
                        })(), G.scale.y = .5;
                        var fe, ue = {
                            camUpperRight: {
                                pos: new i.Vector3(-1.897, 1.078, 2.543),
                                target: new i.Vector3(.098, 0, .768)
                            },
                            camUpperLeft: {
                                pos: new i.Vector3(-1.897, 1.078, -2.543),
                                target: new i.Vector3(.098, 0, -.768)
                            },
                            camLeft: {
                                pos: new i.Vector3(0, 0, -4),
                                target: new i.Vector3
                            },
                            camRight: {
                                pos: new i.Vector3(0, 0, 4),
                                target: new i.Vector3
                            },
                            camFront: {
                                pos: new i.Vector3(4, 0, 0),
                                target: new i.Vector3
                            }
                        };
                        var me = new i.Mesh(new i.BoxGeometry(2, 2, 2), new i.MeshBasicMaterial({
                            wireframe: !1,
                            color: "white",
                            side: 2,
                            map: b
                        }));
                        me.visible = !1, w.add(me), Object.assign(this, {
                            camera: O,
                            clock: m,
                            composer: B,
                            container: a,
                            handleCamAnim: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                                    a = O.position.clone(),
                                    n = Q.target.clone(),
                                    o = ue[e].target,
                                    i = ue[e].pos;
                                fe && fe.stop(), fe = new E.a({
                                    duration: t,
                                    ease: N.a,
                                    onUpdate: function(e) {
                                        Q.target.copy(n).lerp(o, e), O.position.copy(a).lerp(i, e), O.lookAt(Q.target)
                                    }
                                }).start()
                            },
                            renderPass: R,
                            fxaaPass: Y,
                            uBloomPass: M,
                            grainPass: D,
                            matUniforms: o,
                            params: I,
                            renderer: U,
                            scene: w,
                            stopped: !1
                        })
                    }
                    return Object(o.a)(e, [{
                        key: "update",
                        value: function() {
                            this.matUniforms.time.value = this.clock.getElapsedTime(), this.matUniforms.time.value = this.clock.getElapsedTime()
                        }
                    }, {
                        key: "draw",
                        value: function() {
                            this.renderer.render(this.scene, this.camera), this.composer.render()
                        }
                    }, {
                        key: "animate",
                        value: function() {
                            if (!this.stopped) return requestAnimationFrame(this.animate.bind(this)), this.update(), this.draw(), this
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.stopped = !0
                        }
                    }, {
                        key: "onResize",
                        value: function() {
                            var e = window.innerWidth,
                                t = window.innerHeight,
                                a = this.renderer.getPixelRatio();
                            this.renderer.setSize(e, t), this.camera.aspect = e / t, this.camera.updateProjectionMatrix(), this.composer.setSize(e, t), this.fxaaPass.material.uniforms.resolution.value.x = 1 / (e * a), this.fxaaPass.material.uniforms.resolution.value.y = 1 / (t * a), this.matUniforms.uResolution.value.set(e, t)
                        }
                    }, {
                        key: "logSettings",
                        value: function() {
                            var e = Object.keys(I).map(function(e) {
                                if (Array.isArray(I[e])) {
                                    var t = I.palette.map(function(e) {
                                        return "string" == typeof e ? "'".concat(e, "'") : e
                                    });
                                    return "".concat(e, ": [").concat(t, "],")
                                }
                                if (I[e] instanceof i.Vector3) {
                                    var a = I[e];
                                    return "".concat(e, ": 'new THREE.Vector3(").concat(a.x, ",").concat(a.y, ",").concat(a.z, ")',")
                                }
                                return "string" == typeof I[e] ? "".concat(e, ": '").concat(I[e], "',") : "".concat(e, ": ").concat(I[e], ",")
                            }).join("\n");
                            console.log(e)
                        }
                    }, {
                        key: "camUpperRight",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                            this.handleCamAnim("camUpperRight", e)
                        }
                    }, {
                        key: "camUpperLeft",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                            this.handleCamAnim("camUpperLeft", e)
                        }
                    }, {
                        key: "camLeft",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                            this.handleCamAnim("camLeft", e)
                        }
                    }, {
                        key: "camRight",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                            this.handleCamAnim("camRight", e)
                        }
                    }, {
                        key: "camFront",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3;
                            this.handleCamAnim("camFront", e)
                        }
                    }]), e
                }();
            t.default = U
        }
    }
]);