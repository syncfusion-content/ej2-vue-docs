


<template>
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
</template>
<script>
import Vue from "vue";
import { CircularGaugePlugin, Annotations } from "@syncfusion/ej2-vue-circulargauge";

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
Vue.use(CircularGaugePlugin);
export default {
    data:function(){
    return {
        annotations:[{
            content:contentTemplate,
            zIndex: '1'
        }]
    }
    },
    provide: {
        circulargauge: [Annotations]
    }
};
</script>
<style>
    .wrapper {
        max-width: 300px;
        margin: 0 auto;
    }
</style>



