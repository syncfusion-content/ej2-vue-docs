
import Vue from 'vue';
import { TreeMapPlugin, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";
Vue.use(TreeMapPlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control_wrapper">
        <ejs-treemap id="treemap"  :dataSource='dataSource' :colorValuePath='colorValuePath' :legendSettings='legendSettings' :weightValuePath='weightValuePath' :palette='palette' :leafItemSettings='leafItemSettings'></ejs-treemap>
    </div>
`,

  data: function() {
    return {
     dataSource: [{ fruit:'Apple', count:5000, visibility: true , color: 'red'},
                       { fruit:'Mango', count:3000, visibility: false, color:'blue'},
                       { fruit:'Orange', count:2300, visibility: true, color:'green' },
                       { fruit:'Banana', count:500, visibility: false, color:'yellow' },
                       { fruit:'Grape', count:4300, visibility: true, color:'orange' },
                       { fruit:'Papaya', count:1200, visibility: false, color:'pink' },
                       { fruit:'Melon', count:4500, visibility: true , color:'violet'}
    ],
    weightValuePath: 'count',
    colorValuePath:'color',
    palette:[],
    legendSettings: {
        visible: true,
        showLegendPath:'visibility'
    },
    leafItemSettings: {
        labelPath: 'fruit',
     }
    }
  },
   provide:{
    treemap:[TreeMapLegend]
    },

});