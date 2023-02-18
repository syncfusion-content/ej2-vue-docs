
import Vue from 'vue';
import { LinearGaugePlugin } from '@syncfusion/ej2-vue-lineargauge';

Vue.use(LinearGaugePlugin);

new Vue({
	el: '#app',
	template: `
    <div>
        <div class="content-wrapper">
            <div align='center'>
                <ejs-lineargauge ></ejs-lineargauge>
            </div>
        </div>
  </div>
`,
 
});