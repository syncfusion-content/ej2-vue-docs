<template>
  <div>
    <ejs-breadcrumb :enableNavigation='false' cssClass="e-specific-item-template" :itemTemplate="specificItemTemplate">
      <e-breadcrumb-items>
        <e-breadcrumb-item text='Home' url='https://ej2.syncfusion.com/vue/demos/'></e-breadcrumb-item>
        <e-breadcrumb-item text='Components'
          url='https://ej2.syncfusion.com/vue/demos/datagrid/overview'></e-breadcrumb-item>
        <e-breadcrumb-item text='Navigations'
          url='https://ej2.syncfusion.com/vue/demos/menu/default'></e-breadcrumb-item>
        <e-breadcrumb-item text='Breadcrumb'
          url='https://ej2.syncfusion.com/vue/demos/breadcrumb/default'></e-breadcrumb-item>
      </e-breadcrumb-items>
    </ejs-breadcrumb>
  </div>
</template>

<script setup>

import { BreadcrumbComponent as EjsBreadcrumb, BreadcrumbItemDirective as EBreadcrumbItem, BreadcrumbItemsDirective as EBreadcrumbItems } from "@syncfusion/ej2-vue-navigations";
import { createApp } from 'vue';

const specificItemTemplate = () => {
  return {
    template: createApp().component('specificItemTemplate', {
      template: `<div>
                <span v-if="data.text == 'Breadcrumb'" class="e-searchfor-text"><span style="margin-right: 5px">Search for:</span>
                <a class="e-breadcrumb-text" :href="data.url" onclick="return false">{{data.text}}</a></span>
                <a v-else class="e-breadcrumb-text" :href="data.url" onclick="return false">{{data.text}}</a>
                </div>`,
      data() { return {} }
    })
  }
};

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.csss";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.csss";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.csss";

body {
  margin-top: 100px;
  text-align: center;
}
</style>