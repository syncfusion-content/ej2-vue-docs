
import Vue from 'vue';
import { OTPInputPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(OTPInputPlugin);


new Vue({
	el: '#app',
	template: `
    <div class='wrap'>
        <ejs-otpinput id="custom_otp" value="1234" cssClass="e-success"></ejs-otpinput>
    </div>
`,

});