import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category, ChartAnnotation } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :annotations='annotations'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='country' yName='gold'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { country: "USA",       gold: 50 }, 
        { country: "China",     gold: 40 }, 
        { country: "Japan",     gold: 70 },
        { country: "Australia", gold: 60 }, 
        { country: "France",    gold: 50 }, 
        { country: "Germany",   gold: 40 },
        { country: "Italy",     gold: 40 }, 
        { country: "Sweden",    gold: 30 }
      ],
      annotations: [{
        content: '<div style="border: 1px solid #000; background-color: #f8f8f8; padding: 5px; border-radius: 4px; font-size: 12px; font-weight: bold;">70 Gold Medals</div>',
        coordinateUnits: 'Point',
        x: 'France',
        y: 55,
        accessibility: {
            accessibilityDescription: 'Annotation indicating that France has won 70 Gold Medals.',
            accessibilityRole: 'note',
            focusable: true
        }
      }],
      primaryXAxis: {
        valueType: 'Category',
        title: 'Countries'
      },
      primaryYAxis: {
        title: 'Medals'
      },
      title: "Olympic Medals"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, ChartAnnotation]
  }

});