
import Vue from 'vue';
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { isNullOrUndefined } from "@syncfusion/ej2-base";
Vue.use(MultiSelectPlugin);

var footerVue = Vue.component("footerTemplate", {
  template: `<span class='foot'></span>`,
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
        <ejs-multiselect id='multiselect' :dataSource='sportsData' :footerTemplate='footerTemplate' :open='onPopupOpen' :select='updateDataCount' placeholder="Select a game"></ejs-multiselect>
    </div>
  </div>
`,

  data (){
    var data = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'];
    return {
      sportsData: data,
      footerTemplate : function(e) {
        return {
          template: footerVue
        }
      }
    }
  },
  methods: {
    updateDataCount: function() {
      var remainingDatasCount = document.querySelectorAll('.e-list-item').length - document.querySelectorAll('.e-hide-listitem').length;
      if (remainingDatasCount !== 0) {
        document.querySelector('.foot').innerText = "Total list item: " + (remainingDatasCount -1);
      }
    },
    onPopupOpen: function(e) {
        e.popup.element.querySelector('.foot').innerText  = "Total list item: " + (5- document.querySelectorAll('.e-chips-collection .e-chips').length);
    }
  }

});