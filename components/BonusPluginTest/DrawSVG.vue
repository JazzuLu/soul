<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg"
         width="516.3px" height="190px" viewBox="0 0 516.3 190"
         xml:space="preserve">
      <path id="path" d="M9.13,99.99c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"/>
    </svg>

    <button id="press" @mousedown="mousedownDraw" @mouseup="mouseupDraw">press and hold</button>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  props:{
    color:{type:String, default:"#fff"},
  },
  data(){
    return {
      morph : null
    }
  },
  mounted() {
    this.morph = gsap.timeline();
    this.morph.to("#path",  {drawSVG:0})
    this.morph.to("#path", 2, {drawSVG:1, paused:true, onComplete:()=>{}})
    // this.morph.paused()
  },
  methods:{
    mousedownDraw(){
      this.morph.reverse()
      // this.morph.play()
    },
    mouseupDraw(){
      this.morph.play()
      // this.morph.reverse()
    },
  }
}
</script>

<style scoped>
#path { fill: none; }
#path { stroke: #88CE02; stroke-width: 20px; }
</style>
