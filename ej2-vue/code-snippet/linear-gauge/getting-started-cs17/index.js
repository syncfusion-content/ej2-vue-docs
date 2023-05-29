
import Vue from 'vue';
import { LinearGaugePlugin } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge >
        <e-axes>
          <e-axis :labelStyle='labelStyle'></e-axis>
          <e-axis :opposedPosition='opposedPosition' :labelStyle='labelStyle1'></e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
`,

  data: function () {
    return {
      labelStyle: {
        format: '{value}°C'
      },
      opposedPosition: true,
      labelStyle1: {
        format: '{value}°F'
      }
    }
  }

});