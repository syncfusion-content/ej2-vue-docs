
import Vue from 'vue';
import { LinearGaugePlugin } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
;
new Vue({
	el: '#app',
	template: `
    <div class="content-wrapper">
        <div align='center'>
            <ejs-lineargauge :title ='title' :titleStyle ='titleStyle'>
            </ejs-lineargauge>
        </div>
    </div>
`,

    data: function () {
        return {
            title: 'linear gauge',
            titleStyle: {
                fontFamily: "Arial",
                fontStyle: 'italic',
                fontWeight: 'regular',
                color: "#E27F2D",
                size: '23px'
            }
        }
    }

});