<template>
  <div class="product">
    <!-- 公告 -->
    <notice></notice>
    <el-card class="box-card" v-for="item in productsData" :key="item.categoryName">
      <div slot="header" class="card-header">
        <span>{{item.categoryName}}</span>
      </div>
      <el-table
        :data="item.products"
        border
        style="width: 100%;"
        :row-style="{height:'23px'}"
        :cell-style="{padding:'5px'}"
        :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      >
        <el-table-column prop="productName" label="商品名称" align="center" width="600%" />
        <el-table-column prop="deliverMode" label="发货模式" align="center">
          <template slot-scope="scope">
            <el-tag type="danger" size="small">{{ changeDeliverMode(scope.row.deliverMode) }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="stock" label="库存" align="center"></el-table-column>
        <el-table-column prop="saleVolume" label="销量" align="center"></el-table-column>
        <el-table-column prop="price" label="单价" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="goProductDetail(scope.row)">购买</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import notice from './../components/notice.vue'
import { getProductsList } from '@/api/product'
import { transferDeliverMode } from '@/utils/dict'
export default {
  name: 'Product',
  components: { notice },
  data() {
    return {
      productsData: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      getProductsList().then(response => {
        let res = response.data
        if (res.code === '0') {
          console.log(res)
          this.productsData = res.data
          console.log(this.productsData)
        } else {
          this.$message(res)
        }
      })
    },
    changeDeliverMode(val) {
      return transferDeliverMode(val)
    },
    goProductDetail(row) {
      console.log('goProductDetail>>>>>>>>' + row.productId)
      this.$router.push({
        path: 'productDetail',
        query: { rowData: row, id: 1 }
      })
    }
  }
}
</script>

<style>
.product {
  width: 85%;
  margin: 0 auto 0 auto;
}
.box-card {
  width: 100%;
  margin-bottom: 15px;
}
.el-card__header {
  height: 42px;
  line-height: 42px;
  padding: 0 0 0 15px;
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;
}
/**设置表头行高 */
.el-table__header tr,
.el-table__header th {
  padding: 0;
  height: 40px;
}
</style>