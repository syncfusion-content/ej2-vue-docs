
import Vue from 'vue';
import { TreeMapPlugin, TreeMapLegend } from "@syncfusion/ej2-vue-treemap";
Vue.use(TreeMapPlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control_wrapper">
        <ejs-treemap id="treemap"  :dataSource='dataSource' :legendSettings='legendSettings' :colorValuePath ='colorValuePath' :weightValuePath='weightValuePath'  :leafItemSettings='leafItemSettings'></ejs-treemap>
    </div>
`,

  data: function() {
    return {
     dataSource: [
                       { Car:'Mustang', Brand:'Ford', count:232, color: '#71B081' },
                       { Car:'EcoSport', Brand:'Ford', count:121,  color: '#5A9A77' },
                       { Car:'Swift', Brand:'Maruti', count:143, color: '#498770' },
                       { Car:'Baleno', Brand:'Maruti', count:454, color: '#39776C' },
                       { Car:'Vitara Brezza', Brand:'Maruti', count:545 , color: '#266665' },
                       { Car:'A3 Cabriolet', Brand:'Audi',count:123, color: '#124F5E' }
    ],
  weightValuePath: 'count',
    colorValuePath: 'color',
    enableRtl:true,
    legendSettings: {
        visible: true,
        position:'Top'
    },
    leafItemSettings: {
        labelPath: 'Car'
     },
    }
  },
  provide:{
    treemap:[TreeMapLegend]
},

});