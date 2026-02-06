<template>
  <div class="control-container">
    <ejs-appbar colorMode="Primary">
      <ejs-button cssClass="e-inherit" iconCss="e-icons e-menu"></ejs-button>
      <ejs-menu cssClass="e-inherit" :items="companyMenuItems"></ejs-menu>
      <ejs-menu cssClass="e-inherit" :items="productMenuItems"></ejs-menu>
      <ejs-menu cssClass="e-inherit" :items="aboutMenuItems"></ejs-menu>
      <ejs-menu cssClass="e-inherit" :items="carrerMenuItems"></ejs-menu>
      <div class="e-appbar-spacer"></div>
      <ejs-button cssClass="e-inherit">Login</ejs-button>
    </ejs-appbar>
  </div>
</template>

<script setup>

import { AppBarComponent as EjsAppbar, MenuComponent as EjsMenu } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

const companyMenuItems = [
  {
    text: 'Company',
    items: [
      { text: 'About Us' },
      { text: 'Customers' },
      { text: 'Blog' },
      { text: 'Careers' }
    ]
  }
];
const productMenuItems = [
  {
    text: 'Products',
    items: [
      { text: 'Developer' },
      { text: 'Analytics' },
      { text: 'Reporting' },
      { text: 'Help Desk' }
    ]
  }
];
const aboutMenuItems = [
  {
    text: 'About Us'
  }
];
const carrerMenuItems = [
  {
    text: 'Carrers'
  }
];

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.csss";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.csss";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.csss";

.control-container .e-btn.e-inherit {
  margin: 0 3px;
}
</style>