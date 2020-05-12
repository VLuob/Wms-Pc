<template>
  <div class="MovelibraryView flex-box flex-column">
    <div class="flex-box search-card" style="margin-top:20px;">
      <div class>
        <span>编号:</span>
      </div>
      <div class>
        <span>编辑状态:</span>
      </div>
      <div class>
        <span>审核状态:</span>
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
    <div class="content">
      <div class="list">
        <el-row style="width:100%;" class="list_nav">
          <el-col :span="2">
            <div class="grid-content">序号</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content">移库单号</div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content">品种</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content">总件数</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content">总板数</div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content">客户</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content">移库时间</div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content">审核状态</div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content"></div>
          </el-col>
        </el-row>
        <el-row style="width:100%;" class="list_box" v-for="item,index in data" :key="item.id">
          <el-col :span="2">
            <div class="grid-content">{{item.stockEntryNumber}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content">{{item.stockEntryOrderNumber}}</div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content">{{item.materialName}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content">{{item.quantity}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content">{{item.planQuantity}}</div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content">{{item.approveUserName}}</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content">{{item.createTime}}</div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content">已审核</div>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" size="mini">移库单</el-button>
          </el-col>
        </el-row>
      </div>
    </div>

    <div style="display:flex;align-items:center;margin:10px  auto;">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="1"
        layout="total,prev, pager, next, jumper"
        :total="total"
        background
      ></el-pagination>
    </div>
    <!-- <Movebill></Movebill> -->
  </div>
</template>

<script>
import SearchCardLayout from "@/components/layout-component/SearchCardLayout";
import Api from "@/assets/api/Api";
import EcUtil from "@/util/EcUtil";
import DialogUtil from "@/util/DialogUtil";
import StockEntryModel from "@/project/model/StockEntryModel";
import CategoryTypeSelector from "@/components/page-content/enum-selector/CategoryTypeSelector";
import ElButtonCurdGroup from "@/components/common/button/ElButtonCurdGroup";
import TablePanel from "@/components/layout-component/TablePanel";
import CategoryAddDialog from "@/components/page-content/company/dialog/CategoryAddDialog";
import Movebill from "@/components/page-content/InOutWarehouse/bill/Movebill.vue";

export default {
  name: "MovelibraryView",
  components: {
    CategoryAddDialog,
    TablePanel,
    ElButtonCurdGroup,
    CategoryTypeSelector,
    SearchCardLayout,
    Movebill
  },
  data() {
    return {
      loading: true,
      showAddDialog: false,
      filterForm: new StockEntryModel(),
      data: [], //移库数据
      total: "", //分页总数据,
      currentPage: 10,
      selectedRow: [],
      sortingColumn: null,
      editId: 0,
      ClickIndex: 0
    };
  },
  mounted() {
    this.reload();
  },
  methods: {
    handleCurrentChange(val) {
      //当前页数
      this.form.pageNum = val;
      this.getCompanyList();
      console.log(`当前页: ${val}`);
    },
    reload() {
      this.transList();
    },
    transList() {
      //分页获取数据[入库]
      this.$ajax
        .request(Api.move.transList, this.form)
        .then(resp => {
          this.total = resp.totalRecord;
          console.log(resp.list);
          this.data = resp.list;
        })
        .finally();
    },
    target: function(index) {
      //Tab
      this.ClickIndex = index;
      console.log(index);
    }
  },
  watch: {},
  computed: {}
};
</script>

<style lang="less" scoped>
@import (reference) "~style/all.less";
.tab {
  position: absolute;
  top: 20px;
  height: 50px;
  margin-bottom: 10px;
  display: flex;
  overflow: hidden;
}
.tab .tab_box {
  width: 120px;
  text-align: center;
  font: 14px "";
  line-height: 50px;
  border: 1px solid #eee;
  margin-right: 20px;
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
.MovelibraryView {
}
</style>