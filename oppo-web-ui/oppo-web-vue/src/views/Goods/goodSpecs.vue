<template>
<!-- 正在调整参数页的布局，oppo官网使用flex布局，要熟悉flex的知识 -->
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="尺寸与重量" name="1">
      <div class="item-container">
        <div class="item-content">
          <div class="item-content-wrap">
            <p class="item-param-title">高</p>
            <p>约 163.2mm</p>
          </div>
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="存储" name="2">
      <div>
        控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
      </div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </el-collapse-item>
    <el-collapse-item title="显示" name="3">
      <div>简化流程：设计简洁直观的操作流程；</div>
      <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
      <div>
        帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
      </div>
    </el-collapse-item>
    <el-collapse-item title="摄像头" name="4">
      <div>
        用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
      </div>
      <div>
        结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"],
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
.item-container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
}
.item-content {
  flex: 1 1 auto;
  .item-param-title {
    font-size: 18px;
    line-height: 27px;
    // font-family: 'OPPOSans-Ver2-Medium';
    font-variation-settings: "wght" 750;
    margin-top: 32px;
    color: #000;
  }
}
// .el-collapse-item__header {
//   font-size: 24px!important;
//   line-height: 36px;
//   font-family: "OPPOSans-Ver2-Medium";
//   font-variation-settings: "wght" 750;
// }
</style>