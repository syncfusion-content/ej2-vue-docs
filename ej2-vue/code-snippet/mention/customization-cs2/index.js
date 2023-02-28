
import Vue from "vue";
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(MentionPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type @ and tag country"></div>
        <ejs-mention id='defaultMention' :target='target' :dataSource='userData' :fields='fields' showMentionChar='true' :suffixText='suffixText'></ejs-mention>
    </div>
`,

        data: function() {
        return {
            target: "#mentionElement",
            suffixText: '&nbsp;',
            userData: [
                { Country : "Australia", Code : "AU" },
                { Country : "Bermuda" , Code : "BM" },
                { Country : "Canada" , Code :  "CA" },
                { Country : "Cameroon" , Code : "CM" },
                { Country : "Denmark" , Code : "DK" }
            ],
            fields: {text:'Country'}
        };
    }

});