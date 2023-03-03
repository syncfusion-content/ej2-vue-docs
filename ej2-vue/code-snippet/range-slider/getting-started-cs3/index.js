
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-slider id='orientation' :value='value' :orientation="orientation"></ejs-slider>
  </div>
`,

  data() {
    return {
        // vertical orientation
        orientation: 'Vertical',
        value: 30
    };
  }

});