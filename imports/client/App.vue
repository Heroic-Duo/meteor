<template>
  <div id="app">
     <div class="NAV">
        
          <Hsearch class="Hsearch"></Hsearch>
       
          <Navigation class="navigation"></Navigation>

          <!-- <portrait id="portrait"></portrait> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/header/Hmenu'
import Hsearch from './components/search/Hsearch'
import '/lib/collections'
export default {
  data() {
    return {
     
    };
  },
  components: {
    Hsearch,
    Navigation,
  },
  methods: {
   
  }
};
</script>

<style lang="less" scoped>

#app {
  font-size: 20px;
  @img:"http://img.zwyst.com/images/";
  min-height: 600px;
  padding-top:100px;

  .NAV{
        height: 100px;
        background: url("@{img}head_back.jpg") center center ;
        background-size: 100%;
        box-shadow: 0px -2px 8px 2px #666;
          -moz-box-shadow: 0px -2px 8px 2px #666;
          -webkit-box-shadow: 0px -2px 8px 2px #666;
          -o-box-shadow: 0px -2px 8px 2px #666;
            position: fixed;
        top: 0;
        z-index: 20;
        width: 100%;
        max-width: 100%;


  }
  .Hsearch{
     width: 400px;
     position: absolute;
     left: 2%;
    height:100px;
  }
  .navigation{
    width: 100%;
     position: absolute;
     left: 30%;
  }
  #footer{
    height: 100px;
    
  }
  #portrait{
      position: absolute;
      left: 10px;
      top: 100px;
  }
  
}
</style>

