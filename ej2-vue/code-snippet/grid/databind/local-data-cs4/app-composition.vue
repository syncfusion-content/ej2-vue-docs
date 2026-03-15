<template>
  <div id="app">
    <div>
      <label style="font-weight: bold">Browse excel file to load and return grid</label>
      <div style="padding:20px 0 0 0">
      <ejs-uploader :asyncSettings='path' :removing="onRemove"  :change="onSuccess"></ejs-uploader>
      </div>
    </div>
    <ejs-grid ref="grid" >
    </ejs-grid>
    <ejs-dialog ref="dialog" width="350" :visible='false' header="Alert" content='Invalid JSON' showCloseIcon='true' >
    </ejs-dialog>
  </div>
</template>
<script setup>
import { provide,ref } from "vue";
import { GridComponent as EjsGrid, Page } from "@syncfusion/ej2-vue-grids";
import { UploaderComponent as EjsUploader } from "@syncfusion/ej2-vue-inputs";
import { DialogComponent as EjsDialog } from "@syncfusion/ej2-vue-popups";
import * as XLSX from 'xlsx';

const grid=ref(null);
const dialog=ref(null);

const path ={
      saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove'
    };

const parseExcel=function(file) {
    if (file && file.type == "xlsx") {
      var reader = new FileReader();
      reader.onload = (e) => {
        var data = e.target.result;
        var workbook = XLSX.read(data, { type: 'array' });
        workbook.SheetNames.forEach((sheetName) => {
          var XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
          if (Array.isArray(XL_row_object) && XL_row_object.length > 0) {
            grid.value.ej2Instances.dataSource = XL_row_object;
          } else {
            dialog.value.ej2Instances.content = "Invalid JSON";
            dialog.value.show();
          }
        });
      };

      reader.readAsArrayBuffer(file.rawFile);
    } else {
      dialog.value.ej2Instances.content = "Please upload only .xlsx format";
      dialog.value.show();
    }
  };

const onSuccess=function(args){
    var files = args.file;
    if (files) {
      parseExcel(files[0]);
    }
};

const onRemove=function() {
    grid.value.ej2Instances.dataSource = [""];
    grid.value.ej2Instances.columns = [];
}    
  provide('grid',  [Page]);
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