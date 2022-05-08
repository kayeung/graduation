<template>
  <!-- bug:
  0.4个字段的类型为arrary，这4个字段对应的组件还未能获取接口值
  1.备注无法进行表单验证，此项为必填
  3.类目选择最好能加个加载转动的动画，因为获取远程数据需要时间，在等待过程中显示暂无数据，非常吓人！
  4.提交失败要加个消息提示，不能单单只有表单验证的错误信息 -->
  <el-dialog
    :title="dialogTitle"
    :visible.sync="dialogVisible"
    width="90%"
    :before-close="handleClose"
  >
    <el-form
      ref="form"
      :model="form"
      label-width="90px"
      status-icon
      :rules="rules"
    >
      <el-row>
        <el-col :span="6">
          <el-form-item label="类目选择" prop="classification">
            <el-button type="primary" @click="innerVisible = true"
              >选择</el-button
            >
            <span style="display: inline-block; margin-left: 10px">{{
              treeData.name
            }}</span>
          </el-form-item>
        </el-col>
        <!-- 类目选择 -->
        <el-dialog
          title="类目选择"
          :visible.sync="innerVisible"
          width="30%"
          append-to-body
        >
          <GoodsTree @sendTreeData="getTreeData" />
          <span slot="footer" class="dialog-footer">
            <el-button @click="innerVisible = false">取消</el-button>
            <el-button type="primary" @click="showTreeData">确 定</el-button>
          </span>
        </el-dialog>
        <el-col :span="5" :offset="1">
          <el-form-item label="名称" prop="goodName">
            <el-input type="text" v-model="form.goodName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5" :offset="1">
          <el-form-item label="型号" prop="model">
            <el-input type="text" v-model="form.model"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 尺寸重量 -->
      <el-row>
        <el-col :span="1">
          <el-form-item label="尺寸重量"> </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="高" prop="height">
            <el-input type="text" v-model="form.height">
              <template slot="append">mm</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5" :offset="1">
          <el-form-item label="宽" prop="width">
            <el-input type="text" v-model="form.width">
              <template slot="append">mm</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5" :offset="1">
          <el-form-item label="厚" prop="thickness">
            <el-input type="text" v-model="form.thickness">
              <template slot="append">mm</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5" :offset="1">
          <el-form-item label="重" prop="weight">
            <el-input type="text" v-model="form.weight">
              <template slot="append">g</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 存储 -->
      <el-row>
        <el-col :span="1">
          <el-form-item label="存储"> </el-form-item>
        </el-col>
        <el-col :span="23">
          <el-row>
            <!-- 多选时高度会撑爆，与下一行之间无空隙 -->
            <el-col :span="6">
              <el-form-item label="容量" prop="ramRom">
                <div class="block">
                  <el-cascader
                    :options="options"
                    :props="props"
                    clearable
                    v-model="form.ramRom"
                    separator="+"
                    style="width: 290px"
                  ></el-cascader>
                </div>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="3">
              <el-form-item label="RAM规格" prop="ramType">
                <el-select v-model="form.ramType" placeholder="请选择">
                  <el-option
                    v-for="item in ramOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="3">
              <el-form-item label="ROM规格" prop="romSpe">
                <el-select v-model="form.romSpe" placeholder="请选择">
                  <el-option
                    v-for="item in romOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <!-- 显示 -->
      <el-row>
        <el-col :span="1">
          <el-form-item label="显示"> </el-form-item>
        </el-col>
        <el-col :span="23">
          <el-row>
            <el-col :span="6">
              <el-form-item label="尺寸" prop="screenSize">
                <el-input type="text" v-model="form.screenSize">
                  <template slot="append">英寸</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="3">
              <el-form-item label="屏占比" prop="screenRatio">
                <el-input type="text" v-model="form.screenRatio">
                  <template slot="append">%</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="3">
              <el-form-item label="分辨率" prop="resolution">
                <el-input type="text" v-model="form.resolution"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="刷新率" prop="refreshRate">
                <el-input type="text" v-model="form.refreshRate">
                  <template slot="append">Hz</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="3">
              <el-form-item label="采样率" prop="touchRate">
                <el-input type="text" v-model="form.touchRate">
                  <template slot="append">Hz</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="3">
              <el-form-item label="像素密度" prop="pixelDensity">
                <el-input type="text" v-model="form.pixelDensity">
                  <template slot="append">PPI</template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <!-- 影像系统 -->
      <el-row>
        <el-col :span="1">
          <el-form-item label="影像系统"> </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="后置" prop="cameraRear">
            <el-input type="textarea" v-model="form.cameraRear"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="1">
          <el-form-item label="前置" prop="cameraFront">
            <el-input type="textarea" v-model="form.cameraFront"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 处理平台 -->
      <el-row>
        <el-col :span="1">
          <el-form-item label="处理平台"> </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="CPU" prop="cpu">
            <el-input type="text" v-model="form.cpu"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="1">
          <el-form-item label="GPU" prop="gpu">
            <el-input type="text" v-model="form.gpu"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 电池 -->
      <el-row>
        <el-col :span="1">
          <el-form-item label="电池"> </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="容量" prop="battery">
            <el-input type="text" v-model="form.battery">
              <template slot="append">mAh</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="23" :offset="1">
          <el-form-item label="快充协议" prop="fastChargeList">
            <el-checkbox-group v-model="form.fastChargeList">
              <el-checkbox label="80W SUPERVOOC"></el-checkbox>
              <el-checkbox label="SUPERVOOC 2.0"></el-checkbox>
              <el-checkbox label="SUPERVOOC"></el-checkbox>
              <el-checkbox label="VOOC 3.0"></el-checkbox>
              <el-checkbox label="PD（9V/2A）"></el-checkbox>
              <el-checkbox label="QC（9V/2A）"></el-checkbox>
              <el-checkbox label="50W AIRVOOC"></el-checkbox>
              <el-checkbox label="10W 反向充电"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 感应器 -->
      <el-row>
        <el-col :span="1">
          <el-form-item label="内置感应器"> </el-form-item>
        </el-col>
        <el-col :span="22">
          <el-form-item label="传感器" prop="sensorsList">
            <el-checkbox-group v-model="form.sensorsList">
              <el-checkbox label="地磁传感器"></el-checkbox>
              <el-checkbox label="环境光传感器"></el-checkbox>
              <el-checkbox label="色温传感器"></el-checkbox>
              <el-checkbox label="接近传感器"></el-checkbox>
              <el-checkbox label="加速度传感器"></el-checkbox>
              <el-checkbox label="重力传感器"></el-checkbox>
              <el-checkbox label="陀螺仪"></el-checkbox>
              <el-checkbox label="后置光谱传感器"></el-checkbox>
              <el-checkbox label="支持计步功能"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 蜂窝网络 -->
      <el-row>
        <el-col :span="1">
          <el-form-item label="蜂窝网络"> </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="双卡" prop="doubleSIM">
            <el-radio-group v-model="form.doubleSIM">
              <el-radio :label="true">支持</el-radio>
              <el-radio :label="false">不支持</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="10" :offset="1">
          <el-form-item label="SIM类型" prop="typeSIM">
            <el-select v-model="form.typeSIM" placeholder="请选择">
              <el-option
                v-for="item in options_SIM"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 数据功能 -->
      <el-row>
        <el-col :span="1">
          <el-form-item label="数据功能"> </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="蓝牙" prop="bluetooth">
            <el-input type="text" v-model="form.bluetooth"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="1">
          <el-form-item label="NFC" prop="nfc">
            <el-input type="text" v-model="form.nfc"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="1">
          <el-form-item label="耳机插孔" prop="earphoneJack">
            <el-select v-model="form.earphoneJack" placeholder="请选择">
              <el-option
                v-for="item in earphoneJackOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="1">
          <el-form-item label="数据接口" prop="usbInterface">
            <el-select v-model="form.usbInterface" placeholder="请选择">
              <el-option
                v-for="item in interfaceOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 定位功能 -->
      <el-row>
        <el-col :span="1">
          <el-form-item label="内置感应器"> </el-form-item>
        </el-col>
        <el-col :span="21">
          <el-form-item label="定位" prop="gpsList">
            <el-checkbox-group v-model="form.gpsList">
              <el-checkbox label="内置 GPS"></el-checkbox>
              <el-checkbox label="支持 A-GPS"></el-checkbox>
              <el-checkbox label="北斗"></el-checkbox>
              <el-checkbox label="GLONASS"></el-checkbox>
              <el-checkbox label="GALILEO"></el-checkbox>
              <el-checkbox label="QZSS"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col :span="23" :offset="1">
          <el-form-item label="其他功能" prop="otherFunction">
            <el-input type="textarea" v-model="form.otherFunction"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="封面图" prop="uploadPic">
        <el-upload
          ref="uploadPic"
          class="upload-demo"
          :action="uploadPic"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="coverList"
          list-type="picture"
          :on-success="successUploadPic"
          :limit="1"
          :on-exceed="handleExceed"
          :before-upload="beforeUpload"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png/webp文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>

      <el-form-item label="详情图" prop="uploadPic">
        <el-upload
          ref="uploadDetailPic"
          class="upload-demo"
          :action="uploadPic"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="picList"
          list-type="picture"
          :on-success="successUploadDetailPic"
          :before-upload="beforeUpload"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png/webp文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>

      <el-form-item label="备注" prop="description">
        <wangeditor ref="myEditor" @sendEditor="sendEditor" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="resetForm">清 空</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import base from "../api/base";
import wangeditor from "./wangeditor.vue";
import GoodsTree from "../views/Goods/GoodsTree.vue";

export default {
  props: {
    dialogTitle: {
      type: String,
      default: "添加新品",
    },
    rowData: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },

  components: {
    wangeditor,
    GoodsTree,
  },
  data() {
    var validateUploadPic = (rule, value, callback) => {
      if (this.form.pictureUrl.length == 0) {
        callback(new Error("请上传图片"));
      } else {
        callback();
      }
    };
    var validateClassification = (rule, value, callback) => {
      if (this.treeData.length == 0) {
        callback(new Error("请选择产品类目"));
      } else {
        callback();
      }
    };
    var validateDescription = (rule, value, callback) => {
      console.log("VD:", this.form.description);
      if (this.form.description.length == 0) {
        callback(new Error("请输入备注信息"));
      } else {
        callback();
      }
    };
    return {
      dialogVisible: false, //对话框可视
      innerVisible: false, //类目选择对话框可视
      uploadPic: base.uploadPic,
      coverList: [], //上传封面图
      picList: [], //上传详情图
      treeData: [],
      // 表单
      form: {
        categoryId: "",
        goodName: "",
        model: "",
        height: "",
        width: "",
        thickness: "",
        weight: "",
        ramRom: "",
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
        fastChargeList: [],
        sensorsList: [],
        doubleSIM: true,
        typeSIM: "Nano-SIM",
        bluetooth: "",
        nfc: "",
        earphoneJack: "3.5mm",
        usbInterface: "Type-c",
        gpsList: [],
        otherFunction: "",
        pictureUrl: "",
        detailPictureUrl: "",
        description: "",
      },
      //容量多选
      props: { multiple: true, label: "label" },
      options: [
        {
          value: "6GB",
          label: "6GB",
          children: [
            {
              value: "64GB",
              label: "64GB",
            },
            {
              value: "128GB",
              label: "128GB",
            },
            {
              value: "256GB",
              label: "256GB",
            },
          ],
        },
        {
          value: "8GB",
          label: "8GB",
          children: [
            {
              value: "128GB",
              label: "128GB",
            },
            {
              value: "256GB",
              label: "256GB",
            },
            {
              value: "512GB",
              label: "512GB",
            },
          ],
        },
        {
          value: "12GB",
          label: "12GB",
          children: [
            {
              value: "128GB",
              label: "128GB",
            },
            {
              value: "256GB",
              label: "256GB",
            },
            {
              value: "512GB",
              label: "512GB",
            },
            {
              value: "1TB",
              label: "1TB",
            },
          ],
        },
      ],
      //RAM规格
      ramOptions: [
        {
          value: "LPDDR5",
          label: "LPDDR5",
        },
        {
          value: "LPDDR4X",
          label: "LPDDR4X",
        },
        {
          value: "LPDDR4",
          label: "LPDDR4",
        },
      ],
      //ROM规格
      romOptions: [
        {
          value: "UFS3.1",
          label: "UFS3.1",
        },
        {
          value: "UFS3.0",
          label: "UFS3.0",
        },
        {
          value: "UFS2.1",
          label: "UFS2.1",
        },
        {
          value: "eMMC5.1",
          label: "eMMC5.1",
        },
      ],
      //SIM类型
      options_SIM: [
        {
          value: "Nano-SIM",
          label: "Nano-SIM",
        },
        {
          value: "Micro-SIM",
          label: "Micro-SIM",
        },
        {
          value: "Mini-SIM",
          label: "Mini-SIM",
        },
      ],
      value_SIM: "Nano-SIM",
      //耳机插孔
      earphoneJackOptions: [
        {
          value: "Type-c",
          label: "Type-c",
        },
        {
          value: "3.5mm",
          label: "3.5mm",
        },
      ],
      //数据接口
      interfaceOptions: [
        {
          value: "Type-c",
          label: "Type-c",
        },
        {
          value: "Micro-USB",
          label: "Micro-USB",
        },
      ],
      //校验规则
      rules: {
        classification: [
          {
            required: true,
            validator: validateClassification,
            trigger: "blur",
          },
        ],
        goodName: [{ required: true, message: "请输入名称", trigger: "blur" }],
        model: [{ required: true, message: "请输入型号", trigger: "blur" }],
        height: [
          { required: true, message: "请输入产品的高度", trigger: "blur" },
        ],
        width: [
          { required: true, message: "请输入产品的宽度", trigger: "blur" },
        ],
        thickness: [
          { required: true, message: "请输入产品的厚度", trigger: "blur" },
        ],
        weight: [
          { required: true, message: "请输入产品的重量", trigger: "blur" },
        ],
        ramRom: [
          { required: true, message: "请选择产品的存储组合", trigger: "blur" },
        ],
        ramType: [
          { required: true, message: "请选择RAM规格", trigger: "blur" },
        ],
        romSpe: [{ required: true, message: "请选择ROM规格", trigger: "blur" }],
        screenSize: [
          { required: true, message: "请输入屏幕尺寸", trigger: "blur" },
        ],
        screenRatio: [
          { required: true, message: "请输入屏占比", trigger: "blur" },
        ],
        resolution: [
          { required: true, message: "请输入分辨率", trigger: "blur" },
        ],
        refreshRate: [
          { required: true, message: "请输入刷新率", trigger: "blur" },
        ],
        touchRate: [
          { required: true, message: "请输入触控采样率", trigger: "blur" },
        ],
        pixelDensity: [
          { required: true, message: "请输入像素密度", trigger: "blur" },
        ],
        cameraRear: [
          { required: true, message: "请输入后置摄像头规格", trigger: "blur" },
        ],
        cameraFront: [
          { required: true, message: "请输入前置摄像头规格", trigger: "blur" },
        ],
        cpu: [{ required: true, message: "请输入处理器型号", trigger: "blur" }],
        gpu: [{ required: true, message: "请输入显卡型号", trigger: "blur" }],
        battery: [
          { required: true, message: "请输入电池容量", trigger: "blur" },
        ],
        fastChargeList: [
          { required: true, message: "请选择快充协议", trigger: "blur" },
        ],
        sensorsList: [
          { required: true, message: "请选择内置传感器类型", trigger: "blur" },
        ],
        bluetooth: [
          { required: true, message: "请输入蓝牙规格", trigger: "blur" },
        ],
        nfc: [{ required: true, message: "请输入NFC信息", trigger: "blur" }],
        gpsList: [
          { required: true, message: "请选择支持定位的方式", trigger: "blur" },
        ],
        otherFunction: [
          { required: true, message: "请输入更多的定位信息", trigger: "blur" },
        ],
        uploadPic: [
          { required: true, validator: validateUploadPic, trigger: "blur" },
        ],
      },
      description: [
        { required: true, validator: validateDescription, trigger: "blur" },
      ],
    };
  },
  methods: {
    /***
     * 接收wangEditor数据
     */
    sendEditor(val) {
      this.form.description = val;
      console.log("tree:",val);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
          // 1.关闭弹窗 2.清空表单
          this.dialogVisible = false;
          this.resetForm();
          this.$refs.uploadPic.clearFiles();
          this.$refs.uploadDetailPic.clearFiles();
        })
        .catch((_) => {});
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
    successUploadPic(res, file, fileList) {
      console.log("上传成功", res, file, fileList);
      this.form.pictureUrl = res.data;
    },
    successUploadDetailPic(res, file, fileList) {
      console.log("上传成功", res, file, fileList);
      this.form.detailPictureUrl = res.data;
    },
    //接收tree传递的数据
    getTreeData(val) {
      this.treeData = val;
      console.log("tree数据：", this.treeData);
    },
    //显示tree数据
    showTreeData() {
      this.innerVisible = false;
      this.form.categoryId = this.treeData.cid;
    },
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log("表单已输入的信息：", this.form);

          let s = [];
          for (var i = 0; i < this.form.gpsList.length; i++) {
            s.push(this.form.gpsList[i]);
          }

          this.form.gpsList = s.join();

          // 判断确定按钮的类型：新增？修改？
          if (this.dialogTitle === "添加新品") {
            let obj = {
              battery: this.form.battery,
              bluetooth: this.form.bluetooth,
              cameraFront: this.form.cameraFront,
              cameraRear: this.form.cameraRear,
              categoryId: this.form.categoryId,
              cpu: this.form.cpu,
              description: this.form.description,
              detailPictureUrl: this.form.detailPictureUrl,
              doubleSIM: this.form.doubleSIM,
              earphoneJack: this.form.earphoneJack,
              fastChargeList: this.form.fastChargeList,
              goodName: this.form.goodName,
              gpsList: this.form.gpsList,
              gpu: this.form.gpu,
              height: this.form.height,
              model: this.form.model,
              nfc: this.form.nfc,
              otherFunction: this.form.otherFunction,
              pictureUrl: this.form.pictureUrl,
              pixelDensity: this.form.pixelDensity,
              ramRom: this.form.ramRom,
              ramType: this.form.ramType,
              refreshRate: this.form.refreshRate,
              resolution: this.form.resolution,
              romSpe: this.form.romSpe,
              screenRatio: this.form.screenRatio,
              screenSize: this.form.screenSize,
              sensorsList: this.form.sensorsList,
              thickness: this.form.thickness,
              touchRate: this.form.touchRate,
              typeSIM: this.form.typeSIM,
              usbInterface: this.form.usbInterface,
              weight: this.form.weight,
              width: this.form.width,
            };
            this.$api.addItem(obj).then((res) => {
              if (res.data.success === true) {
                this.$message({
                  message: "添加成功！",
                  type: "success",
                });
                this.$emit("isCloseDialog");
              } else {
                this.$message.error("添加失败！");
              }
            });
          } else {
            console.log("修改产品");
          }
        } else {
          console.log("submit fail...");
        }
      });
    },
    //清空表单
    resetForm() {
      this.$refs.form.resetFields();
      this.form = {
        categoryId: "",
        goodName: "",
        model: "",
        height: "",
        width: "",
        thickness: "",
        weight: "",
        ramRom: "",
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
        fastChargeList: [],
        sensorsList: [],
        doubleSIM: true,
        typeSIM: "Nano-SIM",
        bluetooth: "",
        nfc: "",
        earphoneJack: "3.5mm",
        usbInterface: "Type-c",
        gpsList: [],
        otherFunction: "",
        pictureUrl: "",
        detailPictureUrl: "",
        description: "",
      };
    },
  },
  watch: {
    rowData(val) {
      console.log("监听数据", val);
      this.form = val;
      let tempTree = {
        id: parseInt(val.categoryId / 10, 10),
        cid: val.categoryId,
        name: val.categoryName,
      };
      this.treeData = tempTree;
      // 设置富文本内容
      this.$nextTick(() => {
        this.$refs.myEditor.editor.txt.html(val.description);
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>