<template>
  <div class="Warehousingapproval">
    <el-dialog
      :visible="visible"
      @update:visible="showDialog"
      title="入库单审核"
      top="23vh"
      :close-on-click-modal="false"
    >
      <table>
        <tr style="background:#eee;font:600 14px/40px '';">
          <td>审核流程</td>
          <td>审核项目</td>
          <td>审核人</td>
          <td>审核时间</td>
          <td>审核结果</td>
        </tr>
        <tr style="height:80px">
          <td></td>
          <td></td>
          <td></td>
          <td>2019/10/24 12：12</td>
          <td></td>
        </tr>
      </table>
      <div class="text-center">
        <el-button type="success">通过</el-button>
        <el-button type="primary">不通过</el-button>
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
  name: "Warehousingapproval",
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
    return {};
  },
  mounted() {
    this.reload();
  },
  methods: {
    reload() {},
    showDialog(v) {
      this.$emit("update:visible", v);
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
.box div:nth-child(8) {
  border: none;
}
.Warehousingapproval {
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
