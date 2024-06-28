<template>
    <div id="app">
      <label>Select a degree:</label>
      <ejs-dropdownlist ref='dropdown' id='dropdownlist' :dataSource='degree' placeholder='Select a degree' width="150"></ejs-dropdownlist>
      <ejs-grid style='margin-top:10px' ref='grid' id='Grid' :dataSource='data' :created='setHeaderHeight' height='240px'
      :toolbar='toolbarOptions' :allowExcelExport='true' :excelQueryCellInfo='excelQueryCellInfo' 
      :toolbarClick='toolbarClick' :excelHeaderQueryCellInfo='excelHeaderQueryCellInfo'>
          <e-columns>
              <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=120 :customAttributes='customAttributes'></e-column>
              <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2' width=80></e-column>
              <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          </e-columns>
      </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective,  Toolbar, ExcelExport } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-dropdownlist":DropDownListComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data: () => {
    return {
      data: data,
      customAttributes : {class : 'orientationcss'},
      toolbarOptions: ['ExcelExport'],
      degree : [90, 180, 45, 135]
    };
  },
  methods: {
    toolbarClick: function(args) {
      if (args.item.id === 'Grid_excelexport') {
        this.$refs.grid.excelExport();
      }
    },
    setHeaderHeight: function() {
      let textWidth = document.querySelector(".orientationcss > div").scrollWidth;//Obtain the width of the headerText content.
      let headerCell = document.querySelectorAll(".e-headercell");
      for (let i = 0; i < headerCell.length; i++) {
        (headerCell.item(i)).style.height = textWidth + 'px'; //Assign the obtained textWidth as the height of the headerCell.
      }
    },
    excelQueryCellInfo(args) {
      if (args.column.field == 'Freight') {
        if (args.value < 30) {
            args.style = { backColor: '#99ffcc' };
        }
        else if (args.value < 60) {
            args.style = { backColor: '#ffffb3' };
        }
        else {
            args.style = { backColor: '#ff704d' };
        }
      }
    },
    excelHeaderQueryCellInfo(args) {
      let textWidth = document.querySelector(".orientationcss > div").scrollWidth;
      if (args.gridCell.column.field == 'Freight') {
          args.style = { backColor: '#99ffcc', vAlign: 'Bottom' };
      }
      else {
          args.style = { vAlign: 'Center', rotation: this.$refs.dropdown.$el.value };
      }
      args.cell.cellHeight = textWidth;
    },
  },
   provide: {
    grid: [Toolbar, ExcelExport]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";

   .orientationcss .e-headercelldiv {
    transform: rotate(90deg);
    padding-top:5px;
}
</style>