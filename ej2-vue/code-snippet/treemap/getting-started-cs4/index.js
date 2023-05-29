
import Vue from 'vue';
import { TreeMapPlugin } from "@syncfusion/ej2-vue-treemap";
Vue.use(TreeMapPlugin);


new Vue({
	el: '#app',
	template: `
    <div class="control_wrapper">
        <ejs-treemap id="treemap"  :dataSource='dataSource' :weightValuePath='weightValuePath' :palette='palette' :leafItemSettings='leafItemSettings'></ejs-treemap>
    </div>
`,

  data: function() {
    return {
    height:'350px',
     dataSource: [{ Car:'Mustang', Brand:'Ford', count:232 },
                       { Car:'EcoSport', Brand:'Ford', count:121 },
                       { Car:'Swift', Brand:'Maruti', count:143 },
                       { Car:'Baleno', Brand:'Maruti', count:454 },
                       { Car:'Vitara Brezza', Brand:'Maruti', count:545 },
                       { Car:'A3 Cabriolet', Brand:'Audi',count:123 },
                       { car:'RS7 Sportback', Brand:'Audi', count:523 }
                     ],
    palette:['red','green'],
    weightValuePath: 'count',
    leafItemSettings: {
        labelPath: 'Car'
     }
    }
    }
  
});