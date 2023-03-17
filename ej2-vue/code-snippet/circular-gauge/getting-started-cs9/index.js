
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
                    <e-axis startAngle= 270 endAngle= 90  radius= '80%' :lineStyle= 'lineStyle'>
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
                color: '#F8F8F8'
            },
        }
    }

});