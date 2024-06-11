<template>
  <ejs-switch ref="toggleSwitch" checked=true :created="created"></ejs-switch>
</template>

<script setup>

import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
const created = (args) => {
  this.$refs.toggleSwitch.toggle();
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/fabric.css";

.e-switch-wrapper {
  margin: 18px;
}
</style>