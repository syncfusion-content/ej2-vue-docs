import Vue from "vue";
import { AccumulationChartPlugin, PyramidSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-accumulation-chart id="container" :title="title" :tooltip="tooltip" :legendSettings="legendSettings"
          :enableSmartLabels="enableSmartLabels">
          <e-accumulation-series-collection>
            <e-accumulation-series :dataSource="CategoryData" type="Pie" innerRadius="50%" xName="Category" yName="Share" 
              name="Share by Category" :dataLabel="dataLabel" :border="border" :radialGradient="radialGradient">
            </e-accumulation-series>
          </e-accumulation-series-collection>
        </ejs-accumulation-chart>
    </div>
`,

  data: function() {
    return {
      CategoryData: [
        { Category: "Electronics", Share: 22.5, DataLabel: "Electronics: 22.5%" },
        { Category: "Fashion", Share: 18.0, DataLabel: "Fashion: 18.0%" },
        { Category: "Home & Kitchen", Share: 15.5, DataLabel: "Home & Kitchen: 15.5%" },
        { Category: "Beauty & Health", Share: 10.0, DataLabel: "Beauty & Health: 10.0%" },
        { Category: "Sports & Outdoors", Share: 9.5, DataLabel: "Sports & Outdoors: 9.5%" },
        { Category: "Books", Share: 8.0, DataLabel: "Books: 8.0%" },
        { Category: "Toys & Games", Share: 7.0, DataLabel: "Toys & Games: 7.0%" },
        { Category: "Groceries", Share: 6.0, DataLabel: "Groceries: 6.0%" },
        { Category: "Other", Share: 3.5, DataLabel: "Other: 3.5%" }
      ],
      dataLabel: {
        visible: true,
        name: 'DataLabel',
        position: 'Outside',
        connectorStyle: { length: '10px' },
        font: { size: '12px' }
      },
      border: {
        color: '#FFFFFF',
        width: 2
      },
      radialGradient: {
        cx: 0.22, cy: 0.22,
        fx: 0.12, fy: 0.12, r: 0.96,
        gradientColorStop: [
          { color: '#10B981', offset: 0, opacity: 1, brighten: 0.8 },
          { color: '#10B981', offset: 30, opacity: 1, brighten: 0.3 },
          { color: '#10B981', offset: 60, opacity: 1, brighten: 0 },
          { color: '#10B981', offset: 85, opacity: 1, brighten: -0.3 },
          { color: '#10B981', offset: 100, opacity: 1, brighten: -0.6 }
        ]
      },
      legendSettings: { visible: true, position: 'Right' },
      tooltip: { enable: true },
      enableSmartLabels: true,
      title: 'Orders by Category'
    };
  },
  provide: {
    accumulationchart: [PyramidSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]
  }

});
