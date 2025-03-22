import Vue from 'vue';
import { MultiColumnComboBoxPlugin } from "@syncfusion/ej2-vue-multicolumn-combobox";
import { L10n, setCulture} from '@syncfusion/ej2-base';
Vue.use(MultiColumnComboBoxPlugin);

L10n.load({
  'fr-BE': {
     'multicolumncombobox': {
           'noRecordsTemplate': "Aucun enregistrement trouvé"
       }
   }
});

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div id='container' style="margin:50px auto 0; width:500px;">
          <br>
          <ejs-multicolumncombobox id='multicolumn' :dataSource='empData' :fields='fields' :query='query' locale='fr-BE' placeholder='Sélectionnez un client'>
          <e-columns>
            <e-column field='ContactName' header='Contact Name' width={90}></e-column>
            <e-column field='CustomerID' header='Customer ID' width={160}></e-column>
          </e-columns>
      </ejs-multicolumncombobox>
      </div>
    </div>
  `,
    data() {
      return {
        empData: [],
        fields: { text: 'ContactName', value: 'CustomerID' }
      }
    }
});
