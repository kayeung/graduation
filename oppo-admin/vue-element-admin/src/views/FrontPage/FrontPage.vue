<template>
  <div class="contect">
    <el-tabs type="border-card">
      <el-tab-pane label="轮播图">
        <FPContentList /> 
      </el-tab-pane>
      <el-tab-pane label="更多产品"><FPContentList /></el-tab-pane>
      <el-tab-pane label="OPPO科技"><FPContentList /></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import FPContentList from "../../components/FPContentList.vue";
export default {
  components: {
    FPContentList,
  },
};
</script>

<style lang="less" scoped>
.contect {
  margin: 20px;
  background: white;
}
</style>