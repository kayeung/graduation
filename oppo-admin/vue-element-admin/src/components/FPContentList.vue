<template>
  <!-- 完成首页管理的编辑功能（未有添加和编辑的api）  -->
  <div>
    <!-- 添加按钮 -->
    <el-button
      type="info"
      size="small"
      icon="el-icon-plus"
      class="add"
      @click="handleAdd"
      >添加</el-button
    >
    <goodDialog
      :dialogVisible="dialogVisible"
      :dialogTitle="dialogTitle"
      ref="dialog"
      :rowData="rowData"
    />
    <!-- 表格主体 -->
    <el-table
      ref="FPTable"
      :data="
        this.status == '0'
          ? carouselTable
          : this.status == '1'
          ? moreTable
          : techTable
      "
      tooltip-effect="dark"
      border
    >
      <!-- <el-table-column type="selection" width="55" align="center">
      </el-table-column> -->
      <el-table-column prop="title" label="标题" width="200" align="center">
      </el-table-column>
      <el-table-column
        prop="subtitle"
        label="副标题"
        align="center"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column label="图片" width="200" align="center">
        <template slot-scope="scope">
          <div class="block">
            <span class="demonstration"></span>
            <el-image
              style="width: 160px; height: 65px"
              :src="scope.row.pictureUrl"
              fit="cover"
            ></el-image>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="链接" align="center" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-link :href="scope.row.link" target="_blank" icon="el-icon-link"
            ><span>{{ scope.row.link }}</span></el-link
          >
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
        <el-row>
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-edit"
            @click="handleEdit(scope.row)"
            >编辑</el-button
          >
          <el-button type="danger" size="mini" icon="el-icon-delete"
            >删除</el-button
          >
        </el-row>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import base from "../api/base";
import goodDialog from "./FPDialog.vue";
export default {
  props: ["status"],
  components: {
    goodDialog,
  },
  data() {
    return {
      dialogVisible: false,
      dialogTitle: "添加",
      rowData:{},//当前行的数据对象
      carouselTable: [
        {
          title: "OPPO Find X5 系列",
          subtitle: "一帧影像，动用两块芯片。",
          pictureUrl: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x5-pro/topbanner/find-x5-pro-topbanner-pc-v3.jpeg.thumb.webp",
          link: "https://www.oppo.com/cn/smartphones/series-find-x/find-x5-pro/",
        },
        {
          title: "OPPO Enco X2",
          subtitle: "听见音乐心跳",
          pictureUrl: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/enco-x2/topbanner/enco-x2-topbanner_2880x1440_black.jpg.thumb.webp",
          link: "https://www.oppo.com/cn/accessories/oppo-enco-x2/",
        },
      ],
      moreTable: [
        {
          title: "小星环 OPPO A96",
          subtitle: "轻薄一点，轻快很多",
          pictureUrl: "../oppo-web-ui/img/index-content-A96.webp",
          link: "https://www.oppo.com/cn/smartphones/series-find-x/find-x5-pro/",
        },
        {
          title: "OPPO Reno7 新年版",
          subtitle: "爱不释手红丝绒",
          pictureUrl: "../oppo-web-ui/img/index-content-reno7.webp",
          link: "https://www.oppo.com/cn/accessories/oppo-enco-x2/",
        },
      ],
      techTable: [
        {
          title: "马里亚纳® MariSilicon X ",
          subtitle: "OPPO 首个自研芯片，全球第一个 6nm 影像专用的 NPU 芯片",
          pictureUrl: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x5-pro/topbanner/find-x5-pro-topbanner-pc-v3.jpeg.thumb.webp",
          link: "https://www.oppo.com/cn/smartphones/series-find-x/find-x5-pro/",
        },
        {
          title: "5G，连接身边的世界",
          subtitle: "OPPO 相信 5G 不止是一种技术，更代表着无限可能",
          pictureUrl: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/enco-x2/topbanner/enco-x2-topbanner_2880x1440_black.jpg.thumb.webp",
          link: "https://www.oppo.com/cn/accessories/oppo-enco-x2/",
        },
      ],
      // multipleSelection: [],
    };
  },
  methods: {
    handleAdd() {
      this.dialogTitle = "添加";
      this.$refs.dialog.dialogVisible = true;
    },
    handleEdit(row) {
      this.dialogTitle = "编辑";
      this.$refs.dialog.dialogVisible = true;
      this.rowData = {...row};//防止重复点击相同行，watch不到数据
    },
  },
};
</script>

<style lan="less" scoped>
.add {
  float: right;
  margin-bottom: 10px;
}
</style>