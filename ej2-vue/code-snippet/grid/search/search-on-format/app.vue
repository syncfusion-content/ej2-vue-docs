<template>
  <div id="app">
    <ejs-grid ref='grid' id="grid" :dataSource='data' :toolbar='toolbarOptions' :actionBegin="actionBegin" :keyPressed="keyPressed" height='272px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=80></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=80></e-column>
        <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type="date"  width=100></e-column>
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
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      toolbarOptions: ['Search']
    };
  },
  methods: {
    actionBegin: function (args) {
      if (args.requestType == 'searching') {
        args.cancel = true;
        setTimeout(() => {
          let grid = document.getElementById('grid').ej2_instances[0];
          var columns = grid.getColumns();
          var predicate = null;
          for (var i = 0; i < columns.length; i++) {
            var val = grid.valueFormatterService.fromView(
              args.searchString,
              columns[i].getParser(),
              columns[i].type
            );
            if (val) {
              if (predicate == null) {
                predicate = new Predicate(
                  columns[i].field,
                  'contains',
                  val,
                  true,
                  true
                );
              } else {
                predicate = predicate.or(
                  columns[i].field,
                  'contains',
                  val,
                  true,
                  true
                );
              }
            }
          }
          grid.query = new Query().where(predicate);
        }, 200);
      }
    },
    keyPressed: function (args) {
      if (
        args.key == 'Enter' &&
        args.target &&
        args.target.closest('.e-search') &&
        args.target.value == ''
      ) {
        args.cancel = true;
        this.$refs.grid.query = new Query();
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
</style>