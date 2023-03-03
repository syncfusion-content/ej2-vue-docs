
import Vue from 'vue';
import { SignaturePlugin } from '@syncfusion/ej2-vue-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(SignaturePlugin);


new Vue({
	el: '#app',
	template: `
<div class='wrap'>
    <h4>Sign here</h4>
    <ejs-signature id="signature"></ejs-signature>
</div>
`,

});