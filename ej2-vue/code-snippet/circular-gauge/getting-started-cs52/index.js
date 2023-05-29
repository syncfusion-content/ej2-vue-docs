
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
    <e-axis :ranges='ranges'></e-axis>
    </e-axes>
    </ejs-circulargauge>
  </div>
  </div>
`,

    data: function () {
        return {
            ranges: [{
             start: 40,
            end: 80, endWidth: 15,
            startWidth: 15,
            color: '#ff5985'
        }]
        }
    }

});