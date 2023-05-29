
import Vue from 'vue';
import { SparklinePlugin } from "@syncfusion/ej2-vue-charts";
Vue.use(SparklinePlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control_wrapper">
    <div class="spark">
        <ejs-sparkline id="sparkline" align="center" :dataSource='dataSource' fill= '#0d3c9b' :rangeBandSettings='rangeBandSettings' :lineWidth='lineWidth' :height='height' :width='width'></ejs-sparkline>
    </div>
    </div>
`,

  data: function() {
    return {
    height: '150px',
    width: '150px',
    lineWidth: 2,
    dataSource:   [0, 6, 4, 1, 3, 2, 5],
    rangeBandSettings: [
            {
                startRange: 1,
                endRange: 2,
                color: '#bfd4fc',
                opacity:0.4
            },
            {
                startRange: 4,
                endRange: 5,
                color: 'red',
                opacity:0.4
            }
        ]
    }
  }

});