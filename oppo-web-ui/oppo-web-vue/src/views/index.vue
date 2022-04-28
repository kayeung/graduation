<template>
  <!-- bug:1.可以尝试使用ColorThief和TextColor两个插件动态识别轮播图主色并反转标题的字体色
                    2.要想实现1，必须做图片跨域加入白名单
                    3.修改后端，让接口的图片URL可以存两张轮播图，一张pc横图，一张手机竖图 -->
  <div class="body">
    <!-- 导航条 -->
    <Navbar />
    <!-- Bootstrap轮播图 -->
    <div
      v-show="true"
      id="carousel-example-generic"
      class="carousel slide oppo-carousel"
      data-ride="carousel"
      data-interval="3000"
    >
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li
          v-for="(item, index) in homeTable"
          :key="item.id"
          data-target="#carousel-example-generic"
          :data-slide-to="index"
          :class="index == 0 ? 'active' : ''"
        ></li>
      </ol>

      <!-- 轮播图 -->
      <div class="carousel-inner" role="listbox">
        <div
          class="item"
          :class="index == 0 ? 'active' : ''"
          v-for="(item, index) in homeTable"
          :key="item.id"
        >
          <img
            src="../assets/images/find-N-vertical.webp"
            class="img-responsive visible-xs-inline topbanner-vertical-img"
            alt="..."
          />
          <img
            :src="item.pictureUrl"
            class="img-responsive hidden-xs"
            alt="..."
          />
          <div class="carousel-content container">
            <h2 class="title" style="color:#777777">
              {{ item.title }}
            </h2>
            <h3 class="subtitle"  style="color:#777777">{{ item.subtitle }}</h3>
            <a
              href="/gooddetail"
              id="btn"
              class="btn"
              role="button"
              style="background-color: #777777; border-color: #777777"
              >了解更多</a
            >
            <!-- 手机版按钮 -->
            <a
              :href="item.link"
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
    <div v-show="moreTable.length != 0">
      <div class="newProdection">
        <div class="container" style="margin-bottom: 100px">
          <div class="page-header">
            <h1 style="font-size: 42px">更多产品</h1>
          </div>
          <div class="content">
            <!-- 3款布局 -->
            <div v-show="moreTable.length == 3">
              <div class="row">
                <div class="col-sm-12 col-md-4">
                  <div class="row">
                    <div v-for="item in moreTable.slice(1, 3)" :key="item.id">
                      <div class="col-sm-6 col-md-12">
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
                </div>
                <div v-for="item in moreTable.slice(0, 1)" :key="item.id">
                  <div class="col-sm-6 col-md-7 col-md-offset-1">
                    <div class="thumbnail oppo-thumbnail">
                      <img
                        :src="item.pictureUrl"
                        alt="..."
                        id="newProductionRight"
                      />
                      <div class="caption">
                        <h3>{{ item.title }} <small>热销</small></h3>
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
            <!-- 1-2款布局 -->
            <div v-show="moreTable.length != 3">
              <div class="row">
                <div v-for="item in moreTable" :key="item.id">
                  <div
                    :class="
                      moreTable.length == 1
                        ? 'col-sm-8 col-sm-offset-2'
                        : 'col-sm-6'
                    "
                  >
                    <div class="thumbnail oppo-thumbnail">
                      <img
                        :src="item.pictureUrl"
                        alt="..."
                        id="newProductionRight"
                      />
                      <div class="caption">
                        <h3>{{ item.title }} <small>热销</small></h3>
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
      </div>
    </div>

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
import textColor from "textcolor";
import ColorThief from "colorthief";
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
      titlesColor: "",
    };
  },
  methods: {
    bg2TextColor() {
      const colorThief = new ColorThief();
      const pic = document.querySelector(".pic");
      console.log("pic:", pic);
      let color = colorThief.getColor(pic);
      console.log("color:", color[0], color[1], color[2]);
      let hex = "rgb(color[0],color[1],color[2])";
      let textcolor = textColor.findTextColor(hex);
      this.titlesColor = textcolor;
      console.log("titlesColor:", this.titlesColor);
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-carousel,
/deep/ .el-carousel__container {
  display: block;
  top: -50px;
  height: 50vw;
}
</style>