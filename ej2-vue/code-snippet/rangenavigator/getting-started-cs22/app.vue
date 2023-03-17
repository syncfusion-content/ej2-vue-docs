

<template>
    <div id="app">
        <ejs-rangenavigator :valueType='valueType' :value='value' :labelFormat='labelFormat'
        :periodSelectorSettings='periodSelectorSettingsTop' >
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series :dataSource='data' type='Area' xName='x' yName='y' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>
    </div>
</template>
<script>
import Vue from "vue";
import { RangeNavigatorPlugin, AreaSeries, DateTime, PeriodSelector } from "@syncfusion/ej2-vue-charts";
import { bitCoinData } from "./default_data.js";

Vue.use(RangeNavigatorPlugin);

export default {
  data() {
    return {
     valueType: 'DateTime',
      periodSelectorSettingsTop: {
        periods: [
          { text: "1M", interval: 1, intervalType: "Months" },
          { text: "3M", interval: 3, intervalType: "Months" },
          { text: "6M", interval: 6, intervalType: "Months" },
          { text: "1Y", interval: 1, intervalType: "Years" },
          { text: "2Y", interval: 2, intervalType: "Years", selected: true },
          { text: "ALL" }
        ],
        position: "Top",
        height: 65
      },
     value: [new Date('2017-09-01'), new Date('2018-02-01')],
     labelFormat: 'MMM-yy',
     data: bitCoinData
    };
  },
  provide: {
    rangeNavigator: [DateTime, AreaSeries, PeriodSelector]
  }
};
</script>


