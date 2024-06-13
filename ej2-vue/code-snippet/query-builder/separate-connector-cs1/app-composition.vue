<template>
    <div class="control-section">
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder ref="querybuilder" width="70%" :dataSource="dataSource" :rule="importRules" enableSeparateConnector="true">
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
</template>
<script setup>

import { QueryBuilderComponent as EjsQuerybuilder, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-querybuilder";
import { ref } from 'vue';

const querybuilder = ref(null);

const dataSource = employeeData;

const importRules = {
    condition: "",
    rules: [{ 
        label: "First Name", 
        field: "FirstName", 
        type: "string", 
        operator: "startswith", 
        value: "Andre", 
        condition: "and" 
    },
    { 
        label: "Last Name", 
        field: "LastName", 
        type: "string", 
        operator: "in", 
        value: ['Davolio', 'Buchanan'], 
        condition: "or" 
    },
    { 
        label: "Age", 
        field: "Age", 
        type: "number", 
        operator: "greaterthan", 
        value: 29, 
        condition: "and" 
    },
    {
        condition: "or", rules: [
        {   label: "Is Developer", 
            field: "IsDeveloper", 
            type: "boolean", 
            operator: "equal", 
            value: true, 
            condition: "and" 
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
    ]
};

const employeeData = [{
      'EmployeeID': 1,
      'FirstName': 'Nancy',
      'Title': 'Sales Representative',
      'TitleOfCourtesy': 'Ms.',
      'HireDate': '22/07/2001',
      'City': 'Seattle',
      'Country': 'USA',
      'Age': 41,
      'PrimaryFramework': 'Vue'
    },
    {
      'EmployeeID': 2,
      'FirstName': 'Andrew',
      'Title': 'Vice President',
      'TitleOfCourtesy': 'Dr.',
      'HireDate': '21/04/2003',
      'City': 'Tacoma',
      'Country': 'USA',
      'Age': 42,
      'PrimaryFramework': 'Angular'
    },
    {
      'EmployeeID': 3,
      'FirstName': 'Janet',
      'Title': 'Sales Representative',
      'TitleOfCourtesy': 'Ms.',
      'HireDate': '22/07/2001',
      'City': 'Kirkland',
      'Country': 'USA',
      'Age': 43,
      'PrimaryFramework': 'React'
    }];

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-querybuilder/styles/material.css";
    .e-query-builder {
        margin: 0 auto;
    }
</style>