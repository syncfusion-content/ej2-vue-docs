<template>
  <div>
    <div id="wrapper1">
      <ejs-checkbox label='Default' v-model="value" :checked="value"></ejs-checkbox>
    </div>
    <div id="wrapper2">
      <ejs-checkbox label='Default' v-model="value" :checked="value"></ejs-checkbox>
    </div>
  </div>
</template>

<script setup>

import { CheckBoxComponent as EjsCheckbox } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
const value = true;
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

.e-checkbox-wrapper {
  margin-top: 18px;
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