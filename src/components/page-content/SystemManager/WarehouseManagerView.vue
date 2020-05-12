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
import InventorystatusView from "@/components/page-content/SystemManager/Set/InventorystatusView.vue";
import MovingwaterView from "@/components/page-content/SystemManager/Set/MovingwaterView.vue";
import QualityManagentView from "@/components/page-content/SystemManager/Set/QualityManagentView.vue";

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
    QualityManagentView
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
      nav: [{ name: "仓库管理" }, { name: "品种管理" }, { name: "车型管理" }],
      ClickIndex: 0
    };
  },
  mounted() {
    this.reload();
  },
  methods: {
    reload() {
      this.refreshData();
    },
    refreshData() {
      this.loading = true;
      this.$ajax
        .request(Api.category.list, {
          ...EcUtil.getSortField(this.sortingColumn),
          ...this.paginate.getJSON(),
          ...this.filterForm
        })
        .then(resp => {
          this.data = resp.list;
          this.paginate.setPaginate(resp);
        })
        .finally(() => (this.loading = false));
    },

    sortChange(nodes) {
      this.sortingColumn = nodes;
      this.refreshData();
    },

    clickAddButton() {
      this.editId = 0;
      this.showAddDialog = true;
    },
    clickEditButton() {
      this.editId = this.selectedRow[0].id;
      this.showAddDialog = true;
    },
    clickDeleteButton() {
      this.delete(this.selectedRow);
    },
    clickRowEditButton(row) {
      this.editId = row.id;
      this.showAddDialog = true;
    },
    clickRowDeleteButton(row) {
      this.delete([row]);
    },
    delete(nodes) {
      DialogUtil.confirm(
        `
                    确定删除以下分类字典吗？ <br>
                    [ ${nodes.map(x => x.name).join(",")} ]
                `
      )
        .then(() => {
          return this.$ajax.request(Api.category.delete, {
            ids: nodes.map(x => x.id).join(",")
          });
        })
        .then(resp => {
          DialogUtil.toastSuccess(resp);
          this.refreshData();
        });
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