<template>
  <div id="app">
    <ejs-button id='print' @click='print'>Print</ejs-button>
    <ejs-rangenavigator ref="chart" :valueType='valueType' :value='value' :labelFormat='labelFormat'>
      <e-rangenavigator-series-collection>
        <e-rangenavigator-series :dataSource='data' type='Area' xName='x' yName='y' width=2>
        </e-rangenavigator-series>
      </e-rangenavigator-series-collection>
    </ejs-rangenavigator>
  </div>
</template>
<script>

import { RangeNavigatorComponent, RangenavigatorSeriesDirective, RangenavigatorSeriesCollectionDirective, AreaSeries, DateTime } from "@syncfusion/ej2-vue-charts";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { bitCoinData } from "./default_data.js";

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-rangenavigator": RangeNavigatorComponent,
    "e-rangenavigator-series-collection": RangenavigatorSeriesCollectionDirective,
    "e-rangenavigator-series": RangenavigatorSeriesDirective
  },
  data() {
    return {
      valueType: 'DateTime',
      value: [new Date('2017-09-01'), new Date('2018-02-01')],
      labelFormat: 'MMM-yy',
      data: bitCoinData
    };
  },
  provide: {
    rangeNavigator: [DateTime, AreaSeries]
  },
  methods: {
    print: function () {
      this.$refs.chart.print();
    }
  }
};
</script>