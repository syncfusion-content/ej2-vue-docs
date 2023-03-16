
import Vue from "vue";
import { PivotViewPlugin, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
     <div>
        <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height= "height" :showFieldList="showFieldList" :dataBound="ondataBound"></ejs-pivotview>
      </div>
    <a id="save" class="btn btn-primary">Save</a><div class="fileUpload btn btn-primary"><span>Load</span><input id="files" type="file" class="upload" /></div>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      showFieldList: true
    }
  },
   methods: {
    ondataBound: function (args: any) {
        let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
        var dataSource = JSON.parse(pivotGridObj.getPersistData()).dataSourceSettings.dataSource;
        var a = document.getElementById('save');
        var mime_type = 'application/octet-stream'; // text/html, image/png, et c
        a.setAttribute('download', 'pivot.JSON');
        a.href = 'data:'+ mime_type +';base64,'+ btoa(JSON.stringify(dataSource) || '');
        document.getElementById('files').addEventListener('change', this.readBlob, false);
    },
    readBlob: function (args: any) {
        var files = document.getElementById('load').files;
        var file = files[0];
        var start = 0;
        var stop = file.size - 1;
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            if (evt.target.readyState == FileReader.DONE) {
              let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
              pivotGridObj.dataSource = JSON.parse(evt.target.result);
            }
        };
        var blob = file.slice(start, stop + 1);
        reader.readAsBinaryString(blob);
    }
  },
  provide: {
        pivotview: [FieldList]
    }

});