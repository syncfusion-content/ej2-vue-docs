
import Vue from "vue";
import { GridPlugin} from "@syncfusion/ej2-vue-grids";
import { setSpinner } from '@syncfusion/ej2-vue-popups';
import { orderDetails } from './datasource.ts';
Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
   <div id="app">
     <ejs-grid  ref='elementRef1' id='grid1'  :dataSource="data" :created='onGridCreated'>
     <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
      <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
     </e-columns>
    </ejs-grid>
         <br/>
        <br/>
      <ejs-grid  ref='elementRef2' id='grid2'  :dataSource="data" >
      <e-columns>
      <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
      <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
      <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
     </e-columns>
     </ejs-grid>
    </div>
`,

  name: 'app',
  data: function(){
        return {
           data: orderDetails.slice(0, 7)
        }
   },
  methods: {
       onGridCreated: function(args){
        setSpinner({ template: '<div style="width:100%;height:100%" class="custom-rolling"><div></div></div>' });
       },
    }

});