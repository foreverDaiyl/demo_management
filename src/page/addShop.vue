<template>
  <div>
    <head-top></head-top>
    <div class="p-20">
      <el-row>
        <el-col :span="14" :offset="4">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="店铺名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="详细地址" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label="联系电话"
              prop="phone"
              :rules="[
      { required: true, message: '联系电话不能为空'},
      { type: 'number', message: '联系电话必须为数字值'}
    ]"
            >
              <el-input type="phone" v-model.number="ruleForm.phone" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="店铺简介">
              <el-input v-model="ruleForm.info"></el-input>
            </el-form-item>
            <el-form-item label="店铺标语">
              <el-input v-model="ruleForm.biaoyu"></el-input>
            </el-form-item>
            <el-form-item label="店铺分类">
              <el-cascader :options="options" v-model="selectedOptions3"></el-cascader>
            </el-form-item>
            <el-form-item label="店铺特点" style="white-space: nowrap;">
              <span>品牌保证</span>
              <el-switch v-model="ruleForm.is_premium" on-text></el-switch>
              <span>蜂鸟专送</span>
              <el-switch v-model="ruleForm.delivery_mode"></el-switch>
              <span>新开店铺</span>
              <el-switch v-model="ruleForm.new"></el-switch>
            </el-form-item>
            <el-form-item style="white-space: nowrap;">
              <span>外卖保</span>
              <el-switch v-model="ruleForm.bao"></el-switch>
              <span>准时达</span>
              <el-switch v-model="ruleForm.zhun"></el-switch>
              <span>开发票</span>
              <el-switch v-model="ruleForm.piao"></el-switch>
            </el-form-item>
            <el-form-item label="配送费" prop="float_delivery_fee">
              <el-input-number v-model="ruleForm.num3" :step="2"></el-input-number>
            </el-form-item>
            <el-form-item label="起送价" prop="float_minimum_order_amount">
              <el-input-number v-model="ruleForm.num4" :step="2"></el-input-number>
            </el-form-item>
            <el-form-item label="营业时间" style="white-space: nowrap;">
              <el-time-select
                placeholder="起始时间"
                v-model="ruleForm.startTime"
                :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '23:30'
              }"
              ></el-time-select>
              <el-time-select
                placeholder="结束时间"
                v-model="ruleForm.endTime"
                :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '23:30',
                minTime: ruleForm.startTime
                }"
              ></el-time-select>
            </el-form-item>
            <el-form-item label="上传店铺头像">
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
            <el-form-item label="上传营业执照">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img
                  v-if="ruleForm.business_license_image"
                  :src="ruleForm.business_license_image"
                  class="avatar"
                />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="上传餐饮服务许可证">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img
                  v-if="ruleForm.catering_service_license_image"
                  :src="ruleForm.catering_service_license_image"
                  class="avatar"
                />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="优惠活动">
              <el-select v-model="youhuivalue" placeholder="请选择">
                <el-option
                  v-for="item in youhui"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-table :data="tableData" style="width: 100%;min-width: 600px;margin-bottom: 20px;">
              <el-table-column label="活动标题" width="100" align="center">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.title }}</span>
                </template>
              </el-table-column>
              <el-table-column label="活动名称" width="120" align="center">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="活动详情" width="180" align="center">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.desc }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                  <!-- <el-button size="mini" >编辑</el-button> -->
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            </el-form-item>
          </el-form>
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
        num3: 5,
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
      ]
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
</style>