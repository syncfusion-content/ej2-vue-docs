<template>
    <div class="control-section">
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder width="30%" :dataSource="dataSource" :rule="importRules" :summaryView="true">
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
        </div>
    </div>
</template>
<script setup>

import { QueryBuilderComponent as EjsQuerybuilder, ColumnsDirective as EColumns, ColumnDirective as EColumn } from "@syncfusion/ej2-vue-querybuilder";
import { employeeData } from './datasource.js';

const dataSource = employeeData;
const values = ['Mr.', 'Mrs.'];

const importRules = {
    'condition': 'and',
    'rules': [{
        'label': 'EmployeeID',
        'field': 'EmployeeID',
        'type': 'number',
        'operator': 'notequal',
        'value': '5'
    },
    {
        'condition': 'or',
        'rules': [{
            'label': 'Title Of Courtesy',
                'field': 'TitleOfCourtesy',
                'type': 'string',
                'operator': 'equal',
                'value': 'Mr.'
        },
        {
            'label': 'Country',
            'field': 'Country',
            'type': 'string',
            'operator': 'equal',
            'value': 'USA'
        },
        {
        'condition': 'and',
            'rules': [{
                'label': 'City',
                'field': 'City',
                'type': 'string',
                'operator': 'equal',
                'value': 'London'
            }]
        }]
    }]
};

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-vue-querybuilder/styles/material.css";
    .e-query-builder {
        margin: 0 auto;
    }
</style>