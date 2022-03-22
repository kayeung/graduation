<template>
<!-- 处理了登陆成功，账号密码错误情况，但数据库未建用户表 -->
  <div>
    <div class="login-box">
      <h3 class="title">登陆界面</h3>
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="60px"
        class="demo-ruleForm"
      >
        <div>{{ info }}</div>
        <el-form-item label="账号" prop="username">
          <el-input
            type="text"
            v-model="loginForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import jwt from "jwt-decode";
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        info: "",
        username: "",
        password: "",
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("校验通过！", this.loginForm);
          let { username, password } = this.loginForm;
          //请求登录接口
          this.$api
            .getLogin({
              username,
              password,
            })
            .then((res) => {
              console.log("--------", res.data);
              if (res.data.status === 200) {
                console.log(jwt(res.data.data));
              } else {
                //账号或者密码错误
                this.info = "账号或者密码错误";
              }
            });
        } else {
          console.log("error submit!!");
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
.login-box {
  width: 400px;
  height: 300px;
  padding: 20px;
  margin: 150px auto;
  border-radius: 10px;
  border: 1px solid #eee;
  background: #fff;
}
.title {
  text-align: center;
  margin-bottom: 30px;
  color: #666;
}
</style>