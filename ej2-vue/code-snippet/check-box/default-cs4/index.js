
import Vue from 'vue';
import { CheckBoxPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(CheckBoxPlugin);


new Vue({
	el: '#app',
	template: `
<ul>
<li><ejs-checkbox label='Primary' cssClass='e-primary' checked=true></ejs-checkbox></li>
<li><ejs-checkbox label='Success' cssClass='e-success' checked=true></ejs-checkbox></li>
<li><ejs-checkbox label='Info' cssClass='e-info' checked=true></ejs-checkbox></li>
<li><ejs-checkbox label='Warning' cssClass='e-warning' checked=true></ejs-checkbox></li>
<li><ejs-checkbox label='Danger' cssClass='e-danger' checked=true></ejs-checkbox></li>
</ul>
`,

});