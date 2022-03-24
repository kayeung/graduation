<template>
  <!-- 目前点击按钮可改变对应行的输入框状态，但存在bug：需要二次点击按钮才生效，
        因为第一次点击是选中此行，第二次才能修改此行的输入框属性 -->
  <div>
    <el-table
      :data="footerTable"
      style="width: 100%"
      row-key="id"
      border
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="title" label="栏目" width="180"> </el-table-column>
      <el-table-column prop="label" label="标签" width="180">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.label"
            placeholder="请输入内容"
            :disabled="!scope.row.isEditting"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="link" label="链接"
        ><template slot-scope="scope">
          <el-input
            v-model="scope.row.link"
            placeholder="请输入内容"
            :disabled="!scope.row.isEditting"
          ></el-input
        ></template>
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-edit"
            @click="editContent(scope.$index, scope.store.states.currentRow)"
            >编辑</el-button
          >
          <!-- <el-button
            type="primary"
            size="mini"
            icon="el-icon-edit"
            cell-mouse-enter="setCurrentRow(scope.$index)"
            >编辑</el-button
          > -->
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
          isEditting: false,
          children: [
            {
              id: 11,
              title: "推荐产品",
              label: "Find N",
              link: "#",
              isEditting: false,
            },
            {
              id: 12,
              title: "推荐产品",
              label: "Find X3 系列",
              link: "#",
              isEditting: false,
            },
            {
              id: 13,
              title: "推荐产品",
              label: "Reno7 系列",
              link: "#",
              isEditting: false,
            },
            {
              id: 14,
              title: "推荐产品",
              label: "A96",
              link: "#",
              isEditting: false,
            },
            {
              id: 15,
              title: "推荐产品",
              label: "K9x",
              link: "#",
              isEditting: false,
            },
            {
              id: 16,
              title: "推荐产品",
              label: "Watch Free",
              link: "#",
              isEditting: false,
            },
          ],
        },
        {
          id: 2,
          title: "购买渠道",
          label: "购买渠道",
          link: "#",
          isEditting: false,
          children: [
            {
              id: 21,
              title: "购买渠道",
              label: "线下体验店",
              link: "#",
              isEditting: false,
            },
            {
              id: 22,
              title: "购买渠道",
              label: "OPPO商城",
              link: "#",
              isEditting: false,
            },
            {
              id: 23,
              title: "购买渠道",
              label: "官方授权网点",
              link: "#",
              isEditting: false,
            },
          ],
        },
        {
          id: 3,
          title: "探索精彩OPPO",
          label: "探索精彩OPPO",
          link: "#",
          isEditting: false,
          children: [
            {
              id: 31,
              title: "探索精彩OPPO",
              label: "关于OPPO",
              link: "#",
              isEditting: false,
            },
            {
              id: 32,
              title: "探索精彩OPPO",
              label: "新闻中心",
              link: "#",
              isEditting: false,
            },
            {
              id: 33,
              title: "探索精彩OPPO",
              label: "OPPO社区",
              link: "#",
              isEditting: false,
            },
            {
              id: 34,
              title: "探索精彩OPPO",
              label: "加入我们",
              link: "#",
              isEditting: false,
            },
            {
              id: 35,
              title: "探索精彩OPPO",
              label: "知识产权",
              link: "#",
              isEditting: false,
            },
            {
              id: 36,
              title: "探索精彩OPPO",
              label: "可持续发展报告",
              link: "#",
              isEditting: false,
            },
            {
              id: 37,
              title: "探索精彩OPPO",
              label: "安全隐私",
              link: "#",
              isEditting: false,
            },
          ],
        },
        {
          id: 4,
          title: "商务合作",
          label: "商务合作",
          link: "#",
          isEditting: false,
          children: [
            {
              id: 41,
              title: "商务合作",
              label: "企业业务",
              link: "#",
              isEditting: false,
            },
            {
              id: 42,
              title: "商务合作",
              label: "开放平台",
              link: "#",
              isEditting: false,
            },
            {
              id: 43,
              title: "商务合作",
              label: "廉洁合规",
              link: "#",
              isEditting: false,
            },
          ],
        },
        {
          id: 5,
          title: "服务与支持",
          label: "服务与支持",
          link: "#",
          isEditting: false,
          children: [
            {
              id: 51,
              title: "服务与支持",
              label: "联系我们",
              link: "#",
              isEditting: false,
            },
            {
              id: 52,
              title: "服务与支持",
              label: "服务网点查询",
              link: "#",
              isEditting: false,
            },
            {
              id: 53,
              title: "服务与支持",
              label: "ColorOS",
              link: "#",
              isEditting: false,
            },
            {
              id: 54,
              title: "服务与支持",
              label: "云服务",
              link: "#",
              isEditting: false,
            },
            {
              id: 55,
              title: "服务与支持",
              label: "以旧换新",
              link: "#",
              isEditting: false,
            },
            {
              id: 56,
              title: "服务与支持",
              label: "安全响应中心",
              link: "#",
              isEditting: false,
            },
          ],
        },
        {
          id: 6,
          title: "应用与下载",
          label: "应用与下载",
          link: "#",
          isEditting: false,
          children: [
            {
              id: 61,
              title: "应用与下载",
              label: "OPPO商城APP",
              link: "#",
              isEditting: false,
            },
            {
              id: 62,
              title: "应用与下载",
              label: "预置软件公示",
              link: "#",
              isEditting: false,
            },
            {
              id: 63,
              title: "应用与下载",
              label: "LOG专业调色文档",
              link: "#",
              isEditting: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    // load(tree, treeNode, resolve) {
    //   setTimeout(() => {
    //     resolve([
    //       {
    //         id: 31,
    //         title: "应用与下载",
    //         label: "OPPO商城APP",
    //         link: "https://oppo.com",
    //       },
    //       {
    //         id: 32,
    //         title: "应用与下载",
    //         label: "预置软件公示",
    //         link: "https://oppo.com",
    //       },
    //       {
    //         id: 33,
    //         title: "应用与下载",
    //         label: "LOG专业调色文档",
    //         link: "https://oppo.com",
    //       },
    //     ]);
    //   }, 1000);
    // },
    editContent(index, row) {
      console.log("index:",index,"currentRow:",row);
      row.isEditting = !row.isEditting;
    },
    deleteContent(index, id) {
      console.log(id);
    },
  },
};
</script>

<style>
</style>