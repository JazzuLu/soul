<template>
  <div class="input_cursor_container">
    <div class="input_cursor" :style="`backgroundColor:${color};width:${width}px;height:${height}px;`">&nbsp;</div>
  </div>
</template>

<script>

export default {
  props:{
    color:{type:String, default:"#fff"},
    width:{type:[String,Number], default:10},
  },
  data(){
    return {
      height:12
    }
  },
  mounted() {
    const $c = document.querySelector(`.input_cursor_container`);
    this.height = parseInt(getComputedStyle($c,null)['font-size']) ?? 12;
  }
}
</script>

<style>
  .input_cursor_container{
    display:inline-block;
  }
  .input_cursor{
    display:flex;
    align-items:center;
    animation: bounce 1s infinite;
  }
  @keyframes bounce{
    from{ opacity:0 }
    to{ opacity:1 }
  }
</style>
