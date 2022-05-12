<template>
  <div>
    <div class="img-box">
      <img
        v-for="item in itemData.detailPictureUrl"
        :key="item"
        :src="item"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    let that = this;
    that.model = this.$route.params.model;
    let obj = {
      model: that.model,
    };
    this.$api.getItemListByModel(obj).then((res) => {
      console.log("detail.res:", res);
      that.itemData = res.data.data[0];
      console.log("itemData:", that.itemData);
    });
  },
  data() {
    return {
      model: "",
     itemData: [],
    };
  },
};
</script>

<style lang="less" scoped>
.img-box img {
  width: 100%;
  height: auto;
}
</style>