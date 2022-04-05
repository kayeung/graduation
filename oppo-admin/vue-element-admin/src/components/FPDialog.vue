<template>
  <div>
    <!-- 点击添加按钮后的模态框 -->
    <el-dialog
      :title="this.dialogTitle"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="副标题" prop="subtitle">
          <el-input type="textarea" v-model="form.subtitle"></el-input>
        </el-form-item>
        <el-form-item label="图片" prop="cover">
          <el-upload
            class="upload-demo"
            :action="uploadUrl"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture"
            :on-success="successUpload"
            limit="1"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="链接" prop="link">
          <el-input v-model="form.link"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="onSubmit">确 定</el-button>
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
        // pictureUrl: require('../../server/upload/bz.jpg'),
        pictureUrl: "",
        link: "",
      },
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        subtitle: [
          { required: true, message: "请输入副标题", trigger: "blur" },
        ],
        cover: [{ required: true, message: "请上传图片", trigger: "blur" }],
        link: [{ required: true, message: "请输入页面链接", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleClose() {
      // 1.关闭弹窗 2.清空表单
      this.dialogVisible = false;
      this.$refs.form.resetFields();
      this.form = {
        title: "",
        subtitle: "",
        pictureUrl: "",
        link: "",
      };
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
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log("表单已输入的信息：", this.form);
          let { title, subtitle, pictureUrl, link } = this.form;
          // 判断确定按钮的类型：新增？修改？
          if (this.dialogTitle==="添加") {
            console.log("添加商品");
          } else {
            console.log("修改商品");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  watch: {
    rowData(val) {
      console.log("监听数据", val);
      this.form = val;
    },
  },
};
</script>

<style>
</style>