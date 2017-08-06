<template>
    <div class="autoPlay" v-bind:class="{ 'hide': hideisactive,'show': showisactive }">
       <div  @click="hide" >
         <img src="../assets/back.png" alt="">
       </div>
    </div>
</template>

<script>
  // export defult是es6中的方法，将整个花括号对象暴露出去;
  export default {
    data: function() {
      return {
        hideisactive:false,
        showisactive:false,
      }
    },
    methods:{
      hide:function () {
        this.hideisactive = true
      }
    }
  }
</script>
<style>
  .autoPlay{
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    background: #838A94;
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
</style>
