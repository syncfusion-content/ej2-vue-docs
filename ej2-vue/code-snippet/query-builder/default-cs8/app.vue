<template>
    <div class="control-section">
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder ref="querybuilder" width="70%" :dataSource="dataSource" :rule="importRules">
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
             <ejs-button cssClass="e-qb-button" :isPrimary="true" v-on:click="btnClick">Get Data</ejs-button>
        </div>
    </div>
</template>
<script>

import { QueryBuilderComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-querybuilder";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
name: "App",
components: {
"ejs-querybuilder":QueryBuilderComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-button":ButtonComponent,

},

    data: function() {
        return {
            dataSource: employeeData,
            values: ['Mr.', 'Mrs.'],
            importRules: {
                'condition': 'and',
                'rules': [{
                    'label': 'Employee ID',
                    'field': 'EmployeeID',
                    'type': 'number',
                    'operator': 'equal',
                    'value': 1
                }]
            }
        };
    },
      methods: {
    btnClick: function() {
        var dataManagerQuery = new Query().select(['EmployeeID', 'Title', 'City']);
        var fltrDataSource = [];
          new DataManager(employeeData).executeQuery(dataManagerQuery)
            .then((e) => {
                (e.result).forEach((data) => {
                      fltrDataSource.push(data);
                    //recieve the result data
                });
            });
    }
  }
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