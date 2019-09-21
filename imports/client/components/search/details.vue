<template>
  <div id="search">
    <div class="search">
      <div class="logo">
          <router-link to="/">
            <img
              src="./../../assets/images/logo.png"
              class="sive"
              >
          </router-link>
      </div>
      <div class="sousou">
        <Col span="16">
        <Select
            v-model="model"
            filterable
            remote
            ref="search"
            @on-change="tiao"
            :remote-method="remoteMethod"
            :loading="searchInformationShow">
            <Option v-for="(item, index ) in setSearchData" 
            :value="item.value" 
            :label="item.label"
            :key="item.label">
            </Option>
        </Select>
      </Col>
      <Col span="3">
        <Button
          type="primary"
          icon="ios-search"
        >搜索</Button>
      </Col>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "search",
  data() {
    return {
      model: "",
    };
  },
  computed: {
    ...mapGetters ([
      'setSearchData',
      'searchInformation',
      'searchInformationShow',
      'searchTransfer',
    ])
  },
  mounted() {
      
  },
  methods: {
    ...mapActions ([
      'remoteMethod'
    ]),
    tiao(){
      console.log(this);
      
      // this.$router.push({path: '/search', query: {name:this.setSearchData[0].label}})
    }
  }
};
</script>

<style lang="less" scoped>
#search {
  width: 100%;
  z-index: 5;
  .sousou{
    width: 375px;
    line-height: 100px;
    margin-left: 70px;
  }
  .code-row-bg {
    height: 100px;
    .sive {
      width: 100%;
    }
  }
}
</style>
