<template>
<!-- bug:跨域代理失败，一直是localhost:8080 -->
  <div class="page">
    <div style="height: 24vh"></div>
    <div class="login-box">
      <div class="logo">
        <img src="../../assets/images/finder.png" width="96px" height="96px" />
      </div>

      <h3 class="title" style="cursor: default">后台管理系统</h3>

      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        class="demo-ruleForm"
        hide-required-asterisk
      >
        <el-form-item prop="userName">
          <el-input
            type="text"
            v-model="loginForm.userName"
            autocomplete="off"
            suffix-icon="el-icon-user"
            placeholder="登录账号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            autocomplete="off"
            suffix-icon="el-icon-key"
            placeholder="登录密码"
          ></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item class="code" prop="verifyCode">
          <el-input
            v-model="loginForm.verifyCode"
            placeholder="不区分大小写"
            :validate-event="false"
          >
            <template slot="append">
              <div @click="reflash" style="margin: 0 -16px">
                <canvas ref="canvas" width="100" height="30"></canvas></div
            ></template>
          </el-input>
        </el-form-item>

        <el-form-item>
          <div
            style="display: block; width: 40px; height: 40px; margin: 0 auto"
          >
            <el-button
              icon="el-icon-right"
              circle
              @click="submitForm()"
              style="text-align: center"
            ></el-button>
            <!-- <el-button @click="resetForm('loginForm')">重置</el-button> -->
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import jwt from "jwt-decode";
import { mapMutations } from "vuex";
export default {
  data() {
    var validateCode = (rule, value, callback) => {
      var num = this.showNum.join(""); //将字符数组转换成字符串
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        if (value === num) {
          callback();
        } else {
          this.reflash();
          callback(new Error("验证码错误！"));
        }
      }
    };
    return {
      showNum: [],
      loginForm: {
        userName: "",
        password: "",
        verifyCode: "",
      },
      submitLoginForm: {
        userName: "",
        password: "",
      },
      rules: {
        userName: [{ required: true, message: "请输入账号" }],
        password: [{ required: true, message: "请输入密码" }],
        verifyCode: [{ validator: validateCode, trigger: "blur" }],
      },
    };
  },
  mounted() {
    this.draw(this.showNum);
  },
  methods: {
    ...mapMutations("loginModule", ["setUser"]),

    //刷新验证码
    reflash() {
      this.draw(this.showNum);
    },

    //得到随机的颜色值
    randomColor() {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      return "rgb(" + r + "," + g + "," + b + ")";
    },

    //生成并渲染出验证码图形
    draw(showNum) {
      var canvas_width = this.$refs.canvas.offsetWidth;
      var canvas_height = this.$refs.canvas.offsetHeight;
      var canvas = this.$refs.canvas; //获取到canvas的对象，演员
      var context = canvas.getContext("2d"); //获取到canvas画图的环境，演员表演的舞台
      canvas.width = canvas_width;
      canvas.height = canvas_height;
      var sCode =
        "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
      var aCode = sCode.split(",");
      var aLength = aCode.length; //获取到数组的长度

      for (var i = 0; i < 4; i++) {
        //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
        var j = Math.floor(Math.random() * aLength); //获取到随机的索引值
        // var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
        var deg = Math.random() - 0.5; //产生一个随机弧度
        var txt = aCode[j]; //得到随机的一个内容
        // showNum[i] = txt; //区分大小写
        showNum[i] = txt.toLowerCase(); //一律转为小写
        var x = 10 + i * 20; //文字在canvas上的x坐标
        var y = 20 + Math.random() * 8; //文字在canvas上的y坐标
        context.font = "bold 23px 微软雅黑";

        context.translate(x, y);
        context.rotate(deg);

        context.fillStyle = this.randomColor();
        context.fillText(txt, 0, 0);

        context.rotate(-deg);
        context.translate(-x, -y);
      }
      for (var i = 0; i <= 5; i++) {
        //验证码上显示线条
        context.strokeStyle = this.randomColor();
        context.beginPath();
        context.moveTo(
          Math.random() * canvas_width,
          Math.random() * canvas_height
        );
        context.lineTo(
          Math.random() * canvas_width,
          Math.random() * canvas_height
        );
        context.stroke();
      }
      for (var i = 0; i <= 30; i++) {
        //验证码上显示小点
        context.strokeStyle = this.randomColor();
        context.beginPath();
        var x = Math.random() * canvas_width;
        var y = Math.random() * canvas_height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
      }
    },
    //本地服务器后端提交
    // submitForm() {
    //   this.$refs.loginForm.validate((valid) => {
    //     if (valid) {
    //       let { userName, password } = this.loginForm;
    //       //请求登录接口
    //       this.$api
    //         .getLogin({
    //           userName,
    //           password,
    //         })
    //         .then((res) => {
    //           if (res.data.status === 200) {
    //             console.log(jwt(res.data.data));
    //             //登陆成功 1.存储登录信息  2.跳转网页  3.顶部区域显示用户信息  4.持久化
    //             let obj = {
    //               user: jwt(res.data.data),
    //               token: res.data.data,
    //             };
    //             this.setUser(obj);
    //             //存储本地
    //             localStorage.setItem("user", JSON.stringify(obj));
    //             //跳转
    //             this.$router.push("/");
    //           } else {
    //             //账号或者密码错误
    //             this.resetForm("loginForm");
    //             this.reflash();
    //             this.$message.error("账号或者密码错误");
    //           }
    //         });
    //     } else {
    //       return false;
    //     }
    //   });
    // },

    //IDEA后端
    submitForm() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          let obj = {
            userName: this.loginForm.userName,
            password: this.loginForm.password,
          };
          console.log("JSON:", JSON.stringify(obj));
          this.$api
            .getLogin(obj)
            .then((res) => {
              if (res.success == true) {
                console.log("success");
              } else {
                console.log("fail");
              }
            });
        } else {
          return false;
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.page {
  background-image: url("../../assets/images/loginBg.png");
  background-size: 100% 100%;
  height: 100vh;
}
.login-box {
  width: 350px;
  padding: 20px;
  margin: 0 auto;
  border-radius: 10px;
}
.logo {
  width: 96px;
  height: 96px;
  margin: 0 auto;
}
.title {
  text-align: center;
  margin: 22px 0;
  color: #666;
}
</style>