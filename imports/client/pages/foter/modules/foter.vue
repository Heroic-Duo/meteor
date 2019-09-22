<template>
    <div id="foter">
        <div class="fot_nav">
            <router-link to="/about">关于我们</router-link>
            <router-link to="/">切换手机版</router-link>
            <router-link to="/disclaimer">免责声明</router-link>
            <div class="fot_intro">
                <p class="fot_intro1">发扬传承中华五千年古文化，中华古文化养生，琴棋书画养生知识，修身养性知识。</p>
                <p class="fot_intro2">Copyright @养生传承 (赵庄王) 备案号：冀ICP备18021214号 </p>
            </div>
        </div>
        <!-- <p>切换电脑版</p> -->
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    #foter{
        
    }
    .fot_nav{
        width: 100%;
        text-align: center;
        
        position: fixed;
        bottom: 0;
        background: rgba(54, 54, 54, 0.99);
        z-index: 20;
        height: 75px;
        padding: 5px 0;
    }
    .fot_nav a{
        padding: 0 20px;
        border-radius: 20px;
        margin: 20px;
        font-size: 16px
    }
    .fot_intro{
        font-size: 14px
    }
    .fot_intro1{
        color: rgba(20, 146, 71, 0.9215686274509803)
    }
    .fot_intro2{
        color: #fff
    }
</style>

