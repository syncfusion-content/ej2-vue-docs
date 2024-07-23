import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);
Vue.use(TextBoxPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
        <div>
          <label style="padding: 30px 40px 0 0">Enter the start row index: </label>
          <ejs-textbox ref="textbox" required width="120"></ejs-textbox>
        </div>
        <div style="padding-top: 10px">
          <label style="padding: 30px 17px 0px 0px">Enter the start column index: </label>
          <ejs-textbox ref="textbox1" required width="120"></ejs-textbox>
        </div>
        <div style="padding-top: 10px">
          <label style="padding: 30px 40px 0 0">Enter the end row index: </label>
          <ejs-textbox ref="textbox2" required width="120"></ejs-textbox>
        </div>  
        <div style="padding-top: 10px">
          <label style="padding: 30px 19px 0 0px">Enter the end column index: </label>
          <ejs-textbox ref="textbox3" required width="120"></ejs-textbox>
          <ejs-button id="button" @click.native="onClick">Select range of Cell</ejs-button >
        </div>
        <div style="padding: 20px 0px 0px 0px">
          <ejs-grid ref="grid" :dataSource="data" :selectionSettings="selectionOptions">
            <e-columns>
              <e-column field="OrderID" headerText="Order ID" textAlign="Right" 
              width="120"></e-column>
              <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
              <e-column field="ShipCountry" headerText="Ship Country" width="130"></e-column>
              <e-column field="Freight" headerText="Freight" format="C2" width="100">
              </e-column>
            </e-columns>
          </ejs-grid>
        </div>
    </div>
`,

data() {
  return {
    data: data,
    selectionOptions: { type: "Multiple", mode: "Cell" },
    startRowIndex:0,
    startColumnIndex:0,
    endColumnIndex:0,
    
  };
},
methods: {
  onClick: function () {
    this.startRowIndex = parseInt(this.$refs.textbox.$el.value, 10);
    this.startColumnIndex = parseInt(this.$refs.textbox1.$el.value, 10);
    this.endRowIndex = parseInt(this.$refs.textbox2.$el.value, 10);
    this.endColumnIndex = parseInt(this.$refs.textbox3.$el.value, 10);
    this.$refs.grid.clearCellSelection();
    if (
      !isNaN(this.startRowIndex) &&
      !isNaN(this.startColumnIndex) &&
      !isNaN(this.endRowIndex) &&
      !isNaN(this.endColumnIndex)
    )
      this.$refs.grid.selectCellsByRange(
        { rowIndex: this.startRowIndex, cellIndex: this.startColumnIndex },
        { rowIndex: this.endRowIndex, cellIndex: this.endColumnIndex }
      );
  },
}

});