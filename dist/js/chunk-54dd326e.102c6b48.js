(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54dd326e"],{"013f":function(t,e,n){"use strict";function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return i}))},"0293":function(t,e,n){var i=n("241e"),a=n("53e2");n("ce7e")("getPrototypeOf",(function(){return function(t){return a(i(t))}}))},"061b":function(t,e,n){t.exports=n("fa99")},"0b7a":function(t,e,n){"use strict";var i=n("e53d3"),a=n.n(i);a.a},"0d93":function(t,e,n){"use strict";var i=n("6ef1"),a=n.n(i);a.a},"13b1":function(t,e,n){"use strict";var i=n("5e02"),a=n.n(i);a.a},"15e2":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DateTimeRangeInput"},[n("el-date-picker",{style:t.pickerStyle,attrs:{value:t.dateRange,type:"daterange","picker-options":t.pickerOptions,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},on:{input:t.change}})],1)},a=[],r=n("5701"),o={name:"DateTimeRangeInput",components:{},props:{startTime:{default:"2019-01-01"},endTime:{default:"2019-01-02"},width:{default:"260px"}},data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){new Date;var e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",[e,""])}},{text:"最近一个月",onClick:function(t){new Date;var e=new Date;e.setTime(e.getTime()-2592e6),t.$emit("pick",[e,""])}},{text:"最近三个月",onClick:function(t){new Date;var e=new Date;e.setTime(e.getTime()-7776e6),t.$emit("pick",[e,""])}}]}}},mounted:function(){this.reload()},methods:{reload:function(){},change:function(t){if(!t||t.length<2)return this.$emit("update:start-time",""),void this.$emit("update:end-time","");this.$emit("update:start-time",""===t[0]?"":r["a"].dateFormat(t[0])),this.$emit("update:end-time",""===t[1]?"":r["a"].dateFormat(t[1]))}},watch:{startTime:function(t){console.log(t)}},computed:{dateRange:function(){return[new Date(this.startTime),new Date(this.endTime)]},pickerStyle:function(){return{width:this.width}}}},s=o,c=(n("dfe6"),n("2877")),l=Object(c["a"])(s,i,a,!1,null,"4d9a74ae",null);e["a"]=l.exports},"1df8":function(t,e,n){var i=n("63b6");i(i.S,"Object",{setPrototypeOf:n("ead6").set})},2397:function(t,e,n){var i=n("5ca1"),a=n("2aeb"),r=n("d8e8"),o=n("cb7c"),s=n("d3f4"),c=n("79e5"),l=n("f0c1"),u=(n("7726").Reflect||{}).construct,d=c((function(){function t(){}return!(u((function(){}),[],t)instanceof t)})),f=!c((function(){u((function(){}))}));i(i.S+i.F*(d||f),"Reflect",{construct:function(t,e){r(t),o(e);var n=arguments.length<3?t:r(arguments[2]);if(f&&!d)return u(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var i=[null];return i.push.apply(i,e),new(l.apply(t,i))}var c=n.prototype,p=a(s(c)?c:Object.prototype),h=Function.apply.call(t,p,e);return s(h)?h:p}})},"240e":function(t,e,n){},"25b0":function(t,e,n){n("1df8"),t.exports=n("584a").Object.setPrototypeOf},"2bc4":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("d225"),a=n("bd86"),r=function t(){Object(i["a"])(this,t),Object(a["a"])(this,"id",0),Object(a["a"])(this,"code",""),Object(a["a"])(this,"name",""),Object(a["a"])(this,"chargeType",""),Object(a["a"])(this,"duedate",null),Object(a["a"])(this,"period",""),Object(a["a"])(this,"contract",""),Object(a["a"])(this,"privilege",""),Object(a["a"])(this,"category",0),Object(a["a"])(this,"address",""),Object(a["a"])(this,"contactName",""),Object(a["a"])(this,"phone",""),Object(a["a"])(this,"mobile",""),Object(a["a"])(this,"email",""),Object(a["a"])(this,"remark",""),Object(a["a"])(this,"createUid",0),Object(a["a"])(this,"updateUid",0),Object(a["a"])(this,"isDel",null),Object(a["a"])(this,"search","")}},"2e08":function(t,e,n){var i=n("9def"),a=n("9744"),r=n("be13");t.exports=function(t,e,n,o){var s=String(r(t)),c=s.length,l=void 0===n?" ":String(n),u=i(e);if(u<=c||""==l)return s;var d=u-c,f=a.call(l,Math.ceil(d/l.length));return f.length>d&&(f=f.slice(0,d)),o?f+s:s+f}},"2ebf":function(t,e,n){"use strict";var i=n("796d"),a=n.n(i);a.a},"308d":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("7618"),a=n("013f");function r(t,e){return!e||"object"!==Object(i["a"])(e)&&"function"!==typeof e?Object(a["a"])(t):e}},"41ac":function(t,e,n){"use strict";var i=n("852b"),a=n.n(i);a.a},4339:function(t,e,n){},"4aa6":function(t,e,n){t.exports=n("dc62")},"4b1d":function(t,e,n){"use strict";var i=n("cd4d"),a=n.n(i);a.a},"4d16":function(t,e,n){t.exports=n("25b0")},"4e2b":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("4aa6"),a=n.n(i),r=n("4d16"),o=n.n(r);function s(t,e){return s=o.a||function(t,e){return t.__proto__=e,t},s(t,e)}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=a()(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}},"558e":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ElButtonCurdGroup"},[n("el-button-group",[n("el-button-mini",{staticStyle:{position:"absolute",right:"30px",top:"90px"},attrs:{icon:"add",disabled:t.addDisabled},nativeOn:{click:function(e){return t.$emit("click-add")}}},[t._v("添加客户")])],1),t._t("default")],2)},a=[],r=n("9960"),o={name:"ElButtonCurdGroup",components:{ElButtonMini:r["a"]},data:function(){return{}},mounted:function(){this.reload()},methods:{reload:function(){}},watch:{},computed:{}},s=o,c=(n("56ae"),n("2877")),l=Object(c["a"])(s,i,a,!1,null,"d14d7bce",null);e["a"]=l.exports},"56ae":function(t,e,n){"use strict";var i=n("a0e2"),a=n.n(i);a.a},5701:function(t,e,n){"use strict";n("f576"),n("a481");e["a"]={tsFormat:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"%Y-%m-%d %H:%i:%s",n=new Date(1e3*t);return this.dateTimeFormat(n,e)},dateTimeFormat:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"%Y-%m-%d %H:%i:%s";return e=e.replace("%Y",t.getFullYear()),e=e.replace("%m",this.padStartZero(t.getMonth()+1)),e=e.replace("%d",this.padStartZero(t.getDate())),e=e.replace("%H",this.padStartZero(t.getHours())),e=e.replace("%i",this.padStartZero(t.getMinutes())),e=e.replace("%s",this.padStartZero(t.getSeconds())),e},dateFormat:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"%Y-%m-%d";return this.dateTimeFormat(t,e)},tsDateFormat:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"%Y-%m-%d";return this.tsFormat(t,e)},padStartZero:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return(t+"").padStart(e,"0")}}},"5c91":function(t,e,n){"use strict";var i=n("754b"),a=n.n(i);a.a},"5e02":function(t,e,n){},"6bb5":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("061b"),a=n.n(i),r=n("4d16"),o=n.n(r);function s(t){return s=o.a?a.a:function(t){return t.__proto__||a()(t)},s(t)}},"6ef1":function(t,e,n){},7242:function(t,e,n){},"73b5":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("d225"),a=n("bd86"),r=(n("5701"),function t(){Object(i["a"])(this,t),Object(a["a"])(this,"createUid",0),Object(a["a"])(this,"updateUid",0),Object(a["a"])(this,"createTime",""),Object(a["a"])(this,"updateTime",""),Object(a["a"])(this,"createUserName",""),Object(a["a"])(this,"updateUserName","")})},"754b":function(t,e,n){},"796d":function(t,e,n){},"7dbb":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ElButtonCurdGroupC"},[n("el-button-group",[n("el-button-mini",{staticStyle:{position:"absolute",right:"30px",top:"90px"},attrs:{icon:"add",disabled:t.addDisabled},nativeOn:{click:function(e){return t.$emit("click-add")}}},[t._v("添加仓库")])],1),t._t("default")],2)},a=[],r=n("9960"),o={name:"ElButtonCurdGroupC",components:{ElButtonMini:r["a"]},data:function(){return{}},mounted:function(){this.reload()},methods:{reload:function(){}},watch:{},computed:{}},s=o,c=(n("f6e3"),n("2877")),l=Object(c["a"])(s,i,a,!1,null,"5e9ecd96",null);e["a"]=l.exports},"852b":function(t,e,n){},"8e6e":function(t,e,n){var i=n("5ca1"),a=n("990b"),r=n("6821"),o=n("11e9"),s=n("f1ae");i(i.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,i=r(t),c=o.f,l=a(i),u={},d=0;while(l.length>d)n=c(i,e=l[d++]),void 0!==n&&s(u,e,n);return u}})},9427:function(t,e,n){var i=n("63b6");i(i.S,"Object",{create:n("a159")})},"96da":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"CategoryManagerView flex-box flex-column"},[n("main",[n("div",{staticClass:"tab"},t._l(t.nav,(function(e,i){return n("div",{staticClass:"tab_box",class:{active:i===t.ClickIndex},on:{click:function(e){return t.target(i)}}},[n("span",{staticClass:"el-icon-warning",staticStyle:{"margin-right":"10px"}}),n("span",[t._v(t._s(e.name))])])})),0),n("div",{staticClass:"content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.ClickIndex,expression:"ClickIndex==0"}]},[n("InventorystatusView")],1),n("div",{directives:[{name:"show",rawName:"v-show",value:1==t.ClickIndex,expression:"ClickIndex==1"}]},[n("MovingwaterView")],1),n("div",{directives:[{name:"show",rawName:"v-show",value:2==t.ClickIndex,expression:"ClickIndex==2"}]},[n("QualityManagentView")],1)])])])},a=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("bd86")),o=n("b4d6"),s=n("1812"),c=n("41a2"),l=n("705a"),u=n("de56"),d=n("7f0d"),f=n("a9cf"),p=n("558e"),h=n("9960"),m=n("461d"),g=n("9fce"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"InventorystatusView flex-box flex-column"},[n("div",{staticClass:"flex-box search-card",staticStyle:{"margin-top":"20px"}},[n("div",{},[n("span",[t._v("库区:")]),n("category-type-selector",{attrs:{"is-filter":!0},model:{value:t.filterForm.code,callback:function(e){t.$set(t.filterForm,"code",e)},expression:"filterForm.code"}})],1),n("div",{},[n("span",[t._v("库道:")]),n("category-type-selector",{attrs:{"is-filter":!0},model:{value:t.filterForm.code,callback:function(e){t.$set(t.filterForm,"code",e)},expression:"filterForm.code"}})],1),n("div",{},[n("span",[t._v("库位:")]),n("category-type-selector",{attrs:{"is-filter":!0},model:{value:t.filterForm.code,callback:function(e){t.$set(t.filterForm,"code",e)},expression:"filterForm.code"}})],1),n("div",{},[n("span",[t._v("板数:")]),n("category-type-selector",{attrs:{"is-filter":!0},model:{value:t.filterForm.code,callback:function(e){t.$set(t.filterForm,"code",e)},expression:"filterForm.code"}})],1),n("div",[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入关键词",width:"200px"},on:{change:function(e){return t.refreshData()}},model:{value:t.filterForm.name,callback:function(e){t.$set(t.filterForm,"name",e)},expression:"filterForm.name"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(e){return t.refreshData()}},slot:"append"})],1),n("div",{staticStyle:{position:"absolute",right:"30px",top:"90px"}},[n("el-button",{staticClass:"el-icon-plus",staticStyle:{"margin-left":"auto"},attrs:{type:"primary"},on:{click:t.clickAddButton}},[t._v("添加仓库")])],1)],1),n("div",{staticClass:"flex-grow"},[n("Addmodel",{attrs:{visible:t.showAddDialog,"edit-id":t.editId},on:{"update:visible":function(e){t.showAddDialog=e},finish:t.refreshData}})],1)]),n("div",{staticClass:"list"},[n("el-row",{staticClass:"list_nav",staticStyle:{width:"100%"}},[n("el-col",{attrs:{span:2}},[n("div",{staticClass:"grid-content"})]),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content"},[t._v("库区")])]),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content"},[t._v("库道")])]),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content"},[t._v("库位")])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[t._v("板数")])]),n("el-col",{attrs:{span:1}},[n("div",{staticClass:"grid-content"})]),n("el-col",{attrs:{span:2}},[n("div",{staticClass:"grid-content"})])],1),t._l(t.de,(function(e,i){return n("el-row",{key:e.id,staticClass:"list_box",staticStyle:{width:"100%"}},[n("el-col",{attrs:{span:2}},[n("div",{staticClass:"grid-content"},[t._v("1")])]),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content"},[t._v("库区")])]),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content"},[t._v("库道")])]),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"grid-content"},[t._v("库位")])]),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"grid-content"},[t._v("板数")])]),n("el-col",{attrs:{span:1}},[n("div",{staticClass:"grid-content el-icon-edit"})]),n("el-col",{attrs:{span:2}},[n("div",{staticClass:"grid-content el-icon-delete"})])],1)}))],2),n("div",{staticStyle:{display:"flex","align-items":"center",margin:"10px  auto"}},[n("el-pagination",{attrs:{"current-page":t.currentPage3,"page-size":1,layout:"total,prev, pager, next, jumper",total:this.de.length,background:""},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage3=e},"update:current-page":function(e){t.currentPage3=e}}})],1)])},b=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Addmodel"},[n("el-dialog",{attrs:{visible:t.visible,title:"添加仓库","close-on-click-modal":!1},on:{"update:visible":t.showDialog}},[n("div",{staticStyle:{height:"40px",width:"100%",display:"flex","align-items":"center"}},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[n("el-form-item",{attrs:{label:"库区"}},[n("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"A"},model:{value:t.formInline.region,callback:function(e){t.$set(t.formInline,"region",e)},expression:"formInline.region"}},[n("el-option",{attrs:{label:"区域一",value:"shanghai"}}),n("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),n("el-form-item",{attrs:{label:"库道"}},[n("el-input",{staticStyle:{width:"100px"},attrs:{type:"number"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1),n("el-form-item",{attrs:{label:"库位"}},[n("el-input",{staticStyle:{width:"100px"},attrs:{type:"number"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1),n("el-form-item",{attrs:{label:"板数"}},[n("el-input",{staticStyle:{width:"100px"},attrs:{type:"number"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1)],1)],1),n("table",[n("tr",{staticStyle:{background:"#eee",font:"600 14px/40px ''"}},[n("td",[t._v("库区")]),n("td",[t._v("库道")]),n("td",[t._v("库位")]),n("td",[t._v("板数")])]),n("tr",{staticStyle:{height:"80px"}},[n("td"),n("td"),n("td",[t._v("1020")]),n("td")])]),n("div",{staticClass:"text-center"},[n("el-button-submit",{attrs:{"is-block":!1},nativeOn:{click:function(e){return t.clickSubmit(e)}}},[t._v("保存")])],1)])],1)},w=[],x=n("2bc4"),C=n("b5d0"),k=n("15e2"),_=n("ef44"),O={name:"Addmodel",components:{ElButtonSubmit:C["a"],DateTimeRangeInput:k["a"],CategoryTypeSelector:f["a"]},props:{type:{default:1},visible:{default:!1},editId:{default:0}},data:function(){return{clientEntry:new x["a"],formInline:{user:"",region:""}}},mounted:function(){this.reload()},methods:{reload:function(){},showDialog:function(t){this.$emit("update:visible",t)},refreshData:function(){var t=this;this.editId?this.$ajax.request(s["a"].company.getById,{id:this.editId}).then((function(e){t.clientEntry=e})):this.clientEntry=new x["a"]},clickSubmit:function(){var t=this;console.log("this.clientEntry^^^^^^^^^^^^^^"),console.log(this.clientEntry);var e=s["a"].company.edit;this.editId?this.clientEntry.updateUid=_["a"].getLoginUser().id:(this.clientEntry.category=2,this.clientEntry.createUid=_["a"].getLoginUser().id,this.clientEntry.id=null,e=s["a"].company.add),console.log("createUid>>>>>>>>>>>"+this.clientEntry.createUid),console.log(_["a"].getLoginUser()),this.$ajax.request(e,this.clientEntry).then((function(e){l["a"].toastSuccess(e),t.showDialog(!1),t.$emit("finish")}))}},watch:{visible:function(t){t&&this.refreshData()}},computed:{}},S=O,j=(n("5c91"),n("2877")),I=Object(j["a"])(S,y,w,!1,null,"925c9572",null),D=I.exports,E={name:"InventorystatusView",components:{CategoryAddDialog:g["a"],TablePanel:m["a"],CategoryTypeSelector:f["a"],SearchCardLayout:o["a"],Addmodel:D},props:{},data:function(){return{filterForm:new u["a"],data:[],showAddDialog:!1,paginate:new d["a"](this.refreshData),selectedRow:[],sortingColumn:null,editId:0,de:[{},{}]}},mounted:function(){},methods:{clickAddButton:function(){this.showAddDialog=!0}},watch:{},computed:{}},$=E,F=(n("2ebf"),Object(j["a"])($,v,b,!1,null,"22c46e80",null)),A=F.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"InventorystatusView flex-box flex-column"},[n("div",{staticClass:"flex-box search-card",staticStyle:{"margin-top":"20px"}},[n("div",{},[n("span",[t._v("品种:")]),n("category-type-selector",{attrs:{"is-filter":!0},model:{value:t.filterForm.code,callback:function(e){t.$set(t.filterForm,"code",e)},expression:"filterForm.code"}})],1),n("div",[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入关键词",width:"200px"},on:{change:function(e){return t.refreshData()}},model:{value:t.filterForm.name,callback:function(e){t.$set(t.filterForm,"name",e)},expression:"filterForm.name"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(e){return t.refreshData()}},slot:"append"})],1),n("div",{staticStyle:{position:"absolute",right:"30px",top:"90px"}},[n("el-button",{staticClass:"el-icon-plus",staticStyle:{"margin-left":"auto"},attrs:{type:"primary"},on:{click:t.clickAddButton}},[t._v("添加品种")])],1)],1),n("div",{staticClass:"flex-grow"},[n("Addvariety",{attrs:{visible:t.showAddDialog,"edit-id":t.editId},on:{"update:visible":function(e){t.showAddDialog=e},finish:t.refreshData}})],1)]),n("div",{staticClass:"list"},[n("el-row",{staticClass:"list_nav",staticStyle:{width:"100%"}},[n("el-col",{attrs:{span:2}},[n("div",{staticClass:"grid-content"})]),n("el-col",{attrs:{span:16}},[n("div",{staticClass:"grid-content"},[t._v("品种")])]),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content"})]),n("el-col",{attrs:{span:2}},[n("div",{staticClass:"grid-content"})])],1),t._l(t.de,(function(e,i){return n("el-row",{key:e.id,staticClass:"list_box",staticStyle:{width:"100%"}},[n("el-col",{attrs:{span:2}},[n("div",{staticClass:"grid-content"},[t._v("1")])]),n("el-col",{attrs:{span:16}},[n("div",{staticClass:"grid-content"},[t._v("库区")])]),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content el-icon-edit"})]),n("el-col",{attrs:{span:2}},[n("div",{staticClass:"grid-content el-icon-delete"})])],1)}))],2),n("div",{staticStyle:{display:"flex","align-items":"center",margin:"10px  auto"}},[n("el-pagination",{attrs:{"current-page":t.currentPage3,"page-size":1,layout:"total,prev, pager, next, jumper",total:this.de.length,background:""},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage3=e},"update:current-page":function(e){t.currentPage3=e}}})],1)])},P=[],B=n("7dbb"),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Addmodel"},[n("el-dialog",{attrs:{visible:t.visible,title:"添加品种","close-on-click-modal":!1},on:{"update:visible":t.showDialog}},[n("div",{staticStyle:{height:"40px",width:"100%",display:"flex","align-items":"center"}},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[n("el-form-item",{attrs:{label:"库区"}},[n("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"A"},model:{value:t.formInline.region,callback:function(e){t.$set(t.formInline,"region",e)},expression:"formInline.region"}},[n("el-option",{attrs:{label:"区域一",value:"shanghai"}}),n("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),n("el-form-item",{attrs:{label:"库道"}},[n("el-input",{staticStyle:{width:"100px"},attrs:{type:"number"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1),n("el-form-item",{attrs:{label:"库位"}},[n("el-input",{staticStyle:{width:"100px"},attrs:{type:"number"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1),n("el-form-item",{attrs:{label:"板数"}},[n("el-input",{staticStyle:{width:"100px"},attrs:{type:"number"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1)],1)],1),n("table",[n("tr",{staticStyle:{background:"#eee",font:"600 14px/40px ''"}},[n("td",[t._v("库区")]),n("td",[t._v("库道")]),n("td",[t._v("库位")]),n("td",[t._v("板数")])]),n("tr",{staticStyle:{height:"80px"}},[n("td"),n("td"),n("td",[t._v("1020")]),n("td")])]),n("div",{staticClass:"text-center"},[n("el-button-submit",{attrs:{"is-block":!1},nativeOn:{click:function(e){return t.clickSubmit(e)}}},[t._v("保存")])],1)])],1)},R=[],V={name:"Addvariety",components:{ElButtonSubmit:C["a"],DateTimeRangeInput:k["a"],CategoryTypeSelector:f["a"]},props:{type:{default:1},visible:{default:!1},editId:{default:0}},data:function(){return{clientEntry:new x["a"],formInline:{user:"",region:""}}},mounted:function(){this.reload()},methods:{reload:function(){},showDialog:function(t){this.$emit("update:visible",t)},refreshData:function(){var t=this;this.editId?this.$ajax.request(s["a"].company.getById,{id:this.editId}).then((function(e){t.clientEntry=e})):this.clientEntry=new x["a"]},clickSubmit:function(){var t=this;console.log("this.clientEntry^^^^^^^^^^^^^^"),console.log(this.clientEntry);var e=s["a"].company.edit;this.editId?this.clientEntry.updateUid=_["a"].getLoginUser().id:(this.clientEntry.category=2,this.clientEntry.createUid=_["a"].getLoginUser().id,this.clientEntry.id=null,e=s["a"].company.add),console.log("createUid>>>>>>>>>>>"+this.clientEntry.createUid),console.log(_["a"].getLoginUser()),this.$ajax.request(e,this.clientEntry).then((function(e){l["a"].toastSuccess(e),t.showDialog(!1),t.$emit("finish")}))}},watch:{visible:function(t){t&&this.refreshData()}},computed:{}},z=V,L=(n("0d93"),Object(j["a"])(z,U,R,!1,null,"a1ca545c",null)),M=L.exports,q={name:"InventorystatusView",components:{CategoryAddDialog:g["a"],TablePanel:m["a"],CategoryTypeSelector:f["a"],SearchCardLayout:o["a"],ElButtonCurdGroupC:B["a"],Addvariety:M},props:{},data:function(){return{filterForm:new u["a"],data:[],showAddDialog:!1,paginate:new d["a"](this.refreshData),selectedRow:[],sortingColumn:null,editId:0,de:[{},{}]}},mounted:function(){},methods:{clickAddButton:function(){this.showAddDialog=!0}},watch:{},computed:{}},N=q,G=(n("9d0a"),Object(j["a"])(N,T,P,!1,null,"2af37a92",null)),Y=G.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"InventorystatusView flex-box flex-column"},[n("div",{staticClass:"flex-box search-card",staticStyle:{"margin-top":"20px"}},[n("div",{},[n("span",[t._v("品种:")]),n("category-type-selector",{attrs:{"is-filter":!0},model:{value:t.filterForm.code,callback:function(e){t.$set(t.filterForm,"code",e)},expression:"filterForm.code"}})],1),n("div",[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入关键词",width:"200px"},on:{change:function(e){return t.refreshData()}},model:{value:t.filterForm.name,callback:function(e){t.$set(t.filterForm,"name",e)},expression:"filterForm.name"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(e){return t.refreshData()}},slot:"append"})],1),n("div",{staticStyle:{position:"absolute",right:"30px",top:"90px"}},[n("el-button",{staticClass:"el-icon-plus",staticStyle:{"margin-left":"auto"},attrs:{type:"primary"},on:{click:t.clickAddButton}},[t._v("添加车型")])],1)],1),n("div",{staticClass:"flex-grow"},[n("AddVehicle",{attrs:{visible:t.showAddDialog,"edit-id":t.editId},on:{"update:visible":function(e){t.showAddDialog=e},finish:t.refreshData}})],1)]),n("div",{staticClass:"list"},[n("el-row",{staticClass:"list_nav",staticStyle:{width:"100%"}},[n("el-col",{attrs:{span:2}},[n("div",{staticClass:"grid-content"})]),n("el-col",{attrs:{span:16}},[n("div",{staticClass:"grid-content"},[t._v("品种")])]),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content"})]),n("el-col",{attrs:{span:2}},[n("div",{staticClass:"grid-content"})])],1),t._l(t.de,(function(e,i){return n("el-row",{key:e.id,staticClass:"list_box",staticStyle:{width:"100%"}},[n("el-col",{attrs:{span:2}},[n("div",{staticClass:"grid-content"},[t._v("1")])]),n("el-col",{attrs:{span:16}},[n("div",{staticClass:"grid-content"},[t._v("库区")])]),n("el-col",{attrs:{span:3}},[n("div",{staticClass:"grid-content el-icon-edit"})]),n("el-col",{attrs:{span:2}},[n("div",{staticClass:"grid-content el-icon-delete"})])],1)}))],2),n("div",{staticStyle:{display:"flex","align-items":"center",margin:"10px  auto"}},[n("el-pagination",{attrs:{"current-page":t.currentPage3,"page-size":1,layout:"total,prev, pager, next, jumper",total:this.de.length,background:""},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage3=e},"update:current-page":function(e){t.currentPage3=e}}})],1)])},H=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"AddVehicle"},[n("el-dialog",{attrs:{visible:t.visible,title:"添加车型","close-on-click-modal":!1},on:{"update:visible":t.showDialog}},[n("div",{staticStyle:{height:"40px",width:"100%",display:"flex","align-items":"center"}},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.formInline}},[n("el-form-item",{attrs:{label:"库区"}},[n("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"A"},model:{value:t.formInline.region,callback:function(e){t.$set(t.formInline,"region",e)},expression:"formInline.region"}},[n("el-option",{attrs:{label:"区域一",value:"shanghai"}}),n("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),n("el-form-item",{attrs:{label:"库道"}},[n("el-input",{staticStyle:{width:"100px"},attrs:{type:"number"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1),n("el-form-item",{attrs:{label:"库位"}},[n("el-input",{staticStyle:{width:"100px"},attrs:{type:"number"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1),n("el-form-item",{attrs:{label:"板数"}},[n("el-input",{staticStyle:{width:"100px"},attrs:{type:"number"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}})],1)],1)],1),n("table",[n("tr",{staticStyle:{background:"#eee",font:"600 14px/40px ''"}},[n("td",[t._v("库区")]),n("td",[t._v("库道")]),n("td",[t._v("库位")]),n("td",[t._v("板数")])]),n("tr",{staticStyle:{height:"80px"}},[n("td"),n("td"),n("td",[t._v("1020")]),n("td")])]),n("div",{staticClass:"text-center"},[n("el-button-submit",{attrs:{"is-block":!1},nativeOn:{click:function(e){return t.clickSubmit(e)}}},[t._v("保存")])],1)])],1)},Q=[],K={name:"AddVehicle ",components:{ElButtonSubmit:C["a"],DateTimeRangeInput:k["a"],CategoryTypeSelector:f["a"]},props:{type:{default:1},visible:{default:!1},editId:{default:0}},data:function(){return{clientEntry:new x["a"],formInline:{user:"",region:""}}},mounted:function(){this.reload()},methods:{reload:function(){},showDialog:function(t){this.$emit("update:visible",t)},refreshData:function(){var t=this;this.editId?this.$ajax.request(s["a"].company.getById,{id:this.editId}).then((function(e){t.clientEntry=e})):this.clientEntry=new x["a"]},clickSubmit:function(){var t=this;console.log("this.clientEntry^^^^^^^^^^^^^^"),console.log(this.clientEntry);var e=s["a"].company.edit;this.editId?this.clientEntry.updateUid=_["a"].getLoginUser().id:(this.clientEntry.category=2,this.clientEntry.createUid=_["a"].getLoginUser().id,this.clientEntry.id=null,e=s["a"].company.add),console.log("createUid>>>>>>>>>>>"+this.clientEntry.createUid),console.log(_["a"].getLoginUser()),this.$ajax.request(e,this.clientEntry).then((function(e){l["a"].toastSuccess(e),t.showDialog(!1),t.$emit("finish")}))}},watch:{visible:function(t){t&&this.refreshData()}},computed:{}},W=K,X=(n("d05f"),Object(j["a"])(W,J,Q,!1,null,"b7ce335c",null)),tt=X.exports,et={name:"InventorystatusView",components:{CategoryAddDialog:g["a"],TablePanel:m["a"],CategoryTypeSelector:f["a"],SearchCardLayout:o["a"],ElButtonCurdGroupC:B["a"],AddVehicle:tt},props:{},data:function(){return{filterForm:new u["a"],data:[],showAddDialog:!1,paginate:new d["a"](this.refreshData),selectedRow:[],sortingColumn:null,editId:0,de:[{},{}]}},mounted:function(){},methods:{clickAddButton:function(){this.showAddDialog=!0}},watch:{},computed:{}},nt=et,it=(n("13b1"),Object(j["a"])(nt,Z,H,!1,null,"cc91e360",null)),at=it.exports;function rt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function ot(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?rt(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var st={name:"CategoryManagerView",components:{CategoryAddDialog:g["a"],TablePanel:m["a"],ElButtonMini:h["a"],ElButtonCurdGroup:p["a"],CategoryTypeSelector:f["a"],SearchCardLayout:o["a"],InventorystatusView:A,MovingwaterView:Y,QualityManagentView:at},props:{},data:function(){return{loading:!0,showAddDialog:!1,filterForm:new u["a"],data:[],paginate:new d["a"](this.refreshData),selectedRow:[],sortingColumn:null,editId:0,nav:[{name:"仓库管理"},{name:"品种管理"},{name:"车型管理"}],ClickIndex:0}},mounted:function(){this.reload()},methods:{reload:function(){this.refreshData()},refreshData:function(){var t=this;this.loading=!0,this.$ajax.request(s["a"].category.list,ot({},c["a"].getSortField(this.sortingColumn),{},this.paginate.getJSON(),{},this.filterForm)).then((function(e){t.data=e.list,t.paginate.setPaginate(e)})).finally((function(){return t.loading=!1}))},sortChange:function(t){this.sortingColumn=t,this.refreshData()},clickAddButton:function(){this.editId=0,this.showAddDialog=!0},clickEditButton:function(){this.editId=this.selectedRow[0].id,this.showAddDialog=!0},clickDeleteButton:function(){this.delete(this.selectedRow)},clickRowEditButton:function(t){this.editId=t.id,this.showAddDialog=!0},clickRowDeleteButton:function(t){this.delete([t])},delete:function(t){var e=this;l["a"].confirm("\n                    确定删除以下分类字典吗？ <br>\n                    [ ".concat(t.map((function(t){return t.name})).join(",")," ]\n                ")).then((function(){return e.$ajax.request(s["a"].category.delete,{ids:t.map((function(t){return t.id})).join(",")})})).then((function(t){l["a"].toastSuccess(t),e.refreshData()}))},target:function(t){this.ClickIndex=t,console.log(t)}},watch:{},computed:{}},ct=st,lt=(n("0b7a"),Object(j["a"])(ct,i,a,!1,null,"70599e08",null));e["default"]=lt.exports},9744:function(t,e,n){"use strict";var i=n("4588"),a=n("be13");t.exports=function(t){var e=String(a(this)),n="",r=i(t);if(r<0||r==1/0)throw RangeError("Count can't be negative");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},"990b":function(t,e,n){var i=n("9093"),a=n("2621"),r=n("cb7c"),o=n("7726").Reflect;t.exports=o&&o.ownKeys||function(t){var e=i.f(r(t)),n=a.f;return n?e.concat(n(t)):e}},"9d0a":function(t,e,n){"use strict";var i=n("7242"),a=n.n(i);a.a},"9fce":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"CategoryAddDialog"},[n("el-dialog",{attrs:{visible:t.visible,width:"300px",title:t.editId?"编辑 "+t.category.id:"新增"},on:{"update:visible":t.showDialog}},[n("el-form",{attrs:{"label-position":"top"}},[n("el-form-item",{attrs:{label:"字典名称"}},[n("el-input",{attrs:{type:"text"},model:{value:t.category.name,callback:function(e){t.$set(t.category,"name",e)},expression:"category.name"}})],1),n("el-form-item",{attrs:{label:"字典分类"}},[n("category-type-selector",{attrs:{"is-filter":!1},model:{value:t.category.type,callback:function(e){t.$set(t.category,"type",e)},expression:"category.type"}})],1),n("el-form-item",{attrs:{label:"备注"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.category.remark,callback:function(e){t.$set(t.category,"remark",e)},expression:"category.remark"}})],1)],1),n("div",{staticClass:"mt-md"},[n("el-button-submit",{attrs:{loading:t.loading,size:"small"},nativeOn:{click:function(e){return t.clickSubmit(e)}}},[t._v("\n                保存提交\n            ")])],1)],1)],1)},a=[],r=n("b5d0"),o=n("1812"),s=n("705a"),c=n("de56"),l=n("a9cf"),u={name:"CategoryAddDialog",components:{CategoryTypeSelector:l["a"],ElButtonSubmit:r["a"]},props:{visible:{default:!1},editId:{default:0}},data:function(){return{category:new c["a"],loading:!1}},mounted:function(){this.reload()},methods:{reload:function(){},showDialog:function(t){this.$emit("update:visible",t)},refreshData:function(){var t=this;if(!this.editId)return this.category=new c["a"];this.loading=!0,this.$ajax.request(o["a"].category.getById,{id:this.editId}).then((function(e){t.category=e})).finally((function(){return t.loading=!1}))},clickSubmit:function(){var t=this,e=this.editId?o["a"].category.update:o["a"].category.insert;this.loading=!0,this.$ajax.request(e,this.category).then((function(e){s["a"].toastSuccess(e),t.showDialog(!1),t.$emit("finish")})).finally((function(){return t.loading=!1}))}},watch:{visible:function(t){t&&this.refreshData()}},computed:{}},d=u,f=(n("41ac"),n("2877")),p=Object(f["a"])(d,i,a,!1,null,"54cc6fed",null);e["a"]=p.exports},a0e2:function(t,e,n){},b5d0:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-button",{style:t.buttonStyle,attrs:{type:"primary",size:t.size,loading:t.loading,"native-type":t.nativeType}},[t._t("default")],2)},a=[],r={name:"ElButtonSubmit",components:{},props:{isBlock:{default:!0},size:{default:"medium"},loading:{default:!1},nativeType:{default:"submit"}},data:function(){return{}},mounted:function(){this.reload()},activated:function(){},methods:{reload:function(){}},watch:{},computed:{buttonStyle:function(){return{width:this.isBlock?"100%":"auto"}}}},o=r,s=(n("4b1d"),n("2877")),c=Object(s["a"])(o,i,a,!1,null,"31f143d0",null);e["a"]=c.exports},cd4d:function(t,e,n){},ce7e:function(t,e,n){var i=n("63b6"),a=n("584a"),r=n("294c");t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],o={};o[t]=e(n),i(i.S+i.F*r((function(){n(1)})),"Object",o)}},d05f:function(t,e,n){"use strict";var i=n("f351"),a=n.n(i);a.a},dc62:function(t,e,n){n("9427");var i=n("584a").Object;t.exports=function(t,e){return i.create(t,e)}},de56:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));n("6b54"),n("2397");var i=n("d225"),a=n("013f"),r=n("4e2b"),o=n("308d"),s=n("6bb5"),c=n("bd86"),l=n("73b5");function u(t){return function(){var e,n=Object(s["a"])(t);if(d()){var i=Object(s["a"])(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return Object(o["a"])(this,e)}}function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var f=function(t){Object(r["a"])(n,t);var e=u(n);function n(){var t;Object(i["a"])(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o)),Object(c["a"])(Object(a["a"])(t),"id",0),Object(c["a"])(Object(a["a"])(t),"type",0),Object(c["a"])(Object(a["a"])(t),"name",""),Object(c["a"])(Object(a["a"])(t),"remark",""),Object(c["a"])(Object(a["a"])(t),"typeName",""),t}return n}(l["a"])},dfe6:function(t,e,n){"use strict";var i=n("240e"),a=n.n(i);a.a},e53d3:function(t,e,n){},ead6:function(t,e,n){var i=n("f772"),a=n("e4ae"),r=function(t,e){if(a(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("d864")(Function.call,n("bf0b").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:r}},f0c1:function(t,e,n){"use strict";var i=n("d8e8"),a=n("d3f4"),r=n("31f4"),o=[].slice,s={},c=function(t,e,n){if(!(e in s)){for(var i=[],a=0;a<e;a++)i[a]="a["+a+"]";s[e]=Function("F,a","return new F("+i.join(",")+")")}return s[e](t,n)};t.exports=Function.bind||function(t){var e=i(this),n=o.call(arguments,1),s=function(){var i=n.concat(o.call(arguments));return this instanceof s?c(e,i.length,i):r(e,i,t)};return a(e.prototype)&&(s.prototype=e.prototype),s}},f351:function(t,e,n){},f576:function(t,e,n){"use strict";var i=n("5ca1"),a=n("2e08"),r=n("a25f"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);i(i.P+i.F*o,"String",{padStart:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},f6e3:function(t,e,n){"use strict";var i=n("4339"),a=n.n(i);a.a},fa99:function(t,e,n){n("0293"),t.exports=n("584a").Object.getPrototypeOf}}]);
//# sourceMappingURL=chunk-54dd326e.102c6b48.js.map