<template>
  <div class="body">
  <!-- 导航条 -->
  <Navbar />
  <!-- 轮播图 -->

  <div id="carousel-example-generic" class="carousel slide oppo-carousel" data-ride="carousel" data-interval=3000>
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active ">
        <img src="../assets/images/find-N-vertical.webp" class="img-responsive visible-xs-inline topbanner-vertical-img"
          alt="...">
        <img src="../assets/images/find-N.webp" class="img-responsive hidden-xs" alt="...">
        <div class="carousel-content container">
          <h2 class="title">OPPO Find N <br> 全新折叠旗舰</h2>
          <h3 class="subtitle">从尝鲜，到常用</h3>
          <a href="/gooddetail" id="btn" class="btn" role="button" style="background-color: black;border-color: black;">了解更多</a>
          <a href="/gooddetail" id="btn-lg" class="btn btn-lg" role="button"
            style="background-color: black;border-color: black;">了解更多</a>
        </div>
      </div>
      <div class="item">
        <img src="../assets/images/find-x5-vertical.webp"
          class="img-responsive visible-xs-inline topbanner-vertical-img" alt="...">
        <img src="../assets/images/find-x5.webp" class="img-responsive hidden-xs" alt="...">
        <div class="carousel-content container">
          <h2 class="title">OPPO Find X5 系列</h2>
          <h3 class="subtitle">一帧影像，动用两块芯片。</h3>
          <a href="/gooddetail" id="btn" class="btn" role="button" style="background-color: black;border-color: black;">了解更多</a>
          <a href="/gooddetail" id="btn-lg" class="btn btn-lg" role="button"
            style="background-color: black;border-color: black;">了解更多</a>
        </div>
      </div>
    </div>

    <!-- Controls -->
    <a id="carousel-control-left" class="left carousel-control" href="#carousel-example-generic" role="button"
      data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a id="carousel-control-right" class="right carousel-control" href="#carousel-example-generic" role="button"
      data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  <!-- 内容 -->
  <div class="newProdection">
    <div class="container">
      <div class="page-header">
        <h1 style="font-size: 42px;">更多产品 <a style="cursor: pointer;">查看其它产品</a> </h1>
      </div>
      <div class="content">
        <div class="row">
          <div class="col-sm-12 col-lg-4">
            <div class="row">
              <div class="col-sm-6 col-lg-12">
                <a href="#">
                  <div class="thumbnail oppo-thumbnail">
                    <img src="../assets/images/index-content-A96.webp" alt="...">
                    <div class="caption">
                      <h3>小星环 OPPO A96<small>新品</small></h3>
                      <p>轻薄一点，轻快很多</p>
                      <p><a href="#" class="btn " role="button">了解更多</a> </p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-sm-6 col-lg-12">
                <a href="">
                  <div class="thumbnail oppo-thumbnail">
                    <img src="../assets/images/index-content-enco-air2.webp" alt="...">

                    <div class="caption">
                      <h3>OPPO Enco Air2<small>新品</small></h3>
                      <p>好声音，耳目一新</p>
                      <p><a href="#" class="btn" role="button">了解更多</a> </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-7 col-lg-offset-1">
            <a href="">
              <div class="thumbnail oppo-thumbnail">
                <img src="../assets/images/index-content-reno7.webp" alt="..." id="newProductionRight">
                <div class="caption">
                  <h3>OPPO Reno7 新年版 <small>热销</small></h3>
                  <p>爱不释手红丝绒</p>
                  <p><a href="#" class="btn" role="button">了解更多</a> </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- 内容2 -->
  <div class="oppo-techology">
    <div class="container">
      <div class="page-header">
        <h1 style="font-size: 42px;">OPPO科技</h1>
      </div>
      <div class="content">
        <div class="row">
          <div class="col-sm-8">
            <a href="#">
              <div class="thumbnail oppo-thumbnail" style="background-color: #f5f5f5;">
                <img
                  src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/marisilicon-x/middlebanner/marisilicon-x_middlebanner-1600x1068-pc.jpg.thumb.webp"
                  alt="...">
                <div class="caption">
                  <h3>马里亚纳® MariSilicon X </h3>
                  <p>OPPO 首个自研芯片，全球第一个 6nm 影像专用的 NPU 芯片</p>
                  <p><a href="#" class="btn" role="button">了解更多</a> </p>
                </div>
              </div>
            </a>
          </div>

          <div class="col-sm-4 ">
            <a href="#">
              <div class="thumbnail oppo-thumbnail" style="background-color: #f5f5f5;">
                <!-- <img
                  src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/technology/middlebanner/5g-middlebanner-1340x1786-v3-pc.jpg.thumb.webp"
                  alt="..."> -->
                <img
                  src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/technology/middlebanner/5g-middlebanner-1340x1786-v3-pc.jpg.thumb.webp"
                  alt="..." class="img-responsive" onload="DrawImage(this)" id="oppo-thumbnail-right">
                <div class="caption">
                  <h3>5G，连接身边的世界 </h3>
                  <p>OPPO 相信 5G 不止是一种技术，更代表着无限可能</p>
                  <p><a href="#" class="btn" role="button">了解更多</a> </p>
                </div>
              </div>
            </a>
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
import '../assets/css/index.css'
import '../assets/js/iconfont'
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
export default {
  components:{
    Navbar,
    Footer
  }

}
</script>

<style>

</style>