
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);
import { enableRipple } from "@syncfusion/ej2-base";
enableRipple(true);
;
new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id="container">
      <div class="col-lg-12 control-section">
        <div class="slider-content-wrapper">
          <div class="slider_container" id="slider_wrapper">
            <div class="slider_labelText userselect">Dynamic ticks color</div>
            <!-- Ticks slider element -->
            <ejs-slider
              id="ticks_slider"
              min="0"
              max="100"
              value="30"
              step="5"
              type="MinRange"
              :ticks="ticks"
              v-on:renderingTicks="onRenderingTicks"
            ></ejs-slider>
          </div>
          <div class="slider_container">
            <div class="slider_labelText userselect">Ticks with legends</div>
            <!-- Ticks slider element -->
            <ejs-slider
              id="slider"
              min="0"
              max="100"
              value="30"
              type="MinRange"
              :ticks="rangeTicks"
              v-on:renderedTicks="onRangeTicks"
            ></ejs-slider>
          </div>
        </div>
      </div>
    </div>
  </div>
`,

  data: function() {
    return {
      ticks: { placement: "Before", largeStep: 20 },
      rangeTicks: { placement: "Both", largeStep: 20, smallStep: 5 }
    };
  },

  methods: {
    onRenderingTicks(args) {
      if (args.tickElement.classList.contains("e-large")) {
        args.tickElement.classList.add("e-custom");
      }
    },
    onRangeTicks(args) {
      let li = args.ticksWrapper.getElementsByClassName("e-large");
      let remarks = [
        "Very Poor",
        "Poor",
        "Average",
        "Good",
        "Very Good",
        "Excellent"
      ];
      for (let i = 0; i < li.length; ++i) {
        li[i].querySelectorAll(".e-tick-both")[1].innerText = remarks[i];
      }
    }
  }

});