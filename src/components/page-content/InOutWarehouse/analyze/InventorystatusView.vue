 <template>
  <div class="InventorystatusView flex-box flex-column">
    <div class="flex-box search-card" style="margin-top:20px;">
      <div class>
        <span>库区:</span>
        <category-type-selector v-model="filterForm.code" :is-filter="true"></category-type-selector>
      </div>
      <div class>
        <span>库位:</span>
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
      <div class="flex-grow">
        <SureMoveLibary :visible.sync="showAddDialog" @finish="refreshData" :edit-id="editId"></SureMoveLibary>
      </div>
      <div style="margin-left:auto;" v-show="!show">
        <el-button type="primary" @click="movelibary">批量移库</el-button>
      </div>
      <div style="margin-left:auto;" v-show="show">
        <el-button type="primary" @click="clickAddButton">确定移库</el-button>
        <el-button @click="show=false">取消</el-button>
      </div>
    </div>
    <!-- 入库 -->
    <div class="list">
      <el-row style="width:100%;" class="list_nav">
        <el-col :span="1" v-show="show"></el-col>
        <el-col :span="1">
          <div class="grid-content">库区</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">库位</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">栈板货号</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">品号</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">单个重量</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">库存件数</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">保质期</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">生产日期</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">板数</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">入库时间</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">客户</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">联系人</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">联系方式</div>
        </el-col>
        <el-col :span="1"></el-col>
      </el-row>
      <el-row style="width:100%;" class="list_box" v-for="de,index in de" v-bind:key="de.id">
        <el-col :span="1" v-show="show">
          <el-checkbox v-model="de.checked"></el-checkbox>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">库区</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">库位</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">栈板货号</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">品号</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">单个重量</div>
        </el-col>
        <el-col :span="1">
          <div class="grid-content">库存件数</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">保质期</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">生产日期</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">板数</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">入库时间</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">客户</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">联系人</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">联系方式</div>
        </el-col>
        <el-col :span="1">
          <el-button type="primary" size="mini"  @click="clickAddButton">移库</el-button>
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
import CategoryModel from "@/project/model/CategoryModel";
import PaginateModel from "@/project/model/PaginateModel";
import CategoryTypeSelector from "@/components/page-content/enum-selector/CategoryTypeSelector";
import TablePanel from "@/components/layout-component/TablePanel";
import CategoryAddDialog from "@/components/page-content/company/dialog/CategoryAddDialog";
import SureMoveLibary from "@/components/page-content/InOutWarehouse/dialog/SureMoveLibary";

export default {
  name: "InventorystatusView",
  components: {
    CategoryAddDialog,
    TablePanel,
    CategoryTypeSelector,
    SearchCardLayout,
    SureMoveLibary
  },
  props: {},
  data() {
    return {
      filterForm: new CategoryModel(),
      data: [],
      showAddDialog: false,
      paginate: new PaginateModel(this.refreshData),
      selectedRow: [],
      sortingColumn: null,
      editId: 0,
      de: [{ checked: false }, {}],
      show: false
    };
  },
  mounted() {},
  methods: {
    movelibary: function() {
      this.show = true;
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
.InventorystatusView {
}
</style>