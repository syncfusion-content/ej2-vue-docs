<template>
    <div class="control-section">
        <div id="listbox-selection">
            <ejs-querybuilder id="querybuilder" ref="querybuilder" :actionBegin="actionBegin" :dataSource="dataSource" :rule="importRules">
                <e-columns>
                    <e-column field="EmployeeID" label="Employee ID" type="number"/>
                    <e-column field="FirstName" label="First Name" type="string"/>
                    <e-column field="LastName" label="LastName" type="string"/>
                    <e-column field="Age" label="Age" type="number" :ruleTemplate='ageTemplate'/>
                    <e-column field='City' label='City' type='string' />
                    <e-column field='Country' label='Country' type='string' />
                </e-columns>
            </ejs-querybuilder>
        </div>
    </div>
</template>

<script setup>

import { QueryBuilderComponent as EjsQuerybuilder, ColumnDirective as EColumn, ColumnsDirective as EColumns } from '@syncfusion/ej2-vue-querybuilder';
import { SliderComponent } from "@syncfusion/ej2-vue-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { getComponent } from '@syncfusion/ej2-base';


import { createApp} from 'vue';

const app = createApp({});

const rlTemplate = app.component('ruleTemplate', {
    components: {
        "ejs-dropdownlist": DropDownListComponent,
        "ejs-slider": SliderComponent
    },
    template:
        `<div class="e-rule e-rule-template">
            <div class="e-rule-filter e-custom-filter">
                <ejs-dropdownlist :change='fieldChange' :value="data.rule.field" :dataSource="data.columns" :fields="data.fields">
                </ejs-dropdownlist>
            </div>
            <div>
                <div class="e-slider-value">
                    <ejs-slider :min="min" :max="max" ref="slider" :ticks="rangeticks" :change="valueChange" :value="value" :id="valueID">
                    </ejs-slider>
                </div>
                <div class="e-rule-btn">
                    <button class="e-removerule e-rule-delete e-css e-btn e-small e-round">
                        <span class="e-btn-icon e-icons e-delete-icon"/>
                    </button>
                </div>
            </div>
        </div>`,
    data() {
        return {
            qryBldrObj: getComponent(document.getElementById('querybuilder'), 'query-builder'),
            rangeticks: {
                placement: 'Before',
                largeStep: 5,
                smallStep: 1,
                showSmallTicks: true
            },
            min: 30,
            max: 50
        }
    },
    computed: {
        valueID: function() {
            return `${this.data.ruleID}_valuekey0`;
        },
        value: function() {
            var num = 30;
            if (this.data.rule.value !== '') {
                num = this.data.rule.value;
            }
            return num;
        }
    },
    methods: {
        fieldChange: function(args) {
            this.qryBldrObj.notifyChange(args.value, args.element, 'field');
        },
        valueChange: function(args) {
            if (args.isInteracted) {
                var elem = this.$refs.slider.$el;
                this.qryBldrObj.notifyChange(args.value, elem, 'value');
            }
        }
    }
});

const dataSource = employeeData;

const importRules =  {
    'condition': 'and',
    'rules': [{
        'label': 'Age',
        'field': 'Age',
        'type': 'number',
        'operator': 'greaterthanorequal',
        'value': 30
    }]
};

const ageTemplate = function(){
    return {
        template: rlTemplate
    }
};

const actionBegin = (args) => {
    args.rule.operator = 'greaterthanorequal';
    if (args.requestType === 'template-initialize') {
        if (args.rule.value === '') {
            args.rule.value = 30;
        }
    }
    if (args.requestType === 'template-create') {
        getComponent(document.getElementById(args.ruleID + '_valuekey0'), 'slider').refresh();
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
];

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
    .e-rule-btn {
        float: right;
        padding-top: 12px;
    }
    .e-rule-value-group {
        margin: 12px;
        border-top: 1px solid #e0e0e0;
        min-height: 40px;
    }
    .e-query-builder .e-slider-container.e-horizontal {
        padding: 0px 0 0 18px;
        height: 0;
    }
    .e-query-builder .e-hide {
        display: none;
    }
    .e-query-builder .e-custom-filter {
        width: 40% !important;
    }

    .e-query-builder .e-slider-container.e-horizontal .e-slider {
        top: calc(50% - 10px);
    }

    .e-query-builder .e-slider-value {
        width: 40% !important;
        padding: 12px 0 12px 0;
        display: inline-block;
    }

    .e-rule-table {
        margin: 20px 0 0 20px;
        border: solid 1px #e0e0e0;
        border-collapse: collapse;
        font-family: Roboto;
        width: 320px;
        height: 180px;
        overflow-y: auto;
    }
    .e-rule-table th,
    .e-rule-table td {
        border: solid #e0e0e0;
        border-width: 1px 0 0;
        display: table-cell;
        font-size: 14px;
        line-height: 20px;
        overflow: hidden;
        padding: 8px 21px;
        vertical-align: middle;
        white-space: nowrap;
        width: auto;
    }
</style>