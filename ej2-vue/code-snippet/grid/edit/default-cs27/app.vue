


<template>
  <div id="app">
    <ejs-grid id="grid" :dataSource="data" :editSettings="editSettings" :toolbar="toolbar" height="273px">
      <e-columns>
        <e-column field="ProductID" headerText="Product ID" textAlign="Right" :isPrimaryKey="true" width="100"></e-column>
        <e-column field="ProductName" headerText="Product Name" width="120"></e-column>
        <e-column field="UnitPrice" headerText="Unit Price" editType="numericedit" :edit="priceParams"
          width="150" format="C2" textAlign="Right" ></e-column>
        <e-column field="UnitsInStock" headerText="Units In Stock" editType="numericedit"
          :edit="stockParams" width="150" textAlign="Right"></e-column>
        <e-column field="TotalCost" headerText="Total Cost" width="150" :allowEditing="false" format="C2" textAlign="Right" ></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { NumericTextBox } from "@syncfusion/ej2-inputs";
import { productData } from "./datasource.js";

let priceElem, stockElem, priceObj, stockObj;
Vue.use(GridPlugin);
export default {
  data: () => {
    return {
      data: productData,
      toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
      editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
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
          priceObj = new NumericTextBox({
            value: args.rowData[args.column.field],
            change: function (args) {
              let formEle = document
                .getElementById("grid")
                .querySelector("form").ej2_instances[0];
              var totalCostFieldEle = formEle.getInputElement("TotalCost");
              totalCostFieldEle.value = priceObj.value * stockObj.value;
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
          stockObj = new NumericTextBox({
            value: args.rowData[args.column.field],
            change: function (args) {
              let formEle = document
                .getElementById("grid")
                .querySelector("form").ej2_instances[0];
              var totalCostFieldEle = formEle.getInputElement("TotalCost");
              totalCostFieldEle.value = priceObj.value * stockObj.value;
            },
          });
          stockObj.appendTo(stockElem);
        },
      },
    };
  },
  provide: {
    grid: [Edit, Toolbar],
  },
};
</script>

<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>



