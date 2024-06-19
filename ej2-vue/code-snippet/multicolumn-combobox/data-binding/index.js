import Vue from 'vue';
import { MultiColumnComboBoxPlugin } from "@syncfusion/ej2-vue-multicolumn-combobox";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
Vue.use(MultiColumnComboBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:500px;">
        <br>
        <ejs-multicolumncombobox id='multicolumn' :dataSource='empData' :fields='fields' placeholder='Select a name' popupHeight='230px'>
            <e-columns>
              <e-column field='EmployeeID' header='Employee ID' width={120}></e-column>
              <e-column field='FirstName' header='Name' width={130}></e-column>
              <e-column field='Designation' header='Designation' width={120}></e-column>
              <e-column field='Country' header='Country' width={90}></e-column>
            </e-columns>
        </ejs-multicolumncombobox>
    </div>
  </div>
`,

  data () {
    return {
      empData: new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/Employees',
        adaptor: new WebApiAdaptor,
        crossDomain: true
      }),
      fields: { text: 'FirstName', value: 'EmployeeID' }
    }
  }
});