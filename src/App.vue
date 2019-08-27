<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: none;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
  .page-component__scroll {
    height: 100%;
  }
  .page-component__scroll .el-scrollbar__wrap {
    overflow-x: auto;
  }
  #app {
    width: 100%;
    height: 100%;
  }
  .el-dropdown-menu {
    margin-top: 9px;
    .popper__arrow {
      left: 28.5767px;
    }
  }
  .p-20 {
    padding: 20px;
  }
  .el-table {
    border: 1px solid #dfe6ec;

    th {
      background-color: #eef1f6;
      color: #1f2d3d;
    }
    tr:last-of-type td {
      border: none;
    }
  }
  .el-pagination {
    color: #6e7074;
    font-weight: 500;
  }
  .el-button--danger {
    background-color: #ff4949;
    border-color: #ff4949;
  }
  .m-20 {
    margin: 20px;
  }
}
</style>
