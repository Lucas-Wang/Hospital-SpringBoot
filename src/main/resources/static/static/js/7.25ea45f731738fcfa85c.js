webpackJsonp([7],{"0FZS":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("jNJV"),r=a("S9KT"),o={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var c=a("VU/8")({name:"account"},o,!1,function(t){a("huxh")},"data-v-1b681aad",null).exports,s={name:"index",components:{MyHeader:n.a,MyFooter:r.a,Account:c},data:function(){return{categoriesOfAccount:["首页","我的信息","我的头像","我的记录","账号安全","实名认证","邀请注册"],categoryUrls:["home","info","avatar","record","security","validation","invite"]}},methods:{getCategoryUrl:function(t){var e=this.categoriesOfAccount.findIndex(function(e){return e===t});return this.categoryUrls[e]}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("MyHeader"),t._v(" "),a("el-main",{staticClass:"account"},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticClass:"personal-left",staticStyle:{"margin-left":"8%"},attrs:{span:3}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"background-color":"#717171","text-color":"#fff","active-text-color":"#ffd04b"}},t._l(t.categoriesOfAccount,function(e,n){return a("el-menu-item",{key:n},[a("router-link",{attrs:{to:"/account/"+t.getCategoryUrl(e)}},[a("span",{staticClass:"svg-container"},[a("svg-icon",{attrs:{"icon-class":e}})],1),t._v(" "),a("span",{staticClass:"category"},[t._v(t._s(e))])])],1)}),1)],1),t._v(" "),a("el-col",{attrs:{span:16}},[a("router-view")],1)],1)],1),t._v(" "),a("el-footer",[a("my-footer")],1)],1)},staticRenderFns:[]};var l=a("VU/8")(s,i,!1,function(t){a("VaFY")},"data-v-1d98a769",null);e.default=l.exports},VaFY:function(t,e){},huxh:function(t,e){}});
//# sourceMappingURL=7.25ea45f731738fcfa85c.js.map