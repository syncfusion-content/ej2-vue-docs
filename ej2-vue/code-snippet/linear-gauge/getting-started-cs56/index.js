
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
          <e-axis>
            <e-pointers>
              <e-pointer value=80 type= 'Marker'  markerType= 'Circle'></e-pointer>
            </e-pointers>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
`,
 
});