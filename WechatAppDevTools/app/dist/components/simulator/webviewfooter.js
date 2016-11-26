"use strict";

function init() {
    var e = require("../../lib/react.js"),
        a = require("../../cssStr/cssStr.js"),
        t = e.createClass({
            displayName: "WebviewFooter",
            getInitialState: function() {
                return { webviewID: parseInt(this.props.webviewID) }
            },
            handleOnClick: function(e) {
                var a = e.currentTarget,
                    t = a.dataset,
                    s = t.type;
                if ("share" === s) {
                    var i = t.name;
                    this.props.getSimulatorActions("S_SET_ACTION", this.state.webviewID, { act: "sendMsg", sdkName: i, res: {} })
                } else "reload" === s ? this.props.getSimulatorActions("S_SET_ACTION", this.state.webviewID, { act: "reLoad" }) : "open" === s && this.props.getSimulatorActions("S_SET_ACTION", this.state.webviewID, { act: "open" });
                this.props.showFooter(!1)
            },
            render: function() {
                var t = this.props.show ? {} : a.displayNone;
                return e.createElement("div", { style: t, className: "simulator-actionsheet-wrapper" }, e.createElement("div", { className: "simulator-actionsheet-mask" }), e.createElement("div", { className: "simulator-actionsheet" }, e.createElement("div", { className: "simulator-actionsheet-bd" }, e.createElement("a", { onClick: this.handleOnClick, "data-type": "share", "data-name": "menu:share:appmessage", href: "javascript:;", className: "simulator-actionsheet-menu" }, e.createElement("i", { className: "simulator-actionsheet-menu-icon simulator-actionsheet-menu-icon-share2friend" }), e.createElement("label", { className: "simulator-actionsheet-menu-label" }, "发送给朋友")), e.createElement("a", { onClick: this.handleOnClick, "data-type": "share", "data-name": "menu:share:timeline", href: "javascript:;", className: "simulator-actionsheet-menu" }, e.createElement("i", { className: "simulator-actionsheet-menu-icon simulator-actionsheet-menu-icon-share2moment" }), e.createElement("label", { className: "simulator-actionsheet-menu-label" }, "分享到朋友圈")), e.createElement("a", { onClick: this.handleOnClick, "data-type": "open", href: "javascript:;", className: "simulator-actionsheet-menu" }, e.createElement("i", { className: "simulator-actionsheet-menu-icon simulator-actionsheet-menu-icon-safari" }), e.createElement("label", { className: "simulator-actionsheet-menu-label" }, "在浏览器打开")), e.createElement("a", { onClick: this.handleOnClick, "data-type": "reload", href: "javascript:;", className: "simulator-actionsheet-menu" }, e.createElement("i", { className: "simulator-actionsheet-menu-icon simulator-actionsheet-menu-icon-refresh" }), e.createElement("label", { className: "simulator-actionsheet-menu-label" }, "刷新"))), e.createElement("div", { onClick: this.handleOnClick, "data-type": "cancel", className: "simulator-actionsheet-ft" }, e.createElement("a", { href: "javascript:;" }, "取消"))))
            }
        });
    _exports = t
}
var _exports;
init(), module.exports = _exports;
