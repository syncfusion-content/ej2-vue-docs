
import Vue from 'vue';
import { CircularGaugePlugin, GaugeTooltip } from "@syncfusion/ej2-vue-circulargauge";

Vue.use(CircularGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
   <div id="app">
      <div class='wrapper'>
          <ejs-circulargauge id='tooltip-container' enablePointerDrag= 'enablePointerDrag' :tooltipRender='tooltipRender' :tooltip='tooltip' >
              <e-axes>
                  <e-axis>
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
            enablePointerDrag: true
            tooltip: {
                enable: true,
                template: '<div id='templateWrap'><div class='des'>pointer <span>${Math.round(value)} </span></div></div>'
            }
          }
    },
    provide: {
        circulargauge: [GaugeTooltip]
    },
    methods:{
        tooltipRender: function (args) {
            let cotainerObj = document.getElementById('tooltip-container');
            let value = args.pointer.currentValue;
            debugger;
            cotainerObj.ej2_instances[0].setPointerValue(0, 0, value);
        }
    }

});