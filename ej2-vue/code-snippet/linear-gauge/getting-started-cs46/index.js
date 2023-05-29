
import Vue from 'vue';
import { LinearGaugePlugin } from '@syncfusion/ej2-vue-lineargauge';
Vue.use(LinearGaugePlugin);

new Vue({
	el: '#app',
	template: `
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge  width= '650px' height= '200px'></ejs-lineargauge>
    </div>
  </div>
`,
 
});