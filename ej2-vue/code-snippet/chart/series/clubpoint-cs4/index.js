
import Vue from "vue";
import { AccumulationChartPlugin, PieSeries, AccumulationDataLabel } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-accumulationchart id="container">
            <e-accumulation-series-collection :textRender='onTextRender' :pointRender='onPointRender' :dataLabel='datalabel'>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' groupTo='11' :dataLabel='datalabel'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
`,

  data() {
    return {
      seriesData: [
                { x: 'Jan', y: 3, text: 'Jan: 3' }, { x: 'Feb', y: 3.5, text: 'Feb: 3.5' },
                { x: 'Mar', y: 7, text: 'Mar: 7' }, { x: 'Apr', y: 13.5, text: 'Apr: 13.5' },
                { x: 'May', y: 19, text: 'May: 19' }, { x: 'Jun', y: 23.5, text: 'Jun: 23.5' },
                { x: 'Jul', y: 26, text: 'Jul: 26' }, { x: 'Aug', y: 25, text: 'Aug: 25' },
                { x: 'Sep', y: 21, text: 'Sep: 21' }, { x: 'Oct', y: 15, text: 'Oct: 15' },
                { x: 'Nov', y: 9, text: 'Nov: 9' }, { x: 'Dec', y: 3.5, text: 'Dec: 3.5' }
                ],
                datalabel: { visible: true, position: 'Outside', name:'text' }
           };
  },
  provide: {
     accumulationchart: [PieSeries, AccumulationDataLabel]
  },
  methods: {
   onTextRender: function (args) {
        if (args.text.indexOf('Others') > -1) {
            args.text = 'Grouped Slices';
            args.color = 'red';
            args.border.width = 1;
        }
    },
    onPointRender: function (args) {
        if ((args.point.x as string).indexOf('Others') > -1) {
            args.fill = '#D3D3D3';
        }
    }
  }

});