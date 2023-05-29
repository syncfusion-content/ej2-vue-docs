
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);
var itemVue = Vue.component("itemTemplate", {
  template: `<span class='foot'> Total list item: 5</span>`,
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
        <ejs-dropdownlist id='dropdownlist' placeholder='Select a game' :footerTemplate='footerTemplate' :dataSource='dataSource'></ejs-dropdownlist>
    </div>
  </div>
`,

  data (){
      var sportsData =  ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
    return {
        footerTemplate : function(e) {
          return {
            template: itemVue
          }
        },
        dataSource : sportsData,
    }
  }

});