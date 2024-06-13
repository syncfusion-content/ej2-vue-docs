<template>
  <div id="app">
    <ejs-rangenavigator :valueType='valueType' :intervalType='intervalType' enableGrouping=true :value='value'
      :dataSource='dataSource' xName='x' yName='y'>
    </ejs-rangenavigator>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { RangeNavigatorComponent as EjsRangenavigator, AreaSeries, DateTime } from "@syncfusion/ej2-vue-charts";


let points = [];
let value = 0;
let point = {};
for (let j = 1; j < 1090; j++) {
  value += Math.random() * 10 - 5;
  value = value < 0 ? Math.abs(value) : value;
  point = { x: new Date(2000, 0, j), y: value, z: value + 10 };
  points.push(point);
}

const valueType = "DateTime";
const intervalType = "Quarter";
value = [new Date('2001-01-01'), new Date('2002-01-01')];
const dataSource = points;


provide('rangeNavigator', [DateTime, AreaSeries]);

</script>