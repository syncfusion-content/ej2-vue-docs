import Vue from "vue";
import { ChartPlugin, PolarSeries, RangeColumnSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Polar' xName='x' high='high' low='low' drawType='RangeColumn'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Jan', low: 0.7,  high: 6.1 }, 
        { x: 'Feb', low: 1.3,  high: 6.3 }, 
        { x: 'Mar', low: 1.9,  high: 8.5 },
        { x: 'Apr', low: 3.1,  high: 10.8 }, 
        { x: 'May', low: 5.7,  high: 14.40 }, 
        { x: 'Jun', low: 8.4,  high: 16.90 },
        { x: 'Jul', low: 10.6, high: 19.20 }, 
        { x: 'Aug', low: 10.5, high: 18.9 }, 
        { x: 'Sep', low: 8.5,  high: 16.1 },
        { x: 'Oct', low: 6.0,  high: 12.5 }, 
        { x: 'Nov', low: 1.5,  high: 6.9  }, 
        { x: 'Dec', low: 5.1,  high: 12.1 }
      ],
      primaryXAxis: {
        valueType: 'Category'
      },
      title: "Maximum and Minimum Temperature"
    };
  },
  provide: {
    chart: [PolarSeries, RangeColumnSeries, Category]
  }

});