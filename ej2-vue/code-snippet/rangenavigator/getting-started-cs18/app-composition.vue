<template>
  <div id="app">
    <ejs-rangenavigator :valueType='valueType' :intervalType='intervalType' :labelStyle='labelStyle' :value='value'
      :labelFormat='labelFormat' :dataSource='dataSource' xName='x' yName='y'>
    </ejs-rangenavigator>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { RangeNavigatorComponent as EjsRangenavigator, AreaSeries, DateTime } from "@syncfusion/ej2-vue-charts";
import { GetDateTimeData } from "./default_data.js";

const valueType = "DateTime";
const intervalType = "Months";
const labelFormat = "MMM";
const labelStyle = { color: 'red', size: '10px' };
const value = [new Date('2018-06-01'), new Date('2018-07-01')];
const dataSource = GetDateTimeData(new Date('2018-01-01'), new Date('2019-01-01'));

provide('rangeNavigator', [DateTime, AreaSeries]);

</script>