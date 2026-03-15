import Vue from "vue";
import { ChartPlugin, LineSeries, Category, DataLabel, SeriesLabel, Legend } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-chart id="container" :primaryXAxis='primaryXAxis' :legendSettings='legendSettings'>
        <e-series-collection>
          <e-series :dataSource='vietnamData' xName='x' yName='y' name='Vietnam' type='Line' :marker='marker' :labelSettings='labelSettings'></e-series>
          <e-series :dataSource='indonesiaData' xName='x' yName='y' name='Indonesia' type='Line' :marker='marker' :labelSettings='labelSettings'></e-series>
          <e-series :dataSource='franceData' xName='x' yName='y' name='France' type='Line' :marker='marker' :labelSettings='labelSettings'></e-series>
          <e-series :dataSource='polandData' xName='x' yName='y' name='Poland' type='Line' :marker='marker' :labelSettings='labelSettings'></e-series>
          <e-series :dataSource='mexicoData' xName='x' yName='y' name='Mexico' type='Line' :marker='marker' :labelSettings='labelSettings'></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
`,

  data() {
    return {
      vietnamData: [
        { x: 2016, y: 7.8 },
        { x: 2017, y: 10.3 },
        { x: 2018, y: 15.5 },
        { x: 2019, y: 17.5 },
        { x: 2020, y: 19.5 },
        { x: 2021, y: 23.0 },
        { x: 2022, y: 20.0 },
        { x: 2023, y: 19.0 },
        { x: 2024, y: 22.1 }
      ],
      indonesiaData: [
        { x: 2016, y: 4.8 },
        { x: 2017, y: 5.2 },
        { x: 2018, y: 6.2 },
        { x: 2019, y: 7.8 },
        { x: 2020, y: 9.3 },
        { x: 2021, y: 14.3 },
        { x: 2022, y: 15.6 },
        { x: 2023, y: 16.0 },
        { x: 2024, y: 17.0 }
      ],
      franceData: [
        { x: 2016, y: 14.6 },
        { x: 2017, y: 15.5 },
        { x: 2018, y: 15.4 },
        { x: 2019, y: 14.4 },
        { x: 2020, y: 11.6 },
        { x: 2021, y: 13.9 },
        { x: 2022, y: 12.1 },
        { x: 2023, y: 10.0 },
        { x: 2024, y: 10.8 }
      ],
      polandData: [
        { x: 2016, y: 8.9 },
        { x: 2017, y: 10.3 },
        { x: 2018, y: 10.8 },
        { x: 2019, y: 9.0 },
        { x: 2020, y: 7.9 },
        { x: 2021, y: 8.5 },
        { x: 2022, y: 7.4 },
        { x: 2023, y: 6.4 },
        { x: 2024, y: 7.1 }
      ],
      mexicoData: [
        { x: 2016, y: 19.0 },
        { x: 2017, y: 20.0 },
        { x: 2018, y: 20.2 },
        { x: 2019, y: 18.4 },
        { x: 2020, y: 16.8 },
        { x: 2021, y: 18.5 },
        { x: 2022, y: 18.4 },
        { x: 2023, y: 16.3 },
        { x: 2024, y: 13.7 }
      ],
      primaryXAxis: {
        valueType: 'Category'
      },
      legendSettings: {
        visible: true
      },
      marker: {
        visible: true
      },
      labelSettings: {
        visible: true
      }
    };
  },
  provide: {
    chart: [LineSeries, Category, DataLabel, SeriesLabel, Legend]
  }

});
