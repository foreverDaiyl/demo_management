<template>
  <div class="fillcontain">
    <head-top></head-top>
    <div class="p-20">
      <el-table :data="tableData5" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="订单 ID" prop="orderId"></el-table-column>
        <el-table-column label="总价格" prop="totalPrice"></el-table-column>
        <el-table-column label="订单状态" prop="payStatus"></el-table-column>
        
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
      tableData5: [
        {
          orderId: "11730",
          totalPrice: "5946",
          payStatus: "支付超时",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          orderId: "11731",
          totalPrice: "5946",
          payStatus: "支付超时",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          orderId: "11732",
          totalPrice: "5946",
          payStatus: "支付超时",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        },
        {
          orderId: "11733",
          totalPrice: "5946",
          payStatus: "支付超时",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
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
  methods:{
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