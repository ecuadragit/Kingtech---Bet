import{T as d,o as r,g as u,w as i,a,u as s,Z as c,c as f,t as _,h as p,b as t,d as w,n as g,e as x}from"./app-5cc5926e.js";import{_ as y}from"./GuestLayout-54af1017.js";import{_ as b,a as k,b as h}from"./TextInput-95d27e64.js";import{_ as V}from"./PrimaryButton-8d44ca58.js";import"./ApplicationLogo-29f59a48.js";import"./_plugin-vue_export-helper-c27b6911.js";const v=t("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},$={class:"flex items-center justify-end mt-4"},j={__name:"ForgotPassword",props:{status:String},setup(o){const e=d({email:""}),m=()=>{e.post(route("password.email"))};return(B,l)=>(r(),u(y,null,{default:i(()=>[a(s(c),{title:"Forgot Password"}),v,o.status?(r(),f("div",N,_(o.status),1)):p("",!0),t("form",{onSubmit:x(m,["prevent"])},[t("div",null,[a(b,{for:"email",value:"Email"}),a(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":l[0]||(l[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(h,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",$,[a(V,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:i(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{j as default};
