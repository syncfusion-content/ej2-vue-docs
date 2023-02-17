
import Vue from 'vue';
import { CircularGaugePlugin, GaugeTooltip } from "@syncfusion/ej2-vue-circulargauge";

Vue.use(CircularGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
          <ejs-circulargauge   :tooltip='tooltip' >
              <e-axes>
                  <e-axis >
                      <e-pointers>
                          <e-pointer value=70 ></e-pointer>
                      </e-pointers>
                  </e-axis>
              </e-axes>
          </ejs-circulargauge>
      </div>
    </div>
`,

    data: function () {
        return {
            tooltip: {
               enable: true,
               template: '<div>Pointer: 70 </div>'
            }
        }
    },
    provide: {
        circulargauge: [GaugeTooltip]
    },

});