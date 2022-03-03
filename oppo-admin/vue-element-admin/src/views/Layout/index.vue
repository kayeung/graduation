<template>
  <div class="layout">
    <!-- 左侧 -->
    <Menu class="menu" :isCollapse="isCollapse" />
    <!-- 右侧 -->
    <Content
      class="content"
      :class="{ isActive: isCollapse }"
      @changeCollapse="changeCollapse"
      :isCollapse="isCollapse"
    />
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
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    changeCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style lang='less' scoped>
.layout {
  display: flex;
  .menu {
    // width: 200px;
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
  .isActive {
    margin-left: 64px;
  }
}
</style>