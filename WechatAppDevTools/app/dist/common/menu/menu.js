"use strict";function init(){var e=require("../actions/actions.js"),n=new nw.Menu({type:"menubar"}),i="darwin"===process.platform?"cmd":"ctrl",t=new nw.Menu;t.append(new nw.MenuItem({label:"项目重建",key:"B",modifiers:i,click:function(){e.reBuild()}})),t.append(new nw.MenuItem({label:"刷新",key:"R",modifiers:i,click:function(){e.reload()}})),t.append(new nw.MenuItem({label:"后退",key:"Left",modifiers:i,click:function(){e.goback()}})),t.append(new nw.MenuItem({label:"前进",key:"right",modifiers:i,click:function(){e.goforward()}})),t.append(new nw.MenuItem({label:"选中地址栏",key:"L",modifiers:i,click:function(){e.focusAddressBar()}})),t.append(new nw.MenuItem({type:"separator"})),t.append(new nw.MenuItem({label:"设置",click:function(){e.showSetting()}}));var a=new nw.Menu;a.append(new nw.MenuItem({label:"关于",key:"F1",click:function(){e.showAbout()}})),"darwin"===process.platform&&n.createMacBuiltin(nw.App.manifest.name,{hideEdit:!1,hideWindow:!0}),n.append(new nw.MenuItem({label:"动作",submenu:t})),n.append(new nw.MenuItem({label:"关于",submenu:a})),_export=n}var _export;init(),module.exports=_export;