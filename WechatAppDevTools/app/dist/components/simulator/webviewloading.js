"use strict";

function init() {
    var t, e, a = require("../../lib/react.js"),
        s = require("../../stores/webviewStores.js"),
        i = a.createClass({
            displayName: "Webviewloading",
            getInitialState: function() {
                return { webviewID: parseInt(this.props.webviewID), rate: 0 }
            },
            _upWebviewStatus: function(a, s) {
                var i = this,
                    r = s.loading;
                if ("start" === r) {
                    clearTimeout(t);
                    var n = parseInt(100 * Math.random());
                    this.state.rate = n, this.setState(this.state), e = setTimeout(function() { i.state.rate < 50 && (i.state.rate += 5), i.state.rate < 75 && (i.state.rate += 2), i.state.rate < 90 && (i.state.rate += 1), i.setState(i.state) }, 200)
                } else "stop" === r && (clearTimeout(t), clearTimeout(e), this.state.rate = 100, this.setState(this.state), t = setTimeout(function() { i.state.rate = 0, i.setState(i.state) }, 200))
            },
            _cleanWebview: function(t) { this.setState({ rate: 0 }) },
            componentDidMount: function() {
                var t = this.state.webviewID;
                s.on("UP_WEBVIEW_STATUS_" + t, this._upWebviewStatus), s.on("CLEAN_WEBVIEW_" + t, this._cleanWebview)
            },
            componentWillUnmount: function() {
                var a = this.state.webviewID;
                clearTimeout(t), clearTimeout(e), s.removeListener("UP_WEBVIEW_STATUS_" + a, this._upWebviewStatus), s.removeListener("CLEAN_WEBVIEW_" + a, this._cleanWebview)
            },
            render: function() {
                var t = { width: this.state.rate + "%" };
                return 0 === this.state.rate && (t.display = "none"), a.createElement("div", { className: "simulator-bd-loading", style: t })
            }
        });
    _exports = i
}
var _exports;
init(), module.exports = _exports;
