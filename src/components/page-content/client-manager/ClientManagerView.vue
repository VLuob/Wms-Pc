<template>
  <div class="CategoryManagerView flex-box flex-column" style="margin-top:20px;">
    <div class="logout">
      <span class="el-icon-warning"></span>
      <span style="font:14px '';margin-left:10px;">客户列表</span>
    </div>
    <div class="flex-box search-card">
      <div class>
        <span>客户:</span>
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in name"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            size="mini"
          ></el-option>
        </el-select>
      </div>
      <div class>
        <span>合同到期时间:</span>
        <el-select v-model="value" clearable placeholder="请选择">
          <el-option
            v-for="item in duedate"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            size="mini"
          ></el-option>
        </el-select>
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
          <el-button type="primary" class="el-icon-plus" @click="clickAddButton">添加客户</el-button>
        </div>
      </div>
    </div>
    <div class="flex-grow">
      <client-add-dialog :visible.sync="showAddDialog" v-on:up="update"></client-add-dialog>
      <Permissionset :visible.sync="show"></Permissionset>
      <Seecontract :visible.sync="show1" :id="id"></Seecontract>
    </div>
    <div class="list" style="background:#fff;">
      <el-row style="width:100%;" class="list_nav">
        <el-col :span="2">
          <div class="grid-content">编号</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">客户</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">合同状态</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">合同起始时间</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">到期时间</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">联系人</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">联系方式</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">合同</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">客户权限</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content"></div>
        </el-col>
      </el-row>
      <el-row style="width:100%;" class="list_box" v-for="item,index in data" :key="item.id">
        <el-col :span="2">
          <div class="grid-content">{{item.code}}</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">{{item.name}}</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">未到期</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">{{item.createTime | data}}</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">{{item.updateTime | data}}</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">{{item.contactName}}</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">{{item.mobile}}</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">
            <el-button size="mini" @click="clickAddButton2(item.id)">查看</el-button>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">
            <el-button size="mini" @click="clickAddButton1">设置权限</el-button>
          </div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content el-icon-edit"></div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content el-icon-delete" @click="del(index,item)"></div>
        </el-col>
      </el-row>
    </div>
    <div style="display:flex;align-items:center;margin:10px  auto;">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="form.pageNum"
        :page-size="form.pageSize"
        layout="total,prev, pager, next, jumper"
        :total="total"
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
import ElButtonMini from "@/components/common/button/ElButtonMini";
import TablePanel from "@/components/layout-component/TablePanel";
import ClientAddDialog from "@/components/page-content/client-manager/dialog/ClientAddDialog";
import Permissionset from "@/components/page-content/client-manager/dialog/Permissionset";
import Seecontract from "@/components/page-content/client-manager/dialog/Seecontract";

export default {
  name: "CategoryManagerView",
  components: {
    ClientAddDialog,
    TablePanel,
    ElButtonMini,
    SearchCardLayout,
    Permissionset,
    Seecontract
  },
  props: {},
  data() {
    return {
      loading: true,
      showAddDialog: false,
      show: false,
      show1: false,
      filterForm: new ClientModel(),
      data: [], //合作方列表数据
      name: [], //客户名
      duedate: [], //合同到期时间
      selectedRow: [],
      sortingColumn: null,
      editId: 0,
      id: null,
      total: "", //总页数
      form: {
        pageNum: 1,
        pageSize: 10
      }
    };
  },
  mounted() {
    this.reload();
  },
  methods: {
    update(e) {
      //增加客户更新列表
      if (e === 1) {
        this.reload();
        this.showAddDialog = false;
      }
    },
    reload() {
      this.getCompanyList();
    },
    handleCurrentChange(val) {
      //当前页数
      this.form.pageNum = val;
      this.getCompanyList();
      console.log(`当前页: ${val}`);
    },
    getCompanyList() {
      //分页获取数据
      this.$ajax
        .request(Api.company.list, this.form)
        .then(resp => {
          this.total = resp.totalRecord;
          console.log(resp.list);
          this.data = resp.list;
        })
        .finally();
    },
    clickAddButton() {
      this.showAddDialog = true;
    },
    clickAddButton1() {
      this.show = true;
    },
    clickAddButton2(id) {
      console.log(id);
      this.id = id; //传递id
      this.show1 = true;
    },
    del(index, item) {
      console.log(index, item.id);
      this.$confirm("确定封停该客户吗?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$ajax
            .request(Api.company.delete, { ids: item.id })
            .then(resp => {
              console.log(resp);
              this.$message({
                type: "success",
                message: "成功!"
              });
              this.reload();
              console.log(index);
            })
            .finally();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
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
</style>
