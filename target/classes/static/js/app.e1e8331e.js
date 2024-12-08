(function(){"use strict";var e={4425:function(e,t,r){var n=r(5130),l=r(6768);const o={id:"app"};function s(e,t,r,n,s,u){const i=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.CE)("div",o,[(0,l.bF)(i)])}var u={name:"App"},i=r(1241);const a=(0,i.A)(u,[["render",s]]);var d=a,c=r(1387),v=r(4232);const m={class:"container mt-5"},p={class:"mb-3"},y={class:"mb-3"},f={class:"mb-3"},k={class:"mb-3"},b={class:"mb-3"},L={class:"mb-3"},h={class:"mb-3"},g={class:"mb-3"},S={class:"mb-3"},C={class:"mb-3"},M={class:"mb-3"},x={class:"mb-3"},E={type:"submit",class:"btn btn-primary"};function N(e,t,r,o,s,u){return(0,l.uX)(),(0,l.CE)("div",m,[(0,l.Lk)("h2",null,(0,v.v_)(s.isEditMode?"Edit Survey":"Fill Out Survey"),1),(0,l.Lk)("form",{onSubmit:t[21]||(t[21]=(0,n.D$)(((...e)=>u.submitSurvey&&u.submitSurvey(...e)),["prevent"]))},[(0,l.Lk)("div",p,[t[22]||(t[22]=(0,l.Lk)("label",{for:"firstName",class:"form-label"},[(0,l.eW)(" First Name "),(0,l.Lk)("span",{class:"text-danger"},"(*)")],-1)),(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control",id:"firstName","onUpdate:modelValue":t[0]||(t[0]=e=>s.survey.firstName=e),required:""},null,512),[[n.Jo,s.survey.firstName]])]),(0,l.Lk)("div",y,[t[23]||(t[23]=(0,l.Lk)("label",{for:"lastName",class:"form-label"},[(0,l.eW)(" Last Name "),(0,l.Lk)("span",{class:"text-danger"},"(*)")],-1)),(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control",id:"lastName","onUpdate:modelValue":t[1]||(t[1]=e=>s.survey.lastName=e),required:""},null,512),[[n.Jo,s.survey.lastName]])]),(0,l.Lk)("div",f,[t[24]||(t[24]=(0,l.Lk)("label",{for:"streetAddress",class:"form-label"},[(0,l.eW)(" Street Address "),(0,l.Lk)("span",{class:"text-danger"},"(*)")],-1)),(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control",id:"streetAddress","onUpdate:modelValue":t[2]||(t[2]=e=>s.survey.streetAddress=e),required:""},null,512),[[n.Jo,s.survey.streetAddress]])]),(0,l.Lk)("div",k,[t[25]||(t[25]=(0,l.Lk)("label",{for:"city",class:"form-label"},[(0,l.eW)(" City "),(0,l.Lk)("span",{class:"text-danger"},"(*)")],-1)),(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control",id:"city","onUpdate:modelValue":t[3]||(t[3]=e=>s.survey.city=e),required:""},null,512),[[n.Jo,s.survey.city]])]),(0,l.Lk)("div",b,[t[26]||(t[26]=(0,l.Lk)("label",{for:"state",class:"form-label"},[(0,l.eW)(" State "),(0,l.Lk)("span",{class:"text-danger"},"(*)")],-1)),(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control",id:"state","onUpdate:modelValue":t[4]||(t[4]=e=>s.survey.state=e),required:""},null,512),[[n.Jo,s.survey.state]])]),(0,l.Lk)("div",L,[t[27]||(t[27]=(0,l.Lk)("label",{for:"zip",class:"form-label"},[(0,l.eW)(" Zip "),(0,l.Lk)("span",{class:"text-danger"},"(*)")],-1)),(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control",id:"zip","onUpdate:modelValue":t[5]||(t[5]=e=>s.survey.zip=e),required:""},null,512),[[n.Jo,s.survey.zip]])]),(0,l.Lk)("div",h,[t[28]||(t[28]=(0,l.Lk)("label",{for:"phone",class:"form-label"},[(0,l.eW)(" Phone "),(0,l.Lk)("span",{class:"text-danger"},"(*)")],-1)),(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control",id:"phone","onUpdate:modelValue":t[6]||(t[6]=e=>s.survey.phone=e),required:""},null,512),[[n.Jo,s.survey.phone]])]),(0,l.Lk)("div",g,[t[29]||(t[29]=(0,l.Lk)("label",{for:"email",class:"form-label"},[(0,l.eW)(" Email "),(0,l.Lk)("span",{class:"text-danger"},"(*)")],-1)),(0,l.bo)((0,l.Lk)("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":t[7]||(t[7]=e=>s.survey.email=e),required:""},null,512),[[n.Jo,s.survey.email]])]),(0,l.Lk)("div",S,[t[30]||(t[30]=(0,l.Lk)("label",{for:"surveyDate",class:"form-label"},[(0,l.eW)(" Survey Date "),(0,l.Lk)("span",{class:"text-danger"},"(*)")],-1)),(0,l.bo)((0,l.Lk)("input",{type:"date",class:"form-control",id:"surveyDate","onUpdate:modelValue":t[8]||(t[8]=e=>s.survey.surveyDate=e),required:""},null,512),[[n.Jo,s.survey.surveyDate]])]),(0,l.Lk)("div",C,[t[37]||(t[37]=(0,l.Lk)("label",{class:"form-label"},"What did you like the most?",-1)),(0,l.Lk)("div",null,[(0,l.bo)((0,l.Lk)("input",{type:"checkbox",id:"students",value:"students","onUpdate:modelValue":t[9]||(t[9]=e=>s.survey.likedMost=e)},null,512),[[n.lH,s.survey.likedMost]]),t[31]||(t[31]=(0,l.Lk)("label",{for:"students"},"Students",-1))]),(0,l.Lk)("div",null,[(0,l.bo)((0,l.Lk)("input",{type:"checkbox",id:"location",value:"location","onUpdate:modelValue":t[10]||(t[10]=e=>s.survey.likedMost=e)},null,512),[[n.lH,s.survey.likedMost]]),t[32]||(t[32]=(0,l.Lk)("label",{for:"location"},"Location",-1))]),(0,l.Lk)("div",null,[(0,l.bo)((0,l.Lk)("input",{type:"checkbox",id:"campus",value:"campus","onUpdate:modelValue":t[11]||(t[11]=e=>s.survey.likedMost=e)},null,512),[[n.lH,s.survey.likedMost]]),t[33]||(t[33]=(0,l.Lk)("label",{for:"campus"},"Campus",-1))]),(0,l.Lk)("div",null,[(0,l.bo)((0,l.Lk)("input",{type:"checkbox",id:"atmosphere",value:"atmosphere","onUpdate:modelValue":t[12]||(t[12]=e=>s.survey.likedMost=e)},null,512),[[n.lH,s.survey.likedMost]]),t[34]||(t[34]=(0,l.Lk)("label",{for:"atmosphere"},"Atmosphere",-1))]),(0,l.Lk)("div",null,[(0,l.bo)((0,l.Lk)("input",{type:"checkbox",id:"dormRooms",value:"dormRooms","onUpdate:modelValue":t[13]||(t[13]=e=>s.survey.likedMost=e)},null,512),[[n.lH,s.survey.likedMost]]),t[35]||(t[35]=(0,l.Lk)("label",{for:"dormRooms"},"Dorm Rooms",-1))]),(0,l.Lk)("div",null,[(0,l.bo)((0,l.Lk)("input",{type:"checkbox",id:"sports",value:"sports","onUpdate:modelValue":t[14]||(t[14]=e=>s.survey.likedMost=e)},null,512),[[n.lH,s.survey.likedMost]]),t[36]||(t[36]=(0,l.Lk)("label",{for:"sports"},"Sports",-1))])]),(0,l.Lk)("div",M,[t[42]||(t[42]=(0,l.Lk)("label",{class:"form-label"}," How did you become interested in the university? ",-1)),(0,l.Lk)("div",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio",id:"friends",value:"friends","onUpdate:modelValue":t[15]||(t[15]=e=>s.survey.interestSource=e)},null,512),[[n.XL,s.survey.interestSource]]),t[38]||(t[38]=(0,l.Lk)("label",{for:"friends"},"Friends",-1))]),(0,l.Lk)("div",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio",id:"television",value:"television","onUpdate:modelValue":t[16]||(t[16]=e=>s.survey.interestSource=e)},null,512),[[n.XL,s.survey.interestSource]]),t[39]||(t[39]=(0,l.Lk)("label",{for:"television"},"Television",-1))]),(0,l.Lk)("div",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio",id:"internet",value:"internet","onUpdate:modelValue":t[17]||(t[17]=e=>s.survey.interestSource=e)},null,512),[[n.XL,s.survey.interestSource]]),t[40]||(t[40]=(0,l.Lk)("label",{for:"internet"},"Internet",-1))]),(0,l.Lk)("div",null,[(0,l.bo)((0,l.Lk)("input",{type:"radio",id:"other",value:"other","onUpdate:modelValue":t[18]||(t[18]=e=>s.survey.interestSource=e)},null,512),[[n.XL,s.survey.interestSource]]),t[41]||(t[41]=(0,l.Lk)("label",{for:"other"},"Other",-1))])]),(0,l.Lk)("div",x,[t[44]||(t[44]=(0,l.Lk)("label",{for:"recommendation_list",class:"form-label"}," Likelihood of recommending the school to others ",-1)),(0,l.bo)((0,l.Lk)("select",{id:"recommendation_list",class:"form-select","onUpdate:modelValue":t[19]||(t[19]=e=>s.survey.recommendation_list=e)},t[43]||(t[43]=[(0,l.Lk)("option",{value:"Very Likely"},"Very Likely",-1),(0,l.Lk)("option",{value:"Likely"},"Likely",-1),(0,l.Lk)("option",{value:"Unlikely"},"Unlikely",-1)]),512),[[n.u1,s.survey.recommendation_list]])]),(0,l.Lk)("button",E,(0,v.v_)(s.isEditMode?"Update":"Submit"),1),(0,l.Lk)("button",{type:"button",class:"btn btn-secondary",onClick:t[20]||(t[20]=(...e)=>u.cancel&&u.cancel(...e))}," Cancel ")],32)])}r(4114);var _=r(4373);const A=_.A.create({baseURL:"http://localhost:8080/api"});var U=A,O={data(){return{survey:{firstName:"",lastName:"",streetAddress:"",city:"",state:"",zip:"",phone:"",email:"",surveyDate:"",likedMost:[],interestSource:"",recommendation_list:""},isEditMode:!1}},created(){const e=this.$route.query.survey;e&&(this.isEditMode=!0,this.survey=JSON.parse(e))},methods:{async submitSurvey(){try{const e={...this.survey,likedMost:this.survey.likedMost.join(",")};this.isEditMode?(await U.put(`/surveys/${this.survey.id}`,e),alert("Survey updated successfully!")):(await U.post("/surveys",e),alert("Survey submitted successfully!")),this.$router.push("/")}catch(e){console.error(e),alert("Failed to submit the survey.")}},cancel(){this.$router.push("/")}}};const w=(0,i.A)(O,[["render",N]]);var V=w;const j={class:"container mt-5"},q={class:"table table-striped"},D=["onClick"],F=["onClick"];function J(e,t,r,n,o,s){return(0,l.uX)(),(0,l.CE)("div",j,[t[3]||(t[3]=(0,l.Lk)("h2",null,"List of Surveys",-1)),(0,l.Lk)("table",q,[t[2]||(t[2]=(0,l.Lk)("thead",null,[(0,l.Lk)("tr",null,[(0,l.Lk)("th",null,"First Name"),(0,l.Lk)("th",null,"Last Name"),(0,l.Lk)("th",null,"Email"),(0,l.Lk)("th",null,"Phone"),(0,l.Lk)("th",null,"City"),(0,l.Lk)("th",null,"State"),(0,l.Lk)("th",null,"Survey Date"),(0,l.Lk)("th",null,"Liked Most"),(0,l.Lk)("th",null,"Interest Source"),(0,l.Lk)("th",null,"Likelihood to Recommend"),(0,l.Lk)("th",null,"Actions")])],-1)),(0,l.Lk)("tbody",null,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(o.surveys,(e=>((0,l.uX)(),(0,l.CE)("tr",{key:e.id},[(0,l.Lk)("td",null,(0,v.v_)(e.firstName),1),(0,l.Lk)("td",null,(0,v.v_)(e.lastName),1),(0,l.Lk)("td",null,(0,v.v_)(e.email),1),(0,l.Lk)("td",null,(0,v.v_)(e.phone),1),(0,l.Lk)("td",null,(0,v.v_)(e.city),1),(0,l.Lk)("td",null,(0,v.v_)(e.state),1),(0,l.Lk)("td",null,(0,v.v_)(e.surveyDate),1),(0,l.Lk)("td",null,(0,v.v_)(Array.isArray(e.likedMost)?e.likedMost.join(", "):e.likedMost),1),(0,l.Lk)("td",null,(0,v.v_)(e.interestSource),1),(0,l.Lk)("td",null,(0,v.v_)(e.recommendation_list),1),(0,l.Lk)("td",null,[(0,l.Lk)("button",{class:"btn btn-warning btn-sm",onClick:t=>s.editSurvey(e)},"Edit",8,D),(0,l.Lk)("button",{class:"btn btn-danger btn-sm",onClick:t=>s.deleteSurvey(e.id)},"Delete",8,F)])])))),128))])]),(0,l.Lk)("button",{class:"btn btn-primary",onClick:t[0]||(t[0]=(...e)=>s.fillOutSurvey&&s.fillOutSurvey(...e))},"Fill Out Survey"),(0,l.Lk)("button",{class:"btn btn-secondary",onClick:t[1]||(t[1]=(...e)=>s.cancel&&s.cancel(...e))},"Cancel")])}r(1454);var T={data(){return{surveys:[]}},methods:{async fetchSurveys(){try{const e=await U.get("/surveys");this.surveys=e.data.map((e=>({...e,likedMost:"string"===typeof e.likedMost?e.likedMost.split(","):e.likedMost})))}catch(e){console.error(e)}},async deleteSurvey(e){try{await U.delete(`/surveys/${e}`),this.fetchSurveys(),alert("Survey deleted successfully!")}catch(t){console.error(t),alert("Failed to delete the survey.")}},editSurvey(e){this.$router.push({path:"/survey-form",query:{survey:JSON.stringify(e)}})},fillOutSurvey(){this.$router.push("/survey-form")},cancel(){this.$router.push("/")}},created(){this.fetchSurveys()}};const W=(0,i.A)(T,[["render",J]]);var P=W;const X=[{path:"/",redirect:"/home"},{path:"/home",component:()=>r.e(300).then(r.bind(r,4300))},{path:"/survey-form",component:V},{path:"/survey-list",component:P}],$=(0,c.aE)({history:(0,c.LA)(),routes:X});var H=$;(0,n.Ef)(d).use(H).mount("#app")}},t={};function r(n){var l=t[n];if(void 0!==l)return l.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,l,o){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],l=e[d][1],o=e[d][2];for(var u=!0,i=0;i<n.length;i++)(!1&o||s>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(u=!1,o<s&&(s=o));if(u){e.splice(d--,1);var a=l();void 0!==a&&(t=a)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,l,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+".ba43419f.js"}}(),function(){r.miniCssF=function(e){return"css/"+e+".eeb6d063.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-frontend:";r.l=function(n,l,o,s){if(e[n])e[n].push(l);else{var u,i;if(void 0!==o)for(var a=document.getElementsByTagName("script"),d=0;d<a.length;d++){var c=a[d];if(c.getAttribute("src")==n||c.getAttribute("data-webpack")==t+o){u=c;break}}u||(i=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.setAttribute("data-webpack",t+o),u.src=n),e[n]=[l];var v=function(t,r){u.onerror=u.onload=null,clearTimeout(m);var l=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),l&&l.forEach((function(e){return e(r)})),t)return t(r)},m=setTimeout(v.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=v.bind(null,u.onerror),u.onload=v.bind(null,u.onload),i&&document.head.appendChild(u)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,l,o){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",r.nc&&(s.nonce=r.nc);var u=function(r){if(s.onerror=s.onload=null,"load"===r.type)l();else{var n=r&&r.type,u=r&&r.target&&r.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+u+")");i.name="ChunkLoadError",i.code="CSS_CHUNK_LOAD_FAILED",i.type=n,i.request=u,s.parentNode&&s.parentNode.removeChild(s),o(i)}};return s.onerror=s.onload=u,s.href=t,n?n.parentNode.insertBefore(s,n.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var l=r[n],o=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(o===e||o===t))return l}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){l=s[n],o=l.getAttribute("data-href");if(o===e||o===t)return l}},n=function(n){return new Promise((function(l,o){var s=r.miniCssF(n),u=r.p+s;if(t(s,u))return l();e(n,u,null,l,o)}))},l={524:0};r.f.miniCss=function(e,t){var r={300:1};l[e]?t.push(l[e]):0!==l[e]&&r[e]&&t.push(l[e]=n(e).then((function(){l[e]=0}),(function(t){throw delete l[e],t})))}}}(),function(){var e={524:0};r.f.j=function(t,n){var l=r.o(e,t)?e[t]:void 0;if(0!==l)if(l)n.push(l[2]);else{var o=new Promise((function(r,n){l=e[t]=[r,n]}));n.push(l[2]=o);var s=r.p+r.u(t),u=new Error,i=function(n){if(r.o(e,t)&&(l=e[t],0!==l&&(e[t]=void 0),l)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",u.name="ChunkLoadError",u.type=o,u.request=s,l[1](u)}};r.l(s,i,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,o,s=n[0],u=n[1],i=n[2],a=0;if(s.some((function(t){return 0!==e[t]}))){for(l in u)r.o(u,l)&&(r.m[l]=u[l]);if(i)var d=i(r)}for(t&&t(n);a<s.length;a++)o=s[a],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},n=self["webpackChunkvue_frontend"]=self["webpackChunkvue_frontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(4425)}));n=r.O(n)})();
//# sourceMappingURL=app.e1e8331e.js.map