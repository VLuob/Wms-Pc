(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6792bac9"],{"0424":function(t,e,a){},"15e2":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"DateTimeRangeInput"},[a("el-date-picker",{style:t.pickerStyle,attrs:{value:t.dateRange,type:"daterange","picker-options":t.pickerOptions,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},on:{input:t.change}})],1)},i=[],s=a("5701"),l={name:"DateTimeRangeInput",components:{},props:{startTime:{default:"2019-01-01"},endTime:{default:"2019-01-02"},width:{default:"260px"}},data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){new Date;var e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",[e,""])}},{text:"最近一个月",onClick:function(t){new Date;var e=new Date;e.setTime(e.getTime()-2592e6),t.$emit("pick",[e,""])}},{text:"最近三个月",onClick:function(t){new Date;var e=new Date;e.setTime(e.getTime()-7776e6),t.$emit("pick",[e,""])}}]}}},mounted:function(){this.reload()},methods:{reload:function(){},change:function(t){if(!t||t.length<2)return this.$emit("update:start-time",""),void this.$emit("update:end-time","");this.$emit("update:start-time",""===t[0]?"":s["a"].dateFormat(t[0])),this.$emit("update:end-time",""===t[1]?"":s["a"].dateFormat(t[1]))}},watch:{startTime:function(t){console.log(t)}},computed:{dateRange:function(){return[new Date(this.startTime),new Date(this.endTime)]},pickerStyle:function(){return{width:this.width}}}},o=l,c=(a("dfe6"),a("2877")),r=Object(c["a"])(o,n,i,!1,null,"4d9a74ae",null);e["a"]=r.exports},"240e":function(t,e,a){},"2bc4":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("d225"),i=a("bd86"),s=function t(){Object(n["a"])(this,t),Object(i["a"])(this,"id",0),Object(i["a"])(this,"code",""),Object(i["a"])(this,"name",""),Object(i["a"])(this,"chargeType",""),Object(i["a"])(this,"duedate",null),Object(i["a"])(this,"period",""),Object(i["a"])(this,"contract",""),Object(i["a"])(this,"privilege",""),Object(i["a"])(this,"category",0),Object(i["a"])(this,"address",""),Object(i["a"])(this,"contactName",""),Object(i["a"])(this,"phone",""),Object(i["a"])(this,"mobile",""),Object(i["a"])(this,"email",""),Object(i["a"])(this,"remark",""),Object(i["a"])(this,"createUid",0),Object(i["a"])(this,"updateUid",0),Object(i["a"])(this,"isDel",null),Object(i["a"])(this,"search","")}},"2d8f":function(t,e,a){},"2e08":function(t,e,a){var n=a("9def"),i=a("9744"),s=a("be13");t.exports=function(t,e,a,l){var o=String(s(t)),c=o.length,r=void 0===a?" ":String(a),d=n(e);if(d<=c||""==r)return o;var u=d-c,p=i.call(r,Math.ceil(u/r.length));return p.length>u&&(p=p.slice(0,u)),l?p+o:o+p}},"4b1d":function(t,e,a){"use strict";var n=a("cd4d"),i=a.n(n);i.a},5701:function(t,e,a){"use strict";a("f576"),a("a481");e["a"]={tsFormat:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"%Y-%m-%d %H:%i:%s",a=new Date(1e3*t);return this.dateTimeFormat(a,e)},dateTimeFormat:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"%Y-%m-%d %H:%i:%s";return e=e.replace("%Y",t.getFullYear()),e=e.replace("%m",this.padStartZero(t.getMonth()+1)),e=e.replace("%d",this.padStartZero(t.getDate())),e=e.replace("%H",this.padStartZero(t.getHours())),e=e.replace("%i",this.padStartZero(t.getMinutes())),e=e.replace("%s",this.padStartZero(t.getSeconds())),e},dateFormat:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"%Y-%m-%d";return this.dateTimeFormat(t,e)},tsDateFormat:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"%Y-%m-%d";return this.tsFormat(t,e)},padStartZero:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return(t+"").padStart(e,"0")}}},"5e9b":function(t,e,a){"use strict";var n=a("0424"),i=a.n(n);i.a},"69a0":function(t,e,a){"use strict";var n=a("be6b"),i=a.n(n);i.a},"964d":function(t,e,a){"use strict";var n=a("2d8f"),i=a.n(n);i.a},9744:function(t,e,a){"use strict";var n=a("4588"),i=a("be13");t.exports=function(t){var e=String(i(this)),a="",s=n(t);if(s<0||s==1/0)throw RangeError("Count can't be negative");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(a+=e);return a}},b5d0:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-button",{style:t.buttonStyle,attrs:{type:"primary",size:t.size,loading:t.loading,"native-type":t.nativeType}},[t._t("default")],2)},i=[],s={name:"ElButtonSubmit",components:{},props:{isBlock:{default:!0},size:{default:"medium"},loading:{default:!1},nativeType:{default:"submit"}},data:function(){return{}},mounted:function(){this.reload()},activated:function(){},methods:{reload:function(){}},watch:{},computed:{buttonStyle:function(){return{width:this.isBlock?"100%":"auto"}}}},l=s,o=(a("4b1d"),a("2877")),c=Object(o["a"])(l,n,i,!1,null,"31f143d0",null);e["a"]=c.exports},be6b:function(t,e,a){},cd4d:function(t,e,a){},dfe6:function(t,e,a){"use strict";var n=a("240e"),i=a.n(n);i.a},e815:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"BookList flex-box flex-column",staticStyle:{"margin-top":"20px"}},[t._m(0),a("div",{staticClass:"flex-box search-card"},[a("div",{},[a("span",[t._v("客户:")]),a("category-type-selector",{attrs:{"is-filter":!0},model:{value:t.filterForm.code,callback:function(e){t.$set(t.filterForm,"code",e)},expression:"filterForm.code"}})],1),a("div",{},[a("span",[t._v("预约类别:")]),a("category-type-selector",{attrs:{"is-filter":!0},model:{value:t.filterForm.code,callback:function(e){t.$set(t.filterForm,"code",e)},expression:"filterForm.code"}})],1),a("div",{},[a("span",[t._v("审核状态:")]),a("category-type-selector",{attrs:{"is-filter":!0},model:{value:t.filterForm.code,callback:function(e){t.$set(t.filterForm,"code",e)},expression:"filterForm.code"}})],1),a("div",[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"输入关键词",width:"200px"},on:{change:function(e){return t.refreshData()}},model:{value:t.filterForm.name,callback:function(e){t.$set(t.filterForm,"name",e)},expression:"filterForm.name"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(e){return t.refreshData()}},slot:"append"})],1),a("div",{staticStyle:{position:"absolute",right:"30px",top:"90px"}},[a("el-button",{staticClass:"el-icon-plus",staticStyle:{"margin-left":"auto"},attrs:{type:"primary"},on:{click:t.clickAddButton}},[t._v("添加预约")])],1)],1)]),a("div",{staticClass:"flex-grow"},[a("client-add-dialog",{attrs:{visible:t.showAddDialog,"edit-id":t.editId},on:{"update:visible":function(e){t.showAddDialog=e},finish:t.refreshData}})],1),a("div",{staticClass:"list"},[a("el-row",{staticClass:"list_nav",staticStyle:{width:"100%"}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("单号")])]),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("客户")])]),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("品号")])]),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("货品")])]),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("件数")])]),a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content"},[t._v("预约时间")])]),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("联系人")])]),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("联系方式")])]),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("预约类别")])]),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("审核状态")])]),a("el-col",{attrs:{span:1}},[a("div",{staticClass:"grid-content"})]),a("el-col",{attrs:{span:1}},[a("div",{staticClass:"grid-content"})]),a("el-col",{attrs:{span:1}},[a("div",{staticClass:"grid-content"})])],1),t._l(t.de,(function(e,n){return a("el-row",{key:e.id,staticClass:"list_box",staticStyle:{width:"100%"}},[a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("单号")])]),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("客户")])]),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("品号")])]),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("货品")])]),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("件数")])]),a("el-col",{attrs:{span:3}},[a("div",{staticClass:"grid-content"},[t._v("预约时间")])]),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("联系人")])]),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("联系方式")])]),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("预约类别")])]),a("el-col",{attrs:{span:2}},[a("div",{staticClass:"grid-content"},[t._v("审核状态")])]),a("el-col",{attrs:{span:1}},[a("div",{},[a("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("预约单")])],1)]),a("el-col",{attrs:{span:1}},[a("div",{staticClass:"el-icon-edit"})]),a("el-col",{attrs:{span:1}},[a("div",{staticClass:"el-icon-upload2"})])],1)}))],2),a("div",{staticStyle:{display:"flex","align-items":"center",margin:"10px  auto"}},[a("el-pagination",{attrs:{"current-page":t.currentPage3,"page-size":1,layout:"total,prev, pager, next, jumper",total:this.de.length,background:""},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage3=e},"update:current-page":function(e){t.currentPage3=e}}})],1)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logout"},[a("span",{staticClass:"el-icon-warning"}),a("span",{staticStyle:{font:"14px ''","margin-left":"10px"}},[t._v("预约列表")])])}],s=a("b4d6"),l=a("1812"),o=(a("41a2"),a("705a")),c=a("2bc4"),r=a("7f0d"),d=a("a9cf"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ElButtonCurdGroup"},[a("el-button-group",[a("el-button-mini",{staticStyle:{position:"absolute",right:"30px",top:"90px"},attrs:{icon:"add",disabled:t.addDisabled},nativeOn:{click:function(e){return t.$emit("click-add")}}},[t._v("添加预约")])],1),t._t("default")],2)},p=[],v=a("9960"),f={name:"ElButtonCurdGroupY",components:{ElButtonMini:v["a"]},data:function(){return{}},mounted:function(){this.reload()},methods:{reload:function(){}},watch:{},computed:{}},h=f,g=(a("69a0"),a("2877")),m=Object(g["a"])(h,u,p,!1,null,"1f5e10a8",null),b=m.exports,_=a("461d"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"StockEntryAddDialog"},[a("el-dialog",{attrs:{visible:t.visible,title:"添加预约","close-on-click-modal":!1},on:{"update:visible":t.showDialog}},[a("table",[a("tr",{staticStyle:{background:"#eee",font:"600 14px/40px ''"}},[a("td",[t._v("预约类别")]),a("td",[t._v("客户")]),a("td",[t._v("品号")]),a("td",[t._v("货品")]),a("td",[t._v("件数")]),a("td",[t._v("预约入库时间")])]),a("tr",{staticStyle:{height:"80px"}},[a("td",[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("td",[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("td",[t._v("1020")]),a("td",[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("td",[t._v("20")]),a("td",[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1)]),a("tr",{staticStyle:{background:"#eaeaea",font:"600 14px/40px ''"}},[a("td",[t._v("联系人")]),a("td",[t._v("联系方式")]),a("td",[t._v("司机姓名")]),a("td",[t._v("司机电话")]),a("td",[t._v("车型")]),a("td",[t._v("车牌号")])]),a("tr",{staticStyle:{height:"80px"}},[a("td",[t._v("Cee")]),a("td",[t._v("15899574688")]),a("td",[t._v("栗色")]),a("td",[t._v("15899574688")]),a("td",[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("td",[t._v("沪A888888")])])]),a("div",{staticClass:"text-center"},[a("el-button-submit",{attrs:{"is-block":!1},nativeOn:{click:function(e){return t.clickSubmit(e)}}},[t._v("保存")])],1)])],1)},C=[],k=a("b5d0"),w=a("15e2"),x=a("ef44"),S={name:"ClientAddDialog",components:{ElButtonSubmit:k["a"],DateTimeRangeInput:w["a"]},props:{type:{default:1},visible:{default:!1},editId:{default:0}},data:function(){return{clientEntry:new c["a"]}},mounted:function(){this.reload()},methods:{reload:function(){},showDialog:function(t){this.$emit("update:visible",t)},refreshData:function(){var t=this;this.editId?this.$ajax.request(l["a"].company.getById,{id:this.editId}).then((function(e){t.clientEntry=e})):this.clientEntry=new c["a"]},clickSubmit:function(){var t=this;console.log("this.clientEntry^^^^^^^^^^^^^^"),console.log(this.clientEntry);var e=l["a"].company.edit;this.editId?this.clientEntry.updateUid=x["a"].getLoginUser().id:(this.clientEntry.category=2,this.clientEntry.createUid=x["a"].getLoginUser().id,this.clientEntry.id=null,e=l["a"].company.add),console.log("createUid>>>>>>>>>>>"+this.clientEntry.createUid),console.log(x["a"].getLoginUser()),this.$ajax.request(e,this.clientEntry).then((function(e){o["a"].toastSuccess(e),t.showDialog(!1),t.$emit("finish")}))}},watch:{visible:function(t){t&&this.refreshData()}},computed:{}},D=S,O=(a("964d"),Object(g["a"])(D,y,C,!1,null,"326d836c",null)),j=O.exports,E={name:"BookList",components:{ClientAddDialog:j,TablePanel:_["a"],ElButtonMini:v["a"],ElButtonCurdGroupY:b,CategoryTypeSelector:d["a"],SearchCardLayout:s["a"]},props:{},data:function(){return{loading:!0,showAddDialog:!1,filterForm:new c["a"],data:[],paginate:new r["a"](this.refreshData),selectedRow:[],sortingColumn:null,editId:0,de:[{},{},{},{},{},{}],currentPage1:5,num:100}},mounted:function(){},methods:{clickAddButton:function(){this.showAddDialog=!0},del:function(t){var e=this;this.$confirm("确定封停该客户吗?",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((function(){e.$message({type:"success",message:"成功!"}),console.log(t)})).catch((function(){e.$message({type:"info",message:"已取消"})}))},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t))}},watch:{},computed:{}},$=E,F=(a("5e9b"),Object(g["a"])($,n,i,!1,null,"314ac8de",null));e["default"]=F.exports},f576:function(t,e,a){"use strict";var n=a("5ca1"),i=a("2e08"),s=a("a25f"),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(s);n(n.P+n.F*l,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})}}]);
//# sourceMappingURL=chunk-6792bac9.a6586d38.js.map