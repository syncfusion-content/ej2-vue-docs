<template>
  <div>
    <ejs-bulletchart id="bulletChart" :dataSource="data" valueField="value" targetField="target" :minimum="minimum"
      :maximum="maximum" :interval="interval" title="Revenue" tickPosition="Inside">
      <e-bullet-range-collection>
        <e-bullet-range end="20" color="red"></e-bullet-range>
        <e-bullet-range end="25" color="blue"></e-bullet-range>
        <e-bullet-range end="30" color="green"></e-bullet-range>
      </e-bullet-range-collection>
    </ejs-bulletchart>
  </div>
</template>
<script setup>

import { BulletChartComponent as EjsBulletchart, BulletRangeCollectionDirective as EBulletRangeCollection, BulletRangeDirective as EBulletRange } from '@syncfusion/ej2-vue-charts';

const data = [{ value: 23, target: 22 }];
const minimum = 0;
const maximum = 30;
const interval = 5;

</script>