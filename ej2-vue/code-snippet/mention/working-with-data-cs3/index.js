
import Vue from "vue";
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(MentionPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type @ and tag country"></div>
        <ejs-mention id='defaultMention' :target='target' :dataSource='userData' :fields='fields' ></ejs-mention>
    </div>
`,

    data: function() {
        return {
            userData: [
                { Country: { Name: 'Australia' }, Code: { ID: 'AU' }},
                { Country: { Name: 'Bermuda' }, Code: { ID: 'BM' }},
                { Country: { Name: 'Canada'}, Code:{ ID: 'CA'} },
                { Country: { Name: 'Cameroon'}, Code:{ ID: 'CM'} },
                { Country: { Name: 'Denmark'}, Code:{ ID: 'DK' }},
                { Country: { Name: 'France'}, Code: { ID:'FR'} }
            ],
            fields: { text: 'Country.Name', value: 'Code.ID' },
            target: "#mentionElement"
        };
    }

});