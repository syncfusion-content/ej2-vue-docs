import Vue from "vue";
import { ChartPlugin, BarSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart id="container" :primaryXAxis='primaryXAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Bar' xName='x' yName='y' groupName='USA' columnWidth=0.7 columnSpacing=0.1> </e-series>
                <e-series :dataSource='seriesData1' type='Bar' xName='x' yName='y' groupName='USA' columnWidth=0.5 columnSpacing=0.1> </e-series>
                <e-series :dataSource='seriesData2' type='Bar' xName='x' yName='y' groupName='UK' columnWidth=0.7 columnSpacing=0.1> </e-series>
                <e-series :dataSource='seriesData3' type='Bar' xName='x' yName='y' groupName='UK' columnWidth=0.5 columnSpacing=0.1> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: '2012', y: 104 }, 
        { x: '2016', y: 121 }, 
        { x: '2020', y: 113 }
      ],
      seriesData1: [
        { x: '2012', y: 46 }, 
        { x: '2016', y: 46 }, 
        { x: '2020', y: 39 }
      ],
      seriesData2: [
        { x: '2012', y: 65 }, 
        { x: '2016', y: 67 },
        { x: '2020', y: 65 }
      ],
      seriesData3: [
        { x: '2012', y: 29 }, 
        { x: '2016', y: 27 },
        { x: '2020', y: 22 }
      ],
      primaryXAxis: {
        valueType: 'Category'
      }
    };
  },
  provide: {
    chart: [BarSeries, Category]
  }

});