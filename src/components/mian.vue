<template>
  <div id="mian">
    <ul>
      <li  v-for="item in mian_list">
        <router-link :to="{path:'about' , query: { id : item.id }}">
          <div class="music_pic">
            <img slot="icon"  v-bind:src="item.picUrl" width="150" height="165">
          </div>
          <div class="music_title">
            <h3 v-text="item.topTitle">  </h3>
            <p v-for="(text,index) in item.songList">{{ index+1 }} {{ text.songname}}  -  {{  text.singername }} </p>
            <h6 > <img src="../assets/listen.png" alt="" style="width: 16px;height: 16px;vertical-align: middle;">  {{ item.listenCount }}  </h6>
          </div>
          <div class="more">
            <img src="../assets/more.png" alt="">
          </div>
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
  // export defult是es6中的方法，将整个花括号对象暴露出去;
  export default {
    data: function() {
      return {
        mian_list:[]
      }
    },
    beforeMount:function () {
      this.$http.jsonp('http://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg', {
        params: {
          g_tk: 5381,
          uin: 0,
          format: 'jsonp',
          inCharset: 'utf-8',
          outCharset: 'utf-8',
          notice: 0,
          platform: 'h5',
          needNewCode: 1,
          _: new Date().getTime()
        },
        jsonp: 'jsonpCallback'
      }).then(function (response) {
          console.log(response.body.data.topList);
          this.mian_list = response.body.data.topList

      })
    },
    methods: {

    }
  }
</script>

<style>
  #carousel{
    width: 100%;
    height: 165px;
  }
  #mian{
    background: #78828E;
  }
  #carousel .music_pic img{
    width: 100%;
  }
  #mian li{
    margin-top: 5px;
    display: block;
    width: 100%;
    height: 165px;
    overflow: hidden;
    background: #838A94;
    position: relative;
  }
  #mian div{
    position: absolute;
  }
  .music_pic{
    top: 0;
    left: 0;
  }
  .music_title{
    top: 0;
    right: 70px;
    left: 160px;
  }
  .more{
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -24px;
   }
  .music_title h3{
    height: 45px;
    overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
    color: rgba(255,255,255,0.7);
    line-height: 45px;
  }
  .music_title h6{
    height: 45px;
    color: rgba(255,255,255,0.7);
    line-height: 45px;
    font-size: 18px;
  }
  .music_title p{
    height: 25px;
    overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
    color: rgba(255,255,255,0.7);
    line-height: 20px;
  }
</style>
