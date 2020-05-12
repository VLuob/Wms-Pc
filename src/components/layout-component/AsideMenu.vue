<template>
  <div class="AsideMenu bg-navy" :class="asideMenuClass">
    <el-menu
      mode="vertical"
      :unique-opened="true"
      class="w100p trans"
      background-color="#253140"
      text-color="#fff"
      active-text-color="#0097b7"
      :collapse="!$store.state.asideIsExpend"
    >
      <template v-for="( item) in menu">
        <div
          :index="item.path"
          v-if="!hasChild(item) && needShow(item)"
          :key="item.path"
          @click="clickLink(item)"
          class="logo"
        >
          <i :class="item.meta.icon"></i>
          <span slot="title">xxxx</span>
        </div>
        <el-submenu :index="item.path" v-if="hasChild(item) && needShow(item)" :key="item.path">
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{item.meta.title}}</span>
          </template>
          <el-menu-item
            v-for="(child,i) in item.children"
            :key="i"
            :index="child.path"
            @click.native="clickLink(child)"
          >
            <i class="iconfont" :class="child.meta.icon"></i>
            <span slot="title">{{ child.meta.title }}</span>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import aside_menu from "@/router/aside_menu";
import Windows from "@/project/var/Windows";

export default {
  name: "AsideMenu",
  components: {},
  props: {},
  data() {
    return {
      menu: aside_menu
    };
  },
  mounted() {
    this.reload();
  },
  activated() {},
  methods: {
    reload() {},
    hasChild(route) {
      return route.children && route.children.length > 0;
    },
    needShow(route) {
      return !route.meta.hidden;
    },
    clickLink(router) {
      Windows.set(router);
    }
  },
  watch: {},
  computed: {
    asideMenuClass() {
      return {
        open: this.$store.state.asideIsExpend
      };
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "~@/style/all.less";
.logo {
  height: 80px;
  width: 100%;
  background: #2b3d50;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.AsideMenu {
  .iconfont {
    padding-right: 8px;
  }
}
</style>