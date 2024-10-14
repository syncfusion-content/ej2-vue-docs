import Vue from "vue";
import { ChartPlugin, ParetoSeries, LineSeries, ColumnSeries, Category, Legend, Tooltip, Highlight } from "@syncfusion/ej2-vue-charts";
import { Browser } from '@syncfusion/ej2-base';

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
         <ejs-chart id="container":title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :legendSettings='legendSettings' :tooltip='tooltip' :chartArea='chartArea'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Pareto' xName='x' yName='y' name='Defect' width='2' opacity=0.75 columnWidth=0.4 :paretoOptions='paretoOptions' :cornerRadius='cornerRadius'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data: function () {
    return {
      seriesData: [
        { x: 'Button Defect', y: 23 },
        { x: 'Pocket Defect', y: 16 },
        { x: 'Coller Defect', y: 10 },
        { x: 'Cuff Defect', y: 7 },
        { x: 'Sleeve Defect', y: 6 },
        { x: 'Other Defect', y: 2 }
      ],
      primaryXAxis: {
        interval: 1,
        valueType: 'Category',
        majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
        majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
        lineStyle: { width: 0 }, labelIntersectAction: 'Rotate45'
      },
      primaryYAxis: {
        title: 'Frequency of Occurence',
        minimum: 0,
        maximum: 25,
        interval: 5,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
        minorGridLines: { width: 1 }, minorTickLines: { width: 0 }
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      title: 'Defects in Shirts',
      legendSettings: { visible: true, enableHighlight: true },
      tooltip: {
        enable: true,
        shared: true,
        format: '${series.name} : <b>${point.y}</b>'
      },
      paretoOptions: {
        marker: { 
          visible: true, 
          isFilled: true, 
          width: 7, 
          height: 7 
        },
        fill: '#F7523F',
        width: 2,
        showAxis: false
      },
      cornerRadius: { 
        topLeft: Browser.isDevice ? 4 : 6, 
        topRight: Browser.isDevice ? 4 : 6 
      }
    };
  },
  provide: {
    chart: [ParetoSeries, LineSeries, ColumnSeries, Category, Legend, Tooltip, Highlight]
  }

});