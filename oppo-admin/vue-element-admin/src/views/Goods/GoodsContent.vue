<template>
  <!-- 已能互传标题及退出清空表单，编辑功能仍未能获取具体数据（需api配合） 
        bug:1.适配添加商品接口
                2.获取商品信息接口要改，改成通过型号（或者其他字段）获取相应信息
                3.表格正在适配接口显示数据-->
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
    <!-- 点击添加按钮后的模态框 -->
    <GoodsAddDialog
      :dialogVisible="dialogVisible"
      :dialogTitle="dialogTitle"
      ref="dialog"
    />
    <!-- 表格主体 -->
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" border>
      <!-- <el-table-column type="selection" width="45" align="center">
      </el-table-column> -->
      <el-table-column prop="categoryName" label="系列" align="center">
      </el-table-column>
      <el-table-column
        prop="goodName"
        label="产品名称"
        align="center"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="modell"
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
              :src="scope.row.pictureUrl"
              fit="cover"
            ></el-image>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="180" align="center">
        <el-row>
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-edit"
            @click="handleEdit"
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
import GoodsAddDialog from "../../components/GoodsDialog.vue";

export default {
  components: {
    GoodsAddDialog,
  },
  mounted() {
    let that = this;
    let obj = {
      id: that.status,
    };
    this.$api.getItemListByCategory(obj).then((res) => {
      console.log("CategoryTable:", res);
    });
  },
  data() {
    return {
      dialogVisible: false,
      dialogTitle: "添加新品",
      status: "", //目前选择的产品分类 1001智能手机 1002平板 1003折叠屏
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
      tableData: [],
      // multipleSelection: [],
    };
  },
  methods: {
    setParams(val) {
      //获取url传过来的参数
      let that = this;
      that.status = val.params.status;
      console.log("status:", that.status);
      let obj = {
        id: that.status,
      };
      this.$api.getItemListByCategory(obj).then((res) => {
        console.log("CategoryTable:", res);
        that.tableData = res.data.data;
      });
    },
    handleAdd() {
      this.dialogTitle = "添加新品";
      this.$refs.dialog.dialogVisible = true;
    },
    handleEdit(row) {
      this.dialogTitle = "编辑产品";
      this.$refs.dialog.dialogVisible = true;
      // this.rowData = { ...row }; //防止重复点击相同行，watch不到数据
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