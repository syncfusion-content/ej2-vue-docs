<template>
  <div class="control_wrapper">
    <ejs-treemap id="treemap" :dataSource='dataSource' :weightValuePath='weightValuePath' :legendSettings='legendSettings'
      :palette='palette' :leafItemSettings='leafItemSettings'></ejs-treemap>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { TreeMapComponent as EjsTreemap, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";

const dataSource = [
  { fruit: 'Apple', count: 5000 },
  { fruit: 'Grape', count: 3000 },
  { fruit: 'Apple', count: 2300 },
  { fruit: 'Banana', count: 500 },
  { fruit: 'Grape', count: 4300 },
  { fruit: 'Papaya', count: 1200 }
];

const weightValuePath = 'count';

const palette = ['#71B081', '#5A9A77', '#498770', '#39776C', '#266665', '#124F5E'];

const legendSettings = {
  visible: true,
  position: 'Auto'
};

const leafItemSettings = {
  labelPath: 'fruit',
};

provide('treemap', [TreeMapLegend]);

</script>