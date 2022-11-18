<template>
  <div class="box section1">
    <div class="jl_title">
      <div class="jl_welcome">Welcome To</div>
      <div class="jl_world"><span title="Dissociative Identity Disorder">DID</span> <span style="font-size: 10vh">World</span></div>
    </div>
<!--    <div class="section1_bg noise"></div>-->
    <div class="boll noise"></div>
    <div class="img_container">
      <img src="https://i.picsum.photos/id/254/1920/1080.jpg?hmac=QAkC8LdfZ0ylXKy5Z4-za1A7iock_D_cgjarL-SR9Nw" alt=""/>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  props:{

  },
  data(){
    return {
      height:12
    }
  },
  mounted() {
    gsap.to(".section1 .boll",{
      scrollTrigger: {
        trigger: `.section1`,
        scrub:1,
        pin: true,
        // start: "top top",    /** 第一个参数以目标物体为基准 第二个参数以容器为基准 **/
        // end: "bottom top",
        pinSpacing: false,
      },
      width:"280vw",
      height:"280vw",
      top:"-90vw",
      // right:0,
      // borderRadius:0,
    });
  }
}
</script>

<style lang="scss">
$cycle_bg_right:10vw;

.section1{ background:#999; }
.section1 .jl_title{ position: absolute;top: 8vh;right: .5vw;text-align: right;z-index: 11; }
.section1 .jl_welcome{ font-size: 10vh; }
.section1 .jl_world{ font-size: 24vh; }

.section1 .boll{ height: 90vh;width: 90vh;background-image: linear-gradient(315deg, #38484b, #18755c);border-radius:100%;position:absolute;top: -12vw;right: -15vw;z-index: 10 }

.section1 .section1_bg{ height: 90vh;width: 90vh;border-radius: 50%;position: absolute;top: -30vh;right: -$cycle_bg_right;z-index: 10;overflow: hidden; }
.section1 .section1_bg:after{ content: '';background-image: linear-gradient(315deg, #38484b, #18755c);position: absolute;top: 0;right: $cycle_bg_right;width: 100vw;height: 100vh; }
.section1 .section1_bg.noise:before{ position: fixed;top: 0;left: 0;width: 100vw;height: 100vh; }
</style>
