<template>
    <div class="control-section">
        <div class="col-lg-12 querybuilder-control">
            <ejs-querybuilder width="70%" :dataSource="data" :rule="importRules">
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
<script>

import { QueryBuilderComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-querybuilder";
import { DataManager, ODataAdaptor } from "@syncfusion/ej2-data";


export default {
name: "App",
components: {
"ejs-querybuilder":QueryBuilderComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

    data(){
        return {
            values: ['Mr.', 'Mrs.'],
            data: new DataManager({
            url: "https://services.syncfusion.com/vue/production/api/Employees",
            adaptor: new ODataAdaptor(),
            crossDomain: true
          }),
            importRules: {
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
                }]
            }
        };
    }
}
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-vue-querybuilder/styles/material.css";
    .e-query-builder {
        margin: 0 auto;
    }
</style>