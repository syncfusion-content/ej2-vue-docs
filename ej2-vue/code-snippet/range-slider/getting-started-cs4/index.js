
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-slider id='tooltip' :value='value' :tooltip="tooltip" :type="type"></ejs-slider>
  </div>
`,

  data() {
    return {
        // Slider tooltip
        tooltip: { placement: 'After', isVisible: true, showOn: 'Always' },
        value: 30,
        type: 'MinRange'
    };
  }

});