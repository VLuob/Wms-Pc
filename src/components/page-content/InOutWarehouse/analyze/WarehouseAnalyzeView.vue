<template>
  <div class="CategoryManagerView flex-box flex-column">
    <main>
      <div class="tab">
        <div
          class="tab_box"
          v-for="nav,index in nav"
          @click="target(index)"
          :class="{'active':index===ClickIndex}"
        >
          <span class="el-icon-warning" style="margin-right:10px;"></span>
          <span>{{nav.name}}</span>
        </div>
      </div>
      <div class="content">
        <div v-show="ClickIndex==0">
          <InventorystatusView></InventorystatusView>
        </div>
        <div v-show="ClickIndex==1">
          <MovingwaterView></MovingwaterView>
        </div>
        <div v-show="ClickIndex==2">
          <QualityManagentView></QualityManagentView>
        </div>
        <div v-show="ClickIndex==3">
          <InOutAnalysisView></InOutAnalysisView>
        </div>
      </div>
    </main>
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
import ElButtonCurdGroup from "@/components/common/button/ElButtonCurdGroup";
import ElButtonMini from "@/components/common/button/ElButtonMini";
import TablePanel from "@/components/layout-component/TablePanel";
import CategoryAddDialog from "@/components/page-content/company/dialog/CategoryAddDialog";
import InventorystatusView from "@/components/page-content/InOutWarehouse/analyze/InventorystatusView.vue";
import MovingwaterView from "@/components/page-content/InOutWarehouse/analyze/MovingwaterView.vue";
import QualityManagentView from "@/components/page-content/InOutWarehouse/analyze/QualityManagentView.vue";
import InOutAnalysisView from "@/components/page-content/InOutWarehouse/analyze/InOutAnalysisView.vue";

export default {
  name: "CategoryManagerView",
  components: {
    CategoryAddDialog,
    TablePanel,
    ElButtonMini,
    ElButtonCurdGroup,
    CategoryTypeSelector,
    SearchCardLayout,
    InventorystatusView,
    MovingwaterView,
    QualityManagentView,
    InOutAnalysisView
  },
  props: {},
  data() {
    return {
      loading: true,
      showAddDialog: false,
      filterForm: new CategoryModel(),
      data: [],
      paginate: new PaginateModel(this.refreshData),
      selectedRow: [],
      sortingColumn: null,
      editId: 0,
      nav: [
        { name: "库存现状" },
        { name: "物动流水" },
        { name: "保质期管理" },
        { name: "进出库状况分析" }
      ],
      ClickIndex: 0
    };
  },
  mounted() {},
  methods: {
    clickAddButton() {
      this.showAddDialog = true;
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
.active {
   background:#2b3d4f;

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
.CategoryManagerView {
}
</style>