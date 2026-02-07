<template>
  <div>
    <ejs-breadcrumb maxItems='3' :enableNavigation='false' overflowMode="Scroll">
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

<script setup>

import { BreadcrumbComponent as EjsBreadcrumb, BreadcrumbItemDirective as EBreadcrumbItem, BreadcrumbItemsDirective as EBreadcrumbItems } from "@syncfusion/ej2-vue-navigations";


</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";

body {
  margin-top: 100px;
  text-align: center;
}
</style>