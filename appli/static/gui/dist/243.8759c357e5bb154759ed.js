/*! For license information please see 243.8759c357e5bb154759ed.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[243],{243:(e,s,l)=>{l.r(s),l.d(s,{default:()=>t});var o=l(4860),a=l(7114);function t(e){return{select:(s,l,o,t={})=>{const r=e.getCellData(l,a.Jn.id);return t.html=`<a href="/gui/collection/edit/${r}" class="small-caps text-stone-50 rounded p-1 shadow bg-mainblue-700">Edit</a>`,t},user:(e,s,l,o={})=>(console.log("value provider",e.email),o.html=`<a href="mailto:${e.email}" class="font-normal text-mainblue-700">${e.name}</a>`,o),user_list:(e,s,l,o={})=>{console.log("value",Object.values(e));let a={users:[],orgs:[]};return Object.entries(e).forEach((([e,s])=>{e.indexOf("_users")>0?s.forEach((e=>{console.log("v",e.name);const s=`<a href="mailto:${e.email}" class="font-normal text-stone-700">${e.name}</a>`;a.users.push(s)})):s.forEach((e=>{console.log("v",e),a.orgs.push(e)}))})),o.html=`users : ${a.users.join(", ")} <br>organisations : ${a.orgs.join(", ")}`,o},project_list:(e,s,l,o={})=>{console.log("value",e),e=Array.isArray(e)?e:[];let a=[];return e.forEach((e=>{a.push(`<a href="/gui/prj/about:${e}" class="font-normal text-stone-800">${e}</a>`)})),o.html=a.join(", "),o},license:(e,s,l,a={})=>(a.html=(0,o.format_license)(e,!0),a)}}}}]);