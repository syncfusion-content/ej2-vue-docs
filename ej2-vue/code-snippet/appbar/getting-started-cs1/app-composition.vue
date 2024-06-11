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

<script setup>

import { AppBarComponent as EjsAppbar } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
</style>