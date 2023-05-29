

<template>
    <div class="control_wrapper">
    <div class="spark">
        <ejs-sparkline id="sparkline" align="center" :dataSource='dataSource' :border='border' fill= '#b2cfff' :containerArea='containerArea' :type='type' :height='height' :width='width'></ejs-sparkline>
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
    // To render border around the sparkline
    containerArea: {
        border: { color: '#033e96', width: 2 }
    },
    border: { color: '#033e96', width: 1 },
    height: '200px',
    width: '350px',
    type: 'Area',
    fill: '#b2cfff'
    dataSource: [3, 6, 4, 1, 3, 2, 5]
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


