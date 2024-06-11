<template>
  <div>
    <ejs-breadcrumb maxItems='3' :enableNavigation='false' overflowMode="Menu">
      <e-breadcrumb-items>
        <e-breadcrumb-item text='Home' url='../'></e-breadcrumb-item>
        <e-breadcrumb-item text='Breadcrumb' url='./breadcrumb'></e-breadcrumb-item>
        <e-breadcrumb-item text='Default' url='./breadcrumb/default'></e-breadcrumb-item>
        <e-breadcrumb-item text='Icons' url='./breadcrumb/icons'></e-breadcrumb-item>
        <e-breadcrumb-item text='Navigations' url='./breadcrumb/navigations'></e-breadcrumb-item>
        <e-breadcrumb-item text='Overflow' url='./breadcrumb/overflow'></e-breadcrumb-item>
      </e-breadcrumb-items>
    </ejs-breadcrumb>
  </div>
</template>

<script>

import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from "@syncfusion/ej2-vue-navigations";

export default {
  name: "App",
  components: {
    "ejs-breadcrumb": BreadcrumbComponent,
    "e-breadcrumb-items": BreadcrumbItemsDirective,
    "e-breadcrumb-item": BreadcrumbItemDirective
  },

  data: function () {
    return {
    };
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";

body {
  margin-top: 100px;
  text-align: center;
}
</style>