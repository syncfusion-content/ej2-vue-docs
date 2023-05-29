
import Vue from 'vue';
import { ListBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(ListBoxPlugin);


new Vue({
	el: '#app',
	template: `
  <div id='container' style="margin:10px auto 0; width:250px;">
      <ejs-listbox :dataSource='data' :allowDragAndDrop="true" :fields="fields"></ejs-listbox>
  </div>
`,

  data (){
    return {
       data: [
    { "Name": "Australia", "Code": "AU" },
    { "Name": "Bermuda", "Code": "BM" },
    { "Name": "Canada", "Code": "CA" },
    { "Name": "Cameroon", "Code": "CM" },
    { "Name": "Denmark", "Code": "DK" },
    { "Name": "France", "Code": "FR" },
    { "Name": "Finland", "Code": "FI" },
    { "Name": "Germany", "Code": "DE" },
    { "Name": "Hong Kong", "Code": "HK" }
];
fields: { text: "Name" }
    }
  }

});