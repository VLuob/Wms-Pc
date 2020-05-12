<template>
  <div class="CategoryManagerView flex-box flex-column">
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
        <WarehousView></WarehousView>
      </div>
      <div v-show="ClickIndex==1">
        <OutStockView></OutStockView>
      </div>
      <div v-show="ClickIndex==2">
        <RetreatStorageView></RetreatStorageView>
      </div>
      <div v-show="ClickIndex==3">
        <MovelibraryView></MovelibraryView>
      </div>
    </div>
  </div>
</template>

<script>
import SearchCardLayout from "@/components/layout-component/SearchCardLayout";
import Api from "@/assets/api/Api";
import EcUtil from "@/util/EcUtil";
import DialogUtil from "@/util/DialogUtil";
import StockEntryModel from "@/project/model/StockEntryModel";
import PaginateModel from "@/project/model/PaginateModel";
import CategoryTypeSelector from "@/components/page-content/enum-selector/CategoryTypeSelector";
import ElButtonCurdGroup from "@/components/common/button/ElButtonCurdGroup";
import ElButtonMini from "@/components/common/button/ElButtonMini";
import TablePanel from "@/components/layout-component/TablePanel";
import CategoryAddDialog from "@/components/page-content/company/dialog/CategoryAddDialog";
import WarehousView from "@/components/page-content/InOutWarehouse/operate/WarehousView.vue";
import OutStockView from "@/components/page-content/InOutWarehouse/operate/OutStockView.vue";
import RetreatStorageView from "@/components/page-content/InOutWarehouse/operate/RetreatStorageView.vue";
import MovelibraryView from "@/components/page-content/InOutWarehouse/operate/MovelibraryView.vue";

export default {
  name: "CategoryManagerView",
  components: {
    CategoryAddDialog,
    TablePanel,
    ElButtonMini,
    ElButtonCurdGroup,
    CategoryTypeSelector,
    SearchCardLayout,
    WarehousView,
    OutStockView,
    RetreatStorageView,
    MovelibraryView,
  },
  data() {
    return {
      loading: true,
      showAddDialog: false,
      filterForm: new StockEntryModel(),
      data: [],
      paginate: new PaginateModel(this.refreshData),
      selectedRow: [],
      sortingColumn: null,
      editId: 0,
      nav: [
        { name: "入库" },
        { name: "出库" },
        { name: "退库" },
        { name: "移库" }
      ],
      ClickIndex: 0
    };
  },
  mounted() {},
  methods: {
    target: function(index) {
      //Tab
      this.ClickIndex = index;
      console.log(index);
    },
    showclick(e) {
      this.show = e;
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
  background: #2b3d4f;
  color: #fff;
}
.el-col {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.list_box .el-col {
  height: 60px;
  font: 14px "";
}
.list_nav .el-col {
  font: 14px "";
  font-weight: 600;
}
.list_nav {
  background: #eee;
}
.CategoryManagerView {
}
</style>