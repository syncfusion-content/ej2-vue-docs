
import Vue from 'vue';
import { CircularGaugePlugin } from "@syncfusion/ej2-vue-circulargauge";

Vue.use(CircularGaugePlugin);
    ;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge :axes = 'axes'>
            </ejs-circulargauge>
        </div>
    </div>
`,

        data: function () {
            return {
                axes: [{
                    startAngle: 270,
                     endAngle: 90
                }]
            }
        }
    
});