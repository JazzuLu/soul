<template>
  <div ref="contain" class="box">
    <div class="noise" style="position: absolute;width: 100vw;height: 100vh;"></div>
    <video style="width: 35vw;z-index: 10;" src="https://lg-lf0tnvgs-1256652198.cos.ap-shanghai.myqcloud.com/Jinx%20mean%20jinx~2.mp4" controls="controls"></video>
    <div style="position: absolute;right: 0;bottom: 0;height: 100%;">
      <img style="height: 100%;" :src="jinx_1" alt="">
    </div>
  </div>
</template>

<script>

// import gsap from "gsap";
import jinx_1 from "../../assets/img/roles/jinx_1.png"

export default {
  props:{

  },
  data(){
    return {
      jinx_1
    }
  },
  mounted() {
    // gsap.to(this.$refs.contain, {
    //   scrollTrigger: {
    //     trigger: this.$refs.contain,
    //     pin: true,
    //     scrub: 1,
    //     end: "bottom -100%",
    //   }
    // });
    // gsap.to(this.$refs.img_container, {
    //   scrollTrigger: {
    //     trigger: this.$refs.contain,
    //     scrub: 1,
    //     start: "top bottom",
    //     end: "bottom -300%",
    //   },
    //   scale:1.5,
    //   y: "-10%",
    // });
  }
}
</script>

<style>

</style>
