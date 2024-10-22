
import Vue from "vue";
import { GridPlugin, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid :dataSource='data' :toolbar='toolbarOptions' height='272px' :beforePrint="beforePrint">
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

data() {
  return {
    data: data,
    toolbarOptions: ["Print"],
  };
},
methods: {
  beforePrint:function(args){
  var div = document.createElement("Div")
      div.innerHTML = "Title here"
      div.style.textAlign = 'center';
      div.style.color = 'red';
      div.style.padding = '10px 0';
      div.style.fontSize = '25px';
      args.element.insertBefore(div, args.element.childNodes[0]);
}
},
provide: {
  grid: [Toolbar],
},

});