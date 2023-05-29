
import Vue from 'vue';
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(ComboBoxPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-combobox id='combobox' :dataSource='sportsData' :autofill='autofill' placeholder='Select a game'></ejs-combobox>
    </div>
  </div>
`,

  data () {
    return {
      sportsData: ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis'],
      autofill : true,
    }
  }

});