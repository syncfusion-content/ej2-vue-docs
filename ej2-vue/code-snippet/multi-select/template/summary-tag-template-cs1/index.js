
import Vue from 'vue';
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(MultiSelectPlugin);

// Large dataset sample with 15000 records and CheckBox mode with virtualization
var records = [];

for (var i = 1; i <= 15000; i++) {
    var item = {
        id: 'id' + i,
        text: 'Item ' + i,
    };
    records.push(item);
}

var value = records.map(function (item) { return item.text; });

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-multiselect id='multiselect' :dataSource='records' :fields='fields' mode='CheckBox' :enableVirtualization='true' :allowFiltering='true' :showDropDownIcon='true' :showSelectAll='true' :maximumSelectionLength='15000' :summaryTagCount='5' :summaryTagTemplate='summaryTagTemplate' :value='value' placeholder="Select items"></ejs-multiselect>
    </div>
  </div>
`,

  data (){
    return {
      records : records,
      fields : { text: 'id', value: 'text' },
      summaryTagTemplate : '${selectedCount} items selected',
      value : value
      }
  }

});