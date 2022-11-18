<template>

  <div class="feature" id="featureAnimation" :style="style">
    <div id="featureBackground">
      <div class="dot" v-for="i in 180"></div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  props:{
    color:{type:String, default:"#fff"},
    style:{type:Object, default:({})},
  },
  data(){
    return {
      morph : null
    }
  },
  mounted() {
    gsap.set('.dot', {
      backgroundColor: "random([#663399,#84d100,#cc9900,#0066cc,#993333])",
      scale: "random(0.2, 1)",
      height: "random(50, 100)",
      width: "random(10, 30)",
      skewX: "random(-50, 50)",
      x:1000,
      y:640
    });
    // create the physics2D animation
    let tween = gsap.to('.dot', {
      duration: 2.5,
      physics2D: {
        velocity: "random(300, 800)",
        angle: "random(240, 300)",
        gravity: 500
      },
      delay: "random(0, 2.5)",
      rotate:  "random(-50, 50)",
    });
  },
  methods:{
  }
}
</script>

<style scoped>
#featureAnimation {
  background-color: #000;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100vw;
  margin: auto;
}

.dot {
  position: absolute;
  background-color: #91e600;
  width: 50px;
  height: 50px;
  /*border-radius: 50%;*/
  will-change: transform;
  /*transform-style: preserve-3d;*/
  transform: matrix(110,20,103,240,50,60);
  /*transform: matrix3d(10,2,3,40,50,60,30,511,123,56,78,32,12,55,6,0);*/
}
</style>
