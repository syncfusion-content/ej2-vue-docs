<template>
  <div>
    <ejs-bulletchart id="bulletChart" :dataSource="data" valueField="value" targetField="target" :minimum="minimum"
      :maximum="maximum" :interval="interval" title="Sales Rate" :animation="animation">
      <e-bullet-range-collection>
        <e-bullet-range end="500" color="red"></e-bullet-range>
        <e-bullet-range end="1500" color="blue"></e-bullet-range>
        <e-bullet-range end="2000" color="green"></e-bullet-range>
      </e-bullet-range-collection>
    </ejs-bulletchart>
  </div>
</template>
<script setup>

import { BulletChartComponent as EjsBulletchart, BulletRangeCollectionDirective as EBulletRangeCollection, BulletRangeDirective as EBulletRange } from '@syncfusion/ej2-vue-charts';

const data = [{ value: 1500, target: 1000 }];
const minimum = 0;
const maximum = 2000;
const interval = 200;
const animation = { enable: true };

</script>