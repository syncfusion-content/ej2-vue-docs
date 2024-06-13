<template>
  <div>
    <ejs-bulletchart id="bulletChart"> </ejs-bulletchart>
  </div>
</template>
<script>
import { BulletChartComponent } from '@syncfusion/ej2-vue-charts';

export default {
  name: "App",
  components: {
    'ejs-bulletchart': BulletChartComponent
  },
  data() {
    return {
    }
  }
}
</script>