<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis :startAngle=270 :endAngle=90 :lineStyle='lineStyle' :labelStyle='labelStyle'
                        :majorTicks='majorTicks' :minorTicks='minorTicks' :radius='radius' :minimum=0 :maximum=100
                        :pointers='pointers'>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script>
import { CircularGaugeComponent, AxesDirective, AxisDirective, Gradient } from "@syncfusion/ej2-vue-circulargauge";

export default {
    name: "App",
    components: {
        "ejs-circulargauge": CircularGaugeComponent,
        "e-axes": AxesDirective,
        "e-axis": AxisDirective
    },
    data: function () {
        let pointerLinearGradient = {
            startValue: '0%',
            endValue: '100%',
            colorStop: [
                { color: '#FEF3F9', offset: '0%', opacity: 0.9 },
                { color: '#E63B86', offset: '70%', opacity: 0.9 }]
        }
        return {
            lineStyle: { width: 3, color: '#E63B86' },
            labelStyle: {
                font: { size: '0px' }
            }, majorTicks: {
                height: 0
            }, minorTicks: {
                height: 0
            },
            radius: '90%',
            pointers: [{
                radius: '80%',
                value: 80,
                animation: { enable: true, duration: 1000 },
                pointerWidth: 10,
                linearGradient: pointerLinearGradient,
                cap: {
                    radius: 8,
                    color: 'white',
                    border: {
                        color: '#E63B86',
                        width: 1
                    }
                },
                needleTail: {
                    length: '20%',
                    linearGradient: pointerLinearGradient
                }
            }, {
                radius: '60%', value: 40,
                animation: { duration: 1000 },
                pointerWidth: 10,
                linearGradient: pointerLinearGradient,
                cap: {
                    radius: 8, color: 'white',
                    border: { color: '#E63B86', width: 1 }
                },
                needleTail: {
                    length: '20%',
                    linearGradient: pointerLinearGradient
                }
            }]
        }
    },
    provide: {
        circulargauge: [Gradient]
    }
};
</script>
<style>
.wrapper {
    max-width: 500px;
    margin: 0 auto;
}
</style>
