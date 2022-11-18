import 'lodash'
import {
  gsap,
  Draggable,
  CSSRulePlugin,
  EaselPlugin,
  EasePack,
  MotionPathPlugin,
  PixiPlugin,
  ScrollToPlugin,
  ScrollTrigger,
  TextPlugin,
} from "gsap/all";
import MorphSVGPlugin from "../assets/js/MorphSVGPlugin3.min";
import DrawSVGPlugin from "../assets/js/DrawSVGPlugin3.min";
import Physics2DPlugin from "../assets/js/Physics2DPlugin3.min";
import MotionPathHelper from "../assets/js/MotionPathHelper.min";


gsap.registerPlugin(Draggable)
gsap.registerPlugin(CSSRulePlugin)
gsap.registerPlugin(EaselPlugin)
gsap.registerPlugin(EasePack)
gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(PixiPlugin)
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

gsap.registerPlugin(MorphSVGPlugin)
gsap.registerPlugin(DrawSVGPlugin)
gsap.registerPlugin(Physics2DPlugin)
gsap.registerPlugin(MotionPathHelper)
