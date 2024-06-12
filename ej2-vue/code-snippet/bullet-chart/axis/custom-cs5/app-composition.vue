<template>
  <div>
    <ejs-bulletchart id="bulletChart" :dataSource="data" valueField="value" targetField="target" :minimum="minimum"
      :maximum="maximum" :interval="interval" title="Revenue" labelFormat="${value}K">
      <e-bullet-range-collection>
        <e-bullet-range end="100" color="red"></e-bullet-range>
        <e-bullet-range end="200" color="blue"></e-bullet-range>
        <e-bullet-range end="300" color="green"></e-bullet-range>
      </e-bullet-range-collection>
    </ejs-bulletchart>
  </div>
</template>
<script setup>

import { BulletChartComponent as EjsBulletchart, BulletRangeCollectionDirective as EBulletRangeCollection, BulletRangeDirective as EBulletRange } from '@syncfusion/ej2-vue-charts';

const data = [{ value: 270, target: 250 }];
const minimum = 0;
const maximum = 300;
const interval = 50;

</script>