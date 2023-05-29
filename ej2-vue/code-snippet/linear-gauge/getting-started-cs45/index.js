
import Vue from 'vue';
import { LinearGaugePlugin } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
    <div class="content-wrapper">
        <div align='center'>
            <ejs-lineargauge orientation='Horizontal' :allowMargin=false :margin='margin' background='skyblue':border ='border'>
            </ejs-lineargauge>
        </div>
    </div>
`,

    data: function () {
        return {
            border: { color: "#FF0000", width: 2 },
            margin: {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
             }
        }
    }

});