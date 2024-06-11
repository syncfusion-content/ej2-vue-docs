<template>
    <div class="content-wrapper">
        <div align='center'>
            <ejs-lineargauge>
                <e-axes>
                    <e-axis >
                        <e-ranges>
                            <e-range start= 0 end= 30 startWidth= 10 endWidth= 10  color= '#41f47f'></e-range>
                            <e-range start= 30 end= 50 startWidth= 10 endWidth= 10  color= '#f49441'></e-range>
                            <e-range start= 50 end= 100 startWidth= 10 endWidth= 10  color= '#cd41f4'> </e-range>
                        </e-ranges>
                    </e-axis>
                </e-axes>
            </ejs-lineargauge>
        </div>
    </div>
</template>
<script>

import { LinearGaugeComponent, AxesDirective, AxisDirective, RangeDirective, RangesDirective } from "@syncfusion/ej2-vue-lineargauge";

export default {
name: "App",
components: {
"ejs-lineargauge":LinearGaugeComponent,
"e-axes":AxesDirective,
"e-axis":AxisDirective,
"e-ranges":RangesDirective,
"e-range":RangeDirective
},
 };
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>