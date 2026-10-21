<template>
<ul>
<li> <ejs-radiobutton label="Left Side Label" name="position" labelPosition="Before"></ejs-radiobutton></li>
<li> <ejs-radiobutton label="Right Side Label" name="position" checked="true"></ejs-radiobutton></li>
</ul>
</template>

<script setup>

import { RadioButtonComponent as EjsRadiobutton } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/radio-button/index.css";
.e-radio-wrapper {
  margin-top: 18px;
}

li {
  list-style: none;
}
</style>