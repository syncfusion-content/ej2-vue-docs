<template>
  <div class="control_wrapper">
    <ejs-treemap id="treemap" :dataSource='dataSource' :weightValuePath='weightValuePath' :legendSettings='legendSettings'
      :palette='palette' :leafItemSettings='leafItemSettings'></ejs-treemap>
  </div>
</template>
<script>

import { TreeMapComponent, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";

export default {
name: "App",
components: {
"ejs-treemap":TreeMapComponent,
},
  data: function () {
    return {
      dataSource: [{ fruit: 'Apple', count: 5000 },
      { fruit: 'Grape', count: 3000 },
      { fruit: 'Apple', count: 2300 },
      { fruit: 'Banana', count: 500 },
      { fruit: 'Grape', count: 4300 },
      { fruit: 'Papaya', count: 1200 }
      ],
      weightValuePath: 'count',
      palette: ['#71B081', '#5A9A77', '#498770', '#39776C', '#266665', '#124F5E'],
      legendSettings: {
        visible: true,
        position: 'Auto'
      },
      leafItemSettings: {
        labelPath: 'fruit',
      }
    }
  },
  provide: {
    treemap: [TreeMapLegend]
  },
}
</script>