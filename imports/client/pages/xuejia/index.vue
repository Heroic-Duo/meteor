<template>
  <div id="daojia">
    <div class="daojia alike_class">
      <div @click="oo()">{{DaojiaData.name}}</div>
      <h2 class="daojia_bt alike_title" v-text="DaojiaData[0].name"></h2>
      <p class="daojia_intro alike_intro" v-text="DaojiaData[0].intro"></p>
      <!-- <div class="daojia_logo alike_banner">
            <div class="daojia_img alike_banner_logo"  v-for="value in myData.list" :key="value.menu">
                <router-link :to="'/daoJia/in?name=' + (value.menu?value.menu:'')">
                    <img :src="myData.img + (value.img)" alt="">
                </router-link>
                <p class="daojia_name alike_banner_name" v-text="value.menu"></p>
            </div>
      </div>-->
    </div>
    <ul>
      <li v-for="(t, i) in DaojiaData" :key="i">{{t.name}} -</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: "",
      Daojia: []
    };
  },
  mounted() {},
  methods: {
    oo() {
      console.log(Daojia, "jjjjjjjjjjj");
    }
  },
  meteor: {
    $subscribe: {
      Daojia: []
    },
    DaojiaData() {
      return Daojia.find({ name: "道家养生" }, {});
    }
  }
};
</script>
<style lang="stylus" scoped>
Menu
  text-align center

  .head_nav 
    display inline-block
  
  a
    display block
    line-height 36px
    width 100%
  
  .ivu-menu-item-selected a 
    color #fff
  
</style>