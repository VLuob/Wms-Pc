<template>
  <div class="Replacementplan">
    <el-dialog
      :visible="visible"
      @update:visible="showDialog"
      title="更换方案"
      :close-on-click-modal="false"
      top="23vh"
    >
      <el-checkbox-group
        v-model="checkList"
        style="display:flex;justify-content:space-around;align-items:center;"
      >
        <div style="display:flex;flex-direction:column;" class="box">
          <el-checkbox label="费用方案一"></el-checkbox>
          <el-checkbox label="费用方案三"></el-checkbox>
          <el-checkbox label="费用方案五"></el-checkbox>
        </div>
        <div style="display:flex;flex-direction:column;" class="box">
          <el-checkbox label="费用方案二"></el-checkbox>
          <el-checkbox label="费用方案四"></el-checkbox>
        </div>
      </el-checkbox-group>
      <div class="text-center">
        <el-button type="primary" size="medium">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import ClientModel from "@/project/my-model/ClientModel";
import ElButtonSubmit from "@/components/common/button/ElButtonSubmit";
import Api from "@/assets/api/Api";
import DialogUtil from "@/util/DialogUtil";
import DateTimeRangeInput from "@/components/common/input/DateTimeRangeInput";
import UserHandle from "@/project/user/UserHandle";

export default {
  name: "Replacementplan",
  components: {
    ElButtonSubmit,
    DateTimeRangeInput
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
      clientEntry: new ClientModel(),
      value1: "",
      value2: "",
      checkList: []
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
.box > * {
  margin-bottom: 15px;
}
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
.Replacementplan {
}
</style>
