
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-slider id='default' :value='value'></ejs-slider>
  </div>
`,

  data() {
    return {
      value: 30
    };
  }

});