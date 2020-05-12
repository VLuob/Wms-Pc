<template>
  <div class="InEdit flex-box flex-column">
    <div style="margin-top:20px;margin-left:auto;">
      <el-button>保存并入库</el-button>
      <el-button type="primary">取消</el-button>
      <el-button type="success">打印货卡</el-button>
      <el-button type="info" @click="clickAddButton">查看库位图</el-button>
    </div>
    <div class="flex-grow">
      <Viewlibrary :visible.sync="showAddDialog" @finish="refreshData" :edit-id="editId"></Viewlibrary>
    </div>
    <div class="flex-box search-card flex-column">
      <div style="margin:0 auto;font-weight:600;font-size:24px;">入库单</div>
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
            <el-select
              v-model="value"
              placeholder="请选择"
              size="medium"
              style="margin-left:75px;height:30px;width:240px;"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="ipt">
            <span>产品品种</span>
            <el-select
              v-model="value"
              placeholder="请选择"
              size="medium"
              style="margin-left:75px;height:30px;width:240px;"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="list">
          <div class="ipt">
            <span>收费方式</span>
            <div style="position:absolute;left:77px;top:7px;">
              <el-radio v-model="radio" label="1">备选项</el-radio>
              <el-radio v-model="radio" label="2">备选项</el-radio>
            </div>
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
            <td>
              <span>*</span>栈板货号
            </td>
            <td>
              <span>*</span>品号
            </td>
            <td>品名</td>
            <td>单个重量</td>
            <td>
              <span>*</span>件数
            </td>
            <td>
              <span>*</span>生产日期
            </td>
            <td>
              <span>*</span>保质期
            </td>
            <td>库位</td>
            <td>件数/高度</td>
            <td>装卸方式</td>
          </tr>
          <tr v-for="list,index in list">
            <td>{{index+1}}</td>
            <td>库位</td>
            <td>库位</td>
            <td>板数</td>
            <td>
              <input type="number" />kg
            </td>
            <td>库道</td>
            <td style="width:0px;">
              <el-date-picker v-model="value1" type="date" placeholder="选择日期" size="large"></el-date-picker>
            </td>
            <td>
              <input type="number" />个月
            </td>
            <td>
              <el-select v-model="value" placeholder="请选择" size="medium">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </td>
            <td>库道</td>
            <td>
              <el-select v-model="value" placeholder="请选择" size="medium">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td>备注</td>
            <td colspan="10"></td>
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
import Viewlibrary from "@/components/page-content/InOutWarehouse/edit/dialog/Viewlibrary";

export default {
  name: "InEdit",
  components: {
    CategoryAddDialog,
    TablePanel,
    ElButtonMini,
    ElButtonCurdGroup,
    CategoryTypeSelector,
    SearchCardLayout,
    Viewlibrary
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
      list: [{},],
      radio: "1",
      value1: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
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
td span {
  color: red;
}
td input {
  height: 20px;
  width: 40px;
  margin-right: 5px;
}
.InEdit {
}
</style>