"use strict";

function init() {
    var e = require("../../../../modified_modules/anyproxy/proxy.js"),
        t = require("../../utils/tools.js"),
        r = require("./setAppProxy.js");
    _exports = function(o) { t.getAvailablePort(function(t) { global._port = t[0], global._weinrePort = t[1], r.set(function() { o(t[0]) }), new e.proxyServer({ type: "http", port: t[0], webPort: t[1], socketPort: t[2], webConfigPort: t[3], hostname: "127.0.0.1", interceptHttps: !0, silent: !0, disableWebInterface: !0, rule: require("./proxyRule.js") }) }, 4) }
}
var _exports;
init(), module.exports = _exports;
