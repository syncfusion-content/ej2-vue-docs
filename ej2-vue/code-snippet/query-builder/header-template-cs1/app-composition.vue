<template>
    <div class="control-section">
            <ejs-querybuilder id="querybuilder" ref="querybuilder" :dataSource="dataSource" :rule="importRules" :headerTemplate="headerTemplate" enableNotCondition = true>
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

import { QueryBuilderComponent as EjsQuerybuilder, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-querybuilder';
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { getComponent, closest } from '@syncfusion/ej2-base';
import { CheckBoxComponent, ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { DropDownButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import {createApp, ref} from 'vue';

const app = createApp({});

const querybuilder = ref(null);

const dataSource = employeeData;
const importRules = {
    'condition': 'and', not: true,
    'rules': [{
        'label': 'Age',
        'field': 'Age',
        'type': 'number',
        'operator': 'equal',
        'value': 34
    },
    {
        'label': 'FirstName',
        'field': 'FirstName',
        'type': 'string',
        'operator': 'equal',
        'value': 'Nancy'
    },
    {
        'condition': 'or',
        'rules': [{
            'label': 'Age',
            'field': 'Age',
            'type': 'number',
            'operator': 'equal',
            'value': 34
        }]
    }]

};

const headTemplate = app.component('headerTemplate', {
    components: {
        'ejs-checkbox': CheckBoxComponent,
        'ejs-dropdownlist': DropDownListComponent,
        'ejs-dropdownbutton': DropDownButtonComponent,
        'ejs-button': ButtonComponent
    },
    template:
        `<div class="e-groupheader">
        <button  v-if="data.notCondition !== undefined" class='e-cb-wrapper'>
         <ejs-checkbox :id="notID" label='not' :checked="data.notCondition" :change="onChange"></ejs-checkbox>
        </button>
        <ejs-dropdownlist :id="ddlID"  cssClass="e-custom-group-btn"  :dataSource="ds" :fields="fields"  v-model="data.condition"  :change="conditionChange"></ejs-dropdownlist>
        <ejs-dropdownbutton :id = 'ddbID' :items='ddbitems' cssClass= "e-round e-small e-caret-hide e-addrulegroup e-add-btn" iconCss="e-icons e-add-icon" :select='onSelect'></ejs-dropdownbutton>
        <ejs-button v-if="data.ruleID !== 'querybuilder_group0'" :id="dltbtnID" class= "e-btn e-delete-btn e-lib e-small e-round e-icon-btn" iconCss="e-btn-icon e-icons e-delete-icon" v-on:click='btnClick'>
        </ejs-button>
        </div>`,
    data() {
        return {
            qryBldrObj: getComponent(document.getElementById('querybuilder'), 'query-builder'),
            ds:  [{'key': 'AND', 'value': 'and'},{'key': 'OR', 'value': 'or'}],
            fields: { text: 'key', value: 'value' },
            ddbitems:[
                {
                    text: 'AddGroup',
                    iconCss: 'e-icons e-add-icon e-addgroup'
                },
                {
                    text: 'AddCondition',
                    iconCss: 'e-icons e-add-icon e-addrule'
                }
            ]
        }
    },
    computed: {
        ddbID: function(){
            return `${this.data.ruleID}_addbtn`;
        },
        notID: function(){
            return `${this.data.ruleID}_notOption`;
        },
        ddlID: function(){
            return `${this.data.ruleID}_cndtn`;
        },
        dltbtnID: function(){
            return `${this.data.ruleID}_dltbtn`;
        }
    },
    methods: {
        onSelect: function(event){
            var addbtn = closest(event.element,'.e-dropdown-popup');
            var ddbId = addbtn.id; var ddb = ddbId.split('_');
            if (event.item.text === 'AddGroup') {
                this.qryBldrObj.addGroups([{condition: 'or', 'rules': [{}], not: false}], ddb[1]);
             } else if (event.item.text === 'AddCondition') {
                this.qryBldrObj.addRules([{}], ddb[1]);
            }
        },
        onChange: function(args){
            this.qryBldrObj.notifyChange(args.checked, args.event.target, 'not');
        },
        conditionChange: function(args){
            this.qryBldrObj.notifyChange(args.value, args.element, 'condition');
        },
        btnClick: function(args){
            this.qryBldrObj.deleteGroup(closest(args.target.offsetParent, '.e-group-container'));
        }
    }
});

const headerTemplate = function() {
    return {
        template: headTemplate
    }
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

.e-query-builder {
    margin: 0 auto;
}
.e-rule-template {
    padding-bottom: 12px;
}
.e-query-builder .e-add-btn {
    margin-left: 10px;
    margin-right: 10px;
}
.e-query-builder .cndtnbtn.e-control.e-dropdownlist.e-lib.e-input {
    padding-left: 10px;
}
.e-query-builder span.e-custom-group-btn {
    max-width: 100px;
    border-radius: 5px !important;
    border-width: 1px !important;
}
.e-query-builder .e-custom-group-btn.e-input-focus::before, .e-custom-group-btn.e-input-focus::after {
    background: transparent !important;
}
.e-query-builder .e-group-header .e-addrulegroup, .e-group-header .e-delete-btn {
    border: 1px solid grey !important;
}
.e-query-builder .e-group-header .e-addrulegroup:hover, .e-group-header .e-delete-btn:hover {
    border: 1px solid grey !important;
}
.e-query-builder .e-toggle{
    background: #317ab9;
    border-color: #317ab9;
    color: #fff;
}
.e-query-builder .e-cb-wrapper {
    margin-right: 5px;
    height: 32px;
    border-radius: 5px;
    border: 1px solid gray;
    background-color: white;
}
.e-query-builder .e-custom-group-btn{
    padding-left: 10px;
    height: 32px;
}
.e-control {
display: inline;
}
.e-query-builder div.e-rule-container{
   width: 800px;
}
</style>