import Vue from "vue";
import { ChartPlugin, MultiColoredAreaSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='MultiColoredArea' xName='x' yName='y' :segments='segments' segmentAxis='X'> </e-series>
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
        { x: 2009, y: 32}, 
        { x: 2010, y: 35 }, 
        { x: 2011, y: 25 }
      ],
      segments: [
        {
          value: 2007,
          color: 'blue'
        },
        {
          value: 2009,
          color: 'lightgreen'
        },
        {
          color: 'orange'
        }
      ]
    };
  },
  provide: {
    chart: [MultiColoredAreaSeries]
  }

});