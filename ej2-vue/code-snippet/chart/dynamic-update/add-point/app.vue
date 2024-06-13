<template>
    <div id="app">
        <ejs-chart ref="chart" id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :title='title' :legendSettings='legendSettings' :chartArea='chartArea'>
          <e-series-collection>
            <e-series :dataSource='seriesData' type='Spline' xName='x' yName='y' name='Users' width=2 :marker='marker'></e-series>
          </e-series-collection>
        </ejs-chart>
        <ejs-button id='add' @click.native='onClick'>Add Point</ejs-button>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, SplineSeries, Category, DataLabel, Legend } from "@syncfusion/ej2-vue-charts";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

Vue.use(ChartPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
        seriesData: [
          { x: "Germany", y: 72 },
          { x: "Russia", y: 103.1 },
          { x: "Brazil", y: 139.1 },
          { x: "India", y: 462.1 },
          { x: "China", y: 721.4 },
          { x: "USA", y: 286.9 },
          { x: "Great Britain", y: 115.1 },
          { x: "Nigeria", y: 97.2 }
        ],
        primaryXAxis: {
          valueType: 'Category', 
          enableTrim: false, 
          majorTickLines: { width: 0 }, 
          majorGridLines: { width: 0 }
        },
        primaryYAxis:
        {
          minimum: 0, 
          maximum: 800, 
          labelFormat: '{value}M', 
          edgeLabelPlacement: 'Shift'
        },
        marker: {
          visible: true, 
          dataLabel: { 
            visible: true, 
            position: 'Top', 
            font: { 
              fontWeight: '600' 
            } 
          }
        },
        title: 'Internet Users - 2016',
        legendSettings: {
          visible: false
        },
        chartArea: {
          border: {
            width: 1
          }
        }
    };
  },
  provide: {
    chart: [SplineSeries, Category, DataLabel, Legend]
  },
  methods: {
      onClick: function() {     
        this.$refs.chart.ej2Instances.series[0].addPoint({ x: 'Japan', y: 118.2 });
      }
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>


