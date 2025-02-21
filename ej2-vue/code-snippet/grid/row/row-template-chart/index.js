
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ChartPlugin,ColumnSeries, Category } from '@syncfusion/ej2-vue-charts';
import { employeeData,employeePerformanceData } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ChartPlugin);

new Vue({
  el: '#app',
  template: `
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
  </div>`,
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
    chart: [ColumnSeries, Category],
  }
});