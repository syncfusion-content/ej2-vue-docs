

<template>
    <div id="app">
         <ejs-chart id="container" :title='title'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StepLine' dashArray='2.5' :marker="marker" xName='x' yName='y' name='USA' width=2 fill="blue" :border='border' opacity=0.5 step="Left"> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, StepLineSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  data() {
    return {
      seriesData: [
        { x: 2006, y: 378 }, { x: 2007, y: 416 },
        { x: 2008, y: 404 }, { x: 2009, y: 390 },
        { x: 2010, y: 376 }, { x: 2011, y: 365 }
      ],
      border: { width: 1.5, color: 'brown' },
      title: "CO2 - Intensity Analysis",
      marker: {
        visible: true
      }
    };
  },
  provide: {
    chart: [StepLineSeries]
  },
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>


