!function() {
    "use strict";
    $(function() {
        var e = {
            animate: {
                duration: 700,
                enabled: !0
            },
            barColor: "#2095f2",
            scaleColor: !1,
            lineWidth: 10,
            lineCap: "circle"
        };
        $(".easypie").easyPieChart(e);
        var t = {
            grid: {
                hoverable: !0,
                clickable: !0,
                borderWidth: 0,
                color: "#8394a9"
            },
            tooltip: !0,
            tooltipOpts: {
                content: "%x : %y"
            },
            xaxis: {
                tickColor: "#f1f2f3",
                mode: "categories"
            },
            yaxis: {
                tickColor: "#f1f2f3",
                max: 50
            },
            legend: {
                backgroundColor: "rgba(0,0,0,0)"
            },
            shadowSize: 0,
            series: {
                lines: {
                    show: !1
                },
                splines: {
                    show: !0,
                    tension: .4,
                    lineWidth: 2,
                    fill: .5
                }
            }
        }
          , n = [{
            label: "Campaing1",
            color: "#3F51B5",
            data: [["1", 28], ["2", 30], ["3", 32], ["4", 33], ["5", 33], ["6", 32], ["7", 31], ["8", 30], ["9", 29], ["10", 28], ["11", 28], ["12", 29], ["13", 30], ["14", 29], ["15", 28]]
        }, {
            label: "Campaing2",
            color: "#3F51B5",
            data: [["1", 12], ["2", 14], ["3", 20], ["4", 16], ["5", 18], ["6", 14], ["7", 19], ["8", 24], ["9", 18], ["10", 14], ["11", 16], ["12", 15], ["13", 14], ["14", 16], ["15", 18]]
        }, {
            label: "Campaing3",
            color: "#3F51B5",
            data: [["1", 6], ["2", 8], ["3", 7], ["4", 6], ["5", 7], ["6", 10], ["7", 9], ["8", 8], ["9", 10], ["10", 9], ["11", 6], ["12", 8], ["13", 9], ["14", 10], ["15", 10]]
        }]
          , a = $("#spline-chart");
        a.length && $.plot(a, n, t);
        var o = {
            grid: {
                show: !1
            },
            tooltip: !0,
            tooltipOpts: {
                content: "%x : %y"
            },
            xaxis: {
                tickDecimals: 0
            },
            yaxis: {
                tickColor: "#f1f2f3"
            },
            legend: {
                show: !1
            },
            points: {
                show: !0,
                radius: 1
            },
            series: {
                lines: {
                    show: !0,
                    fill: 1,
                    lineWidth: 1,
                    fillColor: {
                        colors: [{
                            opacity: .4
                        }, {
                            opacity: .4
                        }]
                    }
                }
            },
            shadowSize: 0
        }
          , i = [{
            label: "",
            color: "#4caf50",
            data: [["1", 8], ["2", 10], ["3", 12], ["4", 13], ["5", 13], ["6", 12], ["7", 11], ["8", 10], ["9", 9], ["10", 8], ["11", 8], ["12", 9], ["13", 10], ["14", 9], ["15", 8]]
        }]
          , r = [{
            label: "",
            color: "#fe9700",
            data: [["1", 9], ["2", 10], ["3", 9], ["4", 11], ["5", 12], ["6", 11], ["7", 10], ["8", 9], ["9", 8], ["10", 8], ["11", 8], ["12", 10], ["13", 12], ["14", 13], ["15", 13]]
        }]
          , l = $("#small-line-chart1")
          , s = $("#small-line-chart2");
        l.length && $.plot(l, i, o),
        s.length && $.plot(s, r, o)
    })
}(),
function() {
    "use strict";
    $(function() {
        $(".card-container.invisible").removeClass("invisible");
        var e = {
            width: "60%",
            displayInput: !0,
            readOnly: !0,
            thickness: .4,
            angleArc: 250,
            angleOffset: -125,
            inputColor: "#515d6e",
            fgColor: "#2095f2",
            bgColor: "#e6e9ee"
        }
          , t = {
            width: "60%",
            displayInput: !0,
            readOnly: !0,
            thickness: .4,
            angleArc: 250,
            angleOffset: -125,
            inputColor: "#515d6e",
            fgColor: "#6639b6",
            bgColor: "#e6e9ee"
        };
        $("#knob1").knob(e),
        $("#knob2").knob(t);
        var n = {
            grid: {
                show: !1
            },
            tooltip: !0,
            tooltipOpts: {
                content: "%x : %y"
            },
            xaxis: {
                tickDecimals: 0
            },
            yaxis: {
                tickColor: "#f1f2f3"
            },
            legend: {
                show: !1
            },
            points: {
                show: !0,
                radius: 1
            },
            series: {
                lines: {
                    show: !0,
                    fill: 1,
                    lineWidth: 1,
                    fillColor: {
                        colors: [{
                            opacity: .4
                        }, {
                            opacity: .4
                        }]
                    }
                }
            },
            shadowSize: 0
        }
          , a = [{
            label: "",
            color: "#4caf50",
            data: [["1", 8], ["2", 10], ["3", 12], ["4", 13], ["5", 13], ["6", 12], ["7", 11], ["8", 10], ["9", 9], ["10", 8], ["11", 8], ["12", 9], ["13", 10], ["14", 9], ["15", 8]]
        }]
          , o = [{
            label: "",
            color: "#fe9700",
            data: [["1", 9], ["2", 10], ["3", 9], ["4", 11], ["5", 12], ["6", 11], ["7", 10], ["8", 9], ["9", 8], ["10", 8], ["11", 8], ["12", 10], ["13", 12], ["14", 13], ["15", 13]]
        }]
          , i = $("#flot1");
        i.length && $.plot(i, a, n);
        var r = $("#flot2");
        r.length && $.plot(r, o, n);
        var l = {
            grid: {
                borderWidth: 0,
                minBorderMargin: 0,
                aboveData: !0,
                color: "#2095f2",
                margin: {
                    top: 10,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            },
            tooltip: !0,
            tooltipOpts: {
                content: "%x : %y"
            },
            series: {
                lines: {
                    show: !1
                },
                splines: {
                    show: !0,
                    tension: .4,
                    lineWidth: 2,
                    fill: .5
                }
            },
            yaxis: {
                max: 120,
                show: !1
            },
            xaxis: {
                tickColor: "transparent",
                mode: "categories",
                reserveSpace: !1
            },
            legend: {
                show: !1
            },
            shadowSize: 0
        }
          , s = [{
            label: "Sales",
            color: "#fff",
            data: [["Mar", 50], ["Apr", 81], ["May", 61], ["Jun", 91], ["Jul", 66], ["Aug", 97], ["Sep", 51]]
        }]
          , c = {
            grid: {
                hoverable: !0,
                clickable: !0,
                borderWidth: 0,
                color: "#fff"
            },
            tooltip: !0,
            tooltipOpts: {
                content: function(e, t, n) {
                    return t + " : " + n
                }
            },
            xaxis: {
                tickColor: "transparent",
                mode: "categories"
            },
            yaxis: {
                tickColor: "transparent",
                max: 70,
                show: !1
            },
            legend: {
                show: !1
            },
            shadowSize: 0,
            series: {
                splines: {
                    show: !0,
                    tension: .4,
                    lineWidth: 2,
                    fill: .4
                },
                lines: {
                    show: !1
                },
                points: {
                    show: !0
                }
            }
        }
          , d = [{
            label: "Serie 1",
            color: "#1d93d9",
            data: [["Jan", 15], ["Feb", 21], ["Mar", 30], ["Apr", 41], ["May", 51], ["Jun", 56], ["Jul", 53], ["Aug", 40], ["Sep", 29], ["Oct", 25], ["Nov", 18], ["Dec", 30]]
        }]
          , u = $("#flotspline1");
        u.length && $.plot(u, s, l);
        var p = $("#flotspline2");
        if (p.length && $.plot(p, d, c),
        document.getElementById("map_canvas")) {
            var f = new GMaps({
                div: "#map_canvas",
                lat: -12.043333,
                lng: -77.028333
            });
            GMaps.geocode({
                address: "276 N TUSTIN ST, ORANGE, CA 92867",
                callback: function(e, t) {
                    if ("OK" === t) {
                        var n = e[0].geometry.location;
                        f.setCenter(n.lat(), n.lng()),
                        f.addMarker({
                            lat: n.lat(),
                            lng: n.lng()
                        })
                    }
                }
            })
        }
        var h = [1, 3, 4, 7, 5, 9, 4, 4, 7, 5, 9, 6, 4]
          , g = {
            chartRangeMin: 0,
            type: "line",
            height: "70",
            width: "100%",
            lineWidth: "2",
            lineColor: "#fff",
            spotColor: "#888",
            minSpotColor: "#fff",
            maxSpotColor: "#fff",
            fillColor: "",
            highlightLineColor: "#fff",
            spotRadius: "3",
            resize: "true"
        };
        $(".sparkline").sparkline(h, g)
    })
}(),
function() {
    "use strict";
    $(function() {
        var e = $(".mb-panel-inner");
        $(".mb-mails-responsive table > tbody > tr").on("click", function(t) {
            t.preventDefault(),
            e.addClass("mb-content-open")
        }),
        $(".mb-panel-back").on("click", function(t) {
            t.preventDefault(),
            e.removeClass("mb-content-open")
        })
    })
}(),
function() {
    "use strict";
    function e(e) {
        function t(e) {
            var t = e.getBoundingClientRect();
            return {
                top: t.top + document.body.scrollTop,
                left: t.left + document.body.scrollLeft
            }
        }
        var n, a, o, i;
        e.append('<span class="ripple"></span>'),
        e.on("click touchstart", function(e) {
            var r = e.type
              , l = this.querySelector(".ripple")
              , s = l.querySelector(".angular-ripple");
            null  === s && (s = document.createElement("span"),
            s.className = "angular-ripple",
            l.insertBefore(s, l.firstChild),
            s.offsetHeight || s.offsetWidth || (o = Math.max(l.offsetWidth, l.offsetHeight),
            s.style.width = o + "px",
            s.style.height = o + "px"));
            var c = $(s);
            c.removeClass("animate"),
            "click" === r ? (n = e.pageX,
            a = e.pageY) : "touchstart" === r && (n = e.changedTouches[0].pageX,
            a = e.changedTouches[0].pageY),
            i = t(c.parent()[0]),
            s.style.left = n - i.left - o / 2 + "px",
            s.style.top = a - i.top - o / 2 + "px",
            c.addClass("animate"),
            setTimeout(function() {
                c.removeClass("animate")
            }, 500)
        })
    }
    $(function() {
        e($("[data-ripple]"))
    })
}(),
function() {
    "use strict";
    window.MEDIA_QUERY = {
        desktopLG: 1200,
        desktop: 992,
        tablet: 768,
        mobile: 480
    }
}(),
function() {
    "use strict";
    function e(e) {
        function t() {
            return window.innerWidth < MEDIA_QUERY.tablet
        }
        var n = $("body");
        e.find("a").on("click", function(e) {
            var t = $(this)
              , n = t.parent()[0]
              , a = t.parent().parent().children();
            $.each(a, function(e) {
                e !== n && $(e).removeClass("active")
            });
            var o = t.next();
            o.length && "UL" === o[0].tagName && (t.parent().toggleClass("active"),
            e.preventDefault())
        }),
        $(".sidebar-toggle, .sidebar-toggle-off").on("click", function(e) {
            e.preventDefault(),
            n.toggleClass("aside-offscreen")
        }),
        t() && n.addClass("aside-offscreen");
        var a = window.innerWidth;
        $(window).resize(function() {
            window.innerWidth < a && t() && n.addClass("aside-offscreen"),
            window.innerWidth > a && !t() && n.removeClass("aside-offscreen"),
            a = window.innerWidth
        })
    }
    $(function() {
        e($("[data-ui-sidebar]")),
        $('.sidebar-nav > .nav a[href^="' + location.pathname.split("/").slice(-1)[0] + '"]').parents("li").addClass("active")
    })
}(),
function(e, t, n, a) {
    "use strict";
    n(function() {
        n('[data-toggle="popover"]').popover(),
        n('[data-toggle="tooltip"]').tooltip({
            container: "body"
        }),
        n(".dropdown input").on("click focus", function(e) {
            e.stopPropagation()
        })
    })
}(window, document, window.jQuery),
function() {
    "use strict";
    function e() {
        var e, t = this, n = function(e) {
            e = e.toLowerCase();
            var t = /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || []
              , n = /(ipad)/.exec(e) || /(iphone)/.exec(e) || /(android)/.exec(e) || /(windows phone)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/i.exec(e) || [];
            return {
                browser: t[3] || t[1] || "",
                version: t[2] || "0",
                platform: n[0] || ""
            }
        }
        ;
        if (e = n(window.navigator.userAgent),
        e.browser && (t[e.browser] = !0,
        t.version = e.version,
        t.versionNumber = parseInt(e.version)),
        e.platform && (t[e.platform] = !0),
        (t.android || t.ipad || t.iphone || t["windows phone"]) && (t.mobile = !0),
        (t.cros || t.mac || t.linux || t.win) && (t.desktop = !0),
        (t.chrome || t.opr || t.safari) && (t.webkit = !0),
        t.rv) {
            var a = "msie";
            e.browser = a,
            t[a] = !0
        }
        if (t.opr) {
            var o = "opera";
            e.browser = o,
            t[o] = !0
        }
        if (t.safari && t.android) {
            var i = "android";
            e.browser = i,
            t[i] = !0
        }
        return t.name = e.browser,
        t.platform = e.platform,
        t
    }
    window.browser = new e;
    var t = document.querySelector("html");
    t.className += " " + browser.platform
}(),
function() {
    "use strict";
    function e() {
        var e = this;
        e.touchHandler = function(e) {
            var t = e.changedTouches[0]
              , n = document.createEvent("MouseEvent");
            n.initMouseEvent({
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup"
            }[e.type], !0, !0, window, 1, t.screenX, t.screenY, t.clientX, t.clientY, !1, !1, !1, !1, 0, null ),
            t.target.dispatchEvent(n),
            e.preventDefault()
        }
        ,
        e.addTo = function(e) {
            e = e || document,
            browser.mobile && (e.addEventListener("touchstart", this.touchHandler, !0),
            e.addEventListener("touchmove", this.touchHandler, !0),
            e.addEventListener("touchend", this.touchHandler, !0),
            e.addEventListener("touchcancel", this.touchHandler, !0))
        }
    }
    window.touchDrag = new e
}(),
function() {
    "use strict";
    function e() {
        var e = this
          , t = document;
        return e.transition = function() {
            function e() {
                var e = document.createElement("bootstrap")
                  , t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (var n in t)
                    if (void 0 !== e.style[n])
                        return {
                            end: t[n]
                        };
                return !1
            }
            return e()
        }(),
        e.animation = function() {
            var e = function() {
                var e, n = t.body || t.documentElement, a = {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                };
                for (e in a)
                    if (void 0 !== n.style[e])
                        return a[e]
            }();
            return e && {
                end: e
            }
        }(),
        e.touch = "ontouchstart" in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/) || window.DocumentTouch && document instanceof window.DocumentTouch || window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 0 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 0 || !1,
        e
    }
    window.Support = new e
}(),
function() {
    "use strict";
    function e(e) {
        if (!e.parents("[chained-animation]").length) {
            var t = 2e3
              , n = e.find("[chained-animation]").add(e)
              , a = e.data("chainedAnimation");
            n.each(function() {
                var e = $(this)
                  , n = e.offset()
                  , o = .8 * n.left + n.top
                  , i = parseFloat(o / t).toFixed(2);
                e.css("-webkit-animation-delay", i + "s").css("-o-animation-delay", i + "s").css("animation-delay", i + "s").addClass("animated").addClass(a)
            })
        }
    }
    $(function() {
        e($("[data-chained-animation]"))
    })
}(),
function() {
    "use strict";
    function e(e) {
        function t(e) {
            for (var t = e.parentNode.childNodes, n = 0, a = 0; a < t.length; a++) {
                if (t[a] === e)
                    return n;
                1 === t[a].nodeType && n++
            }
            return -1
        }
        e.on("change", function() {
            var e = $(this)
              , n = t(this)
              , a = e.find("input")
              , o = e.parent().parent().parent();
            $.each(o.find("tbody").find("tr"), function(e, t) {
                var o = $(t).find("td")
                  , i = o.eq(n).find("input");
                i && i.length && (i[0].checked = a[0].checked)
            })
        })
    }
    $(function() {
        e($("[data-checkall]"))
    })
}(),
function() {
    "use strict";
    function e(e) {
        function t() {
            h.container = $(document.querySelector(".layer-morph-container")),
            h.inner = $(document.querySelector(".layer-morph-inner")),
            h.attachResize()
        }
        function n(t) {
            function n() {
                h.container.addClass("active"),
                h.inner.off(e.transition.end),
                t && t()
            }
            e.transition.end ? h.inner.on(e.transition.end, n) : n()
        }
        function a(e, t) {
            h.currentElement = e,
            h.currentElement.addClass("active"),
            h.isActive() || (h.placeLayer(),
            h.ready(function() {
                t.addClass("active"),
                h.isReady(!0)
            }),
            h.isActive(!0))
        }
        function o() {
            $(document.querySelector(".layer-morph.active")).removeClass("active"),
            h.container.removeClass("active"),
            h.currentElement.removeClass("active"),
            h.isReady(!1),
            h.isActive(!1)
        }
        function i(e) {
            f["undefined" == typeof e ? "hasClass" : e ? "addClass" : "removeClass"]("layer-morph-active"),
            f[0].offsetWidth
        }
        function r(e) {
            f["undefined" == typeof e ? "hasClass" : e ? "addClass" : "removeClass"]("layer-morph-ready"),
            f[0].offsetWidth
        }
        function l() {
            var e = h.currentElement;
            if (e) {
                var t = u(e[0])
                  , n = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
                  , a = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
                  , o = 2 * Math.sqrt(Math.pow(n, 2) + Math.pow(a, 2));
                h.inner.css("height", o + "px").css("width", o + "px"),
                t.top = t.top + c(e[0]) / 2 - window.pageYOffset,
                t.left = t.left + d(e[0]) / 2,
                h.inner.css("top", t.top - h.inner[0].offsetHeight / 2 + "px").css("left", t.left - h.inner[0].offsetWidth / 2 + "px")
            }
        }
        function s() {
            p.on("resize", function() {
                h.placeLayer()
            })
        }
        function c(e) {
            var t = getComputedStyle(e);
            return e.offsetHeight + parseInt(t.paddingTop) + parseInt(t.paddingBottom)
        }
        function d(e) {
            var t = getComputedStyle(e);
            return e.offsetWidth + parseInt(t.paddingLeft) + parseInt(t.paddingRight)
        }
        function u(e) {
            var t = e.getBoundingClientRect();
            return {
                top: t.top + document.body.scrollTop,
                left: t.left + document.body.scrollLeft
            }
        }
        var p = $(window)
          , f = $(document.querySelector("body"))
          , h = this;
        h.init = t,
        h.ready = n,
        h.open = a,
        h.close = o,
        h.isActive = i,
        h.isReady = r,
        h.placeLayer = l,
        h.attachResize = s
    }
    window.LayerMorph = new e(Support)
}(),
function() {
    "use strict";
    function e(e) {
        var t = e.data("target")
          , n = document.querySelector(t)
          , a = $(n);
        return a.length ? void e.on("click", function() {
            LayerMorph.open(e, a)
        }) : void console.log()
    }
    function t(e) {
        e.on("click", function() {
            LayerMorph.close()
        })
    }
    $(function() {
        e($("[data-btn-layer-morph]")),
        t($(".layer-morph-close")),
        LayerMorph.init()
    })
}(),
function() {
    "use strict";
    var e = 285;
    $(function() {
        $("[data-scrollable]").each(function() {
            var t = $(this)
              , n = t.data();
            n.height = n.height || e,
            t.slimScroll(n)
        })
    })
}(),
function() {
    "use strict";
    $(function() {
        if ($("#nestable").length) {
            var e = function(e) {
                var t = e.length ? e : $(e.target)
                  , n = t.data("output");
                n.val(window.JSON ? window.JSON.stringify(t.nestable("serialize")) : "JSON browser support required for this demo.")
            }
            ;
            $("#nestable").nestable({
                group: 1
            }).on("change", e),
            $("#nestable2").nestable({
                group: 1
            }).on("change", e),
            e($("#nestable").data("output", $("#nestable-output"))),
            e($("#nestable2").data("output", $("#nestable2-output"))),
            $("#nestable-menu").on("click", function(e) {
                var t = $(e.target)
                  , n = t.data("action");
                "expand-all" === n && $(".dd").nestable("expandAll"),
                "collapse-all" === n && $(".dd").nestable("collapseAll")
            }),
            $("#nestable3").nestable()
        }
    })
}(),
function() {
    "use strict";
    $(function() {
        $(".js-sortable").sortable({
            forcePlaceholderSize: !0,
            placeholderClass: "list-group-item"
        })
    })
}(),
function() {
    "use strict";
    $(function() {
        $("#datetimepicker1").datetimepicker(),
        $("#datetimepicker4").datetimepicker(),
        $("#datetimepicker3").datetimepicker({
            format: "LT"
        })
    })
}(),
function() {
    "use strict";
    $(function() {
        $(".date").mask("99/99/9999"),
        $(".time").mask("99:99:99"),
        $(".date_time").mask("99/99/9999 99:99:99"),
        $(".zip").mask("99999-999"),
        $(".phone").mask("(999) 999-9999"),
        $(".phoneext").mask("(999) 999-9999 x99999"),
        $(".money").mask("999,999,999.999"),
        $(".product").mask("999.999.999.999"),
        $(".tin").mask("99-9999999"),
        $(".ssn").mask("999-99-9999"),
        $(".ip").mask("9ZZ.9ZZ.9ZZ.9ZZ"),
        $(".eyescript").mask("~9.99 ~9.99 999")
    })
}(),
function() {
    "use strict";
    $(function() {
        jQuery.validator.setDefaults({
            debug: !0,
            success: "valid"
        }),
        $("#form-validate").validate({
            rules: {
                required: {
                    required: !0
                },
                minlength: {
                    required: !0,
                    minlength: 3
                },
                maxlength: {
                    required: !0,
                    maxlength: 6
                },
                rangelength: {
                    required: !0,
                    rangelength: [2, 6]
                },
                min: {
                    required: !0,
                    min: 13
                },
                max: {
                    required: !0,
                    max: 13
                },
                password: "required",
                password_again: {
                    equalTo: "#password"
                }
            }
        })
    })
}(),
function() {
    "use strict";
    $(function() {
        var e = $("#example-form").removeClass("hidden");
        e.validate({
            errorPlacement: function(e, t) {
                t.before(e)
            },
            rules: {
                confirm: {
                    equalTo: "#password"
                }
            }
        }),
        e.children("div").steps({
            headerTag: "h3",
            bodyTag: "section",
            transitionEffect: "slideLeft",
            onStepChanging: function() {
                return e.validate().settings.ignore = ":disabled,:hidden",
                e.valid()
            },
            onFinishing: function() {
                return e.validate().settings.ignore = ":disabled",
                e.valid()
            },
            onFinished: function() {
                alert("Submitted!")
            }
        })
    })
}(),
function() {
    "use strict";
    $(function() {
        Dropzone.options.myAwesomeDropzone = {
            paramName: "uploadedfile",
            maxFilesize: 0,
            addRemoveLinks: !0,
            dictDefaultMessage: '<em class=" text-muted fa fa-cloud-upload fa-4x"></em><h3>Drop files or click to upload</h3>'
        }
    })
}(),
function() {
    "use strict";
    $(function() {
        $.fn.editableform.buttons = '<button type="submit" class="btn btn-primary btn-sm editable-submit"><i class="fa fa-fw fa-check"></i></button><button type="button" class="btn btn-default btn-sm editable-cancel"><i class="fa fa-fw fa-times"></i></button>',
        $.fn.editable.defaults.url = "/server",
        $("#enable").click(function() {
            $("#user .editable").editable("toggleDisabled")
        }),
        $("#username").editable({
            url: "/server",
            type: "text",
            pk: 1,
            name: "username",
            title: "Enter username"
        }),
        $("#firstname").editable({
            validate: function(e) {
                return "" === $.trim(e) ? "This field is required" : void 0
            }
        }),
        $("#sex").editable({
            prepend: "not selected",
            source: [{
                value: 1,
                text: "Male"
            }, {
                value: 2,
                text: "Female"
            }],
            display: function(e, t) {
                var n = {
                    "": "gray",
                    1: "green",
                    2: "blue"
                }
                  , a = $.grep(t, function(t) {
                    return t.value === e
                });
                a.length ? $(this).text(a[0].text).css("color", n[e]) : $(this).empty()
            }
        }),
        $("#status").editable(),
        $("#group").editable({
            showbuttons: !1
        }),
        $("#dob").editable(),
        $("#event").editable({
            placement: "right",
            combodate: {
                firstItem: "name"
            }
        }),
        $("#comments").editable({
            showbuttons: "bottom"
        }),
        $("#note").editable(),
        $("#pencil").click(function(e) {
            e.stopPropagation(),
            e.preventDefault(),
            $("#note").editable("toggle")
        }),
        $("#fruits").editable({
            pk: 1,
            limit: 3,
            source: [{
                value: 1,
                text: "banana"
            }, {
                value: 2,
                text: "peach"
            }, {
                value: 3,
                text: "apple"
            }, {
                value: 4,
                text: "watermelon"
            }, {
                value: 5,
                text: "orange"
            }]
        }),
        $("#user .editable").on("hidden", function(e, t) {
            if ("save" === t || "nochange" === t) {
                var n = $(this).closest("tr").next().find(".editable");
                $("#autoopen").is(":checked") ? setTimeout(function() {
                    n.editable("show")
                }, 300) : n.focus()
            }
        }),
        $("#users a").editable({
            type: "text",
            name: "username",
            title: "Enter username"
        })
    })
}(),
function() {
    "use strict";
    $(function() {
        var e = $(".img-container > img")
          , t = $("#dataX")
          , n = $("#dataY")
          , a = $("#dataHeight")
          , o = $("#dataWidth")
          , i = $("#dataRotate")
          , r = {
            aspectRatio: 16 / 9,
            preview: ".img-preview",
            crop: function(e) {
                t.val(Math.round(e.x)),
                n.val(Math.round(e.y)),
                a.val(Math.round(e.height)),
                o.val(Math.round(e.width)),
                i.val(Math.round(e.rotate))
            }
        };
        e.on({
            "build.cropper": function(e) {
                console.log(e.type)
            },
            "built.cropper": function(e) {
                console.log(e.type)
            },
            "dragstart.cropper": function(e) {
                console.log(e.type, e.dragType)
            },
            "dragmove.cropper": function(e) {
                console.log(e.type, e.dragType)
            },
            "dragend.cropper": function(e) {
                console.log(e.type, e.dragType)
            },
            "zoomin.cropper": function(e) {
                console.log(e.type)
            },
            "zoomout.cropper": function(e) {
                console.log(e.type)
            },
            "change.cropper": function(e) {
                console.log(e.type)
            }
        }).cropper(r),
        $(document.body).on("click", "[data-method]", function() {
            var t, n, a = $(this).data();
            if (e.data("cropper") && a.method) {
                if (a = $.extend({}, a),
                "undefined" != typeof a.target && (t = $(a.target),
                "undefined" == typeof a.option))
                    try {
                        a.option = JSON.parse(t.val())
                    } catch (o) {
                        console.log(o.message)
                    }
                if (n = e.cropper(a.method, a.option),
                "getCroppedCanvas" === a.method && $("#getCroppedCanvasModal").modal().find(".modal-body").html(n),
                $.isPlainObject(n) && t)
                    try {
                        t.val(JSON.stringify(n))
                    } catch (o) {
                        console.log(o.message)
                    }
            }
        }).on("keydown", function(t) {
            if (e.data("cropper"))
                switch (t.which) {
                case 37:
                    t.preventDefault(),
                    e.cropper("move", -1, 0);
                    break;
                case 38:
                    t.preventDefault(),
                    e.cropper("move", 0, -1);
                    break;
                case 39:
                    t.preventDefault(),
                    e.cropper("move", 1, 0);
                    break;
                case 40:
                    t.preventDefault(),
                    e.cropper("move", 0, 1)
                }
        });
        var l, s = $("#inputImage"), c = window.URL || window.webkitURL;
        c ? s.change(function() {
            var t, n = this.files;
            e.data("cropper") && n && n.length && (t = n[0],
            /^image\/\w+$/.test(t.type) ? (l = c.createObjectURL(t),
            e.one("built.cropper", function() {
                c.revokeObjectURL(l)
            }).cropper("reset").cropper("replace", l),
            s.val("")) : alert("Please choose an image file."))
        }) : s.parent().remove(),
        $(".docs-options :checkbox").on("change", function() {
            var t = $(this);
            e.data("cropper") && (r[t.val()] = t.prop("checked"),
            e.cropper("destroy").cropper(r))
        }),
        $('[data-toggle="tooltip"]').tooltip()
    })
}(),
function() {
    "use strict";
    $(function() {
        $("#summernote").summernote({
            height: 255,
            focus: !1,
            oninit: function() {},
            onChange: function() {}
        })
    })
}(),
function() {
    "use strict";
    $(function() {
        $("#datatable1").dataTable({
            paging: !0,
            ordering: !0,
            info: !0,
            oLanguage: {
                sSearch: "Search all columns:",
                sLengthMenu: "_MENU_ records per page",
                info: "Showing page _PAGE_ of _PAGES_",
                zeroRecords: "Nothing found - sorry",
                infoEmpty: "No records available",
                infoFiltered: "(filtered from _MAX_ total records)"
            }
        });
        var e = $("#datatable2").dataTable({
            paging: !0,
            ordering: !0,
            info: !0,
            oLanguage: {
                sSearch: "Search all columns:",
                sLengthMenu: "_MENU_ records per page",
                info: "Showing page _PAGE_ of _PAGES_",
                zeroRecords: "Nothing found - sorry",
                infoEmpty: "No records available",
                infoFiltered: "(filtered from _MAX_ total records)"
            }
        })
          , t = "datatable_input_col_search"
          , n = $("tfoot ." + t);
        n.keyup(function() {
            e.fnFilter(this.value, n.index(this))
        })
    })
}(),
function() {
    "use strict";
    $(function() {
        function e() {
            for (p.length > 0 && (p = p.slice(1)); p.length < f; ) {
                var e = p.length > 0 ? p[p.length - 1] : 50
                  , t = e + 10 * Math.random() - 5;
                0 > t ? t = 0 : t > 100 && (t = 100),
                p.push(t)
            }
            for (var n = [], a = 0; a < p.length; ++a)
                n.push([a, p[a]]);
            return n
        }
        function t() {
            h.setData([e()]),
            h.draw(),
            setTimeout(t, u)
        }
        if (!(window.location.href.indexOf("charts.flot.html") < 0)) {
            var n = {
                grid: {
                    hoverable: !0,
                    clickable: !0,
                    borderWidth: 0,
                    color: "#8394a9"
                },
                tooltip: !0,
                tooltipOpts: {
                    content: "%x : %y"
                },
                xaxis: {
                    tickColor: "#f1f2f3",
                    mode: "categories"
                },
                yaxis: {
                    tickColor: "#f1f2f3"
                },
                legend: {
                    backgroundColor: "rgba(0,0,0,0)"
                },
                shadowSize: 0
            }
              , a = $.extend({}, n, {
                series: {
                    lines: {
                        show: !0,
                        fill: 1
                    }
                }
            });
            $.getJSON("server/chart/area.json", function(e) {
                $.plot($("#area-chart"), e, a)
            });
            var o = $.extend({}, n, {
                series: {
                    lines: {
                        show: !1
                    },
                    splines: {
                        show: !0,
                        tension: .4,
                        lineWidth: 1,
                        fill: 1
                    }
                }
            });
            $.getJSON("server/chart/spline.json", function(e) {
                $.plot($("#spline-chart"), e, o)
            });
            var i = $.extend({}, n, {
                series: {
                    lines: {
                        show: !0,
                        fill: .01
                    },
                    points: {
                        show: !0,
                        radius: 4
                    }
                }
            });
            $.getJSON("server/chart/line.json", function(e) {
                $.plot($("#line-chart"), e, i)
            });
            var r = $.extend({}, n, {
                series: {
                    bars: {
                        align: "center",
                        lineWidth: 0,
                        show: !0,
                        barWidth: .6,
                        fill: 1
                    }
                }
            });
            $.getJSON("server/chart/bar.json", function(e) {
                $.plot($("#bar-chart"), e, r)
            });
            var l = $.extend({}, n, {
                series: {
                    bars: {
                        align: "center",
                        lineWidth: 0,
                        show: !0,
                        barWidth: .6,
                        fill: 1,
                        stacked: !0
                    }
                }
            });
            $.getJSON("server/chart/barstacked.json", function(e) {
                $.plot($("#bar-stacked-chart"), e, l)
            });
            var s = {
                series: {
                    pie: {
                        show: !0,
                        innerRadius: 0,
                        label: {
                            show: !0,
                            radius: .8,
                            formatter: function(e, t) {
                                return '<div class="flot-pie-label">' + Math.round(t.percent) + "%</div>"
                            },
                            background: {
                                opacity: .8,
                                color: "#222"
                            }
                        }
                    }
                }
            };
            $.getJSON("server/chart/pie.json", function(e) {
                $.plot($("#pie-chart"), e, s)
            });
            var c = {
                series: {
                    pie: {
                        show: !0,
                        innerRadius: .5
                    }
                }
            };
            $.getJSON("server/chart/donut.json", function(e) {
                $.plot($("#donut-chart"), e, c)
            });
            var d = $.extend({}, n, {
                series: {
                    lines: {
                        show: !0,
                        fill: !0,
                        fillColor: {
                            colors: ["#00b4ff", "#1d93d9"]
                        }
                    },
                    shadowSize: 0
                },
                yaxis: {
                    min: 0,
                    max: 120
                },
                xaxis: {
                    show: !1
                },
                colors: ["#1d93d9"]
            })
              , u = 30
              , p = []
              , f = 300
              , h = $.plot("#realtime-chart", [e()], d);
            t(),
            $("#updateInterval").val(u).change(function() {
                var e = $(this).val();
                e && !isNaN(+e) && (u = +e,
                1 > u ? u = 1 : u > 2e3 && (u = 2e3),
                $(this).val("" + u))
            })
        }
    })
}(),
function() {
    "use strict";
    $(function() {
        var e = {
            animate: {
                duration: 700,
                enabled: !0
            },
            barColor: "#2095f2",
            scaleColor: !1,
            lineWidth: 10,
            lineCap: "circle"
        }
          , t = {
            animate: {
                duration: 700,
                enabled: !0
            },
            barColor: "#2095f2",
            scaleColor: !1,
            lineWidth: 4,
            lineCap: "circle"
        }
          , n = {
            animate: {
                duration: 700,
                enabled: !0
            },
            barColor: "#6639b6",
            trackColor: !1,
            scaleColor: "#A0AAB2",
            lineWidth: 15,
            lineCap: "circle"
        };
        $("#easypiechart1").easyPieChart(e),
        $("#easypiechart2").easyPieChart(t),
        $("#easypiechart3").easyPieChart(n),
        $("#easypiechart4").easyPieChart(n);
        var a = {
            width: "50%",
            displayInput: !0,
            fgColor: "#3F51B5"
        }
          , o = {
            width: "50%",
            displayInput: !0,
            fgColor: "#4caf50",
            readOnly: !0,
            lineCap: "round"
        }
          , i = {
            width: "50%",
            displayInput: !0,
            fgColor: "#6639b6",
            displayPrevious: !0,
            thickness: .1
        }
          , r = {
            width: "50%",
            displayInput: !0,
            fgColor: "#f34235",
            bgColor: "#fe9700",
            angleOffset: -125,
            angleArc: 250
        };
        $("#knobchart1").knob(a),
        $("#knobchart2").knob(o),
        $("#knobchart3").knob(i),
        $("#knobchart4").knob(r)
    })
}(),
function() {
    "use strict";
    $(function() {
        if (document.getElementById("map_canvas")) {
            var e = new GMaps({
                div: "#map_canvas",
                lat: -12.043333,
                lng: -77.028333
            });
            GMaps.geocode({
                address: "276 N TUSTIN ST, ORANGE, CA 92867",
                callback: function(t, n) {
                    if ("OK" === n) {
                        var a = t[0].geometry.location;
                        e.setCenter(a.lat(), a.lng()),
                        e.addMarker({
                            lat: a.lat(),
                            lng: a.lng()
                        })
                    }
                }
            })
        }
        document.getElementById("panorama") && GMaps.createPanorama({
            el: "#panorama",
            lat: 42.3455,
            lng: -71.0983
        })
    })
}(),
function() {
    "use strict";
    $(function() {
        var e = {
            AU: 15710,
            RU: 17312,
            CN: 123370,
            US: 12337,
            AR: 18613,
            CO: 12170,
            DE: 1358,
            FR: 1479,
            GB: 16311,
            IN: 19814,
            SA: 12137
        }
          , t = [{
            latLng: [41.9, 12.45],
            name: "Vatican City"
        }, {
            latLng: [43.73, 7.41],
            name: "Monaco"
        }, {
            latLng: [-.52, 166.93],
            name: "Nauru"
        }, {
            latLng: [-8.51, 179.21],
            name: "Tuvalu"
        }, {
            latLng: [7.11, 171.06],
            name: "Marshall Islands"
        }, {
            latLng: [17.3, -62.73],
            name: "Saint Kitts and Nevis"
        }, {
            latLng: [3.2, 73.22],
            name: "Maldives"
        }, {
            latLng: [35.88, 14.5],
            name: "Malta"
        }, {
            latLng: [41, -71.06],
            name: "New England"
        }, {
            latLng: [12.05, -61.75],
            name: "Grenada"
        }, {
            latLng: [13.16, -59.55],
            name: "Barbados"
        }, {
            latLng: [17.11, -61.85],
            name: "Antigua and Barbuda"
        }, {
            latLng: [-4.61, 55.45],
            name: "Seychelles"
        }, {
            latLng: [7.35, 134.46],
            name: "Palau"
        }, {
            latLng: [42.5, 1.51],
            name: "Andorra"
        }]
          , n = {
            height: 500,
            map: "world_mill_en",
            backgroundColor: "transparent",
            zoomMin: 0,
            zoomMax: 8,
            zoomOnScroll: !1,
            regionStyle: {
                initial: {
                    fill: "#515d6e",
                    "fill-opacity": 1,
                    stroke: "none",
                    "stroke-width": 1.5,
                    "stroke-opacity": 1
                },
                hover: {
                    "fill-opacity": .8
                },
                selected: {
                    fill: "blue"
                },
                selectedHover: {}
            },
            focusOn: {
                x: .4,
                y: .6,
                scale: 1
            },
            markerStyle: {
                initial: {
                    fill: "#fe9700",
                    stroke: "#fe9700"
                }
            },
            onRegionLabelShow: function(t, n, a) {
                e && e[a] && n.html(n.html() + ": " + e[a] + " visitors")
            },
            markers: t,
            series: {
                regions: [{
                    values: e,
                    scale: ["#2b3d51"],
                    normalizeFunction: "polynomial"
                }]
            }
        }
          , a = [{
            latLng: [33.9783241, -84.4783064],
            name: "Mark_1"
        }, {
            latLng: [30.51220349999999, -97.67312530000001],
            name: "Mark_2"
        }, {
            latLng: [39.4014955, -76.6019125],
            name: "Mark_3"
        }, {
            latLng: [33.37857109999999, -86.80439],
            name: "Mark_4"
        }, {
            latLng: [43.1938516, -71.5723953],
            name: "Mark_5"
        }, {
            latLng: [43.0026291, -78.8223134],
            name: "Mark_6"
        }, {
            latLng: [33.836081, -81.1637245],
            name: "Mark_7"
        }, {
            latLng: [41.7435073, -88.0118473],
            name: "Mark_8"
        }, {
            latLng: [39.1031182, -84.5120196],
            name: "Mark_9"
        }, {
            latLng: [41.6661573, -81.339552],
            name: "Mark_10"
        }, {
            latLng: [39.9611755, -82.99879419999999],
            name: "Mark_11"
        }, {
            latLng: [32.735687, -97.10806559999999],
            name: "Mark_12"
        }, {
            latLng: [39.9205411, -105.0866504],
            name: "Mark_13"
        }, {
            latLng: [42.8105356, -83.0790865],
            name: "Mark_14"
        }, {
            latLng: [41.754166, -72.624443],
            name: "Mark_15"
        }, {
            latLng: [29.7355047, -94.97742740000001],
            name: "Mark_16"
        }, {
            latLng: [39.978371, -86.1180435],
            name: "Mark_17"
        }, {
            latLng: [30.3321838, -81.65565099999999],
            name: "Mark_18"
        }, {
            latLng: [39.0653602, -94.5624426],
            name: "Mark_19"
        }, {
            latLng: [36.0849963, -115.1511364],
            name: "Mark_20"
        }, {
            latLng: [34.0596149, -118.1122679],
            name: "Mark_21"
        }, {
            latLng: [38.3964426, -85.4375574],
            name: "Mark_22"
        }]
          , o = $.extend({}, n, {
            map: "us_mill_en",
            regionStyle: {
                initial: {
                    fill: "#2095f2"
                }
            },
            focusOn: {
                x: .5,
                y: .5,
                scale: 1.2
            },
            markerStyle: {
                initial: {
                    fill: "#4caf50",
                    stroke: "#4caf50",
                    r: 10
                },
                hover: {
                    stroke: "#4caf50",
                    "stroke-width": 2
                }
            },
            markers: a,
            series: {}
        });
        $("#vmap1").vectorMap(n),
        $("#vmap2").vectorMap(o)
    })
}(),
function() {
    "use strict";
    var e = "fonts/animated-climacons/svgs/"
      , t = ".svg";
    $(function() {
        function n(n) {
            function a(e) {
                var t = $(e).find("svg");
                t.css({
                    width: l,
                    height: s
                }),
                t.find(".climacon_component-stroke").css("fill", i),
                n.append(t)
            }
            function o() {
                n.text("Error loading SVG: " + r)
            }
            var i = n.data("color") || "#000"
              , r = n.data("name") || "sun"
              , l = n.data("width") || 20
              , s = n.data("height") || 20;
            $.get(e + r + t).then(a, o)
        }
        $(".climacon").each(function() {
            n($(this))
        })
    })
}(),
function() {
    "use strict";
    function e(e) {
        var t = new Date
          , n = t.getDate()
          , a = t.getMonth()
          , o = t.getFullYear()
          , i = [{
            id: 324,
            title: "All Day Event",
            start: new Date(o,a,1)
        }, {
            title: "Long Event",
            start: new Date(o,a,n - 5),
            end: new Date(o,a,n - 2)
        }, {
            id: 999,
            title: "Repeating Event",
            start: new Date(o,a,n - 3,16,0),
            allDay: !1
        }, {
            id: 999,
            title: "Repeating Event",
            start: new Date(o,a,n + 4,16,0),
            allDay: !1
        }, {
            title: "Birthday Party",
            start: new Date(o,a,n + 1,19,0),
            end: new Date(o,a,n + 1,22,30),
            allDay: !1
        }, {
            title: "Click for Google",
            start: new Date(o,a,28),
            end: new Date(o,a,29),
            url: "http://google.com/"
        }]
          , r = i;
        $.getJSON("server/calendar/external-calendar.json", function(t) {
            for (var i = 0; i < t.length; i++)
                t[i].start = new Date(o,a,n + i,12,0),
                t[i].end = new Date(o,a,n + i,14,0),
                t[i].className = "is-external";
            r = r.concat(t);
            var l = {
                height: 450,
                editable: !0,
                droppable: !0,
                header: {
                    left: "month,basicWeek,basicDay",
                    center: "title",
                    right: "prev,next today"
                },
                events: r,
                selectable: !0,
                selectHelper: !0,
                unselectAuto: !0,
                select: function(t, n) {
                    var a = prompt("Event Title:");
                    if (a) {
                        var o;
                        a && (o = {
                            title: a,
                            start: t.format(),
                            end: n.format()
                        }),
                        e.fullCalendar("renderEvent", o, !0)
                    }
                    e.fullCalendar("unselect")
                },
                viewRender: function(e, t) {
                    touchDrag.addTo(t[0])
                }
            };
            e.fullCalendar(l)
        })
    }
    $(function() {
        e($("#calendar"))
    })
}(),
function() {
    "use strict";
    var e = [{
        name: "primary",
        sidebar: "bg-white",
        sidebarHeader: "bg-primary bg-light",
        brand: "bg-primary",
        topbar: "bg-primary"
    }, {
        name: "purple",
        sidebar: "bg-white",
        sidebarHeader: "bg-purple bg-light",
        brand: "bg-purple",
        topbar: "bg-purple"
    }, {
        name: "success",
        sidebar: "bg-white",
        sidebarHeader: "bg-success bg-light",
        brand: "bg-success",
        topbar: "bg-success"
    }, {
        name: "warning",
        sidebar: "bg-white",
        sidebarHeader: "bg-warning bg-light",
        brand: "bg-warning",
        topbar: "bg-warning"
    }, {
        name: "info",
        sidebar: "bg-white",
        sidebarHeader: "bg-info bg-light",
        brand: "bg-info",
        topbar: "bg-info"
    }, {
        name: "danger",
        sidebar: "bg-white",
        sidebarHeader: "bg-danger bg-light",
        brand: "bg-danger",
        topbar: "bg-danger"
    }, {
        name: "pink",
        sidebar: "bg-white",
        sidebarHeader: "bg-pink bg-light",
        brand: "bg-pink",
        topbar: "bg-pink"
    }, {
        name: "amber",
        sidebar: "bg-white",
        sidebarHeader: "bg-amber bg-light",
        brand: "bg-amber",
        topbar: "bg-amber"
    }];
    $(function() {
        function t(e, t) {
            var n = t.match(/(^|\s)bg-\S+/g);
            return (n || []).join(" ")
        }
        function n(e, t, n) {
            e[t ? "addClass" : "removeClass"](n)
        }
        var a = $("body")
          , o = $(".settings-wrapper")
          , i = $(".settings-button")
          , r = $(".app-container > aside")
          , l = $(".app-container > header")
          , s = $(".navbar-header");
        i.on("click", function() {
            o.toggleClass("visible")
        }),
        $("input[name=setting-theme]").on("change", function() {
            var n = $(this).val();
            e[n] && (r.removeClass(t),
            r.addClass(e[n].sidebar),
            l.removeClass(t),
            l.addClass(e[n].topbar),
            s.removeClass(t),
            s.addClass(e[n].brand))
        });
        var c = $("#layoutisfixed")
          , d = $("#layoutisboxed")
          , u = $("#layoutismaterial")
          , p = $("#sidebarismini")
          , f = $("#sidebarisright")
          , h = $("#footerhidden");
        c.on("change", function() {
            n(a, this.checked, "layout-fixed"),
            d[0].checked || p[0].checked || (u[0].disabled = this.checked)
        }),
        d.on("change", function() {
            n(a, this.checked, "layout-boxed"),
            c[0].checked || p[0].checked || (u[0].disabled = this.checked)
        }),
        u.on("change", function() {
            n(a, this.checked, "layout-material"),
            c[0].disabled = this.checked,
            d[0].disabled = this.checked,
            p[0].disabled = this.checked
        }),
        p.on("change", function() {
            n(a, this.checked, "aside-mini"),
            d[0].checked || c[0].checked || (u[0].disabled = this.checked)
        }),
        f.on("change", function() {
            n(a, this.checked, "aside-right")
        }),
        h.on("change", function() {
            n(a, this.checked, "footer-hidden")
        })
    })
}();
