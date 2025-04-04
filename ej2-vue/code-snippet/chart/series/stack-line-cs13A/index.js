import Vue from "vue";
import { ChartPlugin, Category, Legend, Tooltip, StackingLineSeries, DataLabel } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
         <ejs-chart id="chartcontainer" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :tooltip="tooltip" :chartArea="chartArea" :stackLabels = 'stackLabels'>
            <e-series-collection>
                <e-series :dataSource="seriesData" type="StackingLine" xName="x" yName="y" name="John" :marker="marker"></e-series>
                <e-series :dataSource="seriesData" type="StackingLine" xName="x" yName="y1" name="Peter" :marker="marker"></e-series>
                <e-series :dataSource="seriesData" type="StackingLine" xName="x" yName="y2" name="Steve" :marker="marker"></e-series>
                <e-series :dataSource="seriesData" type="StackingLine" xName="x" yName="y3" name="Charle" :marker="marker"></e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Food', y: 90, y1: 40, y2: 70, y3: 120 },
        { x: 'Transport', y: 80, y1: 90, y2: 110, y3: 70 },
        { x: 'Medical', y: 50, y1: 80, y2: 120, y3: 50 },
        { x: 'Clothes', y: 70, y1: 30, y2: 60, y3: 180 },
        { x: 'Personal Care', y: 30, y1: 80, y2: 80, y3: 30 },
        { x: 'Books', y: 10, y1: 40, y2: 30, y3: 270 },
        { x: 'Fitness', y: 100, y1: 30, y2: 70, y3: 40 },
        { x: 'Electricity', y: 55, y1: 95, y2: 55, y3: 75 },
        { x: 'Tax', y: 20, y1: 50, y2: 40, y3: 65 },
        { x: 'Pet Care', y: 40, y1: 20, y2: 80, y3: 95 },
        { x: 'Education', y: 45, y1: 15, y2: 45, y3: 195 },
        { x: 'Entertainment', y: 75, y1: 45, y2: 65, y3: 115 }
      ],
      primaryXAxis: {
        interval: 1, 
        valueType: 'Category'
      },
      primaryYAxis: {
        title: 'Expense',
        interval: 100,
        labelFormat: '${value}'
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      marker:{dataLabel : {visible : true}},
      stackLabels: { visible: true, fill: 'rgba(0, 123, 255, 0.5)', format: '{value}', angle: 45, rx: 10, ry: 10, margin: { left: 10, right: 10, top: 10, bottom: 10 }, border: { width: 2, color: '#000' }, font: { size: '14px', color: '#fff', weight: 'bold', family: 'Arial', textAlignment: 'Left' } },
      tooltip: {
        enable: true
      }
    };
  },
  provide: {
    chart: [Category, Legend, Tooltip, StackingLineSeries, DataLabel]
  }

});