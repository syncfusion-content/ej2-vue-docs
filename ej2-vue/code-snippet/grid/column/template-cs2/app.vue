

<template>
    <div id="app">
         <ejs-grid ref="grid" :dataSource="data" height=315 :recordClick = 'recordClick'>
            <e-columns>
                <e-column headerText='Employee Data' width='150' textAlign='Right' :template='cTemplate' isPrimaryKey='true'></e-column>
                <e-column field='EmployeeID' headerText='Employee ID' width='130' textAlign='Right'></e-column>
                <e-column field='FirstName' headerText='Name' width='120'></e-column>
                <e-column field='Title' headerText='Title' width='170'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, RecordClickEventArgs } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
import { closest } from '@syncfusion/ej2-base';

Vue.use(GridPlugin);

export default {
  data: () => {
    return {
      data: employeeData,
      cTemplate: function () {
          return { template : Vue.component('columnTemplate',{
             template: `<div class="image">
                     <button class="empData">Employee Data</button>
                </div>`
          })}
      }
    };
  },
  methods: {
    recordClick(args) {
        if (args.target.classList.contains('empData')) {
            var rowObj = this.$refs.grid.ej2Instances.getRowObjectFromUID(closest(args.target, '.e-row').getAttribute('data-uid')
            );
            console.log(rowObj);
        }
    }
  },
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


