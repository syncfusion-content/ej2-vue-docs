<template>
  <div class="control-container">
    <ejs-appbar>
      <a href="https://www.syncfusion.com/vue-components" target="_blank" rel="noopener" role="link"
        aria-label="Syncfusion vue controls">
        <div class="syncfusion-logo"></div>
      </a>
      <div class="e-appbar-spacer"></div>
      <ejs-button :isPrimary="true">FREE TRIAL</ejs-button>
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

.control-container .syncfusion-logo {
  background: url(https://cdn.syncfusion.com/blazor/images/demos/syncfusion-logo.svg);
  background-size: contain;
  background-repeat: no-repeat;
  height: 30px;
  width: 150px;
}
</style>