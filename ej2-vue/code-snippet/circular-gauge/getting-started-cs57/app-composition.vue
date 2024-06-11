<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis :majorTicks='majorTicks' :minorTicks='minorTicks' :labelStyle='labelStyle'
                        :ranges='ranges'></e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script setup>

import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis } from "@syncfusion/ej2-vue-circulargauge";

const majorTicks = {
    useRangeColor: true
}
const minorTicks = {
    useRangeColor: true
}
const labelStyle = {
    useRangeColor: true
}
const ranges = [{
    start: 0,
    end: 25,
    radius: '108%'
}, {
    start: 25,
    end: 50,
    radius: '70%'
}, {
    start: 50,
    end: 75,
    radius: '70%'
}, {
    start: 75,
    end: 100,
    radius: '108%'
}]

</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
