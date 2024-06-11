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
<script>

import { LinearGaugeComponent, AxisDirective, AxesDirective, RangeDirective, RangesDirective } from "@syncfusion/ej2-vue-lineargauge";

export default {
name: "App",
components: {
"ejs-lineargauge":LinearGaugeComponent,
"e-axes":AxesDirective,
"e-axis":AxisDirective,
"e-ranges":RangesDirective,
"e-range":RangeDirective
},
    data: function () {
        return {
            labelStyle: {
                useRangeColor: true
            }
        }
    }
};
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>