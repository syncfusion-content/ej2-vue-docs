

<template>
    <div id="app">
        <div class='wrapper'>
        <ejs-circulargauge :legendSettings= 'legendSettings'>
            <e-axes>
                <e-axis minimum=0 maximum=100 :majorTicks= 'majorTicks' :minorTicks= 'minorTicks' :labelStyle= 'labelStyle' :ranges='ranges'></e-axis>
            </e-axes>
        </ejs-circulargauge>
        </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { CircularGaugePlugin, Legend } from "@syncfusion/ej2-vue-circulargauge";

Vue.use(CircularGaugePlugin);
export default {
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
                radius: '108%',
                legendText: 'light air'
            },{
                start: 25,
                end: 50,
                radius: '108%',
                legendText: 'light air'
            },{
                start: 50,
                end: 75,
                radius: '108%',
                legendText: 'light breeze'
            },{
                start: 75,
                end: 100,
                radius: '108%',
                legendText: 'Gentle breeze'
            }],
            legendSettings : {
                visible: true,
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


