

<template>
  <ejs-appbar colorMode="Primary">
    <ejs-button cssClass="e-inherit" iconCss="e-icons e-menu"></ejs-button>
    <span class="regular" style="margin:0 5px">Vue AppBar</span>
    <div class="e-appbar-spacer"></div>
    <ejs-button cssClass="e-inherit">FREE TRIAL</ejs-button>
  </ejs-appbar>
</template>

<script>
  import { AppBarComponent  } from "@syncfusion/ej2-vue-navigations";
  import { ButtonComponent  } from "@syncfusion/ej2-vue-buttons";

  export default {
    components: {
      'ejs-appbar': AppBarComponent,
      'ejs-button': ButtonComponent
    },
    data: function () {
      return {};
    },
  };
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
</style>


