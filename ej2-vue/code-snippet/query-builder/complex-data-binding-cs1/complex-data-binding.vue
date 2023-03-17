<template>
<div class="control-section">
<div>
    <table>
        <tr>
            <td> <ejs-button id="reset" class="e-control e-danger e-btn e-small"  v-on:click.native='onReset'>Reset</ejs-button> </td>
            <td> <ejs-button id="rule" class="e-control e-success e-btn e-small"  v-on:click.native='onSetsqlRules'>SetSqlRules</ejs-button> </td>
            <td> <ejs-button id="sql" class="e-control e-success e-btn e-small"  v-on:click.native='onSetrules' >SetRules</ejs-button> </td>
        </tr>
    </table>
</div>
 <ejs-querybuilder id="querybuilder" ref="querybuilder" :rule="importRules" separator ="." enableNotCondition = true>
                <e-columns>
                    <e-column field="Employee" label="Employee" :columns='columns1'/>
                    <e-column field="Name" label="Name" :columns="columns2" />
                    <e-column field='Country' label='Country' :columns="columns3"/>
                </e-columns>
</ejs-querybuilder>

</div>
</template>

<script>
import Vue from "vue";
import { QueryBuilderPlugin } from '@syncfusion/ej2-vue-querybuilder';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { getComponent, compile,closest } from '@syncfusion/ej2-base';
import { CheckBoxPlugin, ButtonPlugin, RadioButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { DropDownButtonPlugin } from "@syncfusion/ej2-vue-splitbuttons";

Vue.use(QueryBuilderPlugin);
Vue.use(DropDownListPlugin);
Vue.use(CheckBoxPlugin);
Vue.use(DropDownButtonPlugin);
Vue.use(ButtonPlugin);
Vue.use(RadioButtonPlugin);

export default {
    data: function() {
        return {
            importRules: {
                condition: 'and',
                rules: [{
                    label: 'ID',
                    field: 'Employee.ID',
                    type: 'string',
                    operator: 'equal',
                    value: 0
                },
                {
                    label: 'Last Name',
                    field: 'Name.LastName',
                    type: 'string',
                    operator: 'contains',
                    value: 'malan'
                },
                {
                    condition: 'or',
                    rules: [{
                        label: 'City',
                        field: 'Country.State.City',
                        operator: 'startswith',
                        type: 'string',
                        value: 'U'
                    },
                    {
                        label: 'Region',
                        field: 'Country.Region',
                        operator: 'endswith',
                        type: 'string',
                        value: 'c'
                    },
                    {
                        label: 'Name',
                        field: 'Country.Name',
                        operator: 'isnotempty'
                    }]
                }]
            },
            columns1: [
                { field: 'ID', label: 'ID', type: 'number'},
                { field: 'DOB', label: 'Date of birth', type: 'date'},
                { field: 'HireDate', label: 'Hire Date', type: 'date'},
                { field: 'Salary', label: 'Salary', type: 'number'},
                { field: 'Age', label: 'Age', type: 'number'},
                { field: 'Title', label: 'Title', type: 'string'}
            ],
            columns2: [
                 { field: 'FirstName', label: 'First Name', type: 'string'}, 
                 { field: 'LastName', label: 'Last Name', type: 'string'}
            ],
            columns3: [
                { field: 'State', label: 'State', columns : [
                    { field: 'City', label: 'City', type: 'string'}, 
                    { field: 'Zipcode', label: 'Zip Code', type: 'number'}] },
                { field: 'Region', label: 'Region', type: 'string'},
                { field: 'Name', label: 'Name', type: 'string'}
            ],
        };  
    },
     methods: {
        onReset: function(event){
            this.$refs.querybuilder.ej2Instances.reset();
        },
        onSetsqlRules: function(event){
            this.$refs.querybuilder.ej2Instances.setRulesFromSql("Employee.ID = 0 AND Name.LastName LIKE ('%malan%') AND (Country.State.City LIKE ('U%') AND Country.Region LIKE ('%c') AND Country.Name IS NOT EMPTY)");
        },
        onSetrules: function(event){
            this.$refs.querybuilder.ej2Instances.setRules(this.importRules);
        }  
    }
}


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
    .e-query-builder .e-group-body .e-horizontal-mode .e-rule-sub-filter{
        display: inline-block;
    }
    .e-query-builder .e-group-body .e-rule-container .e-rule-sub-filter{
        padding: 12px 0 12px 12px;
        width: auto;
    }
</style>