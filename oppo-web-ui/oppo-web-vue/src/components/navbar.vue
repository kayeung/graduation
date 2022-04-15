<template>
  <div>
    <nav class="navbar navbar-default navbar-default navbar-static-top" id="oppo-navbar">
      <div class="container-fluid container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link to="/" class="navbar-brand">
            <svg class="icon-brand" aria-hidden="true">
              <use xlink:href="#icon-oppo"></use>
            </svg>
          </router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><router-link to="/">手机 </router-link></li>
            <li><router-link to="/">智能硬件</router-link></li>
            <li><router-link to="/">官方商城</router-link></li>
            <li><router-link to="/">关于OPPO</router-link></li>
            <li><router-link to="/">ColorOS</router-link></li>
            <li><router-link to="/">服务</router-link></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <!-- <li><router-link to="/"><span class="iconfont">&#xe6d4;</span></router-link></li>
          <li><router-link to="/"><span class="iconfont">&#xe6b1;</span></router-link></li> -->
            <li>
              <router-link to="/"><span class="glyphicon glyphicon-search"></span></router-link>
            </li>
            <li>
              <router-link to="/"><span class="glyphicon glyphicon-user"></span></router-link>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
import '../assets/css/index.css'
export default {};
</script>

<style>
</style>