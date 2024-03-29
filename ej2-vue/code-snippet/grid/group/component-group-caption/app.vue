

<template>
  <div id="app">
    <ejs-grid :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' height='267px'>
      <e-columns>
        <e-column field='OrderID' headerText='ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Name' width=100></e-column>
        <e-column field='ShipCity' headerText='City' width=100></e-column>
        <e-column field='Freight' headerText='Value' width=80></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Group } from "@syncfusion/ej2-vue-grids";
import { ChipList  } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      groupOptions: { columns: ['CustomerID'],
        captionTemplate: '<div class="groupChip">${key}</div>' }
    };
  },
  methods: {
    dataBound(){
      var groupCaptions = document.getElementsByClassName('groupChip');    
      for (var i = 0; i < groupCaptions.length; i++) {
        let chip = new ChipList({});
        chip.appendTo(groupCaptions[i]);
      }
    }
  },
  provide: {
    grid: [Group]
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
</style>


