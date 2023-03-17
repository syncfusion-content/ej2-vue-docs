
import Vue from 'vue';
import { CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(CheckBoxPlugin);


new Vue({
	el: '#app',
	template: `
<ul>
<li><ejs-checkbox label='Left Side Label' labelPosition='Before'></ejs-checkbox></li>
<li><ejs-checkbox label='Right Side Label' checked=true></ejs-checkbox></li>
</ul>
`,

});