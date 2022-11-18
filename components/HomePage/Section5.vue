<template>
  <div ref="contain" class="box">
    <div ref="img_container" class="img_c">
      <div class="mask" ref="mask"/>
      <img src="https://i.picsum.photos/id/270/1920/1080.jpg?hmac=7AG21ARfiXrlnEVXCYC3OWyrGS9pdFPyCnLW7WzRTHw" alt=""/>
    </div>
    <div class="side_tit">宛平南路600号&ensp;&ensp;宛平南路600号&ensp;&ensp;宛平南路</div>
    <div class="content" ref="des" style="font-size: 30px;top: 0;">
      <p>精神分裂症是一组病因未明的慢性疾病，多在青壮年缓慢或亚急性起病，临床上往往表现为症状各异的综合征，涉及感知觉、思维、情感和行为等多方面的障碍以及精神活动的不协调。</p>
      <p>患者一般意识清楚，智能基本正常，但部分患者在疾病过程中会出现认知功能的损害。</p>
      <p>病程一般迁延，呈反复发作、加重或恶化，部分患者最终出现衰退和精神残疾，但有的患者经过药物治疗与心理治疗后可保持痊愈或基本痊愈状态。</p>
      <p>
        特点：过于在意别人的看法；难以控制自己的情绪；自责感比较强；
      </p>
    </div>
  </div>
</template>

<script>

import gsap from "gsap";
import SplitText from "../../assets/js/SplitText3.min";

export default {
  props:{

  },
  data(){
    return {
    }
  },
  mounted() {
    this.splitT();
    this.gsapFn();
  },
  methods:{
    gsapFn(){
      let q = gsap.utils.selector(this.$el);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.contain,
          scrub: 1,
          start: "bottom bottom",
          end: "bottom -100%",
        }
      });
      tl.to(this.$refs.mask, {opacity: .3})
      tl.to(this.$refs.mask, {opacity: .9})
      tl.to(this.$refs.mask, {opacity: .3})
      tl.to(this.$refs.mask, {opacity: 1})

      gsap.to(this.$refs.contain, {
        scrollTrigger: {
          trigger: this.$refs.contain,
          pin: true,
          scrub: 1,
          end: "bottom -100%",
        }
      });
      gsap.to(this.$refs.img_container, {
        scrollTrigger: {
          trigger: this.$refs.contain,
          scrub: 1,
          start: "top bottom",
          end: "bottom -300%",
        },
        scale:1.5,
        y: "-10%",
      });
      gsap.to(q('.content div'), {
        scrollTrigger:{
          trigger:this.$refs.contain,
          scrub: 1,
          start: "top top",
        },
        y: 60,
        stagger: {
          grid: [5,30],
          from: "center",
          amount: 1.5
        }
      });
    },
    splitT(){
      new SplitText(this.$refs.des, {
        type: "chars",
        charsClass: "char++"
      });
    }
  }
}
</script>

<style>

  .side_tit{font-size: 20px;background: #fff;width: 400px;position: absolute;left: -100px;top: 80px;transform: rotate(-45deg);z-index: 100;color: #333;text-align: center;}
</style>
