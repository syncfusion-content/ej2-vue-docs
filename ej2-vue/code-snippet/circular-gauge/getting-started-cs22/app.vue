<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis minimum=0 maximum=12 startAngle=0 endAngle=360 :labelStyle='labelStyle'
                        :minorTicks='minorTicks' :majorTicks='majorTicks'>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>

<script>
import { CircularGaugeComponent, AxesDirective, AxisDirective } from "@syncfusion/ej2-vue-circulargauge";

export default {
    name: "App",
    components: {
        "ejs-circulargauge": CircularGaugeComponent,
        "e-axes": AxesDirective,
        "e-axis": AxisDirective
    },
    data: function () {
        return {
            majorTicks: {
                interval: 1,
                position: 'Inside',
                height: 10
            },
            minorTicks: {
                interval: 0.2,
                position: 'Inside',
                height: 5
            },
            labelStyle: {
                position: 'Inside',
                hiddenLabel: 'First'
            }
        }
    }
};
</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
