
import Vue from 'vue';
import { OtpInputPlugin } from "@syncfusion/ej2-vue-inputs";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
Vue.use(OtpInputPlugin);


new Vue({
	el: '#app',
	template: `
    <div class='wrap'>
        <ejs-otpinput id="otp_input" value="1234" :htmlAttributes="htmlAttributes"></ejs-otpinput>
    </div>
`,
    data: function() {
        return { 
            htmlAttributes: { title : 'One-Time Password' }
        }
    }
});