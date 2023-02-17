
import Vue from 'vue';
import { CircularGaugePlugin } from "@syncfusion/ej2-vue-circulargauge";

Vue.use(CircularGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge :axes= 'axes'>
            </ejs-circulargauge>
        </div>
    </div>
`,

    data: function () {
    return {
        axes: [{
            majorTicks: {
                interval: 10,
                position: 'Inside',
                height: 10,
            },
            pointers: [],
            minorTicks: {
                interval: 5,
                position: 'Inside',
                height: 5,
            }
        },
        {
            pointers: [],
            majorTicks: {
                interval: 10,
                position: 'Inside',
                height: 10,
                color: '#27d5ff'
            },
            minorTicks: {
                interval: 5,
                position: 'Inside',
                height: 5,
                color: '#27d5ff'
            }
       }]
    }
    }

});