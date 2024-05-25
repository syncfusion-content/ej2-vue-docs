<template>
  <ejs-switch ref="toggleSwitch" checked=true :created="created"></ejs-switch>
</template>

<script>

import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
export default {
  name: "App",
  components: {
    "ejs-switch": SwitchComponent
  },
  methods: {
    created: function (args) {
      this.$refs.toggleSwitch.toggle();
    }
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/fabric.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/fabric.css";

.e-switch-wrapper {
  margin: 18px;
}
</style>