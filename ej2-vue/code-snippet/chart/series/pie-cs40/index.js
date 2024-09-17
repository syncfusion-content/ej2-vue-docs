
import Vue from "vue";
import { AccumulationChartPlugin, PieSeries, AccumulationLegend  } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-accumulationchart id='chartcontainer' width='92%' :title='title' 
             :legendSettings='legendSettings'  :enableAnimation='enableAnimation'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' :startAngle='startAngle' :endAngle='endAngle'   xName='x' yName='y' name='Browser' innerRadius='60%' borderRadius='8'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'Argentina', y: 505370, r: '100' },
        { x: 'Belgium', y: 551500, r: '118.7' },
        { x: 'Cuba', y: 312685, r: '124.6' },
        { x: 'Dominican Republic', y: 350000, r: '137.5' },
        { x: 'Egypt', y: 301000, r: '150.8' },
        { x: 'Kazakhstan', y: 300000, r: '155.5' },
        { x: 'Somalia', y: 357022, r: '160.6' }
      ],
      enableAnimation: true,
      legendSettings: {
        visible: false,
      },
      startAngle: '0',
      endAngle: '360',
      title: "Mobile Browser Statistics"
    };
  },
  provide: {
     accumulationchart: [PieSeries, AccumulationLegend]
  }

});