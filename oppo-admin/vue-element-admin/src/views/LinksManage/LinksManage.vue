<template>
  <div class="contect">
    <el-tabs type="border-card">
      <el-tab-pane label="顶部导航栏"><linksManageList :status="nav" /></el-tab-pane>
      <el-tab-pane label="页脚">
        <linksManageList :status="footer" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import linksManageList from '../../components/linksManageList.vue'
export default {
  components:{
    linksManageList,
  }
};
</script>

<style lang="less" scoped>
.contect {
  margin: 20px;
  background: white;
}
</style>