

<template>
    <div>
        <div class="content-wrapper">
            <div align='center'>
                <ejs-lineargauge>
                    <e-axes>
                        <e-axis minimum = 0 maximum = 200  :ranges='ranges'>
                            <e-pointers>
                                <e-pointer value=140 ></e-pointer>
                            </e-pointers>
                        </e-axis>
                    </e-axes>
                </ejs-lineargauge>
            </div>
        </div>
    </div>
</template>
<script>
import { LinearGaugeComponent, AxesDirective, AxisDirective } from "@syncfusion/ej2-vue-lineargauge";

export default {
    components: {
        'ejs-lineargauge': LinearGaugeComponent,
        'e-axes': AxesDirective,
        'e-axis': AxisDirective
    },
    data: function () {
        return {
            labelStyle: {
            format: '{value}°C'
        },
            ranges: [{
            start: 0,
            end: 80,
            startWidth:15,
            endWidth:15
        }, {
            start: 80,
            end: 120,
            startWidth:15,
            endWidth:15
        }, {
            start: 120,
            end: 140,
            startWidth:15,
            endWidth:15
        }, {
            start: 140,
            end: 200,
            startWidth:15,
            endWidth:15
        }]
        }
    }
};
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>


