<template>
  <ul>
    <li>
      <div id="text">Selected: Option 1</div>
    </li>
    <li> <ejs-radiobutton label="Option 1" name="default" checked="true" :change="onChange"></ejs-radiobutton></li>
    <li> <ejs-radiobutton label="Option 2" name="default" disabled="true" :change="onChange"></ejs-radiobutton></li>
    <li> <ejs-radiobutton label="Option 3" name="default" :change="onChange"></ejs-radiobutton></li>
  </ul>
</template>

<script setup>

import { RadioButtonComponent as EjsRadiobutton } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
const onChange = function (args) {
  document.getElementById('text').innerText = 'Selected : ' + args.event.target.ej2_instances[0].label;
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
;

.e-radio-wrapper {
  margin-top: 18px;
}

li {
  list-style: none;
}

#text {
  font-size: 16px;
}
</style>