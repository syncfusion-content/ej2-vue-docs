
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);



new Vue({
  el: '#app',
  template: `
  <div id="app">
    <div style="padding: 10px 0px 20px 0px">
      <ejs-button class="btn" @click.native="onClick">Get selected row indexes</ejs-button >
    </div>
    <p  id="message">{{showMessage}}</p>
    <ejs-grid ref="grid" :dataSource="data" height="315px" :selectionSettings="selectionOptions">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
        <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>`,

  data() {
    return {
      data: data,
      showMessage: "",
      selectedRowIndexes: [],
      selectionOptions: { type: "Multiple" },
    };
  },
  methods: {
    onClick: function () {
      this.selectedRowIndexes = this.$refs.grid.ej2Instances.getSelectedRowIndexes();
      if (this.selectedRowIndexes.length > 0)
        this.showMessage ="Selected row indexes:" + this.selectedRowIndexes.join(", ");
    },
  }

});