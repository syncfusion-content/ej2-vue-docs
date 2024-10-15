
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { UploaderPlugin } from "@syncfusion/ej2-vue-inputs";
import { employeeData } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(UploaderPlugin);


new Vue({
	el: '#app',
	template: `
 <div id="app">
    <ejs-grid :dataSource="data" :editSettings="editSettings" :toolbar="toolbar" @actionBegin="actionBegin">
      <e-columns>
        <e-column field="EmployeeID" headerText="Employee ID" textAlign="Right" isPrimaryKey="true" :validationRules='employeeIRules'  width="100"></e-column>
        <e-column field="FirstName" headerText="First Name" textAlign="Left" width="120" :validationRules='firstNameRules'></e-column>
        <e-column field="LastName" headerText="Last Name" textAlign="Left" width="120"  :validationRules='lastNameRules'></e-column>
        <e-column field="Title" headerText="Title" textAlign="Left" width="120" :validationRules='titleRules'></e-column>
        <e-column headerText="Employee Image" width="150" template="template" :editTemplate="'editTemplate'" textAlign="Center">
          <template v-slot:template="{ data }">
            <div class="image">
              <img :src="data.Image ? data.Image : 'https://ej2.syncfusion.com/angular/demos/assets/grid/images/' + data.EmployeeID + '.png'" alt="Employee Image" />
            </div>
          </template>
          <template v-slot:editTemplate>
            <ejs-uploader ref="uploader" :asyncSettings="path" :multiple="false" :success="onUploadSuccess"></ejs-uploader>
          </template>
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    data: employeeData,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    employeeIRules : { required: true },
    firstNameRules : { required: true },
    lastNameRules : { required: true},
    titleRules : { required: true},

    toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
    path: {
      saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
      removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
    },
    strm: ''
  };
},
methods: {
  actionBegin(args) {
    if (args.requestType === 'save') {
      if(this.strm){
        args.data['Image'] = this.strm;
        this.strm="";
      }
    }
  },
  onUploadSuccess(args) {
    if (args.operation === 'upload') {
      const fileBlob = args.file.rawFile;
      const file = new File([fileBlob], args.file.name);
      this.getBase64(file);
    }
  },
  getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.strm = reader.result;
    };
  },
},
provide() {
  return {
    grid: [Edit, Toolbar],
  };
}

});