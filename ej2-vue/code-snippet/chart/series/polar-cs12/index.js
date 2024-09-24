import Vue from "vue";
import { ChartPlugin, Category, RadarSeries, ColumnSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Radar' xName='country' yName='gold' drawType='Column'> </e-series>
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
        title: 'Countries',
        startAngle: 120
      },
      primaryYAxis: {
        title: 'Medals'
      },
      title: "Olympic Medals"
    };
  },
  provide: {
    chart: [Category, RadarSeries, ColumnSeries]
  }

});