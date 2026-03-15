<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' height='273px'>
      <e-columns>
        <e-column field="CategoryName" headerText="Category Name" width="120"></e-column>
        <e-column field="Delivered" headerText="Delivered" width="120" displayAsCheckBox="true" :filter="columnFilterSettings"></e-column>
        <e-column field="ProductID" headerText="ProductID" width="120"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
import { createApp } from 'vue';
const app = createApp();
var itemTemplate = app.component('itemTemplate', {
  data: () => ({}),
  template: `<div>
     <span>{{data.Delivered === true ? 'Delivered' : 'Not Delivered'}} </span>
     </div>`,
  components: {},
});

export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
},
  data: () => {
    return {
      data: data,
      filterOptions: {
        type: 'Excel'
      },
      columnFilterSettings: {
        type: 'CheckBox',
        itemTemplate: function () {
          return {
            template: itemTemplate,
          };
        },
      }
    };
  },
  provide: {
    grid: [Filter]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>