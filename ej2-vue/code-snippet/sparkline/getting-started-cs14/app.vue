

<template>
    <div class="control_wrapper">
    <div>
        <ejs-sparkline id="sparkline" align="center" :dataSource='dataSource' xName='xval' yName='yval' :height='height' :width='width'></ejs-sparkline>
    </div>
    </div>
</template>
<script>
import { SparklineComponent } from "@syncfusion/ej2-vue-charts";

export default {
  components: {
    'ejs-sparkline': SparklineComponent
  },
  data: function() {
    return {
    height: '100px',
    width: '70%',
    dataSource: [
            { x: 0, xval: '2005', yval: 20090440 },
            { x: 1, xval: '2006', yval: 20264080 },
            { x: 2, xval: '2007', yval: 20434180 },
            { x: 3, xval: '2008', yval: 21007310 },
            { x: 4, xval: '2009', yval: 21262640 },
            { x: 5, xval: '2010', yval: 21515750 },
            { x: 6, xval: '2011', yval: 21766710 },
            { x: 7, xval: '2012', yval: 22015580 },
            { x: 8, xval: '2013', yval: 22262500 },
            { x: 9, xval: '2014', yval: 22507620 },
        ]
    }
  }
}
</script>
<style>
.spark {
    border: 1px solid rgb(209, 209, 209);
    border-radius: 2px;
    width: 100%;
    height: 100%;
}
</style>


