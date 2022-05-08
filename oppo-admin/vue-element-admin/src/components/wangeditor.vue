<template>
  <div id="main"></div>
</template>

<script>
import E from "wangeditor";
export default {
  mounted() {
    this.editor = new E("#main");
    this.editor.txt.clear();
    this.editor.txt.html();

    // 配置 onchange 回调函数
    this.editor.config.onchange = (newHtml) => {
      // console.log("change 之后最新的 html", newHtml);
      this.$emit("sendEditor", newHtml);
    };
    // 配置触发 onchange 的时间频率，默认为 200ms
    this.editor.config.onchangeTimeout = 1000; // 修改为 1000ms
    this.editor.create();
  },
};
</script>

<style>
</style>