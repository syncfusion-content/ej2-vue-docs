import Vue from 'vue';
import { OtpInputPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(OtpInputPlugin);

new Vue({
	el: '#app',
	template: `
    <div id='container'>
        <ejs-otpinput id="otpinput"></ejs-otpinput>
    </div>
`,

});