<template>
  <div id="app">
    <ejs-button class="e-control e-btn e-lib e-info"  @click="addTopEvent">Add rows Data</ejs-button>
    <ejs-button style="margin-left: 20px" class="e-control e-btn e-lib e-info"  @click="deleteEvent">Delete rows</ejs-button>
    <ejs-button style="margin-left: 20px" class="e-control e-btn e-lib e-info"  @click="updateEvent">Update Freight Data</ejs-button>
      <div id="message">{{ message }} </div>
      <div  style="padding-top: 20px">
        <ejs-grid ref="immutable" :dataSource='rowData' :enableHover="false" height='350' :enableImmutableMode="true" allowPaging="true" :selectionSettings="selectionOptions"
           :rowDataBound="rowDataBound" :queryCellInfo="queryCellInfo">
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' isPrimaryKey="true" width='120'
            textAlign='Right'></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width='120'></e-column>
            <e-column field='Freight' headerText='Freight' width='120'></e-column>
            <e-column field='ShipName' headerText='Ship Name' width='120'></e-column>
          </e-columns>
        </ejs-grid>
      </div>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective,Page} from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-button": ButtonComponent

},

data() {
  return {
    rowData : data,
    selectionOptions : { type: 'Multiple' },
    message : `Initial rows rendered: ${data.length}`
  };
},
methods: {
  queryCellInfo(args){
    if (args.column.field === 'ShipName' && args.data.ShipName === "Gems Chevalier") {
      args.cell.style.backgroundColor = 'rgb(210, 226, 129)';
    }
  },
  rowDataBound(args){
    args.row.style.backgroundColor = args.data.isNewlyAdded ? '' : ' rgb(208, 255, 255)';
  },
  addTopEvent(){
    this.$refs.immutable.ej2Instances.getAllDataRows().forEach(row => {
      row.style.backgroundColor = "rgb(208, 255, 255)";
    });
    let count = 0;
    if (count < 1) {
      let newRowData = [];
      let addedRecords = {
        'OrderID': this.generateOrderId(),
        'CustomerID': this.generateCustomerId(),
        'ShipCity': this.generateShipCity(),
        'Freight': this.generateFreight(),
        'ShipName': this.generateShipName(),
        'isNewlyAdded': true
      };
      newRowData.push(addedRecords);
      this.rowData = ([...newRowData, ...this.rowData]);
      count++;
      this.message = `${count} rows rendered after performing the add action`;
    }
  },
  deleteEvent() {
    let count = 0;
    if (count < 1 && (this.rowData).length > 0) {
      this.rowData = (this.rowData).slice(1);
      count++;
      this.message = `${count} rows deleted after performing delete action`;
    }
  },
  updateEvent(){
    let count = 0;
    let newRowData = (this.rowData).map((row) => {
      if (row.ShipName === 'Bueno Foods') {
        count++;
        return { ...row, 'ShipName': "Gems Chevalier" };
      } else {
        return row;
      }
    });
    this.rowData = newRowData;
    this.message = ` ${count} rows updated after performing update action`;
  },
  generateOrderId(){
    return Math.floor(10000 + Math.random() * 90000);
  },
  generateCustomerId(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  },
  generateShipCity() {
    const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
    return cities[Math.floor(Math.random() * cities.length)];
  },
  generateFreight(){
    const randomValue = Math.random() * 100;
    return parseFloat(randomValue.toFixed(2));
  },
  generateShipName(){
    const names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
    return names[Math.floor(Math.random() * names.length)];
  }
},
provide: {
  grid: [Page]
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
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
#message{
        color:red;
        text-align: center;
        padding-top: 20px;
}
</style>