<template>
  <div class="manage_page fillcontain" style="height:100%">
    <el-row style="height:100%">
      <el-col :span="4" style="min-height:100%;background-color:#324057;">
        <div class="grid-content bg-purple">
            <el-col :span="12" style="width:100%">
                
                <el-menu
                default-active="defaultActive"
                class="el-menu-vertical-demo menu-bar"
                @open="handleOpen"
                @close="handleClose"
                background-color='#324057'
                text-color="#fff"
                active-text-color="#ffd04b"
                router
                >
                    <el-menu-item index="manage">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="fa fa-bar-chart-o"></i>
                            <span>数据管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">用户列表</el-menu-item>
                            <el-menu-item index="2-2">商家列表</el-menu-item>
                            <el-menu-item index="2-3">食品列表</el-menu-item>
                            <el-menu-item index="2-4">订单列表</el-menu-item>
                            <el-menu-item index="2-5">管理员列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-circle-plus-outline"></i>
                            <span>添加数据</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="addShop">添加商铺</el-menu-item>
                            <el-menu-item index="3-2">添加商品</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="fa fa-area-chart"></i>
                            <span>图表</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1">用户分布</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="fa fa-edit"></i>
                            <span>编辑</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="5-1">文本编辑</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="fa fa-cog"></i>
                            <span>设置</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="6-1">管理员设置</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title">
                            <i class="el-icon-info"></i>
                            <span>说明</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="7-1">说明</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </div>
      </el-col>
      <el-col :span="20" style="height:100%;overflow:auto">
        <div class="grid-content bg-purple-light">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    computed:{
        defaultActive(){
            return this.$route.path.replace('/','')
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style lang="scss">
.manage_page.fillcontain{
    .menu-bar{
        .el-menu-item{
            min-width:auto!important;

            
        }
        .el-submenu{
            .fa{
                vertical-align: middle;
                margin-right: 5px;
                width: 24px;
                text-align: center;
                font-size: 14px;
                &.fa-cog{
                    font-size:18px;
                }
                &.fa-edit{
                    font-size:16px;
                }
            }
        }
    }
}
</style>