<template>
  <div id="app">
    <div id="scroller" style="width: 100%; overflow-x: auto"></div>
    <ejs-grid ref='grid' :dataSource='data' height='315' width='500' :created="created">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
        <e-column field='OrderDate' headerText='Order Date' width=140 format='yMd' textAlign='Right'></e-column>
        <e-column field='Freight' headerText='Freight' width=80></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=130></e-column>
        <e-column field='ShipAddress' headerText='Ship Address' width=140></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
        <e-column field='ShipRegion' headerText='Ship Region' width=80></e-column>
        <e-column field='ShipPostalCode' headerText='Ship Postal Code' width=110></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data() {
    return {
      data: data,
    };
  },
  
  methods: {
    created() {
      const scroller = document.getElementById('scroller');
      const content = this.$refs.grid.ej2Instances.getContent().firstElementChild;
      const contentTable = this.$refs.grid.ej2Instances.getContentTable();
      this.$refs.grid.ej2Instances.element.insertBefore(scroller, content.parentElement);
      
      scroller.onscroll = () => (content.scrollLeft = scroller.scrollLeft);
      content.onscroll = () => (scroller.scrollLeft = content.scrollLeft);

      const setScroller = () => {
        scroller.innerHTML = `<div style="width: ${contentTable.offsetWidth}px; height: 18px;"></div>`;
        scroller.style.height = content.scrollWidth <= content.clientWidth ? '0px' : '18px';
      };
      setScroller();
      window.onresize = setScroller;
    }
  }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>