<template>
  <div class="StockEntryAddDialog">
    <el-dialog
      :visible="visible"
      @update:visible="showDialog"
      title="添加客户"
      top="23vh"
      :close-on-click-modal="false"
    >
      <div style="display:flex;width:100%;flex-direction:column;margin-bottom:30px;">
        <div style="display:flex;height:40px;background:#eee;  font-weight: 600;" class="box">
          <div>编号</div>
          <div>客户</div>
          <div>合同起始时间</div>
          <div>到期时间</div>
          <div>联系人</div>
          <div>联系方式</div>
          <div>合同</div>
          <div>客户权限</div>
        </div>
        <div style="display:flex;height:80px;border:1px solid #eee;" class="box">
          <div>
            <input v-model="form.code" />
          </div>
          <div>
            <input v-model="form.name" />
          </div>
          <div>
            <el-date-picker
              v-model="form.value1"
              type="date"
              placeholder="选择日期"
              size="mini"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </div>
          <div>
            <el-date-picker
              v-model="form.value2"
              type="date"
              placeholder="选择日期"
              size="mini"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </div>
          <div>
            <input v-model="form.contactName" />
          </div>
          <div>
            <input v-model="form.mobile" />
          </div>
          <div>
            <el-upload
              class="avatar-uploader"
              action="uploadFile"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >上传</el-upload>
          </div>
          <div>编号</div>
        </div>
      </div>

      <div class="text-center">
        <el-button-submit :is-block="false" @click.native="clickSubmit">提交</el-button-submit>
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
  name: "ClientAddDialog",
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
      uploadFile: "http://192.168.1.117:32102/api/company/uploadFile",
      form: {
        value1: "",
        value2: "",
        code: "",
        name: "",
        contactName: "",
        mobile: "",
        contract: "",
        privilege: false,
        createUid: "1"
      },
      msg: 1
    };
  },
  mounted() {},
  methods: {
    showDialog(v) {
      this.$emit("update:visible", v);
      console.log(v);
    },
    clickSubmit() {
      this.$ajax
        .request(Api.company.add, this.form)
        .then(resp => {
          console.log(resp);
          this.$emit("up", this.msg);
        })
        .finally();
    }
  },
  watch: {},
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
.box input {
  height: 90%;
  width: 100%;
  border: none;
  outline: none;
  text-align: center;
}
.box div:nth-child(8) {
  border: none;
}
.StockEntryAddDialog {
}
</style>
