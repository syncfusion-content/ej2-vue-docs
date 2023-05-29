
import Vue from "vue";
import { ChartPlugin, BarSeries, Category } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart id="container":title='title' :primaryXAxis='primaryXAxis'>
            <e-series-collection>
            <e-series :dataSource="seriesData" type="Bar" xName="x" yName="y" name="USA Total" width="2" 
            groupName="USA" columnWidth="0.7" columnSpacing="0.1" >
          </e-series>
          <e-series :dataSource="seriesData1" type="Bar" xName="x" yName="y" name="USA Gold" width="2" 
            groupName="USA" columnWidth="0.7" columnSpacing="0.1" >
          </e-series>
          <e-series :dataSource="seriesData2" type="Bar" xName="x" yName="y" name="UK Total" width="2" 
            groupName="UK" columnWidth="0.7" columnSpacing="0.1">
          </e-series>
          <e-series :dataSource="seriesData3" type="Bar" xName="x" yName="y" name="UK Gold" width="2" 
            groupName="UK" columnWidth="0.7" columnSpacing="0.1">
          </e-series>
          <e-series :dataSource="seriesData4" type="Bar" xName="x" yName="y" name="China Total" width="2" 
            groupName="China" columnWidth="0.7" columnSpacing="0.1">
          </e-series>
          <e-series :dataSource="seriesData5" type="Bar" xName="x" yName="y" name="China Gold" width="2" 
            groupName="China" columnWidth="0.7" columnSpacing="0.1">
          </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data: function() {
    return {
      seriesData: [
        { x: "2012", y: 104 },
        { x: "2016", y: 121 },
        { x: "2020", y: 113 },
      ],

      seriesData1: [
        { x: "2012", y: 46 },
        { x: "2016", y: 46 },
        { x: "2020", y: 39 },
      ],

      seriesData2: [
        { x: "2012", y: 65 },
        { x: "2016", y: 67 },
        { x: "2020", y: 65 },
      ],

      seriesData3: [
        { x: "2012", y: 29 },
        { x: "2016", y: 27 },
        { x: "2020", y: 22 },
      ],

      seriesData4: [
        { x: "2012", y: 91 },
        { x: "2016", y: 70 },
        { x: "2020", y: 88 },
      ],

      seriesData5: [
        { x: "2012", y: 38 },
        { x: "2016", y: 26 },
        { x: "2020", y: 38 },
      ],
      primaryXAxis: {
        valueType: "Category",
        interval: 1,
        majorGridLines: { width: 0 },
      },
      chartArea: { border: { width: 0 } },

      //Initializing Primary Y Axis
      primaryYAxis: {
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { color: "transparent" },
      },
      marker: {
        dataLabel: {
          visible: true,
          position: "Top",
          font: { fontWeight: "600", color: "#ffffff" },
        },
      },
      tooltip: {
        enable: true,
      },

      title: "Olympics Medal Tally",

    };
  },
  provide: {
    chart: [BarSeries, Category]
  }

});