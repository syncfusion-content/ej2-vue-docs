import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category, Tooltip, Legend } from "@syncfusion/ej2-vue-charts";
const vietnamData = [
  { x: 2016, y: 7.8 },
  { x: 2017, y: 10.3 },
  { x: 2018, y: 15.5 },
  { x: 2019, y: 17.5 },
  { x: 2020, y: 19.5 },
  { x: 2021, y: 23.0 },
  { x: 2022, y: 20.0 },
  { x: 2023, y: 19.0 },
  { x: 2024, y: 22.1 }
];

const polandData = [
  { x: 2016, y: 8.9 },
  { x: 2017, y: 10.3 },
  { x: 2018, y: 10.8 },
  { x: 2019, y: 9.0 },
  { x: 2020, y: 7.9 },
  { x: 2021, y: 8.5 },
  { x: 2022, y: 7.4 },
  { x: 2023, y: 6.4 },
  { x: 2024, y: 7.1 }
];

Vue.use(ChartPlugin);

new Vue({
el: '#app',
template: `
    <div id="app">
      <ejs-chart id="charts" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :legendSettings='legendSettings' :tooltip='tooltip'>
        <e-series-collection>
          <e-series :dataSource='vietnamData' xName='x' yName='y' name='Vietnam' type='Column' :marker='marker'></e-series>
          <e-series :dataSource='polandData' xName='x' yName='y' name='Poland' type='Column' :marker='marker'></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
`,

  data() {
    return {
      vietnamData: vietnamData,
      polandData: polandData,
      primaryXAxis: {
        valueType: 'Category'
      },
      primaryYAxis: {
        title: 'Value'
      },
      legendSettings: {
        visible: true
      },
      marker: {
        visible: true
      },
      tooltip: {
        enable: true,
        distance: 20
      }
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Tooltip, Legend]
  }

});
