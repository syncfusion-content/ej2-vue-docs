<template>
  <div>
    <ejs-bulletchart id="bulletChart" :dataSource="data" valueField="value" targetField="target" :minimum="minimum"
      :maximum="maximum" :interval="interval" title="Sales Rate in dollars" titlePosition="Top" labelFormat="${value}"
      subtitle="(in dollars $)">
      <e-bullet-range-collection>
        <e-bullet-range end="35" color="red"></e-bullet-range>
        <e-bullet-range end="50" color="blue"></e-bullet-range>
        <e-bullet-range end="100" color="green"></e-bullet-range>
      </e-bullet-range-collection>
    </ejs-bulletchart>
  </div>
</template>
<script>

import { BulletChartComponent, BulletRangeCollectionDirective, BulletRangeDirective } from '@syncfusion/ej2-vue-charts';

export default {
  name: "App",
  components: {
    "ejs-bulletchart": BulletChartComponent,
    "e-bullet-range-collection": BulletRangeCollectionDirective,
    "e-bullet-range": BulletRangeDirective
  },
  data() {
    return {
      data: [{ value: 55, target: 45 }],
      minimum: 0, maximum: 100, interval: 20
    }
  }
}
</script>