<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :searchSettings="searchOptions" :toolbar="toolbarOptions" height='273px' :actionBegin = 'actionBegin' :actionComplete = 'actionComplete'>
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

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Search} from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { Predicate, Query } from "@syncfusion/ej2-data";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      values: "",
      key: "",
      refresh: false,
      removeQuery: false,
      valueAssign: false,
      data: data,
      toolbarOptions: ["Search"],
      searchOptions: {
        fields: ['OrderID',
                'CustomerID',
                'EmployeeID',
                'ShipCity',
                'ShipCountry',
                'ShipName'],
        operator: 'contains',
        key: '',
        ignoreCase: true,
      },
    };
  },
  methods: {
    actionBegin(args) {
        if (args.requestType === "searching") {
        const keys = args.searchString.split(",");
        var flag = true;
        var predicate;
        if (keys.length > 1) {
          if (this.$refs.grid.ej2Instances.searchSettings.key !== "") {
            this.values = args.searchString;
            keys.forEach((key) => {
              this.$refs.grid.ej2Instances.getColumns().forEach((col) => {
                if (flag) {
                  predicate = new Predicate(col.field, "contains", key, true);
                  flag = false;
                } else {
                  var predic = new Predicate(col.field, "contains", key, true);
                  predicate = predicate.or(predic);
                }
              });
            });
            this.$refs.grid.ej2Instances.query = new Query().where(predicate);
            this.$refs.grid.ej2Instances.searchSettings.key = "";
            this.refresh = true;
            this.valueAssign = true;
            this.removeQuery = true;
            this.$refs.grid.ej2Instances.refresh();
          }
        }
      }
    },
    actionComplete(args) {
        if (args.requestType === "refresh" && this.valueAssign) {
        document.getElementById(
          this.$refs.grid.ej2Instances.element.id + "_searchbar"
        ).value = this.values;
        this.valueAssign = false;
      } else if (
        document.getElementById(
          this.$refs.grid.ej2Instances.element.id + "_searchbar"
        ).value === "" &&
        args.requestType === "refresh" &&
        this.removeQuery
      ) {
        this.$refs.grid.ej2Instances.query = new Query();
        this.removeQuery = false;
        this.$refs.grid.ej2Instances.refresh();
      }
      document.getElementById(this.$refs.grid.ej2Instances.element.id + "_searchbar").addEventListener('keyup', (args) => {
        if(args.target.value === "" && (args.key === "Enter" || args.key === "Backspace" )){
          this.$refs.grid.ej2Instances.query = new Query();
          this.removeQuery = false;
          this.$refs.grid.ej2Instances.refresh();
        }         
      });
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
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";;
</style>