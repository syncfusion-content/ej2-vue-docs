

<template>
<div>
<ejs-breadcrumb cssClass="e-breadcrumb-chips" :itemTemplate="chipTemplate">
  <e-breadcrumb-items>
    <e-breadcrumb-item text="Cart"></e-breadcrumb-item>
    <e-breadcrumb-item text="Billing"></e-breadcrumb-item>
    <e-breadcrumb-item text="Shipping"></e-breadcrumb-item>
    <e-breadcrumb-item text="Payment"></e-breadcrumb-item>
  </e-breadcrumb-items>
</ejs-breadcrumb>
</div>
</template>

<script>
import Vue from 'vue';
import { BreadcrumbPlugin } from "@syncfusion/ej2-vue-navigations";
import { ChipListPlugin  } from "@syncfusion/ej2-vue-buttons";
Vue.use(BreadcrumbPlugin);
Vue.use(ChipListPlugin);

export default {
  data: function() {
    return {
      chipTemplate:() => {
        return {
          template : Vue.component('itemTemplate', {
            template:
            `<ejs-chiplist id="chip-default">
              <e-chips>
                <e-chip :text="data.text"></e-chip>
               </e-chips>
            </ejs-chiplist>`
            }
          )
        }
      },
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


