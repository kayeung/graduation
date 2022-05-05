<template>
  <!-- bug：
  0.删除未能少一行的解决方法：到时与接口对接时，在进行删除操作后才重新获取数据，即可实现少一行的效果
   -->
  <div>
    <el-table
      ref="linksTable"
      :data="tableData"
      style="width: 100%"
      row-key="id"
      border
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="titleName" label="栏目" width="180">
      </el-table-column>
      <el-table-column prop="label" label="标签" width="180">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.label"
            placeholder="请输入内容"
            :disabled="!scope.row.isEditting"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="linkUrl" label="链接"
        ><template slot-scope="scope">
          <el-input
            v-model="scope.row.linkUrl"
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
            @confirm="() => remove(scope)"
            v-if="!scope.row.isEditting"
          >
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              slot="reference"
              style="margin-left: 10px"
              v-if="scope.row.level > 1"
              >删除</el-button
            >
          </el-popconfirm>
          <el-button
            type="warning"
            size="mini"
            icon="el-icon-close"
            v-else
            @click="handleCancel(scope)"
            >取消</el-button
          >
          <el-button
            type="info"
            size="mini"
            icon="el-icon-plus"
            v-if="scope.row.level == 1 && scope.row.isEditting==false"
            @click="() => append(scope)"
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
      this.$api.getAllLinks().then((res) => {
        console.log("FooterRes", res);
        that.tableData = res.data.data;
      });
    },
    editContent(scope) {
      if (!this.tableIsEditting) {
        scope.row.isEditting = !scope.row.isEditting;
        this.tableIsEditting = !this.tableIsEditting;
      } else {
        this.alertEditting();
      }
    },
    remove(scope) {
      console.log("delete:",scope);
      if (!this.tableIsEditting) {
        let obj = {
          id: scope.row.id,
          parentId: scope.row.parentId,
        };
        this.$api.deleteLink(obj).then((res) => {
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
    submitEdit(scope) {
      scope.row.isEditting = !scope.row.isEditting;
      if (scope.row.status === "add") {
        let obj = {
          label: scope.row.label,
          linkUrl: scope.row.linkUrl,
          parentId: scope.row.parentId,
          titleId: scope.row.titleId,
        };
        this.$api.addLink(obj).then((res) => {
          console.log("add:", res);
          if (res.data.success === true) {
            this.tableIsEditting = false;
            this.$message({
              message: "添加成功！",
              type: "success",
            });
          } else {
            this.tableIsEditting = false;
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
          titleId: scope.row.titleId,
          titleName: scope.row.label,
        };
        this.$api.updateLink(obj).then((res) => {
          if (res.data.success === true) {
            this.tableIsEditting = false;
            this.$message({
              message: "编辑成功！",
              type: "success",
            });
          } else {
            this.tableIsEditting = false;
            this.$message({
              message: "编辑失败！",
              type: "warning",
            });
          }
        });
      }
    },
    //追加子节点
    append(scope) {
      if (!this.tableIsEditting) {
        console.log("parent:", scope);
        if (scope.row.children.length >= 7) {
          this.$message({
            message: "无法添加，单个栏目最多只能7条链接！",
            type: "warning",
          });
        } else {
          this.tableIsEditting = !this.tableIsEditting;
          this.$refs.linksTable.toggleRowExpansion(scope.row, true); //展开子树
          const newChild = {
            id: 100,
            level: 2,
            label: "",
            linkUrl: "",
            titleName: scope.row.titleName,
            parentId: scope.row.id,
            titleId: scope.row.titleId,
            isEditting: true,
            status: "add",
          };
          if (!scope.row.children) {
            this.$set(scope.row, "children", []);
          }
          scope.row.children.push(newChild);
        }
      } else {
        this.alertEditting();
      }
    },
    handleCancel(scope) {
      scope.row.isEditting = !scope.row.isEditting;
      this.refreshTable();
      this.tableIsEditting = false;
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

<style>
</style>