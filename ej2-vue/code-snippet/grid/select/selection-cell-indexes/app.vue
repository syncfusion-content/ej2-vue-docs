<template>
  <div id="app">
    <div style="padding: 20px 0px">
      <ejs-button class="sample" @click.native="showSelectedIndexes">
      Show Selected Cell Indexes</ejs-button>
    </div>
    <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions" >
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" isPrimaryKey="true" 
        textAlign="Right" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120">
        </e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="130">
        </e-column>
        <e-column field="Freight" headerText="Freight" format="C2" width="100">
        </e-column>
      </e-columns>
    </ejs-grid>
    <ejs-dialog ref="dialogComponent" :header="'Selected Cell Indexes'" :content="dialogContent"
    :visible="false" :close="dialogClose" showCloseIcon="true" width="350px" :position='{ X: 300, Y: 100 }'>
    </ejs-dialog>
  </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { DialogPlugin } from "@syncfusion/ej2-vue-popups";
import { data } from "./datasource.js";

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);
Vue.use(DialogPlugin);

export default {
  data() {
    return {
      data: data,
      selectedCellIndexes: [],
      dialogContent: "",
      selectionOptions: {
        mode: "Cell",
        type: "Multiple",
        persistSelection: true,
      },
    };
  },
  methods: {
    showSelectedIndexes() {
      this.selectedCellIndexes = this.$refs.grid.getSelectedRowCellIndexes();
      if (this.selectedCellIndexes.length > 0) {
        let content = "";
        this.selectedCellIndexes.forEach((index) => {
          content += `Row: ${index.rowIndex}, CellIndex: ${index.cellIndexes}<br>`;
        });
        this.dialogContent = content;
        this.$refs.dialogComponent.show();
      }
    },
    dialogClose() {
      this.$refs.dialogComponent.hide();
    },
  },
};
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
