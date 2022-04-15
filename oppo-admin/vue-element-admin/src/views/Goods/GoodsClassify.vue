<template>
  <div>
    <el-menu :default-active="activeIndex1" class="el-menu-vertical-demo" router id="menu">
      <el-menu-item text-color="#ffffff" >
        <span slot="title" >产品分类</span>
      </el-menu-item>
      <el-menu-item index="/goodscontent&phone">
        <i class="el-icon-menu"></i>
        <span slot="title">智能手机</span>
      </el-menu-item>
      <el-menu-item index="/goodscontent&pad">
        <i class="el-icon-document"></i>
        <span slot="title">平板</span>
      </el-menu-item>
      <el-menu-item index="/goodscontent&flod">
        <i class="el-icon-setting"></i>
        <span slot="title">折叠屏</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    data() {
    return {
      activeIndex1: "/goodscontent&phone",
    };
  },
  mounted() {
    console.log("route11:",this.$route);
    this.activeIndex1 = this.$route.path;
  },
};
</script>

<style lang="less" scpoed>
#menu{
  border: 1px solid white;
}
</style>