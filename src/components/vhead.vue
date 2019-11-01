<template>
  <el-header>
    <router-link :to="{path: '/'}" class="header-logo">
        <img src="./../assets/logo.png">
    </router-link>
    <el-menu
      class="el-menu-header"
      mode="horizontal"
      background-color="#404553"
      text-color="rgba(255,255,255,.7)"
      active-text-color="#FFFFFF">
      <el-menu-item index="1">购买商品</el-menu-item>
      <el-menu-item index="2">查询订单</el-menu-item>
      <el-menu-item index="3">每日资讯</el-menu-item>
      <el-menu-item index="4">关于我们</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: 'vhead',
  data(){
      return{

      }
  }
}
</script>

<style>
.el-header {
  width: 100%;
  background: #404553;
  line-height: 90px;
  width: 100%;
}
.header-logo {
  float: left;
  padding: 5px 0 0 0;
}
.header-logo img {
  width: 50px;
}
.el-menu-header{
  float: left;
  margin: 0px 0px 0px 40px!important;
}
.el-menu-item.is-active {
   border-bottom-color: #5FB878!important;
} 
</style>