
import Vue from 'vue';
import { RadioButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(RadioButtonPlugin);


new Vue({
	el: '#app',
	template: `
<ul>
<li> <ejs-radiobutton label="Small" name="size" checked="true" cssClass="e-small"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Default" name="size"></ejs-radiobutton></li>
</ul>
`,

});