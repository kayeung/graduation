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
          <div class="goodName">OPPO Find N</div>
          <el-menu-item :index="'/goodspecs&' + model">参数</el-menu-item>
          <el-menu-item :index="'/gooddetail&' + model">概览</el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/navbar.vue";
import Footer from "../../components/footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },

  data() {
    return {
      activeIndex: "/goodspecs",
      model: "",
    };
  },
  created(){
    let that=this;
    that.model=this.$route.params.model;
    console.log("this.$route.params.model:",that.model);
  },
  mounted() {
    this.activeIndex = this.$route.path;
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
.el-menu-item {
  float: right;
}
.goodName {
  height: 60px;
  line-height: 60px;
  float: left;
}
</style>