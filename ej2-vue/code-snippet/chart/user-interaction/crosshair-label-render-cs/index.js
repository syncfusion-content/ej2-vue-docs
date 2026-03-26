import Vue from "vue";
import { ChartPlugin, LineSeries, Crosshair, Category, Legend } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-chart id="container" :primaryXAxis='primaryXAxis' :crosshair='crosshair' :crosshairLabelRender='crosshairLabelRender'>
        <e-series-collection>
          <e-series :dataSource='seriesData' xName='x' yName='y' type='Line' name='Series'></e-series>
        </e-series-collection>
      </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: 'January', y: 1200 },
        { x: 'February', y: 900 },
        { x: 'March', y: 1500 },
        { x: 'April', y: 700 },
        { x: 'May', y: 2000 },
        { x: 'June', y: 300 }
      ],
      primaryXAxis: {
        valueType: 'Category',
        crosshairTooltip: { enable: true } 
      },
      primaryYAxis: {
        crosshairTooltip: { enable: true }
      },
      crosshair: {
        enable: true
      }
    };
  },
  methods: {
    crosshairLabelRender: function(args) {
      if (args.axisName === 'primaryYAxis' && typeof args.value === 'number') {
        if (args.value > 1000) {
          args.text = (args.value / 1000).toFixed(1) + 'K';
          args.textStyle = args.textStyle || {};
          args.textStyle.color = '#d32f2f';
          args.fill = '#ffebee';
        }
        if (args.value < 0) {
          args.cancel = true;
        }
      }
      if (args.axisOrientation === 'Horizontal' && typeof args.text === 'string') {
        if (args.text.length > 8) {
          args.text = args.text.substring(0, 8) + '...';
        }
      }
    }
  },
  provide: {
    chart: [LineSeries, Crosshair, Category, Legend]
  }

});
