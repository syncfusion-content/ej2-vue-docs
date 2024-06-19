
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { UploaderPlugin } from "@syncfusion/ej2-vue-inputs";
import { getComponent } from "@syncfusion/ej2-base";
Vue.use(SpreadsheetPlugin);
Vue.use(UploaderPlugin);

new Vue({
	el: '#app',
	template: `
  <div>
      <div id="Openfromjson">
      <label id="Heading">Open From Json Options:</label> <br>
      <input type="checkbox" id="valueOnly" @change="toggleCheckboxes"><label for="valueOnly">Only Values</label>
      <input type="checkbox" id="style"><label for="style">Ignore Style</label>
      <input type="checkbox" id="formula"><label for="formula">Ignore Formula</label>
      <input type="checkbox" id="format"><label for="format">Ignore Format</label>
      <input type="checkbox" id="cf"><label for="cf">Ignore CF</label>
      <input type="checkbox" id="dv"><label for="dv">Ignore Validation</label>
      <input type="checkbox" id="freeze"><label for="freeze">Ignore Freezepane</label>
      <input type="checkbox" id="wrap"><label for="wrap">Ignore Wrap</label>
      <input type="checkbox" id="chart"><label for="chart">Ignore Chart</label>
      <input type="checkbox" id="image"><label for="image">Ignore Image</label>
      <input type="checkbox" id="note"><label for="note">Ignore Note</label>
      <ejs-uploader
        :asyncSettings="path"
        :success="onSuccess"
        :allowedExtensions="allowExtentions"
        :buttons="buttons"
        :showFileList="false"
      ></ejs-uploader>
    </div>
    <ejs-spreadsheet id="spreadsheet" ref="spreadsheet" :beforeOpen="beforeOpen">
    </ejs-spreadsheet>
</div>
`,

data: () => {
  return {
    allowExtentions: ".xlsx, .xls, .csv",
    path: {
      saveUrl:
        "https://services.syncfusion.com/vue/production/api/FileUploader/Save",
      removeUrl:
        "https://services.syncfusion.com/vue/production/api/FileUploader/Remove",
    },
    buttons: { browse: 'Choose file' }
  }
},
methods: {
  onSuccess: function(args) {
    var spreadsheet = getComponent(
      document.getElementById("spreadsheet"),
      "spreadsheet"
    );
    if (args.operation === "upload")
      spreadsheet.open({ file: args.file.rawFile });
  },
  beforeOpen: function(args) {
    args.cancel = true;
    var valueOnlyCheckbox = document.getElementById("valueOnly").checked;
    var options = valueOnlyCheckbox ? { onlyValues: true } : this.createOptions();
    var spreadsheet = getComponent(
      document.getElementById("spreadsheet"),
      "spreadsheet"
    );
    fetch(
        'https://services.syncfusion.com/vue/production/api/spreadsheet/open',
        args.requestData
    ).then((response) => {
        response.json().then((data) => {
            spreadsheet.openFromJson({ file: data }, options)
        });
    });
  },
  createOptions: function() {
    var options = {};
    options.ignoreStyle = document.getElementById('style').checked;
    options.ignoreFormula = document.getElementById('formula').checked;
    options.ignoreFormat = document.getElementById('format').checked;
    options.ignoreConditionalFormat = document.getElementById('cf').checked;
    options.ignoreValidation = document.getElementById('dv').checked;
    options.ignoreFreezePane = document.getElementById('freeze').checked;
    options.ignoreWrap = document.getElementById('wrap').checked;
    options.ignoreChart = document.getElementById('chart').checked;
    options.ignoreImage = document.getElementById('image').checked;
    options.ignoreNote = document.getElementById('note').checked;
    return options;
  },
  toggleCheckboxes: () => {
    var valueOnlyCheckbox = document.getElementById('valueOnly');
    var checkboxes = document.querySelectorAll('#Openfromjson input[type="checkbox"]:not(#valueOnly)');
    checkboxes.forEach(checkbox => {
        (checkbox).disabled = valueOnlyCheckbox.checked;
        if (valueOnlyCheckbox.checked) {
            (checkbox).checked = false;
        }
    });
  }
}

});