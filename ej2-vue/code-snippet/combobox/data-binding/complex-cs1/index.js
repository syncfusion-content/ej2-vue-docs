
import Vue from 'vue';
import { ComboBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(ComboBoxPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-combobox id='combobox' :dataSource='countriesData' :fields='fields' placeholder="Select a Country"></ejs-combobox>
    </div>
  </div>
`,

  data (){
    return {
      countriesData: [
            { Country: { Name: 'Australia' }, Code: { Id: 'AU' }},
            { Country: { Name: 'Bermuda' },Code: { Id: 'BM' }},
            { Country:{ Name: 'Canada'}, Code:{ Id: 'CA'} },
            { Country:{Name: 'Cameroon'}, Code:{ Id: 'CM'} },
            { Country:{Name: 'Denmark'}, Code:{ Id: 'DK' }},
            { Country:{Name: 'France'}, Code: { Id:'FR'} }
        ],
     fields : { text: 'Country.Name', value: 'Code.Id' }
    }
  }

});