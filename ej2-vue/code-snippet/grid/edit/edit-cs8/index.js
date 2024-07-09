
import Vue from "vue";
import { GridPlugin,Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { complexData } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' :actionBegin="actionBegin" height='280px' >
        <e-columns>
          <e-column field="EmployeeID" headerText="Employee ID" isPrimaryKey="true" textAlign="Right" width="120"></e-column>
          <e-column field="Name.FirstName" headerText="First Name" :editTemplate="'firstNameTemplate'" width="200"></e-column>
          <e-column field="Name.LastName" headerText="Last Name" :editTemplate="'lastNameTemplate'" width="200"></e-column>
          <e-column field="Title" headerText="Title" width="150" ></e-column>
        </e-columns>
        <template v-slot:firstNameTemplate={data}>
          <input class="e-input" name="Name___FirstName" type="text" id="Name___FirstName" :value="data.Name.FirstName" />
        </template>
        <template v-slot:lastNameTemplate={data}>
          <input class="e-input" name="Name___LastName" type="text" id="Name___LastName" :value="data.Name.LastName" />        
        </template>
      </ejs-grid>
    </div>
`,

  data: () => {
    return {
      data: complexData,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      
    };
  },
  provide: {
    grid: [Edit, Toolbar]
  }

});