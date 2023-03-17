
import Vue from "vue";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container' class="e-bigger">
    <ejs-button>Button</ejs-button>
  </div>
`,



});