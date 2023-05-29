
import Vue from 'vue';
import { SparklinePlugin } from "@syncfusion/ej2-vue-charts";
Vue.use(SparklinePlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control_wrapper">
    <div class="spark">
        <ejs-sparkline id="sparkline" align="center" :dataSource='dataSource' :axisSettings='axisSettings' :markerSettings='markerSettings' :height='height' :width='width'></ejs-sparkline>
    </div>
    </div>
`,

  data: function() {
    return {
    height: '200px',
    width: '350px',
    axisSettings: {
        minX: -1, maxX: 7, maxY: 7, minY: -1
    }
    dataSource:   [0, 6, 4, 1, 3, 2, 5],
    // To enable markers for all points
    markerSettings: {
        visible: ['All']
    }
    }
  }

});