<template>
  <div class="split_text">
    <div class="label">Split Text</div>
  </div>
</template>

<script>

// import gsap from "gsap";
import SplitText from "../../assets/js/SplitText3.min"

export default {
  props:{

  },
  data(){
    return {
    }
  },
  mounted() {
    let splitPoem = new SplitText(".split_text .label", {
      type: "chars",
      charsClass: "char++"
    });
    console.log("split_text",splitPoem)
  }
}
</script>

<style>
.split_text{ background:#36b6fc }
</style>
