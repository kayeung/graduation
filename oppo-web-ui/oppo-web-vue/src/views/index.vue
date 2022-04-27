<template>
  <!-- 更多产品已做了3个产品时的布局，只有1个和3个的还没做-->
  <div class="body">
    <!-- 导航条 -->
    <Navbar />
    <!-- 轮播图 -->

    <div
      id="carousel-example-generic"
      class="carousel slide oppo-carousel"
      data-ride="carousel"
      data-interval="3000"
    >
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li
          data-target="#carousel-example-generic"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img
            src="../assets/images/find-N-vertical.webp"
            class="img-responsive visible-xs-inline topbanner-vertical-img"
            alt="..."
          />
          <img
            src="../assets/images/find-N.webp"
            class="img-responsive hidden-xs"
            alt="..."
          />
          <div class="carousel-content container">
            <h2 class="title">
              OPPO Find N <br />
              全新折叠旗舰
            </h2>
            <h3 class="subtitle">从尝鲜，到常用</h3>
            <a
              href="/gooddetail"
              id="btn"
              class="btn"
              role="button"
              style="background-color: black; border-color: black"
              >了解更多</a
            >
            <a
              href="/gooddetail"
              id="btn-lg"
              class="btn btn-lg"
              role="button"
              style="background-color: black; border-color: black"
              >了解更多</a
            >
          </div>
        </div>
        <div class="item">
          <img
            src="../assets/images/find-x5-vertical.webp"
            class="img-responsive visible-xs-inline topbanner-vertical-img"
            alt="..."
          />
          <img
            src="../assets/images/find-x5.webp"
            class="img-responsive hidden-xs"
            alt="..."
          />
          <div class="carousel-content container">
            <h2 class="title">OPPO Find X5 系列</h2>
            <h3 class="subtitle">一帧影像，动用两块芯片。</h3>
            <a
              href="/gooddetail"
              id="btn"
              class="btn"
              role="button"
              style="background-color: black; border-color: black"
              >了解更多</a
            >
            <a
              href="/gooddetail"
              id="btn-lg"
              class="btn btn-lg"
              role="button"
              style="background-color: black; border-color: black"
              >了解更多</a
            >
          </div>
        </div>
      </div>

      <!-- Controls -->
      <a
        id="carousel-control-left"
        class="left carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="prev"
      >
        <span
          class="glyphicon glyphicon-chevron-left"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        id="carousel-control-right"
        class="right carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="next"
      >
        <span
          class="glyphicon glyphicon-chevron-right"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <!-- 更多产品 -->
    <div class="newProdection">
      <div class="container">
        <div class="page-header">
          <h1 style="font-size: 42px">
            更多产品 <a style="cursor: pointer">查看其它产品</a>
          </h1>
        </div>
        <div class="content">
          <div class="row">
            <div class="col-sm-12 col-lg-4">
              <div class="row">
                <div v-for="item in moreTable.slice(0, 2)" :key="item.id">
                  <div class="col-sm-6 col-lg-12">
                    <div class="thumbnail oppo-thumbnail">
                      <img :src="item.pictureUrl" alt="..." />
                      <div class="caption">
                        <h3>{{ item.title }} <small>新品</small></h3>
                        <p>{{ item.subtitle }}</p>
                        <p>
                          <a :href="item.link" class="btn" role="button"
                        >了解更多</a
                      >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--row-->
            </div>
            <div v-for="item in moreTable.slice(2, 3)" :key="item.id">
              <div class="col-sm-6 col-lg-7 col-lg-offset-1">
                <div class="thumbnail oppo-thumbnail">
                  <img
                    :src="item.pictureUrl"
                    alt="..."
                    id="newProductionRight"
                  />
                  <div class="caption">
                    <h3>{{ item.title }} <small>热销</small></h3>
                    <p>{{ item.subtitle }}</p>
                    <p><a :href="item.link"  class="btn" role="button">了解更多</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 
    <!-- 更多产品 
    <div class="newProdection">
      <div class="container">
        <div class="page-header">
          <h1 style="font-size: 42px">
            更多产品 <a style="cursor: pointer">查看其它产品</a>
          </h1>
        </div>
        <div class="content">
          <div class="row">
            <div class="col-sm-12 col-lg-4">
              <div class="row">
                <div class="col-sm-6 col-lg-12">
                  <a href="#">
                    <div class="thumbnail oppo-thumbnail">
                      <img
                        src="../assets/images/index-content-A96.webp"
                        alt="..."
                      />
                      <div class="caption">
                        <h3>小星环 OPPO A96<small>新品</small></h3>
                        <p>轻薄一点，轻快很多</p>
                        <p>
                          <a href="#" class="btn" role="button">了解更多</a>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-sm-6 col-lg-12">
                  <a href="">
                    <div class="thumbnail oppo-thumbnail">
                      <img
                        src="../assets/images/index-content-enco-air2.webp"
                        alt="..."
                      />
                      <div class="caption">
                        <h3>OPPO Enco Air2<small>新品</small></h3>
                        <p>好声音，耳目一新</p>
                        <p>
                          <a href="#" class="btn" role="button">了解更多</a>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              
            </div>
            <div class="col-sm-6 col-lg-7 col-lg-offset-1">
              <a href="">
                <div class="thumbnail oppo-thumbnail">
                  <img
                    src="../assets/images/index-content-reno7.webp"
                    alt="..."
                    id="newProductionRight"
                  />
                  <div class="caption">
                    <h3>OPPO Reno7 新年版 <small>热销</small></h3>
                    <p>爱不释手红丝绒</p>
                    <p><a href="#" class="btn" role="button">了解更多</a></p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- OPPO科技 -->
    <div v-show="!techTable.length == 0">
      <div class="oppo-techology">
        <div class="container">
          <div class="page-header">
            <h1 style="font-size: 42px">OPPO科技</h1>
          </div>
          <div class="content">
            <div class="row">
              <div
                v-for="(item, index) in techTable"
                :class="
                  techTable.length == 1
                    ? 'col-sm-12'
                    : techTable.length == 3
                    ? 'col-sm-4'
                    : index == 1
                    ? 'col-sm-4'
                    : 'col-sm-8'
                "
                :key="item.id"
              >
                <div
                  class="thumbnail oppo-thumbnail"
                  style="background-color: #f5f5f5"
                >
                  <img
                    :src="item.pictureUrl"
                    alt="..."
                    class="img-responsive"
                    id="oppo-thumbnail-right"
                  />
                  <div class="caption">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.subtitle }}</p>
                    <p>
                      <a :href="item.link" class="btn" role="button"
                        >了解更多</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
import "../assets/css/index.css";
import "../assets/js/iconfont";
import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    let that = this;
    let params = new URLSearchParams();

    params.append("tableName", "home_page");
    this.$api.getHomePageList(params).then((res) => {
      that.homeTable = res.data.data;
      console.log("home_page", that.homeTable);
    });

    params.set("tableName", "more_product_page");
    this.$api.getHomePageList(params).then((res) => {
      that.moreTable = res.data.data;
      console.log("moreTable", that.moreTable);
    });

    params.set("tableName", "technology_page");
    this.$api.getHomePageList(params).then((res) => {
      that.techTable = res.data.data;
      console.log("techTable", that.techTable);
    });
  },
  data() {
    return {
      homeTable: [],
      moreTable: [],
      techTable: [],
    };
  },
};
</script>

<style>
</style>