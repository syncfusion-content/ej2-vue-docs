<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis :annotations='annotations'>
                        <e-pointers>
                            <e-pointer value=50></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script>
import { createApp } from  "vue";
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointerDirective, PointersDirective, Annotations } from "@syncfusion/ej2-vue-circulargauge";

let contentVue = createApp().component("contentTemplate", {
    template: '<div><span style="font-size:10px; color:#424242; font-family:Regular">pointer Value: 50</span></div>',
    data() {
        return {
            data: {}
        };
    }
});
let contentTemplate = function () {
    return { template: contentVue };
};

export default {
    name: "App",
    components: {
        "ejs-circulargauge": CircularGaugeComponent,
        "e-axes": AxesDirective,
        "e-axis": AxisDirective,
        "e-pointers": PointersDirective,
        "e-pointer": PointerDirective
    },

    data: function () {
        return {
            annotations: [{
                content: contentTemplate,
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