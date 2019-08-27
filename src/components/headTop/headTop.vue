<template>
  <div class="headTop">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item,index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown trigger="click" style="margin-right:20px" @command="handleCommand">
      <span class="el-dropdown-link">
        <i class="fa fa-user-circle-o" style="font-size:40px"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="home">首页</el-dropdown-item>
        <el-dropdown-item command="signout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    handleCommand(command) {
      // console.log(command)
      if (command == "home") {
        this.$router.push("/manage");
      } else if (command == "signout") {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="scss" >
.headTop {
  background-color: #eff2f7;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.el-breadcrumb__item__inner,
.el-breadcrumb__item__inner a {
  transition: color 0.15s linear;
  color: #48576a;
}
.el-breadcrumb__item:last-child .el-breadcrumb__item__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__item__inner a,
.el-breadcrumb__item:last-child .el-breadcrumb__item__inner a:hover,
.el-breadcrumb__item:last-child .el-breadcrumb__item__inner:hover {
  color: #97a8be;
  cursor: text;
}
</style>