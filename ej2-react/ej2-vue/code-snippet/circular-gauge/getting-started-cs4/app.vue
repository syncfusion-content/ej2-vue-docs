


<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge title= 'Speedometer' :titleStyle= 'titleStyle'>
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
            titleStyle: {
                color: '#27d5ff'
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



