<template>
  <div class="music">
      <ul>
        <li v-for="(item , index) in music_list"  @click="open(index)" >
            <b v-text=" item.data.singer[0].name "> </b>
            <p v-text=" item.data.songname "> </p>

            <div class="song_num"> {{ index+1 }} </div>
            <div class="song_more"> ... </div>
        </li>
      </ul>
  </div>
</template>

<script>
  // export defult是es6中的方法，将整个花括号对象暴露出去;
  export default {
    data: function() {
      return {
        song:[]
      }
    },
    props:["music_list"],

    methods: {
      lickeme:function () {
          console.log(this.song);
      },
      open:function (index) {
        this.$emit('showbox', true , this.music_list[index]);
      }
    }
  }
</script>

<style>
  .music{
    overflow: scroll;
  }
  .music ul li{
    position: relative;
    width: 100%;
    height: 50px;
    padding: 0 50px;
    box-sizing: border-box;
    border-bottom: 0.5px solid rgba(255,255,255,0.1);
  }
  .music ul li p{
    height: 25px;
    line-height: 25px;
    color: #ccc;
  }
  .music ul li b{
    height: 25px;
    line-height: 25px;
    color: #fff;
  }
  .song_num{
    position: absolute;
    left: 10px;
    top: 0;
    line-height: 50px;
    color: #fff;
  }
  .song_more{
    position: absolute;
    right: 10px;
    top: 0;
    line-height: 50px;
  }
</style>

