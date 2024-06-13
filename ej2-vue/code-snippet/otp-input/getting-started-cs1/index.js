import Vue from 'vue';
import { OTPInputPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(OTPInputPlugin);

new Vue({
	el: '#app',
	template: `
    <div id='container'>
        <ejs-otpinput id="otpinput"></ejs-otpinput>
    </div>
`,

});