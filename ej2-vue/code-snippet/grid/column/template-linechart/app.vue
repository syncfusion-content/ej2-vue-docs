<template>
    <div id="app">
         <ejs-grid ref="grid" :dataSource="data" height=315 :created="renderGridSparkline">
            <e-columns>
                <e-column field='EmployeeID' headerText='Employee ID' width='130' textAlign='Right'></e-column>
                <e-column field='FirstName' headerText='First Name' width=150></e-column>
                <e-column headerText='Employee Performance Rating' width='280' :template="'lineChartTemplate'"></e-column>
            </e-columns>
            <template v-slot:lineChartTemplate="{data}">
              <div><ejs-sparkline :dataSource="getSparkData('line', data.EmployeeID + 1)" height="50px" :width="'90%'" :lineWidth="2" valueType="Numeric" :fill="'#3C78EF'"></ejs-sparkline></div>
            </template>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
import { SparklineComponent } from "@syncfusion/ej2-vue-charts";
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-sparkline":SparklineComponent
},
  data: () => {
    return {
      data: employeeData,
      lineData: [
        [0, 6, -4, 1, -3, 2, 5],
        [5, -4, 6, 3, -1, 2, 0],
        [6, 4, 0, 3, -2, 5, 1],
        [4, -6, 3, 0, 1, -2, 5],
        [3, 5, -6, -4, 0, 1, 2],
        [1, -3, 4, -2, 5, 0, 6],
        [2, 4, 0, -3, 5, -6, 1],
        [5, 4, -6, 3, 1, -2, 0],
        [0, -6, 4, 1, -3, 2, 5],
        [6, 4, 0, -3, 2, -5, 1],
      ],      
    };
  },
  methods: {
    getSparkData(type, count) {
      if (type === 'line') {
        return this.lineData[count - 1];
      }
    },
  },
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