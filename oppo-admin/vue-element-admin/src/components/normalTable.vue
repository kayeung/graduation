<template>
  <div>
    <el-table :data="tableData" border style="width: 100%" row-key="id">
      <el-table-column prop="label" label="标签" width="180">
        <template slot-scope="scope">
          <el-input v-model="scope.row.label" :disabled="!scope.row.isEditting">
          </el-input
        ></template>
      </el-table-column>
      <el-table-column prop="link" label="链接">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.linkUrl"
            :disabled="!scope.row.isEditting"
          >
          </el-input
        ></template>
      </el-table-column>
      <el-table-column label="操作" width="180" align="left">
        <template slot="header">
          <span class="controlText">操作</span>

          <el-button
            type="info"
            size="small"
            icon="el-icon-plus"
            class="add"
            @click="handleAdd"
            >添加</el-button
          >
        </template>

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
            @confirm="() => remove(scope.row)"
            v-if="!scope.row.isEditting"
          >
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              slot="reference"
              style="margin-left: 10px"
              >删除</el-button
            >
          </el-popconfirm>
          <el-button
            type="info"
            size="mini"
            icon="el-icon-close"
            v-else
            @click="handleCancel(scope)"
            >取消</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  created() {
    this.refreshTable();
  },
  data() {
    return {
      tableData: [],
      tableIsEditting: false,
    };
  },
  methods: {
    refreshTable() {
      let that = this;
      this.$api.getNavbar().then((res) => {
        that.tableData = res.data.data;
        console.log("tableData:", that.tableData);
      });
    },
    editContent(scope) {
      if (!this.tableIsEditting) {
        this.tableIsEditting = !this.tableIsEditting;
        scope.row.isEditting = !scope.row.isEditting;
      } else {
        this.alertEditting();
      }
    },
    handleAdd() {
      if (!this.tableIsEditting) {
        this.tableIsEditting = !this.tableIsEditting;
        if (this.tableData.length < 6) {
          const newRecord = {
            isEditting: true,
            label: "",
            linkUrl: "",
            status: "add",
          };
          this.tableData.push(newRecord);
        } else {
          this.$message({
            message: "无法添加，导航栏最多只能有6个栏目！",
            type: "warning",
          });
        }
      } else {
        this.alertEditting();
      }
    },
    submitEdit(scope) {
      scope.row.isEditting = !scope.row.isEditting;
      console.log("scope:", scope.row);
      if (scope.row.status === "add") {
        let obj = {
          label: scope.row.label,
          linkUrl: scope.row.linkUrl,
        };
        this.$api.addNavbar(obj).then((res) => {
          console.log("add:", res);
          if (res.data.success === true) {
            this.tableIsEditting = !this.tableIsEditting;
            this.$message({
              message: "添加成功！",
              type: "success",
            });
            this.refreshTable();
          } else {
            this.$message({
              message: "添加失败！",
              type: "warning",
            });
          }
        });
      } else {
        let obj = {
          id: scope.row.id,
          label: scope.row.label,
          linkUrl: scope.row.linkUrl,
        };
        this.$api.updateNavbar(obj).then((res) => {
          console.log("update:", res);
          if (res.data.success === true) {
            this.tableIsEditting = !this.tableIsEditting;
            this.$message({
              message: "编辑成功！",
              type: "success",
            });
            this.refreshTable();
          } else {
            this.$message({
              message: "编辑失败！",
              type: "warning",
            });
          }
        });
      }
    },
    remove(row) {
      if (!this.tableIsEditting) {
        console.log("row:", row);
        let obj = {
          id: row.id,
        };
        this.$api.removeNavbar(obj).then((res) => {
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
      } else {
        this.alertEditting();
      }
    },
    handleCancel(row) {
      console.log("row", row);
      row.row.isEditting = !row.row.isEditting;
      this.refreshTable();
      this.tableIsEditting = !this.tableIsEditting;
    },
    alertEditting() {
      this.$message({
        message: "表格正处于编辑状态，请提交或取消正在编辑的内容，再重试！",
        type: "warning",
      });
    },
  },
};
</script>

<style lan="less" scoped>
.add {
  margin-right: 3px;
  float: right;
}
.controlText {
  display: inline-block;
  padding-top: 6px;
}
</style>