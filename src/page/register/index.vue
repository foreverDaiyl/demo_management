<template>
  <div class="container">
    <h2 class="title">
      <span>Hello ele 后台管理系统</span>
    </h2>
    <div class="login-wrap register-wrap">
      <h3>用户注册</h3>
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
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item class="login-submit">
            <el-button type="primary" @click="submitForm('ruleForm2')">注 册</el-button>
          </el-form-item>
        </el-form>
        <div class="toggle-link">
            <router-link :to="{path:'login'}" tag="span">已有账号，立即去登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { register } from "@/api/session.js";
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
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: "",
        name: "",
        checkPass:''
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        name: [{ validator: checkName, trigger: "blur" }]
      }
    };
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let res = await register({
            username: this.ruleForm2.name,
            password: this.ruleForm2.pass
          });
          // console.log(res);
          
          if (res.code === 0) {
            this.$message({
              type:'success',
              message:'注册成功'
            })
            console.log(res)
            sessionStorage.setItem('userName',res.user.username)
            sessionStorage.setItem('userToken',res.user.userToken)
            
            // this.$store.dispatch('setUser',res.user.username)
            // this.$store.dispatch('setToken',res.user.userToken)
            this.$router.push("/manage");
          } else {
            this.$message({
              type: "error",
              message: res.msg
            });
            this.ruleForm2.name =this.ruleForm2.pass=this.ruleForm2.checkPass="";
          }

          //
        } else {
          console.log("error submit!!");
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

  .login-wrap.register-wrap {
    width: 320px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -185px;
    margin-top: -150px;
    background-color: #fff;
    border-radius: 5px;
    padding: 25px;

    .el-form-item__label {
      width: 80px !important;
    }
    .el-form-item__content {
      margin-left: 80px !important;
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