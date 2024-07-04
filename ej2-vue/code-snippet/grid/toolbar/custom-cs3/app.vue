<template>
  <div id="app">
    <ejs-grid ref='grid' id='Grid' :dataSource='data' :editSettings='editSettings' :toolbarTemplate='toolbar'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' :isPrimaryKey='true' :validationRules='orderIDRules' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' type='string' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' type='string' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' type='string' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { ToolbarComponent } from "@syncfusion/ej2-vue-navigations";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';
import { createApp } from "vue";
const app = createApp();
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-toolbar":ToolbarComponent,
"ejs-dropdownlist":DropDownListComponent
},
  data() {
    return {
      data: data,
      orderIDRules: { required: true },
      editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
      toolbar: function () {
        return {
          template: app.component('custom-toolbar', {
            template: `<ejs-toolbar>
                        <div style="display: inline-block;">
                          <label style="padding:  10px 10px 12px 0"> Change the value: </label> 
                          <ejs-dropdownlist id='dropdownlist' :dataSource='dropDownData' :change="onChange" placeholder='Select a value' width="150"></ejs-dropdownlist>
                        </div>
                      </ejs-toolbar>`,
            data: function () {
              return {
                dropDownData: [{ text: 'Edit' }, { text: 'Delete' }, { text: 'Update' }],
              };
            },
            methods: {
              onChange: function (args) {
                var grid = document.getElementById("Grid").ej2_instances[0];
                const selectedRow = grid.getSelectedRecords()[0];
                if (args.itemData.text === 'Update') {
                  grid.endEdit();
                }
                if (args.itemData.text === 'Edit') {
                  grid.startEdit();
                }
                if (args.itemData.text === 'Delete') {
                  grid.deleteRecord(selectedRow);
                }
                this.$refs.dropDown.$el.value = '';
                this.$refs.dropDown.$el.placeholder = args.itemData.text;
              }
            }
          })
        };
      }
    };
  },
  provide: {
    grid: [Toolbar, Edit]
  }
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