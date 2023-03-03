

<template>
<div>
<ejs-breadcrumb :enableNavigation='false'>
  <e-breadcrumb-items>
    <e-breadcrumb-item iconCss= 'e-svg-home' url= 'https://ej2.syncfusion.com/vue/demos/'></e-breadcrumb-item>
    <e-breadcrumb-item text= 'Components' url= 'https://ej2.syncfusion.com/vue/demos/datagrid/overview'></e-breadcrumb-item>
    <e-breadcrumb-item text= 'Navigations' url= 'https://ej2.syncfusion.com/vue/demos/menu/default'></e-breadcrumb-item>
    <e-breadcrumb-item text= 'Breadcrumb' url= 'https://ej2.syncfusion.com/vue/demos/breadcrumb/default'></e-breadcrumb-item>
  </e-breadcrumb-items>
</ejs-breadcrumb>
</div>
</template>

<script>
import Vue from 'vue';
import { BreadcrumbPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(BreadcrumbPlugin);

export default {
  data: function() {
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

.e-svg-home {
  background-image: url('home.svg');
  height: 20px;
  width: 20px;
}
</style>


