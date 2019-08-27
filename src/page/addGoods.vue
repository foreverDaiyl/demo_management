<template>
  <div>
    <head-top></head-top>
    <div class="p-20">
      <el-row>
        <el-col :span="14" :offset="4">
          <header class="form_header">选择食品种类</header>
          <div class="table-wrap m-20">
            <el-form :model="categoryForm" ref="categoryForm" class="form" label-width="110px">
              <el-row>
                <el-form-item label="食品种类">
                  <el-select v-model="categoryValue" placeholder="请选择" style="width:100%;">
                    <el-option
                      v-for="item in categoryOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-row>
              <el-row class="add_category_row">
                <div class="add_category">
                  <el-form-item label="食品种类" prop="name">
                    <el-input v-model="categoryForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="种类描述" prop="description">
                    <el-input v-model="categoryForm.description"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitcategoryForm('categoryForm')">提交</el-button>
                  </el-form-item>
                </div>
              </el-row>
              <div class="add_category_button" @click="addCategoryFun">
                <i class="el-icon-caret-top edit_icon" v-if="showAddCategory"></i>
                <i class="el-icon-caret-bottom edit_icon" v-else slot="icon"></i>
                <span>添加食品种类</span>
              </div>
            </el-form>
          </div>
          <header class="form_header">添加食品</header>
          <div class="table-wrap m-20">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="食品名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="食品活动">
                <el-input v-model="ruleForm.activity"></el-input>
              </el-form-item>
              <el-form-item label="食品详情">
                <el-input v-model="ruleForm.description"></el-input>
              </el-form-item>
              <el-form-item label="上传食品图片">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="食品特点">
                <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="食品规格">
                <el-radio v-model="radio" label="1">备选项</el-radio>
                <el-radio v-model="radio" label="2">备选项</el-radio>
              </el-form-item>
              <el-form-item label="包装费" prop="float_delivery_fee">
                <el-input-number v-model="ruleForm.num3" :step="2"></el-input-number>
              </el-form-item>
              <el-form-item label="价格" prop="float_minimum_order_amount">
                <el-input-number v-model="ruleForm.num4" :step="2"></el-input-number>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确认添加食品</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import headTop from "@/components/headTop/headTop.vue";

export default {
  components: {
    headTop
  },
  data() {
    return {
      ruleForm: {
        name: "",
        activity: "",
        description: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        phone: "",
        info: "",
        biaoyu: "",
        is_premium: true,
        delivery_mode: true,
        new: true,
        bao: true,
        zhun: true,
        piao: true,
        num3: 0,
        num4: 20,
        startTime: "",
        endTime: "",
        imageUrl: "",
        business_license_image: "",
        catering_service_license_image: ""
        
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      options: [
        {
          value: "liaoli",
          label: "异国料理",
          children: [
            {
              value: "rihanliaoli",
              label: "日韩料理"
            },
            {
              value: "xican",
              label: "西餐"
            },
            {
              value: "pisayimian",
              label: "披萨意面"
            },
            {
              value: "dongnanyacai",
              label: "东南亚菜"
            }
          ]
        }
      ],
      selectedOptions3: ["快餐便当", "简餐"],
      youhui: [
        {
          value: "满减优惠",
          label: "满减优惠"
        },
        {
          value: "优惠大酬宾",
          label: "优惠大酬宾"
        },
        {
          value: "新用户立减",
          label: "新用户立减"
        },
        {
          value: "进店领券",
          label: "进店领券"
        }
      ],
      youhuivalue: "满减优惠",
      tableData: [
        {
          title: "减",
          name: "满减优惠",
          desc: "满30减5，满60减8"
        }
      ],
      categoryForm: {
        name: "",
        description: ""
      },
      categoryOptions: [
        {
          value: "月饼",
          label: "月饼"
        }
      ],
      categoryValue: "",
      radio: "1"
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleAvatarSuccess(res, file) {
      this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>


<style lang="scss" >
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.el-table th {
  background-color: #eef1f6;
}
.el-table th,
.el-table tr {
  border-bottom: 1px solid #dfe6ec;
}
.form_header {
  text-align: center;
  margin-bottom: 10px;
}
.table-wrap {
  border: 1px solid #eaeefb;
  padding: 10px 30px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}
.add_category {
  background: #f9fafc;
  padding: 10px 30px 0px 10px;
  border: 1px solid #eaeefb;
  border-top: none;
}
.add_category_button {
  text-align: center;
  line-height: 40px;
  transition: all 400ms;
}
</style>