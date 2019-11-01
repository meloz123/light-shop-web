<template>
  <div class="wapper">
    <notice></notice>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品信息</span>
      </div>
      <div>
        <el-row>
          <el-col :span="8">
            <div class="ls-field-box">
              <p>
                <img src="./../assets/img/noimg.jpg" alt height="300px" width="100%" />
              </p>
            </div>
          </el-col>
          <span :span="16">
            <p>
              <el-tag size="mini" color="#393D49" class="good-tag">手工发货</el-tag>
              <span class="trade-goodname">{{productData.productName}}</span>
            </p>
            <hr />
            <p class="trade-goodinfo">
              <span style="color:#6c6c6c">价格：</span>
              <span class="trade-price">{{'¥ '+productData.price}}</span>
            </p>
            <div class="ls-buy-info">
              <el-input type="number" v-model="count" min="1">
                <template slot="prepend">购买数量</template>
              </el-input>
            </div>
            <div class="ls-buy-info">
              <el-input placeholder="请输入邮箱" v-model="email">
                <template slot="prepend">邮箱账户</template>
              </el-input>
            </div>
            <div class="ls-buy-info">
              <el-input placeholder="将作为自助查询订单重要依据" v-model="password">
                <template slot="prepend">查询密码</template>
              </el-input>
            </div>
            <div class="ls-buy">
              <el-button type="info" @click="buy()">立即购买</el-button>
            </div>
          </span>
        </el-row>
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品描述</span>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </el-card>
  </div>
</template>

<script>
import notice from './../components/notice.vue'
export default {
  name: 'ProductDetail',
  components: { notice },
  data() {
    
    return {
      productData: {
        productId: '',
        productName: '',
        price: '',
        img: '',
        stock: '',
        deliverMode: '',
        description: ''
      },
      count: 1,
      email: '',
      password: '',
      rules: {
        count: [
          { required: true, message: '数量不能为空', trigger: 'change' },
          {
            type: 'number',
            message: '只能输入数字',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  created() {
    let rowData = this.$route.query.rowData
    console.log('ProductDetail created>>>>>>>>>productId=' + rowData.productId)
    this.productData.productId = rowData.productId
    this.productData.productName = rowData.productName
    this.productData.img = rowData.img
    this.productData.stock = rowData.stock
    this.productData.deliverMode = rowData.deliverMode
    this.productData.description = rowData.description
    this.productData.price = rowData.price
  },
  methods: {
    buy() {

    },
    checkCount(){
      if (!value) {
        return callback(new Error('购买数量不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 1) {
            callback(new Error('购买数量必须大于1'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
  }
}
</script>

<style>
.wapper {
  width: 85%;
  margin: 0 auto 0 auto;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
/**商品信息卡片1:2左右布局 */
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
/**商品图片 */
.ls-field-box {
  /* padding: 10px 15px; */
}

.good-tag {
  color: #fff;
  border-radius: 2px;
}
.trade-goodname {
  font-size: 20px;
  color: #3c3c3c;
}

.trade-goodinfo {
  background-color: #fff2e8;
  padding: 10px;
  margin-bottom: 5px;
  padding-left: 36%;
}
.trade-price {
  color: #f40;
  font-size: 26px;
  font-weight: 700;
}

.ls-buy-info {
  margin-top: 15px;
}
.el-input {
  width: 35%;
}
.el-input-group__prepend {
  border-radius: 0px !important;
}
.el-input__inner {
  border-radius: 0px !important;
}
.ls-buy {
  margin-top: 18px;
  margin-left: 47%;
}
.el-button {
  border-radius: 0px;
}
</style>