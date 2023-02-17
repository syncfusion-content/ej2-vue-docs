


<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis startAngle= 0 endAngle= 180 :lineStyle= 'lineStyle'>
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
            lineStyle: {
                width: 2,
                color: '#F8F8F8'
            }
        }
    }
};
</script>
<style>
    .wrapper {
        max-width: 300px;
        max-height: 100px;
        margin: 0px;
    }
</style>


