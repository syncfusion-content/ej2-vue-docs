<template>
  <div>
      <ejs-bulletchart id="bulletChart"
        :dataSource="data"
        valueField="value"
        targetField="target"
        :minimum="minimum"
        :maximum="maximum"
        :interval="interval"
        title="Revenue"
        categoryField="category"
      >
      <e-bullet-range-collection>
          <e-bullet-range end="100" color="red"></e-bullet-range>
          <e-bullet-range end="200" color="blue"></e-bullet-range>
          <e-bullet-range end="300" color="green"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
  </div>
</template>
<script>

import {  BulletChartComponent, BulletRangeCollectionDirective, BulletRangeDirective } from '@syncfusion/ej2-vue-charts';

export default {
name: "App",
components: {
    "ejs-bulletchart": BulletChartComponent,
    "e-bullet-range-collection": BulletRangeCollectionDirective,
    "e-bullet-range": BulletRangeDirective
  },
  data () {
    return {
      data: [{ value: 270, target: 250, category: "Product A" }],
      minimum: 0, maximum: 300, interval: 50
    }
  }
}
</script>