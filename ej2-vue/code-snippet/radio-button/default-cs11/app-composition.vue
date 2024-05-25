<template>
  <div>
    <div id="wrapper1">
      <ejs-switch v-model="value" :checked="value"></ejs-switch>
    </div>
    <div id="wrapper2">
      <ejs-switch v-model="value" :checked="value"></ejs-switch>
    </div>
  </div>
</template>

<script setup>

import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
const value = true;
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

.e-switch-wrapper {
  margin: 18px;
}

#wrapper1 {
  float: left;
  padding: 0 0 0 80px;
}

#wrapper2 {
  float: right;
  padding: 0 460px 0 0;
}
</style>