import{N as g}from"./Navigation.6b2a536e.js";import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{f as l,o as n,c as a,a as s,n as v,i,t as r,F as b,r as k,h as A,w as x,g as o}from"./index.caf02841.js";import"./DarkMode.4484884e.js";const y={props:{icon:String,title:String,description:String,action:Array}},N={class:"alert"},w={class:"content"},$={class:"title"},C={class:"description"},S={key:0,class:"flex-none"},T={class:"btn btn-sm"};function B(_,m,e,h,u,f){const c=l("router-link");return n(),a("div",N,[s("div",w,[e.icon?(n(),a("i",{key:0,class:v(["mr-2",e.icon])},null,2)):i("",!0),s("div",null,[s("p",$,r(e.title),1),s("div",C,r(e.description),1)])]),e.action&&Array.isArray(e.action)&&e.action.length?(n(),a("div",S,[(n(!0),a(b,null,k(e.action,(t,p)=>(n(),a("div",{key:p},[t.type=="link"?(n(),A(c,{key:0,to:t.to},{default:x(()=>[s("button",T,r(t.text),1)]),_:2},1032,["to"])):i("",!0)]))),128))])):i("",!0)])}const V=d(y,[["render",B]]),E={components:{Navigation:g,AlertComponent:V}},F={class:"p-5"},Y={class:"mb-5"},z=s("h2",{class:"mb-5"},"# Alert",-1),D={class:"mb-5"},I=s("h2",{class:"mb-5"},"# Alert with description",-1),L={class:"mb-5"},W=s("h2",{class:"mb-5"},"# Info color",-1),j={class:"mb-5"},q=s("h2",{class:"mb-5"},"# Success color",-1),G={class:"mb-5"},H=s("h2",{class:"mb-5"},"# Warning color",-1),J={class:"mb-5"},K=s("h2",{class:"mb-5"},"# Error color",-1),M={class:"mb-5"},O=s("h2",{class:"mb-5"},"# Alert with buttons",-1);function P(_,m,e,h,u,f){const c=l("Navigation"),t=l("AlertComponent");return n(),a("main",F,[o(c,{title:"Alerts"}),s("div",Y,[z,o(t,{title:"12 unread messages. Tap to see."})]),s("div",D,[I,o(t,{title:"New message!",description:"You have 1 unread message"})]),s("div",L,[W,o(t,{class:"info",icon:"fa-solid fa-circle-info",title:"12 unread messages. Tap to see."})]),s("div",j,[q,o(t,{class:"success",icon:"fa-solid fa-circle-check",title:"12 unread messages. Tap to see."})]),s("div",G,[H,o(t,{class:"warning",icon:"fa-solid fa-triangle-exclamation",title:"12 unread messages. Tap to see."})]),s("div",J,[K,o(t,{class:"danger",icon:"fa-solid fa-circle-xmark",title:"12 unread messages. Tap to see."})]),s("div",M,[O,o(t,{icon:"fa-solid fa-message",title:"New message!",description:"You have 1 unread message",action:[{type:"link",to:"/",text:"View"}]})])])}const Z=d(E,[["render",P]]);export{Z as default};
