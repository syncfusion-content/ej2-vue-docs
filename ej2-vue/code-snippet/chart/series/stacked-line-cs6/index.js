import Vue from "vue";
import { ChartPlugin, Category, Legend, Tooltip, StackingLineSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart id="chartcontainer" :title="title" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :tooltip="tooltip" :chartArea="chartArea">
            <e-series-collection>
                <e-series :dataSource="seriesData" type="StackingLine100" xName="x" yName="y" name="John" :marker="marker" width=2 :emptyPointSettings='emptyPointSettings'></e-series>
                <e-series :dataSource="seriesData" type="StackingLine100" xName="x" yName="y1" name="Peter" :marker="marker" width=2></e-series>
                <e-series :dataSource="seriesData" type="StackingLine100" xName="x" yName="y2" name="Steve" :marker="marker" width=2 :emptyPointSettings='emptyPointSettings1'></e-series>
                <e-series :dataSource="seriesData" type="StackingLine100" xName="x" yName="y3" name="Charle" :marker="marker" width=2></e-series>
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
        { x: 'Clothes', y: null, y1: 30, y2: 60, y3: 180 },
        { x: 'Personal Care', y: 30, y1: 80, y2: 80, y3: 30 },
        { x: 'Books', y: 10, y1: 40, y2: 30, y3: 270 },
        { x: 'Fitness', y: 100, y1: 30, y2: 70, y3: 40 },
        { x: 'Electricity', y: 55, y1: 95, y2: undefined, y3: 75 },
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
        interval: 20
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      marker: {
        visible: true, 
        width: 7, 
        height: 7, 
        isFilled: true
      },
      tooltip: {
        enable: true
      },
      emptyPointSettings: { 
        mode: 'Average' 
      },
      emptyPointSettings1: { 
        mode: 'Gap' 
      }
    };
  },
  provide: {
    chart: [Category, Legend, Tooltip, StackingLineSeries]
  }

});