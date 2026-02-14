<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :allowPaging="true" :toolbar='toolbarOptions' :beforePrint='beforePrint' height='272px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' :visible='false' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
      </e-columns>
    </ejs-grid>
    </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
  },
  data() {
    return {
      data: data,
      toolbarOptions: ['Print']
    };
  },
  methods: {
    beforePrint: function() {
      var styleElement = document.createElement('style');
      styleElement.innerHTML = `
      .e-grid .e-headercell {
          background: #24a0ed !important;
      }
      .e-grid .e-row .e-rowcell {
          background: #cbecff !important;
      }
      .e-grid .e-altrow .e-rowcell{
          background: #e7d7f7 !important;
      }
      `;
      document.querySelector('head').appendChild(styleElement);
    }
  },
  provide: {
      grid: [Toolbar, Page]
  }
}
</script>
<style>
  .e-grid .e-headercell {
      background: #24a0ed !important;
  }
  .e-grid .e-row .e-rowcell {
      background: #cbecff !important;
  }
  .e-grid .e-altrow .e-rowcell{
      background: #e7d7f7 !important;
  }
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
