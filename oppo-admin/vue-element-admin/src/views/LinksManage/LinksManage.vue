<template>
  <div class="contect">
    <el-row>
      <el-col :span="23">
        <el-tabs type="border-card">
          <el-tab-pane label="顶部导航栏"
            ><NormalTable /></el-tab-pane>
          <el-tab-pane label="页脚">
            <TreeTable :status="1" />
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NormalTable from "../../components/normalTable.vue";
import TreeTable from "../../components/TreeTable.vue";
export default {
  components: {
    NormalTable,
    TreeTable,
  },
};
</script>

<style lang="less" scoped>
.contect {
  margin: 20px;
}
</style>