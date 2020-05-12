<template>
  <div class="Seecontract">
    <el-dialog
      :visible="visible"
      @update:visible="showDialog"
      title="合同编辑"
      :close-on-click-modal="false"
      top="23vh"
    >
      <div style="display:flex;justify-content:center;margin-bottom:20px;">
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;">
          <span style="margin-bottom:15px">xx公司订货合同</span>
          <div
            style="height:330px;width:260px;border:1px solid #eee;margin-right:40px;position:relative;"
            @click="update"
          >
            1111
            <div
              style="position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.3);
              color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;"
              v-show="model"
            >√</div>
          </div>
        </div>

        <div
          style="height:330px;width:260px;border:1px solid #eee;margin-top:35px;
          display:flex;align-items:center;justify-content:center;color:#09f;"
        >
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <span>上传合同</span>
          </el-upload>
        </div>
      </div>
      <div v-show="!model" class="text-center">
        <el-button type="primary" size="medium">保存{{id}}</el-button>
      </div>
      <div v-show="model" class="text-center">
        <el-button type="primary" size="medium" style="margin-right:40px;">删除</el-button>
        <el-button type="primary" size="medium">下载</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Api from "@/assets/api/Api";

export default {
  name: "Seecontract",
  components: {},
  props: ["id", "visible"],
  data() {
    return {
      model: false,
      id: ""
    };
  },
  mounted() {},

  methods: {
    reload() {},
    showDialog(v) {
      this.$emit("update:visible", v);
    },
    getListById() {
      //分页获取数据
      this.$ajax
        .request(Api.company.getListById, { id: this.id })
        .then(resp => {
          console.log(resp);
        })
        .finally();
    },
    update() {
      if (this.model === true) {
        this.model = false;
      } else {
        this.model = true;
      }
    }
  },
  watch: {
    id: function(newVal, oldVal) {
      this.id = newVal;
      console.log(newVal, oldVal);
      this.getListById();
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
.Seecontract {
}
.text-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
