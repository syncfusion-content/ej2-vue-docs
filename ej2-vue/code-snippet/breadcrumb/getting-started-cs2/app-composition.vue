<template>
  <div>
    <ejs-breadcrumb :enableNavigation='false'></ejs-breadcrumb>
  </div>
</template>

<script setup>

import { BreadcrumbComponent as EjsBreadcrumb } from "@syncfusion/ej2-vue-navigations";

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

body {
  margin-top: 100px;
  text-align: center;
}
</style>