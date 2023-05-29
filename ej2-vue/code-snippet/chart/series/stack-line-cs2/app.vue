

<template>
    <div id="app">
         <ejs-chart id="chartcontainer"
        :title="title"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :tooltip="tooltip"
        :chartArea="chartArea">
            <e-series-collection>
              <e-series :dataSource="seriesData" type="StackingLine" xName="x" yName="y" name="John" width="2" dashArray="5,1" :marker="marker" fill="red" ></e-series>
              <e-series :dataSource="seriesData" type="StackingLine" xName="x" yName="y1" name="Peter" width="2" dashArray="5,1" :marker="marker" fill="yellow" ></e-series>
              <e-series :dataSource="seriesData" type="StackingLine" xName="x" yName="y2" name="Steve" width="2" dashArray="5,1" :marker="marker" fill="green" ></e-series>
              <e-series :dataSource="seriesData" type="StackingLine" xName="x" yName="y3" name="Charle" width="2" dashArray="5,1" :marker="marker" fill="blue"></e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import {   ChartPlugin,StackingLineSeries,Legend,Tooltip,Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  data() {
    return {
      seriesData: [
              { x: "Food", y: 90, y1: 40, y2: 70, y3: 120 },
              { x: "Transport", y: 80, y1: 90, y2: 110, y3: 70 },
              { x: "Medical", y: 50, y1: 80, y2: 120, y3: 50 },
              { x: "Clothes", y: 70, y1: 30, y2: 60, y3: 180 },
              { x: "Personal Care", y: 30, y1: 80, y2: 80, y3: 30 },
              { x: "Books", y: 10, y1: 40, y2: 30, y3: 270 },
              { x: "Fitness", y: 100, y1: 30, y2: 70, y3: 40 },
              { x: "Electricity", y: 55, y1: 95, y2: 55, y3: 75 },
              { x: "Tax", y: 20, y1: 50, y2: 40, y3: 65 },
              { x: "Pet Care", y: 40, y1: 20, y2: 80, y3: 95 },
              { x: "Education", y: 45, y1: 15, y2: 45, y3: 195 },
              { x: "Entertainment", y: 75, y1: 45, y2: 65, y3: 115 }
              ],
      primaryXAxis: {
         majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        interval: 1,
        lineStyle: { width: 0 },
        valueType: "Category"
      },primaryYAxis: {
        title: "Expense",
        lineStyle: { width: 0 },
        interval: 50,
        minorTickLines: { width: 0 },
        majorTickLines: { width: 0 },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 1 }
      },
      chartArea: {
        border: {
          width: 0
        }
      },
       marker: {
        visible: true
      },
      tooltip: {
        enable: true,
        format: "${point.x} : <b>${point.y} (${point.percentage}%)</b>"
      },
      title: "Family Expense for Month"
    };
  },
  provide: {
    chart: [StackingLineSeries, Legend, Tooltip, Category]
  }
};
</script>
<style>
  #container {
   height: 350px;
 }
</style>


