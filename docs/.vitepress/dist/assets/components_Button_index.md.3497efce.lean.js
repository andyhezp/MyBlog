import{j as c,r as l,k as o,E as _,G as i,q as a,K as u,l as d,J as p,D as e}from"./chunks/framework.f1e8809f.js";const m=c({__name:"Button",setup(s){const t=l(!1),n=()=>{t.value=!0,setTimeout(()=>{t.value=!t.value},1e3)};return(x,g)=>{const r=u("el-button");return o(),_(r,{type:"primary",onClick:n,loading:t.value},{default:i(()=>[a(" Loading ")]),_:1},8,["loading"])}}}),h=e("h1",{id:"button",tabindex:"-1"},[a("Button "),e("a",{class:"header-anchor",href:"#button","aria-label":'Permalink to "Button"'},"​")],-1),f=e("p",null,"模拟一个 Loading 状态的按钮，点一下试试看",-1),B=e("p",null,"这里只是一个很简单的提交或者确定等待接口成功返回的示例的示例",-1),k=JSON.parse('{"title":"Button","description":"","frontmatter":{},"headers":[],"relativePath":"components/Button/index.md"}'),b={name:"components/Button/index.md"},C=Object.assign(b,{setup(s){return(t,n)=>(o(),d("div",null,[h,f,p(m),B]))}});export{k as __pageData,C as default};