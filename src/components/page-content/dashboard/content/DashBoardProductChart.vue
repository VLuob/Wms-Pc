<template>
  <div class="DashBoardProductChart">
    <el-card shadow="always">
      <div class="mb-xs" style="text-align:center;font:600 18px '';">产品当前库存</div>
      <div>
        <div class ref="chartBlock" style="height:360px;"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
import GbObject from "@/project/var/GbObject";

export default {
  name: "DashBoardProductChart",
  components: {},
  props: {},
  data() {
    return {
      option: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 20,
          data: [
            "直接访问",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "搜索引擎",
            "搜索引擎2",
            "搜索引擎3",
            "搜索引擎4",
            "搜索引擎5"
          ]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%", "70%", "70%", "70%", "70%", "70%", "70%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" },
              { value: 148, name: "搜索引擎2" },
              { value: 158, name: "搜索引擎3" },
              { value: 548, name: "搜索引擎4" },
              { value: 154, name: "搜索引擎5" }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    this.reload();
  },
  methods: {
    reload() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = GbObject.echarts.init(this.$refs.chartBlock);
      // 绘制图表
      myChart.setOption(this.option);
    }
  },
  watch: {},
  computed: {}
};
</script>

<style lang="less" scoped>
@import (reference) "~style/all.less";

.DashBoardProductChart {
}
</style>