<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      router
      id="menu"
    >
      <el-menu-item text-color="#ffffff">
        <span slot="title">产品分类</span>
      </el-menu-item>
      <el-menu-item index="/goodscontent&1001">
        <i class="el-icon-menu"></i>
        <span slot="title">智能手机</span>
      </el-menu-item>
      <el-menu-item index="/goodscontent&1002">
        <i class="el-icon-document"></i>
        <span slot="title">平板</span>
      </el-menu-item>
      <el-menu-item index="/goodscontent&1003">
        <i class="el-icon-setting"></i>
        <span slot="title">折叠屏</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  created() {
    let that = this;
    that.activeIndex = this.$route.path;
  },
  data() {
    return {
      activeIndex: "",
    };
  },
};
</script>

<style lang="less" scpoed>
#menu {
  border: 1px solid white;
}
</style>