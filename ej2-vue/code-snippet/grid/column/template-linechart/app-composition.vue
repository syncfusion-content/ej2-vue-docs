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
<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { employeeData } from "./datasource.js";
import { SparklineComponent as EjsSparkline } from "@syncfusion/ej2-vue-charts";
      const data = employeeData;
      const lineData = [
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
      ];
    const getSparkData = (type, count) => {
      if (type === 'line') {
        return lineData[count - 1];
      }
    }
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