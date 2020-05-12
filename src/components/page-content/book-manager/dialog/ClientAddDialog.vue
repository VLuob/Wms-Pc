<template>
  <div class="StockEntryAddDialog">
    <el-dialog
      :visible="visible"
      @update:visible="showDialog"
      title="添加预约"
      :close-on-click-modal="false"
    >
      <table>
        <tr style="background:#eee;font:600 14px/40px '';">
          <td>预约类别</td>
          <td>客户</td>
          <td>品号</td>
          <td>货品</td>
          <td>件数</td>
          <td>预约入库时间</td>
        </tr>
        <tr style="height:80px">
          <td>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </td>
          <td>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </td>
          <td>1020</td>
          <td>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </td>
          <td>20</td>
          <td>
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </td>
        </tr>
        <tr style="background:#eaeaea;font:600 14px/40px '';">
          <td>联系人</td>
          <td>联系方式</td>
          <td>司机姓名</td>
          <td>司机电话</td>
          <td>车型</td>
          <td>车牌号</td>
        </tr>
        <tr style="height:80px">
          <td>Cee</td>
          <td>15899574688</td>
          <td>栗色</td>
          <td>15899574688</td>
          <td>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </td>
          <td>沪A888888</td>
        </tr>
      </table>
      <div class="text-center">
        <el-button-submit :is-block="false" @click.native="clickSubmit">保存</el-button-submit>
      </div>
    </el-dialog>
  </div>
</template>

<script>
//import StockEntryModel from "@/project/model/StockEntryModel";
import ClientModel from "@/project/my-model/ClientModel";
//import CategorySelector from "@/components/page-content/enum-selector/CategorySelector";
//import CompanySelector from "@/components/page-content/enum-selector/CompanySelector";	客户下拉框数据
import ElButtonSubmit from "@/components/common/button/ElButtonSubmit";
import Api from "@/assets/api/Api";
import DialogUtil from "@/util/DialogUtil";
import DateTimeRangeInput from "@/components/common/input/DateTimeRangeInput";
import UserHandle from "@/project/user/UserHandle";

export default {
  name: "ClientAddDialog",
  components: {
    ElButtonSubmit,
    //CompanySelector,	客户下拉框数据
    DateTimeRangeInput
    //CategorySelector
  },
  props: {
    type: {
      default: 1
    },
    visible: {
      default: false
    },
    editId: {
      default: 0
    }
  },
  data() {
    return {
      //stockEntry: new StockEntryModel(this.type),
      clientEntry: new ClientModel()
    };
  },
  mounted() {
    this.reload();
  },
  methods: {
    reload() {},
    showDialog(v) {
      this.$emit("update:visible", v);
    },
    refreshData() {
      if (!this.editId) {
        this.clientEntry = new ClientModel();
        return;
      }
      this.$ajax
        .request(Api.company.getById, {
          id: this.editId
        })
        .then(resp => {
          //this.stockEntry = resp;
          this.clientEntry = resp;
        });
    },

    clickSubmit() {
      console.log("this.clientEntry^^^^^^^^^^^^^^");
      console.log(this.clientEntry);
      //let api = this.editId ? Api.company.edit : Api.company.add;
      let api = Api.company.edit;
      if (!this.editId) {
        //editId==0,执行添加
        this.clientEntry.category = 2;
        this.clientEntry.createUid = UserHandle.getLoginUser().id;
        this.clientEntry.id = null;
        api = Api.company.add;
      } else {
        //编辑修改
        this.clientEntry.updateUid = UserHandle.getLoginUser().id;
      }
      console.log("createUid>>>>>>>>>>>" + this.clientEntry.createUid);
      console.log(UserHandle.getLoginUser());
      //console.log(this.clientEntry.category);
      this.$ajax.request(api, this.clientEntry).then(resp => {
        DialogUtil.toastSuccess(resp);
        this.showDialog(false);
        this.$emit("finish");
      });
    }
  },
  watch: {
    visible(v) {
      if (v) {
        this.refreshData();
      }
    }
  },
  computed: {}
};
</script>

<style lang="less" scoped>
@import (reference) "~style/all.less";
.box div {
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #eee;
}
.box div:nth-child(8) {
  border: none;
}
.StockEntryAddDialog {
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav {
  background: #eee;
  height: 40px;
  border-right: 1px solid #eee;
  font: 14px "";
  font-weight: 600;
  line-height: 40;
  text-align: center;
  border-bottom: 1px solid #eee;
}
.con {
  height: 50px;
  font: 14px "";
  line-height: 40px;
  background: #fff;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 10px;
}
td {
  border: 1px solid #eee;
  height: 40px;
  width: 60px;
  text-align: center;
}
</style>
