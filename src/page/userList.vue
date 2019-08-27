<template>
  <div class="fillcontain">
    <head-top></head-top>
    <div class="p-20">
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%"
      >
        <el-table-column type="index" width="50" align="center"></el-table-column>
        <el-table-column property="date" label="注册日期" width="120" align="center"></el-table-column>
        <el-table-column property="name" label="用户名" width="120" align="center"></el-table-column>
        <el-table-column property="address" label="注册地址" align="center"></el-table-column>
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
      currentRow: null,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
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
    handleCurrentChange(val) {
      this.currentRow = val;
    },
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
</style>