

<template>
    <div id="app">
      <ejs-rangenavigator :valueType='valueType' :intervalType='intervalType' enableGrouping=true
        :value='value' :dataSource='dataSource'
        xName='x' yName='y'>
      </ejs-rangenavigator>
    </div>
</template>
<script>
import Vue from "vue";
import { RangeNavigatorPlugin, AreaSeries, DateTime } from "@syncfusion/ej2-vue-charts";
import { GetDateTimeData  } from "./default_data.js";

Vue.use(RangeNavigatorPlugin);

export default {
  data() {
    let points = [];
    let value = 0;
    let point = {};
    for (let j = 1; j < 1090; j++) {
      value += Math.random() * 10 - 5;
      value = value < 0 ? Math.abs(value) : value;
      point = { x: new Date(2000, 0, j), y: value, z: value + 10 };
      points.push(point);
    }
    return {
     valueType: "DateTime",
      intervalType: "Quarter",
      value: [new Date('2001-01-01'), new Date('2002-01-01')],
      dataSource: points,
    };
  },
  provide: {
    rangeNavigator: [DateTime, AreaSeries]
  }
};
</script>


