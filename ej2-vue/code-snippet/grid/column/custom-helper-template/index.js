
import Vue from "vue";
import { GridPlugin, RecordClickEventArgs } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
import { closest } from '@syncfusion/ej2-base';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
         <ejs-grid ref="grid" :dataSource="data" height=315>
            <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
              <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90 :template="'columnTemplate'"></e-column>
              <e-column field='OrderDate' headerText='Order Date' textAlign='Right' type='date' format='yMd' width=120></e-column>    
            </e-columns>
            <template v-slot:columnTemplate="{data}">
                <div>
                  {{ formatCurrency(data.Freight) }}
                </div>
            </template>
        </ejs-grid>
    </div>
`,

  data: () => {
    return {
      data: data,
    }    
  },
  methods: {
    formatCurrency(value) {
      return '₹ ' + value.toFixed(3);
    },
  },
});