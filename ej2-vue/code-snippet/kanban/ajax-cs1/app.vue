<template>
  <div id="app">
<ejs-button v-on:click="btnClick">Load Data</ejs-button>
   <ejs-kanban ref="kanbanObj" id="kanban" keyField="ShipCountry"
    :cardSettings="cardSettings">
      <e-columns>
        <e-column headerText="Denmark" keyField="Denmark"></e-column>
        <e-column headerText="Brazil" keyField="Brazil"></e-column>
        <e-column headerText="Switzerland" keyField="Switzerland"></e-column>
        <e-column headerText="Germany" keyField="Germany"></e-column>
      </e-columns>
    </ejs-kanban>
  </div>
</template>

<script>

import { KanbanComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-vue-kanban';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { Ajax } from '@syncfusion/ej2-base';

export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-kanban":KanbanComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data: function() {
    return {
        cardSettings: {
            contentField: "ShippedDate",
            headerField: "OrderID"
        },
    };
  },
  methods: {
    btnClick: function (){
        var kanbanData = this.$refs.kanbanObj.ej2Instances;
        var ajax = new Ajax("https://services.syncfusion.com/vue/production/api/Orders", "GET");
        ajax.send();
        ajax.onSuccess = function (result) {
            kanbanData.dataSource = JSON.parse(result);
        };
    }
  }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-kanban/styles/material.css';
</style>