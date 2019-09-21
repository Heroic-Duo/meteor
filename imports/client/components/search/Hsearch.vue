<template>
  <div id="Hsearch">
    
    <div class="search">
      <div class="logo">
          <router-link to="/">
            <img
              :src="imgUrl"
              class="sive"
              >
          </router-link>
      </div>
      <div class="sousou">
        <Col span="16">
        <Select
            v-model="model14"
            multiple
            filterable
            remote
            :remote-method="remoteMethod2"
            :loading="loading2">
            <Option v-for="(option, index) in options2" :value="option.value" :key="index">{{option.label}}</Option>
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

export default {
  name: "search",
  data () {
            return {
                imgUrl:'http://img.zwyst.com/images/logo.png',
                model14: [],
                loading2: false,
                options2: [],
                list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming']
            }
        },
        methods: {
            
            remoteMethod2 (query) {
                if (query !== '') {
                    this.loading2 = true;
                    setTimeout(() => {
                        this.loading2 = false;
                        const list = this.list.map(item => {
                            return {
                                value: item,
                                label: item
                            };
                        });
                        this.options2 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
                    }, 200);
                } else {
                    this.options2 = [];
                }
            }
        }
    }
</script>

<style lang="less" scoped>
#Hsearch {
  width: 100%;
  z-index: 5;
  .sousou{
    width: 300px;
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
