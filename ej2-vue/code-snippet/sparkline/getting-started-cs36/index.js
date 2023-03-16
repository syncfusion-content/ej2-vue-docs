
import Vue from 'vue';
import { SparklinePlugin,SparklineTooltip } from "@syncfusion/ej2-vue-charts";

var contentTemplate = function() {
  return { template: contentVue };
};
var contentVue = Vue.component("contentTemplate", {
  template: '<div style="border-radius: 5px; background: #008cff;color: #FFFFFF !important;font-size: 16px;font-style: italic;padding: 8px;">{{data.x}} : {{data.y}}</div>',
  data() {
    return {
      data: {}
    };
  }
});

Vue.use(SparklinePlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control_wrapper">
    <div class="spark">
        <ejs-sparkline id="sparkline" align="center" :dataSource='dataSource' :axisSettings='axisSettings'  valueType= 'Category' fill= '#033e96' xName='x' yName='y' :tooltipSettings='tooltipSettings' :height='height' :width='width'></ejs-sparkline>
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
    dataSource:   [{x: 'Mon', y: 3 },{x: 'Tue', y: 5 },{x: 'Wed', y: 2 },{x: 'Thu', y: 4 },{x: 'Fri', y: 6 },],
    // To enable tooltip template for sparkline with fill color, border radius and padding customization
    tooltipSettings: {
        visible: true,
        template: contentTemplate
    }
    }
  },
provide:{
    sparkline:[SparklineTooltip]
}

});