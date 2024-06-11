<template>
  <ejs-switch disabled=true></ejs-switch>
</template>

<script>

import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  name: "App",
  components: {
    "ejs-switch": SwitchComponent
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/fabric.css";

.e-switch-wrapper {
  margin-top: 18px;
}
</style>