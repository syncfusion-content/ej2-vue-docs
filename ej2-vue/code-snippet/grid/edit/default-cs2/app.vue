<template>
  <div id="app">
    <ejs-grid id="Grid1" :dataSource="data" :editSettings="editSettings" :toolbar="toolbar" height="273px" :cellEdit="cellEdit">
      <e-columns>
        <e-column field="ProductID" headerText="Product ID" textAlign="Right" :isPrimaryKey="true" width="100"></e-column>
        <e-column field="ProductName" headerText="Product Name" width="120"></e-column>
        <e-column field="UnitPrice" headerText="Unit Price" editType="numericedit" :edit="priceParams"
          width="150" format="C2" textAlign="Right" ></e-column>
        <e-column field="UnitsInStock" headerText="Units In Stock" editType="numericedit"
          :edit="stockParams" width="150" textAlign="Right"></e-column>
        <e-column field="TotalCost" headerText="Total Cost" width="150" format="C2" textAlign="Right" ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { NumericTextBox } from "@syncfusion/ej2-inputs";
import { productData } from "./datasource.js";
import { getComponent } from "@syncfusion/ej2-base";
let priceElem, stockElem, priceObj, stockObj;
var grid;
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data: () => {
    return {
      data: productData,
      toolbar: ["Add", "Delete", "Update", "Cancel"],
      editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: "Batch",
      },
      priceParams: {
        create: () => {
          priceElem = document.createElement("input");
          return priceElem;
        },
        read: () => {
          return priceObj.value;
        },
        destroy: () => {
          priceObj.destroy();
        },
        write: (args) => {
         grid = new getComponent("Grid1", "grid");
          var rowData = args.rowData;
          var rowIndex = grid.getRowInfo(args.row).rowIndex;
          priceObj = new NumericTextBox({
            value: args.rowData[args.column.field],
            change: function (args) {
              var totalCostValue = args.value * rowData["UnitsInStock"];
              grid.updateCell(rowIndex, "TotalCost", totalCostValue);
            },
          });
          priceObj.appendTo(priceElem);
        },
      },
      stockParams: {
        create: () => {
          stockElem = document.createElement("input");
          return stockElem;
        },
        read: () => {
          return stockObj.value;
        },
        destroy: () => {
          stockObj.destroy();
        },
        write: (args) => {
          grid = new getComponent("Grid1", "grid");
          var rowData = args.rowData;
          var rowIndex = grid.getRowInfo(args.row).rowIndex;
          stockObj = new NumericTextBox({
            value: args.rowData[args.column.field],
            change: function (args) {
              var totalCostValue = args.value * rowData["UnitPrice"];
              grid.updateCell(rowIndex, "TotalCost", totalCostValue);
            },
          });
          stockObj.appendTo(stockElem);
        },
      },
    };
  },
  methods: {
    cellEdit: function (args) {
      if (args.columnName === "TotalCost") {
        args.cancel = true;
      }
    },
  },
  provide: {
    grid: [Edit, Toolbar],
  },
};
</script>

<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>