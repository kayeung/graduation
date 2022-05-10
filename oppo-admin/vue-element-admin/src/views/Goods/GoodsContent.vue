<template>
  <!--bug:1.正在适配添加、编辑商品接口（等接口的4个字段完善) -->
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
      :rowData="rowData"
      ref="dialog"
    />
    <!-- 表格主体 -->
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      border
    >
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
              :src="scope.row.pictureUrl"
              fit="cover"
            ></el-image>
          </div>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-edit"
            @click="handleEdit(scope)"
            >编辑</el-button
          >
          <el-popconfirm
            icon="el-icon-warning"
            icon-color="red"
            title="真的要删除吗？"
            @confirm="() => remove(scope)"
          >
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              slot="reference"
              style="margin-left: 10px"
              >删除</el-button
            >
          </el-popconfirm></template
        >
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
      id: 1001,
    };
    this.$api.getItemListByCategory(obj).then((res) => {
      console.log("CategoryTable:", res);
      that.tableData = res.data.data;
    });
  },
  data() {
    return {
      dialogVisible: false,
      dialogTitle: "添加新品",
      tableData: [],
      status: "", //目前选择的产品分类 1001智能手机 1002平板 1003折叠屏
      rowData: {},
    };
  },
  methods: {
    refreshTable() {
      let that = this;
      let obj = {
        id: that.status,
      };
      this.$api.getItemListByCategory(obj).then((res) => {
        console.log("CategoryTable:", res);
        that.tableData = res.data.data;
      });
    },
    setParams(val) {
      //获取url传过来的参数
      let that = this;
      that.status = val.params.status;
      console.log("status:", that.status);
      this.refreshTable();
    },
    handleAdd() {
      this.dialogTitle = "添加新品";
      this.$refs.dialog.dialogVisible = true;
    },
    handleEdit(scope) {
      console.log("scope:", scope);
      this.dialogTitle = "编辑产品";
      this.$refs.dialog.dialogVisible = true;
      this.rowData = { ...scope.row }; //防止重复点击相同行，watch不到数据
    },
    remove(scope) {
      let obj = {
        id: scope.row.id,
      };
      this.$api.deleteItem(obj).then((res) => {
        if (res.data.success === true) {
          this.$message({
            message: "删除成功！",
            type: "success",
          });
          this.refreshTable();
        } else {
          this.$message({
            message: "删除失败！",
            type: "warning",
          });
        }
      });
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