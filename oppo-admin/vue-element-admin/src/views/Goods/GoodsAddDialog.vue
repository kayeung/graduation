<template>
  <el-dialog
    title="添加新品"
    :visible.sync="dialogVisible"
    width="85%"
    :before-close="handleClose"
  >
    <el-form
      ref="infoForm"
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
              form.classification
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
              <el-form-item label="容量" prop="ram_rom">
                <div class="block">
                  <el-cascader
                    :options="options"
                    :props="props"
                    clearable
                    v-model="form.ram_rom"
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
                  <template slot="append">寸</template>
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
          <el-form-item label="" prop="sensorsList">
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
          <el-form-item label="双卡双待" prop="isDoubleSIM">
            <el-radio v-model="form.isDoubleSIM" label="1">支持</el-radio>
            <el-radio v-model="form.isDoubleSIM" label="0">不支持</el-radio>
          </el-form-item>
        </el-col>
        <el-col :span="10" :offset="1">
          <el-form-item label="SIM类型" prop="type_SIM">
            <el-select v-model="form.type_SIM" placeholder="请选择">
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
          <el-form-item label="卫星定位" prop="gpsList">
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
          <el-form-item label="其他功能" prop="otherLocation">
            <el-input type="textarea" v-model="form.otherLocation"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

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
      <el-form-item label="备注">
        <wangeditor @sendEditor="sendEditor" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button  @click="resetForm">清 空</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import base from "../../api/base";
import wangeditor from "../../components/wangeditor.vue";
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
      treeData: "",
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
        fastChargeList: [],
        sensorsList: [],
        isDoubleSIM: "1",
        type_SIM: "Nano-SIM",
        bluetooth: "",
        nfc: "",
        earphoneJack: "3.5mm",
        usbInterface: "Type-c",
        gpsList: [],
        otherLocation: "",
      },
      //容量多选
      props: { multiple: true, label: "label" },
      options: [
        {
          value: 6,
          label: "6GB",
          children: [
            {
              value: 64,
              label: "64GB",
            },
            {
              value: 128,
              label: "128GB",
            },
            {
              value: 256,
              label: "256GB",
            },
          ],
        },
        {
          value: 8,
          label: "8GB",
          children: [
            {
              value: 128,
              label: "128GB",
            },
            {
              value: 256,
              label: "256GB",
            },
            {
              value: 512,
              label: "512GB",
            },
          ],
        },
        {
          value: 12,
          label: "12GB",
          children: [
            {
              value: 128,
              label: "128GB",
            },
            {
              value: 256,
              label: "256GB",
            },
            {
              value: 512,
              label: "512GB",
            },
            {
              value: 1024,
              label: "1TB",
            },
          ],
        },
      ],
      //RAM规格
      ramOptions: [
        {
          value: "选项1",
          label: "LPDDR5",
        },
        {
          value: "选项2",
          label: "LPDDR4X",
        },
        {
          value: "选项3",
          label: "LPDDR4",
        },
      ],
      //ROM规格
      romOptions: [
        {
          value: "选项1",
          label: "UFS3.1",
        },
        {
          value: "选项2",
          label: "UFS3.0",
        },
        {
          value: "选项3",
          label: "UFS2.1",
        },
        {
          value: "选项4",
          label: "eMMC5.1",
        },
      ],
      //SIM类型
      options_SIM: [
        {
          value: "选项1",
          label: "Nano-SIM",
        },
        {
          value: "选项2",
          label: "Micro-SIM",
        },
        {
          value: "选项3",
          label: "Mini-SIM",
        },
      ],
      value_SIM: "Nano-SIM",
      //耳机插孔
      earphoneJackOptions: [
        {
          value: "选项1",
          label: "Type-c",
        },
        {
          value: "选项2",
          label: "3.5mm",
        },
      ],
      //数据接口
      interfaceOptions: [
        {
          value: "选项1",
          label: "Type-c",
        },
        {
          value: "选项2",
          label: "Micro-USB",
        },
      ],
      //校验规则
      rules: {
        classification: [
          { required: true, message: "请选择产品类目", trigger: "blur" },
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
        ram_rom: [
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
        otherLocation: [
          { required: true, message: "请输入更多的定位信息", trigger: "blur" },
        ],
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
      this.$refs['infoForm'].validate((isPass) => {
        if (isPass) {
          console.log(this.form);
          console.log("submit success");
          this.$emit("isCloseDialog");
        }else{
          console.log("submit fail...");
        }
      });
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
    //接收tree传递的数据
    getTreeData(val) {
      console.log("tree数据：", val.name);
      this.treeData = val.name;
    },
    //显示tree数据
    showTreeData() {
      this.innerVisible = false;
      this.form.classification = this.treeData;
    },
    //清空表单
    resetForm(){
      this.$refs['infoForm'].resetFields();
    }
  },
};
</script>

<style lang="less" scoped>
</style>