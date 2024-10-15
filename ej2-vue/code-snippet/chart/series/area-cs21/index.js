import Vue from "vue";
import { ChartPlugin, AreaSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
         <ejs-chart :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :pointRender='pointRender'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Area' xName='x' yName='y' :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 1900, y: 4 }, 
        { x: 1920, y: 3.0 },
        { x: 1940, y: 3.8 },
        { x: 1960, y: 3.4 }, 
        { x: 1980, y: 3.2 }, 
        { x: 2000, y: 3.9 }
      ],
      primaryXAxis: {
        title: 'Year',
        minimum: 1900, 
        maximum: 2000, 
        interval: 10,
        edgeLabelPlacement: 'Shift'
      },
      primaryYAxis: {
        minimum: 2, 
        maximum: 5, 
        interval: 0.5,
        title: 'Sales Amount in Millions'
      },
      title: 'Average Sales Comparison',
      marker: { visible: true }
    };
  },
  provide: {
    chart: [AreaSeries]
  },
  methods: {
    pointRender: function (args) {
      if (args.point.index % 2 !== 0) {
          args.fill = '#ff6347';
      }
      else {
          args.fill = '#009cb8';
      }
    }
  }

});