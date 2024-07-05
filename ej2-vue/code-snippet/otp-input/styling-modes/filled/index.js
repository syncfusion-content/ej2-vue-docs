
import Vue from 'vue';
import { OtpInputPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(OtpInputPlugin);


new Vue({
	el: '#app',
	template: `
    <div class='wrap'>
        <ejs-otpinput id="otp_filled" stylingMode="filled"></ejs-otpinput>
    </div>
`,

});