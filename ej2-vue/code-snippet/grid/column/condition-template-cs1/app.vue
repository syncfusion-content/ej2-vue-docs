

<template>
    <div id="app">
         <ejs-grid :dataSource="data" height=310>
            <e-columns>
                <e-column headerText='Discontinued' width='150' textAlign='Center' :template='cTemplate'></e-column>
                <e-column field='ProductID' headerText='Product ID' width='125'></e-column>
                <e-column field='ProductName' headerText='Name' width='120'></e-column>
                <e-column field='SupplierID' headerText='Supplier ID' width='170'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { productData } from "./datasource.js";

Vue.use(GridPlugin);

export default {
  data: () => {
    return {
      data: productData,
      cTemplate: function () {
          return { template : Vue.component('columnTemplate',{
             template: `<div v-if=cData class="template_checkbox">
                    <input type="checkbox" checked />
                </div>
                <div v-else class="template_checkbox">
                    <input type="checkbox" />
                </div>`,
                data: function() {
                    return {
                        data: {}
                    }
                },
                computed: {
                    cData: function() {
                        return this.data.Discontinued;
                    }
                }
          })}
      }
    };
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


