(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3185], {
    22645: function(e, n, t) {
        Promise.resolve().then(t.t.bind(t, 64671, 23)),
        Promise.resolve().then(t.t.bind(t, 23365, 23)),
        Promise.resolve().then(t.t.bind(t, 34537, 23)),
        Promise.resolve().then(t.bind(t, 94962)),
        Promise.resolve().then(t.t.bind(t, 53054, 23)),
        Promise.resolve().then(t.bind(t, 65809)),
        Promise.resolve().then(t.bind(t, 15964)),
        Promise.resolve().then(t.bind(t, 50876)),
        Promise.resolve().then(t.bind(t, 53946))
    },
    65809: function(e, n, t) {
        "use strict";
        t.d(n, {
            default: function() {
                return h
            }
        });
        var r = t(57437)
          , s = t(2265);
        function i({l10n: e, id: n, attrs: t, vars: r, elems: i, children: l}) {
            let a;
            if (Array.isArray(l)) {
                if (l.length > 1)
                    throw Error("Expected to receive a single React element to localize.");
                a = l[0]
            } else
                a = null != l ? l : null;
            if (!(0,
            s.isValidElement)(a)) {
                let t = "string" == typeof a ? a : void 0
                  , i = e.getString(n, r, t);
                return (0,
                s.createElement)(s.Fragment, null, i)
            }
            return e.getElement(a, n, {
                attrs: t,
                vars: r,
                elems: i
            })
        }
        var l = t(84148)
          , a = t(64491);
        function c(e) {
            return void 0 !== e.value
        }
        function o(e) {
            return Array.from((0,
            a.Bm)(e).childNodes.map(e => (c(e) ? e.textContent = e.value : e.textContent = Array.from(e.childNodes).filter(e => c(e)).map(e => e).map(e => e.value).join(" "),
            e)))
        }
        var d = t(50594)
          , u = t(95397);
        function h({children: e, locale: n, ...t}) {
            let a = (0,
            s.useContext)(u.MY)
              , c = (0,
            s.useMemo)( () => a || (n ? new d._((0,
            l.no)(n),o) : new d._((0,
            l.Uu)(),o)), [a, n]);
            return (0,
            r.jsx)(i, {
                l10n: c,
                ...t,
                children: e
            })
        }
    },
    15964: function(e, n, t) {
        "use strict";
        t.d(n, {
            Link: function() {
                return o
            }
        });
        var r = t(57437)
          , s = t(2265)
          , i = t(45622)
          , l = t(67485)
          , a = t(70097)
          , c = t(87138);
        let o = (0,
        s.forwardRef)( (e, n) => {
            let {children: t, showAnchorIcon: s, anchorIcon: o=(0,
            r.jsx)(i.x, {
                className: l.A
            }), getLinkProps: d} = (0,
            a.n)({
                ...e,
                ref: n
            });
            return (0,
            r.jsx)(c.default, {
                ...d(),
                children: (0,
                r.jsxs)(r.Fragment, {
                    children: [t, s && (0,
                    r.jsxs)(r.Fragment, {
                        children: ["\xa0 ", o]
                    })]
                })
            })
        }
        );
        o.displayName = "CelesteLink"
    },
    50876: function(e, n, t) {
        "use strict";
        t.d(n, {
            Navbar: function() {
                return A
            }
        });
        var r = t(57437)
          , s = t(57805)
          , i = t(53891)
          , l = t(98319)
          , a = t(86425);
        function c({width: e, height: n}) {
            return (0,
            r.jsxs)("svg", {
                fill: "none",
                width: e || "36",
                height: n || "36",
                viewBox: "0 0 36 36",
                children: [(0,
                r.jsx)("title", {
                    children: "Eufonia"
                }), (0,
                r.jsx)("path", {
                    clipRule: "evenodd",
                    d: "m 27.800704,16.799927 c -0.982413,-0.004 -1.997607,0.686286 -2.924147,0.05017 -0.409231,-0.01994 -1.088541,-0.343719 -0.355867,-0.608923 0.733094,-0.655032 0.419719,-2.053469 1.669299,-2.194989 0.568825,-0.113917 1.568547,-1.358828 0.562518,-1.390703 -0.630333,0.15278 -1.165173,1.635008 -1.666721,1.163252 -0.116921,-1.035974 -1.48305,-1.669986 -1.996504,-1.93817 0.511664,-0.168095 2.089,-0.779575 0.989461,-1.244365 -1.055304,-0.0092 -1.469918,1.436402 -2.549549,1.178929 -0.984354,0.0038 -1.827326,0.655332 -2.781653,0.259387 -1.279591,-0.04685 0.862228,-0.943662 0.128658,-1.400382 -1.272417,0.657928 -2.423313,1.723012 -3.993795,1.673053 l -1.537385,0.7471 c -0.385246,-0.361537 -0.899889,-0.289734 -1.252832,0.05919 -0.645311,0.428604 -1.290621,0.857208 -1.935931,1.285812 -0.1924856,0.952931 0.868349,0.322471 1.251697,-0.01553 0.282709,-0.199971 0.861693,-0.633421 0.385586,0.01022 -0.640007,0.551827 -0.906408,1.404992 -1.362047,2.001181 -0.5501837,0.209808 -1.4732299,-0.01959 -1.5471065,0.770007 -0.294796,0.831174 -0.5895921,1.662348 -0.8843882,2.493522 0.5060229,0.783094 0.884468,-0.401527 1.0566251,-0.87312 0.1671687,-0.406047 0.3343375,-0.812093 0.5015063,-1.218139 1.3101653,-0.302924 0.3798998,1.362017 1.0823593,1.95483 0.782914,0.971583 1.516442,-0.431882 1.707127,-1.141533 1.141251,-2.244624 3.012161,-4.239774 5.450547,-5.041439 -2.532015,1.315827 -4.566412,3.713682 -5.208341,6.515539 0.01221,1.191357 1.336542,1.745789 2.353142,1.8156 1.344141,0.22938 2.72454,0.06972 4.056917,-0.06733 0.329638,0.145201 0.659277,0.290401 0.988916,0.435602 0.168499,1.044252 -0.463228,2.486148 0.247428,3.277591 0.71243,-0.03438 0.445907,-0.892532 0.549118,-1.381619 0.06615,-0.891575 0.132309,-1.783151 0.198464,-2.674726 -0.421567,-0.556511 1.106162,-0.414741 1.30167,-0.926461 0.742859,-0.735632 2.01919,-0.09603 1.72759,0.9607 0.246012,0.624352 -0.153401,2.38612 0.88849,2.040536 0.298781,-0.423179 0.01718,-0.952483 0.04459,-1.434374 -0.06952,-0.858053 -0.139047,-1.716106 -0.208571,-2.574159 -0.345835,-0.161876 -0.691669,-0.323751 -1.037504,-0.485627 0.0904,-0.68581 0.623418,-1.200191 1.273617,-0.687859 0.895335,0.08238 1.553584,-0.767617 2.447549,-0.802055 0.322745,-0.0324 0.876589,-0.252357 0.379471,-0.590719 z m -7.669407,-4.330018 c 1.354108,-0.15182 2.472385,0.927242 3.142752,1.983799 0.250516,0.391455 0.258347,1.284293 -0.125593,0.435711 -0.736675,-1.081771 -1.805098,-1.929381 -3.017159,-2.41951 z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                })]
            })
        }
        var o = t(86736)
          , d = t(949)
          , u = t(4534)
          , h = t(77999)
          , x = t(48206)
          , f = t(14983)
          , m = t(2265)
          , g = t(7611)
          , j = t(8358)
          , p = t(66648)
          , b = {
            src: "/_next/static/media/world.9bbc74e8.svg",
            height: 512,
            width: 512,
            blurWidth: 0,
            blurHeight: 0
        };
        let N = new Map;
        function w() {
            let[,e] = (0,
            j.fP)(["language"])
              , n = (0,
            m.useContext)(g.A)
              , t = t => {
                n?.setLanguage(t),
                e("language", t)
            }
            ;
            return (0,
            r.jsxs)(o.F, {
                children: [(0,
                r.jsx)(d.S, {
                    children: (0,
                    r.jsxs)(x.A, {
                        isIconOnly: !0,
                        variant: "light",
                        size: "sm",
                        className: "w-full h-full",
                        children: [n?.currentLanguage && N.get(n.currentLanguage) || (0,
                        r.jsx)(p.default, {
                            src: b,
                            className: "w-5 h-5 inline-block align-middle",
                            alt: "English"
                        }), (0,
                        r.jsx)(f.dbR, {})]
                    })
                }), (0,
                r.jsxs)(u.a, {
                    "aria-label": "Static Actions",
                    children: [(0,
                    r.jsxs)(h.W, {
                        className: "font-bold",
                        onPress: () => t("en-US"),
                        children: [N.get("en-US"), "\xa0 English"]
                    }, "en-US"), (0,
                    r.jsxs)(h.W, {
                        className: "font-bold",
                        onPress: () => t("es-ES"),
                        children: [N.get("es-ES"), "\xa0 Spanish"]
                    }, "es-ES")]
                })]
            })
        }
        N.set("en-US", (0,
        r.jsx)(p.default, {
            src: {
                src: "/_next/static/media/english.9bae9bd6.svg",
                height: 642,
                width: 736,
                blurWidth: 0,
                blurHeight: 0
            },
            className: "w-5 h-5 inline-block align-middle",
            alt: "English"
        })),
        N.set("es-ES", (0,
        r.jsx)(p.default, {
            src: {
                src: "/_next/static/media/spanish.f36bc40a.svg",
                height: 642,
                width: 736,
                blurWidth: 0,
                blurHeight: 0
            },
            className: "w-5 h-5 inline-block align-middle",
            alt: "Spanish"
        }));
        var k = t(15964)
          , v = t(23051)
          , E = t(63872)
          , L = t(26249)
          , S = t(74744)
          , y = t(73155)
          , C = t(13177)
          , P = t(65809)
          , _ = t(16463);
        function A() {
            let[e,n] = (0,
            m.useState)(!1)
              , t = (0,
            _.usePathname)()
              , o = [{
                id: "navbar-minecraft",
                link: "/minecraft",
                prefetch: !0,
                displayName: "Minecraft"
            }, {
                id: "navbar-clients",
                link: "/collabs",
                prefetch: !1,
                displayName: "Clients"
            }, {
                id: "navbar-stats",
                link: "/stats",
                prefetch: !0,
                displayName: "Stats"
            }, {
                id: "navbar-contact",
                link: "/contact",
                prefetch: !0,
                displayName: "Contact"
            }];
            return (0,
            r.jsxs)(s.R, {
                maxWidth: "2xl",
                isMenuOpen: e,
                onMenuOpenChange: n,
                children: [(0,
                r.jsx)(i.U, {
                    className: "hidden sm:flex gap-4",
                    justify: "start",
                    children: o.map(e => {
                        let n = e.link === t;
                        return (0,
                        r.jsx)(l.k, {
                            isActive: n,
                            children: (0,
                            r.jsx)(P.default, {
                                id: e.id,
                                children: (0,
                                r.jsx)(k.Link, {
                                    prefetch: e.prefetch,
                                    className: "w-full",
                                    href: e.link,
                                    showAnchorIcon: e.isExternal,
                                    isExternal: e.isExternal,
                                    color: n ? "secondary" : "foreground",
                                    "aria-current": n,
                                    children: e.displayName
                                })
                            })
                        }, e.id)
                    }
                    )
                }), (0,
                r.jsxs)(i.U, {
                    justify: "center",
                    children: [(0,
                    r.jsx)(S.L, {
                        "aria-label": e ? "Close menu" : "Open menu",
                        className: "sm:hidden"
                    }), (0,
                    r.jsx)(l.k, {
                        children: (0,
                        r.jsx)(k.Link, {
                            href: "/",
                            className: "text-foreground",
                            children: (0,
                            r.jsxs)(a.H, {
                                children: [(0,
                                r.jsx)(c, {
                                    width: 48,
                                    height: 48
                                }), (0,
                                r.jsx)("p", {
                                    className: "font-bold text-inherit uppercase text-2xl",
                                    children: "Eufonia Studio"
                                })]
                            })
                        })
                    })]
                }), (0,
                r.jsxs)(i.U, {
                    justify: "end",
                    className: "hidden lg:flex gap-4",
                    children: [(0,
                    r.jsx)(l.k, {
                        className: "hidden xl:flex",
                        children: (0,
                        r.jsx)(k.Link, {
                            href: "/client",
                            className: "text-foreground",
                            children: (0,
                            r.jsx)(P.default, {
                                id: "navbar-client",
                                children: (0,
                                r.jsx)(C.z, {
                                    color: "success",
                                    variant: "flat",
                                    startContent: (0,
                                    r.jsx)(E.aBF, {}),
                                    classNames: {
                                        base: ["px-3 pl-5"],
                                        content: "ml-1"
                                    },
                                    children: "Download Eufonia Client"
                                })
                            })
                        })
                    }), (0,
                    r.jsx)(l.k, {
                        children: (0,
                        r.jsx)(L.e, {
                            content: "Instagram",
                            children: (0,
                            r.jsx)(k.Link, {
                                color: "foreground",
                                href: "https://www.instagram.com/eufoniastudio_",
                                isExternal: !0,
                                "aria-label": "Instagram",
                                children: (0,
                                r.jsx)(v.Nrw, {
                                    className: "text-xl cursor-pointer"
                                })
                            })
                        })
                    }), (0,
                    r.jsx)(l.k, {
                        children: (0,
                        r.jsx)(L.e, {
                            content: "Discord",
                            children: (0,
                            r.jsx)(k.Link, {
                                color: "foreground",
                                href: "https://discord.gg/eufonia-club-863858965183987712",
                                isExternal: !0,
                                "aria-label": "Discord",
                                children: (0,
                                r.jsx)(E.j2d, {
                                    className: "text-xl cursor-pointer"
                                })
                            })
                        })
                    }), (0,
                    r.jsx)(l.k, {
                        children: (0,
                        r.jsx)(L.e, {
                            content: "X (Twitter)",
                            children: (0,
                            r.jsx)(k.Link, {
                                color: "foreground",
                                href: "https://x.com/eufoniastudio",
                                isExternal: !0,
                                "aria-label": "Twitter",
                                children: (0,
                                r.jsx)(E.LCd, {
                                    className: "text-xl cursor-pointer"
                                })
                            })
                        })
                    }), (0,
                    r.jsx)(l.k, {
                        children: (0,
                        r.jsx)(L.e, {
                            content: "Patreon",
                            children: (0,
                            r.jsx)(k.Link, {
                                color: "foreground",
                                href: "https://www.patreon.com/eufonia",
                                isExternal: !0,
                                "aria-label": "Patreon",
                                children: (0,
                                r.jsx)(E.oKc, {
                                    className: "cursor-pointer"
                                })
                            })
                        })
                    }), (0,
                    r.jsx)(l.k, {
                        className: "hidden lg:flex mb-1",
                        children: (0,
                        r.jsx)(w, {})
                    })]
                }), (0,
                r.jsxs)(y.$, {
                    className: "bg-background/90",
                    children: [(0,
                    r.jsx)(l.k, {
                        className: "mb-5",
                        children: (0,
                        r.jsx)(w, {})
                    }), o.map(e => (0,
                    r.jsx)(l.k, {
                        children: (0,
                        r.jsx)(P.default, {
                            id: e.id,
                            children: (0,
                            r.jsx)(k.Link, {
                                prefetch: e.prefetch,
                                color: "foreground",
                                className: "w-full",
                                href: e.link,
                                showAnchorIcon: e.isExternal,
                                isExternal: e.isExternal,
                                onPress: () => n(!1),
                                children: e.displayName
                            })
                        })
                    }, e.id)), (0,
                    r.jsxs)(l.k, {
                        className: "mt-5 flex gap-5",
                        children: [(0,
                        r.jsx)(k.Link, {
                            color: "foreground",
                            href: "https://www.instagram.com/eufoniastudio_",
                            isExternal: !0,
                            children: (0,
                            r.jsx)(v.Nrw, {
                                className: "text-xl cursor-pointer"
                            })
                        }), (0,
                        r.jsx)(k.Link, {
                            color: "foreground",
                            href: "https://discord.gg/eufonia-club-863858965183987712",
                            isExternal: !0,
                            children: (0,
                            r.jsx)(E.j2d, {
                                className: "text-xl cursor-pointer"
                            })
                        }), (0,
                        r.jsx)(k.Link, {
                            color: "foreground",
                            href: "https://x.com/eufoniastudio",
                            isExternal: !0,
                            children: (0,
                            r.jsx)(E.LCd, {
                                className: "text-xl cursor-pointer"
                            })
                        }), (0,
                        r.jsx)(k.Link, {
                            color: "foreground",
                            href: "https://www.patreon.com/eufonia",
                            isExternal: !0,
                            children: (0,
                            r.jsx)(E.oKc, {
                                className: "cursor-pointer"
                            })
                        })]
                    })]
                })]
            })
        }
    },
    54162: function(e, n, t) {
        "use strict";
        function r({src: e, width: n, quality: t}) {
            e = e.replace(/^\/+/, "");
            let r = [`width=${n}`, `quality=${t || 75}`, "format=auto"];
            return `https://eufonia.studio/cdn-cgi/image/${r.join(",")}/${e}`
        }
        t.r(n),
        t.d(n, {
            default: function() {
                return r
            }
        })
    },
    53946: function(e, n, t) {
        "use strict";
        t.d(n, {
            Providers: function() {
                return c
            }
        });
        var r = t(57437)
          , s = t(79799)
          , i = t(2265)
          , l = t(7611)
          , a = t(8358);
        function c({children: e}) {
            let[n,t] = (0,
            i.useState)()
              , [c,o] = (0,
            i.useState)();
            return (0,
            r.jsx)(a.cY, {
                defaultSetOptions: {
                    path: "/"
                },
                children: (0,
                r.jsx)(l.r, {
                    language: n,
                    setLanguage: t,
                    currentLanguage: c,
                    setCurrentLanguage: o,
                    children: (0,
                    r.jsx)(s.w, {
                        children: e
                    })
                })
            })
        }
    },
    53054: function() {}
}, function(e) {
    e.O(0, [3598, 9141, 7240, 1821, 522, 3332, 6802, 8173, 2915, 231, 5392, 4491, 8483, 6249, 4932, 9912, 5620, 1520, 2971, 3526, 1744], function() {
        return e(e.s = 22645)
    }),
    _N_E = e.O()
}
]);
