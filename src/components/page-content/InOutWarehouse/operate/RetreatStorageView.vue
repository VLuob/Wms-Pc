 <template>
  <div class="RetreatStorageView flex-box flex-column">
    <div class="flex-box search-card" style="margin-top:20px;">
      <div class>
        <span>编号:</span>
        <category-type-selector v-model="filterForm.code" :is-filter="true"></category-type-selector>
      </div>
      <div class>
        <span>编辑状态:</span>
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
      </div>
    </div>
    <div class="content">
      <div class="list">
        <el-row style="width:100%;" class="list_nav">
          <el-col :span="2">
            <div class="grid-content">序号</div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content">退库单号</div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content">产品品种</div>
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
            <div class="grid-content">退库时间</div>
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
            <el-button type="primary" size="mini">出库单</el-button>
          </el-col>
        </el-row>
      </div>
      <!-- 弹框 -->
      <div style="position:absolute;right:30px;top:90px;">
        <el-button
          type="primary"
          class="el-icon-plus"
          @click="clickAddButton"
          style="margin-left:auto;"
        >添加表单</el-button>
      </div>
      <div class="flex-grow">
        <RetreatStorageList :visible.sync="showAddDialog" @finish="refreshData" :edit-id="editId"></RetreatStorageList>
      </div>
      <!-- 弹框 -->
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
    <!--  <retreatbill></retreatbill> -->
  </div>
</template> 

<script>
import SearchCardLayout from "@/components/layout-component/SearchCardLayout";
import Api from "@/assets/api/Api";
import EcUtil from "@/util/EcUtil";
import DialogUtil from "@/util/DialogUtil";
import CategoryModel from "@/project/model/CategoryModel";
import PaginateModel from "@/project/model/PaginateModel";
import CategoryTypeSelector from "@/components/page-content/enum-selector/CategoryTypeSelector";
import TablePanel from "@/components/layout-component/TablePanel";
import CategoryAddDialog from "@/components/page-content/company/dialog/CategoryAddDialog";
import ElButtonCurdGroupC from "@/components/common/button/ElButtonCurdGroupC";
import RetreatStorageList from "@/components/page-content/InOutWarehouse/dialog/RetreatStorageList";
import retreatbill from "@/components/page-content/InOutWarehouse/bill/retreatbill.vue";

export default {
  name: "RetreatStorageView",
  components: {
    CategoryAddDialog,
    TablePanel,
    CategoryTypeSelector,
    SearchCardLayout,
    ElButtonCurdGroupC,
    RetreatStorageList,
    retreatbill
  },
  props: {},
  data() {
    return {
      filterForm: new CategoryModel(),
      data: [], //退库数据
      showAddDialog: false, //弹窗
      paginate: new PaginateModel(this.refreshData),
      selectedRow: [],
      sortingColumn: null,
      total: "", //总页数
      editId: 0
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
      this.stockInList();
    },
    stockInList() {
      //分页获取数据[入库]
      this.$ajax
        .request(Api.move.stockInList, this.form)
        .then(resp => {
          this.total = resp.totalRecord;
          console.log(resp.list);
          this.data = resp.list;
        })
        .finally();
    },
    clickAddButton() {
      this.showAddDialog = true;
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
.active {
  background: #09f;
  color: #fff;
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
.RetreatStorageView {
}
</style>