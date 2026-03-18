<template>
  <div>
    <ejs-breadcrumb :enableNavigation='false'
      url="https://ej2.syncfusion.com/demos/breadcrumb/bind-to-location"></ejs-breadcrumb>
  </div>
</template>

<script>

import { BreadcrumbComponent } from "@syncfusion/ej2-vue-navigations";

export default {
  name: "App",
  components: {
    "ejs-breadcrumb": BreadcrumbComponent
  },
  data: function () {
    return {};
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";

body {
  margin-top: 100px;
  text-align: center;
}
</style>