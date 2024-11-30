<script>
import { createApp } from "vue";
  import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
  import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
  var app = createApp();

  var empData = [
    { OrderID: 10248, ShipCountry: "France", CustomerName: "Paul Henriot" },
    { OrderID: 10249, ShipCountry: "Germany", CustomerName: "Karin Josephs" },
    { OrderID: 10250, ShipCountry: "Brazil", CustomerName: "Mario Pontes" },
    { OrderID: 10251, ShipCountry: "France", CustomerName: "Mary Saveley" }
  ];

  export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-button":ButtonComponent
},
    data () {
      return {
        ds: empData,
        cTemplate: function () {
          return { template: app.component("inlineTemplate", {
            template: '<ejs-button :content="`${data.ShipCountry}`"></ejs-button>',
            data() { return { data: {} }; }
          }) };
        }
      }
    }
  }
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>