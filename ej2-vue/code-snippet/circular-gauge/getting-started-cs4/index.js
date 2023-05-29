
import Vue from 'vue';
import { CircularGaugePlugin } from "@syncfusion/ej2-vue-circulargauge";

Vue.use(CircularGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge title= 'Speedometer' :titleStyle= 'titleStyle'>
            </ejs-circulargauge>
        </div>
    </div>
`,

    data: function () {
        return {
            titleStyle: {
                color: '#27d5ff'
            }
        }
    }

});