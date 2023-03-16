
import Vue from 'vue';
import { LinearGaugePlugin } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :orientation='orientation' :axes= 'axes' >
      </ejs-lineargauge>
    </div>
  </div>
`,

  data: function () {
    return {
      orientation: "Horizontal",
      axes: [{
        minimum: 20,
        maximum: 140,
      }]
    }
  }

});