import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { TextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { data } from "./datasource.js";

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);
Vue.use(TextBoxPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div>
      <label style="padding: 30px 17px 0 0;font-weight: bold">Enter current page:</label>
      <ejs-textbox ref="textbox" width="120"></ejs-textbox>
      <ejs-button ref="button" id="button"  v-on:click="clickHandler">click button</ejs-button>
    </div>
    <div style="padding:20px 0 0 0">
      <ejs-grid ref="grid" id="PagingGrid" :dataSource="data" :allowPaging="true" height="325">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="120">
          </e-column>
          <e-column field="CustomerID" headerText="Customer ID" width="150"></e-column>
          <e-column field="ShipCity" headerText="Ship City" width="150"></e-column>
          <e-column field="ShipName" headerText="Ship Name" width="150"></e-column>
        </e-columns>
      </ejs-grid>
    </div> 
  </div>`,

  data() {
    return {
      data: data,
      pageSettings: { pageSize: 5 }
    };
  },
  methods: {
    clickHandler:function() {
      if (this.$refs.textbox.$el.value) {
        this.$refs.grid.$el.ej2_instances[0].pageSettings.currentPage = parseInt(this.$refs.textbox.$el.value,10);
      }
    },
  },
  provide: {
    grid: [Page]
  }

});