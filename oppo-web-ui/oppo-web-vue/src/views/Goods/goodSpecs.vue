<template>
  <div class="container">
    <div class="overview">
      <div class="wraper">
        <div class="left">
          <div class="left-container">
            <div class="title">
              <p>OPPO Find N <br />(IN2020)</p>
            </div>
            <div class="des">
              <p>123<br />456<br />789<br />456<br />789<br />456<br />789</p>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="right-container">
            <div class="img-box">
              <img
                src="https://image.oppo.com/content/dam/oppo/product-asset-library/specs/find-n/Find-N-specs-pc-v2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="尺寸与重量" name="1">
        <div class="item-container">
          <div class="item-title"></div>
          <div class="item-content">
            <div class="item-content-wrap">
              <p class="item-param-title">高</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">宽</p>
              <p>约 73.9mm</p>
              <p class="item-param-title">厚</p>
              <p>约 8.5mm（陶瓷）</p>
              <p class="item-param-title">重</p>
              <p>约 218g（陶瓷）</p>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="存储" name="2">
        <div class="item-container">
          <div class="item-title"></div>
          <div class="item-content">
            <div class="item-content-wrap">
              <p class="item-param-title">RAM容量+ROM容量</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">RAM规格</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">ROM规格</p>
              <p>约 163.2mm</p>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="显示" name="3">
        <div class="item-container">
          <div class="item-title"></div>
          <div class="item-content">
            <div class="item-content-wrap">
              <p class="item-param-title">尺寸</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">屏占比</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">分辨率</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">刷新率</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">触控采样率</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">像素密度</p>
              <p>约 163.2mm</p>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="摄像头" name="4">
        <div class="item-container">
          <div class="item-title"></div>
          <div class="item-content">
            <div class="item-content-wrap">
              <p class="item-param-title">后置</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">前置</p>
              <p>约 163.2mm</p>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="处理平台" name="5">
        <div class="item-container">
          <div class="item-title"></div>
          <div class="item-content">
            <div class="item-content-wrap">
              <p class="item-param-title">CPU</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">GPU</p>
              <p>约 163.2mm</p>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="电池" name="6">
        <div class="item-container">
          <div class="item-title"></div>
          <div class="item-content">
            <div class="item-content-wrap">
              <p class="item-param-title">电池容量</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">快速充电</p>
              <p>约 163.2mm</p>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="感应器" name="7">
        <div class="item-container">
          <div class="item-title"></div>
          <div class="item-content">
            <div class="item-content-wrap">
              <p>
                地磁传感器、环境光传感器、色温传感器、接近传感器，加速度传感器，重力传感器、陀螺仪、后置光谱传感器、支持记步功能
              </p>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="数据功能" name="8">
        <div class="item-container">
          <div class="item-title"></div>
          <div class="item-content">
            <div class="item-content-wrap">
              <p class="item-param-title">是否支持双卡双待</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">SIM卡类型</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">WLAN功能</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">蓝牙</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">数据接口</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">NFC</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">快速充电</p>
              <p>约 163.2mm</p>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="定位功能" name="9">
        <div class="item-container">
          <div class="item-title"></div>
          <div class="item-content">
            <div class="item-content-wrap">
              <p class="item-param-title">卫星定位</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">双频双天线定位</p>
              <p>约 163.2mm</p>
              <p class="item-param-title">其他</p>
              <p>约 163.2mm</p>
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="less" scoped>
.overview {
  padding: 128px 0 67px;
}
.wraper {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.left {
  padding-right: 128px;
  flex: 1 1 auto;
}
.title,
.des {
  margin-bottom: 30px;
}
.title p {
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
  color: #000;
}
.des p {
  font-size: 18px;
  line-height: 43px;
  color: rgba(0, 0, 0, 0.78);
  margin-bottom: 0;
}

.right {
  max-width: 640px;
  flex: 0 1 auto;
}
@media only screen and (min-width: 768px) {
  .right {
    flex: 0 0 640px;
  }
}
.img-box {
  margin-bottom: 32px;
}
.img-box img {
  width: 100%;
  display: block;
}
.item-container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
}
.item-title {
  width: 220px;
  flex: 0 0 220px;
}
@media (min-width: 1px) and (max-width: 768px) {
  .item-title {
    width: 10px;
    flex: 0 0 10px;
  }
}
.item-content {
  flex: 1 1 auto;
  color: rgba(0, 0, 0, 0.56);
}
.item-param-title {
  font-size: 20px;
  font-variation-settings: "wght" 750;
  margin-top: 32px;
  color: #000;
}
.item-content-wrap {
  font-size: 16px;
}
/deep/.el-collapse-item__header {
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;
  height: 128px;
}
</style>