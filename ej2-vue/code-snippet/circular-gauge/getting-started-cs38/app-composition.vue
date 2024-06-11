<template>
    <div class='wrapper'>
        <div id="app">
            <ejs-circulargauge>
                <e-axes>
                    <e-axis :radius='gauge3Radius' :startAngle='startAngle' :endAngle='endAngle' :lineStyle='lineStyle'
                        :labelStyle='labelStyle' :majorTicks='majorTicks' :minorTicks='minorTicks' minimum=0 maximum=100
                        :annotations='annotations'>
                        <e-pointers>
                            <e-pointer value=70 radius='80%' color='green' :pointerWidth='pointerWidth'
                                :needleStartWidth='needleStartWidth' :needleEndWidth='needleEndWidth' :cap='cap'
                                :needleTail='needleTail' :animation='animation'></e-pointer>
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
    template: '<div style="color:#757575; font-family:Roboto; font-size:14px;padding-top: 26px">Customized Needle</div>',
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
    zIndex: '1'
}]
const gauge3Radius = '90%'
const startAngle = 270
const endAngle = 90
const lineStyle = {
    width: 3,
    color: '#1E7145'
}
const labelStyle = {
    position: 'Outside',
    font: {
        color: '#1E7145',
        size: '0px'
    }
}
const majorTicks = {
    interval: 100,
    height: 0,
    width: 1
}
const minorTicks = {
    height: 0,
    width: 0
}
const cap = {
    radius: 8,
    color: 'green'
}
const needleTail = {
    length: '0%'
}
const animation = {
    enable: 'true',
    duration: 1000
}
const pointerWidth = 2
const needleStartWidth = 4
const needleEndWidth = 4

provide('circulargauge', [Annotations]);

</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
