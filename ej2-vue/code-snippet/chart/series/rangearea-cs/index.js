
import Vue from "vue";
import { ChartPlugin, RangeAreaSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart id="container" :title='title'>
            <e-series-collection>
              <e-series :dataSource='seriesData' type='RangeArea' xName='x' high='high' low="low" name='Product A' fill='green'
              width=2 dashArray='5,5' :border='border' :marker='marker' opacity=0.4> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData:[
        { x: 2000, low: 0.7, high: 6.1 }, { x: 2001, low: 1.3, high: 6.3 },
        { x: 2002, low: 1.9, high: 8.5 }, { x: 2003, low: 3.1, high: 10.8 },
        { x: 2004, low: 5.7, high: 14.4 }, { x: 2005, low: 8.4, high: 16.9 },
        { x: 2006, low: 10.6, high: 19.2 }, { x: 2007, low: 10.5, high: 18.9 },
        { x: 2008, low: 8.5, high: 16.1 }, { x: 2009, low: 6.0, high: 12.5 },
        { x: 2010, low: 1.5, high: 6.9 }, { x: 2011, low: 5.1, high: 12.1 }
        ],
      border:{width:2, color:'Red'},
      title: "Average Sales Comparison",
      marker: {
        visible: true
      }
    };
  },
  provide: {
    chart: [RangeAreaSeries]
  },

});