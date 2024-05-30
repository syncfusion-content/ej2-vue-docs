<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge id='tooltip-container' ref="gauge" enablePointerDrag='enablePointerDrag'
                :tooltipRender='tooltipRender' :tooltip='tooltip'>
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
import { provide, ref } from "vue";
import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis, PointersDirective as EPointers, PointerDirective as EPointer, GaugeTooltip } from "@syncfusion/ej2-vue-circulargauge";

const gauge = ref(null);
const enablePointerDrag = true;
const tooltip = {
    enable: true,
    template: '<div id=\'templateWrap\'><div class=\'des\'>pointer <span>${Math.round(value)} </span></div></div>'
}

provide('circulargauge', [GaugeTooltip]);

const tooltipRender = function (args) {
    let value = args.pointer.currentValue;
    debugger;
    gauge.value.ej2Instances.setPointerValue(0, 0, value);
}

</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}

#templateWrap .des {
    float: right;
    padding-left: 10px;
    line-height: 30px;
}
</style>
