<template>
  <!-- 正在调通概览和参数两个组件 -->
  <div>
    <Navbar />
    <div
      class="linkwrapper"
      style="border-bottom: solid 1px #e6e6e6; border-top: solid 1px #e6e6e6"
    >
      <div class="container">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          router
        >
          <el-menu-item index="1">概览</el-menu-item>
          <el-menu-item index="2">参数</el-menu-item>
        </el-menu>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/navbar.vue";
import Footer from "../../components/footer.vue";
import GoodSpecs from "../Goods/goodSpecs.vue";
import GoodDetail from "../Goods/goodDetail.vue";
export default {
  components: {
    Navbar,
    Footer,
    GoodSpecs,
    GoodDetail,
  },
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang='less' scoped>
.el-menu--horizontal {
  border-bottom: 0px;
}
</style>