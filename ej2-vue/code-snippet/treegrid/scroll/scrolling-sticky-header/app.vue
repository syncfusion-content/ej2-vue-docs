<template>
  <div id="app">
    <div style="padding:10px 0px 20px 0px;display:flex">
      <label style="padding: 0px 20px 0px 0px;font-weight: bold">Enable/Disable Sticky Header</label>
      <ejs-switch id="switch" :checked="true" :change="toggleStickyHeader"></ejs-switch>
    </div>
    <div style="height:350px;">
      <ejs-treegrid ref="treegrid" :dataSource="data" childMapping="SubTasks" :enableStickyHeader="true" :treeColumnIndex="1">
        <e-columns>
          <e-column field="TaskID" headerText="Task ID" width="90" textAlign="Right"></e-column>
          <e-column field="TaskName" headerText="Task Name" width="180"></e-column>
          <e-column field="StartDate" headerText="Start Date" width="120" format="yMd" textAlign="Right"></e-column>
          <e-column field="Duration" headerText="Duration" width="110" textAlign="Right"></e-column>
        </e-columns>
      </ejs-treegrid>
    </div>
  </div>
</template>

<script>
import { TreeGridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";
import sampleData from "./datasource.js";

export default {
  name: "App",
  components: {
    "ejs-treegrid": TreeGridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-switch": SwitchComponent
  },
  data () {
    return {
      data: sampleData
    };
  },
  methods: {
    toggleStickyHeader(args) {
      this.$refs.treegrid.ej2Instances.enableStickyHeader = args.checked ?? false;
    }
  }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
</style>
