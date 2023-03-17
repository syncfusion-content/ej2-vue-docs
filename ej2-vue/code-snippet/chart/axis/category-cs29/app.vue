

<template>
  <div id="app">
    <ejs-button @click.native="addChart">Add Chart</ejs-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { Chart } from "@syncfusion/ej2-charts";
import { ChartPlugin, LineSeries, Category, Selection, Series, Tooltip } from "@syncfusion/ej2-vue-charts";
Chart.Inject(LineSeries);

Vue.use(ChartPlugin);
Vue.use(ButtonPlugin);
var count = 1;
export default {
  data () {
    return {
      seriesData: [
        { x: 1, y: 21 }, { x: 2, y: 24 },
        { x: 3, y: 36 }, { x: 4, y: 38 },
        { x: 5, y: 54 }, { x: 6, y: 57 },
        { x: 7, y: 70 }
      ],
      title: "Inflation - Consumer Price"
    }
  },
  provide: {
    chart: [LineSeries]
  },
  methods: {
    addChart: function(e) {
      var chartEle = document.createElement('div');
      chartEle.id = 'container' + count;
      document.getElementsByTagName('body')[0].appendChild(chartEle);

      let chart = new Chart({
          series: [{
              type: 'Line', xName: 'x', width: 2, marker: { visible: true },
              yName: 'y', name: 'Germany',
              dataSource: [{ x: 1, y: 21 },{ x: 2, y: 24 },{ x: 3, y: 36 },
                      { x: 4, y: 38 },{ x: 5, y: 54 },{ x: 6, y: 57 },{ x: 7, y: 70 }],
              }],
          title: 'Inflation - Consumer Price', tooltip: { enable: true }, height:'400', width: '800'
      });
      chart.appendTo('#' + chartEle.id);
      count++;
    }
  }
}
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>


