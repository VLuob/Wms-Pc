<template>
  <div class="Appointmentform flex-box flex-column">
    <div style="margin-top:20px;margin-left:auto;">
      <el-button>撤销</el-button>
      <el-button type="primary" @click="clickAddButton">审核</el-button>
      <el-button type="success">编辑</el-button>
      <el-button type="info">下载</el-button>
      <el-button type="warning">打印</el-button>
    </div>
    <div class="flex-grow">
      <Warehousingapproval :visible.sync="showAddDialog" @finish="refreshData" :edit-id="editId"></Warehousingapproval>
    </div>
    <div class="flex-box search-card flex-column">
      <div style="margin:0 auto;font-weight:600;font-size:24px;">预约入库单</div>
      <div style="display:flex;justify-content:space-between;">
        <span>NO.20201204025</span>
        <span>2019 年 10 月24 日</span>
      </div>
      <div class="box">
        <div class="list">
          <div class="ipt">
            <span>公司名称</span>
            <input type="text" />
          </div>
          <div class="ipt">
            <span>产品品种</span>
            <input type="text" />
          </div>
          <div class="ipt">
            <span>车型</span>
            <input type="text" />
          </div>
        </div>
        <div class="list">
          <div class="ipt">
            <span>收费方式</span>
            <input type="text" />
          </div>
          <div class="ipt">
            <span>入库时间</span>
            <input type="text" />
          </div>
          <div class="ipt">
            <span>车牌号</span>
            <input type="text" />
          </div>
        </div>
        <div class="list">
          <div class="ipt">
            <span>联系人</span>
            <input type="text" />
          </div>
          <div class="ipt">
            <span>司机姓名</span>
            <input type="text" />
          </div>
          <div class="ipt"></div>
        </div>
        <div class="list">
          <div class="ipt">
            <span>联系方式</span>
            <input type="text" />
          </div>
          <div class="ipt">
            <span>司机电话</span>
            <input type="text" />
          </div>
          <div class="ipt"></div>
        </div>
      </div>
      <div>
        <table>
          <tr>
            <td></td>
            <td>栈板货号</td>
            <td>品号</td>
            <td>品名</td>
            <td>单个重量</td>
            <td>件数</td>
            <td>生产日期</td>
            <td>保质期</td>
            <td>库位</td>
            <td>件数/高度</td>
            <td>装卸方式</td>
          </tr>
          <tr v-for="list,index in list">
            <td>{{index+1}}</td>
            <td>库位</td>
            <td>库位</td>
            <td>板数</td>
            <td>库区</td>
            <td>库道</td>
            <td>库位</td>
            <td>板数</td>
            <td>库区</td>
            <td>库道</td>
            <td>库位</td>
          </tr>
          <tr>
            <td>备注</td>
            <td colspan="10"></td>
          </tr>
          <tr>
            <td>总</td>
            <td colspan="2">总件数</td>
            <td colspan="3">246</td>
            <td colspan="2">总板数</td>
            <td colspan="3">50</td>
          </tr>
        </table>
      </div>
      <div class="name">
        <div>
          部门主管 &nbsp;
          <span>Joy</span>
        </div>
        <div>
          部门主管 &nbsp;
          <span>Joy2</span>
        </div>
        <div>
          部门主管 &nbsp;
          <span>Joy3</span>
        </div>
      </div>
    </div>
    <!--  <appointmentEdit></appointmentEdit> -->
  </div>
</template>

<script>
import SearchCardLayout from "@/components/layout-component/SearchCardLayout";
import Api from "@/assets/api/Api";
import EcUtil from "@/util/EcUtil";
import DialogUtil from "@/util/DialogUtil";
import StockEntryModel from "@/project/model/StockEntryModel";
import PaginateModel from "@/project/model/PaginateModel";
import CategoryTypeSelector from "@/components/page-content/enum-selector/CategoryTypeSelector";
import ElButtonCurdGroup from "@/components/common/button/ElButtonCurdGroup";
import ElButtonMini from "@/components/common/button/ElButtonMini";
import TablePanel from "@/components/layout-component/TablePanel";
import CategoryAddDialog from "@/components/page-content/company/dialog/CategoryAddDialog";
import Warehousingapproval from "@/components/page-content/book-manager/Appointment/dialog/Warehousingapproval";
import appointmentEdit from "@/components/page-content/book-manager/edit/appointmentEdit.vue";
export default {
  name: "Appointmentform",
  components: {
    CategoryAddDialog,
    TablePanel,
    ElButtonMini,
    ElButtonCurdGroup,
    CategoryTypeSelector,
    SearchCardLayout,
    Warehousingapproval,
    appointmentEdit
  },
  props: {
    type: {
      default: 1
    },
    api: {
      default: ["/stock_entry/list", "get"]
    }
  },
  data() {
    return {
      loading: true,
      showAddDialog: false,
      filterForm: new StockEntryModel(),
      paginate: new PaginateModel(this.refreshData),
      list: [{}],
      formInline: {
        user: "",
        region: ""
      }
    };
  },
  mounted() {},
  methods: {
    clickAddButton() {
      this.showAddDialog = true;
    },
    target: function(index) {
      //Tab
      this.ClickIndex = index;
      console.log(index);
    }
  },
  watch: {},
  computed: {}
};
</script>

<style lang="less" scoped>
@import (reference) "~style/all.less";
.search-card {
  margin-top: 10px;
  background: #eee;
  border: 1px solid #eee;
  padding: 20px;
}
.box {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.list {
  display: flex;
  flex-direction: column;
}
.name {
  display: flex;
  justify-content: space-between;
}
.ipt input {
  border: none;
  outline: none;
  background: #fff;
  margin: 0 0 20px 10px;
  position: absolute;
  left: 65px;
  width: 240px;
  height: 30px;
}
.ipt {
  position: relative;
  height: 30px;
  width: 300px;
  margin-bottom: 20px;
}
.ipt span {
  position: absolute;
  left: 0px;
  line-height: 30px;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 10px;
}
td {
  border: 1px solid #000;
  height: 40px;
  width: 60px;
  text-align: center;
}
td:nth-child(1) {
  width: 25px;
  background: #fefefe;
}
tr:nth-child(1) {
  width: 25px;
  background: #fefefe;
}
.Appointmentform {
}
</style>