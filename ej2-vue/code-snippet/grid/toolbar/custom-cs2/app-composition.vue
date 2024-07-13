<template>
  <div id="app">
    <ejs-grid ref='grid' id='Grid' :dataSource='data' :editSettings='editSettings' :toolbarTemplate='toolbar'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' :isPrimaryKey='true' :validationRules='orderIDRules' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' type='string' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' type='string' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' type='string' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, createApp, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { ToolbarComponent } from "@syncfusion/ej2-vue-navigations";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { addImage } from "./add.ts";
import { deleteImage } from "./delete.ts";
import { data } from './datasource.js';
const grid = ref(null);
const app = createApp();
      const orderIDRules = { required: true };
      const editSettings = { allowAdding: true, allowDeleting: true };
      const toolbar = function () {
        var addImageSource = `data:image/png;base64, ${addImage}`;
        var deleteImageSource = `data:image/png;base64, ${deleteImage}`;
        return {
          template: app.component('custom-toolbar', {
            components:{
              "ejs-toolbar":ToolbarComponent,
              "ejs-button":ButtonComponent
            },
            template: `<ejs-toolbar>
                        <div>
                          <img :src="addImageSource" id="addImage" />
                          <ejs-button ref='button' id="addButton" class="button" cssClass='e-outline' v-on:click="editAction">Add</ejs-button>
                          <img :src="deleteImageSource" id="deleteImage" />
                          <ejs-button ref='button'  id="deleteButton" class="button" cssClass='e-outline' v-on:click="editAction">Delete</ejs-button>
                        </div>
                    </ejs-toolbar>`,
            data: function () {
              return {
                addImageSource: addImageSource,
                deleteImageSource: deleteImageSource
              };
            },
            methods: {
              editAction: function(args) {
                if (args.currentTarget.id === 'addButton') {
                  grid.value.ej2Instances.addRecord();
                } else {
                    var selectedRecord = grid.value.ej2Instances.getSelectedRecords()[0];
                    grid.value.ej2Instances.deleteRecord(selectedRecord);
                }
              } 
            }
          })
        };
      }
  provide('grid',  [Toolbar, Edit]);
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

.button {
  margin: 0px 10px 3px;
}
  
#addImage,#deleteImage {
    height: 30px;
    width: 30px;
}
</style>