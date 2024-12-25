
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";

Vue.use(ListViewPlugin);

var listVue = Vue.component("demo", {
  template: `<img id="listImage" src="https://ej2.syncfusion.com/documentation/code-snippet/listview/grid-layout-cs1/apple.png" alt="apple" />`,
  data() {
    return {
      data: {}
    };
  }
});


new Vue({
	el: '#app',
	template: `
  <div id="sample">
    <ejs-listview id='element' :dataSource='data' :template='listTemplate'>
    </ejs-listview>
  </div>
`,

  data: function() {
         return {
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    listTemplate: function () {
      return { template : listVue}
    },
  };
}

});