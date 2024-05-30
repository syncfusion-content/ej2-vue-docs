<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis :majorTicks='majorTicks' :minorTicks='minorTicks'>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>

<script setup>
import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis } from "@syncfusion/ej2-vue-circulargauge";

const majorTicks = {
    interval: 10,
    color: 'red',
    height: 10,
    width: 3,
    position: 'Inside',
    offset: 5
}
const minorTicks = {
    interval: 5,
    color: 'green',
    height: 5,
    width: 2,
    position: 'Inside',
    offset: 5
}

</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
