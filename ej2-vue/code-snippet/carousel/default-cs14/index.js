
import Vue from "vue";
import { CarouselPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(CarouselPlugin);

var indicatorsVue = Vue.component("indicators", {
  template: `<div class="indicator"  indicator-index="{data.index}">
        <div class="preview-content">{{getContent(data.index)}}</div>
    </div>`,
  data() {
    return {};
  },
  computed: {},
  methods: {
    getContent: function (index) {
      var slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];
      return slides[index];
    },
  },
});

;
new Vue({
  el: '#app',
  template: `
  <div class="control-container">
    <ejs-carousel :indicatorsTemplate="indicatorsTemplate">
      <e-carousel-items>
        <e-carousel-item template="<div class='slide-content'>Slide 1</div>"></e-carousel-item>
        <e-carousel-item template="<div class='slide-content'>Slide 2</div>"></e-carousel-item>
        <e-carousel-item template="<div class='slide-content'>Slide 3</div>"></e-carousel-item>
        <e-carousel-item template="<div class='slide-content'>Slide 4</div>"></e-carousel-item>
        <e-carousel-item template="<div class='slide-content'>Slide 5</div>"></e-carousel-item>
      </e-carousel-items>
    </ejs-carousel>
  </div>
`,

  data: function () {
    return {
      indicatorsTemplate: function () {
        return {
          template: indicatorsVue,
        };
      },
    };
  },

});