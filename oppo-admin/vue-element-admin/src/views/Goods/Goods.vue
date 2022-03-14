<template>
  <div class="contect">
    <!-- 添加按钮 -->
    <el-button
      type="info"
      size="small"
      icon="el-icon-plus"
      class="add"
      @click="dialogVisible = true"
      >添加</el-button
    >
    <!-- 点击添加按钮后的模态框 -->
    <GoodsAddDialog
      :dialogVisible="dialogVisible"
      @isCloseDialog="isCloseDialog"
    />
    <!-- 表格主体 -->
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      border
    >
      <el-table-column type="selection" width="55" align="center">
      </el-table-column>
      <el-table-column prop="title" label="标题" width="200" align="center">
      </el-table-column>
      <el-table-column
        prop="subtitle"
        label="副标题"
        align="center"
        width="600"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column label="图片" width="220" align="center">
        <template slot-scope="scope">
          <div class="block">
            <span class="demonstration"></span>
            <el-image
              style="width: 160px; height: 65px"
              :src="scope.row.img"
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
        <el-row>
          <el-button type="primary" size="mini" icon="el-icon-edit"
            >编辑</el-button
          >
          <el-button type="danger" size="mini" icon="el-icon-delete"
            >删除</el-button
          >
        </el-row>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import GoodsAddDialog from "../Goods/GoodsAddDialog.vue";
export default {
  components: {
    GoodsAddDialog,
  },
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          title: "OPPO Find X5 系列",
          subtitle: "一帧影像，动用两块芯片。",
          img: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x5-pro/topbanner/find-x5-pro-topbanner-pc-v3.jpeg.thumb.webp",
          link: "https://www.oppo.com/cn/smartphones/series-find-x/find-x5-pro/",
        },
        {
          title: "OPPO Enco X2",
          subtitle: "听见音乐心跳",
          img: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/enco-x2/topbanner/enco-x2-topbanner_2880x1440_black.jpg.thumb.webp",
          link: "https://www.oppo.com/cn/accessories/oppo-enco-x2/",
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    isCloseDialog() {
      this.dialogVisible = !this.dialogVisible;
    },
  },
};
</script>

<style lan="less" scoped>
.contect {
  margin: 20px;
  background: white;
  padding: 20px;
}
.add {
  float: right;
  margin-bottom: 10px;
}
</style>