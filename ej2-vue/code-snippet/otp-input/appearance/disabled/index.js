
import Vue from 'vue';
import { OTPInputPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(OTPInputPlugin);


new Vue({
	el: '#app',
	template: `
    <div class='wrap'>
        <ejs-otpinput id="otp_disabled" value="1234" disabled="true"></ejs-otpinput>
    </div>
`,

});