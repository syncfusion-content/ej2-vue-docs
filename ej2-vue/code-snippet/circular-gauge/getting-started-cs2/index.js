
import Vue from "vue";
import { CircularGaugePlugin, Annotations } from "@syncfusion/ej2-vue-circulargauge";
Vue.use(CircularGaugePlugin);

let contentVue = Vue.component("contentTemplate", {
    template: '<div><span style="font-size:10px; color:#424242; font-family:Regular">pointer Value: 50</span></div>',
    data() {
        return {
            data: {}
        };
    }
});
let contentTemplate = function() {
    return { template: contentVue };
};
;
new Vue({
	el: '#app',
	template: `
   <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis :annotations='annotations'>  
                        <e-pointers>
                            <e-pointer value=50 ></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
        </div>
`,

    data:function(){
    return {
        annotations: [{
            content: contentTemplate,
            angle: 90,
            radius: '150%',
            zIndex: '1'
        }]
    }
    },
    provide: {
        circulargauge: [Annotations]
    }

});