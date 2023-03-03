

<template>
  <div class="control-container">
    <ejs-appbar colorMode="Primary">
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-menu"></ejs-button>
      <ejs-dropdownbutton cssClass="e-inherit" :items="productDropDownButtonItems">Products</ejs-dropdownbutton>
      <div class="e-appbar-spacer"></div>
      <ejs-button cssClass="e-inherit">Login</ejs-button>
    </ejs-appbar>
  </div>
</template>

<script>
  import Vue from "vue";
  import { AppBarPlugin } from "@syncfusion/ej2-vue-navigations";
  import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";
  import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

  Vue.use(AppBarPlugin);
  Vue.use(DropDownButtonPlugin);
  Vue.use(ButtonPlugin);

  export default {
    data: function () {
      return {
        productDropDownButtonItems: [
          { text: 'Developer' },
          { text: 'Analytics' },
          { text: 'Reporting' },
          { text: 'E-Signature' },
          { text: 'Help Desk' }
        ]
      };
    }
  };
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";

  .control-container .e-btn.e-inherit {
    margin: 0 3px;
  }
</style>


