"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[742],{3227:(e,s,o)=>{o.d(s,{Z:()=>c});var t=o(3645),n=o.n(t),r=o(1667),a=o.n(r),i=o(8997),l=n()((function(e){return e[1]})),d=a()(i.Z);l.push([e.id,".image[data-v-3fa81f5c]{background-image:url("+d+")}",""]);const c=l},8997:(e,s,o)=>{o.d(s,{Z:()=>t});const t="/images/bg-7.jpg?b9b5f30bc68276636761e0785d52c234"},1742:(e,s,o)=>{o.r(s),o.d(s,{default:()=>d});var t=o(9680);const n={props:{errors:{type:Object,required:!1,default:null},token:{required:!1,type:String,default:null}},mounted:function(){this.form.token=this.token},methods:{submit:function(){var e=this;t.Inertia.post("/auth/reset-password",this.form,{onStart:function(){e.loading=!0},onFinish:function(){e.loading=!1}})}},data:function(){return{loading:!1,ispassword:!0,form:{email:null,password:null,password_confirmation:null,token:null}}}};var r=o(3379),a=o.n(r),i=o(3227),l={insert:"head",singleton:!1};a()(i.Z,l);i.Z.locals;const d=(0,o(1900).Z)(n,(function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("v-app",[o("v-main",{staticClass:"image"},[o("v-container",{staticClass:"pa-0 fill-height"},[o("v-row",[o("v-col",[o("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500px",loading:e.loading,color:"background",disabled:e.loading}},[o("v-card-text",{staticClass:"display-1 text-center"},[e._v("\n              Reset Password\n            ")]),e._v(" "),o("v-card-text",[o("v-form",[o("v-text-field",{attrs:{"prepend-inner-icon":"mdi-email",type:"text",outlined:"",dense:"","error-messages":e.errors.email,label:"E-mail"},model:{value:e.form.email,callback:function(s){e.$set(e.form,"email",s)},expression:"form.email"}}),e._v(" "),o("v-text-field",{attrs:{"prepend-inner-icon":"mdi-lock",type:e.ispassword?"password":"text",outlined:"",dense:"","error-messages":e.errors.password,"append-icon":e.ispassword?"mdi-eye":"mdi-eye-off",label:"New password"},on:{"click:append":function(s){e.ispassword=!e.ispassword}},model:{value:e.form.password,callback:function(s){e.$set(e.form,"password",s)},expression:"form.password"}}),e._v(" "),o("v-text-field",{attrs:{"prepend-inner-icon":"mdi-lock",outlined:"",dense:"",type:"password","error-messages":e.errors.password_confirmation,label:"Confirm password"},model:{value:e.form.password_confirmation,callback:function(s){e.$set(e.form,"password_confirmation",s)},expression:"form.password_confirmation"}})],1),e._v(" "),o("v-btn",{staticClass:"white--text",attrs:{disabled:e.loading,elevation:"",block:"",color:"indigo"},on:{click:function(s){return e.submit()},keyup:function(s){return e.submit()}}},[e._v("Reset Password")])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"3fa81f5c",null).exports}}]);