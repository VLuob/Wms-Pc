 <template>
  <div class="CustomerpaymentView flex-box flex-column">
    <div class="flex-box search-card" style="margin-top:20px;">
      <div class>
        <span>客户:</span>
        <category-type-selector v-model="filterForm.code" :is-filter="true"></category-type-selector>
      </div>
      <div class>
        <span>费用状态:</span>
        <category-type-selector v-model="value" :is-filter="true"></category-type-selector>
      </div>
      <div class="dat">
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
      <Replacementplan :visible.sync="showAddDialog" @finish="refreshData" :edit-id="editId"></Replacementplan>
      <Feedetails :visible.sync="showAddDialog1" @finish="refreshData" :edit-id="editId"></Feedetails>
    </div>
    <!-- 入库 -->
    <div class="list">
      <el-row style="width:100%;" class="list_nav">
        <el-col :span="3">
          <div class="grid-content">编号</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">客户</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">联系人</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">联系方式</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">总费用</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">缴费状态</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">费用详情</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">费用方案</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">更换方案</div>
        </el-col>
      </el-row>
      <el-row style="width:100%;" class="list_box" v-for="de,index in de" v-bind:key="de.id">
        <el-col :span="3">
          <div class="grid-content">编号</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">客户</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">联系人</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">联系方式</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">总费用</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">
            <el-button type="warning">未缴费</el-button>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content" @click="feedetails" style="color:#09f;">查看</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content">费用方案</div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content">
            <el-button @click="clickAddButton">更换方案</el-button>
          </div>
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
import CategoryModel from "@/project/model/CategoryModel";
import PaginateModel from "@/project/model/PaginateModel";
import CategoryTypeSelector from "@/components/page-content/enum-selector/CategoryTypeSelector";
import TablePanel from "@/components/layout-component/TablePanel";
import Replacementplan from "@/components/page-content/CostManager/dialog/Replacementplan";
import Feedetails from "@/components/page-content/CostManager/dialog/Feedetails";

export default {
  name: "CustomerpaymentView",
  components: {
    TablePanel,
    CategoryTypeSelector,
    SearchCardLayout,
    Replacementplan,
    Feedetails
  },
  props: {},
  data() {
    return {
      filterForm: new CategoryModel(),
      data: [],
      paginate: new PaginateModel(this.refreshData),
      selectedRow: [],
      sortingColumn: null,
      editId: 0,
      de: [{}, {}],
      value: "",
      value1: "",
      value2: "",
      showAddDialog: false,
      showAddDialog1: false
    };
  },
  mounted() {},
  methods: {
    clickAddButton() {
      this.showAddDialog = true;
    },
    feedetails() {
      this.showAddDialog1 = true;
    }
  },
  watch: {},
  computed: {}
};
</script>

<style lang="less" scoped>
@import (reference) "~style/all.less";
.dat {
  display: flex;
  align-items: center;
}
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
.CustomerpaymentView {
}
</style>