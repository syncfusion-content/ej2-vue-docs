<!-- <template>
  <div>
      <ejs-bulletchart id="bulletChart"
        :dataSource="data"
        valueField="value"
        targetField="target"
        :minimum="minimum"
        :maximum="maximum"
        :interval="interval"
        title="Sales Rate in dollars"
        labelFormat="${value}"
        subtitle="(in dollars $)"
        orientation="vertical"
        :animation="animation"
        width="20%"
      >
      <e-bullet-range-collection>
          <e-bullet-range end="35" color="red"></e-bullet-range>
          <e-bullet-range end="50" color="blue"></e-bullet-range>
          <e-bullet-range end="100" color="green"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
  </div>
</template>
<script>

import { BulletChartComponent } from '@syncfusion/ej2-vue-charts';


export default {
name: "App",
components: {
"ejs-bulletchart":BulletchartComponent,
"e-bullet-range-collection":BulletDirective,
"e-bullet-range":BulletDirective,

},

  data () {
    return {
      data: [{ value: 55, target: 45 }], label: '${value}',
      minimum: 0, maximum: 100, interval: 20, animation: { enable: false }
    }
  }
}
</script> -->




<template>
  <div>
      <ejs-bulletchart id="bulletChart"
        :dataSource="data"
        valueField="value"
        targetField="target"
        :minimum="minimum"
        :maximum="maximum"
        :interval="interval"
        title="Sales Rate in dollars"
        labelFormat="${value}"
        subtitle="(in dollars $)"
        orientation="vertical"
        :animation="animation"
        width="20%"
      >
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
  data () {
    return {
      data: [{ value: 55, target: 45 }], label: '${value}',
      minimum: 0, maximum: 100, interval: 20, animation: { enable: false }
    }
  }
}
</script>