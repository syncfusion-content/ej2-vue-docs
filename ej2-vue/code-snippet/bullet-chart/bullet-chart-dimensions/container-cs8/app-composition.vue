<!-- <template>
  <div>
      <ejs-bulletchart id="bulletChart"
        :dataSource="data"
        valueField="value"
        targetField="target"
        :minimum="minimum"
        :maximum="maximum"
        :interval="interval"
        title="Sales Rate in dollars"
        labelFormat="${value}"
        subtitle="(in dollars $)"
        orientation="vertical"
        :animation="animation"
        width="20%"
      >
      <e-bullet-range-collection>
          <e-bullet-range end="35" color="red"></e-bullet-range>
          <e-bullet-range end="50" color="blue"></e-bullet-range>
          <e-bullet-range end="100" color="green"></e-bullet-range>
        </e-bullet-range-collection>
      </ejs-bulletchart>
  </div>
</template>
<script setup>

import { BulletChartComponent } from '@syncfusion/ej2-vue-charts';


export default {
  data () {
    return {
      data: [{ value: 55, target: 45 }], label: '${value}',
      minimum: 0, maximum: 100, interval: 20, animation: { enable: false }
    }
  }
}
</script> -->




<template>
  <div>
    <ejs-bulletchart id="bulletChart" :dataSource="data" valueField="value" targetField="target" :minimum="minimum"
      :maximum="maximum" :interval="interval" title="Sales Rate in dollars" labelFormat="${value}"
      subtitle="(in dollars $)" orientation="vertical" :animation="animation" width="20%">
      <e-bullet-range-collection>
        <e-bullet-range end="35" color="red"></e-bullet-range>
        <e-bullet-range end="50" color="blue"></e-bullet-range>
        <e-bullet-range end="100" color="green"></e-bullet-range>
      </e-bullet-range-collection>
    </ejs-bulletchart>
  </div>
</template>
<script setup>

import { BulletChartComponent as EjsBulletchart, BulletRangeCollectionDirective as EBulletRangeCollection, BulletRangeDirective as EBulletRange } from '@syncfusion/ej2-vue-charts';


const data = [{ value: 55, target: 45 }];
const label = '${value}';
const minimum = 0;
const maximum = 100;
const interval = 20;
const animation = { enable: false };

</script>