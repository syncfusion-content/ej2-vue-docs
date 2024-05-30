<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis startAngle=270 endAngle=90 radius='80%' :lineStyle='lineStyle'>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>

<script setup>

import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis } from "@syncfusion/ej2-vue-circulargauge";


const lineStyle = {
    width: 2,
    color: '#F8F8F8'
}

</script>
<style>
.wrapper {
    max-width: 300px;
    max-height: 100px;
    margin: 0px;
}
</style>
