

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
            <ejs-button cssClass="e-qb-button" :isPrimary="true" v-on:click.native="cloneGroupClick">Clone Group</ejs-button>
            <ejs-button cssClass="e-qb-button" :isPrimary="true" v-on:click.native="cloneRuleClick">Clone Rule</ejs-button>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { QueryBuilderPlugin } from "@syncfusion/ej2-vue-querybuilder";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
Vue.use(QueryBuilderPlugin);
Vue.use(ButtonPlugin);

export default {
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
            }
        };
    },
    methods: {
        cloneGroupClick: function() {
            this.$refs.querybuilder.ej2Instances.cloneGroup("querybuilder_group0", "querybuilder_group1", 1);
        },
        cloneRuleClick: function() {
            this.$refs.querybuilder.ej2Instances.cloneRule("querybuilder_group0_rule0", "querybuilder_group0", 1);
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
</style>


