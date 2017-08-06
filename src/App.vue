<template>
  <div id="app">

    <router-view>  </router-view>



    <!--<div class="nav">-->
      <!--<ul>-->
        <!--<li><router-link to="/home">Home</router-link></li>-->
        <!--<li><router-link to="/about">About</router-link></li>-->
      <!--</ul>-->
    <!--</div>-->
    <!--<div class="main">-->
      <!--&lt;!&ndash; 路由匹配到的组件将渲染在这里 &ndash;&gt;-->

    <!--</div>-->
    <!--<button @click="clickMe"> clickMe </button>-->
    <!--<footer-Div> </footer-Div>-->



  </div>


</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import footerDiv from './components/footerDiv'

  export default {
    components: {
      footerDiv,
    },
    data () {
        return{
          dataInput: "",
          dataList : [ 'hello world!','welcome to use vue.js' ]
        }
    },


    methods:{
      clickMe:function () {
//        axios.get('/rest/device/getonlinedevice.do')
//          .then(function (response) {
//            console.log(response);
//          })
//          .catch(function (error) {
//            console.log(error);
//          });



      },


    }

}
</script>

<style>
  *{
    padding: 0;margin: 0;
    font-family: "微软雅黑" !important;
  }
  body,html{
    height: 100%;
    overflow: scroll;
  }
  #app{
    height: 100%;
  }
  .bod{
    width: 100%;
    height: 40px;
  }
  @component-namespace page {
    @component swipe {
      @descendent desc {
        text-align: center;
        color: #666;
        margin-bottom: 5px;
      }
      .mint-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
      }

      .mint-swipe-item {
        line-height: 200px;
      }

      .slide1 {
        background-color: #0089dc;
        color: #fff;
      }

      .slide2 {
        background-color: #ffd705;
        color: #000;
      }

      .slide3 {
        background-color: #ff2d4b;
        color: #fff;
      }
    }
  }

</style>
