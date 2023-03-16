
import Vue from 'vue';
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(ComboBoxPlugin);

var footerVue = Vue.component("noRecordsTemplate", {
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
        <ejs-combobox id='combobox' :dataSource='sportsData' :noRecordsTemplate='noRecordsTemplate' placeholder="Select an item"></ejs-combobox>
    </div>
  </div>
`,

  data (){
      var data = [];
    return {
        sportsData: data,
        noRecordsTemplate : function(e) {
          return {
            template: footerVue
          }
        }
    }
  }

});