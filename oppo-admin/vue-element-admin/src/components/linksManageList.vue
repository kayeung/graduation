<template>
  <!-- bug：
  0.删除未能少一行的解决方法：到时与接口对接时，在进行删除操作后才重新获取数据，即可实现少一行的效果
  1.导航栏表格的内容会影响到页脚表格的显示效果
   -->
  <div>
    <el-table
      ref="linksTable"
      :data="this.status == 'fotter' ? footerTable : navTable"
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
      <el-table-column label="操作" width="180" align="left">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-edit"
            @click="editContent(scope)"
            v-if="!scope.row.isEditting"
            >编辑</el-button
          >
          <el-button
            type="success"
            size="mini"
            icon="el-icon-check"
            v-else
            @click="submitEdit(scope)"
            >提交</el-button
          >
          <el-popconfirm
            icon="el-icon-warning"
            icon-color="red"
            title="真的要删除吗？"
            @confirm="() => remove(scope, scope.$index)"
          >
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              slot="reference"
              style="margin-left: 10px"
              v-if="scope.row.id / 10 >= 1"
              >删除</el-button
            >
          </el-popconfirm>
          <el-button
            type="info"
            size="mini"
            icon="el-icon-plus"
            v-if="scope.row.id / 10 < 1"
            @click="() => append(scope.row)"
            style="margin-left: 10px"
            >添加</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: ["status"],
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
      navTable: [
        {
          id: 1,
          title: "这里是导航栏",
          label: "这里是导航栏",
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
  mounted: {},
  methods: {
    editContent(scope) {
      scope.row.isEditting = !scope.row.isEditting;
    },
    remove(scope, data) {
      console.log(
        scope.store.states.data[parseInt(scope.row.id / 10) - 1].children[
          (scope.row.id % 10) - 1
        ]
      );
      //this.remove(node);
      // scope.store.states.data[parseInt((scope.row.id)/10)-1].children[(scope.row.id%10)-1].splice();
    },
    submitEdit(scope) {
      scope.row.isEditting = !scope.row.isEditting;
      //this.$api.
    },
    //追加子节点
    append(scope) {
      console.log("parent:", scope);
      if (scope.children.length >= 7) {
        this.$message({
          message: "无法添加，单个栏目最多只能7条链接！",
          type: "warning",
        });
      } else {
        this.$refs.linksTable.toggleRowExpansion(scope, true); //展开子树
        const newChild = {
          id: scope.id * 10 + scope.children.length + 1,
          title: scope.title,
          label: "",
          link: "",
          isEditting: true,
        };
        if (!scope.children) {
          this.$set(scope, "children", []);
        }
        scope.children.push(newChild);
      }
    },
  },
};
</script>

<style>
</style>