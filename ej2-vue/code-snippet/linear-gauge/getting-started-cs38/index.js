
import Vue from 'vue';
import { LinearGaugePlugin } from "@syncfusion/ej2-vue-lineargauge";

Vue.use(LinearGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
   <div>
    <div class="content-wrapper">
        <div align='center'>
            <ejs-lineargauge>
                <e-axes>
                    <e-axis minimum=0 maximum=200>
                        <e-pointers>
                            <e-pointer value=40 color='green'></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-lineargauge>
        </div>
    </div>
  </div>
`,
 
});