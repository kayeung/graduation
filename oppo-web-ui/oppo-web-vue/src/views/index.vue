<template>
  <div class="body">
  <!-- 导航条 -->
  <nav class="navbar navbar-default navbar-static-top " id="oppo-navbar">
    <div class="container-fluid container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">
          <svg class="icon-brand" aria-hidden="true">
            <use xlink:href="#icon-oppo"></use>
          </svg>
        </a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a href="#">手机 </a></li>
          <li><a href="#">智能硬件</a></li>
          <li><a href="#">官方商城</a></li>
          <li><a href="#">关于OPPO</a></li>
          <li><a href="#">ColorOS</a></li>
          <li><a href="#">服务</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <!-- <li><a href="#"><span class="iconfont">&#xe6d4;</span></a></li>
          <li><a href="#"><span class="iconfont">&#xe6b1;</span></a></li> -->
          <li><a href="#"><span class="glyphicon glyphicon-search"></span></a></li>
          <li><a href="#"><span class="glyphicon glyphicon-user"></span></a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
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
          <a href="#" id="btn" class="btn" role="button" style="background-color: black;border-color: black;">了解更多</a>
          <a href="#" id="btn-lg" class="btn btn-lg" role="button"
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
          <a href="#" id="btn" class="btn" role="button" style="background-color: black;border-color: black;">了解更多</a>
          <a href="#" id="btn-lg" class="btn btn-lg" role="button"
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
  <footer class="footer">
    <div class="container">

      <!-- 非手机端footer -->
      <div class="row footer-no-mobile">
        <div class="col-sm-4 col-md-3 col-lg-2" id="sm-footer">
          <dl>
            <dt>推荐产品</dt>
            <dd><a href="#">Find N</a></dd>
            <dd><a href="#">Find X3 系列</a></dd>
            <dd><a href="#">Reno7 系列</a></dd>
            <dd><a href="#">A96</a></dd>
            <dd><a href="#">K9x</a></dd>
            <dd><a href="#">Watch Free</a></dd>
            <dd><a href="#">查看全部手机</a></dd>
          </dl>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <dl>
            <dt>购买渠道</dt>
            <dd><a href="#">线下体验店</a></dd>
            <dd><a href="#">OPPO商城</a></dd>
            <dd><a href="#">官方授权网点</a></dd>
          </dl>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <dl>
            <dt>探索精彩OPPO</dt>
            <dd><a href="#">关于OPPO</a></dd>
            <dd><a href="#">新闻中心</a></dd>
            <dd><a href="#">OPPO社区</a></dd>
            <dd><a href="#">加入我们</a></dd>
            <dd><a href="#">知识产权</a></dd>
            <dd><a href="#">可持续发展报告</a></dd>
            <dd><a href="#">安全隐私</a></dd>
          </dl>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <dl>
            <dt>商务合作</dt>
            <dd><a href="#">企业业务</a></dd>
            <dd><a href="#">开放平台</a></dd>
            <dd><a href="#">廉洁合规</a></dd>
          </dl>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <dl>
            <dt>服务与支持</dt>
            <dd><a href="#">联系我们</a></dd>
            <dd><a href="#">服务网点查询</a></dd>
            <dd><a href="#">ColorOS</a></dd>
            <dd><a href="#">云服务</a></dd>
            <dd><a href="#">以旧换新</a></dd>
            <dd><a href="#">安全响应中心</a></dd>
          </dl>
        </div>
        <div class="col-sm-4 col-md-3 col-lg-2">
          <dl>
            <dt>应用与下载</dt>
            <dd><a href="#">OPPO商城APP</a></dd>
            <dd><a href="#">预置软件公示</a></dd>
            <dd><a href="#">LOG专业调色文档</a></dd>
          </dl>
        </div>
      </div>

      <!-- 手机端footer -->
      <div class="panel-group footer-mobile" id="accordion" role="tablist" aria-multiselectable="true">
        <div class="panel">
          <div class="panel-heading" role="tab" id="headingOne">
            <h4 class="panel-title">
              <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true"
                aria-controls="collapseOne">
                推荐产品
                <!-- <span class="glyphicon glyphicon-plus oppo-tablist-icon"></span> -->
              </a>
            </h4>
          </div>
          <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <div class="panel-body">
              <dl>
                <dd><a href="#">Find N</a></dd>
                <dd><a href="#">Find X3 系列</a></dd>
                <dd><a href="#">Reno7 系列</a></dd>
                <dd><a href="#">A96</a></dd>
                <dd><a href="#">K9x</a></dd>
                <dd><a href="#">Watch Free</a></dd>
                <dd><a href="#">查看全部手机</a></dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading" role="tab" id="headingTwo">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
                aria-expanded="false" aria-controls="collapseTwo">
                购买渠道
              </a>
            </h4>
          </div>
          <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div class="panel-body">
              <dl>
                <dd><a href="#">线下体验店</a></dd>
                <dd><a href="#">OPPO商城</a></dd>
                <dd><a href="#">官方授权网点</a></dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading" role="tab" id="headingThree">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree"
                aria-expanded="false" aria-controls="collapseThree">
                探索精彩OPPO
              </a>
            </h4>
          </div>
          <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
            <div class="panel-body">
              <dl>
                <dd><a href="#">关于OPPO</a></dd>
                <dd><a href="#">新闻中心</a></dd>
                <dd><a href="#">OPPO社区</a></dd>
                <dd><a href="#">加入我们</a></dd>
                <dd><a href="#">知识产权</a></dd>
                <dd><a href="#">可持续发展报告</a></dd>
                <dd><a href="#">安全隐私</a></dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading" role="tab" id="headingFour">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour"
                aria-expanded="false" aria-controls="collapseFour">
                商务合作
              </a>
            </h4>
          </div>
          <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
            <div class="panel-body">
              <dl>
                <dd><a href="#">企业业务</a></dd>
                <dd><a href="#">开放平台</a></dd>
                <dd><a href="#">廉洁合规</a></dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading" role="tab" id="headingFive">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive"
                aria-expanded="false" aria-controls="collapseFive">
                服务与支持
              </a>
            </h4>
          </div>
          <div id="collapseFive" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
            <div class="panel-body">
              <dl>
                <dd><a href="#">联系我们</a></dd>
                <dd><a href="#">服务网点查询</a></dd>
                <dd><a href="#">ColorOS</a></dd>
                <dd><a href="#">云服务</a></dd>
                <dd><a href="#">以旧换新</a></dd>
                <dd><a href="#">安全响应中心</a></dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-heading" role="tab" id="headingSix">
            <h4 class="panel-title">
              <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseSix"
                aria-expanded="false" aria-controls="collapseSix">
                应用与下载
              </a>
            </h4>
          </div>
          <div id="collapseSix" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
            <div class="panel-body">
              <dl>
                <dd><a href="#">OPPO商城APP</a></dd>
                <dd><a href="#">预置软件公示</a></dd>
                <dd><a href="#">LOG专业调色文档</a></dd>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div class="contect">
        <a id="contect" href="#">
          <span id="contect-icon" class="glyphicon glyphicon-education"></span>
          <div id="contect-detail">2018级数字媒体技术1班 欧嘉洋</div>
        </a>
      </div>
      <ul class="link">
        <li><a href="#">隐私政策</a></li>
        <li><a href="#">用户协议</a></li>
        <li><a href="#">法律信息</a></li>
        <li><a href="#">知识产权</a></li>
        <li class="copyright"><a href="#">© 2021 - 2022 版权所有 粤ICP备XXXXXXXX号</a></li>
      </ul>
      <div class="clearfix"></div>
    </div>

  </footer>
  </div>
</template>

<script>
import '../assets/css/index.css'
import '../assets/js/iconfont'
export default {

}
</script>

<style>

</style>