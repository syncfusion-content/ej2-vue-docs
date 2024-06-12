<template>
  <div>
    <ejs-bulletchart id="bulletChart" :dataSource="data" valueField="value" targetField="comparativeMeasureValue"
      :minimum="minimum" :maximum="maximum" :interval="interval" title="Profit in %" labelFormat="{value}%"
      :dataLabel="dataLabel" height="400px">
      <e-bullet-range-collection>
        <e-bullet-range end="5" color="red"></e-bullet-range>
        <e-bullet-range end="15" color="blue"></e-bullet-range>
        <e-bullet-range end="20" color="green"></e-bullet-range>
      </e-bullet-range-collection>
    </ejs-bulletchart>
  </div>
</template>
<script setup>

import {  BulletChartComponent as EjsBulletchart, BulletRangeCollectionDirective as EBulletRangeCollection, BulletRangeDirective as EBulletRange  } from '@syncfusion/ej2-vue-charts';

const data = [{ value: 5, comparativeMeasureValue: 7.5, category: '2001' },
{ value: 7, comparativeMeasureValue: 5, category: '2002' },
{ value: 10, comparativeMeasureValue: 6, category: '2003' },
{ value: 5, comparativeMeasureValue: 8, category: '2004' },
{ value: 12, comparativeMeasureValue: 5, category: '2005' },
{ value: 8, comparativeMeasureValue: 6, category: '2006' }
];
const minimum = 0;
const maximum = 20;
const interval = 5;
const dataLabel = { enable: true, labelStyle: { color: "yellow", size: "20" } };

</script>