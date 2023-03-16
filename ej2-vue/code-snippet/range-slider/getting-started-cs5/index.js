
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-slider id='buttons' :value='value' :showButtons="showButtons" :type="type"></ejs-slider>
  </div>
`,

  data() {
    return {
        // Enable the button option in Slider
        showButtons: true,
        value: [30, 70],
        type: 'Range'
    };
  }

});