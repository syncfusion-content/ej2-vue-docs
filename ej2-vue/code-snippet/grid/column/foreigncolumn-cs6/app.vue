<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true'  height='260px' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
               <e-column field='EmployeeID' headerText='Employee Name' :dataSource='employeeData' foreignKeyValue='FirstName' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2' width=80></e-column>
                 <e-column field='ShipCity' headerText='Ship City' width=130></e-column>
            </e-columns>
             <e-aggregates>
              <e-aggregate>
                <e-columns>
                    <e-column field="EmployeeID" type="Custom" :customAggregate='customAggregateFn' :footerTemplate='footerTemplate'></e-column>
                </e-columns>
             </e-aggregate>
          </e-aggregates>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, AggregateDirective as EAggregate, AggregatesDirective as EAggregates, Aggregate ,ForeignKey, Filter } from "@syncfusion/ej2-vue-grids";
import { getValue } from "@syncfusion/ej2-base";
import { getForeignData } from "@syncfusion/ej2-grids";
import { data, employeeData } from './datasource.js';
import { createApp } from "vue";
const app = createApp();
const grid = ref(null);
      const employeeData = employeeData;
      const footerTemplate = function () {
        return {
          template: app.component('customTemplate', {
            template: `<span>Count of Margaret:  </span>`,
            data() { return { data: { data: {} } }; }
          })
        }
      }
      const customAggregateFn = function (data, column) {
      return data.result.filter((obj) => {
        return getValue('FirstName', getForeignData(grid.value.getColumnByField(column.field), obj)[0]) === 'Margaret';
      }).length;
    }
      provide('grid',  [Aggregate, ForeignKey, Filter]);
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>