
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
          <e-axis :line='line'></e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
`,

  data: function () {
    return {
      line: {
        height: 150,
        width: 2,
        color: '#4286f4',
        offset: 2
      }
    }
  }

});