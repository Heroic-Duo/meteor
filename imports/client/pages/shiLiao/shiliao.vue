<template>
    <div id="shiLiao">
        <div class="shiLiao alike_class">
            <div class="shiLiao_div">
                <h2 class="shiLiao_title">蔬菜</h2>
                <div class="shiLiao_cont" >
                    <div class="shiLiao_cont_div" v-for="(value,index) in ShiCursor[0].Vegetables" :key="index">
                        <router-link :to="'/shiLiao/data?name=' + (value.name?value.name:'')">
                            <img v-lazy="value.img?imgCai + (value.img):''" :alt="value.name +'，养生，文化知识'">
                        </router-link>
                        <p class="shiLiao_cont_title" v-text="value.name"></p>
                    </div>
                </div>
            </div>
            <div class="shiLiao_div">
                <h2 class="shiLiao_title">水果</h2>
                <div class="shiLiao_cont" >
                    <div class="shiLiao_cont_div" v-for="(value,index) in ShiCursor[0].Fruits" :key="index">
                        <router-link :to="'/shiLiao/data?name=' + (value.name?value.name:'')">
                            <img :src="value.img?imgGuo + (value.img):''" :alt="value.name +'，养生，文化知识'">
                        </router-link>
                        <p class="shiLiao_cont_title" v-text="value.name"></p>
                    </div>
                </div>
            </div>
          <!--   <div class="shiLiao_div">
                <h2 class="shiLiao_title">杂粮</h2>
                <div class="shiLiao_cont" >
                    <div class="shiLiao_cont_div" v-for="(value,index) in shiliao.grain" :key="index">
                        <router-link :to="'/shiLiao/data?name=' + (value.name?value.name:'')">
                            <img :src="value.img?imgZa + (value.img):''" :alt="value.name +'，养生，文化知识'">
                        </router-link>
                        <p class="shiLiao_cont_title" v-text="value.name"></p>
                        
                    </div>
                </div>
            </div>
            <div class="shiLiao_div">
                <h2 class="shiLiao_title">辅料</h2>
                <div class="shiLiao_cont" >
                    <div class="shiLiao_cont_div" v-for="(value,index) in shiliao.Material" :key="index">
                        <router-link :to="'/shiLiao/data?name=' + (value.name?value.name:'')">
                            <img :src="value.img?imgLiao + (value.img):''" :alt="value.name +'，养生，文化知识'">
                        </router-link>
                        <p class="shiLiao_cont_title" v-text="value.name"></p>
                        
                    </div>
                </div>
            </div>
            <div class="shiLiao_div">
                <h2 class="shiLiao_title">其他</h2>
                <div class="shiLiao_cont" >
                    <div class="shiLiao_cont_div" v-for="(value,index) in shiliao.Other" :key="index">
                        <router-link :to="'/shiLiao/data?name=' + (value.name?value.name:'')">
                            <img :src="value.img?imgTa + (value.img):''" :alt="value.name +'，养生，文化知识'">
                        </router-link>
                        <p class="shiLiao_cont_title" v-text="value.name"></p>
                    </div>
                </div>
            </div> -->
        </div>
      
    </div>
</template>
<script>
import '/lib/collections'
export default {
name:"shiLiao",
	data () {
			return{
					imgCai:'http://img.zwyst.com/images/shiliao/shucai/',
					imgGuo:'http://img.zwyst.com/images/shiliao/shuiguo/',
					imgNai:'http://img.zwyst.com/images/shiliao/dannai/',
					imgZa:'http://img.zwyst.com/images/shiliao/zaliang/',
					imgLiao:'http://img.zwyst.com/images/shiliao/fuliao/',
					imgTa:'http://img.zwyst.com/images/shiliao/qita/',
			}
	},
 	mounted () {
   
  },
  methods: { 
   
  },
  meteor: {
    $subscribe: {
      'Shi': []
    },
    ShiCursor () {
    //   return Time.find({}, {
    //     sort: {time: -1}
    //   })
      return Shi.find({}, {
          
         
      })
    },
  }
}
</script>

<style>
    .shiLiao{

    }
    .shiLiao_div{
        padding: 10px;
        text-align: center
    }
    .shiLiao_title{
        border-radius: 20px;
        padding: 2px 0;
        background: rgba(16, 105, 52, 0.5803921568627451);
        
        width: 95%;
        margin: 0 auto;
    }
    .shiLiao_cont{
        width: 95%;
        margin: 0 auto;
    }
    .shiLiao_cont_div{
        width: 15.5%;
        display: inline-block;
        margin: 15px 5px;
        border-bottom: .01rem solid red;
        cursor: pointer;
    }
    img{
        width: 100%
    }
    .shiLiao_cont_logo{
        
    }
    .shiLiao_cont_title{
				font-size:16px;
        /* background: rgba(16, 105, 52, 0.5803921568627451); rgba(69, 112, 239, 0.82)*/
        background:rgba(239, 171, 69, 0.82)
    }
</style>
