<template>
  <div class="UpdatePassword">
    <el-dialog
      :visible="visible"
      @update:visible="showDialog"
      title="修改密码"
      :close-on-click-modal="false"
      width="25%"
      top="25vh"
    >
      <!-- 个人信息 -->
      <div v-show="show">
        <div
          style="width:100%;height:100%;display:flex;justify-content:center;flex-direction:column;align-items:center;"
        >
          <div class="ipt">
            <span>账&nbsp;&nbsp;&nbsp;号：</span>
            <input />
          </div>
          <div class="ipt">
            <span>手机号：</span>
            <input type="phone" />
          </div>
          <div class="ipt">
            <span>验证码：</span>
            <input type="password" style="width:140px;margin-right:5px;" />
            <el-button type="primary" style="height:35px;width:55px;">发送</el-button>
          </div>
        </div>
        <div class="text-center">
          <el-button-submit :is-block="false" @click.native="clickSubmit">下一步</el-button-submit>
        </div>
      </div>
      <!-- 修改密码 -->
      <div v-show="!show">
        <div
          style="width:100%;height:100%;display:flex;justify-content:center;flex-direction:column;align-items:center;"
        >
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="原密码" prop="pass1">
              <el-input v-model.number="ruleForm.pass1"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import ClientModel from "@/project/my-model/ClientModel";
import ElButtonSubmit from "@/components/common/button/ElButtonSubmit";
import Api from "@/assets/api/Api";
import DateTimeRangeInput from "@/components/common/input/DateTimeRangeInput";

export default {
  name: "UpdatePassword",
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
    var pass1 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.pass1 !== "") {
          this.$refs.ruleForm.validateField("pass1");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      clientEntry: new ClientModel(),
      show: true,
      ruleForm: {
        pass: "",
        checkPass: "",
        pass1: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        pass1: [{ validator: pass1, trigger: "blur" }]
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
      console.log(this.clientEntry);
      this.show = true;
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
.UpdatePassword {
}
.ipt {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.edit {
  position: absolute;
  right: 10px;
}
.ipt input {
  height: 30px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  margin: 10px 0;
}
</style>
