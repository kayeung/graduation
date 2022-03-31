<template>
  <!-- 添加功能做到图片上传-->
  <div>
    <!-- 添加按钮 -->
    <el-button
      type="info"
      size="small"
      icon="el-icon-plus"
      class="add"
      @click="dialogVisible = true"
      >添加</el-button
    >
    <!-- 点击添加按钮后的模态框 -->
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
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <!-- 表格主体 -->
    <el-table
      ref="multipleTable"
      :data="
        this.status == '0'
          ? carouselTable
          : this.status == '1'
          ? moreTable
          : techTable
      "
      tooltip-effect="dark"
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
        
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column label="图片" width="200" align="center">
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
import base from "../api/base";
export default {
  props: ["status"],
  data() {
    return {
      dialogVisible: false,
      fileList: [],
      uploadUrl: base.uploadUrl,
      form: {
        title: "",
        subtitle: "",
        imgUrl: "",
        link: "",
      },
      carouselTable: [
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
      moreTable: [
        {
          title: "小星环 OPPO A96",
          subtitle: "轻薄一点，轻快很多",
          img: "../oppo-web-ui/img/index-content-A96.webp",
          link: "https://www.oppo.com/cn/smartphones/series-find-x/find-x5-pro/",
        },
        {
          title: "OPPO Reno7 新年版",
          subtitle: "爱不释手红丝绒",
          img: "../oppo-web-ui/img/index-content-reno7.webp",
          link: "https://www.oppo.com/cn/accessories/oppo-enco-x2/",
        },
      ],
      techTable: [
        {
          title: "马里亚纳® MariSilicon X ",
          subtitle: "OPPO 首个自研芯片，全球第一个 6nm 影像专用的 NPU 芯片",
          img: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/find-x5-pro/topbanner/find-x5-pro-topbanner-pc-v3.jpeg.thumb.webp",
          link: "https://www.oppo.com/cn/smartphones/series-find-x/find-x5-pro/",
        },
        {
          title: "5G，连接身边的世界",
          subtitle: "OPPO 相信 5G 不止是一种技术，更代表着无限可能",
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

<style lan="less" scoped>
.add {
  float: right;
  margin-bottom: 10px;
}
</style>