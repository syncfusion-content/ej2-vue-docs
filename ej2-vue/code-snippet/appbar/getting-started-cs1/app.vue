<template>
  <div class="control-container">
    <ejs-appbar colorMode="Primary">
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-home"></ejs-button>
      <div class="e-appbar-spacer"></div>
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-cut"></ejs-button>
      <div class="e-appbar-spacer"></div>
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-pan"></ejs-button>
    </ejs-appbar>
  </div>
</template>

<script>

import { AppBarComponent } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  name: "App",
  components: {
    "ejs-appbar": AppBarComponent,
    "ejs-button": ButtonComponent
  },
  data: function () {
    return {};
  }
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
</style>