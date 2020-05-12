<template>
  <div class="AppBackIndex flex-box h100p">
    <div
      class="flex-box flex-column overflow-h flex-shrink-off h100p trans"
      :style="leftContainerStyle"
    >
      <div class="layout-aside-menu flex-grow">
        <aside-menu></aside-menu>
      </div>
    </div>
    <div class="logout">
      <span class="el-icon-warning"></span>
      <span style="font:14px '';margin-left:10px;">注销</span>
    </div>
    <div class="flex-grow" style="padding: 55px 20px 0;background:#f2f8fe;">
      <component
        v-for="item in windows.list"
        :is="item.component"
        :key="item.path"
        v-show="item.meta.title === windows.selectedName"
        class="flex-grow pa-xs"
        :params.sync="item.params || {}"
      ></component>
    </div>
  </div>
</template>

<script>
import AsideMenu from "@/components/layout-component/AsideMenu";
import Windows from "@/project/var/Windows";
export default {
  name: "AppBackIndex",
  components: { AsideMenu },
  props: {},
  data() {
    return {
      windows: Windows
    };
  },
  mounted() {
    this.reload();
  },
  activated() {},
  methods: {
    reload() {},
    handleTabsEdit(windowName) {
      Windows.remove(windowName);
    }
  },
  watch: {},
  /**
   * 收到三个参数：
   * 错误对象、发生错误的组件实例
   * 以及一个包含错误来源信息的字符串。
   * 此钩子可以返回 false 以阻止该错误继续向上传播。
   */
  errorCaptured(err, vm, info) {
    console.log(err);
    // -> ReferenceError: consle is not defined ...
    console.log(vm);
    // -> {_uid: 1, _isVue: true, $options: {…}, _renderProxy: o, _self: o,…}
    console.log(info);
    // -> `mounted hook`
    // 告诉我们这个错误是在 vm 组件中的 mounted 钩子中发生的      // 阻止该错误继续向上传播
    return false;
  },
  computed: {
    leftContainerStyle() {
      return {
        width: this.$store.state.asideIsExpend ? "260px" : "60px"
      };
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "~@/style/all.less";
.logo {
  height: 100px;
  width: 260px;
  background: #fff;
  position: absolute;
  background: #eee;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logout {
  height: 35px;
  width: 80px;
  border: 1px solid #eee;
  position: relative;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 30px;
  top: 20px;
  background: #fff;
}
.AppBackIndex {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .layout-header-height {
    height: 60px;
  }

  .left-container {
    .bg-navy;
  }

  .layout-title {
    .left-container;
    .layout-header-height;
    .pl-md;
    width: 260px;
  }

  .layout-header {
    .layout-header-height;
    z-index: 10;
    /*border-bottom: 1px solid #e0e0e0;*/
  }
  .element::-webkit-scrollbar {
    display: none;
  }
  .layout-aside-menu {
    background: #253140;
    &::-webkit-scrollbar {
      background-color: transparent;
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 3px;
    }

    &::-webkit-scrollbar-corner {
      background-color: transparent;
      height: 0;
    }
  }

  .layout-content {
    .pos-r;
    overflow: auto;
  }

  .layout-content-view {
    .pa-sm;
  }

  .layout-footer {
    .pos-f;
    height: 30px;
    bottom: 0;
    right: 0;
    left: 0;
  }
}
</style>