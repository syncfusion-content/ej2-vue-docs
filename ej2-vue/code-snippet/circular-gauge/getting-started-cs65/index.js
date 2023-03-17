
import Vue from 'vue';
import { CircularGaugePlugin } from '@syncfusion/ej2-vue-circulargauge';

Vue.use(CircularGaugePlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
         <ejs-circulargauge >
          <e-axes>
            <e-axis>
              <e-pointers>
                <e-pointer :value='val'/>
              </e-pointers>
            </e-axis>
          </e-axes>
         </ejs-circulargauge>
      </div>
    </div>
`,

   data () {
    return {
      val : 35
    }
  }

});