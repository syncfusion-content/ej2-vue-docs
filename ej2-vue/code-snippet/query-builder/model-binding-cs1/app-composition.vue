<template>
    <div class="control-section">
            <ejs-querybuilder id="querybuilder" ref="querybuilder" :dataSource="dataSource" :rule="importRules" enableNotCondition = true :fieldModel = "{allowFiltering: true, popupHeight: '500px'}" :operatorModel = "{allowFiltering: true, popupHeight: '400px'}" :valueModel = "{numericTextBoxModel:
        {
            cssClass: 'e-custom'
        },
        multiSelectModel: {
            cssClass: 'e-custom'
        },
        datePickerModel: {
            cssClass: 'e-custom'
        },
        textBoxModel: {
            cssClass: 'e-custom'
        },
        radioButtonModel: {
            cssClass: 'e-custom'
        }}">
                <e-columns>
                    <e-column field="EmployeeID" label="Employee ID" type="number"/>
                    <e-column field="FirstName" label="First Name" type="string"/>
                    <e-column field="Age" label="Age" type="number" />
                    <e-column field='City' label='City' type='string' />
                    <e-column field='Country' label='Country' type='string' />
                </e-columns>
            </ejs-querybuilder>
            </div>
  </template>

<script setup>

import { QueryBuilderComponent as EjsQuerybuilder, ColumnDirective as EColumn, ColumnsDirective as EColumns } from '@syncfusion/ej2-vue-querybuilder';

const dataSource = employeeData;

const importRules = {
    'condition': 'and',
    'rules': [{
        'label': 'Employee ID',
        'field': 'EmployeeID',
        'type': 'number',
        'operator': 'equal',
        'value': 1001
    }]
};


var employeeData = [
    { 'EmployeeID': 1, 'FirstName': 'Nancy', 'Age': 31, 'City': 'Seattle', 'Country': 'USA' },
    { 'EmployeeID': 2, 'FirstName': 'Andrew', 'Age': 32, 'City': 'Tacoma', 'Country': 'USA' },
    { 'EmployeeID': 3, 'FirstName': 'Janet', 'Age': 33, 'City': 'Kirkland', 'Country': 'USA' },
    { 'EmployeeID': 4, 'FirstName': 'Margaret', 'Age': 33, 'City': 'Redmond', 'Country': 'USA' },
    { 'EmployeeID': 5, 'FirstName': 'Steven', 'Age': 34, 'City': 'London', 'Country': 'UK' },
    { 'EmployeeID': 6, 'FirstName': 'Michael', 'Age': 35, 'City': 'London', 'Country': 'UK' },
    { 'EmployeeID': 7, 'FirstName': 'Robert', 'Age': 36, 'City': 'London', 'Country': 'UK' },
    { 'EmployeeID': 8, 'FirstName': 'Laura', 'Age': 37, 'City': 'Seattle', 'Country': 'USA' },
    { 'EmployeeID': 9, 'FirstName': 'Anne', 'Age': 38, 'City': 'London', 'Country': 'UK' }
]

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

</style>