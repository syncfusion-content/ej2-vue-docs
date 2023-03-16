
import Vue from "vue";
import { TreeGridPlugin, Resize } from "@syncfusion/ej2-vue-treegrid";
import { stackedData } from "./datasource.js";

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-treegrid :dataSource="data" childMapping='subtasks' :treeColumnIndex='1' :allowResizing='true' height='260px'>
             <e-columns>
                <e-column headerText='Order Details' :columns='orderColumns'></e-column>
                <e-column headerText='Shipment Details' :columns='shipColumns'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
`,

  data() {
    return {
      data: stackedData,
        orderColumns : [
            { field: 'orderID', headerText: 'Order ID', textAlign: 'Right', width: 90 },
            { field: 'orderName', headerText: 'Order Name', textAlign: 'Left', width: 170 },
        ],
        shipColumns : [
            { field: 'shipMentCategory', headerText: 'Shipment Category', textAlign: 'Left', width: 90 },
            { field: 'shippedDate', headerText: 'Shipped Date', textAlign: 'Right', format: 'yMd', width: 90 }
        ]
    };
  },
   provide: {
      treegrid: [ Resize ]
    },

});