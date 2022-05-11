<template>
  <!-- bug:0.编辑图片，删除图片，再上传，tableName莫名消失，导致后端无法执行SQL
                    1.删除图片，如果立即提交，没有校验出图为空 -->
  <div>
    <!-- 点击添加按钮后的模态框 -->
    <el-dialog
      :title="this.dialogTitle"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="95px" :rules="rules">
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="副标题" prop="subtitle">
          <el-input type="textarea" v-model="form.subtitle"></el-input>
        </el-form-item>
        <el-form-item :label="status == 0 ? '电脑端横图' : '图片'" prop="pic">
          <el-upload
            ref="upload1"
            class="upload-demo"
            :action="uploadPic"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="status == 0 ? uploadListForPC : fileList"
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
        <el-form-item label="手机端竖图" prop="pic" v-if="status == 0">
          <el-upload
            ref="upload2"
            class="upload-demo"
            :action="uploadPic"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="uploadListForMB"
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
        <el-form-item
          label="型号"
          prop="link"
          v-if="status == 0 || status == 1"
        >
          <el-input v-model="form.link"></el-input>
        </el-form-item>
        <el-form-item label="链接" prop="link" v-else>
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
    status: {
      type: Number,
    },
  },
  mounted() {
    let that = this;
    if (this.status == "0") {
      that.tableName = "home_page";
    } else if (this.status == "1") {
      that.tableName = "more_product_pagee";
    } else if (this.status == "2") {
      that.tableName = "technology_page";
    }
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
      tableName: "",
      fileList: [],
      uploadListForPC: [],
      uploadListForMB: [],
      uploadPic: base.uploadPic,
      form: {
        title: "",
        subtitle: "",
        pictureUrl: [],
        link: "",
      },
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        subtitle: [
          { required: true, message: "请输入副标题", trigger: "blur" },
        ],
        pic: [
          { required: true, validator: validateUploadPic, trigger: "blur" },
        ],
        link: [{ required: true, message: "请输入页面链接", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleClose() {
      // 1.关闭弹窗 2.清空表单
      this.dialogVisible = false;
      this.$refs.form.resetFields();
      this.$refs.upload1.clearFiles();
      if (this.status == 0) {
        this.$refs.upload2.clearFiles();
      }
      this.fileList = [];
      this.uploadListForPC = [];
      this.uploadListForMB = [];
      this.tableName = "";
      this.form = {
        title: "",
        subtitle: "",
        pictureUrl: [],
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
      this.$message.warning("最多只能添加2张图片！");
    },
    beforeUpload(file) {
      if (file.size / 1024 > 500) {
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
      this.form.pictureUrl.push(res.data);
      console.log("form.pictureUrl:", this.form.pictureUrl);
    },
    onSubmit() {
      console.log("表单已输入的信息：", this.form);
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 判断确定按钮的类型：新增？修改？
          if (this.dialogTitle === "添加") {
            let addObj = {
              title: this.form.title,
              subtitle: this.form.subtitle,
              pictureUrl: this.form.pictureUrl,
              link: this.form.link,
              tableName: this.tableName,
            };
            this.$api.addHomePage(addObj).then((res) => {
              if (res.data.success === true) {
                this.$message({
                  message: "添加成功！",
                  type: "success",
                });
                this.handleClose();
                this.$emit("finished");
              } else {
                this.$message.error("添加失败！");
              }
            });
          } else {
            let editObj = {
              id: this.form.id,
              title: this.form.title,
              subtitle: this.form.subtitle,
              pictureUrl: this.form.pictureUrl,
              link: this.form.link,
              tableName: this.tableName,
            };
            this.$api.editHomePage(editObj).then((res) => {
              if (res.data.success === true) {
                this.$message({
                  message: "修改成功！",
                  type: "success",
                });
                this.handleClose();
                this.$emit("finished");
              } else {
                this.$message.error("修改失败！");
              }
            });
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
      if (this.status == "0") {
        this.uploadListForPC = [
          { name: "电脑版轮播横图", url: this.form.pictureUrl[0] },
        ];
        this.uploadListForMB = [
          { name: "手机版轮播竖图", url: this.form.pictureUrl[1] },
        ];
      } else {
        this.fileList = [{ name: "已上传图片", url: this.form.pictureUrl[0] }];
      }
    },
  },
};
</script>

<style>
</style>