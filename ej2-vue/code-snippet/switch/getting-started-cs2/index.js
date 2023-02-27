
import Vue from 'vue';
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SwitchPlugin);


new Vue({
	el: '#app',
	template: `
  <ejs-switch checked=true></ejs-switch>
`,

});