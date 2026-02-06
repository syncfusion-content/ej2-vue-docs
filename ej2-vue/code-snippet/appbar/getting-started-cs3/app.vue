<template>
  <div class="control-container">
    <ejs-appbar colorMode="Primary">
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-menu"></ejs-button>
      <ejs-button cssClass="e-inherit">Home</ejs-button>
      <ejs-button cssClass="e-inherit">About</ejs-button>
      <ejs-button cssClass="e-inherit">Products</ejs-button>
      <ejs-button cssClass="e-inherit">Contacts</ejs-button>
      <div class="e-appbar-spacer"></div>
      <div class="e-appbar-separator"></div>
      <ejs-button cssClass="e-inherit">Login</ejs-button>
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
@import "../node_modules/@syncfusion/ej2-base/styles/material3.csss";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.csss";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.csss";

.control-container .e-btn.e-inherit {
  margin: 0 3px;
}

@media screen and (max-width: 1024px) {
  .control-container .e-appbar {
    flex-flow: row wrap;
    height: auto;
    gap: 8px;
  }

  .control-container {
    width: 350px;
  }
}

@media screen and (max-width: 480px) {
  .control-container {
    width: 200px;
    margin: 0 2px;
  }
}
</style>