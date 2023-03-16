
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div>Default Slider</div>
    <ejs-slider id='default' v-model='value'></ejs-slider>
      <div>Min Range Slider</div>
    <ejs-slider id='minRange' type='MinRange' v-model='value'></ejs-slider>
  </div>
`,

  data() {
    return {
        value: 30,
    };
  }

});