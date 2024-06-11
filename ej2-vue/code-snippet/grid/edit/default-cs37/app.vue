<template>
    <div id="app">
        <div>
            <ejs-button  iconCss="e-icons e-play-icon" cssClass="e-flat" :isPrimary="true" :isToggle="true" v-on:click="btnClick">Enable/Disable Grid</ejs-button>
            <div id="GridParent">
              <ejs-grid ref='Grid' :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
                  <e-columns>
                      <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
                      <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                      <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2'></e-column>
                      <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
                  </e-columns>
              </ejs-grid>
            </div>
        </div>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      editSettings: { allowAdding:true, allowDeleting:true, allowEditing: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
    };
  },
  methods: {
    btnClick(args) {
      if (this.$refs.Grid.$el.classList.contains('disablegrid')) {
          this.$refs.Grid.$el.classList.remove('disablegrid');
          document.getElementById("GridParent").classList.remove('wrapper');
      }
      else {
          this.$refs.Grid.$el.classList.add('disablegrid');
          document.getElementById("GridParent").classList.add('wrapper');
      }
    }
  },
  provide: {
    grid: [Page, Edit, Toolbar]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
  .disablegrid {
    pointer-events: none;
    opacity: 0.4;
  }
  .wrapper {
    cursor: not-allowed;
  }
</style>