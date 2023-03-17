
import Vue from "vue";
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(MentionPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type @ and tag user"></div>
        <ejs-mention id='defaultMention' :target='target' :dataSource='userData' :fields='fields' allowSpaces='true' ></ejs-mention>
    </div>
`,

        data: function() {
        return {
            target: "#mentionElement",
            userData: [
                { Name : "Andrew Fuller", ID : "1" },
                { Name : "Anne Dodsworth" , ID : "2" },
                { Name : "Janet Leverling" , ID :  "3" },
                { Name : "Laura Callahan" , ID : "4" },
                { Name : "Margaret Peacock" , ID : "5" }
            ],
            fields: {text:'Name'}
        };
    }

});