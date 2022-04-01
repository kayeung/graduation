<template>
  <div class="layout">
    <el-row>
      <el-col :span="4">
        <GoodsClassify class="classify" />
      </el-col>
      <el-col :span="19">
        <GoodsContent class="contect" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import GoodsContent from "../Goods/GoodsContent.vue";
import GoodsClassify from "../Goods/GoodsClassify.vue";
export default {
  components: {
    GoodsContent,
    GoodsClassify,
  },
};
</script>

<style lang="less" scoped>
.layout {
  // display: flex;
  .classify {
    // width: 200px;
    margin: 20px 0 20px 20px;
    background: white;
    padding: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
  .contect {
    margin: 20px;
    background: white;
    padding: 20px;
    height: 80vh;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
}
</style>