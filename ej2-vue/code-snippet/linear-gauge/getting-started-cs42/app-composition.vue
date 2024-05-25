<template>
    <div class="content-wrapper">
        <div align='center'>
            <ejs-lineargauge :container='container'>
                <e-axes>
                    <e-axis >
                        <e-pointers>
                            <e-pointer value= 50 width= 15 type= 'Bar'></e-pointer>
                        </e-pointers>
                    </e-axis>
                </e-axes>
            </ejs-lineargauge>
        </div>
    </div>
</template>
<script setup>

import { LinearGaugeComponent as EjsLineargauge, AxisDirective as EAxis, AxesDirective as EAxes,
    PointerDirective as EPointer, PointersDirective as EPointers } from "@syncfusion/ej2-vue-lineargauge";

const container = {
    width: 30
};

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>