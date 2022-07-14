"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[497,295],{497:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});const a={layout:n(2295).default,props:["blogs"]};const r=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{},[n("v-row",[n("v-col",{staticClass:"display-1"},[t._v(" All Blogs ")])],1),t._v(" "),n("v-row",[n("v-col",[n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("Blog Title")]),t._v(" "),n("th",[t._v("Author")]),t._v(" "),n("th",[t._v("Created At")]),t._v(" "),n("th",[t._v("Updated At")]),t._v(" "),n("th",[t._v("Published")]),t._v(" "),n("th",[t._v("Action")])])]),t._v(" "),n("tbody",t._l(t.blogs,(function(e,a){return n("tr",{key:a},[n("td",{domProps:{textContent:t._s(e.title)}}),t._v(" "),n("td",{domProps:{textContent:t._s(e.user.name)}}),t._v(" "),n("td",[t._v("\n                "+t._s(t._f("moment")(e.created_at,"calendar"))+"\n              ")]),t._v(" "),n("td",[t._v("\n                "+t._s(t._f("moment")(e.updated_at,"calendar"))+"\n              ")]),t._v(" "),n("td",[n("v-btn",{attrs:{"x-small":"",elevation:"",rounded:"",outlined:"",color:e.published?"success":"error"}},[t._v("\n                  "+t._s(e.published?"Published":"unpublished")+"\n                ")])],1),t._v(" "),n("td",[n("Link",{attrs:{href:"/user/blog/"+e.id+"/edit"}},[n("v-btn",{attrs:{small:"",elevation:"",outlined:"",color:"primary",rounded:""}},[t._v("edit")])],1)],1)])})),0)]},proxy:!0}])})],1)],1)],1)}),[],!1,null,null,null).exports},2295:(t,e,n)=>{n.r(e),n.d(e,{default:()=>r});const a={props:["shared"],data:function(){return{drawer:!1,userLinks:[{name:"All Articles",icon:"mdi-format-align-center",link:"/user/blog"},{name:"Create Article",icon:"mdi-format-annotation-plus",link:"/user/blog/create"},{name:"My Profile",icon:"mdi-account-circle",link:"/user/my-profile"},{name:"All Users",icon:"mdi-account-multiple",link:"/admin/users"},{name:"All Tags",icon:"mdi-brightness-auto",link:"/admin/tags"}]}}};const r=(0,n(1900).Z)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{color:"drawer",permanent:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",[n("v-list-item",{},[n("v-list-item-avatar",[n("v-avatar",[n("v-img",{attrs:{src:"/images/logo.jpg"}})],1)],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[n("span",{staticClass:"white--text font-semibold text-xl"},[t._v(" Nia Media ")])])],1)],1),t._v(" "),n("v-divider",{}),t._v(" "),t._l(t.userLinks,(function(e,a){return n("v-list-item",{key:a},[n("Link",{staticClass:"white--text",attrs:{href:e.link}},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"white"},domProps:{textContent:t._s(e.icon)}})],1)],1),t._v(" "),n("v-list-item-content",[n("Link",{staticClass:"white--text no-underline",attrs:{href:e.link}},[n("v-list-item-title",{staticClass:"white--text",domProps:{textContent:t._s(e.name)}})],1)],1)],1)}))],2)],1),t._v(" "),n("v-app-bar",{attrs:{app:"","hide-on-scroll":"",color:"nav"}},[t.$vuetify.breakpoint.lgAndUp?t._e():n("v-app-bar-nav-icon",{staticClass:"white--text",on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),n("v-spacer"),t._v(" "),n("Link",{attrs:{href:"/auth/logout"}},[n("v-btn",{attrs:{elevation:"",icon:"",color:""}},[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-logout")])],1)],1),t._v(" "),n("v-avatar",[n("img",{attrs:{src:t.shared.user.auth.avatarPath,alt:""}})])],1),t._v(" "),n("v-main",[t._t("default")],2),t._v(" "),n("v-footer",{attrs:{app:""}})],1)}),[],!1,null,null,null).exports}}]);