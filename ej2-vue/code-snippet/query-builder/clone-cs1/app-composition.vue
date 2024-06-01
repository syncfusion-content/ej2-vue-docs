<template>
    <div class="control-section">
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder ref="querybuilder" width="70%" :dataSource="dataSource" :rule="importRules" :showButtons="{ cloneGroup: false, cloneRule: false }">
                <e-columns>
                    <e-column field='EmployeeID' label='Employee ID' type='number' />
                    <e-column field='FirstName' label='First Name' type='string' />
                    <e-column field='TitleOfCourtesy' label='Title Of Courtesy' type='boolean' :values="values"/>
                    <e-column field='Title' label='Title' type='string' />
                    <e-column field='HireDate' label='Hire Date' type='date' format='dd/MM/yyyy' />
                    <e-column field='Country' label='Country' type='string' />
                    <e-column field='City' label='City' type='string' />
                </e-columns>
            </ejs-querybuilder>
            <ejs-button cssClass="e-qb-button" :isPrimary="true" v-on:click="cloneGroupClick">Clone Group</ejs-button>
            <ejs-button cssClass="e-qb-button" :isPrimary="true" v-on:click="cloneRuleClick">Clone Rule</ejs-button>
        </div>
    </div>
</template>
<script setup>

import { QueryBuilderComponent as EjsQuerybuilder, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-querybuilder";
import { ButtonComponent as EjsButton} from '@syncfusion/ej2-vue-buttons';
import { ref } from 'vue';

const querybuilder = ref(null);

const dataSource = employeeData;
const values = ['Mr.', 'Mrs.'];

const importRules = {
    'condition': 'and',
    'rules': [{
        'label': 'Employee ID',
        'field': 'EmployeeID',
        'type': 'number',
        'operator': 'equal',
        'value': 1
    },
    {
        'label': 'Title',
        'field': 'Title',
        'type': 'string',
        'operator': 'equal',
        'value': 'Sales Manager'
    },
    {
        condition: "or", rules: [
        { 'label': 'Title',
            'field': 'Title',
            'type': 'string',
            'operator': 'equal',
            'value': 'Engineer' }
        ]
    }
    ]
};

const employeeData = [{
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

const cloneGroupClick = function() {
    querybuilder.value.ej2Instances.cloneGroup("group0", "group1", 1);
};

const cloneRuleClick = function() {
    querybuilder.value.ej2Instances.cloneRule("group0_rule0", "group0", 1);
};

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