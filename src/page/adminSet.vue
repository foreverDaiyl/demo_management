<template>
  <div>
    <head-top></head-top>
    <header class="admin_title">管理员信息</header>
    <div class="admin_set">
      <ul>
        <li>
          <span>姓名：</span>
          <span>test</span>
        </li>
        <li>
          <span>注册时间：</span>
          <span>2019-08-26</span>
        </li>
        <li>
          <span>管理员权限：</span>
          <span>数据管理</span>
        </li>
        <li>
          <span>管理员 ID：</span>
          <span>008</span>
        </li>
        <li>
          <span>更换头像：</span>
          <el-upload
            class="avatar-uploader"
            action
            show-file-list="false"
            on-success="uploadImg"
            before-upload="beforeImgUpload"
          >
            <img src="@/assets/avatar.jpeg" class="avatar" />
            <i class="el-icon-plus avatar-uploader-icon" v-show="false"></i>
          </el-upload>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import headTop from "@/components/headTop/headTop.vue";
export default {
  components: {
    headTop
  }
};
</script>

<style lang="scss" >
.explain_text{
		margin-top: 20px;
		text-align: center;
		font-size: 20px;
		color: #333;
	}
    .admin_set{
        width: 60%;
        background-color: #F9FAFC;
        min-height: 400px;
        margin: 20px auto 0;
        border-radius: 10px;
        ul > li{
            padding: 20px;
            span{
                color: #666;
            }
        }
    }
    .admin_title{
        margin-top: 20px;
        text-align: center;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        margin-top: 10px;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
    .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }
</style>