<template>
  <div ref="section" class="box" style="height: 500vh;align-items: flex-start">
    <div class=img_container>
      <img src="https://i.picsum.photos/id/782/1920/1080.jpg?hmac=Yr45CXIjIidR5E6u-36gZ9BCbVCSUaBrZM1vhuBklgY" alt=""/>
    </div>
    <div class="content s2_content">
      <div style="margin-top: -150px;">


        <p>法庭上，辩护律师以“比利患有多重人格疾患，犯罪时神志不清，无法控制自己”为由，传召了4个精神病医生、一名心理学家上庭作证。</p>
        <p>经过长达2年的诉讼期，1979年，法庭宣判比利无罪。</p>
        <p>整个事件引起社会极大反响，各种攻击纷纷指向比利和精神专家。但宣判结果必有其庄严性，比利因此成为法律史上首个犯下重罪却因精神异常而获判无罪的人。</p>
      </div>
    </div>
    <div ref="s2_content" class="op s2_content" style="">
      <p ref="s2_content_p">汤姆（Tommy）（逃脱）</p>
      <p ref="s2_content_p">戴维（David）（8岁）</p>
      <p>亚伦（Allen）（健谈）（右撇子）（告诉一切）</p>
      <p>亚瑟（Arthur）（绅士）（英国腔）（控制所有人）</p>
      <p>里根（Ragen）</p>
      <p>36岁 回归社会 / 54岁 被采访 / 2014 年遗逝</p>
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
    let q = gsap.utils.selector(this.$el);

    gsap.to(this.$refs.section, {
      scrollTrigger: {
        trigger: this.$refs.section,
        start: "top top",
        pin: true,
        pinSpacing: false,
      }
    });
    gsap.to(q('.s2_content p'), {
      scrollTrigger: {
        trigger: this.$refs.section,
        start: "top top",
        scrub: true,
      },
      stagger: {
        grid: [5,30],
        from: "center",
        amount: 1.5
      },
      y: "-100vh",
      opacity:"1"
    });
  }
}
</script>

<style>
.box .s2_content{ font-size: 42px;height: 100vh;display: flex;align-items: center;width: 60vw;justify-content: flex-start; }
.box .op{ font-size: 20px;height: 100vh;width: 30vw;display: flex;align-items: center;flex-direction: column;justify-content: flex-end; }
.box .op p{ opacity: 0; }
</style>
