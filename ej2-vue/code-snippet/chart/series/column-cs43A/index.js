import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :pointRender='pointRender'>
            <e-series-collection>
        <e-series :dataSource='seriesData' type='Column' xName='country' yName='gold' :cornerRadius = 'cornerRadius'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data: function () {
    return {
      seriesData: [
        { country: "USA",       gold: -50 },
        { country: "China",     gold: 40 },
        { country: "Japan",     gold: -70 },
        { country: "Australia", gold: 60 },
        { country: "France",    gold: -50 },
        { country: "Germany",   gold: -40 },
        { country: "Italy",     gold: 40 },
        { country: "Sweden",    gold: 30 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
      },
      primaryYAxis: {
        minimum: 0, 
        maximum: 80,
        interval: 20, 
        title: 'Medals'
      },
      cornerRadius: {topRight: 10 , topLeft: 10},
      title: 'Olympic Medals'
    };
  },
  provide: {
    chart: [ColumnSeries, Category]
  },
  methods: {
    pointRender: function (args) {
      if (args.point.y <= 40) {
        args.fill = '#ff6347';
      }
      else {
        args.fill = '#009cb8';
      }
    }
  }

});