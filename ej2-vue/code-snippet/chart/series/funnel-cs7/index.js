
import Vue from "vue";
import { AccumulationChartPlugin, FunnelSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-accumulationchart id="container" :pointRender='onPointRender'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' type='Funnel' xName='x' yName='y'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
`,

  data() {
    return {
      seriesData: [
                { x: 'Renewed', y: 18.20, text: 'Renewed 18.20%' },
                { x: 'Subscribe', y: 27.3, text: 'Subscribe 27.3%' },
                { x: 'Support', y: 55.9, text: 'Support 55.9%' },
                { x: 'Downloaded', y: 76.8, text: 'Downloaded 76.8%' },
                { x: 'Visited', y: 100, text: 'Visited 100%' }
            ]
    };
  },
  provide: {
     accumulationchart: [FunnelSeries]
  },
  methods: {
    onPointRender: function (args) {
        if ((args.point.x as string).indexOf('Downloaded') > -1) {
            args.fill = '#f4bc42';
        }
        else {
            args.fill = '#597cf9';
        }
    }
  }

});