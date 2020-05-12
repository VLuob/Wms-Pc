<template>
  <div class="DashBoardView fz-sm">
    <main>
      <div class="tab">
        <div
          class="tab_box"
          v-for="nav,index in nav"
          @click="target(index)"
          :class="{'active':index===ClickIndex}"
        >{{nav.name}}</div>
        <div class="dat">
          <span style="margin-right:15px;">日期</span>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            style="width:150px;margin-right:10px;"
          ></el-date-picker>
          <el-date-picker v-model="value2" type="date" placeholder="选择日期" style="width:150px;"></el-date-picker>
        </div>
      </div>
      <div class="content">
        <div v-show="ClickIndex==0">
          <div class="flex-box mt-xs">
            <div class="mr-xs" style="width: 500px;">
              <dash-board-product-chart></dash-board-product-chart>
            </div>
            <div class="mr-xs" style="width: 600px;">
              <dash-board-stock-out-chart></dash-board-stock-out-chart>
            </div>
          </div>
        </div>
        <div v-show="ClickIndex==1">
          <dash-board-top-cards></dash-board-top-cards>
          <div class="flex-box mt-xs flex-wrap">
            <div class="mr-xs" style="width: 500px;">
              <dash-board-product-chart></dash-board-product-chart>
            </div>
            <div class="mr-xs" style="width: 600px;">
              <dash-board-stock-out-chart></dash-board-stock-out-chart>
            </div>
            <div class="flex-grow" style="width: 300px;">
              <dash-board-need-list></dash-board-need-list>
            </div>
          </div>
        </div>
        <div v-show="ClickIndex==2">
          <dash-board-top-cards></dash-board-top-cards>
          <div class="flex-box mt-xs flex-wrap">
            <div class="mr-xs" style="width: 500px;">
              <dash-board-product-chart></dash-board-product-chart>
            </div>
            <div class="mr-xs" style="width: 600px;">
              <dash-board-stock-out-chart></dash-board-stock-out-chart>
            </div>
            <div class="flex-grow" style="width: 300px;">
              <dash-board-need-list></dash-board-need-list>
            </div>
          </div>
        </div>
        <div v-show="ClickIndex==3">
          <dash-board-top-cards></dash-board-top-cards>
          <div class="flex-box mt-xs flex-wrap">
            <div class="mr-xs" style="width: 500px;">
              <dash-board-product-chart></dash-board-product-chart>
            </div>
            <div class="mr-xs" style="width: 600px;">
              <dash-board-stock-out-chart></dash-board-stock-out-chart>
            </div>
            <div class="flex-grow" style="width: 300px;">
              <dash-board-need-list></dash-board-need-list>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- -->
  </div>
</template>

<script>
import ImageUploadContent from "@/components/common/ImageUploadContent";
import DashBoardTopCards from "@/components/page-content/dashboard/content/DashBoardTopCards";
import DashBoardProductChart from "@/components/page-content/dashboard/content/DashBoardProductChart";
import DashBoardStockOutChart from "@/components/page-content/dashboard/content/DashBoardStockOutChart";
import DashBoardNeedList from "@/components/page-content/dashboard/content/DashBoardNeedList";

export default {
  name: "DashBoardView",
  components: {
    DashBoardNeedList,
    DashBoardStockOutChart,
    DashBoardProductChart,
    DashBoardTopCards,
    ImageUploadContent
  },
  props: {},
  data() {
    return {
      list: [],
      nav: [
        { name: "今天" },
        { name: "昨天" },
        { name: "最近7天" },
        { name: "最近30天" }
      ],
      ClickIndex: 0,
      value1: "",
      value2: ""
    };
  },
  mounted() {
    this.reload();
  },
  activated() {},
  methods: {
    reload() {},
    target: function(index) {
      this.ClickIndex = index;
      console.log(index);
    }
  },
  watch: {},
  computed: {}
};
</script>

<style lang="less" scoped>
//@import (reference) "~@/style/all.less";

.tab {
  width: 100%;
  height: 40px;
  background: #eee;
  margin-bottom: 10px;
  display: flex;
  overflow: hidden;
  border: 1px solid #eee;
}
.tab .tab_box {
  width: 120px;
  text-align: center;
  font: 14px "";
  line-height: 40px;
  border-right: 1px solid #eee;
}
.active {
  border-top: 2px solid #09f;
  background: #fff;
}
.dat {
  display: flex;
  margin-left: 50px;
  align-items: center;
}
.DashBoardView {
}
</style>