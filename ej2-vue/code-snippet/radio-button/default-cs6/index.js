
import Vue from 'vue';
import { RadioButtonPlugin, ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(RadioButtonPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
<form>
<ul>
<li> <ejs-radiobutton label="Credit/Debit Card" name="payment" value="credit/debit" checked="true"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Net Banking" name="payment" value="netbanking"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Cash on Delivery" name="payment" value="cashondelivery"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Others" name="payment" value="payment"></ejs-radiobutton></li>
<li> <ejs-button isPrimary="true" >Submit</ejs-button></li>
</ul>
</form>
`,

});