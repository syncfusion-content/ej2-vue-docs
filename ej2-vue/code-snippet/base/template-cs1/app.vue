<template>
  <div id="grid">
    <ejs-grid ref="grid" :dataSource="ds">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width=120 textAlign="Right" />
        <e-column field="CustomerName" headerText="Customer Name" width=150 />
        <e-column field="ShipCountry" headerText="Ship Country" width=150 :template='cTemplate'  />
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
var demoTemplate = Vue.component("demo", {
  template: '<ejs-button :content="`${data.ShipCountry}`"></ejs-button>',
  data() {
    return {
      data: {}
    };
  }
});
var empData = [{
      OrderID: 10248,
      ShipCountry: "France",
      CustomerName: "Paul Henriot"
    },
    {
      OrderID: 10249,
      ShipCountry: "Germany",
      CustomerName: "Karin Josephs"
    },
    {
      OrderID: 10250,
      ShipCountry: "Brazil",
      CustomerName: "Mario Pontes"
    },
    {
      OrderID: 10251,
      ShipCountry: "France",
      CustomerName: "Mary Saveley"
    }];

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
      cTemplate: function (e) {
        return {
          template: demoTemplate
        };
      }
    }
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css";
  #app {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
  }
</style>