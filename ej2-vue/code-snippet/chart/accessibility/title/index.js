import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category, Legend } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-chart id="container" :title='title' :titleStyle='titleStyle' :subTitleStyle='subTitleStyle' :subTitle='subTitle' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='country' yName='gold' name='Gold'> </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='country' yName='silver' name='Silver'> </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='country' yName='bronze' name='Bronze'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data: function () {
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
      primaryXAxis: {
        valueType: 'Category',
        title: 'Countries',
        labelPlacement: 'OnTicks'
      },
      primaryYAxis: {
        minimum: 0, 
        maximum: 80,
        interval: 20, 
        title: 'Medals'
      },
      title: 'Olympic Medals Comparison by Country',
      subTitle: 'Medal Comparison',
      titleStyle: {
        accessibility: {
          accessibilityDescription: 'This chart shows the number of gold, silver, and bronze medals won by different countries in the Olympics.',
          accessibilityRole: 'heading'
        }
      },
      subTitleStyle: {
        accessibility: {
            accessibilityDescription: 'The subtitle provides additional context for the Olympic medal distribution chart.',
            accessibilityRole: 'heading'
        }
      }
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Legend]
  }

});