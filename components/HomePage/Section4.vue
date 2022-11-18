<template>
  <div ref="contain" class="box">
    <div ref="img_container" class="img_c">
      <div class="mask" ref="mask"/>
      <img :src="bg" style="width: 100vw;" alt=""/>
    </div>


    <div class="content section_4" style="font-size: 12px;">
      <div class="dc">
        <div class="dc_tit">受欢迎的人格</div>
        <div class="li" v-for="item in Popular">
          <div class="tit">{{item.tit}} &ensp;&ensp; {{item.age}}</div>
          <div class="des">{{item.des}}</div>
        </div>
      </div>

      <div class="dc">
        <div class="dc_tit">不受欢迎的人格</div>
<!--        <div>（由于不受欢迎的人格具有令人讨厌的特点，因此受到阿瑟的压制。考尔医生在阿森斯心理健康中心首次发现了他们。）</div>-->
        <div class="li" v-for="item in Unpopular">
          <div class="tit">{{item.tit}} &ensp;&ensp; {{item.age}}</div>
          <div class="des">{{item.des}}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import gsap from "gsap";
import bg from "../../assets/img/Billy/bg_4.png"

const Teacher = {tit:"“老师”（The Teacher）",age:"26 岁",des:"他是 23 种人格的融合体，为其他人格传授知识；聪明、敏感、颇具幽默感。自称“我是完整融合的比利”，称其他人格为“我创造的傀儡”；对往事拥有近乎完整的记忆。此书也因“老师”的帮助才得以完成。"};
const Popular = [
  {tit:"威廉·斯坦利·米利根（比利，William Stanley Milligan）",age:"26 岁",des:"最初的核心人格，后来被称为“分裂的比利”或“比利” ；高中时被勒令退学，身高 6 英尺、体重 190 磅，蓝眼睛，棕色头发。"},
  {tit:"阿瑟（Arthur）",age:"22 岁",des:"英国人，理性、冷酷，讲话带英国腔。他自修物理、化学并研习医学，能流利地应用阿拉伯文。他顽固保守、自认是资本主义者，但公开承认信奉无神论。他是第一个发现有其他人格存在的人，在安全状况下负责管理，决定"},
  {tit:"里根（Ragen）",age:"23 岁",des:"充满仇恨的人格。南斯拉夫人，讲英语时带斯拉夫口音，会塞尔维亚和克罗地亚语；武器和军事权威，精通空手道。他体格健壮，能有效地控制肾上腺素。他信奉共产主义，是个无神论者，职责是保护家庭成员，特别是妇女"},
  {tit:"亚伦（Allen）",age:"18 岁",des:"骗子、操纵者。他负责对外联络，不可知论者，人生态度为“得过且过”。他会打小鼓、画人像，是唯一抽烟的人格；与比利的妈妈很亲近， 身高与威廉 · 米利根相仿， 体重略轻 （165磅）；头发右分，也是唯一的右撇"},
  {tit:"汤姆（Tommy）",age:"16 岁",des:"精通逃脱术。好斗、具有反社会倾向，经常被误认为是亚伦。他会吹萨克斯管，是无线电专家，还擅长风景画；头发蓬乱、发色金黄，眼睛为琥珀色。"},
  {tit:"丹尼（Danny）",age:"14 岁",des:"容易被惊吓，惧怕陌生人，特别是男人。他曾被逼挖掘坟墓并被活埋， 因此只画有生命的东西；留着棕色的齐肩长发，蓝色眼睛，身材瘦小。"},
  {tit:"戴维（David）",age:"8 岁",des:"充满痛苦，经常代其他人格承受痛苦。他非常敏感，善于理解，但不能长时间集中注意力，大部分时间精神恍惚；头发为深棕红色，蓝眼睛，身材矮小。"},
  {tit:"克丽丝汀（Christene）",age:"3 岁",des:"经常被老师叫到角落罚站，因此被称为“角落里的孩子”。她是个英国小女孩，聪明，但患有失读症；喜欢画花和蝴蝶；金发及肩、蓝眼睛。"},
  {tit:"克里斯朵夫（Christopher）",age:"13 岁",des:"克丽丝汀的哥哥，说话带英国腔，性格温顺但内心不安；会吹口琴；褐色金发类似克丽丝汀，留着短刘海。"},
  {tit:"阿达拉娜（Adalana）",age:"19 岁",des:"性格孤独、内向、害羞。她会写诗，烹调，操持家务事；一头乌黑的直发，茶色的眼睛，眼神经常飘忽不定，因此有人说她有一双“舞眼”。"},
];
const Unpopular = [
  {tit:"菲利普（Philip）",age:"20 岁",des:"性格粗暴。纽约人，有浓厚的布鲁克林口音，语言粗俗；以 “菲尔” 的名义让警方和媒体得知比利体内不止有十种人格；大错没有，但小错不断；棕色卷发、褐色眼睛、鹰钩鼻。"},
  {tit:"凯文（Kevin）",age:"20 岁",des:"善于谋划。他曾策划“格雷药店”抢劫案；喜欢写作；金色头发，绿色眼睛。"},
  {tit:"瓦尔特（Walter）",age:"22 岁",des:"澳大利亚人。自认是狩猎专家；因方向感极好，常被请出确认方位；情感压抑、性情古怪，留着八字胡。"},
  {tit:"阿普里尔（April）",age:"19 岁",des:"女流氓。她讲话操波士顿口音，企图报复比利的继父；其他人格认为她精神不正常；会缝纫， 协助做家务。 黑发，棕眼。"},
  {tit:"塞缪尔（Samuel）",age:"18 岁",des:"流浪的犹太人。他是个虔诚的犹太教徒，是所有人格中唯一相信神的人；雕刻家，特别擅长木雕；黑卷发、山羊胡、褐色眼睛。"},
  {tit:"马克（Mark）",age:"16 岁",des:"工作狂。他做事被动，若无其他人格的命令，便会无所事事；负责做单调的工作，没事可做时便凝视墙壁，有时被称为“僵尸”。"},
  {tit:"史蒂夫（Steve）",age:"21 岁",des:"经常骗人，喜欢以模仿的方式嘲弄别人。他极端自我，是唯一不接受多重人格症诊断结果的人格；由于嘲弄人而引起众怒，并令其他人格厌烦。"},
  {tit:"利伊（Lee）",age:"20 岁",des:"喜剧演员。小丑，喜欢捉弄人，机智。由于他的挑唆引起其他人格争吵，被狱方关入禁闭室。他对人生和自己的行为结果满不在乎；头发深棕色、眼睛栗色。"},
  {tit:"杰森（Jason）",age:"13 岁",des:"安全阀（初期非常重要）。他经常因歇斯底里发作和脾气暴躁而招致惩罚，但能减轻压力；独自一人承受不愉快的记忆，而让其他人格忘却往事，但因此丧失了记忆；头发和眼睛均为棕色。"},
  {tit:"罗伯特（鲍比，Robert）",age:"17 岁",des:"梦想家。他经常幻想着旅行和冒险；幻想自己能让世界变得更美好，但不具备野心，也不想学习。"},
  {tit:"肖恩（Shawn）",age:"4 岁",des:"天生耳聋。他的注意力难以集中，反应迟钝，大脑中经常有嗡嗡的声音并能感觉到脑部震动。"},
  {tit:"马丁（Martin）",age:"19 岁",des:"势利眼。他是个自视甚高的纽约人，喜欢炫耀、装腔作势，妄想不劳而获；金发，眼睛灰色。"},
  {tit:"提摩西（提米 ,Timothy）",age:"15 岁",des:"在花店工作。他曾遇见一位有钱的同性恋者，因恐惧而压抑自己的情感，退缩到自己的世界里。"},
]

export default {
  props:{
  },
  data(){
    return {
      bg,
      Teacher,
      Popular,
      Unpopular,
    }
  },
  mounted() {
    this.gsapFn();
  },
  methods:{
    gsapFn(){
      this.gsapData();
      this.gsapBg();
    },
    gsapData(){
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
      tl.to(this.$refs.mask, {opacity: .1})
    },
    gsapBg(){
      gsap.to(this.$refs.contain, {
        scrollTrigger: {
          trigger: this.$refs.contain,
          pin: true,
          scrub: 1,
          end: "bottom -1000%",
        }
      });
      gsap.to(this.$refs.img_container, {
        scrollTrigger: {
          trigger: this.$refs.contain,
          scrub: 1,
          start: "top bottom",
          end: "bottom -3000%",
        },
        scale:1.5,
        y: "-10%",
      });
    },
  }
}
</script>

<style>
  .box .content.section_4{
    display: flex;
    justify-content: space-around;
    width: 100vw;
    padding: 0 5vw;
  }
  .box .content.section_4 .dc{ width: 35vw; }
  .box .content.section_4 .dc .dc_tit{ margin-bottom: 20px; font-size: 20px; }
  .box .content.section_4 .dc .li{ margin-bottom: 10px; }
  .box .content.section_4 .dc .li .des{ color: #aaa; }
</style>
