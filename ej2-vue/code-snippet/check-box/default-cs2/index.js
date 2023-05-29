
import Vue from 'vue';
import { CheckBoxPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(CheckBoxPlugin);


new Vue({
	el: '#app',
	template: `
<ejs-checkbox label='Default'></ejs-checkbox>
`,

});