<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis :startAngle='startAngle' :hideIntersectingLabel='hideIntersectingLabel' :endAngle='endAngle'
                        :majorTicks='majorTicks' :minorTicks='minorTicks' minimum=0 maximum=200>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script setup>

import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis } from "@syncfusion/ej2-vue-circulargauge";

const startAngle = 270;
const endAngle = 90;
const hideIntersectingLabel = true;
const majorTicks = {
    interval: 4
};
const minorTicks = {
    interval: 2
};

</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
