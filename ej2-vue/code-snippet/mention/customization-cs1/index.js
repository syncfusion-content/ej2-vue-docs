
import Vue from "vue";
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(MentionPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type @ and tag user"></div>
        <ejs-mention id='defaultMention' :target='target' :dataSource='userData' :fields='fields' showMentionChar='true'></ejs-mention>
    </div>
`,

    data: function() {
        return {
            target: "#mentionElement",
            userData: [
                { Name : "Selma Rose", EmailId : "selma@gmail.com"},
                { Name : "Maria", EmailId : "maria@gmail.com" },
                { Name : "Russo kay", EmailId : "russo@gmail.com" },
                { Name : "Robert", EmailId : "robert@gmail.com" },
                { Name : "Garth", EmailId : "garth@gmail.com" }
            ],
            fields: {text:'Name'}
        };
    }

});