<template>
    <div id="app">
        <ejs-grid id='grid' ref='grid' :dataSource='data' :pageSettings='pageOptions' :selectionSettings='selectionSettings' 
        :beforePrint='beforePrint' :allowPaging='true'  :toolbar='toolbarOptions'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import {GridComponent,ColumnsDirective,ColumnDirective,Page,Toolbar} from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
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
      toolbarOptions: ["Print"],
      selectionSettings: { type: "Multiple" },
      pageOptions: { pageSize: 6 },
    };
  },
  methods: {
    beforePrint: function (args) {
      var rows = this.$refs.grid.ej2Instances.getSelectedRows();
      if (rows.length) {
        args.element["ej2_instances"][0].getContent().querySelector("tbody").remove();
        var tbody = document.createElement("tbody");
        rows = [...rows];
        for (var r = 0; r < rows.length; r++) {
          tbody.appendChild(rows[r].cloneNode(true));
        }
        args.element["ej2_instances"][0].getContentTable().appendChild(tbody);
      }
    },
  },
  provide: {
    grid: [Page, Toolbar],
  }
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