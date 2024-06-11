<template>
    <div id="app">
        <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2'></e-column>
                <e-column field='OrderDate' headerText='Order Date' type='date' format= 'yMd' width=150 :editTemplate='editTemplate'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { DatePickerComponent } from "@syncfusion/ej2-vue-calendars";
import { createApp } from "vue";
const app = createApp();
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-datepicker":DatePickerComponent
},
  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
    };
  },
  methods: {
      editTemplate: function() {
          return {template: app.component('datePicker', {
              template: `<ejs-datepicker id="OrderDate" placeholder="Order Date" v-model="data.OrderDate" floatLabelType='Never'></ejs-datepicker>`,
              data() {
                  return {data:{}}
              }
          })}
      }
  },
  provide: {
    grid: [Page, Edit, Toolbar]
  }
}
</script>

<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>