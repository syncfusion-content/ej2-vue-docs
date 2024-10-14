import Vue from "vue";
import { ChartPlugin, PolarSeries, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
            <e-series-collection>
              <e-series :dataSource='seriesData' type='Polar' xName='country' yName='gold' drawType='Column'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { country: "USA",       gold: 50 },
        { country: "China",     gold: 40 },
        { country: "Japan",     gold: 70 },
        { country: "Australia", gold: 60 },
        { country: "France",    gold: 50 },
        { country: "Germany",   gold: 40 },
        { country: "Italy",     gold: 40 },
        { country: "Sweden",    gold: 30 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        startAngle: 90
      },
      title: "Olympic Medals"
    };
  },
  provide: {
    chart: [PolarSeries, ColumnSeries, Category]
  }

});