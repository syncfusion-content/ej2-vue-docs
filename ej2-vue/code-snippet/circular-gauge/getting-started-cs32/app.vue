<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge :legendSettings='legendSettings'>
                <e-axes>
                    <e-axis minimum=0 maximum=100 :majorTicks='majorTicks' :minorTicks='minorTicks'
                        :labelStyle='labelStyle' :ranges='ranges'></e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script>
import { CircularGaugeComponent, AxesDirective, AxisDirective, Legend } from "@syncfusion/ej2-vue-circulargauge";

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
                useRangeColor: true
            },
            minorTicks: {
                useRangeColor: true
            },
            labelStyle: {
                useRangeColor: true
            },
            ranges: [{
                start: 0,
                end: 25,
                radius: '108%'
            }, {
                start: 25,
                end: 50,
                radius: '108%'
            }, {
                start: 50,
                end: 75,
                radius: '108%'
            }, {
                start: 75,
                end: 100,
                radius: '108%'
            }],
            legendSettings: {
                visible: true,
                toggleVisibility: true
            }
        }
    },
    provide: {
        circulargauge: [Legend]
    }
};
</script>
<style>
.wrapper {
    max-width: 300px;
    margin: 0 auto;
}
</style>
