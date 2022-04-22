<template>
  <!-- props	配置选项，具体看下表
      label	指定节点标签为节点对象的某个属性值
      children	指定子树为节点对象的某个属性值
      isLeaf	指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效
      :load="loadNode"
        加载子树数据的方法，仅当 lazy 属性为true 时生效

      lazy	是否懒加载子节点，需与 load 方法结合使用
      show-checkbox	节点是否可被选择
      accordion 手风琴模式，一次只能打开一棵树

 -->
  <div>
    <el-tree
      :props="props"
      :load="loadNode"
      lazy
      accordion
      @node-click="nodeCLick"
    >
    </el-tree>
  </div>
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
      // console.log("node", node);
      let params = new URLSearchParams();
      if (node.level === 0) {
        params.append("id", 1);
        //进入页面 获取第一层的tree数据
        this.$api.getCategoryList(params).then((res) => {
          // console.log("一级：",res.data);
          return resolve(res.data.data);
        });
      }
      if (node.level >= 1) {
        params.set("id", node.data.cid);
        //请求当前的点击tree下面的数据
        this.$api.getCategoryList(params).then((res) => {
          // console.log("二级tree", res);
          if (res.status === 200) {
            return resolve(res.data.data);
          } else {
            return resolve([]);
          }
        });
      }
    },
    nodeCLick(data, node) {
      console.log(data, node);
      //传递选中数据
      this.$emit("sendTreeData", data);
    },
  },
};
</script>