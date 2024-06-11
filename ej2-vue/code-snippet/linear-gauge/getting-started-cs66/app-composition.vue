<template>
    <div class="content-wrapper">
        <div align='center'>
            <ejs-lineargauge>
                <e-axes>
                    <e-axis :labelStyle='labelStyle'>
                        <e-ranges>
                           <e-range start=50 end=80 color="red"></e-range>
                        </e-ranges>
                    </e-axis>
                </e-axes>
            </ejs-lineargauge>
        </div>
    </div>
</template>
<script setup>

import { LinearGaugeComponent as EjsLineargauge, AxisDirective as EAxis, AxesDirective as EAxes,
    RangesDirective as ERanges, RangeDirective as ERange } from "@syncfusion/ej2-vue-lineargauge";

const labelStyle = {
    useRangeColor: true
};

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>