<template>
  <!-- props	配置选项，具体看下表
      label	指定节点标签为节点对象的某个属性值
      children	指定子树为节点对象的某个属性值
      isLeaf	指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效

      :load="loadNode"
        加载子树数据的方法，仅当 lazy 属性为true 时生效

      lazy	是否懒加载子节点，需与 load 方法结合使用

      show-checkbox	节点是否可被选择

 -->
  <el-tree :props="props" :load="loadNode" lazy> </el-tree>
</template>

<script>
export default {
  data() {
    return {
      props: {
        label: "name",
        children: "zones",
        isLeaf: "leaf",
      },
    };
  },
  methods: {
    loadNode(node, resolve) {
      //resolve()成功的返回数据结果
      // console.log('node',node);
      if (node.level === 0) {
        //进入页面 获取第一层的tree数据
        this.$api.getSelectCategory().then((res) => {
          console.log(res.data);
          return resolve(res.data.result);
        });
      }
      if (node.level >= 1) {
        //请求当前的点击tree下面的数据
        this.$api
          .getSelectCategory({
            id: node.data.cid,
          })
          .then((res) => {
            if (res.data.status === 200) {
              return resolve(res.data.result);
            } else {
              return resolve([]);
            }
          });
      }
    },
  },
};
</script>