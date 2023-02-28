
import Vue from "vue";
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(MentionPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type @ and tag user"></div>
        <ejs-mention id='defaultMention' :target='target' :dataSource='userData' :fields='fields' suggestionCount='8'></ejs-mention>
    </div>
`,

        data: function() {
        return {
            userData:[
                { Name: "Selma Rose", EmailId: "selma@gmail.com" },
                { Name: "Maria", EmailId: "maria@gmail.com" },
                { Name: "Russo Kay", EmailId: "russo@gmail.com" },
                { Name: "Robert", EmailId: "robert@gmail.com" },
                { Name: "Camden Kate",EmailId: "camden@gmail.com" },
                { Name: "Garth", EmailId: "garth@gmail.com" },
                { Name: "Andrew James", EmailId: "james@gmail.com" },
                { Name: "Olivia", EmailId: "olivia@gmail.com" },
                { Name: "Sophia", EmailId: "sophia@gmail.com" },
                { Name: "Margaret", EmailId: "margaret@gmail.com" },
                { Name: "Ursula Ann", EmailId: "ursula@gmail.com" },
                { Name: "Laura Grace", EmailId: "laura@gmail.com" },
                { Name: "Albert", EmailId: "albert@gmail.com" },
                { Name: "William", EmailId: "william@gmail.com" }
            ],
            fields: { text: 'Name' },
            target: "#mentionElement"
        };
    }

});