

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
  import Vue from "vue";
  import { AppBarPlugin  } from "@syncfusion/ej2-vue-navigations";
  import { ButtonPlugin  } from "@syncfusion/ej2-vue-buttons";

  Vue.use(AppBarPlugin);
  Vue.use(ButtonPlugin);

  export default {
    data: function () {
      return {};
    }
  };
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
</style>


