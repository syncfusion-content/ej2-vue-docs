
import Vue from 'vue';
import { ListBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(ListBoxPlugin);


new Vue({
	el: '#app',
	template: `
  <div id='container' style="margin:10px auto 0; width:430px;">
  <div class="listbox1">
    <h4>Group A</h4>
      <ejs-listbox :dataSource='groupA' :fields="fields" scope="#listbox" :toolbarSettings="toolbarSettings" :allowDragAndDrop="true"></ejs-listbox>
  </div>
  <div class="listbox2">
    <h4>Group B</h4>
      <ejs-listbox id="listbox" :dataSource='groupB' :fields="fields" scope="#listbox" :allowDragAndDrop="true"></ejs-listbox>
  </div>
</div>  
`,

  data (){
    return {
groupA: [
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

groupB: [
    { "Name": "India", "Code": "IN" },
    { "Name": "Italy", "Code": "IT" },
    { "Name": "Japan", "Code": "JP" },
    { "Name": "Mexico", "Code": "MX" },
    { "Name": "Norway", "Code": "NO" },
    { "Name": "Poland", "Code": "PL" },
    { "Name": "Switzerland", "Code": "CH" },
    { "Name": "United Kingdom", "Code": "GB" },
    { "Name": "United States", "Code": "US" }
];
fields: { text: "Name" }
toolbarSettings: { items: ['moveUp', 'moveDown', 'moveTo', 'moveFrom', 'moveAllTo', 'moveAllFrom'] }
    }
  }

});