<template>
  <div id="app">
    <ejs-rangenavigator :valueType='valueType' :value='value' :labelFormat='labelFormat' labelIntersectAction='Hide'>
      <e-rangenavigator-series-collection>
        <e-rangenavigator-series :dataSource='data' type='Area' xName='x' yName='y' width=2>
        </e-rangenavigator-series>
      </e-rangenavigator-series-collection>
    </ejs-rangenavigator>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { RangeNavigatorComponent as EjsRangenavigator, RangenavigatorSeriesDirective as ERangenavigatorSeries, RangenavigatorSeriesCollectionDirective as ERangenavigatorSeriesCollection, AreaSeries, DateTime } from "@syncfusion/ej2-vue-charts";
import { bitCoinData } from "./default_data.js";

const valueType = 'DateTime';
const value = [new Date('2017-09-01'), new Date('2018-02-01')];
const labelFormat = 'y/M/d';
const data = bitCoinData;

provide('rangeNavigator', [DateTime, AreaSeries]);

</script>