<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis startAngle=230 endAngle=130 maximum=120 radius='90%' :pointers='pointers' :ranges='ranges'
                        :lineStyle='lineStyle' :minorTicks='minorTicks' :majorTicks='majorTicks'>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script setup>
import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis } from "@syncfusion/ej2-vue-circulargauge";


const majorTicks = {
    width: 1, color: '#8c8c8c'
};
const lineStyle = { width: 2 };
const minorTicks = {
    width: 1, color: '#8c8c8c'
};
const pointers = [{
    value: 60,
    radius: '60%'
}];
const ranges = [{
    start: 0,
    end: 70,
    radius: '110%',
    strokeWidth: 10
}, {
    start: 70,
    end: 110,
    radius: '110%',
    strokeWidth: 10
}, {
    start: 110,
    end: 120,
    radius: '110%',
    strokeWidth: 10
}]

</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
