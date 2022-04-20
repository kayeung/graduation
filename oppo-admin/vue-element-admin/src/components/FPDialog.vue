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
        <el-form-item label="图片" prop="pic">
          <el-upload
            ref="upload"
            class="upload-demo"
            :action="uploadPic"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture"
            :on-success="successUpload"
            :limit="1"
            :on-exceed="handleExceed"
            :before-upload="beforeUpload"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png/webp文件，且文件大小不能超过<span
                style="color: #f56c6c; font-size: 14px"
              >
                500</span
              >
              KB！
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
    var validateUploadPic = (rule, value, callback) => {
      if (this.form.pictureUrl.length == 0) {
        callback(new Error("请上传图片"));
      } else {
        callback();
      }
    };
    return {
      dialogVisible: false,
      fileList: [],
      uploadPic: base.uploadPic,
      form: {
        title: "",
        subtitle: "",
        pictureUrl: "",
        link: "",
      },
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        subtitle: [
          { required: true, message: "请输入副标题", trigger: "blur" },
        ],
        pic: [{  required: true, validator: validateUploadPic, trigger: "blur" }],
        link: [{ required: true, message: "请输入页面链接", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleClose() {
      // 1.关闭弹窗 2.清空表单
      this.dialogVisible = false;
      this.$refs.form.resetFields();
      this.$refs.upload.clearFiles();
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
    handleExceed(files, fileList) {
      this.$message.warning("最多只能添加1张图片！");
    },
    beforeUpload(file) {
      if (file.size / 1024  > 500) {
        this.$message({
          message: "上传文件大小不能超过 500 KB!",
          type: "error",
        });
        return false;
      }
      // 获取文件类型
      var SuffixName = file.name.substring(file.name.lastIndexOf(".") + 1);
      if (SuffixName != "jpg" && SuffixName != "png" && SuffixName != "webp") {
        this.$message({
          message: "上传文件只能是 jpg/png/webp格式!",
          type: "warning",
        });
        return false;
      }
    },
    successUpload(res, file, fileList) {
      console.log("上传成功", res, file, fileList);
      this.form.pictureUrl = res.data;
    },
    onSubmit() {
      console.log("表单已输入的信息：", this.form);
      this.$refs.form.validate((valid) => {
        if (valid) {
          let obj = {
            title: this.form.title,
            subtitle: this.form.subtitle,
            pictureUrl: this.form.pictureUrl,
            link: this.form.link,
          };
          // 判断确定按钮的类型：新增？修改？
          if (this.dialogTitle === "添加") {
            this.$api.addHomePage(obj).then((res) => {
              if (res.data.success === true) {
                this.$message({
                  message: "添加成功！",
                  type: "success",
                });
                this.handleClose();
              } else {
                this.$message.error("添加失败！");
              }
            });
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