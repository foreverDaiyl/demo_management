<template>
  <div class="container">
    <h2 class="title">
      <span>Hello ele 后台管理系统</span>
    </h2>
    <div class="login-wrap">
      <h3>用户登录</h3>
      <div>
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm2.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
          </el-form-item>

          <el-form-item class="login-submit">
            <el-button type="primary" @click="submitForm('ruleForm2')">登 录</el-button>
          </el-form-item>
        </el-form>
        <div class="toggle-link">
            <router-link :to="{path:'register'}" tag="span">还没账号？立即去注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/session.js";
import {mapMutations} from 'vuex'
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }
      callback();
    };
    return {
      ruleForm2: {
        pass: "",
        name: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        name: [{ validator: checkName, trigger: "blur" }]
      }
    };
  },
  beforeRouteEnter:(to,from,next) => {
      //组件内守卫
      //已登录状态回到登录界面，即 登出
    next(vm => {
       vm.$store.dispatch("setUser",null);
    });
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let res = await login({
            username: this.ruleForm2.name,
            password: this.ruleForm2.pass
          });
        //   console.log(res);
          if (res.code === 0) {
            this.$message({
                type: "success",
                message: res.msg
            });
            sessionStorage.setItem('userName',res.user.username)
            sessionStorage.setItem('userToken',res.user.userToken)
            
            this.$store.dispatch('setUser',res.user.username)
            this.$store.dispatch('setToken',res.user.userToken)
            
            this.$router.push({path:'/manage'});
          } else {
            this.$message({
              type: "error",
              message: res.msg
            });
          }
        } else {
          this.$notify.error({
            title: "错误",
            message: "请输入正确的用户名密码"
          });
          return false;
        }
      });
    }
  }
  
};
</script>

<style lang="scss" >
.container {
  width: 100%;
  height: 100%;
  background-color: #324057;
  h2.title {
    color: #fff;
    padding-top: 110px;
    margin: 0 auto;
    text-align: center;
  }
  h3 {
    text-align: center;
    margin-bottom: 10px;
  }

  .login-wrap {
    width: 320px;
    height: 240px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -185px;
    margin-top: -120px;
    background-color: #fff;
    border-radius: 5px;
    padding: 25px;

    .el-form-item__label {
      width: 60px !important;
    }
    .el-form-item__content {
      margin-left: 60px !important;
    }
    .login-submit .el-form-item__content {
      text-align: center;
      margin-left: 0 !important;
    }
  }
  .toggle-link{
    font-size:12px;
    text-align:center;
    color:#324057;
    text-decoration: underline;
    cursor:pointer;
  }
}
</style>