<template>
  <div class="about">
    <div class="banner_music">
      <img v-bind:src="banner_pic" alt="">
      <div class="banner_title">
          <h3 v-text="banner_title">  </h3>
          <p v-text="banenr_time">  </p>
      </div>
      <div class="back">
        <router-link to="home">
          <img src="../assets/back.png" alt="">
        </router-link>
      </div>
    </div>

    <div class="list_music">
      <music :music_list="music_list" @showbox="toshow" :msg="msg"> </music>
    </div>


    <div class="autoPlay" v-bind:class="{ 'hide': hideisactive,'show': showisactive }">

      <h3> {{ title }}  </h3>
      <p> {{ name }}  </p>
      <div class="img_back"  @click="hide" >
        <img src="../assets/back.png" alt="">
      </div>

      <div class="video">
        <audio controls="controls" style="width: 100%;height: 100%" id="play" v-bind:src="dataUrl"></audio>
      </div>

    </div>
  </div>
</template>

<script>
  import music from './music'
  // export defult是es6中的方法，将整个花括号对象暴露出去;
  export default {
    components:{
      music
    },
    data: function() {
      return {
        name:"",
        title:"",
        dataUrl:"",
        msg:"",
        music_list:[],
        banner_pic:"",
        banner_title:"",
        banenr_time:"",
        hideisactive:false,
        showisactive:false,
      }
    },
    beforeMount () {
      this.$http.jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg', {
        params: {
          topid: this.$route.query.id,
          format: 'jsonp',
          inCharset: 'utf8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'yqq',
          needNewCode: 0
        },
        jsonp: 'jsonpCallback'
      }).then(function (response) {
          console.log(response.body)
          this.banner_pic = response.body.topinfo.pic_h5
          this.banner_title = response.body.topinfo.ListName
          this.banenr_time = response.body.update_time
          this.music_list = response.body.songlist
      })
    },

    methods: {
      hide:function () {
        this.hideisactive = true;
        this.showisactive = false;
      },
      toshow:function(...msg){
        this.hideisactive = false;
        this.showisactive = msg[0];
        this.title =  msg[1].data.songname;
        this.name = msg[1].data.singer[0].name;
        this.dataUrl ='http://ws.stream.qqmusic.qq.com//' + msg[1].data.songid + '.m4a?fromtag=46';
          console.log(this.title);

//          this.msg = msg;
      }
    }
  }
</script>
<style>
  .about{
    height: 100%;
    overflow:scroll;
    background: #838A94;
  }
  .banner_music{
    width: 100%;
    height: 165px;
    position: relative;
  }
  .banner_music img{
    width: 100%;
    height: 165px;
  }
  .banner_title{
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 10px;
    height: 50px;
    width: 100%;
    background: rgba(0,0,0,0.3);
    box-sizing: border-box;
  }
  .banner_title h3{
    color: #fff;
    height: 25px;
    line-height: 25px;
  }
  .banner_title p{
    color: #fff;
    height: 25px;
    line-height: 25px;
  }
  .img_back{

  }
  .back{
    position: absolute;
    top: 10px;
    left: 10px;
    width: 32px;
    height: 32px;
  }
  .back img{
    width: 32px;
    height: 32px;
  }
  .autoPlay{
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    background: #838A94;
  }
  .autoPlay h3{
    color: #fff;
    position: absolute;
    top: 100px;
    left: 10px;
  }
  .autoPlay p{
    color: #fff;
    position: absolute;
    top: 150px;
    left: 10px;
  }
  .back{
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .back img{
    width: 32px;
    height: 32px;
  }
  @keyframes miss
  {
    from {top:0;}
    to {top:100%;}
  }
  @keyframes cool
  {
    from {top:100%;}
    to {top:0;}
  }
  .hide{
    animation: miss 1s;
    -webkit-animation: miss 1s ease forwards;
  }
  .show{
    animation: miss 1s;
    -webkit-animation: cool 1s ease forwards;
  }
  .video{
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.8);
    height: 50px;
    width: 100%;
  }
  .video img{
    margin-top: 9px;
  }
</style>
