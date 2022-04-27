<template>
  <!-- bug:1.轮播图背景为黑色时会遮住标题和副标题，可把字体换成灰色
                    2.轮播图高度总比图片高度要高一点点，导致与下方模块的空白隔太多
                    3.当屏幕宽度缩小到小于768px时，轮播图高度不够，无法完整显示竖向的图片（要完善媒体查询的值） -->
  <div class="body">
    <!-- 导航条 -->
    <Navbar />
    <!-- ElementUI轮播图 -->
    <el-carousel indicator-position="none">
      <el-carousel-item v-for="item in homeTable" :key="item.id">
        <div class="item">
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
            <h2 class="title">
              {{ item.title }}
            </h2>
            <h3 class="subtitle">{{ item.subtitle }}</h3>
            <a
              href="/gooddetail"
              id="btn"
              class="btn"
              role="button"
              style="background-color: black; border-color: black"
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
      </el-carousel-item>
    </el-carousel>
    <!-- Bootstrap轮播图 -->
    <div
      v-show="false"
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
      <div
        class="carousel-inner"
        role="listbox"
        v-for="(item, index) in homeTable"
        :key="item.id"
      >
        <div class="item" :class="index == 0 ? 'active' : ''">
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
            <h2 class="title">
              {{ item.title }}
            </h2>
            <h3 class="subtitle">{{ item.subtitle }}</h3>
            <a
              href="/gooddetail"
              id="btn"
              class="btn"
              role="button"
              style="background-color: black; border-color: black"
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

      <!-- Wrapper for slides -->
      <!-- <div class="carousel-inner" role="listbox">
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
      </div> -->

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
            <h1 style="font-size: 42px">
              更多产品 <a style="cursor: pointer">查看其它产品</a>
            </h1>
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

<style lang="less" scoped>
/deep/ .el-carousel,/deep/ .el-carousel__container {
  display: block;
  top: -50px;
  height: 49vw;
}
</style>