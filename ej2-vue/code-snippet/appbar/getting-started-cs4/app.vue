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

<script>

import { AppBarComponent, MenuComponent } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  name: "App",
  components: {
    "ejs-appbar": AppBarComponent,
    "ejs-button": ButtonComponent,
    "ejs-menu": MenuComponent
  },
  data: function () {
    return {
      companyMenuItems: [
        {
          text: 'Company',
          items: [
            { text: 'About Us' },
            { text: 'Customers' },
            { text: 'Blog' },
            { text: 'Careers' }
          ]
        }
      ],
      productMenuItems: [
        {
          text: 'Products',
          items: [
            { text: 'Developer' },
            { text: 'Analytics' },
            { text: 'Reporting' },
            { text: 'Help Desk' }
          ]
        }
      ],
      aboutMenuItems: [
        {
          text: 'About Us'
        }
      ],
      carrerMenuItems: [
        {
          text: 'Carrers'
        }
      ]
    };
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