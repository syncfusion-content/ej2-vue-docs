
import Vue from 'vue';
import { CircularGaugePlugin } from "@syncfusion/ej2-vue-circulargauge";

Vue.use(CircularGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div class='wrapper'>
           <ejs-circulargauge>
              <e-axes>
                  <e-axis  :lineStyle= 'lineStyle' background= 'rgba(0, 128, 128, 0.3)'>
                  </e-axis>
              </e-axes>
           </ejs-circulargauge>
        </div>
    </div>
`,

    data: function () {
        return {
            lineStyle: {
            width: 2,
            color: 'red'
        }
        }
    }

});