
import Vue from "vue";
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { L10n, setCulture} from '@syncfusion/ej2-base';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
Vue.use(MentionPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type @ and tag user"></div>
        <ejs-mention id='defaultMention' :target='target' :dataSource='customerData' :fields='fields' :query='query' locale='fr-BE'></ejs-mention>
    </div>
`,

    data: function() {
        L10n.load({
            'fr-BE': {
                'dropdowns': {
                    'noRecordsTemplate': "Aucun enregistrement trouvé"
                }
            }
        });
        return {
            customerData: new DataManager({
                url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
                adaptor: new ODataV4Adaptor,
                crossDomain: true
            }),
            fields: { text: 'ContactName', value: 'CustomerID' },
            query: new Query().select(['ContactName', 'CustomerID']).take(0),
            target: "#mentionElement"
        };
    }

});