<template>
  <div>
    <div class="img-box">
      <div v-for="item in detailPictureList" :key="item.id">
        <img
          :src="item"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    let that = this;
    that.model = this.$route.params.model;
  },
  mounted() {
    let that = this;
    let obj = {
      model: that.model,
    };
    this.$api.getItemListByModel(obj).then((res) => {
      that.detailPictureList = res.data.data[0].detailPictureUrl;
      console.log("detailPictureUrl:", that.detailPictureList);
    });
  },
  date() {
    return {
      model: [],
      detailPictureList: [],
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