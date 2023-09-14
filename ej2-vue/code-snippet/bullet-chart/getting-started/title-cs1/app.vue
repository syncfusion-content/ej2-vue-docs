

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
      data: [{ value: 270, target: 250 }],
      minimum: 0, maximum: 300, interval: 50
    }
  }
}
</script>


