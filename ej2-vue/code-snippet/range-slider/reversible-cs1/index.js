
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-slider id='reverse' :orientation="orientation" :type="type" :min="max" :max="min" :tooltip="tooltip" :ticks="ticks" ></ejs-slider>
  </div>
`,

  data() {
    return {
      ticks: { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true },
      tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
      type: 'Range',
      // vertical orientation
      orientation: 'Vertical',
      // Set maximum value to min
      min: 100,
      // Set minimum value to max
      max: 0,
      // Slider current value
      value: [30, 70]        
    };
  }

});