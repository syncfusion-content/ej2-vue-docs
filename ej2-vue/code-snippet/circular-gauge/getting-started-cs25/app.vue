


<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis :startAngle='startAngle' :hideIntersectingLabel='hideIntersectingLabel' :endAngle='endAngle' :majorTicks='majorTicks' :minorTicks='minorTicks' minimum=0 maximum=200>
                    </e-axis>
                </e-axes>
            </ejs-circulargauge>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { CircularGaugePlugin } from "@syncfusion/ej2-vue-circulargauge";

Vue.use(CircularGaugePlugin);
export default {
    data: function () {
        return {
            startAngle: 270,
            endAngle: 90,
            hideIntersectingLabel: true,
            majorTicks: {
                interval: 4
            },
            minorTicks: {
                interval: 2
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


