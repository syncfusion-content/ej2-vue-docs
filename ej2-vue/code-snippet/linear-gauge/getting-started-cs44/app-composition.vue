<template>
    <div class="content-wrapper">
        <div align='center'>
            <ejs-lineargauge :container='container'>
                <e-axes>
                    <e-axis >
                        <e-pointers>
                            <e-pointer value= 50  type= 'Bar'></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-lineargauge>
        </div>
  </div>
</template>
<script setup>

import { LinearGaugeComponent as EjsLineargauge, AxesDirective as EAxes, AxisDirective as EAxis, PointersDirective as EPointers, PointerDirective as EPointer } from "@syncfusion/ej2-vue-lineargauge";

const container = {
    width: 30,
    type: 'Thermometer'
};

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>