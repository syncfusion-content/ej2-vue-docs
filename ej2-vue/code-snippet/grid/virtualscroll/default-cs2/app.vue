

<template>
    <div id="app">
      <div style="display:inline-block">
        <label style="padding: 30px 20px 0 0" > Select initialBlocks count:</label>
        <ejs-dropdownlist ref="dropdown" id='value' :index='2' 
        width='220' :dataSource='dropDownData' @change='valueChange' >
        </ejs-dropdownlist>
      </div>
      <div style="padding: 30px 17px 0 0">
        <ejs-grid ref="grid" :dataSource='griddata' height=300 id="grid" :enableInfiniteScrolling='true' :pageSettings='options' >
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=70></e-column>
                <e-column field='Engineer' width=100></e-column>
                <e-column field='Designation' width=100></e-column>
                <e-column field='Estimation' textAlign='Right' width=100></e-column>
                <e-column field='Status' width=100></e-column>
            </e-columns>
        </ejs-grid>
      </div>
    </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, InfiniteScroll } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
const names = ['TOM', 'Hawk', 'Jon', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Gunther', 'Ross', 'Geller', 'Joey', 'Bing', 'Tribbiani', 'Janice', 'Bong', 'Perk', 'Green', 'Ken', 'Adams'];
const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const designations = ['Manager', 'Engineer 1', 'Engineer 2', 'Developer', 'Tester'];
const statuses = ['Completed', 'Open', 'In Progress', 'Review', 'Testing'];

const generateData = (count) => {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push({
      TaskID: i + 1,
      Engineer: names[Math.floor(Math.random() * names.length)],
      Designation: designations[Math.floor(Math.random() * designations.length)],
      Estimation: hours[Math.floor(Math.random() * hours.length)],
      Status: statuses[Math.floor(Math.random() * statuses.length)]
    });
  }
  return result;
};

export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    'ejs-dropdownlist': DropDownListComponent,
  },
  data() {
    return {
      griddata: generateData(1000),
      options: { pageSize: 50 },
      dropDownData: [
        { text: '1', value: '1' },
        { text: '2', value: '2' },
        { text: '3', value: '3' },
        { text: '4', value: '4' },
        { text: '5', value: '5' },
        { text: '6', value: '6' },
        { text: '7', value: '7' }
      ]
    };
  },
  methods: {
    valueChange(args) {
      if (args.itemData && args.itemData.value) {
        this.$refs.grid.ej2Instances.infiniteScrollSettings.initialBlocks = parseInt(args.itemData.value, 10);
        this.$refs.grid.ej2Instances.refresh();   
      }
    }
  },
  provide: {
    grid: [InfiniteScroll]
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