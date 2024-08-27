
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { DialogPlugin } from "@syncfusion/ej2-vue-popups";
import { UploaderPlugin } from "@syncfusion/ej2-vue-inputs";
import * as XLSX from 'xlsx';
Vue.use(GridPlugin);
Vue.use(DialogPlugin);
Vue.use(UploaderPlugin);


new Vue({
	el: '#app',
	template: `
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
`,
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

});