"use strict";

function init() {
    var p = require("path"),
        e = require("mkdir-p"),
        o = p.join(nw.App.getDataPath(), "..");
    _exports = {}, _exports.WeappStorage = p.join(o, "WeappStorage"), e.sync(_exports.WeappStorage), _exports.WeappFileCache = p.join(o, "WeappFileCache"), e.sync(_exports.WeappFileCache), _exports.Weappdest = p.join(o, "Weappdest"), e.sync(_exports.Weappdest), _exports.WeappApplication = p.join(o, "WeappApplication"), e.sync(_exports.WeappApplication), _exports.WeappVendor = p.join(o, "WeappVendor"), e.sync(_exports.WeappVendor), _exports.WeappBuildCache = p.join(o, "WeappBuildCache"), e.sync(_exports.WeappBuildCache), _exports.WeappLog = p.join(o, "WeappLog"), e.sync(_exports.WeappLog), _exports.WeappProjectInfo = p.join(o, "WeappProject"), e.sync(_exports.WeappProjectInfo), _exports.ProxyCache = p.join(o, "ProxyCache"), e.sync(_exports.ProxyCache)
}
var _exports;
init(), module.exports = _exports;
