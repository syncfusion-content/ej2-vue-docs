
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-slider id='default' :value='value' :limits='limits' :tooltip='tooltip' :type='type'></ejs-slider>
  </div>
`,

  data() {
    return {
        value: 30,
        tooltip: { isVisible: true },
        limits: { enabled: true, minStart: 10, minEnd: 40 },
        type: 'MinRange'
    };
  }

});