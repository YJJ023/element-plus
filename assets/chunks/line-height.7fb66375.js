import{g as n,o as t,c as a,b as e,F as y,i as u,v,t as m,u as _,R as f,_ as b,G as c,e as d,d as l}from"../app.7d81251f.js";const x={class:"demo-typo-size"},k=e("tr",null,[e("td",null,"Level"),e("td",null,"Font Size"),e("td",{class:"color-dark-light"},"Demo")],-1),$=e("td",null,"Build with Element",-1),S=n({__name:"convention",setup(p){const s=[{level:"Supplementary text",type:"extra-small"},{level:"Body (small)",type:"small"},{level:"Body",type:"base"},{level:"Small Title",type:"medium"},{level:"Title",type:"large"},{level:"Main Title",type:"extra-large"}];function i(g){return g.split("-").map(o=>o.charAt(0).toUpperCase()+o.slice(1)).join(" ")}return(g,o)=>(t(),a("table",x,[e("tbody",null,[k,(t(),a(y,null,u(s,(r,h)=>e("tr",{key:h,style:v(`font-size: var(--el-font-size-${r.type})`)},[e("td",null,m(r.level),1),e("td",null,m(_(f)(`--el-font-size-${r.type}`).value+" "+i(r.type)),1),$],4)),64))])]))}});var W=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),T="/images/typography/term-pingfang.png",j="/images/typography/term-hiragino.png",z="/images/typography/term-microsoft.png",B="/images/typography/term-helvetica.png",O="/images/typography/term-arial.png",C="/images/typography/term-pingfang-dark.png",M="/images/typography/term-hiragino-dark.png",N="/images/typography/term-microsoft-dark.png",V="/images/typography/term-helvetica-dark.png",D="/images/typography/term-arial-dark.png";const F={key:0,class:"demo-term-box"},H=d('<img src="'+T+'" alt="" data-v-e1341f10><img src="'+j+'" alt="" data-v-e1341f10><img src="'+z+'" alt="" data-v-e1341f10><img src="'+B+'" alt="" data-v-e1341f10><img src="'+O+'" alt="" data-v-e1341f10>',5),L=[H],P={key:1,class:"demo-term-box"},w=d('<img src="'+C+'" alt="" data-v-e1341f10><img src="'+M+'" alt="" data-v-e1341f10><img src="'+N+'" alt="" data-v-e1341f10><img src="'+V+'" alt="" data-v-e1341f10><img src="'+D+'" alt="" data-v-e1341f10>',5),E=[w],R=n({__name:"font",setup(p){return(s,i)=>_(c)?(t(),a("div",P,E)):(t(),a("div",F,L))}});var A=b(R,[["__scopeId","data-v-e1341f10"]]),X=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"})),G="/images/typography/line-height-dark.png",I="/images/typography/line-height.png";const U={key:0,class:"lineH-left",src:G},q={key:1,class:"lineH-left",src:I},J=e("ul",{class:"lineH-right"},[e("li",null,[l("line-height:1 "),e("span",null,"No line height")]),e("li",null,[l("line-height:1.3 "),e("span",null,"Compact")]),e("li",null,[l("line-height:1.5 "),e("span",null,"Regular")]),e("li",null,[l("line-height:1.7 "),e("span",null,"Loose")])],-1),K=n({__name:"line-height",setup(p){return(s,i)=>(t(),a("div",null,[_(c)?(t(),a("img",U)):(t(),a("img",q)),J]))}});var Y=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));export{W as _,X as a,Y as b};