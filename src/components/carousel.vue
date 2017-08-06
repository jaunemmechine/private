<template>
  <div id="carousel">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="itembar in listpic" :key="itembar.id">
        <img v-bind:src="itembar"  alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  // export defult是es6中的方法，将整个花括号对象暴露出去;
  export default {
    data: function() {
      return {
        listpic:[]
      }
    },
    beforeMount:function () {
      this.$http.jsonp('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', {
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
          console.log(response.data.data.slider);
          for(var i = 0;i<response.data.data.slider.length;i++){
            this.listpic.push(response.data.data.slider[i].picUrl)
          }
      })
    },
    methods: {

    }
  }
</script>

<style>
  #carousel{
    width: 100%;
    height: 150px;
  }
  #carousel img{
    width: 100%;
  }

</style>
