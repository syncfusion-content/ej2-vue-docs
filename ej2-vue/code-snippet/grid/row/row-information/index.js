
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='show' style="padding:0px 0px 20px 0px;" ></div>
      <ejs-grid ref="grid" :dataSource='data' :rowDataBound='rowDataBound'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
          <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120></e-column>
          <e-column field='OrderDate' type="Date" headerText='Order Date' textAlign='Right' format='yMd' width=120></e-column>
        </e-columns>
      </ejs-grid>
  </div>
`,

data() {
  return {
    data: data,
  };
},
methods: {
  rowDataBound: function(args){
    args.row.addEventListener('mouseover', (e) => {
    const rowInformation = this.$refs.grid.ej2Instances.getRowInfo(e.target);
    document.getElementById('show').innerHTML = `
      <table style="border-collapse: collapse; width: 600px;">
        <tr style="border: 2px solid;">
          <td style="padding: 2px;"><b>Row Information:</b></td>
        </tr>
        <tr style="border: 2px solid; padding: 8px;">
          <th style="border: 2px solid; padding: 8px; width: 120px;"><b>Class Name</b>
          </th>
          <td style="border: 2px solid; padding: 8px;">${rowInformation.row.className}
          </td>
        </tr>
        <tr style="border: 2px solid;">
          <th style="border: 2px solid; padding: 8px;"><b>Row Index</b>
          </th>
          <td style="border: 2px solid; padding: 8px;">${rowInformation.rowIndex}
        </td>
        </tr>
       </table>`;
  });
  }
}

});