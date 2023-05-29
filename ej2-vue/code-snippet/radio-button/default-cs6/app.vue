

<template>
<form>
<ul>
<li> <ejs-radiobutton label="Credit/Debit Card" name="payment" value="credit/debit" checked="true"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Net Banking" name="payment" value="netbanking"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Cash on Delivery" name="payment" value="cashondelivery"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Others" name="payment" value="payment"></ejs-radiobutton></li>
<li> <ejs-button isPrimary="true" >Submit</ejs-button></li>
</ul>
</form>
</template>

<script>
import Vue from 'vue';
import { RadioButtonPlugin, ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(RadioButtonPlugin);
Vue.use(ButtonPlugin);

export default {}
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

.e-radio-wrapper {
  margin-top: 18px;
}

button {
  margin: 20px 0 0 5px;
}

li {
  list-style: none;
}
</style>


