<template>
  <div id="userindex">
    <div class="userindex">
        <p class="userindex_title">个人资料</p>
        <div class="userindex_data">
            <label>头像</label>
            <div class="userindex_data_logo" @click="clickimg"  ref="clickimg">
                <img ref="img"  :src="material.icon?material.icon:''"  alt="">
            </div>
            
        </div>
        <div class="userindex_data">
            <label>更换头像：</label>
            <!-- <input type="file"  class="userindex_flie"> -->
            <input @change="fileImage"   type="file" name="file" accept="image/jpeg,image/x-png,image/gif" id="" value="" class="userindex_flie" />
        </div>
        <div class="userindex_data">
            <label>昵称：</label>
            <input type="text" v-model="Name" maxlength="4" :placeholder="material.Name" class="userindex_input">
            <span v-show='NameA' class="userindex_input_span">长度为2~4位</span>
        </div>
        <div class="userindex_data">
            <label>性别：</label>
            <input type="text" v-model="sex" maxlength="1" style="width:50px" disabled :placeholder="material.sex" class="userindex_input">
            <!-- <span class="userindex_input_span">长度为2~4位</span> -->
            <input type="radio" name="radios" value="男" v-model="sex"><span>男</span>
            <input type="radio" name="radios" value="女" v-model="sex"><span>女</span>
        </div>
        <div class="userindex_data">
            <label>星座：</label>
            <input type="text" v-model="birthday" maxlength="3" :placeholder="material.birthday" class="userindex_input">
            <!-- <span class="userindex_input_span">长度为2~4位</span> -->
        </div>
        <div class="userindex_data">
            <label>领域：</label>
            <input type="text" v-model="field" maxlength="4" :placeholder="material.field" class="userindex_input">
            <!-- <span class="userindex_input_span">长度为2~4位</span> -->
        </div>
        <div class="userindex_data">
            <label>我的签名：</label>
            <input type="text" v-model="signature" maxlength="20" :placeholder="material.signature" class="userindex_input">
            <!-- <span class="userindex_input_span">长度为2~4位</span> -->
        </div>
        <div class="userindex_data">
            <label>爱好兴趣：</label>
            <textarea id="taContent" :placeholder="material.interest" v-model="interest" style="height: 44px;width: 100%;resize: none;"  rows="3" resize="none"  maxlength="50" onchange="this.value=this.value.substring(0,50)" onkeydown="this.value=this.value.substring(0,50)" onkeyup="this.value=this.value.substring(0,50)" >
              
            </textarea>
            <!-- <input type="text"  :placeholder="material.interest" class="userindex_input"> -->
            <!-- <span class="userindex_input_span">长度为2~4位</span> -->
        </div>
        <!-- <div class="userindex_data">
            <label>实名姓名：</label>
            <input type="text" v-model="identityN" :placeholder="material.identityname" class="userindex_input">
        </div>
        <div class="userindex_data">
            <label>实名证号：</label>
            <input type="text" v-model="identityS" :placeholder="material.identitynumber" class="userindex_input">
        </div> -->
        <div class="userindex_btn" >
            <button :disabled="btnBoolen" @click="userindexBtn()" v-text="btnValue">
              保存
            </button>
              
        </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "userindex",
  data() {
    return {
      imgSrc:'/api/user/index/code',
      selected: 0,
      file: "",
      Name: "",
      birthday:'',
      field:'',
      signature:'',
      interest:'',
      NameA: false,
      sex: '',
      MailA: false,
      identityN: "",
      identityS: "",
      identityX: "未设置",
      auth_time:0,
      btnBoolen:false,
      btnValue:'保存'
    };
  },
  props: {
    childCom: {} //String这里指定了字符串类型，如果类型不一致会警告的哦
  },
  computed: {
    ...mapGetters(["material", "setmaterial", "update","userdata"])
  },
  mounted() {
    this.getUsermaterial();
  },
  watch: {
    update(newValue, oldValue) {
      if (newValue) {
        this.$toast("更新成功");
      } else {
        this.$toast("更新失败");
      }
    },
    // update: {
    //   //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
    //   handler(curVal, oldVal) {
    //     conosle.log(curVal, oldVal);
    //   },
    //   deep: true
    // }
    update:'clickimg',//值可以为methods的方法名
  },
  methods: {
    ...mapActions(["getUsermaterial", "setUsermaterial","getUser"]),
    refreshpic() {
      var sj = Math.ceil(Math.random() * 100000);
      this.imgSrc = "/api/user/index/code?t=?" + sj;
    },
    userindexBtn(time) {
      if (this.Name == "") {
        this.$toast("昵称为空");
        return;
      } else if (this.Name.length < 2 || this.Name.length > 4) {
        this.$toast("长度为2~4位");
        return;
      }
      // 邮箱
      // var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      // var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
      if (this.sex == "") {
        this.$toast("性别为空");
        return;
      } else if (this.sex.length < 1 || this.sex.length > 1) {
        this.$toast("性别只限制一个字");
        return;
      }
      if (this.field == "") {
        this.$toast("领域为空");
        return;
      } 
      if (this.birthday == "") {
        this.$toast("星座为空");
        return;
      } 
      if (this.signature == "") {
        this.$toast("签名为空");
        return;
      } 
      if (this.introduc == "") {
        this.$toast("自我介绍为空");
        return;
      } 
      this.setUsermaterial({
        Name: this.Name,
        sex: this.sex,
        field:this.field,
        birthday:this.birthday,
        interest:this.interest,
        signature:this.signature
        //  file:this.$refs.img.src
      });
      // var time = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
      // localStorage.setItem('indexUrl',time);
      // var time1=new Date(new Date().getTime() + 1 * 60 * 60 * 1000)
      // localStorage.setItem('indexUrl1',time1);
      // console.log(time-time1);
      this.auth_time = 20;
        var timer = setInterval(() => {
          this.auth_time--;
          if (this.auth_time <= 0) {
            clearInterval(timer);
            this.btnBoolen = false;
            this.btnValue = "保存";
            window.location.reload()
          } else {
            this.btnBoolen = true;
            this.btnValue = `更新等待(${this.auth_time})S`;
            
          }
      }, 1000);
      this.getUsermaterial();
    },
    uploadHeadImg: function() {
      this.$refs.file.click();
    },
    // 点击显示
    clickimg() {
     
    },
    // 将头像显示
    fileImage(e) {
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      var imgSize = file.size / 1024;
      if (imgSize > 200) {
        alert("请上传大小不要超过200KB的图片");
        return;
      }
      var reader = new FileReader();
      reader.onload = data => {
        let res = data.target || data.srcElement;
        this.$refs.img.src = res.result;
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style lang="less" scoped>
#user {
  img {
    width: 100%;
  }
  .userindex {
    padding: 0 20px;
  }
  .userindex_title {
    text-align: center;
    padding: 10px 0;
  }
  .userindex_data {
    margin: 5px 0;
  }
  .userindex_data_logo {
    width: 100px;
    height: 100px;
    display: inline-block;
  }
  .userindex_data_logo img {
    border-radius: 50%;
  }
  .userindex_data_logo1 {
    position: fixed;
    width: 500px;
    height: 500px;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .userindex_data label {
    width: 100px;
    display: inline-block;
  }
  .userindex_data input {
    margin: 10px 0;
  }
  .userindex_flie {
    padding: 5px 0px;
  }
  .userindex_input {
    padding: 5px 10px;
  }
  .userindex_btn {
    text-align: center;
    margin: 20px auto;
    cursor: pointer;
    color: rgb(151, 175, 45);
    width: 100px;
  }
  .userindex_input_span {
    padding: 5px 5px;
    color: red;
    font-size: 16px;
  }
}
</style>
