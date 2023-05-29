
import Vue from 'vue';
import { RadioButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(RadioButtonPlugin);


new Vue({
	el: '#app',
	template: `
<ul>
<li> <ejs-radiobutton label="Primary" name="custom" cssClass="e-primary"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Success" name="custom" cssClass="e-success"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Info" name="custom" cssClass="e-info" checked="true"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Warning" name="custom" cssClass="e-warning"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Danger" name="custom" cssClass="e-danger"></ejs-radiobutton></li>
</ul>
`,

});