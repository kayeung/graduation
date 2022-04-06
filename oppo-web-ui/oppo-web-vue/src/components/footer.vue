<template>
  <div>
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
export default {

}
</script>

<style>

</style>