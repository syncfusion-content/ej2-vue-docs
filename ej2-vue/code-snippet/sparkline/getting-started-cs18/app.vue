

<template>
    <div class="control_wrapper">
    <div class="spark">
        <ejs-sparkline id="sparkline" align="center" :dataSource='dataSource' :enableRtl='enableRtl' :height='height' :width='width'></ejs-sparkline>
    </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { SparklinePlugin,SparklineTooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(SparklinePlugin);

export default {
  data: function() {
    return {
    height: '150px',
    width: '150px',
    enableRtl: true
    dataSource: [30000, 60000, 40000, 10000, 30000, 20000, 50000]
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


