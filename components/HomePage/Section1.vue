<template>
  <div ref="section" class="box" style="height: 150vh;align-items: flex-start">
    <div class="img_container">
      <img src="https://i.picsum.photos/id/497/1920/1080.jpg?hmac=lCmyuUeNJbmkWXfeLeQ2SxRu3mII34_GIdUIBn3M6RQ" alt=""/>
    </div>
    <div class="s1_content content">
      <div style="margin-top: -50px;">
        <p>1977年，美国俄亥俄州,一个罪犯因犯下三宗抢劫案（十天内）和强奸案。</p>
        <p>案发后仅仅40小时，威廉·米利根被捕。面对铁一样的事实，警方已经打算让他把牢底坐穿！</p>
      </div>
    </div>
  </div>
</template>

<script>

import gsap from "gsap";
import SplitText from "../BonusPluginTest/SplitText";

export default {
  components: {SplitText},
  props:{

  },
  data(){
    return {
    }
  },
  mounted() {
    gsap.to(this.$refs.section, {
      scrollTrigger: {
        trigger: this.$refs.section,
        // start: "top top",
        pin: true,
        pinSpacing: false,
      }
    });
  }
}
</script>

<style>
 .box .s1_content{ font-size: 42px;height: 100vh;display: flex;align-items: center; }
</style>
