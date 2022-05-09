<template>
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
          <div class="goodName">{{ goodName }}</div>
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
      goodName: "",
    };
  },
  created() {
    let that = this;
    that.model = this.$route.params.model;
    console.log("this.$route.params.model:", that.model);
  },
  mounted() {
    let that = this;
    that.activeIndex = this.$route.path;
    let obj = {
      model: that.model,
    };
    this.$api.getItemListByModel(obj).then((res) => {
      that.goodName = res.data.data[0].goodName;
    });
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