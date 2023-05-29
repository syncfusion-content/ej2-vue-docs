
import Vue from 'vue';
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";

Vue.use(MultiSelectPlugin);

var footerVue = Vue.component("footerTemplate", {
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
        <ejs-multiselect id='multiselect' :dataSource='data' :noRecordsTemplate='noRecordsTemplate' placeholder="Select an item"></ejs-multiselect>
    </div>
  </div>
`,

  data (){
    return {
      data: [],
      noRecordsTemplate : function(e) {
        return {
          template: footerVue
        }
      }
    }
  }

});