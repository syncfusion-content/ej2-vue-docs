<template>
  <div id="app">
    <div class="control-section">
      <ejs-tooltip ref="tooltip" :beforeRender="beforeRender" target=".e-headertext">
        <ejs-grid :dataSource="data">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" width="120">
            </e-column>
            <e-column field="Freight" headerText="Freight" width="120" format="C2">
            </e-column>
            <e-column field="ShipName" headerText="Ship Name" width="150">
            </e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="120">
            </e-column>
            <e-column field="OrderDate" type="Date" headerText="Order Date"  format="yMd" width="120" >
            </e-column>
          </e-columns>
        </ejs-grid>
      </ejs-tooltip>
    </div>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { TooltipComponent } from "@syncfusion/ej2-vue-popups";
import { data } from "./datasource.js";
export default {
name: "App",
components: {
"ejs-tooltip":TooltipComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      columnDescriptions: {
        "ORDER ID": "A unique number assigned to each order.",
        "FREIGHT": "The cost of shipping the order.",
        "SHIP NAME": "The name of the person or company who will receive the shipment.",
        "SHIP COUNTRY": "The country to which the shipment will be sent.",
        "ORDER DATE": "The date when the order was placed.",
      },
    };
  },
  methods: {
    beforeRender: function (args) {
      const description = this.columnDescriptions[args.target.innerText];
      if (description) {
        this.$refs.tooltip.ej2Instances.content =
          args.target.innerText + ": " + description;
      }
    },
  },
};
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