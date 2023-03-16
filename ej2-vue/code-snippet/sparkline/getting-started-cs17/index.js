
import Vue from 'vue';
import { SparklinePlugin,SparklineTooltip } from "@syncfusion/ej2-vue-charts";
Vue.use(SparklinePlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control_wrapper">
    <div class="spark">
        <ejs-sparkline id="sparkline" align="center" :dataSource='dataSource' :containerArea='containerArea' :border='border' fill= '#b2cfff' :padding='padding' lineWidth= 3 format= 'c0' useGroupingSeparator= 'true' :type='type' :tooltipSettings='tooltipSettings' :height='height' :width='width'></ejs-sparkline>
    </div>
    </div>
`,

  data: function() {
    return {
   containerArea: {
        border: { color: '#033e96', width: 2 }
    },
    tooltipSettings: {
        visible: true
    },
    padding: { left: 20, right: 20, bottom: 20, top: 20},
    border: { color: '#033e96', width: 2 },
    height: '200px',
    width: '350px',
    type: 'Area',
    dataSource: [30000, 60000, 40000, 10000, 30000, 20000, 50000]
    }
  },
provide:{
    sparkline:[SparklineTooltip]
}

});