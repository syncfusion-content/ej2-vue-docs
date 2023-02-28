
import Vue from "vue";
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
Vue.use(MentionPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type @ and tag user"></div>
        <ejs-mention id='defaultMention' :target='target' :dataSource='dataSource' :query='query' :fields='fields' popupWidth='250px'></ejs-mention>
    </div>
`,

    data: function() {
        return {
            dataSource: new DataManager({
                url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
                adaptor: new ODataV4Adaptor,
                crossDomain: true
            }),
            query: new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6),
            fields: { text: 'ContactName', value: 'CustomerID' },
            target:'#mentionElement'
        };
    }

});