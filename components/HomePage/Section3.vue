<template>
  <div ref="contain" class="box s3">
    <div class="img_container" ref="img_container">
      <img src="https://i.picsum.photos/id/410/1920/1080.jpg?hmac=WaY62swVOsVhkr0FVadjHuRxvjv0FULp1lQ-gQi-w-s" alt=""/>
    </div>
    <div class="billy_img" ref="billy_img"><img :src="billy2" alt=""></div>
    <div class="content" style="margin-top: 2vh">
<!--      <a href="https://baike.baidu.com/tashuo/browse/content?id=a079f3de4569ff20d7a44bd2&lemmaId=58830&fromLemmaModule=pcBottom&lemmaTitle=24%E4%B8%AA%E6%AF%94%E5%88%A9">24 billy</a>-->

      <p>比利自8岁起，多次被继父殴打、威胁和强奸，有严重的精神疾患。在这悲惨的成长经历下，比利既想一死了之，又渴望能逃离这里继续生存，两种情绪反反复复，使得比利的内心不断分裂出新的人格。</p>

      <p>16岁时，比利自杀未遂，从此，原本的比利就被其他人格“保护”了起来，一沉睡就是7年，经审查和医学判定，他至少拥有24个不同的人格。</p>

      <p>每個分裂出來的人格都只是為了保護自己。有的人用童年治癒一生，有的人用一生治癒童年。</p>
    </div>

    <div ref="opp" class="opp">
<!--      威廉·斯坦利·米利根（比利，William Stanley Milligan）(不知道多重人格)（“时空穿越” 失去记忆）（跳楼（里根） -&#45;&#45; 警局） /-->
<!--      肖恩（Shawn）(耳聋)（一旦不愿意听就出来）-->
      阿达拉娜（Adalana）（花店） (被辞)（没收入）（遇到其他女性（被抢对象）） - 里根（搞点钱） - 凯文（抢钱） — 里根 （手里一把钱） - 汤姆（tommy）（花钱） - 里根（搞点钱）
    </div>
  </div>
</template>

<script>

import gsap from "gsap";
import billy2 from "../../assets/img/Billy/Billy_2.png"


export default {
  props:{

  },
  data(){
    return {
      billy2,
    }
  },
  mounted() {
    gsap.to(this.$refs.billy_img, {
      scrollTrigger: {
        trigger: this.$refs.contain,
        scrub: 1,
        start:"top bottom",
        end:"+=2000"
      },
      left: "12vw"
    });
    gsap.to(this.$refs.contain, {
      scrollTrigger: {
        trigger: this.$refs.contain,
        pin: true,
        scrub: 1,
        end: "bottom -400%",
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


    gsap.to(this.$refs.opp, {
      scrollTrigger: {
        trigger: this.$refs.section,
        start: "top bottom",
        scrub: true,
      },
      right: "0",
      opacity:"1"
    });

  }
}
</script>

<style lang="scss">
.s3 .content{
  position: absolute;
  width: 40vw;
  right: 4vw;
  top: 10vh;
  font-size: 40px;
}
.s3 .billy_img{ z-index: 9; position: absolute; left: -102vw; }
.s3 .billy_img:before{ position: absolute;content: '';display: block;width: 100%;height: 100%;top: 0;left: 0;background: #000;opacity: .6; }
.s3 .billy_img img{ display: block; width: 30vw; }

.s3.box .opp{ font-size: 20px;width: 100vw;display: flex;align-items: flex-start;z-index: 100; position: absolute;top: 4vh;right: -300vw;opacity: 0; }

</style>
