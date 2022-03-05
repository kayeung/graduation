<template>
  <!-- bug：当左侧导航栏折叠再展开，宽度没有恢复，仍是折叠时的宽度
     待完善功能：接收参数，判断显示哪个部分的内容 
     添加功能做到图片上传
     -->
  <div>
    <el-button
      type="info"
      size="small"
      icon="el-icon-plus"
      class="add"
      @click="dialogVisible = true"
      >添加</el-button
    >

    <el-dialog
      title="添加"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.subtitle"></el-input>
        </el-form-item>
        <el-form-item label="副标题">
          <el-input type="textarea" v-model="form.subtitle"></el-input>
        </el-form-item>
        <el-form-item label="图片">
          <el-input v-model="form.name"></el-input>
          <!-- <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            limit=1
            
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或<em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">
              只能上传jpg/png/webp文件，且不超过5Mb
            </div>
          </el-upload> -->
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="form.link"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

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
export default {
  data() {
    return {
      imageUrl: "",
      dialogVisible: false,
      form: {
        title: "",
        subtitle: "",
        imgUrl: "",
        link: "",
      },
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
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    onSubmit() {
      console.log("submit!");
    },

    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style lan="less" scoped>
.add {
  float: right;
  margin-bottom: 10px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>