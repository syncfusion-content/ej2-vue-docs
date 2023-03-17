
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-slider id='api' :value='value' :min="min" :max="max" :step="step"
    :tooltip="tooltip" :ticks="ticks" ></ejs-slider>
  </div>
`,

  data() {
    return {
    min: 0, max: 1, value: 0.3, step: 0.01,
    // Assigning ticks values to percentage formatting
    ticks: { placement: 'After', largeStep: .2, smallStep: .1, showSmallTicks: true, format: 'P0' },
    // Assigning tooltip values to percentage formatting
    tooltip: { placement: 'Before', isVisible: true, showOn: 'Always', format: 'P0' }
  }
}

});