
import Vue from 'vue';
import { RadioButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(RadioButtonPlugin);


new Vue({
	el: '#app',
	template: `
<ul>
<li> <ejs-radiobutton label="Left Side Label" name="position" labelPosition="Before"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Right Side Label" name="position" checked="true"></ejs-radiobutton></li>
</ul>
`,

});