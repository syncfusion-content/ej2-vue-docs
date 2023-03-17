
import Vue from "vue";
import { ChartPlugin, ColumnSeries, Category, Legend, Selection } from "@syncfusion/ej2-vue-charts";
Vue.use(ChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
         <ejs-chart id='chartcontainer' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :legendSettings='legendSettings'
            :selectionMode="selectionMode">
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' name='USA' :animation='animation' :cornerRadius='cornerRadius'> </e-series>
            </e-series-collection>
            <e-rangecolorsettings>
                <e-rangecolorsetting label="1°C to 10°C" start="1" end="10" :colors="colors1"></e-rangecolorsetting>
                <e-rangecolorsetting label="11°C to 20°C" start="11" end="20" :colors="colors2"></e-rangecolorsetting>
                <e-rangecolorsetting label="21°C to 30°C" start="21" end="30" :colors="colors3"></e-rangecolorsetting>
            </e-rangecolorsettings>
          </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
        { x: "Jan", y: 6.96 },
        { x: "Feb", y: 8.9 },
        { x: "Mar", y: 12 },
        { x: "Apr", y: 17.5 },
        { x: "May", y: 22.1 },
        { x: "June", y: 25 },
        { x: "July", y: 29.4 },
        { x: "Aug", y: 29.6 },
        { x: "Sep", y: 25.8 },
        { x: "Oct", y: 21.1 },
        { x: "Nov", y: 15.5 },
        { x: "Dec", y: 9.9 }
      ],
      primaryXAxis: {
        valueType: 'Category', majorGridLines: { width: 0 }
      },
      primaryYAxis: {
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        labelFormat: '{value}°C',
      },
      chartArea: {
        border: {
          width: 0
        }
      },
      tooltip: {
        enable: false
      },
      title: "USA CLIMATE - WEATHER BY MONTH",
      legendSettings: {
        mode: 'Range',
        visible: true,
        toggleVisibility: false,
      },
      marker: {
        dataLabel: {
          visible: true,
          position: 'Outer',
        }
      },
      selectionMode: 'Point',
      animation: {
        enable: false
      },
      cornerRadius: {
        topLeft: 10, topRight: 10
      },
      colors1: ["#F9D422"],
      colors2: ["#F28F3F"],
      colors3: ["#E94F53"]
    };
  },
  provide: {
    chart: [ColumnSeries, Category, Legend, Selection]
  }

});