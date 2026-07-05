
import Vue from 'vue';
import { SparklinePlugin,SparklineTooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(SparklinePlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control_wrapper">
    <div class="spark">
        <ejs-sparkline id="sparkline" align="center" :dataSource='dataSource' :valueType='valueType' xName='x'
      yName='y' fill= 'blue' :axisSettings='axisSettings' :tooltipSettings='tooltipSettings' :height='height' :width='width'></ejs-sparkline>
    </div>
    </div>
`,

  data: function() {
    return {
    height: '200px',
    width: '500px',
    axisSettings: {
        minY: -1, maxY: 8
    },
    valueType: 'DateTime',
    dataSource:   [
        { x: new Date(2024, 0, 1), y: 3 },
        { x: new Date(2024, 1, 1), y: 5 },
        { x: new Date(2024, 2, 1), y: 2 },
        { x: new Date(2024, 3, 1), y: 4 },
        { x: new Date(2024, 4, 1), y: 6 }
    ],
    // To enable tooltip template for sparkline with fill color, border radius and padding customization
    tooltipSettings: {
        visible: true,
        // formatting tooltip text
        format: '${x:MMM yyyy} : ${y:n2}'
    }
    }
  },
provide:{
    sparkline:[SparklineTooltip]
}

});