

<template>
    <div class="content-wrapper">
        <div align='center'>
            <ejs-lineargauge :orientation= 'orientation' :container= 'container'>
                <e-axes>
                    <e-axis :ranges='ranges' :pointers= 'pointers' :line= 'line' :majorTicks= 'majorTicks' :minorTicks= 'minorTicks' :labelStyle= 'labelStyle'></e-axis>
                </e-axes>
            </ejs-lineargauge>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { LinearGaugePlugin } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
export default {
    data: function () {
        return {
            orientation: 'Horizontal',
            container: {
                width: 30, offset: 30
            },
            line: { width: 0 },
            majorTicks: { interval: 25, height: 0 },
            minorTicks: { height: 0 },
            labelStyle: {
                font: { color: '#424242',
                }, offset: 55
            },
            pointers: [{
                value: 80, height: 25,
                width: 35, placement: 'Near',
                offset: -44, markerType: 'Triangle',
                color: '#f54ea2'
            }],
            ranges: [{
                start: 0, end: 80,
                startWidth: 30, endWidth: 30,
                offset: 30,
                radialGradient: {
                    radius: '65%',
                    outerPosition: { x: '50%', y: '70%' },
                    innerPosition: { x: '60%', y: '60%' },
                    colorStop: [
                        { color: '#fff5f5', offset: '5%', opacity: 0.9 },
                        { color: '#f54ea2', offset: '100%', opacity: 0.9 }]
                }
            }]
        }
    },
    provide: {
        lineargauge: [Gradient]
    }
};
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>


