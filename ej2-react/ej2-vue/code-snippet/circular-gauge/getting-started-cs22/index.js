
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
                    <e-axis  minimum= 0 maximum= 12 startAngle= 0 endAngle= 360 :labelStyle ='labelStyle' :minorTicks= 'minorTicks' :majorTicks= 'majorTicks' >
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
`,

    data: function () {
        return {
            majorTicks: {
                interval: 1,
                position: 'Inside',
                height: 10
            },
            minorTicks: {
                interval: 0.2,
                position: 'Inside',
                height: 5
            },
            labelStyle: {
                position: 'Inside',
                hiddenLabel: 'First'
            }
      }
    }

});