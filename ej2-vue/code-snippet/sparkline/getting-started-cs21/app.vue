

<template>
    <div class="control_wrapper">
    <div class="spark">
        <ejs-sparkline id="sparkline" align="center" :dataSource='dataSource' :markerSettings='markerSettings' fill= 'blue':axisSettings='axisSettings' :height='height' :width='width'></ejs-sparkline>
    </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { SparklinePlugin } from "@syncfusion/ej2-vue-charts";
Vue.use(SparklinePlugin);

export default {
  data: function() {
    return {
    height: '200px',
    width: '350px',
    axisSettings: {
        minX: -1, maxX: 7, maxY: 7, minY: -1
    }
    dataSource:   [3, 6, 4, 1, 3, 2, 5],
    // To enable marker for high and low points with color customization
    markerSettings: {
        visible: ['All'],
        size: 5, fill: 'white', border: { color: 'blue', width: 2}
    }
    }
  }
}
</script>
<style>
.spark {
    width: 100%;
    height: 100%;
}
</style>


