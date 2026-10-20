<template>
  <ejs-switch enableRtl=true></ejs-switch>
</template>

<script>

import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
export default {
  name: "App",
  components: {
    "ejs-switch": SwitchComponent
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/switch/index.css";
.e-switch-wrapper {
  margin: 18px;
}
</style>