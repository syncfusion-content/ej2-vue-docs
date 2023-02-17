


<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-circulargauge>
                <e-axes>
                    <e-axis :pointers ='pointers'>
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
          pointers: [{
            value: 90,
            type: 'Marker',
            markerShape: 'InvertedTriangle',
            radius: '100%',
            markerHeight: 15,
            markerWidth: 15
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



