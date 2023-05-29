
import Vue from 'vue';
import { CheckBoxPlugin, ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(CheckBoxPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
<form>
<ul>
<li><ejs-checkbox name='Sport' value='Cricket' label='Cricket' checked=true></ejs-checkbox></li>
<li><ejs-checkbox name='Sport' value='Hockey' label='Hockey' checked=true></ejs-checkbox></li>
<li><ejs-checkbox name='Sport' value='Tennis' label='Tennis' disabled=true></ejs-checkbox></li>
<li><ejs-checkbox name='Sport' value='Basketball' label='Basketball'></ejs-checkbox></li>
<li><ejs-button isPrimary=true>Submit</ejs-button></li>
</ul>
</form>
`,

});