typeof JSON != "object" && (JSON = {}), function () {
    "use strict";
    function f(e) {
        return e < 10 ? "0" + e : e
    }

    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
            var t = meta[e];
            return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }

    function str(e, t) {
        var n, r, i, s, o = gap, u, a = t[e];
        a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
        switch (typeof a) {
            case"string":
                return quote(a);
            case"number":
                return isFinite(a) ? String(a) : "null";
            case"boolean":
            case"null":
                return String(a);
            case"object":
                if (!a)return"null";
                gap += indent, u = [];
                if (Object.prototype.toString.apply(a) === "[object Array]") {
                    s = a.length;
                    for (n = 0; n < s; n += 1)u[n] = str(n, a) || "null";
                    return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
                }
                if (rep && typeof rep == "object") {
                    s = rep.length;
                    for (n = 0; n < s; n += 1)typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
                } else for (r in a)Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
        }
    }

    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {"\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function (e, t, n) {
        var r;
        gap = "", indent = "";
        if (typeof n == "number")for (r = 0; r < n; r += 1)indent += " "; else typeof n == "string" && (indent = n);
        rep = t;
        if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number")return str("", {"": e});
        throw new Error("JSON.stringify")
    }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
        function walk(e, t) {
            var n, r, i = e[t];
            if (i && typeof i == "object")for (n in i)Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
            return reviver.call(e, t, i)
        }

        var j;
        text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
            return"\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({"": j}, "") : j;
        throw new SyntaxError("JSON.parse")
    })
}(), function (e, t) {
    "use strict";
    var n = e.History = e.History || {}, r = e.jQuery;
    if (typeof n.Adapter != "undefined")throw new Error("History.js Adapter has already been loaded...");
    n.Adapter = {bind: function (e, t, n) {
        r(e).bind(t, n)
    }, trigger: function (e, t, n) {
        r(e).trigger(t, n)
    }, extractEventData: function (e, n, r) {
        var i = n && n.originalEvent && n.originalEvent[e] || r && r[e] || t;
        return i
    }, onDomLoad: function (e) {
        r(e)
    }}, typeof n.init != "undefined" && n.init()
}(window), function (e, t) {
    "use strict";
    var n = e.document, r = e.setTimeout || r, i = e.clearTimeout || i, s = e.setInterval || s, o = e.History = e.History || {};
    if (typeof o.initHtml4 != "undefined")throw new Error("History.js HTML4 Support has already been loaded...");
    o.initHtml4 = function () {
        if (typeof o.initHtml4.initialized != "undefined")return!1;
        o.initHtml4.initialized = !0, o.enabled = !0, o.savedHashes = [], o.isLastHash = function (e) {
            var t = o.getHashByIndex(), n;
            return n = e === t, n
        }, o.isHashEqual = function (e, t) {
            return e = encodeURIComponent(e).replace(/%25/g, "%"), t = encodeURIComponent(t).replace(/%25/g, "%"), e === t
        }, o.saveHash = function (e) {
            return o.isLastHash(e) ? !1 : (o.savedHashes.push(e), !0)
        }, o.getHashByIndex = function (e) {
            var t = null;
            return typeof e == "undefined" ? t = o.savedHashes[o.savedHashes.length - 1] : e < 0 ? t = o.savedHashes[o.savedHashes.length + e] : t = o.savedHashes[e], t
        }, o.discardedHashes = {}, o.discardedStates = {}, o.discardState = function (e, t, n) {
            var r = o.getHashByState(e), i;
            return i = {discardedState: e, backState: n, forwardState: t}, o.discardedStates[r] = i, !0
        }, o.discardHash = function (e, t, n) {
            var r = {discardedHash: e, backState: n, forwardState: t};
            return o.discardedHashes[e] = r, !0
        }, o.discardedState = function (e) {
            var t = o.getHashByState(e), n;
            return n = o.discardedStates[t] || !1, n
        }, o.discardedHash = function (e) {
            var t = o.discardedHashes[e] || !1;
            return t
        }, o.recycleState = function (e) {
            var t = o.getHashByState(e);
            return o.discardedState(e) && delete o.discardedStates[t], !0
        }, o.emulated.hashChange && (o.hashChangeInit = function () {
            o.checkerFunction = null;
            var t = "", r, i, u, a, f = Boolean(o.getHash());
            return o.isInternetExplorer() ? (r = "historyjs-iframe", i = n.createElement("iframe"), i.setAttribute("id", r), i.setAttribute("src", "#"), i.style.display = "none", n.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), u = "", a = !1, o.checkerFunction = function () {
                if (a)return!1;
                a = !0;
                var n = o.getHash(), r = o.getHash(i.contentWindow.document);
                return n !== t ? (t = n, r !== n && (u = r = n, i.contentWindow.document.open(), i.contentWindow.document.close(), i.contentWindow.document.location.hash = o.escapeHash(n)), o.Adapter.trigger(e, "hashchange")) : r !== u && (u = r, f && r === "" ? o.back() : o.setHash(r, !1)), a = !1, !0
            }) : o.checkerFunction = function () {
                var n = o.getHash() || "";
                return n !== t && (t = n, o.Adapter.trigger(e, "hashchange")), !0
            }, o.intervalList.push(s(o.checkerFunction, o.options.hashChangeInterval)), !0
        }, o.Adapter.onDomLoad(o.hashChangeInit)), o.emulated.pushState && (o.onHashChange = function (t) {
            var n = t && t.newURL || o.getLocationHref(), r = o.getHashByUrl(n), i = null, s = null, u = null, a;
            return o.isLastHash(r) ? (o.busy(!1), !1) : (o.doubleCheckComplete(), o.saveHash(r), r && o.isTraditionalAnchor(r) ? (o.Adapter.trigger(e, "anchorchange"), o.busy(!1), !1) : (i = o.extractState(o.getFullUrl(r || o.getLocationHref()), !0), o.isLastSavedState(i) ? (o.busy(!1), !1) : (s = o.getHashByState(i), a = o.discardedState(i), a ? (o.getHashByIndex(-2) === o.getHashByState(a.forwardState) ? o.back(!1) : o.forward(!1), !1) : (o.pushState(i.data, i.title, encodeURI(i.url), !1), !0))))
        }, o.Adapter.bind(e, "hashchange", o.onHashChange), o.pushState = function (t, n, r, i) {
            r = encodeURI(r).replace(/%25/g, "%");
            if (o.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (i !== !1 && o.busy())return o.pushQueue({scope: o, callback: o.pushState, args: arguments, queue: i}), !1;
            o.busy(!0);
            var s = o.createStateObject(t, n, r), u = o.getHashByState(s), a = o.getState(!1), f = o.getHashByState(a), l = o.getHash(), c = o.expectedStateId == s.id;
            return o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), u === f ? (o.busy(!1), !1) : (o.saveState(s), c || o.Adapter.trigger(e, "statechange"), !o.isHashEqual(u, l) && !o.isHashEqual(u, o.getShortUrl(o.getLocationHref())) && o.setHash(u, !1), o.busy(!1), !0)
        }, o.replaceState = function (t, n, r, i) {
            r = encodeURI(r).replace(/%25/g, "%");
            if (o.getHashByUrl(r))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
            if (i !== !1 && o.busy())return o.pushQueue({scope: o, callback: o.replaceState, args: arguments, queue: i}), !1;
            o.busy(!0);
            var s = o.createStateObject(t, n, r), u = o.getHashByState(s), a = o.getState(!1), f = o.getHashByState(a), l = o.getStateByIndex(-2);
            return o.discardState(a, s, l), u === f ? (o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), o.saveState(s), o.Adapter.trigger(e, "statechange"), o.busy(!1)) : o.pushState(s.data, s.title, s.url, !1), !0
        }), o.emulated.pushState && o.getHash() && !o.emulated.hashChange && o.Adapter.onDomLoad(function () {
            o.Adapter.trigger(e, "hashchange")
        })
    }, typeof o.init != "undefined" && o.init()
}(window), function (e, t) {
    "use strict";
    var n = e.console || t, r = e.document, i = e.navigator, s = e.sessionStorage || !1, o = e.setTimeout, u = e.clearTimeout, a = e.setInterval, f = e.clearInterval, l = e.JSON, c = e.alert, h = e.History = e.History || {}, p = e.history;
    try {
        s.setItem("TEST", "1"), s.removeItem("TEST")
    } catch (d) {
        s = !1
    }
    l.stringify = l.stringify || l.encode, l.parse = l.parse || l.decode;
    if (typeof h.init != "undefined")throw new Error("History.js Core has already been loaded...");
    h.init = function (e) {
        return typeof h.Adapter == "undefined" ? !1 : (typeof h.initCore != "undefined" && h.initCore(), typeof h.initHtml4 != "undefined" && h.initHtml4(), !0)
    }, h.initCore = function (d) {
        if (typeof h.initCore.initialized != "undefined")return!1;
        h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || r.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function () {
            var e, t = h.intervalList;
            if (typeof t != "undefined" && t !== null) {
                for (e = 0; e < t.length; e++)f(t[e]);
                h.intervalList = null
            }
        }, h.debug = function () {
            (h.options.debug || !1) && h.log.apply(h, arguments)
        }, h.log = function () {
            var e = typeof n != "undefined" && typeof n.log != "undefined" && typeof n.log.apply != "undefined", t = r.getElementById("log"), i, s, o, u, a;
            e ? (u = Array.prototype.slice.call(arguments), i = u.shift(), typeof n.debug != "undefined" ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u])) : i = "\n" + arguments[0] + "\n";
            for (s = 1, o = arguments.length; s < o; ++s) {
                a = arguments[s];
                if (typeof a == "object" && typeof l != "undefined")try {
                    a = l.stringify(a)
                } catch (f) {
                }
                i += "\n" + a + "\n"
            }
            return t ? (t.value += i + "\n-----\n", t.scrollTop = t.scrollHeight - t.clientHeight) : e || c(i), !0
        }, h.getInternetExplorerMajorVersion = function () {
            var e = h.getInternetExplorerMajorVersion.cached = typeof h.getInternetExplorerMajorVersion.cached != "undefined" ? h.getInternetExplorerMajorVersion.cached : function () {
                var e = 3, t = r.createElement("div"), n = t.getElementsByTagName("i");
                while ((t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0]);
                return e > 4 ? e : !1
            }();
            return e
        }, h.isInternetExplorer = function () {
            var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer.cached != "undefined" ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
            return e
        }, h.options.html4Mode ? h.emulated = {pushState: !0, hashChange: !0} : h.emulated = {pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)), hashChange: Boolean(!("onhashchange"in e || "onhashchange"in r) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)}, h.enabled = !h.emulated.pushState, h.bugs = {setHash: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)), safariPoll: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)), ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8), hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)}, h.isEmptyObject = function (e) {
            for (var t in e)if (e.hasOwnProperty(t))return!1;
            return!0
        }, h.cloneObject = function (e) {
            var t, n;
            return e ? (t = l.stringify(e), n = l.parse(t)) : n = {}, n
        }, h.getRootUrl = function () {
            var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
            if (r.location.port || !1)e += ":" + r.location.port;
            return e += "/", e
        }, h.getBaseHref = function () {
            var e = r.getElementsByTagName("base"), t = null, n = "";
            return e.length === 1 && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
        }, h.getBaseUrl = function () {
            var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
            return e
        }, h.getPageUrl = function () {
            var e = h.getState(!1, !1), t = (e || {}).url || h.getLocationHref(), n;
            return n = t.replace(/\/+$/, "").replace(/[^\/]+$/, function (e, t, n) {
                return/\./.test(e) ? e : e + "/"
            }), n
        }, h.getBasePageUrl = function () {
            var e = h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/,function (e, t, n) {
                return/[^\/]$/.test(e) ? "" : e
            }).replace(/\/+$/, "") + "/";
            return e
        }, h.getFullUrl = function (e, t) {
            var n = e, r = e.substring(0, 1);
            return t = typeof t == "undefined" ? !0 : t, /[a-z]+\:\/\//.test(e) || (r === "/" ? n = h.getRootUrl() + e.replace(/^\/+/, "") : r === "#" ? n = h.getPageUrl().replace(/#.*/, "") + e : r === "?" ? n = h.getPageUrl().replace(/[\?#].*/, "") + e : t ? n = h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
        }, h.getShortUrl = function (e) {
            var t = e, n = h.getBaseUrl(), r = h.getRootUrl();
            return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), t
        }, h.getLocationHref = function (e) {
            return e = e || r, e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : e.URL.indexOf("#") == -1 && e.location.href.indexOf("#") != -1 ? e.location.href : e.URL || e.location.href
        }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function () {
            h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
        }, h.getState = function (e, t) {
            typeof e == "undefined" && (e = !0), typeof t == "undefined" && (t = !0);
            var n = h.getLastSavedState();
            return!n && t && (n = h.createStateObject()), e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url), n
        }, h.getIdByState = function (e) {
            var t = h.extractId(e.url), n;
            if (!t) {
                n = h.getStateString(e);
                if (typeof h.stateToId[n] != "undefined")t = h.stateToId[n]; else if (typeof h.store.stateToId[n] != "undefined")t = h.store.stateToId[n]; else {
                    for (; ;) {
                        t = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                        if (typeof h.idToState[t] == "undefined" && typeof h.store.idToState[t] == "undefined")break
                    }
                    h.stateToId[n] = t, h.idToState[t] = e
                }
            }
            return t
        }, h.normalizeState = function (e) {
            var t, n;
            if (!e || typeof e != "object")e = {};
            if (typeof e.normalized != "undefined")return e;
            if (!e.data || typeof e.data != "object")e.data = {};
            return t = {}, t.normalized = !0, t.title = e.title || "", t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref()), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data), (t.title || n) && h.options.disableSuid !== !0 && (t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t
        }, h.createStateObject = function (e, t, n) {
            var r = {data: e, title: t, url: n};
            return r = h.normalizeState(r), r
        }, h.getStateById = function (e) {
            e = String(e);
            var n = h.idToState[e] || h.store.idToState[e] || t;
            return n
        }, h.getStateString = function (e) {
            var t, n, r;
            return t = h.normalizeState(e), n = {data: t.data, title: e.title, url: e.url}, r = l.stringify(n), r
        }, h.getStateId = function (e) {
            var t, n;
            return t = h.normalizeState(e), n = t.id, n
        }, h.getHashByState = function (e) {
            var t, n;
            return t = h.normalizeState(e), n = t.hash, n
        }, h.extractId = function (e) {
            var t, n, r, i;
            return e.indexOf("#") != -1 ? i = e.split("#")[0] : i = e, n = /(.*)\&_suid=([0-9]+)$/.exec(i), r = n ? n[1] || e : e, t = n ? String(n[2] || "") : "", t || !1
        }, h.isTraditionalAnchor = function (e) {
            var t = !/[\/\?\.]/.test(e);
            return t
        }, h.extractState = function (e, t) {
            var n = null, r, i;
            return t = t || !1, r = h.extractId(e), r && (n = h.getStateById(r)), n || (i = h.getFullUrl(e), r = h.getIdByUrl(i) || !1, r && (n = h.getStateById(r)), !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))), n
        }, h.getIdByUrl = function (e) {
            var n = h.urlToId[e] || h.store.urlToId[e] || t;
            return n
        }, h.getLastSavedState = function () {
            return h.savedStates[h.savedStates.length - 1] || t
        }, h.getLastStoredState = function () {
            return h.storedStates[h.storedStates.length - 1] || t
        }, h.hasUrlDuplicate = function (e) {
            var t = !1, n;
            return n = h.extractState(e.url), t = n && n.id !== e.id, t
        }, h.storeState = function (e) {
            return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
        }, h.isLastSavedState = function (e) {
            var t = !1, n, r, i;
            return h.savedStates.length && (n = e.id, r = h.getLastSavedState(), i = r.id, t = n === i), t
        }, h.saveState = function (e) {
            return h.isLastSavedState(e) ? !1 : (h.savedStates.push(h.cloneObject(e)), !0)
        }, h.getStateByIndex = function (e) {
            var t = null;
            return typeof e == "undefined" ? t = h.savedStates[h.savedStates.length - 1] : e < 0 ? t = h.savedStates[h.savedStates.length + e] : t = h.savedStates[e], t
        }, h.getCurrentIndex = function () {
            var e = null;
            return h.savedStates.length < 1 ? e = 0 : e = h.savedStates.length - 1, e
        }, h.getHash = function (e) {
            var t = h.getLocationHref(e), n;
            return n = h.getHashByUrl(t), n
        }, h.unescapeHash = function (e) {
            var t = h.normalizeHash(e);
            return t = decodeURIComponent(t), t
        }, h.normalizeHash = function (e) {
            var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
            return t
        }, h.setHash = function (e, t) {
            var n, i;
            return t !== !1 && h.busy() ? (h.pushQueue({scope: h, callback: h.setHash, args: arguments, queue: t}), !1) : (h.busy(!0), n = h.extractState(e, !0), n && !h.emulated.pushState ? h.pushState(n.data, n.title, n.url, !1) : h.getHash() !== e && (h.bugs.setHash ? (i = h.getPageUrl(), h.pushState(null, null, i + "#" + e, !1)) : r.location.hash = e), h)
        }, h.escapeHash = function (t) {
            var n = h.normalizeHash(t);
            return n = e.encodeURIComponent(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
        }, h.getHashByUrl = function (e) {
            var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
            return t = h.unescapeHash(t), t
        }, h.setTitle = function (e) {
            var t = e.title, n;
            t || (n = h.getStateByIndex(0), n && n.url === e.url && (t = n.title || h.options.initialTitle));
            try {
                r.getElementsByTagName("title")[0].innerHTML = t.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
            } catch (i) {
            }
            return r.title = t, h
        }, h.queues = [], h.busy = function (e) {
            typeof e != "undefined" ? h.busy.flag = e : typeof h.busy.flag == "undefined" && (h.busy.flag = !1);
            if (!h.busy.flag) {
                u(h.busy.timeout);
                var t = function () {
                    var e, n, r;
                    if (h.busy.flag)return;
                    for (e = h.queues.length - 1; e >= 0; --e) {
                        n = h.queues[e];
                        if (n.length === 0)continue;
                        r = n.shift(), h.fireQueueItem(r), h.busy.timeout = o(t, h.options.busyDelay)
                    }
                };
                h.busy.timeout = o(t, h.options.busyDelay)
            }
            return h.busy.flag
        }, h.busy.flag = !1, h.fireQueueItem = function (e) {
            return e.callback.apply(e.scope || h, e.args || [])
        }, h.pushQueue = function (e) {
            return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
        }, h.queue = function (e, t) {
            return typeof e == "function" && (e = {callback: e}), typeof t != "undefined" && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
        }, h.clearQueue = function () {
            return h.busy.flag = !1, h.queues = [], h
        }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function () {
            return h.stateChanged = !0, h.doubleCheckClear(), h
        }, h.doubleCheckClear = function () {
            return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !1), h
        }, h.doubleCheck = function (e) {
            return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function () {
                return h.doubleCheckClear(), h.stateChanged || e(), !0
            }, h.options.doubleCheckInterval)), h
        }, h.safariStatePoll = function () {
            var t = h.extractState(h.getLocationHref()), n;
            if (!h.isLastSavedState(t))return n = t, n || (n = h.createStateObject()), h.Adapter.trigger(e, "popstate"), h;
            return
        }, h.back = function (e) {
            return e !== !1 && h.busy() ? (h.pushQueue({scope: h, callback: h.back, args: arguments, queue: e}), !1) : (h.busy(!0), h.doubleCheck(function () {
                h.back(!1)
            }), p.go(-1), !0)
        }, h.forward = function (e) {
            return e !== !1 && h.busy() ? (h.pushQueue({scope: h, callback: h.forward, args: arguments, queue: e}), !1) : (h.busy(!0), h.doubleCheck(function () {
                h.forward(!1)
            }), p.go(1), !0)
        }, h.go = function (e, t) {
            var n;
            if (e > 0)for (n = 1; n <= e; ++n)h.forward(t); else {
                if (!(e < 0))throw new Error("History.go: History.go requires a positive or negative integer passed.");
                for (n = -1; n >= e; --n)h.back(t)
            }
            return h
        };
        if (h.emulated.pushState) {
            var v = function () {
            };
            h.pushState = h.pushState || v, h.replaceState = h.replaceState || v
        } else h.onPopState = function (t, n) {
            var r = !1, i = !1, s, o;
            return h.doubleCheckComplete(), s = h.getHash(), s ? (o = h.extractState(s || h.getLocationHref(), !0), o ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (r = h.Adapter.extractEventData("state", t, n) || !1, r ? i = h.getStateById(r) : h.expectedStateId ? i = h.getStateById(h.expectedStateId) : i = h.extractState(h.getLocationHref()), i || (i = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(i) ? (h.busy(!1), !1) : (h.storeState(i), h.saveState(i), h.setTitle(i), h.Adapter.trigger(e, "statechange"), h.busy(!1), !0))
        }, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState = function (t, n, r, i) {
            if (h.getHashByUrl(r) && h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (i !== !1 && h.busy())return h.pushQueue({scope: h, callback: h.pushState, args: arguments, queue: i}), !1;
            h.busy(!0);
            var s = h.createStateObject(t, n, r);
            return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.pushState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
        }, h.replaceState = function (t, n, r, i) {
            if (h.getHashByUrl(r) && h.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
            if (i !== !1 && h.busy())return h.pushQueue({scope: h, callback: h.replaceState, args: arguments, queue: i}), !1;
            h.busy(!0);
            var s = h.createStateObject(t, n, r);
            return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.replaceState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
        };
        if (s) {
            try {
                h.store = l.parse(s.getItem("History.store")) || {}
            } catch (m) {
                h.store = {}
            }
            h.normalizeStore()
        } else h.store = {}, h.normalizeStore();
        h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), s && (h.onUnload = function () {
            var e, t, n;
            try {
                e = l.parse(s.getItem("History.store")) || {}
            } catch (r) {
                e = {}
            }
            e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};
            for (t in h.idToState) {
                if (!h.idToState.hasOwnProperty(t))continue;
                e.idToState[t] = h.idToState[t]
            }
            for (t in h.urlToId) {
                if (!h.urlToId.hasOwnProperty(t))continue;
                e.urlToId[t] = h.urlToId[t]
            }
            for (t in h.stateToId) {
                if (!h.stateToId.hasOwnProperty(t))continue;
                e.stateToId[t] = h.stateToId[t]
            }
            h.store = e, h.normalizeStore(), n = l.stringify(e);
            try {
                s.setItem("History.store", n)
            } catch (i) {
                if (i.code !== DOMException.QUOTA_EXCEEDED_ERR)throw i;
                s.length && (s.removeItem("History.store"), s.setItem("History.store", n))
            }
        }, h.intervalList.push(a(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload));
        if (!h.emulated.pushState) {
            h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval));
            if (i.vendor === "Apple Computer, Inc." || (i.appCodeName || "") === "Mozilla")h.Adapter.bind(e, "hashchange", function () {
                h.Adapter.trigger(e, "popstate")
            }), h.getHash() && h.Adapter.onDomLoad(function () {
                h.Adapter.trigger(e, "hashchange")
            })
        }
    }, (!h.options || !h.options.delayInit) && h.init()
}(window)(function () {
    var e = /\blang(?:uage)?-(?!\*)(\w+)\b/i, t = self.Prism = {util: {type: function (e) {
        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
    }, clone: function (e) {
        var n = t.util.type(e);
        switch (n) {
            case"Object":
                var r = {};
                for (var i in e)e.hasOwnProperty(i) && (r[i] = t.util.clone(e[i]));
                return r;
            case"Array":
                return e.slice()
        }
        return e
    }}, languages: {extend: function (e, n) {
        var r = t.util.clone(t.languages[e]);
        for (var i in n)r[i] = n[i];
        return r
    }, insertBefore: function (e, n, r, i) {
        i = i || t.languages;
        var s = i[e], o = {};
        for (var u in s)if (s.hasOwnProperty(u)) {
            if (u == n)for (var a in r)r.hasOwnProperty(a) && (o[a] = r[a]);
            o[u] = s[u]
        }
        return i[e] = o
    }, DFS: function (e, n) {
        for (var r in e) {
            n.call(e, r, e[r]);
            t.util.type(e) === "Object" && t.languages.DFS(e[r], n)
        }
    }}, highlightAll: function (e, n) {
        var r = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');
        for (var i = 0, s; s = r[i++];)t.highlightElement(s, e === !0, n)
    }, highlightElement: function (r, i, s) {
        var o, u, a = r;
        while (a && !e.test(a.className))a = a.parentNode;
        if (a) {
            o = (a.className.match(e) || [, ""])[1];
            u = t.languages[o]
        }
        if (!u)return;
        r.className = r.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o;
        a = r.parentNode;
        /pre/i.test(a.nodeName) && (a.className = a.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o);
        var f = r.textContent;
        if (!f)return;
        f = f.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        var l = {element: r, language: o, grammar: u, code: f};
        t.hooks.run("before-highlight", l);
        if (i && self.Worker) {
            var c = new Worker(t.filename);
            c.onmessage = function (e) {
                l.highlightedCode = n.stringify(JSON.parse(e.data), o);
                t.hooks.run("before-insert", l);
                l.element.innerHTML = l.highlightedCode;
                s && s.call(l.element);
                t.hooks.run("after-highlight", l)
            };
            c.postMessage(JSON.stringify({language: l.language, code: l.code}))
        } else {
            l.highlightedCode = t.highlight(l.code, l.grammar, l.language);
            t.hooks.run("before-insert", l);
            l.element.innerHTML = l.highlightedCode;
            s && s.call(r);
            t.hooks.run("after-highlight", l)
        }
    }, highlight: function (e, r, i) {
        return n.stringify(t.tokenize(e, r), i)
    }, tokenize: function (e, n, r) {
        var i = t.Token, s = [e], o = n.rest;
        if (o) {
            for (var u in o)n[u] = o[u];
            delete n.rest
        }
        e:for (var u in n) {
            if (!n.hasOwnProperty(u) || !n[u])continue;
            var a = n[u], f = a.inside, l = !!a.lookbehind, c = 0;
            a = a.pattern || a;
            for (var h = 0; h < s.length; h++) {
                var p = s[h];
                if (s.length > e.length)break e;
                if (p instanceof i)continue;
                a.lastIndex = 0;
                var d = a.exec(p);
                if (d) {
                    l && (c = d[1].length);
                    var v = d.index - 1 + c, d = d[0].slice(c), m = d.length, g = v + m, y = p.slice(0, v + 1), b = p.slice(g + 1), w = [h, 1];
                    y && w.push(y);
                    var E = new i(u, f ? t.tokenize(d, f) : d);
                    w.push(E);
                    b && w.push(b);
                    Array.prototype.splice.apply(s, w)
                }
            }
        }
        return s
    }, hooks: {all: {}, add: function (e, n) {
        var r = t.hooks.all;
        r[e] = r[e] || [];
        r[e].push(n)
    }, run: function (e, n) {
        var r = t.hooks.all[e];
        if (!r || !r.length)return;
        for (var i = 0, s; s = r[i++];)s(n)
    }}}, n = t.Token = function (e, t) {
        this.type = e;
        this.content = t
    };
    n.stringify = function (e, r, i) {
        if (typeof e == "string")return e;
        if (Object.prototype.toString.call(e) == "[object Array]")return e.map(function (t) {
            return n.stringify(t, r, e)
        }).join("");
        var s = {type: e.type, content: n.stringify(e.content, r, i), tag: "span", classes: ["token", e.type], attributes: {}, language: r, parent: i};
        s.type == "comment" && (s.attributes.spellcheck = "true");
        t.hooks.run("wrap", s);
        var o = "";
        for (var u in s.attributes)o += u + '="' + (s.attributes[u] || "") + '"';
        return"<" + s.tag + ' class="' + s.classes.join(" ") + '" ' + o + ">" + s.content + "</" + s.tag + ">"
    };
    if (!self.document) {
        self.addEventListener("message", function (e) {
            var n = JSON.parse(e.data), r = n.language, i = n.code;
            self.postMessage(JSON.stringify(t.tokenize(i, t.languages[r])));
            self.close()
        }, !1);
        return
    }
    var r = document.getElementsByTagName("script");
    r = r[r.length - 1];
    if (r) {
        t.filename = r.src;
        document.addEventListener && !r.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", t.highlightAll)
    }
})();
;
Prism.languages.css = {comment: /\/\*[\w\W]*?\*\//g, atrule: {pattern: /@[\w-]+?.*?(;|(?=\s*{))/gi, inside: {punctuation: /[;:]/g}}, url: /url\((["']?).*?\1\)/gi, selector: /[^\{\}\s][^\{\};]*(?=\s*\{)/g, property: /(\b|\B)[\w-]+(?=\s*:)/ig, string: /("|')(\\?.)*?\1/g, important: /\B!important\b/gi, ignore: /&(lt|gt|amp);/gi, punctuation: /[\{\};:]/g};
Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {style: {pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/ig, inside: {tag: {pattern: /(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/ig, inside: Prism.languages.markup.tag.inside}, rest: Prism.languages.css}}});
;
Prism.languages.css.selector = {pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/g, inside: {"pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/g, "pseudo-class": /:[-\w]+(?:\(.*\))?/g, "class": /\.[-:\.\w]+/g, id: /#[-:\.\w]+/g}};
Prism.languages.insertBefore("css", "ignore", {hexcode: /#[\da-f]{3,6}/gi, entity: /\\[\da-f]{1,8}/gi, number: /[\d%\.]+/g, "function": /(attr|calc|cross-fade|cycle|element|hsla?|image|lang|linear-gradient|matrix3d|matrix|perspective|radial-gradient|repeating-linear-gradient|repeating-radial-gradient|rgba?|rotatex|rotatey|rotatez|rotate3d|rotate|scalex|scaley|scalez|scale3d|scale|skewx|skewy|skew|steps|translatex|translatey|translatez|translate3d|translate|url|var)/ig});
;
Prism.languages.clike = {comment: {pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g, lookbehind: !0}, string: /("|')(\\?.)*?\1/g, "class-name": {pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/ig, lookbehind: !0, inside: {punctuation: /(\.|\\)/}}, keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g, "boolean": /\b(true|false)\b/g, "function": {pattern: /[a-z0-9_]+\(/ig, inside: {punctuation: /\(/}}, number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g, operator: /[-+]{1,2}|!|&lt;=?|>=?|={1,3}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g, ignore: /&(lt|gt|amp);/gi, punctuation: /[{}[\];(),.:]/g};
;
Prism.languages.javascript = Prism.languages.extend("clike", {keyword: /\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|throw|catch|finally|null|break|continue)\b/g, number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g});
Prism.languages.insertBefore("javascript", "keyword", {regex: {pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g, lookbehind: !0}});
Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {script: {pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig, inside: {tag: {pattern: /(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/ig, inside: Prism.languages.markup.tag.inside}, rest: Prism.languages.javascript}}});
;
Prism.languages.php = Prism.languages.extend("clike", {keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|extends|private|protected|parent|static|throw|null|echo|print|trait|namespace|use|final|yield|goto|instanceof|finally|try|catch)\b/ig, constant: /\b[A-Z0-9_]{2,}\b/g});
Prism.languages.insertBefore("php", "keyword", {delimiter: /(\?>|&lt;\?php|&lt;\?)/ig, variable: /(\$\w+)\b/ig, "package": {pattern: /(\\|namespace\s+|use\s+)[\w\\]+/g, lookbehind: !0, inside: {punctuation: /\\/}}});
Prism.languages.insertBefore("php", "operator", {property: {pattern: /(->)[\w]+/g, lookbehind: !0}});
Prism.languages.markup && (Prism.hooks.add("before-highlight", function (a) {
    "php" === a.language && (a.tokenStack = [], a.code = a.code.replace(/(?:&lt;\?php|&lt;\?|<\?php|<\?)[\w\W]*?(?:\?&gt;|\?>)/ig, function (b) {
        a.tokenStack.push(b);
        return"{{{PHP" + a.tokenStack.length + "}}}"
    }))
}), Prism.hooks.add("after-highlight", function (a) {
    if ("php" === a.language) {
        for (var b = 0, c; c = a.tokenStack[b]; b++)a.highlightedCode = a.highlightedCode.replace("{{{PHP" + (b + 1) + "}}}", Prism.highlight(c, a.grammar, "php"));
        a.element.innerHTML = a.highlightedCode
    }
}), Prism.hooks.add("wrap", function (a) {
    "php" === a.language && "markup" === a.type && (a.content = a.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'))
}), Prism.languages.insertBefore("php", "comment", {markup: {pattern: /(&lt;|<)[^?]\/?(.*?)(>|&gt;)/g, inside: Prism.languages.markup}, php: /\{\{\{PHP[0-9]+\}\}\}/g}));
;
/*------------------------------------------------------------------
 Copyright (c) 2013 Viktor Bezdek - Released under The MIT License.

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
 ----------------------------------------------------------------*/

jQuery(function ($) {
	var History = window.History;
	var siteURL = location.host;
	var internalLinksQuery = "a[href^='" + siteURL + "'], a[href^='/'], a[href^='./'], a[href^='../'], a[href^='#']";
	var $window = $(window);
	var $mainContent = $('#main-content');
	var $internalLinks = $(internalLinksQuery);
	var $relatedPostsContainer = $('#related-posts-container');
	var $logo = $('#site-head-content');
	var $header = $('#site-head');

    // ios < 7 fixed position bug
    var ios = iOSversion();
    if(ios && ios[0] <= 6) $('body').addClass('no-fixed-elements')

	// logo position
	$window.scroll(function () {
		var logoHeight = $logo.height() + 40;
		var headerHeight = $header.height() - $window.scrollTop();

		// if we need to position logo
		if (headerHeight > logoHeight) {
			var marginTop = (headerHeight / 2 - logoHeight / 2) + 'px';
			$logo.parent().css({paddingTop: marginTop});
		}

		// if header is completely gone
		var $secondaryTitle = $('#secondaryTitle');
		if (headerHeight <= 0) {
			if (!$secondaryTitle.hasClass('displayed')) {
				$secondaryTitle.addClass('displayed');
				$secondaryTitle.animate({top: '0px'}, 500);
			}
		}
		// if not
		else {
			if ($secondaryTitle.hasClass('displayed')) {
				$secondaryTitle.removeClass('displayed');
				$secondaryTitle.animate({top: '-200px'}, 500);
			}
		}

	});

	// create second header
	var siteName = $('#site-head h1').text().replace(/\s+/g, ' ');
	var slogan = $('#site-head h2').text().replace(/\s+/g, ' ');
	var header = $('<nav id="secondaryTitle"><div class="siteInfo"><h1>' + siteName + '</h1><h2>' + slogan + '</h2></div><a href="#top" id="scroll-to-top"></a></nav>');
	$('body').prepend(header);

	// scroll to top button
	$('#scroll-to-top').click(function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 200);
	});

	// resize does equalization of post titles
	$window.resize(function () {
		var articles = $('.post');//.find('h2.page-title');
		for (var x = 0; x < articles.length; x += 2) {
			var ea = $(articles[x]).find('.post-title');
			var oa = $(articles[x + 1]).find('.post-title');

			ea.css({height: 'auto', paddingTop: 0});
			oa.css({height: 'auto', paddingTop: 0});

			var eh = ea.innerHeight(), oh = oa.innerHeight();
			var th = Math.max(eh, oh) + 'px';
			var pt = Math.abs(eh - oh) / 2 + 'px';
			ea.css({height: th, paddingTop: eh < oh ? pt : 0});
			oa.css({height: th, paddingTop: eh > oh ? pt : 0});
		}
		$window.trigger('scroll');
	});

	// if on home, saves related posts to local storage and removes the temporary element
	// if on post, displays related posts if available
	if ($relatedPostsContainer.length > 0) {
		var rp = $relatedPostsContainer.clone();
		$relatedPostsContainer.remove();
		localStorage.setItem('relatedPosts', JSON.stringify(rp.html()));
	} else {
		displayRelatedPosts();
	}

	// if history is available we can load content asynchronously
	// otherwise do it the usual way to keep correct url in path
	if (History.enabled) {

		// listens to history change and loads content
		History.Adapter.bind(window, 'statechange', function () {
			var state = History.getState();
			$.ajax({
				url: state.url + ' #main-content',
				cache: true,
				contentType: 'html',
				dataFilter: dataFilter,
				success: function (data, status) {
					switch (status) {
						case 'error':
							alert('Something terrible has happened. Sky is falling on your head.');
							break;
						case 'success':
							$mainContent
								.html(data)
								.find(internalLinksQuery)
								.not('#more-posts')
								.click(pushHistoryState);

							$mainContent.find('#more-posts').click(loadMorePosts);

							Prism.highlightElement();
							scrollToContent();
							displayRelatedPosts();
							break;
					}
				}
			});
		});

		// override all internal clicks and updates content asynchronously
		$internalLinks.not('#more-posts').click(pushHistoryState);

	}

	$('#more-posts').click(loadMorePosts);

	// loads more posts to the page and
	// applies various transformations
	function loadMorePosts(e) {
		e.preventDefault();
		var $more = $('#more-posts');
		var url = $more.attr('href');
		$more.parent().remove();
		$.ajax({
			url: url + ' #main-content',
			cache: true,
			contentType: 'html',
			dataFilter: dataFilter,
			success: function (data, status) {
				switch (status) {
					case 'error':
						alert('Something terrible has happened. Sky is falling on your head.');
						break;
					case 'success':
						$mainContent.append(data);
						$mainContent.find('#more-posts');

						break;
				}
			}
		});
	}

	// if on home, updates related posts in local storage
	// if on posts, displays related posts if available
	function displayRelatedPosts() {
		var related = JSON.parse(localStorage.getItem('relatedPosts'));
		var $nav = $('nav.related-posts ul');
		if (related.length > 0 && $nav.length > 0) {
			$nav.html(related);
		} else {
			$('nav.related-posts').remove();
		}
	}

	// scrolls down to start of content if marker is available
	function scrollToContent() {
		var contentAnchor = $("span[name='post-content']");
		if (contentAnchor.length > 0) {
			$('html,body').animate({scrollTop: contentAnchor.offset().top - 30}, 'slow');
		} else {
			$('html,body').animate({scrollTop: 0}, 'slow');
		}
	}

	// removes all css and style tags from loaded content to prevent reinitialization
	function dataFilter(data, type) {
		type = type || 'text';
		if (type == 'html' || type == 'text') {
			data = data.replace(/<link.*?\/>/gi, '');
			data = data.replace(/<script.*?>([\w\W]*?)<\/script>/gi, '');
			data = $(data).filter('#main-content').children().parent();
			return data.html();
		}

		return data;
	}

	// pushes state to history
	function pushHistoryState(e) {
		e.preventDefault();
		var url = $(this).attr('href');
		var title = $(this).attr('title') || null;
		History.pushState({}, title, url);
	};

	// updates layout after init
	setTimeout(function () {
		$window.trigger('scroll');
		$window.trigger('resize');
	}, 200);
});

// ios version detection helper (for annoying fixed pos bug in iOS < 7)
// source: http://bit.ly/1c7F26O
function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
    }
}

// Google Analytics
/*
if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {

 (function (i, s, o, g, r, a, m) {
 i['GoogleAnalyticsObject'] = r;
 i[r] = i[r] || function () {
 (i[r].q = i[r].q || []).push(arguments)
 }, i[r].l = 1 * new Date();
 a = s.createElement(o),
 m = s.getElementsByTagName(o)[0];
 a.async = 1;
 a.src = g;
 m.parentNode.insertBefore(a, m)
 })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

 ga('create', 'UA-xxxx');
 ga('send', 'pageview');
 }
  */