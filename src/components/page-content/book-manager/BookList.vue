<template>
  <div class="BookList flex-box flex-column" style="margin-top:20px;">
    <div class="logout">
      <span class="el-icon-warning"></span>
      <span style="font:14px '';margin-left:10px;">预约列表</span>
    </div>
    <div class="flex-box search-card">
      <div class>
        <span>客户:</span>
        <category-type-selector v-model="filterForm.code" :is-filter="true"></category-type-selector>
      </div>
      <div class>
        <span>预约类别:</span>
        <category-type-selector v-model="filterForm.code" :is-filter="true"></category-type-selector>
      </div>
      <div class>
        <span>审核状态:</span>
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
          >添加预约</el-button>
        </div>
      </div>
    </div>
    <div class="flex-grow">
      <client-add-dialog :visible.sync="showAddDialog" @finish="refreshData" :edit-id="editId"></client-add-dialog>
    </div>
    <div class="list">
      <el-row style="width:100%;" class="list_nav">
        <el-col :span="2">
          <div class="grid-content">单号</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">客户</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">品号</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">货品</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">件数</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">预约时间</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">联系人</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">联系方式</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">预约类别</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">审核状态</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
      </el-row>
      <el-row style="width:100%;" class="list_box" v-for="de,index in de" v-bind:key="de.id">
        <el-col :span="2">
          <div class="grid-content">单号</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">客户</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">品号</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">货品</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">件数</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">预约时间</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">联系人</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">联系方式</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">预约类别</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">审核状态</div>
        </el-col>
        <el-col :span="1">
          <div class>
            <el-button size="mini" type="primary">预约单</el-button>
          </div>
        </el-col>
        <el-col :span="1">
          <div class="el-icon-edit"></div>
        </el-col>
        <el-col :span="1">
          <div class="el-icon-upload2"></div>
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
  <!--   <Appointmentform></Appointmentform> -->
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
import ElButtonCurdGroupY from "@/components/common/button/ElButtonCurdGroupY";
import ElButtonMini from "@/components/common/button/ElButtonMini";
import TablePanel from "@/components/layout-component/TablePanel";
//import CategoryAddDialog from "@/components/page-content/company/dialog/CategoryAddDialog";
import ClientAddDialog from "@/components/page-content/book-manager/dialog/ClientAddDialog";
import Appointmentform from "@/components/page-content/book-manager/Appointment/Appointmentform";

export default {
  name: "BookList",
  components: {
    //CategoryAddDialog,
    ClientAddDialog,
    TablePanel,
    ElButtonMini,
    ElButtonCurdGroupY,
    CategoryTypeSelector,
    SearchCardLayout,
    Appointmentform
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
      de: [{},],
      currentPage1: 5,
      num: 100
    };
  },
  mounted() {},
  methods: {
    clickAddButton() {
      this.showAddDialog = true;
    },
    del(index) {
      this.$confirm("确定封停该客户吗?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "成功!"
          });
          console.log(index);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
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
.logout {
  height: 50px;
  width: 120px;
  border: 1px solid #eee;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  background: #2b3d4f;
  color: #fff;
}
.BookList {
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
