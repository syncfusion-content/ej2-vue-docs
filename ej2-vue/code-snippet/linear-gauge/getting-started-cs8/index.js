
import Vue from 'vue';
import { LinearGaugePlugin } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge>
        <e-axes>
          <e-axis minimum= 20  maximum= 140 :majorTicks='majorTicks' :minorTicks='minorTicks'>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
`,

  data: function () {
    return {
      majorTicks: {
        interval: 20,
        color: "Orange",
        position: "Outside"
      },
      minorTicks: {
        interval: 5,
        color: 'red',
        position: "Cross"
      }
    }
  }

});