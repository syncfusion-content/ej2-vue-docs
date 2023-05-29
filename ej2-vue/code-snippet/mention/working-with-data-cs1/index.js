
import Vue from "vue";
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(MentionPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type @ and tag user"></div>
        <ejs-mention id='defaultMention' :target='target' :dataSource='userData'></ejs-mention>
    </div>
`,

    data: function() {
        return {
            target: "#mentionElement",
            userData: ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph']
        };
    }

});