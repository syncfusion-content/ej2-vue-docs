<template>
  <div>
    <ejs-bulletchart id="bulletChart" :dataSource="data" valueField="value" targetField="target" :minimum="minimum"
      :maximum="maximum" :interval="interval" title="Profit in %" :theme="theme">
      <e-bullet-range-collection>
        <e-bullet-range end="15" color="red"></e-bullet-range>
        <e-bullet-range end="50" color="blue"></e-bullet-range>
        <e-bullet-range end="100" color="green"></e-bullet-range>
      </e-bullet-range-collection>
    </ejs-bulletchart>
  </div>
</template>
<script setup>

import { BulletChartComponent as EjsBulletchart, BulletRangeCollectionDirective as EBulletRangeCollection, BulletRangeDirective as EBulletRange } from '@syncfusion/ej2-vue-charts';

const data = [{ value: 50, target: 45 }];
const minimum = 0;
const maximum = 100;
const interval = 10;
const theme = "HighContrast";

</script>