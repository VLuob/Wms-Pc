<template>
  <div class="AddVehicle">
    <el-dialog
      :visible="visible"
      @update:visible="showDialog"
      title="添加车型"
      :close-on-click-modal="false"
    >
      <div style="height:40px;width:100%;display:flex;align-items:center;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="库区">
            <el-select v-model="formInline.region" placeholder="A" style="width:100px;">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="库道">
            <el-input v-model="formInline.user" type="number" style="width:100px;"></el-input>
          </el-form-item>
          <el-form-item label="库位">
            <el-input v-model="formInline.user" type="number" style="width:100px;"></el-input>
          </el-form-item>
          <el-form-item label="板数">
            <el-input v-model="formInline.user" type="number" style="width:100px;"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <table>
        <tr style="background:#eee;font:600 14px/40px '';">
          <td>库区</td>
          <td>库道</td>
          <td>库位</td>
          <td>板数</td>
        </tr>
        <tr style="height:80px">
          <td></td>
          <td></td>
          <td>1020</td>
          <td></td>
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
import CategoryTypeSelector from "@/components/page-content/enum-selector/CategoryTypeSelector";

export default {
  name: "AddVehicle ",
  components: {
    ElButtonSubmit,
    //CompanySelector,	客户下拉框数据
    DateTimeRangeInput,
    //CategorySelector
    CategoryTypeSelector
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
      clientEntry: new ClientModel(),
      formInline: {
        user: "",
        region: ""
      }
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
.AddVehicle {
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
  line-height: 40;
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
