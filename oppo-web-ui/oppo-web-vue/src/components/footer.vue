<template>
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
          <div
            class="panel"
            v-for="(item, index) in footerTable"
            :key="item.id"
          >
            <div class="panel-heading" role="tab" :id="'heading' + index">
              <h4 class="panel-title">
                <a
                  :class="index != 0 ? 'collapsed' : ''"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  :href="'#collapse' + index"
                  :aria-expanded="index != 0 ? false : true"
                  :aria-controls="'collapse' + index"
                >
                  {{ item.label }}
                </a>
              </h4>
            </div>
            <div
              :id="'collapse' + index"
              class="panel-collapse collapse"
              :class="index != 0 ? '' : 'in'"
              role="tabpanel"
              :aria-labelledby="'heading' + index"
            >
              <div class="panel-body">
                <dl>
                  <dd v-for="childItem in item.children" :key="childItem.id">
                    <router-link :to="childItem.linkUrl">{{
                      childItem.label
                    }}</router-link>
                  </dd>
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