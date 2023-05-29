

<template>
    <div class="control_wrapper">
    <div class="spark">
        <ejs-sparkline id="sparkline" align="center" :dataSource='dataSource' :type='type' :valueType= 'valueType' :axisSettings='axisSettings' xName='x' yName='yval' :height='height' :width='width'></ejs-sparkline>
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
   dataSource: [
            { x: 0, yval: 50 },
            { x: 1, yval: 30 },
            { x: 2, yval: 20 },
            { x: 3, yval: 30 },
            { x: 4, yval: 50 },
            { x: 5, yval: 40 },
            { x: 6, yval: 20 },
            { x: 7, yval: 10 },
            { x: 8, yval: 30 },
            { x: 9, yval: 10 },
            { x: 10, yval: 40 }
        ],
    // Set the value to horizontal axis of sparkline
    axisSettings: {
          value: 25
    },
    // Assign the 'Column' as type of the sparkline
    type:'Column',
    // Assign the 'Numeric' as value type of the sparkline
    valueType: 'Numeric'
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


