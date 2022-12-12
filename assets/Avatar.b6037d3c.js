import{N as u}from"./Navigation.0d022a3b.js";import{_ as r}from"./plugin-vueexport-helper.2444895f.js";import{o,c as i,a as s,i as a,t as v,n as l,f as n,g as e}from"./index.5946651b.js";const f={props:{src:String,placeholder:String,size:String,mask:String,indicator:String,round:Boolean,ring:Boolean}},z=["src"],x=["textContent"];function b(d,m,c,p,_,h){return o(),i("div",{class:l(`avatar ${c.indicator}`)},[s("div",{class:l(`${c.size} ${c.round?"circle":""} ${c.ring?"ring":""} ${c.mask?"mask "+c.mask:""}`)},[c.src?(o(),i("img",{key:0,src:c.src},null,8,z)):a("",!0),c.placeholder?(o(),i("span",{key:1,textContent:v(c.placeholder)},null,8,x)):a("",!0)],2)],2)}const A=r(f,[["render",b]]),w={components:{Navigation:u,Avatar:A}},k={class:"p-5"},y={class:"mb-5"},j=s("h2",{class:"mb-5"},"# Avatar",-1),$={class:"w-full flex justify-center items-center"},N={class:"mb-5"},S=s("h2",{class:"mb-5"},"# Avatar in custom sizes",-1),B={class:"w-full flex justify-center items-center gap-2"},C={class:"mb-5"},V=s("h2",{class:"mb-5"},"# Avatar rounded",-1),q={class:"w-full flex justify-center items-center gap-2"},D={class:"mb-5"},E=s("h2",{class:"mb-5"},"# Avatar with mask",-1),J={class:"w-full flex justify-center items-center gap-2"},M={class:"mb-5"},F=s("h2",{class:"mb-5"},"# Avatar group",-1),G={class:"w-full flex justify-center items-center gap-2"},H={class:"avatar-group"},I={class:"mb-5"},K=s("h2",{class:"mb-5"},"# Avatar group with counter",-1),L={class:"w-full flex justify-center items-center gap-2"},O={class:"avatar-group"},P={class:"mb-5"},Q=s("h2",{class:"mb-5"},"# Avatar with ring",-1),R={class:"w-full flex justify-center items-center gap-2"},T={class:"mb-5"},U=s("h2",{class:"mb-5"},"# Avatar with presence indicator",-1),W={class:"w-full flex justify-center items-center gap-2"},X={class:"mb-5"},Y=s("h2",{class:"mb-5"},"# Avatar placeholder",-1),Z={class:"w-full flex justify-center items-center gap-2"};function ss(d,m,c,p,_,h){const g=n("Navigation"),t=n("Avatar",!0);return o(),i("main",k,[e(g,{title:"Avatar"}),s("div",y,[j,s("div",$,[e(t,{src:"https://placeimg.com/192/192/people",size:"lg"})])]),s("div",N,[S,s("div",B,[e(t,{src:"https://placeimg.com/192/192/people",size:"xl"}),e(t,{src:"https://placeimg.com/192/192/people",size:"lg"}),e(t,{src:"https://placeimg.com/192/192/people",size:"md"}),e(t,{src:"https://placeimg.com/192/192/people",size:"sm"}),e(t,{src:"https://placeimg.com/192/192/people",size:"xs"})])]),s("div",C,[V,s("div",q,[e(t,{src:"https://placeimg.com/192/192/people",size:"lg"}),e(t,{src:"https://placeimg.com/192/192/people",size:"lg",round:""})])]),s("div",D,[E,s("div",J,[e(t,{src:"https://placeimg.com/192/192/people",size:"lg",mask:"squircle"}),e(t,{src:"https://placeimg.com/192/192/people",size:"lg",mask:"hexagon"}),e(t,{src:"https://placeimg.com/192/192/people",size:"lg",mask:"triangle"})])]),s("div",M,[F,s("div",G,[s("div",H,[e(t,{src:"https://placeimg.com/192/192/people",size:"md",round:""}),e(t,{src:"https://placeimg.com/192/192/people",size:"md",round:""}),e(t,{src:"https://placeimg.com/192/192/people",size:"md",round:""}),e(t,{src:"https://placeimg.com/192/192/people",size:"md",round:""})])])]),s("div",I,[K,s("div",L,[s("div",O,[e(t,{src:"https://placeimg.com/192/192/people",size:"md",round:""}),e(t,{src:"https://placeimg.com/192/192/people",size:"md",round:""}),e(t,{src:"https://placeimg.com/192/192/people",size:"md",round:""}),e(t,{placeholder:"+99",size:"md",round:""})])])]),s("div",P,[Q,s("div",R,[e(t,{src:"https://placeimg.com/192/192/people",size:"xl",round:"",ring:""})])]),s("div",T,[U,s("div",W,[e(t,{src:"https://placeimg.com/192/192/people",size:"md",round:"",indicator:"offline"}),e(t,{src:"https://placeimg.com/192/192/people",size:"md",round:"",indicator:"online"})])]),s("div",X,[Y,s("div",Z,[e(t,{placeholder:"MJ",size:"md",round:""}),e(t,{placeholder:"A",size:"md",round:"",indicator:"online"}),e(t,{placeholder:"SA",size:"md",round:""})])])])}const os=r(w,[["render",ss]]);export{os as default};
