<template>
  <div class="Rightsmanagement flex-box flex-column" style="margin-top:20px;">
    <div class="flex-box search-card">
      <div class>
        <span>管理员:</span>
        <category-type-selector v-model="filterForm.code" :is-filter="true"></category-type-selector>
      </div>
      <div>
        <el-input
          placeholder="输入关键词"
          v-model="filterForm.name"
          class="input-with-select"
          width="200px"
          @change="refreshData()"
        >
          <el-button slot="append" icon="el-icon-search" @click.native="refreshData()"></el-button>
        </el-input>
        <div style="position:absolute;right:30px;top:90px;">
          <el-button
            type="primary"
            class="el-icon-plus"
            @click="clickAddButton"
            style="margin-left:auto;"
          >添加管理员</el-button>
        </div>
      </div>
    </div>
    <div class="flex-grow">
      <!--  -->
      <client-add-dialog :visible.sync="showAddDialog" @finish="refreshData" :edit-id="editId"></client-add-dialog>
      <Permissionset :visible.sync="show"></Permissionset>
    </div>
    <div class="list">
      <el-row style="width:100%;" class="list_nav">
        <el-col :span="2">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">账号</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">姓名</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">手机号</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">平台身份</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">创建日期</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">权限</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
      </el-row>
      <el-row style="width:100%;" class="list_box" v-for="de,index in de" v-bind:key="de.id">
        <el-col :span="2">
          <div class="grid-content">1</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">账号</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">姓名</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">手机号</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">平台身份</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">创建日期</div>
        </el-col>
        <el-col :span="3">
          <div class>
            <el-button size="mini" type="primary" @click="setclick">设置权限</el-button>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="el-icon-edit"></div>
        </el-col>
        <el-col :span="1">
          <div class="el-icon-delete"></div>
        </el-col>
      </el-row>
    </div>
    <div style="display:flex;align-items:center;margin:10px  auto;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="1"
        layout="total,prev, pager, next, jumper"
        :total="this.de.length"
        background
      ></el-pagination>
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
import ElButtonMini from "@/components/common/button/ElButtonMini";
import TablePanel from "@/components/layout-component/TablePanel";
import ClientAddDialog from "@/components/page-content/SystemManager/dialog/ClientAddDialog";
import Permissionset from "@/components/page-content/SystemManager/dialog/Permissionset";

export default {
  name: "Rightsmanagement",
  components: {
    //CategoryAddDialog,
    ClientAddDialog,
    TablePanel,
    ElButtonMini,
    CategoryTypeSelector,
    SearchCardLayout,
    Permissionset
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
      editId: 0,
      de: [{}, {}, {}, {}, {}, {}],
      currentPage1: 5,
      num: 100,
      show:false
    };
  },
  mounted() {},
  methods: {
    clickAddButton() {
      this.showAddDialog = true;
    },
    setclick() {
      this.show = true;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  watch: {},
  computed: {}
};
</script>

<style lang="less" scoped>
@import (reference) "~style/all.less";
.Rightsmanagement {
}
.list {
  background: #fff;
}
.el-col {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list .list_box:nth-child(odd) {
  background: #f9fafc;
}
.list .list_box {
  height: 58px;
  font: 14px "";
  border-bottom: 1px solid #f9f9f9;
  border-top: 1px solid #f9f9f9;
}
.list_nav {
  font: 14px "";
  font-weight: 600;
  background: #f4f5f7;
  border-bottom: 1px solid #f9f9f9;
  border-top: 1px solid #f9f9f9;
}
</style>
