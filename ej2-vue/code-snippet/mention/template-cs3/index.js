
import Vue from "vue";
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(MentionPlugin);


new Vue({
	el: '#app',
	template: `
        <div id="app">
            <label id="comment" >Comments</label>
            <div id="mentionElement" placeholder = "Type @ and tag user"></div>
            <ejs-mention id='defaultMention' :target='target' :dataSource=[]  :noRecordsTemplate='noRecordsTemplate' ></ejs-mention>
        </div>
`,

    data: function() {
        return {
            noRecordsTemplate:"<span class='norecord'> NO DATA AVAILABLE</span>",
            target: "#mentionElement"
        };
    }

});