
import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category, Legend } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

// declare the series colors
let colors = ['#00BDAE', '#404041', '#357CD2'];
;
new Vue({
	el: '#app',
	template: `
  <div id="app">
  <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :legendSettings='legendSettings' selectionMode='Point' >
     <e-series-collection>
         <e-series :dataSource='seriesData' type='Column' xName='country' yName='gold' name='Gold' legendShape='Circle'> </e-series>
         <e-series :dataSource='seriesData' type='Column' xName='country' yName='silver' name='Silver' legendShape='Circle'> </e-series>
         <e-series :dataSource='seriesData' type='Column' xName='country' yName='bronze' name='Bronze' legendShape='Circle'> </e-series>
     </e-series-collection>
 </ejs-chart>
</div>
<script>

`,

  data() {
    return {
      seriesData: [
                { country: "USA", gold: 50, silver: 70, bronze: 45 },
                { country: "China", gold: 40, silver: 60, bronze: 55 },
                { country: "Japan", gold: 70, silver: 60, bronze: 50 },
                { country: "Australia", gold: 60, silver: 56, bronze: 40 },
                { country: "France", gold: 50, silver: 45, bronze: 35 },
                { country: "Germany", gold: 40, silver: 30, bronze: 22 },
                { country: "Italy", gold: 40, silver: 35, bronze: 37 },
                { country: "Sweden", gold: 30, silver: 25, bronze: 27 }
              ],
        primaryXAxis: {
           valueType: 'Category',
           title: 'Countries'
        },
        legendSettings: {
                visible: true,
                position: 'Top'
        },
      title: "Olympic Medals"
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Legend ]
  },
  methods: {
    onChartLoaded: function(args) {
        let chart = document.querySelector('.e-chart');;
        let legendTextCol = chart.querySelectorAll('[id*="chart_legend_text_"]');
        for (let i = 0; i < legendTextCol.length; i++) {
            //set the color to legend label
            legendTextCol[i].setAttribute('fill', colors[i]);
        }
  },
},});

