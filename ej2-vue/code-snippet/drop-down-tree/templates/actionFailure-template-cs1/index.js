
import Vue from 'vue';
import { DropDownTreePlugin } from "@syncfusion/ej2-vue-dropdowns";
import { DataManager,Query,ODataV4Adaptor } from "@syncfusion/ej2-data";
Vue.use(DropDownTreePlugin);
var remoteData = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svs',
  adaptor: new ODataV4Adaptor,
  crossDomain: true,
});
var failureVue = Vue.component("failureTemplate", {
  template: `<span class='action-failure'> Data fetch request fails</span>`,
  data() {
    return {
      data: {}
    };
  }
});
export default Vue.extend({
    data: function() {
        return {
          actionFailureTemplate : function(e) {
            return {
              template: failureVue
            }
          },
          fields: { dataSource: remoteData, value: 'id', text: 'name', parentValue:"pid", hasChildren: 'hasChild' },
            height: '200px'
        };
    },
});
new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-dropdowntree id='dropdowntree' :fields='fields' placeholder='Select an employee':actionFailureTemplate='actionFailureTemplate' ></ejs-dropdowntree>
    </div>
  </div>
`,

});