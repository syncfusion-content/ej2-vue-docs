<template>
  <div id="app">
    <ejs-rangenavigator :valueType='valueType' labelPosition='Outside' :dataSource='data' xName='x' yName='Close'
      :periodSelectorSettings='periodSelectorSettingsTop' disableRangeSelector=true>
    </ejs-rangenavigator>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { RangeNavigatorComponent as EjsRangenavigator, AreaSeries, PeriodSelector, DateTime } from "@syncfusion/ej2-vue-charts";
import { chartData } from "./default_data.js";


const valueType = 'DateTime';
const periodSelectorSettingsTop = {
  periods: [
    { text: "1M", interval: 1, intervalType: "Months" },
    { text: "3M", interval: 3, intervalType: "Months" },
    { text: "6M", interval: 6, intervalType: "Months" },
    { text: "1Y", interval: 1, intervalType: "Years" },
    { text: "2Y", interval: 2, intervalType: "Years", selected: true },
    { text: "ALL" }
  ],
  position: "Top"
};
const data = chartData;

provide('rangeNavigator', [DateTime, AreaSeries, PeriodSelector]);

</script>