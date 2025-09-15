(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1931], {
    16300: function(e, A, t) {
        Promise.resolve().then(t.bind(t, 90798)),
        Promise.resolve().then(t.bind(t, 65336)),
        Promise.resolve().then(t.t.bind(t, 38173, 23)),
        Promise.resolve().then(t.t.bind(t, 231, 23)),
        Promise.resolve().then(t.bind(t, 10912)),
        Promise.resolve().then(t.bind(t, 61481)),
        Promise.resolve().then(t.bind(t, 15011)),
        Promise.resolve().then(t.bind(t, 18789)),
        Promise.resolve().then(t.bind(t, 75023)),
        Promise.resolve().then(t.bind(t, 88683)),
        Promise.resolve().then(t.bind(t, 83671)),
        Promise.resolve().then(t.bind(t, 76657)),
        Promise.resolve().then(t.bind(t, 81884)),
        Promise.resolve().then(t.bind(t, 26613)),
        Promise.resolve().then(t.bind(t, 8784)),
        Promise.resolve().then(t.bind(t, 43142)),
        Promise.resolve().then(t.bind(t, 61277)),
        Promise.resolve().then(t.bind(t, 72575)),
        Promise.resolve().then(t.bind(t, 10134)),
        Promise.resolve().then(t.bind(t, 46251)),
        Promise.resolve().then(t.bind(t, 67234)),
        Promise.resolve().then(t.bind(t, 7317)),
        Promise.resolve().then(t.bind(t, 82131)),
        Promise.resolve().then(t.bind(t, 85566)),
        Promise.resolve().then(t.bind(t, 19180)),
        Promise.resolve().then(t.bind(t, 19981)),
        Promise.resolve().then(t.bind(t, 45503)),
        Promise.resolve().then(t.bind(t, 62067)),
        Promise.resolve().then(t.bind(t, 41183)),
        Promise.resolve().then(t.bind(t, 67450)),
        Promise.resolve().then(t.bind(t, 28676)),
        Promise.resolve().then(t.bind(t, 51059)),
        Promise.resolve().then(t.bind(t, 65809)),
        Promise.resolve().then(t.bind(t, 14968)),
        Promise.resolve().then(t.bind(t, 28061)),
        Promise.resolve().then(t.bind(t, 64223)),
        Promise.resolve().then(t.bind(t, 18034)),
        Promise.resolve().then(t.bind(t, 66479)),
        Promise.resolve().then(t.bind(t, 15964)),
        Promise.resolve().then(t.bind(t, 9201)),
        Promise.resolve().then(t.bind(t, 82147)),
        Promise.resolve().then(t.bind(t, 98185)),
        Promise.resolve().then(t.bind(t, 54162))
    },
    10912: function(e, A, t) {
        "use strict";
        Object.defineProperty(A, "BailoutToCSR", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let i = t(55592);
        function l(e) {
            let {reason: A, children: t} = e;
            if ("undefined" == typeof window)
                throw new i.BailoutToCSRError(A);
            return t
        }
    },
    61481: function(e, A, t) {
        "use strict";
        Object.defineProperty(A, "PreloadCss", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let i = t(57437)
          , l = t(58512);
        function n(e) {
            let {moduleIds: A} = e;
            if ("undefined" != typeof window)
                return null;
            let t = (0,
            l.getExpectedRequestStore)("next/dynamic css")
              , n = [];
            if (t.reactLoadableManifest && A) {
                let e = t.reactLoadableManifest;
                for (let t of A) {
                    if (!e[t])
                        continue;
                    let A = e[t].files.filter(e => e.endsWith(".css"));
                    n.push(...A)
                }
            }
            return 0 === n.length ? null : (0,
            i.jsx)(i.Fragment, {
                children: n.map(e => (0,
                i.jsx)("link", {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: t.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style"
                }, e))
            })
        }
    },
    28061: function(e, A, t) {
        "use strict";
        t.d(A, {
            VideoBanner: function() {
                return a
            }
        });
        var i = t(57437)
          , l = t(34500)
          , n = t(39684)
          , s = t(20081);
        function r(e, A) {
            let i = (0,
            l.s)({
                src: "/images/main/banner.webp",
                quality: 25,
                width: 1694
            });
            (0,
            n.mo)(e) ? (e.library = () => t.e(2404).then(t.bind(t, 13915)),
            e.video.disablePictureInPicture = !0,
            i && (e.video.poster = i)) : (0,
            n.Rr)(e) && i && (e.video.poster = i)
        }
        function a() {
            return (0,
            i.jsx)(s.Syo, {
                aspectRatio: "847/360",
                title: "Eufonia Banner",
                load: "idle",
                className: "relative min-h-full aspect-video !w-auto min-w-full",
                muted: !0,
                autoPlay: !0,
                loop: !0,
                playsInline: !0,
                src: ["https://customer-n1ekmntmtgx1a3lg.cloudflarestream.com/ff014ccffccf7e9110bbe0e9b9823655/manifest/video.mpd", "https://customer-n1ekmntmtgx1a3lg.cloudflarestream.com/ff014ccffccf7e9110bbe0e9b9823655/manifest/video.m3u8"],
                onProviderChange: r,
                posterLoad: "eager",
                preload: "auto",
                children: (0,
                i.jsx)(s.ZNi, {})
            })
        }
    },
    64223: function(e, A, t) {
        "use strict";
        t.r(A),
        t.d(A, {
            default: function() {
                return o
            },
            onProviderChange: function() {
                return a
            }
        });
        var i = t(57437)
          , l = t(39684)
          , n = t(20081)
          , s = t(98330)
          , r = t(29329);
        function a(e, A) {
            (0,
            l.mo)(e) && (e.library = () => t.e(2404).then(t.bind(t, 13915)),
            e.video.disablePictureInPicture = !0)
        }
                function o({videoId: e, autoPlay: A}) {
            return (0,
            i.jsxs)(n.Syo, {
                aspectRatio: "16/9",
                className: "min-h-full aspect-video !w-auto min-w-full",
                src: `https://customer-n1ekmntmtgx1a3lg.cloudflarestream.com/${e}/manifest/video.m3u8`,
                controls: !A,
                autoPlay: A,
                loop: A,
                muted: A,
                playsInline: !0,
                onProviderChange: a,
                children: [(0,
                i.jsx)(n.ZNi, {}), A ? (0,
                i.jsx)(i.Fragment, {}) : (0,
                i.jsx)(s.aj, {
                    icons: r.K
                })]
            })
        }
    },
    18034: function(e, A, t) {
        "use strict";
        t.r(A),
        t.d(A, {
            default: function() {
                return g
            }
        });
        var i = t(57437)
          , l = t(2265);
        let n = (e, A) => {
            let[t,i] = (0,
            l.useState)(0)
              , [n,s] = (0,
            l.useState)([])
              , r = (0,
            l.useCallback)(t => {
                e && (e.scrollTo(t),
                A && A(e))
            }
            , [e, A])
              , a = (0,
            l.useCallback)(e => {
                s(e.scrollSnapList())
            }
            , [])
              , o = (0,
            l.useCallback)(e => {
                i(e.selectedScrollSnap())
            }
            , []);
            return (0,
            l.useEffect)( () => {
                e && (a(e),
                o(e),
                e.on("reInit", a).on("reInit", o).on("select", o))
            }
            , [e, a, o]),
            {
                selectedIndex: t,
                scrollSnaps: n,
                onDotButtonClick: r
            }
        }
          , s = e => {
            let {children: A, ...t} = e;
            return (0,
            i.jsx)("button", {
                type: "button",
                "aria-label": "Switch to a Gallery Page",
                ...t,
                children: A
            })
        }
          , r = (e, A) => {
            let[t,i] = (0,
            l.useState)(!0)
              , [n,s] = (0,
            l.useState)(!0)
              , r = (0,
            l.useCallback)( () => {
                e && (e.scrollPrev(),
                A && A(e))
            }
            , [e, A])
              , a = (0,
            l.useCallback)( () => {
                e && (e.scrollNext(),
                A && A(e))
            }
            , [e, A])
              , o = (0,
            l.useCallback)(e => {
                i(!e.canScrollPrev()),
                s(!e.canScrollNext())
            }
            , []);
            return (0,
            l.useEffect)( () => {
                e && (o(e),
                e.on("reInit", o).on("select", o))
            }
            , [e, o]),
            {
                prevBtnDisabled: t,
                nextBtnDisabled: n,
                onPrevButtonClick: r,
                onNextButtonClick: a
            }
        }
          , a = e => {
            let {children: A, ...t} = e;
            return (0,
            i.jsxs)("button", {
                className: "embla__button embla__button--prev",
                type: "button",
                "aria-label": "Previous Gallery Page",
                ...t,
                children: [(0,
                i.jsxs)("svg", {
                    className: "embla__button__svg",
                    viewBox: "0 0 532 532",
                    role: "img",
                    "aria-labelledby": "prev-icon",
                    children: [(0,
                    i.jsx)("title", {
                        id: "prev-icon",
                        children: "Previous"
                    }), (0,
                    i.jsx)("path", {
                        fill: "currentColor",
                        d: "M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                    })]
                }), A]
            })
        }
          , o = e => {
            let {children: A, ...t} = e;
            return (0,
            i.jsxs)("button", {
                className: "embla__button embla__button--next",
                type: "button",
                "aria-label": "Next Gallery Page",
                ...t,
                children: [(0,
                i.jsxs)("svg", {
                    className: "embla__button__svg",
                    viewBox: "0 0 532 532",
                    role: "img",
                    "aria-labelledby": "next-icon",
                    children: [(0,
                    i.jsx)("title", {
                        id: "next-icon",
                        children: "Next"
                    }), (0,
                    i.jsx)("path", {
                        fill: "currentColor",
                        d: "M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                    })]
                }), A]
            })
        }
        ;
        var c = t(7059)
          , u = t(74300);
        t(80638);
        var d = t(95243)
          , b = t(86028)
          , h = t(15964)
          , m = t(26249);
        function g(e) {
            let {slides: A, options: t} = e
              , [g,f] = (0,
            u.Z)(t, [(0,
            c.Z)({
                delay: 8e3
            }), (0,
            d.Z)()])
              , E = (0,
            l.useCallback)(e => {
                let A = e?.plugins()?.autoplay;
                A && (!1 === A.options.stopOnInteraction ? A.reset : A.stop)()
            }
            , [])
              , {selectedIndex: p, scrollSnaps: w, onDotButtonClick: B} = n(f, E)
              , {prevBtnDisabled: x, nextBtnDisabled: U, onPrevButtonClick: v, onNextButtonClick: C} = r(f, E);
            return (0,
            i.jsxs)("section", {
                ...e,
                className: (0,
                b.cn)("embla", e.className),
                children: [(0,
                i.jsx)("div", {
                    className: "embla__viewport",
                    ref: g,
                    children: (0,
                    i.jsx)("div", {
                        className: "embla__container",
                        children: A.map(e => (0,
                        i.jsx)("div", {
                            className: "embla__slide embla__class-names h-full",
                            children: (0,
                            i.jsx)("div", {
                                className: "embla__slide__number !block w-auto overflow-hidden",
                                children: e.tooltip ? (0,
                                i.jsx)(m.e, {
                                    showArrow: !0,
                                    placement: "right-start",
                                    classNames: {
                                        content: ["z-10 p-0 w-full inline-flex flex-col items-center justify-center subpixel-antialiased outline-none box-border text-small bg-content1 shadow-small", "backdrop-blur-lg bg-content1/95"],
                                        base: ["p-0"]
                                    },
                                    content: e.tooltip,
                                    children: e.link ? (0,
                                    i.jsx)(h.Link, {
                                        className: "h-full w-full",
                                        href: e.link,
                                        children: e.content
                                    }) : (0,
                                    i.jsx)("div", {
                                        className: "h-full w-full",
                                        children: e.content
                                    })
                                }) : e.link ? (0,
                                i.jsx)(h.Link, {
                                    className: "h-full w-full",
                                    href: e.link,
                                    children: e.content
                                }) : (0,
                                i.jsx)("div", {
                                    className: "h-full w-full",
                                    children: e.content
                                })
                            })
                        }, e.id))
                    })
                }), (0,
                i.jsxs)("div", {
                    className: "embla__controls",
                    children: [(0,
                    i.jsxs)("div", {
                        className: "embla__buttons",
                        children: [(0,
                        i.jsx)(a, {
                            onClick: v,
                            disabled: x
                        }), (0,
                        i.jsx)(o, {
                            onClick: C,
                            disabled: U
                        })]
                    }), (0,
                    i.jsx)("div", {
                        className: "embla__dots",
                        children: w.map( (e, A) => (0,
                        i.jsx)(s, {
                            onClick: () => B(A),
                            className: "embla__dot".concat(A === p ? " embla__dot--selected" : "")
                        }, A))
                    })]
                })]
            })
        }
    },
    66479: function(e, A, t) {
        "use strict";
        t.r(A),
        t.d(A, {
            default: function() {
                return b
            }
        });
        var i = t(57437)
          , l = t(2265);
        let n = (e, A) => {
            let[t,i] = (0,
            l.useState)(!0)
              , [n,s] = (0,
            l.useState)(!0)
              , r = (0,
            l.useCallback)( () => {
                e && (e.scrollPrev(),
                A && A(e))
            }
            , [e, A])
              , a = (0,
            l.useCallback)( () => {
                e && (e.scrollNext(),
                A && A(e))
            }
            , [e, A])
              , o = (0,
            l.useCallback)(e => {
                i(!e.canScrollPrev()),
                s(!e.canScrollNext())
            }
            , []);
            return (0,
            l.useEffect)( () => {
                e && (o(e),
                e.on("reInit", o).on("select", o))
            }
            , [e, o]),
            {
                prevBtnDisabled: t,
                nextBtnDisabled: n,
                onPrevButtonClick: r,
                onNextButtonClick: a
            }
        }
          , s = e => {
            let {children: A, ...t} = e;
            return (0,
            i.jsxs)("button", {
                className: "embla__button embla__button--prev",
                type: "button",
                "aria-label": "Previous Slider Page",
                ...t,
                children: [(0,
                i.jsxs)("svg", {
                    className: "embla__button__svg",
                    viewBox: "0 0 532 532",
                    role: "img",
                    "aria-labelledby": "slider-prev-icon",
                    children: [(0,
                    i.jsx)("title", {
                        id: "slider-prev-icon",
                        children: "Previous"
                    }), (0,
                    i.jsx)("path", {
                        fill: "currentColor",
                        d: "M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                    })]
                }), A]
            })
        }

