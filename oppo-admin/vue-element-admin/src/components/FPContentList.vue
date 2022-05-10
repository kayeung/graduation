<template>
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
    <span
      class="add"
      style="
        color: #909399;
        font-size: 12px;
        line-height: 32px;
        margin-right: 5px;
      "
      >(最多3条记录)</span
    >
    <FPDialog
      :dialogVisible="dialogVisible"
      :dialogTitle="dialogTitle"
      ref="dialog"
      :rowData="rowData"
      :status="this.status"
      @finished="refreshTable"
    />
    <!-- 表格主体 -->
    <el-table
      ref="FPTable"
      :data="
        this.status == '0'
          ? carouselTable
          : this.status == '1'
          ? moreTable
          : this.status == '2'
          ? techTable
          : xx
      "
      tooltip-effect="dark"
      border
    >
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
      <el-table-column
        label="型号"
        align="center"
        show-overflow-tooltip
        v-if="status == 0 || status == 1"
      >
        <template slot-scope="scope">
          <el-link :href="scope.row.link" target="_blank" icon="el-icon-link"
            ><span>{{ scope.row.link }}</span></el-link
          >
        </template>
      </el-table-column>
      <el-table-column label="链接" align="center" show-overflow-tooltip v-else>
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
            <el-popconfirm
              icon="el-icon-warning"
              icon-color="red"
              title="真的要删除吗？"
              @confirm="() => remove(scope.row)"
            >
              <el-button
                type="danger"
                size="mini"
                icon="el-icon-delete"
                slot="reference"
                style="margin-left: 10px"
                >删除</el-button
              ></el-popconfirm
            >
          </el-row>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import FPDialog from "./FPDialog.vue";
export default {
  props: ["status"],
  components: {
    FPDialog,
  },
  mounted() {
    this.refreshTable();
  },
  data() {
    return {
      dialogVisible: false,
      dialogTitle: "添加",
      rowData: {}, //当前行的数据对象
      carouselTable: [],
      moreTable: [],
      techTable: [],
      // multipleSelection: [],
    };
  },
  methods: {
    refreshTable() {
      let that = this;
      let params = new URLSearchParams();
      // console.log("status:", this.status);
      params.append(
        "tableName",
        this.status == "0"
          ? "home_page"
          : this.status == "1"
          ? "more_product_page"
          : this.status == "2"
          ? "technology_page"
          : ""
      );
      this.$api.getHomePageList(params).then((res) => {
        console.log("res.data:", res.data);
        if (this.status == "0") {
          that.carouselTable = res.data.data;
        } else if (this.status == "1") {
          that.moreTable = res.data.data;
        } else if (this.status == "2") {
          that.techTable = res.data.data;
        }
      });
    },
    handleAdd() {
      this.dialogTitle = "添加";
      if (this.status == "0" && this.carouselTable.length < 3) {
        this.$refs.dialog.dialogVisible = true;
      } else if (this.status == "1" && this.moreTable.length < 3) {
        this.$refs.dialog.dialogVisible = true;
      } else if (this.status == "2" && this.techTable.length < 3) {
        this.$refs.dialog.dialogVisible = true;
      } else {
        this.$message({
          message: "无法添加，记录量已达最大值！",
          type: "warning",
        });
      }
    },
    handleEdit(row) {
      this.dialogTitle = "编辑";
      this.$refs.dialog.dialogVisible = true;
      this.rowData = { ...row }; //防止重复点击相同行，watch不到数据
    },
    remove(row) {
      console.log("row:", row);
      let obj = {
        id: row.id,
        tableName:
          this.status == "0"
            ? "home_page"
            : this.status == "1"
            ? "more_product_page"
            : this.status == "2"
            ? "technology_page"
            : "",
      };
      this.$api.removeHomePage(obj).then((res) => {
        console.log("delete:", res);
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
};
</script>

<style lan="less" scoped>
.add {
  float: right;
  margin-bottom: 10px;
}
</style>