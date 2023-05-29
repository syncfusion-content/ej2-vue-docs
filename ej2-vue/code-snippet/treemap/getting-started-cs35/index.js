
import Vue from 'vue';
import { TreeMapPlugin, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";
Vue.use(TreeMapPlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control_wrapper">
        <ejs-treemap id="treemap"  :dataSource='dataSource' :rangeColorValuePath='rangeColorValuePath' :legendSettings='legendSettings' :weightValuePath='weightValuePath' :leafItemSettings='leafItemSettings'></ejs-treemap>
    </div>
`,

  data: function() {
    return {
    height:'350px',
     dataSource: [
        { fruit:'Apple', count:5000 },
                       { fruit:'Mango', count:3000 },
                       { fruit:'Orange', count:2300 },
                       { fruit:'Banana', count:500 },
                       { fruit:'Grape', count:4300 },
                       { fruit:'Papaya', count:1200 },
                       { fruit:'Melon', count:4500 }
    ],
   weightValuePath: 'count',
    rangeColorValuePath:'count',
    legendSettings: {
       visible: true,
       alignment:'Far',
    },
    leafItemSettings: {
        labelPath: 'fruit',
        colorMapping:[
            {
               from:500,
               to:3000,
               color:'orange'
           },
           {
               from:3000,
               to:5000,
               color:'green'
           }
        ]
     }
    }
  },
   provide:{
    treemap:[TreeMapLegend]
    },

});