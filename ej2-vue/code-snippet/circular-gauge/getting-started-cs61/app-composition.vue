<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge :tooltip='tooltip'>
                <e-axes>
                    <e-axis>
                        <e-pointers>
                            <e-pointer value=70></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis, PointersDirective as EPointers, PointerDirective as EPointer, GaugeTooltip } from "@syncfusion/ej2-vue-circulargauge";

const tooltip = {
    enable: true,
    template: '<div>Pointer: 70 </div>'
}

provide('circulargauge', [GaugeTooltip]);,

</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
