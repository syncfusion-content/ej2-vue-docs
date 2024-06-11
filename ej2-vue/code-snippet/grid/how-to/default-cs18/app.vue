<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='ShipCountry' headerText='ShipCountry' editType='dropdownedit' :edit='countryParams' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { createElement } from '@syncfusion/ej2-base';
import { GridComponent, ColumnsDirective, ColumnDirective,Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { Query } from '@syncfusion/ej2-data';
import { cascadeData } from './datasource.js';
let country= [
        { countryName: 'United States', countryId: '1' },
        { countryName: 'Australia', countryId: '2' },
        { countryName: 'India', countryId: '3' }
    ];
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
    data: () => {
      return {
        data: cascadeData,
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
        countryParams: {
          params:   {
            allowFiltering: true,
            dataSource: country,
            fields: {text:"countryName",value:"countryName"},
            query: new Query(),
            actionComplete: () => false
            }
        }
      };
    },
    provide: {
      grid: [Edit, Toolbar]
    }
  }
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>