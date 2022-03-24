<template>
<!-- 展开子树后对应的index出错 -->
  <div>
    <el-table
      :data="footerTable"
      style="width: 100%"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="title" label="栏目" width="180"> </el-table-column>
      <el-table-column prop="label" label="标签" width="180">
        <template scope="scope">
          <el-input
            v-model="scope.row.label"
            placeholder="请输入内容"
            :disabled="!scope.row.isEditting"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="link" label="链接"
        ><template scope="scope">
        <el-input
          v-model="scope.row.link"
          placeholder="请输入内容"
          :disabled="!scope.row.isEditting"
        ></el-input></template>
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-edit"
            @click="editContent(scope.$index, scope.row.id)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="deleteContent(scope.$index, scope.row.id)"
            >删除</el-button
          ></template
        >
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footerTable: [
        {
          id: 1,
          title: "推荐产品",
          label: "推荐产品",
          link: "#",
          isEditting:false,
          hasChildren: true,
        },
        {
          id: 2,
          title: "购买渠道",
          label: "购买渠道",
          link: "#",
          isEditting:false,
          hasChildren: true,
        },
        {
          id: 3,
          title: "探索精彩OPPO",
          label: "探索精彩OPPO",
          link: "#",
          isEditting:false,
          hasChildren: true,
        },
        {
          id: 4,
          title: "商务合作",
          label: "商务合作",
          link: "#",
          isEditting:false,
          hasChildren: true,
        },
        {
          id: 5,
          title: "服务与支持",
          label: "服务与支持",
          link: "#",
          isEditting:false,
          hasChildren: true,
        },
        {
          id: 6,
          title: "应用与下载",
          label: "应用与下载",
          link: "#",
          isEditting:false,
          hasChildren: true,
        },
      ],
    };
  },
  methods: {
    load(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: 31,
            title: "应用与下载",
            label: "OPPO商城APP",
            link: "https://oppo.com",
          },
          {
            id: 32,
            title: "应用与下载",
            label: "预置软件公示",
            link: "https://oppo.com",
          },
          {
            id: 33,
            title: "应用与下载",
            label: "LOG专业调色文档",
            link: "https://oppo.com",
          },
        ]);
      }, 1000);
    },
    editContent(index, id) {
      console.log("index:",index,"id:",id);
      console.log("---",this.footerTable[index]);
      this.footerTable[index].isEditting= !this.footerTable[index].isEditting;
      console.log("-333--",this.footerTable[index]);
    },
    deleteContent(index, id) {
      console.log(id);
    },
  },
};
</script>

<style>
</style>