
import Vue from 'vue';
import { MentionPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(MentionPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <label id="comment" >Comments</label>
    <div id="mentionElement" placeholder = "Type @ and tag user"></div>
    <ejs-mention id='defaultMention' :target='mentionTarget' :dataSource='userData'></ejs-mention>
  </div>
`,

  name: 'app',
  data: function() {
    return {
      mentionTarget: "#mentionElement",
      userData: ['Selma Rose', 'Garth', 'Robert', 'William', 'Joseph']
    };
  }

});