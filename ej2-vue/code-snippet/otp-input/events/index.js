
import Vue from 'vue';
import { OtpInputPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(OtpInputPlugin);


new Vue({
	el: '#app',
	template: `
    <div class='wrap'>
        <ejs-otpinput id="otp_input" :valueChanged="valueChanged"></ejs-otpinput>
    </div>
`,
    methods: {
        valueChanged : function(args) {
            alert("Entered OTP value:" + args.value);
        }
    }

});