
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { data } from "./datasource.js";

Vue.use(GridPlugin);
Vue.use(NumericTextBoxPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid :dataSource="data" :allowPaging="true" :pageSettings="initialPage" :pagerTemplate="'pagerTemplate'">
        <template  v-slot:pagerTemplate="{ data}">
          <div class="e-pagertemplate">
            <div class="col-lg-12 control-section">
              <div class="content-wrapper">
                <ejs-numerictextbox
                  format="###.##"
                  :step="1"
                  :min="1"
                  :max="3"
                  :value="data.currentPage"
                  :change="onPageChange"
                  :width="200"
                ></ejs-numerictextbox>
              </div>
            </div>
            <div id="totalPages" class="e-pagertemplatemessage" style="margin-top:5px;margin-left:30px;border:none;display:inline-block">
              <span class="e-pagenomsg">{{ data.currentPage }} of {{ data.totalPages }} pages ({{ data.totalRecordsCount }} items)</span>
            </div>
          </div>
        </template>
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" :width="120"></e-column>
          <e-column field="CustomerID" headerText="Customer ID" :width="150"></e-column>
          <e-column field="ShipCity" headerText="Ship City" :width="150"></e-column>
          <e-column field="ShipName" headerText="Ship Name" :width="150"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

data() {
  return {
    data: data,
    initialPage : { pageSize: 5 }
  };
},
methods: {
  onPageChange(args) {
    this.initialPage = { currentPage: args.value };
  }
},
provide() {
  return {
    grid: [Page],
  };
}

});