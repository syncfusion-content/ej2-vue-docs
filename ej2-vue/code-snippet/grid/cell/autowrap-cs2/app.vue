

<template>
    <div id="app">
        <div style="display: inline-block;">
          <label style="padding:  10px 10px 15px 0"> Change the grid lines: </label> 
          <ejs-dropdownlist ref='dropdown' id='dropdownlist' index="0"
          width="130" :dataSource="ddlData" :change="change" 
          ></ejs-dropdownlist>
        </div>
        <ejs-grid ref='grid' style="padding: 5px 5px" :dataSource='data' height='315' gridLines='Default'>
            <e-columns>
                <e-column field='Inventor' headerText='Inventor Name' width='180' textAlign="Right"></e-column>
                <e-column field='NumberofPatentFamilies' headerText="Number of Patent Families" width='180' textAlign="Right"></e-column>
                <e-column field='Country' headerText='Country' width='140'></e-column>
                <e-column field='Active' width='120'></e-column>
                <e-column field='Mainfieldsofinvention' headerText='Main fields of invention' width='200'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin  } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';
Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);

export default {
  data() {
    return {
      data: data,
      ddlData : [
        { text: 'Default', value: 'Default' },
        { text: 'Both', value: 'Both' },
        { text: 'Horizontal', value: 'Horizontal' },
        { text: 'Vertical', value: 'Vertical' },
        { text: 'None', value: 'None' },
      ],
    };
  },
  methods: {
    change: function(args) {
      this.$refs.grid.gridLines= args.value
    }
  },
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
</style>


