import{_ as d}from"./plugin-vueexport-helper.2444895f.js";import{o as r,c as a,a as t,f as i,g as l,w as u,t as p,i as k,e as x}from"./index.5946651b.js";const g={methods:{darkMode(){let e=document.querySelector("#themefile");e&&e instanceof HTMLLinkElement&&(e.href.includes("light")?e.href=e.href.replace("light","dark"):e.href=e.href.replace("dark","light"))}}},b=t("i",{class:"fa-solid fa-lightbulb"},null,-1),y=[b];function M(e,s,n,h,m,o){return r(),a("button",{class:"btn circle ghost",onClick:s[0]||(s[0]=(...c)=>o.darkMode&&o.darkMode(...c))},y)}const v=d(g,[["render",M]]),N={components:{DarkMode:v},props:{title:String},methods:{changeTheme(){let e=document.querySelector("#app");e!=null&&e.classList.contains("neumorphism")?e.classList.remove("neumorphism"):e==null||e.classList.add("neumorphism")}}},T={class:"flex justify-between items-center mb-5"},$={class:"flex justify-center items-center"},C=t("h1",{class:""},[x(" Trend UI "),t("i",{class:"fa-solid font-bold text-3xl mr-5 fa-paintbrush"})],-1),L={key:0,class:"text-2xl"},D={class:"flex justify-center items-center"},S=t("i",{class:"fa-solid fa-paintbrush"},null,-1),V=[S];function j(e,s,n,h,m,o){const c=i("router-link"),_=i("DarkMode");return r(),a("nav",T,[t("div",$,[l(c,{to:"/",class:"text-3xl"},{default:u(()=>[C]),_:1}),n.title?(r(),a("h2",L,p(n.title),1)):k("",!0)]),t("div",D,[t("button",{class:"btn circle ghost mr-2",onClick:s[0]||(s[0]=(...f)=>o.changeTheme&&o.changeTheme(...f))},V),l(_)])])}const q=d(N,[["render",j]]);export{q as N};
