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
