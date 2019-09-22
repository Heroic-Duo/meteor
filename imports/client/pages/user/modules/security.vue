<template>
  <div id="security">
    <div class="security">
        安全中心
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "security",
  data() {
     return{
       selected: 0,
       isSelect:true,
       
     }
  },
  props:{
      childCom: {} ,//String这里指定了字符串类型，如果类型不一致会警告的哦
  },
  computed : {
    
  },
  mounted() {},
  methods: {
    
  }
};
</script>

<style lang="less" scoped>
#user {
  
  .userTab{
     width: 500px;
     margin: 0 auto
  }
  .userTab a{
    display: inline-block;
    width: 150px;
    line-height: 50px;;
  }
  .navright180{
   
  }
  .router-link-active{
     color: #000
  }
}
</style>
