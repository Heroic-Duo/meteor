<template>
  <div class="wrap" v-if="usShow">{{text}}</div>
</template>
<script>
  export default {
    name:'',
    data () {
      return {
          usShow:true,
        }
    },
  }
</script>
<style scoped>
  .wrap{
    font-size: 20px;
    position: fixed;
    left: 50%;
    top:50%;
    width: 300px;
    height: 100px;
    text-align: center;
    line-height: 90px;
    background: rgba(0, 0, 0, 0.788);
    padding: 10px;
    border-radius: 5px;
    transform: translate(-50%,-50%);
    color:#fff;
  }
</style>
