<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge background='skyblue' :border='border' :margin='margin'>
                <e-axes>
                    <e-axis startAngle=230 endAngle=130 maximum=120 radius='90%' :pointers='pointers' :ranges='ranges'
                        :lineStyle='lineStyle' :minorTicks='minorTicks' :majorTicks='majorTicks'>
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
            border: { color: "#FF0000", width: 2 },
            margin: { left: 40, right: 40, top: 40, bottom: 40 },
            majorTicks: {
                width: 1, color: '#8c8c8c'
            },
            lineStyle: { width: 2 },
            minorTicks: {
                width: 1, color: '#8c8c8c'
            },
            pointers: [{
                value: 60,
                radius: '60%'
            }],
            ranges: [{
                start: 0,
                end: 70,
                radius: '110%',
                strokeWidth: 10
            }, {
                start: 70,
                end: 110,
                radius: '110%',
                strokeWidth: 10
            }, {
                start: 110,
                end: 120,
                radius: '110%',
                strokeWidth: 10
            }]
        }
    }
};
</script>
<style>
.wrapper {
    max-width: 400px;
    max-height: 100px;
    margin: 0 auto;
}
</style>
