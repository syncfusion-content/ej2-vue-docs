
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from "./datasource.js";

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
      <div id="app">
          <div>
              <ejs-button id="small" cssClass="e-small" v-on:click.native="clickHandler">
              Change height 20px</ejs-button>
              <ejs-button id="medium" cssClass="e-small" v-on:click.native="clickHandler">
              Default height 42px</ejs-button>
              <ejs-button  id="big" cssClass="e-small" v-on:click.native="clickHandler">
              Change height 60px</ejs-button>
          </div>
          <div style="padding-top:20px">
              <ejs-grid ref="grid" :dataSource='data' :rowHeight='42' height='400' >
                  <e-columns>
                      <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right'>
                      </e-column>
                      <e-column field='CustomerID' headerText='Customer Name' width='150'>
                      </e-column>
                      <e-column field='OrderDate' type="Date" headerText='Order Date' width='130' format="yMd" 
                      textAlign='Right'> </e-column>
                      <e-column field='Freight' headerText='Freight' width='120' format='C2'
                      textAlign='Right'></e-column>
                      <e-column field='ShippedDate' type="Date" headerText='Shipped Date' width='140' format='yMd' 
                      textAlign='Right'></e-column>
                      <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column> 
                  </e-columns>
              </ejs-grid>
          </div>
      </div>
`,

data() {
  return {
    data: data
  };
},
methods: {
  clickHandler: function (args) {
    const heightRow= {
      small: 20,
      medium: 40,
      big: 60
    }
    this.$refs.grid.rowHeight = heightRow[args.target.id];
  }
 }

});