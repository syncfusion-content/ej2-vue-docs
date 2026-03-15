// index.js
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

const franceData = [
  { x: 2016, y: 14.6 },
  { x: 2017, y: 15.5 },
  { x: 2018, y: 15.4 },
  { x: 2019, y: 14.4 },
  { x: 2020, y: 11.6 },
  { x: 2021, y: 13.9 },
  { x: 2022, y: 12.1 },
  { x: 2023, y: 10.0 },
  { x: 2024, y: 10.8 }
];

const mexicoData = [
  { x: 2016, y: 19.0 },
  { x: 2017, y: 20.0 },
  { x: 2018, y: 20.2 },
  { x: 2019, y: 18.4 },
  { x: 2020, y: 16.8 },
  { x: 2021, y: 18.5 },
  { x: 2022, y: 18.4 },
  { x: 2023, y: 16.3 },
  { x: 2024, y: 13.7 }
];

Vue.use(ChartPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-chart id="charts" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :legendSettings='legendSettings' :tooltip='tooltip'>
        <e-series-collection>
          <e-series :dataSource='vietnamData' xName='x' yName='y' name='Vietnam' type='Column' :marker='marker'></e-series>
          <e-series :dataSource='franceData' xName='x' yName='y' name='France' type='Column' :marker='marker'></e-series>
          <e-series :dataSource='mexicoData' xName='x' yName='y' name='Mexico' type='Column' :marker='marker'></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
  `,
  data() {
    return {
      vietnamData,
      franceData,
      mexicoData,
      primaryXAxis: { valueType: 'Category' },
      primaryYAxis: { title: 'Value' },
      legendSettings: { visible: true },
      tooltip: { enable: true, followPointer: true },
      marker: { visible: true }
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Tooltip, Legend]
  }
});