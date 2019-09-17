<template>
  <el-container class="container" direction="vertical">
        <vhead></vhead>
        <el-main>
          <router-view></router-view>
        </el-main>
        <vfooter></vfooter>
    </el-container>    
</template>

<script>
import vhead from './components/vhead.vue'
import vfooter from './components/vfooter.vue'

export default {
    components: {vhead,vfooter},
    data(){
        return{

        }
    }
}
</script>

<style>
body {
  margin: 0!important;
  background: #f2f2f2;
  font: 14px Helvetica Neue,Helvetica,PingFang SC,\5FAE\8F6F\96C5\9ED1,Tahoma,Arial,sans-serif;
}
</style>


