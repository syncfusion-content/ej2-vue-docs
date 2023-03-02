
import Vue from 'vue';
import { SparklinePlugin,SparklineTooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(SparklinePlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control_wrapper">
    <div class="spark">
        <ejs-sparkline id="sparkline" align="center" :dataSource='dataSource' :axisSettings='axisSettings' :valueType='valueType' fill= 'blue' xName='x' yName='y' :tooltipSettings='tooltipSettings' :height='height' :width='width'></ejs-sparkline>
    </div>
    </div>
`,

  data: function() {
    return {
    height: '200px',
    width: '500px',
    axisSettings: {
        minX: -1, maxX: 7, maxY: 8, minY: -1
    },
    valueType: 'Category',
    dataSource:   [{x: 'Mon', y: 3 },{x: 'Tue', y: 5 },{x: 'Wed', y: 2 },{x: 'Thu', y: 4 },{x: 'Fri', y: 6 }],
    // To enable tooltip for sparkline
    tooltipSettings: {
        visible: true,
        format: '${x} : ${y}'
    }
    }
  },
provide:{
    sparkline:[SparklineTooltip]
}

});