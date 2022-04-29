<template>
<!-- 目前已完成了获取信息的功能，添加的前端逻辑（但没有与接口对接）
         还有删除，修改没做（后端也没做） -->
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
            @confirm="() => remove(scope, scope.$index)"
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
        </template>
        <div slot="append">123</div>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  created() {
    let that = this;
    this.$api.getNavbar().then((res) => {
      that.tableData = res.data.data;
      console.log("tableData:", that.tableData);
    });
  },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    editContent(scope) {
      scope.row.isEditting = !scope.row.isEditting;
    },
    handleAdd() {
      const newRecord = {
        // id: this.tableData[this.tableData.length - 1].id + 1,
        isEditting: true,
        label: "",
        linkUrl: "",
      };
      this.tableData.push(newRecord);
    },
  },
};
</script>

<style lan="less" scoped>
.add {
  margin-right: 3px;
  float: right;
}
.controlText{
    display: inline-block;
    padding-top: 6px;
}
</style>