

<template>
    <div id="app">
        <ejs-grid ref='grid' id='grid' :dataSource='data' :load='load' :actionComplete='onActionComplete' :editSettings='editSettings' :toolbar='toolbar' :allowPaging="true">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100 :isPrimaryKey='true'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' width=120 format='C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Edit  } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data: function() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
       toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
       isDropdown: false
    };
  },
  methods: {
      load: function() {
        this.$refs.grid.ej2Instances.element.addEventListener('mouseup', function(e) {
            if (e.target.classList.contains("e-rowcell")) {
              if (this.$refs.grid.ej2Instances.isEdit)
                  this.$refs.grid.ej2Instances.endEdit();
              let rowInfo = this.$refs.grid.ej2Instances.getRowInfo(e.target);
              if (rowInfo.column.field === "ShipCountry")
                  this.isDropdown = true;
              this.$refs.grid.ej2Instances.selectRow(rowInfo.rowIndex);
              this.$refs.grid.ej2Instances.startEdit();
        }.bind(this));
      },
      onActionComplete: function(args) {
        if (args.requestType =="beginEdit" && this.isDropdown) {
            this.isDropdown = false;
            let dropdownObj = args.form.querySelector('.e-dropdownlist').ej2_instances[0];
            dropdownObj.element.focus();
            dropdownObj.showPopup();
        }
    }
  },
  provide: {
    grid: [Edit]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


