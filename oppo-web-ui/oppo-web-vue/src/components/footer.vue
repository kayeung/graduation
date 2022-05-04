<template>
<!-- bug:目前电脑端footer已适配接口，手机端尚未适配 -->
  <div>
    <footer class="footer">
      <div class="container">
        <!-- 电脑端 -->
        <div class="row footer-no-mobile">
          <div
            class="col-sm-4 col-md-3 col-lg-2"
            v-for="item in footerTable"
            :key="item.id"
          >
            <dl>
              <dt>{{ item.label }}</dt>
              <dd v-for="childItem in item.children" :key="childItem.id">
                <router-link :to="childItem.linkUrl">{{
                  childItem.label
                }}</router-link>
              </dd>
            </dl>
          </div>
        </div>

        <!-- 手机端 -->
        <div
          class="panel-group footer-mobile"
          id="accordion"
          role="tablist"
          aria-multiselectable="true"
        >
          <div class="panel">
            <div class="panel-heading" role="tab" id="headingOne">
              <h4 class="panel-title">
                <a
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  推荐产品
                  <!-- <span class="glyphicon glyphicon-plus oppo-tablist-icon"></span> -->
                </a>
              </h4>
            </div>
            <div
              id="collapseOne"
              class="panel-collapse collapse in"
              role="tabpanel"
              aria-labelledby="headingOne"
            >
              <div class="panel-body">
                <dl>
                  <dd><router-link to="/">Find N</router-link></dd>
                  <dd><router-link to="/">Find X3 系列</router-link></dd>
                  <dd><router-link to="/">Reno7 系列</router-link></dd>
                  <dd><router-link to="/">A96</router-link></dd>
                  <dd><router-link to="/">K9x</router-link></dd>
                  <dd><router-link to="/">Watch Free</router-link></dd>
                  <dd><router-link to="/">查看全部手机</router-link></dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-heading" role="tab" id="headingTwo">
              <h4 class="panel-title">
                <a
                  class="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  购买渠道
                </a>
              </h4>
            </div>
            <div
              id="collapseTwo"
              class="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingTwo"
            >
              <div class="panel-body">
                <dl>
                  <dd><router-link to="/">线下体验店</router-link></dd>
                  <dd><router-link to="/">OPPO商城</router-link></dd>
                  <dd><router-link to="/">官方授权网点</router-link></dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-heading" role="tab" id="headingThree">
              <h4 class="panel-title">
                <a
                  class="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  探索精彩OPPO
                </a>
              </h4>
            </div>
            <div
              id="collapseThree"
              class="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingThree"
            >
              <div class="panel-body">
                <dl>
                  <dd><router-link to="/">关于OPPO</router-link></dd>
                  <dd><router-link to="/">新闻中心</router-link></dd>
                  <dd><router-link to="/">OPPO社区</router-link></dd>
                  <dd><router-link to="/">加入我们</router-link></dd>
                  <dd><router-link to="/">知识产权</router-link></dd>
                  <dd><router-link to="/">可持续发展报告</router-link></dd>
                  <dd><router-link to="/">安全隐私</router-link></dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-heading" role="tab" id="headingFour">
              <h4 class="panel-title">
                <a
                  class="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  商务合作
                </a>
              </h4>
            </div>
            <div
              id="collapseFour"
              class="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingFour"
            >
              <div class="panel-body">
                <dl>
                  <dd><router-link to="/">企业业务</router-link></dd>
                  <dd><router-link to="/">开放平台</router-link></dd>
                  <dd><router-link to="/">廉洁合规</router-link></dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-heading" role="tab" id="headingFive">
              <h4 class="panel-title">
                <a
                  class="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  服务与支持
                </a>
              </h4>
            </div>
            <div
              id="collapseFive"
              class="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingFive"
            >
              <div class="panel-body">
                <dl>
                  <dd><router-link to="/">联系我们</router-link></dd>
                  <dd><router-link to="/">服务网点查询</router-link></dd>
                  <dd><router-link to="/">ColorOS</router-link></dd>
                  <dd><router-link to="/">云服务</router-link></dd>
                  <dd><router-link to="/">以旧换新</router-link></dd>
                  <dd><router-link to="/">安全响应中心</router-link></dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="panel-heading" role="tab" id="headingSix">
              <h4 class="panel-title">
                <a
                  class="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  应用与下载
                </a>
              </h4>
            </div>
            <div
              id="collapseSix"
              class="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingSix"
            >
              <div class="panel-body">
                <dl>
                  <dd><router-link to="/">OPPO商城APP</router-link></dd>
                  <dd><router-link to="/">预置软件公示</router-link></dd>
                  <dd><router-link to="/">LOG专业调色文档</router-link></dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div class="contect">
          <router-link to="/" id="contect">
            <span
              id="contect-icon"
              class="glyphicon glyphicon-education"
            ></span>
            <div id="contect-detail">2018级数字媒体技术1班 欧嘉洋</div>
          </router-link>
        </div>
        <ul class="link">
          <li><router-link to="/">隐私政策</router-link></li>
          <li><router-link to="/">用户协议</router-link></li>
          <li><router-link to="/">法律信息</router-link></li>
          <li><router-link to="/">知识产权</router-link></li>
          <li class="copyright">
            <router-link to="/"
              >© 2021 - 2022 版权所有 粤ICP备XXXXXXXX号</router-link
            >
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
    </footer>
  </div>
</template>

<script>
import "../assets/css/index.css";
export default {
  created() {
    let that = this;
    this.$api.getFooter().then((res) => {
      that.footerTable = res.data.data;
      console.log("footerTable:", that.footerTable);
    });
  },
  data() {
    return {
      footerTable: [],
    };
  },
};
</script>

<style>
</style>