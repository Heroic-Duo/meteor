<template>
  <div id="index">
    <div class="zhuan">
      <div class="box">
        <div class="semi-circle left"></div>
        <!-- <div class="semi-circle right"></div> -->
        <div class="top-circle">
          <span class="small-circle white"></span>
        </div>
        <div class="bottom-circle">
          <span class="small-circle black"></span>
        </div>
      </div>
      <section class="gb-wheel-container" id="gbWheel">
        <div class="gb-wheel-content gb-wheel-run">
          <ul class="gb-wheel-line"></ul>
          <div class="gb-wheel-list"></div>
        </div>
        <!-- <a href="javascript:;" class="gb-wheel-btn" id="gbLottery">抽奖</a>  -->
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  mounted() {
    (function() {
      // 奖品配置
      var awards = [
          { index: 0, text: "胆经</br>子时</br>23~1", name: "icono-headphone" },
          { index: 1, text: "肝经</br>丑时</br>1~3", name: "icono-iphone" },
          { index: 2, text: "肺经</br>寅时</br>3~5", name: "icono-camera" },
          { index: 3, text: "大肠经</br>卯时</br>5~7", name: "icono-cup" },
          { index: 4, text: "胃经</br>辰时</br>7~9", name: "icono-calendar" },
          { index: 5, text: "脾经</br>巳时</br>9~11", name: "icono-keyboard" },
          { index: 6, text: "心经</br>午时</br>11~13", name: "icono-keyboard" },
          {
            index: 7,
            text: "小肠经</br>未时</br>13~15",
            name: "icono-keyboard"
          },
          {
            index: 8,
            text: "膀胱经</br>申时</br>15~17",
            name: "icono-keyboard"
          },
          { index: 9, text: "肾经</br>酉时</br>17~19", name: "icono-keyboard" },
          {
            index: 10,
            text: "心包经</br>戌时</br>19~21",
            name: "icono-keyboard"
          },
          {
            index: 11,
            text: "三焦经</br>亥时</br>21~23",
            name: "icono-keyboard"
          }
        ],
        len = awards.length,
        turnNum = 1 / len; // 文字旋转 turn 值

      var gbWheel = $("gbWheel"),
        lineList = gbWheel.querySelector("ul.gb-wheel-line"),
        itemList = gbWheel.querySelector(".gb-wheel-list"),
        lineListHtml = [],
        itemListHtml = [];

      var transform = preTransform();

      awards.forEach(function(v, i, a) {
        // 分隔线
        lineListHtml.push(
          '<li class="gb-wheel-litem" style="' +
            transform +
            ": rotate(" +
            (i * turnNum + turnNum / 2) +
            'turn)"></li>'
        );

        // 奖项
        itemListHtml.push('<div class="gb-wheel-item">');
        itemListHtml.push(
          '<div class="gb-wheel-icontent" style="' +
            transform +
            ": rotate(" +
            i * turnNum +
            'turn)">'
        );
        itemListHtml.push('<p class="gb-wheel-iicon">');
        itemListHtml.push('<i class="' + v.name + '"></i>');
        itemListHtml.push("</p>");
        itemListHtml.push('<p class="gb-wheel-itext">');
        itemListHtml.push(v.text);
        itemListHtml.push("</p>");
        itemListHtml.push("</div>");
        itemListHtml.push("</div>");
      });

      lineList.innerHTML = lineListHtml.join("");
      itemList.innerHTML = itemListHtml.join("");

      function $(id) {
        return document.getElementById(id);
      }

      // 旋转
      /*var i = 0;
                $('gbLottery').onclick = function() {
                    i++;
                    gbWheel.querySelector('.gb-wheel-content').style = transform + ': rotate('+ i * 3600 +'deg)';  
                }*/

      // transform兼容
      function preTransform() {
        var cssPrefix,
          vendors = {
            "": "",
            Webkit: "webkit",
            Moz: "",
            O: "o",
            ms: "ms"
          },
          testEle = document.createElement("p"),
          cssSupport = {};

        // 嗅探特性
        Object.keys(vendors).some(function(vendor) {
          if (
            testEle.style[vendor + (vendor ? "T" : "t") + "ransform"] !==
            undefined
          ) {
            cssPrefix = vendor ? "-" + vendor.toLowerCase() + "-" : "";
            return true;
          }
        });

        function normalizeCss(name) {
          name = name.toLowerCase();
          return cssPrefix ? cssPrefix + name : name;
        }

        cssSupport = {
          transform: normalizeCss("Transform")
        };

        return cssSupport.transform;
      }
    })();
  },
  methods: {
    color() {
      window.document.body.style.backgroundColor = color.value;
    }
  },
  transitions: {
    //定义所有动画名称
    bounce: {
      enterClass: "zoomInLeft",
      leaveClass: "zoomOutRight"
    }
  }
};
</script>
<style lang="stylus" scoped>
$img = "http://img.zwyst.com/images/"
#index 
  margin-top 10px
  text-align center
  height 755px
  .zhuan 
    position relative
    overflow hidden
    width 100%
    height 830px
    background url($img+"cent_loso.jpg") center center no-repeat
  
  .box
    margin auto
    width 400px
    height 400px
    border-radius 200px
    box-shadow 0 0 10px #000
    position absolute
    left 0
    right 0
    top 170px
    animation spin 20s linear 2s infinite
    z-index 9
    background #fff
  
  .semi-circle
    height 400px
    width 200px
  
  .box .left
    background #000;
    border-top-left-radius 200px
    border-bottom-left-radius 200px
  

  .box .right 
    background #fff
    border-top-left-radius 200px
    border-bottom-left-radius 200px
  
  .box .top-circle 
    position absolute
    left 100px
    top 0
    height 200px
    width 200px
    text-align center
    line-height 200px
    border-radius 100px
    background #000
  
  .box .bottom-circle 
    position absolute
    left 100px
    bottom 0
    height 200px
    width 200px
    text-align center
    line-height 200px
    border-radius 100px
    background #fff
  
  .box .small-circle
    display inline-block
    height 40px
    width 40px
    border-radius 20px
    background red
  
  .box .white 
    background #fff
  
  .box .black 
    background #000
  
</style>
