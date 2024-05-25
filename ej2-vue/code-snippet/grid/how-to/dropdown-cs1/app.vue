<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='315px' >
            <e-columns>
                <e-column headerText='Order Status' :template="dropdownTemplate" width=200></e-column>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
               <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';




export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-dropdownlist":DropdownlistComponent,

},

  data() {
    return {
      data: data,
      dropdownTemplate: function () {
        return {
          template: app.component('bindDropdown', {
            template: `<ejs-dropdownlist id='dropdownlist' :dataSource='dropData'> </ejs-dropdownlist>`,
            data() {
              return {
                dropData: ['Order Placed', 'Processing', 'Delivered']
              }
            }
          })
        }
      }
    };
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>