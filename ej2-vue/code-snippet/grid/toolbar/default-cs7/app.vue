

<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :toolbar='toolbar' :created='created' height='175px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' :isPrimaryKey='true' :validationRules='orderIDRules' width='120'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' type='string' width='140'>
                </e-column>
                <e-column field='Freight' headerText='Freight' type='number' textAlign='Right' format='C2' width='120'></e-column>
                <e-column field='OrderDate' headerText='OrderDate' type='date' textAlign='Right' format='yMd' width='140'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Toolbar } from "@syncfusion/ej2-vue-grids";
import { tbdata } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: tbdata.slice(0, 8),
      toolbar: ['Print', 'Search'],
      orderIDRules: { required: true },
    };
  },
  methods: {
    created: function () {
      let toolbar = this.$refs.grid.ej2Instances.element.querySelector(".e-toolbar");
      this.$refs.grid.ej2Instances.element.appendChild(toolbar);
    }
  },
  provide: {
    grid: [Toolbar]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>



