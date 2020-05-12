<template>
  <div class="OperateManagerView flex-box flex-column" style="margin-top:20px;">
    <div class="logout">
      <span class="el-icon-warning"></span>
      <span style="font:14px '';margin-left:10px;">操作记录</span>
    </div>
    <div class="flex-box search-card">
      <div class>
        <span>操作:</span>
        <category-type-selector v-model="filterForm.code" :is-filter="true"></category-type-selector>
      </div>
      <div class="dat">
        <span style="margin-right:15px;">日期</span>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"
          style="width:150px;margin-right:10px;"
        ></el-date-picker>
        <el-date-picker v-model="value2" type="date" placeholder="选择日期" style="width:150px;"></el-date-picker>
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
      </div>
    </div>

    <div class="list" style="background:#fff;">
      <el-row style="width:100%;" class="list_nav">
        <el-col :span="2">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content">操作名称</div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content">操作人</div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content">平台身份</div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content">操作时间</div>
        </el-col>
      </el-row>
      <el-row style="width:100%;" class="list_box" v-for="de,index in de" v-bind:key="de.id">
        <el-col :span="2">
          <div class="grid-content">1</div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content">操作名称</div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content">操作人</div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content">平台身份</div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content">操作时间</div>
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
        prev-text="< 上一页"
        next-text="下一页 >"
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

export default {
  name: "OperateManagerView",
  components: {
    TablePanel,
    ElButtonMini,
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
      editId: 0,
      de: [{}, {}, {}, {}, {}, {}],
      currentPage: 3,
      num: 100
    };
  },
  mounted() {
    this.reload();
  },
  methods: {
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
.OperateManagerView {
}
.list {
  background: #fff;
}
.dat {
  display: flex;
  align-items: center;
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
