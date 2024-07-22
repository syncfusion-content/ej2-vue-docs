
import Vue from "vue";
import { GridPlugin, VirtualScroll, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";

Vue.use(GridPlugin);

let names = ['TOM', 'Hawk', 'Jon', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Gunther', 'Ross', 'Geller', 'Joey', 'Bing', 'Tribbiani', 'Janice', 'Bong', 'Perk', 'Green', 'Ken', 'Adams'];
let hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let designation = ['Manager', 'Engineer 1', 'Engineer 2', 'Developer', 'Tester'];
let status = ['Completed', 'Open', 'In Progress', 'Review', 'Testing']
let data = (count) => {
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push({
          TaskID: i + 1,
          Engineer: names[Math.round(Math.random() * names.length)] || names[0],
          Designation: designation[Math.round(Math.random() * designation.length)] || designation[0],
          Estimation: hours[Math.round(Math.random() * hours.length)] || hours[0],
          Status: status[Math.round(Math.random() * status.length)] || status[0]
        });
    }
    return result;
};


new Vue({
	el: '#app',
	template: `
  <div id="app">
  <ejs-grid :dataSource='data' height=300 :enableVirtualization='true' :pageSettings='options' :editSettings='editSettings' :toolbar='toolbar'>
      <e-columns>
          <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=100 :isPrimaryKey='true' :validationRules='rules'></e-column>
          <e-column field='Engineer' width=100></e-column>
          <e-column field='Designation' width=140 editType='dropdownedit' :validationRules='rules'></e-column>
          <e-column field='Estimation' textAlign='Right' width=110 editType='numericedit' :validationRules='rules'></e-column>
          <e-column field='Status' width=140 editType='dropdownedit'></e-column>
      </e-columns>
  </ejs-grid>
</div>
`,

data() {
  return {
    data: data(1000),
    options: { pageSize: 50 },
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    rules: { required: true },
  };
},
provide: {
    grid: [VirtualScroll, Toolbar, Edit]
}

});