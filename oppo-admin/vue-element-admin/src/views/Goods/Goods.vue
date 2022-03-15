<template>
  <div class="layout">
    <GoodsClassify class="classify" />
    <GoodsContent class="contect" />
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
  display: flex;
  .classify {
    width: 200px;
    margin: 20px 0 20px 20px;
    background: white;
    padding: 5px;
  }
  .contect {
    margin: 20px;
    background: white;
    padding: 20px;
    max-width: 81.5%;
    height: 80vh;
  }
}
</style>