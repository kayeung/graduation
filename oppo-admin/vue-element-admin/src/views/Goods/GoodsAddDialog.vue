<template>
  <el-dialog
    title="添加"
    :visible.sync="dialogVisible"
    width="85%"
    :before-close="handleClose"
  >
    <el-form ref="form" :model="form" label-width="85px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="类目选择">
            <el-button type="primary" @click="innerVisible = true"
              >选择</el-button
            >
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="名称">
            <el-input type="text" v-model="form.goodName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="型号">
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
          <el-form-item label="高">
            <el-input type="text" v-model="form.model">
              <template slot="append">mm</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5" :offset="1">
          <el-form-item label="宽">
            <el-input type="text" v-model="form.model">
              <template slot="append">mm</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5" :offset="1">
          <el-form-item label="厚">
            <el-input type="text" v-model="form.model">
              <template slot="append">mm</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5" :offset="1">
          <el-form-item label="重">
            <el-input type="text" v-model="form.model">
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
        <!-- 多选时高度会撑爆，与下一行之间无空隙 -->
        <el-col :span="5" :offset="1">
          <div class="block">
            <span class="demonstration">容量</span>
            <el-cascader
              :options="options"
              :props="props"
              clearable
            ></el-cascader>
          </div>
        </el-col>
        <el-col :span="5">
          <el-form-item label="RAM规格">
            <el-select v-model="ramValue" placeholder="请选择">
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
        <el-col :span="5" :offset="1">
          <el-form-item label="ROM规格">
            <el-select v-model="romValue" placeholder="请选择">
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
      <!-- 显示 -->
      <el-row>
        <el-col :span="1">
          <el-form-item label="显示"> </el-form-item>
        </el-col>
        <el-col :span="23">
          <el-row>
            <el-col :span="6">
              <el-form-item label="尺寸">
                <el-input type="text" v-model="form.model">
                  <template slot="append">寸</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="3">
              <el-form-item label="屏占比">
                <el-input type="text" v-model="form.model">
                  <template slot="append">%</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="3">
              <el-form-item label="分辨率">
                <el-input type="text" v-model="form.model"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="刷新率">
                <el-input type="text" v-model="form.model">
                  <template slot="append">Hz</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="3">
              <el-form-item label="采样率">
                <el-input type="text" v-model="form.model">
                  <template slot="append">Hz</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="3">
              <el-form-item label="像素密度">
                <el-input type="text" v-model="form.model">
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
          <el-form-item label="后置">
            <el-input type="textarea" v-model="form.goodName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="1">
          <el-form-item label="前置">
            <el-input type="textarea" v-model="form.model"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 处理平台 -->
      <el-row>
        <el-col :span="1">
          <el-form-item label="处理平台"> </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="CPU">
            <el-input type="text" v-model="form.goodName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="1">
          <el-form-item label="GPU">
            <el-input type="text" v-model="form.model"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 电池 -->
      <el-row>
        <el-col :span="1">
          <el-form-item label="电池"> </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="容量">
            <el-input type="text" v-model="form.model">
              <template slot="append">mAh</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="23" :offset="1">
          <el-form-item label="快充协议">
            <el-checkbox-group v-model="chargeList">
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
          <el-form-item label="">
            <el-checkbox-group v-model="sensorList">
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
        <el-col :span="5">
          <el-form-item label="是否双卡">
            <el-radio v-model="isDoubleSIM" label="1">支持</el-radio>
            <el-radio v-model="isDoubleSIM" label="0">不支持</el-radio>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="SIM类型">
            <el-select v-model="value_SIM" placeholder="请选择">
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
          <el-form-item label="蓝牙">
            <el-input type="text" v-model="form.goodName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="1">
          <el-form-item label="数据接口">
            <el-select v-model="interfaceValue" placeholder="请选择">
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
                <el-col :span="11" :offset="1">
          <el-form-item label="耳机插孔">
            <el-input type="text" v-model="form.goodName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11" :offset="1">
          <el-form-item label="NFC">
            <el-input type="text" v-model="form.model"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 定位功能 -->
      <el-row>
        <el-col :span="1">
          <el-form-item label="内置感应器"> </el-form-item>
        </el-col>
        <el-col :span="21">
          <el-form-item label="卫星定位">
            <el-checkbox-group v-model="locateList">
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
          <el-form-item label="其他功能">
            <el-input type="textarea" v-model="form.goodName"></el-input>
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
      //容量多选
      props: { multiple: true },
      options: [
        {
          value: 1,
          label: "东南",
          children: [
            {
              value: 2,
              label: "上海",
              children: [
                { value: 3, label: "普陀" },
                { value: 4, label: "黄埔" },
                { value: 5, label: "徐汇" },
              ],
            },
            {
              value: 7,
              label: "江苏",
              children: [
                { value: 8, label: "南京" },
                { value: 9, label: "苏州" },
                { value: 10, label: "无锡" },
              ],
            },
            {
              value: 12,
              label: "浙江",
              children: [
                { value: 13, label: "杭州" },
                { value: 14, label: "宁波" },
                { value: 15, label: "嘉兴" },
              ],
            },
          ],
        },
        {
          value: 17,
          label: "西北",
          children: [
            {
              value: 18,
              label: "陕西",
              children: [
                { value: 19, label: "西安" },
                { value: 20, label: "延安" },
              ],
            },
            {
              value: 21,
              label: "新疆维吾尔族自治区",
              children: [
                { value: 22, label: "乌鲁木齐" },
                { value: 23, label: "克拉玛依" },
              ],
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
      ramValue: "",
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
      romValue: "",
      //快充类型
      chargeList: [],
      //内置感应器
      sensorList:[],
      //是否双卡
      isDoubleSIM: "1",
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
        {
          value: "选项4",
          label: "Standard-SIM",
        },
      ],
      value_SIM: "Nano-SIM",
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
      interfaceValue: "Type-c",
      //卫星定位
      locateList:[],
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