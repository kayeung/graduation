<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="error-box">
        <img
          src="../assets/images/404-pc.png"
          alt="404-pc"
          class="pc hidden-xs"
        />
        <img
          src="../assets/images/404-mb.png"
          alt="404-mb"
          class="mb hidden-sm hidden-md hidden-lg"
        />
        <div class="text">404~ 链接走丢啦！</div>
        <router-link to="/">
          <a href="" rel="nofollow">返回首页</a>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="less" scoped>
.error-box {
  margin-top: 42px;
  .pc {
    display: block;
    width: 720px;
    height: auto;
    margin: 0 auto;
  }
  .mb {
    display: block;
    width: 320px;
    height: auto;
    margin: 0 auto;
  }
  .text {
    text-align: center;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: -0.1px;
    margin-top: 48px;
  }
  a {
    display: block;
    width: 160px;
    height: 48px;
    line-height: 48px;
    background: #046a38;
    text-align: center;
    margin: 20px auto 0;
    font-size: 12px;
    color: #fff;
    transition: opacity 0.3s;
    text-decoration: none;
  }
  a:hover {
    opacity: 0.85;
  }
}
@media only screen and(min-width:992px) {
  .error-box {
    .pc {
      width: 900px;
    }
  }
}
</style>