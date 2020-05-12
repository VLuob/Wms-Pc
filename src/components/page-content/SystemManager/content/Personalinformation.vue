<template>
  <div class="Personalinformation flex-box flex-column" style="margin-top:20px;">
    <div
      style="width:100%;height:100%;background:rgb(249,250,252);display:flex;justify-content:center;padding:50px 0 50%;flex-direction:column;align-items:center;"
    >
      <div class="ipt">
        <span>用户名：</span>
        <input type="text" />
        <div class="el-icon-edit edit"></div>
      </div>
      <div class="ipt">
        <span>身&nbsp;&nbsp;&nbsp;份：</span>
        <input type="text" />
        <div class="el-icon-edit edit"></div>
      </div>
      <div class="ipt">
        <span>账&nbsp;&nbsp;&nbsp;号：</span>
        <input />
        <div class="el-icon-edit edit"></div>
      </div>
      <div class="ipt">
        <span>手&nbsp;&nbsp;&nbsp;机：</span>
        <input type="phone" />
        <div class="el-icon-edit edit"></div>
      </div>
      <div class="ipt">
        <span>密&nbsp;&nbsp;&nbsp;码：</span>
        <input type="password" />
        <div class="el-icon-edit edit" @click="clickAddButton"></div>
      </div>
      <el-button type="primary" style="width:300px;height:40px;margin-top:40px;">退出账号</el-button>
    </div>
    <div class="flex-grow">
      <UpdatePassword :visible.sync="showAddDialog" @finish="refreshData" :edit-id="editId"></UpdatePassword>
    </div>
  </div>
</template>

<script>
import SearchCardLayout from "@/components/layout-component/SearchCardLayout";
import Api from "@/assets/api/Api";
import EcUtil from "@/util/EcUtil";
import DialogUtil from "@/util/DialogUtil";
import ClientModel from "@/project/my-model/ClientModel";
import PaginateModel from "@/project/model/PaginateModel";
import CategoryTypeSelector from "@/components/page-content/enum-selector/CategoryTypeSelector";
import ElButtonCurdGroupG from "@/components/common/button/ElButtonCurdGroupG";
import ElButtonMini from "@/components/common/button/ElButtonMini";
import TablePanel from "@/components/layout-component/TablePanel";
import ClientAddDialog from "@/components/page-content/SystemManager/dialog/ClientAddDialog";
import UpdatePassword from "@/components/page-content/SystemManager/dialog/UpdatePassword";

export default {
  name: "Personalinformation",
  components: {
    ClientAddDialog,
    TablePanel,
    ElButtonMini,
    UpdatePassword,
    CategoryTypeSelector,
    SearchCardLayout
  },
  props: {},
  data() {
    return {
      loading: true,
      showAddDialog: false,
      filterForm: new ClientModel(),
      data: [],
      paginate: new PaginateModel(this.refreshData),
      selectedRow: [],
      sortingColumn: null,
      editId: 0
    };
  },
  mounted() {},
  methods: {
    clickAddButton() {
      this.editId = 0;
      this.showAddDialog = true;
    }
  },
  watch: {},
  computed: {}
};
</script>

<style lang="less" scoped>
@import (reference) "~style/all.less";
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
  width: 400px;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  margin: 10px 0;
}
.Personalinformation {
}
</style>
