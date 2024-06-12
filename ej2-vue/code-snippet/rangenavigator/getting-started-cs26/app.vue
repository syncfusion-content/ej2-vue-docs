<template>
  <div id="app">
    <ejs-rangenavigator :valueType='valueType' :value='value' :labelFormat='labelFormat' :tooltip='tooltip'>
      <e-rangenavigator-series-collection>
        <e-rangenavigator-series :dataSource='data' type='Line' xName='x' yName='y' width=2>
        </e-rangenavigator-series>
      </e-rangenavigator-series-collection>
    </ejs-rangenavigator>
  </div>
</template>
<script>

import { RangeNavigatorComponent, RangenavigatorSeriesDirective, RangenavigatorSeriesCollectionDirective, LineSeries, DateTime, RangeTooltip } from "@syncfusion/ej2-vue-charts";
import { bitCoinData } from "./default_data.js";

export default {
  name: "App",
  components: {
    "ejs-rangenavigator": RangeNavigatorComponent,
    "e-rangenavigator-series-collection": RangenavigatorSeriesCollectionDirective,
    "e-rangenavigator-series": RangenavigatorSeriesDirective
  },
  data() {
    return {
      valueType: 'DateTime',
      value: [new Date('2017-09-01'), new Date('2018-02-01')],
      tooltip: { enable: true },
      labelFormat: 'MMM-yy',
      data: bitCoinData
    };
  },
  provide: {
    rangeNavigator: [DateTime, LineSeries, RangeTooltip]
  }
};
</script>