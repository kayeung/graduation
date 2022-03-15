<template>
  <div>
    <el-menu default-active="/goodscontent" class="el-menu-vertical-demo">
      <el-menu-item text-color="#ffffff" >
        <span slot="title" >产品分类</span>
      </el-menu-item>
      <el-menu-item index="/goodscontent">
        <i class="el-icon-menu"></i>
        <span slot="title">智能手机</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">平板折叠屏</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">智能家居</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>