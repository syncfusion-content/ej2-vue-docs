
import Vue from "vue";
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(MentionPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <label id="comment" >Comments</label>
        <div id="mentionElement" placeholder = "Type @ and tag sport"></div>
        <ejs-mention id='defaultMention' :target='target' :fields='fields' :dataSource='userData' sortOrder='Descending'></ejs-mention>
    </div>
`,

    data: function() {
        return {
            target: "#mentionElement",
            userData : [
                { ID : "game1" ,Game : "Badminton"},
                { ID : "game2" ,Game : "Football" },
                { ID : "game3" ,Game : "Tennis"},
                { ID : "game4" ,Game : "Hockey"},
                { ID : "game5" ,Game : "Basketball"},
                { ID : "game6" ,Game : "Cricket"}
            ],
            fields : {text:'Game', value:'ID'}
        };
    }

});