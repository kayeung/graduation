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
    <div class="footerTxt" :class="{ footerActive: isCollapse }">
      <span style="font-weight: bold"> Copyright © 2021-2022 <a href="https://kayeung.github.io"> KAYEUNG BLOG </a></span> All
      rights reserved.
    </div>
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
    margin-bottom: 27px;
    flex: 1;
  }
  .isActive {
    margin-left: 64px;
  }
  .footerTxt {
    width: 100%;
    border-top: 1px solid #d2d6de;
    font-size: 14px;
    line-height: 16px;
    position: fixed;
    bottom: 0;
    background: white;
    padding: 5px 15px;
    margin-left: 200px;
  }
  .footerActive {
    margin-left: 64px;
  }
}
</style>