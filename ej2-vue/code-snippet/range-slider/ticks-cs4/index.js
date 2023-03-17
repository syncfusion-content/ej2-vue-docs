
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-slider id='minmax' :value='value' :tooltip="tooltip" :ticks="ticks" :min="min" :max="max"></ejs-slider>
  </div>
`,

  data() {
    return {
      ticks: { placement: 'After', largeStep: 200, smallStep: 100, showSmallTicks: true },
        tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
        // Minimum value
        min: 100,
        // Maximum value
        max: 1100,
        // Slider current value
        value: 400
    };
  }

});