/*! For license information please see 941.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[941],{5941:(t,e,i)=>{i.d(e,{DataImport:()=>m});var s=i(7856),o=i.n(s),r=i(2057),n=i(5690),l=i(9162),a=i(2817);const c=Object.keys(a.HN).reduce((function(t,e){return t[e]=e,t}),{});let d;class m{content_selector=".modal-content";imports=[];taxos=["preset","extra"];importcontainer;importzoneid;importid="importzone";selectors;button;clearbutton;replacebutton;tabbutton;tbl=null;constructor(t,e=null,i=null){if(t&&(this.tbl="object"==typeof t?t:null,this.dom=this.tbl?this.tbl.dom:document.getElementById(t),this.dom)){if(e=e?o().sanitize(e):t&&t.params&&t.params.import?t.params.import:this.dom.dataset.import?o().sanitize(this.dom.dataset.import):null,!d||d.doc!==this.dom){const t={importcontainer:"#data-import-"+e,btns:".btns-imports",button:"#add-import-"+e,replacebutton:"#replace-import-"+e,tabbutton:"#tab-import-"+e,selector:"data-id"};this.selector=i||t.selector,this.importcontainer=t.importcontainer instanceof HTMLElement?t.importcontainer:document.querySelector(t.importcontainer),this.form=t.form?t.form instanceof HTMLElement?t.form:document.querySelector(t.form):this.dom.closest("form"),this.button=t.button instanceof HTMLElement?t.button:document.querySelector(t.button),this.replacebutton=t.replacebutton instanceof HTMLElement?t.replacebutton:document.querySelector(t.replacebutton),this.tabbutton=t.tabbutton instanceof HTMLElement?t.tabbutton:document.querySelector(t.tabbutton),this.init(t),d=this}return d}}init(t){this.showImport(!1);let e=this.form.querySelector("#"+a.EY.projid);e&&e.value&&(e=this.dom.querySelector("["+this.selector+'="'+e.value+'"]'),e&&e.classList.add(a.iv.hide));const i=this.indexToCheck();this.selectors=this.dom.querySelectorAll("["+this.selector+"] button, ["+this.selector+"] input"),this.selectors.forEach((t=>{const e=Array.from(t.parentElement.children).indexOf(t);if(i&&""===t.closest("tr").children[i[e]].innerHTML)t.disabled=!0;else{const i="input"===t.tagName.toLowerCase()?"change":"click",s=t=>{const i=t.currentTarget;i.disabled=!0,this.toImport(i.parentElement,e)};t.removeEventListener(i,s,!1),t.addEventListener(i,s,!1)}})),this.button&&(this.tabbutton.addEventListener("click",(t=>{this.resizeZone(t)})),this.showImport(!1))}columnProperty(t,e,i){return this.tbl?this.tbl.grid.columns[e].hasOwnProperty(t)?this.tbl.grid.columns[e][t]:null:i.dataset[t]?i.dataset.name:null}columnIndex(t,e){return this.tbl?this.tbl.grid.columns.findIndex((i=>i.hasOwnProperty(t)&&i[t]===e)):Array.from(this.dom.querySelectorAll("thead th")).findIndex((i=>i.dataset[t]&&i.dataset[t]===e))}rowIndex(t,e){const i=t.parentElement?t.parentElement:null;return i?e.findIndex((t=>t===i)):null}toImport(t,e=0){const i=this.tbl?this.tbl.grid:null,s=Array.from(this.dom.querySelectorAll("thead th")),o=Array.from(this.dom.querySelectorAll("tbody tr")),n=i?i.data:o.map((t=>Array.from(t.childNodes).forEach((t=>t.innerText))));"td"!==t.tagName.toLowerCase()&&(t=t.closest("td"));const d=this.rowIndex(t,o);if(null===d)return;let m=!0;const h=t.cellIndex,p=s[h],u=(o[d],this.columnProperty("what",h,p));if(!u)return;const f=this.columnProperty("parts",h,p);let b=this.columnProperty("selectcells",h,p);if(b=b?f?[f[e]]:b:null,!b)return;u===a.oL.settings&&(this.imports[a.Cq.contact]=this.findContact(s,n[d]));const v=u===a.oL.taxo||u===a.oL.privileges?this.createImportzone(u):null;let g=null;b.forEach(((t,e)=>{if((e=this.columnIndex("name",t))>=0){const i=o[d].cells[e],h=n[d][e];i.classList.add(a.iv.selected);const p=s[e];switch(u){case a.oL.taxo:g=v.tomselect;let e=h;e&&(g?(Object.values(g.options).forEach((t=>{let i={};i[t[g.settings.valueField]]=t[g.settings.labelField],e[t[g.settings.valueField]]||(e=Object.assign(e,i))})),e=Object.entries(e),e.sort(((t,e)=>{let i=t[1],s=e[1];return+(i>s)||-(s>i)})),g.clear(),g.clearOptions(),e.forEach((([t,e])=>{if(!g.getItem(t)){if(!g.getOption(t)){let i={};i[g.settings.valueField]=t,i[g.settings.labelField]=(0,l.l1)(e.trim()),g.addOption(i)}g.addItem(t)}}))):(Object.values(v.options).forEach((t=>{let i={};i[t.value]=t.text,e[t.value]||(e=Object.assign(e,i))})),e=Object.entries(e),e.sort(((t,e)=>{let i=t[1],s=e[1];return+(i>s)||-(s>i)})),v.innerHTML="",e.forEach((([t,e])=>{v.querySelector('option[value="'+t+'"]')||v.insertAdjacentHTML("beforeend",'<option value="'+t+'" selected>'+e+"</option>")}))),m=e.length>0,e=null);break;case a.oL.privileges:const i=h,o=g&&g.items.length>0||v.selectedIndex>0;if(!v.dataset.init){(new r.JsTomSelect).applyTo(v),v.dataset.init=!0}g=v.tomselect,Object.entries(i).forEach((([t,e])=>{e.sort(((t,e)=>e.name>t.name)),e.forEach((e=>{const i=o?c.viewers:t;let s;g?(s=g.items.indexOf(e.id),s>=0&&(g.removeItem(e.id),g.removeOption(e.id)),s={optgroup:i},s[g.settings.valueField]=e.id,s[g.settings.searchField]=e.name,s[g.settings.labelField]=e.name,g.addOption(s),g.addItem(e.id)):(s=v.querySelector('option[value="'+e.id+'"]'),null===s?(s=document.createElement("option"),s.value=e.id,s.dataset.optgroup=i,s.selected=s.defaultSelected=!0,s.text=e.name,v.add(s)):s.dataset.optgroup=i)})),v.tomselect.refreshOptions()})),m=(g?g.items.length:v.selectedIndex+1)>0;break;default:if(p.dataset.autocomplete){this.imports[t]={value:h,key:null};let e=null;s.every(((t,i)=>t.dataset.name!=p.dataset.autocomplete||(e=i,!1))),null!==e&&(e=n[d][e],this.imports[t].key=e)}else p.dataset.value?this.imports[t]=p.dataset.value:this.imports[t]=h}}})),s.length&&(this.button?(this.showImport(m),this.button.dataset.activated||u!==a.oL.taxo&&u!==a.oL.privileges||this.activateButtons(u,b)):this.makeImport(null,b,u,!0),this.resetSelectors())}messageZone(t){console.log("itemmessage",t)}activateButtons(t,e){this.button.addEventListener("click",(i=>{i.preventDefault(),this.makeImport(i.currentTarget,e,t,!0)})),this.replacebutton.addEventListener("click",(i=>{i.preventDefault(),this.makeImport(i.currentTarget,e,t,!0)})),this.button.dataset.activated=!0,this.replacebutton.dataset.activated=!0}findContact(t,e){let i=null;return t.every(((t,e)=>!t.dataset.name||t.dataset.name!==a.Cq.contact||(i=e,!1))),i&&(i=e[i]?e[i]:0),i}renderPrivileges(t,e=!1){let i={};const s=t.tomselect,o=(t,e)=>{const s={id:t.id,name:t.name,priv:e};i[e]?i[e].push(s):i[e]=[s]};if(s){const t=[...s.items],e=Object.assign({},s.options);t.forEach((t=>{(t=e[t])&&o(t,t.optgroup)}))}else t.options.forEach((t=>{t.selected&&o(t,t.dataset.optgroup)}));this.importPrivileges(i,e)&&(s?(s.clear(),s.clearOptions()):t.innerHTML="")}importPrivileges(t,e=!1){const i=new n.ProjectPrivileges,s=this.imports[a.Cq.contact]?this.imports[a.Cq.contact]:null;return i.importPrivileges(t,e,s,(t=>{this.setImportedTag(t,null)}),(()=>{this.dismiss()}))}resetSelectors(){this.selectors.forEach(((t,e)=>{if(t.disabled){t.disabled=!1;Array.from(this.dom.querySelectorAll("tbody tr"))[e].querySelectorAll("."+a.iv.selected).forEach((t=>{t.classList.remove(a.iv.selected)}))}}))}activateClear(){const t=document.getElementById("clear-"+this.importid);t&&t.addEventListener("click",(t=>{this.importcontainer&&(this.resetSelectors(),this.button.disabled=!1,this.replacebutton.disabled=!1,this.showImport(!1))}))}createImportzone(t){this.showImport(!0);let e=this.importcontainer.querySelector("#"+this.importid);if(t===a.oL.privileges)e||(e=document.createElement("select"),this.importid=e.id=this.importid+"-"+t,e.dataset.type=a.Cq.user,e.multiple=!0,e.dataset.priv=!0,this.importcontainer.append(e));else{const i=this.form.querySelector('[name="'+t+'"]')?this.form.querySelector('[name="'+t+'"]'):this.form.querySelector('[data-importfield="'+t+'"]'),s=i.tomselect;if(!e){if(!i)return;if(this.importzoneid=i.id,e=i.cloneNode(),e.classList.remove("tomselected"),e.classList.remove("ts-hidden-accessible"),e.dataset.origin=e.id,e.id=this.importid,e.name=this.importid+"_"+e.name,this.importcontainer.insertAdjacentHTML("afterbegin",e.outerHTML),s){e=this.importcontainer.querySelector("#"+this.importid);(new r.JsTomSelect).applyTo(e)}this.activateClear()}}return e}makeImport(t,e,i,s=!1){let r=!1,n=null;const c=this.importcontainer?this.importcontainer.querySelector("#"+this.importid):null;switch(i){case a.oL.taxo:if(!c)return!1;const s=this.form.querySelector("#"+c.dataset.origin);if(!s)return!1;if(n=s.tomselect,n){t.dataset.replace&&"replace"===t.dataset.replace&&(n.clear(),n.clearOptions());const e=c.tomselect,i=[...e.items],s=Object.assign({},e.options);i.forEach(((t,e)=>{let i={};i[n.settings.valueField]=t,i[n.settings.searchField]=(0,l.l1)(s[t][n.settings.searchField]),n.getOption(t)||n.addOption(i),n.addItem(t)})),e.clear(),e.clearOptions()}else t.dataset.replace&&"replace"===t.dataset.replace&&(s.innerHTML=""),s.innerHTML=o().sanitize(c.innerHTML),c.innerHTML="";r=!0;break;case a.oL.privileges:if(!c)return!1;r=this.renderPrivileges(c,t.dataset.replace&&"replace"===t.dataset.replace);break;default:e.forEach(((t,e)=>{let s=this.form.querySelector('[data-importfield="'+t+'"]')?this.form.querySelector('[data-importfield="'+t+'"]'):this.form.querySelector('[name="'+t+'"]');if(s&&void 0!==this.imports[t]){if(n=s.tomselect,"init_classif_list"===t){let e=this.imports[t];if(e=Array.isArray(e)?e.join(","):e.replace("[","").replace("]","").replaceAll(" ",""),""!==e){n&&n.wrapper.classList.add("wait-for-results");const t=new FormData;t.append("idlist",e);fetch("/search/taxoresolve",(0,l.wv)({method:"POST",body:t})).then((t=>t.json())).then((t=>{if(n)Object.entries(t).forEach((([t,e])=>{let i={};t=o().sanitize(t),e=o().sanitize(e),i[n.settings.valueField]=t,i[n.settings.searchField]=(0,l.l1)(e),n.addOption(i),n.addItem(i[n.settings.valueField])}));else{let e="";Object.entries(t).forEach((([t,i])=>{t=o().sanitize(t),i=o().sanitize(i),e+='<option value ="'+t+'" selected>'+i+"</option>"})),s.innerHTML=e,e=""}t=null,n&&n.wrapper.classList.remove("wait-for-results")}))}}else if(n){let e={};"string"==typeof this.imports[t]?(e[n.settings.labelField]=this.imports[t],e[n.settings.valueField]=this.imports[t],e[n.settings.searchField]=(0,l.l1)(this.imports[t])):(e[n.settings.labelField]=this.imports[t].key,e[n.settings.valueField]=this.imports[t].key,e[n.settings.searchField]=(0,l.l1)(this.imports[t].value)),n.addOption(e),n.addItem(e[s.tomselect.settings.valueField])}else{s.type?s.type:s.tagName.toLowerCase();switch(s.type){case"radio":case"checkbox":s=this.form.querySelector('[name="'+t+'"][value="'+this.imports[t]+'"]'),s&&(s.checked=!0);break;case"select":let e;e=this.imports[t].key?'<option value="'+this.imports[t].key+'" selected >'+this.imports[t].value+"</option>":'<option value="'+this.imports[t]+'" selected >'+this.imports[t]+"</option>",s.insertAdjacentHTML("beforeend",e);break;default:s.value=this.imports[t]}}i!==a.oL.settings&&s.focus(),r=!0,this.setImportedTag(s)}else if(t===a.oL.privileges){const e=i===a.oL.settings;r=this.importPrivileges(this.imports[t],e)}}))}!0===r&&1==s&&this.dismiss()}setImportedTag(t,e=".form-box"){let i=null===e?t:t.closest(e)?t.closest(e):t.closest("fieldset");if(!i)return;i.dataset.isimported=this.form.dataset.isimported,i.classList.add("imported");const s=e=>{i.removeAttribute("data-isimported"),i.classList.remove("imported"),t.removeEventListener("change keydown",s)};t.addEventListener("change keydown",s)}dismiss(t=!1){this.button&&this.showImport(!1);const e=this.dom.closest("details");e&&(e.open=!1,!0===t&&(e.querySelector(this.content_selector).innerHTML=""))}indexToCheck(){const t=this.tbl?this.tbl.grid:null;if(!t)return[0];let e=t.columns.findIndex((t=>t.what&&t.what===a.oL.taxo));if(-1===e)return[0];const i=t.columns[e].parts?t.columns[e].parts:null;if(i){return t.columns.filter(((t,e)=>{if(i.indexOf(t.name)>=0)return e})).map((t=>t.index))}}showImport(t){if(this.button)if(!1===t)this.button.classList.add(a.iv.hide),this.replacebutton.classList.add(a.iv.hide),this.importcontainer.classList.add(a.iv.hide),this.tabbutton.classList.add(a.iv.hide);else{this.button.classList.remove(a.iv.hide),this.replacebutton.classList.remove(a.iv.hide),this.importcontainer.classList.remove(a.iv.hide),this.button.disabled=!1;const t=this.importcontainer.querySelector("#"+this.importid);t&&(this.tabbutton.classList.remove(a.iv.hide),t.tomselect&&t.tomselect.control.offsetHeight<t.tomselect.control.scrollHeight?this.tabbutton.disabled=!1:this.tabbutton.disabled=!0)}}resizeZone(t){const e=this.importcontainer.closest(a.EY.component.import.zoneimport);if(!e)return;e.parentElement.classList.toggle(a.iv.showfull);const i=t.currentTarget.querySelector("i");i&&(i.classList.toggle("icon-arrow-pointing-out"),i.classList.toggle("icon-arrow-pointing-in"))}}}}]);