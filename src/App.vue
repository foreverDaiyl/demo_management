<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name:'App'
}
</script>
<style lang="scss">
*{
  margin:0;
  padding:0;
}
html, body {
    height: 100%;
    width: 100%;
    #app{
      width:100%;
      height:100%;
    }
    .el-dropdown-menu{
      margin-top: 9px;
      .popper__arrow{
        left: 28.5767px;
      }
    }
    
}

</style>
