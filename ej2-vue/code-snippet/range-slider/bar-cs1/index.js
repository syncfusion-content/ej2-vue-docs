
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
    <div class="col-lg-12 control-section">
      <div class="slider-content-wrapper">
        <div class="slider_container">
          <div class="slider-labeltext slider_userselect">Height</div>
          <!-- Square slider element -->
          <ejs-slider id="height_slider" value="30" min="0" max="100"></ejs-slider>
        </div>
        <div class="slider_container">
          <div class="slider-labeltext slider_userselect">Gradient color</div>
          <ejs-slider id="gradient_slider" min="0" max="100" value="30" type="MinRange"></ejs-slider>
        </div>
        <div class="slider_container">
          <div class="slider-labeltext slider_userselect">Dynamic thumb and selection bar color</div>
          <ejs-slider
            id="dynamic_color_slider"
            min="0"
            max="100"
            value="30"
            type="MinRange"
            v-on:created="onCreated"
            v-on:change="onChange"
          ></ejs-slider>
        </div>
      </div>
    </div>
  </div>
`,

  data: function() {
    return {};
  },
  methods: {
    onCreated(args) {
      let sliderTrack = document
        .getElementById("dynamic_color_slider")
        .querySelector(".e-range");
      let sliderHandle = document
        .getElementById("dynamic_color_slider")
        .querySelector(".e-handle");
      sliderHandle.style.backgroundColor = "green";
      sliderTrack.style.backgroundColor = "green";
    },
    onChange(args) {
      let sliderTrack = document
        .getElementById("dynamic_color_slider")
        .querySelector(".e-range");
      let sliderHandle = document
        .getElementById("dynamic_color_slider")
        .querySelector(".e-handle");
      if (args.value > 0 && args.value <= 25) {
        // Change handle and range bar color to green when
        sliderHandle.style.backgroundColor = "green";
        sliderTrack.style.backgroundColor = "green";
      } else if (args.value > 25 && args.value <= 50) {
        // Change handle and range bar color to royal blue
        sliderHandle.style.backgroundColor = "royalblue";
        sliderTrack.style.backgroundColor = "royalblue";
      } else if (args.value > 50 && args.value <= 75) {
        // Change handle and range bar color to dark orange
        sliderHandle.style.backgroundColor = "darkorange";
        sliderTrack.style.backgroundColor = "darkorange";
      } else if (args.value > 75 && args.value <= 100) {
        // Change handle and range bar color to red
        sliderHandle.style.backgroundColor = "red";
        sliderTrack.style.backgroundColor = "red";
      }
    }
  }

});