<template>
  <div>
    <!-- 点击添加按钮后的模态框 -->
    <el-dialog
      :title="this.dialogTitle"
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
          <el-upload
            class="upload-demo"
            :action="uploadUrl"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture"
            :on-success="successUpload"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="form.link"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleClose">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import base from "../api/base";
export default {
  props: {
    dialogTitle: {
      type: String,
      default: "添加",
    },
    rowData: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      dialogVisible: false,
      fileList: [],
      uploadUrl: base.uploadUrl,
      form: {
        title: "",
        subtitle: "",
        pictureUrl: "",
        link: "",
      },
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
          this.dialogVisible = false;
        })
        .catch((_) => {});
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    successUpload(res, file, fileList) {
      console.log("上传成功", res, file, fileList);
    },
    // beforeImgUpload(file) {
    //   var SuffixName = this.GetExtensionFileName(file.target.value);
    //   var isLegalPic = false;
    //   const isLt5M = file.size / 1024 / 1024 < 5;
    //   if (SuffixName != "jpg" && SuffixName != "png" && SuffixName != "webp") {
    //     this.$message.error("上传图片只允许是jpg/png/webp格式!");
    //     isLegalPic = true;
    //   }
    //   if (!isLt5M) {
    //     this.$message.error("上传图片大小不能超过 5MB!");
    //   }
    //   return isLegalPic && isLt2M;
    // },
    onSubmit() {
      console.log("submit!");
    },
  },
  watch:{
      rowData(val){
          console.log("监听数据",val);
          this.form=val;
      }
  }
};
</script>

<style>
</style>