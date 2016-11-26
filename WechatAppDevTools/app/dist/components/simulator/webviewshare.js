"use strict";

function init() {
    var e = require("../../lib/react.js"),
        t = require("../../cssStr/cssStr.js"),
        s = (require("../../stores/webviewStores.js"), require("../../actions/leftviewActions.js")),
        a = require("../../stores/leftviewStores.js"),
        i = e.createClass({
            displayName: "WebviewShare",
            getInitialState: function() {
                return { title: "", desc: "", imgUrl: "", sdkName: "", webviewID: parseInt(this.props.webviewID) }
            },
            _leftStatusUp: function(e, t, s) { this.setState({ show: t.showShare }) },
            componentDidMount: function() { a.on("LEFT_STATUS_UP_" + this.state.webviewID, this._leftStatusUp) },
            componentWillUnmount: function() { a.removeListener("LEFT_STATUS_UP_" + this.state.webviewID, this._leftStatusUp) },
            upLeftviewStatus: function() {
                var e = this;
                setTimeout(function() { s.upShareStatus(e.state.webviewID, e.state.show) })
            },
            handleCancel: function() { this.sendMsg("cancel") },
            handleConfirm: function() { this.sendMsg("ok") },
            sendMsg: function(e) { this.props.getSimulatorActions("S_SET_ACTION", this.state.webviewID, { act: "sendMsg", sdkName: this.state.sdkName, res: { errMsg: this.state.sdkName + ":" + e } }), this.props.showShare(!1) },
            render: function() {
                var s = this.props.shareOpt;
                return e.createElement("div", { className: "simulator-bd-share", style: this.props.show ? {} : t.displayNone }, e.createElement("div", { className: "simulator-bd-share-mask" }), e.createElement("div", { className: "simulator-bd-share-dialog" }, e.createElement("div", { style: "shareTimeline" === s.sdkName ? t.displayNone : {}, className: "simulator-bd-share-dialog-hd" }, e.createElement("strong", { className: "simulator-bd-share-dialog-title" }, s.title)), e.createElement("div", { className: "simulator-bd-share-dialog-bd" }, e.createElement("div", { className: "simulator-bd-share-dialog-cover" }, e.createElement("img", { src: s.imgUrl, alt: "" })), e.createElement("p", { className: "simulator-bd-share-dialog-desc" }, s.desc)), e.createElement("div", { className: "simulator-bd-share-dialog-ft" }, e.createElement("a", { onClick: this.handleCancel, href: "javascript:;", className: "simulator-bd-share-dialog-button-default" }, "取消"), e.createElement("a", { onClick: this.handleConfirm, href: "javascript:;", className: "simulator-bd-share-dialog-button-primary" }, "确定"))))
            }
        });
    _exports = i
}
var _exports;
init(), module.exports = _exports;
