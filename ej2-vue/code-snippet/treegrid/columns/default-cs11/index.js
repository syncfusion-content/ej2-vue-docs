
import Vue from "vue";
import { TreeGridPlugin } from "@syncfusion/ej2-vue-treegrid";
import { formatData } from "./datasource.js";

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-treegrid :dataSource="data" childMapping='subtasks' :treeColumnIndex='1' height='315px'>
            <e-columns>
                <e-column field='orderID' headerText='Order ID' width=90 textAlign='Right'></e-column>
                <e-column field='orderName' headerText='Order Name' width=100></e-column>
                <e-column field='orderDate' headerText='Order Date' width=160 :format='formatOptions' type='date' textAlign='Right'></e-column>
                <e-column field='price' headerText='Price' width=90 format='C2' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
`,

  data() {
    return {
      data: formatData,
      formatOptions: {type:'date', format:'dd/MM/yyyy'},
    };
  },

});