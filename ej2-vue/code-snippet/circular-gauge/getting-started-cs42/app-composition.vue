<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis :pointers='pointers'>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script setup>
import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis } from "@syncfusion/ej2-vue-circulargauge";

const pointers = [{
    value: 90,
    type: 'Marker',
    markerShape: 'InvertedTriangle',
    radius: '100%',
    markerHeight: 15,
    markerWidth: 15
}]

</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
