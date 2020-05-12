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
          <CustomerpaymentView></CustomerpaymentView>
        </div>
        <div v-show="ClickIndex==1">
          <CosplanView></CosplanView>
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
import CustomerpaymentView from "@/components/page-content/CostManager/CustomerpaymentView.vue";
import CosplanView from "@/components/page-content/CostManager/CosplanView.vue";

export default {
  name: "CategoryManagerView",
  components: {
    CategoryAddDialog,
    TablePanel,
    ElButtonMini,
    ElButtonCurdGroup,
    CategoryTypeSelector,
    SearchCardLayout,
    CustomerpaymentView,
    CosplanView
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
      nav: [{ name: "客户缴费" }, { name: "费用方案" }],
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

.CategoryManagerView {
}
</style>