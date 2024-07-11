import{T as w,o as _,g as V,w as n,a as o,u as s,Z as b,b as t,d as u,i as v,e as g,n as x}from"./app-5cc5926e.js";import{_ as y}from"./AdminLayout-1046ab22.js";import{_ as r,a as m,b as i}from"./TextInput-95d27e64.js";import{_ as k}from"./PrimaryButton-8d44ca58.js";import{s as p}from"./vue-multiselect.css_vue_type_style_index_0_src_true_lang-461dfd0c.js";const h={class:"max-w-7xl mx-auto mt-4"},U={class:"flex justify-between"},C={class:"max-w-md mx-auto mt-6 p-6 bg-slate-100"},P={class:"mt-4"},$={class:"mt-4"},q={class:"mt-4"},B={class:"mt-4"},N={class:"mt-4"},j={class:"flex items-center justify-end mt-4"},M={__name:"Create",props:{roles:Array,permissions:Array},setup(d){const e=w({name:"",email:"",password:"",password_confirmation:"",roles:[],permissions:[]}),c=()=>{e.post(route("users.store"),{onFinish:()=>e.reset("password","password_confirmation")})};return(f,a)=>(_(),V(y,null,{default:n(()=>[o(s(b),{title:"Create user"}),t("div",h,[t("div",U,[o(s(v),{href:f.route("users.index"),class:"px-3 py-2 text-white font-semibold bg-indigo-500 hover:bg-indigo-700 rounded"},{default:n(()=>[u("Back")]),_:1},8,["href"])])]),t("div",C,[t("form",{onSubmit:g(c,["prevent"])},[t("div",null,[o(r,{for:"name",value:"Name"}),o(m,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":a[0]||(a[0]=l=>s(e).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(i,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),t("div",P,[o(r,{for:"email",value:"Email"}),o(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":a[1]||(a[1]=l=>s(e).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),o(i,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",$,[o(r,{for:"password",value:"Password"}),o(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":a[2]||(a[2]=l=>s(e).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",q,[o(r,{for:"password_confirmation",value:"Confirm Password"}),o(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=l=>s(e).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),t("div",B,[o(r,{for:"roles",value:"Roles"}),o(s(p),{modelValue:s(e).roles,"onUpdate:modelValue":a[4]||(a[4]=l=>s(e).roles=l),options:d.roles,multiple:!0,"close-on-select":!0,placeholder:"Pick some",label:"name","track-by":"id"},null,8,["modelValue","options"])]),t("div",N,[o(r,{for:"permissions",value:"Permissions"}),o(s(p),{modelValue:s(e).permissions,"onUpdate:modelValue":a[5]||(a[5]=l=>s(e).permissions=l),options:d.permissions,multiple:!0,"close-on-select":!0,placeholder:"Pick some",label:"name","track-by":"id"},null,8,["modelValue","options"])]),t("div",j,[o(k,{class:x(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[u(" Create User ")]),_:1},8,["class","disabled"])])],32)])]),_:1}))}};export{M as default};
