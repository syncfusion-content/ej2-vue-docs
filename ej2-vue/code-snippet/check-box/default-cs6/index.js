
import Vue from 'vue';
import { CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(CheckBoxPlugin);


new Vue({
	el: '#app',
	template: `
<ul>
<li><ejs-checkbox label='Buy Groceries' cssClass='e-checkicon' checked=true></ejs-checkbox></li>
<li><ejs-checkbox label='Pay Rent' cssClass='e-checkicon'></ejs-checkbox></li>
<li><ejs-checkbox label='Make Dinner' cssClass='e-checkicon'></ejs-checkbox></li>
<li><ejs-checkbox label='Finish To-do List Article' cssClass='e-checkicon'></ejs-checkbox></li>
</ul>
`,

});