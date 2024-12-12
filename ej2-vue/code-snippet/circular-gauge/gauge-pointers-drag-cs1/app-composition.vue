<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis :pointers='pointer'>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script setup>

import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis, PointersDirective as EPointers, PointerDirective as EPointer } from "@syncfusion/ej2-vue-circulargauge";

const pointer = [
    {
        enableDrag: false,
        value: 90,
        type: 'Marker',
        markerShape: 'InvertedTriangle',
        radius: '100%',
        markerHeight: 15,
        markerWidth: 15
    }, {
        enableDrag: true,
        value: 90,
        type: 'RangeBar',
        radius: '60%',
        pointerWidth: 10
    }, {
        enableDrag: true,
        value: 90,
        radius: '60%',
        cap: {
            radius: 15,
            border: {
                width: 5
            }
        },
        needleTail: {
            length: '22%',
        },
        pointerWidth: 25
    }
];


</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
