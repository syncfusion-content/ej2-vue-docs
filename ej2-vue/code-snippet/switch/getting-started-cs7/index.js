
import Vue from 'vue';
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(SwitchPlugin);


new Vue({
	el: '#app',
	template: `
  <ejs-switch disabled=true ></ejs-switch>
`,

});