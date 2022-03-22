<template>
  <div class="layout">
    <el-row>
      <el-col :span="4"> 
        <GoodsClassify class="classify" />
      </el-col>
      <el-col :span="20"> 
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
  }
  .contect {
    margin: 20px;
    background: white;
    padding: 20px;
    height: 80vh;
  }
}
</style>