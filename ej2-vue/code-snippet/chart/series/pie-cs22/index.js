
import Vue from "vue";
import { AccumulationChartPlugin, AccumulationTooltip, PieSeries, AccumulationDataLabel, AccumulationLegend  } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-accumulationchart id='chartcontainer' :title='title'
             :legendSettings='legendSettings' :tooltip='tooltip' enableSmartLables='true' :enableAnimation='enableAnimation' :center='center'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' :startAngle='startAngle' :endAngle='endAngle'  :radius='radius'  xName='x' yName='y' :dataLabel='dataLabel' name='Browser' innerRadius='0%'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { 'x': 'Chrome', y: 37, text: '37%' }, { 'x': 'UC Browser', y: 17, text: '17%' },
        { 'x': 'iPhone', y: 19, text: '19%' },
        { 'x': 'Others', y: 4, text: '4%' }, { 'x': 'Opera', y: 11, text: '11%' },
        { 'x': 'Android', y: 12, text: '12%' }
      ],
      dataLabel: {
        visible: true,
        position: 'Inside', name: 'text',
        font: {
          fontWeight: '600'
        }
      },
      enableSmartLabels: true,
      enableAnimation: false,
      legendSettings: {
        visible: false,
      },
      tooltip: { enable: false, format: '${point.x} : <b>${point.y}%</b>' },
      startAngle: '0',
      endAngle: '360',
      radius: '70%',
      explodeOffset: '10%',
      explodeIndex : 0,
      center: {x: '50%', y: '50%'},
      title: "Mobile Browser Statistics"
    };
  },
  provide: {
     accumulationchart: [PieSeries, AccumulationDataLabel]
  }

});