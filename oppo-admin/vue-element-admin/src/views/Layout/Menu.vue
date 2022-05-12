<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgb(48, 65, 86)"
      text-color="rgb(191,203,217)"
      active-text-color="rgb(48,148,249)"
      router
      :collapse="isCollapse"
    >
      <el-menu-item>
        <span slot="title">OPPO 后台管理系统</span>
      </el-menu-item>
      <el-menu-item index="/frontpage">
        <i class="el-icon-menu"></i>
        <span slot="title">首页管理</span>
      </el-menu-item>
      <el-menu-item index="/goodscontent&1001">
        <i class="el-icon-s-goods"></i>
        <span slot="title">产品管理</span>
      </el-menu-item>
      <el-menu-item index="/linksmanage">
        <i class="el-icon-link"></i>
        <span slot="title">链接管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  data() {
    return {
      activeIndex: "/frontpage",
      // isCollapse: false,
    };
  },
  mounted() {
    console.log("route1:",this.$route);
    this.activeIndex = this.$route.path;
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang='less' scoped>
.el-menu {
  border-right: 0;
  .is-active {
    background: rgb(31, 45, 61) !important;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>