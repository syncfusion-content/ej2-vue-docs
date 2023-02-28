
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);
var itemVue = Vue.component("noRecordsTemplate", {
  template: `<span class='norecord'> NO DATA AVAILABLE</span>`,
  data() {
    return {
      data: {}
    };
  }
});

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-dropdownlist id='dropdownlist' placeholder='Select an item' :noRecordsTemplate='noRecordsTemplate' :dataSource='dataSource'></ejs-dropdownlist>
    </div>
  </div>
`,

    data (){
      var sportsData =  [];
    return {
        noRecordsTemplate : function (e) {
          return {
            template: itemVue
          }
        },
        dataSource : sportsData
    }
  }

});