<template>
    <div id="app">
      <div style="display: inline-block;">
        <label style="padding:  10px 10px 12px 0"> Auto wrap mode: </label> 
        <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0"
        width="150" :dataSource="ddlData" :fields='fields' :change="change"></ejs-dropdownlist>
      </div>
      <ejs-grid ref='grid' id="grid" style="margin-top: 5px" :dataSource='data' :allowTextWrap='true' :textWrapSettings='wrapSettings' height='310' width='800'>
        <e-columns>
          <e-column field='Inventor' headerText='Inventor Name' width='150' textAlign="Right"></e-column>
          <e-column field='NumberofPatentFamilies' headerText="Number of Patent Families" width='150' textAlign="Right"></e-column>
          <e-column field='Country' headerText='Country' width='140'></e-column>
          <e-column field='Active' width='120'></e-column>
          <e-column field='Mainfieldsofinvention' headerText='Main fields of invention' width='200'></e-column>
        </e-columns>
      </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
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
  data() {
    return {
      data: data,
      wrapSettings: { wrapMode: 'Content' },
      fields: { text: 'text', value: 'value' },
      ddlData : [
        { text: 'Content', value: 'Content' },
        { text: 'Both', value: 'Both' },
      ],
    };
  },
  methods: {
    change: function(args) {
      let grid = this.$refs.grid.ej2Instances;
      grid.textWrapSettings.wrapMode = args.value;
    }
  },
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