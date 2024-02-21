
import { createApp } from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { GridPlugin } from "@syncfusion/ej2-vue-grids";

var empData = [
  { OrderID: 10248, ShipCountry: "France", CustomerName: "Paul Henriot" },
  { OrderID: 10249, ShipCountry: "Germany", CustomerName: "Karin Josephs" },
  { OrderID: 10250, ShipCountry: "Brazil", CustomerName: "Mario Pontes" },
  { OrderID: 10251, ShipCountry: "France", CustomerName: "Mary Saveley" }
];


createApp({
  template: `
  <div id="grid">
    <ejs-grid ref="grid" :dataSource="ds">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width=120 textAlign="Right" />
        <e-column field="CustomerName" headerText="Customer Name" width=150 />
        <e-column field="ShipCountry" headerText="Ship Country" width=150 :template="'cTemplate'">
          <template v-slot:cTemplate="{data}">
            <ejs-button :content="data.ShipCountry"></ejs-button>
          </template>
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

  data() { return { ds: empData } }

}).use(GridPlugin).use(ButtonPlugin).mount('#app');