<template>
  <div id="app">
    <ejs-rangenavigator :valueType='valueType' :intervalType='intervalType' :labelStyle='labelStyle' :value='value'
      :labelFormat='labelFormat' :dataSource='dataSource' xName='x' yName='y'>
    </ejs-rangenavigator>
  </div>
</template>
<script>

import { RangeNavigatorComponent, AreaSeries, DateTime } from "@syncfusion/ej2-vue-charts";
import { GetDateTimeData } from "./default_data.js";

export default {
  name: "App",
  components: {
    "ejs-rangenavigator": RangeNavigatorComponent
  },
  data() {
    return {
      valueType: "DateTime",
      intervalType: "Months",
      labelFormat: "MMM",
      labelStyle: { color: 'red', size: '10px' },
      value: [new Date('2018-06-01'), new Date('2018-07-01')],
      dataSource: GetDateTimeData(new Date('2018-01-01'), new Date('2019-01-01')),
    };
  },
  provide: {
    rangeNavigator: [DateTime, AreaSeries]
  }
};
</script>