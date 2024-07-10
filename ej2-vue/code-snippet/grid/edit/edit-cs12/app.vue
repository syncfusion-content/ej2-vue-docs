<template>
    <div id="app">
        <ejs-grid ref="grid" :dataSource='data' height='315px' :created = 'created'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=120></e-column>
                <e-column field='OrderDate' headerText='Order Date' width=130 textAlign='Right' format='yMd'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=120></e-column>
                <e-column field='Freight' headerText='Receipt Amount'  width=120 :template="'columnTemplate'"></e-column>
            </e-columns>
            <template v-slot:columnTemplate="{data}">
                <div class="input">
                    <input :id='data.OrderID' :value='data.Freight' class='customtemplate' type='text' style='width: 100%'/>
                </div>
            </template>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, parentsUntil } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
    };
  },
  methods: {
    created() {
        this.$refs.grid.ej2Instances.element.addEventListener('keyup', function (e) { // Bind the keyup event for the grid.
            if (e.target.classList.contains('customtemplate')) { // Based on this condition, you can find whether the target is an input element or not.
                var row = parentsUntil(e.target, 'e-row');
                var rowIndex = row.rowIndex; // Get the row index.
                var uid = row.getAttribute('data-uid');
                var grid = document.getElementsByClassName('e-grid')[0].ej2_instances[0];
                var rowData = grid.getRowObjectFromUID(uid).data; // Get the row data.
                rowData.Freight = e.target.value; // Update the new value for the corresponding column.
                grid.updateRow(rowIndex, rowData); // Update the modified value in the row data.
            }
        });
    }
  },
}
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