
import Vue from 'vue';
import { LinearGaugePlugin } from "@syncfusion/ej2-vue-lineargauge";

Vue.use(LinearGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
    <div>
        <div class="content-wrapper">
            <ejs-lineargauge style='display:block' :title ='title' ></ejs-lineargauge>
        </div>
    </div>
`,

    data: function () {
        return {
            title: 'linear gauge',
        }
    }

});