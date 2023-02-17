


<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge :axes = 'axes'>
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
                axes: [{
                    startAngle: 270,
                     endAngle: 90
                }]
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


