<template>
    <div>
        <el-card class="box-card notice">
            <div class="text item">
            {{'列表内容 '}}
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'notice',
  data(){
      return{

      }
  }
}
</script>

<style>
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
    border-left: 5px solid #009688!important;
}
</style>