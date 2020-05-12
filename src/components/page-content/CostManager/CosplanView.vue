<template>
  <div class="CategoryManagerView flex-box flex-column" style="margin-top:20px;">
    <div class="flex-box search-card">
      <div class>
        <span>客户:</span>
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
          >添加方案</el-button>
        </div>
      </div>
    </div>
    <div class="flex-grow">
      <div style="width:100%;background:#f9fafc;border:1px solid #eee">
        <div style="padding:20px;">
          <div style="font:16px '';margin-bottom:10px;display:flex;justify-content:space-between;">
            <span>费用方案一</span>
            <el-button type="primary" icon="el-icon-edit" @click="editbtn" v-if="!this.edit">修改方案</el-button>
            <div style="display:flex" v-show="edit">
              <el-button type="primary">保存</el-button>
              <el-button @click="close">取消</el-button>
            </div>
          </div>
          <table>
            <tr style="background:#eaeaea;font:600 14px/40px '';">
              <td rowspan="2" style="background:#fff;">固定费用</td>
              <td>项目</td>
              <td>计费方式</td>
              <td>计费单位</td>
              <td>费用</td>
              <td v-show="edit">停用操作</td>
            </tr>
            <tr>
              <td>固定费用</td>
              <td>1m²</td>
              <td>1月</td>
              <td>￥120</td>
              <td v-show="edit">
                <div class="el-icon-circle-close"></div>
              </td>
            </tr>
            <tr style="background:#eaeaea;font:600 14px/40px '';">
              <td rowspan="6" style="background:#fff;">固定费用</td>
              <td>项目</td>
              <td>计费方式</td>
              <td>计费单位</td>
              <td>费用</td>
              <td v-show="edit">停用操作</td>
            </tr>
            <tr>
              <td>存储费</td>
              <td>1板</td>
              <td>1天</td>
              <td>￥120</td>
              <td v-show="edit">
                <div class="el-icon-circle-close"></div>
              </td>
            </tr>
            <tr>
              <td>存储费</td>
              <td>1板</td>
              <td>1天</td>
              <td>￥120</td>
              <td v-show="edit">
                <div class="el-icon-circle-close"></div>
              </td>
            </tr>
            <tr>
              <td>存储费</td>
              <td>1板</td>
              <td>1天</td>
              <td>￥120</td>
              <td v-show="edit">
                <div class="el-icon-circle-close"></div>
              </td>
            </tr>
            <tr>
              <td rowspan="2">人工费</td>
              <td>1板</td>
              <td>1天</td>
              <td>￥120</td>
              <td v-show="edit">
                <div class="el-icon-circle-close"></div>
              </td>
            </tr>
            <tr>
              <td>1板</td>
              <td>1天</td>
              <td>￥120</td>
              <td v-show="edit">
                <div class="el-icon-circle-close"></div>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <client-add-dialog :visible.sync="showAddDialog" @finish="refreshData" :edit-id="editId"></client-add-dialog>
    </div>
  </div>
</template>

<script>
import SearchCardLayout from "@/components/layout-component/SearchCardLayout";
import Api from "@/assets/api/Api";
import ClientModel from "@/project/my-model/ClientModel";
import PaginateModel from "@/project/model/PaginateModel";
import CategoryTypeSelector from "@/components/page-content/enum-selector/CategoryTypeSelector";
import ElButtonMini from "@/components/common/button/ElButtonMini";
import TablePanel from "@/components/layout-component/TablePanel";
import ClientAddDialog from "@/components/page-content/CostManager/dialog/ClientAddDialog";

export default {
  name: "CategoryManagerView",
  components: {
    ClientAddDialog,
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
      currentPage1: 5,
      num: 100,
      edit: false
    };
  },
  mounted() {},
  methods: {
    clickAddButton() {
      this.showAddDialog = true;
    },
    editbtn() {
      this.edit = true;
    },
    close() {
      this.edit = false;
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
          this.edit = true;
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
  width: 140px;
  border: 1px solid #eee;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
}
.CategoryManagerView {
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
table {
  border-collapse: collapse;
  width: 100%;
  background: #f9fafc;
  margin: 0 auto;
}
td {
  border: 1px solid #eee;
  height: 40px;
  width: 60px;
  text-align: center;
}
</style>
