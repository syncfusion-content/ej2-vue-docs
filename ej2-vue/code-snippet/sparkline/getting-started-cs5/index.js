
import Vue from 'vue';
import { SparklinePlugin } from "@syncfusion/ej2-vue-charts";
Vue.use(SparklinePlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control_wrapper">
    <div class="spark">
        <ejs-sparkline id="sparkline" align="center" :dataSource='dataSource' xName='xDate' yName='yval' :type='type' :valueType='valueType' :height='height' :width='width'></ejs-sparkline>
    </div>
    </div>
`,

  data: function() {
    return {
    height: '150px',
    width: '130px',
    // Assign the "Column" as type of the sparkline
    type:'Column',
    // Assign the "DateTime" as value type to the sparkline
    valueType: 'DateTime',
    dataSource: [
            { xDate: new Date(2018, 0, 1), x: 0, yval: 4 },
            { xDate: new Date(2018, 0, 2), x: 1, yval: 4.5 },
            { xDate: new Date(2018, 0, 3), x: 2, yval: 8 },
            { xDate: new Date(2018, 0, 4), x: 3, yval: 7 },
            { xDate: new Date(2018, 0, 5), x: 4, yval: 6 },
            { xDate: new Date(2018, 0, 8), x: 5, yval: 8 },
            { xDate: new Date(2018, 0, 9), x: 6, yval: 8 },
            { xDate: new Date(2018, 0, 10), x: 7, yval: 6.5 },
            { xDate: new Date(2018, 0, 11), x: 8, yval: 4 },
            { xDate: new Date(2018, 0, 12), x: 9, yval: 5.5 }
        ]
    }
  }

});