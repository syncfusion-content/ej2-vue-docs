<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data"  height="400" :rowTemplate="'rowTemplate'" width="auto">
      <e-columns>
        <e-column field="Name" headerText="Employee Name"  width="150" ></e-column>
        <e-column field="Designation" headerText="Designation" width="150"></e-column>
        <e-column field="Team" headerText="Team(s)" width="150"></e-column>
        <e-column headerText="Employee Performance" width="300" textAlign="Center"></e-column>
      </e-columns>
      <template v-slot:rowTemplate="{ data }">
        <tr :style="{ maxHeight: '159px' }">
          <td class="custom">
            <div>{{ data.Name }}</div>
          </td>
          <td class="custom">
            <div>{{ data.Designation }}</div>
          </td>
          <td class="custom">
            <div>{{ data.Team }}</div>
          </td>
          <td class="details">
            <ejs-chart
              :id="'chart-container-' + data.EmployeeID"
              :primaryXAxis="primaryXAxis"
              :dataSource="getChartData(data.EmployeeID)"
              height="150"
            >
              <e-series-collection>
                <e-series
                  type="Column"
                  xName="month"
                  yName="performance"
                  name="Performance"
                ></e-series>
              </e-series-collection>
            </ejs-chart>
          </td>
        </tr>
      </template>
    </ejs-grid>
  </div>
</template>
<script>
  import { GridComponent, ColumnsDirective, ColumnDirective, } from "@syncfusion/ej2-vue-grids";
  import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";
  import { employeeData, employeePerformanceData } from "./datasource.js";
  
  export default {
    name: "App",
    components: {
      "ejs-grid": GridComponent,
      "e-columns": ColumnsDirective,
      "e-column": ColumnDirective,
      "ejs-chart": ChartComponent,
      "e-series-collection": SeriesCollectionDirective,
      "e-series": SeriesDirective,
    },
    data() {
      return {
        data: employeeData,
        primaryXAxis: {
          valueType: 'Category',
        },
      };
    },
    methods: {
      getChartData(employeeID) {
        const employeePerformance = employeePerformanceData.find(emp => emp.EmployeeID === employeeID);
        return employeePerformance ? employeePerformance.chartData : [];
      }
    },
    provide: {
      chart: [ColumnSeries, Category ],
    }
  };
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  .custom,
  .details {
   border-color: #e0e0e0;
   border-style: solid;
  }
  .custom {
   border-width: 1px 0px 0px 0px;
  }
  .details {
   border-width: 1px 0px 0px 0px;
  }
  td {
   padding: 2px 2px 3px 4px;
  }
</style>