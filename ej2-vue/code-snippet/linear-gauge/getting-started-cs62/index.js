
import Vue from 'vue';
import { LinearGaugePlugin, Gradient } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :orientation= 'orientation' :container= 'container'>
        <e-axes>
          <e-axis :ranges='ranges' :pointers= 'pointers' :line= 'line' :majorTicks= 'majorTicks' :minorTicks= 'minorTicks' :labelStyle= 'labelStyle'></e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
`,

  data: function () {
    return {
      orientation: 'Horizontal',
      container: {
        width: 30, offset: 30
      },
      line: { width: 0 },
      majorTicks: { interval: 25, height: 0 },
      minorTicks: { height: 0 },
      labelStyle: {
        font: { color: '#424242'},
        offset: 55
      },
      pointers: [{
        value: 80, height: 25,
        width: 35, placement: 'Near',
        offset: -44, markerType: 'Triangle',
        linearGradient: {
          startValue: '0%',
          endValue: '100%',
          colorStop: [
            { color: '#fef3f9', offset: '0%', opacity: 1 },
            { color: '#f54ea2', offset: '100%', opacity: 1 }]
          }
      }],
      ranges: [{
        start: 0, end: 80,
        startWidth: 30, endWidth: 30,
        color: '#f54ea2', offset: 30,
      }]
    }
  },
  provide: {
    lineargauge: [Gradient]
  }

});