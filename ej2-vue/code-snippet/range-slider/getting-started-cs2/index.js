
import Vue from "vue";
import { SliderPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(SliderPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
     <label class="labeltext">Default</label>
     <ejs-slider id='default' :value='minvalue'></ejs-slider>
      <label class="labeltext">MinRange</label>
      <ejs-slider id='default' :value='minvalue' :type="mintype"></ejs-slider>
     <label class="labeltext">Range</label>
    <ejs-slider id='type' :value='value' :type="type"></ejs-slider>
  </div>
`,

  data() {
    return {
       value: [30, 70],
       type: 'Range',
       mintype: 'MinRange',
       minvalue: 30
    };
  }

});