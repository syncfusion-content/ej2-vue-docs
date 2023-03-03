
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-slider id='ticks' :value='value' :tooltip="tooltip" :ticks="ticks"></ejs-slider>
  </div>
`,

  data() {
    return {
       tooltip: { placement: 'Before', isVisible: true, showOn: 'Always' },
        value: 30,
        // Slider ticks customization
        ticks: { placement: 'After', largeStep: 20, smallStep: 10, showSmallTicks: true }
    };
  }

});