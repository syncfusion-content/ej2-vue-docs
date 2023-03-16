

<template>
    <div class="control_wrapper">
    <div class="spark">
        <ejs-sparkline id="sparkline" align="center" :dataSource='dataSource' :tiePointColor='tiePointColor' :type='type' :valueType='valueType' :height='height' :width='width'></ejs-sparkline>
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
    height: '150px',
    width: '130px',
    dataSource: [12, 15, -10, 13, 15, 6, -12, 17, 13, 0, 8, -10],
    // Assign the 'WinLoss' as type of Sparkline
    type:'WinLoss',
    // Assign "Numeric" as the value type of the sparkline
    valueType: 'Numeric',
    tiePointColor:'blue'
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


