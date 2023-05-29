

<template>
<ul>
<li><ejs-radiobutton label='Option 1' name='default' enableRtl="true"></ejs-radiobutton></li>
<li><ejs-radiobutton label='Option 2' name='default' enableRtl="true" checked=true></ejs-radiobutton></li>
</ul>
</template>

<script>
import Vue from 'vue';
import { RadioButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
Vue.use(RadioButtonPlugin);

export default {}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";

.e-radio-wrapper {
  margin-top: 18px;
}

li {
  list-style: none;
}
</style>


