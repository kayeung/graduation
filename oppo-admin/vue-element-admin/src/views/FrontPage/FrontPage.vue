<template>
  <div class="contect">
    <el-row>
      <el-col :span="23">
        <el-tabs type="border-card">
          <el-tab-pane label="轮播图">
            <FPContentList :status="0"/>
          </el-tab-pane>
          <el-tab-pane label="更多产品"><FPContentList :status="1"/></el-tab-pane>
          <el-tab-pane label="OPPO科技"><FPContentList :status="2"/></el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="1">
      </el-col>

    </el-row>
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
  background: #f5f5f5;
}
</style>