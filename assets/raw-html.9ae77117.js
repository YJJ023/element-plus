import{E as t}from"./index.2b70472b.js";import{j as c,z as r,k as u,l as g,H as _,B as e,I as f,F as o,M as b,A as d}from"./framework.133f9ea6.js";const T=o(" Closes automatically "),C=o(" Won't close automatically "),k=c({setup(p){const s=()=>{t({title:"Title",message:b("i",{style:"color: teal"},"This is a reminder")})},i=()=>{t({title:"Prompt",message:"This is a message that does not automatically close",duration:0})};return(a,n)=>{const m=r("el-button");return u(),g(f,null,[_(m,{plain:"",onClick:s},{default:e(()=>[T]),_:1}),_(m,{plain:"",onClick:i},{default:e(()=>[C]),_:1})],64)}}});var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});const S=o(" Success "),y=o(" Warning "),$=o(" Info "),M=o(" Error "),x=c({setup(p){const s=()=>{t({title:"Success",message:"This is a success message",type:"success"})},i=()=>{t({title:"Warning",message:"This is a warning message",type:"warning"})},a=()=>{t({title:"Info",message:"This is an info message",type:"info"})},n=()=>{t({title:"Error",message:"This is an error message",type:"error"})};return(m,h)=>{const l=r("el-button");return u(),g(f,null,[_(l,{plain:"",onClick:s},{default:e(()=>[S]),_:1}),_(l,{plain:"",onClick:i},{default:e(()=>[y]),_:1}),_(l,{plain:"",onClick:a},{default:e(()=>[$]),_:1}),_(l,{plain:"",onClick:n},{default:e(()=>[M]),_:1})],64)}}});var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:x});const j=o(" Hide close button "),I=c({setup(p){const s=()=>{t.success({title:"Info",message:"This is a message without close button",showClose:!1})};return(i,a)=>{const n=r("el-button");return u(),d(n,{plain:"",onClick:s},{default:e(()=>[j]),_:1})}}});var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});const v=o(" Notification with offset "),w=c({setup(p){const s=()=>{t.success({title:"Success",message:"This is a success message",offset:100})};return(i,a)=>{const n=r("el-button");return u(),d(n,{plain:"",onClick:s},{default:e(()=>[v]),_:1})}}});var V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});const z=o(" Top Right "),B=o(" Bottom Right "),H=o(" Bottom Left "),L=o(" Top Left "),O=c({setup(p){const s=()=>{t({title:"Custom Position",message:"I'm at the top right corner"})},i=()=>{t({title:"Custom Position",message:"I'm at the bottom right corner",position:"bottom-right"})},a=()=>{t({title:"Custom Position",message:"I'm at the bottom left corner",position:"bottom-left"})},n=()=>{t({title:"Custom Position",message:"I'm at the top left corner",position:"top-left"})};return(m,h)=>{const l=r("el-button");return u(),g(f,null,[_(l,{plain:"",onClick:s},{default:e(()=>[z]),_:1}),_(l,{plain:"",onClick:i},{default:e(()=>[B]),_:1}),_(l,{plain:"",onClick:a},{default:e(()=>[H]),_:1}),_(l,{plain:"",onClick:n},{default:e(()=>[L]),_:1})],64)}}});var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:O});const E=o(" Use HTML String "),P=c({setup(p){const s=()=>{t({title:"HTML String",dangerouslyUseHTMLString:!0,message:"<strong>This is <i>HTML</i> string</strong>"})};return(i,a)=>{const n=r("el-button");return u(),d(n,{plain:"",onClick:s},{default:e(()=>[E]),_:1})}}});var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});export{F as _,R as a,U as b,V as c,A as d,q as e};