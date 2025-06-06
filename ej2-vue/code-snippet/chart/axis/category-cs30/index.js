
import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category, Selection, Series, Tooltip } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' selectionMode='Series'
         :tooltipRender='tooltipRender' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='country' yName='gold' name='Gold'> </e-series>
                <e-series :dataSource='seriesData' type='Column' xName='country' yName='silver' name='Silver'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
             { country: "USA", gold: 50, silver: 60 },
             { country: "China", gold: 40, silver: 50 },
             { country: "Japan", gold: 70, silver: 80 },
             { country: "Australia", gold: 60, silver: 70 },
             { country: "France", gold: 50, silver: 60 },
             { country: "Germany", gold: 40, silver: 50 },
             { country: "Italy", gold: 40, silver: 50 },
             { country: "Sweden", gold: 30, silver: 70 }
              ],
        primaryXAxis: {
           valueType: 'Category',
           title: 'Countries'
        },
          primaryYAxis:
        {
            minimum: 0, maximum: 80,
            interval: 20, title: 'Medals'
        },
      title: "Olympic Medals",
      tooltip: { enable: true }
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Selection, Tooltip]
  },
   methods: {
        tooltipRender: function(args) {
       var series = (args.series);
       if (series.seriesElement.childNodes[0].classList[0] === 'container_ej2_deselected') {
        args.cancel = true;
      } else {
        args.cancel = false;
      }
        }
  }

});