import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { data } from "./datasource.js";

Vue.use(GridPlugin);
Vue.use(NumericTextBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <template>
  <div id="app">
    <div style="padding:0 0 20px 0">
      <label style="padding: 30px 17px 0 0;font-weight: bold">Select page size:</label>
      <ejs-numerictextbox ref="numericTextbox"   width="200px"  format="####.##" :min="150" :step="50" placeholder='select container height'
      @change='calculatePageSize' ></ejs-numerictextbox>
    </div>
    <ejs-grid ref="grid" id="grid" :dataSource="data" :allowPaging="true" >
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90">
        </e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="Freight" headerText="Freight" textAlign='Right' format='C2' 
        width="90"></e-column>
        <e-column field="OrderDate" type="date" headerText="Order Date" textAlign='Right' 
        format='yMd' width="120"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>`,

data() {
  return {
    data: data,
  };
},
methods: {
 calculatePageSize(args) {
this.$refs.grid.$el.ej2_instances[0].pageSettings.pageSize = this.$refs.grid.$el.ej2_instances[0].calculatePageSizeByParentHeight(args.value.toString());
  },
},
provide: {
  grid: [Page]
}

});