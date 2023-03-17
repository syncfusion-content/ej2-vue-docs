
import Vue from 'vue';
import { RadioButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(RadioButtonPlugin);


new Vue({
	el: '#app',
	template: `
<ul>
<li><ejs-radiobutton label='Option 1' name='default' checked=true></ejs-radiobutton></li>
<li><ejs-radiobutton label='Option 2' name='default'></ejs-radiobutton></li>
</ul>
`,

});