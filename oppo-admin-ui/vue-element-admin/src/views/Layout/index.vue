<template>
  <div class="layout">
    <!-- 左侧 -->
    <Menu class="menu" />
    <!-- 右侧 -->
    <Content class="content" />
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import Content from "./Content.vue";
export default {
  components: {
    Menu,
    Content,
  },
};
</script>

<style lang='less' scoped>
.layout {
  display: flex;
  .menu {
    width: 200px;
    min-height: 500px;
    background: rgb(48, 65, 86);
    position: fixed;
    top: 0;
    bottom: 0;
  }
  .content {
    margin-left: 200px;
    flex: 1;
  }
}
</style>