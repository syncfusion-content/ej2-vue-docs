
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-slider id='steps' :value='value' :tooltip="tooltip" :ticks="ticks" :step="step"></ejs-slider>
  </div>
`,

  data() {
    return {
      ticks: { placement: 'After', largeStep: 20, smallStep: 10, showSmallTicks: true },
        tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
        value: 30,
        // Enables step
        step: 10
    };
  }

});