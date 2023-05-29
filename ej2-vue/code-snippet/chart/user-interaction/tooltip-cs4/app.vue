

<template>
    <div id="app">
         <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :tooltip='tooltip'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='StepLine' xName='x' yName='y' name='China' :marker='marker'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, StepLineSeries, DateTime, Tooltip } from "@syncfusion/ej2-vue-charts";

    var TemplateVue = Vue.component('contentTemplate', {
        template: `<div>
                   <table style="width:100%;  border: 1px solid black;">
                   <tr><th colspan="2" bgcolor="#00FFFF">Unemployment</th></tr>
                    <tr><td bgcolor="#00FFFF">{{data.x}}:</td><td bgcolor="#00FFFF">{{data.y}}</td></tr>
                   </table></div> `,
        data() {
            return {
                data: {}
            };
        }
    });

    let contentTemplate = function() {
  return { template: TemplateVue };
};

Vue.use(ChartPlugin);


export default {
  data() {
    return {
    seriesData:[
                { x: new Date(1975, 0, 1), y: 16, y1: 10, y2: 4.5 },
                { x: new Date(1980, 0, 1), y: 12.5, y1: 7.5, y2: 5 },
                { x: new Date(1985, 0, 1), y: 19, y1: 11, y2: 6.5 },
                { x: new Date(1990, 0, 1), y: 14.4, y1: 7, y2: 4.4 },
                { x: new Date(1995, 0, 1), y: 11.5, y1: 8, y2: 5 },
                { x: new Date(2000, 0, 1), y: 14, y1: 6, y2: 1.5 },
                { x: new Date(2005, 0, 1), y: 10, y1: 3.5, y2: 2.5 },
                { x: new Date(2010, 0, 1), y: 16, y1: 7, y2: 3.7 }
        ],
      primaryXAxis: {
           valueType: 'DateTime'
        },
      marker: {
          visible: true, width: 10, height: 10
        },
      tooltip: { enable: true,  template: contentTemplate },
      title: "Unemployment Rates 1975-2010"
    };
  },
  provide: {
    chart: [StepLineSeries, DateTime, Tooltip]
  },
};
</script>
<style>
 #container{
   height: 350px;
 }
</style>


