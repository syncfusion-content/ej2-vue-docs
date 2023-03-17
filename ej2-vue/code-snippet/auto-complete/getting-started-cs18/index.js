
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';
import { loadCldr,L10n } from '@syncfusion/ej2-base';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

Vue.use(AutoCompletePlugin);

var remoteData = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
});

L10n.load({
    'fr-BE': {
        'dropdowns': {
            noRecordsTemplate: "Aucun enregistrement trouvé",
            actionFailureTemplate: "Modèle d'échec d'action"
        }
    },

});


new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-autocomplete :dataSource='data' :locale='locale' :fields='fields' sortOrder='sortOrder' :query='query' :placeholder="waterMark" ></ejs-autocomplete>
  </div>
`,

  name: 'app',
   data () {
    return {
      waterMark : 'Trouver un client',
      query: new Query().select(['ContactName', 'CustomerID']),
      data: remoteData,
      locale: 'fr-BE',
      fields: { value: 'ContactName' },
      sortOrder: 'Ascending'
    }
  }

});