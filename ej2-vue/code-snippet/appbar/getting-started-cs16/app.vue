<template>
  <div class="control-container">
    <ejs-appbar colorMode="Primary" cssClass="custom-appbar">
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-home"></ejs-button>
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
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

.control-container .e-appbar.custom-appbar {
  background: #ff0000;
  color: #fff;
}
</style>