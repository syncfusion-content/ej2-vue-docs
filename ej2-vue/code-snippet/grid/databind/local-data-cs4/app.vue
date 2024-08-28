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
<script>
import { GridComponent,Page} from "@syncfusion/ej2-vue-grids";
import { DialogComponent } from "@syncfusion/ej2-vue-popups";
import { UploaderComponent } from "@syncfusion/ej2-vue-inputs";
import * as XLSX from 'xlsx';

export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"ejs-dialog":DialogComponent,
"ejs-uploader":UploaderComponent
},

data() {
  return {
    path :{
      saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove'
    }
  };
},
methods: {
  parseExcel(file) {
    if (file && file.type == "xlsx") {
      var reader = new FileReader();
      reader.onload = (e) => {
        var data = e.target.result;
        var workbook = XLSX.read(data, { type: 'array' });
        workbook.SheetNames.forEach((sheetName) => {
          var XL_row_object = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
          if (Array.isArray(XL_row_object) && XL_row_object.length > 0) {
            this.$refs.grid.ej2Instances.dataSource = XL_row_object;
          } else {
            this.$refs.dialog.ej2Instances.content = "Invalid JSON";
            this.$refs.dialog.ej2Instances.show();
          }
        });
      };

      reader.readAsArrayBuffer(file.rawFile);
    } else {
      this.$refs.dialog.ej2Instances.content = "Please upload only .xlsx format";
      this.$refs.dialog.ej2Instances.show();
    }
  },

onSuccess(args){
    var files = args.file;
    if (files) {
      this.parseExcel(files[0]);
    }
},

onRemove() {
    this.$refs.grid.ej2Instances.dataSource = [""];
    this.$refs.grid.ej2Instances.columns = [];
}
},
provide: {
  grid: [Page]
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