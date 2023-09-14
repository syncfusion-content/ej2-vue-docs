

<template>
  <div>
      <ejs-bulletchart id="bulletChart"
        :dataSource="data"
        valueField="value"
        targetField="target"
        height="300"
        :minimum="minimum"
        :maximum="maximum"
        :interval="interval"
      > </ejs-bulletchart>
  </div>
</template>
<script>
import { BulletChartComponent } from '@syncfusion/ej2-vue-charts';

export default {
  components: {
    'ejs-bulletchart': BulletChartComponent
  },
  data () {
    return {
      data: [
       { value: 100, target: 80 },
       { value: 200, target: 180 },
       { value: 300, target: 280 },
       { value: 400, target: 380 },
       { value: 500, target: 480 },
      ],
      minimum: 0, maximum: 300, interval: 50
    }
  }
}
</script>


