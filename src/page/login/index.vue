<template>
    <div class="container">
        <div class="login-wrap">
            <h3>后台管理系统</h3>
            <div>
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="name">
                        <el-input v-model="ruleForm2.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    
                    <el-form-item class="login-submit" >
                        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Login',
        data() {
            var checkName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'));
                }
                callback();
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } 
                callback();
            };
            return {
                ruleForm2: {
                    pass: '',
                    name: ''
                },
                rules2: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    name: [
                        { validator: checkName, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    // alert('submit!');
                    this.$router.push('/manage')
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            }
        }

    }
</script>

<style lang="scss" >
.container{
    width:100%;
    height:100%;
    background-color: #324057;

    h3{
        text-align:center;
        margin-bottom:10px
    }

    .login-wrap{
        width:320px;
        height:220px;
        position:absolute;
        top:50%;
        left:50%;
        margin-left:-160px;
        margin-top:-110px;
        background-color:#fff;
        border-radius:5px;
        padding:25px;

        .el-form-item__label{
            width:60px!important;
        }
        .el-form-item__content{
            margin-left: 60px!important;
        }
        .login-submit .el-form-item__content{
            text-align:center;
            margin-left:0!important;
        }
    }
}
</style>