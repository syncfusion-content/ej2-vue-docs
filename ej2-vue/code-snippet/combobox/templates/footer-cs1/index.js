
import Vue from 'vue';
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(ComboBoxPlugin);

var footerVue = Vue.component("footerTemplate", {
  template: `<span class='foot'> Total list item: 4</span>`,
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
        <ejs-combobox id='combobox' :dataSource='sportsData' :footerTemplate='footerTemplate' placeholder="Select a game"></ejs-combobox>
    </div>
  </div>
`,

  data (){
      var data = ["BasketBall", "Cricket", "Football", "Golf"];
    return {
        sportsData: data,
        footerTemplate : function(e) {
          return {
            template: footerVue
          }
        }
    }
  }

});