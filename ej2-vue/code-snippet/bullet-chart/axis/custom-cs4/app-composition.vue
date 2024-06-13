<template>
  <div>
    <ejs-bulletchart id="bulletChart" :dataSource="data" valueField="value" targetField="target" :minimum="minimum"
      :maximum="maximum" :interval="interval" title="Revenue" enableGroupSeparator=true>
      <e-bullet-range-collection>
        <e-bullet-range end="500" color="red"></e-bullet-range>
        <e-bullet-range end="1000" color="blue"></e-bullet-range>
        <e-bullet-range end="1500" color="green"></e-bullet-range>
      </e-bullet-range-collection>
    </ejs-bulletchart>
  </div>
</template>
<script setup>

import { BulletChartComponent as EjsBulletchart, BulletRangeCollectionDirective as EBulletRangeCollection, BulletRangeDirective as EBulletRange } from '@syncfusion/ej2-vue-charts';

const data = [{ value: 1100, target: 950 }];
const minimum = 0;
const maximum = 1500;
const interval = 500;

</script>