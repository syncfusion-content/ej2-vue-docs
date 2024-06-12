<template>
  <div>
    <ejs-bulletchart id="bulletChart" :dataSource="data" valueField="value" targetField="target" :minimum="minimum"
      :maximum="maximum" :interval="interval" title="Revenue"> </ejs-bulletchart>
  </div>
</template>
<script setup>
import { BulletChartComponent as EjsBulletchart } from '@syncfusion/ej2-vue-charts';

const data = [{ value: 270, target: 250 }];
const minimum = 0;
const maximum = 300;
const interval = 50;

</script>