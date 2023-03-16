

<template>
    <div class="control_wrapper">
    <div class="spark">
        <ejs-sparkline id="sparkline" align="center" :dataSource='dataSource' :border='border' :containerArea='containerArea' :padding='padding' fill= '#b2cfff' :type='type' :height='height' :width='width'></ejs-sparkline>
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
    containerArea: {
        border: { color: '#033e96', width: 2 }
    },
    // To render sparkline with padding
    padding: { left: 20, right: 20, bottom: 20, top: 20},
    border: { color: '#033e96', width: 1 },
    height: '200px',
    width: '350px',
    type: 'Area',
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


