<template>
<!-- bug：选中某个栏目后，点击左侧菜单栏的产品管理会跳到其他栏目页，解决办法不要用watch，直接this.$router.params.status -->
  <div>
    <el-menu default-active="/goodscontent&1001" class="el-menu-vertical-demo" router id="menu">
      <el-menu-item text-color="#ffffff" >
        <span slot="title" >产品分类</span>
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
  mounted() {
    this.activeIndex1 = this.$route.path;
  },
};
</script>

<style lang="less" scpoed>
#menu{
  border: 1px solid white;
}
</style>