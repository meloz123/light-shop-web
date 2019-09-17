<template>
    <div class="product">
        <!-- 公告 -->
        <el-card class="box-card notice">
            <div v-for="o in 3" :key="o" class="text item">
            {{'列表内容 ' + o }}
            </div>
        </el-card>

        <el-card class="box-card" v-for="e in 3" :key="e">
            <div slot="header" class="card-header">
                <span>AWS</span>
            </div>
            <el-table
                :data="tableData"
                border
                style="width: 100%;"
                :row-style="{height:'23px'}"
                :cell-style="{padding:'5px'}">
                <el-table-column
                prop="productName"
                label="商品名称"
                width="600%">
                </el-table-column>
                <el-table-column
                prop="deliveryMode"
                label="发货模式">
                </el-table-column>
                <el-table-column
                prop="stock"
                label="库存">
                </el-table-column>
                <el-table-column
                prop="saleVolume"
                label="销量">
                </el-table-column>
                <el-table-column
                prop="price"
                label="单价">
                </el-table-column>
                <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" size="small">购买</el-button>
                </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>

export default {
    name: 'Product',
    data(){
        return{
            tableData: [{
                productName: 'AWS Credit $150 ※※※※特价限量※※※※ Q2_3',
                deliveryMode: '自动发货',
                stock: '10',
                saleVolume: '123',
                price: '100'
            }, {
                productName: 'AWS Credit $150 ※※※※特价限量※※※※ Q2_3',
                deliveryMode: '自动发货',
                stock: '10',
                saleVolume: '123',
                price: '100'
            }, {
                productName: 'AWS Credit $150 ※※※※特价限量※※※※ Q2_3',
                deliveryMode: '自动发货',
                stock: '10',
                saleVolume: '123',
                price: '100'
            }, {
                productName: 'AWS Credit $150 ※※※※特价限量※※※※ Q2_3',
                deliveryMode: '自动发货',
                stock: '10',
                saleVolume: '123',
                price: '100'
            }]
        }
    }
}
</script>

<style>
.product {
    width: 90%;
    margin: 0 auto 0 auto;
}
.text {
    font-size: 14px;
}
.item {
    margin-bottom: 18px;
}
.box-card {
    width: 100%;
    margin-bottom: 15px;
}
.notice {
    border-left: 5px solid #009688;
}
.el-card__header {
    height: 42px;
    line-height: 42px;
    padding: 0 0 0 15px;
    border-bottom: 1px solid #EBEEF5;
    box-sizing: border-box;
}
</style>