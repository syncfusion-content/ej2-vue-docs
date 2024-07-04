
import Vue from 'vue';
import { OtpInputPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(OtpInputPlugin);


new Vue({
	el: '#app',
	template: `
    <div class='wrap'>
        <ejs-otpinput id="number_otp" value="1234" type="number"></ejs-otpinput>
    </div>
`,

});