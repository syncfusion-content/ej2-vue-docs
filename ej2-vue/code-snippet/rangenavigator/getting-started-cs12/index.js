
import Vue from "vue";
import { RangeNavigatorPlugin, AreaSeries, DateTime } from "@syncfusion/ej2-vue-charts";
import {  sl } from "./default_data.js";

Vue.use(RangeNavigatorPlugin);

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-rangenavigator :value='value' labelPosition ='Outside'  :tooltip='tooltip' :majorGridLines='majorGridLines' >
            <e-rangenavigator-series-collection >
                <e-rangenavigator-series :dataSource='data' xName='xData' type='Line' yName='yData' ></e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>
    </div>
`,

  data() {
    return {
    majorGridLines:{
        width: 4,
        color: 'blue',
        dashArray: '5,5'
    },
     tooltip: { enable: true },
     value:[25,40],
     data:  [
      { xData: 10, yData: 35 }, { xData: 20, yData: 28 },
      { xData: 30, yData: 34 }, { xData: 40, yData: 32 },
      { xData: 50, yData: 40 }
     ]
    };
  },
  provide: {
    rangeNavigator: [DateTime, AreaSeries]
  }

});