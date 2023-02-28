
import Vue from "vue";
import { PivotViewPlugin } from "@syncfusion/ej2-vue-pivotview";

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height"> </ejs-pivotview>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
         url: "https://bi.syncfusion.com/productservice/api/sales",
        type: "CSV",
        expandAll: false,
        enableSorting: true,
        formatSettings: [
          { name: "Total Cost", format: "C0" },
          { name: "Total Revenue", format: "C0" },
          { name: "Total Profit", format: "C0" }
        ],
        drilledMembers: [{ name: "Item Type", items: ["Baby Food"] }],
        rows: [{ name: "Region" }, { name: "Country" }],
        columns: [{ name: "Item Type" }, { name: "Sales Channel" }],
        values: [
          { name: "Total Cost" },
          { name: "Total Revenue" },
          { name: "Total Profit" }
        ],
        filters: []
      },
      height: 350
    }
  }

});