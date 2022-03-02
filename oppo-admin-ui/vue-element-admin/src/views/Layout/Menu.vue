<template>
  <div>
    <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="rgb(48, 65, 86)"
      text-color="rgb(191,203,217)"
      active-text-color="rgb(64,158,255)"
      router
    >
      <el-menu-item>
        <span slot="title">OPPO 后台管理系统</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">仪表盘</span>
      </el-menu-item>
      <el-menu-item index="/frontpage">
        <i class="el-icon-menu"></i>
        <span slot="title">首页管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang='less' scoped>
.el-menu{
  border-right: 0;
  .is-active{
    background: rgb(31, 45, 61)!important;
  }
}
</style>