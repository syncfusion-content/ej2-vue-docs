<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis minimum=0 maximum=12 startAngle=0 endAngle=360 :labelStyle='labelStyle'
                        :minorTicks='minorTicks' :majorTicks='majorTicks'>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>

<script setup>
import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis } from "@syncfusion/ej2-vue-circulargauge";

const majorTicks = {
    interval: 1,
    position: 'Inside',
    height: 10
}
const minorTicks = {
    interval: 0.2,
    position: 'Inside',
    height: 5
}
const labelStyle = {
    position: 'Inside',
    hiddenLabel: 'First'
}

</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
