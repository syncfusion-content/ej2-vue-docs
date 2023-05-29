
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
                <e-axis radius= '50%'>
                </e-axis>
            </e-axes>
        </ejs-circulargauge>
    </div>
</div>
`,
 
});