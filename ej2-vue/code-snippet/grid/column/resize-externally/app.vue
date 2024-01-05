

<template>
  <div id="app">
      <div style="display: flex">
        <label style='padding:  10px 10px 15px 0'> Change the field:  </label> 
        <ejs-dropdownlist ref='dropdown' id='dropdownlist' style="margin-top:3px" index="0"
        width="100" :dataSource="ddlData"></ejs-dropdownlist>
      </div>
      <div>
      <label style="padding: 30px 17px 0 0">Enter the width: </label>
      <ejs-textbox ref='textbox' type="textbox" placeholder="Enter new width" width="120"></ejs-textbox>
      <ejs-button ref='button' cssClass='e-outline' v-on:click.native="onExternalResize">Resize</ejs-button>
      </div> 
      <ejs-grid ref='grid' style="padding: 5px 5px" :dataSource='data' height='315' :allowResizing='true'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='Freight' headerText='Freight' width=80></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
        </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Resize } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin  } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { TextBoxPlugin } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';
Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);
Vue.use(ButtonPlugin);
Vue.use(TextBoxPlugin);

export default {
  data() {
    return {
      data: data,
      ddlData : [
        { text: 'OrderID', value: 'OrderID' },
        { text: 'CustomerID', value: 'CustomerID' },
        { text: 'Freight', value: 'Freight' },
        { text: 'ShipCountry', value: 'ShipCountry' },
      ],
    };
  },
  methods: {
    onExternalResize: function() {
      this.$refs.grid.getColumnByField(this.$refs.dropdown.$el.value).width = this.$refs.textbox.$el.value;
      this.$refs.grid.refreshColumns();
    }
  },
  provide: {
      grid: [Resize]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


