<template>
  <div>
    <div class="header">
      <i
        v-if="!isCollapse"
        @click="changeMenu"
        class="iconfont icon-right-indent"
      ></i>
      <i v-else @click="changeMenu" class="iconfont icon-left-indent"></i>

      <div class="user">
        欢迎：{{userinfo.user.username}}
        <i class="iconfont icon-tuichubianji-copy" @click="loginout" style="cursor:pointer;margin-left:10px;font-size:22px;"></i>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  props: ["isCollapse"],
  computed:{
    ...mapState('loginModule',['userinfo'])
  },
  methods: {
    ...mapMutations('loginModule',['clearUser']),
    changeMenu() {
      this.$emit("changeCollapse");
    },
    loginout(){
      //退出登录
      //清空vuex数据
      this.clearUser()
      //清空本地存储
      localStorage.removeItem('user')
      //返回登录
      this.$router.push('/login')
    }
  },
};
</script>

<style lang="less" scoped>
.header {
  line-height: 56px;
  height: 56px;
  background: skyblue;
  color: white;
  .iconfont {
    font-size: 24px;
  }
  .user {
    display: inline-block;
    margin-right: 20px;
    float: right;
  }
}
</style>