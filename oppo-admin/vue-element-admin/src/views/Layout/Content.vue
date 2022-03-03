<template>
  <div>
    <div class="header">
      <i v-if="!isCollapse"  @click="changeMenu" class="iconfont icon-right-indent"></i>
      <i v-else @click="changeMenu" class="iconfont icon-left-indent"></i>
      顶部
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  props: ["isCollapse"],
  methods: {
    changeMenu() {
      this.$emit("changeCollapse");
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  line-height: 56px;
  height: 56px;
  background: skyblue;
  color: white;
  .iconfont {
    font-size: 24px;
  }
}
</style>