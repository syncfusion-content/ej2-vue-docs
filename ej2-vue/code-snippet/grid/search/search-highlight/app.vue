<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data' :toolbar='toolbarOptions' :actionBegin="actionBegin" :queryCellInfo="queryCellInfo" height='272px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Search } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
},
  data() {
    return {
      data: data,
      toolbarOptions: ['Search']
    };
  },
  methods: {
    actionBegin: function (args) {
      if (args.requestType === 'searching') {
        this.key = args.searchString.toLowerCase();
      }
    },
    queryCellInfo: function (args) {
      if (this.key !== '') {
        var cellContent = (args.data)[(args.column).field];
        var parsedContent = cellContent.toString().toLowerCase();
        if (parsedContent.includes((this.key).toLowerCase())) {
          var i = 0;
          var searchStr = '';
          while (i < (this.key).length) {
            var index = parsedContent.indexOf((this.key)[i]);
            searchStr = searchStr + cellContent.toString()[index];
            i++;
          }
          (args.cell).innerHTML = (args.cell).innerText.replaceAll(
            searchStr,
            "<span class='customcss'>" + searchStr + '</span>'
          );
        }
      }
    }
  },
  provide: {
    grid: [Toolbar, Search]
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

.customcss {
  background-color: yellow;
}
</style>