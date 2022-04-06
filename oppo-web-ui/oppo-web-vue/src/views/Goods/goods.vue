<template>
  <!-- 已搭建导航条和footer，中部的product条仅引入bootstrap的组件（可能替换成element的组件） -->
  <div>
    <Navbar />
    <div class="container">
      <ul class="nav nav-tabs">
        <li role="presentation" class="active"><a href="#">概览</a>1111</li>
        <li role="presentation"><a href="#">参数</a></li>
      </ul>
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
};
</script>

<style>
</style>