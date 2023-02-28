
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
        <ejs-mention id='defaultMention' :target='target' :dataSource='dataSource' :fields='fields' :itemTemplate="'iTemplate'" :displayTemplate="'dTemplate'" :query='query' sortOrder='Descending' popupWidth='250px'>
        <template v-slot:iTemplate="{data}">
        <span><span>{{data.FirstName}}</span><span class ='city'>{{data.City}}</span></span>
        </template>
        <template v-slot:dTemplate="{data}">
        <span>{{data.FirstName}} - {{data.City}}</span>
        </template>
        </ejs-mention>
    </div>
`,

    data: function() {
        return {
            dataSource: new DataManager({
            url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
            }),
            query: new Query().from('Employees').select(['FirstName', 'City','EmployeeID']).take(6),  
            fields: { text: 'FirstName', value: 'EmployeeID' },
            target: "#mentionElement"
        };
    }

});