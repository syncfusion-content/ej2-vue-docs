import Vue from 'vue';
import { TreeMapPlugin, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";
Vue.use(TreeMapPlugin);


new Vue({
  el: '#app',
  template: `
    <div class="control_wrapper">
        <ejs-treemap id="treemap" :dataSource='dataSource' :weightValuePath='weightValuePath' :legendSettings='legendSettings'
          :palette='palette' :leafItemSettings='leafItemSettings'></ejs-treemap>
    </div>
`,

  data: function () {
    return {
      dataSource: [{ fruit: 'Apple', count: 5000 },
      { fruit: 'Grape', count: 3000 },
      { fruit: 'Apple', count: 2300 },
      { fruit: 'Banana', count: 500 },
      { fruit: 'Grape', count: 4300 },
      { fruit: 'Papaya', count: 1200 }
      ],
      width: '700px',
      height: '500px',
      weightValuePath: 'count',
      palette: ['#71B081', '#5A9A77', '#498770', '#39776C', '#266665', '#124F5E'],
      legendSettings: {
        visible: true,
        position: 'Auto'
      },
      leafItemSettings: {
        labelPath: 'fruit',
      }
    }
  },
  provide: {
    treemap: [TreeMapLegend]
  },
});
