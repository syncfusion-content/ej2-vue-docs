import Vue from "vue";
import { ChartPlugin, RadarSeries, LineSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :seriesRender='seriesRender'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Radar' xName='x' yName='y' drawType='Line' width=2> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 2005, y: 28 }, 
        { x: 2006, y: 25 },
        { x: 2007, y: 26 }, 
        { x: 2008, y: 27 },
        { x: 2009, y: 32 }, 
        { x: 2010, y: 35 }, 
        { x: 2011, y: 30 }
      ],
      primaryXAxis: {
        title: 'Year'
      },
      primaryYAxis: {
        title: 'Efficiency',
        labelFormat: '{value}%'
      },
      title: "Efficiency of oil-fired power production"
    };
  },
  provide: {
    chart: [RadarSeries, LineSeries]
  },
  methods: {
    seriesRender: function (args) {
      args.fill = '#ff6347';
    }
  }

});