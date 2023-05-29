
import Vue from 'vue';
import { ColorPickerPlugin } from '@syncfusion/ej2-vue-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(ColorPickerPlugin);


new Vue({
	el: '#app',
	template: `
  <div class='wrap'>
    <h4>Choose Color</h4>
    <ejs-colorpicker></ejs-colorpicker>
  </div>
`,

});