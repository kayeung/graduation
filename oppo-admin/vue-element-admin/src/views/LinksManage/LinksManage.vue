<template>
  <div class="contect">
    <el-row>
      <el-col :span="23">
        <el-tabs type="border-card">
          <el-tab-pane label="顶部导航栏"
            ><linksManageList :status="0"
          /></el-tab-pane>
          <el-tab-pane label="页脚">
            <linksManageList :status="1" />
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import linksManageList from "../../components/linksManageList.vue";
export default {
  components: {
    linksManageList,
  },
};
</script>

<style lang="less" scoped>
.contect {
  margin: 20px;
}
</style>