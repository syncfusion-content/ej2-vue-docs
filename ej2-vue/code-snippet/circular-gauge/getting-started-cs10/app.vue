


<template>
    <div id="app">
        <div class='wrapper'>
           <ejs-circulargauge>
              <e-axes>
                  <e-axis  :lineStyle= 'lineStyle' background= 'rgba(0, 128, 128, 0.3)'>
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
            color: 'red'
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


