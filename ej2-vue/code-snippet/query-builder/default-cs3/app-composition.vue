<template>
    <div class="control-section">
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder ref="querybuilder" width="70%" :dataSource="dataSource" allowValidation="true">
                <e-columns>
                    <e-column field='EmployeeID' label='Employee ID' type='number' :validation="validateRule" />
                    <e-column field='FirstName' label='First Name' type='string' />
                    <e-column field='TitleOfCourtesy' label='Title Of Courtesy' type='boolean' :values="values"/>
                    <e-column field='Title' label='Title' type='string' :validation="validateRule" />
                    <e-column field='HireDate' label='Hire Date' type='date' format='dd/MM/yyyy'  />
                    <e-column field='Country' label='Country' type='string' :validation="validateRule"/>
                    <e-column field='City' label='City' type='string' :validation="validateRule"/>
                </e-columns>
            </ejs-querybuilder>
             <ejs-button cssClass="e-qb-button" :isPrimary="true" v-on:click="btnClick">Validate Fields</ejs-button>
        </div>
    </div>
</template>
<script setup>

import { QueryBuilderComponent as EjsQuerybuilder, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-querybuilder";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { ref } from 'vue';

const querybuilder = ref(null);

const dataSource = employeeData;

const values = ['Mr.', 'Mrs.'];

const validateRule = { isRequired: true };

const btnClick = function() {
 querybuilder.value.ej2_instances[0].validateFields();
}

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
    .e-qb-button {
        margin: 2% 1% 0 15%;
    }
</style>