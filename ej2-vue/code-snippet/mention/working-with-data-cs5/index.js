
import Vue from "vue";
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
Vue.use(MentionPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type @ and tag user"></div>
        <ejs-mention id='defaultMention' :target='target' :dataSource='dataSource' :fields='fields' :query='query' popupWidth='250px'></ejs-mention>
    </div>
`,

    data: function() {
        return {
            dataSource: new DataManager({
                url: 'https://ej2services.syncfusion.com/production/web-services/api/Employees',
                adaptor: new WebApiAdaptor,
                crossDomain: true
            }),
            query: new Query().select(['FirstName', 'EmployeeID']).take(7),
            fields: { text: 'FirstName', value: 'EmployeeID' },
            target:'#mentionElement'
        };
    }

});