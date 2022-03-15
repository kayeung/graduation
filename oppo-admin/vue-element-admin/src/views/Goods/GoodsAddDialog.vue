<template>
  <el-dialog
    title="添加"
    :visible.sync="dialogVisible"
    width="80%"
    :before-close="handleClose"
  >
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="类目选择">
        <el-button type="primary" @click="innerVisible = true">选择</el-button>
      </el-form-item>
      <el-form-item label="名称">
        <el-input type="text" v-model="form.goodName"></el-input>
      </el-form-item>
      <el-form-item label="型号">
        <el-input type="text" v-model="form.model"></el-input>
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
      <el-form-item label="产品描述">
        <wangeditor @sendEditor="sendEditor" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </span>

    <!-- 类目选择 -->
    <el-dialog
      title="类目选择"
      :visible.sync="innerVisible"
      width="30%"
      append-to-body
    >
      <GoodsTree />
    </el-dialog>
  </el-dialog>
</template>

<script>
import base from "../../api/base";
import wangeditor from "../Goods/wangeditor.vue";
import GoodsTree from "../Goods/GoodsTree.vue";
export default {
  props: ["dialogVisible"],
  components: {
    wangeditor,
    GoodsTree,
  },
  data() {
    return {
      innerVisible: false,
      uploadUrl: base.uploadUrl,
      fileList: [],
      // 表单
      form: {
        classification: "",
        goodName: "",
        model: "",
        height: "",
        width: "",
        thickness: "",
        weight: "",
        ram_rom: "",
        ramType: "",
        romSpe: "",
        screenSize: "",
        screenRatio: "",
        resolution: "",
        refreshRate: "",
        touchRate: "",
        pixelDensity: "",
        cameraRear: "",
        cameraFront: "",
        cpu: "",
        gpu: "",
        battery: "",
        fastCharge: "",
        sensors: "",
        wlan: "",
        bluetooth: "",
        usbInterface: "",
        earphoneJack: "",
        nfc: "",
        gps: "",
        frequencyAntenna: "",
        otherLocation: "",
      },
    };
  },
  methods: {
    /***
     * 接收wangEditor数据
     */
    sendEditor(val) {
      // this.goodsform.descs=val;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
          this.$emit("isCloseDialog");
        })
        .catch((_) => {});
    },
    onSubmit() {
      console.log("submit!");
      this.$emit("isCloseDialog");
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
  },
};
</script>

<style>
</style>