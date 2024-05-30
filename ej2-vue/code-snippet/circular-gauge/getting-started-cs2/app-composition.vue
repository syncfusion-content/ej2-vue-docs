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
<script setup>
import { provide, createApp } from "vue";
import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis, PointersDirective as EPointers, PointerDirective as EPointer, Annotations } from "@syncfusion/ej2-vue-circulargauge";

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

const annotations = [{
    content: contentTemplate,
    angle: 90,
    radius: '150%',
    zIndex: '1'
}]

provide('circulargauge', [Annotations]);

</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
