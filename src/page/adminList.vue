<template>
  <div class="fillcontain">
    <head-top></head-top>
    <div class="p-20">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="姓名" width="180" align="center"></el-table-column>
        <el-table-column prop="date" label="注册日期" width="180" align="center"></el-table-column>
        <el-table-column prop="address" label="地址" align="center"></el-table-column>
        <el-table-column prop="access" label="权限" align="center"></el-table-column>
      </el-table>
      <div class="block" style="margin-top:20px">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentPage"
          :current-page="currentPage4"
          :page-sizes="[20,50, 100]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import headTop from "@/components/headTop/headTop.vue";
export default {
  data() {
    return {
      tableData: [
        {
          name: "rongrong",
          date: "2019-08-26 17:18",
          address: "成都",
          access: "管理员"
        },
        {
          name: "rongrong",
          date: "2019-08-26 17:18",
          address: "成都",
          access: "管理员"
        },
        {
          name: "rongrong",
          date: "2019-08-26 17:18",
          address: "成都",
          access: "管理员"
        },
        {
          name: "rongrong",
          date: "2019-08-26 17:18",
          address: "成都",
          access: "管理员"
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    };
  },
  components: {
    headTop
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentPage(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style lang="scss" >
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-button--small {
  padding: 7px 9px;
  font-size: 12px;
  border-radius: 4px;
}
</style>