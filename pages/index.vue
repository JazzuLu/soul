<template>
  <div class="home container">
    <BannerTop/>
    <TransitionTitModel title="Section 1 ------ 犯罪 · 被捕"/>
    <Section1/>
    <TransitionTitModel title="Section 2 ------ 无罪 · 释放" img="https://i.picsum.photos/id/259/1920/1080.jpg?hmac=RmHN8ym4tZhmK-UVfTcsLcYAqT7-PKtmdg0Br5c_8oQ"/>
    <Section2/>
    <TransitionTitModel title="Section 3 ------ 真相 · 浮现" img="https://i.picsum.photos/id/817/1920/1080.jpg?hmac=wqRydOTGCxzS-J0HUP0aiZvW1DMMYeylQOzNDT5Dibk"/>
    <Section3/>
    <TransitionTitModel title="Section 4 ------ 灵魂 · 容器" :img="transition" scrollY="-400"/>
    <Section4/>
    <TransitionTitModel title="Section 5 ------ 天才 · 分裂" img="https://i.picsum.photos/id/555/1920/1080.jpg?hmac=mCn0SEGN_8aAzxavHsBHSKCj1fo_yV2Cc9EGXDZoSfI"/>
    <Section5/>
    <TransitionTitModel title="Section 6 ------ Jinx · jinx" img="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f6cc5a090f5ca801204a0ec5ea12.jpg%403000w_1l_0o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642558292&t=02be37146c17b1d2251d6157f52bba2f"/>
    <Jinx/>
  </div>
</template>

<script>
import BannerTop from "../components/HomePage/BannerTop";
import TransitionTitModel from "../components/commonModels/TransitionTitModel";
import Section1 from "../components/HomePage/Section1";
import Section2 from "../components/HomePage/Section2";
import Section3 from "../components/HomePage/Section3";
import Section4 from "../components/HomePage/Section4";
import Section5 from "../components/HomePage/Section5";
import Jinx from "../components/HomePage/Jinx";
import transition from "../assets/img/Billy/transition.png"

export default {
  name: 'IndexPage',
  components:{
    TransitionTitModel,
    BannerTop,
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Jinx,
  },
  data:()=>({
    transition
  }),

}
</script>

<style>
body{ background: #222; color: #ffffff;}
</style>
