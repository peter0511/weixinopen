"use strict";function init(){var t,e=require("../../lib/react.js"),a=(require("../../cssStr/cssStr.js"),require("../../actions/webviewActions.js")),n=require("../../stores/windowStores.js"),o=require("../../actions/windowActions.js"),s=require("./urlcomplete.js"),i=e.createClass({displayName:"Urlbar",getInitialState:function(){return{webviewID:0,url:"",autoIndex:0,autocomplete:[]}},loadUrl:function(t){t=t||this.getCurrentUrl(),t=t.trim();var e=this.state.webviewID;"about:blank"===t?a.setWebviewAction(e,{act:"reLoad"}):(o.setAutoComplete(t),a.getA8keyWebview(e,{url:t,isSync:!0,from:"urlbar"})),this.setState({autocomplete:[]})},getAutoComplete:function(t){var e=t.trim(),a=/^http:\/\//.test(e),o=/^https:\/\//.test(e),s=a||o,i=[],r=n.getAutoComplete();return r.forEach(function(t){e.length>4&&(s?/^https?:\/\//.test(t)||(t=a?"http://"+t:"https://"+t):t=t.replace(/^https?:\/\//,"")),0===t.indexOf(e)&&i.indexOf(t)===-1&&i.push(t)}),i},handleKeyUp:function(t){var e=t.target,a=t.keyCode;this.state.webviewID;if(13===a)e.selectionStart=e.value.length,this.loadUrl();else if(40===a||38===a){var n=this.state.autoIndex,o=this.getCurrentUrl(),s=38===a;if(s)n--,n=n<=0?0:n;else{var i=this.state.autocomplete.length;n++,n=n>=i?i-1:n}this.setState({autoIndex:n,url:o},function(){setTimeout(function(){e.selectionStart=e.value.length},17)})}else 8===a&&(e.dataset.changeFrom="backspace")},handleChange:function(t){var e=this,a=t.target,n=a.value,o="backspace"===a.dataset.changeFrom,s=this.getAutoComplete(n);this.state.webviewID;if(o)return a.dataset.changeFrom="",void this.setState({url:n,autocomplete:s});var i=s[0]&&!o?s[0]:n;this.setState({url:i,autocomplete:s},function(){var t=i.indexOf(n)+n.length;t!==i.length&&(e.refs.urlinput.selectionStart=t,e.refs.urlinput.selectionEnd=i.length)})},handleBlur:function(){var e=this;t=setTimeout(function(){e.setState({autocomplete:[]})},100)},handleFocus:function(){var t=this.getCurrentUrl(),e=this.getAutoComplete(t);this.setState({autocomplete:e})},handleOnClick:function(){this.loadUrl()},getCurrentUrl:function(){return this.state.url},autoClick:function(e){clearTimeout(t);var a=e.currentTarget,n=a.dataset,o=n.index,s=this.state.autocomplete[o];this.setState({url:s,autocomplete:[]}),this.loadUrl(s)},_changeWebviewID:function(t){this.setState({webviewID:t})},_changeUrl:function(t){0===t.indexOf("chrome-extension:")&&(t="about:blank"),this.setState({url:t})},_focusAddressbar:function(t){this.refs.urlinput.select(),this.refs.urlinput.focus()},componentDidMount:function(){n.on("CHANGE_WEBVIEW_URL",this._changeUrl),n.on("FOCUS_ADDRESSBAR",this._focusAddressbar)},componentWillUnmount:function(){n.removeListener("CHANGE_WEBVIEW_URL",this._changeUrl),n.removeListener("FOCUS_ADDRESSBAR",this._focusAddressbar)},render:function(){var t=(this.state.webviewID,this.state.url);return e.createElement("div",{className:"toolbar-location"},e.createElement("input",{className:"toolbar-location-input",type:"text",ref:"urlinput",onKeyDown:this.handleKeyUp,onBlur:this.handleBlur,onFocus:this.handleFocus,value:t,onChange:this.handleChange}),e.createElement("div",{className:"toolbar-location-refresh"},e.createElement("i",{className:"toolbar-location-refresh-icon"})),e.createElement("div",{className:"toolbar-location-history"},e.createElement("i",{className:"toolbar-location-history-icon"})),e.createElement(s,{autoClick:this.autoClick,autocomplete:this.state.autocomplete,autoIndex:this.state.autoIndex}))}});_exports=i}var _exports;init(),module.exports=_exports;