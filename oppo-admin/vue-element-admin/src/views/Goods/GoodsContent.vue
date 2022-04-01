<template>
  <div>
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
      :data="
        this.status == 'flod'
          ? flodTable
          : this.status == 'pad'
          ? padTable
          : phoneTable
      "
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
      border
    >
      <!-- <el-table-column type="selection" width="45" align="center">
      </el-table-column> -->
      <el-table-column prop="classification" label="系列" align="center">
      </el-table-column>
      <el-table-column
        prop="goodName"
        label="产品名称"
        align="center"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="model"
        label="型号"
        width="100"
        align="center"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column label="产品图" width="220" align="center">
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
      status: "",
      phoneTable: [
        {
          classification: "OPPO Find 系列",
          goodName: "Find X5 Pro",
          img: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x5-pro/topbanner/find-x5-pro-topbanner-pc-v3.jpeg.thumb.webp",
          model: "IN2022",
        },
        {
          classification: "OPPO Pad",
          goodName: "OPPO Pad",
          img: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/accessories/pad/topbanner/pad-topbanner-pc-v4.jpg.thumb.webp",
          model: "CH2021",
        },
      ],
      padTable: [
        {
          classification: "OPPO Pad",
          goodName: "OPPO Pad",
          img: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/accessories/pad/topbanner/pad-topbanner-pc-v4.jpg.thumb.webp",
          model: "CH2021",
        },
        {
          classification: "OPPO Pad",
          goodName: "OPPO Pad",
          img: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/accessories/pad/topbanner/pad-topbanner-pc-v4.jpg.thumb.webp",
          model: "CH2021",
        },
      ],
      flodTable: [
        {
          classification: "flod",
          goodName: "OPPO Find N",
          img: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/accessories/pad/topbanner/pad-topbanner-pc-v4.jpg.thumb.webp",
          model: "CH2021",
        },
        {
          classification: "OPPO Pad",
          goodName: "OPPO Pad",
          img: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/accessories/pad/topbanner/pad-topbanner-pc-v4.jpg.thumb.webp",
          model: "CH2021",
        },
      ],
      // multipleSelection: [],
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
    setParams(val) {
      //获取url传过来的参数
      this.status = val.params.status;
      console.log("status:", this.status);
    },
  },
  watch: {
    $route: "setParams", //监控url里参数的变化
  },
};
</script>

<style lan="less" scoped>
.add {
  float: right;
  margin-bottom: 10px;
}
</style>