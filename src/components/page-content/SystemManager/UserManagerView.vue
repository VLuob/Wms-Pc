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
          <Rightsmanagement></Rightsmanagement>
        </div>
        <div v-show="ClickIndex==1">
          <Personalinformation></Personalinformation>
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
import StockEntryModel from "@/project/model/StockEntryModel";
import PaginateModel from "@/project/model/PaginateModel";
import CategoryTypeSelector from "@/components/page-content/enum-selector/CategoryTypeSelector";
import ElButtonCurdGroup from "@/components/common/button/ElButtonCurdGroup";
import ElButtonMini from "@/components/common/button/ElButtonMini";
import TablePanel from "@/components/layout-component/TablePanel";
import CategoryAddDialog from "@/components/page-content/company/dialog/CategoryAddDialog";
import Rightsmanagement from "@/components/page-content/SystemManager/content/Rightsmanagement.vue";
import Personalinformation from "@/components/page-content/SystemManager/content/Personalinformation.vue";

export default {
  name: "CategoryManagerView",
  components: {
    CategoryAddDialog,
    TablePanel,
    ElButtonMini,
    ElButtonCurdGroup,
    CategoryTypeSelector,
    SearchCardLayout,
    Rightsmanagement,
    Personalinformation
  },
  props: {
    type: {
      default: 1
    },
    api: {
      default: ["/stock_entry/list", "get"]
    }
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
      nav: [{ name: "权限管理" }, { name: "个人信息" }],
      ClickIndex: 0,
      de: [{}, {}]
    };
  },
  mounted() {},
  methods: {
    target: function(index) {
      //Tab
      this.ClickIndex = index;
      console.log(index);
    }
  },
  watch: {},
  computed: {},
  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    }
  }
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