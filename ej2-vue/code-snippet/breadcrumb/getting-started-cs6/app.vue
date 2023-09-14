

<template>
<div>
<ejs-breadcrumb :enableNavigation='false'>
    <e-breadcrumb-items>
        <e-breadcrumb-item iconCss= 'e-icons e-home' url= 'https://ej2.syncfusion.com/vue/demos/'></e-breadcrumb-item>
        <e-breadcrumb-item text= 'Components' url= 'https://ej2.syncfusion.com/vue/demos/datagrid/overview'></e-breadcrumb-item>
        <e-breadcrumb-item text= 'Navigations' url= 'https://ej2.syncfusion.com/vue/demos/menu/default'></e-breadcrumb-item>
        <e-breadcrumb-item text= 'Breadcrumb' url= 'https://ej2.syncfusion.com/vue/demos/breadcrumb/default'></e-breadcrumb-item>
    </e-breadcrumb-items>
</ejs-breadcrumb>
</div>
</template>

<script>
import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from "@syncfusion/ej2-vue-navigations";

export default {
  components: {
    'ejs-breadcrumb': BreadcrumbComponent,
    'e-breadcrumb-item': BreadcrumbItemDirective,
    'e-breadcrumb-items': BreadcrumbItemsDirective
  },
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
</style>


