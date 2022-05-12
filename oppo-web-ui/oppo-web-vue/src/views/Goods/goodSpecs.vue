<template>
  <!-- bug:4个List的字段可能输出很丑 -->
  <div class="container">
    <div class="overview">
      <div class="wraper">
        <div class="left">
          <div class="left-container">
            <div class="title">
              <p>{{ itemData.goodName }} <br />({{ itemData.model }})</p>
            </div>
            <div class="des">
              <p v-html="itemData.description"></p>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="right-container">
            <div class="img-box">
              <img :src="itemData.pictureUrl" />
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
              <p>约 {{ itemData.height }}mm</p>
              <p class="item-param-title">宽</p>
              <p>约 {{ itemData.width }}mm</p>
              <p class="item-param-title">厚</p>
              <p>约 {{ itemData.thickness }}mm</p>
              <p class="item-param-title">重</p>
              <p>约 {{ itemData.weight }}g</p>
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
              <p>{{ itemData.ramRom }}</p>
              <p class="item-param-title">RAM规格</p>
              <p>{{ itemData.ramType }}</p>
              <p class="item-param-title">ROM规格</p>
              <p>{{ itemData.romSpe }}</p>
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
              <p>{{ itemData.screenSize }}英寸（对角线）</p>
              <p class="item-param-title">屏占比</p>
              <p>{{ itemData.screenRatio }}%</p>
              <p class="item-param-title">分辨率</p>
              <p>{{ itemData.resolution }}</p>
              <p class="item-param-title">刷新率</p>
              <p>最高{{ itemData.refreshRate }}Hz</p>
              <p class="item-param-title">触控采样率</p>
              <p>最高{{ itemData.touchRate }}Hz</p>
              <p class="item-param-title">像素密度</p>
              <p>{{ itemData.pixelDensity }}PPI</p>
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
              <p>{{ itemData.cameraRear }}</p>
              <p class="item-param-title">前置</p>
              <p>{{ itemData.cameraFront }}</p>
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
              <p>{{ itemData.cpu }}</p>
              <p class="item-param-title">GPU</p>
              <p>{{ itemData.gpu }}</p>
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
              <p>{{ itemData.battery }}mAh</p>
              <p class="item-param-title">快速充电</p>
              <p>
                <span
                  v-for="(item, index) in itemData.fastChargeList"
                  :key="item"
                >
                  {{ item }}
                  <span v-if="index != itemData.fastChargeList.length - 1"
                    >、</span
                  >
                </span>
              </p>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="感应器" name="7">
        <div class="item-container">
          <div class="item-title"></div>
          <div class="item-content">
            <div class="item-content-wrap">
              <p class="item-param-title">内置传感器</p>
              <p>
                <span v-for="(item, index) in itemData.sensorsList" :key="item">
                  {{ item }}
                  <span v-if="index != itemData.sensorsList.length - 1"
                    >、</span
                  >
                </span>
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
              <p class="item-param-title">双卡双待</p>
              <p><span v-if="!itemData.doubleSIM">不</span>支持</p>
              <p class="item-param-title">SIM卡类型</p>
              <p>{{ itemData.typeSIM }}</p>
              <p class="item-param-title">蓝牙</p>
              <p>{{ itemData.bluetooth }}</p>
              <p class="item-param-title">数据接口</p>
              <p>{{ itemData.usbInterface }}</p>
              <p class="item-param-title">耳机插孔</p>
              <p>{{ itemData.earphoneJack }}</p>
              <p class="item-param-title">NFC</p>
              <p>{{ itemData.nfc }}</p>
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
              <p>
                <span v-for="item in itemData.gpsList" :key="item">
                  {{ item }}
                </span>
              </p>
              <p class="item-param-title">其他</p>
              <p>{{ itemData.otherFunction }}</p>
            </div>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  created() {
    let that = this;
    that.model = this.$route.params.model;
  },
  mounted() {
    let that = this;
    let obj = {
      model: that.model,
    };
    this.$api.getItemListByModel(obj).then((res) => {
      that.itemData = res.data.data[0];
      console.log("itemData:", that.itemData);
    });
  },
  data() {
    return {
      activeNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      model: "",
      itemData: [],
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
  padding: 40px 0 32px;
}

@media only screen and (min-width: 768px) {
  .overview {
    padding: 128px 0 67px;
  }
}
.wraper {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.left {
  padding-right: 20px;
  flex: 1 1 auto;
}

@media only screen and (min-width: 768px) {
  .left {
    padding-right: 128px;
    flex: 1 1 auto;
  }
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

@media (min-width: 1px) and (max-width: 768px) {
  .title p {
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
    color: #000;
  }

  .des p {
    font-size: 16px !important;
    line-height: 33px !important;
    color: rgba(0, 0, 0, 0.78);
    margin-bottom: 0;
  }
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

@media (min-width: 1px) and (max-width: 768px) {
  .item-param-title {
    font-size: 16px;
    font-variation-settings: "wght" 750;
    margin-top: 32px;
    color: #000;
  }
  /deep/.el-collapse-item__header {
    font-size: 18px;
    line-height: 27px;
    font-weight: 500;
    height: 64px;
  }
}
</style>