import Vue from 'vue';
import { MultiColumnComboBoxPlugin } from "@syncfusion/ej2-vue-multicolumn-combobox";
Vue.use(MultiColumnComboBoxPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:500px;">
        <br>
        <ejs-multicolumncombobox id='multicolumn' :dataSource='empData(150)' :fields='fields' placeholder='Select an engineer' popupHeight='230px' :gridSettings='gridSettings' enableVirtualization='true'>
            <e-columns>
              <e-column field='TaskID' header='Employee ID' width='100'></e-column>
              <e-column field='Engineer' header='Name' width='140'></e-column>
              <e-column field='Designation' header='Designation' width='130'></e-column>
              <e-column field='Estimation' header='Estimation' width='120'></e-column>
              <e-column field='Status' header='Status' width='120'></e-column>
            </e-columns>
        </ejs-multicolumncombobox>
    </div>
  </div>
`,

  data () {
    return {
      gridSettings: { rowHeight: 40 },
      fields: { text: 'Name', value: 'EmpID' }
    }
  },
  methods: {
    empData: function(count) {
      let names = ["John", "Alice", "Bob", "Mario Pontes", "Yang Wang", "Michael", "Nancy", "Robert King"];
      let hours = [8, 12, 16];
      let status = ["Pending", "Completed", "In Progress"];
      let designation = ["Engineer", "Manager", "Tester"];
      let result = [];
      for (let i = 0; i < count; i++) {
          result.push({
              TaskID: i + 1,
              Engineer: names[Math.floor(Math.random() * names.length)],
              Designation: designation[Math.floor(Math.random() * designation.length)],
              Estimation: hours[Math.floor(Math.random() * hours.length)],
              Status: status[Math.floor(Math.random() * status.length)]
          });
      }
      return result;
    }
  }

});