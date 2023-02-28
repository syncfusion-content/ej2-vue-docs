
import Vue from 'vue';
import { TreeMapPlugin, Print } from "@syncfusion/ej2-vue-treemap";
Vue.use(TreeMapPlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control_wrapper">
    <button id="print" @click="clickPrint">Print</button>
        <ejs-treemap  ref="treemap" :allowPrint='allowPrint' :dataSource='dataSource' :weightValuePath='weightValuePath'
        :leafItemSettings='leafItemSettings'></ejs-treemap>
    </div>
`,

  data: function() {
    return {
     dataSource: [
        {State:"United States", GDP:17946, percentage:11.08, Rank:1},
    {State:"China", GDP:10866, percentage: 28.42, Rank:2},
    {State:"Japan", GDP:4123, percentage:-30.78, Rank:3},
    {State:"Germany", GDP:3355, percentage:-5.19, Rank:4},
    {State:"United Kingdom", GDP:2848, percentage:8.28, Rank:5},
    {State:"France", GDP:2421, percentage:-9.69, Rank:6},
    {State:"India", GDP:2073, percentage:13.65, Rank:7},
    {State:"Italy", GDP:1814, percentage:-12.45, Rank:8},
    {State:"Brazil", GDP:1774, percentage:-27.88, Rank:9},
    {State:"Canada", GDP:1550, percentage:-15.02, Rank:10}
    ],
     weightValuePath: 'GDP',
        leafItemSettings: {
            labelPath: 'State',
            labelFormat: '${State}<br>$${GDP} Trillion<br>(${percentage} %)',
            labelStyle: {
                color: '#000000'
            },
            border: {
                color: '#000000',
                width: 0.5
            },
            allowPrint: true
      }
    }
  },
  provide:{
    treemap:[Print]
  },
  methods: {
    clickPrint: function(args) {
         args.treemap.print();
   }
  }

});