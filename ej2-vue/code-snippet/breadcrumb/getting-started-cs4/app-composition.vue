<template>
  <div>
    <ejs-breadcrumb :enableNavigation='false' url="https://ej2.syncfusion.com/demos/breadcrumb/bind-to-location"
      :beforeItemRender="beforeItemRenderHandler">
    </ejs-breadcrumb>
  </div>
</template>

<script setup>

import { BreadcrumbComponent as EjsBreadcrumb } from "@syncfusion/ej2-vue-navigations";

const beforeItemRenderHandler = (args) => {
  if (args.item.text === 'bind-to-location') {
    args.item.text = 'location';
  }
}

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.csss";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.csss";

body {
  margin-top: 100px;
  text-align: center;
}
</style>