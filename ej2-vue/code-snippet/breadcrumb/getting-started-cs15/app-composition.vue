<template>
  <div>
    <ejs-breadcrumb :enableNavigation='false'>
      <e-breadcrumb-items>
        <e-breadcrumb-item text='Home'
          url='https://ej2.syncfusion.com/documentation/breadcrumb/introduction'></e-breadcrumb-item>
        <e-breadcrumb-item text='Getting'
          url='https://ej2.syncfusion.com/documentation/breadcrumb/getting-started'></e-breadcrumb-item>
        <e-breadcrumb-item text='Icons'
          url='https://ej2.syncfusion.com/documentation/breadcrumb/icons'></e-breadcrumb-item>
        <e-breadcrumb-item text='Navigation'
          url='https://ej2.syncfusion.com/documentation/breadcrumb/navigation'></e-breadcrumb-item>
        <e-breadcrumb-item text='Overflow'
          url='https://ej2.syncfusion.com/documentation/breadcrumb/overflow'></e-breadcrumb-item>
      </e-breadcrumb-items>
    </ejs-breadcrumb>
  </div>
</template>

<script setup>

import { BreadcrumbComponent as EjsBreadcrumb, BreadcrumbItemDirective as EBreadcrumbItem, BreadcrumbItemsDirective as EBreadcrumbItems } from "@syncfusion/ej2-vue-navigations";

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

body {
  margin-top: 100px;
  text-align: center;
}
</style>