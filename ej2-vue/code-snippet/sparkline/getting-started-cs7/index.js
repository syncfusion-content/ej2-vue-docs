
import Vue from 'vue';
import { SparklinePlugin } from "@syncfusion/ej2-vue-charts";
Vue.use(SparklinePlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control_wrapper">
    <div class="spark">
        <ejs-sparkline id="sparkline" align="center" :dataSource='dataSource'  :type='type' :valueType='valueType' xName='x' yName='yval' :height='height' :width='width'></ejs-sparkline>
    </div>
    </div>
`,

  data: function() {
    return {
    height: '150px',
    width: '130px',
    // Assign the 'Column' as type of the sparkline
    type:'Column',
    // Assign the 'Numeric' as value type of the sparkline
    valueType: 'Numeric',
    dataSource: [
            { x: 1, xval: 2010, yval: 190 },
            { x: 2, xval: 2011, yval: 165 },
            { x: 3, xval: 2012, yval: 158 },
            { x: 4, xval: 2013, yval: 175 },
            { x: 5, xval: 2014, yval: 200 },
            { x: 6, xval: 2015, yval: 180 },
            { x: 7, xval: 2016, yval: 210 }
        ]
    }
  }

});