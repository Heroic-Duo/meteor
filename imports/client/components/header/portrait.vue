<template>
    <div id="portrait" >
        <div class="portrait" v-show="infoUser"  @mouseover="infoShow()" @mouseout="infoOut()">
            <div class="portrait_logo" >
                <img :src="material.icon?material.icon:''" alt="">
            </div>
            <div class="portrait_info" v-show="info">
                <div class="portrait_div">
                    <router-link   to="/user" >
                        <i class="iconfont icon-wo"></i>
                        <span>昵称：</span>
                        <strong class="" ref="Name" v-text="material.Name"></strong>
                    </router-link>
                </div>
                <div class="portrait_div">
                    <router-link   to="/user" >
                        <i class="iconfont icon-atm"></i>
                        <span>星座：</span>
                        <strong class="" v-text="material.birthday"></strong>
                    </router-link>
                </div>
                <div class="portrait_div portrait_div_del" @click="userdel()">
                    <i class="iconfont  icon-smile"></i>
                    <span>点此注销：</span>
                    <strong  class="" >注销</strong>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "portrait",
  props: {
      childCom:{}
  },
  data() {
    return {
        
        info:false,
    };
  },
  computed : {
      ...mapGetters(["userdata","infoUser","material"]),
  },
  components: {},
  directives: {},
  beforeCreate() {
   
    
  },
  created() {
     
  },
  beforeMounted() {
      
  },
  mounted() { 
    
    this.getUsermaterial()  
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  watch: {
    infoUser(newValue, oldValue) {
　　　　console.log(newValue)
　　}
  },
  methods:{
    ...mapActions(["getUser","getUsermaterial"]),
    infoShow() {
        this.info = !this.info
    },
    
    infoOut() {
        this.info = !this.info
    },
    userdel (){
        this.$Cookie.remove('username');
        this.$Cookie.remove('usda');
        window.location.reload()
    }
    
  }
};
</script>

<style lang="less" scoped>
#portrait {
    a{
        color: #495060;
    };
    .portrait{
        
    };
    .portrait_txt{
        width: 80px;
        height: 80px;
        line-height: 80px;
        border: 1px solid #000
    }
    .portrait_logo{
        width: 60px;
        height: 60px;
        
    };
    .portrait_logo img{
        border-radius: 50px;
    };
    .portrait_info{
        width: 200px;
       left: 0;
        position: fixed;
        right: 0;
        border-radius: 20px;
        background:rgb(244, 248, 246)
    };
    .portrait_div{
        padding: 10px;
        font-size: 16px;
        
    }
    .portrait_div_del{
        cursor: pointer;
    }
    .iconfont{
        display: inline-block;
        font-size: 20px;
    }
    .portrait_div span{
        display: inline-block;
        width: 100px;
    }
    .portrait_div p{
        display: inline-block;
        
    }
}
</style>