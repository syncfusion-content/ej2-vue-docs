
import Vue from "vue";
import { QueryBuilderPlugin } from "@syncfusion/ej2-vue-querybuilder";
Vue.use(QueryBuilderPlugin);

new Vue({
	el: '#app',
	template: `
    <div class="control-section">
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder ref="querybuilder" width="100%" :dataSource="dataSource" :rule="importRules" :allowDragAndDrop="true">
                <e-columns>
                    <e-column field='EmployeeID' label='Employee ID' type='number' />
                    <e-column field='FirstName' label='First Name' type='string' />
                    <e-column field='LastName' label='Last Name' type='string' />
                    <e-column field='Age' label='Age' type='number' />
                    <e-column field='IsDeveloper' label='Is Developer' type='boolean' />
                    <e-column field='PrimaryFramework' label='Primary Framework' type='string' />
                    <e-column field='HireDate' label='Hire Date' type='date' format='MM/dd/yyyy' />
                    <e-column field='Country' label='Country' type='string' />
                </e-columns>
            </ejs-querybuilder>
        </div>
    </div>
`,

    data: function() {
        return {
            dataSource: employeeData,
            values: ['Mr.', 'Mrs.'],
            importRules: {
                condition: "and",
                rules: [{ 
                    label: "First Name", 
                    field: "FirstName", 
                    type: "string", 
                    operator: "startswith", 
                    value: "Andre"
                },
                { 
                    label: "Last Name", 
                    field: "LastName", 
                    type: "string", 
                    operator: "in", 
                    value: ['Davolio', 'Buchanan'] 
                },
                { 
                    label: "Age", 
                    field: "Age", 
                    type: "number", 
                    operator: "greaterthan", 
                    value: 29
                },
                {
                    condition: "or", rules: [
                    {   label: "Is Developer", 
                        field: "IsDeveloper", 
                        type: "boolean", 
                        operator: "equal", 
                        value: true
                    },
                    { 
                    label: "Primary Framework", 
                    field: "PrimaryFramework", 
                    type: "string", 
                    operator: "equal", 
                    value: "React" 
                }]
                },
                { 
                    label: "Hire Date", 
                    field: "HireDate", 
                    type: "date", 
                    operator: "between", 
                    value: ["11/22/2023", "11/30/2023"] },
                ],
            }
        };
    }
});
var employeeData = [{
    'EmployeeID': 1,
    'FirstName': 'Nancy',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'HireDate': '22/07/2001',
    'City': 'Seattle',
    'Country': 'USA'
  },
  {
    'EmployeeID': 2,
    'FirstName': 'Andrew',
    'Title': 'Vice President',
    'TitleOfCourtesy': 'Dr.',
    'HireDate': '21/04/2003',
    'City': 'Tacoma',
    'Country': 'USA'
  },
  {
    'EmployeeID': 3,
    'FirstName': 'Janet',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'HireDate': '22/07/2001',
    'City': 'Kirkland',
    'Country': 'USA'
}];