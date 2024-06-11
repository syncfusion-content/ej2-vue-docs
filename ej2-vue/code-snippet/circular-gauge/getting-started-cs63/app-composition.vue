<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge style='display:block' align='center' id='tooltip-container' ref="gauge" :title='title'
                :titleStyle='titleStyle' :enablePointerDrag='enablePointerDrag' :tooltipRender='tooltipRender'
                :tooltip='tooltip'>
                <e-axes>
                    <e-axis :radius='gaugeradius' :startAngle='startAngle' minimum=0 maximum=120 :endAngle='endAngle'
                        :majorTicks='majorTicks' :lineStyle='lineStyle' :minorTicks='minorTicks'
                        :labelStyle='labelStyle' :ranges='ranges'>
                        <e-pointers>
                            <e-pointer :value='value' :cap='cap' :radius='pointerRadius' :color='color'
                                :animation='animation'></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis, PointersDirective as EPointers, PointerDirective as EPointer, GaugeTooltip } from "@syncfusion/ej2-vue-circulargauge";


const gague = ref(null);
const title = 'Tooltip Customization'
const titleStyle = {
    size: '15px',
    color: 'grey'
}
const gaugeradius = '90%'
const startAngle = 240
const endAngle = 120
const lineStyle = {
    width: 0
}
const majorTicks = {
    color: 'white',
    offset: -5,
    height: 12
}
const minorTicks = {
    width: 0
}
const labelStyle = {
    useRangeColor: true,
    font: {
        color: '#424242',
        size: '13px',
        fontFamily: 'Roboto'
    }
}
const value = 70
const pointerRadius = '60%'
const color = '#33BCBD'
const cap = {
    radius: 10,
    border: {
        color: '#33BCBD',
        width: 5
    }
}
const animation = {
    enable: true,
    duration: 1500
}
const ranges = [{
    start: 0,
    end: 50,
    startWidth: 10,
    endWidth: 10,
    radius: '102%',
    color: '#3A5DC8',
}, {
    start: 50,
    end: 120,
    radius: '102%',
    startWidth: 10,
    endWidth: 10,
    color: '#33BCBD',
}]
const tooltip = {
    enable: true,
    fill: 'transparent',
    template: "<div id='templateWrap'><img src='src/circulargauge/images/range1.png'/><img src='src/circulargauge/images/range3.png'/><div class='des'><span>${Math.round(pointers[0].value)} MPH</span></div></div>",
    border: {
        color: '#33BCBD',
        width: 2
    }
}
const enablePointerDrag = true

provide('circulargauge', [GaugeTooltip]);

const load = function (args) {
    let selectedTheme = location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : "Material";
    args.gauge.theme =
        selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
}
const tooltipRender = function (args) {
    let color;
    let cotainerObj = gauge.value.ej2Instances;
    let value = args.pointer.currentValue;
    debugger;
    let content = args.content;
    if (value >= 0 && value <= 50) {
        let color = '#3A5DC8';
        content.children[1].remove();
        args.textStyle.color = color;
        args.border.color = color;
        cotainerObj.axes[0].pointers[0].animation.enable = false;
        cotainerObj.axes[0].pointers[0].color = color;
        cotainerObj.axes[0].pointers[0].cap.border.color = color;
        cotainerObj.setPointerValue(0, 0, value);
    } else {
        let color = '#33BCBD';
        content.children[0].remove();
        args.textStyle.color = color;
        args.border.color = color;
        cotainerObj.axes[0].pointers[0].animation.enable = false;
        cotainerObj.axes[0].pointers[0].color = color;
        cotainerObj.axes[0].pointers[0].cap.border.color = color;
        cotainerObj.setPointerValue(0, 0, value);
    }
}
</script>

<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}

#templateWrap img {
    border-radius: 30px;
    width: 30px;
    height: 30px;
    margin: 0 auto;
}

#templateWrap .des {
    float: right;
    padding-left: 10px;
    line-height: 30px;
}
</style>
