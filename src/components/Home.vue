<template>
  <div>

    <carousel>  </carousel>
    <mian> </mian>
    <search> </search>

  </div>
</template>

<script>
  import search from './search'
  import carousel from './carousel'
  import mian from './mian'
  // export defult是es6中的方法，将整个花括号对象暴露出去;
  export default {
    components: {
      search,
      carousel,
      mian
    },
    data: function() {
      return {

      }
    },
    methods: {

    }
  }
</script>

