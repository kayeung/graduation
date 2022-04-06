<template>
  <div>
    <nav class="navbar navbar-default navbar-static-top" id="oppo-navbar">
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
            <li>
              <a href="#"><span class="glyphicon glyphicon-search"></span></a>
            </li>
            <li>
              <a href="#"><span class="glyphicon glyphicon-user"></span></a>
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