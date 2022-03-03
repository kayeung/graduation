<template>
  <div>
      <div class="header">顶部</div>
      <div class="content">
        <router-view/>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header{
  height: 56px;
  background: skyblue;
}
</style>