

<template>
  <div class="control-container">
    <ejs-appbar colorMode="Primary">
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-cut"></ejs-button>
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-copy"></ejs-button>
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-paste"></ejs-button>
      <div class="e-appbar-separator"></div>
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-bold"></ejs-button>
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-underline"></ejs-button>
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-italic"></ejs-button>
      <div class="e-appbar-separator"></div>
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-align-left"></ejs-button>
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-align-right"></ejs-button>
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-align-center"></ejs-button>
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-justify"></ejs-button>
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

  .control-container .e-btn.e-inherit {
    margin: 0 3px;
  }
</style>


