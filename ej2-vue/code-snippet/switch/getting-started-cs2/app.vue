

<template>
  <ejs-switch checked=true></ejs-switch>
</template>

<script>
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

export default {
  components: {
    'ejs-switch': SwitchComponent
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";

.e-switch-wrapper {
  margin: 18px;
}
</style>


