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
        <ejs-multicolumncombobox id='multicolumn' :dataSource='empData' :fields='fields' placeholder='Select a country' popupHeight='230px' :gridSettings='gridSettings' :actionFailureTemplate='actionFailureTemplate'>
            <e-columns>
              <e-column field='OrderID' header='Order ID' width={120}></e-column>
              <e-column field='CustomerID' header='Customer ID' width={130}></e-column>
              <e-column field='ShipCountry' header='Ship Country' width={120}></e-column>
            </e-columns>
        </ejs-multicolumncombobox>
    </div>
  </div>
`,

  data () {
    return {
      empData: new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/order-data',
        adaptor: new WebApiAdaptor,
        crossDomain: true
      }),
      fields: { text: 'Name', value: 'EmpID' },
      gridSettings: { rowHeight: 40 },
      actionFailureTemplate: "<span class='action-failure'> Data fetch get fails</span>"
    }
  }

});