import Vue from 'vue';
import { MultiColumnComboBoxPlugin } from "@syncfusion/ej2-vue-multicolumn-combobox";
Vue.use(MultiColumnComboBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:500px;">
        <br>
        <ejs-multicolumncombobox id='multicolumn' :dataSource='empData' :fields='fields' placeholder='Select an employee'>
          <e-columns>
            <e-column field='Eimg' header='Photos' width='90' :template='columnTemplate1'></e-column>
            <e-column field='Name' header='Employee Name' width='160' :template='columnTemplate2'></e-column>
            <e-column field='DateofJoining' header='Date of Joining' width='165' :template='columnTemplate3'></e-column>
            <e-column field='Country' header='Country' width='100' :template='columnTemplate4'></e-column>
          </e-columns>
        </ejs-multicolumncombobox>
    </div>
  </div>
`,

  data () {
    return {
      empData: [ { "Name": "Andrew Fuller", "Eimg": 7, "Designation": "Team Lead", "Country": "England", "DateofJoining": "12/10/2010" },
        { "Name": "Anne Dodsworth", "Eimg": 1, "Designation": "Developer", "Country": "USA", "DateofJoining": "10/05/2000" },
        { "Name": "Janet Leverling", "Eimg": 3, "Designation": "HR", "Country": "Russia", "DateofJoining": "23/02/2016" },
        { "Name": "Laura Callahan", "Eimg": 2, "Designation": "Product Manager", "Country": "Ukraine", "DateofJoining": "30/1/2012" },
        { "Name": "Margaret Peacock", "Eimg": 6, "Designation": "Developer", "Country": "Egypt", "DateofJoining": "15/08/2014" },
        { "Name": "Michael Suyama", "Eimg": 9, "Designation": "Team Lead", "Country": "Africa", "DateofJoining": "27/07/2015" },
        { "Name": "Nancy Davolio", "Eimg": 4, "Designation": "Product Manager", "Country": "Australia", "DateofJoining": "24/05/2017" },
        { "Name": "Robert King", "Eimg": 8, "Designation": "Developer ", "Country": "India", "DateofJoining": "08/09/2018" },
        { "Name": "Steven Buchanan", "Eimg": 10, "Designation": "CEO", "Country": "Ireland", "DateofJoining": "05/03/2020" }
      ],
      fields: { text: 'Name', value: 'EmpID' }
    }
  },
  computed: {
    columnTemplate1() {
      return '<div><img class="empImage" src="https://ej2.syncfusion.com/demos/src/multicolumn-combobox/Employees/${Eimg}.png" alt="employee"/> </div>';
    },
    columnTemplate2() {
      return '<div class="ename"> ${Name} </div> <div class="job"> ${Designation} </div>';
    },
    columnTemplate3() {
      return '<div class="dateOfJoining"> ${DateofJoining} </div>';
    },
    columnTemplate4() {
      return '<div class="country"> ${Country} </div>';
    }

  }

});