<template>
  <ejs-switch checked=true></ejs-switch>
</template>

<script setup>
import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/switch/index.css";
.e-switch-wrapper {
  margin: 18px;
}
</style>