
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
        <ejs-mention id='defaultMention' :target='target' :dataSource='DataManager' :query='query' :fields='fields' minLength='3'></ejs-mention>
    </div>
`,

        data: function() {
        return {
            DataManager : new DataManager({
                url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers',
                adaptor: new ODataV4Adaptor,
                crossDomain: true
            }),
            query: new Query().select(['ContactName', 'CustomerID']).take(7),
            // map the appropriate column
            fields: { text: 'ContactName', value: 'CustomerID' },
            minLength: 3,
            target: "#mentionElement"
        }
    }

});